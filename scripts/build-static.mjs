import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 开始构建静态网站...');

// 1. 构建CSS
console.log('📦 构建CSS...');
execSync('npm run build:css', { stdio: 'inherit' });

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
  'index.html', 
  'svg-studio.html', 
  'text-to-png.html',
  'tinypass.html', 
  'webdavy.html',
  'faq.html',
  'blog.html',
  'blog-svg-to-png-workflow.html',
  'blog-tinypass-password-guide.html',
  'blog-webdav-chrome-setup.html'
  , 'HandyTulip.html'
  , 'blog-handy-tulip-implementation.html'
  , 'lexa.html'
  , 'blog-lexa-launch.html'
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

console.log('🎉 构建完成！');
console.log(`📂 输出目录: ${distDir}`);
