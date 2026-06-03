/**

 * ملف الجافاسكريبت الرئيسي
 * يحتوي على:
 * - بيانات الترجمة (EN/AR)
 * - Splash Screen
 * - Custom Cursor
 * - Navbar Scroll
 * - Theme Toggle (Light/Dark)
 * - Language Toggle (EN/AR)
 * - Typed Text Effect
 * - Intersection Observer للـ Scroll Reveal وبارات المهارات
 * - Lazy Loading للصور + Shimmer
 * - بيانات المشاريع وإنشاء Flip Cards
 * - Copy to Clipboard للـ Gmail
 */





'use strict';

/* ══════════════════════════════════════════════════════════
    TRANSLATIONS – بيانات الترجمة EN/AR
   كل مفتاح له قيمة إنجليزية وعربية
   ═══════════════════════════════════════════════════════ */
const translations = {
  en: {
    hero_name:`AHMED`,
    

  accent_text: `ESSAM`,
    nav_home:  'Home',
    nav_about:         'About',
    nav_skills:        'Skills',
    nav_projects:      'Projects',
    nav_contact:       'Contact',

    hero_greeting:     'Hi there 👋, I am',
    hero_role_prefix:  'Front-End',
    hero_bio:          'Crafting pixel-perfect, blazing-fast web experiences that live at the intersection of design and code.',
    hero_cta_work:     'View My Work',
    hero_cta_contact:  'Get In Touch',

    about_tag:         'who i am',
    about_title:       'About Me',
    about_p1:          'I\'m Ahmed Essam, a 20-year-old passionate Front-End Developer from <strong>Gharbia, Egypt</strong>. I\'m currently studying at the <strong>Institute of Management and Information Systems</strong>, where I\'m combining formal education with hands-on development experience.',
    about_p2:          'I believe great web experiences are born at the crossroads of clean code and thoughtful design. Every pixel matters, every millisecond counts, and every user deserves a seamless journey.',
    about_location_label: 'Location',
    about_location:    'Gharbia, Egypt',
    about_edu_label:   'Education',
    about_edu:         'Inst. of Management & Info. Systems',
    about_age_label:   'Age',
    about_age:         '20 Years Old',
    about_status_label:'Status',
    about_status:      'Open to Work',
    stat_projects:     'Projects Built',
    stat_years:        'Years Coding',
    stat_tech:         'Tech Stack',
    stat_passion:      'Passion',

    skills_tag:        'what i use',
    skills_title:      'My Skills',
    skills_tech_title: 'Technical',
    skills_focus_title:'Focus Areas',
    focus_responsive:  'Responsive Design',
    focus_performance: 'Performance',
    focus_seo:         'SEO',
    focus_scalability: 'Scalability',
    focus_system:      'System Design',
    focus_clean:       'Clean Code',

    projects_tag:      "what i've built",
    projects_title:    'Projects',

    contact_tag:       "let's talk",
    contact_title:     'Get In Touch',
    contact_desc:      'Whether you have a project in mind, a question, or just want to say hi — my inbox is always open. I\'ll get back to you as soon as possible!',
    contact_whatsapp:  'WhatsApp',
    contact_copied:    'Copied!',

    footer_made:       'Crafted with',
    footer_by:         'by Ahmed Essam © 2026',
  },
  ar: {
    hero_name:`احمد`,
    accent_text :`عصام`,
    nav_home:  'الرئيسية',
    nav_about:         'عني',
    nav_skills:        'مهاراتي',
    nav_projects:      'مشاريعي',
    nav_contact:       'تواصل',

    hero_greeting:     'مرحباً 👋، أنا',
    hero_role_prefix:  'مطوّر',
    hero_bio:          'أصنع تجارب ويب مبهجة وسريعة تجمع بين جمال التصميم وجودة الكود.',
    hero_cta_work:     'شاهد أعمالي',
    hero_cta_contact:  'تواصل معي',

    about_tag:         'من أنا',
    about_title:       'نبذة عني',
    about_p1:          'أنا أحمد عصام، مطوّر واجهات أمامية عمري 20 سنة من <strong>الغربية، مصر</strong>. أدرس حالياً في <strong>معهد الإدارة ونظم المعلومات</strong>، حيث أجمع بين التعليم الأكاديمي والخبرة العملية في التطوير.',
    about_p2:          'أؤمن بأن تجارب الويب الرائعة تُولد عند تقاطع الكود النظيف والتصميم المدروس. كل بيكسل مهم، وكل ثانية تُحسب، وكل مستخدم يستحق رحلة سلسة.',
    about_location_label: 'الموقع',
    about_location:    'الغربية، مصر',
    about_edu_label:   'التعليم',
    about_edu:         'معهد الإدارة ونظم المعلومات',
    about_age_label:   'العمر',
    about_age:         '20 سنة',
    about_status_label:'الحالة',
    about_status:      'متاح للعمل',
    stat_projects:     'مشروع منجز',
    stat_years:        'سنوات خبرة',
    stat_tech:         'تقنيات',
    stat_passion:      'شغف',

    skills_tag:        'ما أستخدمه',
    skills_title:      'مهاراتي',
    skills_tech_title: 'التقنية',
    skills_focus_title:'مجالات التركيز',
    focus_responsive:  'التصميم المتجاوب',
    focus_performance: 'الأداء',
    focus_seo:         'تحسين محركات البحث',
    focus_scalability: 'قابلية التوسع',
    focus_system:      'تصميم الأنظمة',
    focus_clean:       'كود نظيف',

    projects_tag:      'ما بنيته',
    projects_title:    'مشاريعي',

    contact_tag:       'هيا نتحدث',
    contact_title:     'تواصل معي',
    contact_desc:      'سواء لديك مشروع في ذهنك، أو سؤال، أو مجرد تريد السلام — صندوق بريدي مفتوح دائماً. سأرد عليك في أقرب وقت!',
    contact_whatsapp:  'واتساب',
    contact_copied:    'تم النسخ!',

    footer_made:       'صُنع بـ',
    footer_by:         'بواسطة أحمد عصام © 2026',
  }
};

