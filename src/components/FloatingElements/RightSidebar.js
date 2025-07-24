import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaBlog, FaExternalLinkAlt, FaMobile, FaChevronLeft, 
  FaChevronRight, FaReact, FaVuejs, FaJava, FaPython, FaAws 
} from 'react-icons/fa';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const SidebarContainer = styled(motion.div)`
  position: fixed;
  right: ${props => props.isOpen ? '0' : '-280px'};
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 80vh;
  max-height: 600px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px 0 0 20px;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: right 0.3s ease;
  overflow: hidden;

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const ToggleButton = styled(motion.button)`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 80px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${colors.primary};
  box-shadow: -3px 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${gradients.primary};
    color: white;
    transform: translateY(-50%) translateX(-5px);
  }
`;

const SidebarContent = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  font-weight: 600;
  font-size: 1.1rem;
  color: ${colors.dark};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
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
  gap: 0.8rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
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
    font-size: 1.5rem;
  }

  .label {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 500;
    font-size: 0.8rem;
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
  padding: 0.4rem 0.8rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  font-size: 0.75rem;
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

const ProjectPreview = styled(motion.div)`
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }

  .project-title {
    font-family: 'Inter', 'Noto Sans KR';
    font-weight: 600;
    font-size: 0.9rem;
    color: ${colors.dark};
    margin-bottom: 0.5rem;
  }

  .project-description {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 0.75rem;
    color: ${colors.textLight};
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .tech-tag {
    padding: 0.2rem 0.5rem;
    background: ${colors.primary};
    color: white;
    border-radius: 8px;
    font-size: 0.6rem;
    font-weight: 500;
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem;
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

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { personal, projects } = portfolioData;

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </ToggleButton>

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

        {/* 최근 프로젝트 미리보기 */}
        <div>
          <SectionTitle>Latest Project</SectionTitle>
          <ProjectPreview
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-title">{projects[0].title}</div>
            <div className="project-description">
              {projects[0].description.substring(0, 80)}...
            </div>
            <div className="project-tech">
              {projects[0].tech.slice(0, 3).map((tech, index) => (
                <div key={index} className="tech-tag">{tech}</div>
              ))}
            </div>
          </ProjectPreview>
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
  );
};

export default RightSidebar;