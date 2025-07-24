import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaJs, FaReact, FaVuejs, FaAws, FaDocker, 
  FaGitAlt, FaDatabase, FaServer, FaCode, FaTools 
} from 'react-icons/fa';
import { 
  SiSpring, SiFlask, SiMysql, SiOracle, SiRedis, SiMongodb, 
  SiIntellijidea, SiPycharm, SiVisualstudiocode, SiEclipseide,
  SiApachetomcat, SiNodedotjs, SiSwagger
} from 'react-icons/si';
import { Section, Container, SectionTitle, colors, gradients, breakpoints } from '../../styles/GlobalStyles';
import { portfolioData } from '../../data/portfolio';

const SkillsSection = styled(Section)`
  background: white;
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${colors.backgroundLight};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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
    color: ${colors.dark};
  }

  .icon {
    font-size: 2rem;
    color: ${colors.primary};
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
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);

    &::before {
      left: 100%;
    }
  }

  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${colors.primary};
    transition: color 0.3s ease;
  }

  .skill-name {
    font-family: 'Pretendard-Medium';
    color: ${colors.dark};
    font-size: 0.9rem;
  }

  &:hover .skill-icon {
    color: ${colors.secondary};
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
    color: ${colors.dark};
    font-size: 1.1rem;
  }

  .skill-level {
    font-family: 'Pretendard-Medium';
    color: ${colors.textLight};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.light};
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
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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

  .stat-number {
    font-size: 2.5rem;
    font-family: 'Pretendard-Bold';
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-family: 'Pretendard-Medium';
    color: ${colors.textLight};
  }
`;

const skillIcons = {
  // Programming Languages
  'Java': <FaJava />,
  'Python': <FaPython />,
  'JavaScript': <FaJs />,
  
  // Frameworks
  'Spring Boot': <SiSpring />,
  'Flask': <SiFlask />,
  'React': <FaReact />,
  'Vue.js': <FaVuejs />,
  'RESTful API': <FaCode />,
  'Ajax': <FaCode />,
  'Java Swing': <FaJava />,
  'Thymeleaf': <SiSpring />,
  
  // Databases
  'MySQL': <SiMysql />,
  'Oracle': <SiOracle />,
  'Redis': <SiRedis />,
  'MongoDB': <SiMongodb />,
  
  // Cloud & Deployment
  'AWS': <FaAws />,
  'Docker': <FaDocker />,
  
  // Tools
  'IntelliJ IDEA': <SiIntellijidea />,
  'PyCharm': <SiPycharm />,
  'VSCode': <SiVisualstudiocode />,
  'Eclipse': <SiEclipseide />,
  'Git': <FaGitAlt />,
  'Notion': <FaTools />,
  'Maven/Gradle': <FaTools />,
  
  // Servers
  'Apache Tomcat': <SiApachetomcat />,
  'Gunicorn': <FaServer />,
  'Node.js': <SiNodedotjs />,
  
  // Others
  'HTML': <FaCode />,
  'CSS': <FaCode />,
  'LLM': <FaCode />,
  'Swagger': <SiSwagger />
};

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: '프로그래밍 언어', icon: <FaCode />, skills: skills.programming },
    { title: '프레임워크/라이브러리', icon: <FaReact />, skills: skills.frameworks },
    { title: '데이터베이스', icon: <FaDatabase />, skills: skills.databases },
    { title: '클라우드/배포', icon: <FaAws />, skills: skills.cloud },
    { title: '개발 도구', icon: <FaTools />, skills: skills.tools },
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
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="skill-icon">
                      {skillIcons[skill] || <FaCode />}
                    </div>
                    <div className="skill-name">{skill}</div>
                  </SkillItem>
                ))}
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