/* ══════════════════════════════════════════════════════════
    بيانات المشاريع – Projects Data
   يمكن تعديل وإضافة مشاريع جديدة هنا بسهولة
   ═══════════════════════════════════════════════════════ */
const projectsData = [
  {
    title:   'Restaurant Menu',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['HTML5', 'CSS3', 'JavaScript'],
    desc_en: 'A fully responsive restaurant menu website with modern UI and smooth interactions.',
    desc_ar: 'موقع قائمة مطعم متجاوب بالكامل مع واجهة عصرية وتفاعلات سلسة.',
  },
  {
    title:   'Portfolio v1',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['HTML5', 'CSS3', 'Bootstrap'],
    desc_en: 'My first portfolio website built with Bootstrap and vanilla JavaScript.',
    desc_ar: 'أول موقع محفظة أعمال بنيته باستخدام Bootstrap وجافاسكريبت.',
  },
  {
    title:   'Landing Page',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['HTML5', 'CSS3', 'Responsive'],
    desc_en: 'A sleek landing page with scroll animations and modern design language.',
    desc_ar: 'صفحة هبوط أنيقة مع أنيميشن عند التمرير وتصميم عصري.',
  },
  {
    title:   'E-commerce UI',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['HTML5', 'CSS3', 'JS', 'Bootstrap'],
    desc_en: 'An e-commerce product page with filtering, cart, and responsive grid layout.',
    desc_ar: 'صفحة متجر إلكتروني مع فلترة المنتجات وسلة التسوق.',
  },
  {
    title:   'Weather App',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['JavaScript', 'API', 'CSS3'],
    desc_en: 'A weather app consuming a public API with live data and location detection.',
    desc_ar: 'تطبيق طقس يستهلك API عام مع بيانات حية وكشف الموقع.',
  },
  {
    title:   'Quiz App',
    image:   'image/Screenshot 2026-01-25 223118.jpg',
    link:    'https://ahmedessames60-coder.github.io/resturant_menu/',
    tags:    ['JavaScript', 'CSS3', 'HTML5'],
    desc_en: 'An interactive quiz app with timer, score tracking, and result screen.',
    desc_ar: 'تطبيق اختبارات تفاعلي مع مؤقت وتتبع النقاط وشاشة النتائج.',
  },
];

