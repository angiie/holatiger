// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Header scroll effect
let lastScrollY = window.scrollY;

function handleScroll() {
    const scrollY = window.scrollY;
    
    // Add/remove scrolled class for header styling
    if (scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll
    if (scrollY > lastScrollY && scrollY > 500) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = scrollY;
}

// Mobile menu toggle
function toggleMobileMenu() {
    nav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    
    // Change hamburger icon
    const icon = mobileMenuBtn.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        document.body.style.overflow = '';
    }
}

// Close mobile menu when clicking nav links
function closeMobileMenu() {
    nav.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.replace('fa-times', 'fa-bars');
    document.body.style.overflow = '';
}

// Smooth scrolling for anchor links
function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            closeMobileMenu();
        }
    }
}

// Active nav link highlighting
function updateActiveNavLink() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Intersection Observer for animations
function createIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.extension-card, .tool-card, .feature-item, .floating-card'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Add animation styles
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .extension-card, .tool-card, .feature-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .extension-card.animate-in, 
        .tool-card.animate-in, 
        .feature-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .floating-card {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .floating-card.animate-in {
            opacity: 1;
            transform: translateX(0);
        }
        
        .floating-card:nth-child(2).animate-in {
            transition-delay: 0.2s;
        }
        
        .floating-card:nth-child(3).animate-in {
            transition-delay: 0.4s;
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (prefers-color-scheme: dark) {
            .header.scrolled {
                background: rgba(0, 0, 0, 0.95);
                box-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
            }
        }
        
        .nav.active {
            display: flex;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: var(--bg-primary);
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 5px 20px var(--shadow-color);
            border-top: 1px solid var(--border-color);
            z-index: var(--z-overlay);
        }
        
        .nav-link.active {
            color: var(--primary-color);
        }
        
        @media (max-width: 768px) {
            .nav.active .nav-link {
                padding: 1rem 0;
                border-bottom: 1px solid var(--border-color);
                text-align: center;
            }
            
            .nav.active .nav-link:last-child {
                border-bottom: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Typing animation for hero title
function createTypingAnimation() {
    const titleElement = document.querySelector('.hero-title');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    const gradientSpan = titleElement.querySelector('.gradient-text');
    
    if (gradientSpan) {
        const gradientText = gradientSpan.textContent;
        let index = 0;
        
        gradientSpan.textContent = '';
        
        function type() {
            if (index < gradientText.length) {
                gradientSpan.textContent += gradientText.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        setTimeout(type, 500);
    }
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.tool-stats span');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/(\d+)万?\+?/);
        
        if (match) {
            const finalNumber = parseInt(match[1]);
            let currentNumber = 0;
            const increment = finalNumber / 30;
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(timer);
                }
                counter.innerHTML = text.replace(/\d+/, Math.floor(currentNumber));
            }, 50);
        }
    });
}

// Copy to clipboard functionality (for future use)
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('已复制到剪贴板');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('已复制到剪贴板');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--success-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: var(--border-radius);
                box-shadow: 0 5px 15px var(--shadow-color);
                z-index: var(--z-modal);
                transform: translateX(400px);
                transition: transform 0.3s ease;
                font-weight: var(--font-weight-medium);
            }
            
            .notification-error {
                background: var(--error-color);
            }
            
            .notification-warning {
                background: var(--warning-color);
            }
            
            .notification.show {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Debounce function for performance
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

// Initialize everything when DOM is loaded
function init() {
    // Add animation styles
    addAnimationStyles();
    
    // Set up intersection observer
    createIntersectionObserver();
    
    // Create typing animation
    setTimeout(createTypingAnimation, 1000);
    
    // Animate counters when tools section is visible
    const toolsSection = document.querySelector('.tools');
    if (toolsSection) {
        const toolsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    toolsObserver.unobserve(entry.target);
                }
            });
        });
        toolsObserver.observe(toolsSection);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', init);
window.addEventListener('scroll', debounce(() => {
    handleScroll();
    updateActiveNavLink();
}, 10));

// Mobile menu event listener
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Smooth scroll for navigation links
navLinks.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', smoothScroll);
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add body styles for loading
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});

// Export functions for potential use in other scripts
window.AppUtils = {
    copyToClipboard,
    showNotification,
    toggleMobileMenu,
    closeMobileMenu
}; 