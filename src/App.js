import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { FaHeart, FaCode, FaReact } from 'react-icons/fa';

// Styled Components
import { GlobalStyle } from './styles/GlobalStyles';
import { colors, gradients } from './styles/GlobalStyles';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import QuickNav from './components/FloatingElements/QuickNav';
import RightSidebar from './components/FloatingElements/RightSidebar';

// UI Components
import Toast, { useToast } from './components/UI/Toast';

// Context for Toast
export const ToastContext = React.createContext();

// Footer Styled Components
const Footer = styled.footer`
  background: ${colors.dark};
  color: white;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .footer-text {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 1rem;
    opacity: 0.8;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-tech {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.6;
  }

  .heart {
    color: #e74c3c;
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

function App() {
  const toastMethods = useToast();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ToastContext.Provider value={toastMethods}>
      <>
        <GlobalStyle />
        
        {/* 네비게이션 헤더 */}
        <Header />
        
        {/* 플로팅 요소들 */}
        <QuickNav />
        <RightSidebar />
        
        {/* 메인 콘텐츠 */}
        <main>
          {/* 히어로 섹션 */}
          <section data-aos="fade-up">
            <Hero />
          </section>

          {/* 소개 섹션 */}
          <section id="about" data-aos="fade-up">
            <About />
          </section>

          {/* 스킬 섹션 */}
          <section id="skills" data-aos="fade-up">
            <Skills />
          </section>

          {/* 경력 섹션 */}
          <section id="experience" data-aos="fade-up">
            <Experience />
          </section>

          {/* 프로젝트 섹션 */}
          <section id="projects" data-aos="fade-up">
            <Projects />
          </section>

          {/* 교육 섹션 */}
          <section id="education" data-aos="fade-up">
            <Education />
          </section>

          {/* 연락처 섹션 */}
          <section id="contact" data-aos="fade-up">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer>
          <FooterContent>
            <div className="footer-text">
              Made with <FaHeart className="heart" /> by DongKyu Kim
            </div>
            <div className="footer-tech">
              <FaReact /> React • <FaCode /> Styled Components • Framer Motion
            </div>
          </FooterContent>
        </Footer>

        {/* Toast 알림 시스템 */}
        <Toast toasts={toastMethods.toasts} removeToast={toastMethods.removeToast} />
      </>
    </ToastContext.Provider>
  );
}

export default App;