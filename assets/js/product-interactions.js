/**
 * 产品详情页共享交互（tinypass / webdavy / ezpixy 等带 body[data-product] 的页面）
 * - 滚动入场：元素进入视口才触发入场动画（替代"打开页面一次性全部播完"）
 * - Hero 鼠标跟随光晕：--mouse-x / --mouse-y 驱动 .product-hero-card 的径向高光
 * - 系统偏好降级：prefers-reduced-motion 下不做任何增强，元素保持可见
 */
(function () {
  'use strict';

  // 1) 尊重系统"减少动态效果"偏好：直接返回，元素由 CSS 降级规则保持可见
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // 2) 滚动入场：仅处理带 data-product 钩子的页面
  const revealEls = document.querySelectorAll('body[data-product] .fade-in-up');
  if (revealEls.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    // 降级：不支持 IO 时直接全部显示
    revealEls.forEach(function (el) { el.classList.add('reveal-visible'); });
    return;
  }

  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach(function (el) { io.observe(el); });

  // 3) Hero 鼠标跟随光晕
  const hero = document.querySelector('.product-hero-card');
  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width) * 100 + '%');
      hero.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height) * 100 + '%');
    });
  }
})();
