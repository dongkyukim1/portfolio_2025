import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// PMK 콜시스템 이미지 import
import pmkApiImage from '../../assets/projects/dashboard/pmk_callsystem/api.png';
import pmkAdminImage from '../../assets/projects/dashboard/pmk_callsystem/admin.png';
import pmkIvrImage from '../../assets/projects/dashboard/pmk_callsystem/ivr.png';
import pmkJiraImage from '../../assets/projects/dashboard/pmk_callsystem/jira.png';
import pmkManagementImage from '../../assets/projects/dashboard/pmk_callsystem/management.png';

// LGU+ 시스템 이미지 import
import lguCleaningImage from '../../assets/projects/management/LGU+Cleaning.png';
import lguSecurityImage from '../../assets/projects/management/LGU+security.png';
import lguAuthImage from '../../assets/projects/visual_LGU+/인증.png';
import lguUserMgmtImage from '../../assets/projects/visual_LGU+/사용자관리.png';
import lguServiceMgmtImage from '../../assets/projects/visual_LGU+/서비스관리.png';

// LittleBank Admin 이미지 import 
import littlebankAdminMainImage from '../../assets/projects/dashboard/littlebank_admin/littlebank_admin.png';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DetailContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
  padding: 80px 0 60px;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(-5px);
  }
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ProjectTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06d6a0);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const ProjectSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tab = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  padding: 15px 30px;
  background: ${props => props.active ? 
    'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 
    'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 
      'rgba(255, 255, 255, 0.1)'};
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const DashboardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.3);
  }
`;

const DashboardTitle = styled.h3`
  font-size: 1.5rem;
  color: #3b82f6;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DashboardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const FeatureItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #06d6a0;
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #3b82f6;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ScreenshotContainer = styled.div`
  margin-top: 30px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  height: 400px;
  background: #1a1a2e;
`;

const ScreenshotPreview = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 15px;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImage = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: rgba(59, 130, 246, 0.3);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ImageCaption = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-align: center;
`;

const FullImageModal = styled(motion.div)`
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
  padding: 20px;

  img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const OverviewSection = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  text-align: center;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const OverviewCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
`;

