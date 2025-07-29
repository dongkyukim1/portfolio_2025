import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaHome, FaRocket, FaMobileAlt, FaChartLine, FaComment, FaPhone, FaEnvelope } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiOpenai,
  SiGooglecloud,
  SiFastapi,
  SiPostgresql,
  SiVercel,
  SiRedis
} from 'react-icons/si';

// 이미지와 비디오 import
import main from '../../assets/projects/tripplai/main.png';
import img1 from '../../assets/projects/tripplai/1.png';
import img2 from '../../assets/projects/tripplai/2.png';
import img3 from '../../assets/projects/tripplai/3.png';
import img4 from '../../assets/projects/tripplai/4.png';
import video from '../../assets/video/trippai.mp4';

// 메인 컬러 정의
const mainColor = {
  primary: '#FF8787',
  primaryLight: 'rgba(255, 135, 135, 0.1)',
  primaryBorder: 'rgba(255, 135, 135, 0.3)',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.85)',
    tertiary: 'rgba(255, 255, 255, 0.7)'
  }
};

const TripplaiDetail = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', offset: document.getElementById('overview')?.offsetTop || 0 },
        { id: 'features', offset: document.getElementById('features')?.offsetTop || 0 },
        { id: 'preview', offset: document.getElementById('preview')?.offsetTop || 0 },
        { id: 'tech', offset: document.getElementById('tech')?.offsetTop || 0 },
        { id: 'challenges', offset: document.getElementById('challenges')?.offsetTop || 0 }
      ];

      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <BackButton onClick={() => navigate('/#projects')}>
          <FaArrowLeft /> 포트폴리오로 돌아가기
        </BackButton>

        {/* 사이드 네비게이션 */}
        <SideNavigation>
          <NavButton 
            active={activeSection === 'overview'} 
            onClick={() => scrollToSection('overview')}
            label="개요"
          >
            <FaHome />
          </NavButton>
          <NavButton 
            active={activeSection === 'features'} 
            onClick={() => scrollToSection('features')}
            label="주요 기능"
          >
            <FaRocket />
          </NavButton>
          <NavButton 
            active={activeSection === 'preview'} 
            onClick={() => scrollToSection('preview')}
            label="구현 화면"
          >
            <FaMobileAlt />
          </NavButton>
          <NavButton 
            active={activeSection === 'tech'} 
            onClick={() => scrollToSection('tech')}
            label="기술 스택"
          >
            <FaCode />
          </NavButton>
          <NavButton 
            active={activeSection === 'challenges'} 
            onClick={() => scrollToSection('challenges')}
            label="문제 해결"
          >
            <FaChartLine />
          </NavButton>
        </SideNavigation>

        <Section id="overview">
          <Header>
            <Title>Tripplai - AI 여행 일정 생성 서비스</Title>
            <SubTitle>에어비앤비 스타일의 AI 기반 맞춤형 여행 일정 플래너</SubTitle>
            <ProjectLinks>
              <ProjectLink href="https://tripplai.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> 서비스 바로가기
              </ProjectLink>
              <ProjectLink href="https://github.com/dongkyukim1?tab=repositories" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </ProjectLink>
            </ProjectLinks>
          </Header>

          <VideoSection>
            <Video controls>
              <source src={video} type="video/mp4" />
            </Video>
          </VideoSection>

          <Description>
            Tripplai는 AI를 활용하여 사용자의 선호도와 조건에 맞는 맞춤형 여행 일정을 생성해주는 서비스입니다.
            사용자는 여행지, 기간, 예산, 선호하는 활동 등을 입력하면 AI가 최적화된 여행 일정을 제안합니다.
            관광공사 API와 OpenAI를 활용하여 정확하고 실용적인 여행 계획을 제공합니다.
          </Description>

          <RoleInfo>
            <RoleItem>
              <RoleTitle>개발 기간</RoleTitle>
              <RoleDescription>2024.03 ~ 현재 (진행중)</RoleDescription>
            </RoleItem>
            <RoleItem>
              <RoleTitle>담당 역할</RoleTitle>
              <RoleDescription>프론트엔드 개발 & 프로젝트 관리</RoleDescription>
            </RoleItem>
            <RoleItem>
              <RoleTitle>개발 인원</RoleTitle>
              <RoleDescription>프론트엔드 1명, 백엔드 1명</RoleDescription>
            </RoleItem>
            <RoleItem>
              <RoleTitle>현재 상태</RoleTitle>
              <RoleDescription>관광 API 공모전 진출</RoleDescription>
            </RoleItem>
          </RoleInfo>
        </Section>

        <Section id="features">
          <SectionTitle>주요 기능</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>AI 기반 여행 일정 생성</FeatureTitle>
              <FeatureDescription>
                - OpenAI API를 활용한 맞춤형 일정 생성
                - 사용자 선호도 기반 장소 추천
                - 실시간 일정 최적화 및 조정
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🗺</FeatureIcon>
              <FeatureTitle>지도 통합 및 경로 최적화</FeatureTitle>
              <FeatureDescription>
                - Google Maps API 연동
                - 최적 이동 경로 계산
                - 실시간 거리 및 소요시간 계산
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>💰</FeatureIcon>
              <FeatureTitle>예산 관리 시스템</FeatureTitle>
              <FeatureDescription>
                - 예산 범위 내 일정 최적화
                - 실시간 예산 추적 및 조정
                - 경비 예측 및 분석
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>실시간 일정 조정</FeatureTitle>
              <FeatureDescription>
                - 드래그 앤 드롭 일정 수정
                - 실시간 일정 동기화
                - 날씨 정보 연동 및 대체 일정 추천
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section id="preview">
          <SectionTitle>구현 화면</SectionTitle>
          <ImageGrid>
            <ImageContainer>
              <ProjectImage src={main} alt="메인 화면" />
              <ImageCaption>메인 페이지 - AI 여행 일정 생성</ImageCaption>
            </ImageContainer>
            <ImageContainer>
              <ProjectImage src={img1} alt="여행 조건 입력" />
              <ImageCaption>여행 조건 입력 화면</ImageCaption>
            </ImageContainer>
            <ImageContainer>
              <ProjectImage src={img2} alt="일정 생성 결과" />
              <ImageCaption>AI 생성 여행 일정 결과</ImageCaption>
            </ImageContainer>
            <ImageContainer>
              <ProjectImage src={img3} alt="상세 일정" />
              <ImageCaption>상세 일정 보기</ImageCaption>
            </ImageContainer>
            <ImageContainer>
              <ProjectImage src={img4} alt="장소 추천" />
              <ImageCaption>AI 추천 장소 목록</ImageCaption>
            </ImageContainer>
          </ImageGrid>
        </Section>

        <Section id="tech">
          <SectionTitle>
            <FaCode /> 기술 스택
          </SectionTitle>
          <TechStackGrid>
            <TechCategory>
              <TechTitle>
                <SiNextdotjs style={{ color: '#fff' }} /> 프론트엔드
              </TechTitle>
              <TechList>
                <TechItem>
                  <div className="tech-header">
                    <SiNextdotjs style={{ color: '#fff' }} />
                    <span>Next.js 14</span>
                  </div>
                  <TechDescription>
                    <li>App Router 및 Server Components 활용</li>
                    <li>API Routes를 통한 서버리스 함수 구현</li>
                    <li>Static/Dynamic 렌더링 최적화</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiTypescript style={{ color: '#007ACC' }} />
                    <span>TypeScript</span>
                  </div>
                  <TechDescription>
                    <li>타입 안정성 확보</li>
                    <li>인터페이스 기반 개발</li>
                    <li>재사용 가능한 타입 설계</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiReact style={{ color: '#61DAFB' }} />
                    <span>React</span>
                  </div>
                  <TechDescription>
                    <li>Custom Hooks 패턴 적용</li>
                    <li>Context API를 통한 상태 관리</li>
                    <li>컴포넌트 최적화</li>
                  </TechDescription>
                </TechItem>
              </TechList>
            </TechCategory>

            <TechCategory>
              <TechTitle>
                <SiOpenai style={{ color: '#00A67E' }} /> AI/외부 API
              </TechTitle>
              <TechList>
                <TechItem>
                  <div className="tech-header">
                    <SiOpenai style={{ color: '#00A67E' }} />
                    <span>OpenAI API</span>
                  </div>
                  <TechDescription>
                    <li>GPT-4 프롬프트 엔지니어링</li>
                    <li>컨텍스트 기반 응답 최적화</li>
                    <li>토큰 사용량 최적화</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiGooglecloud style={{ color: '#4285F4' }} />
                    <span>Google Maps API</span>
                  </div>
                  <TechDescription>
                    <li>실시간 경로 최적화</li>
                    <li>장소 검색 및 상세 정보</li>
                    <li>커스텀 마커 및 오버레이</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiFastapi style={{ color: '#009688' }} />
                    <span>FastAPI</span>
                  </div>
                  <TechDescription>
                    <li>고성능 REST API 구현</li>
                    <li>WebSocket 실시간 통신</li>
                    <li>OpenAPI 문서 자동화</li>
                  </TechDescription>
                </TechItem>
              </TechList>
            </TechCategory>

            <TechCategory>
              <TechTitle>
                <SiVercel style={{ color: '#fff' }} /> 인프라/최적화
              </TechTitle>
              <TechList>
                <TechItem>
                  <div className="tech-header">
                    <SiVercel style={{ color: '#fff' }} />
                    <span>Vercel</span>
                  </div>
                  <TechDescription>
                    <li>Edge Functions 활용</li>
                    <li>자동화된 CI/CD 파이프라인</li>
                    <li>성능 모니터링 및 분석</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiRedis style={{ color: '#DC382D' }} />
                    <span>Redis</span>
                  </div>
                  <TechDescription>
                    <li>API 응답 캐싱</li>
                    <li>실시간 데이터 동기화</li>
                    <li>세션 관리</li>
                  </TechDescription>
                </TechItem>
                <TechItem>
                  <div className="tech-header">
                    <SiPostgresql style={{ color: '#336791' }} />
                    <span>PostgreSQL</span>
                  </div>
                  <TechDescription>
                    <li>지리 정보 데이터 처리</li>
                    <li>복잡한 쿼리 최적화</li>
                    <li>인덱싱 전략 구현</li>
                  </TechDescription>
                </TechItem>
              </TechList>
            </TechCategory>
          </TechStackGrid>
          <ScrollHint>← 좌우로 스크롤하여 더 보기 →</ScrollHint>
        </Section>

        <Section id="challenges">
          <SectionTitle>문제 해결 및 최적화</SectionTitle>
          <ChallengeList>
            <Challenge>
              <ChallengeTitle>🔍 AI 응답 시간 최적화</ChallengeTitle>
              <ChallengeDescription>
                - 문제: OpenAI API 응답 시간이 평균 8초로 너무 긺
                - 해결: 프롬프트 최적화 및 Redis 캐싱 도입으로 응답 시간 3초대로 단축
                - 결과: 사용자 대기 시간 62.5% 감소
              </ChallengeDescription>
            </Challenge>
            <Challenge>
              <ChallengeTitle>📱 반응형 디자인 구현</ChallengeTitle>
              <ChallengeDescription>
                - 문제: 다양한 디바이스에서 레이아웃 깨짐 현상 발생
                - 해결: CSS Grid와 Flexbox를 활용한 반응형 디자인 구현
                - 결과: 모든 디바이스에서 일관된 사용자 경험 제공
              </ChallengeDescription>
            </Challenge>
            <Challenge>
              <ChallengeTitle>🔄 실시간 데이터 동기화</ChallengeTitle>
              <ChallengeDescription>
                - 문제: 여러 사용자의 일정 데이터 동기화 이슈
                - 해결: WebSocket과 Redis Pub/Sub 패턴 도입
                - 결과: 실시간 데이터 동기화 및 협업 기능 구현
              </ChallengeDescription>
            </Challenge>
          </ChallengeList>
        </Section>

        <CTASection>
          <h2>AI 기반 여행 일정 생성 서비스</h2>
          <p>
            OpenAI와 관광공사 API를 활용한 혁신적인 여행 플래너 서비스입니다.
            Next.js와 FastAPI를 활용한 풀스택 개발 경험을 보여주는 포트폴리오입니다.
          </p>
          <ButtonGroup>
            <ActionButton 
              href="https://tripplai.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              서비스 바로가기
            </ActionButton>
            <ActionButton 
              href="https://github.com/dongkyukim1?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub 저장소
            </ActionButton>
          </ButtonGroup>
        </CTASection>
      </Container>

      {/* 연락처 버튼 */}
      <ContactButton>
        <MainButton onClick={() => setIsContactOpen(!isContactOpen)}>
          <FaComment />
        </MainButton>
        <ContactMenu isOpen={isContactOpen}>
          <ContactItem href="tel:01040488292">
            <FaPhone />
            010-4048-8292
          </ContactItem>
          <ContactItem href="sms:01040488292">
            <FaComment />
            문자보내기
          </ContactItem>
          <ContactItem href="mailto:wlsntus55@nate.com">
            <FaEnvelope />
            wlsntus55@nate.com
          </ContactItem>
          <ContactItem 
            href="https://open.kakao.com/o/sGFwxXMf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <RiKakaoTalkFill style={{color: '#FFE812'}}/>
            카카오톡 1:1 채팅
          </ContactItem>
        </ContactMenu>
      </ContactButton>
    </>
  );
};

