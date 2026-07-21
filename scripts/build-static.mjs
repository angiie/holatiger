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
//    Vite 在 transformIndexHtml 时只把第一个 link tag 注入到 head，剩下的会被剥离。
//    这里把静态站需要的 2 个本地 css link 重新追加到 vite 已经注入的 tailwind-built.css 之后。
function injectRemainingCssLinks() {
  const target = resolve(distDir, 'index.html');
  if (!existsSync(target)) return;
  const html = readFileSync(target, 'utf-8');
  if (html.includes('/assets/css/index-inline.css')) return; // 已存在则跳过

  const marker = '<link rel="stylesheet" href="/assets/css/tailwind-built.css">';
  if (!html.includes(marker)) {
    console.log('   ⚠️  未找到 tailwind-built.css marker，跳过 css link 补全');
    return;
  }

  const extraLinks = [
    '<link rel="stylesheet" href="/assets/css/index-inline.css">',
    '<link rel="stylesheet" href="/assets/css/nav-unified.css">',
  ].join('\n  ');

  const patched = html.replace(
    marker,
    `${marker}\n  ${extraLinks}`
  );
  writeFileSync(target, patched, 'utf-8');
  console.log('   🔗 已补全 dist/index.html 的 2 个静态 CSS link');
}
injectRemainingCssLinks();

console.log(`📂 输出目录: ${distDir}`);
console.log('🎉 构建完成！');
