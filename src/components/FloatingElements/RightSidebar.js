import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaBlog, FaExternalLinkAlt, FaMobile, FaChevronLeft, 
  FaChevronRight, FaReact, FaVuejs, FaJava, FaPython, FaAws, FaImages,
  FaTimes
} from 'react-icons/fa';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 목업 프로젝트 화면단 데이터
const mockupScreenshots = [
  {
    id: 1,
    title: 'Devhub 랜딩 페이지',
    description: '개발자 커뮤니티 플랫폼의 메인 화면',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'Devhub 대시보드',
    description: '사용자 맞춤형 개발 뉴스 피드',
    tech: ['Vue.js', 'Express', 'MySQL'],
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: '리틀뱅크 모바일 앱',
    description: '아이들을 위한 금융 교육 앱',
    tech: ['Flutter', 'Dart', 'Firebase'],
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    title: 'Tripplai 여행 플래너',
    description: 'AI 기반 여행 계획 웹사이트',
    tech: ['React', 'Python', 'FastAPI'],
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 5,
    title: '포트폴리오 웹사이트',
    description: '개인 포트폴리오 및 이력서 사이트',
    tech: ['React', 'Styled Components', 'Framer Motion'],
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 6,
    title: 'E-Commerce 쇼핑몰',
    description: '반응형 온라인 쇼핑 플랫폼',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  {
    id: 7,
    title: '날씨 대시보드',
    description: '실시간 날씨 정보 및 예보 서비스',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    id: 8,
    title: '할일 관리 앱',
    description: '팀 협업을 위한 태스크 매니저',
    tech: ['React Native', 'Redux', 'Socket.io'],
    color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
  }
];

const ProjectGalleryBackground = styled(motion.div)`
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-800px'};
  top: 0;
  width: 800px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(20px);
  z-index: 900;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  padding: 1.5rem;

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  min-height: calc(100vh - 4rem);
`;

const GalleryTitle = styled(motion.h2)`
  grid-column: 1 / -1;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 2.5rem;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .project-icon {
    color: white;
    font-size: 3rem;
    opacity: 0.8;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(255,255,255,0.1) 25%, 
      transparent 25%, 
      transparent 75%, 
      rgba(255,255,255,0.1) 75%
    );
    background-size: 30px 30px;
    animation: slide 3s linear infinite;
  }

  @keyframes slide {
    0% { transform: translateX(-30px); }
    100% { transform: translateX(30px); }
  }
`;

const ProjectDetails = styled.div`
  padding: 1.5rem;

  .project-title {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 700;
    font-size: 1.3rem;
    color: ${colors.dark};
    margin-bottom: 0.8rem;
  }

  .project-description {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 0.9rem;
    color: ${colors.textLight};
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
    color: white;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', 'Noto Sans KR';
  }
`;

const SidebarContainer = styled(motion.div)`
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-320px'};
  top: 50%;
  transform: translateY(-50%);
  width: 350px;
  height: 90vh;
  max-height: 800px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 25px 0 0 25px;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.8);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const ToggleButton = styled(motion.button)`
  position: fixed;
  right: ${props => props.isOpen ? '320px' : '2rem'};
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border: none;
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  backdrop-filter: blur(10px);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }

  &:hover {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.primary});
    color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
  }
`;

const SidebarContent = styled.div`
  padding: 1.5rem 1.8rem;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.2rem;
  color: ${colors.dark};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: ${gradients.primary};
    border-radius: 1px;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: ${colors.dark};
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${gradients.primary};
    color: white;
    transform: translateY(-2px);
  }

  .icon {
    font-size: 1.3rem;
  }

  .label {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 500;
    font-size: 0.7rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const TechItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  font-size: 0.7rem;
  color: ${colors.dark};
  transition: all 0.3s ease;

  &:hover {
    background: ${gradients.primary};
    color: white;
    transform: scale(1.05);
  }

  .icon {
    font-size: 0.9rem;
  }
`;



const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  background: rgba(46, 204, 113, 0.1);
  border-radius: 10px;
  text-align: center;

  .status-dot {
    width: 8px;
    height: 8px;
    background: ${colors.success};
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .status-text {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 500;
    font-size: 0.8rem;
    color: ${colors.success};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;



const RightSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { personal } = portfolioData;

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: personal.links.github },
    { icon: <FaBlog />, label: 'Blog', url: personal.links.blog },
    { icon: <FaExternalLinkAlt />, label: 'Portfolio', url: personal.links.portfolio },
    { icon: <FaMobile />, label: 'App Demo', url: personal.links.playstore }
  ];

  const mainTechs = [
    { icon: <FaReact />, name: 'React', color: '#61dafb' },
    { icon: <FaVuejs />, name: 'Vue.js', color: '#4fc08d' },
    { icon: <FaJava />, name: 'Java', color: '#f89820' },
    { icon: <FaPython />, name: 'Python', color: '#3776ab' },
    { icon: <FaAws />, name: 'AWS', color: '#ff9900' }
  ];



  return (
    <>
      {/* 프로젝트 갤러리 백그라운드 */}
      <ProjectGalleryBackground isOpen={isGalleryOpen}>
        <CloseButton
          onClick={() => setIsGalleryOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </CloseButton>
        <GalleryContent>
          <GalleryTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🎨 Project Gallery
          </GalleryTitle>
          
          {mockupScreenshots.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.6 + index * 0.1,
                duration: 0.4 
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImage color={project.color}>
                <FaImages className="project-icon" />
              </ProjectImage>
              <ProjectDetails>
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </ProjectDetails>
            </ProjectCard>
          ))}
        </GalleryContent>
      </ProjectGalleryBackground>

      {!isSidebarOpen && !isGalleryOpen && (
        <ToggleButton
          isOpen={false}
          onClick={() => {
            setIsSidebarOpen(true);
            setIsGalleryOpen(true);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft />
        </ToggleButton>
      )}
      
      <SidebarContainer isOpen={isSidebarOpen}>
        <CloseButton
          onClick={() => setIsSidebarOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </CloseButton>
        <SidebarContent>
          {/* 현재 상태 */}
          <div>
            <SectionTitle>현재 상태</SectionTitle>
          <StatusIndicator>
            <div className="status-dot"></div>
            <div className="status-text">구직 중 (Open to Work)</div>
          </StatusIndicator>
        </div>

        {/* 소셜 링크 */}
        <div>
          <SectionTitle>Links</SectionTitle>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="icon">{link.icon}</div>
                <div className="label">{link.label}</div>
              </SocialLink>
            ))}
          </SocialLinks>
        </div>

        {/* 주요 기술 스택 */}
        <div>
          <SectionTitle>Main Stack</SectionTitle>
          <TechStack>
            {mainTechs.map((tech, index) => (
              <TechItem
                key={index}
                whileHover={{ scale: 1.05 }}
                style={{ '--tech-color': tech.color }}
              >
                <div className="icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                {tech.name}
              </TechItem>
            ))}
          </TechStack>
        </div>



        {/* 연락처 */}
        <div>
          <SectionTitle>Contact</SectionTitle>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontFamily: "'Inter', 'Noto Sans KR'", 
              fontSize: '0.8rem', 
              color: colors.textLight,
              marginBottom: '0.5rem'
            }}>
              {personal.email}
            </div>
            <div style={{ 
              fontFamily: "'Inter', 'Noto Sans KR'", 
              fontSize: '0.8rem', 
              color: colors.textLight 
            }}>
              {personal.phone}
            </div>
          </div>
        </div>
      </SidebarContent>
    </SidebarContainer>
    </>
  );
};

export default RightSidebar;