import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaBlog, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { colors, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 비디오 import
import devhubVideo from '../../assets/video/devhub.mp4';
import trippaiVideo from '../../assets/video/trippai.mp4';
import littlebankVideo from '../../assets/video/littlebank.mp4';
import drawingImage from '../../assets/dongkyu/drawing.png';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at top, #0a0a1a 0%, #000000 50%, #0a0a1a 100%);
  position: relative;
  overflow: hidden;
  padding: 120px 20px 40px;

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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px 20px 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 90px 20px 30px;
    min-height: calc(100vh - 60px);
  }
`;

// 고급 배경 컨테이너
const AdvancedBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

// 동적 그리드 시스템
const DynamicGrid = styled(motion.div)`
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

// 복잡한 기하학적 요소
const GeometricOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient || 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'};
  filter: blur(${props => props.blur || '1px'});
`;

// 코드 매트릭스 효과
const CodeMatrix = styled(motion.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  color: rgba(59, 130, 246, 0.3);
  white-space: nowrap;
  user-select: none;
`;

// 인터랙티브 파티클
const InteractiveParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color || 'rgba(59, 130, 246, 0.6)'};
  border-radius: 50%;
  pointer-events: none;
`;

// 3D 회전 링
const RotatingRing = styled(motion.div)`
  position: absolute;
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  border-top-color: rgba(59, 130, 246, 0.6);
  border-right-color: transparent;
`;

// 데이터 스트림 효과
const DataStream = styled(motion.div)`
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.6), transparent);
`;

// 마우스 팔로우 오브
const MouseFollowOrb = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 2;
`;

// 드로잉 이미지 컨테이너
const DrawingImageContainer = styled(motion.div)`
  position: absolute;
  bottom: -10%;
  right: 5%;
  width: 600px;
  height: 600px;
  z-index: 2;
  pointer-events: none;
  opacity: 0.08;
  
  @media (max-width: ${breakpoints.laptop}) {
    width: 500px;
    height: 500px;
    bottom: -15%;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 400px;
    height: 400px;
    bottom: -20%;
    right: -10%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 300px;
    height: 300px;
    bottom: -25%;
    right: -15%;
  }
`;

const DrawingImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(1) brightness(1.5) contrast(0.8);
`;

// LQVE 스타일 타이틀 배경
const TitleBackground = styled(motion.div)`
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

// 미니멀 라인 요소
const MinimalLine = styled(motion.div)`
  position: absolute;
  width: ${props => props.width || '100px'};
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  transform-origin: left center;
`;

// 백그라운드 컨테이너
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;

// 기하학적 도형
const GeometricShape = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: ${props => props.borderRadius || '50%'};
  background: transparent;
`;

// 코드 요소
const CodeElement = styled(motion.div)`
  position: absolute;
  font-family: 'Fira Code', monospace;
  font-size: 18px;
  color: rgba(102, 126, 234, 0.5);
  font-weight: 500;
  user-select: none;
`;

// 플로팅 파티클
const FloatingParticle = styled(motion.div)`
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  color: white;
`;

const Greeting = styled(motion.p)`
  font-size: 1.3rem;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 4.2rem;
  font-family: 'Pretendard-Bold';
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.3;
  letter-spacing: -0.03em;
  padding: 0.5rem 0;
  overflow: visible;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3.2rem;
    line-height: 1.25;
    margin-bottom: 1.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    padding: 0.3rem 0;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.2rem;
  font-family: 'Pretendard-Medium';
  font-weight: 500;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  letter-spacing: -0.01em;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TypingText = styled.span`
  display: inline-block;
`;

const Cursor = styled.span`
  display: inline-block;
  background-color: white;
  width: 3px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.laptop}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: white;
  color: ${colors.primary};
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-weight: 600;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  padding: 1.2rem 2.5rem;
  border-radius: 35px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-weight: 600;
  font-size: 1.05rem;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;

  &:hover {
    background: white;
    color: ${colors.primary};
    transform: translateY(-3px);
    border-color: white;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 디바이스 목업 컨테이너
const DeviceMockupContainer = styled(motion.div)`
  position: relative;
  width: 550px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.laptop}) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
    height: 350px;
  }
