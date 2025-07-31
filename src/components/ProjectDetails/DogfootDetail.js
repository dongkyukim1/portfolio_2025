import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCode, FaUsers, FaDesktop, FaDatabase,
  FaExternalLinkAlt, FaFileAlt, FaBook, FaGithub,
  FaComments, FaUser, FaProjectDiagram, FaPaintBrush,
  FaMobile, FaChartLine, FaCogs, FaLayerGroup, FaServer
} from 'react-icons/fa';
import { 
  SiJavascript, SiHtml5, SiCss3, SiJquery, 
  SiSpring, SiOracle, SiGit, SiNotion, SiPostman
} from 'react-icons/si';

// 프로젝트 이미지 import
import dogfootLogo from '../../assets/projects/dogfoot/logo.png';
import mainScreen from '../../assets/projects/dogfoot/메인.png';
import signupScreen from '../../assets/projects/dogfoot/회원가입.png';
import popularBoard from '../../assets/projects/dogfoot/인기게시판.png';
import sideSlide from '../../assets/projects/dogfoot/사이드슬라이드.png';
import loginInfo from '../../assets/projects/dogfoot/로그인정보.png';
import postDetail from '../../assets/projects/dogfoot/게시글.png';
import dogfootPdf from '../../assets/projects/dogfoot/dogfoot.pdf';

// 메인 컬러 정의
const mainColor = {
  primary: 'rgb(139, 92, 246)',
  primaryLight: 'rgba(139, 92, 246, 0.1)',
  primaryBorder: 'rgba(139, 92, 246, 0.3)',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.85)',
    tertiary: 'rgba(255, 255, 255, 0.7)'
  }
};

// 기술 스택 브랜드 컬러
const techColors = {
  jsp: '#FF6B35',
  spring: '#6DB33F',
  javascript: '#F7DF1E',
  html5: '#E34F26',
  css3: '#1572B6',
  jquery: '#0769AD',
  oracle: '#F80000',
  ajax: '#00D8FF',
  git: '#F05032',
  notion: '#000000',
  postman: '#FF6C37'
};

