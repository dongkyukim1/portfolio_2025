import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaJs, FaReact, FaVuejs, FaAws, FaDocker, 
  FaGitAlt, FaDatabase, FaServer, FaCode, FaTools, FaAndroid, FaSlack, FaFigma, FaDiscord,
  FaUsers
} from 'react-icons/fa';
import { 
  SiSpring, SiFlask, SiMysql, SiOracle, SiRedis, SiMongodb, 
  SiIntellijidea, SiPycharm, SiEclipseide,
  SiApachetomcat, SiNodedotjs, SiSwagger, SiNextdotjs, SiNotion,
  SiSpringboot, SiAndroidstudio, SiPostgresql, SiFlutter
} from 'react-icons/si';
import { 
  Section, 
  Container, 
  SectionTitle, 
  colors, 
  gradients, 
  breakpoints,
  TransparentSectionBackground,
  BackgroundContainer,
  AnimatedParticle,
  GeometricShape,
  MinimalLine,
  CodeElement,
  RotatingRing,
  DataStream,
  GeometricOrb
} from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const SkillsSection = styled(TransparentSectionBackground)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`;

// Skills용 배경 애니메이션 컴포넌트
const SkillsBackground = () => {
  const skillsCodeSnippets = [
    'import { React, useState } from "react";',
    'const skills = [...frontend, ...backend];',
    'Vue.createApp({ components: true });',
    'flutter: build --release',
    'spring.jpa.hibernate.ddl-auto=update',
    'docker run -p 3000:3000 myapp',
    'git commit -m "new feature"',
    'AWS.config.region = "us-east-1";'
  ];

  return (
    <BackgroundContainer>
      {/* 미니멀 라인들 */}
      {[...Array(6)].map((_, i) => (
        <MinimalLine
          key={`line-${i}`}
          width={`${Math.random() * 180 + 100}px`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.25, 0.25, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 기하학적 오브들 - 더 화려한 그라데이션 */}
      {[...Array(9)].map((_, i) => (
        <GeometricOrb
          key={`orb-${i}`}
          style={{
            width: Math.random() * 300 + 120,
            height: Math.random() * 300 + 120,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          gradient={`radial-gradient(circle, 
            ${i % 5 === 0 ? 'rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.06)' :
              i % 5 === 1 ? 'rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.06)' : 
              i % 5 === 2 ? 'rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.06)' : 
              i % 5 === 3 ? 'rgba(245, 158, 11, 0.08), rgba(239, 68, 68, 0.06)' :
              'rgba(139, 92, 246, 0.08), rgba(16, 185, 129, 0.06)'
            } 0%, transparent 75%)`}
          blur={`${Math.random() * 4 + 2}px`}
          animate={{
            scale: [1, 1.6, 1.2, 1],
            opacity: [0.3, 0.7, 0.5, 0.3],
            x: [0, Math.random() * 100 - 50, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 60 - 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3
          }}
        />
      ))}

      {/* 회전하는 링들 - 더 화려한 효과 */}
      {[...Array(6)].map((_, i) => (
        <RotatingRing
          key={`ring-${i}`}
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            top: `${10 + (i * 15)}%`,
            right: `${5 + (i * 8)}%`,
            background: `conic-gradient(
              from ${i * 60}deg,
              rgba(59, 130, 246, 0.2) 0deg,
              rgba(147, 51, 234, 0.2) 120deg,
              rgba(16, 185, 129, 0.2) 240deg,
              rgba(59, 130, 246, 0.2) 360deg
            )`,
            borderRadius: '50%',
            filter: `blur(${Math.max(1, i * 0.5)}px)`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + i * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 데이터 스트림 - 더 역동적인 효과 */}
      {[...Array(12)].map((_, i) => (
        <DataStream
          key={`stream-${i}`}
          style={{
            height: Math.random() * 220 + 120,
            width: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(
              180deg,
              rgba(59, 130, 246, 0.6) 0%,
              rgba(147, 51, 234, 0.4) 50%,
              rgba(16, 185, 129, 0.6) 100%
            )`,
            borderRadius: '50px',
            filter: `blur(${Math.random() * 1.5 + 0.5}px)`,
            boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(59, 130, 246, 0.3)`,
          }}
          animate={{
            scaleY: [0, 1, 0.8, 0],
            opacity: [0, 0.8, 0.6, 0],
            x: [0, Math.random() * 30 - 15, 0],
            filter: [
              `blur(${Math.random() * 1.5 + 0.5}px)`,
              `blur(${Math.random() * 2 + 1}px)`,
              `blur(${Math.random() * 1.5 + 0.5}px)`
            ],
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 스킬 관련 코드 요소들 - 더 멋진 스타일 */}
      {skillsCodeSnippets.map((code, i) => (
        <CodeElement
          key={`code-${i}`}
          style={{
            top: `${Math.random() * 85 + 5}%`,
            left: `${Math.random() * 75 + 10}%`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
            fontSize: '12px',
            fontFamily: 'Monaco, "Fira Code", Consolas, monospace',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#00ff88',
            textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            y: [0, -30, -60, -90],
            scale: [0.8, 1, 1, 0.8],
            rotate: [
              Math.random() * 20 - 10, 
              Math.random() * 15 - 7.5, 
              Math.random() * 20 - 10
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeOut"
          }}
        >
          {code}
        </CodeElement>
      ))}

      {/* 애니메이션 파티클들 - 더 화려한 효과 */}
      {[...Array(20)].map((_, i) => (
        <AnimatedParticle
          key={`particle-${i}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            background: `radial-gradient(circle, 
              ${i % 6 === 0 ? 'rgba(59, 130, 246, 0.8)' :
                i % 6 === 1 ? 'rgba(147, 51, 234, 0.8)' :
                i % 6 === 2 ? 'rgba(16, 185, 129, 0.8)' :
                i % 6 === 3 ? 'rgba(245, 158, 11, 0.8)' :
                i % 6 === 4 ? 'rgba(236, 72, 153, 0.8)' :
                'rgba(139, 92, 246, 0.8)'
              } 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: `blur(${Math.random() * 2 + 1}px)`,
            boxShadow: `0 0 ${Math.random() * 15 + 10}px ${
              i % 6 === 0 ? 'rgba(59, 130, 246, 0.4)' :
              i % 6 === 1 ? 'rgba(147, 51, 234, 0.4)' :
              i % 6 === 2 ? 'rgba(16, 185, 129, 0.4)' :
              i % 6 === 3 ? 'rgba(245, 158, 11, 0.4)' :
              i % 6 === 4 ? 'rgba(236, 72, 153, 0.4)' :
              'rgba(139, 92, 246, 0.4)'
            }`,
          }}
          animate={{
            scale: [1, 2.2, 1.5, 1],
            opacity: [0.5, 1, 0.7, 0.5],
            x: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 150 - 75, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
        />
      ))}

      {/* 기하학적 도형들 - 더 화려한 디자인 */}
      <GeometricShape
        style={{ 
          top: '20%', 
          left: '15%',
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          borderRadius: ['20px', '50%', '20px'],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <GeometricShape
        style={{ 
          top: '60%', 
          right: '10%',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(245, 158, 11, 0.3))',
          filter: 'blur(1px)',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.4, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <GeometricShape
        style={{ 
          bottom: '25%', 
          left: '25%',
          borderRadius: '25px',
          background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))',
          boxShadow: '0 0 35px rgba(236, 72, 153, 0.3)',
        }}
        animate={{
          rotate: [30, 150, 30],
          scale: [0.9, 1.2, 0.9],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        style={{ 
          top: '40%', 
          left: '5%',
          borderRadius: '50%',
          width: '90px',
          height: '90px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4), rgba(239, 68, 68, 0.2))',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)',
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 추가 화려한 도형들 */}
      <GeometricShape
        style={{ 
          top: '10%', 
          right: '30%',
          width: '60px',
          height: '60px',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          background: 'linear-gradient(60deg, rgba(139, 92, 246, 0.3), rgba(16, 185, 129, 0.3))',
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)',
        }}
        animate={{
          rotate: [0, 120, 240, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        style={{ 
          bottom: '10%', 
          right: '20%',
          width: '70px',
          height: '70px',
          borderRadius: '15px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(236, 72, 153, 0.25))',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 25px rgba(59, 130, 246, 0.3)',
        }}
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </BackgroundContainer>
  );
};

const SkillsContainer = styled.div`
  display: grid;
  gap: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  position: relative;

  h3 {
    font-size: 1.6rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
      transition: width 0.3s ease;
    }
  }

  .icon {
    font-size: 2.5rem;
    color: ${colors.secondary};
    position: relative;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
    
    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -10px;
      right: -10px;
      bottom: -10px;
      background: radial-gradient(
        circle,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 70%
      );
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover {
      transform: scale(1.1) rotate(5deg);
      filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.6));
      
      &::before {
        opacity: 1;
      }
    }
  }

  &:hover h3::after {
    width: 100%;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  /* 작은 모바일 화면에서는 3열로 고정 */
  @media (max-width: 360px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
`;

const SkillItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.15) 50%, 
      rgba(147, 51, 234, 0.15) 100%
    );
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle, 
      rgba(102, 126, 234, 0.1) 0%, 
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-10px) scale(1.05);
    box-shadow: 
      0 15px 40px rgba(102, 126, 234, 0.25),
      0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 126, 234, 0.4);

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  .skill-icon {
    font-size: 3rem;
    margin-bottom: 1.2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    
    /* 모든 아이콘에 멋진 그림자 효과 */
    filter: ${props => props.$isWhite 
      ? 'drop-shadow(0 0 15px rgba(255,255,255,0.6)) drop-shadow(0 0 30px rgba(255,255,255,0.3))' 
      : 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 30px rgba(102, 126, 234, 0.3))'};
  }

  .skill-name {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.secondary};
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
    transition: color 0.3s ease;
  }

  &:hover .skill-icon {
    transform: scale(1.15) rotateY(10deg);
    filter: ${props => props.$isWhite 
      ? 'drop-shadow(0 0 20px rgba(255,255,255,0.9)) drop-shadow(0 0 40px rgba(255,255,255,0.5))' 
      : 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px rgba(102, 126, 234, 0.5))'};
  }

  &:hover .skill-name {
    color: ${colors.text.primary};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem 1rem;
    
    .skill-icon {
      font-size: 2.2rem;
    }
    
    .skill-name {
      font-size: 0.85rem;
    }
  }
`;

const ProgressSection = styled.div`
  margin-top: 4rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 3rem;
  margin-bottom: 2.5rem;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      90deg,
      ${props => props.color || '#3b82f6'} 0%,
      ${props => props.color ? `${props.color}88` : '#8b5cf6'} 100%
    );
    opacity: 1;
    border-radius: 28px 28px 0 0;
    box-shadow: 0 0 20px ${props => `${props.color}40` || 'rgba(59, 130, 246, 0.3)'};
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${props => `${props.color}10` || 'rgba(59, 130, 246, 0.1)'} 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-12px) scale(1.02);
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.3),
      0 15px 30px ${props => `${props.color}30` || 'rgba(59, 130, 246, 0.2)'},
      0 0 40px ${props => `${props.color}20` || 'rgba(59, 130, 246, 0.1)'};
    border-color: ${props => `${props.color}50` || 'rgba(59, 130, 246, 0.3)'};

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SkillTitle = styled.div`
  flex: 1;

  .skill-name {
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    position: relative;

    .skill-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: ${props => props.color || colors.secondary};
      opacity: 0.9;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      box-shadow: 
        0 4px 15px ${props => `${props.color}40` || 'rgba(59, 130, 246, 0.3)'},
        0 0 20px ${props => `${props.color}20` || 'rgba(59, 130, 246, 0.1)'};
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent 0%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 100%
        );
        transform: rotate(-45deg);
        transition: transform 0.6s ease;
      }

      &:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 
          0 6px 25px ${props => `${props.color}60` || 'rgba(59, 130, 246, 0.4)'},
          0 0 30px ${props => `${props.color}40` || 'rgba(59, 130, 246, 0.2)'};

        &::before {
          transform: rotate(-45deg) translate(100%, 100%);
        }
      }
    }
  }

  .skill-description {
    font-family: 'Pretendard-Regular';
    color: ${colors.text.secondary};
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .skill-experience {
    font-family: 'Pretendard-SemiBold';
    color: ${props => props.color || colors.secondary};
    font-size: 0.95rem;
    opacity: 0.9;
    padding: 0.4rem 1rem;
    background: ${props => `${props.color}15` || 'rgba(59, 130, 246, 0.1)'};
    border-radius: 20px;
    border: 1px solid ${props => `${props.color}30` || 'rgba(59, 130, 246, 0.2)'};
    display: inline-block;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => `${props.color}25` || 'rgba(59, 130, 246, 0.15)'};
      transform: translateY(-2px);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    .skill-name {
      font-size: 1.3rem;
      gap: 1rem;

      .skill-icon {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }
    
    .skill-description {
      font-size: 0.95rem;
    }
    
    .skill-experience {
      font-size: 0.85rem;
    }
  }
`;

const SkillLevel = styled.div`
  text-align: right;
  min-width: 120px;
  position: relative;
  
  .percentage {
    font-family: 'Pretendard-ExtraBold';
    color: ${props => props.color || colors.secondary};
    font-size: 2.8rem;
    line-height: 1;
    margin-bottom: 0.5rem;
    position: relative;
    text-shadow: 0 0 20px ${props => `${props.color}50` || 'rgba(59, 130, 246, 0.3)'};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        ${props => props.color || colors.secondary} 50%,
        transparent 100%
      );
      opacity: 0.6;
    }
  }
  
  .level-text {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.secondary};
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 1rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    display: inline-block;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(
      circle,
      ${props => `${props.color}20` || 'rgba(59, 130, 246, 0.2)'} 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    text-align: left;
    min-width: auto;
    
    .percentage {
      font-size: 2.2rem;
    }
    
    .level-text {
      font-size: 0.9rem;
    }
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.8rem;
`;

const ProjectTag = styled.span`
  background: rgba(255, 255, 255, 0.08);
  color: ${colors.text.secondary};
  padding: 0.4rem 1rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: ${colors.text.primary};
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 
    inset 0 2px 6px rgba(0, 0, 0, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    animation: backgroundShimmer 3s ease-in-out infinite;
  }

  @keyframes backgroundShimmer {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props => props.color || '#3b82f6'} 0%,
    ${props => props.color ? `${props.color}dd` : '#6366f1'} 50%,
    ${props => props.color || '#3b82f6'} 100%
  );
  border-radius: 15px;
  position: relative;
  box-shadow: 
    0 0 20px ${props => `${props.color}40` || 'rgba(59, 130, 246, 0.3)'},
    inset 0 1px 2px rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    border-radius: 15px;
    animation: progressShimmer 2.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 2px;
    right: 2px;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    border-radius: 10px;
    opacity: 0.8;
  }

  @keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${gradients.primary};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.secondary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${colors.text.secondary};
  }
