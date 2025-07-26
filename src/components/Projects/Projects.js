import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, 
  FaTimes, FaRocket, FaMobile, FaGlobe, FaCode 
} from 'react-icons/fa';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 로고 이미지 import
import devhubLogo from '../../assets/projects/logo/devhublogo.jpg';
import littlebankLogo from '../../assets/projects/logo/littlebanklogo.png';
import tripplaiLogo from '../../assets/projects/logo/Tripplailogo.png';

const ProjectsSection = styled(Section)`
  background: transparent;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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

const Projects = () => {
  const { projects, personal } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // 프로젝트별 로고 매핑
  const projectLogos = {
    'DevHub: 깃보다 쉽게 \'형상관리\'와 \'코드리뷰\'': devhubLogo,
    'LittleBank': littlebankLogo,
    'TripplAI': tripplaiLogo
  };

  const getProjectIcon = (project) => {
    if (project.title.includes('DevHub')) return <FaCode />;
    if (project.title.includes('LittleBank')) return '🏦';
    if (project.title.includes('Trippl')) return '✈️';
    return <FaCode />;
  };

  const projectIcons = {
    'Devhub: 깃보다 쉽게 \'형상관리\'와 \'코드리뷰\'': '🔧',
    '리틀뱅크 (Little Bank)': '🏦',
    'Tripplai': '✈️'
  };

  const getProjectStatus = (project) => {
    if (project.status === 'Google Play Store 비공개 테스트 중') return 'in-progress';
    if (project.status === '관광 API 공모전 진출') return 'in-progress';
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
        <SectionTitle>Projects</SectionTitle>
        
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
                      자세히 보기
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

          {/* 추가 프로젝트 링크 */}
          <motion.div
            variants={itemVariants}
            style={{ textAlign: 'center', marginTop: '3rem' }}
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
        <AnimatePresence>
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
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;