# 김동규 포트폴리오 백엔드 API

> Express.js와 MySQL을 사용한 포트폴리오 연락처 관리 백엔드 서버

## 📋 목차

- [개요](#-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [설치 및 실행](#-설치-및-실행)
- [API 문서](#-api-문서)
- [데이터베이스 스키마](#-데이터베이스-스키마)
- [환경 변수](#-환경-변수)
- [배포](#-배포)

## 🎯 개요

포트폴리오 웹사이트의 연락처 폼을 통해 받은 메시지를 MySQL 데이터베이스에 저장하고 관리하는 RESTful API 서버입니다.

### ✨ 특징

- 🔒 **보안 강화**: Helmet, CORS, Rate Limiting 적용
- 📊 **데이터 검증**: Express-validator를 사용한 입력값 검증
- 📈 **통계 기능**: 연락처 현황 및 통계 제공
- 🔍 **검색 기능**: 이름, 이메일, 메시지 내용 검색
- 📱 **반응형 API**: 페이지네이션 및 필터링 지원
- 🛠 **관리자 기능**: 상태 관리 및 메시지 관리

## 🚀 주요 기능

### 📧 연락처 관리
- 새 연락처 메시지 저장
- 메시지 상태 관리 (새 메시지/읽음/답변 완료)
- IP 주소 및 User Agent 정보 수집
- 스팸 방지를 위한 Rate Limiting

### 👨‍💼 관리자 기능
- 연락처 목록 조회 (페이지네이션)
- 연락처 상세 정보 조회
- 메시지 상태 업데이트
- 연락처 검색 및 필터링
- 통계 데이터 조회

### 🔐 보안 기능
- CORS 정책 적용
- 요청 속도 제한
- SQL Injection 방지
- XSS 공격 방지
- 입력값 검증 및 새니타이제이션

## 🛠 기술 스택

### Backend
- **Node.js** - JavaScript 런타임
- **Express.js** - 웹 프레임워크
- **MySQL** - 관계형 데이터베이스
- **mysql2** - MySQL 드라이버

### 보안 & 미들웨어
- **Helmet** - 보안 헤더 설정
- **CORS** - Cross-Origin Resource Sharing
- **Express Rate Limit** - 요청 속도 제한
- **Express Validator** - 입력값 검증

### 개발 도구
- **Morgan** - HTTP 요청 로깅
- **Compression** - 응답 압축
- **Dotenv** - 환경변수 관리

## 🚀 설치 및 실행

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 저장소 클론
git clone https://github.com/dongkyukim1/portfolio_2025.git
cd portfolio_2025/backend

# 의존성 설치
npm install
```

### 2. 환경 변수 설정

```bash
# .env 파일 생성
cp .env.example .env

# .env 파일 편집
# 데이터베이스 연결 정보, 관리자 이메일 등 설정
```

### 3. MySQL 데이터베이스 설정

```sql
-- MySQL에 접속하여 사용자 생성 (선택사항)
CREATE USER 'portfolio_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON portfolio_db.* TO 'portfolio_user'@'localhost';
FLUSH PRIVILEGES;
```

### 4. 서버 실행

```bash
# 개발 모드 (nodemon 사용)
npm run dev

# 프로덕션 모드
npm start
```

서버가 성공적으로 시작되면 다음 주소에서 접근 가능합니다:
- **서버**: http://localhost:5000
- **API 문서**: http://localhost:5000/api/docs
- **Health Check**: http://localhost:5000/api/health

## 📖 API 문서

### 기본 정보
- **Base URL**: `http://localhost:5000/api`
- **Content-Type**: `application/json`

### 공개 API

#### POST /contacts
새 연락처 메시지 저장

**Request Body:**
```json
{
  "name": "김동규",
  "email": "test@example.com",
  "message": "안녕하세요! 문의사항이 있습니다."
}
```

**Response:**
```json
{
  "success": true,
  "message": "메시지가 성공적으로 전송되었습니다.",
  "data": {
    "id": 1,
    "name": "김동규",
    "email": "test@example.com",
    "message": "안녕하세요! 문의사항이 있습니다.",
    "created_at": "2025-01-24T10:30:00.000Z",
    "status": "new"
  }
}
```

### 관리자 API (x-admin-email 헤더 필요)

#### GET /contacts
연락처 목록 조회

**Query Parameters:**
- `page`: 페이지 번호 (기본값: 1)
- `limit`: 페이지당 항목 수 (기본값: 10)
- `status`: 상태 필터 (new|read|replied)

#### GET /contacts/stats
연락처 통계 조회

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 50,
    "new": 15,
    "read": 20,
    "replied": 15,
    "today": 3,
    "thisWeek": 8,
    "thisMonth": 25
  }
}
```

#### PATCH /contacts/:id/status
연락처 상태 업데이트

**Request Body:**
```json
{
  "status": "read"
}
```

### 에러 응답 형식

```json
{
  "success": false,
  "message": "에러 메시지",
  "errors": [
    {
      "field": "email",
      "message": "유효한 이메일 주소를 입력해주세요"
    }
  ]
}
```

## 🗄 데이터베이스 스키마

### contacts 테이블
```sql
CREATE TABLE contacts (
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
);
```

### visitors 테이블 (추후 확장용)
```sql
CREATE TABLE visitors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ip_address VARCHAR(45) NOT NULL,
  user_agent TEXT,
  referrer VARCHAR(500),
  page_visited VARCHAR(255),
  visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 환경 변수

| 변수명 | 설명 | 기본값 | 필수 |
|--------|------|--------|------|
| `DB_HOST` | 데이터베이스 호스트 | localhost | ✅ |
| `DB_PORT` | 데이터베이스 포트 | 3306 | ✅ |
| `DB_NAME` | 데이터베이스 이름 | portfolio_db | ✅ |
| `DB_USER` | 데이터베이스 사용자 | root | ✅ |
| `DB_PASSWORD` | 데이터베이스 비밀번호 | | ✅ |
| `PORT` | 서버 포트 | 5000 | ❌ |
| `NODE_ENV` | 실행 환경 | development | ❌ |
| `ADMIN_EMAIL` | 관리자 이메일 | | ✅ |
| `FRONTEND_URL` | 프론트엔드 URL | | ✅ |

## 🌐 배포

### Docker를 사용한 배포

```dockerfile
# Dockerfile 예시
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 5000

CMD ["npm", "start"]
```

### PM2를 사용한 배포

```bash
# PM2 설치
npm install -g pm2

# 앱 시작
pm2 start server.js --name "portfolio-api"

# 로그 확인
pm2 logs portfolio-api
```

### 환경별 설정

#### 개발 환경
```bash
NODE_ENV=development
DB_HOST=localhost
FRONTEND_URL=http://localhost:3000
```

#### 프로덕션 환경
```bash
NODE_ENV=production
DB_HOST=your-db-host
FRONTEND_URL=https://dongkyukim1.github.io
```

## 🧪 테스트

### API 테스트 (curl 예시)

```bash
# 연락처 메시지 전송
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트 사용자",
    "email": "test@example.com",
    "message": "테스트 메시지입니다."
  }'

# 관리자 API (연락처 목록 조회)
curl -X GET http://localhost:5000/api/contacts \
  -H "x-admin-email: wlsntus55@gmail.com"
```

## 📊 모니터링

### Health Check
```bash
curl http://localhost:5000/api/health
```

### 로그 모니터링
- 개발 환경: Console 출력
- 프로덕션 환경: 파일 로그 (추후 구현)

## 🔍 문제 해결

### 자주 발생하는 문제

1. **데이터베이스 연결 실패**
   - MySQL 서버 상태 확인
   - 환경 변수 확인
   - 방화벽 설정 확인

2. **CORS 에러**
   - FRONTEND_URL 환경 변수 확인
   - 브라우저 개발자 도구에서 요청 헤더 확인

3. **Rate Limiting**
   - 요청 횟수 제한 확인
   - IP 주소별 제한 확인

## 📞 지원

문제가 발생하거나 질문이 있으시면 다음으로 연락해주세요:

- **이메일**: wlsntus55@gmail.com
- **GitHub**: https://github.com/dongkyukim1
- **블로그**: https://begin-developer.tistory.com/

---

Made with ❤️ by [김동규](https://github.com/dongkyukim1)