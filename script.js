/* ================================================
   CogniSim — Interaction Script + i18n
   ================================================ */

(function () {
  'use strict';

  /* ===== Translation Dictionary ===== */
  var i18n = {
    en: {
      'brand-name': 'CogniSim',
      'nav-research': 'Research',
      'nav-products': 'Products',
      'nav-protocol': 'Protocol',
      'nav-about': 'About',
      'nav-careers': 'Careers',
      'nav-cta': 'Contact',
      'lang-btn': '\u4E2D\u6587',
      'hero-title': 'Simplify your<br>intelligence with CogniSim',
      'hero-subtitle': 'Advancing the next generation of intelligent systems through research and engineering across artificial intelligence, collaborative agent systems, and computational neuroscience.',
      'hero-cta': 'Get started',
      'hero-footnote': 'WeiJing CogniSim \u2014 Research and engineering for intelligent systems.',
      'research-title': 'Research that powers<br>intelligent systems',
      'research-body': 'WeiJing CogniSim is dedicated to advancing the next generation of intelligent systems through research and engineering across artificial intelligence, collaborative agent systems, and computational neuroscience.',
      'research-link': 'Read more',
      'f1-title': 'Multi-Agent Systems',
      'f1-desc': 'Architectures and communication mechanisms that enable multiple AI agents to collaborate toward shared objectives.',
      'f2-title': 'AI Agent Infrastructure',
      'f2-desc': 'Persistent context, memory, workflow orchestration, tool integration, and scalable execution environments for long-running intelligent agents.',
      'f3-title': 'Behavior Audit Layer',
      'f3-desc': 'A computational framework for recording, understanding, evaluating, and optimizing agent behaviors across complex workflows, providing transparency, traceability, and continuous improvement for collaborative AI systems.',
      'f4-title': 'Content Intelligence',
      'f4-desc': 'Intelligent workflows that transform research, planning, writing, editing, and publishing into collaborative multi-agent processes.',
      'f5-title': 'Computational Neuroscience',
      'f5-desc': 'Computational models of cognition, learning, memory, and decision-making that inspire future intelligent systems.',
      'f6-title': 'Brain\u2013Computer Interfaces',
      'f6-desc': 'Research into next-generation human\u2013computer interaction and neural interfaces, enabling more natural communication between humans and intelligent systems.',
      'products-label': 'Products',
      'products-title': 'Where research meets application',
      'products-body': 'An AI content platform powered by multi-agent collaboration. Built on the Agent Harness architecture and communicating via the Mesh protocol.',
      'ptag1': 'Multi-Agent',
      'ptag2': 'Mesh Protocol',
      'ptag3': 'Agent Harness',
      'products-link': 'Visit ContentX',
      'protocol-label': 'Protocol',
      'protocol-title': 'Mesh Protocol',
      'protocol-body': 'A communication protocol for AI agents. Mesh enables discovery, authentication, collaboration, and data exchange between intelligent agents in a decentralized manner.',
      'p1-label': 'Discovery',
      'p1-desc': 'Decentralized agent discovery without central registry.',
      'p2-label': 'Authentication',
      'p2-desc': 'Secure identity verification and encrypted channels.',
      'p3-label': 'Interoperability',
      'p3-desc': 'Standardized protocol layer for cross-platform communication.',
      'protocol-link': 'SuiMesh Documentation',
      'about-label': 'About',
      'about-title': 'CogniSim',
      'about-body': 'An artificial intelligence company based in Shenzhen.',
      'loc-shenzhen': 'Shenzhen',
      'careers-label': 'Careers',
      'careers-title': 'Join us',
      'careers-body': 'We are a small, flat team with high autonomy. If you are passionate about AI agents, computational neuroscience, or frontier technology, we would love to hear from you.',
      'role1-dept': 'Engineering',
      'role1': 'Agent Harness Engineer',
      'role1-desc': 'Build the runtime infrastructure for long-running intelligent agents.',
      'role2-dept': 'Research',
      'role2': 'AI Researcher',
      'role2-desc': 'Explore architectures for collaborative multi-agent intelligence.',
      'role3-dept': 'Product',
      'role3': 'Product Manager',
      'role3-desc': 'Shape products where agent technology meets real-world applications.',
      'careers-apply': 'Apply',
      'contact-label': 'Contact',
      'contact-title': 'Get in touch',
      'contact-email-label': 'Email',
      'contact-github-label': 'GitHub',
      'contact-hq-label': 'Headquarters',
      'contact-hq-value': 'Futian District, Shenzhen',
      'footer-brand': 'CogniSim',
      'footer-copy': '\u00A9 2024\u20132026 CogniSim Technology Co., Ltd.',
      'footer-fullname': '\u6DF1\u5733\u5E02\u7EF4\u5883\u62DF\u751F\u79D1\u6280\u6709\u9650\u516C\u53F8'
    },
    zh: {
      'brand-name': '\u7EF4\u5883\u62DF\u751F',
      'nav-research': '\u7814\u7A76',
      'nav-products': '\u4EA7\u54C1',
      'nav-protocol': '\u534F\u8BAE',
      'nav-about': '\u5173\u4E8E',
      'nav-careers': '\u62DB\u8058',
      'nav-cta': '\u8054\u7CFB',
      'lang-btn': 'EN',
      'hero-title': '\u4EE5 CogniSim<br>\u7B80\u5316\u4F60\u7684\u667A\u80FD',
      'hero-subtitle': '\u901A\u8FC7\u5728\u4EBA\u5DE5\u667A\u80FD\u3001\u534F\u4F5C\u667A\u80FD\u4F53\u7CFB\u7EDF\u548C\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u9886\u57DF\u7684\u7814\u7A76\u4E0E\u5DE5\u7A0B\uFF0C\u63A8\u8FDB\u4E0B\u4E00\u4EE3\u667A\u80FD\u7CFB\u7EDF\u7684\u53D1\u5C55\u3002',
      'hero-cta': '\u5F00\u59CB\u4E86\u89E3',
      'hero-footnote': '\u7EF4\u5883\u62DF\u751F \u2014 \u667A\u80FD\u7CFB\u7EDF\u7684\u7814\u7A76\u4E0E\u5DE5\u7A0B',
      'research-title': '\u9A71\u52A8\u667A\u80FD\u7CFB\u7EDF\u7684<br>\u524D\u6CBF\u7814\u7A76',
      'research-body': '\u7EF4\u5883\u62DF\u751F\u81F4\u529B\u4E8E\u901A\u8FC7\u5728\u4EBA\u5DE5\u667A\u80FD\u3001\u534F\u4F5C\u667A\u80FD\u4F53\u7CFB\u7EDF\u548C\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u9886\u57DF\u7684\u7814\u7A76\u4E0E\u5DE5\u7A0B\uFF0C\u63A8\u8FDB\u4E0B\u4E00\u4EE3\u667A\u80FD\u7CFB\u7EDF\u7684\u53D1\u5C55\u3002',
      'research-link': '\u4E86\u89E3\u66F4\u591A',
      'f1-title': '\u591A\u667A\u80FD\u4F53\u7CFB\u7EDF',
      'f1-desc': '\u4F7F\u591A\u4E2AAI\u667A\u80FD\u4F53\u534F\u4F5C\u5B9E\u73B0\u5171\u540C\u76EE\u6807\u7684\u67B6\u6784\u4E0E\u901A\u4FE1\u673A\u5236\u3002',
      'f2-title': 'AI\u667A\u80FD\u4F53\u57FA\u7840\u8BBE\u65BD',
      'f2-desc': '\u6301\u4E45\u4E0A\u4E0B\u6587\u3001\u8BB0\u5FC6\u3001\u5DE5\u4F5C\u6D41\u7F16\u6392\u3001\u5DE5\u5177\u96C6\u6210\uFF0C\u4EE5\u53CA\u53EF\u6269\u5C55\u7684\u6267\u884C\u73AF\u5883\uFF0C\u652F\u6301\u957F\u671F\u8FD0\u884C\u7684\u667A\u80FD\u4F53\u3002',
      'f3-title': '\u884C\u4E3A\u5BA1\u8BA1\u5C42',
      'f3-desc': '\u4E00\u79CD\u8BA1\u7B97\u6846\u67B6\uFF0C\u7528\u4E8E\u8BB0\u5F55\u3001\u7406\u89E3\u3001\u8BC4\u4F30\u548C\u4F18\u5316\u590D\u6742\u5DE5\u4F5C\u6D41\u4E2D\u7684\u667A\u80FD\u4F53\u884C\u4E3A\uFF0C\u4E3A\u534F\u4F5CAI\u7CFB\u7EDF\u63D0\u4F9B\u900F\u660E\u6027\u3001\u53EF\u8FFD\u6EAF\u6027\u548C\u6301\u7EED\u6539\u8FDB\u3002',
      'f4-title': '\u5185\u5BB9\u667A\u80FD',
      'f4-desc': '\u5C06\u7814\u7A76\u3001\u89C4\u5212\u3001\u5199\u4F5C\u3001\u7F16\u8F91\u548C\u51FA\u7248\u8F6C\u5316\u4E3A\u534F\u4F5C\u591A\u667A\u80FD\u4F53\u6D41\u7A0B\u7684\u667A\u80FD\u5DE5\u4F5C\u6D41\u3002',
      'f5-title': '\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66',
      'f5-desc': '\u8BA4\u77E5\u3001\u5B66\u4E60\u3001\u8BB0\u5FC6\u548C\u51B3\u7B56\u7684\u8BA1\u7B97\u6A21\u578B\uFF0C\u4E3A\u672A\u6765\u667A\u80FD\u7CFB\u7EDF\u63D0\u4F9B\u7075\u611F\u3002',
      'f6-title': '\u8111\u673A\u63A5\u53E3',
      'f6-desc': '\u4E0B\u4E00\u4EE3\u4EBA\u673A\u4EA4\u4E92\u4E0E\u795E\u7ECF\u63A5\u53E3\u7814\u7A76\uFF0C\u5B9E\u73B0\u4EBA\u7C7B\u4E0E\u667A\u80FD\u7CFB\u7EDF\u4E4B\u95F4\u66F4\u81EA\u7136\u7684\u901A\u4FE1\u3002',
      'products-label': '\u4EA7\u54C1',
      'products-title': '\u7814\u7A76\u843D\u5730\u7684\u5B9E\u8DF5\u573A',
      'products-body': '\u57FA\u4E8E\u591A\u667A\u80FD\u4F53\u534F\u4F5C\u7684AI\u5185\u5BB9\u5E73\u53F0\u3002\u6784\u5EFA\u4E8EAgent Harness\u67B6\u6784\u4E4B\u4E0A\uFF0C\u901A\u8FC7Mesh\u534F\u8BAE\u901A\u4FE1\u3002',
      'ptag1': '\u591A\u667A\u80FD\u4F53',
      'ptag2': 'Mesh\u534F\u8BAE',
      'ptag3': 'Agent Harness',
      'products-link': '\u8BBF\u95EE ContentX',
      'protocol-label': '\u534F\u8BAE',
      'protocol-title': 'Mesh \u534F\u8BAE',
      'protocol-body': '\u9762\u5411AI\u667A\u80FD\u4F53\u7684\u901A\u4FE1\u534F\u8BAE\u3002Mesh\u5B9E\u73B0\u53BB\u4E2D\u5FC3\u5316\u7684\u667A\u80FD\u4F53\u53D1\u73B0\u3001\u8BA4\u8BC1\u3001\u534F\u4F5C\u4E0E\u6570\u636E\u4EA4\u6362\u3002',
      'p1-label': '\u53D1\u73B0',
      'p1-desc': '\u53BB\u4E2D\u5FC3\u5316\u667A\u80FD\u4F53\u53D1\u73B0\uFF0C\u65E0\u9700\u4E2D\u5FC3\u6CE8\u518C\u8868\u3002',
      'p2-label': '\u8BA4\u8BC1',
      'p2-desc': '\u5B89\u5168\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4E0E\u52A0\u5BC6\u901A\u9053\u3002',
      'p3-label': '\u4E92\u64CD\u4F5C',
      'p3-desc': '\u6807\u51C6\u5316\u534F\u8BAE\u5C42\uFF0C\u652F\u6301\u8DE8\u5E73\u53F0\u901A\u4FE1\u3002',
      'protocol-link': 'SuiMesh \u6587\u6863',
      'about-label': '\u5173\u4E8E',
      'about-title': '\u7EF4\u5883\u62DF\u751F',
      'about-body': '\u4E00\u5BB6\u4F4D\u4E8E\u6DF1\u5733\u7684\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8\u3002',
      'loc-shenzhen': '\u6DF1\u5733',
      'careers-label': '\u62DB\u8058',
      'careers-title': '\u52A0\u5165\u6211\u4EEC',
      'careers-body': '\u6211\u4EEC\u662F\u4E00\u652F\u5C0F\u800C\u7CBE\u7684\u56E2\u961F\uFF0C\u62E5\u6709\u6241\u5E73\u7684\u7BA1\u7406\u7ED3\u6784\u4E0E\u9AD8\u5EA6\u81EA\u7531\u3002\u5982\u679C\u4F60\u5BF9AI\u667A\u80FD\u4F53\u3001\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u6216\u524D\u6CBF\u6280\u672F\u5145\u6EE1\u70ED\u60C5\uFF0C\u6B22\u8FCE\u52A0\u5165\u3002',
      'role1-dept': '\u5DE5\u7A0B',
      'role1': 'Agent Harness \u5DE5\u7A0B\u5E08',
      'role1-desc': '\u6784\u5EFA\u957F\u671F\u8FD0\u884C\u667A\u80FD\u4F53\u7684\u8FD0\u884C\u65F6\u57FA\u7840\u8BBE\u65BD\u3002',
      'role2-dept': '\u7814\u7A76',
      'role2': 'AI \u7814\u7A76\u5458',
      'role2-desc': '\u63A2\u7D22\u534F\u4F5C\u591A\u667A\u80FD\u4F53\u667A\u80FD\u7684\u67B6\u6784\u3002',
      'role3-dept': '\u4EA7\u54C1',
      'role3': '\u4EA7\u54C1\u7ECF\u7406',
      'role3-desc': '\u5851\u9020\u667A\u80FD\u4F53\u6280\u672F\u4E0E\u73B0\u5B9E\u4E16\u754C\u5E94\u7528\u4EA4\u6C47\u7684\u4EA7\u54C1\u3002',
      'careers-apply': '\u6295\u9012\u7B80\u5386',
      'contact-label': '\u8054\u7CFB',
      'contact-title': '\u8054\u7CFB\u6211\u4EEC',
      'contact-email-label': '\u90AE\u7BB1',
      'contact-github-label': 'GitHub',
      'contact-hq-label': '\u603B\u90E8',
      'contact-hq-value': '\u6DF1\u5733\u5E02\u798F\u7530\u533A',
      'footer-brand': '\u7EF4\u5883\u62DF\u751F',
      'footer-copy': '\u00A9 2024\u20132026 \u6DF1\u5733\u5E02\u7EF4\u5883\u62DF\u751F\u79D1\u6280\u6709\u9650\u516C\u53F8',
      'footer-fullname': '\u6DF1\u5733\u5E02\u7EF4\u5883\u62DF\u751F\u79D1\u6280\u6709\u9650\u516C\u53F8'
    }
  };

  var currentLang = 'en';

  /* ===== i18n Engine ===== */
  function applyTranslations(lang) {
    var dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

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

  /* ===== Navbar Scroll Effect ===== */
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ===== Scroll Reveal ===== */
  function initReveal() {
    var revealElements = document.querySelectorAll(
      '.section-inner, .feature-item, .product-card-main, .card-round, .role-card-v2, .contact-item-v2'
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

  /* ===== Smooth Scroll for Anchor Links ===== */
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