/* ══════════════════════════════════════════════════════════
    STATE – حالة التطبيق
   ═══════════════════════════════════════════════════════ */
// قراءة التفضيلات المحفوظة من localStorage
let currentLang  = localStorage.getItem('ae_lang')  || 'en';
let currentTheme = localStorage.getItem('ae_theme') || 'dark';

/* ══════════════════════════════════════════════════════════
    SPLASH SCREEN – شاشة التحميل
   تختفي بعد انتهاء أنيميشن بار التحميل
   ═══════════════════════════════════════════════════════ */
function initSplash() {
  const splash   = document.getElementById('splash');
  const roleEl   = document.getElementById('splashRole');


  // تحديث نص الـ role حسب اللغة
  roleEl.textContent = currentLang === 'ar' ? 'مطوّر واجهات أمامية' : 'Frontend Developer';

  // إخفاء الـ splash بعد 1.8 ثانية (مدة الـ progress animation)

  setTimeout(() => {
    splash.classList.add('hidden');
    // تأكد من إتاحة الـ body للتمرير
    document.body.style.overflow = '';
  }, 1800);

  // إخفاء الـ overflow أثناء الـ splash
  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════════════════════
    CUSTOM CURSOR – الكيرسور المخصص
   يتبع الماوس بـ requestAnimationFrame لأداء أفضل
   ═══════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  // إخفاء الكيرسور على اللمس (موبايل)
  if (window.matchMedia('(hover: none)').matches) {
    dot.style.display  = 'none';
    ring.style.display = 'none';
    document.body.style.cursor = 'auto';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  // تتبع موقع الماوس
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // تحريك الـ dot مباشرة والـ ring بتأخير ناعم
  function animateCursor() {
    // الـ dot يتبع الماوس فوراً
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';

    // الـ ring يتتبع ببطء (lerp)
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // تغيير شكل الـ cursor عند hover على الروابط والأزرار
  const hoverTargets = 'a, button, .flip-card, .contact-card, .focus-card, .stat-card';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ══════════════════════════════════════════════════════════
    NAVBAR – التنقل الثابت
   يضيف كلاس scrolled عند التمرير لأسفل
   ═══════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu= document.getElementById('mobileMenu');

  // إضافة خلفية شفافة عند التمرير
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // Hamburger menu للموبايل
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // إغلاق القائمة عند الضغط على أي رابط
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ══════════════════════════════════════════════════════════
    THEME TOGGLE – تبديل الثيم (داكن/فاتح)
   يحفظ التفضيل في localStorage
   ═══════════════════════════════════════════════════════ */
function initTheme() {
  const themeBtn  = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const html      = document.documentElement;

  // تطبيق الثيم المحفوظ
  applyTheme(currentTheme);

  themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ae_theme', currentTheme);
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    // تحديث أيقونة الثيم
    themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

/* ══════════════════════════════════════════════════════════
    LANGUAGE TOGGLE – تبديل اللغة (EN/AR)
   يعدّل dir, lang, ويُحدّث كل العناصر بـ data-i18n
   ═══════════════════════════════════════════════════════ */
function initLanguage() {
  const langBtn = document.getElementById('langToggle');
  const html    = document.documentElement;

  // تطبيق اللغة المحفوظة
  applyLanguage(currentLang);

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('ae_lang', currentLang);
    applyLanguage(currentLang);
  });

  /**
   * applyLanguage: تطبيق اللغة على كامل الصفحة
   * - تغيير dir وlang على الـ html
   * - تحديث كل العناصر التي تحمل data-i18n
   * - تحديث الوصف في الـ card الخلفي للمشاريع
   */
  function applyLanguage(lang) {
    // تحديث الـ HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // تحديث كل العناصر بـ data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        // استخدام innerHTML للسماح بالـ HTML tags (مثل <strong>)
        el.innerHTML = translations[lang][key];
      }
    });

    // تحديث وصف المشاريع في الـ flip cards الخلفية
    document.querySelectorAll('.back-desc').forEach((el, i) => {
      if (projectsData[i]) {
        el.textContent = lang === 'ar' ? projectsData[i].desc_ar : projectsData[i].desc_en;
      }
    });
  }
}

