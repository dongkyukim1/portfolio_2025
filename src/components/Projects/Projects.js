import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, 
  FaTimes, FaRocket, FaMobile, FaGlobe, FaCode,
  FaPlay, FaPause, FaVolumeUp, FaVolumeMute
} from 'react-icons/fa';
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
import { currentWorkData } from '../../data/currentWork';
import { additionalProjectsData } from '../../data/additionalProjects';

// 로고 이미지 import
import devhubLogo from '../../assets/projects/logo/devhublogo.jpg';
import littlebankLogo from '../../assets/projects/logo/littlebanklogo.png';
import tripplaiLogo from '../../assets/projects/logo/Tripplailogo.png';

// 현재 담당 프로젝트 이미지 import
import pmkAdminImage from '../../assets/gallery/pmk_admin.png';
import littlebankAdminImage from '../../assets/gallery/littlebank_admin.png';
import lguSecurityImage from '../../assets/projects/management/LGU+security.png';

// 2024년 기타 프로젝트 썸네일 이미지 import
import vuePortfolioImg from '../../assets/projects/2024_projects/Vue_portfolio.png';
import msaImg from '../../assets/projects/2024_projects/msa.png';
import aiImageImg from '../../assets/projects/2024_projects/ai_image.png';
import mcpImg from '../../assets/projects/2024_projects/mcp.png';
import swingImg from '../../assets/projects/2024_projects/swing.png';
import rpaImg from '../../assets/projects/2024_projects/rpa.png';

const ProjectsSection = styled(TransparentSectionBackground)`
  padding: 80px 0 40px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.8rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.6rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  /* 작은 모바일 화면에서 여백 조정 */
  @media (max-width: 360px) {
    gap: 1.2rem;
    margin-bottom: 2rem;
  }
`;

// 현재 직장 프로젝트용 스타일드 컴포넌트들
const WorkSection = styled.div`
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

// 올해 진행한 기타 프로젝트용 스타일드 컴포넌트들
const AdditionalSection = styled.div`
  margin-top: 80px;
  padding-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  }
`;

const CompanyHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const CompanyName = styled.h3`
  font-size: 2rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const CompanyPosition = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`;

const CompanyPeriod = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
`;

// 추가 프로젝트용 헤더
const AdditionalHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  padding: 25px;
  background: rgba(16, 185, 129, 0.03);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const AdditionalTitle = styled.h3`
  font-size: 1.8rem;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-family: 'Pretendard-Bold';
`;

const AdditionalDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const WorkProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-left: 4px solid #3b82f6;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-left-color: #8b5cf6;
  }
