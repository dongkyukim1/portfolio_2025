const { body, validationResult } = require('express-validator');

// 연락처 폼 검증 규칙
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('이름은 2-100자 사이여야 합니다')
    .matches(/^[가-힣a-zA-Z\s]+$/)
    .withMessage('이름에는 한글, 영문, 공백만 사용할 수 있습니다'),
    
  body('email')
    .trim()
    .isEmail()
    .withMessage('유효한 이메일 주소를 입력해주세요')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('이메일은 255자를 초과할 수 없습니다'),
    
  body('message')
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('메시지는 10-5000자 사이여야 합니다')
    .escape() // XSS 방지
];

// 검증 결과 처리 미들웨어
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => ({
      field: error.param,
      message: error.msg,
      value: error.value
    }));
    
    return res.status(400).json({
      success: false,
      message: '입력값 검증에 실패했습니다',
      errors: errorMessages
    });
  }
  
  next();
};

// 관리자 인증 미들웨어 (간단 버전)
const requireAdmin = (req, res, next) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const providedEmail = req.headers['x-admin-email'];
  
  if (!providedEmail || providedEmail !== adminEmail) {
    return res.status(401).json({
      success: false,
      message: '관리자 권한이 필요합니다'
    });
  }
  
  next();
};

// IP 주소 추출 미들웨어
const extractClientInfo = (req, res, next) => {
  // IP 주소 추출 (프록시 환경 고려)
  req.clientIP = req.headers['x-forwarded-for'] ||
                 req.headers['x-real-ip'] ||
                 req.connection.remoteAddress ||
                 req.socket.remoteAddress ||
                 (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
                 req.ip;

  // User Agent 정보
  req.clientUserAgent = req.headers['user-agent'] || 'Unknown';
  
  // IPv6 to IPv4 변환
  if (req.clientIP && req.clientIP.startsWith('::ffff:')) {
    req.clientIP = req.clientIP.substring(7);
  }
  
  next();
};

// 요청 속도 제한 설정
const createRateLimiter = (windowMs, max, message) => {
  const rateLimit = require('express-rate-limit');
  
  return rateLimit({
    windowMs, // 시간 윈도우 (밀리초)
    max, // 최대 요청 수
    message: {
      success: false,
      message: message || '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.',
      retryAfter: Math.ceil(windowMs / 1000)
    },
    standardHeaders: true, // `RateLimit-*` 헤더 포함
    legacyHeaders: false, // `X-RateLimit-*` 헤더 비활성화
    handler: (req, res) => {
      res.status(429).json({
        success: false,
        message: message || '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.',
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }
  });
};

// 다양한 속도 제한 설정
const rateLimits = {
  // 일반 API 요청 (분당 30회)
  general: createRateLimiter(
    60 * 1000, // 1분
    30,
    '일반 API 요청이 너무 많습니다. 1분 후 다시 시도해주세요.'
  ),
  
  // 연락처 폼 제출 (개발환경: 분당 20회, 프로덕션: 시간당 5회)
  contact: createRateLimiter(
    process.env.NODE_ENV === 'development' ? 60 * 1000 : 60 * 60 * 1000, // 개발: 1분, 프로덕션: 1시간
    process.env.NODE_ENV === 'development' ? 20 : 5, // 개발: 20회, 프로덕션: 5회
    process.env.NODE_ENV === 'development' 
      ? '연락처 폼 제출이 너무 많습니다. 1분 후 다시 시도해주세요.'
      : '연락처 폼 제출이 너무 많습니다. 1시간 후 다시 시도해주세요.'
  ),
  
  // 관리자 API (분당 100회)
  admin: createRateLimiter(
    60 * 1000, // 1분
    100,
    '관리자 API 요청이 너무 많습니다. 1분 후 다시 시도해주세요.'
  )
};

// 에러 응답 포맷팅
const formatErrorResponse = (error, req) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    success: false,
    message: error.message || '서버 오류가 발생했습니다',
    ...(isDevelopment && {
      stack: error.stack,
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method
    })
  };
};

module.exports = {
  validateContact,
  handleValidationErrors,
  requireAdmin,
  extractClientInfo,
  rateLimits,
  formatErrorResponse
};