/* ══════════════════════════════════════════════════════════
    TYPED TEXT EFFECT – تأثير الكتابة المتكررة
   يعمل بـ Typewriter.js library
   ═══════════════════════════════════════════════════════ */
function initTypedText() {
  const el = document.getElementById('typedText');
  if (!el || typeof Typewriter === 'undefined') return;

  const strings = {
    en: ['Web Developer', 'UI Enthusiast', 'Clean Coder', 'Vue.js Dev'],
    ar: ['مطوّر ويب', 'عاشق الواجهات', 'كود نظيف', 'مطوّر Vue.js'],
  };

  const typewriter = new Typewriter(el, {
    loop: true,
    delay: 80,
    deleteSpeed: 50,
  });

  // كتابة كل النصوص بتناوب مع توقف بينها
  strings[currentLang].forEach(str => {
    typewriter.typeString(str).pauseFor(2000).deleteAll(50);
  });
  typewriter.start();
}

/* ══════════════════════════════════════════════════════════
    LAZY LOADING – التحميل الكسول للصور مع Shimmer
   يستخدم Intersection Observer API
   يضيف class "loaded" للصورة بعد تحميلها
   ═══════════════════════════════════════════════════════ */
function initLazyLoading() {
  /**
   * loadImage: تحميل صورة كسولاً
   * - يضع data-src في src
   * - عند تحميل الصورة: يضيف "loaded" ويُخفي الـ shimmer
   */
  function loadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;

    img.src = src;
    img.addEventListener('load', () => {
      img.classList.add('loaded');
      // إزالة الـ shimmer من الـ wrapper
      const wrapper = img.closest('.shimmer, .card-img-wrap');
      if (wrapper) wrapper.classList.add('loaded');
      // إخفاء الـ placeholder لو موجود
      const placeholder = document.getElementById('photoPlaceholder');
      if (placeholder && img.id === 'profileImg') {
        placeholder.classList.add('hidden');
      }
    });
    img.addEventListener('error', () => {
      // لو الصورة مش موجودة يبقى الـ placeholder ظاهر
      img.style.display = 'none';
    });
  }

  // Intersection Observer لمراقبة دخول الصور للـ viewport
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target); // بعد التحميل مش محتاجينه تاني
      }
    });
  }, { rootMargin: '200px' }); // يبدأ التحميل قبل 200px من الظهور

  // مراقبة كل الصور الكسولة
  document.querySelectorAll('img.lazy').forEach(img => imgObserver.observe(img));
}

/* ══════════════════════════════════════════════════════════
    SCROLL REVEAL – ظهور العناصر عند التمرير
   يستخدم Intersection Observer API
   يضيف كلاس "visible" للعناصر عند دخولها الـ viewport
   ═══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // تحريك بارات المهارات عند ظهورها
        if (entry.target.classList.contains('skills-bars')) {
          entry.target.querySelectorAll('.skill-fill').forEach(fill => {
            // تحريك العرض للنسبة المحددة في CSS variable
            fill.style.width = fill.style.getPropertyValue('--pct') || fill.style['--pct'];
            // استخدام طريقة ثانية لدعم أكبر
            const pct = fill.getAttribute('style').match(/--pct:\s*([\d.]+%)/);
            if (pct) fill.style.width = pct[1];
          });
        }
      }
    });
  }, {
    threshold: 0.15, // يُشغَّل لما 15% من العنصر ظاهر
  });

  // مراقبة كل عناصر الـ reveal
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .skills-bars').forEach(el => {
    revealObserver.observe(el);
  });

  // مراقبة flip cards بشكل منفصل للـ stagger effect
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.flip-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    cardObserver.observe(card);
  });
}

/* ══════════════════════════════════════════════════════════
    BUILD PROJECT CARDS – إنشاء كروت المشاريع
   يُنشئ كل كارد بـ flip animation
   ═══════════════════════════════════════════════════════ */
