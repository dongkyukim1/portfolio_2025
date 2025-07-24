# 김동규 포트폴리오 2025 🚀

> React 기반의 현대적이고 반응형 개인 포트폴리오 웹사이트

[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled--Components-6.1.19-db7093?style=flat&logo=styled-components)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-12.23.7-ff69b4?style=flat&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 목차

- [개요](#-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [프로젝트 구조](#-프로젝트-구조)
- [배포](#-배포)
- [스크린샷](#-스크린샷)
- [라이센스](#-라이센스)
- [연락처](#-연락처)

## 🎯 개요

김동규의 개인 포트폴리오 웹사이트입니다. 웹·앱 프론트엔드 개발자로서의 경력, 기술, 프로젝트를 현대적이고 인터랙티브한 방식으로 소개합니다.

### ✨ 특징

- 🎨 **현대적 디자인**: 깔끔하고 전문적인 UI/UX
- 📱 **완전 반응형**: 모든 디바이스에서 완벽한 표시
- 🎭 **부드러운 애니메이션**: Framer Motion을 활용한 매력적인 인터랙션
- ⚡ **빠른 성능**: 최적화된 React 컴포넌트
- 🌐 **SEO 최적화**: 검색 엔진 친화적 구조
- ♿ **접근성**: 웹 접근성 지침 준수

## 🚀 주요 기능

### 📄 섹션별 기능

- **Hero Section**: 임팩트 있는 첫인상과 주요 링크
- **About Me**: 자기소개, 성장과정, 개발자가 된 계기
- **Skills**: 기술 스택 시각화 및 숙련도 표시
- **Experience**: 타임라인 형태의 경력 소개
- **Projects**: 주요 프로젝트 상세 정보와 데모 링크
- **Education**: 학력 및 자격증 정보
- **Contact**: 연락처 정보 및 메시지 전송 폼

### 🎨 인터랙티브 요소

- 스크롤 기반 애니메이션
- 호버 효과 및 마이크로 인터랙션
- 프로젝트 상세 모달
- 반응형 네비게이션
- 부드러운 스크롤 이동

## 🛠 기술 스택

### Frontend
- **React** 19.1.0 - 컴포넌트 기반 UI 라이브러리
- **Styled Components** 6.1.19 - CSS-in-JS 스타일링
- **Framer Motion** 12.23.7 - 애니메이션 라이브러리
- **React Icons** 5.5.0 - 아이콘 컴포넌트
- **AOS** 2.3.4 - 스크롤 애니메이션

### 개발 도구
- **Create React App** - 프로젝트 설정
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅

### 배포
- **Vercel** / **Netlify** - 정적 사이트 호스팅
- **GitHub Pages** - Git 기반 배포

## 🚀 시작하기

### 필수 조건

- Node.js (v16.0.0 이상)
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/dongkyukim1/portfolio_2025.git
   cd portfolio_2025
   ```

2. **의존성 설치**
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. **개발 서버 실행**
   ```bash
   npm start
   # 또는
   yarn start
   ```

4. **브라우저에서 확인**
   ```
   http://localhost:3000
   ```

### 빌드

```bash
npm run build
# 또는
yarn build
```

## 📁 프로젝트 구조

```
portfolio_2025/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Education/
│   │   └── Contact/
│   ├── data/               # 포트폴리오 데이터
│   │   └── portfolio.js
│   ├── styles/             # 글로벌 스타일
│   │   └── GlobalStyles.js
│   ├── assets/             # 이미지, 아이콘 등
│   ├── App.js             # 메인 앱 컴포넌트
│   ├── index.js           # 엔트리 포인트
│   └── index.css          # 글로벌 CSS
├── package.json
└── README.md
```

## 🌐 배포

### Vercel 배포

1. Vercel 계정 연결
2. GitHub 저장소 연결
3. 자동 배포 설정

### Netlify 배포

1. Netlify 계정 생성
2. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `build`

### GitHub Pages 배포

```bash
npm install --save-dev gh-pages
```

package.json에 추가:
```json
{
  \"homepage\": \"https://dongkyukim1.github.io/portfolio_2025\",
  \"scripts\": {
    \"predeploy\": \"npm run build\",
    \"deploy\": \"gh-pages -d build\"
  }
}
```

배포 실행:
```bash
npm run deploy
```

## 📷 스크린샷

### 데스크톱 버전
![Desktop Hero Section](./screenshots/desktop-hero.png)
![Desktop Projects Section](./screenshots/desktop-projects.png)

### 모바일 버전
![Mobile Hero Section](./screenshots/mobile-hero.png)
![Mobile Navigation](./screenshots/mobile-nav.png)

## 🎨 커스터마이징

### 개인 정보 수정

`src/data/portfolio.js` 파일에서 개인 정보를 수정할 수 있습니다:

```javascript
export const portfolioData = {
  personal: {
    name: \"여러분의 이름\",
    title: \"여러분의 직무\",
    email: \"여러분의 이메일\",
    // ... 기타 정보
  },
  // ... 기타 섹션
};
```

### 색상 테마 변경

`src/styles/GlobalStyles.js`에서 색상을 커스터마이징할 수 있습니다:

```javascript
export const colors = {
  primary: '#667eea',      // 메인 색상
  secondary: '#764ba2',    // 보조 색상
  // ... 기타 색상
};
```

### 폰트 변경

`src/index.css`에서 Pretendard 폰트를 다른 폰트로 변경할 수 있습니다.

## 🔧 주요 컴포넌트

### Header
- 고정 헤더 네비게이션
- 반응형 햄버거 메뉴
- 스크롤 시 배경 변화

### Hero
- 인상적인 첫 화면
- 타이핑 애니메이션
- 소셜 링크 버튼

### Projects
- 프로젝트 카드 그리드
- 상세 정보 모달
- 기술 스택 태그

### Contact
- 연락처 정보 카드
- 메시지 전송 폼
- 소셜 미디어 링크

## 📈 성능 최적화

- **코드 스플리팅**: React.lazy()를 활용한 지연 로딩
- **이미지 최적화**: WebP 포맷 및 lazy loading
- **번들 크기 최적화**: Tree shaking 및 불필요한 코드 제거
- **캐싱 전략**: Service Worker를 통한 캐싱

## 🧪 테스트

```bash
# 단위 테스트 실행
npm test

# 테스트 커버리지 확인
npm test -- --coverage
```

## 📱 반응형 브레이크포인트

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Laptop**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 향후 개선 계획

- [ ] 다국어 지원 (한국어/영어)
- [ ] 다크모드 테마
- [ ] 블로그 섹션 추가
- [ ] 3D 애니메이션 효과
- [ ] PWA (Progressive Web App) 기능
- [ ] 방문자 통계 및 분석

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

**김동규 (Dongkyu Kim)**

- 📧 Email: wlsntus55@gmail.com
- 📱 Phone: 010-4048-8292
- 🌐 Portfolio: [https://dongkyu.shop/](https://dongkyu.shop/)
- 💻 GitHub: [https://github.com/dongkyukim1](https://github.com/dongkyukim1)
- 📝 Blog: [https://begin-developer.tistory.com/](https://begin-developer.tistory.com/)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!

Made with ❤️ by [김동규](https://github.com/dongkyukim1)