// ============================================
// PERFORMANCE-OPTIMIZED PORTFOLIO SCRIPT
// ============================================

// ---- PASSWORD GATE ----
(function () {
    const gate = document.getElementById('password-gate');
    if (!gate) return;
    if (sessionStorage.getItem('am_unlocked') === '1') { gate.classList.add('hidden'); return; }

    const input  = document.getElementById('pw-input');
    const btn    = document.getElementById('pw-submit');
    const error  = document.getElementById('pw-error');
    const box    = gate.querySelector('.pw-box');

    function attempt() {
        if (input.value === 'progress') {
            sessionStorage.setItem('am_unlocked', '1');
            gate.classList.add('hidden');
        } else {
            error.textContent = 'INCORRECT PASSWORD';
            box.classList.remove('shake');
            void box.offsetWidth;
            box.classList.add('shake');
            input.value = '';
            input.focus();
        }
    }

    btn.addEventListener('click', attempt);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });

    const eye = document.getElementById('pw-eye');
    eye.addEventListener('click', () => {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        eye.querySelector('i').className = show ? 'fas fa-eye-slash' : 'fas fa-eye';
    });
})();

// ---- LOADER: Remove instantly, no fake delay ----
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');

    // ---- HERO NAME: Split letters for 3D drop animation ----
    document.querySelectorAll('.hero-name .name-first, .hero-name .name-last').forEach((el, wi) => {
        const baseDelay = wi === 0 ? 0.1 : 0.5;
        el.innerHTML = el.textContent.split('').map((ch, i) =>
            `<span class="char" style="animation-delay:${(baseDelay + i * 0.07).toFixed(2)}s">${ch}</span>`
        ).join('');
    });

    // ---- TYPEWRITER ----
    const twEl = document.querySelector('.typewriter');
    if (twEl) {
        const words = ['Web Designer', 'Programmer', 'Researcher', 'Cyber Security Enthusiast'];
        let wi = 0, ci = 0, deleting = false;
        function tick() {
            const word = words[wi];
            twEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
            if (!deleting && ci > word.length)  { deleting = true; setTimeout(tick, 1400); return; }
            if (deleting  && ci < 0)            { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
            setTimeout(tick, deleting ? 45 : 80);
        }
        setTimeout(tick, 1200);
    }

    // ---- SECTION TAG GLITCH on scroll into view ----
    const glitchObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.remove('glitch');
                void e.target.offsetWidth;
                e.target.classList.add('glitch');
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.section-tag').forEach(el => glitchObs.observe(el));
});

// Disable custom cursor — using normal cursor
const isMobile = false;

// ---- NAVBAR ----
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
    updateActiveNav();
}, { passive: true });

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}

// ---- TYPED TEXT: removed ----

// ---- COUNTER ANIMATION (runs once on hero visible) ----
let statsAnimated = false;
function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    document.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.getAttribute('data-target');
        let count = 0;
        const step = target / 50;
        const t = setInterval(() => {
            count += step;
            if (count >= target) { el.textContent = target; clearInterval(t); }
            else el.textContent = Math.floor(count);
        }, 25);
    });
}
animateStats();

// ---- SKILL BARS: Intersection Observer ----
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width') + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

// ---- SCROLL FADE ANIMATIONS ----
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.skill-card, .project-card, .about-info, .about-3d-card, .contact-info, .contact-form, .section-header').forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
    fadeObserver.observe(el);
});

// ---- ABOUT 3D CARD TILT ----
const card3D = document.getElementById('about3DCard');
if (card3D && !isMobile) {
    const parent = card3D.parentElement;
    parent.addEventListener('mousemove', (e) => {
        const r = parent.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card3D.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
    }, { passive: true });
    parent.addEventListener('mouseleave', () => { card3D.style.transform = 'rotateY(0) rotateX(0)'; });
}

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'linear-gradient(135deg,#00ff88,#00c853)';
        setTimeout(() => {
            btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            btn.style.background = '';
            e.target.reset();
        }, 3000);
    });
}

// ============================================
// THREE.JS — LAZY INIT PER SECTION (IntersectionObserver)
// Only renders when section is visible, pauses when not
// ============================================

function createRenderer(canvas) {
    const r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    r.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    r.setSize(canvas.offsetWidth, canvas.offsetHeight);
    return r;
}

// Track active animation frames per section
const animFrames = {};

function pauseCanvas(id) {
    if (animFrames[id]) { cancelAnimationFrame(animFrames[id]); animFrames[id] = null; }
}

// Visibility observer to pause/resume canvases
function watchVisibility(sectionId, startFn, stopFn) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => e.isIntersecting ? startFn() : stopFn());
    }, { threshold: 0.05 });
    obs.observe(section);
}

// Hero canvas function removed
function initHeroCanvas() {}

// ---- ABOUT CANVAS: Simple helix (lighter version) ----
function initAboutCanvas() {
    const canvas = document.getElementById('aboutCanvas');
    if (!canvas) return;
    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    // Lighter helix: use LineSegments instead of TubeGeometry
    const pts1 = [], pts2 = [];
    for (let i = 0; i < 100; i++) {
        const t = (i / 100) * Math.PI * 6 - Math.PI * 3;
        pts1.push(new THREE.Vector3(Math.cos(t) * 1.5, t * 0.4, Math.sin(t) * 1.5));
        pts2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 1.5, t * 0.4, Math.sin(t + Math.PI) * 1.5));
    }
    const g1 = new THREE.BufferGeometry().setFromPoints(pts1);
    const g2 = new THREE.BufferGeometry().setFromPoints(pts2);
    const lm1 = new THREE.LineBasicMaterial({ color: 0x00f5ff, transparent: true, opacity: 0.5 });
    const lm2 = new THREE.LineBasicMaterial({ color: 0x7b2ff7, transparent: true, opacity: 0.5 });
    const helix1 = new THREE.Line(g1, lm1);
    const helix2 = new THREE.Line(g2, lm2);
    scene.add(helix1, helix2);

    // Particles
    const pPos = new Float32Array(200 * 3);
    for (let i = 0; i < 600; i++) pPos[i] = (Math.random() - 0.5) * 18;
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x00f5ff, size: 0.05, transparent: true, opacity: 0.3 })));

    window.addEventListener('resize', () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    }, { passive: true });

    let running = false;
    const clock = new THREE.Clock();
    function animate() {
        if (!running) return;
        animFrames['about'] = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        helix1.rotation.y = t * 0.18;
        helix2.rotation.y = t * 0.18;
        renderer.render(scene, camera);
    }
    watchVisibility('about', () => { running = true; animate(); }, () => { running = false; });
}

