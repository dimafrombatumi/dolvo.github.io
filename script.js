// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('faq-item-active')) {
                    otherItem.classList.remove('faq-item-active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('faq-item-active');
        });
    });
});



// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .booking-card, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Mobile menu functionality
const initMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileHeaderBar = document.querySelector('.mobile-header-bar');
    const body = document.body;

    function openMobileMenu() {
        mobileMenu.classList.add('is-active');
        mobileMenuOverlay.classList.add('is-active');
        mobileMenuToggle.classList.add('active');
        body.classList.add('menu-open');
        // Hide header when menu opens
        if (mobileHeaderBar) {
            mobileHeaderBar.classList.add('hidden');
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('is-active');
        mobileMenuOverlay.classList.remove('is-active');
        mobileMenuToggle.classList.remove('active');
        body.classList.remove('menu-open');
        // Show header when menu closes
        if (mobileHeaderBar) {
            mobileHeaderBar.classList.remove('hidden');
        }
    }

    function toggleMobileMenu() {
        if (mobileMenu.classList.contains('is-active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    if (mobileMenuToggle && mobileMenuClose && mobileMenu && mobileMenuOverlay) {
        // Toggle menu on hamburger click
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // Close menu on close button click
        mobileMenuClose.addEventListener('click', closeMobileMenu);
        
        // Close menu on overlay click
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('is-active')) {
                closeMobileMenu();
            }
        });
        
        // Close menu on ESC key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
                closeMobileMenu();
            }
        });
    }
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-ellipse, .app-ellipse');
    
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.3;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form validation (if forms are added later)
const validateForm = (form) => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
};

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add responsive behavior
window.addEventListener('resize', function() {
    // Update hero section positioning
    const heroContent = document.querySelector('.hero-content');
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (window.innerWidth <= 1024) {
        if (heroContent) {
            heroContent.style.position = 'relative';
            heroContent.style.left = '0';
            heroContent.style.top = '100px';
        }
        
        if (phoneMockup) {
            phoneMockup.style.position = 'relative';
            phoneMockup.style.left = 'auto';
            phoneMockup.style.top = 'auto';
            phoneMockup.style.transform = 'none';
        }
    } else {
        if (heroContent) {
            heroContent.style.position = 'absolute';
            heroContent.style.left = '80px';
            heroContent.style.top = '251px';
        }
        
        if (phoneMockup) {
            phoneMockup.style.position = 'absolute';
            phoneMockup.style.left = '975px';
            phoneMockup.style.top = '185px';
        }
    }
});

console.log('DOLVO Website initialized successfully!');
