import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaCode, FaUsers, 
  FaMobile, FaGamepad, FaChartLine,
  FaCogs, FaExternalLinkAlt, FaFigma,
  FaPlayCircle, FaFileAlt, FaBook, FaDatabase,
  FaAws, FaDocker, FaGithub, FaPhone, FaComment, FaEnvelope,
  FaDownload, FaHome, FaLayerGroup, FaPalette, FaDesktop
} from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { 
  SiFlutter, SiSpring, SiFirebase, 
  SiMysql, SiRedis, SiSwagger,
  SiDart, SiOpenjdk, SiGithubactions
} from 'react-icons/si';
import { colors } from '../../styles/GlobalStyles';

// 로고 이미지 import
import littlebankLogo from '../../assets/projects/logo/littlebanklogo.png';

// 앱 스크린샷 import
import homeScreen from '../../assets/projects/littlebank/홈.png';
import chatScreen from '../../assets/projects/littlebank/채팅.png';
import challengeScreen from '../../assets/projects/littlebank/챌린지목록.png';
import competitionScreen from '../../assets/projects/littlebank/경쟁상세.png';
import rankingScreen from '../../assets/projects/littlebank/랭킹상세.png';
import feedScreen from '../../assets/projects/littlebank/피드목록.png';
import paymentScreen from '../../assets/projects/littlebank/결제.png';
import pinScreen from '../../assets/projects/littlebank/핀번호.png';
import subscriptionScreen from '../../assets/projects/littlebank/구독관리.png';
import benefitScreen from '../../assets/projects/littlebank/혜택.png';
import termsScreen from '../../assets/projects/littlebank/이용약관동의.png';

// 문서 이미지 import
import figmaDoc from '../../assets/projects/littlebank/피그마.png';
import notionDoc from '../../assets/projects/littlebank/노션.png';
import playconsoleDoc from '../../assets/projects/littlebank/플레이콘솔.png';
import swaggerDoc from '../../assets/projects/littlebank/swagger.png';

// 메인 컬러 정의
const mainColor = {
  primary: 'rgb(58, 136, 244)',
  primaryLight: 'rgba(58, 136, 244, 0.1)',
  primaryBorder: 'rgba(58, 136, 244, 0.3)',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.85)',
    tertiary: 'rgba(255, 255, 255, 0.7)'
  }
};

// 기술 스택 브랜드 컬러
const techColors = {
  flutter: '#02569B',
  dart: '#0175C2',    // Dart 공식 컬러
  spring: '#6DB33F',
  java: '#E32934',    // OpenJDK 로고 컬러
  firebase: '#FFCA28',
  mysql: '#4479A1',
  redis: '#DC382D',
  aws: '#FF9900',
  docker: '#2496ED',
  github: '#181717',
  githubActions: '#2088FF',  // GitHub Actions 공식 컬러
  swagger: '#85EA2D'
};