// ---- SKILLS CANVAS: Fewer cubes (15 instead of 30) ----
function initSkillsCanvas() {
    const canvas = document.getElementById('skillsCanvas');
    if (!canvas) return;
    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const cubes = [];
    const palette = [0x00f5ff, 0x7b2ff7, 0xff006e, 0xffd700];
    const sharedGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);

    for (let i = 0; i < 15; i++) {
        const mat = new THREE.MeshBasicMaterial({ color: palette[i % 4], wireframe: true, transparent: true, opacity: 0.2 });
        const cube = new THREE.Mesh(sharedGeo, mat);
        cube.position.set((Math.random()-0.5)*18, (Math.random()-0.5)*10, (Math.random()-0.5)*5);
        cube.userData = { rx: (Math.random()-0.5)*0.02, ry: (Math.random()-0.5)*0.02, fs: Math.random()*0.5+0.3, fa: Math.random()*0.3+0.1, iy: cube.position.y };
        scene.add(cube); cubes.push(cube);
    }

    window.addEventListener('resize', () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    }, { passive: true });

    let running = false;
    const clock = new THREE.Clock();
    function animate() {
        if (!running) return;
        animFrames['skills'] = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        cubes.forEach(c => {
            c.rotation.x += c.userData.rx;
            c.rotation.y += c.userData.ry;
            c.position.y = c.userData.iy + Math.sin(t * c.userData.fs) * c.userData.fa;
        });
        renderer.render(scene, camera);
    }
    watchVisibility('skills', () => { running = true; animate(); }, () => { running = false; });
}

// ---- PROJECTS CANVAS: Torus knot + rings ----
function initProjectsCanvas() {
    const canvas = document.getElementById('projectsCanvas');
    if (!canvas) return;
    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 12);

    const knot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.5, 0.3, 80, 12),
        new THREE.MeshBasicMaterial({ color: 0xff006e, wireframe: true, transparent: true, opacity: 0.12 })
    );
    knot.position.set(-6, 0, -3);
    scene.add(knot);

    const rings = [];
    for (let i = 0; i < 4; i++) {
        const ring = new THREE.Mesh(
            new THREE.TorusGeometry(1 + i * 0.5, 0.02, 6, 48),
            new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x00f5ff : 0x7b2ff7, transparent: true, opacity: 0.18 })
        );
        ring.position.set(6, 0, -3);
        ring.rotation.x = Math.random() * Math.PI;
        ring.userData.speed = 0.005 + i * 0.003;
        scene.add(ring); rings.push(ring);
    }

    window.addEventListener('resize', () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    }, { passive: true });

    let running = false;
    const clock = new THREE.Clock();
    function animate() {
        if (!running) return;
        animFrames['projects'] = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        knot.rotation.x = t * 0.25; knot.rotation.y = t * 0.18;
        rings.forEach(r => { r.rotation.x += r.userData.speed; r.rotation.z += r.userData.speed * 0.7; });
        renderer.render(scene, camera);
    }
    watchVisibility('projects', () => { running = true; animate(); }, () => { running = false; });
}

// ---- CONTACT CANVAS: Sphere + Icosahedron ----
function initContactCanvas() {
    const canvas = document.getElementById('contactCanvas');
    if (!canvas) return;
    const renderer = createRenderer(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(2, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.07 })
    );
    sphere.position.set(5, 0, -2);
    scene.add(sphere);

    const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.5, 1),
        new THREE.MeshBasicMaterial({ color: 0x7b2ff7, wireframe: true, transparent: true, opacity: 0.1 })
    );
    ico.position.set(-5, 0, -2);
    scene.add(ico);

    // Shared particles
    const pPos = new Float32Array(400 * 3);
    for (let i = 0; i < 1200; i++) pPos[i] = (Math.random() - 0.5) * 20;
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0x00f5ff, size: 0.04, transparent: true, opacity: 0.4 })));

    window.addEventListener('resize', () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    }, { passive: true });

    let running = false;
    const clock = new THREE.Clock();
    function animate() {
        if (!running) return;
        animFrames['contact'] = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        sphere.rotation.y = t * 0.12; sphere.rotation.x = t * 0.08;
        ico.rotation.y = -t * 0.18; ico.rotation.x = t * 0.12;
        renderer.render(scene, camera);
    }
    watchVisibility('contact', () => { running = true; animate(); }, () => { running = false; });
}

// ---- INIT ALL CANVASES after DOM ready ----
// Hero canvas removed — no background animation on hero
// Others lazy-load via IntersectionObserver

// Lazy init section canvases only when near viewport
const lazyCanvasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'about') initAboutCanvas();
            if (id === 'skills') initSkillsCanvas();
            if (id === 'projects') initProjectsCanvas();
            if (id === 'contact') initContactCanvas();
            lazyCanvasObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '200px' });

['about', 'skills', 'projects', 'contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) lazyCanvasObserver.observe(el);
});
