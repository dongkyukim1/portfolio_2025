export const portfolioData = {
  personal: {
    name: "김동규",
    englishName: "Dongkyu Kim",
    title: "웹·앱 프론트엔드 개발자",
    birth: "1993.01.05",
    address: "서울특별시 양천구",
    phone: "010-4048-8292",
    email: "wlsntus55@gmail.com",
    salary: "3600만원 (협의가능)",
    links: {
      portfolio: "https://dongkyu.shop/",
      github: "https://github.com/dongkyukim1?tab=repositories",
      blog: "https://begin-developer.tistory.com/",
      playstore: "https://play.google.com/apps/testing/com.littlebank.littlebank_prod",
      tripplai: "https://tripplai.vercel.app/"
    }
  },

  about: {
    introduction: "Spring Boot와 Flask를 활용한 웹 애플리케이션 개발에 전문성을 갖춘 백엔드 개발자입니다. Git을 통한 형상 관리 및 Docker와 AWS를 이용한 배포 경험이 있으며, LLM을 활용한 AI 기능 구현 능력도 보유하고 있습니다. 팀의 일원으로서 프로젝트 성공에 기여하고 협업을 통해 시너지를 창출하며, 혁신적이고 도전적인 환경에서 역량을 발휘하고 함께 성장하길 희망합니다.",
    
    motivation: "비전공자(영어학 전공)로서 4차 산업혁명 시대의 코딩 중요성을 인지하고 온라인 강의를 통해 코딩에 흥미를 느꼈습니다. 이후 독학 및 국비 교육, 오픈 소스 프로젝트 참여를 통해 실전 경험을 쌓았고, 정보처리기사 필기 및 SQLD 자격증을 취득하며 전문성을 강화했습니다. 비전공자로서 다양한 시각에서 문제를 바라보고 창의적인 해결책을 제시하는 개발자가 되고자 합니다.",
    
    growth: "대학 시절 미국 교환학생 경험을 통해 경영학을 이수하며 문제 해결 능력과 분석적 사고를 키웠습니다. 언어와 문화 차이를 극복하고 다양한 배경의 친구들과 교류하며 시야를 넓히고 협업의 중요성을 배웠습니다. 이 경험은 코딩 학습에도 영향을 주었으며, 도전 정신과 끈기를 길렀습니다.",
    
    personality: {
      strength: "협업과 소통 능력. 미국 교환학생 및 국비 교육 프로젝트에서 PL 역할을 수행하며 팀원들과의 원활한 소통과 의견 조율을 통해 프로젝트를 성공적으로 이끈 경험이 있습니다.",
      weakness: "완벽주의 성향. 작업 속도가 느려지는 경향이 있어, 우선순위를 정하고 팀원들과 상의하여 빠르게 수정하는 연습을 통해 효율적으로 업무를 수행하고자 노력하고 있습니다."
    },
    
    currentJob: {
      company: "넷컴솔루션",
      position: "풀스택 개발자",
      status: "재직중"
    }
  },

  skills: {
    programming: ["Java", "Python", "JavaScript"],
    frameworks: ["Spring", "Spring Boot", "Flask", "React", "Next.js", "Vue.js", "Flutter", "Android", "RESTful API", "Ajax", "Java Swing", "Thymeleaf"],
    databases: ["MySQL", "Oracle", "PostgreSQL", "Redis", "MongoDB"],
    cloud: ["AWS", "Docker"],
    tools: ["IntelliJ IDEA", "PyCharm", "Android Studio", "VSCode", "Eclipse", "Git", "Maven/Gradle"],
    collaboration: ["Slack", "Notion", "Figma", "Discord"],
    servers: ["Apache Tomcat", "Gunicorn", "Node.js"],
    others: ["HTML", "CSS", "LLM", "Swagger"]
  },

  experience: [
    {
      company: "넷컴솔루션",
      position: "풀스택 개발자",
      period: "2024.10 ~ 현재",
      description: "LGU+ MCS 시스템 유지보수 및 제네시스클라우드 콜시스템 개발",
      type: "employment",
      current: true
    },
    {
      company: "LittleBank",
      position: "프론트엔드 개발자 & PM",
      period: "2024.03 ~ 2024.07",
      description: "어린이 동기부여 모바일 앱 개발 및 프로젝트 관리",
      type: "project",
      skills: ["Flutter", "Dart", "Firebase", "Project Management"]
    },
    {
      company: "TripplAI",
      position: "프론트엔드 개발자 & PM",
      period: "2024.03 ~ 현재",
      description: "AI 기반 여행 추천 서비스 개발 및 프로젝트 관리",
      type: "project",
      current: true,
      skills: ["Next.js", "React", "TypeScript", "AI Integration"]
    },
    {
      company: "DevHub",
      position: "프론트엔드 개발자 & PM",
      period: "2024.06 ~ 2024.10",
      description: "개발자 커뮤니티 플랫폼 구축 및 프로젝트 리딩",
      type: "project",
      skills: ["React", "Node.js", "MongoDB", "Docker"]
    },
    {
      company: "CJ 산하",
      position: "해외 출장 담당자",
      period: "2022.12 ~ 2023.06",
      description: "미국 현지 프로젝트 관리 및 글로벌 비즈니스 커뮤니케이션",
      location: "미국",
      type: "employment"
    },
    {
      company: "Droplist",
      position: "네이버 스마트스토어 운영자",
      period: "2018.04 ~ 2024.01",
      description: "이커머스 플랫폼 운영 및 온라인 비즈니스 관리",
      type: "business"
    },
    {
      company: "영어학원",
      position: "영어 강사",
      period: "2017.06 ~ 2018.03",
      description: "초등학교 4학년부터 고등학교 3학년까지 영어 교육",
      type: "employment"
    }
  ],

  projects: [
    {
      title: "DevHub: 깃보다 쉽게 '형상관리'와 '코드리뷰'",
      period: "2024.06 ~ 2024.10",
      role: "프론트엔드 개발자 & PM",
      description: "깃(Git)보다 쉽고 편하게 형상관리를 하는 개발자 형상관리 사이트",
      features: [
        "AI 코드 리뷰 시스템: LLM 모델(Groq를 이용한 Llama API 사용)을 활용한 코드 품질, 최적화, 보안 취약점 식별 및 상세 피드백 제공. 응답 속도 개선 (0.45초)",
        "쪽지 알림 시스템: 준실시간 알림 구현을 위해 클라이언트에서 주기적으로 GET API 호출로 새 쪽지 확인",
        "배포: Flask와 Spring Boot 프로젝트를 Docker와 AWS(EC2, RDS, ElastiCache, Route53)를 이용해 배포"
      ],
      tech: ["React", "Python", "Flask", "Java", "Spring Boot", "Docker", "AWS", "MongoDB", "Redis"],
      challenges: [
        "이메일 API 전송 속도 문제: @Async 어노테이션을 활용한 비동기 방식으로 평균 0.017초로 단축",
        "AI 코드리뷰 시스템: Groq Llama API로 변경하여 응답 속도 0.45초 달성"
      ]
    },
    {
      title: "LittleBank",
      period: "2024.03 ~ 2024.07",
      role: "프론트엔드 개발자 & PM",
      description: "어린이를 위한 동기부여 모바일 애플리케이션",
      features: [
        "가상 은행 시스템 구현",
        "게이미피케이션을 통한 동기부여",
        "부모-자녀 연동 계좌 관리"
      ],
      tech: ["Flutter", "Dart", "Firebase", "Spring Boot", "MySQL", "AWS"],
      status: "Google Play Store 비공개 테스트 중"
    },
    {
      title: "TripplAI",
      period: "2024.03 ~ 현재",
      role: "프론트엔드 개발자 & PM",
      description: "AI 기반 맞춤형 여행 추천 서비스",
      features: [
        "AI를 활용한 개인화 여행 일정 생성",
        "실시간 여행 정보 제공",
        "사용자 선호도 기반 추천 알고리즘"
      ],
      tech: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "OpenAI API", "Vercel"],
      status: "관광 API 공모전 진출",
      link: "https://tripplai.vercel.app/"
    }
  ],

  education: [
    {
      school: "건국대학교",
      major: "영어학과, 경영학과",
      period: "~ 2018년 졸업",
      type: "학사"
    },
    {
      school: "미시시피 주립대학교 (미시시피)",
      major: "경영학과",
      period: "~ 2017년 졸업",
      type: "학사"
    },
    {
      school: "양천고등학교 (서울)",
      major: "인문계 이과",
      period: "2008.03 ~ 2011.02",
      type: "고등학교"
    }
  ],

  training: [
    {
      name: "빅데이터 기반 인공지능 융합서비스 개발자 양성 과정",
      organization: "KOSMO 소프트웨어인재개발원",
      period: "2024.03 ~ 2024.08.27",
      status: "수료"
    },
    {
      name: "경영학 과정",
      organization: "미시시피 주립대학교",
      period: "2017.01 ~ 2017.07",
      status: "이수"
    }
  ],

  certificates: [
    {
      name: "SQLD 개발자 자격증",
      date: "2024년",
      status: "취득"
    },
    {
      name: "정보처리기사",
      date: "2024년 05월 17일",
      status: "필기 합격 (실기 진행 중)"
    },
    {
      name: "TOEIC",
      score: "900점",
      status: "만료"
    }
  ],

  goals: [
    "지속적인 학습과 성장: 빠르게 변화하는 IT 분야에서 새로운 기술과 트렌드를 지속적으로 학습",
    "팀워크와 협업 강화: 글로벌 커뮤니케이션 및 협업 정신을 바탕으로 팀원들과의 원활한 협업",
    "창의적 문제 해결: 경영학에서 배운 분석적 사고와 문제 해결 능력을 프로그래밍에 적용",
    "책임감과 성실함: 맡은 업무에 책임감을 가지고 성실하게 수행",
    "고객 중심의 서비스 제공: 고객의 요구를 정확히 이해하고 만족시키는 서비스 제공"
  ]
};