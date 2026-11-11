import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const pages = [
  '/blog-gemini-watermark-remover',
  '/webdav-chrome-setup-blog',
  '/tinypass-password-guide',
  '/svg-to-png-workflow',
  '/banana/',
]

test('static pages load without local JavaScript errors', async (t) => {
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

  for (const pathname of pages) {
    await t.test(pathname, async () => {
      const page = await browser.newPage()
      const errors = []
      page.on('pageerror', (error) => errors.push(error.message))
      await page.route(/^https?:\/\//, (route) => route.request().url().startsWith(origin)
        ? route.continue()
        : route.fulfill({ status: 204, body: '' }))
      await page.goto(origin + pathname, { waitUntil: 'domcontentloaded' })
      await page.waitForTimeout(1000)
      await page.close()
      assert.deepEqual(errors, [])
    })
  }
})
