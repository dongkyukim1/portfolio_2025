import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const ExperienceSection = styled(Section)`
  background: ${colors.backgroundLight};
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: ${gradients.primary};
    border-radius: 2px;

    @media (max-width: ${breakpoints.tablet}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;

  &:nth-child(even) {
    .timeline-content {
      left: 0;
      text-align: left;

      @media (max-width: ${breakpoints.tablet}) {
        left: 70px;
      }
    }

    .timeline-arrow {
      right: auto;
      left: -15px;
      border-left: none;
      border-right: 15px solid white;

      @media (max-width: ${breakpoints.tablet}) {
        left: -15px;
        border-right: none;
        border-left: 15px solid white;
      }
    }
  }

  &:nth-child(odd) {
    .timeline-content {
      left: 50%;
      text-align: left;

      @media (max-width: ${breakpoints.tablet}) {
        left: 70px;
      }
    }

    .timeline-arrow {
      right: -15px;
      border-right: none;
      border-left: 15px solid white;

      @media (max-width: ${breakpoints.tablet}) {
        left: -15px;
        border-left: 15px solid white;
        border-right: none;
      }
    }
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: white;
  border: 4px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${colors.primary};
  z-index: 2;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  @media (max-width: ${breakpoints.tablet}) {
    left: 30px;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: 45%;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(100% - 120px);
    margin-left: 0;
  }
`;

const TimelineArrow = styled.div`
  position: absolute;
  top: 30px;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
`;

const CompanyName = styled.h3`
  font-size: 1.4rem;
  font-family: 'Pretendard-Bold';
  color: ${colors.dark};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.1rem;
  font-family: 'Pretendard-SemiBold';
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Pretendard-Medium';
  color: ${colors.textLight};
  font-size: 0.9rem;

  .icon {
    color: ${colors.primary};
  }
`;

const Description = styled.p`
  line-height: 1.7;
  color: ${colors.text};
  font-family: 'Pretendard-Regular';
`;

const SkillsUsed = styled.div`
  margin-top: 1.5rem;
  
  .skills-label {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.dark};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const SkillTag = styled.span`
  background: ${colors.backgroundLight};
  color: ${colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid ${colors.primary};
`;

const CurrentBadge = styled.span`
  background: ${gradients.success};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: 'Pretendard-SemiBold';
  margin-left: 0.5rem;
`;

const StatsCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  margin-top: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatItem = styled.div`
  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${colors.textLight};
  }
`;

const Experience = () => {
  const { experience } = portfolioData;

  // 경험 데이터에 기술 스택 추가
  const experienceWithSkills = [
    {
      ...experience[0],
      skills: ['Java', 'Spring Boot', 'MySQL', 'LGU+ MCS', 'CallSystem']
    },
    {
      ...experience[1],
      skills: ['Project Management', 'Global Communication', 'Business Development']
    },
    {
      ...experience[2],
      skills: ['Education', 'English Teaching', 'Communication', 'Curriculum Development']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
        duration: 0.6
      }
    }
  };

  const getCurrentStatus = (period) => {
    return period.includes('현재') || period.includes('~');
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle>Experience</SectionTitle>
        
        <Timeline>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceWithSkills.map((exp, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
              >
                <TimelineIcon>
                  <FaBriefcase />
                </TimelineIcon>
                
                <TimelineContent className="timeline-content">
                  <TimelineArrow className="timeline-arrow" />
                  
                  <CompanyName>
                    <FaMapMarkerAlt className="icon" />
                    {exp.company}
                    {getCurrentStatus(exp.period) && <CurrentBadge>현재 재직</CurrentBadge>}
                  </CompanyName>
                  
                  <Position>{exp.position}</Position>
                  
                  <Period>
                    <FaCalendarAlt className="icon" />
                    {exp.period}
                  </Period>
                  
                  <Description>{exp.description}</Description>
                  
                  {exp.skills && (
                    <SkillsUsed>
                      <div className="skills-label">사용 기술/업무:</div>
                      <div className="skills-list">
                        {exp.skills.map((skill, skillIndex) => (
                          <SkillTag key={skillIndex}>{skill}</SkillTag>
                        ))}
                      </div>
                    </SkillsUsed>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </motion.div>
        </Timeline>

        <StatsCard
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            fontFamily: 'Pretendard-Bold', 
            color: colors.dark, 
            marginBottom: '1rem' 
          }}>
            경력 통계
          </h3>
          
          <StatsGrid>
            <StatItem>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                2+
              </motion.div>
              <div className="stat-label">총 경력 년수</div>
            </StatItem>
            
            <StatItem>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                3
              </motion.div>
              <div className="stat-label">다양한 직종 경험</div>
            </StatItem>
            
            <StatItem>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                100%
              </motion.div>
              <div className="stat-label">성공적인 프로젝트 완수율</div>
            </StatItem>
            
            <StatItem>
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                글로벌
              </motion.div>
              <div className="stat-label">업무 경험 (미국 출장)</div>
            </StatItem>
          </StatsGrid>
        </StatsCard>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;