import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VisitorCounterContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  font-family: 'Pretendard-Medium';
  font-size: 12px;
  color: #ffffff;
  z-index: 1000;
  min-width: 120px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 10px 12px;
    font-size: 11px;
    min-width: 100px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    padding: 8px 10px;
    font-size: 10px;
    min-width: 90px;
  }
`;

const CounterTitle = styled.div`
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 4px;
  opacity: 0.8;
`;

const CounterValue = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 14px;
  color: #64ffda;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-family: 'Pretendard-Regular';
  font-size: 10px;
  margin-top: 4px;
`;

const LoadingDot = styled.div`
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #64ffda;
  margin: 0 1px;
  animation: loading 1.4s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};

  @keyframes loading {
    0%, 80%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    40% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const VisitorCounter = () => {
  const [visitorData, setVisitorData] = useState({
    visits: 0,
    uniqueVisitors: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false); // 초기에는 숨김

  // 서버 URL 설정 (환경변수만 사용, 기본 하드코드 제거)
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  // 방문 기록 및 오늘 방문자 수 조회
  const trackVisitAndGetStats = async () => {
    if (!API_BASE_URL) {
      return;
    }
    try {
      setLoading(true);
      setError('');

      // 1. 방문 기록 (POST 요청)
      const visitResponse = await fetch(`${API_BASE_URL}/api/visitors/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'include'
      });

      if (visitResponse.ok) {
        const visitResult = await visitResponse.json();
        if (visitResult.success && visitResult.data) {
          setVisitorData({
            visits: visitResult.data.todayVisits,
            uniqueVisitors: visitResult.data.todayUniqueVisitors
          });
        }
      } else {
        // 방문 기록 실패 시 조회만 시도
        const statsResponse = await fetch(`${API_BASE_URL}/api/visitors/today`, {
          mode: 'cors',
          credentials: 'include'
        });
        if (statsResponse.ok) {
          const statsResult = await statsResponse.json();
          if (statsResult.success && statsResult.data) {
            setVisitorData({
              visits: statsResult.data.visits,
              uniqueVisitors: statsResult.data.uniqueVisitors
            });
          }
        }
      }

    } catch (err) {
      console.error('방문자 데이터 조회 오류:', err);
      setError('방문자 수를 불러올 수 없습니다');
    } finally {
      setLoading(false);
    }
  };

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Ctrl + Shift + V 키 조합으로 토글
      if (event.ctrlKey && event.shiftKey && event.key === 'V') {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // 컴포넌트 마운트 시 실행
  useEffect(() => {
    if (!API_BASE_URL) {
      // API가 설정되지 않은 경우 방문자 기능 비활성화
      setLoading(false);
      return;
    }

    trackVisitAndGetStats();

    // 10분마다 방문자 수 갱신 (방문 기록 없이 조회만)
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/visitors/today`, {
          mode: 'cors',
          credentials: 'include'
        });
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            setVisitorData({
              visits: result.data.visits,
              uniqueVisitors: result.data.uniqueVisitors
            });
          }
        }
      } catch (err) {
        console.error('방문자 수 갱신 오류:', err);
      }
    }, 10 * 60 * 1000); // 10분

    return () => clearInterval(interval);
  }, [API_BASE_URL]);

  // 보이지 않을 때는 렌더링하지 않음
  if (!isVisible) {
    return null;
  }

  if (loading) {
    return (
      <VisitorCounterContainer>
        <CounterTitle>방문자</CounterTitle>
        <CounterValue>
          <LoadingDot delay="0s" />
          <LoadingDot delay="0.2s" />
          <LoadingDot delay="0.4s" />
        </CounterValue>
      </VisitorCounterContainer>
    );
  }

  return (
    <VisitorCounterContainer>
      <CounterTitle>오늘 방문자</CounterTitle>
      <CounterValue>
        {visitorData.visits.toLocaleString()}
        {visitorData.uniqueVisitors > 0 && (
          <span style={{ fontSize: '10px', opacity: 0.7, marginLeft: '4px' }}>
            ({visitorData.uniqueVisitors})
          </span>
        )}
      </CounterValue>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div style={{ 
        fontSize: '8px', 
        opacity: 0.5, 
        marginTop: '4px',
        textAlign: 'center'
      }}>
        Ctrl+Shift+V로 토글
      </div>
    </VisitorCounterContainer>
  );
};

export default VisitorCounter;
