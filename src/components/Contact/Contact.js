import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaBlog, FaLinkedin, FaInstagram, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  colors, 
  gradients, 
  breakpoints,
  TransparentSectionBackground,
  BackgroundContainer,
  AnimatedParticle,
  GeometricShape,
  MinimalLine,
  CodeElement,
  RotatingRing,
  DataStream,
  GeometricOrb
} from '../../styles/GlobalStyles';
import axios from 'axios';

const ContactSection = styled(TransparentSectionBackground)`
  padding: 80px 0;
  z-index: 10;
  position: relative;
  /* 투명 배경으로 전체와 자연스럽게 이어짐 */

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Pretendard-Bold';
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 5rem;
  color: ${colors.text.primary};
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 1px;
    background: ${colors.text.tertiary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Pretendard-Regular';
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${colors.text.secondary};
  line-height: 1.8;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ContactContent = styled.div`
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
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const InfoTitle = styled.h3`
  font-family: 'Pretendard-Bold';
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${colors.text.primary};
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.75rem;
  }
`;

const InfoDescription = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${colors.text.secondary};
  margin-bottom: 2.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  font-size: 1.2rem;
`;

const InfoText = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 0.9rem;
  color: ${colors.text.tertiary};
  margin-bottom: 0.3rem;
`;

const InfoValue = styled.a`
  font-family: 'Pretendard-Medium';
  font-size: 1.05rem;
  color: ${colors.text.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.secondary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  color: ${colors.text.primary};
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${colors.text.primary};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
    background: rgba(255, 255, 255, 0.08);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${colors.text.primary};
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${colors.text.tertiary};
  }

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
    background: rgba(255, 255, 255, 0.08);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.2rem;
  background: ${gradients.primary};
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Pretendard-SemiBold';
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// 알림 메시지 컴포넌트
const Notification = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: ${props => props.type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  font-family: 'Pretendard-Medium';
  z-index: 1000;

  @media (max-width: ${breakpoints.mobile}) {
    right: 20px;
    left: 20px;
    bottom: 20px;
  }
`;