const Container = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Pretendard-Regular';
  color: #E0E0E0;
  background: #0A0A0A;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #333;
  color: #E0E0E0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #333;
    transform: translateX(-5px);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Pretendard-Bold';
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #FF6B6B, #FF8787);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #888;
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #E0E0E0;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const VideoSection = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const Video = styled.video`
  width: 100%;
  border-radius: 20px;
`;

const Section = styled.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, #FF8787, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #BDBDBD;
  white-space: pre-line;
`;

const RoleInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`;

const RoleItem = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const RoleTitle = styled.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const RoleDescription = styled.p`
  color: #BDBDBD;
  font-size: 1rem;
  line-height: 1.5;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FeatureDescription = styled.div`
  color: #BDBDBD;
  font-size: 0.95rem;
  line-height: 1.6;
  white-space: pre-line;
`;

const TechStackGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2rem -2rem;
  padding: 0 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem 0;
    padding: 0;
  }
`;

const TechCategory = styled.div`
  flex: 0 0 auto;
  width: 320px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TechTitle = styled.h4`
  font-family: 'Pretendard-Bold';
  color: ${mainColor.text.primary};
  margin-bottom: 2rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.2rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  .tech-header {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 2.2rem;
    }

    span {
      font-family: 'Pretendard-SemiBold';
      font-size: 1.1rem;
      color: ${mainColor.text.primary};
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-3px);
  }
`;

const TechDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${mainColor.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;

  li {
    position: relative;
    padding-left: 1rem;
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${mainColor.primary};
    }
  }
`;

const ScrollHint = styled.p`
  text-align: center;
  color: ${mainColor.text.secondary};
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.7;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageCaption = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #888;
  font-family: 'Pretendard-Medium';
`;

const ChallengeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Challenge = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ChallengeTitle = styled.h4`
  font-family: 'Pretendard-Bold';
  color: #FF8787;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ChallengeDescription = styled.p`
  color: #BDBDBD;
  font-size: 1rem;
  line-height: 1.8;
  white-space: pre-line;
`;

// 새로운 스타일 컴포넌트 추가
const SideNavigation = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 135, 135, 0.1);

  @media (max-width: 1400px) {
    right: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button`
  background: ${props => props.active ? mainColor.primary : 'transparent'};
  color: ${props => props.active ? 'white' : mainColor.text.secondary};
  border: 1px solid ${props => props.active ? mainColor.primary : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.7rem;
  border-radius: 12px;
  font-family: 'Pretendard-Medium';
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: ${props => props.active ? mainColor.primary : mainColor.primaryLight};
    border-color: ${mainColor.primary};
    color: ${props => props.active ? 'white' : mainColor.primary};
  }

  &:hover::before {
    content: "${props => props.label}";
    position: absolute;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    white-space: nowrap;
    pointer-events: none;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ContactButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
`;

const MainButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${mainColor.primary};
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ContactMenu = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: ${props => props.isOpen ? 'block' : 'none'};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: ${mainColor.text.primary};
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background: ${mainColor.primaryLight};
    color: ${mainColor.primary};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, rgba(255, 135, 135, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%);
  border: 1px solid rgba(255, 135, 135, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  h2 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 1rem;
    color: ${mainColor.text.primary};
  }
  
  p {
    color: ${mainColor.text.secondary};
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${mainColor.primary};
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(255, 135, 135, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 135, 135, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }
`;

export default TripplaiDetail; 