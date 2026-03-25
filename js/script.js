/* =====================================================
   script.js
   Handles content injection, navbar behaviour,
   scroll animations, and contact form.
   ===================================================== */

(function () {
    'use strict';

    /* ── Populate content from content.js ── */
    function populateContent() {
        const C = window.CONTENT;
        if (!C) return;

        if (C.meta?.title) document.title = C.meta.title;

        /* Nav links */
        const navLinks = document.getElementById('navLinks');
        const mobileLinks = document.getElementById('mobileLinks');
        const navCta = document.getElementById('navCta');
        const mobileCta = document.getElementById('mobileCta');
        if (navLinks && C.nav?.links) {
            navLinks.innerHTML = C.nav.links.map(l =>
                `<li><a href="${l.href}">${l.label}</a></li>`
            ).join('');
        }
        if (mobileLinks && C.nav?.links) {
            mobileLinks.innerHTML = C.nav.links.map(l =>
                `<li><a href="${l.href}" class="mobile-link">${l.label}</a></li>`
            ).join('');
        }
        if (navCta && C.nav?.cta) navCta.textContent = C.nav.cta.label;
        if (mobileCta && C.nav?.cta) mobileCta.textContent = C.nav.cta.label;

        /* Simple innerHTML replacements via data-content="section.key" */
        document.querySelectorAll('[data-content]').forEach(el => {
            const keys = el.dataset.content.split('.');
            let val = C;
            for (const k of keys) val = val?.[k];
            if (val !== undefined) el.innerHTML = val;
        });

        /* About bullets */
        const aboutList = document.querySelector('.about-list');
        if (aboutList) {
            aboutList.innerHTML = C.about.bullets.map(b =>
                `<li><span class="about-check">✦</span><span>${b}</span></li>`
            ).join('');
        }

        /* About stats */
        const statsGrid = document.querySelector('.about-stats');
        if (statsGrid) {
            statsGrid.innerHTML = C.about.stats.map(s =>
                `<div class="stat-card fade-up">
                    <div class="stat-icon">${s.icon}</div>
                    <div class="stat-num gradient-text">${s.title}</div>
                    <div class="stat-desc">${s.desc}</div>
                </div>`
            ).join('');
        }

        /* Services grid */
        const servicesGrid = document.querySelector('.services-grid');
        if (servicesGrid) {
            servicesGrid.innerHTML = C.services.items.map((s, i) =>
                `<div class="service-card fade-up" style="animation-delay:${(i * 0.1).toFixed(2)}s">
                    <div class="service-icon">${s.icon}</div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                    <div class="service-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>`
            ).join('');
        }

        /* Tech cards */
        const techCards = document.querySelector('.tech-cards');
        if (techCards) {
            techCards.innerHTML = C.tech.items.map((t, i) =>
                `<div class="tech-card" style="z-index:${C.tech.items.length - i}">
                    <div class="tech-card-icon">${t.icon}</div>
                    <div class="tech-card-name">${t.name}</div>
                </div>`
            ).join('');
        }

        /* Process steps */
        const processSteps = document.querySelector('.process-steps');
        if (processSteps) {
            processSteps.innerHTML = C.process.steps.map((s, i) =>
                `<div class="process-step ${i % 2 === 0 ? 'slide-from-right' : 'slide-from-left'}">
                    <div class="step-badge">${s.num}</div>
                    <div class="step-content">
                        <h3>${s.title}</h3>
                        <p>${s.desc}</p>
                    </div>
                </div>`
            ).join('');
        }

        /* Contact info cards */
        const contactStack = document.querySelector('.contact-info-stack');
        if (contactStack) {
            contactStack.innerHTML = C.contact.info.map(item =>
                `<div class="contact-card">
                    <div class="contact-card-icon">${item.icon}</div>
                    <div>
                        <div class="contact-card-label">${item.label}</div>
                        <div class="contact-card-value">${item.value}</div>
                    </div>
                </div>`
            ).join('');
        }

        /* Footer columns */
        const footerLinks = document.getElementById('footerLinks');
        if (footerLinks && C.footer?.columns) {
            footerLinks.innerHTML = C.footer.columns.map(col =>
                `<div class="footer-col">
                    <div class="footer-col-title">${col.title}</div>
                    ${col.links.map(l =>
                    `<a href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ''}>${l.label}</a>`
                ).join('')}
                </div>`
            ).join('');
        }

        /* Form placeholders */
        const f = C.contact.form;
        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const projectEl = document.getElementById('project');
        const messageEl = document.getElementById('message');
        const submitEl = document.querySelector('#contact-form button[type="submit"]');
        if (nameEl) nameEl.placeholder = f.namePlaceholder;
        if (emailEl) emailEl.placeholder = f.emailPlaceholder;
        if (projectEl) projectEl.placeholder = f.projectPlaceholder;
        if (messageEl) messageEl.placeholder = f.messagePlaceholder;
        if (submitEl) submitEl.textContent = f.submit;
    }

    populateContent();

    /* ── Navbar: scroll + mobile menu ── */
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 40);
        navbar.classList.toggle('hidden', y > 80 && y > lastScrollY);
        lastScrollY = y;
        highlightActiveNav();
    }, { passive: true });

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        navbar.classList.toggle('menu-open', isOpen);

        const [s1, , s3] = menuToggle.querySelectorAll('span');
        const mid = menuToggle.querySelectorAll('span')[1];

        s1.style.transform = isOpen ? 'rotate(45deg) translate(5px, 6px)' : '';
        mid.style.opacity = isOpen ? '0' : '';
        s3.style.transform = isOpen ? 'rotate(-45deg) translate(5px, -6px)' : '';
    });

    /* Close mobile menu when a link is clicked */
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

    /* ── Alternating process card slide-in ── */
    const processSlideEls = document.querySelectorAll('.slide-from-right, .slide-from-left');
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = (i * 0.1) + 's';
                entry.target.classList.add('visible');
                processObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    processSlideEls.forEach(el => processObserver.observe(el));

    /* ── Contact form ── */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            const formData = new FormData(form);

            const payload = {
                name: formData.get('name')?.trim(),
                email: formData.get('email')?.trim(),
                project: formData.get('project')?.trim(),
                message: formData.get('message')?.trim(),
                company: formData.get('company')?.trim(),
                turnstileToken: formData.get('cf-turnstile-response'),
            };

            try {
                const response = await fetch('https://website-contact-worker.autominds.workers.dev', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (data.ok) {
                    alert('Message sent successfully.');
                    form.reset();

                    if (window.turnstile) {
                        turnstile.reset();
                    }
                } else {
                    alert(data.error || 'Failed to send message.');
                }
            } catch (error) {
                alert('Network error. Please try again.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send';
            }
        });
    }

    /* ── Smooth scroll for all anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

})();
