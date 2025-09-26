// Google Analytics (gtag.js)
(function() {
    // 加载 Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ME7HRY1CXN';
    document.head.appendChild(script);

    // 初始化 gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ME7HRY1CXN');
    window.gtag = gtag;
})();

// Ahrefs Analytics
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://analytics.ahrefs.com/analytics.js';
    script.setAttribute('data-key', 'HDiRWpHWVxttOINcLS9xmA');
    document.head.appendChild(script);
})();
(function(){
    function ev(name,params){ if(window.gtag) gtag('event',name,params||{}); }
    document.addEventListener('click',function(e){
        const a=e.target.closest('a');
        if(!a) return;
        const href=a.getAttribute('href')||'';
        const isExternal=/^https?:\/\//.test(href) && !href.includes('holatiger.com');
        const isChromeStore=href.includes('chromewebstore.google.com');
        const isCta=a.dataset.i18n && (a.dataset.i18n.includes('button')||a.dataset.i18n.includes('btn'));
        if(isChromeStore) ev('click_install',{label:href});
        else if(isExternal) ev('click_outbound',{label:href});
        else if(isCta) ev('click_cta',{label:a.dataset.i18n||href});
        else ev('click_link',{label:href});
    },true);
    document.addEventListener('click',function(e){
        const langEl=e.target.closest('.lang-option');
        if(!langEl) return;
        const lang=langEl.dataset.lang||'';
        ev('switch_language',{language:lang});
    },true);
    const ids=['home','extensions','tools','about'];
    const sections=ids.map(id=>document.getElementById(id)).filter(Boolean);
    if('IntersectionObserver' in window && sections.length){
        const seen=new Set();
        const io=new IntersectionObserver(entries=>{
            entries.forEach(en=>{
                if(en.isIntersecting && !seen.has(en.target)){
                    seen.add(en.target);
                    ev('view_section',{section:en.target.id});
                }
            });
        },{threshold:0.6});
        sections.forEach(s=>io.observe(s));
    }
})();
