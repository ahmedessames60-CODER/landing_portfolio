"use strict";

/* ══════════════════════════════════════════════════════════
    TRANSLATIONS – EN/AR
   ═══════════════════════════════════════════════════════ */
const translations = {
  en: {
    hero_name: "AHMED",
    accent_text: "ESSAM",
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_role_prefix: "Fullstack",
    hero_bio:
      "Building pixel-perfect web apps & cross-platform mobile experiences — from elegant frontends to robust backends and Flutter apps.",
    hero_cta_work: "View My Work",
    hero_cta_contact: "contact",
    hero_cta_cv: "Download CV",

    about_title: "About Me",
    about_p1:
      "I'm Ahmed Essam, a 20-year-old passionate <strong>Fullstack Web & Flutter Developer</strong> from <strong>Gharbia, Egypt</strong>. I'm currently studying at the <strong>Institute of Management and Information Systems</strong>, combining formal education with real-world development experience.",
    about_p2:
      "I build complete digital products — from beautiful, responsive frontends with Vue.js & Tailwind, to solid PHP/Laravel backends, and cross-platform Flutter mobile apps. Every pixel matters, every API endpoint counts, and every user deserves a seamless journey.",
    about_location_label: "Location",
    about_location: "Gharbia, Egypt",
    about_edu_label: "Education",
    about_edu: "Inst. of Management & Info. Systems",
    about_age_label: "Age",
    about_age: "20 Years Old",
    about_status_label: "Status",
    about_status: "Open to Work",
    stat_projects: "Projects Built",
    stat_years: "Years Coding",
    stat_tech: "Tech Stack",
    stat_passion: "Passion",

    skills_title: "My Skills",
    skills_tech_title: "Technical",
    skills_focus_title: "Focus Areas",
    focus_responsive: "Responsive Design",
    focus_performance: "Performance",
    focus_seo: "SEO",
    focus_scalability: "Scalability",
    focus_system: "System Design",
    focus_clean: "Clean Code",
    focus_api: "REST APIs",
    focus_flutter: "Flutter Apps",
    focus_ds: "Data Structures",
    focus_oop: "OOP",
    focus_algo: "Algorithms",
    skill_cat_cs: "CS Fundamentals",

    projects_title: "Projects",
    filter_all: "All",
    filter_web: "Web",
    filter_fullstack: "Fullstack",
    filter_flutter: "Flutter",

    contact_title: "Get In Touch",
    contact_whatsapp: "WhatsApp",
    contact_copied: "Copied!",

    form_title: "Send a Message",
    form_name: "Name",
    form_name_placeholder: "Your name",
    form_email: "Email",
    form_message: "Message",
    form_msg_placeholder: "Your message...",
    form_send: "Send Message",

    footer_made: "Crafted",
    footer_by: "by Ahmed Essam © 2026",
  },
  ar: {
    hero_name: "أحمد",
    accent_text: "عصام",
    nav_home: "الرئيسية",
    nav_about: "عني",
    nav_skills: "مهاراتي",
    nav_projects: "مشاريعي",
    nav_contact: "تواصل",

    hero_role_prefix: "فول ستاك",
    hero_bio:
      "أبني تطبيقات ويب متكاملة وتطبيقات موبايل كروس-بلاتفورم — من واجهات أمامية  إلى باك-إند قوي وتطبيقات Flutter.",
    hero_cta_work: "شاهد أعمالي",
    hero_cta_contact: "التواصل  ",
    hero_cta_cv: "تحميل السيرة الذاتية",

    about_title: "نبذة عني",
    about_p1:
      "أنا أحمد عصام، مطوّر <strong>فول ستاك ويب وفلاتر</strong> عمري 20 سنة من <strong>الغربية، مصر</strong>. أدرس حالياً في <strong>معهد الإدارة ونظم المعلومات</strong>، أجمع بين التعليم الأكاديمي والخبرة العملية.",
    about_p2:
      "أبني منتجات رقمية متكاملة — من واجهات Vue.js & Tailwind الجميلة، إلى باك-إند PHP/Laravel القوي، وتطبيقات Flutter متعددة المنصات. كل بيكسل مهم، وكل API endpoint مهم، وكل مستخدم يستحق تجربة سلسة.",
    about_location_label: "الموقع",
    about_location: "الغربية، مصر",
    about_edu_label: "التعليم",
    about_edu: "معهد الإدارة ونظم المعلومات",
    about_age_label: "العمر",
    about_age: "20 سنة",
    about_status_label: "الحالة",
    about_status: "متاح للعمل",
    stat_projects: "مشروع منجز",
    stat_years: "سنوات خبرة",
    stat_tech: "تقنيات",
    stat_passion: "شغف",

    skills_title: "مهاراتي",
    skills_tech_title: "التقنية",
    skills_focus_title: "مجالات التركيز",
    focus_responsive: "التصميم المتجاوب",
    focus_performance: "الأداء",
    focus_seo: "تحسين محركات البحث",
    focus_scalability: "قابلية التوسع",
    focus_system: "تصميم الأنظمة",
    focus_clean: "كود نظيف",
    focus_api: "REST APIs",
    focus_flutter: "تطبيقات Flutter",
    focus_ds: "هياكل البيانات",
    focus_oop: "البرمجة كائنية التوجه",
    focus_algo: "الخوارزميات",
    skill_cat_cs: "أساسيات CS",

    projects_title: "مشاريعي",
    filter_all: "الكل",
    filter_web: "ويب",
    filter_fullstack: "فول ستاك",
    filter_flutter: "فلاتر",

    contact_title: "تواصل معي",
    contact_whatsapp: "واتساب",
    contact_copied: "تم النسخ!",

    form_title: "ابعت رسالة",
    form_name: "الاسم",
    form_name_placeholder: "اسمك",
    form_email: "الإيميل",
    form_message: "الرسالة",
    form_msg_placeholder: "رسالتك...",
    form_send: "ابعت الرسالة",

    footer_made: "صُنع",
    footer_by: "بواسطة أحمد عصام © 2026",
  },
};

