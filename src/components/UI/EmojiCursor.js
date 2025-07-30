import React, { useEffect, useState } from 'react';

const EmojiCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePos = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e) => {
      const element = e.target;
      const isClickable = element.tagName === 'A' || 
                         element.tagName === 'BUTTON' || 
                         element.type === 'button' ||
                         element.getAttribute('role') === 'button' ||
                         element.style.cursor === 'pointer' ||
                         window.getComputedStyle(element).cursor === 'pointer';
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const getEmoji = () => {
    if (isClicking) return '✊';
    if (isHovering) return '👆';
    return '🖐️';
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: mousePos.x - 20,
        top: mousePos.y - 20,
        width: 40,
        height: 40,
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 10000,
        backgroundColor: 'transparent',
        lineHeight: 1,
        transition: 'none',
      }}
    >
      {getEmoji()}
    </div>
  );
};

export default EmojiCursor; 