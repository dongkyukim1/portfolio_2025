import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { colors } from '../../styles/GlobalStyles';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const ToastContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  pointer-events: none;
`;

const ToastItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${props => {
    switch (props.type) {
      case 'success': return 'linear-gradient(135deg, #4CAF50, #45a049)';
      case 'error': return 'linear-gradient(135deg, #f44336, #da190b)';
      case 'warning': return 'linear-gradient(135deg, #ff9800, #f57c00)';
      default: return 'linear-gradient(135deg, #2196F3, #1976D2)';
    }
  }};
  color: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 300px;
  max-width: 400px;
  pointer-events: auto;
  animation: ${slideIn} 0.3s ease-out;

  &.exit {
    animation: ${slideOut} 0.3s ease-in;
  }

  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    
    .title {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .message {
      font-family: 'Inter', 'Noto Sans KR';
      font-weight: 400;
      font-size: 0.9rem;
      opacity: 0.9;
      line-height: 1.4;
    }
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 12px 12px;
    animation: progress ${props => props.duration || 5000}ms linear;
  }

  @keyframes progress {
    from { width: 100%; }
    to { width: 0%; }
  }
`;

const getIcon = (type) => {
  switch (type) {
    case 'success': return <FaCheckCircle />;
    case 'error': return <FaExclamationTriangle />;
    case 'warning': return <FaExclamationTriangle />;
    default: return <FaInfoCircle />;
  }
};

const getTitle = (type) => {
  switch (type) {
    case 'success': return '성공';
    case 'error': return '오류';
    case 'warning': return '경고';
    default: return '알림';
  }
};

export const Toast = ({ toasts, removeToast }) => {
  return (
    <ToastContainer>
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            type={toast.type}
            duration={toast.duration}
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 100, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="icon">
              {getIcon(toast.type)}
            </div>
            <div className="content">
              <div className="title">{toast.title || getTitle(toast.type)}</div>
              <div className="message">{toast.message}</div>
            </div>
            <button 
              className="close-btn"
              onClick={() => removeToast(toast.id)}
            >
              <FaTimes />
            </button>
            {toast.duration && <div className="progress-bar" />}
          </ToastItem>
        ))}
      </AnimatePresence>
    </ToastContainer>
  );
};

// Toast Hook
export const useToast = () => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((toast) => {
    const id = Date.now() + Math.random();
    const newToast = {
      id,
      type: 'info',
      duration: 5000,
      ...toast
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove after duration
    if (newToast.duration) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }

    return id;
  }, []);

  const removeToast = React.useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const success = React.useCallback((message, options = {}) => {
    return addToast({ type: 'success', message, ...options });
  }, [addToast]);

  const error = React.useCallback((message, options = {}) => {
    return addToast({ type: 'error', message, ...options });
  }, [addToast]);

  const warning = React.useCallback((message, options = {}) => {
    return addToast({ type: 'warning', message, ...options });
  }, [addToast]);

  const info = React.useCallback((message, options = {}) => {
    return addToast({ type: 'info', message, ...options });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info
  };
};

export default Toast;