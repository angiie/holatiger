import assert from 'node:assert/strict'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const routes = [
  ['/nano-banana-watermark-remover', /Nano Banana/],
  ['/banana', /Gemini Watermark/],
  ['/tinypic/', /Tiny Pic/],
  ['/svg-to-png-workflow', /SVG/],
  ['/tinypass-password-guide', /TinyPass/],
  ['/webdav-chrome-setup-blog', /WebDAV/],
]

test('static clean URLs serve their HTML instead of the React fallback', async (t) => {
  const server = await createServer({
    configFile: resolve(root, 'vite.config.ts'),
    logLevel: 'silent',
    server: {
      host: '127.0.0.1',
      port: 0,
      open: false,
      hmr: false,
    },
  })
  t.after(() => server.close())
  await server.listen()

  const address = server.httpServer?.address()
  assert.ok(address && typeof address !== 'string')
  const origin = `http://127.0.0.1:${address.port}`

  for (const [pathname, expectedContent] of routes) {
    await t.test(pathname, async () => {
      const response = await fetch(origin + pathname)
      const html = await response.text()
      assert.equal(response.status, 200)
      assert.match(html, expectedContent)
      assert.doesNotMatch(html, /<title>HolaTiger 虎啦 -/)
    })
  }
})
