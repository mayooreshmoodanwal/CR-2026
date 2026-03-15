/* ═══════════════════════════════════════════════════════
   components.js — Premium UI Interactions & GSAP Animations
   CR Election 2025 · v2.1 — Bug fixes + Enhanced interactions
   ═══════════════════════════════════════════════════════ */

// ════════════════════════════════════════════════════
//  EASING PRESETS
// ════════════════════════════════════════════════════
const EASE = {
  smooth: 'power3.out',
  bounce: 'back.out(1.7)',
  spring: 'elastic.out(1, 0.4)',
  snap: 'power4.out',
  gentle: 'sine.inOut',
  enter: 'power2.out',
  exit: 'power2.in',
};


// ════════════════════════════════════════════════════
//  THEME SYSTEM
// ════════════════════════════════════════════════════
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');

  const tl = gsap.timeline();
  tl.to('body', { scale: 0.99, duration: 0.15, ease: EASE.exit })
    .call(() => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    })
    .to('body', { scale: 1, duration: 0.4, ease: EASE.spring, clearProps: 'transform' });

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    gsap.fromTo(btn, { rotation: 0 }, { rotation: 360, duration: 0.6, ease: EASE.smooth, clearProps: 'transform' });
  }
}

// Init theme
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
})();


// ════════════════════════════════════════════════════
//  CURSOR GLOW
// ════════════════════════════════════════════════════
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(updateGlow);
  }
  updateGlow();
}


