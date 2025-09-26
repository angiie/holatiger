CodeBuddy Code operating guide for the holatiger repository

Commands
- Install: npm install
- Dev (CSS watch): npm run dev:css
- Build (CSS): npm run build:css
- Serve locally: npm run serve  # python3 -m http.server 8000
- Lint: not configured
- Tests: not configured (no test runner); single-test: N/A

Architecture overview
- Static site with Tailwind CSS and DaisyUI, no JS bundler. Tailwind compiles assets/css/tw-src.css to assets/css/tw.css via postcss.config.js and tailwind.config.js (preflight disabled; DaisyUI themes include custom v2dark).
- Pages are plain HTML at repo root (index.html, svg-studio.html, tinypass.html, webdavy.html). UI classes are Tailwind/DaisyUI; icons via lucide UMD. No framework runtime.
- JavaScript is vanilla and loaded directly from assets/js/*.js. i18n.js manages language switching using data-i18n attributes; main.js initializes behaviors; index-inline.js provides page-specific effects; analytics.js is included early.
- Styles live in assets/css/*.css. tw-src.css is the Tailwind source; tw.css is the generated output used by pages.
- Internationalization: index.html wires i18n.init() on load; language dropdown calls switchLanguage('zh'|'zh-tw'|'en'). Translations are expected under assets/i18n/.
- Deployment: GitHub Actions (.github/workflows/vercel-deploy.yml) builds CSS, then uses Vercel CLI to pull env, build, and deploy with Node 20. Production deploy triggers on pushes to main.

Notes for development
- Update Tailwind content paths in tailwind.config.js when adding new HTML/JS so classes are included in builds.
- For new pages/tools, place HTML at repo root or follow existing patterns; include /assets/css/tw.css and relevant JS. Avoid modifying generated tw.css—change tw-src.css instead and rebuild.