#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.EXPORT_BASE || 'http://localhost:8000';
const OUT_DIR = path.resolve('assets/covers/png');
const WIDTH = 1080;
const HEIGHT = 1440;

const tasks = [
  { name: 'holatiger-overview-cover', url: `${BASE}/assets/covers/holatiger-overview-cover.svg` },
  { name: 'tinypass-cover',            url: `${BASE}/assets/covers/tinypass-cover.svg` },
  { name: 'webdavy-cover',             url: `${BASE}/assets/covers/webdavy-cover.svg` },
  { name: 'svg-studio-cover',          url: `${BASE}/assets/covers/svg-studio-cover.svg` },
];

async function ensurePlaywright() {
  try {
    const mod = await import('playwright');
    return mod;
  } catch (e) {
    console.error('[export-covers] 未找到 playwright 依赖。请先安装:');
    console.error('  npm install --save-dev playwright');
    process.exit(1);
  }
}

async function run() {
  const { chromium } = await ensurePlaywright();
  await fs.mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    for (const t of tasks) {
      const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });
      await page.goto(t.url, { waitUntil: 'networkidle' });
      // 等待可能的外链图像渲染
      await page.waitForTimeout(200);
      const out = path.join(OUT_DIR, `${t.name}.png`);
      await page.screenshot({ path: out, type: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
      await page.close();
      console.log(`✓ 导出: ${path.relative(process.cwd(), out)} ← ${t.url}`);
    }
  } finally {
    await browser.close();
  }
  console.log('\n完成。你可通过设置环境变量 EXPORT_BASE 来自定义基础URL（默认 http://localhost:8000）。');
}

run().catch(err => { console.error(err); process.exit(1); }); 