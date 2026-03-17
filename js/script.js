/* =====================================================
   AutoMinds Labs — script.js
   ===================================================== */

(function () {
    'use strict';

    /* ── Navbar: scroll + mobile menu ── */
    const navbar     = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
        highlightActiveNav();
    }, { passive: true });

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        navbar.classList.toggle('menu-open', isOpen);

        const [s1, , s3] = menuToggle.querySelectorAll('span');
        const mid         = menuToggle.querySelectorAll('span')[1];

        s1.style.transform  = isOpen ? 'rotate(45deg) translate(5px, 6px)'  : '';
        mid.style.opacity   = isOpen ? '0' : '';
        s3.style.transform  = isOpen ? 'rotate(-45deg) translate(5px, -6px)' : '';
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            navbar.classList.remove('menu-open');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
    });

    /* ── Active nav link highlight on scroll ── */
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNav() {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) {
                current = sec.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + current
            );
        });
    }

    /* ── Scroll-reveal animations (IntersectionObserver) ── */
    const fadeEls = document.querySelectorAll('.fade-up');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target); // fire once
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => revealObserver.observe(el));

    /* ── Contact form ── */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn        = contactForm.querySelector('button[type="submit"]');
            const original   = btn.textContent;

            btn.textContent          = 'Message Sent ✓';
            btn.style.background     = 'linear-gradient(135deg, #4bffc0, #1da87a)';
            btn.style.boxShadow      = '0 4px 20px rgba(75,255,192,0.3)';
            btn.disabled             = true;

            setTimeout(() => {
                btn.textContent      = original;
                btn.style.background = '';
                btn.style.boxShadow  = '';
                btn.disabled         = false;
                contactForm.reset();
            }, 3500);
        });
    }

    /* ── Smooth scroll for all anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const top    = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

})();
