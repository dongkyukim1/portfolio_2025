import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, useSpring } from 'framer-motion';
import GlobalStyles, { breakpoints } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import RightSidebar from './components/FloatingElements/RightSidebar';

const theme = {
  colors: {
    primary: '#0a0a1a',
    secondary: '#3b82f6',
    accent: '#8b5cf6',
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      tertiary: 'rgba(255, 255, 255, 0.5)'
    },
    background: {
      primary: '#000000',
      secondary: '#0a0a1a',
      tertiary: 'rgba(10, 10, 26, 0.5)'
    }
  }
};

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.colors.background.primary};
  color: ${theme.colors.text.primary};
  overflow-x: hidden;
  position: relative;
`;

// LQVE 스타일 섹션 구분선
const SectionDivider = styled(motion.div)`
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  margin: 80px auto;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    margin: 60px auto;
  }
`;

// 섹션 래퍼
const SectionWrapper = styled(motion.section)`
  position: relative;
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  
  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

// 배경 노이즈 효과
const BackgroundNoise = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.02;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    filter: contrast(100%) brightness(100%);
  }
`;

// 커서 효과
const CustomCursor = styled(motion.div)`
  position: fixed;
  width: 32px;
  height: 32px;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorOuter = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
`;

const CursorInner = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
`;

function App() {
  const cursorXSpring = useSpring(0, { damping: 25, stiffness: 200 });
  const cursorYSpring = useSpring(0, { damping: 25, stiffness: 200 });
  const cursorScale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // 커스텀 커서 효과
    const moveCursor = (e) => {
      cursorXSpring.set(e.clientX);
      cursorYSpring.set(e.clientY);
    };
    
    const handleMouseEnter = () => {
      cursorScale.set(1.5);
    };
    
    const handleMouseLeave = () => {
      cursorScale.set(1);
    };

    const handleMouseDown = () => {
      cursorScale.set(0.8);
    };

    const handleMouseUp = () => {
      cursorScale.set(1);
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // 호버 가능한 요소들에 이벤트 추가
    const hoverables = document.querySelectorAll('a, button, [role="button"]');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorXSpring, cursorYSpring, cursorScale]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <BackgroundNoise />
        <CustomCursor
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <CursorOuter
            style={{
              scale: cursorScale,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          />
          <CursorInner
            style={{
              scale: cursorScale,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          />
        </CustomCursor>
        
        <Header />
        
        <Hero />
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <SectionWrapper>
          <About />
        </SectionWrapper>
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <SectionWrapper>
          <Education />
        </SectionWrapper>
        
        <SectionDivider
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        
        <Contact />
        
        <RightSidebar />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;