// Styled Components
const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  min-height: 100vh;
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.8);
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 6rem;
  padding-bottom: 4rem;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  .logo-title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1.5rem;
    }
    
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      
      @media (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${mainColor.primary}, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${mainColor.text.secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${mainColor.text.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, ${mainColor.primary}, transparent);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const OverviewCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 1.3rem;
    color: ${mainColor.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${mainColor.text.secondary};
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;

    li {
      color: ${mainColor.text.tertiary};
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: '•';
        color: ${mainColor.primary};
        position: absolute;
        left: 0;
      }
    }
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const GalleryItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${mainColor.primaryBorder};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  .content {
    padding: 1.5rem;

    h3 {
      font-size: 1.2rem;
      color: ${mainColor.text.primary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${mainColor.text.tertiary};
      font-size: 0.9rem;
    }
  }
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
`;

const TechItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.color};
    background: ${props => props.color}20;
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: ${props => props.color};
    margin-bottom: 1rem;
  }

  .name {
    font-weight: 600;
    color: ${mainColor.text.primary};
    font-size: 0.9rem;
  }
`;

const RoleSection = styled.div`
  background: linear-gradient(135deg, ${mainColor.primaryLight}, rgba(255, 99, 71, 0.05));
  border: 1px solid ${mainColor.primaryBorder};
  border-radius: 20px;
  padding: 2.5rem;
  margin: 3rem 0;

  h3 {
    font-size: 1.5rem;
    color: ${mainColor.primary};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .role-item {
    h4 {
      color: ${mainColor.text.primary};
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        color: ${mainColor.text.secondary};
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;

        &::before {
          content: '✓';
          color: ${mainColor.primary};
          position: absolute;
          left: 0;
          font-weight: bold;
        }
      }
    }
  }
`;

const DocumentButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${mainColor.primary}, #a855f7);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  }
`;

// 이미지 모달 관련 스타일
const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

function DogfootDetail() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const projectOverview = {
    description: "JSP/Spring MVC 기반 커뮤니티 플랫폼",
    duration: "2024년 5월 - 2024년 6월",
    teamSize: "5명 (팀 프로젝트)",
    role: "PM, Frontend Developer",
    status: "완료"
  };

  const screens = [
    { src: mainScreen, title: '메인 페이지', description: '사용자 친화적인 메인 화면' },
    { src: signupScreen, title: '회원가입', description: '간편한 회원가입 프로세스' },
    { src: popularBoard, title: '인기 게시판', description: '인기 게시글 모음' },
    { src: sideSlide, title: '사이드 슬라이드', description: '네비게이션 메뉴' },
    { src: loginInfo, title: '로그인 정보', description: '사용자 로그인 관리' },
    { src: postDetail, title: '게시글 상세', description: '게시글 상세 보기' }
  ];

  const techStack = [
    { name: 'JSP', icon: FaServer, color: techColors.jsp },
    { name: 'Spring MVC', icon: SiSpring, color: techColors.spring },
    { name: 'JavaScript', icon: SiJavascript, color: techColors.javascript },
    { name: 'HTML5', icon: SiHtml5, color: techColors.html5 },
    { name: 'CSS3', icon: SiCss3, color: techColors.css3 },
    { name: 'jQuery', icon: SiJquery, color: techColors.jquery },
    { name: 'AJAX', icon: FaLayerGroup, color: techColors.ajax },
    { name: 'Oracle', icon: SiOracle, color: techColors.oracle },
    { name: 'Git', icon: SiGit, color: techColors.git },
    { name: 'Notion', icon: SiNotion, color: techColors.notion },
    { name: 'Postman', icon: SiPostman, color: techColors.postman }
  ];

  return (
    <DetailContainer>
      <BackButton
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft />
        홈으로 돌아가기
      </BackButton>

      <ContentWrapper>
        <ProjectHeader>
          <div className="logo-title-container">
            <img 
              src={dogfootLogo} 
              alt="Dogfoot Logo"
            />
            <ProjectTitle>Dogfoot Community</ProjectTitle>
          </div>
          <ProjectSubtitle>
            JSP/Spring MVC 기반 커뮤니티 플랫폼 - PM 및 프론트엔드 개발 담당
          </ProjectSubtitle>
        </ProjectHeader>

        <Section>
          <SectionTitle>
            <FaProjectDiagram />
            프로젝트 개요
          </SectionTitle>
          <OverviewGrid>
            <OverviewCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3>
                <FaBook />
                프로젝트 정보
              </h3>
              <p><strong>설명:</strong> {projectOverview.description}</p>
              <p><strong>기간:</strong> {projectOverview.duration}</p>
              <p><strong>팀 규모:</strong> {projectOverview.teamSize}</p>
              <p><strong>상태:</strong> {projectOverview.status}</p>
            </OverviewCard>

            <OverviewCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>
                <FaUsers />
                주요 기능
              </h3>
              <ul>
                <li>사용자 회원가입 및 로그인 시스템</li>
                <li>게시글 CRUD 기능</li>
                <li>인기 게시판 및 게시글 추천 시스템</li>
                <li>AJAX 기반 동적 컨텐츠 로딩</li>
                <li>반응형 웹 디자인</li>
                <li>실시간 사이드 네비게이션</li>
                <li>Oracle DB 연동 데이터 관리</li>
              </ul>
            </OverviewCard>
          </OverviewGrid>
        </Section>

        <RoleSection>
          <h3>
            <FaUser />
            담당 역할 및 성과
          </h3>
          <div className="role-grid">
            <div className="role-item">
              <h4>🎯 PM (Project Manager)</h4>
              <ul>
                <li>5명 팀 프로젝트 전체 기획 및 일정 관리</li>
                <li>요구사항 분석 및 기능 명세서 작성</li>
                <li>팀원 간 업무 분담 및 협업 조율</li>
                <li>프로젝트 진행 상황 모니터링 및 리포팅</li>
                <li>Git을 통한 형상 관리 및 코드 리뷰</li>
              </ul>
            </div>
            <div className="role-item">
              <h4>💻 Frontend Developer</h4>
              <ul>
                <li>HTML5, CSS3, JavaScript를 활용한 UI 개발</li>
                <li>jQuery 및 AJAX를 통한 동적 기능 구현</li>
                <li>반응형 웹 디자인 및 크로스 브라우저 호환성</li>
                <li>JSP와 연동한 프론트엔드 페이지 개발</li>
                <li>사용자 경험 개선을 위한 인터렉션 구현</li>
              </ul>
            </div>
          </div>
        </RoleSection>

        <Section>
          <SectionTitle>
            <FaDesktop />
            구현 화면
          </SectionTitle>
          <GalleryGrid>
            {screens.map((screen, index) => (
              <GalleryItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(screen)}
              >
                <img src={screen.src} alt={screen.title} />
                <div className="content">
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </Section>

        <Section>
          <SectionTitle>
            <FaCode />
            기술 스택
          </SectionTitle>
          <TechStackGrid>
            {techStack.map((tech, index) => (
              <TechItem
                key={index}
                color={tech.color}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="icon">
                  <tech.icon />
                </div>
                <div className="name">{tech.name}</div>
              </TechItem>
            ))}
          </TechStackGrid>
        </Section>

        <Section>
          <SectionTitle>
            <FaFileAlt />
            프로젝트 문서
          </SectionTitle>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: mainColor.text.secondary, marginBottom: '2rem', fontSize: '1.1rem' }}>
              프로젝트 설계 문서, 백엔드 구조 및 API 명세서를 확인하실 수 있습니다.
            </p>
            <DocumentButton
              href={dogfootPdf}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileAlt />
              프로젝트 설계 문서 보기 (PDF)
            </DocumentButton>
          </div>
        </Section>
      </ContentWrapper>

      {/* 이미지 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedImage(null)}>
                ×
              </CloseButton>
              <img src={selectedImage.src} alt={selectedImage.title} />
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </DetailContainer>
  );
}

export default DogfootDetail;