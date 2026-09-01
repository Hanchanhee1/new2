document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ko: {
      title: '한찬희 | Backend Developer',
      brand: { name: '한찬희' },
      nav: { about: '소개', experience: '경력', projects: '프로젝트', skills: '기술 스택', contact: '연락처' },
      hero: {
        eyebrow: 'Junior Backend Developer',
        line1: '기초를 지키며 문제를 해결하는',
        name: '백엔드 개발자 한찬희',
        copy1: '한 걸음씩 쌓아 올린 경험을 바탕으로,',
        copy2: '문제를 해결하고 서비스를 만드는 백엔드 개발자 입니다.',
        copy3: '작은 호기심에서 시작해 팀 프로젝트를 통해 개발 흐름을 배우고, 꾸준히 성장해왔습니다.',
        copy4: '사용자의 입장에서 고민하고, 팀과 함께 더 나은 답을 찾아가는 개발자가 되겠습니다.',
        cta: '포트폴리오 보기'
      },
      about: {
        label: '소개',
        intro1: 'Spring Boot로 RESTful API를 설계하고 데이터베이스를 모델링하며,',
        intro2: 'AI 기술을 웹 서비스에 통합해왔습니다.',
        intro3: '클라우드 기반 배포와 운영 경험을 바탕으로',
        intro4: '실제 서비스에 필요한 기능을 안정적으로 구현하는 역량을 쌓았습니다.',
        intro5: '16개월의 교육 과정과 4개의 프로젝트를 통해 웹 개발의 기초를 다졌고,',
        intro6: '팀장 경험과 해외 근무를 통해 협업과 적응력을 키웠습니다.',
        intro7: '실제 운영 서비스를 유지보수하며 안정적인 서비스 운영의 중요성도 함께 배웠습니다.',
        stats: { team: '팀 프로젝트', lead: '리더 경험', work: '실무 경험', values: { team: '4건', lead: '3회', work: '2회' } }
      },
      experience: {
        label: '경력',
        title: '교육 및 경력',
        items: {
          qb: {
            company: '주식회사 큐비언트위드',
            tag: '인턴',
            description: '국가미세먼지 정보센터 파견 프로젝트에서 SI 개발 및 운영 지원 업무를 맡아 데이터 수정, 장애 대응, 요구사항 반영, 쿼리 개선을 수행하며 서비스 안정성과 운영 흐름 개선에 기여했습니다.'
          },
          ai: {
            company: '스마트인재개발원 AI 서비스 엔지니어 과정',
            tag: '수료',
            description: 'Java, Python, JavaScript, MySQL, Spring Boot, React, ML/DL, MLOps를 학습하고 3건의 팀 프로젝트를 수행하며 실무형 백엔드와 AI 연동 역량을 키웠습니다. 여러 프로젝트에서 팀장을 맡아 일정 관리와 협업을 주도하며 작업 흐름을 정리했습니다.'
          },
          devfox: {
            company: '株式会社DEVFOX',
            tag: '일본 근무',
            description: '2024년 7월에 내정받아 2025년 2월에 일본으로 출국해 개발팀에서 근무했습니다. 단위 테스트 사양서 작성, 버그 수정, 오류 원인 확인 및 결과 정리 등 문제 분석과 품질 개선 업무를 수행하며 서비스 안정성을 높이는 흐름을 익혔습니다.'
          },
          jsl: {
            company: 'JSL인재개발원 Cloud 연계 웹 개발자 과정',
            tag: '수료',
            description: 'Java, Spring, MyBatis, Oracle, JSP를 기반으로 웹 개발의 기초를 다졌고, 타베타비와 POPPYRED 프로젝트를 통해 서버 개발, DB 설계, 요구사항 분석을 실습하며 실제 서비스 구현 흐름을 익혔습니다.'
          }
        }
      },
      projects: {
        label: '프로젝트',
        title: '대표 프로젝트',
        items: {
          cheong: {
            category: '취업 지원 플랫폼',
            badge: '우수상',
            name: '청취',
            description: '취업 준비 과정에서 정보가 분산돼 준비 흐름이 비효율적이었던 문제를 해결하기 위해 음성 면접, 상담 챗봇, 이력서 첨삭, 일정 관리 기능을 통합한 플랫폼을 구현했습니다.'
          },
          aimae: {
            category: 'AI 쇼핑몰',
            badge: '최우수상',
            name: 'AIMAE',
            description: '상품 탐색 시 이미지와 텍스트 정보가 분리되어 비교가 어려웠던 문제를, 멀티모달 AI 추천 기능을 통해 사용자가 빠르게 선택할 수 있도록 개선했습니다.'
          },
          poppy: {
            category: '카페 플랫폼',
            badge: '우수상',
            name: 'POPPYRED',
            description: '카페 운영과 고객 경험이 분산되어 있었던 문제를 해결하기 위해 메뉴, 주문, 예약, 리뷰 흐름을 통합한 플랫폼을 설계하고 구현했습니다.'
          },
          tabetabi: {
            category: '일본 관광 플랫폼',
            badge: '최우수상',
            name: '타베타비',
            description: '일본인 관광객이 한국 맛집 정보를 찾는 과정에서 정보 탐색이 불편했던 문제를, 일본어 UI와 직관적인 정보 구조로 개선해 사용자 경험을 높였습니다.'
          }
        }
      },
      skills: { label: '기술 스택', title: '기술 스택' },
      contact: { label: '연락처' }
    },
    ja: {
      title: '한찬희 | Backend Developer',
      brand: { name: 'ハン チャンヒ' },
      nav: { about: '紹介', experience: '経歴', projects: 'プロジェクト', skills: '技術スタック', contact: '連絡先' },
      hero: {
        eyebrow: 'Junior Backend Developer',
        line1: '基礎を守りながら問題を解決する',
        name: 'バックエンド開発者 ハン チャンヒ',
        copy1: '一歩ずつ積み上げた経験をもとに、',
        copy2: '問題を解決しサービスを作るバックエンド開発者です。',
        copy3: '小さな好奇心から始まり、チームプロジェクトを通して開発の流れを学び、着実に成長してきました。',
        copy4: 'ユーザーの視点で考え、チームとともにより良い答えを見つけていく開発者になりたいです。',
        cta: 'ポートフォリオを見る'
      },
      about: {
        label: '紹介',
        intro1: 'Spring BootでRESTful APIを設計し、データベースをモデル化しながら、',
        intro2: 'AI技術をWebサービスに統合してきました。',
        intro3: 'クラウドを活用したデプロイと運用の経験を基に、',
        intro4: '実際のサービスに必要な機能を安定して実装する力を身につけてきました。',
        intro5: '16か月の教育過程と4つのプロジェクトを通して、Web開発の基礎を固め、',
        intro6: 'チームリーダー経験と海外勤務を通じて協調性と適応力を育ててきました。',
        intro7: '実際の運用サービスの保守と改善を経験し、安定したサービス運用の重要性も学びました。',
        stats: { team: 'チームプロジェクト', lead: 'リーダー経験', work: '実務経験', values: { team: '4件', lead: '3回', work: '2回' } }
      },
      experience: {
        label: '経歴',
        title: '教育と経歴',
        items: {
          qb: {
            company: '株式会社QubientWith',
            tag: 'インターン',
            description: '国家微細粉塵情報センター派遣プロジェクトでSI開発および運用支援業務に携わり、データ修正、障害対応、要件反映、クエリ改善を実施し、サービス安定性と運用フローの改善に貢献しました。'
          },
          ai: {
            company: 'スマート人材開発院 AIサービスエンジニア過程',
            tag: '修了',
            description: 'Java、Python、JavaScript、MySQL、Spring Boot、React、ML/DL、MLOpsを学習し、3件のチームプロジェクトを通して実務型バックエンドとAI連携の能力を高めました。複数プロジェクトでチームリーダーを務め、スケジュール管理と協業を主導しました。'
          },
          devfox: {
            company: '株式会社DEVFOX',
            tag: '日本勤務',
            description: '2024年7月に内定を受け、2025年2月に日本へ出国して開発チームで勤務しました。単体テスト仕様書の作成、バグ修正、原因確認と結果整理など、問題分析と品質改善業務を行い、サービス安定化の流れを学びました。'
          },
          jsl: {
            company: 'JSL人材開発院 Cloud連携Web開発者過程',
            tag: '修了',
            description: 'Java、Spring、MyBatis、Oracle、JSPを基盤にWeb開発の基礎を学び、タベタビとPOPPYREDプロジェクトを通してサーバー開発、DB設計、要件分析を実習しました。'
          }
        }
      },
      projects: {
        label: 'プロジェクト',
        title: '代表プロジェクト',
        items: {
          cheong: {
            category: '就職支援プラットフォーム',
            badge: '優秀賞',
            name: '청취',
            description: '就職準備の過程で情報が分散し、準備の流れが非効率だった問題を解決するため、音声面接、相談チャットボット、履歴書添削、スケジュール管理機能を統合したプラットフォームを実装しました。'
          },
          aimae: {
            category: 'AIショッピングモール',
            badge: '最優秀賞',
            name: 'AIMAE',
            description: '商品探索時に画像とテキスト情報が分離され、比較しにくかった問題を、マルチモーダルAI推薦機能でユーザーが迅速に選択できるよう改善しました。'
          },
          poppy: {
            category: 'カフェプラットフォーム',
            badge: '優秀賞',
            name: 'POPPYRED',
            description: 'カフェ運営と顧客体験が分散していた問題を解決するため、メニュー、注文、予約、レビューの流れを統合したプラットフォームを設計し実装しました。'
          },
          tabetabi: {
            category: '日本観光プラットフォーム',
            badge: '最優秀賞',
            name: 'タベタビ',
            description: '日本人観光客が韓国の飲食店情報を探す過程で情報探索が不便だった問題を、日本語UIと直感的な情報構造で改善し、ユーザー体験を向上させました。'
          }
        }
      },
      skills: { label: '技術スタック', title: '技術スタック' },
      contact: { label: '連絡先' }
    }
  };

  const getNestedValue = (obj, path) => path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

  const applyTranslations = (lang) => {
    const content = translations[lang];
    if (!content) return;

    document.documentElement.lang = lang;
    document.title = content.title;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = getNestedValue(content, element.dataset.i18n);
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      applyTranslations(button.dataset.lang);
    });
  });

  applyTranslations('ko');

  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 110;

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function createParticle() {
    const rect = canvas.parentElement.getBoundingClientRect();
    return {
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.15,
      phase: Math.random() * Math.PI * 2
    };
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) particles.push(createParticle());
  }

  function drawParticles() {
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.phase += 0.02;

      if (p.x < 0 || p.x > rect.width) p.vx *= -1;
      if (p.y < 0 || p.y > rect.height) p.vy *= -1;

      const pulse = 0.8 + Math.sin(p.phase) * 0.45;
      ctx.beginPath();
      ctx.fillStyle = `rgba(17,17,17,${p.alpha * pulse})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  initParticles();
  drawParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
});
