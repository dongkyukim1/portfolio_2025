import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaJs, FaReact, FaVuejs, FaAws, FaDocker, 
  FaGitAlt, FaDatabase, FaServer, FaCode, FaTools, FaAndroid, FaSlack, FaFigma, FaDiscord,
  FaUsers
} from 'react-icons/fa';
import { 
  SiSpring, SiFlask, SiMysql, SiOracle, SiRedis, SiMongodb, 
  SiIntellijidea, SiPycharm, SiEclipseide,
  SiApachetomcat, SiNodedotjs, SiSwagger, SiNextdotjs, SiNotion,
  SiSpringboot, SiAndroidstudio, SiPostgresql, SiFlutter
} from 'react-icons/si';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const SkillsSection = styled(Section)`
  background: transparent;
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
  }

  .icon {
    font-size: 2rem;
    color: ${colors.secondary};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
  }
`;

const SkillItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.3);

    &::before {
      left: 100%;
    }
  }

  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    
    /* 흰색 아이콘을 위한 그림자 효과 */
    filter: ${props => props.$isWhite ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none'};
  }

  .skill-name {
    font-family: 'Pretendard-Medium';
    color: ${colors.text.secondary};
    font-size: 0.9rem;
  }

  &:hover .skill-icon {
    transform: scale(1.1);
    filter: ${props => props.$isWhite ? 'drop-shadow(0 0 12px rgba(255,255,255,0.8))' : 'drop-shadow(0 0 8px currentColor)'};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
    
    .skill-icon {
      font-size: 2rem;
    }
    
    .skill-name {
      font-size: 0.8rem;
    }
  }
`;

const ProgressSection = styled.div`
  margin-top: 4rem;
`;

const ProgressItem = styled(motion.div)`
  margin-bottom: 2rem;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  .skill-name {
    font-family: 'Pretendard-SemiBold';
    color: ${colors.text.primary};
    font-size: 1.1rem;
  }

  .skill-level {
    font-family: 'Pretendard-Medium';
    color: ${colors.text.secondary};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${gradients.primary};
  border-radius: 4px;
  width: ${props => props.width}%;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${gradients.primary};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.secondary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${colors.text.secondary};
  }
