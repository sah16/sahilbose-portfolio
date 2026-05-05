// ===================== NAV MENU TOGGLE =====================
const header  = document.querySelector('header');
const menu    = document.querySelector('#menu-icon');
const navbar  = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('bx-x');
};

document.onclick = (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
};

// ===================== DARK MODE =====================
const darkmode = document.querySelector('#darkmode');

// Persist dark mode preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('active');
    darkmode.classList.replace('bx-moon', 'bx-sun');
}

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        localStorage.setItem('theme', 'dark');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
        localStorage.setItem('theme', 'light');
    }
};

// ===================== ACTIVE NAV LINK ON SCROLL =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const highlightNav = () => {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop    = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId     = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ===================== HEADER SHADOW ON SCROLL =====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===================== SCROLL REVEAL ANIMATION =====================
const revealElements = document.querySelectorAll(
    '.skill-category, .services-box, .portfolio-card, .stat-card, .orbit-item'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 60);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
});
