import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCog, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';

const QuickNavContainer = styled(motion.div)`
  position: fixed;
  left: 2rem;
  top: 35%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 1rem 0.5rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const NavItem = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${colors.primary};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${gradients.primary};
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.3);

    &::before {
      left: 0;
    }
  }

  &.active {
    background: ${gradients.primary};
    color: white;
    transform: scale(1.1);
  }
`;

const NavTooltip = styled(motion.div)`
  position: absolute;
  left: 80px;
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.dark};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid transparent;
    border-right-color: ${colors.dark};
  }
`;

const ScrollToTopButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${gradients.primary};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <QuickNavContainer
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {navItems.map((item, index) => (
        <div key={item.id} style={{ position: 'relative' }}>
          <NavItem
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.icon}
          </NavItem>

          <AnimatePresence>
            {hoveredItem === item.id && (
              <NavTooltip
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
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
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
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