`;

// 모니터 목업 - 실제 모니터처럼
const MonitorMockup = styled(motion.div)`
  position: relative;
  width: 480px;
  height: 320px;
  background: linear-gradient(145deg, #1a1a1a, #2d2d2d);
  border-radius: 20px 20px 8px 8px;
  padding: 25px 25px 20px 25px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.4),
    0 15px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 2px solid #333;

  &::before {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: linear-gradient(145deg, #4a4a4a, #666);
    border-radius: 0 0 15px 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -45px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 15px;
    background: linear-gradient(145deg, #666, #888);
    border-radius: 20px;
    box-shadow: 
      0 5px 20px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 400px;
    height: 260px;
    padding: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 320px;
    height: 200px;
    padding: 15px;
    
    &::before {
      width: 60px;
      height: 20px;
      bottom: -20px;
    }
    
    &::after {
      width: 150px;
      height: 12px;
      bottom: -35px;
    }
  }
`;

// 아이폰 목업 - 실제 아이폰처럼
const IPhoneMockup = styled(motion.div)`
  position: relative;
  width: 240px;
  height: 480px;
  background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
  border-radius: 45px;
  padding: 25px 15px;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 15px 30px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);
  border: 3px solid #333;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 8px;
    background: linear-gradient(145deg, #2a2a2a, #444);
    border-radius: 8px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 6px;
    background: linear-gradient(145deg, #2a2a2a, #444);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 200px;
    height: 400px;
    padding: 20px 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 180px;
    height: 360px;
    padding: 18px 10px;
    
    &::before {
      width: 70px;
      height: 20px;
      top: 6px;
    }
    
    &::after {
      width: 40px;
      height: 5px;
      bottom: 6px;
    }
  }
`;

// 비디오 스타일 - 더 큰 영상
const DeviceVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.1);
`;

// 프로젝트 이름 표시 - 더 눈에 띄게
const ProjectLabel = styled(motion.div)`
  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
  backdrop-filter: blur(15px);
  padding: 12px 24px;
  border-radius: 25px;
  color: white;
  font-family: 'Pretendard-SemiBold';
  font-size: 1.1rem;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 10px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);

  @media (max-width: ${breakpoints.laptop}) {
    bottom: -55px;
    font-size: 1rem;
    padding: 10px 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: -45px;
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;

  @media (max-width: ${breakpoints.laptop}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${colors.primary};
    transform: translateY(-3px);
  }
`;

// 프로젝트 데이터
const projects = [
  {
    name: 'DevHub',
    type: 'web',
    video: devhubVideo,
    description: '개발자 커뮤니티 플랫폼'
  },
  {
    name: 'TripplAI',
    type: 'web', 
    video: trippaiVideo,
    description: 'AI 여행 추천 서비스'
  },
  {
    name: 'LittleBank',
    type: 'app',
    video: littlebankVideo,
    description: '어린이 동기부여 앱'
  }
];

// 타이핑 애니메이션을 위한 커스텀 훅
const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// float 애니메이션 variants
const floatVariants = {
  initial: {
    opacity: 0.3,
    scale: 1,
  },
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 고급 애니메이션 배경 컴포넌트
const AdvancedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });
  
  // 드로잉 이미지용 별도 스프링
  const drawingSpringX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const drawingSpringY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  // 코드 스니펫 배열
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
      
      {/* 드로잉 이미지 - 배경 애니메이션 */}
      <DrawingImageContainer
        animate={{
          y: [0, -30, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DrawingImage 
          src={drawingImage} 
          alt="Creative Drawing"
        />
      </DrawingImageContainer>

      {/* 미니멀 라인들 - LQVE 스타일 */}
      {[...Array(6)].map((_, i) => (
        <MinimalLine
          key={`line-${i}`}
          width={`${Math.random() * 200 + 100}px`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

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
      {[...Array(8)].map((_, i) => (
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
          }, 0.1) 0%, transparent 70%)`}
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
      {[...Array(5)].map((_, i) => (
        <RotatingRing
          key={`ring-${i}`}
          style={{
            width: 150 + i * 50,
            height: 150 + i * 50,
            top: `${20 + i * 15}%`,
            right: `${10 + i * 10}%`,
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
      {[...Array(12)].map((_, i) => (
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
      {[...Array(20)].map((_, i) => (
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

const Hero = () => {
  const { personal } = portfolioData;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const greetingText = useTypewriter("안녕하세요! 👋", 80, 500);
  const nameText = useTypewriter(`저는 ${personal.name}입니다`, 120, 2000);
  const titleText = useTypewriter(personal.title, 100, 4500);

  // 프로젝트 순환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 4000); // 4초마다 변경

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const deviceVariants = {
    hidden: { scale: 0, rotateY: -90 },
    visible: {
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1
      }
    }
  };

  const projectChangeVariants = {
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateY: 90,
      transition: { duration: 0.5 }
    },
    enter: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
    <HeroSection id="home">
      <AdvancedBackground />
      
      <Container>
        <HeroContent>
          <TextContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 최소한의 라인 애니메이션 */}
            {[...Array(5)].map((_, i) => (
              <MinimalLine
                key={i}
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 10}%`,
                  width: `${60 + i * 10}px`,
                  transform: `rotate(${-30 + i * 15}deg)`,
                }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* 제목 백그라운드 */}
            <TitleBackground
              animate={{
                opacity: [0.03, 0.06, 0.03],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* 기하학적 도형들 */}
            <BackgroundContainer>
              {/* 왼쪽 상단 원 */}
              <GeometricShape
                style={{ top: '10%', left: '5%' }}
                variants={floatVariants}
                initial="initial"
                animate="animate"
              />
              
              {/* 오른쪽 중앙 삼각형 */}
              <GeometricShape
                style={{ 
                  top: '50%', 
                  right: '10%',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* 왼쪽 하단 사각형 */}
              <GeometricShape
                style={{ 
                  bottom: '15%', 
                  left: '15%',
                  borderRadius: '10px'
                }}
                animate={{
                  rotate: [45, 90, 45],
                  scale: [0.8, 1, 0.8],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* 코드 요소들 */}
              <CodeElement
                style={{ top: '20%', right: '20%' }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0,
                  ease: "easeInOut"
                }}
              >
                {'</>'}
              </CodeElement>

              <CodeElement
                style={{ bottom: '30%', left: '10%' }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
              >
                const
              </CodeElement>

              <CodeElement
                style={{ top: '60%', left: '40%' }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2,
                  ease: "easeInOut"
                }}
              >
                { }
              </CodeElement>

              {/* 플로팅 파티클 */}
              {[...Array(8)].map((_, i) => (
                <FloatingParticle
                  key={i}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${15 + Math.random() * 10}s`
                  }}
                />
              ))}
            </BackgroundContainer>

            <Greeting variants={itemVariants}>
              <TypingText>{greetingText.displayText}</TypingText>
              {!greetingText.isComplete && <Cursor>&nbsp;</Cursor>}
            </Greeting>
            
            <Name variants={itemVariants}>
              <span style={{
                background: 'linear-gradient(45deg, #ffd700, #ffed4a, #f59e0b)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
              }}>
                <TypingText>{nameText.displayText}</TypingText>
                {!nameText.isComplete && nameText.displayText && <Cursor style={{color: 'white', WebkitTextFillColor: 'white'}}>&nbsp;</Cursor>}
              </span>
            </Name>

            <Title variants={itemVariants}>
              <TypingText>{titleText.displayText}</TypingText>
              {!titleText.isComplete && titleText.displayText && <Cursor>&nbsp;</Cursor>}
            </Title>

            <Description variants={itemVariants}>
              <strong>웹부터 앱까지, 다양한 플랫폼을 넘나드는 프론트엔드 개발자입니다.</strong>
              <br />
              React, Vue.js, Flutter로 사용자 중심의 경험을 설계하고, 팀과의 소통을 통해
              <br />
              복잡한 문제를 창의적으로 해결합니다.
              <br />
              <strong>비전공자에서 PL까지, 끊임없는 도전과 성장을 추구합니다. 🌟</strong>
            </Description>

            <ButtonGroup variants={itemVariants}>
              <PrimaryButton
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaExternalLinkAlt />
                프로젝트 둘러보기
              </PrimaryButton>

              <SecondaryButton
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FaDownload />
                이력서 다운로드
              </SecondaryButton>
            </ButtonGroup>

            <SocialLinks variants={itemVariants}>
              <SocialLink
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href={personal.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBlog />
              </SocialLink>
              
              <SocialLink
                href={personal.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
              </SocialLink>
            </SocialLinks>
          </TextContent>

          <ImageContent>
            <DeviceMockupContainer
              variants={deviceVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectIndex}
                  variants={projectChangeVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                  style={{ position: 'relative' }}
                >
                  {currentProject.type === 'web' ? (
                    <MonitorMockup>
                      <DeviceVideo
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={currentProject.video}
                      />
                    </MonitorMockup>
                  ) : (
                    <IPhoneMockup>
                      <DeviceVideo
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={currentProject.video}
                      />
                    </IPhoneMockup>
                  )}
                  
                  <ProjectLabel
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentProject.name}
                  </ProjectLabel>
                </motion.div>
              </AnimatePresence>
            </DeviceMockupContainer>
          </ImageContent>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;