// ════════════════════════════════════════════════════
//  FLOATING PARTICLES
// ════════════════════════════════════════════════════
function createParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  const count = window.innerWidth < 640 ? 15 : 35;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 3 + 1;
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
    `;
    container.appendChild(particle);
    animateParticle(particle, size);
  }
}

function animateParticle(el, size) {
  gsap.to(el, {
    x: `+=${(Math.random() - 0.5) * 300}`,
    y: `+=${(Math.random() - 0.5) * 300}`,
    opacity: (size > 2 ? 0.35 : 0.15) + Math.random() * 0.1,
    duration: 10 + Math.random() * 15,
    delay: Math.random() * 8,
    ease: EASE.gentle,
    repeat: -1,
    yoyo: true,
  });
}


// ════════════════════════════════════════════════════
//  PAGE ENTRANCE — Safe: uses clearProps to avoid
//  leaving stale inline styles
// ════════════════════════════════════════════════════
function animatePageEntrance() {
  const tl = gsap.timeline({ defaults: { ease: EASE.smooth } });

  // Header
  tl.from('header', {
    y: -80, opacity: 0, duration: 0.8,
    clearProps: 'all',
  });

  // Steps
  tl.from('.step-item', {
    y: -30, opacity: 0, scale: 0.8,
    duration: 0.45, stagger: 0.07,
    clearProps: 'all',
  }, '-=0.4');

  tl.from('.step-conn', {
    scaleX: 0, opacity: 0,
    duration: 0.3, stagger: 0.05,
    clearProps: 'all',
  }, '-=0.35');

  // Active card — use clearProps to remove inline styles after animation
  const activeCard = document.querySelector('.card.active');
  if (activeCard) {
    tl.fromTo(activeCard,
      { opacity: 0, y: 50, scale: 0.93 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, clearProps: 'all' },
      '-=0.15'
    );
  }

  // Theme toggle and admin — use clearProps so inline styles don't persist
  const headerButtons = document.querySelectorAll('#theme-toggle, .admin-btn');
  if (headerButtons.length) {
    tl.fromTo(headerButtons,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, stagger: 0.1, ease: EASE.bounce, clearProps: 'all' },
      '-=0.5'
    );
  }
}


// ════════════════════════════════════════════════════
//  STEP TRANSITION — Fixed: clears inline styles
//  after animation so CSS classes work properly
// ════════════════════════════════════════════════════
(function patchGoToStep() {
  const check = setInterval(() => {
    if (typeof window.goToStep !== 'function' || window._goToStepPatched) return;

    const original = window.goToStep;

    window.goToStep = function(n) {
      const current = document.querySelector('.card.active');
      const currentStep = current ? current.id : null;
      const targetId = 'step' + n;

      // If there's no current card or we're going to the same step, just switch without animation
      if (!current || currentStep === targetId) {
        original(n);
        // Clear any residual inline styles from previous animations
        const next = document.getElementById(targetId);
        if (next) gsap.set(next, { clearProps: 'all' });
        return;
      }

      // Animate out current card
      gsap.to(current, {
        opacity: 0, y: -24, scale: 0.96,
        duration: 0.3,
        ease: EASE.exit,
        onComplete: () => {
          // IMPORTANT: Clear inline styles on the outgoing card
          // so that CSS classes control visibility again
          gsap.set(current, { clearProps: 'all' });

          // Call original to toggle classes
          original(n);

          // Animate in the new card
          const next = document.getElementById(targetId);
          if (next) {
            gsap.fromTo(next,
              { opacity: 0, y: 40, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: EASE.smooth,
                clearProps: 'all'  // Crucial: remove inline styles so CSS takes over
              }
            );
          }

          // Animate the step number
          const sn = document.getElementById('s' + n);
          if (sn) {
            gsap.fromTo(sn,
              { scale: 0.3, rotation: -90 },
              { scale: 1, rotation: 0, duration: 0.5, ease: EASE.bounce, clearProps: 'all' }
            );
          }

          // Animate connectors
          for (let i = 1; i < n; i++) {
            const conn = document.getElementById('c' + i);
            if (conn && conn.classList.contains('done')) {
              gsap.fromTo(conn,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.4, delay: i * 0.05, ease: EASE.snap, clearProps: 'all' }
              );
            }
          }
        }
      });
    };

    window._goToStepPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  SECTION SELECTION — Fixed: properly clears styles
// ════════════════════════════════════════════════════
(function patchSelectSection() {
  const check = setInterval(() => {
    if (typeof window.selectSection !== 'function' || window._selectSectionPatched) return;

    const original = window.selectSection;

    window.selectSection = function(sec) {
      const card = document.getElementById('sec-' + sec.toLowerCase());
      const otherKey = sec === 'Alpha' ? 'beta' : 'alpha';
      const other = document.getElementById('sec-' + otherKey);

      if (card) {
        const tl = gsap.timeline();
        tl.to(card, { scale: 0.92, duration: 0.12, ease: EASE.exit })
          .to(card, { scale: 1.08, duration: 0.35, ease: EASE.bounce })
          .to(card, { scale: 1, duration: 0.25, ease: EASE.gentle, clearProps: 'transform' });

        gsap.fromTo(card,
          { boxShadow: '0 0 0 0px rgba(124, 107, 255, 0.5)' },
          { boxShadow: '0 0 0 20px rgba(124, 107, 255, 0)', duration: 0.7, ease: EASE.enter, clearProps: 'boxShadow' }
        );
      }

      // Dim the other card briefly, then restore
      if (other) {
        gsap.to(other, {
          opacity: 0.5, scale: 0.97, duration: 0.3, ease: EASE.gentle,
          onComplete: () => {
            gsap.to(other, { opacity: 1, scale: 1, duration: 0.3, clearProps: 'all' });
          }
        });
      }

      original(sec);
    };

    window._selectSectionPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  CANDIDATE SELECTION — Fixed: clears inline styles
// ════════════════════════════════════════════════════
(function patchSelectCand() {
  const check = setInterval(() => {
    if (typeof window.selectCand !== 'function' || window._selectCandPatched) return;

    const original = window.selectCand;

    window.selectCand = function(id) {
      // Reset all cards
      document.querySelectorAll('.cand-card').forEach(c => {
        gsap.to(c, { scale: 1, y: 0, duration: 0.3, ease: EASE.smooth, clearProps: 'transform' });
      });

      original(id);

      const selected = document.getElementById('cand-' + id);
      if (selected) {
        gsap.fromTo(selected,
          { scale: 0.93, y: 4 },
          { scale: 1.04, y: -6, duration: 0.45, ease: EASE.bounce,
            onComplete: () => {
              gsap.to(selected, { scale: 1, y: -3, duration: 0.25, ease: EASE.gentle });
            }
          }
        );

        gsap.fromTo(selected,
          { boxShadow: '0 0 0 0px rgba(124,107,255,0.6)' },
          { boxShadow: '0 0 0 16px rgba(124,107,255,0)', duration: 0.6, ease: EASE.enter, clearProps: 'boxShadow' }
        );

        const avatar = selected.querySelector('.cand-avatar');
        if (avatar) {
          gsap.fromTo(avatar,
            { rotation: -8, scale: 1.2 },
            { rotation: 0, scale: 1, duration: 0.5, ease: EASE.spring, clearProps: 'all' }
          );
        }
      }
    };

    window._selectCandPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  RENDER CANDIDATES — Fixed: clears inline styles
// ════════════════════════════════════════════════════
(function patchRenderCandidates() {
  const check = setInterval(() => {
    if (typeof window.renderCandidates !== 'function' || window._renderCandPatched) return;

    const original = window.renderCandidates;

    window.renderCandidates = function() {
      original();

      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('#cands-grid .cand-card');
        gsap.fromTo(cards,
          { y: 50, opacity: 0, scale: 0.85 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.15,
            ease: EASE.bounce, clearProps: 'all' }
        );

        initTiltOnElements(cards);
      });
    };

    window._renderCandPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  VOTE SUCCESS — Fixed: uses fromTo with clearProps
// ════════════════════════════════════════════════════
(function patchShowReceipt() {
  const check = setInterval(() => {
    if (typeof window.showReceipt !== 'function' || window._receiptPatched) return;

    const original = window.showReceipt;

    window.showReceipt = function(v) {
      original(v);

      requestAnimationFrame(() => {
        const step6 = document.getElementById('step6');
        if (!step6) return;

        const tl = gsap.timeline({ delay: 0.15, defaults: { clearProps: 'all' } });

        const icon = step6.querySelector('.success-icon');
        if (icon) {
          tl.fromTo(icon,
            { scale: 0, rotation: -360, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.9, ease: EASE.bounce }
          );
        }

        const title = step6.querySelector('.success-title');
        if (title) {
          tl.from(title, { y: 30, opacity: 0, duration: 0.5, ease: EASE.smooth }, '-=0.3');
        }

        const sub = step6.querySelector('p');
        if (sub) {
          tl.from(sub, { y: 20, opacity: 0, duration: 0.4, ease: EASE.smooth }, '-=0.2');
        }

        tl.from('#vote-receipt .r-row', {
          x: -40, opacity: 0,
          duration: 0.4, stagger: 0.1, ease: EASE.snap,
        }, '-=0.1');

        const status = step6.querySelector('.status.success');
        if (status) {
          tl.from(status, { y: 20, opacity: 0, scale: 0.95, duration: 0.4, ease: EASE.smooth }, '-=0.1');
        }

        createConfetti();
      });
    };

    window._receiptPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  CONFETTI
// ════════════════════════════════════════════════════
function createConfetti() {
  const colors = ['#7c6bff', '#a78bfa', '#ff5f7e', '#00e5c8', '#ffaa2c', '#00d68f', '#ff6b81'];
  const shapes = ['circle', 'rect', 'triangle'];

  for (let i = 0; i < 60; i++) {
    const el = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 10 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    let borderRadius = '2px';
    if (shape === 'circle') borderRadius = '50%';
    if (shape === 'triangle') {
      el.style.cssText = `
        position: fixed; width: 0; height: 0;
        border-left: ${size/2}px solid transparent;
        border-right: ${size/2}px solid transparent;
        border-bottom: ${size}px solid ${color};
        pointer-events: none; z-index: 10000;
        left: 50%; top: 45%;
      `;
    } else {
      el.style.cssText = `
        position: fixed;
        width: ${size}px; height: ${shape === 'rect' ? size * 0.4 : size}px;
        background: ${color}; border-radius: ${borderRadius};
        pointer-events: none; z-index: 10000;
        left: 50%; top: 45%;
      `;
    }

    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 300 + Math.random() * 400;

    gsap.to(el, {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity - 200 + 300,
      rotation: Math.random() * 1080 - 540,
      opacity: 0,
      duration: 1.5 + Math.random() * 0.8,
      ease: 'power1.out',
      onComplete: () => el.remove(),
    });
  }
}


// ════════════════════════════════════════════════════
//  ADMIN PANEL — Fixed: clearProps on close
// ════════════════════════════════════════════════════
(function patchAdmin() {
  const check = setInterval(() => {
    if (typeof window.openAdmin !== 'function' || window._adminPatched) return;

    const originalOpen = window.openAdmin;
    const originalClose = window.closeAdmin;

    window.openAdmin = function() {
      originalOpen();

      const overlay = document.getElementById('admin-overlay');
      if (!overlay || !overlay.classList.contains('open')) return;

      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: EASE.smooth, clearProps: 'opacity' });

      const sidebar = document.getElementById('admin-sidebar');
      if (sidebar && sidebar.style.display !== 'none') {
        gsap.fromTo(sidebar, { x: -300 }, { x: 0, duration: 0.5, ease: EASE.snap, clearProps: 'transform' });

        gsap.fromTo(sidebar.querySelectorAll('.nav-item'),
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.03, delay: 0.2, ease: EASE.smooth, clearProps: 'all' }
        );
      }

      const auth = document.getElementById('admin-auth');
      if (auth && auth.style.display !== 'none') {
        const children = auth.querySelectorAll('.admin-auth-screen > *');
        gsap.fromTo(children,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.08, delay: 0.15, ease: EASE.smooth, clearProps: 'all' }
        );
      }
    };

    window.closeAdmin = function() {
      const overlay = document.getElementById('admin-overlay');
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0, duration: 0.3, ease: EASE.exit,
          onComplete: () => {
            originalClose();
            gsap.set(overlay, { clearProps: 'all' });
          }
        });
      } else {
        originalClose();
      }
    };

    window._adminPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  SHOW PAGE — Admin page transition (fixed)
// ════════════════════════════════════════════════════
(function patchShowPage() {
  const check = setInterval(() => {
    if (typeof window.showPage !== 'function' || window._showPagePatched) return;

    const original = window.showPage;

    window.showPage = async function(page) {
      await original(page);

      const pageEl = document.getElementById('page-' + page);
      if (!pageEl) return;

      const elements = pageEl.querySelectorAll('.stat, .time-card, .table-wrap, .toggle-row, .bar-chart, .status, .bar-item');
      gsap.fromTo(elements,
        { y: 24, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: EASE.smooth, clearProps: 'all' }
      );
    };

    window._showPagePatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  MODAL — Fixed
// ════════════════════════════════════════════════════
(function patchModals() {
  const check = setInterval(() => {
    if (typeof window.showModal !== 'function' || window._modalPatched) return;

    const original = window.showModal;

    window.showModal = function(title, sub, onConfirm) {
      original(title, sub, onConfirm);

      const modalEl = document.querySelector('#confirm-modal .modal');
      if (modalEl) {
        gsap.fromTo(modalEl,
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: EASE.bounce, clearProps: 'all' }
        );
      }
    };

    window._modalPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  ANIMATED NUMBER COUNTER — For stats (fixed)
// ════════════════════════════════════════════════════
(function patchRenderDashboard() {
  const check = setInterval(() => {
    if (typeof window.renderDashboard !== 'function' || window._dashPatched) return;

    const original = window.renderDashboard;

    window.renderDashboard = async function() {
      await original();

      document.querySelectorAll('#dash-stats .stat-val').forEach(el => {
        const text = el.textContent;
        const match = text.match(/^(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.slice(match[1].length);
          gsap.from({ val: 0 }, {
            val: target,
            duration: 1.2,
            ease: EASE.snap,
            onUpdate: function() {
              el.textContent = Math.round(this.targets()[0].val) + suffix;
            }
          });
        }
      });

      document.querySelectorAll('.bar-fill').forEach(bar => {
        const w = bar.style.width;
        bar.style.width = '0%';
        gsap.to(bar, { width: w, duration: 1, delay: 0.3, ease: EASE.snap });
      });
    };

    window._dashPatched = true;
    clearInterval(check);
  }, 80);
})();


// ════════════════════════════════════════════════════
//  RIPPLE EFFECT
// ════════════════════════════════════════════════════
function initRippleEffect() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    const maxDim = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      left: ${x}px; top: ${y}px;
      width: ${maxDim * 2}px; height: ${maxDim * 2}px;
      margin-left: ${-maxDim}px; margin-top: ${-maxDim}px;
    `;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  });
}