`;

const AdditionalProjectCard = styled(motion.div)`
  background: rgba(16, 185, 129, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  border-left: 4px solid #10b981;

  &:hover {
    background: rgba(16, 185, 129, 0.05);
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.15);
    border-left-color: #3b82f6;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 220px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)" /></svg>');
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.3) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  .project-logo-container {
    width: 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1;
    transition: all 0.3s ease;
    position: relative;
  }

  .project-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.95) contrast(1.1);
    transition: all 0.3s ease;
  }

  &:hover .project-logo-container {
    transform: scale(1.05);
    border-color: rgba(102, 126, 234, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  &:hover .project-logo {
    filter: brightness(1) contrast(1.15);
  }

  .project-icon {
    z-index: 1;
    filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-family: 'Pretendard-Bold';
  color: ${colors.text.primary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${colors.text.secondary};

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: 'Pretendard-Regular';
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  margin-bottom: 1.5rem;

  .tech-label {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const TechTag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #a5b4fc;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.a`
  flex: 1;
  background: ${props => props.primary ? 'rgba(102, 126, 234, 0.2)' : 'transparent'};
  color: ${props => props.primary ? '#a5b4fc' : colors.text.secondary};
  border: ${props => props.primary ? '1px solid rgba(102, 126, 234, 0.3)' : `1px solid rgba(255, 255, 255, 0.2)`};
  padding: 0.7rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.85rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    background: ${props => props.primary ? 'rgba(102, 126, 234, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    color: white;
    border-color: rgba(102, 126, 234, 0.5);
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    switch (props.status) {
      case 'completed': return 'rgba(16, 185, 129, 0.2)';
      case 'in-progress': return 'rgba(245, 158, 11, 0.2)';
      case 'planning': return 'rgba(107, 114, 128, 0.2)';
      default: return 'rgba(59, 130, 246, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planning': return '#6b7280';
      default: return '#3b82f6';
    }
  }};
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Pretendard-SemiBold';
  z-index: 3;
  border: 1px solid ${props => {
    switch (props.status) {
      case 'completed': return 'rgba(16, 185, 129, 0.3)';
      case 'in-progress': return 'rgba(245, 158, 11, 0.3)';
      case 'planning': return 'rgba(107, 114, 128, 0.3)';
      default: return 'rgba(59, 130, 246, 0.3)';
    }
  }};
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px 20px 0 0;

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin: 0;
    flex: 1;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  margin: -0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.text.primary};
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;

  .section {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    color: ${colors.text.secondary};
  }

  strong {
    color: ${colors.text.primary};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
    color: ${colors.text.secondary};

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
  }
`;

const ChallengeList = styled.div`
  .challenge-item {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    border-left: 4px solid rgba(245, 158, 11, 0.5);

    .challenge-title {
      font-family: 'Pretendard-SemiBold';
      color: ${colors.text.primary};
      margin-bottom: 0.5rem;
    }

    .challenge-solution {
      color: ${colors.text.secondary};
      line-height: 1.6;
    }
  }
`;

// Projects용 배경 애니메이션 컴포넌트
const ProjectsBackground = () => {
  const projectsCodeSnippets = [
    'npm create react-app my-project',
    'flutter pub get && flutter run',
    'git clone https://github.com/user/repo',
    'docker-compose up --build',
    'const project = new Innovation();',
    'export default MyAwesomeProject;',
    'yarn build && yarn deploy',
    'console.log("Project completed!");'
  ];

  return (
    <BackgroundContainer>
      {/* 미니멀 라인들 */}
      {[...Array(8)].map((_, i) => (
        <MinimalLine
          key={`line-${i}`}
          width={`${Math.random() * 200 + 120}px`}
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
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 기하학적 오브들 - 더 큰 사이즈 */}
      {[...Array(6)].map((_, i) => (
        <GeometricOrb
          key={`orb-${i}`}
          style={{
            width: Math.random() * 300 + 150,
            height: Math.random() * 300 + 150,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          gradient={`radial-gradient(circle, rgba(${
            i % 3 === 0 ? '59, 130, 246' :
            i % 3 === 1 ? '147, 51, 234' : '16, 185, 129'
          }, 0.06) 0%, transparent 70%)`}
          blur={`${Math.random() * 4 + 2}px`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 4
          }}
        />
      ))}

      {/* 회전하는 링들 - 더 많고 다양한 크기 */}
      {[...Array(5)].map((_, i) => (
        <RotatingRing
          key={`ring-${i}`}
          style={{
            width: 150 + i * 70,
            height: 150 + i * 70,
            top: `${10 + i * 18}%`,
            right: `${8 + i * 8}%`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30 + i * 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 데이터 스트림 - 더 역동적 */}
      {[...Array(10)].map((_, i) => (
        <DataStream
          key={`stream-${i}`}
          style={{
            height: Math.random() * 200 + 120,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: Math.random() * 12,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 프로젝트 관련 코드 요소들 */}
      {projectsCodeSnippets.map((code, i) => (
        <CodeElement
          key={`code-${i}`}
          style={{
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
            fontSize: '13px',
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -25, -50, -75],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear"
          }}
        >
          {code}
        </CodeElement>
      ))}

      {/* 애니메이션 파티클들 - 더 많고 활발 */}
      {[...Array(20)].map((_, i) => (
        <AnimatedParticle
          key={`particle-${i}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
            x: [0, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 150 - 75, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
        />
      ))}

      {/* 기하학적 도형들 - 프로젝트 테마 */}
      <GeometricShape
        style={{ top: '25%', left: '20%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <GeometricShape
        style={{ 
          top: '70%', 
          right: '15%',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.4, 0.9],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <GeometricShape
        style={{ 
          bottom: '30%', 
          left: '30%',
          borderRadius: '20px'
        }}
        animate={{
          rotate: [60, 180, 60],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        style={{ 
          top: '15%', 
          right: '5%',
          borderRadius: '12px',
          width: '100px',
          height: '100px'
        }}
        animate={{
          rotate: [0, 270, 360],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <GeometricShape
        style={{ 
          bottom: '10%', 
          right: '40%',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          width: '90px',
          height: '90px'
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </BackgroundContainer>
  );
};

const Projects = () => {
  const { projects, personal } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // 프로젝트별 로고 매핑
  const projectLogos = {
    'DevHub: 깃보다 쉽게 \'형상관리\'와 \'코드리뷰\'': devhubLogo,
    'LittleBank': littlebankLogo,
    'TripplAI': tripplaiLogo
  };

  // 현재 담당 프로젝트 이미지 매핑
  const currentWorkImages = {
    'PMK 제네시스 콜시스템 장애이력 관리시스템': pmkAdminImage,
    'LittleBank 어드민 결제관리시스템': littlebankAdminImage,
    'LGU+ Visual Ring Biz 시스템 유지보수': lguSecurityImage
  };

  // 2024년 기타 프로젝트 이미지 매핑
  const additionalProjectImages = {
    'MSA Practice': msaImg,
    'MCP 통합관리제어시스템': mcpImg,
    'AI 이미지 생성기': aiImageImg,
    'Java Swing 미니프로젝트': swingImg,
    'Vue.js 포트폴리오': vuePortfolioImg,
    'RPA 자동화': rpaImg
  };

  const getProjectIcon = (project) => {
    if (project.title.includes('DevHub')) return <FaCode />;
    if (project.title.includes('LittleBank') && !project.title.includes('어드민')) return '🏦';
    if (project.title.includes('Trippl')) return '✈️';
    if (project.title.includes('PMK') || project.title.includes('콜시스템')) return '📞';
    if (project.title.includes('LittleBank 어드민')) return '💰';
    if (project.title.includes('LGU+') || project.title.includes('Visual Ring')) return '⚙️';
    if (project.title.includes('포트폴리오')) return '🌐';
    if (project.title.includes('Spring Boot') || project.title.includes('API')) return '⚙️';
    if (project.title.includes('React') || project.title.includes('TypeScript')) return <FaCode />;
    if (project.title.includes('Flutter') || project.title.includes('날씨')) return '📱';
    if (project.title.includes('Python') || project.title.includes('크롤링')) return '🐍';
    if (project.title.includes('Vue')) return '💚';
    return <FaCode />;
  };

  const getProjectStatus = (project) => {
    if (project.status === 'Google Play Store 비공개 테스트 중') return 'in-progress';
    if (project.status === '관광 API 공모전 진출') return 'in-progress';
    if (project.status === '운영 중') return 'in-progress';
    return 'completed';
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '완료';
      case 'in-progress': return '진행중';
      case 'planning': return '기획중';
      default: return '완료';
    }
  };

  const openModal = (project) => {
    // 각 프로젝트별 상세페이지로 이동
    if (project.title === 'LittleBank') {
      navigate('/project/littlebank');
      return;
    }
    if (project.title === 'TripplAI') {
      navigate('/project/tripplai');
      return;
    }
    if (project.title.includes('DevHub')) {
      navigate('/project/devhub');
      return;
    }
    if (project.title.includes('PMK') || project.title.includes('LittleBank 어드민') || project.title.includes('LGU+')) {
      navigate('/project/dashboard');
      return;
    }
    
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(project)}
              >
                <ProjectImage>
                  <StatusBadge status={getProjectStatus(project)}>
                    {getStatusText(getProjectStatus(project))}
                  </StatusBadge>
                  {projectLogos[project.title] ? (
                    <div className="project-logo-container">
                      <img 
                        src={projectLogos[project.title]} 
                        alt={`${project.title} logo`} 
                        className="project-logo"
                      />
                    </div>
                  ) : (
                    <div className="project-icon">{getProjectIcon(project)}</div>
                  )}
                </ProjectImage>

                <ProjectContent>
                  <ProjectHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    
                    <ProjectMeta>
                      <div className="meta-item">
                        <FaCalendarAlt />
                        {project.period}
                      </div>
                      <div className="meta-item">
                        <FaUsers />
                        {project.role}
                      </div>
                    </ProjectMeta>
                  </ProjectHeader>

                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>

                  <TechStack>
                    <div className="tech-label">기술 스택</div>
                    <div className="tech-list">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                      {project.tech.length > 6 && (
                        <TechTag>+{project.tech.length - 6}개</TechTag>
                      )}
                    </div>
                  </TechStack>

                  <ProjectActions>
                    <ActionButton primary>
                      <FaRocket />
                      {project.title === 'LittleBank' || project.title === 'TripplAI' ? '상세 페이지' : '자세히 보기'}
                    </ActionButton>
                    {project.link && (
                      <ActionButton 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                        데모
                      </ActionButton>
                    )}
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          {/* 현재 직장 프로젝트 섹션 */}
          <WorkSection>
            <motion.div variants={itemVariants}>
              <CompanyHeader>
                <CompanyName>{currentWorkData.company.name}</CompanyName>
                <CompanyPosition>{currentWorkData.company.position}</CompanyPosition>
                <CompanyPeriod>{currentWorkData.company.period}</CompanyPeriod>
              </CompanyHeader>
            </motion.div>

            <motion.div variants={containerVariants}>
              <SectionTitle>현재 담당 프로젝트</SectionTitle>
              <ProjectsGrid>
                {currentWorkData.projects.map((project, index) => (
                  <WorkProjectCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    onClick={() => openModal(project)}
                  >
                    <ProjectImage style={{ 
                      background: project.type === 'management' 
                        ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)'
                    }}>
                      {currentWorkImages[project.title] ? (
                        <div className="project-logo-container">
                          <img 
                            src={currentWorkImages[project.title]} 
                            alt={`${project.title} 이미지`} 
                            className="project-logo"
                          />
                        </div>
                      ) : (
                        <div className="project-icon">
                          {project.type === 'management' ? '🔧' : '⚙️'}
                        </div>
                      )}
                    </ProjectImage>

                    <ProjectContent>
                      <ProjectHeader>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        
                        <ProjectMeta>
                          <div className="meta-item">
                            <FaCalendarAlt />
                            {project.period}
                          </div>
                          <div className="meta-item">
                            <FaUsers />
                            {project.role}
                          </div>
                        </ProjectMeta>
                      </ProjectHeader>

                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>

                      <TechStack>
                        <div className="tech-label">기술 스택</div>
                        <div className="tech-list">
                          {project.tech.slice(0, 6).map((tech, techIndex) => (
                            <TechTag key={techIndex}>{tech}</TechTag>
                          ))}
                          {project.tech.length > 6 && (
                            <TechTag>+{project.tech.length - 6}개</TechTag>
                          )}
                        </div>
                      </TechStack>

                      <ProjectActions>
                        <ActionButton primary>
                          <FaRocket />
                          {project.title.includes('PMK') || project.title.includes('LittleBank 어드민') || project.title.includes('LGU+') ? '상세 페이지' : '자세히 보기'}
                        </ActionButton>
                      </ProjectActions>
                    </ProjectContent>
                  </WorkProjectCard>
                ))}
              </ProjectsGrid>
            </motion.div>
          </WorkSection>

          {/* 올해 진행한 기타 프로젝트 섹션 */}
          <AdditionalSection>
            <motion.div variants={itemVariants}>
              <AdditionalHeader>
                <AdditionalTitle>{additionalProjectsData.title}</AdditionalTitle>
                <AdditionalDescription>{additionalProjectsData.description}</AdditionalDescription>
              </AdditionalHeader>
            </motion.div>

            <motion.div variants={containerVariants}>
              <ProjectsGrid>
                {additionalProjectsData.projects.map((project, index) => (
                  <AdditionalProjectCard
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -12 }}
                  >
                    <ProjectImage style={{ 
                      background: project.type === 'learning' 
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)'
                    }}>
                      <StatusBadge status={project.status === '완료' ? 'completed' : 'in-progress'}>
                        {project.status}
                      </StatusBadge>
                      {additionalProjectImages[project.title] ? (
                        <div className="project-logo-container">
                          <img 
                            src={additionalProjectImages[project.title]} 
                            alt={`${project.title} 썸네일`} 
                            className="project-logo"
                          />
                        </div>
                      ) : (
                        <div className="project-icon">
                          {getProjectIcon(project)}
                        </div>
                      )}
                    </ProjectImage>

                    <ProjectContent>
                      <ProjectHeader>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        
                        <ProjectMeta>
                          <div className="meta-item">
                            <FaCalendarAlt />
                            {project.period}
                          </div>
                          <div className="meta-item">
                            <FaUsers />
                            {project.role}
                          </div>
                          <div className="meta-item">
                            <span style={{ 
                              background: project.type === 'learning' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(147, 51, 234, 0.2)', 
                              color: project.type === 'learning' ? '#3b82f6' : '#8b5cf6',
                              padding: '2px 8px',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '600'
                            }}>
                              {project.type === 'learning' ? '학습' : project.type === 'personal' ? '개인' : '기타'}
                            </span>
                          </div>
                        </ProjectMeta>
                      </ProjectHeader>

                      <ProjectDescription>
                        {project.description}
                      </ProjectDescription>

                      <TechStack>
                        <div className="tech-label">기술 스택</div>
                        <div className="tech-list">
                          {project.tech.slice(0, 5).map((tech, techIndex) => (
                            <TechTag key={techIndex} style={{
                              background: 'rgba(16, 185, 129, 0.1)',
                              color: '#10b981',
                              borderColor: 'rgba(16, 185, 129, 0.2)'
                            }}>{tech}</TechTag>
                          ))}
                          {project.tech.length > 5 && (
                            <TechTag style={{
                              background: 'rgba(16, 185, 129, 0.1)',
                              color: '#10b981',
                              borderColor: 'rgba(16, 185, 129, 0.2)'
                            }}>+{project.tech.length - 5}개</TechTag>
                          )}
                        </div>
                      </TechStack>


                    </ProjectContent>
                  </AdditionalProjectCard>
                ))}
              </ProjectsGrid>
            </motion.div>
          </AdditionalSection>

          {/* 추가 프로젝트 링크 */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', marginTop: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontFamily: 'Pretendard-SemiBold', 
              color: colors.text.primary, 
              marginBottom: '2rem' 
            }}>
              더 많은 프로젝트 보기
            </h3>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <ActionButton 
                href={personal.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                primary
              >
                <FaGithub />
                GitHub 저장소
              </ActionButton>
              
              <ActionButton 
                href={personal.links.portfolio} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGlobe />
                포트폴리오 2024
              </ActionButton>
              
              <ActionButton 
                href={personal.links.playstore} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMobile />
                리틀뱅크 앱
              </ActionButton>
            </div>
          </motion.div>
        </motion.div>

        {/* 프로젝트 상세 모달 */}
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <h3>{selectedProject.title}</h3>
                <CloseButton onClick={closeModal}>
                  <FaTimes />
                </CloseButton>
              </ModalHeader>

              <ModalBody>
                <div className="section">
                  <div className="section-title">프로젝트 개요</div>
                  <p style={{ lineHeight: 1.7, color: colors.text.secondary }}>
                    {selectedProject.description}
                  </p>
                  <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span><strong>기간:</strong> {selectedProject.period}</span>
                    <span><strong>역할:</strong> {selectedProject.role}</span>
                    {selectedProject.status && (
                      <span><strong>상태:</strong> {selectedProject.status}</span>
                    )}
                  </div>
                </div>

                {selectedProject.features && (
                  <div className="section">
                    <div className="section-title">주요 기능</div>
                    <FeatureList>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </FeatureList>
                  </div>
                )}

                <div className="section">
                  <div className="section-title">사용 기술</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.tech.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </div>
                </div>

                {selectedProject.challenges && (
                  <div className="section">
                    <div className="section-title">기술적 도전 & 해결</div>
                    <ChallengeList>
                      {selectedProject.challenges.map((challenge, index) => (
                        <div key={index} className="challenge-item">
                          <div className="challenge-solution">{challenge}</div>
                        </div>
                      ))}
                    </ChallengeList>
                  </div>
                )}

                {selectedProject.link && (
                  <div className="section">
                    <ActionButton 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      primary
                      style={{ display: 'inline-flex', width: 'auto' }}
                    >
                      <FaExternalLinkAlt />
                      프로젝트 보러가기
                    </ActionButton>
                  </div>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;