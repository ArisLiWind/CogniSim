/* ================================================
   CogniSim Tech - Interaction Script + i18n
   Design: Aurion SaaS Template
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
      'nav-media': 'Media',
      'nav-about': 'About',
      'nav-cta': 'Contact Us',
      'lang-btn': '\u4E2D\u6587',
      'hero-tag': 'Intelligence Infrastructure',
      'hero-title': 'Building the infrastructure<br>for intelligent agents',
      'hero-subtitle': 'While advancing the science of intelligence through computational neuroscience and consciousness research.',
      'hero-btn-explore': 'Explore Products',
      'hero-btn-research': 'Our Research',
      'research-label': '01 / Research',
      'research-title': 'Aris Science and Technology<br>Research Center',
      'research-body': 'We explore the origins of consciousness through computational neuroscience,<br>brain-computer interfaces, and augmented reality.<br>Our research feeds directly into the products and protocols we build.',
      'research-dir1-title': 'Computational Neuroscience',
      'research-dir1-desc': 'The theoretical foundation. Mathematical models of neural information processing that inform all our work.',
      'research-dir2-title': 'Brain-Computer Interface',
      'research-dir2-desc': 'Connecting consciousness to the external world. A key collaboration direction bridging mind and machine.',
      'research-dir3-title': 'Augmented Reality',
      'research-dir3-desc': 'The display layer of consciousness connection. Exploring full reality rendering and enhancement.',
      'products-label': '02 / Products',
      'products-title': 'Content X',
      'products-body': 'An AI content platform powered by multi-agent collaboration.<br>Built on the Agent Harness architecture and communicating via the Mesh protocol.<br>ContentX is where our agent technology meets real-world content creation.',
      'products-f1': 'Multi-Agent Collaboration',
      'products-f2': 'Mesh Protocol',
      'products-f3': 'Agent Harness',
      'products-link': 'Visit ContentX',
      'protocol-label': '03 / Protocol',
      'protocol-title': 'Mesh Protocol',
      'protocol-body': 'A communication protocol for AI agents.<br>Mesh enables discovery, authentication, collaboration, and data exchange<br>between intelligent agents in a decentralized manner.',
      'protocol-d1-label': 'Discovery',
      'protocol-d1-desc': 'Decentralized agent discovery without central registry. Agents can find each other through peer-to-peer networking.',
      'protocol-d2-label': 'Authentication',
      'protocol-d2-desc': 'Secure identity verification and encrypted channels for trusted inter-agent communication.',
      'protocol-d3-label': 'Interoperability',
      'protocol-d3-desc': 'Standardized protocol layer for cross-platform agent communication and collaboration.',
      'protocol-link': 'SuiMesh Documentation',
      'media-label': '04 / Media',
      'media-title': 'BiRan INEV',
      'media-body': 'Our media brand publishing research insights, technical thinking, and industry perspectives.<br>BiRan INEV also serves as a real-world validation ground for ContentX.',
      'media-link': 'Visit BiRan INEV',
      'about-label': 'About',
      'about-title': 'CogniSim<br>Technology Co., Ltd.',
      'about-body': 'Founded in Shenzhen, CogniSim Tech is an angel-stage AI company.<br>We believe the next breakthrough in technology will emerge at the intersection of<br>consciousness science and intelligent systems.',
      'loc-shenzhen': 'Shenzhen',
      'loc-chongqing': 'Chongqing',
      'loc-shanghai': 'Shanghai',
      'loc-shenzhen-role': 'Headquarters',
      'loc-chongqing-role': 'R&D Center',
      'loc-shanghai-role': 'R&D Center',
      'careers-label': 'Careers',
      'careers-title': 'Join Us',
      'careers-body': 'We are a small, flat team with high autonomy.<br>If you are passionate about AI agents, computational neuroscience, or frontier technology,<br>we would love to hear from you.',
      'role1-dept': 'Engineering',
      'role1': 'AI Agent Engineer',
      'role2-dept': 'Research',
      'role2': 'Computational Neuroscience Researcher',
      'role3-dept': 'Product',
      'role3': 'ContentX Product Manager',
      'careers-apply': 'Apply',
      'contact-label': 'Contact',
      'contact-title': 'Get in Touch',
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
      'nav-media': '\u5A92\u4F53',
      'nav-about': '\u5173\u4E8E',
      'nav-cta': '\u8054\u7CFB\u6211\u4EEC',
      'lang-btn': 'EN',
      'hero-tag': '\u667A\u80FD\u4F53\u57FA\u7840\u8BBE\u65BD',
      'hero-title': '\u6784\u5EFA\u667A\u80FD\u4F53<br>\u57FA\u7840\u8BBE\u65BD',
      'hero-subtitle': '\u901A\u8FC7\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u4E0E\u610F\u8BC6\u7814\u7A76\uFF0C\u63A8\u8FDB\u667A\u80FD\u79D1\u5B66\u7684\u8FB9\u754C\u3002',
      'hero-btn-explore': '\u63A2\u7D22\u4EA7\u54C1',
      'hero-btn-research': '\u6211\u4EEC\u7684\u7814\u7A76',
      'research-label': '01 / \u7814\u7A76',
      'research-title': '\u963F\u91CC\u65AF\u79D1\u5B66\u6280\u672F<br>\u7814\u7A76\u4E2D\u5FC3',
      'research-body': '\u6211\u4EEC\u901A\u8FC7\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u3001\u8111\u673A\u63A5\u53E3\u548C\u589E\u5F3A\u73B0\u5B9E\u63A2\u7D22\u610F\u8BC6\u7684\u8D77\u6E90\u3002<br>\u7814\u7A76\u6210\u679C\u76F4\u63A5\u53CD\u54FA\u6211\u4EEC\u6784\u5EFA\u7684\u4EA7\u54C1\u4E0E\u534F\u8BAE\u3002',
      'research-dir1-title': '\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66',
      'research-dir1-desc': '\u7406\u8BBA\u57FA\u77F3\u3002\u795E\u7ECF\u4FE1\u606F\u5904\u7406\u7684\u6570\u5B66\u6A21\u578B\uFF0C\u4E3A\u6211\u4EEC\u7684\u5168\u90E8\u5DE5\u4F5C\u63D0\u4F9B\u7406\u8BBA\u652F\u6491\u3002',
      'research-dir2-title': '\u8111\u673A\u63A5\u53E3',
      'research-dir2-desc': '\u5C06\u610F\u8BC6\u4E0E\u5916\u90E8\u4E16\u754C\u8FDE\u63A5\u3002\u8FDE\u63A5\u5FC3\u667A\u4E0E\u673A\u5668\u7684\u6838\u5FC3\u534F\u4F5C\u65B9\u5411\u3002',
      'research-dir3-title': '\u589E\u5F3A\u73B0\u5B9E',
      'research-dir3-desc': '\u610F\u8BC6\u8FDE\u63A5\u7684\u663E\u793A\u5C42\u3002\u63A2\u7D22\u5B8C\u6574\u73B0\u5B9E\u7684\u6E32\u67D3\u4E0E\u589E\u5F3A\u6280\u672F\u3002',
      'products-label': '02 / \u4EA7\u54C1',
      'products-title': 'Content X',
      'products-body': '\u57FA\u4E8E\u591A\u667A\u80FD\u4F53\u534F\u4F5C\u7684 AI \u5185\u5BB9\u5E73\u53F0\u3002<br>\u6784\u5EFA\u4E8E Agent Harness \u67B6\u6784\u4E4B\u4E0A\uFF0C\u901A\u8FC7 Mesh \u534F\u8BAE\u901A\u4FE1\u3002<br>ContentX \u662F\u6211\u4EEC\u667A\u80FD\u4F53\u6280\u672F\u843D\u5730\u5185\u5BB9\u521B\u4F5C\u7684\u5B9E\u8DF5\u573A\u666F\u3002',
      'products-f1': '\u591A\u667A\u80FD\u4F53\u534F\u4F5C',
      'products-f2': 'Mesh \u534F\u8BAE',
      'products-f3': 'Agent Harness',
      'products-link': '\u8BBF\u95EE ContentX',
      'protocol-label': '03 / \u534F\u8BAE',
      'protocol-title': 'Mesh \u534F\u8BAE',
      'protocol-body': '\u9762\u5411 AI \u667A\u80FD\u4F53\u7684\u901A\u4FE1\u534F\u8BAE\u3002<br>Mesh \u5B9E\u73B0\u53BB\u4E2D\u5FC3\u5316\u7684\u667A\u80FD\u4F53\u53D1\u73B0\u3001\u8BA4\u8BC1\u3001<br>\u534F\u4F5C\u4E0E\u6570\u636E\u4EA4\u6362\u3002',
      'protocol-d1-label': '\u53D1\u73B0',
      'protocol-d1-desc': '\u53BB\u4E2D\u5FC3\u5316\u667A\u80FD\u4F53\u53D1\u73B0\uFF0C\u65E0\u9700\u4E2D\u5FC3\u6CE8\u518C\u8868\uFF0C\u901A\u8FC7\u5BF9\u7B49\u7F51\u7EDC\u5B9E\u73B0\u667A\u80FD\u4F53\u95F4\u7684\u4E92\u76F8\u53D1\u73B0\u3002',
      'protocol-d2-label': '\u8BA4\u8BC1',
      'protocol-d2-desc': '\u5B89\u5168\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4E0E\u52A0\u5BC6\u901A\u9053\uFF0C\u4FDD\u969C\u53EF\u4FE1\u8D56\u7684\u667A\u80FD\u4F53\u95F4\u901A\u4FE1\u3002',
      'protocol-d3-label': '\u4E92\u64CD\u4F5C',
      'protocol-d3-desc': '\u6807\u51C6\u5316\u534F\u8BAE\u5C42\uFF0C\u652F\u6301\u8DE8\u5E73\u53F0\u667A\u80FD\u4F53\u7684\u901A\u4FE1\u4E0E\u534F\u4F5C\u3002',
      'protocol-link': 'SuiMesh \u6587\u6863',
      'media-label': '04 / \u5A92\u4F53',
      'media-title': 'BiRan INEV',
      'media-body': '\u53D1\u5E03\u7814\u7A76\u6D1E\u5BDF\u3001\u6280\u672F\u601D\u8003\u4E0E\u884C\u4E1A\u89C6\u89D2\u7684\u5A92\u4F53\u54C1\u724C\u3002<br>BiRan INEV \u540C\u65F6\u4E5F\u662F ContentX \u7684\u771F\u5B9E\u9A8C\u8BC1\u573A\u666F\u3002',
      'media-link': '\u8BBF\u95EE BiRan INEV',
      'about-label': '\u5173\u4E8E',
      'about-title': '\u7EF4\u5883\u62DF\u751F<br>\u79D1\u6280\u6709\u9650\u516C\u53F8',
      'about-body': '\u7EF4\u5883\u62DF\u751F\u79D1\u6280\u6210\u7ACB\u4E8E\u6DF1\u5733\uFF0C\u662F\u4E00\u5BB6\u5929\u4F7F\u8F6E\u9636\u6BB5\u7684\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8\u3002<br>\u6211\u4EEC\u76F8\u4FE1\uFF0C\u4E0B\u4E00\u4EE3\u6280\u672F\u7A81\u7834\u5C06\u53D1\u751F\u5728\u610F\u8BC6\u79D1\u5B66\u4E0E\u667A\u80FD\u7CFB\u7EDF\u7684\u4EA4\u6C47\u5904\u3002',
      'loc-shenzhen': '\u6DF1\u5733',
      'loc-chongqing': '\u91CD\u5E86',
      'loc-shanghai': '\u4E0A\u6D77',
      'loc-shenzhen-role': '\u603B\u90E8',
      'loc-chongqing-role': '\u7814\u53D1\u4E2D\u5FC3',
      'loc-shanghai-role': '\u7814\u53D1\u4E2D\u5FC3',
      'careers-label': '\u62DB\u8058',
      'careers-title': '\u52A0\u5165\u6211\u4EEC',
      'careers-body': '\u6211\u4EEC\u662F\u4E00\u652F\u5C0F\u800C\u7CBE\u7684\u56E2\u961F\uFF0C\u62E5\u6709\u6241\u5E73\u7684\u7BA1\u7406\u7ED3\u6784\u4E0E\u9AD8\u5EA6\u81EA\u7531\u3002<br>\u5982\u679C\u4F60\u5BF9 AI \u667A\u80FD\u4F53\u3001\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u6216\u524D\u6CBF\u6280\u672F\u5145\u6EE1\u70ED\u60C5\uFF0C\u6B22\u8FCE\u52A0\u5165\u3002',
      'role1-dept': '\u5DE5\u7A0B',
      'role1': 'AI \u667A\u80FD\u4F53\u5DE5\u7A0B\u5E08',
      'role2-dept': '\u7814\u7A76',
      'role2': '\u8BA1\u7B97\u795E\u7ECF\u79D1\u5B66\u7814\u7A76\u5458',
      'role3-dept': '\u4EA7\u54C1',
      'role3': 'ContentX \u4EA7\u54C1\u7ECF\u7406',
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
      '.section-inner, .card, .card-sm, .product-card-large, .loc-card, .role-card, .contact-card'
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
