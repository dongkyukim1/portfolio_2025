import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaBlog, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { colors, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 비디오 import
import devhubVideo from '../../assets/video/devhub.mp4';
import trippaiVideo from '../../assets/video/trippai.mp4';
import littlebankVideo from '../../assets/video/littlebank.mp4';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23fff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23fff" stop-opacity="0"/></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 100px 20px 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 90px 20px 30px;
    min-height: calc(100vh - 60px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
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

  // 홈 인디케이터 (iPhone X 스타일)
  &:before {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 134px;
    height: 5px;
    background: linear-gradient(145deg, #3a3a3a, #555);
    border-radius: 3px;
  }

  // 카메라/센서 영역
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: linear-gradient(145deg, #000, #1a1a1a);
    border-radius: 15px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
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
    description: '어린이 금융 교육 앱'
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
      <Container>
        <HeroContent>
          <TextContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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
              사용자 경험을 최우선으로 생각하며, 최신 기술과 창의적 아이디어를 융합하여
              <br />
              혁신적이고 의미 있는 디지털 솔루션을 만들어갑니다.
              <br />
              <strong>함께 성장하며 더 나은 세상을 코딩합니다. 🚀</strong>
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