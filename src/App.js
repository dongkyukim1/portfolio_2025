import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

// 홈페이지 컴포넌트
const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <RightSidebar />
    </>
  );
};

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
      <Router>
        <AppContainer>
          <BackgroundNoise />
          <AppBackground />
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
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/littlebank" element={<LittleBankDetail />} />
            <Route path="/project/tripplai" element={<TripplaiDetail />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;