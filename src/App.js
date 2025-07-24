import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Styled Components
import { GlobalStyle } from './styles/GlobalStyles';

// Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

// Footer Component
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaReact } from 'react-icons/fa';
import { colors, gradients } from './styles/GlobalStyles';

const Footer = styled.footer`
  background: ${colors.dark};
  color: white;
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterText = styled.p`
  font-family: 'Pretendard-Regular';
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  .icon {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Pretendard-Regular';
`;

function App() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // 페이지 로드 시 스크롤을 맨 위로
    window.scrollTo(0, 0);

    // 부드러운 스크롤 동작을 위한 CSS 추가
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      // 컴포넌트 언마운트 시 AOS 새로고침
      AOS.refresh();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      
      {/* 네비게이션 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 */}
      <main>
        {/* 히어로 섹션 */}
        <section data-aos="fade-up">
          <Hero />
        </section>

        {/* 소개 섹션 */}
        <section data-aos="fade-up" data-aos-delay="100">
          <About />
        </section>

        {/* 기술 스택 섹션 */}
        <section data-aos="fade-up" data-aos-delay="200">
          <Skills />
        </section>

        {/* 경력 섹션 */}
        <section data-aos="fade-up" data-aos-delay="100">
          <Experience />
        </section>

        {/* 프로젝트 섹션 */}
        <section data-aos="fade-up" data-aos-delay="200">
          <Projects />
        </section>

        {/* 학력 및 자격증 섹션 */}
        <section data-aos="fade-up" data-aos-delay="100">
          <Education />
        </section>

        {/* 연락처 섹션 */}
        <section data-aos="fade-up" data-aos-delay="200">
          <Contact />
        </section>
      </main>

      {/* 푸터 */}
      <Footer>
        <FooterContent>
          <FooterText>
            Made with <FaHeart className="icon" /> and <FaCode className="icon" /> using <FaReact className="icon" /> React
          </FooterText>
          
          <FooterLinks>
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#experience">Experience</FooterLink>
            <FooterLink href="#projects">Projects</FooterLink>
            <FooterLink href="#education">Education</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterLinks>

          <Copyright>
            © 2025 김동규 (Dongkyu Kim). All rights reserved.
          </Copyright>
        </FooterContent>
      </Footer>
    </>
  );
}

export default App;