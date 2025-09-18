// Google Analytics (gtag.js)
(function() {
    // 加载 Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ME7HRY1CXN'\;
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
    script.src = 'https://analytics.ahrefs.com/analytics.js'\;
    script.setAttribute('data-key', 'HDiRWpHWVxttOINcLS9xmA');
    document.head.appendChild(script);
})();
