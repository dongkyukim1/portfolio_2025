import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
    margin-top: 60px;
  }
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 2;
  color: white;
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px 10px;
  border-radius: 6px;
  font-family: 'Pretendard-Regular';
  font-size: 0.85rem;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.35);
  }
`;

const FrameWrapper = styled.div`
  position: absolute;
  inset: 0;
  top: 40px; /* leave space for topbar */
  z-index: 1;
`;

const GrafanaFrame = styled.iframe`
  width: 100%;
  height: calc(100% - 0px);
  border: 0;
  background: #0a0a1a;
`;

export default function Grafana() {
  const grafanaUrl = 'http://3.34.52.239:8080/';

  return (
    <PageContainer>
      <TopBar>
        <span>Grafana Monitoring</span>
        <ExternalLink href={grafanaUrl} target="_blank" rel="noopener noreferrer">
          새 창에서 열기
        </ExternalLink>
      </TopBar>
      <FrameWrapper>
        <GrafanaFrame
          src={grafanaUrl}
          title="Grafana Dashboard"
          allow="clipboard-read; clipboard-write"
        />
      </FrameWrapper>
    </PageContainer>
  );
}