function DashboardDetail() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const pmkImages = [
    { src: pmkApiImage, caption: 'API 모니터링 대시보드' },
    { src: pmkAdminImage, caption: '관리자 시스템 페이지' },
    { src: pmkIvrImage, caption: 'IVR 시스템 관리' },
    { src: pmkJiraImage, caption: 'JIRA 연동 및 이슈 트래킹' },
    { src: pmkManagementImage, caption: '콜시스템 매니지먼트 웹 시스템' }
  ];

  const lguImages = [
    { src: lguSecurityImage, caption: 'LGU+ Visual Ring Biz 보안 취약점 개선 작업' },
    { src: lguAuthImage, caption: 'GPKI 인증 시스템 보안 강화' },
    { src: lguUserMgmtImage, caption: '사용자 관리 시스템 인터페이스' },
    { src: lguServiceMgmtImage, caption: '서비스 관리 대시보드' },
    { src: lguCleaningImage, caption: '시스템 클리닝 및 최적화 작업' }
  ];

  const littlebankAdminImages = [
    { src: littlebankAdminMainImage, caption: 'LittleBank 어드민 메인 대시보드' }
  ];

  const dashboards = {
    pmk: {
      title: "PMK 제네시스 콜시스템 장애이력 관리시스템",
      client: "Philip Morris Korea (PMK)",
      description: "필립모리슨코리아 제네시스 콜센터 시스템의 장애 발생을 실시간으로 모니터링하고 이력을 체계적으로 관리하는 운영 대시보드",
      features: [
        "실시간 콜센터 시스템 상태 모니터링",
        "장애 발생 시 즉시 알림 및 로깅",
        "장애 이력 데이터베이스 체계적 관리",
        "장애 원인 분석 및 통계 보고서 생성",
        "복구 시간 및 장애 패턴 분석",
        "콜시스템 매니지먼트 웹 시스템",
        "운영팀 대시보드 및 알림 시스템"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Chart.js", "D3.js", "WebSocket", "MySQL"],
      stats: [
        { number: "99.5%", label: "콜센터 가용성" },
        { number: "5분", label: "평균 복구시간" },
        { number: "60%", label: "모니터링 효율성 향상" }
      ]
    },
    littlebank: {
      title: "LittleBank 어드민 결제관리시스템",
      client: "LittleBank",
      description: "리틀뱅크 모바일 앱의 입출금 내역 조회 및 결제 프로세스를 효율적으로 관리하는 어드민 페이지",
      features: [
        "실시간 결제 내역 모니터링 및 조회",
        "사용자별 입출금 거래 이력 관리",
        "결제 승인/거절 프로세스 관리",
        "결제 오류 로그 추적 및 분석",
        "정산 보고서 자동 생성 기능",
        "관리자 권한별 접근 제어"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Bootstrap", "MySQL"],
      stats: [
        { number: "99.9%", label: "결제 처리 정확도" },
        { number: "50K+", label: "월 처리 건수" },
        { number: "50%", label: "업무 처리 시간 단축" }
      ]
    },
    lguplus: {
      title: "LGU+ Visual Ring Biz 시스템 유지보수",
      client: "LG유플러스",
      description: "LGU+ Visual Ring Biz 서비스의 안정적인 운영을 위한 시스템 유지보수 및 대규모 보안 취약점 개선 작업을 담당",
      features: [
        "웹 애플리케이션 보안 취약점 분석 및 개선: EgovGpkiVariables.js 파일의 민감한 정보 노출 문제 해결",
        "리소스 접근 제어 시스템 구축: ResourceAccessFilter를 통한 민감한 JS 파일 접근 제어",
        "보안 헤더 필터 구현: XSS 방지, 클릭재킹 방지, MIME 스니핑 방지 등 다양한 보안 헤더 적용",
        "동적 GPKI 설정 시스템: 민감한 설정 정보를 정적 파일에서 동적 API로 변경하여 보안 강화",
        "Spring Framework 기반 웹 애플리케이션 유지보수 및 성능 최적화",
        "Apache Tomcat 8.0.43 기반 레거시 시스템 보안 강화",
        "컨택센터 시스템 안정성 유지: 기존 기능 영향 없이 보안 개선 작업 완료",
        "시스템 장애 분석 및 신속한 해결, 정기적인 보안 점검"
      ],
      techStack: ["Java", "Spring Framework", "Spring Security", "Spring Data JPA", "Hibernate", "QueryDSL", "Oracle", "JavaScript", "JSP", "Apache Tomcat", "Maven/Gradle", "GPKI", "보안 필터", "세션 관리"],
      stats: [
        { number: "100%", label: "보안 취약점 해결" },
        { number: "99.8%", label: "시스템 안정성" },
        { number: "0분", label: "보안 작업 다운타임" }
      ],
      challenges: [
        "보안 개선과 기능 유지의 균형: 기존 GPKI 인증 기능을 손상시키지 않으면서 보안 취약점을 해결하는 것이 가장 큰 도전이었습니다.",
        "레거시 시스템 보안 강화: Apache Tomcat 8.0.43 기반의 오래된 시스템에서 최신 보안 기준을 적용하는 작업이 복잡했습니다.",
        "민감 정보 노출 차단: 서버 인증서, 내부 IP 주소 등의 민감한 정보를 완전히 차단하면서도 정상적인 서비스 이용은 가능하도록 설계했습니다."
      ]
    }
  };

  const renderOverview = () => (
    <OverviewSection>
      <SectionTitle>프로젝트 개요</SectionTitle>
      <OverviewGrid>
        <OverviewCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <StatNumber>3</StatNumber>
          <StatLabel>현재 담당 프로젝트</StatLabel>
        </OverviewCard>
        <OverviewCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <StatNumber>100%</StatNumber>
          <StatLabel>웹 기반 대시보드</StatLabel>
        </OverviewCard>
        <OverviewCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StatNumber>실시간</StatNumber>
          <StatLabel>데이터 모니터링</StatLabel>
        </OverviewCard>
      </OverviewGrid>
    </OverviewSection>
  );

  const renderDashboards = () => (
    <DashboardGrid>
      {Object.entries(dashboards).map(([key, dashboard], index) => (
        <DashboardCard
          key={key}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <DashboardTitle>
            <span style={{ fontSize: '1.5rem' }}>
              {key === 'pmk' ? '📞' : key === 'littlebank' ? '💰' : '⚙️'}
            </span>
            {dashboard.title}
          </DashboardTitle>
          <div style={{ marginBottom: '15px', color: '#8b5cf6', fontWeight: '600' }}>
            클라이언트: {dashboard.client}
          </div>
          <DashboardDescription>
            {dashboard.description}
          </DashboardDescription>
          
          <FeatureList>
            {dashboard.features.map((feature, idx) => (
              <FeatureItem key={idx}>{feature}</FeatureItem>
            ))}
          </FeatureList>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>주요 성과</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
              {dashboard.stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#3b82f6',
                    marginBottom: '5px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: 'rgba(255, 255, 255, 0.7)' 
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TechStack>
            {dashboard.techStack.map((tech, idx) => (
              <TechTag key={idx}>{tech}</TechTag>
            ))}
          </TechStack>

          {key === 'pmk' ? (
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>시스템 스크린샷</h4>
              <ImageGallery>
                {pmkImages.slice(0, 2).map((image, idx) => (
                  <GalleryImage
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.caption} />
                    <ImageCaption>{image.caption}</ImageCaption>
                  </GalleryImage>
                ))}
              </ImageGallery>
              {pmkImages.length > 2 && (
                <div style={{ textAlign: 'center', marginTop: '15px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  +{pmkImages.length - 2}개 더 보기 (PMK 탭에서 전체 확인)
                </div>
              )}
            </div>
          ) : key === 'littlebank' ? (
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>시스템 스크린샷</h4>
              <ImageGallery>
                {littlebankAdminImages.slice(0, 2).map((image, idx) => (
                  <GalleryImage
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.caption} />
                    <ImageCaption>{image.caption}</ImageCaption>
                  </GalleryImage>
                ))}
              </ImageGallery>
            </div>
          ) : key === 'lguplus' ? (
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>작업 스크린샷</h4>
              <ImageGallery>
                {lguImages.map((image, idx) => (
                  <GalleryImage
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.src} alt={image.caption} />
                    <ImageCaption>{image.caption}</ImageCaption>
                  </GalleryImage>
                ))}
              </ImageGallery>
            </div>
          ) : (
            <ScreenshotContainer>
              <ScreenshotPreview>
                기타 프로젝트 스크린샷
              </ScreenshotPreview>
            </ScreenshotContainer>
          )}
        </DashboardCard>
      ))}
    </DashboardGrid>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            {renderOverview()}
            {renderDashboards()}
          </>
        );
      case 'pmk':
        return (
          <DashboardGrid>
            <DashboardCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <DashboardTitle>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                {dashboards.pmk.title}
              </DashboardTitle>
              <div style={{ marginBottom: '15px', color: '#8b5cf6', fontWeight: '600' }}>
                클라이언트: {dashboards.pmk.client}
              </div>
              <DashboardDescription>
                {dashboards.pmk.description}
              </DashboardDescription>
              <FeatureList>
                {dashboards.pmk.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <TechStack>
                {dashboards.pmk.techStack.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>시스템 스크린샷</h4>
                <ImageGallery>
                  {pmkImages.map((image, idx) => (
                    <GalleryImage
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img src={image.src} alt={image.caption} />
                      <ImageCaption>{image.caption}</ImageCaption>
                    </GalleryImage>
                  ))}
                </ImageGallery>
              </div>
            </DashboardCard>
          </DashboardGrid>
        );
      case 'littlebank':
        return (
          <DashboardGrid>
            <DashboardCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <DashboardTitle>
                <span style={{ fontSize: '1.5rem' }}>💰</span>
                {dashboards.littlebank.title}
              </DashboardTitle>
              <div style={{ marginBottom: '15px', color: '#8b5cf6', fontWeight: '600' }}>
                클라이언트: {dashboards.littlebank.client}
              </div>
              <DashboardDescription>
                {dashboards.littlebank.description}
              </DashboardDescription>
              <FeatureList>
                {dashboards.littlebank.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <TechStack>
                {dashboards.littlebank.techStack.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>
              
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>시스템 스크린샷</h4>
                <ImageGallery>
                  {littlebankAdminImages.map((image, idx) => (
                    <GalleryImage
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img src={image.src} alt={image.caption} />
                      <ImageCaption>{image.caption}</ImageCaption>
                    </GalleryImage>
                  ))}
                </ImageGallery>
              </div>
            </DashboardCard>
          </DashboardGrid>
        );
      case 'lguplus':
        return (
          <DashboardGrid>
            <DashboardCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <DashboardTitle>
                <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                {dashboards.lguplus.title}
              </DashboardTitle>
              <div style={{ marginBottom: '15px', color: '#8b5cf6', fontWeight: '600' }}>
                클라이언트: {dashboards.lguplus.client}
              </div>
              <DashboardDescription>
                {dashboards.lguplus.description}
              </DashboardDescription>
              <FeatureList>
                {dashboards.lguplus.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <TechStack>
                {dashboards.lguplus.techStack.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ color: '#f59e0b', marginBottom: '15px' }}>기술적 도전과 해결</h4>
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '20px', borderRadius: '10px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  {dashboards.lguplus.challenges.map((challenge, idx) => (
                    <div key={idx} style={{ 
                      marginBottom: idx < dashboards.lguplus.challenges.length - 1 ? '15px' : '0',
                      padding: '10px 0',
                      borderBottom: idx < dashboards.lguplus.challenges.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                    }}>
                      <div style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>{challenge}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: '30px' }}>
                <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}>시스템 작업 스크린샷</h4>
                <ImageGallery>
                  {lguImages.map((image, idx) => (
                    <GalleryImage
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img src={image.src} alt={image.caption} />
                      <ImageCaption>{image.caption}</ImageCaption>
                    </GalleryImage>
                  ))}
                </ImageGallery>
              </div>
            </DashboardCard>
          </DashboardGrid>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <DetailContainer>
      <ContentWrapper>
        <BackButton
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← 홈으로 돌아가기
        </BackButton>

        <ProjectHeader>
          <ProjectTitle>현재 담당 프로젝트</ProjectTitle>
          <ProjectSubtitle>
            넷컴솔루션에서 담당하고 있는 클라이언트별 시스템 개발 및 유지보수 프로젝트
          </ProjectSubtitle>
        </ProjectHeader>

        <TabContainer>
          <Tab
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            전체 개요
          </Tab>
          <Tab
            active={activeTab === 'pmk'}
            onClick={() => setActiveTab('pmk')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PMK 콜시스템 관리
          </Tab>
          <Tab
            active={activeTab === 'littlebank'}
            onClick={() => setActiveTab('littlebank')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LittleBank 어드민
          </Tab>
          <Tab
            active={activeTab === 'lguplus'}
            onClick={() => setActiveTab('lguplus')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LGU+ 시스템
          </Tab>
        </TabContainer>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </ContentWrapper>

      {/* 이미지 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <FullImageModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <CloseButton onClick={() => setSelectedImage(null)}>
              ×
            </CloseButton>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '1.1rem'
            }}>
              {selectedImage.caption}
            </div>
          </FullImageModal>
        )}
      </AnimatePresence>
    </DetailContainer>
  );
}

export default DashboardDetail;