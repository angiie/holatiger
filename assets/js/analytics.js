// Analytics loader
// 优化点：把 Google Tag Manager (gtag.js 90KB) 与 Ahrefs Analytics 推迟到
// requestIdleCallback / window.load 之后下载，避免阻塞 TBT 关键路径。
// 行为兼容：gtag 函数在脚本解析前就注册到 window，事件追踪不丢失（只晚 100-500ms 入栈）。

(function() {
  // 1. 立即注册 gtag stub（轻量），让任何 click 监听器都能找到 window.gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-ME7HRY1CXN');
  window.gtag = gtag;

  // 2. 推迟 GTM script 到 idle 时期（GTM 90KB 不再计入 TBT 关键路径）
  function loadGtm() {
    if (document.querySelector('script[src*="googletagmanager.com/gtag"]')) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-ME7HRY1CXN';
    document.head.appendChild(s);
  }

  // 3. 推迟 Ahrefs Analytics 同样到 idle 时期
  function loadAhrefs() {
    if (document.querySelector('script[src*="analytics.ahrefs.com"]')) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://analytics.ahrefs.com/analytics.js';
    s.setAttribute('data-key', 'HDiRWpHWVxttOINcLS9xmA');
    document.head.appendChild(s);
  }

  // 4. 用 requestIdleCallback 调度（fallback 到 setTimeout）
  const schedule = window.requestIdleCallback || function(cb) { return setTimeout(cb, 1500); };
  schedule(loadGtm, { timeout: 3000 });
  schedule(loadAhrefs, { timeout: 3000 });

  // 5. window.load 后兜底（防止 idle 调度被延后太久）
  window.addEventListener('load', function() {
    setTimeout(loadGtm, 0);
    setTimeout(loadAhrefs, 0);
  });
})();

// Click / section view 事件追踪（gtag 已注册在 window，调用安全）
(function() {
  function ev(name, params) { if (window.gtag) gtag('event', name, params || {}); }
  document.addEventListener('click', function(e) {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const isExternal = /^https?:\/\//.test(href) && !href.includes('holatiger.com');
    const isChromeStore = href.includes('chromewebstore.google.com');
    const isCta = a.dataset.i18n && (a.dataset.i18n.includes('button') || a.dataset.i18n.includes('btn'));
    if (isChromeStore) ev('click_install', { label: href });
    else if (isExternal) ev('click_outbound', { label: href });
    else if (isCta) ev('click_cta', { label: a.dataset.i18n || href });
    else ev('click_link', { label: href });
  }, true);
  document.addEventListener('click', function(e) {
    const langEl = e.target.closest('.lang-option');
    if (!langEl) return;
    const lang = langEl.dataset.lang || '';
    ev('switch_language', { language: lang });
  }, true);
  const ids = ['home', 'extensions', 'tools', 'about'];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const seen = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && !seen.has(en.target)) {
          seen.add(en.target);
          ev('view_section', { section: en.target.id });
        }
      });
    }, { threshold: 0.6 });
    sections.forEach(s => io.observe(s));
  }
})();
