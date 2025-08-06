import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaTimes, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { colors, breakpoints } from '../../styles/GlobalStyles';

const AlertOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AlertContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
    border-radius: 16px;
    max-width: 90vw;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
    border-radius: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: ${colors.text.primary};
  }
`;

const AlertIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.secondary}, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: white;

  @media (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const AlertTitle = styled.h3`
  font-family: 'Pretendard-Bold';
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${colors.text.primary};
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
  }
`;

const AlertMessage = styled.p`
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  color: ${colors.text.secondary};
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  font-size: 1rem;
`;

const ContactText = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-family: 'Pretendard-Regular';
  font-size: 0.8rem;
  color: ${colors.text.tertiary};
  margin-bottom: 0.2rem;
`;

const ContactValue = styled.a`
  font-family: 'Pretendard-Medium';
  font-size: 1rem;
  color: ${colors.text.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.secondary};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ActionButton = styled(motion.button)`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.primary {
    background: linear-gradient(135deg, ${colors.secondary}, #8b5cf6);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
    }
  }

  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.text.primary};
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${colors.secondary};
`;

const CheckBoxLabel = styled.label`
  font-family: 'Pretendard-Regular';
  font-size: 0.85rem;
  color: ${colors.text.tertiary};
  cursor: pointer;
`;

const HRAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에서 "다시 보지 않음" 설정 확인
    const hideAlert = localStorage.getItem('hideHRAlert');
    if (hideAlert === 'true') return;

    // 30초 후 알람 표시
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('hideHRAlert', 'true');
    }
    setIsVisible(false);
  };

  const handleEmailClick = () => {
    window.open('mailto:ehdrb12123@naver.com?subject=채용 문의&body=안녕하세요. 포트폴리오를 통해 연락드립니다.', '_blank');
    handleClose();
  };

  const handlePhoneClick = () => {
    window.open('tel:+821040488292', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <AlertOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <AlertContainer
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CloseButton onClick={handleClose}>
              <FaTimes />
            </CloseButton>

            <AlertIcon>
              <FaUserTie />
            </AlertIcon>

            <AlertTitle>서류담당자님께</AlertTitle>
            
            <AlertMessage>
              포트폴리오를 검토해주셔서 감사합니다.<br />
              추가 문의사항이나 면접 일정 협의가 필요하시면<br />
              언제든지 아래 연락처로 연락주세요! 🚀
            </AlertMessage>

            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>이메일</ContactLabel>
                  <ContactValue href="mailto:ehdrb12123@naver.com">ehdrb12123@naver.com</ContactValue>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactText>
                  <ContactLabel>연락처</ContactLabel>
                  <ContactValue href="tel:+821040488292">010-4048-8292</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactInfo>

            <ActionButtons>
              <ActionButton 
                className="primary"
                onClick={handleEmailClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope />
                이메일 보내기
              </ActionButton>
              
              <ActionButton 
                className="secondary"
                onClick={handlePhoneClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPhone />
                전화하기
              </ActionButton>
            </ActionButtons>

            <CheckBoxContainer>
              <CheckBox 
                type="checkbox" 
                id="dontShowAgain"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              <CheckBoxLabel htmlFor="dontShowAgain">
                다시 보지 않기
              </CheckBoxLabel>
            </CheckBoxContainer>
          </AlertContainer>
        </AlertOverlay>
      )}
    </AnimatePresence>
  );
};

export default HRAlert;