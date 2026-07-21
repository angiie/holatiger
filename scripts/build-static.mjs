import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

console.log('🚀 开始构建静态网站...');

// 0a. 编译 Tailwind（一次性预编译，输出 <50KB；替代 124KB 的 cdn.tailwindcss.com）
console.log('🎨 预编译 Tailwind CSS...');
execSync(
  'NODE_ENV=production ./node_modules/.bin/tailwindcss -c tailwind.config.js -i assets/css/tailwind-input.css -o assets/css/tailwind-built.css --minify',
  { stdio: 'inherit' }
);

// 0b. 把大图转 WebP（替代报告里"改进图片传送"项；原图保留作 <picture> 回退）
console.log('🖼️  转换大图为 WebP...');
execSync('node scripts/img-to-webp.mjs', { stdio: 'inherit' });

// 1. 自动生成 sitemap.xml
console.log('🗺️ 生成 sitemap.xml...');
execSync('node scripts/gen-sitemap.mjs', { stdio: 'inherit' });

// 2. 创建dist目录
const distDir = 'dist';
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// 3. 复制assets目录
console.log('📁 复制assets目录...');
execSync(`cp -r assets ${distDir}/`, { stdio: 'inherit' });

// 4. 复制HTML文件
console.log('📄 复制HTML文件...');
const htmlFiles = [
  'svg-studio.html',
  'text-to-png.html',
  'faq.html',
  'blog.html',
  'blog-svg-to-png-workflow.html',
  'blog-tinypass-password-guide.html',
  'blog-webdav-chrome-setup.html',
  'blog-handy-tulip-implementation.html',
  'lexa.html',
  'blog-lexa-launch.html',
  'blog-gemini-watermark-remover.html',
  'tinypic.html',
  'blog-tinypic-wasm-principle.html',
  'ezpixy.html',
  'webdavy.html',
  'tinypass.html',
  // 新 SEO 矩阵
  'compress-jpeg-online.html',
  'tinypic-vs-squoosh.html',
  'webdavy-vs-raidrive.html',
  'password-generator.html',
  'tinypass-vs-1password.html',
  'svg-to-png.html',
  'svg-studio-vs-inkscape.html',
  'text-to-image.html',
  'ai-fashion-model.html',
  'ezpixy-vs-midjourney.html',
  'remove-gemini-watermark.html',
  'banana-vs-adobe-firefly.html',
];
htmlFiles.forEach(file => {
  if (existsSync(file)) {
    copyFileSync(file, join(distDir, file));
    console.log(`  ✅ ${file}`);
  }
});

// 5. 复制其他静态文件
console.log('📋 复制其他静态文件...');
const staticFiles = ['robots.txt', 'sitemap.xml', 'ads.txt'];
staticFiles.forEach(file => {
  if (existsSync(file)) {
    copyFileSync(file, join(distDir, file));
    console.log(`  ✅ ${file}`);
  }
});

// 6. 复制 banana 目录
console.log('🍌 复制 banana 目录...');
const bananaDir = 'banana';
if (existsSync(bananaDir)) {
  execSync(`cp -r ${bananaDir} ${distDir}/`, { stdio: 'inherit' });
  console.log(`  ✅ ${bananaDir}`);
}

// 7. 复制 tinypic 目录
console.log('🖼️ 复制 tinypic 目录...');
const tinypicDir = 'tinypic';
if (existsSync(tinypicDir)) {
  execSync(`cp -r ${tinypicDir} ${distDir}/`, { stdio: 'inherit' });
  console.log(`  ✅ ${tinypicDir}`);
}

// 8. 把 vite build 剥掉的 /assets/css/*.css 链接补回 dist/index.html
//    Vite 在 transformIndexHtml 时的 link 注入行为不稳定（root div 有内容时会被跳过），
//    这里统一在 post-build 阶段强制追加 3 个本地 CSS link（不依赖任何 marker）。
function injectStaticCssLinks() {
  const target = resolve(distDir, 'index.html');
  if (!existsSync(target)) return;
  let html = readFileSync(target, 'utf-8');

  const links = [
    '<link rel="stylesheet" href="/assets/css/tailwind-built.css">',
    '<link rel="stylesheet" href="/assets/css/index-inline.css">',
    '<link rel="stylesheet" href="/assets/css/nav-unified.css">',
  ];

  let patched = false;
  for (const link of links) {
    if (html.includes(link)) continue;
    // 追加到 head 结束前
    html = html.replace('</head>', `  ${link}\n  </head>`);
    patched = true;
  }
  if (patched) {
    writeFileSync(target, html, 'utf-8');
    console.log('   🔗 已补全 dist/index.html 的本地 CSS link');
  }
}
injectStaticCssLinks();

// 8.5. 合并所有 CSS 成单一文件，节省 mobile 慢 4G 下的多次 RTT
//    4 个 CSS link（tailwind-built 53K + index-inline 3.3K + vite 合并 11.2K + nav-unified 2.8K）
//    → 1 个 all.min.css ~70K。mobile 模拟下 RTT 从 4×300ms 降到 1×300ms，节省 ~900ms。
function mergeCss() {
  const target = resolve(distDir, 'index.html');
  if (!existsSync(target)) return;
  let html = readFileSync(target, 'utf-8');

  // 收集所有本地 css 路径
  const cssLinks = [
    '/assets/css/tailwind-built.css',
    '/assets/css/index-inline.css',
    '/assets/css/nav-unified.css',
  ];
  // vite 自动注入的 index-xxx.css（动态名）
  const viteCssMatch = html.match(/href="(\/assets\/index-[A-Za-z0-9_-]+\.css)"/);
  if (viteCssMatch) cssLinks.push(viteCssMatch[1]);

  // 检查所有 css 是否都存在
  const cssDir = resolve(distDir, 'assets');
  const missing = cssLinks.filter(p => !existsSync(join(cssDir, p.replace('/assets/', ''))));
  if (missing.length) {
    console.log(`   ⚠️  跳过 CSS 合并（缺失: ${missing.join(', ')}）`);
    return;
  }

  // 拼接所有 css
  const allCss = cssLinks.map(p => {
    const full = join(cssDir, p.replace('/assets/', ''));
    return `/* === ${p} === */\n` + readFileSync(full, 'utf-8');
  }).join('\n');

  const outName = 'all-' + Date.now() + '.min.css';
  const outPath = resolve(cssDir, 'css', outName);
  // 简化命名：用 all.min.css（固定名可被 browser 缓存命中）
  const finalName = 'all.min.css';
  const finalPath = resolve(cssDir, 'css', finalName);
  writeFileSync(finalPath, allCss, 'utf-8');
  // 删除临时文件
  if (outName !== finalName && existsSync(outPath)) {
    try { require('fs').unlinkSync(outPath); } catch {}
  }

  // 替换 index.html 中所有 css link 为单一 link
  let newHtml = html;
  cssLinks.forEach(p => {
    const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    newHtml = newHtml.replace(
      new RegExp(`<link[^>]*href="${escaped}"[^>]*>\\s*`, 'g'),
      ''
    );
  });
  newHtml = newHtml.replace(
    '</head>',
    `  <link rel="stylesheet" href="/assets/css/${finalName}">\n  </head>`
  );
  writeFileSync(target, newHtml, 'utf-8');
  console.log(`   🎨 已合并 ${cssLinks.length} 个 CSS 为 1 个 (${(allCss.length/1024).toFixed(1)}KB)`);
}
mergeCss();

console.log(`📂 输出目录: ${distDir}`);
console.log('🎉 构建完成！');