/* ══════════════════════════════════════════════════════════
    PROJECTS DATA – Web + Fullstack + Flutter
   ═══════════════════════════════════════════════════════ */
const projectsData = [
  // ─── Web Projects ───
  {
    title: "Restaurant Menu",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "web",
    desc_en:
      "A fully responsive restaurant menu website with modern UI, smooth animations, and interactive item filtering.",
    desc_ar:
      "موقع قائمة مطعم متجاوب بالكامل مع واجهة عصرية وأنيميشن سلس وفلترة تفاعلية للعناصر.",
  },
  {
    title: "Portfolio v1",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    category: "web",
    desc_en:
      "My first portfolio website built with Bootstrap and vanilla JavaScript — the start of the journey.",
    desc_ar:
      "أول موقع بورتفوليو بنيته باستخدام Bootstrap وجافاسكريبت — بداية الرحلة.",
  },
  {
    title: "Landing Page",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["HTML5", "CSS3", "Tailwind"],
    category: "web",
    desc_en:
      "A sleek landing page with scroll animations, Tailwind CSS design, and modern layout patterns.",
    desc_ar:
      "صفحة هبوط  مع أنيميشن عند التمرير، تصميم Tailwind CSS، وأنماط تخطيط عصرية.",
  },
  {
    title: "E-commerce UI",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    category: "web",
    desc_en:
      "An e-commerce product page with live filtering, cart interactions, and a fully responsive grid layout.",
    desc_ar:
      "صفحة متجر إلكتروني مع فلترة حية، تفاعل سلة التسوق، وشبكة متجاوبة بالكامل.",
  },
  {
    title: "Weather App",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["JavaScript", "API", "CSS3"],
    category: "web",
    desc_en:
      "A weather app consuming a public REST API with live data, location detection, and 5-day forecast.",
    desc_ar:
      "تطبيق طقس يستهلك REST API عام مع بيانات حية، كشف الموقع، وتوقعات 5 أيام.",
  },
  {
    title: "Quiz App",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://ahmedessames60-coder.github.io/resturant_menu/",
    tags: ["JavaScript", "CSS3", "HTML5"],
    category: "web",
    desc_en:
      "An interactive quiz app with countdown timer, live score tracking, and animated result screen.",
    desc_ar:
      "تطبيق اختبارات تفاعلي مع مؤقت عد تنازلي، تتبع النقاط الحي، وشاشة نتائج متحركة.",
  },
  // ─── Fullstack Projects ───
  {
    title: "Laravel Blog API",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Laravel", "PHP", "MySQL", "REST API"],
    category: "fullstack",
    desc_en:
      "A full RESTful blog API built with Laravel — authentication with Sanctum, CRUD for posts/comments, roles & permissions.",
    desc_ar:
      "API بلوج كامل مبني بـ Laravel — مصادقة بـ Sanctum، CRUD للمقالات/التعليقات، أدوار وصلاحيات.",
  },
  {
    title: "Vue + Laravel Dashboard",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Vue.js", "Laravel", "Tailwind", "MySQL"],
    category: "fullstack",
    desc_en:
      "A fullstack admin dashboard — Vue.js SPA frontend with a Laravel backend, real-time stats, user management, and charts.",
    desc_ar:
      "داشبورد إدارة فول ستاك — Vue.js SPA في الفرونت مع باك-إند Laravel، إحصائيات حية، إدارة مستخدمين، وتشارتات.",
  },
  {
    title: "E-commerce (Laravel)",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    category: "fullstack",
    desc_en:
      "A complete e-commerce platform: product management, cart, orders, payment integration, and admin panel — all in Laravel.",
    desc_ar:
      "منصة تجارة إلكترونية كاملة: إدارة منتجات، سلة، طلبات، دمج مدفوعات، ولوحة إدارة — كلها بـ Laravel.",
  },
  // ─── Flutter Projects ───
  {
    title: "Flutter Chat App",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Flutter", "Dart", "Firebase"],
    category: "flutter",
    desc_en:
      "A real-time cross-platform chat application built with Flutter & Firebase — supports text, images, and push notifications.",
    desc_ar:
      "تطبيق دردشة كروس-بلاتفورم في الوقت الفعلي مبني بـ Flutter & Firebase — يدعم النصوص والصور والإشعارات.",
  },
  {
    title: "Flutter E-commerce App",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Flutter", "Dart", "Laravel API"],
    category: "flutter",
    desc_en:
      "A mobile shopping app consuming a Laravel REST API — product catalog, cart, checkout, and order tracking.",
    desc_ar:
      "تطبيق تسوق موبايل يستهلك Laravel REST API — كتالوج منتجات، سلة، دفع، وتتبع الطلبات.",
  },
  {
    title: "Task Manager App",
    image: "image/Screenshot 2026-01-25 223118.jpg",
    link: "https://github.com/ahmedessames60-CODER",
    tags: ["Flutter", "Dart", "Hive"],
    category: "flutter",
    desc_en:
      "A clean offline-first task management Flutter app with local storage using Hive, categories, and deadlines.",
    desc_ar:
      "تطبيق Flutter لإدارة المهام نظيف وأوفلاين-فيرست مع تخزين محلي بـ Hive، فئات، ومواعيد نهائية.",
  },
];

