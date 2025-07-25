import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaBlog, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { colors, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding: 80px 20px 0;

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
  font-size: 1.2rem;
  font-family: 'Pretendard-Medium';
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-family: 'Pretendard-Bold';
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-family: 'Pretendard-Regular';

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.laptop}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: white;
  color: ${colors.primary};
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent
    );
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 300px;
    height: 300px;
    font-size: 6rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 250px;
    height: 250px;
    font-size: 5rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: ${colors.primary};
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
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
              안녕하세요! 👋
            </Greeting>
            
            <Name variants={itemVariants}>
              저는 <br />
              <span style={{background: 'linear-gradient(45deg, #fff, #f0f0f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                {personal.name}
              </span>입니다
            </Name>

            <Title variants={itemVariants}>
              {personal.title}
            </Title>

            <Description variants={itemVariants}>
              창의적이고 혁신적인 웹 솔루션을 만드는 개발자입니다. 
              사용자 중심의 경험과 최신 기술을 결합하여 
              의미있는 디지털 제품을 만들어갑니다.
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
                프로젝트 보기
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              
              <SocialLink
                href={personal.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBlog />
              </SocialLink>
              
              <SocialLink
                href={personal.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
              </SocialLink>
            </SocialLinks>
          </TextContent>

          <ImageContent>
            <ProfileImage
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              👨‍💻
            </ProfileImage>
          </ImageContent>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;