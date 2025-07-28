import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  Container, 
  SectionTitle, 
  colors, 
  gradients,
  breakpoints,
  TransparentSectionBackground
} from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const AboutSection = styled(TransparentSectionBackground)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
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

// 기존 Introduction 대신 새로운 카드들 추가
const IntroductionCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const IntroCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 2rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-5px);
  }

  h3 {
    font-family: 'Pretendard-SemiBold';
    font-size: 1.2rem;
    color: ${colors.text.primary};
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 0.95rem;
    color: ${colors.text.secondary};
    line-height: 1.6;
    flex: 1;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    height: auto;
    min-height: 180px;
  }
`;

const HighlightCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const HighlightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 16px;
  padding: 2rem;
  height: 160px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-3px);
  }

  .icon {
    font-size: 2.5rem;
    flex-shrink: 0;
  }

  div {
    flex: 1;

    h4 {
      font-family: 'Pretendard-SemiBold';
      font-size: 1.1rem;
      color: ${colors.text.primary};
      margin-bottom: 0.8rem;
    }

    p {
      font-family: 'Pretendard-Regular';
      font-size: 0.9rem;
      color: ${colors.text.secondary};
      line-height: 1.5;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    height: auto;
    min-height: 140px;
    flex-direction: column;
    text-align: center;
    gap: 1rem;

    .icon {
      font-size: 2rem;
    }
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const StoryCard = styled(motion.div)`
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.08);
    border-color: rgba(102, 126, 234, 0.3);
  }

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    color: ${colors.text.primary};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 1rem;
    color: ${colors.text.secondary};
    line-height: 1.8;
    white-space: pre-line;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`;

const PersonalitySection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const PersonalityCard = styled(motion.div)`
  background: rgba(147, 51, 234, 0.05);
  border: 1px solid rgba(147, 51, 234, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(147, 51, 234, 0.08);
    border-color: rgba(147, 51, 234, 0.3);
  }

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    color: ${colors.text.primary};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Regular';
    font-size: 1rem;
    color: ${colors.text.secondary};
    line-height: 1.8;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2rem;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
`;

const GoalsSection = styled.div`
  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 1.8rem;
    color: ${colors.text.primary};
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const GoalsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const GoalItem = styled(motion.div)`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(16, 185, 129, 0.08);
    border-color: rgba(16, 185, 129, 0.3);
    transform: translateY(-3px);
  }

  div {
    flex: 1;

    p {
      font-family: 'Pretendard-Regular';
      font-size: 0.95rem;
      color: ${colors.text.secondary};
      line-height: 1.4;
      margin: 0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 0.8rem;
    flex-direction: column;
    text-align: center;
    gap: 0.1rem;
  }
`;

const GoalIcon = styled.div`
  font-size: 1.2rem;
  width: 1.2rem;
  flex-shrink: 0;
  line-height: 1;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    width: 1rem;
  }
`;

// CardIcon 컴포넌트 추가
const CardIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
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
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutContent
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* 자기소개 카드들 */}
          <IntroductionCards>
            <IntroCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>🚀 도전하는 프론트엔드 개발자</h3>
              <p>끊임없이 도전하고 성장하는 프론트엔드 개발자입니다. React, Next.js, Flutter 등 다양한 프레임워크를 활용해 사용자 중심의 웹·앱 서비스를 구현합니다.</p>
            </IntroCard>
            
            <IntroCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>🌍 글로벌 마인드</h3>
              <p>비전공자에서 시작해 현재 풀스택 개발자로 재직하며, 미국 교환학생과 글로벌 비즈니스 경험을 바탕으로 국제적 감각과 창의적 사고로 문제를 해결합니다.</p>
            </IntroCard>
            
            <IntroCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>💡 실무 경험 기반 성장</h3>
              <p>LittleBank, TripplAI, DevHub 등 실제 서비스 개발과 PM 경험을 통해 기술과 비즈니스를 연결하는 개발자로 성장했습니다.</p>
            </IntroCard>
          </IntroductionCards>

          {/* 하이라이트 카드들 */}
          <HighlightCards>
            <HighlightCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CardIcon>🎯</CardIcon>
              <div>
                <h4>프로젝트 매니징</h4>
                <p>다양한 프로젝트에서 PM 역할을 수행하며 팀을 이끌고 목표를 달성하는 리더십을 발휘했습니다.</p>
              </div>
            </HighlightCard>
            
            <HighlightCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardIcon>💻</CardIcon>
              <div>
                <h4>풀스택 개발</h4>
                <p>프론트엔드부터 백엔드까지 전체 개발 프로세스를 이해하고 구현할 수 있는 역량을 보유했습니다.</p>
              </div>
            </HighlightCard>
            
            <HighlightCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CardIcon>🤝</CardIcon>
              <div>
                <h4>협업 & 소통</h4>
                <p>디자이너, 기획자, 개발자 간의 원활한 소통으로 프로젝트 성공을 이끌어내는 협업 능력을 갖추었습니다.</p>
              </div>
            </HighlightCard>
          </HighlightCards>

          {/* 개발자로 성장하게 된 계기 */}
          <StorySection>
            <StoryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>💪 개발자로 성장하게 된 계기</h3>
              <p>{portfolioData.about.motivation}</p>
            </StoryCard>
          </StorySection>

          {/* 개인적 특성 */}
          <PersonalitySection>
            <PersonalityCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>🎨 성장 과정</h3>
              <p>{portfolioData.about.growth}</p>
            </PersonalityCard>
          </PersonalitySection>

          {/* 목표 */}
          <GoalsSection>
            <h3>🎯 앞으로의 목표</h3>
            <GoalsList>
              <GoalItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <GoalIcon>📚</GoalIcon>
                <div>
                  <p>지속적인 학습과 성장: 빠르게 변화하는 IT 분야에서 새로운 기술과 트렌드를 지속적으로 학습</p>
                </div>
              </GoalItem>

              <GoalItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <GoalIcon>🤝</GoalIcon>
                <div>
                  <p>팀워크와 협업 강화: 글로벌 커뮤니케이션 및 협업 정신을 바탕으로 팀원들과의 원활한 협업</p>
                </div>
              </GoalItem>

              <GoalItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <GoalIcon>💡</GoalIcon>
                <div>
                  <p>창의적 문제 해결: 경영학에서 배운 분석적 사고와 문제 해결 능력을 프로그래밍에 적용</p>
                </div>
              </GoalItem>

              <GoalItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <GoalIcon>⭐</GoalIcon>
                <div>
                  <p>책임감과 성실함: 맡은 업무에 책임감을 가지고 성실하게 수행</p>
                </div>
              </GoalItem>

              <GoalItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <GoalIcon>❤️</GoalIcon>
                <div>
                  <p>고객 중심의 서비스 제공: 고객의 요구를 정확히 이해하고 만족시키는 서비스 제공</p>
                </div>
              </GoalItem>
            </GoalsList>
          </GoalsSection>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;