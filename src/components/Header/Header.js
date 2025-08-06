import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause, FaBars, FaTimes, FaVolumeMute, FaVolumeUp, FaSpotify, FaStepForward, FaStepBackward } from 'react-icons/fa';
import { breakpoints } from '../../styles/GlobalStyles';
import musicFile1 from '../../assets/music/전영호 - Butter-Fly [디지몬 어드벤처] [가사Lyrics].mp3';
import musicFile2 from '../../assets/music/HUNTRX (헌트릭스) - How Its Done [가사  Lyrics].mp3';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 20px;
    height: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    padding: 0 15px;
  }
`;

const Logo = styled(motion.div)`
  font-family: 'Pretendard-Bold';
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 1002;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Navigation = styled(motion.nav)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 40px;

  @media (max-width: ${breakpoints.laptop}) {
    gap: 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: ${props => props.$isOpen ? '0' : '-100%'};
    transform: none;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const NavItem = styled(motion.a)`
  font-family: 'Pretendard-Medium';
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  letter-spacing: 0.01em;

  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    color: white;

    &::before {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    color: white;
    
    &::before {
      bottom: -6px;
      height: 2px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`;

const MusicPlayer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(28, 28, 28, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  padding: 6px 16px 6px 10px;
  min-width: 280px;

  @media (max-width: ${breakpoints.laptop}) {
    min-width: 250px;
    gap: 12px;
    padding: 5px 14px 5px 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const AlbumArt = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: linear-gradient(135deg, #1db954 0%, #191414 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%);
  }

  svg {
    z-index: 1;
  }
`;

const TrackInfo = styled.div`
  flex: 1;
  min-width: 0;

  .track-name {
    font-size: 0.8rem;
    font-family: 'Pretendard-Medium';
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1px;
  }

  .artist-name {
    font-size: 0.7rem;
    font-family: 'Pretendard-Regular';
    color: rgba(255, 255, 255, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ControlButton = styled(motion.button)`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const PlayButton = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: white;
  border: none;
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;

  svg {
    position: relative;
    left: ${props => props.$isPlaying ? '0' : '1px'};
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`;

const VolumeButton = styled(motion.button)`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`;

const VolumeSlider = styled.input`
  width: 50px;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: #1db954;
  border-radius: 1px;
  transition: width 0.1s linear;
`;

const MenuToggle = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  z-index: 1002;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const PageIndicator = styled(motion.div)`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const IndicatorDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  transform-origin: left;
  z-index: 999;

  @media (max-width: ${breakpoints.tablet}) {
    top: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 60px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // 음악 트랙 목록
  const tracks = [
    {
      file: musicFile1,
      name: 'Butter-Fly',
      artist: '전영호 • 디지몬 어드벤처'
    },
    {
      file: musicFile2,
      name: 'How Its Done',
      artist: 'HUNTRX (헌트릭스)'
    }
  ];

  const currentTrack = tracks[currentTrackIndex];

  // 오디오 초기화 및 트랙 변경 처리
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    audioRef.current = new Audio(currentTrack.file);
    audioRef.current.volume = isMuted ? 0 : volume;
    audioRef.current.loop = true;

    // 오디오 이벤트 리스너
    const handleLoadedData = () => {
      console.log('Audio loaded successfully:', currentTrack.name);
    };

    const handleError = (e) => {
      console.error('Audio loading error:', e);
    };

    const handleEnded = () => {
      // 트랙이 끝나면 다음 트랙으로
      nextTrack();
    };

    audioRef.current.addEventListener('loadeddata', handleLoadedData);
    audioRef.current.addEventListener('error', handleError);
    audioRef.current.addEventListener('ended', handleEnded);

    // 재생 중이었다면 새 트랙도 자동 재생
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Auto-play failed:', error);
          setIsPlaying(false);
        });
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadeddata', handleLoadedData);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, [currentTrackIndex]); // currentTrackIndex가 변경될 때마다 실행

  // 재생 상태에 따른 프로그레스 업데이트
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      progressIntervalRef.current = setInterval(() => {
        if (audioRef.current && audioRef.current.duration) {
          const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          setProgress(currentProgress);
        }
      }, 100);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying]);

  // 볼륨 업데이트
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error('Audio playback failed:', error);
              if (error.name === 'NotAllowedError') {
                console.log('User interaction required for audio playback');
              }
            });
        }
      }
    } catch (error) {
      console.error('Toggle play/pause error:', error);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prevIndex) => 
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value) / 100;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);

      // 현재 활성 섹션 감지
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // 프로젝트 상세 페이지에서는 메인 페이지로 이동 후 해당 섹션으로 이동
    if (window.location.hash.includes('/project/')) {
      window.location.href = `${window.location.pathname}#${href}`;
      return;
    }
    
    // 메인 페이지에서는 스무스 스크롤
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleIndicatorClick = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeaderContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
          }}
        >
          DONGKYU
        </Logo>

        <Navigation $isOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <NavItem
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </NavItem>
          ))}
        </Navigation>

        <RightSection>
          <MusicPlayer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AlbumArt
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaSpotify />
            </AlbumArt>
            
            <TrackInfo>
              <div className="track-name">{currentTrack.name}</div>
              <div className="artist-name">{currentTrack.artist}</div>
            </TrackInfo>
            
            <PlayerControls>
              <ControlButton
                onClick={previousTrack}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStepBackward />
              </ControlButton>
              
              <PlayButton
                $isPlaying={isPlaying}
                onClick={togglePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </PlayButton>
              
              <ControlButton
                onClick={nextTrack}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaStepForward />
              </ControlButton>
              
              <VolumeControl>
                <VolumeButton
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                </VolumeButton>
                <VolumeSlider
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume * 100}
                  onChange={handleVolumeChange}
                />
              </VolumeControl>
            </PlayerControls>
            
            <ProgressBar>
              <Progress style={{ width: `${progress}%` }} />
            </ProgressBar>
          </MusicPlayer>

          <MenuToggle
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </MenuToggle>
        </RightSection>
      </HeaderContainer>

      <ScrollProgress
        style={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <PageIndicator>
        {sections.map((section, index) => (
          <IndicatorDot
            key={section}
            $active={activeSection === section}
            onClick={() => handleIndicatorClick(section)}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </PageIndicator>
    </>
  );
};

export default Header;