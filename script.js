// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for the hero section
const text = "AI & ML Student | Web Developer";
const typingText = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.onload = () => {
    typingText.textContent = '';
    typeWriter();
};

// Reveal animations on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Hamburger menu for mobile navigation
const menuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');
if (menuIcon && navLinks) {
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Mobile Menu Overlay Logic
const mobileMenuOpen = document.getElementById('mobile-menu-open');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
const pageLoader = document.getElementById('page-loader');

if (mobileMenuOpen && mobileMenuOverlay && mobileMenuClose) {
  mobileMenuOpen.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
  });
  mobileMenuClose.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
  });
}

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenuOverlay.classList.remove('active');
    if (pageLoader) {
      pageLoader.classList.add('active');
    }
    const target = this.getAttribute('href');
    setTimeout(() => {
      if (pageLoader) pageLoader.classList.remove('active');
      if (target && document.querySelector(target)) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = target;
      }
    }, 900);
  });
});

// Extra: Close mobile menu overlay on scroll or click outside
if (mobileMenuOverlay) {
  // Close on scroll
  window.addEventListener('scroll', () => {
    mobileMenuOverlay.classList.remove('active');
  });
  // Close on click outside
  mobileMenuOverlay.addEventListener('click', (e) => {
    if (e.target === mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
    }
  });
}