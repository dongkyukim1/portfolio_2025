import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCog, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';

const QuickNavContainer = styled(motion.div)`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  padding: 1.25rem 0.75rem;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const NavItem = styled(motion.button)`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${colors.primary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);

    &::before {
      left: 0;
    }

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: scale(1.08);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);

    &::after {
      width: 100%;
      height: 100%;
    }
  }
`;

const NavTooltip = styled(motion.div)`
  position: absolute;
  left: 75px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: rgba(0, 0, 0, 0.85);
  }
`;

const ScrollToTopButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  margin-top: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 10px 35px rgba(102, 126, 234, 0.5);

    &::before {
      left: 100%;
    }
  }
`;

const QuickNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'skills', icon: <FaCog />, label: 'Skills' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'projects', icon: <FaProjectDiagram />, label: 'Projects' },
    { id: 'education', icon: <FaGraduationCap />, label: 'Education' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500);

      // 현재 보이는 섹션 감지
      const sections = navItems.map(item => item.id);
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <QuickNavContainer
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {navItems.map((item, index) => (
        <div key={item.id} style={{ position: 'relative' }}>
          <NavItem
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5 + index * 0.08,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {item.icon}
          </NavItem>

          <AnimatePresence>
            {hoveredItem === item.id && (
              <NavTooltip
                initial={{ opacity: 0, x: -15, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -15, scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {item.label}
              </NavTooltip>
            )}
          </AnimatePresence>
        </div>
      ))}

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronUp />
          </ScrollToTopButton>
        )}
      </AnimatePresence>
    </QuickNavContainer>
  );
};

export default QuickNav;