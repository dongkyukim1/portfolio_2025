import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaHome, FaRocket, 
  FaMobileAlt, FaChartLine, FaComment, FaPhone, FaEnvelope, FaServer,
  FaDatabase, FaDocker, FaJava, FaGitAlt, FaCodeBranch, FaTerminal,
  FaFolder, FaFolderOpen, FaFileCode, FaChevronDown, FaChevronRight, FaWifi,
  FaUser, FaBolt, FaCog, FaFilePdf, FaDownload, FaCloud, FaGlobe
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiMysql, 
  SiRedis, 
  SiSwagger,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiApachetomcat,
  SiGradle,
  SiAuth0,
  SiPython
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { RiKakaoTalkFill } from 'react-icons/ri';

// 이미지 import
import devhubImage from '../../assets/gallery/devhub.gif';

// DevHub GIF imports
import googleLoginGif from '../../assets/projects/devhub/google-login.gif';
import projectCreateGif from '../../assets/projects/devhub/project-create.gif';
import projectUpdateGif from '../../assets/projects/devhub/project-update.gif';
import projectDeleteGif from '../../assets/projects/devhub/project-delete.gif';
import projectListGif from '../../assets/projects/devhub/project-list.gif';
import teamInviteGif from '../../assets/projects/devhub/team-invite.gif';
import mainTeamInviteGif from '../../assets/projects/devhub/main-team-invite.gif';
import aiCodeReviewGif from '../../assets/projects/devhub/ai-code-review.gif';
import aiServiceGif from '../../assets/projects/devhub/ai-service.gif';
import repositoryGif from '../../assets/projects/devhub/repository-features.gif';
import commitGif from '../../assets/projects/devhub/commit.gif';
import messageGif from '../../assets/projects/devhub/main-messages.gif';
import paymentGif from '../../assets/projects/devhub/payment.gif';
import recordGif from '../../assets/projects/devhub/history.gif';
import logoutGif from '../../assets/projects/devhub/logout.gif';
import languageChangeGif from '../../assets/projects/devhub/language-change.gif';

// 메인 컬러 정의 (VSCode 다크 테마 컬러)
const mainColor = {
  primary: '#007ACC',
  primaryLight: 'rgba(0, 122, 204, 0.1)',
  primaryBorder: 'rgba(0, 122, 204, 0.3)',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.85)',
    tertiary: 'rgba(255, 255, 255, 0.7)',
    accent: '#4EC9B0'
  },
  vscode: {
    background: '#1E1E1E',
    sidebar: '#252526',
    activeTab: '#1E1E1E',
    inactiveTab: '#2D2D2D',
    border: '#3E3E42',
    activeBorder: '#007ACC',
    hover: '#2A2D2E'
  }
};

// Intersection Observer를 위한 옵션
const intersectionOptions = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
};

