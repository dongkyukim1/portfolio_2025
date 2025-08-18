const db = require('../config/database');

class Visitor {
  // 방문자 테이블 생성
  static async createTable() {
    const createDailyVisitsTable = `
      CREATE TABLE IF NOT EXISTS daily_visits (
        id INT AUTO_INCREMENT PRIMARY KEY,
        visit_date DATE NOT NULL UNIQUE,
        visit_count INT DEFAULT 0,
        unique_visitors INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        INDEX idx_visit_date (visit_date),
        INDEX idx_created_at (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    const createVisitorIpsTable = `
      CREATE TABLE IF NOT EXISTS visitor_ips (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip_address VARCHAR(45) NOT NULL,
        visit_date DATE NOT NULL,
        first_visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_agent TEXT,
        
        UNIQUE KEY unique_ip_date (ip_address, visit_date),
        INDEX idx_visit_date (visit_date),
        INDEX idx_ip_address (ip_address)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    try {
      const connection = await db.getConnection();
      await connection.execute(createDailyVisitsTable);
      await connection.execute(createVisitorIpsTable);
      connection.release();
      console.log('✅ 방문자 테이블 생성 완료');
    } catch (error) {
      console.error('❌ 방문자 테이블 생성 실패:', error);
      throw error;
    }
  }

  // 오늘 방문자 수 증가
  static async incrementTodayVisits(userIP, userAgent = null) {
    const today = new Date().toISOString().split('T')[0];
    const connection = await db.getConnection();
    
    try {
      await connection.beginTransaction();
      
      // 1. 일반 방문자 수 증가
      await connection.execute(`
        INSERT INTO daily_visits (visit_date, visit_count) 
        VALUES (?, 1) 
        ON DUPLICATE KEY UPDATE 
        visit_count = visit_count + 1
      `, [today]);
      
      // 2. 유니크 방문자 처리 (IP가 있는 경우)
      if (userIP) {
        const [result] = await connection.execute(`
          INSERT IGNORE INTO visitor_ips (ip_address, visit_date) 
          VALUES (?, ?)
        `, [userIP, today]);
        
        // 새로운 유니크 방문자인 경우
        if (result.affectedRows > 0) {
          await connection.execute(`
            UPDATE daily_visits 
            SET unique_visitors = unique_visitors + 1 
            WHERE visit_date = ?
          `, [today]);
        }
      }
      
      await connection.commit();
      
      // 결과 반환
      const stats = await this.getTodayVisits();
      return stats;
      
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // 오늘 방문자 수 조회
  static async getTodayVisits() {
    const today = new Date().toISOString().split('T')[0];
    const connection = await db.getConnection();
    
    try {
      const [rows] = await connection.execute(`
        SELECT visit_count, unique_visitors 
        FROM daily_visits 
        WHERE visit_date = ?
      `, [today]);
      
      return rows[0] || { visit_count: 0, unique_visitors: 0 };
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  // 월별 통계 조회
  static async getMonthlyStats(year, month) {
    const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const endDate = `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01`;
    
    const connection = await db.getConnection();
    
    try {
      const [rows] = await connection.execute(`
        SELECT 
          visit_date,
          visit_count,
          unique_visitors,
          DATE_FORMAT(visit_date, '%Y-%m-%d') as formatted_date,
          DAYOFWEEK(visit_date) as day_of_week
        FROM daily_visits 
        WHERE visit_date >= ? AND visit_date < ?
        ORDER BY visit_date DESC
      `, [startDate, endDate]);
      
      // 총합 계산
      const totalVisits = rows.reduce((sum, row) => sum + row.visit_count, 0);
      const totalUniqueVisitors = rows.reduce((sum, row) => sum + row.unique_visitors, 0);
      
      return {
        year,
        month,
        totalVisits,
        totalUniqueVisitors,
        dailyStats: rows,
        recordCount: rows.length
      };
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  // 전체 통계 조회
  static async getAllTimeStats() {
    const connection = await db.getConnection();
    
    try {
      const [totalRows] = await connection.execute(`
        SELECT 
          SUM(visit_count) as total_visits,
          SUM(unique_visitors) as total_unique_visitors,
          COUNT(*) as total_days,
          MIN(visit_date) as first_visit_date,
          MAX(visit_date) as last_visit_date
        FROM daily_visits
      `);
      
      const [recentRows] = await connection.execute(`
        SELECT 
          visit_date,
          visit_count,
          unique_visitors
        FROM daily_visits 
        ORDER BY visit_date DESC 
        LIMIT 7
      `);
      
      return {
        total: totalRows[0],
        recentWeek: recentRows
      };
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }

  // 한달 이전 데이터 삭제
  static async cleanupOldData() {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const cutoffDate = oneMonthAgo.toISOString().split('T')[0];
    
    const connection = await db.getConnection();
    
    try {
      await connection.beginTransaction();
      
      // 1. 오래된 일별 통계 삭제
      const [dailyResult] = await connection.execute(`
        DELETE FROM daily_visits 
        WHERE visit_date < ?
      `, [cutoffDate]);
      
      // 2. 오래된 IP 기록 삭제
      const [ipResult] = await connection.execute(`
        DELETE FROM visitor_ips 
        WHERE visit_date < ?
      `, [cutoffDate]);
      
      await connection.commit();
      
      console.log(`🧹 데이터 정리 완료: 일별통계 ${dailyResult.affectedRows}건, IP기록 ${ipResult.affectedRows}건 삭제`);
      
      return {
        deletedDailyRecords: dailyResult.affectedRows,
        deletedIpRecords: ipResult.affectedRows,
        cutoffDate
      };
      
    } catch (error) {
      await connection.rollback();
      console.error('❌ 데이터 정리 중 오류:', error);
      throw error;
    } finally {
      connection.release();
    }
  }

  // IP 기반 방문 기록 조회 (관리자용)
  static async getVisitorHistory(limit = 100) {
    const connection = await db.getConnection();
    
    try {
      const [rows] = await connection.execute(`
        SELECT 
          ip_address,
          visit_date,
          first_visit_time
        FROM visitor_ips 
        ORDER BY first_visit_time DESC 
        LIMIT ?
      `, [limit]);
      
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}

module.exports = Visitor;
