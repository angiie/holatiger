#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

async function ensurePuppeteer() {
  try {
    // 动态加载，避免未安装时报错退出
    const mod = await import('puppeteer');
    return mod.default || mod;
  } catch (err) {
    console.error('[export-covers] 未找到 puppeteer 依赖。请先安装:');
    console.error('  npm install --save-dev puppeteer');
    process.exit(1);
  }
}

const root = path.resolve(path.join(process.cwd()));
const coversDir = path.join(root, 'assets', 'covers');
const outDir = path.join(coversDir, 'png');

const tasks = [
  { name: 'holatiger-overview-cover', svg: 'holatiger-overview-cover.svg' },
  { name: 'tinypass-cover',            svg: 'tinypass-cover.svg' },
  { name: 'webdavy-cover',             svg: 'webdavy-cover.svg' },
  { name: 'svg-studio-cover',          svg: 'svg-studio-cover.svg' },
];

const WIDTH = 1080;
const HEIGHT = 1440;

async function exportOne(browser, name, svgRelPath) {
  const svgAbs = path.join(coversDir, svgRelPath);
  const url = 'file://' + svgAbs;
  const pngOut = path.join(outDir, `${name}.png`);

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  // 有些渲染需要一点时间
  await page.waitForTimeout(200);
  await page.screenshot({ path: pngOut, type: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
  await page.close();
  console.log(`✓ 导出: ${path.relative(root, pngOut)}`);
}

(async () => {
  const puppeteer = await ensurePuppeteer();
  await fs.mkdir(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new', args: ['--disable-gpu', '--no-sandbox'] });
  try {
    for (const t of tasks) {
      await exportOne(browser, t.name, t.svg);
    }
  } finally {
    await browser.close();
  }

  console.log('\n全部完成。');
  console.log('提示：如遇到字体/图像加载问题，请使用本地HTTP服务访问（如 npm run serve）并将 file:// 替换为 http://localhost:8000/ 方式渲染。');
})(); 