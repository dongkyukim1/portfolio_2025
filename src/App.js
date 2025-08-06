import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import EmojiCursor from './components/UI/EmojiCursor';
import GlobalStyles, { 
  breakpoints,
  AdvancedBackgroundContainer,
  DynamicGrid,
  CodeMatrix,
  InteractiveParticle,
  MouseFollowOrb,
  GeometricOrb,
  RotatingRing,
  DataStream
} from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import RightSidebar from './components/FloatingElements/RightSidebar';
import LittleBankDetail from './components/ProjectDetails/LittleBankDetail';
import TripplaiDetail from './components/ProjectDetails/TripplaiDetail';
import DevHubDetail from './components/ProjectDetails/DevHubDetail';
import DashboardDetail from './components/ProjectDetails/DashboardDetail';
import DogfootDetail from './components/ProjectDetails/DogfootDetail';
import HRAlert from './components/UI/HRAlert';

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
  background: radial-gradient(ellipse at top, #0a0a1a 0%, #000000 50%, #0a0a1a 100%);
  color: ${theme.colors.text.primary};
  overflow-x: hidden;
  position: relative;
  cursor: none; /* Hide default cursor for emoji cursor */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.03) 0%, transparent 30%);
    pointer-events: none;
    z-index: 0;
  }

  * {
    cursor: none !important;
  }

  @media (max-width: 768px) {
    cursor: auto;
    * {
      cursor: auto !important;
    }
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



// 전체 앱 배경 애니메이션 컴포넌트
const AppBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  const codeSnippets = [
    'const developer = new FrontendExpert();',
    'React.useState(() => innovation);',
    'Vue.createApp({ magic: true });',
    'Flutter.build(() => dreams);',
    'if (passion === true) { code(); }',
    'function solve(problem) { return creativity; }',
    'const skills = [...experience, learning];',
    'export default Excellence;'
  ];

  return (
    <AdvancedBackgroundContainer>
      {/* 마우스 팔로우 오브 */}
      <MouseFollowOrb
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* 동적 그리드 */}
      <DynamicGrid
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 복잡한 기하학적 오브들 */}
      {[...Array(12)].map((_, i) => (
        <GeometricOrb
          key={`orb-${i}`}
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          gradient={`radial-gradient(circle, rgba(${
            i % 3 === 0 ? '59, 130, 246' :
            i % 3 === 1 ? '147, 51, 234' : '16, 185, 129'
          }, 0.08) 0%, transparent 70%)`}
          blur={`${Math.random() * 3 + 1}px`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}

      {/* 회전하는 링들 */}
      {[...Array(8)].map((_, i) => (
        <RotatingRing
          key={`ring-${i}`}
          style={{
            width: 150 + i * 50,
            height: 150 + i * 50,
            top: `${20 + i * 10}%`,
            right: `${10 + i * 8}%`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 데이터 스트림 */}
      {[...Array(15)].map((_, i) => (
        <DataStream
          key={`stream-${i}`}
          style={{
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 코드 매트릭스 */}
      {codeSnippets.map((code, i) => (
        <CodeMatrix
          key={`code-${i}`}
          style={{
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
        >
          {code}
        </CodeMatrix>
      ))}

      {/* 인터랙티브 파티클들 */}
      {[...Array(25)].map((_, i) => (
        <InteractiveParticle
          key={`particle-${i}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          color={`rgba(${
            i % 3 === 0 ? '59, 130, 246' :
            i % 3 === 1 ? '147, 51, 234' : '16, 185, 129'
          }, 0.8)`}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </AdvancedBackgroundContainer>
  );
};



function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // 개발자 도구에 이쁜 연락처 정보 표시 (중복 방지)
    if (!window.portfolioMessageShown) {
      window.portfolioMessageShown = true;
      
      const styles = {
        header: 'color: #3b82f6; font-size: 20px; font-weight: bold; text-shadow: 1px 1px 2px rgba(59, 130, 246, 0.3);',
        name: 'color:rgb(59, 246, 131); font-size: 16px; font-weight: bold;',
        phone: 'color: #10b981; font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #10b981, #06d6a0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
        email: 'color: #8b5cf6; font-size: 16px; font-weight: bold;',
        message: 'color: #64748b; font-size: 14px; font-style: italic;',
        border: 'color: #3b82f6; font-size: 14px;'
      };

      console.log('%c🚀 방문해주셔서 감사합니다!', styles.header);
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.border);
      console.log('%c 💪 이름: 김동규', styles.name);
      console.log('%c📞 연락처: 010-4048-8292', styles.phone);
      console.log('%c✉️ 이메일: ehdrb12123@naver.com', styles.email);
      console.log('%c💼 언제든지 연락주세요! 새로운 기회를 기다리고 있습니다.', styles.message);
      console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.border);
      console.log('%c🌟 Front-end Developer | PM | 프로젝트 관리 전문가', styles.header);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <BackgroundNoise />
          <AppBackground />
          <EmojiCursor />
          
          <Header />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Contact />
                <RightSidebar />
              </>
            } />
            <Route path="/project/littlebank" element={<LittleBankDetail />} />
            <Route path="/project/tripplai" element={<TripplaiDetail />} />
            <Route path="/project/devhub" element={<DevHubDetail />} />
            <Route path="/project/dashboard" element={<DashboardDetail />} />
            <Route path="/project/dogfoot" element={<DogfootDetail />} />
          </Routes>
          
          {/* 서류담당자를 위한 알람 - 모든 페이지에서 표시 */}
          <HRAlert />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;