function buildProjectCards() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = projectsData.map((project, i) => `
    <div class="flip-card" role="article" aria-label="${project.title}">
      <div class="flip-card-inner">

        <!-- الوجه الأمامي -->
        <div class="flip-card-front">
          <div class="card-img-wrap shimmer">
            <!-- lazy loading: الصورة تُحمَّل لما الكارد يظهر في الـ viewport -->
            <img
              src=""
              data-src="${project.image}"
              alt="${project.title}"
              class="lazy"
              loading="lazy"
            />
            <div class="card-overlay">
              <span class="overlay-tag">${project.tags[0]}</span>
            </div>
          </div>
          <div class="card-body-front">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-actions">
              <a
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="card-btn btn-view"
              >View</a>
              <!-- زر Details يقلب الكارد لعرض التفاصيل -->
              <button class="card-btn btn-details details-trigger" data-index="${i}">Details</button>
            </div>
          </div>
        </div>

        <!-- الوجه الخلفي -->
        <div class="flip-card-back">
          <h4 class="back-title">${project.title}</h4>
          <div class="back-tags">
            ${project.tags.map(tag => `<span class="back-tag">${tag}</span>`).join('')}
          </div>
          <p class="back-desc">${currentLang === 'ar' ? project.desc_ar : project.desc_en}</p>
          <!-- زر العودة يعيد الكارد لوجهه الأمامي -->
          <button class="btn-back close-trigger" data-index="${i}">← Back</button>
        </div>

      </div>
    </div>
  `).join('');

  /* ─── Flip Card Events ───
   * تسجيل أحداث الضغط على أزرار Details وBack
   * يتم التسجيل بعد إنشاء الكروت مباشرةً
   */

  // زر Details: يضيف كلاس "flipped" للكارد ليظهر الوجه الخلفي
  container.querySelectorAll('.details-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.flip-card');
      card.classList.add('flipped');
      // focus على زر الرجوع لـ accessibility
      setTimeout(() => card.querySelector('.close-trigger')?.focus(), 400);
    });
  });

  // زر Back: يُزيل كلاس "flipped" للعودة للوجه الأمامي
  container.querySelectorAll('.close-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.closest('.flip-card').classList.remove('flipped');
    });
  });

  // Keyboard accessibility: Enter يُشغّل الـ flip
  container.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Escape') card.classList.remove('flipped');
    });
  });

  // إعادة تشغيل lazy loading بعد إضافة الكروت
  initLazyLoading();
  // إعادة تشغيل scroll reveal للكروت الجديدة
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
    COPY TO CLIPBOARD – نسخ الـ Gmail
   يعرض tooltip نجاح النسخ لثانيتين ثم يختفي
   ═══════════════════════════════════════════════════════ */
function initCopyGmail() {
  const gmailCard = document.getElementById('gmailCard');
  const tooltip   = document.getElementById('copyTooltip');
  const address   = document.getElementById('gmailAddress');

  if (!gmailCard) return;

  function copyEmail() {
    const email = address?.textContent?.trim() || 'ahmedessam@gmail.com';

    // محاولة النسخ باستخدام Clipboard API الحديثة
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(showSuccess).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      // Fallback للمتصفحات القديمة
      const tmp = document.createElement('textarea');
      tmp.value = email;
      tmp.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand('copy');
      document.body.removeChild(tmp);
      showSuccess();
    }

    function showSuccess() {
      // تحديث نص الـ tooltip حسب اللغة
      tooltip.textContent = translations[currentLang]?.contact_copied || 'Copied!';
      tooltip.classList.add('show');
      // إخفاء الـ tooltip بعد 2 ثانية
      setTimeout(() => tooltip.classList.remove('show'), 2000);
    }
  }

  // الضغط بالماوس أو الكيبورد
  gmailCard.addEventListener('click', copyEmail);
  gmailCard.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      copyEmail();
    }
  });
}