// ════════════════════════════════════════════════════
//  3D TILT EFFECT
// ════════════════════════════════════════════════════
function initTiltEffect() {
  initTiltOnElements(document.querySelectorAll('.section-card'));
}

function initTiltOnElements(elements) {
  elements.forEach(card => {
    if (card._tiltBound) return;
    card._tiltBound = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      gsap.to(card, {
        rotateX: (y - 0.5) * -10,
        rotateY: (x - 0.5) * 10,
        duration: 0.4,
        ease: EASE.enter,
        transformPerspective: 800,
        transformOrigin: 'center',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0, rotateY: 0,
        duration: 0.7,
        ease: EASE.spring,
        clearProps: 'transform',
      });
    });
  });
}


// ════════════════════════════════════════════════════
//  MAGNETIC BUTTONS
// ════════════════════════════════════════════════════
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.btn-primary, .admin-btn, #theme-toggle').forEach(btn => {
    if (btn._magneticBound) return;
    btn._magneticBound = true;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.2, y: y * 0.2,
        duration: 0.3, ease: EASE.enter,
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0, y: 0,
        duration: 0.5, ease: EASE.spring,
        clearProps: 'transform',
      });
    });
  });
}


// ════════════════════════════════════════════════════
//  BUTTON HOVER GLOW
// ════════════════════════════════════════════════════
function initHoverGlow() {
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn._glowBound) return;
    btn._glowBound = true;

    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        boxShadow: '0 12px 40px rgba(124, 107, 255, 0.5), 0 0 80px rgba(124, 107, 255, 0.12)',
        duration: 0.35, ease: EASE.smooth,
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        boxShadow: '0 4px 20px rgba(124, 107, 255, 0.3)',
        duration: 0.4, ease: EASE.smooth,
        clearProps: 'boxShadow',
      });
    });
  });
}


