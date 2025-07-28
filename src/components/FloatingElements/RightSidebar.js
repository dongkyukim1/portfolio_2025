import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaImages, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { breakpoints } from '../../styles/GlobalStyles';
import portfolioData from '../../data/portfolio';

// 갤러리 이미지 import
import devhubImg from '../../assets/gallery/devhub.gif';
import dogfootImg from '../../assets/gallery/dogfoot.png';
import littlebankImg from '../../assets/gallery/littlebank.png';
import littlebankAdminImg from '../../assets/gallery/littlebank_admin.png';
import pmkAdminImg from '../../assets/gallery/pmk_admin.png';
import trippleaiImg from '../../assets/gallery/trippleai.png';

// 사이드바 컨테이너
const SidebarContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
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
`;

// 패널 베이스
const PanelBase = styled(motion.div)`
  position: fixed;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  max-height: 80vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

// 패널 헤더
const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

// 닫기 버튼
const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: rotate(90deg);
  }
`;

// 갤러리 그리드
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

// 갤러리 아이템
const GalleryItem = styled(motion.div)`
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// 상태 정보 섹션
const StatusSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
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
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  .value {
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
  }

  &.highlight {
    background: rgba(102, 126, 234, 0.1);
    border: 1px solid rgba(102, 126, 234, 0.3);

    .value {
      color: #667eea;
    }
  }
`;

// 스킬 태그
const SkillTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  color: #a5b4fc;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 0.2rem;
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
    }
    // 다른 프로젝트들도 나중에 추가 가능
  };

  const galleryImages = [
    { src: littlebankImg, title: 'LittleBank App', clickable: true },
    { src: devhubImg, title: 'DevHub Platform', clickable: false },
    { src: trippleaiImg, title: 'Tripple AI', clickable: false },
    { src: pmkAdminImg, title: 'PMK Admin', clickable: false },
    { src: littlebankAdminImg, title: 'LittleBank Admin', clickable: false },
    { src: dogfootImg, title: 'Dogfoot Project', clickable: false }
  ];

  const statusInfo = {
    experience: '3+ Years',
    projects: '10+ Completed',
    skills: ['React', 'Flutter', 'Node.js', 'TypeScript'],
    availability: 'Open to Work',
    location: 'Seoul, Korea'
  };

  return (
    <SidebarContainer>
      <AnimatePresence mode="wait">
        {activePanel === 'gallery' && (
          <PanelBase
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
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
          </PanelBase>
        )}

        {activePanel === 'status' && (
          <PanelBase
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
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
              <h4>Core Skills</h4>
              <div>
                {statusInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </StatusSection>
          </PanelBase>
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