`;

const skillIcons = {
  // Programming Languages
  'Java': { icon: <FaJava />, color: '#f89820' },
  'Python': { icon: <FaPython />, color: '#3776ab' },
  'JavaScript': { icon: <FaJs />, color: '#f7df1e' },
  
  // Frameworks
  'Spring': { icon: <SiSpring />, color: '#6db33f' },
  'Spring Boot': { icon: <SiSpringboot />, color: '#6db33f' },
  'Flask': { icon: <SiFlask />, color: '#ffffff' },
  'React': { icon: <FaReact />, color: '#61dafb' },
  'Next.js': { icon: <SiNextdotjs />, color: '#ffffff' },
  'Vue.js': { icon: <FaVuejs />, color: '#4fc08d' },
  'Flutter': { icon: <SiFlutter />, color: '#02569b' },
  'Android': { icon: <FaAndroid />, color: '#3ddc84' },
  'RESTful API': { icon: <FaCode />, color: '#ff6b6b' },
  'Ajax': { icon: <FaCode />, color: '#4ecdc4' },
  'Java Swing': { icon: <FaJava />, color: '#f89820' },
  'Thymeleaf': { icon: <SiSpring />, color: '#005f0f' },
  
  // Databases
  'MySQL': { icon: <SiMysql />, color: '#4479a1' },
  'Oracle': { icon: <SiOracle />, color: '#f80000' },
  'PostgreSQL': { icon: <SiPostgresql />, color: '#4169e1' },
  'Redis': { icon: <SiRedis />, color: '#dc382d' },
  'MongoDB': { icon: <SiMongodb />, color: '#47a248' },
  
  // Cloud & Deployment
  'AWS': { icon: <FaAws />, color: '#ff9900' },
  'Docker': { icon: <FaDocker />, color: '#2496ed' },
  
  // Tools
  'IntelliJ IDEA': { icon: <SiIntellijidea />, color: '#fe315d' },
  'PyCharm': { icon: <SiPycharm />, color: '#21d789' },
  'Android Studio': { icon: <SiAndroidstudio />, color: '#3ddc84' },
  'VSCode': { icon: <FaCode />, color: '#007acc' },
  'Eclipse': { icon: <SiEclipseide />, color: '#2c2255' },
  'Git': { icon: <FaGitAlt />, color: '#f05032' },
  'Notion': { icon: <SiNotion />, color: '#ffffff' },
  'Slack': { icon: <FaSlack />, color: '#4a154b' },
  'Figma': { icon: <FaFigma />, color: '#f24e1e' },
  'Discord': { icon: <FaDiscord />, color: '#5865f2' },
  'Maven/Gradle': { icon: <FaTools />, color: '#c71a36' },
  
  // Servers
  'Apache Tomcat': { icon: <SiApachetomcat />, color: '#f8dc75' },
  'Gunicorn': { icon: <FaServer />, color: '#499848' },
  'Node.js': { icon: <SiNodedotjs />, color: '#339933' },
  
  // Others
  'HTML': { icon: <FaCode />, color: '#e34c26' },
  'CSS': { icon: <FaCode />, color: '#1572b6' },
  'LLM': { icon: <FaCode />, color: '#8e44ad' },
  'Swagger': { icon: <SiSwagger />, color: '#85ea2d' }
};

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: '프로그래밍 언어', icon: <FaCode />, skills: skills.programming },
    { title: '프레임워크/라이브러리', icon: <FaReact />, skills: skills.frameworks },
    { title: '데이터베이스', icon: <FaDatabase />, skills: skills.databases },
    { title: '클라우드/배포', icon: <FaAws />, skills: skills.cloud },
    { title: '개발 도구', icon: <FaTools />, skills: skills.tools },
    { title: '협업 도구', icon: <FaUsers />, skills: skills.collaboration },
    { title: '서버', icon: <FaServer />, skills: skills.servers },
    { title: '기타', icon: <FaCode />, skills: skills.others }
  ];

  const mainSkills = [
    { name: 'JavaScript/React', level: '상급', percentage: 90 },
    { name: 'Java/Spring Boot', level: '중상급', percentage: 85 },
    { name: 'Python/Flask', level: '중상급', percentage: 80 },
    { name: 'AWS/Docker', level: '중급', percentage: 75 },
    { name: 'Database', level: '중상급', percentage: 82 }
  ];

  const stats = [
    { number: '3+', label: '년의 개발 경험' },
    { number: '10+', label: '완료한 프로젝트' },
    { number: '5+', label: '사용 기술 스택' },
    { number: '2+', label: '자격증 보유' }
  ];



  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <SkillsContainer>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <CategoryHeader>
                <span className="icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </CategoryHeader>
              
              <SkillsGrid>
                {category.skills.map((skill, skillIndex) => {
                  const isWhiteIcon = ['Flask', 'Next.js', 'Notion'].includes(skill);
                  return (
                    <SkillItem
                      key={skill}
                      $isWhite={isWhiteIcon}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="skill-icon" style={{ 
                        color: skillIcons[skill]?.color || colors.primary 
                      }}>
                        {skillIcons[skill]?.icon || <FaCode />}
                      </div>
                      <div className="skill-name">{skill}</div>
                    </SkillItem>
                  );
                })}
              </SkillsGrid>
            </SkillCategory>
          ))}
        </SkillsContainer>

        <ProgressSection>
          <SectionTitle style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            주요 기술 숙련도
          </SectionTitle>
          
          {mainSkills.map((skill, index) => (
            <ProgressItem
              key={skill.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProgressHeader>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </ProgressHeader>
              <ProgressBar>
                <ProgressFill
                  width={skill.percentage}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </ProgressBar>
            </ProgressItem>
          ))}
        </ProgressSection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;