export const currentWorkData = {
    company: {
      name: "넷컴솔루션",
      position: "풀스택 개발자",
      period: "2024.10 ~ 현재",
      department: "개발팀",
      description: "LGU+ 통신 시스템 및 다양한 관리 시스템 개발 및 유지보수"
    },
  
    projects: [
      {
        title: "PMK 제네시스 콜시스템 장애이력 관리시스템",
        period: "2024.10 ~ 현재",
        role: "풀스택 개발자",
        company: "넷컴솔루션",
        client: "Philip Morris Korea (PMK)",
        description: "필립모리슨코리아 제네시스 콜센터 시스템의 장애 발생을 실시간으로 모니터링하고 이력을 체계적으로 관리하는 운영 대시보드",
        details: [
          "실시간 콜센터 시스템 상태 모니터링",
          "장애 발생 시 즉시 알림 및 로깅",
          "장애 이력 데이터베이스 체계적 관리",
          "장애 원인 분석 및 통계 보고서 생성",
          "복구 시간 및 장애 패턴 분석",
          "콜시스템 매니지먼트 웹 시스템 구축"
        ],
        achievements: [
          "콜센터 시스템 가용성 99.5% 달성",
          "장애 대응 시간 평균 5분 이내로 단축",
          "관리자 모니터링 효율성 60% 향상"
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "D3.js", "WebSocket", "MySQL"],
        status: "운영 중",
        type: "management",
        link: "/project/dashboard"
      },
      {
        title: "LittleBank 어드민 결제관리시스템",
        period: "2024.09 ~ 2024.10",
        role: "풀스택 개발자", 
        company: "프리랜서",
        client: "LittleBank",
        description: "리틀뱅크 모바일 앱의 입출금 내역 조회 및 결제 프로세스를 효율적으로 관리하는 어드민 페이지 (프리랜서 프로젝트)",
        details: [
          "실시간 결제 내역 모니터링 및 조회",
          "사용자별 입출금 거래 이력 관리",
          "결제 승인/거절 프로세스 관리",
          "결제 오류 로그 추적 및 분석",
          "정산 보고서 자동 생성 기능"
        ],
        achievements: [
          "결제 처리 정확도 99.9% 달성",
          "관리자 업무 처리 시간 50% 단축",
          "프리랜서 프로젝트 성공적 완료"
        ],
        tech: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Bootstrap", "MySQL"],
        status: "완료",
        type: "freelance",
        link: "/project/dashboard"
      },
      {
        title: "LGU+ Visual Ring Biz 시스템 유지보수",
        period: "2024.10 ~ 현재", 
        role: "백엔드 개발자 & 보안 엔지니어",
        company: "넷컴솔루션",
        client: "LG유플러스",
        description: "LGU+ Visual Ring Biz 서비스의 안정적인 운영을 위한 시스템 유지보수 및 대규모 보안 취약점 개선 작업을 담당하고 있습니다.",
        details: [
          "웹 애플리케이션 보안 취약점 분석 및 개선: EgovGpkiVariables.js 파일의 민감한 정보 노출 문제 해결",
          "리소스 접근 제어 시스템 구축: ResourceAccessFilter를 통한 민감한 JS 파일 접근 제어",
          "보안 헤더 필터 구현: XSS 방지, 클릭재킹 방지, MIME 스니핑 방지 등 다양한 보안 헤더 적용",
          "동적 GPKI 설정 시스템: 민감한 설정 정보를 정적 파일에서 동적 API로 변경하여 보안 강화",
          "Spring Framework 기반 웹 애플리케이션 유지보수 및 성능 최적화",
          "Apache Tomcat 8.0.43 기반 레거시 시스템 보안 강화",
          "컨택센터 시스템 안정성 유지: 기존 기능 영향 없이 보안 개선 작업 완료",
          "시스템 장애 분석 및 신속한 해결, 정기적인 보안 점검"
        ],
        achievements: [
          "보안 취약점 100% 해결: 민감한 정보 노출 완전 차단 (HTTP 404 응답)",
          "제로 다운타임 보안 강화: 서비스 중단 없이 보안 개선 작업 완료",
          "포괄적 보안 체계 구축: 접근 제어, 보안 헤더, 동적 설정 관리의 3단계 보안 체계 구현",
          "월평균 99.8% 시스템 안정성 유지 및 보안 수준 대폭 향상"
        ],
        challenges: [
          "보안 개선과 기능 유지의 균형: 기존 GPKI 인증 기능을 손상시키지 않으면서 보안 취약점을 해결",
          "레거시 시스템 보안 강화: Apache Tomcat 8.0.43 기반의 오래된 시스템에 최신 보안 기준 적용",
          "민감 정보 노출 차단: 서버 인증서, 내부 IP 주소 등의 민감한 정보 완전 차단"
        ],
        tech: ["Java", "Spring Framework", "Spring Security", "Spring Data JPA", "Hibernate", "QueryDSL", "Oracle", "JavaScript", "JSP", "Apache Tomcat", "Maven/Gradle", "GPKI", "보안 필터", "세션 관리"],
        status: "진행 중",
        type: "maintenance"
      }
    ],
  
    skills: {
      primary: ["Java", "JavaScript", "HTML5", "CSS3", "SQL"],
      frameworks: ["Spring Framework", "Spring Boot", "Bootstrap"],
      databases: ["Oracle", "MySQL"],
      tools: ["IntelliJ IDEA", "Eclipse", "Git", "Linux"],
      others: ["WebSocket", "Chart.js", "D3.js", "Apache Tomcat"]
    },
  
    workEnvironment: {
      teamSize: "5명",
      methodology: "애자일",
      collaboration: ["Slack", "Git", "Notion"],
      responsibilities: [
        "시스템 분석 및 설계",
        "백엔드/프론트엔드 개발",
        "데이터베이스 설계 및 최적화",
        "시스템 유지보수 및 장애 대응",
        "코드 리뷰 및 품질 관리"
      ]
    }
  };