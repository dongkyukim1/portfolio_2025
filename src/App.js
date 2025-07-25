import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { FaHeart, FaCode, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

// Background Animation Components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const AnimatedShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color || 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Shape1 = styled(AnimatedShape)`
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
`;

const Shape2 = styled(AnimatedShape)`
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 5%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
`;

const Shape3 = styled(AnimatedShape)`
  width: 150px;
  height: 150px;
  top: 60%;
  right: 30%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '4px'};
  height: ${props => props.size || '4px'};
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(1px);
  min-height: 100vh;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 2;
`;

const Section = styled.section`
  position: relative;
  z-index: 2;
  
  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.02);
  }
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.01);
  }
`;

// Footer Styled Components
const Footer = styled.footer`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
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

// 파티클 생성 함수
const createParticles = () => {
  const particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 10
    });
  }
  return particles;
};

function App() {
  const toastMethods = useToast();
  const particles = createParticles();

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
        
        {/* 배경 애니메이션 */}
        <BackgroundContainer>
          {/* 플로팅 도형들 */}
          <Shape1
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Shape2
            animate={{
              y: [0, 25, 0],
              x: [0, 15, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Shape3
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* 플로팅 파티클들 */}
          {particles.map(particle => (
            <FloatingParticle
              key={particle.id}
              size={`${particle.size}px`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 8 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay
              }}
            />
          ))}
        </BackgroundContainer>
        
        <ContentContainer>
          {/* 네비게이션 헤더 */}
          <Header />
          
          {/* 플로팅 요소들 */}
          <QuickNav />
          <RightSidebar />
          
          {/* 메인 콘텐츠 */}
          <MainContent>
            {/* 히어로 섹션 */}
            <Section data-aos="fade-up">
              <Hero />
            </Section>

            {/* 소개 섹션 */}
            <Section id="about" data-aos="fade-up">
              <About />
            </Section>

            {/* 스킬 섹션 */}
            <Section id="skills" data-aos="fade-up">
              <Skills />
            </Section>

            {/* 경력 섹션 */}
            <Section id="experience" data-aos="fade-up">
              <Experience />
            </Section>

            {/* 프로젝트 섹션 */}
            <Section id="projects" data-aos="fade-up">
              <Projects />
            </Section>

            {/* 교육 섹션 */}
            <Section id="education" data-aos="fade-up">
              <Education />
            </Section>

            {/* 연락처 섹션 */}
            <Section id="contact" data-aos="fade-up">
              <Contact />
            </Section>
          </MainContent>

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
        </ContentContainer>

        {/* Toast 알림 시스템 */}
        <Toast toasts={toastMethods.toasts} removeToast={toastMethods.removeToast} />
      </>
    </ToastContext.Provider>
  );
}

export default App;