`;

const skillIcons = {
  // Programming Languages
  'Java': { icon: <FaJava />, color: '#f89820' },
  'Python': { icon: <FaPython />, color: '#3776ab' },
  'JavaScript': { icon: <FaJs />, color: '#f7df1e' },
  
  // Frameworks
  'Spring': { icon: <SiSpring />, color: '#6db33f' },
  'Spring Boot': { icon: <SiSpringboot />, color: '#6db33f' },
  'Flask': { icon: <SiFlask />, color: '#ffffff' },
  'React': { icon: <FaReact />, color: '#61dafb' },
  'Next.js': { icon: <SiNextdotjs />, color: '#ffffff' },
  'Vue.js': { icon: <FaVuejs />, color: '#4fc08d' },
  'Flutter': { icon: <SiFlutter />, color: '#02569b' },
  'Android': { icon: <FaAndroid />, color: '#3ddc84' },
  'RESTful API': { icon: <FaCode />, color: '#ff6b6b' },
  'Ajax': { icon: <FaCode />, color: '#4ecdc4' },
  'Java Swing': { icon: <FaJava />, color: '#f89820' },
  'Thymeleaf': { icon: <SiSpring />, color: '#005f0f' },
  
  // Databases
  'MySQL': { icon: <SiMysql />, color: '#4479a1' },
  'Oracle': { icon: <SiOracle />, color: '#f80000' },
  'PostgreSQL': { icon: <SiPostgresql />, color: '#4169e1' },
  'Redis': { icon: <SiRedis />, color: '#dc382d' },
  'MongoDB': { icon: <SiMongodb />, color: '#47a248' },
  
  // Cloud & Deployment
  'AWS': { icon: <FaAws />, color: '#ff9900' },
  'Docker': { icon: <FaDocker />, color: '#2496ed' },
  
  // Tools
  'IntelliJ IDEA': { icon: <SiIntellijidea />, color: '#fe315d' },
  'PyCharm': { icon: <SiPycharm />, color: '#21d789' },
  'Android Studio': { icon: <SiAndroidstudio />, color: '#3ddc84' },
  'VSCode': { icon: <FaCode />, color: '#007acc' },
  'Eclipse': { icon: <SiEclipseide />, color: '#2c2255' },
  'Git': { icon: <FaGitAlt />, color: '#f05032' },
  'Notion': { icon: <SiNotion />, color: '#ffffff' },
  'Slack': { icon: <FaSlack />, color: '#4a154b' },
  'Figma': { icon: <FaFigma />, color: '#f24e1e' },
  'Discord': { icon: <FaDiscord />, color: '#5865f2' },
  'Maven/Gradle': { icon: <FaTools />, color: '#c71a36' },
  
  // Servers
  'Apache Tomcat': { icon: <SiApachetomcat />, color: '#f8dc75' },
  'Gunicorn': { icon: <FaServer />, color: '#499848' },
  'Node.js': { icon: <SiNodedotjs />, color: '#339933' },
  
  // Others
  'HTML': { icon: <FaCode />, color: '#e34c26' },
  'CSS': { icon: <FaCode />, color: '#1572b6' },
  'LLM': { icon: <FaCode />, color: '#8e44ad' },
  'Swagger': { icon: <SiSwagger />, color: '#85ea2d' }
};

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: '프로그래밍 언어', icon: <FaCode />, skills: skills.programming },
    { title: '프레임워크/라이브러리', icon: <FaReact />, skills: skills.frameworks },
    { title: '데이터베이스', icon: <FaDatabase />, skills: skills.databases },
    { title: '클라우드/배포', icon: <FaAws />, skills: skills.cloud },
    { title: '개발 도구', icon: <FaTools />, skills: skills.tools },
    { title: '협업 도구', icon: <FaUsers />, skills: skills.collaboration },
    { title: '서버', icon: <FaServer />, skills: skills.servers },
    { title: '기타', icon: <FaCode />, skills: skills.others }
  ];

  const mainSkills = [
    { 
      name: 'React/Next.js', 
      level: '초중급', 
      percentage: 60,
      description: '프로젝트 경험을 통한 컴포넌트 설계 및 상태관리 학습',
      projects: ['DevHub', 'TripplAI'],
      color: '#61dafb',
      experience: '1년'
    },
    { 
      name: 'Flutter/Mobile', 
      level: '초급', 
      percentage: 55,
      description: '모바일 앱 개발 및 스토어 배포 경험',
      projects: ['LittleBank'],
      color: '#02569b',
      experience: '6개월'
    },
    { 
      name: 'Java/Spring Boot', 
      level: '초급', 
      percentage: 50,
      description: 'RESTful API 구축 및 기본적인 백엔드 로직 구현',
      projects: ['DevHub', 'LittleBank'],
      color: '#6db33f',
      experience: '8개월'
    },
    { 
      name: 'Python/Flask', 
      level: '초급', 
      percentage: 50,
      description: 'AI API 연동 및 간단한 웹 서버 구축',
      projects: ['DevHub', 'TripplAI'],
      color: '#3776ab',
      experience: '6개월'
    },
    { 
      name: 'Database', 
      level: '초급', 
      percentage: 45,
      description: '기본적인 CRUD 작업 및 간단한 쿼리 작성',
      projects: ['DevHub', 'LittleBank', 'TripplAI'],
      color: '#4479a1',
      experience: '1년'
    },
    { 
      name: 'AWS/Docker', 
      level: '입문', 
      percentage: 40,
      description: '가이드를 참고한 기본적인 배포 및 컨테이너 사용',
      projects: ['DevHub', 'LittleBank'],
      color: '#ff9900',
      experience: '6개월'
    }
  ];

  const stats = [
    { number: '1+', label: '년의 개발 경험' },
    { number: '3', label: '주요 프로젝트' },
    { number: '15+', label: '사용 기술 스택' },
    { number: '2', label: '자격증 보유' }
  ];



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
    <SkillsSection id="skills">
      <SkillsBackground />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          기술 스택 & 도구
        </SectionTitle>
        
        <SkillsContainer>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <CategoryHeader>
                <span className="icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </CategoryHeader>
              
              <SkillsGrid>
                {category.skills.map((skill, skillIndex) => {
                  const isWhiteIcon = ['Flask', 'Next.js', 'Notion'].includes(skill);
                  return (
                    <SkillItem
                      key={skill}
                      $isWhite={isWhiteIcon}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="skill-icon" style={{ 
                        color: skillIcons[skill]?.color || colors.primary 
                      }}>
                        {skillIcons[skill]?.icon || <FaCode />}
                      </div>
                      <div className="skill-name">{skill}</div>
                    </SkillItem>
                  );
                })}
              </SkillsGrid>
            </SkillCategory>
          ))}
        </SkillsContainer>

        <ProgressSection>
          <SectionTitle 
            style={{ 
              fontSize: '2.2rem', 
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06d6a0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: 'none',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            주요 기술 숙련도
          </SectionTitle>
          
          {mainSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              color={skill.color}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                rotateX: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <SkillHeader>
                <SkillTitle color={skill.color}>
                  <div className="skill-name">
                    <div className="skill-icon" style={{ background: skill.color }}>
                      {(() => {
                        const skillKey = skill.name.split('/')[0]; // React/Next.js -> React
                        if (skillKey === 'React') return skillIcons['React']?.icon;
                        if (skillKey === 'Flutter') return skillIcons['Flutter']?.icon;
                        if (skillKey === 'Java') return skillIcons['Java']?.icon;
                        if (skillKey === 'Python') return skillIcons['Python']?.icon;
                        if (skillKey === 'Database') return skillIcons['MySQL']?.icon;
                        if (skillKey === 'AWS') return skillIcons['AWS']?.icon;
                        return skillIcons[skillKey]?.icon || <FaCode />;
                      })()}
                    </div>
                    {skill.name}
                  </div>
                  <div className="skill-description">
                    {skill.description}
                  </div>
                  <div className="skill-experience">
                    경험 기간: {skill.experience}
                  </div>
                </SkillTitle>
                
                <SkillLevel color={skill.color}>
                  <div className="percentage">{skill.percentage}%</div>
                  <div className="level-text">{skill.level}</div>
                </SkillLevel>
              </SkillHeader>

              <ProjectTags>
                {skill.projects.map((project, projectIndex) => (
                  <ProjectTag key={projectIndex}>
                    {project}
                  </ProjectTag>
                ))}
              </ProjectTags>

              <ProgressBar>
                <ProgressFill
                  color={skill.color}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                />
              </ProgressBar>
            </SkillCard>
          ))}
        </ProgressSection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;