/**
 * 临时脚本：线上渲染验证（用后即删）
 */
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
for (const url of ['https://holatiger.com/tinypass', 'https://holatiger.com/webdavy']) {
  await page.goto(url, { waitUntil: 'networkidle' });
  const info = await page.evaluate(() => {
    const inner = document.querySelector('header div');
    const main = document.querySelector('main');
    return {
      headerH: document.querySelector('header').offsetHeight,
      innerCls: inner ? inner.className : null,
      mainMaxW: main ? getComputedStyle(main).maxWidth : null,
      h1: document.querySelector('h1')?.textContent.trim(),
      navHasLexa: document.body.innerText.includes('Lexa'),
    };
  });
  console.log(`${url}: ${JSON.stringify(info)}`);
}
await browser.close();
console.log('DONE');