const DevHubDetail = React.memo(() => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [activeDemo, setActiveDemo] = useState('auth');
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState({
    features: false,
    tech: false,
    challenges: false,
    implementation: false
  });
  
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());
  const containerRef = useRef(null);

  const toggleFolder = useCallback((folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  }, []);

  const FileTreeItem = React.memo(({ name, isFolder, isExpanded, onToggle, children, isActive, onClick }) => (
    <div>
      <FileItem 
        active={isActive}
        onClick={onClick || onToggle}
        style={{ cursor: 'pointer' }}
      >
        {isFolder ? (
          <>
            {isExpanded ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
            {isExpanded ? <FaFolderOpen /> : <FaFolder />}
          </>
        ) : (
          <FaFileCode />
        )}
        <span style={{ marginLeft: '0.5rem' }}>{name}</span>
      </FileItem>
      {isExpanded && children && (
        <div style={{ paddingLeft: '1.2rem' }}>
          {children}
        </div>
      )}
    </div>
  ));

  // Intersection Observer 콜백 함수
  const handleIntersect = useCallback((entries) => {
    const sections = ['overview', 'features', 'tech', 'challenges', 'implementation', 'demo'];
    const visibleSections = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => {
        const aIndex = sections.indexOf(a.target.id);
        const bIndex = sections.indexOf(b.target.id);
        return aIndex - bIndex;
      });

    if (visibleSections.length > 0) {
      const newActiveSection = visibleSections[0].target.id;
      setActiveSection(prev => prev !== newActiveSection ? newActiveSection : prev);
    }
  }, []);

  // Intersection Observer로 스크롤 감지 (깜빡거림 완전 제거)
  useEffect(() => {
    const sections = ['overview', 'features', 'tech', 'challenges', 'implementation', 'demo'];

    observerRef.current = new IntersectionObserver(handleIntersect, intersectionOptions);
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionsRef.current.set(sectionId, element);
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      sectionsRef.current.clear();
    };
  }, [handleIntersect]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  // 이미지 로드 핸들러
  const handleImageLoad = useCallback((imageSrc) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  // Demo 탭 변경 핸들러 최적화
  const handleDemoTabChange = useCallback((demo) => {
    setActiveDemo(demo);
  }, []);

  // 모든 Demo 이미지 미리 로드
  useEffect(() => {
    const demoImages = [
      googleLoginGif, logoutGif, projectCreateGif, projectUpdateGif, 
      projectListGif, aiCodeReviewGif, aiServiceGif, teamInviteGif, 
      messageGif, repositoryGif
    ];
    
    demoImages.forEach(src => {
      const img = new Image();
      img.onload = () => handleImageLoad(src);
      img.src = src;
    });
  }, [handleImageLoad]);

  // 섹션 데이터 메모이제이션
  const sectionData = useMemo(() => ({
    features: expandedFolders.features,
    tech: expandedFolders.tech,
    challenges: expandedFolders.challenges,
    implementation: expandedFolders.implementation
  }), [expandedFolders]);

  // 컨테이너 props 메모이제이션
  const containerProps = useMemo(() => ({
    ref: containerRef,
    'data-section': activeSection
  }), [activeSection]);

  return (
    <Container {...containerProps}>      
      <VSCodeLayout>
        {/* Activity Bar */}
        <ActivityBar>
          <ActivityItem active={true}>
            <VscCode size={24} />
          </ActivityItem>
        </ActivityBar>

        {/* Sidebar */}
        <SideBar>
          {useMemo(() => (
            <FileExplorer>
              <h3>DevHub Project Navigator</h3>
              
              <FileTreeItem
                name="Overview.md"
                isFolder={false}
                isActive={activeSection === 'overview'}
                onClick={() => scrollToSection('overview')}
              />
              
              <FileTreeItem
                name="Technical Stack"
                isFolder={true}
                isExpanded={sectionData.tech}
                onToggle={() => toggleFolder('tech')}
              >
                <FileTreeItem name="Backend.md" isFolder={false} onClick={() => scrollToSection('tech')} />
                <FileTreeItem name="Database.md" isFolder={false} onClick={() => scrollToSection('tech')} />
                <FileTreeItem name="DevOps.md" isFolder={false} onClick={() => scrollToSection('tech')} />
                <FileTreeItem name="Frontend.md" isFolder={false} onClick={() => scrollToSection('tech')} />
                <FileTreeItem name="AI_Integration.md" isFolder={false} onClick={() => scrollToSection('tech')} />
              </FileTreeItem>

              <FileTreeItem
                name="Implementation"
                isFolder={true}
                isExpanded={sectionData.implementation}
                onToggle={() => toggleFolder('implementation')}
              >
                <FileTreeItem name="AIIntegration.md" isFolder={false} onClick={() => scrollToSection('implementation')} />
                <FileTreeItem name="PaymentSystem.md" isFolder={false} onClick={() => scrollToSection('implementation')} />
                <FileTreeItem name="Security.md" isFolder={false} onClick={() => scrollToSection('implementation')} />
              </FileTreeItem>

              <FileTreeItem
                name="Challenges"
                isFolder={true}
                isExpanded={sectionData.challenges}
                onToggle={() => toggleFolder('challenges')}
              >
                <FileTreeItem name="Performance.md" isFolder={false} onClick={() => scrollToSection('challenges')} />
                <FileTreeItem name="Scalability.md" isFolder={false} onClick={() => scrollToSection('challenges')} />
                <FileTreeItem name="UserExperience.md" isFolder={false} onClick={() => scrollToSection('challenges')} />
                <FileTreeItem name="AI_Migration.md" isFolder={false} onClick={() => scrollToSection('challenges')} />
              </FileTreeItem>

              <FileTreeItem
                name="Features"
                isFolder={true}
                isExpanded={sectionData.features}
                onToggle={() => toggleFolder('features')}
              >
                <FileTreeItem
                  name="Core Features"
                  isFolder={false}
                  onClick={() => scrollToSection('features')}
                />
                <FileTreeItem
                  name="AI Integration"
                  isFolder={false}
                  onClick={() => scrollToSection('ai-features')}
                />
                <FileTreeItem
                  name="Team Collaboration"
                  isFolder={false}
                  onClick={() => scrollToSection('collaboration')}
                />
              </FileTreeItem>
            </FileExplorer>
          ), [activeSection, sectionData, scrollToSection, toggleFolder])}

          {/* Outline Section - Moved up */}
          {useMemo(() => (
            <OutlineSection>
              <OutlineHeader>OUTLINE</OutlineHeader>
              <OutlineItem 
                active={activeSection === 'overview'} 
                onClick={() => scrollToSection('overview')}
              >
                <FaHome size={12} />
                개요
              </OutlineItem>
              <OutlineItem 
                active={activeSection === 'features'} 
                onClick={() => scrollToSection('features')}
              >
                <FaRocket size={12} />
                주요 기능
              </OutlineItem>
              <OutlineItem 
                active={activeSection === 'tech'} 
                onClick={() => scrollToSection('tech')}
              >
                <FaCode size={12} />
                기술 스택
              </OutlineItem>
              <OutlineItem 
                active={activeSection === 'challenges'} 
                onClick={() => scrollToSection('challenges')}
              >
                <FaChartLine size={12} />
                도전과제
              </OutlineItem>
              <OutlineItem 
                active={activeSection === 'implementation'} 
                onClick={() => scrollToSection('implementation')}
              >
                <FaServer size={12} />
                구현사항
              </OutlineItem>
              <OutlineItem 
                active={activeSection === 'demo'} 
                onClick={() => scrollToSection('demo')}
              >
                <FaMobileAlt size={12} />
                시연
              </OutlineItem>
            </OutlineSection>
          ), [activeSection, scrollToSection])}
        </SideBar>

        {/* Main Content */}
        <MainContent>
          <TabBar>
            <Tab active={true}>
              <FaFileCode size={14} />
              <span>DevHub.md</span>
            </Tab>
          </TabBar>

          <ContentArea>
            <OverviewSection id="overview">
              <SectionTitle>
                <VscCode style={{ color: mainColor.primary }} />
                DevHub - Git보다 쉬운 차세대 형상관리 플랫폼
              </SectionTitle>
              
              <ProjectImageContainer>
                <motion.img 
                  src={devhubImage} 
                  alt="DevHub 프로젝트"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onLoad={() => handleImageLoad(devhubImage)}
                  loading="lazy"
                  style={{ 
                    opacity: loadedImages.has(devhubImage) ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </ProjectImageContainer>

              <ProjectDescription>
                <DescriptionItem>
                  <strong>프로젝트 개요:</strong> DevHub는 Git의 복잡성에 좌절하는 초보 개발자들을 위한 
                  차세대 형상관리 플랫폼입니다. 전통적인 CLI 중심의 Git을 직관적인 웹 인터페이스로 재구성하여 
                  누구나 쉽게 버전 관리와 협업을 시작할 수 있도록 설계되었습니다.
                </DescriptionItem>
                
                <DescriptionItem>
                  <strong>개인 기여도:</strong> 
                  <ul>
                    <li><strong>풀스택 개발</strong> - Spring Boot 백엔드와 프론트엔드 전체 아키텍처 설계 및 구현</li>
                    <li><strong>AI 시스템 구축</strong> - OpenAI에서 로컬 Llama로의 완전한 마이그레이션 및 Flask AI 서버 개발</li>
                    <li><strong>클라우드 인프라</strong> - AWS RDS, ElastiCache, Route53 기반 프로덕션 환경 구축 및 배포</li>
                    <li><strong>UI/UX 디자인</strong> - 사용자 중심의 직관적인 인터페이스 디자인 및 사용성 개선</li>
                    <li><strong>DevOps 구현</strong> - Docker Compose를 활용한 컨테이너 기반 배포 및 가비아 도메인 연결</li>
                  </ul>
                </DescriptionItem>
                
                <DescriptionItem>
                  <strong>개발 목적:</strong> 초보 개발자들이 Git의 복잡한 CLI 명령어와 브랜치 관리에서 겪는 진입장벽을 해결하고자 
                  시작되었습니다. "Git보다 쉽게 형상관리와 코드리뷰를 해보자"는 모토 하에, 직관적인 웹 인터페이스를 통해 
                  버전 관리의 복잡성을 추상화하고 개발 워크플로우를 단순화하는 것을 목표로 합니다.
                </DescriptionItem>

                <DescriptionItem>
                  <strong>핵심 가치 제안:</strong>
                  <ul>
                    <li><strong>Git 복잡성 추상화</strong> - CLI 명령어 없이 직관적인 웹 UI로 형상관리</li>
                    <li><strong>스마트 코드 리뷰</strong> - 로컬 Llama AI를 활용한 자동화된 코드 분석</li>
                    <li><strong>시각적 워크플로우</strong> - 브랜치, 커밋, 머지를 그래픽으로 표현</li>
                    <li><strong>협업 중심 설계</strong> - 실시간 커뮤니케이션과 팀 관리 도구</li>
                    <li><strong>학습 친화적</strong> - 초보자를 위한 단계별 가이드와 도움말</li>
                  </ul>
                </DescriptionItem>

                <DescriptionItem>
                  <strong>핵심 기술 스택:</strong> Spring Boot (백엔드), Flask (AI 서버), AWS RDS/ElastiCache (데이터), WebSocket (실시간 통신), 
                  로컬 Llama AI (코드 분석), Docker Compose (배포), JavaScript/jQuery (프론트엔드)
                </DescriptionItem>
              </ProjectDescription>

              <ActionButtons>
                <ActionButton 
                  primary 
                  href="https://github.com/dongkyukim1/devhub-server/tree/main" 
                  target="_blank"
                >
                  <FaGithub />
                  GitHub 저장소
                </ActionButton>
                <ActionButton 
                  href="https://github.com/Devs-Of-Kosmo/devhub-server" 
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                  팀 저장소
                </ActionButton>
                <ActionButton 
                  href="/devhub_summary.pdf" 
                  download="DevHub_프로젝트_요약.pdf"
                  title="DevHub 프로젝트 요약 문서 다운로드"
                >
                  <FaFilePdf />
                  프로젝트 요약 PDF
                </ActionButton>
              </ActionButtons>
            </OverviewSection>

            <FeaturesSection id="features">
              <SectionTitle>
                <FaRocket style={{ color: mainColor.text.accent }} />
                주요 기능
              </SectionTitle>
              
              <FeatureGrid>
                <FeatureCard>
                  <FeatureIcon style={{ backgroundColor: 'rgba(76, 201, 176, 0.1)' }}>
                    <FaBolt style={{ color: '#4EC9B0' }} />
                  </FeatureIcon>
                  <FeatureTitle>로컬 AI 코드 리뷰</FeatureTitle>
                  <FeatureDesc>
                    비용 효율적인 로컬 Llama 모델을 활용한 실시간 코드 분석 및 개선사항 제안으로 코드 품질 향상
                  </FeatureDesc>
                </FeatureCard>

                <FeatureCard>
                  <FeatureIcon style={{ backgroundColor: 'rgba(0, 122, 204, 0.1)' }}>
                    <FaGitAlt style={{ color: mainColor.primary }} />
                  </FeatureIcon>
                  <FeatureTitle>직관적 형상관리</FeatureTitle>
                  <FeatureDesc>
                    복잡한 Git CLI 명령어를 시각적 인터페이스로 대체하여 초보자도 쉽게 버전 관리 가능
                  </FeatureDesc>
                </FeatureCard>

                <FeatureCard>
                  <FeatureIcon style={{ backgroundColor: 'rgba(255, 206, 84, 0.1)' }}>
                    <FaComment style={{ color: '#FFCE54' }} />
                  </FeatureIcon>
                  <FeatureTitle>실시간 협업 지원</FeatureTitle>
                  <FeatureDesc>
                    Git 작업 중 발생하는 질문과 피드백을 즉시 공유할 수 있는 통합 커뮤니케이션 시스템
                  </FeatureDesc>
                </FeatureCard>

                <FeatureCard>
                  <FeatureIcon style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)' }}>
                    <FaChartLine style={{ color: '#E74C3C' }} />
                  </FeatureIcon>
                  <FeatureTitle>학습 친화적 환경</FeatureTitle>
                  <FeatureDesc>
                    단계별 가이드와 시각적 피드백을 통해 Git 개념을 자연스럽게 학습할 수 있는 환경 제공
                  </FeatureDesc>
                </FeatureCard>
              </FeatureGrid>
            </FeaturesSection>

            <TechSection id="tech">
              <SectionTitle>
                <FaServer style={{ color: mainColor.primary }} />
                기술 스택
              </SectionTitle>
              
              <TechGrid>
                <TechCategory>
                  <TechCategoryTitle>Backend</TechCategoryTitle>
                  <TechList>
                    <TechItem>
                      <SiSpringboot style={{ color: '#6DB33F' }} />
                      <span>Spring Boot</span>
                    </TechItem>
                    <TechItem>
                      <FaJava style={{ color: '#ED8B00' }} />
                      <span>Java 17</span>
                    </TechItem>
                    <TechItem>
                      <FaGitAlt style={{ color: '#F05032' }} />
                      <span>JGit</span>
                    </TechItem>
                    <TechItem>
                      <SiGradle style={{ color: '#02303A' }} />
                      <span>Gradle</span>
                    </TechItem>
                    <TechItem>
                      <SiApachetomcat style={{ color: '#F8DC75' }} />
                      <span>Apache Tomcat</span>
                    </TechItem>
                  </TechList>
                </TechCategory>

                <TechCategory>
                  <TechCategoryTitle>Database</TechCategoryTitle>
                  <TechList>
                    <TechItem>
                      <SiMysql style={{ color: '#4479A1' }} />
                      <span>MySQL</span>
                    </TechItem>
                    <TechItem>
                      <SiRedis style={{ color: '#DC382D' }} />
                      <span>Redis</span>
                    </TechItem>
                  </TechList>
                </TechCategory>

                <TechCategory>
                  <TechCategoryTitle>AI & Machine Learning</TechCategoryTitle>
                  <TechList>
                    <TechItem>
                      <SiPython style={{ color: '#3776AB' }} />
                      <span>Python</span>
                    </TechItem>
                    <TechItem>
                      <FaServer style={{ color: '#000000' }} />
                      <span>Flask</span>
                    </TechItem>
                    <TechItem>
                      <FaBolt style={{ color: '#FF6B6B' }} />
                      <span>Llama 3.2</span>
                    </TechItem>
                    <TechItem>
                      <FaCog style={{ color: '#4EC9B0' }} />
                      <span>Ollama</span>
                    </TechItem>
                  </TechList>
                </TechCategory>

                <TechCategory>
                  <TechCategoryTitle>Frontend</TechCategoryTitle>
                  <TechList>
                    <TechItem>
                      <SiHtml5 style={{ color: '#E34F26' }} />
                      <span>HTML5</span>
                    </TechItem>
                    <TechItem>
                      <SiCss3 style={{ color: '#1572B6' }} />
                      <span>CSS3</span>
                    </TechItem>
                    <TechItem>
                      <SiJavascript style={{ color: '#F7DF1E' }} />
                      <span>JavaScript</span>
                    </TechItem>
                    <TechItem>
                      <SiJquery style={{ color: '#0769AD' }} />
                      <span>jQuery</span>
                    </TechItem>
                    <TechItem>
                      <FaChartLine style={{ color: '#FF6B35' }} />
                      <span>Canvas API</span>
                    </TechItem>
                  </TechList>
                </TechCategory>

                <TechCategory>
                  <TechCategoryTitle>DevOps & Cloud</TechCategoryTitle>
                  <TechList>
                    <TechItem>
                      <FaCloud style={{ color: '#FF9900' }} />
                      <span>AWS RDS</span>
                    </TechItem>
                    <TechItem>
                      <FaCloud style={{ color: '#FF9900' }} />
                      <span>ElastiCache</span>
                    </TechItem>
                    <TechItem>
                      <FaCloud style={{ color: '#FF9900' }} />
                      <span>Route53</span>
                    </TechItem>
                    <TechItem>
                      <FaDocker style={{ color: '#2496ED' }} />
                      <span>Docker Compose</span>
                    </TechItem>
                    <TechItem>
                      <FaGlobe style={{ color: '#4285F4' }} />
                      <span>가비아 도메인</span>
                    </TechItem>
                    <TechItem>
                      <FaWifi style={{ color: '#010101' }} />
                      <span>WebSocket</span>
                    </TechItem>
                    <TechItem>
                      <SiSwagger style={{ color: '#85EA2D' }} />
                      <span>Swagger</span>
                    </TechItem>
                    <TechItem>
                      <SiAuth0 style={{ color: '#EB5424' }} />
                      <span>OAuth 2.0</span>
                    </TechItem>
                    <TechItem>
                      <FaCog style={{ color: '#6DB33F' }} />
                      <span>Spring Security</span>
                    </TechItem>
                  </TechList>
                </TechCategory>
              </TechGrid>
            </TechSection>

            <ChallengesSection id="challenges">
              <SectionTitle>
                <FaCodeBranch style={{ color: mainColor.text.accent }} />
                주요 도전과제 및 해결방안
              </SectionTitle>
              
              <ChallengeList>
                <ChallengeItem>
                  <ChallengeTitle>
                    <FaBolt style={{ color: '#FF6B6B', marginRight: '0.5rem' }} />
                    OpenAI API에서 로컬 Llama로 AI 모델 마이그레이션
                  </ChallengeTitle>
                  <ChallengeDesc>
                    <strong>문제:</strong> OpenAI API 사용으로 인한 높은 비용과 외부 의존성, 응답 지연 문제<br/>
                    <strong>해결:</strong> 
                    <ul>
                      <li><strong>로컬 Llama 3.2 모델 도입:</strong> Ollama를 활용한 로컬 AI 서버 구축으로 비용 90% 절약</li>
                      <li><strong>성능 최적화:</strong> GPU 가속과 모델 양자화를 통해 응답 속도 3배 향상</li>
                      <li><strong>프라이버시 강화:</strong> 민감한 코드 정보가 외부로 전송되지 않는 완전한 로컬 처리</li>
                      <li><strong>커스터마이징:</strong> 코드 리뷰 전용 fine-tuning으로 더 정확한 분석 결과 제공</li>
                    </ul>
                  </ChallengeDesc>
                </ChallengeItem>

                <ChallengeItem>
                  <ChallengeTitle>Git CLI의 진입장벽 해결</ChallengeTitle>
                  <ChallengeDesc>
                    <strong>문제:</strong> 초보 개발자들이 Git의 복잡한 명령어(merge, rebase, cherry-pick 등)와 개념적 이해에서 어려움을 겪음<br/>
                    <strong>해결:</strong> 복잡한 Git 작업을 직관적인 드래그 앤 드롭과 시각적 가이드로 변환하여 
                    학습 곡선을 완만하게 만들고 실수를 방지하는 안전장치 구현
                  </ChallengeDesc>
                </ChallengeItem>

                <ChallengeItem>
                  <ChallengeTitle>실시간 협업 충돌 방지</ChallengeTitle>
                  <ChallengeDesc>
                    <strong>문제:</strong> 여러 개발자가 동시에 같은 파일을 수정할 때 발생하는 충돌을 초보자가 해결하기 어려움<br/>
                    <strong>해결:</strong> WebSocket 기반 실시간 편집 상태 공유와 지능형 충돌 감지 시스템으로 
                    충돌을 사전에 방지하고 발생 시 자동 해결 옵션 제안
                  </ChallengeDesc>
                </ChallengeItem>

                <ChallengeItem>
                  <ChallengeTitle>보안 강화</ChallengeTitle>
                  <ChallengeDesc>
                    <strong>문제:</strong> 소스코드 및 민감한 프로젝트 정보의 보안 위험<br/>
                    <strong>해결:</strong> JWT 토큰 기반 인증, XSS/CSRF 방지, SQL Injection 방어 등 
                    다층 보안 체계 구축
                  </ChallengeDesc>
                </ChallengeItem>
              </ChallengeList>
            </ChallengesSection>

            <ImplementationSection id="implementation">
              <SectionTitle>
                <FaServer style={{ color: mainColor.primary }} />
                주요 구현사항
              </SectionTitle>
              
              <ImplementationGrid>
                <ImplementationCategory>
                  <ImplementationTitle>
                    <FaBolt style={{ color: '#FF6B6B', marginRight: '0.5rem' }} />
                    AI 코드 리뷰 시스템
                  </ImplementationTitle>
                  <ImplementationContent>
                    <ImplementationItem>
                      <strong>로컬 Llama 3.2 통합:</strong> OpenAI API 의존성을 제거하고 완전한 로컬 AI 환경 구축
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>Ollama 서버 연동:</strong> Python Flask를 통한 AI 모델 서빙 및 Spring Boot와 RESTful API 통신
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>컨텍스트 인식 분석:</strong> 파일 확장자별 특화된 코드 분석 프롬프트 엔지니어링
                    </ImplementationItem>
                  </ImplementationContent>
                </ImplementationCategory>

                <ImplementationCategory>
                  <ImplementationTitle>
                    <FaGitAlt style={{ color: mainColor.primary, marginRight: '0.5rem' }} />
                    Git 추상화 레이어
                  </ImplementationTitle>
                  <ImplementationContent>
                    <ImplementationItem>
                      <strong>JGit 라이브러리 활용:</strong> Java 환경에서 Git 명령어를 프로그래밍적으로 제어
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>시각적 브랜치 표현:</strong> HTML5 Canvas와 JavaScript를 활용한 Git 그래프 시각화 및 인터랙티브 조작
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>안전한 머지 시스템:</strong> 충돌 감지 및 자동 해결 제안 알고리즘 구현
                    </ImplementationItem>
                  </ImplementationContent>
                </ImplementationCategory>

                <ImplementationCategory>
                  <ImplementationTitle>
                    <FaWifi style={{ color: '#4EC9B0', marginRight: '0.5rem' }} />
                    실시간 협업 인프라
                  </ImplementationTitle>
                  <ImplementationContent>
                    <ImplementationItem>
                      <strong>WebSocket STOMP:</strong> 실시간 양방향 통신으로 다중 사용자 동시 편집 지원
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>Redis Pub/Sub:</strong> 분산 환경에서 실시간 이벤트 브로드캐스팅 및 세션 관리
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>Operational Transformation:</strong> 동시 편집 시 데이터 일관성 보장 알고리즘
                    </ImplementationItem>
                  </ImplementationContent>
                </ImplementationCategory>

                <ImplementationCategory>
                  <ImplementationTitle>
                    <FaCog style={{ color: '#FFCE54', marginRight: '0.5rem' }} />
                    보안 및 인증 체계
                  </ImplementationTitle>
                  <ImplementationContent>
                    <ImplementationItem>
                      <strong>OAuth 2.0 + JWT:</strong> Google 소셜 로그인과 상태 없는 토큰 기반 인증 구현
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>역할 기반 접근 제어:</strong> Spring Security를 활용한 세밀한 권한 관리 시스템
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>API Rate Limiting:</strong> Redis를 활용한 요청 제한 및 DDoS 방어 체계
                    </ImplementationItem>
                  </ImplementationContent>
                </ImplementationCategory>

                <ImplementationCategory>
                  <ImplementationTitle>
                    <FaUser style={{ color: '#9B59B6', marginRight: '0.5rem' }} />
                    개인 설계 및 개발
                  </ImplementationTitle>
                  <ImplementationContent>
                    <ImplementationItem>
                      <strong>전체 아키텍처 설계:</strong> Spring Boot 메인 서버와 Flask AI 서버 간의 마이크로서비스 아키텍처 구성
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>프론트엔드 UI/UX 디자인:</strong> 초보자 친화적인 직관적 인터페이스와 시각적 피드백 시스템 설계
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>반응형 웹 디자인:</strong> 모바일과 데스크톱 환경을 모두 지원하는 적응형 레이아웃 구현
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>성능 최적화:</strong> 비동기 처리와 캐싱 전략을 통한 사용자 경험 개선
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>AWS 클라우드 배포:</strong> RDS(MySQL), ElastiCache(Redis), Route53을 활용한 완전한 프로덕션 환경 구축
                    </ImplementationItem>
                    <ImplementationItem>
                      <strong>컨테이너 오케스트레이션:</strong> Docker Compose를 이용한 멀티 컨테이너 배포 및 서비스 관리
                    </ImplementationItem>
                  </ImplementationContent>
                </ImplementationCategory>
              </ImplementationGrid>
            </ImplementationSection>

            <DemoSection id="demo">
              <SectionTitle>
                <FaMobileAlt style={{ color: mainColor.primary }} />
                실시간 기능 시연
              </SectionTitle>
              
              <DemoTabsContainer>
                {useMemo(() => (
                  <DemoTabs>
                    <DemoTab 
                      active={activeDemo === 'auth'}
                      onClick={() => handleDemoTabChange('auth')}
                    >
                      <FaUser style={{ marginRight: '0.5rem' }} />
                      사용자 인증
                    </DemoTab>
                    <DemoTab 
                      active={activeDemo === 'project'}
                      onClick={() => handleDemoTabChange('project')}
                    >
                      <FaCode style={{ marginRight: '0.5rem' }} />
                      형상관리 워크플로우
                    </DemoTab>
                    <DemoTab 
                      active={activeDemo === 'ai'}
                      onClick={() => handleDemoTabChange('ai')}
                    >
                      <FaBolt style={{ marginRight: '0.5rem' }} />
                      로컬 AI 기능
                    </DemoTab>
                    <DemoTab 
                      active={activeDemo === 'collaboration'}
                      onClick={() => handleDemoTabChange('collaboration')}
                    >
                      <FaComment style={{ marginRight: '0.5rem' }} />
                      팀 협업 기능
                    </DemoTab>
                  </DemoTabs>
                ), [activeDemo, handleDemoTabChange])}

                <DemoContent>
                  {/* Auth Demo */}
                  <DemoContentArea style={{ display: activeDemo === 'auth' ? 'grid' : 'none' }}>
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={googleLoginGif} 
                          alt="구글 로그인"
                          initial={false}
                          animate={{ opacity: loadedImages.has(googleLoginGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(googleLoginGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>소셜 로그인 (Google OAuth)</h3>
                          <p>간편하고 안전한 구글 OAuth 2.0 인증 시스템으로 원클릭 로그인을 지원합니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                    
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={logoutGif} 
                          alt="로그아웃"
                          initial={false}
                          animate={{ opacity: loadedImages.has(logoutGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(logoutGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>세션 관리</h3>
                          <p>안전한 로그아웃과 세션 관리로 보안성을 보장합니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                  </DemoContentArea>

                  {/* Project Demo */}
                  <DemoContentArea style={{ display: activeDemo === 'project' ? 'grid' : 'none' }}>
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={projectCreateGif} 
                          alt="프로젝트 생성"
                          initial={false}
                          animate={{ opacity: loadedImages.has(projectCreateGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(projectCreateGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>저장소 초기화</h3>
                          <p>복잡한 git init 과정을 한 번의 클릭으로 자동화하여 새로운 프로젝트를 시작할 수 있습니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                    
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={projectUpdateGif} 
                          alt="프로젝트 수정"
                          initial={false}
                          animate={{ opacity: loadedImages.has(projectUpdateGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(projectUpdateGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>변경사항 커밋</h3>
                          <p>명령어 없이 변경된 파일들을 시각적으로 확인하고 커밋 메시지를 작성할 수 있습니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>

                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={projectListGif} 
                          alt="프로젝트 목록"
                          initial={false}
                          animate={{ opacity: loadedImages.has(projectListGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(projectListGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>브랜치 히스토리 시각화</h3>
                          <p>복잡한 Git 히스토리를 직관적인 그래프로 표현하여 프로젝트 진행 상황을 한눈에 파악할 수 있습니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                  </DemoContentArea>

                  {/* AI Demo */}
                  <DemoContentArea style={{ display: activeDemo === 'ai' ? 'grid' : 'none' }}>
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={aiCodeReviewGif} 
                          alt="로컬 AI 코드 리뷰"
                          initial={false}
                          animate={{ opacity: loadedImages.has(aiCodeReviewGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(aiCodeReviewGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>로컬 Llama AI 코드 리뷰</h3>
                          <p>비용 효율적인 로컬 Llama 3.2 모델을 활용한 실시간 코드 분석 및 개선사항 제안 시스템입니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                    
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={aiServiceGif} 
                          alt="AI 서비스"
                          initial={false}
                          animate={{ opacity: loadedImages.has(aiServiceGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(aiServiceGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>프라이빗 AI 개발 어시스턴트</h3>
                          <p>개발 과정에서 로컬 AI가 실시간으로 도움을 제공하는 보안이 강화된 통합 서비스입니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                  </DemoContentArea>

                  {/* Collaboration Demo */}
                  <DemoContentArea style={{ display: activeDemo === 'collaboration' ? 'grid' : 'none' }}>
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={teamInviteGif} 
                          alt="팀원 초대"
                          initial={false}
                          animate={{ opacity: loadedImages.has(teamInviteGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(teamInviteGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>협업 환경 구축</h3>
                          <p>복잡한 Git 권한 설정 없이 팀원을 초대하고 역할별 접근 권한을 쉽게 관리할 수 있습니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                    
                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={messageGif} 
                          alt="메시지 시스템"
                          initial={false}
                          animate={{ opacity: loadedImages.has(messageGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(messageGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>Git 작업 중 소통</h3>
                          <p>브랜치 작업이나 머지 충돌 시 즉시 팀원들과 상의할 수 있는 컨텍스트 기반 메시징 시스템입니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>

                    <DemoFeatureCard>
                      <DemoGifContainer>
                        <motion.img 
                          src={repositoryGif} 
                          alt="레포지토리 기능"
                          initial={false}
                          animate={{ opacity: loadedImages.has(repositoryGif) ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          onLoad={() => handleImageLoad(repositoryGif)}
                          loading="eager"
                        />
                        <DemoOverlay>
                          <h3>원격 저장소 동기화</h3>
                          <p>pull, push, fetch 같은 원격 작업을 버튼 클릭만으로 안전하게 수행할 수 있습니다.</p>
                        </DemoOverlay>
                      </DemoGifContainer>
                    </DemoFeatureCard>
                  </DemoContentArea>
                </DemoContent>
              </DemoTabsContainer>
            </DemoSection>
          </ContentArea>
        </MainContent>
      </VSCodeLayout>
    </Container>
  );
});

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: ${mainColor.vscode.background};
  color: ${mainColor.text.primary};
  font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: scroll-position;
  contain: layout style paint;
  
  /* 모든 리스트 스타일과 점들 제거 */
  *, *::before, *::after {
    list-style: none;
    margin: 0;
    padding: 0;
    transform: translateZ(0);
  }
  
  ul, ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const VSCodeLayout = styled.div`
  display: grid;
  grid-template-columns: 48px 280px 1fr;
  min-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
`;

const ActivityBar = styled.div`
  background: ${mainColor.vscode.sidebar};
  border-right: 1px solid ${mainColor.vscode.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
`;

const ActivityItem = styled.div`
  width: 32px;
  height: 32px;
  margin: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.active ? mainColor.primary : mainColor.text.tertiary};
  background: ${props => props.active ? 'rgba(0, 122, 204, 0.1)' : 'transparent'};
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(0, 122, 204, 0.1);
    color: ${mainColor.primary};
  }
`;

const SideBar = styled.div`
  background: ${mainColor.vscode.sidebar};
  border-right: 1px solid ${mainColor.vscode.border};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
  -webkit-overflow-scrolling: touch;
`;

const FileExplorer = styled.div`
  flex: 1;
  padding: 0.5rem;
  margin-top: 1rem;
  
  h3 {
    font-size: 0.75rem;
    font-weight: 600;
    color: ${mainColor.text.tertiary};
    margin: 0 0 1rem 0;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

const ExplorerHeader = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${mainColor.text.tertiary};
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${props => props.active ? mainColor.primary : mainColor.text.secondary};
  background: ${props => props.active ? 'rgba(0, 122, 204, 0.1)' : 'transparent'};
  margin: 0.1rem 0;
  transition: background-color 0.15s ease, color 0.15s ease;
  will-change: background-color, color;
  transform: translateZ(0);

  &:hover {
    background: ${props => props.active ? 'rgba(0, 122, 204, 0.15)' : mainColor.vscode.hover};
    color: ${mainColor.text.primary};
  }

  svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const FeatureDetails = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  color: ${mainColor.text.tertiary};

  li {
    margin: 0.2rem 0;
    padding-left: 0.5rem;
    border-left: 1px solid ${mainColor.vscode.border};
  }
`;

const OutlineSection = styled.div`
  border-top: 1px solid ${mainColor.vscode.border};
  padding: 0.5rem;
  margin-top: 1.5rem;
`;

const OutlineHeader = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${mainColor.text.tertiary};
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
`;

const OutlineItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${props => props.active ? mainColor.primary : mainColor.text.secondary};
  background: ${props => props.active ? 'rgba(0, 122, 204, 0.1)' : 'transparent'};
  margin: 0.1rem 0;
  transition: background-color 0.15s ease, color 0.15s ease;
  will-change: background-color, color;
  transform: translateZ(0);

  &:hover {
    background: ${props => props.active ? 'rgba(0, 122, 204, 0.15)' : mainColor.vscode.hover};
    color: ${mainColor.text.primary};
  }

  svg {
    margin-right: 0.5rem;
    transform: ${props => props.active ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.15s ease;
    will-change: transform;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${mainColor.vscode.background};
  min-height: 100vh;
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
`;

const TabBar = styled.div`
  background: ${mainColor.vscode.inactiveTab};
  border-bottom: 1px solid ${mainColor.vscode.border};
  display: flex;
  min-height: 35px;
`;

const Tab = styled.div`
  background: ${props => props.active ? mainColor.vscode.activeTab : mainColor.vscode.inactiveTab};
  border-right: 1px solid ${mainColor.vscode.border};
  border-top: ${props => props.active ? `2px solid ${mainColor.primary}` : '2px solid transparent'};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.85rem;
  color: ${props => props.active ? mainColor.text.primary : mainColor.text.tertiary};
  transition: background-color 0.15s ease, color 0.15s ease, border-top-color 0.15s ease;

  &:hover {
    background: ${mainColor.vscode.hover};
    color: ${mainColor.text.primary};
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  max-height: calc(100vh - 35px);
  transform: translateZ(0);
  will-change: scroll-position;
  contain: layout style paint;
  -webkit-overflow-scrolling: touch;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 12px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${mainColor.vscode.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${mainColor.vscode.border};
    border-radius: 6px;
    
    &:hover {
      background: ${mainColor.text.tertiary};
    }
  }
  
  section {
    margin-bottom: 3rem;
    transform: translateZ(0);
    contain: layout style;
    
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0 1.5rem 0;
  color: ${mainColor.text.primary};
  border-bottom: 1px solid ${mainColor.vscode.border};
  padding-bottom: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`;

const OverviewSection = styled.section`
  margin-bottom: 3rem;
`;

const ProjectImageContainer = styled.div`
  margin: 3rem 0 2.5rem 0;
  display: flex;
  justify-content: center;
  transform: translateZ(0);
  will-change: transform;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    border: 1px solid ${mainColor.vscode.border};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transform: translateZ(0);
    will-change: opacity;
    backface-visibility: hidden;
  }
`;

const ProjectDescription = styled.div`
  margin: 2rem 0;
  line-height: 1.8;
`;

const DescriptionItem = styled.p`
  margin: 1.5rem 0;
  color: ${mainColor.text.secondary};
  font-size: 1rem;

  strong {
    color: ${mainColor.text.accent};
    font-weight: 600;
  }

  ul {
    margin: 0.5rem 0 0 1.5rem;
    
    li {
      margin: 0.5rem 0;
      color: ${mainColor.text.tertiary};
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const ActionButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: 1px solid ${props => props.primary ? mainColor.primary : mainColor.vscode.border};
  background: ${props => props.primary ? mainColor.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : mainColor.text.primary};
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  transform: translateZ(0);
  will-change: transform, background-color, box-shadow;
  backface-visibility: hidden;

  &:hover {
    background: ${props => props.primary ? '#005a99' : mainColor.vscode.hover};
    transform: translateY(-1px) translateZ(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1rem;
    transform: translateZ(0);
  }
`;

const FeaturesSection = styled.section`
  margin-bottom: 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`;

const FeatureCard = styled.div`
  background: ${mainColor.vscode.sidebar};
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  transform: translateZ(0);
  will-change: transform, box-shadow, border-color;
  backface-visibility: hidden;
  contain: layout style paint;

  &:hover {
    border-color: ${mainColor.primary};
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 4px 12px rgba(0, 122, 204, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${mainColor.text.primary};
  margin-bottom: 0.5rem;
`;

const FeatureDesc = styled.p`
  color: ${mainColor.text.tertiary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const TechSection = styled.section`
  margin-bottom: 3rem;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`;

const TechCategory = styled.div`
  background: ${mainColor.vscode.sidebar};
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 8px;
  padding: 1.5rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
`;

const TechCategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${mainColor.text.accent};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${mainColor.vscode.border};
  padding-bottom: 0.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${mainColor.text.secondary};
  font-size: 0.9rem;

  svg {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  span {
    font-weight: 500;
  }
`;

const ChallengesSection = styled.section`
  margin-bottom: 3rem;
`;

const ChallengeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ChallengeItem = styled.div`
  background: ${mainColor.vscode.sidebar};
  border: 1px solid ${mainColor.vscode.border};
  border-left: 4px solid ${mainColor.text.accent};
  border-radius: 4px;
  padding: 1.5rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
`;

const ChallengeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${mainColor.text.primary};
  margin-bottom: 0.75rem;
`;

const ChallengeDesc = styled.p`
  color: ${mainColor.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;

  strong {
    color: ${mainColor.text.accent};
    font-weight: 600;
  }
`;

const ImplementationSection = styled.section`
  margin-bottom: 3rem;
`;

const ImplementationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ImplementationCategory = styled.div`
  background: ${mainColor.vscode.sidebar};
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 12px;
  padding: 2rem;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  contain: layout style paint;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${mainColor.primary};
    transform: translateY(-3px) translateZ(0);
    box-shadow: 0 8px 25px rgba(0, 122, 204, 0.15);
  }
`;

const ImplementationTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${mainColor.text.primary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${mainColor.vscode.border};
  padding-bottom: 0.75rem;
`;

const ImplementationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImplementationItem = styled.div`
  color: ${mainColor.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  padding: 0.75rem;
  background: rgba(0, 122, 204, 0.05);
  border-radius: 6px;
  border-left: 3px solid ${mainColor.primary};

  strong {
    color: ${mainColor.text.accent};
    font-weight: 600;
  }
`;

const DemoSection = styled.section`
  margin-bottom: 3rem;
`;

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const DemoCategory = styled.div`
  background: ${mainColor.vscode.sidebar};
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 8px;
  padding: 1.5rem;
`;

const DemoCategoryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${mainColor.text.accent};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${mainColor.vscode.border};
  padding-bottom: 0.5rem;
`;

const DemoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DemoItem = styled.div`
  color: ${mainColor.text.secondary};
  font-size: 0.9rem;
  line-height: 1.5;

  strong {
    color: ${mainColor.text.primary};
    font-weight: 600;
  }
`;

const DemoLink = styled.a`
  color: ${mainColor.primary};
  text-decoration: none;
  margin-left: 0.5rem;
  
  &:hover {
    text-decoration: underline;
    color: #4EC9B0;
  }
`;

// 새로운 Demo 스타일 컴포넌트들
const DemoTabsContainer = styled.div`
  margin: 2rem 0;
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 12px;
  overflow: hidden;
  background: ${mainColor.vscode.sidebar};
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`;

const DemoTabs = styled.div`
  display: flex;
  background: ${mainColor.vscode.inactiveTab};
  border-bottom: 1px solid ${mainColor.vscode.border};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${mainColor.vscode.background};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${mainColor.vscode.border};
    border-radius: 2px;
  }
`;

const DemoTab = styled.button`
  background: ${props => props.active ? mainColor.vscode.activeTab : 'transparent'};
  border: none;
  border-bottom: ${props => props.active ? `3px solid ${mainColor.primary}` : '3px solid transparent'};
  color: ${props => props.active ? mainColor.text.primary : mainColor.text.tertiary};
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  min-width: fit-content;
  will-change: background-color, color, border-bottom-color;
  transform: translateZ(0);

  &:hover {
    background: ${props => props.active ? mainColor.vscode.activeTab : mainColor.vscode.hover};
    color: ${mainColor.text.primary};
  }

  svg {
    color: ${props => props.active ? mainColor.primary : mainColor.text.tertiary};
    transition: color 0.3s ease;
    will-change: color;
  }
`;

const DemoContent = styled.div`
  padding: 2rem;
  min-height: 600px;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
`;

const DemoContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  transform: translateZ(0);
  will-change: contents;
  contain: layout style paint;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DemoFeatureCard = styled(motion.div)`
  background: ${mainColor.vscode.background};
  border: 1px solid ${mainColor.vscode.border};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  will-change: transform, box-shadow, border-color;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 10px 25px rgba(0, 122, 204, 0.15);
    border-color: ${mainColor.primary};
  }
`;

const DemoGifContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
    will-change: transform;
    transform: translateZ(0);
  }
  
  &:hover {
    img {
      transform: scale(1.02) translateZ(0);
    }
    
    > div {
      opacity: 1;
      transform: translateY(0) translateZ(0);
    }
  }
`;

const DemoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  padding: 2rem;
  transform: translateY(20px) translateZ(0);
  opacity: 0;
  transition: all 0.3s ease;
  will-change: transform, opacity;
  backface-visibility: hidden;
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${mainColor.text.accent};
    transform: translateZ(0);
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    transform: translateZ(0);
  }
`;

DevHubDetail.displayName = 'DevHubDetail';

export default DevHubDetail;