// ════════════════════════════════════════════════════
//  INPUT FOCUS
// ════════════════════════════════════════════════════
function initInputAnimations() {
  document.querySelectorAll('.input-field, input[type="text"], input[type="email"], input[type="password"], input[type="number"]').forEach(input => {
    if (input._focusBound) return;
    input._focusBound = true;

    input.addEventListener('focus', () => {
      gsap.to(input, { scale: 1.015, y: -1, duration: 0.25, ease: EASE.smooth });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, { scale: 1, y: 0, duration: 0.25, ease: EASE.smooth, clearProps: 'transform' });
    });
  });
}


// ════════════════════════════════════════════════════
//  SCROLL PARALLAX
// ════════════════════════════════════════════════════
function initScrollAnimations() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.orb').forEach((orb, i) => {
        gsap.to(orb, {
          y: scrollY * (i + 1) * 0.025,
          duration: 0.8,
          ease: EASE.gentle,
          overwrite: 'auto',
        });
      });
      ticking = false;
    });
  });
}


// ════════════════════════════════════════════════════
//  HOVER ELEVATION
// ════════════════════════════════════════════════════
function initHoverElevation() {
  document.querySelectorAll('.glass-card:not(.card), .time-card, .log-item, .cand-editor').forEach(el => {
    if (el._hoverBound) return;
    el._hoverBound = true;

    el.addEventListener('mouseenter', () => {
      gsap.to(el, { y: -3, duration: 0.3, ease: EASE.smooth });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { y: 0, duration: 0.4, ease: EASE.smooth, clearProps: 'transform' });
    });
  });
}


// ════════════════════════════════════════════════════
//  INITIALIZATION
// ════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      createParticles();
      animatePageEntrance();
      initCursorGlow();
      initRippleEffect();
      initTiltEffect();
      initMagneticButtons();
      initHoverGlow();
      initInputAnimations();
      initScrollAnimations();
      initHoverElevation();
    }, 150);
  });
});
