import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, 
  FaTrophy, FaBookOpen, FaAward, FaCheck 
} from 'react-icons/fa';
import { 
  Section, 
  Container, 
  SectionTitle, 
  colors, 
  gradients, 
  breakpoints,
  TransparentSectionBackground
} from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const EducationSection = styled(TransparentSectionBackground)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SectionBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  .icon {
    font-size: 2rem;
    color: ${colors.secondary};
  }

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin: 0;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EducationItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid ${colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const SchoolInfo = styled.div`
  .school-name {
    font-size: 1.2rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin-bottom: 0.5rem;
  }

  .major {
    font-size: 1rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.secondary};
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${colors.text.tertiary};
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .type {
    display: inline-block;
    background: rgba(102, 126, 234, 0.2);
    color: #a5b4fc;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    margin-top: 0.5rem;
    border: 1px solid rgba(102, 126, 234, 0.3);
  }
`;

const TrainingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TrainingItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #3b82f6;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const TrainingInfo = styled.div`
  .training-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin-bottom: 0.5rem;
  }

  .organization {
    font-size: 0.95rem;
    font-family: 'Pretendard-SemiBold';
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }

  .period {
    font-size: 0.9rem;
    color: ${colors.text.tertiary};
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    border: 1px solid rgba(16, 185, 129, 0.3);
  }
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const CertificateCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      switch (props.status) {
        case '취득': return gradients.success;
        case '필기 합격 (실기 진행 중)': return gradients.warning;
        case '만료': return gradients.dark;
        default: return gradients.primary;
      }
    }};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }
`;

const CertificateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  .cert-name {
    font-size: 1.1rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    flex: 1;
  }

  .cert-icon {
    font-size: 1.5rem;
    color: ${colors.secondary};
  }
`;

const CertificateDetails = styled.div`
  .cert-date {
    font-size: 0.9rem;
    color: ${colors.text.tertiary};
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .cert-score {
    font-size: 0.9rem;
    color: ${colors.text.secondary};
    margin-bottom: 0.5rem;
  }

  .cert-status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-family: 'Pretendard-SemiBold';
    background: ${props => {
      switch (props.status) {
        case '취득': return 'rgba(16, 185, 129, 0.2)';
        case '필기 합격 (실기 진행 중)': return 'rgba(245, 158, 11, 0.2)';
        case '만료': return 'rgba(107, 114, 128, 0.2)';
        default: return 'rgba(59, 130, 246, 0.2)';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case '취득': return '#10b981';
        case '필기 합격 (실기 진행 중)': return '#f59e0b';
        case '만료': return '#6b7280';
        default: return '#3b82f6';
      }
    }};
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

  .stat-icon {
    font-size: 2.5rem;
    color: ${colors.secondary};
    margin-bottom: 1rem;
  }

  .stat-number {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.text.primary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${colors.text.secondary};
  }
`;

const Education = () => {
  const { education, training, certificates } = portfolioData;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const stats = [
    { icon: <FaGraduationCap />, number: '3', label: '학력 단계' },
    { icon: <FaBookOpen />, number: '2', label: '교육 연수' },
    { icon: <FaCertificate />, number: '3', label: '보유 자격증' },
    { icon: <FaTrophy />, number: '900', label: 'TOEIC 점수' }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education & Certificates</SectionTitle>
        
        <ContentGrid>
          {/* 학력 섹션 */}
          <SectionBlock
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <BlockHeader>
              <FaGraduationCap className="icon" />
              <h3>학력</h3>
            </BlockHeader>

            <EducationList>
              {education.map((edu, index) => (
                <EducationItem
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SchoolInfo>
                    <div className="school-name">{edu.school}</div>
                    <div className="major">{edu.major}</div>
                    <div className="period">
                      <FaCalendarAlt />
                      {edu.period}
                    </div>
                    <div className="type">{edu.type}</div>
                  </SchoolInfo>
                </EducationItem>
              ))}
            </EducationList>
          </SectionBlock>

          {/* 교육 연수 섹션 */}
          <SectionBlock
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <BlockHeader>
              <FaBookOpen className="icon" />
              <h3>교육 연수</h3>
            </BlockHeader>

            <TrainingList>
              {training.map((train, index) => (
                <TrainingItem
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TrainingInfo>
                    <div className="training-name">{train.name}</div>
                    <div className="organization">{train.organization}</div>
                    <div className="period">
                      <FaCalendarAlt />
                      {train.period}
                    </div>
                    <div className="status">{train.status}</div>
                  </TrainingInfo>
                </TrainingItem>
              ))}
            </TrainingList>
          </SectionBlock>
        </ContentGrid>

        {/* 자격증 섹션 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <SectionTitle style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '2rem' }}>
            자격증 및 인증
          </SectionTitle>

          <CertificatesGrid>
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                status={cert.status}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CertificateHeader>
                  <div className="cert-name">{cert.name}</div>
                  <FaAward className="cert-icon" />
                </CertificateHeader>

                <CertificateDetails status={cert.status}>
                  <div className="cert-date">
                    <FaCalendarAlt />
                    {cert.date}
                  </div>
                  {cert.score && (
                    <div className="cert-score">점수: {cert.score}</div>
                  )}
                  <div className="cert-status">{cert.status}</div>
                </CertificateDetails>
              </CertificateCard>
            ))}
          </CertificatesGrid>
        </motion.div>

        {/* 통계 섹션 */}
        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
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
    </EducationSection>
  );
};

export default Education;