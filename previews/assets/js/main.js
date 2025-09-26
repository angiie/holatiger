// 初始化年份与交互逻辑
// 1) 设置年份
(function setYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// 2) 平滑滚动与返回顶部
(function smoothScroll(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      const id = decodeURIComponent(a.getAttribute('href')||'').slice(1);
      if(!id) return;
      const el = document.getElementById(id);
      if(!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
      // 关闭移动端菜单
      closeMenu();
    });
  });
})();

// 3) 移动端菜单开关
(function mobileMenu(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const show = nav.style.display !== 'flex';
    nav.style.display = show ? 'flex' : 'none';
    btn.setAttribute('aria-expanded', String(show));
  });

  // 点击外部关闭
  document.addEventListener('click', (e)=>{
    if(!nav.contains(e.target) && e.target !== btn && window.innerWidth <= 560){
      closeMenu();
    }
  });
})();

function closeMenu(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if(!btn || !nav) return;
  if(window.innerWidth <= 560){
    nav.style.display = 'none';
    btn.setAttribute('aria-expanded','false');
  }
}

// 4) 键盘辅助：按 g 回到顶部
(function keyboardShortcut(){
  document.addEventListener('keyup', (e)=>{
    if((e.key==='g' || e.key==='G') && !e.ctrlKey && !e.metaKey && !e.altKey){
      const top = document.getElementById('top');
      if(top) top.scrollIntoView({behavior:'smooth'});
    }
  });
})();

// 5) Hero区域鼠标跟随光效
(function heroMouseFollow() {
  const hero = document.querySelector('.hero-v1');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
  });
})();