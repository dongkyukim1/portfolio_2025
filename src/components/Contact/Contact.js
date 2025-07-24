import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaBlog, 
  FaExternalLinkAlt, FaDownload, FaMobile, FaPaperPlane,
  FaLinkedin, FaInstagram
} from 'react-icons/fa';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const ContactSection = styled(Section)`
  background: ${colors.dark};
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 50%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ContactContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    font-size: 1.5rem;
    color: ${colors.primary};
    min-width: 24px;
  }

  .content {
    flex: 1;

    .label {
      font-family: 'Pretendard-SemiBold';
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0.2rem;
    }

    .value {
      font-family: 'Pretendard-Medium';
      font-size: 1.1rem;
      color: white;
    }
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 2rem;
    color: ${colors.primary};
  }

  .label {
    font-family: 'Pretendard-Medium';
    font-size: 0.9rem;
    text-align: center;
  }
`;

const ContactForm = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Pretendard-Bold';
  color: white;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-family: 'Pretendard-SemiBold';
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: 'Pretendard-Regular';
    font-size: 1rem;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: none;
      border-color: ${colors.primary};
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: ${gradients.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-family: 'Pretendard-SemiBold';
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const DownloadSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  margin-top: 3rem;
`;

const DownloadTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Pretendard-Bold';
  color: white;
  margin-bottom: 1rem;
`;

const DownloadDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Pretendard-Regular';
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const DownloadButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const DownloadButton = styled(motion.a)`
  background: ${gradients.secondary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-family: 'Pretendard-SemiBold';
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        alert('메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // 서버 에러 메시지 표시
        const errorMessage = result.errors 
          ? result.errors.map(err => err.message).join('\n')
          : result.message || '메시지 전송에 실패했습니다.';
        alert(errorMessage);
      }
    } catch (error) {
      console.error('전송 오류:', error);
      // 오프라인 또는 네트워크 오류 시 이메일 대체 옵션 제공
      if (confirm('메시지 전송에 실패했습니다. 이메일로 직접 연락하시겠습니까?')) {
        window.location.href = `mailto:${personal.email}?subject=포트폴리오 문의&body=안녕하세요! 포트폴리오를 보고 연락드립니다.`;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: personal.links.github,
      description: '코드 저장소'
    },
    {
      icon: <FaBlog />,
      label: 'Blog',
      url: personal.links.blog,
      description: '기술 블로그'
    },
    {
      icon: <FaExternalLinkAlt />,
      label: 'Portfolio',
      url: personal.links.portfolio,
      description: '포트폴리오 2024'
    },
    {
      icon: <FaMobile />,
      label: 'App Demo',
      url: personal.links.playstore,
      description: '앱 테스트'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ContactContainer>
          <SectionTitle style={{ color: 'white' }}>Get In Touch</SectionTitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactGrid>
              {/* 연락처 정보 */}
              <ContactInfo>
                <ContactCard variants={itemVariants}>
                  <ContactItem>
                    <FaEnvelope className="icon" />
                    <div className="content">
                      <div className="label">이메일</div>
                      <div className="value">{personal.email}</div>
                    </div>
                  </ContactItem>

                  <ContactItem>
                    <FaPhone className="icon" />
                    <div className="content">
                      <div className="label">연락처</div>
                      <div className="value">{personal.phone}</div>
                    </div>
                  </ContactItem>

                  <ContactItem>
                    <FaMapMarkerAlt className="icon" />
                    <div className="content">
                      <div className="label">주소</div>
                      <div className="value">{personal.address}</div>
                    </div>
                  </ContactItem>
                </ContactCard>

                <SocialLinks>
                  {socialLinks.map((link, index) => (
                    <SocialLink
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="icon">{link.icon}</div>
                      <div className="label">
                        <div>{link.label}</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
                          {link.description}
                        </div>
                      </div>
                    </SocialLink>
                  ))}
                </SocialLinks>
              </ContactInfo>

              {/* 연락 폼 */}
              <ContactForm variants={itemVariants}>
                <FormTitle>메시지 보내기</FormTitle>
                
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label htmlFor="name">이름</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="이름을 입력하세요"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="email">이메일</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="이메일을 입력하세요"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="message">메시지</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="메시지를 입력하세요"
                      required
                    />
                  </FormGroup>

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⏳
                        </motion.div>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        메시지 전송
                      </>
                    )}
                  </SubmitButton>
                </form>
              </ContactForm>
            </ContactGrid>

            {/* 이력서 다운로드 섹션 */}
            <DownloadSection variants={itemVariants}>
              <DownloadTitle>이력서 다운로드</DownloadTitle>
              <DownloadDescription>
                더 자세한 정보가 필요하시다면 아래에서 이력서를 다운로드하실 수 있습니다.
                <br />
                또는 온라인 포트폴리오를 확인해보세요.
              </DownloadDescription>
              
              <DownloadButtons>
                <DownloadButton
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert('이력서 PDF 다운로드 기능은 곧 제공될 예정입니다.');
                  }}
                >
                  <FaDownload />
                  이력서 PDF
                </DownloadButton>
                
                <DownloadButton
                  href={personal.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  2024년 포트폴리오(Vue.js)
                </DownloadButton>
              </DownloadButtons>
            </DownloadSection>
          </motion.div>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;