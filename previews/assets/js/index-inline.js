// Extracted from index.html inline scripts
window.addEventListener('load', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const elements = document.querySelectorAll('.fade-in-up');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
    }, 100);
  });

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

const heroSection = document.querySelector('.hero-interactive');
if (heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroSection.style.setProperty('--mouse-x', x + '%');
    heroSection.style.setProperty('--mouse-y', y + '%');
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = e.offsetX - 10 + 'px';
    ripple.style.top = e.offsetY - 10 + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 600);
  });
});

(function injectRippleKeyframes(){
  const style = document.createElement('style');
  style.textContent = '@keyframes ripple { to { transform: scale(4); opacity: 0; } }';
  document.head.appendChild(style);
})();

// i18n setup is handled by i18n.js
(function i18nSetup(){
  // Set up global switchLanguage function for compatibility
  window.switchLanguage = function(lang) {
    if (window.i18n && typeof window.i18n.switchLanguage === 'function') {
      window.i18n.switchLanguage(lang);
    }
  };
})();
