const { executeQuery } = require('../config/database');

class Contact {
  constructor(name, email, message, ipAddress = null, userAgent = null) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.ipAddress = ipAddress;
    this.userAgent = userAgent;
  }

  // 새 연락처 저장
  async save() {
    try {
      const query = `
        INSERT INTO contacts (name, email, message, ip_address, user_agent)
        VALUES (?, ?, ?, ?, ?)
      `;
      const params = [this.name, this.email, this.message, this.ipAddress, this.userAgent];
      
      const result = await executeQuery(query, params);
      
      // 저장된 연락처 반환
      return await this.findById(result.insertId);
    } catch (error) {
      throw new Error(`연락처 저장 실패: ${error.message}`);
    }
  }

  // ID로 연락처 찾기
  static async findById(id) {
    try {
      const query = 'SELECT * FROM contacts WHERE id = ?';
      const results = await executeQuery(query, [id]);
      
      return results.length > 0 ? results[0] : null;
    } catch (error) {
      throw new Error(`연락처 조회 실패: ${error.message}`);
    }
  }

  // 모든 연락처 조회 (페이지네이션 포함)
  static async findAll(page = 1, limit = 10, status = null) {
    try {
      const offset = (page - 1) * limit;
      
      let query = 'SELECT * FROM contacts';
      let countQuery = 'SELECT COUNT(*) as total FROM contacts';
      const params = [];
      const countParams = [];

      // 상태 필터링
      if (status) {
        query += ' WHERE status = ?';
        countQuery += ' WHERE status = ?';
        params.push(status);
        countParams.push(status);
      }

      query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);

      // 데이터와 총 개수 조회
      const [contacts, totalResult] = await Promise.all([
        executeQuery(query, params),
        executeQuery(countQuery, countParams)
      ]);

      const total = totalResult[0].total;
      const totalPages = Math.ceil(total / limit);

      return {
        contacts,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          itemsPerPage: limit,
          hasNext: page < totalPages,
          hasPrev: page > 1
        }
      };
    } catch (error) {
      throw new Error(`연락처 목록 조회 실패: ${error.message}`);
    }
  }

  // 이메일로 연락처 찾기
  static async findByEmail(email) {
    try {
      const query = 'SELECT * FROM contacts WHERE email = ? ORDER BY created_at DESC';
      const results = await executeQuery(query, [email]);
      
      return results;
    } catch (error) {
      throw new Error(`이메일 조회 실패: ${error.message}`);
    }
  }

  // 연락처 상태 업데이트
  static async updateStatus(id, status) {
    try {
      const validStatuses = ['new', 'read', 'replied'];
      if (!validStatuses.includes(status)) {
        throw new Error('유효하지 않은 상태입니다');
      }

      const query = 'UPDATE contacts SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
      await executeQuery(query, [status, id]);
      
      return await this.findById(id);
    } catch (error) {
      throw new Error(`상태 업데이트 실패: ${error.message}`);
    }
  }

  // 연락처 삭제
  static async deleteById(id) {
    try {
      const query = 'DELETE FROM contacts WHERE id = ?';
      const result = await executeQuery(query, [id]);
      
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`연락처 삭제 실패: ${error.message}`);
    }
  }

  // 통계 조회
  static async getStats() {
    try {
      const queries = {
        total: 'SELECT COUNT(*) as count FROM contacts',
        new: 'SELECT COUNT(*) as count FROM contacts WHERE status = "new"',
        read: 'SELECT COUNT(*) as count FROM contacts WHERE status = "read"',
        replied: 'SELECT COUNT(*) as count FROM contacts WHERE status = "replied"',
        today: 'SELECT COUNT(*) as count FROM contacts WHERE DATE(created_at) = CURDATE()',
        thisWeek: 'SELECT COUNT(*) as count FROM contacts WHERE YEARWEEK(created_at) = YEARWEEK(NOW())',
        thisMonth: 'SELECT COUNT(*) as count FROM contacts WHERE YEAR(created_at) = YEAR(NOW()) AND MONTH(created_at) = MONTH(NOW())'
      };

      const results = await Promise.all(
        Object.entries(queries).map(async ([key, query]) => {
          const result = await executeQuery(query);
          return [key, result[0].count];
        })
      );

      return Object.fromEntries(results);
    } catch (error) {
      throw new Error(`통계 조회 실패: ${error.message}`);
    }
  }

  // 최근 연락처 조회
  static async getRecent(limit = 5) {
    try {
      const query = `
        SELECT id, name, email, LEFT(message, 100) as preview, status, created_at
        FROM contacts 
        ORDER BY created_at DESC 
        LIMIT ?
      `;
      
      return await executeQuery(query, [limit]);
    } catch (error) {
      throw new Error(`최근 연락처 조회 실패: ${error.message}`);
    }
  }

  // 검색
  static async search(keyword, page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      const searchPattern = `%${keyword}%`;
      
      const query = `
        SELECT * FROM contacts 
        WHERE name LIKE ? OR email LIKE ? OR message LIKE ?
        ORDER BY created_at DESC 
        LIMIT ? OFFSET ?
      `;
      
      const countQuery = `
        SELECT COUNT(*) as total FROM contacts 
        WHERE name LIKE ? OR email LIKE ? OR message LIKE ?
      `;

      const params = [searchPattern, searchPattern, searchPattern];
      const [contacts, totalResult] = await Promise.all([
        executeQuery(query, [...params, limit, offset]),
        executeQuery(countQuery, params)
      ]);

      const total = totalResult[0].total;
      const totalPages = Math.ceil(total / limit);

      return {
        contacts,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems: total,
          itemsPerPage: limit,
          hasNext: page < totalPages,
          hasPrev: page > 1
        },
        keyword
      };
    } catch (error) {
      throw new Error(`검색 실패: ${error.message}`);
    }
  }
}

module.exports = Contact;