/* ══════════════════════════════════════════════════════════
    STATE
   ═══════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem("ae_lang") || "en";
let currentTheme = localStorage.getItem("ae_theme") || "dark";
let activeFilter = "all";

/* ══════════════════════════════════════════════════════════
    SPLASH SCREEN
   ═══════════════════════════════════════════════════════ */
function initSplash() {
  const splash = document.getElementById("splash");
  const roleEl = document.getElementById("splashRole");

  roleEl.textContent =
    currentLang === "ar"
      ? "مطوّر فول ستاك ويب وفلاتر"
      : "Fullstack Web & Flutter Developer";

  document.body.style.overflow = "hidden";
  setTimeout(() => {
    splash.classList.add("hidden");
    document.body.style.overflow = "";
  }, 1800);
}

/* ══════════════════════════════════════════════════════════
    CUSTOM CURSOR
   ═══════════════════════════════════════════════════════ */
function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  if (window.matchMedia("(hover: none)").matches) {
    dot.style.display = "none";
    ring.style.display = "none";
    document.body.style.cursor = "auto";
    return;
  }

  let mouseX = 0,
    mouseY = 0;
  let ringX = 0,
    ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets =
    "a, button, .flip-card, .contact-card, .focus-card, .stat-card, .filter-btn";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets))
      document.body.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets))
      document.body.classList.remove("cursor-hover");
  });
}

/* ══════════════════════════════════════════════════════════
    NAVBAR
   ═══════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    },
    { passive: true },
  );

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    mobileMenu.setAttribute("aria-hidden", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });
}

/* ══════════════════════════════════════════════════════════
    THEME TOGGLE
   ═══════════════════════════════════════════════════════ */
