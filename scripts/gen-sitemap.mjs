/**
 * sitemap.xml 自动生成脚本
 *
 * 扫描项目根目录下的所有 HTML 文件，从 git 获取最后修改日期，
 * 生成带 hreflang alternate 链接的 sitemap.xml。
 *
 * 用法: node scripts/gen-sitemap.mjs
 * 集成: 在 build-static.mjs 中自动调用
 */

import { readdirSync, existsSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const SITEMAP_PATH = resolve(ROOT, 'sitemap.xml');
const BASE_URL = 'https://holatiger.com';

// ===== 页面配置 =====
// 每个页面可设置: priority, changefreq, hreflang 覆盖
const PAGE_CONFIG = {
  'index.html':           { priority: 1.0, changefreq: 'weekly' },
  'svg-studio.html':      { priority: 0.9, changefreq: 'weekly' },
  'lexa.html':            { priority: 0.9, changefreq: 'weekly' },
  'tinypic/index.html':   { priority: 0.9, changefreq: 'weekly' },
  'text-to-png.html':     { priority: 0.8, changefreq: 'monthly' },
  'ezpixy.html':          { priority: 0.8, changefreq: 'weekly' },
  'banana/index.html':    { priority: 0.8, changefreq: 'monthly' },
  'faq.html':             { priority: 0.6, changefreq: 'weekly' },
  'blog.html':            { priority: 0.6, changefreq: 'daily' },
  // SPA 路由（无对应 .html 文件）
  'webdavy':              { priority: 0.8, changefreq: 'monthly' },
  'tinypass':             { priority: 0.8, changefreq: 'monthly' },
};

const BLOG_DEFAULT =    { priority: 0.5, changefreq: 'monthly' };

// ===== hreflang 配置 =====
// 大多数页面: zh-CN=page, en=page?lang=en, x-default=page
function getHreflangs(pagePath, loc) {
  if (pagePath === 'index.html') {
    return [
      { hreflang: 'zh-CN', href: loc },
      { hreflang: 'en', href: `${loc}?lang=en` },
      { hreflang: 'x-default', href: loc },
    ];
  }
  if (pagePath === 'banana/index.html' || pagePath === 'tinypic/index.html') {
    const dirPath = pagePath.replace('/index.html', '');
    return [
      { hreflang: 'en', href: `${BASE_URL}/${dirPath}/` },
      { hreflang: 'zh-CN', href: `${BASE_URL}/${dirPath}/?lang=zh-CN` },
      { hreflang: 'x-default', href: `${BASE_URL}/${dirPath}/` },
    ];
  }
  if (pagePath === 'blog.html') {
    return [
      { hreflang: 'zh-CN', href: `${BASE_URL}/blog.html` },
      { hreflang: 'en', href: `${BASE_URL}/en/blog` },
      { hreflang: 'x-default', href: `${BASE_URL}/blog.html` },
    ];
  }
  // fallback: 使用传入的 loc 参数
  return [
    { hreflang: 'zh-CN', href: loc },
    { hreflang: 'en', href: `${loc}?lang=en` },
    { hreflang: 'x-default', href: loc },
  ];
}

function getLoc(pagePath) {
  if (pagePath === 'banana/index.html' || pagePath === 'tinypic/index.html') {
    const dirPath = pagePath.replace('/index.html', '');
    return `${BASE_URL}/${dirPath}/`;
  }
  if (pagePath === 'index.html') {
    return `${BASE_URL}/`;
  }
  return `${BASE_URL}/${pagePath}`;
}

// ===== 获取文件最后修改日期 =====
function getLastMod(filePath) {
  // SPA 路由: 从对应的 React 组件文件获取最后修改日期
  if (filePath === 'webdavy') {
    return getLastMod('src/pages/WebDavyPage.tsx');
  }
  if (filePath === 'tinypass') {
    return getLastMod('src/pages/TinyPassPage.tsx');
  }

  const fullPath = resolve(ROOT, filePath);
  if (!existsSync(fullPath)) return new Date().toISOString().split('T')[0];

  try {
    // 优先从 git log 获取
    const output = execSync(
      `git log -1 --format="%aI" -- "${filePath}"`,
      { cwd: ROOT, encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    ).trim();
    if (output) return output.split('T')[0]; // 只取日期部分
  } catch {
    // git 不可用时 fallback 到文件 mtime
  }

  try {
    const stat = execSync(`stat -f "%Sm" -t "%Y-%m-%d" "${fullPath}"`, { encoding: 'utf-8' }).trim();
    if (stat) return stat;
  } catch {
    // stat 也不可用
  }

  return new Date().toISOString().split('T')[0];
}

// ===== 扫描所有 HTML 页面的路径列表 =====
function scanPages() {
  const pages = [];

  // 根目录 HTML (排除已迁移为 SPA 路由的页面)
  const rootFiles = readdirSync(ROOT).filter(f => f.endsWith('.html') && f !== 'index.html');
  rootFiles.sort();
  rootFiles.forEach(f => {
    if (f !== 'tinypass.html' && f !== 'webdavy.html') {
      pages.push(f);
    }
  });
  pages.unshift('index.html'); // 首页放第一个

  // 子目录 HTML (tinypic, banana)
  const subdirs = ['tinypic', 'banana'];
  subdirs.forEach(dir => {
    const indexPath = `${dir}/index.html`;
    if (existsSync(resolve(ROOT, indexPath))) {
      pages.push(indexPath);
    }
  });

  // SPA 路由（无对应 .html 文件）
  pages.push('webdavy');
  pages.push('tinypass');

  return pages;
}

// ===== 生成 sitemap XML =====
function generate() {
  const pages = scanPages();
  const urls = pages.map(pagePath => {
    const cfg = PAGE_CONFIG[pagePath] || (pagePath.startsWith('blog-') ? BLOG_DEFAULT : { priority: 0.5, changefreq: 'monthly' });
    const lastmod = getLastMod(pagePath);
    const loc = getLoc(pagePath);
    const hreflangs = getHreflangs(pagePath, loc);

    let xml = '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${cfg.changefreq}</changefreq>\n`;
    xml += `    <priority>${cfg.priority.toFixed(1)}</priority>\n`;
    hreflangs.forEach(hl => {
      xml += `    <xhtml:link rel="alternate" hreflang="${hl.hreflang}" href="${hl.href}" />\n`;
    });
    xml += '  </url>';
    return xml;
  });

  const xml = `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log(`✅ sitemap.xml 已生成 (${pages.length} 个页面)`);
  pages.forEach(p => console.log(`   ${p}`));
}

generate();
