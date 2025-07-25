import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { colors, gradients } from '../../styles/GlobalStyles';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.85)' 
    : 'rgba(255, 255, 255, 0.05)'
  };
  backdrop-filter: blur(${props => props.scrolled ? '20px' : '10px'});
  border-bottom: ${props => props.scrolled 
    ? '1px solid rgba(255, 255, 255, 0.2)' 
    : '1px solid rgba(255, 255, 255, 0.1)'
  };
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.scrolled 
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
      : 'transparent'
    };
    border-radius: 0 0 0 0;
    z-index: -1;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-family: 'Pretendard-ExtraBold';
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 3rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.scrolled ? colors.dark : 'rgba(51, 51, 51, 0.9)'};
  font-family: 'Pretendard-Medium';
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  letter-spacing: -0.01em;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 25px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }

  &:hover {
    color: ${colors.primary};
    transform: translateY(-2px);
    
    &::before {
      width: 100%;
      height: 100%;
    }
    
    &::after {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    color: ${colors.dark};
  }
`;

const MenuToggle = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.75rem;
  font-size: 1.2rem;
  color: ${colors.dark};
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ContactButton = styled(motion.a)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.75rem;
  border-radius: 30px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.dark};
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`;

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
          }}
        >
          DONGKYU
        </Logo>

        <NavList isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavItem
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <NavLink
                href={item.href}
                scrolled={scrolled}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.href.slice(1))?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                  closeMenu();
                }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <SocialLinks>
            <SocialLink
              href="https://github.com/dongkyukim1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/dongkyukim1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>

          <ContactButton
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            연락하기
          </ContactButton>
        </div>

        <MenuToggle 
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;