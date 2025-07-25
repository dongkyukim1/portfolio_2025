import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaBlog, FaExternalLinkAlt, FaMobile, FaChevronLeft, 
  FaReact, FaVuejs, FaJava, FaPython, FaAws, FaImages,
  FaTimes, FaNodeJs
} from 'react-icons/fa';
import { 
  SiMongodb, SiSocketdotio, SiStyledcomponents, SiFramer,
  SiFlutter, SiDart, SiFirebase, SiSqlite, SiMysql,
  SiExpress, SiPostgresql, SiRedis, SiFastapi, SiOpenai,
  SiChartdotjs, SiTypescript
} from 'react-icons/si';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 갤러리 이미지 import
import devhubImg from '../../assets/gallery/devhub.gif';
import dogfootImg from '../../assets/gallery/dogfoot.png';
import littlebankImg from '../../assets/gallery/littlebank.png';
import littlebankAdminImg from '../../assets/gallery/littlebank_admin.png';
import pmkAdminImg from '../../assets/gallery/pmk_admin.png';
import tripplaiImg from '../../assets/gallery/trippleai.png';

// 기술 스택 아이콘 매핑
const techIcons = {
  'React': { icon: <FaReact />, color: '#61dafb' },
  'Node.js': { icon: <FaNodeJs />, color: '#339933' },
  'MongoDB': { icon: <SiMongodb />, color: '#47A248' },
  'Socket.io': { icon: <SiSocketdotio />, color: '#010101' },
  'Styled Components': { icon: <SiStyledcomponents />, color: '#DB7093' },
  'Framer Motion': { icon: <SiFramer />, color: '#0055FF' },
  'Flutter': { icon: <SiFlutter />, color: '#02569B' },
  'Dart': { icon: <SiDart />, color: '#0175C2' },
  'Firebase': { icon: <SiFirebase />, color: '#FFCA28' },
  'SQLite': { icon: <SiSqlite />, color: '#003B57' },
  'Chart.js': { icon: <SiChartdotjs />, color: '#FF6384' },
  'MySQL': { icon: <SiMysql />, color: '#4479A1' },
  'Vue.js': { icon: <FaVuejs />, color: '#4FC08D' },
  'Express': { icon: <SiExpress />, color: '#000000' },
  'PostgreSQL': { icon: <SiPostgresql />, color: '#336791' },
  'Redis': { icon: <SiRedis />, color: '#DC382D' },
  'Python': { icon: <FaPython />, color: '#3776AB' },
  'FastAPI': { icon: <SiFastapi />, color: '#009688' },
  'OpenAI': { icon: <SiOpenai />, color: '#412991' }
};

// 실제 프로젝트 갤러리 데이터
const projectGallery = [
  {
    id: 1,
    title: 'Devhub 개발자 커뮤니티',
    description: '개발자를 위한 커뮤니티 플랫폼 웹사이트',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: devhubImg,
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: '개발자 포트폴리오 사이트',
    description: '개발자 개인 포트폴리오 및 이력서 웹사이트',
    tech: ['React', 'Styled Components', 'Framer Motion'],
    image: dogfootImg,
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    id: 3,
    title: '리틀뱅크 모바일 앱',
    description: '아이들을 위한 금융 교육 모바일 애플리케이션',
    tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    image: littlebankImg,
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    id: 4,
    title: '리틀뱅크 관리자 대시보드',
    description: '리틀뱅크 앱을 위한 관리자 웹 대시보드',
    tech: ['React', 'Chart.js', 'Node.js', 'MySQL'],
    image: littlebankAdminImg,
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    id: 5,
    title: 'PMK 관리 시스템',
    description: '프로젝트 관리를 위한 어드민 시스템',
    tech: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
    image: pmkAdminImg,
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    id: 6,
    title: 'Tripplai 여행 플래너',
    description: 'AI 기반 맞춤형 여행 계획 웹 서비스',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    image: tripplaiImg,
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  }
];

const ProjectGalleryBackground = styled(motion.div)`
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-820px'};
  top: 0;
  width: 800px;
  height: 100vh;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(20px);
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  padding: 1.5rem;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};

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
  position: relative;
  z-index: 1001;
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
  height: 200px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .tech-icons-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    z-index: 3;
  }

  .tech-icon {
    font-size: 2.5rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    transition: all 0.3s ease;
  }

  &:hover .tech-icon {
    transform: scale(1.1);
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(0,0,0,0.1) 0%, 
      rgba(0,0,0,0.3) 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,255,255,0.05) 10px,
      rgba(255,255,255,0.05) 20px
    );
    z-index: 2;
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
  padding: 2rem 1.8rem;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

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
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1003;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
`;

const SidebarCloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  color: ${colors.primary};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1002;

  &:hover {
    background: ${colors.primary};
    color: white;
    transform: scale(1.1);
  }
`;



const RightSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { personal } = portfolioData;

  console.log('갤러리 상태:', isGalleryOpen, '사이드바 상태:', isSidebarOpen);

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
      {/* 갤러리 닫기 버튼 - 갤러리 외부에 독립 배치 */}
      {isGalleryOpen && (
        <CloseButton
          onClick={() => {
            console.log('갤러리 닫기 버튼 클릭');
            setIsGalleryOpen(false);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 2000
          }}
        >
          <FaTimes />
        </CloseButton>
      )}

      {/* 프로젝트 갤러리 백그라운드 */}
      <ProjectGalleryBackground 
        isOpen={isGalleryOpen}
        initial={{ x: 800 }}
        animate={{ x: isGalleryOpen ? 0 : 800 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <GalleryContent>
          <GalleryTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            🎨 Project Gallery
          </GalleryTitle>
          
          {projectGallery.map((project, index) => (
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
                <div className="tech-icons-container">
                  {project.tech.slice(0, 6).map((tech, techIndex) => {
                    const techData = techIcons[tech];
                    return techData ? (
                      <div 
                        key={techIndex} 
                        className="tech-icon"
                        style={{ color: techData.color }}
                        title={tech}
                      >
                        {techData.icon}
                      </div>
                    ) : null;
                  })}
                </div>
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

      {/* 메인 토글 버튼 - 둘 다 닫혔을 때만 표시 */}
      {!isSidebarOpen && !isGalleryOpen && (
        <ToggleButton
          isOpen={false}
          onClick={() => {
            setIsSidebarOpen(true);
            setIsGalleryOpen(true);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ right: '2rem' }}
        >
          <FaChevronLeft />
        </ToggleButton>
      )}

      {/* 갤러리 토글 버튼 - 갤러리만 닫혔을 때 */}
      {!isGalleryOpen && isSidebarOpen && (
        <ToggleButton
          isOpen={false}
          onClick={() => setIsGalleryOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            right: '370px',
            background: 'linear-gradient(135deg, #43e97b, #38f9d7)'
          }}
        >
          <FaImages />
        </ToggleButton>
      )}

      {/* 사이드바 토글 버튼 - 사이드바만 닫혔을 때 */}
      {!isSidebarOpen && isGalleryOpen && (
        <ToggleButton
          isOpen={false}
          onClick={() => setIsSidebarOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            right: '2rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)'
          }}
        >
          <FaChevronLeft />
        </ToggleButton>
      )}
      
      <SidebarContainer isOpen={isSidebarOpen}>
        <SidebarCloseButton
          onClick={() => setIsSidebarOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes />
        </SidebarCloseButton>
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