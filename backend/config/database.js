const mysql = require('mysql2/promise');
require('dotenv').config();

// 데이터베이스 연결 설정
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'portfolio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true
};

// 연결 풀 생성
const pool = mysql.createPool(dbConfig);

// 데이터베이스 연결 테스트
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL 데이터베이스 연결 성공!');
    console.log(`📊 연결된 데이터베이스: ${dbConfig.database}`);
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ MySQL 데이터베이스 연결 실패:', error.message);
    return false;
  }
}

// 데이터베이스 및 테이블 초기화
async function initializeDatabase() {
  try {
    // 데이터베이스 생성 (존재하지 않는 경우)
    const tempConnection = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password
    });

    await tempConnection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
    console.log(`✅ 데이터베이스 '${dbConfig.database}' 준비 완료`);
    await tempConnection.end();

    // 테이블 생성
    await createTables();
    
    // 방문자 모델 테이블 생성
    const Visitor = require('../models/Visitor');
    await Visitor.createTable();
    
  } catch (error) {
    console.error('❌ 데이터베이스 초기화 실패:', error.message);
    throw error;
  }
}

// 테이블 생성
async function createTables() {
  try {
    // 연락처 테이블 생성
    const createContactsTable = `
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        status ENUM('new', 'read', 'replied') DEFAULT 'new',
        INDEX idx_email (email),
        INDEX idx_created_at (created_at),
        INDEX idx_status (status)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    // 방문자 통계 테이블 생성
    const createVisitorsTable = `
      CREATE TABLE IF NOT EXISTS visitors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip_address VARCHAR(45) NOT NULL,
        user_agent TEXT,
        referrer VARCHAR(500),
        page_visited VARCHAR(255),
        country VARCHAR(100),
        city VARCHAR(100),
        visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        session_id VARCHAR(255),
        INDEX idx_ip (ip_address),
        INDEX idx_visit_time (visit_time),
        INDEX idx_session (session_id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    // 포트폴리오 뷰 통계 테이블
    const createPortfolioViewsTable = `
      CREATE TABLE IF NOT EXISTS portfolio_views (
        id INT AUTO_INCREMENT PRIMARY KEY,
        section VARCHAR(50) NOT NULL,
        project_name VARCHAR(100),
        view_count INT DEFAULT 1,
        ip_address VARCHAR(45),
        viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_section (section),
        INDEX idx_project (project_name),
        INDEX idx_viewed_at (viewed_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;

    await pool.execute(createContactsTable);
    await pool.execute(createVisitorsTable);
    await pool.execute(createPortfolioViewsTable);

    console.log('✅ 모든 테이블 생성 완료');
    
    // 테이블 정보 출력
    const [tables] = await pool.execute('SHOW TABLES');
    console.log('📋 생성된 테이블:', tables.map(table => Object.values(table)[0]));
    
  } catch (error) {
    console.error('❌ 테이블 생성 실패:', error.message);
    throw error;
  }
}

// 쿼리 실행 헬퍼 함수
async function executeQuery(query, params = []) {
  try {
    const [results] = await pool.execute(query, params);
    return results;
  } catch (error) {
    console.error('❌ 쿼리 실행 실패:', error.message);
    throw error;
  }
}

// 안전한 연결 종료
async function closeConnection() {
  try {
    await pool.end();
    console.log('✅ 데이터베이스 연결 종료');
  } catch (error) {
    console.error('❌ 연결 종료 실패:', error.message);
  }
}

module.exports = {
  pool,
  getConnection: () => pool.getConnection(),
  testConnection,
  initializeDatabase,
  executeQuery,
  closeConnection
};