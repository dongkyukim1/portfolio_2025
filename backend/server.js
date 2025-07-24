const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();

// 데이터베이스 설정
const { testConnection, initializeDatabase } = require('./config/database');

// 라우트 임포트
const contactsRouter = require('./routes/contacts');

// Express 앱 생성
const app = express();
const PORT = process.env.PORT || 5000;

// 보안 헤더 설정
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'"]
    }
  },
  crossOriginEmbedderPolicy: false
}));

// CORS 설정
const corsOptions = {
  origin: function (origin, callback) {
    // 개발 환경에서는 모든 origin 허용
    if (process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    
    // 프로덕션 환경에서는 특정 도메인만 허용
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      process.env.PRODUCTION_URL,
      'https://dongkyukim1.github.io'
    ].filter(Boolean);
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS 정책에 의해 접근이 거부되었습니다'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-email']
};

app.use(cors(corsOptions));

// 미들웨어 설정
app.use(compression()); // 응답 압축
app.use(express.json({ limit: '10mb' })); // JSON 파싱
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // URL 인코딩

// 로깅 설정
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '김동규 포트폴리오 백엔드 API 서버가 정상 작동 중입니다! 🚀',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      contacts: '/api/contacts',
      health: '/api/health',
      docs: '/api/docs'
    }
  });
});

// 헬스 체크 엔드포인트
app.get('/api/health', async (req, res) => {
  try {
    // 데이터베이스 연결 테스트
    const dbStatus = await testConnection();
    
    res.json({
      success: true,
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      database: dbStatus ? 'Connected' : 'Disconnected',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + ' MB',
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024) + ' MB'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      status: 'ERROR',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// API 문서 엔드포인트
app.get('/api/docs', (req, res) => {
  res.json({
    success: true,
    title: '김동규 포트폴리오 API 문서',
    version: '1.0.0',
    baseUrl: `${req.protocol}://${req.get('host')}`,
    endpoints: {
      'POST /api/contacts': {
        description: '새 연락처 메시지 저장',
        body: {
          name: 'string (2-100자)',
          email: 'string (유효한 이메일)',
          message: 'string (10-5000자)'
        },
        response: {
          success: 'boolean',
          message: 'string',
          data: 'object'
        }
      },
      'GET /api/contacts': {
        description: '연락처 목록 조회 (관리자)',
        headers: {
          'x-admin-email': 'string (관리자 이메일)'
        },
        query: {
          page: 'number (페이지 번호)',
          limit: 'number (페이지당 항목 수)',
          status: 'string (new|read|replied)'
        }
      },
      'GET /api/contacts/stats': {
        description: '연락처 통계 조회 (관리자)',
        headers: {
          'x-admin-email': 'string (관리자 이메일)'
        }
      },
      'GET /api/contacts/:id': {
        description: '특정 연락처 조회 (관리자)',
        headers: {
          'x-admin-email': 'string (관리자 이메일)'
        }
      },
      'PATCH /api/contacts/:id/status': {
        description: '연락처 상태 업데이트 (관리자)',
        headers: {
          'x-admin-email': 'string (관리자 이메일)'
        },
        body: {
          status: 'string (new|read|replied)'
        }
      }
    }
  });
});

// API 라우트 등록
app.use('/api/contacts', contactsRouter);

// 404 에러 핸들러
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '요청하신 엔드포인트를 찾을 수 없습니다',
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

// 전역 에러 핸들러
app.use((error, req, res, next) => {
  console.error('🚨 서버 에러:', error);
  
  // CORS 에러 처리
  if (error.message.includes('CORS')) {
    return res.status(403).json({
      success: false,
      message: 'CORS 정책 위반: 허용되지 않은 도메인에서의 접근입니다',
      timestamp: new Date().toISOString()
    });
  }
  
  // JSON 파싱 에러 처리
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({
      success: false,
      message: 'JSON 형식이 올바르지 않습니다',
      timestamp: new Date().toISOString()
    });
  }
  
  // 일반 에러 처리
  const isDevelopment = process.env.NODE_ENV === 'development';
  res.status(error.status || 500).json({
    success: false,
    message: error.message || '서버 내부 오류가 발생했습니다',
    ...(isDevelopment && {
      stack: error.stack,
      details: error
    }),
    timestamp: new Date().toISOString()
  });
});

// 서버 시작 함수
async function startServer() {
  try {
    console.log('🚀 서버 시작 중...');
    
    // 데이터베이스 초기화
    console.log('📊 데이터베이스 초기화 중...');
    await initializeDatabase();
    
    // 서버 시작
    const server = app.listen(PORT, () => {
      console.log('✅ 서버 시작 완료!');
      console.log(`🌐 서버 주소: http://localhost:${PORT}`);
      console.log(`📝 API 문서: http://localhost:${PORT}/api/docs`);
      console.log(`❤️ Health Check: http://localhost:${PORT}/api/health`);
      console.log(`🔧 환경: ${process.env.NODE_ENV || 'development'}`);
      console.log('='.repeat(50));
    });
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('🛑 SIGTERM 신호 받음. 서버 종료 중...');
      server.close(() => {
        console.log('✅ 서버 종료 완료');
        process.exit(0);
      });
    });
    
    process.on('SIGINT', () => {
      console.log('🛑 SIGINT 신호 받음. 서버 종료 중...');
      server.close(() => {
        console.log('✅ 서버 종료 완료');
        process.exit(0);
      });
    });
    
  } catch (error) {
    console.error('❌ 서버 시작 실패:', error);
    process.exit(1);
  }
}

// 서버 시작
if (require.main === module) {
  startServer();
}

module.exports = app;