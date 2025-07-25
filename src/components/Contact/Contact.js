import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaBlog, FaExternalLinkAlt,
  FaLinkedin, FaInstagram
} from 'react-icons/fa';
import { colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';
import { ToastContext } from '../../App';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="60" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="90" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
    animation: float 20s linear infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-100px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 400;
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 1.8rem;
    color: #fff;
    min-width: 40px;
  }

  .content {
    flex: 1;

    .label {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    .value {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 400;
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      word-break: break-all;
    }
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FormTitle = styled.h3`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
`;

const Input = styled.input`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  font-family: 'Inter', 'Noto Sans KR';
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
  font-family: 'Inter', 'Noto Sans KR';
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #fff 0%, #f0f8ff 100%);
  color: ${colors.primary};
  border: none;
  border-radius: 50px;
  font-family: 'Inter', 'Noto Sans KR';
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: ${colors.primary};
    transform: translateY(-5px) scale(1.1);
    border-color: #fff;
  }
`;

const Contact = () => {
  const { personal } = portfolioData;
  const { success, error } = useContext(ToastContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 백엔드 API로 데이터 전송
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        success('메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.', {
          title: '전송 완료',
          duration: 5000
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // 서버 에러 메시지 표시
        const errorMessage = result.errors 
          ? result.errors.map(err => err.message).join(', ')
          : result.message || '메시지 전송에 실패했습니다.';
        error(errorMessage, {
          title: '전송 실패',
          duration: 7000
        });
      }
    } catch (err) {
      console.error('전송 오류:', err);
      // 오프라인 또는 네트워크 오류 시 이메일 대체 옵션 제공
      error('서버와 연결할 수 없습니다. 잠시 후 다시 시도하거나 이메일로 직접 연락해주세요.', {
        title: '연결 오류',
        duration: 10000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: personal.links.github,
      label: 'GitHub'
    },
    {
      icon: <FaBlog />,
      url: personal.links.blog,
      label: 'Blog'
    },
    {
      icon: <FaExternalLinkAlt />,
      url: personal.links.portfolio,
      label: 'Portfolio'
    }
  ];

  const contactItems = [
    {
      icon: <FaEnvelope />,
      label: '이메일',
      value: personal.email
    },
    {
      icon: <FaPhone />,
      label: '연락처',
      value: personal.phone
    },
    {
      icon: <FaMapMarkerAlt />,
      label: '위치',
      value: '서울, 대한민국'
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          연락하기
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          새로운 기회와 도전을 기다리고 있습니다. 언제든지 연락 주세요!
        </SectionSubtitle>

        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="icon">{item.icon}</div>
                <div className="content">
                  <div className="label">{item.label}</div>
                  <div className="value">{item.value}</div>
                </div>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FormTitle>메시지 보내기</FormTitle>
            
            <FormGroup>
              <Label htmlFor="name">이름</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">이메일</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">메시지</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="문의사항이나 메시지를 입력해주세요"
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? '전송 중...' : '메시지 전송'}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>

        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </SocialLink>
          ))}
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;