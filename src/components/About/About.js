import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaRocket, FaHeart, FaLightbulb } from 'react-icons/fa';
import { Section, Container, SectionTitle, Card, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const AboutSection = styled(Section)`
  background: ${colors.backgroundLight};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MainInfo = styled(motion.div)``;

const ProfileCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);

  span {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    height: 100px;

    span {
      font-size: 2.5rem;
    }
  }
`;

const ProfileInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.5rem;
    color: ${colors.text.primary};
  }

  p {
    font-size: 1.2rem;
    color: ${colors.text.secondary};
    margin-bottom: 0.3rem;
    font-family: 'Pretendard-Medium';
  }

  .birth {
    font-size: 1rem;
    color: ${colors.text.tertiary};
    font-family: 'Pretendard-Regular';
  }
`;

// 현재 상태 뱃지
const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: 'Pretendard-Medium';
  margin-top: 0.8rem;
  border: 1px solid rgba(16, 185, 129, 0.3);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
    }
  }
`;

const Introduction = styled.div`
  h4 {
    font-size: 1.4rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.8;
    color: ${colors.text.secondary};
    font-family: 'Pretendard-Regular';
  }
`;

const StoryCards = styled(motion.div)`
  display: grid;
  gap: 2rem;
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.color || colors.primary};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  h4 {
    font-size: 1.3rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.7;
    color: ${colors.text.secondary};
    font-family: 'Pretendard-Regular';
  }
`;

const PersonalitySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PersonalityCard = styled(StoryCard)`
  border-left-color: ${props => props.type === 'strength' ? colors.success : colors.warning};
`;

const GoalsSection = styled.div`
  margin-top: 4rem;
`;

const GoalsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const GoalItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border-left: 3px solid ${colors.primary};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  }

  p {
    color: ${colors.text.secondary};
    font-family: 'Pretendard-Regular';
    line-height: 1.6;
  }
`;

const About = () => {
  const { personal, about } = portfolioData;

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

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <MainInfo
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProfileCard>
              <ProfileImage>
                <span>👨‍💻</span>
              </ProfileImage>
              
              <ProfileInfo>
                <h3>{personal.name}</h3>
                <p>{personal.title}</p>
                <p className="birth">생년월일: {personal.birth}</p>
                {about.currentJob && (
                  <StatusBadge>
                    {about.currentJob.company} - {about.currentJob.position} {about.currentJob.status}
                  </StatusBadge>
                )}
              </ProfileInfo>
            </ProfileCard>

            <Introduction>
              <h4>
                <FaUser color={colors.primary} />
                자기소개
              </h4>
              <p>{about.introduction}</p>
            </Introduction>
          </MainInfo>

          <StoryCards
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <StoryCard
              variants={itemVariants}
              color={colors.primary}
            >
              <h4>
                <FaRocket color={colors.primary} />
                개발자를 희망하게 된 계기
              </h4>
              <p>{about.motivation}</p>
            </StoryCard>

            <StoryCard
              variants={itemVariants}
              color={colors.secondary}
            >
              <h4>
                <FaLightbulb color={colors.secondary} />
                성장 과정
              </h4>
              <p>{about.growth}</p>
            </StoryCard>
          </StoryCards>
        </AboutContent>

        <PersonalitySection>
          <PersonalityCard type="strength">
            <h4>
              <FaHeart color={colors.success} />
              성격의 장점
            </h4>
            <p>{about.personality.strength}</p>
          </PersonalityCard>

          <PersonalityCard type="weakness">
            <h4>
              <FaLightbulb color={colors.warning} />
              성격의 단점 & 개선 노력
            </h4>
            <p>{about.personality.weakness}</p>
          </PersonalityCard>
        </PersonalitySection>

        <GoalsSection>
          <SectionTitle style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            입사 후 포부
          </SectionTitle>
          
          <GoalsList>
            {about.goals?.map((goal, index) => (
              <GoalItem
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p>{goal}</p>
              </GoalItem>
            )) || portfolioData.goals.map((goal, index) => (
              <GoalItem
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p>{goal}</p>
              </GoalItem>
            ))}
          </GoalsList>
        </GoalsSection>
      </Container>
    </AboutSection>
  );
};

export default About;