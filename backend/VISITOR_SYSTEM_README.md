# 방문자 카운팅 시스템

MySQL을 사용한 방문자 카운팅 및 통계 시스템입니다.

## 🚀 기능

### 방문자 추적
- **일별 방문자 수 카운팅**: 매일 총 방문 수와 유니크 방문자 수 추적
- **IP 기반 유니크 방문자**: IP 주소를 기반으로 중복 방문자 제거
- **User Agent 저장**: 방문자의 브라우저/디바이스 정보 저장
- **실시간 카운팅**: 페이지 방문 시 즉시 카운트 증가

### 데이터 관리
- **자동 정리**: 한 달 이전 데이터 자동 삭제 (매일 새벽 2시)
- **통계 리포트**: 주간/월간 통계 자동 생성
- **상태 모니터링**: 시간당 방문자 현황 로그

### API 엔드포인트
- `POST /api/visitors/visit`: 방문 기록 및 카운트 증가
- `GET /api/visitors/today`: 오늘 방문자 수 조회
- `GET /api/visitors/monthly/:year/:month`: 월별 통계 (관리자용)
- `GET /api/visitors/stats`: 전체 통계 (관리자용)
- `GET /api/visitors/history`: 방문자 기록 (관리자용)
- `DELETE /api/visitors/cleanup`: 수동 데이터 정리 (관리자용)

## 📊 데이터베이스 구조

### daily_visits 테이블
```sql
CREATE TABLE daily_visits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  visit_date DATE NOT NULL UNIQUE,
  visit_count INT DEFAULT 0,
  unique_visitors INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### visitor_ips 테이블
```sql
CREATE TABLE visitor_ips (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ip_address VARCHAR(45) NOT NULL,
  visit_date DATE NOT NULL,
  first_visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_agent TEXT,
  UNIQUE KEY unique_ip_date (ip_address, visit_date)
);
```

## 🔧 설정

### 환경변수
```env
# 데이터베이스
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db

# 관리자 이메일 (통계 조회용)
ADMIN_EMAILS=dongkyu.developer@gmail.com,admin@dongkyu-portfolio.com,wlsntus55@gmail.com

# 서버 설정
PORT=5000
NODE_ENV=development
```

### 관리자 권한
방문자 통계 조회 및 관리 기능은 관리자 권한이 필요합니다.
요청 헤더에 `x-admin-email`을 포함하여 인증합니다.

```javascript
const headers = {
  'x-admin-email': 'wlsntus55@gmail.com'  // 또는 다른 관리자 이메일
};
```

## 📅 스케줄러

### 자동 실행 작업
- **매일 02:00**: 한 달 이전 데이터 자동 삭제
- **매주 일요일 03:00**: 주간 방문자 통계 요약 로그
- **매월 1일 04:00**: 월별 방문자 통계 요약 로그
- **매시간 정각**: 현재 방문자 수 상태 체크 (개발용)

### 수동 실행
```javascript
// 데이터 정리
await schedulerService.runCleanupNow();

// 통계 조회
const stats = await schedulerService.runStatsNow();
```

## 🎨 프론트엔드 컴포넌트

### VisitorCounter 컴포넌트
- **위치**: 화면 우하단 고정
- **기능**: 실시간 방문자 수 표시
- **반응형**: 모바일 최적화
- **자동 갱신**: 10분마다 데이터 갱신

```jsx
import VisitorCounter from './components/VisitorCounter/VisitorCounter';

// App.js에서 사용
<VisitorCounter />
```

## 🔒 보안 기능

### Rate Limiting
- IP당 1분에 10회 방문 기록 제한
- 과도한 요청 방지

### 데이터 보호
- IP 주소 해시화 옵션
- 개인정보 최소 수집
- 자동 데이터 만료

## 📈 사용 통계

### 실시간 모니터링
```bash
# 서버 로그에서 확인
⏰ [2025-01-25 14:30:00] 오늘 방문자: 127회 (유니크: 89명)
```

### 주간 통계 예시
```
📈 주간 방문자 통계 요약
==================================================
총 방문 수: 1,234회
총 유니크 방문자: 567명
기록 시작일: 2025-01-01
최근 방문일: 2025-01-25
==================================================
📅 최근 7일 방문 현황:
  2025-01-25: 127회 방문 (유니크: 89명)
  2025-01-24: 98회 방문 (유니크: 72명)
  ...
==================================================
```

## 🚀 시작하기

### 1. 의존성 설치
```bash
cd portfolio_2025/backend
npm install
```

### 2. 데이터베이스 설정
MySQL 데이터베이스를 생성하고 환경변수를 설정합니다.

### 3. 서버 실행
```bash
npm run dev  # 개발 모드
npm start    # 프로덕션 모드
```

### 4. 프론트엔드 설정
React 앱에서 방문자 카운터 컴포넌트를 추가합니다.

## 🔍 API 사용 예시

### 방문 기록
```javascript
// 페이지 방문 시 자동 실행
fetch('/api/visitors/visit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
});
```

### 오늘 방문자 수 조회
```javascript
const response = await fetch('/api/visitors/today');
const data = await response.json();
console.log(`오늘 방문자: ${data.data.visits}명`);
```

### 관리자 통계 조회
```javascript
const response = await fetch('/api/visitors/stats', {
  headers: { 'x-admin-email': 'wlsntus55@gmail.com' }
});
const stats = await response.json();
```

## 🛠️ 커스터마이징

### 데이터 보관 기간 변경
`services/scheduler.js`에서 정리 주기를 수정할 수 있습니다.

### 스케줄 시간 변경
cron 표현식을 수정하여 스케줄 시간을 조정할 수 있습니다.

### UI 커스터마이징
`VisitorCounter.js`에서 스타일과 위치를 자유롭게 변경 가능합니다.

## 📞 지원

문의사항이나 개선사항이 있으시면 언제든지 연락주세요!
- 이메일: dongkyu.developer@gmail.com
- 전화: 010-4048-8292
