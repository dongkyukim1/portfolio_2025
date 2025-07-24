import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }

  code {
    font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-feature-settings: 'liga', 'calt';
  }

  // 개선된 폰트 스타일링
  .font-thin { font-family: 'Inter', 'Noto Sans KR'; font-weight: 100; }
  .font-extralight { font-family: 'Inter', 'Noto Sans KR'; font-weight: 200; }
  .font-light { font-family: 'Inter', 'Noto Sans KR'; font-weight: 300; }
  .font-regular { font-family: 'Inter', 'Noto Sans KR'; font-weight: 400; }
  .font-medium { font-family: 'Inter', 'Noto Sans KR'; font-weight: 500; }
  .font-semibold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 600; }
  .font-bold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 700; }
  .font-extrabold { font-family: 'Inter', 'Noto Sans KR'; font-weight: 800; }
  .font-black { font-family: 'Inter', 'Noto Sans KR'; font-weight: 900; }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 14px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

// 색상 팔레트
export const colors = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f093fb',
  dark: '#2c3e50',
  light: '#ecf0f1',
  success: '#2ecc71',
  warning: '#f39c12',
  error: '#e74c3c',
  text: '#333333',
  textLight: '#666666',
  background: '#ffffff',
  backgroundLight: '#f8f9fa'
};

// 그라디언트
export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  success: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
  dark: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
};

// 브레이크포인트
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};