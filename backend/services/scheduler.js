const cron = require('node-cron');
const Visitor = require('../models/Visitor');

class SchedulerService {
  constructor() {
    this.jobs = [];
  }

  // 스케줄러 시작
  start() {
    console.log('🕐 스케줄러 서비스 시작...');

    // 1. 매일 새벽 2시에 한달 이전 데이터 삭제
    const cleanupJob = cron.schedule('0 2 * * *', async () => {
      try {
        console.log('🧹 한달 이전 방문자 데이터 정리 시작...');
        const result = await Visitor.cleanupOldData();
        console.log(`✅ 데이터 정리 완료: 일별통계 ${result.deletedDailyRecords}건, IP기록 ${result.deletedIpRecords}건 삭제`);
      } catch (error) {
        console.error('❌ 데이터 정리 중 오류:', error);
      }
    }, {
      scheduled: false, // 수동으로 시작
      timezone: "Asia/Seoul"
    });

    // 2. 매주 일요일 새벽 3시에 통계 요약 로그 출력
    const weeklyStatsJob = cron.schedule('0 3 * * 0', async () => {
      try {
        console.log('📊 주간 방문자 통계 요약...');
        const stats = await Visitor.getAllTimeStats();
        
        console.log('='.repeat(50));
        console.log('📈 주간 방문자 통계 요약');
        console.log('='.repeat(50));
        console.log(`총 방문 수: ${stats.total.total_visits || 0}회`);
        console.log(`총 유니크 방문자: ${stats.total.total_unique_visitors || 0}명`);
        console.log(`기록 시작일: ${stats.total.first_visit_date || '없음'}`);
        console.log(`최근 방문일: ${stats.total.last_visit_date || '없음'}`);
        console.log('='.repeat(50));
        
        if (stats.recentWeek && stats.recentWeek.length > 0) {
          console.log('📅 최근 7일 방문 현황:');
          stats.recentWeek.forEach(day => {
            console.log(`  ${day.visit_date}: ${day.visit_count}회 방문 (유니크: ${day.unique_visitors}명)`);
          });
          console.log('='.repeat(50));
        }
      } catch (error) {
        console.error('❌ 주간 통계 조회 중 오류:', error);
      }
    }, {
      scheduled: false,
      timezone: "Asia/Seoul"
    });

    // 3. 매월 1일 새벽 4시에 월별 통계 로그 출력
    const monthlyStatsJob = cron.schedule('0 4 1 * *', async () => {
      try {
        const now = new Date();
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const year = lastMonth.getFullYear();
        const month = lastMonth.getMonth() + 1;
        
        console.log(`📊 ${year}년 ${month}월 방문자 통계...`);
        const monthlyStats = await Visitor.getMonthlyStats(year, month);
        
        console.log('='.repeat(60));
        console.log(`📈 ${year}년 ${month}월 방문자 통계`);
        console.log('='.repeat(60));
        console.log(`월 총 방문 수: ${monthlyStats.totalVisits}회`);
        console.log(`월 총 유니크 방문자: ${monthlyStats.totalUniqueVisitors}명`);
        console.log(`기록된 일수: ${monthlyStats.recordCount}일`);
        
        if (monthlyStats.recordCount > 0) {
          const avgDaily = Math.round(monthlyStats.totalVisits / monthlyStats.recordCount);
          const avgUniqueDaily = Math.round(monthlyStats.totalUniqueVisitors / monthlyStats.recordCount);
          console.log(`일평균 방문 수: ${avgDaily}회`);
          console.log(`일평균 유니크 방문자: ${avgUniqueDaily}명`);
        }
        console.log('='.repeat(60));
        
      } catch (error) {
        console.error('❌ 월별 통계 조회 중 오류:', error);
      }
    }, {
      scheduled: false,
      timezone: "Asia/Seoul"
    });

    // 4. 매시간 정각에 현재 상태 체크 (개발용 - 운영시 비활성화 권장)
    const hourlyHealthCheck = cron.schedule('0 * * * *', async () => {
      try {
        const todayStats = await Visitor.getTodayVisits();
        const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
        console.log(`⏰ [${now}] 오늘 방문자: ${todayStats.visit_count || 0}회 (유니크: ${todayStats.unique_visitors || 0}명)`);
      } catch (error) {
        console.error('❌ 시간당 상태 체크 오류:', error);
      }
    }, {
      scheduled: false,
      timezone: "Asia/Seoul"
    });

    // 작업들을 배열에 저장
    this.jobs = [
      { name: 'cleanup', job: cleanupJob, description: '한달 이전 데이터 삭제 (매일 02:00)' },
      { name: 'weeklyStats', job: weeklyStatsJob, description: '주간 통계 요약 (일요일 03:00)' },
      { name: 'monthlyStats', job: monthlyStatsJob, description: '월별 통계 요약 (매월 1일 04:00)' },
      { name: 'healthCheck', job: hourlyHealthCheck, description: '시간당 상태 체크 (매시간 정각)' }
    ];

    // 모든 작업 시작
    this.jobs.forEach(({ name, job, description }) => {
      job.start();
      console.log(`✅ ${name} 스케줄 시작: ${description}`);
    });

    console.log(`🎯 총 ${this.jobs.length}개의 스케줄 작업이 시작되었습니다.`);
  }

  // 스케줄러 정지
  stop() {
    console.log('🛑 스케줄러 서비스 정지...');
    this.jobs.forEach(({ name, job }) => {
      job.stop();
      console.log(`⏹️ ${name} 스케줄 정지`);
    });
    console.log('✅ 모든 스케줄 작업이 정지되었습니다.');
  }

  // 현재 실행 중인 스케줄 목록 조회
  getActiveSchedules() {
    return this.jobs.map(({ name, description, job }) => ({
      name,
      description,
      running: job.running
    }));
  }

  // 수동으로 데이터 정리 실행
  async runCleanupNow() {
    try {
      console.log('🧹 수동 데이터 정리 실행...');
      const result = await Visitor.cleanupOldData();
      console.log(`✅ 수동 정리 완료: 일별통계 ${result.deletedDailyRecords}건, IP기록 ${result.deletedIpRecords}건 삭제`);
      return result;
    } catch (error) {
      console.error('❌ 수동 데이터 정리 오류:', error);
      throw error;
    }
  }

  // 수동으로 통계 조회 실행
  async runStatsNow() {
    try {
      console.log('📊 수동 통계 조회 실행...');
      const stats = await Visitor.getAllTimeStats();
      const todayStats = await Visitor.getTodayVisits();
      
      return {
        today: todayStats,
        allTime: stats.total,
        recentWeek: stats.recentWeek
      };
    } catch (error) {
      console.error('❌ 수동 통계 조회 오류:', error);
      throw error;
    }
  }
}

// 싱글톤 인스턴스 생성
const schedulerService = new SchedulerService();

module.exports = schedulerService;
