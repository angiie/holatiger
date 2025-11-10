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

  setupObfuscatedEmailClick();
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

(function i18nSetup(){
  if (window.i18n && typeof window.i18n.init === 'function') {
    window.addEventListener('load', function(){ window.i18n.init(); });
    window.switchLanguage = function(lang){ window.i18n.switchLanguage(lang); };
    return;
  }
  const translations = window.indexTranslations || {};
  function getCurrentLanguage() { return localStorage.getItem('language') || 'zh'; }
  function setLanguage(lang) {
    localStorage.setItem('language', lang);
    const langMap = { 'zh': 'zh-CN', 'zh-tw': 'zh-TW', 'en': 'en' };
    document.documentElement.lang = langMap[lang] || 'zh-CN';
  }
  function updateContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    if (translations[lang] && translations[lang]['title']) {
      document.title = translations[lang]['title'];
    }
  }
  function updateLanguageSelector(lang) {
    const currentLangElement = document.getElementById('current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    if (currentLangElement) {
      const langNames = { 'zh': '简体', 'zh-tw': '繁體', 'en': 'EN' };
      currentLangElement.textContent = langNames[lang] || '简体';
    }
    langOptions.forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === lang) option.classList.add('active'); else option.classList.remove('active');
    });
  }
  function switchLanguage(lang) { setLanguage(lang); updateContent(lang); updateLanguageSelector(lang); }
  function initLanguage() { const currentLang = getCurrentLanguage(); updateContent(currentLang); updateLanguageSelector(currentLang); }
  window.addEventListener('load', initLanguage);
  window.switchLanguage = switchLanguage;
})();

/**
 * 绑定邮箱图标点击事件
 * 原理：读取元素的 data-email（如 onlyangiie#gmail.com），将 # 替换为 @，并跳转到 mailto
 */
function setupObfuscatedEmailClick() {
  try {
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach((el) => {
      const handler = function (e) {
        e.preventDefault();
        const obfuscated = (el.getAttribute('data-email') || '').trim();
        if (!obfuscated) return;
        const decoded = obfuscated.replace('#', '@');
        const mailto = `mailto:${decoded}`;

        // 先将 href 设置为 mailto，增强兼容性
        el.setAttribute('href', mailto);

        try {
          // 首选使用 assign，避免部分环境阻止 location.href
          window.location.assign(mailto);
        } catch (_) {
          try {
            // 退化为打开自身窗口
            window.open(mailto, '_self');
          } catch (__){ /* ignore */ }
          // 最后兜底：创建临时 <a> 并触发点击
          const a = document.createElement('a');
          a.href = mailto;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      };
      // 使用捕获阶段，确保先阻止默认并触发 mailto
      el.addEventListener('click', handler, { capture: true });
    });
  } catch (err) {
    // 安静失败以避免影响其他功能
    if (console && console.warn) console.warn('setupObfuscatedEmailClick failed:', err);
  }
}