// Styled Components
const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const SideNavigation = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(58, 136, 244, 0.1);

  @media (max-width: 1400px) {
    right: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['active', 'label'].includes(prop)
})`
  background: ${props => props.active ? 'rgb(58, 136, 244)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 1px solid ${props => props.active ? 'rgb(58, 136, 244)' : '#ddd'};
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
    background: ${props => props.active ? 'rgb(58, 136, 244)' : 'rgba(58, 136, 244, 0.1)'};
    border-color: rgb(58, 136, 244);
    color: ${props => props.active ? 'white' : 'rgb(58, 136, 244)'};
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

const BackToPortfolio = styled(NavButton)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  padding: 0.7rem 1.2rem;
  font-size: 0.9rem;
  display: flex;
  gap: 0.5rem;
  background: white;
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

const ProjectHeader = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeaderContent = styled.div`
  h1 {
    font-family: 'Pretendard-Bold';
    font-size: 2.5rem;
    color: rgb(58, 136, 244);
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Medium';
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const RoleTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(58, 136, 244, 0.1);
  color: rgb(58, 136, 244);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  svg {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: rgb(58, 136, 244);
  font-family: 'Pretendard-Bold';
  font-size: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: -0.3px;

  svg {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin: 5rem 0;
  scroll-margin-top: 2rem;
  
  &:first-child {
    margin-top: 3rem;
  }

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.4);
    transform: translateY(-5px);
  }
  
  .feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .icon {
      width: 40px;
      height: 40px;
      background: rgba(102, 126, 234, 0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    
    h4 {
      font-family: 'Pretendard-SemiBold';
      color: ${colors.text.primary};
      font-size: 1.1rem;
    }
  }
  
  p {
    color: ${colors.text.secondary};
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TechCategory = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${mainColor.primaryBorder};
  border-radius: 16px;
  padding: 1.5rem;
  flex: 1;
  min-width: 250px;
  
  h4 {
    font-family: 'Pretendard-SemiBold';
    color: ${mainColor.text.primary};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
      color: ${props => props.categoryColor || mainColor.primary};
    }
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

const TechTag = styled.div`
  background: ${props => props.bgColor ? `${props.bgColor}15` : mainColor.primaryLight};
  color: ${mainColor.text.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid ${props => props.bgColor ? `${props.bgColor}30` : mainColor.primaryBorder};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.1rem;
    color: ${props => props.bgColor || mainColor.primary};
  }

  &:hover {
    background: ${props => props.bgColor ? `${props.bgColor}30` : mainColor.primaryBorder};
    transform: translateY(-2px);
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  
  h3 {
    font-size: 1.8rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 1rem;
  }
  
  p {
    color: ${colors.text.secondary};
    margin-bottom: 2rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 3rem;
  }
`;

const AppPreviewSection = styled.div`
  margin: 2rem 0;

  h3 {
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    color: rgb(58, 136, 244);
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const PhoneMockupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const PhoneMockup = styled.div`
  width: 280px;
  height: 570px;
  background: white;
  border-radius: 40px;
  padding: 15px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border: 8px solid #1a1a1a;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 20px;
    background: #1a1a1a;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
`;

const ScreenTitle = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  h4 {
    font-family: 'Pretendard-Bold';
    font-size: 1.2rem;
    color: rgb(58, 136, 244);
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Pretendard-Medium';
    font-size: 1rem;
    color: white;
    opacity: 0.8;
  }
`;

const DocumentationSection = styled.div`
  margin: 5rem 0;
  
  h3 {
    font-size: 2rem;
    font-family: 'Pretendard-Bold';
    margin-bottom: 2rem;
    text-align: center;
  }

  .scroll-hint {
    text-align: center;
    color: ${colors.text.secondary};
    font-size: 0.9rem;
    margin-top: 1rem;
    opacity: 0.7;
    display: none;

    @media (max-width: 1200px) {
      display: block;
    }
  }
`;

const DocGrid = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 0.5rem;

  @media (max-width: 1200px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 1rem 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    &::before,
    &::after {
      content: '';
      padding: 0.1px;
    }
  }
`;

const DocCard = styled(motion.div)`
  flex: 0 0 260px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${mainColor.primaryBorder};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .doc-image {
    width: 100%;
    height: 160px;
    overflow: hidden;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .doc-image img {
    transform: scale(1.05);
  }
  
  .doc-content {
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    h4 {
      font-family: 'Pretendard-SemiBold';
      color: ${mainColor.text.primary};
      margin-bottom: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      
      svg {
        color: ${mainColor.primary};
      }
    }
    
    p {
      color: ${mainColor.text.secondary};
      font-size: 0.9rem;
      line-height: 1.7;
      margin-bottom: 1rem;
      flex: 1;
    }

    .doc-link {
      color: ${mainColor.primary};
      &:hover {
        color: ${mainColor.text.primary};
      }
    }
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
  background: rgb(58, 136, 244);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(58, 136, 244, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(58, 136, 244, 0.3);
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
  background: rgb(58, 136, 244);
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
  background: white;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 8px;

  &:hover {
    background: rgba(58, 136, 244, 0.1);
    color: rgb(58, 136, 244);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ProjectInfoSection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ReportSection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ReportCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const AnalyticsSection = styled.div`
  margin: 5rem 0;
  padding: 2.5rem;
  background: rgb(58, 136, 244);
  border-radius: 16px;
  color: white;

  h3 {
    color: white;
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Pretendard-Medium';
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const ReportContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AnalyticsCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(58, 136, 244, 0.03);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(58, 136, 244, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(58, 136, 244, 0.05);
    border-color: rgba(58, 136, 244, 0.2);
  }

  .icon {
    font-size: 2.5rem;
    color: rgb(58, 136, 244);
  }

  .content {
    flex: 1;

    h4 {
      color: #2c3e50;
      font-family: 'Pretendard-Bold';
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      font-family: 'Pretendard-Medium';
      font-size: 0.95rem;
      margin: 0;
    }
  }

  .download {
    color: rgb(58, 136, 244);
    font-size: 1.2rem;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Pretendard-Medium';
  border: 1px solid rgba(102, 126, 234, 0.3);
`;

const ProjectDescription = styled.div`
  margin: 5rem 0;
  padding: 2.5rem;
  background: rgb(58, 136, 244);
  border-radius: 16px;

  h3 {
    color: white;
    font-family: 'Pretendard-Bold';
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Pretendard-Medium';
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
`;

const HighlightItem = styled.li`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    color: rgb(58, 136, 244);
    font-family: 'Pretendard-Bold';
    font-size: 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.4rem;
    }
  }

  p {
    color: #2c3e50;
    font-family: 'Pretendard-Medium';
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const ProjectStructure = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;

const StructureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h3 {
    color: rgb(58, 136, 244);
    font-family: 'Pretendard-Bold';
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const StructureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StructureItem = styled.div`
  h4 {
    color: #2c3e50;
    font-family: 'Pretendard-Bold';
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-family: 'Pretendard-Medium';
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const StructureSummary = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
  color: rgb(58, 136, 244);
  font-family: 'Pretendard-Bold';
  font-size: 1.1rem;
  text-align: center;
`;

const LittleBankDetail = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    homeScreen,
    chatScreen,
    challengeScreen,
    competitionScreen,
    rankingScreen,
    feedScreen,
    paymentScreen,
    pinScreen,
    subscriptionScreen,
    benefitScreen,
    termsScreen
  ];

  const screenNames = [
    '홈',
    '채팅',
    '챌린지',
    '1:1 경쟁',
    '랭킹',
    '피드',
    '결제',
    '보안',
    '구독',
    '혜택',
    '약관'
  ];

  const screenDescriptions = [
    '한눈에 보는 대시보드 스크린',
    '실시간 1:1 채팅, 그룹채팅 기능',
    '전체 유저와 같이 동기부여 챌린지',
    '1:1 경쟁을 통한 동기부여 시스템',
    '전체 유저 랭킹 시스템',
    '학습인증, 일상 글 등 소통창고',
    '토스페이, 카카오페이 등 결제가능',
    '계좌 2차 핀번호 보안 시스템',
    '구독권 관리 및 결제 내역',
    '2주무료 구독권등 마케팅 혜택',
    '서비스 이용약관 및 동의'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screens.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'overview', offset: document.getElementById('overview')?.offsetTop || 0 },
        { id: 'analytics', offset: document.getElementById('analytics')?.offsetTop || 0 },
        { id: 'preview', offset: document.getElementById('preview')?.offsetTop || 0 },
        { id: 'structure', offset: document.getElementById('structure')?.offsetTop || 0 },
        { id: 'tech', offset: document.getElementById('tech')?.offsetTop || 0 },
        { id: 'docs', offset: document.getElementById('docs')?.offsetTop || 0 }
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
      <DetailContainer>
        <BackToPortfolio onClick={() => navigate('/')}>
          <FaArrowLeft /> 포트폴리오로 돌아가기
        </BackToPortfolio>

        <SideNavigation>
          <NavButton 
            active={activeSection === 'overview'} 
            onClick={() => scrollToSection('overview')}
            label="개요"
          >
            <FaHome />
          </NavButton>
          <NavButton 
            active={activeSection === 'analytics'} 
            onClick={() => scrollToSection('analytics')}
            label="대표 서비스"
          >
            <FaChartLine />
          </NavButton>
          <NavButton 
            active={activeSection === 'preview'} 
            onClick={() => scrollToSection('preview')}
            label="구현 화면"
          >
            <FaMobile />
          </NavButton>
          <NavButton 
            active={activeSection === 'structure'} 
            onClick={() => scrollToSection('structure')}
            label="프로젝트 구조"
          >
            <FaLayerGroup />
          </NavButton>
          <NavButton 
            active={activeSection === 'tech'} 
            onClick={() => scrollToSection('tech')}
            label="기술 스택"
          >
            <FaCode />
          </NavButton>
          <NavButton 
            active={activeSection === 'docs'} 
            onClick={() => scrollToSection('docs')}
            label="문서화"
          >
            <FaBook />
          </NavButton>
        </SideNavigation>

        <Section id="overview">
          <ProjectHeader>
            <img src={littlebankLogo} alt="리틀뱅크 로고" />
            <HeaderContent>
              <h1>리틀뱅크</h1>
              <p>어린이들을 위한 동기부여 앱</p>
              <div>
                <RoleTag>
                  <FaCode /> Frontend Developer
                </RoleTag>
                <RoleTag>
                  <FaUsers /> Project Manager
                </RoleTag>
              </div>
              <TagContainer>
                <Tag>Flutter</Tag>
                <Tag>Spring Boot</Tag>
                <Tag>Firebase</Tag>
                <Tag>AWS</Tag>
              </TagContainer>
            </HeaderContent>
          </ProjectHeader>

          <ProjectDescription>
            <h3>프로젝트 역량</h3>
            <p>
              리틀뱅크에서 프론트엔드 개발자이자 프로젝트 매니저를 맡아 프로젝트를 성공적으로 이끌었습니다.
              3월부터 7월까지 PM으로서 일정 관리와 회의를 주도했으며, 유일한 프론트엔드 개발자로서 
              Figma를 활용한 디자인 커뮤니케이션과 Flutter 기반의 모든 화면 구현을 완벽하게 수행했습니다.
            </p>
            <HighlightList>
              <HighlightItem>
                <h4><FaUsers /> 프로젝트 매니징</h4>
                <p>
                  4인 팀의 PM으로서 5개월간 일정 관리, 주간 회의 진행,
                  백로그 관리 등 체계적인 프로젝트 운영을 담당했습니다.
                </p>
              </HighlightItem>
              <HighlightItem>
                <h4><FaPalette /> UI/UX 디자인</h4>
                <p>
                  Figma를 활용한 프로토타입 제작, 디자인 시스템 구축,
                  사용자 중심의 인터페이스 설계를 주도했습니다.
                </p>
              </HighlightItem>
              <HighlightItem>
                <h4><FaCode /> 프론트엔드 개발</h4>
                <p>
                  Flutter 기반의 모든 화면(150+ 파일) 구현,
                  30개의 서비스 로직(4만+ 라인) 개발을 담당했습니다.
                </p>
              </HighlightItem>
              <HighlightItem>
                <h4><FaChartLine /> 주요 성과</h4>
                <p>
                  금융교육, 미션관리, 가족소통, 소셜피드 등
                  핵심 기능을 단독 프론트엔드 개발자로 완수했습니다.
                </p>
              </HighlightItem>
            </HighlightList>
          </ProjectDescription>
        </Section>

        <Section id="analytics">
          <AnalyticsSection>
            <h3>대표 서비스 - 학습 분석 리포트 서비스</h3>
            <p>
              리틀뱅크는 사용자의 학습 데이터를 분석하여 맞춤형 PDF 리포트를 제공하는 서비스를 개발했습니다.
              학습 성과와 패턴을 시각화하여 효과적인 학습 방향을 제시하며, 지속적인 업데이트를 통해 더욱 상세한 분석 결과를 제공합니다.
            </p>
            <ReportContainer>
              <AnalyticsCard 
                href="/portfolio_2025/src/assets/projects/littlebank/학습성적보고서_2025년07월18일.pdf"
                download
              >
                <div className="icon">
                  <FaFileAlt />
                </div>
                <div className="content">
                  <h4>개인별 학습 분석 리포트 2.0</h4>
                  <p>2025년 07월 18일 기준 / 고도화 버전</p>
                </div>
                <div className="download">
                  <FaDownload />
                </div>
              </AnalyticsCard>
              <AnalyticsCard 
                href="/portfolio_2025/src/assets/projects/littlebank/김동규_학습리포트_2025-06-04.pdf"
                download
              >
                <div className="icon">
                  <FaFileAlt />
                </div>
                <div className="content">
                  <h4>개인별 학습 분석 리포트 1.0</h4>
                  <p>2025년 06월 04일 기준 / 초기 버전</p>
                </div>
                <div className="download">
                  <FaDownload />
                </div>
              </AnalyticsCard>
            </ReportContainer>
          </AnalyticsSection>
        </Section>

        <Section id="preview">
          <AppPreviewSection>
            <h3>구현 화면</h3>
            <PreviewContainer>
              <PhoneMockupWrapper>
                <PhoneMockup>
                  <img 
                    src={screens[currentIndex]} 
                    alt="앱 스크린샷"
                    loading="eager"
                    decoding="sync"
                  />
                </PhoneMockup>
                <ScreenTitle>
                  <h4>{screenNames[currentIndex]}</h4>
                  <p>{screenDescriptions[currentIndex]}</p>
                </ScreenTitle>
              </PhoneMockupWrapper>

              <PhoneMockupWrapper>
                <PhoneMockup>
                  <img 
                    src={screens[(currentIndex + 1) % screens.length]} 
                    alt="앱 스크린샷"
                    loading="eager"
                    decoding="sync"
                  />
                </PhoneMockup>
                <ScreenTitle>
                  <h4>{screenNames[(currentIndex + 1) % screens.length]}</h4>
                  <p>{screenDescriptions[(currentIndex + 1) % screens.length]}</p>
                </ScreenTitle>
              </PhoneMockupWrapper>

              <PhoneMockupWrapper>
                <PhoneMockup>
                  <img 
                    src={screens[(currentIndex + 2) % screens.length]} 
                    alt="앱 스크린샷"
                    loading="eager"
                    decoding="sync"
                  />
                </PhoneMockup>
                <ScreenTitle>
                  <h4>{screenNames[(currentIndex + 2) % screens.length]}</h4>
                  <p>{screenDescriptions[(currentIndex + 2) % screens.length]}</p>
                </ScreenTitle>
              </PhoneMockupWrapper>
            </PreviewContainer>
          </AppPreviewSection>
        </Section>

        <Section id="features">
          <SectionTitle>
            <FaGamepad /> 주요 기능
          </SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <div className="feature-header">
                <div className="icon">🏦</div>
                <h4>가상 은행 시스템</h4>
              </div>
              <p>
                실제 은행과 유사한 인터페이스로 아이들이 친숙하게 목표달성 활동을 체험할 수 있습니다. 
                저축, 송금, 잔액 확인 등의 기능을 제공합니다.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-header">
                <div className="icon">🎯</div>
                <h4>미션 & 챌린지</h4>
              </div>
              <p>
                일일 미션과 주간 챌린지를 통해 아이들이 꾸준히 앱을 사용하고 동기부여를 
                받아 목표를 달성할 수 있도록 합니다.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-header">
                <div className="icon">👨‍👩‍👧‍👦</div>
                <h4>부모-자녀 연동</h4>
              </div>
              <p>
                부모 계정과 자녀 계정을 연동하여 목표 관리, 미션 설정, 
                목표 달성 모니터링이 가능합니다.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-header">
                <div className="icon">🏆</div>
                <h4>보상 시스템</h4>
              </div>
              <p>
                미션 완료와 저축 목표 달성 시 포인트와 뱃지를 획득하여 
                아이들의 성취감을 높입니다.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-header">
                <div className="icon">📊</div>
                <h4>시각화된 통계</h4>
              </div>
              <p>
                저축 현황, 소비 패턴, 목표 달성률을 차트와 그래프로 
                시각화하여 이해하기 쉽게 제공합니다.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-header">
                <div className="icon">📚</div>
                <h4>동기부여 콘텐츠</h4>
              </div>
              <p>
                연령별 맞춤형 동기부여 콘텐츠와 퀴즈를 통해 
                동기부여를 습득할 수 있습니다.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section id="tech">
          <SectionTitle>
            <FaCode /> 기술 스택
          </SectionTitle>
          <TechStackContainer>
            <TechCategory categoryColor={techColors.flutter}>
              <h4>
                <SiFlutter /> Frontend
              </h4>
              <div className="tech-tags">
                <TechTag bgColor={techColors.flutter}><SiFlutter /> Flutter</TechTag>
                <TechTag bgColor={techColors.dart}><SiDart /> Dart</TechTag>
                <TechTag><FaCode /> Provider</TechTag>
                <TechTag><FaCode /> GetX</TechTag>
              </div>
            </TechCategory>
            
            <TechCategory categoryColor={techColors.spring}>
              <h4>
                <SiSpring /> Backend
              </h4>
              <div className="tech-tags">
                <TechTag bgColor={techColors.spring}><SiSpring /> Spring Boot</TechTag>
                <TechTag bgColor={techColors.java}><SiOpenjdk /> Java</TechTag>
                <TechTag bgColor={techColors.swagger}><SiSwagger /> Swagger</TechTag>
                <TechTag><FaCode /> JWT</TechTag>
              </div>
            </TechCategory>
            
            <TechCategory categoryColor={techColors.mysql}>
              <h4>
                <FaDatabase /> Database & Cloud
              </h4>
              <div className="tech-tags">
                <TechTag bgColor={techColors.mysql}><SiMysql /> MySQL</TechTag>
                <TechTag bgColor={techColors.firebase}><SiFirebase /> Firebase</TechTag>
                <TechTag bgColor={techColors.aws}><FaAws /> AWS</TechTag>
                <TechTag bgColor={techColors.redis}><SiRedis /> Redis</TechTag>
              </div>
            </TechCategory>

            <TechCategory categoryColor={techColors.docker}>
              <h4>
                <FaCogs /> DevOps & Tools
              </h4>
              <div className="tech-tags">
                <TechTag bgColor={techColors.docker}><FaDocker /> Docker</TechTag>
                <TechTag bgColor={techColors.github}><FaGithub /> Git</TechTag>
                <TechTag bgColor={techColors.githubActions}><SiGithubactions /> GitHub Actions</TechTag>
              </div>
            </TechCategory>
          </TechStackContainer>
        </Section>

        <Section id="structure">
          <SectionTitle><FaLayerGroup /> 프로젝트 구조</SectionTitle>
          <ProjectStructure>
            <StructureCard>
              <h3><FaDesktop /> 화면단 구성</h3>
              <StructureList>
                <StructureItem>
                  <h4>📱 공통 화면</h4>
                  <p>로그인, 회원가입, 인증, 약관동의 등 기본 화면 구현</p>
                </StructureItem>
                <StructureItem>
                  <h4>👶 아이 전용 화면</h4>
                  <p>홈, 미션, 피드, 채팅, 목표설정, 챌린지, 마이페이지 등</p>
                </StructureItem>
                <StructureItem>
                  <h4>👨‍👩‍👧‍👦 부모 전용 화면</h4>
                  <p>미션관리, 분석, 채팅, 고객센터, 자녀관리 등</p>
                </StructureItem>
                <StructureItem>
                  <h4>🔄 공통 컴포넌트</h4>
                  <p>미션카드, 목표위젯, 프로필, 알림 등 재사용 UI</p>
                </StructureItem>
              </StructureList>
              <StructureSummary>
                총 150+ 화면 파일 구현 (UI/UX 디자인 시스템 기반)
              </StructureSummary>
            </StructureCard>

            <StructureCard>
              <h3><FaCogs /> 서비스 로직</h3>
              <StructureList>
                <StructureItem>
                  <h4>🔐 인증/계정</h4>
                  <p>소셜 로그인, JWT 토큰, 이메일 인증 (5개 서비스)</p>
                </StructureItem>
                <StructureItem>
                  <h4>💳 결제/구독</h4>
                  <p>토스페이 연동, 포인트, 정기결제 (4개 서비스)</p>
                </StructureItem>
                <StructureItem>
                  <h4>📚 교육/미션</h4>
                  <p>미션, 목표, 챌린지, 게임화 요소 (5개 서비스)</p>
                </StructureItem>
                <StructureItem>
                  <h4>👥 소통/관계</h4>
                  <p>실시간 채팅, 피드, 가족관리 (7개 서비스)</p>
                </StructureItem>
                <StructureItem>
                  <h4>📊 분석/리포트</h4>
                  <p>학습 데이터 분석, PDF 리포트 생성 (2개 서비스)</p>
                </StructureItem>
                <StructureItem>
                  <h4>🔔 알림/시스템</h4>
                  <p>푸시알림, 네비게이션, API 통신 (7개 서비스)</p>
                </StructureItem>
              </StructureList>
              <StructureSummary>
                총 30개 서비스 모듈, 40,000+ 라인의 비즈니스 로직 구현
              </StructureSummary>
            </StructureCard>
          </ProjectStructure>
        </Section>

        <Section id="docs">
          <DocumentationSection>
            <h3>프로젝트 문서화</h3>
            <DocGrid>
              <DocCard>
                <div className="doc-image">
                  <img src={swaggerDoc} alt="API 문서" />
                </div>
                <div className="doc-content">
                  <h4>
                    <FaBook /> API 문서
                  </h4>
                  <p>
                    Swagger UI를 활용한 RESTful API 문서화.
                    모든 엔드포인트에 대한 상세한 설명과 테스트 기능을 제공합니다.
                  </p>
                  <a 
                    href="http://3.34.52.239:8080/swagger-ui/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <FaExternalLinkAlt /> API 문서 보기
                  </a>
                </div>
              </DocCard>

              <DocCard>
                <div className="doc-image">
                  <img src={figmaDoc} alt="Figma 디자인" />
                </div>
                <div className="doc-content">
                  <h4>
                    <FaFigma /> Figma 디자인
                  </h4>
                  <p>
                    사용자 경험을 최우선으로 고려한 UI/UX 디자인.
                    모든 화면이 일관된 디자인 시스템을 따르도록 설계했습니다.
                  </p>
                  <a 
                    href="#" 
                    className="doc-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaExternalLinkAlt /> 디자인 시스템
                  </a>
                </div>
              </DocCard>

              <DocCard>
                <div className="doc-image">
                  <img src={notionDoc} alt="Notion 문서" />
                </div>
                <div className="doc-content">
                  <h4>
                    <FaFileAlt /> Notion 문서화
                  </h4>
                  <p>
                    프로젝트의 모든 과정을 체계적으로 문서화.
                    기획부터 개발, 테스트까지 전 과정을 기록했습니다.
                  </p>
                  <a 
                    href="#" 
                    className="doc-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaExternalLinkAlt /> 프로젝트 문서
                  </a>
                </div>
              </DocCard>

              <DocCard>
                <div className="doc-image">
                  <img src={playconsoleDoc} alt="Play Console" />
                </div>
                <div className="doc-content">
                  <h4>
                    <FaPlayCircle /> Play Console
                  </h4>
                  <p>
                    Google Play Store 비공개 테스트 진행 중.
                    사용자 피드백을 반영하여 지속적으로 개선하고 있습니다.
                  </p>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.littlebank.littlebank" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    <FaExternalLinkAlt /> 테스트 참여
                  </a>
                </div>
              </DocCard>
            </DocGrid>
            <p className="scroll-hint">← 좌우로 스크롤하여 더 보기 →</p>
          </DocumentationSection>
        </Section>

        <CTASection>
          <h2>대표 프로젝트 리틀뱅크</h2>
          <p>
            어린이들의 동기부여를 위한 모바일 앱 프로젝트입니다.
            Flutter와 Spring Boot를 활용한 풀스택 개발 경험과 프로젝트 매니징 역량을 보여주는 포트폴리오입니다.
          </p>
          <ButtonGroup>
            <ActionButton 
              href="https://play.google.com/store/apps/details?id=com.littlebank.littlebank" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlayCircle />
              앱 다운로드
            </ActionButton>
            <ActionButton 
              href="https://github.com/dongkyukim1/littlebank" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              개발 소스 코드
            </ActionButton>
          </ButtonGroup>
        </CTASection>
      </DetailContainer>

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
            href="https://open.kakao.com/o/sMlC7lJh" 
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

export default LittleBankDetail; 