function initTheme() {
  const themeBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const html = document.documentElement;

  applyTheme(currentTheme);

  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("ae_theme", currentTheme);
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    themeIcon.className =
      theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

/* ══════════════════════════════════════════════════════════
    LANGUAGE TOGGLE
   ═══════════════════════════════════════════════════════ */
function initLanguage() {
  const langBtn = document.getElementById("langToggle");
  const html = document.documentElement;

  applyLanguage(currentLang);

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("ae_lang", currentLang);
    applyLanguage(currentLang);
    buildProjectCards(); // rebuild cards with new language
  });

  function applyLanguage(lang) {
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll(".back-desc").forEach((el, i) => {
      const proj = getFilteredProjects()[i];
      if (proj) el.textContent = lang === "ar" ? proj.desc_ar : proj.desc_en;
    });
  }
}

/* ══════════════════════════════════════════════════════════
    TYPED TEXT
   ═══════════════════════════════════════════════════════ */
function initTypedText() {
  const el = document.getElementById("typedText");
  if (!el || typeof Typewriter === "undefined") return;

  const strings = {
    en: [
      "Web Developer",
      "Flutter Developer",
      "Laravel Dev",
      "Vue.js Dev",
      "UI Enthusiast",
    ],
    ar: [
      "مطوّر ويب",
      "مطوّر Flutter",
      "مطوّر Laravel",
      "مطوّر Vue.js",
      "عاشق الواجهات",
    ],
  };

  const typewriter = new Typewriter(el, {
    loop: true,
    delay: 80,
    deleteSpeed: 50,
  });
  strings[currentLang].forEach((str) => {
    typewriter.typeString(str).pauseFor(2000).deleteAll(50);
  });
  typewriter.start();
}

/* ══════════════════════════════════════════════════════════
    LAZY LOADING
   ═══════════════════════════════════════════════════════ */
function initLazyLoading() {
  function loadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
    img.addEventListener("load", () => {
      img.classList.add("loaded");
      const wrapper = img.closest(".shimmer, .card-img-wrap");
      if (wrapper) wrapper.classList.add("loaded");
      const placeholder = document.getElementById("photoPlaceholder");
      if (placeholder && img.id === "profileImg")
        placeholder.classList.add("hidden");
    });
    img.addEventListener("error", () => {
      img.style.display = "none";
    });
  }

  const imgObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "200px" },
  );

  document
    .querySelectorAll("img.lazy")
    .forEach((img) => imgObserver.observe(img));
}

/* ══════════════════════════════════════════════════════════
    SCROLL REVEAL
   ═══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          if (entry.target.classList.contains("skills-bars")) {
            entry.target.querySelectorAll(".skill-fill").forEach((fill) => {
              const pct = fill
                .getAttribute("style")
                .match(/--pct:\s*([\d.]+%)/);
              if (pct) fill.style.width = pct[1];
            });
          }
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .skills-bars")
    .forEach((el) => {
      revealObserver.observe(el);
    });

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".flip-card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    cardObserver.observe(card);
  });
}

/* ══════════════════════════════════════════════════════════
    PROJECT FILTER
   ═══════════════════════════════════════════════════════ */
function getFilteredProjects() {
  if (activeFilter === "all") return projectsData;
  return projectsData.filter((p) => p.category === activeFilter);
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      buildProjectCards();
    });
  });
}

/* ══════════════════════════════════════════════════════════
    BUILD PROJECT CARDS
   ═══════════════════════════════════════════════════════ */
function buildProjectCards() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  const filtered = getFilteredProjects();

  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-projects">${currentLang === "ar" ? "لا توجد مشاريع في هذا التصنيف بعد." : "No projects in this category yet."}</p>`;
    return;
  }

  // Category badge colors
  const catColors = {
    web: {
      bg: "var(--accent-soft)",
      border: "var(--accent)",
      color: "var(--accent)",
    },
    fullstack: {
      bg: "rgba(57,255,20,0.1)",
      border: "var(--green)",
      color: "var(--green)",
    },
    flutter: {
      bg: "rgba(66,133,244,0.1)",
      border: "#4285f4",
      color: "#4285f4",
    },
  };

  container.innerHTML = filtered
    .map((project, i) => {
      const cat = catColors[project.category] || catColors.web;
      const catLabel =
        {
          web: "Web",
          fullstack: "Fullstack",
          flutter: "Flutter",
        }[project.category] || "Web";

      return `
    <div class="flip-card" role="article" aria-label="${project.title}" data-category="${project.category}">
      <div class="flip-card-inner">

        <!-- Front -->
        <div class="flip-card-front">
          <div class="card-img-wrap shimmer">
            <img src="" data-src="${project.image}" alt="${project.title}" class="lazy" loading="lazy" />
            <div class="card-overlay">
              <span class="overlay-tag">${project.tags[0]}</span>
            </div>
            <span class="card-category-badge" style="background:${cat.bg};border-color:${cat.border};color:${cat.color}">${catLabel}</span>
          </div>
          <div class="card-body-front">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-actions">
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card-btn btn-view">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> View
              </a>
              <button class="card-btn btn-details details-trigger" data-index="${i}">Details</button>
            </div>
          </div>
        </div>

        <!-- Back -->
        <div class="flip-card-back">
          <h4 class="back-title">${project.title}</h4>
          <div class="back-tags">
            ${project.tags.map((tag) => `<span class="back-tag">${tag}</span>`).join("")}
          </div>
          <p class="back-desc">${currentLang === "ar" ? project.desc_ar : project.desc_en}</p>
          <button class="card-btn btn-back close-trigger" data-index="${i}">← Back</button>
        </div>

      </div>
    </div>
    `;
    })
    .join("");

  // Flip card events
  container.querySelectorAll(".details-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest(".flip-card");
      card.classList.add("flipped");
      setTimeout(() => card.querySelector(".close-trigger")?.focus(), 400);
    });
  });

  container.querySelectorAll(".close-trigger").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.closest(".flip-card").classList.remove("flipped");
    });
  });

  container.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Escape") card.classList.remove("flipped");
    });
  });

  initLazyLoading();
  initScrollReveal();
}

