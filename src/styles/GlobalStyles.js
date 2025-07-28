import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

export const colors = {
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
};

export const gradients = {
  primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  secondary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  dark: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%)',
  light: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
};

// LQVE 스타일 공통 컴포넌트들
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 15px;
  }
`;

export const Section = styled.section`
  position: relative;
  background: transparent;
  overflow: hidden;
`;

export const SectionTitle = styled.h2`
  font-family: 'Pretendard-Bold';
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 5rem;
  color: ${colors.text.primary};
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: ${colors.text.tertiary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

// 공통 섹션 배경 스타일 (Hero와 동일)
export const UnifiedSectionBackground = styled.div`
  background: radial-gradient(ellipse at top, #0a0a1a 0%, #000000 50%, #0a0a1a 100%);
  position: relative;
  overflow: hidden;

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
  }
`;

// 투명한 섹션 배경 (전체 배경과 자연스럽게 이어짐)
export const TransparentSectionBackground = styled.div`
  background: transparent;
  position: relative;
  overflow: hidden;
`;

// 공통 배경 애니메이션 컴포넌트들
export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

export const AnimatedParticle = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(102, 126, 234, 0.4);
  border-radius: 50%;
  pointer-events: none;
`;

export const GeometricShape = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: ${props => props.borderRadius || '50%'};
  background: transparent;
`;

export const MinimalLine = styled(motion.div)`
  position: absolute;
  width: ${props => props.width || '100px'};
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  transform-origin: left center;
`;

export const CodeElement = styled(motion.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: rgba(102, 126, 234, 0.3);
  font-weight: 500;
  user-select: none;
`;

export const RotatingRing = styled(motion.div)`
  position: absolute;
  border: 2px solid rgba(59, 130, 246, 0.1);
  border-radius: 50%;
  border-top-color: rgba(59, 130, 246, 0.3);
  border-right-color: transparent;
`;

export const DataStream = styled(motion.div)`
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
`;

export const GeometricOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient || 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)'};
  filter: blur(${props => props.blur || '1px'});
`;

// Hero 스타일 고급 배경 컴포넌트들
export const AdvancedBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

export const DynamicGrid = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 100px 100px;
  transform-origin: center;
`;

export const CodeMatrix = styled(motion.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: rgba(59, 130, 246, 0.3);
  white-space: nowrap;
  user-select: none;
`;

export const InteractiveParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color || 'rgba(59, 130, 246, 0.6)'};
  border-radius: 50%;
  pointer-events: none;
`;

export const MouseFollowOrb = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 2;
`;

export const TitleBackground = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -40px;
  right: -40px;
  bottom: -20px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(59, 130, 246, 0.03),
    transparent
  );
  z-index: -1;
  pointer-events: none;
`;

export const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(102, 126, 234, 0.6);
  border-radius: 50%;
  pointer-events: none;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(-10px) translateX(-10px);
    }
    75% {
      transform: translateY(-30px) translateX(5px);
    }
  }
  
  animation: float var(--duration, 15s) var(--delay, 0s) infinite ease-in-out;
  animation-duration: ${props => props.style?.animationDuration || '15s'};
  animation-delay: ${props => props.style?.animationDelay || '0s'};
`;

const GlobalStyles = createGlobalStyle`
  /* Pretendard 폰트 */
  @font-face {
    font-family: 'Pretendard-Thin';
    src: url('/fonts/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Light';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard-Black';
    src: url('/fonts/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  /* Fira Code 폰트 - 코드 표시용 */
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Pretendard-Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background.primary};
    color: ${colors.text.primary};
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
    
    @media (max-width: ${breakpoints.tablet}) {
      cursor: auto;
    }
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.text.tertiary};
    border-radius: 4px;
    
    &:hover {
      background: ${colors.text.secondary};
    }
  }

  /* 선택 색상 */
  ::selection {
    background: ${colors.secondary};
    color: white;
  }

  /* 링크 기본 스타일 */
  a {
    color: inherit;
    text-decoration: none;
    cursor: none;
    
    @media (max-width: ${breakpoints.tablet}) {
      cursor: pointer;
    }
  }

  /* 버튼 기본 스타일 */
  button {
    font-family: inherit;
    cursor: none;
    
    @media (max-width: ${breakpoints.tablet}) {
      cursor: pointer;
    }
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
  }

  /* 이미지 기본 스타일 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 제목 스타일 */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 3.5rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: 'Pretendard-Bold';
    font-size: 2.5rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-family: 'Pretendard-SemiBold';
    font-size: 2rem;
    
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.5rem;
    }
    
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.25rem;
    }
  }

  /* 코드 블록 스타일 */
  code {
    font-family: 'Fira Code', monospace;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  pre {
    font-family: 'Fira Code', monospace;
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    
    code {
      background: none;
      padding: 0;
    }
  }

  /* 애니메이션 최적화 */
  * {
    will-change: auto;
  }

  /* 모바일 터치 최적화 */
  @media (max-width: ${breakpoints.tablet}) {
    * {
      -webkit-tap-highlight-color: transparent;
    }
  }

  /* 프린트 스타일 */
  @media print {
    body {
      background: white;
      color: black;
    }
  }
`;

export default GlobalStyles;