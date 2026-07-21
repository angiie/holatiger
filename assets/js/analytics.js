// Analytics loader
// 行为：保持 gtag.js 与 ahrefs.js 立即 async 加载，不推迟到 idle 时期。
// 原因：mobile 慢 4G 模拟下，requestIdleCallback 触发频繁，反而阻塞了
// LCP 元素（hero 文字）的 React 渲染，使 LCP 从 3.5s 退化到 4.4s。
// TBT 节省 < LC恶化，得不偿失。

(function() {
  // 1. dataLayer + gtag stub
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-ME7HRY1CXN');
  window.gtag = gtag;
})();

(function() {
  // 2. gtag.js (Google Tag Manager, 90KB) — 立即 async 加载
  if (!document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-ME7HRY1CXN';
    document.head.appendChild(s);
  }

  // 3. ahrefs analytics — 立即 async 加载
  if (!document.querySelector('script[src*="analytics.ahrefs.com"]')) {
    var s2 = document.createElement('script');
    s2.async = true;
    s2.src = 'https://analytics.ahrefs.com/analytics.js';
    s2.setAttribute('data-key', 'HDiRWpHWVxttOINcLS9xmA');
    document.head.appendChild(s2);
  }
})();

// Click / section view 事件追踪
(function() {
  function ev(name, params) { if (window.gtag) gtag('event', name, params || {}); }
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var isExternal = /^https?:\/\//.test(href) && !href.includes('holatiger.com');
    var isChromeStore = href.includes('chromewebstore.google.com');
    var isCta = a.dataset.i18n && (a.dataset.i18n.includes('button') || a.dataset.i18n.includes('btn'));
    if (isChromeStore) ev('click_install', { label: href });
    else if (isExternal) ev('click_outbound', { label: href });
    else if (isCta) ev('click_cta', { label: a.dataset.i18n || href });
    else ev('click_link', { label: href });
  }, true);
  document.addEventListener('click', function(e) {
    var langEl = e.target.closest('.lang-option');
    if (!langEl) return;
    var lang = langEl.dataset.lang || '';
    ev('switch_language', { language: lang });
  }, true);
  var ids = ['home', 'extensions', 'tools', 'about'];
  var sections = ids.map(function(id) { return document.getElementById(id); }).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    var seen = new Set();
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(en) {
        if (en.isIntersecting && !seen.has(en.target)) {
          seen.add(en.target);
          ev('view_section', { section: en.target.id });
        }
      });
    }, { threshold: 0.6 });
    sections.forEach(function(s) { io.observe(s); });
  }
})();
