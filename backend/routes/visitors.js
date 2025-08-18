const express = require('express');
const rateLimit = require('express-rate-limit');
const Visitor = require('../models/Visitor');

const router = express.Router();

// 방문자 카운팅 API 제한 (IP당 1분에 10회)
const visitorRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1분
  max: 10, // 최대 10회
  message: {
    success: false,
    message: '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.',
    retryAfter: '1분'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// 관리자 권한 확인 미들웨어
const requireAdmin = (req, res, next) => {
  const adminEmail = req.headers['x-admin-email'];
  const validAdminEmails = [
    'dongkyu.developer@gmail.com',
    'admin@dongkyu-portfolio.com',
    'wlsntus55@gmail.com'
  ];
  
  if (!adminEmail || !validAdminEmails.includes(adminEmail.toLowerCase())) {
    return res.status(403).json({
      success: false,
      message: '관리자 권한이 필요합니다'
    });
  }
  
  next();
};

// 방문자 수 증가 (POST /api/visitors/visit)
router.post('/visit', visitorRateLimit, async (req, res) => {
  try {
    // IP 주소 가져오기 (프록시 고려)
    const userIP = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 
                   req.headers['x-real-ip'] || 
                   req.connection.remoteAddress || 
                   req.socket.remoteAddress ||
                   req.ip;
    
    // User Agent 가져오기
    const userAgent = req.headers['user-agent'];
    
    // 방문자 수 증가
    const stats = await Visitor.incrementTodayVisits(userIP, userAgent);
    
    res.json({
      success: true,
      message: '방문 기록이 저장되었습니다',
      data: {
        todayVisits: stats.visit_count || 0,
        todayUniqueVisitors: stats.unique_visitors || 0,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('방문자 카운팅 오류:', error);
    res.status(500).json({
      success: false,
      message: '방문 기록 저장 중 오류가 발생했습니다',
      timestamp: new Date().toISOString()
    });
  }
});

// 오늘 방문자 수 조회 (GET /api/visitors/today)
router.get('/today', async (req, res) => {
  try {
    const stats = await Visitor.getTodayVisits();
    
    res.json({
      success: true,
      data: {
        date: new Date().toISOString().split('T')[0],
        visits: stats.visit_count || 0,
        uniqueVisitors: stats.unique_visitors || 0,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('오늘 방문자 수 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '방문자 수 조회 중 오류가 발생했습니다'
    });
  }
});

// 월별 통계 조회 (GET /api/visitors/monthly/:year/:month) - 관리자용
router.get('/monthly/:year/:month', requireAdmin, async (req, res) => {
  try {
    const year = parseInt(req.params.year);
    const month = parseInt(req.params.month);
    
    // 유효성 검사
    if (!year || !month || month < 1 || month > 12) {
      return res.status(400).json({
        success: false,
        message: '올바른 년도와 월을 입력해주세요 (1-12)'
      });
    }
    
    const stats = await Visitor.getMonthlyStats(year, month);
    
    res.json({
      success: true,
      message: `${year}년 ${month}월 방문자 통계`,
      data: stats
    });
    
  } catch (error) {
    console.error('월별 통계 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '월별 통계 조회 중 오류가 발생했습니다'
    });
  }
});

// 전체 통계 조회 (GET /api/visitors/stats) - 관리자용
router.get('/stats', requireAdmin, async (req, res) => {
  try {
    const stats = await Visitor.getAllTimeStats();
    
    res.json({
      success: true,
      message: '전체 방문자 통계',
      data: stats
    });
    
  } catch (error) {
    console.error('전체 통계 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '통계 조회 중 오류가 발생했습니다'
    });
  }
});

// 방문자 기록 조회 (GET /api/visitors/history) - 관리자용
router.get('/history', requireAdmin, async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const history = await Visitor.getVisitorHistory(limit);
    
    res.json({
      success: true,
      message: '방문자 기록 조회',
      data: {
        records: history,
        count: history.length,
        limit
      }
    });
    
  } catch (error) {
    console.error('방문자 기록 조회 오류:', error);
    res.status(500).json({
      success: false,
      message: '방문자 기록 조회 중 오류가 발생했습니다'
    });
  }
});

// 데이터 정리 (DELETE /api/visitors/cleanup) - 관리자용
router.delete('/cleanup', requireAdmin, async (req, res) => {
  try {
    const result = await Visitor.cleanupOldData();
    
    res.json({
      success: true,
      message: '한달 이전 데이터가 성공적으로 삭제되었습니다',
      data: result
    });
    
  } catch (error) {
    console.error('데이터 정리 오류:', error);
    res.status(500).json({
      success: false,
      message: '데이터 정리 중 오류가 발생했습니다'
    });
  }
});

module.exports = router;
