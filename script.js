/* ================================================
   CogniSim Tech - Interaction Script + i18n
   ================================================ */

(function () {
  'use strict';

  /* ===== Translation Dictionary ===== */
  var i18n = {
    en: {
      'brand-name': 'CogniSim',
      'brand-sub': 'COGNISIM TECH',
      'nav-research': 'RESEARCH',
      'nav-products': 'PRODUCTS',
      'nav-protocol': 'PROTOCOL',
      'nav-media': 'MEDIA',
      'lang-btn': '中文',
      'hero-title': 'CogniSim',
      'hero-subtitle': 'Building the infrastructure for intelligent agents<br>while advancing the science of intelligence.',
      'research-label': '01 / RESEARCH',
      'research-title': 'Aris Science and<br>Technology Research Center',
      'research-body': 'We explore the origins of consciousness through computational neuroscience,<br>brain-computer interfaces, and augmented reality. Our research feeds directly<br>into the products and protocols we build.',
      'research-dir1-title': 'Computational Neuroscience',
      'research-dir1-desc': 'The theoretical foundation. Mathematical models of neural information processing.',
      'research-dir2-title': 'Brain-Computer Interface',
      'research-dir2-desc': 'Connecting consciousness to the external world. A key collaboration direction.',
      'research-dir3-title': 'Augmented Reality',
      'research-dir3-desc': 'The display layer of consciousness connection. Full reality rendering.',
      'products-label': '02 / PRODUCTS',
      'products-body': 'An AI content platform powered by multi-agent collaboration.<br>Built on the Agent Harness architecture and communicating via the Mesh protocol.',
      'products-f1': 'Multi-Agent Collaboration',
      'products-f2': 'Mesh Protocol Communication',
      'products-f3': 'Intelligent Content Orchestration',
      'products-link': 'Visit ContentX →',
      'protocol-label': '03 / PROTOCOL',
      'protocol-body': 'A communication protocol for AI agents. Mesh enables discovery, authentication,<br>collaboration, and data exchange between intelligent agents in a decentralized manner.',
      'protocol-d1-label': 'DISCOVERY',
      'protocol-d1-desc': 'Decentralized agent discovery',
      'protocol-d2-label': 'AUTHENTICATION',
      'protocol-d2-desc': 'Secure identity verification',
      'protocol-d3-label': 'INTEROPERABILITY',
      'protocol-d3-desc': 'Standardized protocol layer',
      'protocol-link': 'SuiMesh Documentation →',
      'media-label': '04 / MEDIA',
      'media-body': 'Our media brand publishing research insights, technical thinking, and industry perspectives.<br>BiRan INEV also serves as a real-world validation ground for ContentX.',
      'media-link': 'Visit BiRan INEV →',
      'about-label': 'ABOUT',
      'about-title': 'CogniSim<br>Technology Co., Ltd.',
      'about-body': 'Founded in Shenzhen, CogniSim Tech is an angel-stage AI company.<br>We believe the next breakthrough in technology will emerge at the intersection of<br>consciousness science and intelligent systems.',
      'loc-shenzhen': 'Shenzhen — HQ',
      'loc-chongqing': 'Chongqing — R&D',
      'loc-shanghai': 'Shanghai — R&D',
      'careers-label': 'CAREERS',
      'careers-title': 'Join Us',
      'careers-body': 'We are a small, flat team with high autonomy.<br>If you are passionate about AI agents, computational neuroscience, or frontier technology,<br>we would love to hear from you.',
      'role1': 'AI Agent Engineer',
      'role2': 'Computational Neuroscience Researcher',
      'role3': 'ContentX Product Manager',
      'careers-link': 'Send Resume →',
      'contact-label': 'CONTACT',
      'contact-title': 'Get in Touch',
      'contact-email-label': 'EMAIL',
      'contact-github-label': 'GITHUB',
      'contact-hq-label': 'HEADQUARTERS',
      'contact-hq-value': 'Futian District, Shenzhen',
      'footer-brand': 'CogniSim',
      'footer-copy': '© 2024–2026 CogniSim Technology Co., Ltd.'
    },
    zh: {
      'brand-name': '维境拟生',
      'brand-sub': '深圳市维境拟生科技',
      'nav-research': '研究',
      'nav-products': '产品',
      'nav-protocol': '协议',
      'nav-media': '媒体',
      'lang-btn': 'EN',
      'hero-title': '维境拟生',
      'hero-subtitle': '构建智能体基础设施<br>推进智能科学的边界。',
      'research-label': '01 / 研究',
      'research-title': '阿里斯科学技术<br>研究中心',
      'research-body': '我们通过计算神经科学、脑机接口和增强现实探索意识的起源。<br>研究成果直接反哺我们构建的产品与协议。',
      'research-dir1-title': '计算神经科学',
      'research-dir1-desc': '理论基石。神经信息处理的数学模型。',
      'research-dir2-title': '脑机接口（BCI）',
      'research-dir2-desc': '将意识与外部世界连接。核心合作方向。',
      'research-dir3-title': '增强现实（AR）',
      'research-dir3-desc': '意识连接的显示层。完整现实呈现。',
      'products-label': '02 / 产品',
      'products-body': '基于多智能体协作的 AI 内容平台。<br>构建于 Agent Harness 架构之上，通过 Mesh 协议通信。',
      'products-f1': '多智能体协作',
      'products-f2': 'Mesh 协议通信',
      'products-f3': '智能内容编排',
      'products-link': '访问 ContentX →',
      'protocol-label': '03 / 协议',
      'protocol-body': '面向 AI 智能体的通信协议。Mesh 实现去中心化的智能体发现、认证、<br>协作与数据交换。',
      'protocol-d1-label': '发现',
      'protocol-d1-desc': '去中心化智能体发现',
      'protocol-d2-label': '认证',
      'protocol-d2-desc': '安全身份验证',
      'protocol-d3-label': '互操作',
      'protocol-d3-desc': '标准化协议层',
      'protocol-link': 'SuiMesh 文档 →',
      'media-label': '04 / 媒体',
      'media-body': '发布研究洞察、技术思考与行业洞察的媒体品牌。<br>BiRan INEV 同时也是 ContentX 的真实验证场景。',
      'media-link': '访问 BiRan INEV →',
      'about-label': '关于',
      'about-title': '深圳市维境拟生<br>科技有限公司',
      'about-body': '维境拟生科技成立于深圳，是一家天使轮阶段的人工智能公司。<br>我们相信，下一代技术突破将发生在意识科学与智能系统的交汇处。',
      'loc-shenzhen': '深圳 — 总部',
      'loc-chongqing': '重庆 — 研发中心',
      'loc-shanghai': '上海 — 研发中心',
      'careers-label': '招聘',
      'careers-title': '加入我们',
      'careers-body': '我们是一支小而精的团队，拥有扁平的管理结构与高度自由。<br>如果你对 AI 智能体、计算神经科学或前沿技术充满热情，欢迎加入。',
      'role1': 'AI 智能体工程师',
      'role2': '计算神经科学研究员',
      'role3': 'ContentX 产品经理',
      'careers-link': '投递简历 →',
      'contact-label': '联系',
      'contact-title': '联系我们',
      'contact-email-label': '邮箱',
      'contact-github-label': 'GitHub',
      'contact-hq-label': '总部',
      'contact-hq-value': '深圳市福田区',
      'footer-brand': '维境拟生',
      'footer-copy': '© 2024–2026 深圳市维境拟生科技有限公司'
    }
  };

  var currentLang = 'en';

  /* ===== i18n Engine ===== */
  function applyTranslations(lang) {
    var dict = i18n[lang];
    if (!dict) return;

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // HTML nodes (with <br>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });
  }

  /* ===== Language Toggle ===== */
  var langBtn = document.getElementById('langBtn');

  langBtn.addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    document.documentElement.lang = currentLang;
    document.body.classList.toggle('lang-zh', currentLang === 'zh');
    applyTranslations(currentLang);
    langBtn.textContent = i18n[currentLang]['lang-btn'];
  });

  /* ===== Navigation ===== */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var navLinkItems = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ===== Scroll Reveal ===== */
  function initReveal() {
    var revealElements = document.querySelectorAll(
      '.section-inner, .research-item, .pf-item, .pd-item, .role, .contact-item'
    );

    revealElements.forEach(function (el) {
      el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ===== Smooth scroll for anchor links ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ===== Init ===== */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    applyTranslations('en');
  });
})();
