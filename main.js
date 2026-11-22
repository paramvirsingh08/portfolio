/* ============================================
   PARAMVIR SINGH — PORTFOLIO
   main.js

   Cinematic Design-Tool Reel Animations
   Single Easing: cubic-bezier(.16, 1, .3, 1)
   Animate ONLY transform, opacity, filter
   ============================================ */

// ============================================
// DATA ARRAYS (Edit directly below!)
// ============================================

// 1. PROJECTS (2x2 numbered cards)
const PROJECTS = [
  {
    id: '01',
    title: 'Smart Library Management System — Automated QR Tracking & Fine Ledger',
    description: 'Full-stack library circulation system with optical webcam QR scanner, real-time book borrowing/renewals, fine automation, and Chart.js analytics.',
    outcomes: [
      'Live optical HTML5 QR code webcam scanning for instant check-in, check-out, and catalog lookup',
      'Automated overdue fine calculator (₹5/day) with transaction ledger, payment receipts, and role-based permissions',
      'Executive analytics dashboard with 6-month volume charts, category distributions, and CSV report export'
    ],
    tech: ['Python', 'Flask', 'MySQL', 'Bootstrap 5', 'Chart.js', 'QR Scanner', 'REST API'],
    live: null,
    github: null,
    badge: 'In Active Development'
  },
  {
    id: '02',
    title: 'CalcPro — Scientific Calculator & Smart Unit/Currency Converter',
    description: 'Featured on LinkedIn (368+ impressions) — modern glassmorphic all-in-one calculator with scientific precision, live currency conversion, and unit converter.',
    outcomes: [
      'Engineered beyond basic 10-line calculators with scientific precision (trigonometry, logarithms, powers, roots, DEG/RAD)',
      'Live exchange rate currency conversion across 30+ world currencies with instant offline fallback',
      'Interactive calculation history drawer, Jitter sliding text animations, and full physical keyboard mapping'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'ExchangeRate API', 'UI/UX'],
    live: 'https://paramvirsingh08.github.io/calcpro/',
    github: 'https://github.com/paramvirsingh08/calcpro',
    badge: 'Live on GitHub'
  },
  {
    id: '03',
    title: 'IPL Match Score Predictor — Machine Learning Pipeline & Web App',
    description: 'End-to-end ML application predicting IPL 2nd-innings scores in real-time, benchmarked across 6 algorithms (Random Forest, XGBoost, Decision Tree, SVM, KNN, Linear Regression).',
    outcomes: [
      'Trained and benchmarked 6 machine learning models across 200,000+ ball-by-ball IPL match records',
      'Engineered optimal feature pipeline (run-rate, wickets in hand, venue, team match-up) achieving top performance with Random Forest',
      'Dual delivery interface: interactive Flask web application and real-time terminal CLI prediction tool'
    ],
    tech: ['Python', 'Scikit-Learn', 'Random Forest', 'XGBoost', 'Flask', 'Pandas', 'NumPy'],
    live: null,
    github: null,
    badge: 'In Active Development'
  },
  {
    id: '04',
    title: 'Cinematic Developer Portfolio (Figma Edition)',
    description: 'This exact website: 60fps GPU animations, Figma-inspired multiplayer cursors, wireframe intro reel, and zero external libraries.',
    outcomes: [
      'Crafted from scratch using plain HTML, CSS, and vanilla JavaScript without any external libraries',
      'Implemented cinematic load intro, masked headline reveals, and lerped scroll parallax',
      'Strictly optimized GPU-accelerated rendering animating only transform, opacity, and filter'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', '60fps GPU', 'Design-Tool UI'],
    live: 'https://paramvirsingh08.github.io/portfolio/',
    github: 'https://github.com/paramvirsingh08/portfolio',
    badge: 'Live on GitHub'
  }
];

// 2. SKILLS (Technical Categories & Tools)
const SKILLS = [
  { category: 'Languages', items: 'Python · C · C++ · SQL · JavaScript (ES6+)' },
  { category: 'Frontend',  items: 'HTML5 · CSS3 · JavaScript · Responsive Design · Bootstrap' },
  { category: 'Backend',   items: 'Flask · RESTful APIs · Modular Architecture' },
  { category: 'Desktop',   items: 'Tkinter (Python GUI) · Event-Driven Apps' },
  { category: 'AI-ML',     items: 'Machine Learning Fundamentals · Data Preprocessing' },
  { category: 'Core CS',   items: 'Object-Oriented Programming (OOP) · Data Structures · Algorithms' },
  { category: 'Tools',     items: 'Git · GitHub · VS Code · Linux · Figma · Postman' }
];

// 3. TIMELINE (Education & Experience, years in red right-aligned)
const TIMELINE = [
  {
    year: '2026 — 2029',
    title: 'B.Tech — Computer Science & Engineering (Lateral Entry)',
    organization: 'The Technological Institute of Textiles & Sciences (TIT&S), Bhiwani',
    description: 'Currently pursuing 2nd year B.Tech in CSE. Focusing on core software engineering, algorithms, data structures, and modern full-stack architectures.'
  },
  {
    year: '2025',
    title: 'Python Developer',
    organization: 'Solitaire Infosystems · Mohali District, Punjab (Hybrid)',
    description: 'Developed Python applications using Flask & Tkinter, integrated database systems (SQL), and applied modular OOP & Machine Learning logic.'
  },
  {
    year: 'Jun — Jul 2024',
    title: 'Front-End Programmer Intern',
    organization: 'Solitaire Infosystems Pvt. Ltd. · Mohali District, Punjab (Hybrid)',
    description: 'Contributed to responsive web applications, collaborating closely with UI/UX designers and backend developers on frontend performance and component reusability.'
  },
  {
    year: '2023 — 2026',
    title: 'Diploma in Computer Science & Engineering',
    organization: 'Govt. Polytechnic College, Meham · Rohtak / Bhiwani, Haryana',
    description: 'Completed 3-year technical diploma building strong hands-on foundations in C, C++, Python, software logic, and practical programming.'
  }
];

// ——— 7 PASTEL MULTIPLAYER CURSOR TAGS —————————
const CURSOR_DEFS = [
  { name: 'Motion',  color: '#ffd45e', bx: 15, by: 22, spdX: 0.018, spdY: 0.022 },
  { name: 'Copy',    color: '#6ec1ff', bx: 78, by: 18, spdX: 0.015, spdY: 0.019 },
  { name: 'Review',  color: '#ff8fb1', bx: 84, by: 48, spdX: 0.021, spdY: 0.014 },
  { name: 'Design',  color: '#b79cff', bx: 22, by: 62, spdX: 0.017, spdY: 0.023 },
  { name: 'Ship',    color: '#7bd88f', bx: 68, by: 74, spdX: 0.024, spdY: 0.016 },
  { name: 'Debug',   color: '#ff9f5a', bx: 42, by: 82, spdX: 0.013, spdY: 0.020 },
  { name: 'Tester',  color: '#5ee0d0', bx: 35, by: 34, spdX: 0.020, spdY: 0.015 }
];

// ——— REUSABLE ICONS ——————————————————————————
const ICON_EXTERNAL = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const ICON_GITHUB = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35
  6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16
  2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44
  5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>`;

// ——— REDUCED MOTION HELPER ———————————————————
const isReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================
// DYNAMIC DOM RENDERERS
// ============================================

/**
 * Render 4 Projects from PROJECTS array
 */
function renderProjects() {
  const grid = document.getElementById('workGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    let actionButtons = '';

    if (p.live || p.github) {
      const liveBtn = p.live
        ? `<a href="${p.live}" class="project-link" target="_blank" rel="noopener" aria-label="View ${p.title} live in new tab">
            ${ICON_EXTERNAL} Live
          </a>`
        : '';

      const githubBtn = p.github
        ? `<a href="${p.github}" class="project-link" target="_blank" rel="noopener" aria-label="${p.title} on GitHub">
            ${ICON_GITHUB} GitHub
          </a>`
        : '';

      actionButtons = `
        <div class="project-links">
          ${liveBtn}
          ${githubBtn}
        </div>
      `;
    } else {
      actionButtons = `
        <div class="project-links">
          <span class="project-wip-pill" title="Project is actively being built and refined">
            <span class="wip-dot" aria-hidden="true"></span>
            In Active Development · Launching Soon
          </span>
        </div>
      `;
    }

    return `
      <article class="project-card reveal" data-selection="Project Card ${p.id}">
        <div class="project-num">${p.id}</div>
        <h3 class="project-title selectable">${p.title}</h3>
        <p style="font-size:0.88rem; color:var(--muted); line-height:1.65; margin-top:-0.2rem;">${p.description}</p>
        <ul class="project-outcomes">
          ${p.outcomes.map(o => `<li>${o}</li>`).join('')}
        </ul>
        <div class="project-chips">
          ${p.tech.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
        ${actionButtons}
      </article>
    `;
  }).join('');
}

/**
 * Render Skills Table from SKILLS array
 */
function renderSkills() {
  const tbody = document.getElementById('skillsTableBody');
  if (!tbody) return;

  tbody.innerHTML = SKILLS.map(s => `
    <tr class="skills-row">
      <td>${s.category}</td>
      <td>${s.items}</td>
    </tr>
  `).join('');
}

/**
 * Render Timeline Items from TIMELINE array
 */
function renderTimeline() {
  const list = document.getElementById('timelineList');
  if (!list) return;

  list.innerHTML = TIMELINE.map(t => `
    <li class="timeline-item">
      <div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-sub">${t.organization}</div>
        <p class="tl-desc">${t.description}</p>
      </div>
      <div class="tl-year">${t.year}</div>
    </li>
  `).join('');
}

// ============================================
// REUSABLE HELPER FUNCTIONS
// ============================================

/**
 * reveal(element, options)
 * Observes element and applies .revealed when visible.
 */
function reveal(element, options = {}) {
  if (!element) return;
  if (isReducedMotion()) {
    element.classList.add('revealed');
    if (options.onReveal) options.onReveal(element);
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        if (options.onReveal) options.onReveal(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: options.threshold || 0.15,
    rootMargin: options.rootMargin || '0px 0px -40px 0px'
  });

  observer.observe(element);
}

/**
 * countUp(element, target, duration)
 * Eased counting animation matching cubic-bezier(.16, 1, .3, 1)
 */
function countUp(element, target, duration = 1400) {
  if (!element) return;
  const suffix = target === 100 ? '%' : '+';

  if (isReducedMotion()) {
    element.textContent = target + (target === 100 ? '%' : (target > 5 ? '+' : ''));
    return;
  }

  const startTime = performance.now();
  function frame(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.round(eased * target);
    element.textContent = currentVal + (target === 100 ? '%' : (target > 5 ? '+' : ''));

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      element.textContent = target + (target === 100 ? '%' : (target > 5 ? '+' : ''));
    }
  }
  requestAnimationFrame(frame);
}

/**
 * selectionBox(element, options)
 * Draws a Figma-style blue selection box with 4 corner handles
 */
function selectionBox(element, options = {}) {
  if (!element || isReducedMotion()) return;

  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;

  const box = document.createElement('div');
  box.className = 'active-selection-box';

  const padX = options.paddingX || 8;
  const padY = options.paddingY || 6;
  const left = rect.left - padX + window.scrollX;
  const top  = rect.top - padY + window.scrollY;
  const w    = rect.width + padX * 2;
  const h    = rect.height + padY * 2;

  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.style.width = `${w}px`;
  box.style.height = `${h}px`;

  // 4 Handles
  ['tl', 'tr', 'bl', 'br'].forEach(pos => {
    const handle = document.createElement('span');
    handle.className = `bp-handle bp-${pos}`;
    box.appendChild(handle);
  });

  // Label tag
  if (options.label || element.dataset.selection) {
    const tag = document.createElement('span');
    tag.className = 'active-selection-tag';
    tag.textContent = options.label || element.dataset.selection;
    box.appendChild(tag);
  }

  document.body.appendChild(box);

  requestAnimationFrame(() => {
    box.classList.add('visible');
  });

  const stayDuration = options.duration || 1200;
  setTimeout(() => {
    box.classList.remove('visible');
    setTimeout(() => box.remove(), 550);
  }, stayDuration);
}

// ============================================
// MAIN BOOTSTRAP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all data-driven sections
  renderProjects();
  renderSkills();
  renderTimeline();

  // 2. Setup interactive basics
  initPhotoFallback();
  initMobileMenu();
  initNavScroll();
  initSmoothScroll();
  initCopyEmail();

  // 3. Handle Reduced Motion check
  if (isReducedMotion()) {
    document.body.classList.add('hero-ready');
    const overlay = document.getElementById('introOverlay');
    if (overlay) overlay.remove();
    initScrollAnimations();
    return;
  }

  // 4. Initialize cinematic animation suite
  initIntroSequence();
  initFloatingCursors();
  initScrollAnimations();
  initParallax();
});

// ————————————————————————————————————————————
// 1. LOAD INTRO SEQUENCE (~2.7s, Click to Skip)
// ————————————————————————————————————————————
function initIntroSequence() {
  const overlay = document.getElementById('introOverlay');
  const spinner = document.getElementById('introSpinner');
  const tagsContainer = document.getElementById('introTags');
  const frames = document.querySelectorAll('.intro-frame');
  if (!overlay) return;

  let skipped = false;

  const finishIntro = () => {
    if (skipped) return;
    skipped = true;
    overlay.classList.add('fade-out');
    document.body.classList.add('hero-ready');

    // Trigger hero selection box flash
    setTimeout(() => {
      const heroName = document.getElementById('heroName');
      if (heroName) selectionBox(heroName, { label: 'Hero Name · 1440 × 900', duration: 1500 });
    }, 600);

    setTimeout(() => {
      overlay.remove();
    }, 1150);
  };

  // Click anywhere to skip immediately
  overlay.addEventListener('click', finishIntro);

  // Phase 1: Draw red line
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });

  // Phase 2: Stagger 7 pastel cursor tags (110ms each)
  const tagCoords = [
    { x: 18, y: 24 },
    { x: 74, y: 16 },
    { x: 82, y: 52 },
    { x: 20, y: 65 },
    { x: 70, y: 78 },
    { x: 38, y: 80 },
    { x: 44, y: 30 }
  ];

  tagCoords.forEach((coord, i) => {
    const def = CURSOR_DEFS[i];
    const tagEl = document.createElement('div');
    tagEl.className = 'intro-tag-pill';
    tagEl.style.left = `${coord.x}%`;
    tagEl.style.top = `${coord.y}%`;
    tagEl.style.background = def.color;
    tagEl.innerHTML = `<span class="tag-sq"></span><span>${def.name}</span>`;
    tagsContainer.appendChild(tagEl);

    setTimeout(() => {
      if (!skipped) tagEl.classList.add('pop-in');
    }, 200 + i * 110);
  });

  // Phase 3: Spinner fades out, blueprint wireframe frames scale in
  setTimeout(() => {
    if (skipped) return;
    if (spinner) spinner.classList.add('fade-out');
    frames.forEach((frame, idx) => {
      setTimeout(() => {
        if (!skipped) frame.classList.add('active');
      }, idx * 120);
    });
  }, 1250);

  // Phase 4: Overlay fades out at ~2.7s
  setTimeout(() => {
    finishIntro();
  }, 2700);
}

// ————————————————————————————————————————————
// 2. PARALLAX EFFECT (LERPED SCROLL)
// ————————————————————————————————————————————
function initParallax() {
  const heroBgText = document.getElementById('heroBgText');
  const heroPhoto  = document.getElementById('heroPhoto');
  if (!heroBgText && !heroPhoto) return;

  let currentScroll = 0;
  let targetScroll  = 0;

  window.addEventListener('scroll', () => {
    targetScroll = window.scrollY;
  }, { passive: true });

  function tick() {
    currentScroll += (targetScroll - currentScroll) * 0.1;

    if (currentScroll < window.innerHeight * 1.5) {
      if (heroBgText) {
        heroBgText.style.transform = `translate(-50%, -50%) translate3d(0, ${currentScroll * 0.32}px, 0)`;
      }
      if (heroPhoto) {
        heroPhoto.style.transform = `translate3d(0, ${currentScroll * 0.14}px, 0)`;
      }
    }

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ————————————————————————————————————————————
// 3. FLOATING MULTIPLAYER CURSORS
// ————————————————————————————————————————————
function initFloatingCursors() {
  const layer = document.getElementById('cursorLayer');
  if (!layer || window.innerWidth < 768) return;

  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.5;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  const cursorNodes = CURSOR_DEFS.map((d, i) => {
    const el = document.createElement('div');
    el.className = 'fake-cursor';
    el.innerHTML = `
      <svg class="cursor-arrow" viewBox="0 0 18 22" fill="none">
        <path d="M1 1L6.5 19.5L9.5 13L17 11L1 1Z" fill="${d.color}" stroke="${d.color}" stroke-width="0.5"/>
      </svg>
      <span class="cursor-tag" style="background:${d.color}">
        <span class="tag-sq"></span>
        <span>${d.name}</span>
      </span>`;
    layer.appendChild(el);

    return {
      el,
      def: d,
      angleX: i * 1.35,
      angleY: i * 0.95,
      cx: window.innerWidth * (d.bx / 100),
      cy: window.innerHeight * (d.by / 100)
    };
  });

  function loop() {
    cursorNodes.forEach(c => {
      c.angleX += c.def.spdX;
      c.angleY += c.def.spdY;

      // Mouse follow with lerp 0.05
      c.cx += (mouseX - c.cx) * 0.05;
      c.cy += (mouseY - c.cy) * 0.05;

      // Sin/cos orbital drift
      const offsetX = Math.sin(c.angleX) * 75 + Math.cos(c.angleX * 0.6) * 35;
      const offsetY = Math.cos(c.angleY) * 55 + Math.sin(c.angleY * 0.5) * 25;

      const x = c.cx + offsetX;
      const y = c.cy + offsetY;

      // Only transform animated for strict 60fps GPU smoothness
      c.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// ————————————————————————————————————————————
// 4. SCROLL ANIMATIONS (IntersectionObserver)
// ————————————————————————————————————————————
function initScrollAnimations() {
  // Statement Section Reveal + Selection Box Flash
  const statementText = document.getElementById('statementText');
  if (statementText) {
    reveal(statementText, {
      threshold: 0.3,
      onReveal: (el) => {
        setTimeout(() => {
          selectionBox(el, { label: 'Manifesto · Typography', duration: 1600 });
        }, 300);
      }
    });
  }

  // Quote Card Drop & Tilt (-6deg to 3deg)
  const quoteCard = document.getElementById('quoteCard');
  if (quoteCard) {
    reveal(quoteCard, { threshold: 0.2 });
  }

  // Project Cards
  document.querySelectorAll('.project-card').forEach(card => {
    reveal(card, { threshold: 0.15 });
  });

  // Stat Numbers Count-up
  document.querySelectorAll('.stat-num[data-count]').forEach(numEl => {
    const target = +numEl.dataset.count;
    reveal(numEl, {
      threshold: 0.4,
      onReveal: () => countUp(numEl, target, 1400)
    });
  });

  // Skills Table Rows (staggered from right)
  const skillRows = document.querySelectorAll('.skills-row');
  skillRows.forEach((row, idx) => {
    row.style.transitionDelay = `${idx * 70}ms`;
    reveal(row, { threshold: 0.1 });
  });

  // How I Work Process Steps
  const processSteps = document.querySelectorAll('.process-step');
  processSteps.forEach((step, idx) => {
    step.style.transitionDelay = `${idx * 90}ms`;
    reveal(step, { threshold: 0.1 });
  });

  // Timeline Items (staggered from right)
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, idx) => {
    item.style.transitionDelay = `${idx * 90}ms`;
    reveal(item, { threshold: 0.1 });
  });

  // Footer Headline Reveal + Selection Box
  const footerHeadline = document.getElementById('footerHeadline');
  if (footerHeadline) {
    reveal(footerHeadline, {
      threshold: 0.3,
      onReveal: (el) => {
        setTimeout(() => {
          selectionBox(el, { label: 'CTA · Header Block', duration: 1500 });
        }, 300);
      }
    });
  }

  // Generic reveal elements (Rise 46px + Blur)
  document.querySelectorAll('.reveal').forEach(el => {
    reveal(el, { threshold: 0.1 });
  });
}

// ————————————————————————————————————————————
// 5. PHOTO FALLBACK
// ————————————————————————————————————————————
function initPhotoFallback() {
  const img = document.getElementById('heroImg');
  const fb  = document.getElementById('photoFallback');
  if (!img || !fb) return;

  const showFallback = () => {
    img.style.display = 'none';
    fb.style.display = 'flex';
  };

  img.addEventListener('error', showFallback);
  if (img.complete && img.naturalHeight === 0) showFallback();
}

// ————————————————————————————————————————————
// 6. MOBILE MENU
// ————————————————————————————————————————————
function initMobileMenu() {
  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ————————————————————————————————————————————
// 7. NAV SCROLL
// ————————————————————————————————————————————
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ————————————————————————————————————————————
// 8. SMOOTH ANCHOR SCROLLING
// ————————————————————————————————————————————
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetId = a.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ————————————————————————————————————————————
// 9. CLICK-TO-COPY EMAIL INTERACTION
// ————————————————————————————————————————————
function initCopyEmail() {
  const emailBtn = document.getElementById('emailBtn');
  if (!emailBtn) return;

  emailBtn.addEventListener('click', () => {
    const email = 'paramvirparmar080304@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        const textSpan = emailBtn.querySelector('.btn-text');
        if (textSpan) {
          const original = textSpan.textContent;
          textSpan.textContent = '✓ Copied to clipboard!';
          setTimeout(() => { textSpan.textContent = original; }, 2200);
        }
      }).catch(() => {});
    }
  });
}
