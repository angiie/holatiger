/* Progressive React + react-i18next bootstrap for existing static pages */
(function () {
    if (!window.i18next) {
        console.error('[react-i18n] i18next not found. Make sure UMD scripts are loaded before this file.');
        return;
    }
    var i18n = window.i18next;
    var React = window.React;
    var ReactDOM = window.ReactDOM;
    var ReactI18next = window['reactI18next'];
    if (!React || !ReactDOM || !ReactI18next) {
        console.error('[react-i18n] React/ReactDOM/react-i18next not found.');
        return;
    }

    // Configure i18next with HTTP backend and language detector if present
    var browserDetector = window.i18nextBrowserLanguageDetector;
    var httpBackend = window.i18nextHttpBackend;

    var instance = i18n.createInstance();
    var config = {
        fallbackLng: 'zh',
        supportedLngs: ['zh', 'zh-tw', 'en'],
        load: 'languageOnly',
        debug: false,
        backend: { loadPath: '/assets/i18n/{{lng}}.json' },
        interpolation: { escapeValue: false },
        detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] }
    };

    var chain = instance;
    if (httpBackend && typeof chain.use === 'function') chain = chain.use(httpBackend);
    if (browserDetector && typeof chain.use === 'function') chain = chain.use(browserDetector);

    chain.init(config).then(function () {
        window.ReactI18n = window.ReactI18n || {};
        window.ReactI18n.i18n = instance;
        window.ReactI18n.changeLanguage = function (lng) { instance.changeLanguage(lng); renderAll(); };

        // Small component to render a translation string
        function TransText(props) {
            var t = ReactI18next.useTranslation().t;
            var txt = t(props.k || props['data-i18n'] || '', props.params || {});
            return React.createElement(React.Fragment, null, txt);
        }

        function renderAll() {
            var nodes = document.querySelectorAll('[data-i18n]');
            nodes.forEach(function (node) {
                var key = node.getAttribute('data-i18n');
                if (!key) return;
                // Wrap node content with a span root to let React control it
                var root = node.__react_i18n_root;
                if (!root) {
                    root = document.createElement('span');
                    // keep original styles
                    while (node.firstChild) root.appendChild(node.firstChild);
                    node.appendChild(root);
                    node.__react_i18n_root = root;
                }
                ReactDOM.render(
                    React.createElement(ReactI18next.I18nextProvider, { i18n: instance },
                        React.createElement(TransText, { k: key })
                    ),
                    root
                );
            });

            // placeholders
            var phNodes = document.querySelectorAll('[data-i18n-placeholder]');
            phNodes.forEach(function (el) {
                var key = el.getAttribute('data-i18n-placeholder');
                if (!key) return;
                el.setAttribute('placeholder', instance.t(key));
            });

            // html lang & og:locale sync
            var html = document.documentElement;
            if (html) html.setAttribute('lang', instance.language === 'en' ? 'en' : (instance.language === 'zh-tw' ? 'zh-TW' : 'zh-CN'));
            var ogLocale = document.querySelector('meta[property="og:locale"]');
            if (ogLocale) {
                var map = { 'zh': 'zh_CN', 'zh-cn': 'zh_CN', 'zh-tw': 'zh_TW', 'en': 'en_US' };
                ogLocale.setAttribute('content', map[(instance.language || '').toLowerCase()] || 'zh_CN');
            }
        }

        // auto render on ready and on language changed
        instance.on('languageChanged', renderAll);
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', renderAll);
        } else {
            renderAll();
        }
    });
})(); 