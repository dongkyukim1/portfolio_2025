import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaImages, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { breakpoints } from '../../styles/GlobalStyles';


// 갤러리 이미지 import
import devhubImg from '../../assets/gallery/devhub.gif';
import dogfootImg from '../../assets/gallery/dogfoot.png';
import littlebankImg from '../../assets/gallery/littlebank.png';
import littlebankAdminImg from '../../assets/gallery/littlebank_admin.png';
import pmkAdminImg from '../../assets/gallery/pmk_admin.png';
import tripplaiImg from '../../assets/gallery/trippleai.png';

// 사이드바 컨테이너
const SidebarContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999999;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${breakpoints.laptop}) {
    right: 25px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    right: 20px;
    gap: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    right: 15px;
    gap: 6px;
    top: auto;
    bottom: 30px;
    transform: none;
  }

  @media (max-width: 480px) {
    right: 12px;
    bottom: 25px;
  }
`;

// 토글 버튼 그룹
const ToggleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 토글 버튼
const ToggleButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  &.active {
    background: rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

// 패널 베이스 
const PanelBase = styled(motion.div)`
  position: fixed !important;
  top: 0px !important;
  right: 20px !important;
  transform: translateY(0) !important;
  width: 500px !important;
  max-width: calc(100vw - 40px) !important;
  max-height: 70vh !important;
  background: rgba(0, 0, 0, 0.98) !important;
  backdrop-filter: blur(20px) !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px !important;
  padding: 1.5rem !important;
  overflow: hidden !important;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  z-index: 1000000 !important;
  cursor: auto !important;
  display: flex !important;
  flex-direction: column !important;
  height: 70vh !important;

  /* 모든 화면 크기에서 커서 강제 설정 */
  * {
    cursor: auto !important;
  }
  
  button, a, [role="button"], .clickable {
    cursor: pointer !important;
  }

  /* 스크롤 영역 확실히 설정 */
  scroll-behavior: smooth !important;

  @media (max-width: ${breakpoints.laptop}) {
    width: 450px !important;
    padding: 1.8rem !important;
    top: 0px !important;
    max-height: 70vh !important;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 400px !important;
    padding: 1.5rem !important;
    max-height: 75vh !important;
    top: 0px !important;
  }

  @media (max-width: ${breakpoints.mobile}) {
    position: fixed !important;
    top: 0px !important;
    left: 50% !important;
    right: auto !important;
    transform: translate(-50%, 0) !important;
    width: calc(100vw - 30px) !important;
    max-width: none !important;
    max-height: 80vh !important;
    padding: 1.2rem !important;
    border-radius: 16px !important;
  }

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Firefox 스크롤바 */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
`;

// 패널 헤더 - 고정되도록
const PanelHeader = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  margin-bottom: 1.5rem !important;
  padding-bottom: 1rem !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
  flex-shrink: 0 !important;

  h3 {
    font-family: 'Pretendard-Bold' !important;
    font-size: 1.4rem !important;
    font-weight: 700 !important;
    color: white !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.8rem !important;
    margin: 0 !important;
  }
`;

// 닫기 버튼 - 더 눈에 띄게
const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: rgba(255, 0, 0, 0.4);
    color: white;
    transform: scale(1.1);
  }
`;

// 스크롤 가능한 갤러리 컨테이너
const ScrollableGalleryContainer = styled.div`
  flex: 1 !important;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  overflow: auto !important;
  padding-right: 10px !important;
  margin-right: -10px !important;
  height: 100% !important;
  max-height: 350px !important;
  min-height: 350px !important;
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 4px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3) !important;
    border-radius: 4px !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5) !important;
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.7) !important;
  }

  /* Firefox 스크롤바 */
  scrollbar-width: thin !important;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05) !important;
`;

// 갤러리 그리드 - 스크롤 가능한 2열 레이아웃
const GalleryGrid = styled.div`
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 1rem !important;
  width: 100% !important;
  padding-bottom: 4rem !important;
  min-height: auto !important;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.8rem !important;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr !important;
    gap: 0.8rem !important;
  }
`;

// 갤러리 아이템 - 강제 커서 및 호버 효과  
const GalleryItem = styled(motion.div)`
  aspect-ratio: 16/10 !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  cursor: pointer !important;
  position: relative !important;
  background: rgba(255, 255, 255, 0.05) !important;
  min-height: 200px !important;
  height: auto !important;
  transition: all 0.3s ease !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
  }

  .overlay {
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    padding: 1rem !important;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent) !important;
    color: white !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    opacity: 0 !important;
    transform: translateY(10px) !important;
    transition: all 0.3s ease !important;
    cursor: pointer !important;
  }

  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    
    img {
      transform: scale(1.05) !important;
      filter: brightness(1.1) !important;
    }

    .overlay {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }
`;

// 상태 정보 섹션
const StatusSection = styled.div`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