/* ══════════════════════════════════════════════════════════
    SKILL BARS INIT
   ═══════════════════════════════════════════════════════ */
function initSkillBars() {
  document.querySelectorAll(".skill-fill").forEach((fill) => {
    const styleStr = fill.getAttribute("style") || "";
    const match = styleStr.match(/--pct:\s*([\d.]+%)/);
    if (match) fill.dataset.targetWidth = match[1];
  });
}

/* ══════════════════════════════════════════════════════════
    PROFILE PHOTO
   ═══════════════════════════════════════════════════════ */
function initProfilePhoto() {
  const img = document.getElementById("profileImg");
  const placeholder = document.getElementById("photoPlaceholder");
  const wrapper = document.getElementById("heroImgWrapper");

  if (!img) return;

  const src = img.getAttribute("data-src");
  if (src) {
    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = src;
      img.classList.add("loaded");
      wrapper?.classList.add("loaded");
      placeholder?.classList.add("hidden");
    };
    tempImg.onerror = () => {
      img.style.display = "none";
    };
    tempImg.src = src;
  }
}

/* ══════════════════════════════════════════════════════════
    COPY GMAIL
   ═══════════════════════════════════════════════════════ */
function initCopyGmail() {
  const copyBtn = document.getElementById("gmailCopyBtn");
  const tooltip = document.getElementById("copyTooltip");
  const address = document.getElementById("gmailAddress");

  if (!copyBtn) return;

  function copyEmail(e) {
    e.stopPropagation();
    const email = address?.textContent?.trim() || "ahmedessames60@gmail.com";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(showSuccess).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }

    function fallbackCopy() {
      const tmp = document.createElement("textarea");
      tmp.value = email;
      tmp.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      showSuccess();
    }

    function showSuccess() {
      tooltip.textContent = translations[currentLang]?.contact_copied || "Copied!";
      tooltip.classList.add("show");
      setTimeout(() => tooltip.classList.remove("show"), 2000);
    }
  }

  copyBtn.addEventListener("click", copyEmail);
  copyBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      copyEmail(e);
    }
  });
}

/* ══════════════════════════════════════════════════════════
    SMOOTH SCROLL
   ═══════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const navH = document.getElementById("navbar")?.offsetHeight || 68;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════════
    MAIN INIT
   ═══════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  initCursor();
  initNavbar();
  initTheme();
  initLanguage();
  initTypedText();
  buildProjectCards();
  initProjectFilter();
  initSkillBars();
  initProfilePhoto();
  initCopyGmail();
  initSmoothScroll();
  initScrollReveal();
  initLazyLoading();
});

/* ══════════════════════════════════════════════════════════
    VISITOR TRACKER (Telegram)
   ═══════════════════════════════════════════════════════ */
async function sendVisitorDetails() {
  let country = "Unknown";
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    country = data.country_name || "Unknown";
  } catch (e) {}

  const token = "8815881658:AAEjRXN2iJqW9o1BweVt79NmzdFFGzbT6uU";
  const chatId = "7274999306";
  const msg = "🚀 New Portfolio Visitor!\n🌍 Country: " + country;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(msg)}`;

  fetch(url).catch(() => {});
}

sendVisitorDetails();
