const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const {
  validateContact,
  handleValidationErrors,
  requireAdmin,
  extractClientInfo,
  rateLimits,
  formatErrorResponse
} = require('../middleware/validation');

// 모든 라우트에 클라이언트 정보 추출 적용
router.use(extractClientInfo);

/**
 * @route   POST /api/contacts
 * @desc    새 연락처 메시지 저장
 * @access  Public
 */
router.post('/', 
  rateLimits.contact,
  validateContact,
  handleValidationErrors,
  async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // 새 연락처 인스턴스 생성
      const contact = new Contact(
        name,
        email,
        message,
        req.clientIP,
        req.clientUserAgent
      );
      
      // 데이터베이스에 저장
      const savedContact = await contact.save();
      
      // 민감한 정보 제거하고 응답
      const responseData = {
        id: savedContact.id,
        name: savedContact.name,
        email: savedContact.email,
        message: savedContact.message,
        created_at: savedContact.created_at,
        status: savedContact.status
      };
      
      res.status(201).json({
        success: true,
        message: '메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다!',
        data: responseData
      });
      
      // 로그 출력 (개발 환경에서만)
      if (process.env.NODE_ENV === 'development') {
        console.log(`📧 새 연락처 메시지: ${name} (${email}) - IP: ${req.clientIP}`);
      }
      
    } catch (error) {
      console.error('연락처 저장 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts
 * @desc    연락처 목록 조회 (관리자용)
 * @access  Admin
 */
router.get('/',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const status = req.query.status || null;
      
      const result = await Contact.findAll(page, limit, status);
      
      res.json({
        success: true,
        message: '연락처 목록을 성공적으로 조회했습니다',
        data: result.contacts,
        pagination: result.pagination
      });
      
    } catch (error) {
      console.error('연락처 목록 조회 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts/stats
 * @desc    연락처 통계 조회 (관리자용)
 * @access  Admin
 */
router.get('/stats',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const stats = await Contact.getStats();
      
      res.json({
        success: true,
        message: '통계를 성공적으로 조회했습니다',
        data: stats
      });
      
    } catch (error) {
      console.error('통계 조회 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts/recent
 * @desc    최근 연락처 조회 (관리자용)
 * @access  Admin
 */
router.get('/recent',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 5;
      const recent = await Contact.getRecent(limit);
      
      res.json({
        success: true,
        message: '최근 연락처를 성공적으로 조회했습니다',
        data: recent
      });
      
    } catch (error) {
      console.error('최근 연락처 조회 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts/search
 * @desc    연락처 검색 (관리자용)
 * @access  Admin
 */
router.get('/search',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const keyword = req.query.q;
      if (!keyword || keyword.trim().length < 2) {
        return res.status(400).json({
          success: false,
          message: '검색어는 최소 2글자 이상이어야 합니다'
        });
      }
      
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const result = await Contact.search(keyword.trim(), page, limit);
      
      res.json({
        success: true,
        message: '검색을 성공적으로 완료했습니다',
        data: result.contacts,
        pagination: result.pagination,
        keyword: result.keyword
      });
      
    } catch (error) {
      console.error('연락처 검색 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts/:id
 * @desc    특정 연락처 조회 (관리자용)
 * @access  Admin
 */
router.get('/:id',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id || id < 1) {
        return res.status(400).json({
          success: false,
          message: '유효한 ID를 입력해주세요'
        });
      }
      
      const contact = await Contact.findById(id);
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: '해당 연락처를 찾을 수 없습니다'
        });
      }
      
      res.json({
        success: true,
        message: '연락처를 성공적으로 조회했습니다',
        data: contact
      });
      
    } catch (error) {
      console.error('연락처 조회 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   PATCH /api/contacts/:id/status
 * @desc    연락처 상태 업데이트 (관리자용)
 * @access  Admin
 */
router.patch('/:id/status',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!id || id < 1) {
        return res.status(400).json({
          success: false,
          message: '유효한 ID를 입력해주세요'
        });
      }
      
      if (!status || !['new', 'read', 'replied'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: '유효한 상태값을 입력해주세요 (new, read, replied)'
        });
      }
      
      const updatedContact = await Contact.updateStatus(id, status);
      if (!updatedContact) {
        return res.status(404).json({
          success: false,
          message: '해당 연락처를 찾을 수 없습니다'
        });
      }
      
      res.json({
        success: true,
        message: '상태가 성공적으로 업데이트되었습니다',
        data: updatedContact
      });
      
    } catch (error) {
      console.error('상태 업데이트 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   DELETE /api/contacts/:id
 * @desc    연락처 삭제 (관리자용)
 * @access  Admin
 */
router.delete('/:id',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!id || id < 1) {
        return res.status(400).json({
          success: false,
          message: '유효한 ID를 입력해주세요'
        });
      }
      
      const deleted = await Contact.deleteById(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: '해당 연락처를 찾을 수 없습니다'
        });
      }
      
      res.json({
        success: true,
        message: '연락처가 성공적으로 삭제되었습니다'
      });
      
    } catch (error) {
      console.error('연락처 삭제 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

/**
 * @route   GET /api/contacts/email/:email
 * @desc    이메일로 연락처 조회 (관리자용)
 * @access  Admin
 */
router.get('/email/:email',
  rateLimits.admin,
  requireAdmin,
  async (req, res) => {
    try {
      const email = req.params.email;
      
      // 기본적인 이메일 형식 검증
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: '유효한 이메일 주소를 입력해주세요'
        });
      }
      
      const contacts = await Contact.findByEmail(email);
      
      res.json({
        success: true,
        message: `${email}의 연락처 내역을 조회했습니다`,
        data: contacts,
        count: contacts.length
      });
      
    } catch (error) {
      console.error('이메일 연락처 조회 오류:', error);
      res.status(500).json(formatErrorResponse(error, req));
    }
  }
);

module.exports = router;