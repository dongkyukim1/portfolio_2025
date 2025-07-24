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

const ProfileCard = styled(Card)`
  background: white;
  padding: 2.5rem;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    position: relative;
    z-index: 2;
    background: ${gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ProfileInfo = styled.div`
  text-align: center;

  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.dark};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textLight};
    font-family: 'Pretendard-Medium';
    margin-bottom: 1rem;
  }

  .birth {
    font-size: 0.9rem;
    color: ${colors.textLight};
  }
`;

const Introduction = styled.div`
  h4 {
    font-size: 1.4rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.dark};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.8;
    color: ${colors.text};
    font-family: 'Pretendard-Regular';
  }
`;

const StoryCards = styled(motion.div)`
  display: grid;
  gap: 2rem;
`;

const StoryCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.color || colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.3rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.dark};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    line-height: 1.7;
    color: ${colors.text};
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
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 3px solid ${colors.primary};

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }

  p {
    color: ${colors.text};
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