// Contact용 배경 애니메이션 컴포넌트
const ContactBackground = () => {
  const contactCodeSnippets = [
    'const message = await sendEmail();',
    'fetch("/api/contact", { method: "POST" })',
    'console.log("Thanks for reaching out!");',
    'const response = { status: "success" };',
    'nodemailer.sendMail(mailOptions);',
    'axios.post("/contact", formData);',
    'return { message: "Message sent!" };',
    'email.validate() && email.send();'
  ];

  return (
    <BackgroundContainer>
      {/* 미니멀 라인들 - Contact 테마 */}
      {[...Array(10)].map((_, i) => (
        <MinimalLine
          key={`line-${i}`}
          width={`${Math.random() * 250 + 150}px`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.35, 0.35, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 12,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 기하학적 오브들 - 따뜻한 느낌 */}
      {[...Array(8)].map((_, i) => (
        <GeometricOrb
          key={`orb-${i}`}
          style={{
            width: Math.random() * 350 + 200,
            height: Math.random() * 350 + 200,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          gradient={`radial-gradient(circle, rgba(${
            i % 4 === 0 ? '59, 130, 246' :
            i % 4 === 1 ? '147, 51, 234' : 
            i % 4 === 2 ? '16, 185, 129' : '245, 158, 11'
          }, 0.08) 0%, transparent 70%)`}
          blur={`${Math.random() * 5 + 3}px`}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, Math.random() * 120 - 60, 0],
            y: [0, Math.random() * 120 - 60, 0],
          }}
          transition={{
            duration: Math.random() * 25 + 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 5
          }}
        />
      ))}

      {/* 회전하는 링들 - 연결의 상징 */}
      {[...Array(6)].map((_, i) => (
        <RotatingRing
          key={`ring-${i}`}
          style={{
            width: 180 + i * 80,
            height: 180 + i * 80,
            top: `${5 + i * 15}%`,
            right: `${3 + i * 7}%`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35 + i * 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 데이터 스트림 - 소통의 흐름 */}
      {[...Array(12)].map((_, i) => (
        <DataStream
          key={`stream-${i}`}
          style={{
            height: Math.random() * 250 + 150,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Contact 관련 코드 요소들 */}
      {contactCodeSnippets.map((code, i) => (
        <CodeElement
          key={`code-${i}`}
          style={{
            top: `${Math.random() * 95 + 2.5}%`,
            left: `${Math.random() * 85 + 7.5}%`,
            transform: `rotate(${Math.random() * 35 - 17.5}deg)`,
            fontSize: '14px',
          }}
          animate={{
            opacity: [0, 1.2, 1.2, 0],
            y: [0, -30, -60, -90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: i * 3.5,
            ease: "linear"
          }}
        >
          {code}
        </CodeElement>
      ))}

      {/* 애니메이션 파티클들 - 메시지의 상징 */}
      {[...Array(25)].map((_, i) => (
        <AnimatedParticle
          key={`particle-${i}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 1.2, 0.6],
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
          }}
          transition={{
            duration: Math.random() * 18 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 12
          }}
        />
      ))}

      {/* 기하학적 도형들 - Contact & Communication 테마 */}
      <GeometricShape
        style={{ top: '30%', left: '25%' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <GeometricShape
        style={{ 
          top: '65%', 
          right: '20%',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <GeometricShape
        style={{ 
          bottom: '35%', 
          left: '35%',
          borderRadius: '25px'
        }}
        animate={{
          rotate: [90, 270, 90],
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        style={{ 
          top: '20%', 
          right: '8%',
          borderRadius: '18px',
          width: '120px',
          height: '120px'
        }}
        animate={{
          rotate: [0, 360, 720],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <GeometricShape
        style={{ 
          bottom: '15%', 
          right: '45%',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          width: '110px',
          height: '110px'
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [0.9, 1.4, 0.9],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        style={{ 
          top: '10%', 
          left: '10%',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          width: '100px',
          height: '100px'
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </BackgroundContainer>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://3.34.52.239:8080/api/contacts', formData);

      if (response.status === 201) {
        showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('메시지 전송에 실패했습니다. 다시 시도해주세요.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          새로운 기회와 도전을 환영합니다. 언제든지 연락주세요!
        </SectionSubtitle>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoTitle>Let's Connect</InfoTitle>
            <InfoDescription>
              새로운 기회와 도전을 환영합니다.<br />
              언제든지 연락주세요!
            </InfoDescription>

            <InfoList>
              <InfoItem>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <InfoText>
                  <InfoLabel>이메일</InfoLabel>
                  <InfoValue href="mailto:ehdrb0510@naver.com">ehdrb0510@naver.com</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <InfoText>
                  <InfoLabel>전화번호</InfoLabel>
                  <InfoValue href="tel:+821040950510">010-4095-0510</InfoValue>
                </InfoText>
              </InfoItem>

              <InfoItem>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                <InfoText>
                  <InfoLabel>위치</InfoLabel>
                  <InfoValue as="span">대한민국, 서울특별시 성동구</InfoValue>
                </InfoText>
              </InfoItem>
            </InfoList>

            <SocialLinks>
              <SocialLink href="https://github.com/dongkyukim1" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://begin-developer.tistory.com/" target="_blank" rel="noopener noreferrer">
                <FaBlog />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormLabel>이름</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="홍길동"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>이메일</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>메시지</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="프로젝트에 대해 이야기하고 싶어요..."
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <FaPaperPlane />
                  메시지 보내기
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
      
      <AnimatePresence>
        {notification && (
          <Notification
            type={notification.type}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {notification.message}
          </Notification>
        )}
      </AnimatePresence>
    </ContactSection>
  );
};

export default Contact;