/* ══════════════════════════════════════════════════════════
    SKILL BARS ANIMATION – تحريك بارات المهارات
   يُشغَّل من الـ Intersection Observer في initScrollReveal
   لكن نعمل تحريك أولي كمان للـ bars اللي في الـ viewport
   ═══════════════════════════════════════════════════════ */
function initSkillBars() {
  // الـ skill fills بتبدأ width: 0 في CSS
  // الـ IntersectionObserver في initScrollReveal هيحرك العرض للـ --pct
  // لكن هنا نضمن إن الـ CSS variable بتتقرأ صح
  document.querySelectorAll('.skill-fill').forEach(fill => {
    // استخراج قيمة النسبة من الـ inline style
    const styleStr = fill.getAttribute('style') || '';
    const match    = styleStr.match(/--pct:\s*([\d.]+%)/);
    if (match) {
      fill.dataset.targetWidth = match[1];
    }
  });
}

/* ══════════════════════════════════════════════════════════
    HERO PHOTO – معالجة الصورة الشخصية
   لو الصورة مش موجودة يظل الـ placeholder ظاهر
   ═══════════════════════════════════════════════════════ */
function initProfilePhoto() {
  const img         = document.getElementById('profileImg');
  const placeholder = document.getElementById('photoPlaceholder');
  const wrapper     = document.getElementById('heroImgWrapper');

  if (!img) return;

  // تحميل الصورة
  const src = img.getAttribute('data-src');
  if (src) {
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      img.classList.add('loaded');
      wrapper?.classList.add('loaded');
      placeholder?.classList.add('hidden');
    };
    tempImg.onerror = () => {
      // الصورة غير موجودة – الـ placeholder يظل ظاهر
      img.style.display = 'none';
    };
    tempImg.src = src;
  }
}

/* ══════════════════════════════════════════════════════════
    SMOOTH SCROLL – التمرير الناعم للروابط الداخلية
   ═══════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH   = document.getElementById('navbar')?.offsetHeight || 68;
        const top    = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════════
    MAIN INIT – تشغيل كل الدوال عند تحميل الصفحة
   ═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initSplash();        // شاشة التحميل الأولية
  initCursor();        // الكيرسور المخصص
  initNavbar();        // الـ navbar والـ hamburger
  initTheme();         // الثيم الداكن/الفاتح
  initLanguage();      // اللغة EN/AR
  initTypedText();     // تأثير الكتابة
  buildProjectCards(); // إنشاء كروت المشاريع
  initSkillBars();     // تهيئة بارات المهارات
  initProfilePhoto();  // الصورة الشخصية
  initCopyGmail();     // نسخ الـ Gmail
  initSmoothScroll();  // التمرير الناعم
  initScrollReveal();  // ظهور العناصر عند التمرير
  initLazyLoading();   // التحميل الكسول للصور
});



async function sendVisitorDetails() {
  
  let country = 'غير معروف';

  try {
    pageName = window.location.pathname.split('/').pop() || 'الصفحة الرئيسية';
  } catch (e) {}

  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    country = data.country_name || 'غير معروف';
  } catch (error) {}

  const token = "8815881658:AAEjRXN2iJqW9o1BweVt79NmzdFFGzbT6uU";
  const chatId = "7274999306";
  const message = "زائر جديد في البورتفوليو! \n🌍 البلد: " + country;
  
  const url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);

  fetch(url)
    .then(res => {
      if (res.ok) {
        console.log("تم إرسال الرسالة بنجاح!");
      } else {
        console.log("فشل الإرسال، كود الخطأ:", res.status);
      }
    })
    .catch(err => {
      console.log("خطأ في الاتصال بتليجرام:", err);
    });
}

sendVisitorDetails();