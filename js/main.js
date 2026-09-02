/**
 * THE VAULT — main.js
 * Premium Vintage Designer Bag Catalog
 */

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Sticky Header ──────────────────────────────────────────
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Mobile Navigation ──────────────────────────────────────
  const navLinks = document.getElementById('nav-links');
  const navToggle = document.getElementById('nav-toggle');
  let menuOpen = false;

  navToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navLinks.setAttribute('aria-expanded', String(menuOpen));
    navToggle.setAttribute('aria-label', menuOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      navLinks.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) {
      menuOpen = false;
      navLinks.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

  // ── Scroll Spy ─────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAs = document.querySelectorAll('.nav-links a[href^="#"]');

  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });

  sections.forEach(s => spy.observe(s));

  // ── Scroll-Triggered Animations ────────────────────────────
  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('visible'));
  }

  // ── Card 3D Tilt on Hover ──────────────────────────────────
  if (!prefersReducedMotion) {
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1400px) rotateY(${x * 3}deg) rotateX(${-y * 2}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
        setTimeout(() => { card.style.transition = ''; }, 500);
      });
    });
  }

  // ── Smooth scroll for hero CTA ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Contact Form ───────────────────────────────────────────
  const submitBtn = document.getElementById('contact-submit');
  const successMsg = document.getElementById('form-success');

  submitBtn?.addEventListener('click', () => {
    const name  = document.getElementById('fname');
    const email = document.getElementById('femail');
    let valid = true;

    [name, email].forEach(field => {
      const ok = field.value.trim().length > 0;
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok) { field.focus(); valid = false; }
    });

    if (!valid) return;

    // Simulate send
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.style.display = 'none';
      successMsg.style.display = 'block';
    }, 900);
  });

  // Clear aria-invalid on input
  document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(field => {
    field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
  });

});
