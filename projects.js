// ============================================
// PART 4: ALL PROJECTS DATA
// ============================================

const GITHUB_BASE = 'https://github.com/appdeveloper2025-abid/';
const LIVE_BASE = 'https://appdeveloper2025-abid.github.io/';

const allProjects = [
    {
        id: 1,
        title: 'Astronomy',
        desc: 'An interactive astronomy website exploring space, planets and galaxies.',
        tags: ['Web', 'Science'],
        category: 'web',
        github: GITHUB_BASE + 'astronomy',
        live: LIVE_BASE + 'astronomy',
        icon: 'fas fa-star',
        images: [
            'Photos/Astronomy 1.PNG',
            'Photos/Astronomy 2.PNG',
            'Photos/Astronomy 3.PNG'
        ]
    },
    {
        id: 2,
        title: 'Abid Hack Arena',
        desc: 'A cybersecurity arena platform for ethical hacking challenges.',
        tags: ['Security', 'Web'],
        category: 'security',
        github: GITHUB_BASE + 'abidhackarena',
        live: LIVE_BASE + 'abidhackarena',
        icon: 'fas fa-dragon',
        images: [
            'Photos/abidhackarena photo 1.PNG',
            'Photos/abidhackarena photo 2.PNG',
            'Photos/abidhackarena photo 3.PNG',
            'Photos/abidhackarena photo 4.PNG'
        ]
    },
    {
        id: 3,
        title: 'ETeaQuize v1.2',
        desc: 'An online quiz platform for students with scoring and leaderboard.',
        tags: ['Web', 'Education'],
        category: 'web',
        github: GITHUB_BASE + 'eteaquize_version_1.2',
        live: LIVE_BASE + 'eteaquize_version_1.2',
        icon: 'fas fa-question-circle',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 5,
        title: 'Abid Hack Arena v2',
        desc: 'Second version of the hacking arena with more challenges.',
        tags: ['Security', 'Web'],
        category: 'security',
        github: GITHUB_BASE + 'abidhackaren',
        live: LIVE_BASE + 'abidhackaren',
        icon: 'fas fa-bug',
        images: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 6,
        title: 'Arjun',
        desc: 'A web project with unique design and interactive elements.',
        tags: ['Web', 'Design'],
        category: 'web',
        github: GITHUB_BASE + 'arjun',
        live: LIVE_BASE + 'arjun',
        icon: 'fas fa-globe',
        images: [
            'Photos/arjun 1.PNG',
            'Photos/arjun 2.PNG',
            'Photos/arjun 3.PNG'
        ]
    },
    {
        id: 7,
        title: 'Free Photos Downloads',
        desc: 'A free photo download platform with search and categories.',
        tags: ['Web', 'API'],
        category: 'web',
        github: GITHUB_BASE + 'freePhotosdownloads',
        live: LIVE_BASE + 'freePhotosdownloads',
        icon: 'fas fa-images',
        images: [
            'Photos/Free photos download website photo 1.PNG',
            'Photos/Free photos download website photo 2.PNG'
        ]
    },
    {
        id: 8,
        title: 'School Management System',
        desc: 'Complete school management system with students, teachers and grades.',
        tags: ['Web', 'Database', 'Education'],
        category: 'web',
        github: GITHUB_BASE + 'schoolmanagmentsystem',
        live: LIVE_BASE + 'schoolmanagmentsystem',
        icon: 'fas fa-school',
        images: [
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 9,
        title: 'Medicine Hub',
        desc: 'A medicine information hub with search and drug details.',
        tags: ['Web', 'Health'],
        category: 'web',
        github: GITHUB_BASE + 'Medicinehub',
        live: LIVE_BASE + 'Medicinehub',
        icon: 'fas fa-pills',
        images: [
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 10,
        title: 'Watsappo',
        desc: 'A WhatsApp-inspired messaging web application.',
        tags: ['Web', 'Chat'],
        category: 'web',
        github: GITHUB_BASE + 'watsappo',
        live: LIVE_BASE + 'watsappo',
        icon: 'fas fa-comments',
        images: [
            'Photos/Whatsappo web photo 1.PNG',
            'Photos/Whatsappo web photo 2.PNG',
            'Photos/Whatsappo web photo 3.PNG'
        ]
    },
    {
        id: 11,
        title: 'Online Store',
        desc: 'A full-featured e-commerce online store with cart and checkout.',
        tags: ['Web', 'E-Commerce'],
        category: 'web',
        github: GITHUB_BASE + 'onlinestore',
        live: LIVE_BASE + 'onlinestore',
        icon: 'fas fa-store',
        images: [
            'Photos/online store web photo 1.PNG',
            'Photos/online store web photo 2.PNG',
            'Photos/online store web photo 3.PNG'
        ]
    },
    {
        id: 12,
        title: 'Fighting Game',
        desc: 'A browser-based 2D fighting game with characters and combat.',
        tags: ['Game', 'JavaScript'],
        category: 'game',
        github: GITHUB_BASE + 'fightinggame',
        live: LIVE_BASE + 'fightinggame',
        icon: 'fas fa-fist-raised',
        images: [
            'Photos/fighting game website photo 1.PNG',
            'Photos/fighting game website photo 2.PNG',
            'Photos/fighting game website photo 3.PNG'
        ]
    },
    {
        id: 13,
        title: 'Snake Game',
        desc: 'Classic snake game built with JavaScript and HTML5 Canvas.',
        tags: ['Game', 'JavaScript'],
        category: 'game',
        github: GITHUB_BASE + 'snakegame',
        live: LIVE_BASE + 'snakegame',
        icon: 'fas fa-gamepad',
        images: [
            'Photos/Snake Game web photo 1.PNG',
            'Photos/Snake Game web photo 2.PNG',
            'Photos/Snake Game web photo 3.PNG'
        ]
    },
    {
        id: 14,
        title: 'Hacker Kids',
        desc: 'An educational platform teaching kids about cybersecurity basics.',
        tags: ['Web', 'Education', 'Security'],
        category: 'security',
        github: GITHUB_BASE + 'hackerkids',
        live: LIVE_BASE + 'hackerkids',
        icon: 'fas fa-child',
        images: [
            'Photos/hacker kid web photo 1.PNG',
            'Photos/hacker kid web photo 2.PNG',
            'Photos/hacker kid web photo 3.PNG'
        ]
    },
    {
        id: 15,
        title: 'School Management',
        desc: 'Lightweight school management system for small institutions.',
        tags: ['Web', 'Education'],
        category: 'web',
        github: GITHUB_BASE + 'schoolmanagment',
        live: LIVE_BASE + 'schoolmanagment',
        icon: 'fas fa-chalkboard-teacher',
        images: [
            'Photos/School managment website (AIMS) photo 1.PNG',
            'Photos/School managment website (AIMS) photo 2.PNG'
        ]
    },
    {
        id: 16,
        title: 'Asteroid Shooter Game',
        desc: 'A space asteroid shooter game with levels and high scores.',
        tags: ['Game', 'JavaScript', 'Canvas'],
        category: 'game',
        github: GITHUB_BASE + 'asteriodsootergame',
        live: LIVE_BASE + 'asteriodsootergame',
        icon: 'fas fa-meteor',
        images: [
            'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 17,
        title: 'ISSB By AB',
        desc: 'ISSB preparation platform with tests and resources.',
        tags: ['Web', 'Education'],
        category: 'web',
        github: GITHUB_BASE + 'ISSBBYAB',
        live: LIVE_BASE + 'ISSBBYAB',
        icon: 'fas fa-medal',
        images: [
            'Photos/ISSBbyAB photo 1.PNG'
        ]
    },
    {
        id: 18,
        title: 'ISSB By Abid',
        desc: 'Updated ISSB preparation system with more content.',
        tags: ['Web', 'Education'],
        category: 'web',
        github: GITHUB_BASE + 'issbbyabid',
        live: LIVE_BASE + 'issbbyabid',
        icon: 'fas fa-award',
        images: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 19,
        title: 'AbidFlix',
        desc: 'A Netflix-inspired movie streaming UI with trailers and listings.',
        tags: ['Web', 'Streaming', 'API'],
        category: 'web',
        github: GITHUB_BASE + 'abidflix',
        live: LIVE_BASE + 'abidflix',
        icon: 'fas fa-play-circle',
        images: [
            'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 20,
        title: 'Khalid Veterinary',
        desc: 'A veterinary clinic management and information website.',
        tags: ['Web', 'Health'],
        category: 'web',
        github: GITHUB_BASE + 'khalidveternary',
        live: LIVE_BASE + 'khalidveternary',
        icon: 'fas fa-paw',
        images: [
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 21,
        title: 'Medicines',
        desc: 'A comprehensive medicines database and lookup application.',
        tags: ['Web', 'Health', 'Database'],
        category: 'web',
        github: GITHUB_BASE + 'medicines',
        live: LIVE_BASE + 'medicines',
        icon: 'fas fa-capsules',
        images: [
            'Photos/pharmadices website photo 1.PNG',
            'Photos/pharmadices website photo 2.PNG',
            'Photos/pharmadices website photo 3.PNG'
        ]
    },
    {
        id: 22,
        title: '3D Game',
        desc: 'An immersive 3D browser game built with Three.js and WebGL.',
        tags: ['Game', 'Three.js', 'WebGL'],
        category: 'game',
        github: GITHUB_BASE + '3Dgame',
        live: LIVE_BASE + '3Dgame',
        icon: 'fas fa-cube',
        images: [
            'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 23,
        title: 'SMS Gateway',
        desc: 'An SMS gateway system for sending and receiving messages programmatically.',
        tags: ['Python', 'API'],
        category: 'python',
        github: GITHUB_BASE + 'sms-gatway',
        live: null,
        icon: 'fas fa-sms',
        images: [
            'Photos/SMS photo  1.PNG',
            'Photos/SMS photo  2.PNG',
            'Photos/SMS photo  3.PNG'
        ]
    },
    {
        id: 24,
        title: 'Phishing URL Detection',
        desc: 'Research project for detecting phishing URLs using machine learning.',
        tags: ['AI', 'Python', 'Security'],
        category: 'ai',
        github: GITHUB_BASE + 'phishingurldetectionresearch',
        live: null,
        icon: 'fas fa-shield-alt',
        images: [
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 25,
        title: 'Video Editor Python',
        desc: 'A Python-based video editor with trimming, merging and effects.',
        tags: ['Python', 'Video'],
        category: 'python',
        github: GITHUB_BASE + 'videoeditor-python',
        live: null,
        icon: 'fas fa-film',
        images: [
            'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 26,
        title: 'VPN Python',
        desc: 'A Python VPN tool for secure and private internet browsing.',
        tags: ['Python', 'Security', 'Network'],
        category: 'python',
        github: GITHUB_BASE + 'vpn-python',
        live: null,
        icon: 'fas fa-lock',
        images: [
            'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 27,
        title: 'WhatsApp OSINT',
        desc: 'Open Source Intelligence tool for WhatsApp data analysis.',
        tags: ['Security', 'OSINT', 'Python'],
        category: 'security',
        github: GITHUB_BASE + 'whatsapp-OSINT',
        live: null,
        icon: 'fab fa-whatsapp',
        images: [
            'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 28,
        title: 'Wallpaper App',
        desc: 'A wallpaper downloader and manager application.',
        tags: ['Python', 'App'],
        category: 'python',
        github: GITHUB_BASE + 'wallpaper',
        live: null,
        icon: 'fas fa-image',
        images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 29,
        title: 'MS Word by Abid',
        desc: 'A custom Microsoft Word-like document editor built from scratch.',
        tags: ['Python', 'Desktop'],
        category: 'python',
        github: GITHUB_BASE + 'mswordbyabid',
        live: null,
        icon: 'fas fa-file-word',
        images: [
            'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 30,
        title: 'Video Downloader',
        desc: 'A multi-platform video downloader supporting YouTube and more.',
        tags: ['Python', 'Tool'],
        category: 'python',
        github: GITHUB_BASE + 'videodownloader',
        live: null,
        icon: 'fas fa-download',
        images: [
            'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 31,
        title: 'Google Dorking',
        desc: 'Advanced Google dorking tool for OSINT and security research.',
        tags: ['Security', 'OSINT'],
        category: 'security',
        github: GITHUB_BASE + 'googledorking',
        live: null,
        icon: 'fab fa-google',
        images: [
            'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 32,
        title: 'Notes Professor AI',
        desc: 'AI-powered notes assistant that helps students study smarter.',
        tags: ['AI', 'Education', 'Python'],
        category: 'ai',
        github: GITHUB_BASE + 'NotesproffesorAI',
        live: null,
        icon: 'fas fa-robot',
        images: [
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 33,
        title: 'Cyber Threat Intelligence',
        desc: 'Cyber threat intelligence platform for monitoring and analysis.',
        tags: ['Security', 'AI', 'Python'],
        category: 'security',
        github: GITHUB_BASE + 'cyberthreadintelligencebyabid',
        live: null,
        icon: 'fas fa-eye',
        images: [
            'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 34,
        title: 'Data Mining',
        desc: 'Data mining and analysis tool with visualization dashboards.',
        tags: ['AI', 'Python', 'Data'],
        category: 'ai',
        github: GITHUB_BASE + 'datamining',
        live: null,
        icon: 'fas fa-database',
        images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 35,
        title: 'Kali By Abid',
        desc: 'Kali Linux tools and scripts collection for penetration testing.',
        tags: ['Security', 'Linux'],
        category: 'security',
        github: GITHUB_BASE + 'kalibyabid',
        live: null,
        icon: 'fas fa-terminal',
        images: [
            'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop&crop=center'
        ]
    },
    {
        id: 36,
        title: 'Virtual Number Python',
        desc: 'Python tool for generating and managing virtual phone numbers.',
        tags: ['Python', 'Tool'],
        category: 'python',
        github: GITHUB_BASE + 'virtualnumber-python',
        live: null,
        icon: 'fas fa-phone-alt',
        images: [
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center'
        ]
    }
];

// ============================================
// PART 5: RENDER CARDS + CAROUSEL + FILTER
// ============================================

function buildCarousel(project) {
    const hasImages = project.images && project.images.length > 0;

    if (!hasImages) {
        return `
        <div class="carousel-wrap">
            <div class="carousel-placeholder">
                <i class="${project.icon}"></i>
                <span>No Screenshots Yet</span>
            </div>
        </div>`;
    }

    const slides = project.images.map((src, i) => `
        <div class="carousel-slide">
            <img src="${src}" alt="${project.title} screenshot ${i + 1}" loading="lazy"
                 data-lightbox="${src}" data-caption="${project.title} — ${i + 1} / ${project.images.length}"
                 onerror="this.parentElement.innerHTML='<div class=carousel-img-err><i class=${project.icon}></i></div>'">
            <div class="slide-counter">${i + 1} / ${project.images.length}</div>
        </div>`).join('');

    const dots = project.images.map((_, i) => `
        <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');

    const showNav = project.images.length > 1 ? '' : 'style="display:none"';

    return `
    <div class="carousel-wrap" data-id="${project.id}">
        <div class="carousel-track">${slides}</div>
        <button class="carousel-btn prev" ${showNav}><i class="fas fa-chevron-left"></i></button>
        <button class="carousel-btn next" ${showNav}><i class="fas fa-chevron-right"></i></button>
        <div class="carousel-dots" ${showNav}>${dots}</div>
    </div>`;
}

function buildCard(project, index) {
    const tags = project.tags.map(t => `<span>${t}</span>`).join('');
    const num = String(index + 1).padStart(2, '0');

    return `
    <div class="proj-card fade-in" data-category="${project.category}" style="animation-delay:${(index % 6) * 0.07}s">
        ${buildCarousel(project)}
        <div class="proj-card-info">
            <div class="proj-card-tags">${tags}</div>
            <h3 class="proj-card-title">${project.title}</h3>
            <p class="proj-card-desc">${project.desc}</p>
            <div class="proj-card-footer">
                ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener" class="proj-live-btn">
                    <i class="fas fa-external-link-alt"></i> Visit Site
                </a>` : `<span class="proj-card-num">#${num}</span>`}
            </div>
        </div>
    </div>`;
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const filtered = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">NO PROJECTS FOUND</div>';
        return;
    }

    grid.innerHTML = filtered.map((p, i) => buildCard(p, i)).join('');
    initAllCarousels();
    initCardObserver();
}

// ---- CAROUSEL LOGIC ----
function initCarousel(wrap) {
    const track = wrap.querySelector('.carousel-track');
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    const dots = wrap.querySelectorAll('.carousel-dot');
    let current = 0;

    function goTo(index) {
        current = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    wrap.querySelector('.prev')?.addEventListener('click', () => goTo(current - 1));
    wrap.querySelector('.next')?.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    // Auto-play
    let timer = setInterval(() => goTo(current + 1), 3500);
    wrap.addEventListener('mouseenter', () => clearInterval(timer));
    wrap.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 3500); });
}

function initAllCarousels() {
    document.querySelectorAll('.carousel-wrap[data-id]').forEach(initCarousel);
}

// ---- FILTER LOGIC ----
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.getAttribute('data-filter'));
    });
});

// ---- SCROLL FADE FOR CARDS ----
function initCardObserver() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll('.proj-card.fade-in').forEach(el => obs.observe(el));
}

// ---- HERO CANVAS (reuse from script.js pattern) ----
function initProjHeroCanvas() {
    const canvas = document.getElementById('projHeroCanvas');
    if (!canvas || typeof THREE === 'undefined') return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 4;

    const count = 2000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [new THREE.Color('#00f5ff'), new THREE.Color('#7b2ff7'), new THREE.Color('#ff006e')];
    for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3]   = (Math.random() - 0.5) * 14;
        pos[i3+1] = (Math.random() - 0.5) * 8;
        pos[i3+2] = (Math.random() - 0.5) * 6;
        const c = palette[i % 3];
        col[i3] = c.r; col[i3+1] = c.g; col[i3+2] = c.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.02, vertexColors: true, transparent: true, opacity: 0.7 }));
    scene.add(pts);

    window.addEventListener('resize', () => {
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    }, { passive: true });

    const clock = new THREE.Clock();
    (function animate() {
        pts.rotation.y = clock.getElapsedTime() * 0.06;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    })();
}

// ---- LIGHTBOX ----
function initLightbox() {
    if (document.getElementById('lb-overlay')) return;

    document.body.insertAdjacentHTML('beforeend', `
    <div id="lb-overlay" role="dialog" aria-modal="true" aria-label="Image viewer">
        <button id="lb-close" aria-label="Close"><i class="fas fa-times"></i></button>
        <button id="lb-prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
        <button id="lb-next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
        <div id="lb-inner">
            <img id="lb-img" src="" alt="">
            <div id="lb-caption"></div>
        </div>
    </div>`);

    const overlay = document.getElementById('lb-overlay');
    const img     = document.getElementById('lb-img');
    const caption = document.getElementById('lb-caption');
    let images = [], idx = 0;

    function open(srcs, startIdx, caps) {
        images = srcs;
        idx = startIdx;
        show();
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function show() {
        img.classList.remove('lb-loaded');
        img.src = images[idx];
        img.onload = () => img.classList.add('lb-loaded');
        caption.textContent = `${idx + 1} / ${images.length}`;
        document.getElementById('lb-prev').style.display = images.length > 1 ? '' : 'none';
        document.getElementById('lb-next').style.display = images.length > 1 ? '' : 'none';
    }

    document.getElementById('lb-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.getElementById('lb-prev').addEventListener('click', () => { idx = (idx - 1 + images.length) % images.length; show(); });
    document.getElementById('lb-next').addEventListener('click', () => { idx = (idx + 1) % images.length; show(); });

    document.addEventListener('keydown', e => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') { idx = (idx - 1 + images.length) % images.length; show(); }
        if (e.key === 'ArrowRight') { idx = (idx + 1) % images.length; show(); }
    });

    // Touch swipe
    let tx = 0;
    overlay.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', e => {
        const diff = tx - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { idx = diff > 0 ? (idx + 1) % images.length : (idx - 1 + images.length) % images.length; show(); }
    }, { passive: true });

    // Delegate click on all carousel images
    document.addEventListener('click', e => {
        const el = e.target.closest('[data-lightbox]');
        if (!el) return;
        const wrap = el.closest('.carousel-wrap');
        const allImgs = wrap ? [...wrap.querySelectorAll('[data-lightbox]')] : [el];
        const srcs = allImgs.map(i => i.dataset.lightbox);
        const startIdx = allImgs.indexOf(el);
        open(srcs, startIdx >= 0 ? startIdx : 0);
    });
}

// ---- NAVBAR HAMBURGER (projects page) ----
const ham = document.querySelector('.hamburger');
const mob = document.querySelector('.mobile-menu');
if (ham && mob) {
    ham.addEventListener('click', () => {
        ham.classList.toggle('active');
        mob.classList.toggle('open');
    });
    document.querySelectorAll('.mob-link').forEach(l => {
        l.addEventListener('click', () => { ham.classList.remove('active'); mob.classList.remove('open'); });
    });
}

// ---- INIT ----
window.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    initLightbox();
});

window.addEventListener('load', () => {
    initProjHeroCanvas();
});