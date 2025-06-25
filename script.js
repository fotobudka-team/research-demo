// Modern 2025 AI Startup - Enhanced JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeModal();
    initializeIframeLoading();
    initializeSmoothScrolling();
    initializeAnimations();
});

// Bulma Navigation Toggle
function initializeNavigation() {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const targetElement = document.getElementById(target);

                el.classList.toggle('is-active');
                targetElement.classList.toggle('is-active');
            });
        });
    }

    // Close mobile menu when clicking on a nav item
    document.querySelectorAll('.navbar-item').forEach(item => {
        item.addEventListener('click', () => {
            const navbarMenu = document.querySelector('.navbar-menu');
            const navbarBurger = document.querySelector('.navbar-burger');
            
            if (navbarMenu && navbarBurger) {
                navbarMenu.classList.remove('is-active');
                navbarBurger.classList.remove('is-active');
            }
        });
    });
}

// Modal functionality for poster page
function initializeModal() {
    window.openModal = function() {
        const modal = document.getElementById('posterModal');
        if (modal) {
            modal.classList.add('is-active');
            document.documentElement.classList.add('is-clipped');
        }
    };

    window.closeModal = function() {
        const modal = document.getElementById('posterModal');
        if (modal) {
            modal.classList.remove('is-active');
            document.documentElement.classList.remove('is-clipped');
        }
    };

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Close modal when clicking outside
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-background')) {
            closeModal();
        }
    });
}

// Enhanced iframe loading with modern styling
function initializeIframeLoading() {
    const iframe = document.querySelector('.iframe-container iframe');
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    if (iframe && loadingOverlay) {
        // Show loading overlay initially
        loadingOverlay.style.display = 'flex';
        
        // Remove loading overlay when iframe loads
        iframe.addEventListener('load', function() {
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (loadingOverlay.parentElement) {
                        loadingOverlay.style.display = 'none';
                    }
                }, 300);
            }, 500); // Small delay to ensure smooth transition
        });
        
        // Fallback: Remove loading overlay after timeout
        setTimeout(function() {
            if (loadingOverlay && loadingOverlay.style.display !== 'none') {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (loadingOverlay.parentElement) {
                        loadingOverlay.style.display = 'none';
                    }
                }, 300);
            }
        }, 8000); // 8 second timeout
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
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

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton && ctaButton.getAttribute('href') === '#demo') {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const demoSection = document.getElementById('demo');
            if (demoSection) {
                demoSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Modern animation system
function initializeAnimations() {
    // Intersection Observer for scroll animations
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

    // Apply scroll animations to team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Apply animations to other elements
    const animatedElements = document.querySelectorAll('.poster-container, .demo-iframe-wrapper');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(element);
    });

    // Enhanced contact button interactions
    initializeContactButtons();
}

// Enhanced contact button animations
function initializeContactButtons() {
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: modernRipple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentElement) {
                    ripple.remove();
                }
            }, 600);
        });

        // Add hover sound effect (optional)
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Add modern CSS animations
const modernAnimationStyles = document.createElement('style');
modernAnimationStyles.textContent = `
    @keyframes modernRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    /* Loading animation enhancement */
    .loading-overlay {
        transition: opacity 0.3s ease;
    }

    /* Smooth navbar transition */
    .navbar {
        transition: all 0.3s ease;
    }

    /* Enhanced button interactions */
    .button {
        position: relative;
        overflow: hidden;
    }

    .button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        transition: left 0.5s ease;
    }

    .button:hover::before {
        left: 100%;
    }

    /* Navbar blur effect on scroll */
    .navbar.scrolled {
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(25px);
    }
`;
document.head.appendChild(modernAnimationStyles);

// Add navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    lastScrollTop = scrollTop;
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Parallax effect for hero sections (optional)
    const heroSections = document.querySelectorAll('.hero');
    heroSections.forEach(hero => {
        const scrolled = window.pageYOffset;
        if (hero.getBoundingClientRect().bottom > 0) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}, 10));

// Typing effect removed - title appears normally