// 상태 아이템
const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 0.6rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
  }

  .value {
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  &.highlight {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.3);

    .value {
      color: #667eea;
    }

    &:hover {
      background: rgba(102, 126, 234, 0.2);
      border-color: rgba(102, 126, 234, 0.5);
    }
  }
`;

// 스킬 태그 컨테이너
const SkillTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 0.3rem;
`;

// 스킬 태그
const SkillTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.6rem;
  background: rgba(102, 126, 234, 0.2);
  color: #a5b4fc;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.2;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.3);
    color: #c7d2fe;
    transform: translateY(-1px);
  }
`;

// 오버레이 배경 - 더 강력한 배경
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999999;
  backdrop-filter: blur(5px);
  cursor: pointer;
`;

const RightSidebar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const navigate = useNavigate();

  const togglePanel = (panel) => {
  setActivePanel(activePanel === panel ? null : panel);
  };

  const handleGalleryClick = (title) => {
    if (title === 'LittleBank App') {
      navigate('/project/littlebank');
    } else if (title === 'DevHub Platform') {
      navigate('/project/devhub');
    } else if (title === 'Tripple AI') {
      navigate('/project/tripplai');
    } else if (title === 'PMK Admin' || title === 'LittleBank Admin') {
      navigate('/project/dashboard');
    } else if (title === 'Dogfoot Project') {
      navigate('/project/dogfoot');
    }
  };

  const galleryImages = [
    { src: littlebankImg, title: 'LittleBank App', clickable: true },
    { src: devhubImg, title: 'DevHub Platform', clickable: true },
    { src: tripplaiImg, title: 'Tripple AI', clickable: true },
    { src: pmkAdminImg, title: 'PMK Admin', clickable: true },
    { src: littlebankAdminImg, title: 'LittleBank Admin', clickable: true },
    { src: dogfootImg, title: 'Dogfoot Project', clickable: true }
  ];

  const statusInfo = {
    experience: '1+ Years',
    projects: '3 Major Projects',
    skills: ['React', 'Next.js', 'Flutter', 'Java', 'Spring Boot', 'Python', 'Flask', 'JavaScript', 'TypeScript', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Docker'],
    availability: 'Currently Employed',
    location: 'Seoul, Korea'
  };


  
  return (
    <SidebarContainer>
      <AnimatePresence mode="wait">
        {activePanel === 'gallery' && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
            />
            <PanelBase
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
            <PanelHeader>
              <h3>
                <FaImages />
                Project Gallery
              </h3>
              <CloseButton onClick={() => setActivePanel(null)}>
                <FaTimes />
              </CloseButton>
            </PanelHeader>

            <ScrollableGalleryContainer>
              <GalleryGrid>
                {galleryImages.map((image, index) => (
                  <GalleryItem
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => image.clickable && handleGalleryClick(image.title)}
                    style={{ cursor: image.clickable ? 'pointer' : 'default' }}
                  >
                    <img src={image.src} alt={image.title} />
                    <div className="overlay">
                      {image.title}
                      {image.clickable && <span style={{ color: '#667eea', fontSize: '0.8rem', display: 'block' }}>클릭하여 상세보기</span>}
                    </div>
                  </GalleryItem>
                ))}
              </GalleryGrid>
            </ScrollableGalleryContainer>
          </PanelBase>
          </>
        )}

        {activePanel === 'status' && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
            />
            <PanelBase
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
            <PanelHeader>
              <h3>
                <FaInfoCircle />
                Developer Status
              </h3>
              <CloseButton onClick={() => setActivePanel(null)}>
                <FaTimes />
              </CloseButton>
            </PanelHeader>

            <StatusSection>
              <StatusItem className="highlight">
                <span className="label">Current Status</span>
                <span className="value">{statusInfo.availability}</span>
              </StatusItem>

              <StatusItem>
                <span className="label">Experience</span>
                <span className="value">{statusInfo.experience}</span>
              </StatusItem>

              <StatusItem>
                <span className="label">Projects Completed</span>
                <span className="value">{statusInfo.projects}</span>
              </StatusItem>

              <StatusItem>
                <span className="label">Location</span>
                <span className="value">{statusInfo.location}</span>
              </StatusItem>
            </StatusSection>

            <StatusSection>
              <h4>Skills</h4>
              <SkillTagContainer>
                {statusInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTagContainer>
            </StatusSection>
          </PanelBase>
          </>
        )}
      </AnimatePresence>

      <ToggleGroup>
        <ToggleButton
          className={activePanel === 'gallery' ? 'active' : ''}
          onClick={() => togglePanel('gallery')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaImages />
        </ToggleButton>

        <ToggleButton
          className={activePanel === 'status' ? 'active' : ''}
          onClick={() => togglePanel('status')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInfoCircle />
        </ToggleButton>
      </ToggleGroup>
    </SidebarContainer>
  );
};

export default RightSidebar;