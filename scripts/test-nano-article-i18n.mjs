import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))

test('Nano Banana article renders Chinese content when Chinese is selected', async (t) => {
  const server = await createServer({
    configFile: resolve(root, 'vite.config.ts'),
    logLevel: 'silent',
    server: { host: '127.0.0.1', port: 0, open: false, hmr: false },
  })
  let browser
  t.after(async () => {
    if (browser) await browser.close()
    await server.close()
  })
  await server.listen()
  const address = server.httpServer?.address()
  assert.ok(address && typeof address !== 'string')
  const origin = `http://127.0.0.1:${address.port}`

  browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  })
  const page = await browser.newPage()
  await page.route(/^https?:\/\//, (route) => route.request().url().startsWith(origin)
    ? route.continue()
    : route.fulfill({ status: 204, body: '' }))
  await page.goto(`${origin}/nano-banana-watermark-remover?lang=zh-CN`, { waitUntil: 'domcontentloaded' })
  await page.waitForFunction(() => document.querySelector('h1')?.textContent?.includes('如何移除'), null, { timeout: 3000 })

  const result = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    title: document.title,
    h1: document.querySelector('h1')?.textContent?.trim(),
    firstSection: document.querySelector('main h2')?.textContent?.trim(),
    description: document.querySelector('meta[name="description"]')?.content,
  }))
  assert.equal(result.lang, 'zh-CN')
  assert.match(result.title, /如何移除/)
  assert.match(result.firstSection, /什么是/)
  assert.match(result.description, /无损/)
})
