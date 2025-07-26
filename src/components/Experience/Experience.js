import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaProjectDiagram, FaStore, FaGraduationCap } from 'react-icons/fa';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

// 로고 이미지 import
import netcomLogo from '../../assets/projects/logo/netcomlogo.jpg';
import littlebankLogo from '../../assets/projects/logo/littlebanklogo.png';
import tripplaiLogo from '../../assets/projects/logo/Tripplailogo.png';
import devhubLogo from '../../assets/projects/logo/devhublogo.jpg';
import cjLogo from '../../assets/projects/logo/cjlogo.png';
import naverLogo from '../../assets/projects/logo/naver_logo.png';

const ExperienceSection = styled(Section)`
  background: transparent;
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
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.03) 0%, transparent 30%);
    pointer-events: none;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: ${props => props.current ? 'rgba(16, 185, 129, 0.03)' : 'rgba(255, 255, 255, 0.02)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.current ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => {
      if (props.current) return '#10b981';
      switch (props.type) {
        case 'employment': return colors.secondary;
        case 'project': return '#3b82f6';
        case 'business': return '#f59e0b';
        default: return colors.secondary;
      }
    }};
  }

  &:hover {
    background: ${props => props.current ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
    transform: translateX(10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const CompanyInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 1.4rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .position {
    font-size: 1.1rem;
    color: ${colors.text.secondary};
    font-family: 'Pretendard-Medium';
  }
`;

const TypeIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${props => {
    switch (props.type) {
      case 'employment': return 'rgba(102, 126, 234, 0.05)';
      case 'project': return 'rgba(59, 130, 246, 0.05)';
      case 'business': return 'rgba(245, 158, 11, 0.05)';
      default: return 'rgba(102, 126, 234, 0.05)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid ${props => {
    switch (props.type) {
      case 'employment': return 'rgba(102, 126, 234, 0.2)';
      case 'project': return 'rgba(59, 130, 246, 0.2)';
      case 'business': return 'rgba(245, 158, 11, 0.2)';
      default: return 'rgba(102, 126, 234, 0.2)';
    }
  }};
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => {
      switch (props.type) {
        case 'employment': return 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)';
        case 'project': return 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)';
        case 'business': return 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 100%)';
        default: return 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)';
      }
    }};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.95) contrast(1.1);
    transition: all 0.3s ease;
  }

  &:hover img {
    filter: brightness(1) contrast(1.15);
    transform: scale(1.05);
  }

  svg {
    color: ${props => {
      switch (props.type) {
        case 'employment': return colors.secondary;
        case 'project': return '#3b82f6';
        case 'business': return '#f59e0b';
        default: return colors.secondary;
      }
    }};
    z-index: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(16, 185, 129, 0.3);

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    background: #10b981;
    border-radius: 50%;
    animation: blink 1.5s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const ExperienceMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${colors.text.tertiary};

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
      font-size: 0.9rem;
      opacity: 0.7;
    }
  }
`;

const ExperienceDescription = styled.p`
  color: ${colors.text.secondary};
  line-height: 1.7;
  font-family: 'Pretendard-Regular';
  margin-bottom: 1.5rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #a5b4fc;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }
`;

const TypeLabel = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => {
    switch (props.type) {
      case 'employment': return 'rgba(102, 126, 234, 0.1)';
      case 'project': return 'rgba(59, 130, 246, 0.1)';
      case 'business': return 'rgba(245, 158, 11, 0.1)';
      default: return 'rgba(102, 126, 234, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'employment': return colors.secondary;
      case 'project': return '#3b82f6';
      case 'business': return '#f59e0b';
      default: return colors.secondary;
    }
  }};
  padding: 0.3rem 0.8rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-family: 'Pretendard-Medium';
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Experience = () => {
  const { experience } = portfolioData;

  // 회사별 로고 매핑
  const companyLogos = {
    '넷컴솔루션': netcomLogo,
    'LittleBank': littlebankLogo,
    'TripplAI': tripplaiLogo,
    'DevHub': devhubLogo,
    'CJ 산하': cjLogo,
    'Droplist': naverLogo
  };

  const getIcon = (type) => {
    switch (type) {
      case 'employment': return <FaBriefcase />;
      case 'project': return <FaProjectDiagram />;
      case 'business': return <FaStore />;
      default: return <FaBriefcase />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'employment': return '정규직';
      case 'project': return '프로젝트';
      case 'business': return '사업';
      default: return '경력';
    }
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience & Projects</SectionTitle>
        
        <ExperienceGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              variants={itemVariants}
              current={exp.current}
              type={exp.type}
              whileHover={{ x: 10 }}
            >
              <TypeLabel type={exp.type}>{getTypeLabel(exp.type)}</TypeLabel>
              
              <CardHeader>
                <TypeIcon type={exp.type}>
                  {companyLogos[exp.company] ? (
                    <img src={companyLogos[exp.company]} alt={`${exp.company} logo`} />
                  ) : (
                    getIcon(exp.type)
                  )}
                </TypeIcon>
                
                <CompanyInfo>
                  <h3>
                    {exp.company}
                    {exp.current && <CurrentBadge>진행중</CurrentBadge>}
                  </h3>
                  <div className="position">{exp.position}</div>
                </CompanyInfo>
              </CardHeader>
              
              <ExperienceMeta>
                <div className="meta-item">
                  <FaCalendarAlt />
                  {exp.period}
                </div>
                {exp.location && (
                  <div className="meta-item">
                    <FaMapMarkerAlt />
                    {exp.location}
                  </div>
                )}
              </ExperienceMeta>
              
              <ExperienceDescription>
                {exp.description}
              </ExperienceDescription>
              
              {exp.skills && (
                <SkillTags>
                  {exp.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillTags>
              )}
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;