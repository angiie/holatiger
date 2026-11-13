import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = fileURLToPath(new URL('../', import.meta.url))
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const home = read('src/pages/HomePage.tsx')
const css = read('assets/css/index-inline.css')
const button = read('src/components/ui/Button.tsx')
const cardPath = resolve(root, 'src/components/ui/ProductCard.tsx')

test('product cards expose one reusable semantic structure', () => {
  assert.ok(existsSync(cardPath), 'ProductCard.tsx should exist')
  const card = read('src/components/ui/ProductCard.tsx')
  assert.match(card, /ui-product-card/)
  assert.match(card, /ui-product-card-link/)
  assert.match(card, /ui-product-icon/)
  assert.match(card, /ui-badge/)
  assert.match(card, /ui-product-description/)
  assert.match(card, /ui-product-footer/)
  assert.match(card, /ui-status ui-status-\$\{statusTone\}/)
  assert.match(card, /ui-button ui-button-primary ui-button-small/)
  assert.match(card, /statusTone: 'success' \| 'warning'/)
})

test('shared styles define one brand accent, neutral surfaces and accessible states', () => {
  assert.match(css, /--brand-accent:\s*#c2410c/i)
  assert.match(css, /--brand-accent-strong:\s*#9a3412/i)
  assert.match(css, /--brand-soft:\s*#fff7ed/i)
  for (const selector of ['.ui-button-primary', '.ui-button-secondary', '.ui-product-icon', '.ui-feature-icon', '.ui-status-success', '.ui-status-warning']) {
    assert.ok(css.includes(selector), `Missing shared selector: ${selector}`)
  }
  assert.match(css, /\.ui-button:focus-visible/)
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/)
})

test('all homepage products use timeline cards instead of hardcoded action colors', () => {
  assert.match(home, /timeline-card/)
  assert.doesNotMatch(home, /backgroundColor:\s*['"]#[0-9a-f]+/i)
  assert.doesNotMatch(home, /bg-(?:blue|indigo|green|purple|pink)-[456]00 text-white rounded-lg/)
})

test('homepage backgrounds retain the original warm palette without changing shared buttons', () => {
  assert.match(css, /\.v1-professional \{ background: linear-gradient\(135deg, #fff7ed 0%, #fed7aa 100%\); \}/)
  assert.match(css, /background: linear-gradient\(to right, #fff7ed, #ffedd5\);/)
  assert.match(css, /\.ui-button-primary \{\s*background-color: var\(--brand-accent\);/)
})

test('MakerWorldMate is published everywhere its availability is shown', () => {
  const makerCard = home.match(/href: '\/makerworldmate',[\s\S]*?actionLabel:[^\n]+/)?.[0] ?? ''
  assert.match(makerCard, /statusLabel: t\('status\.published', '已发布'\)/)
  assert.match(makerCard, /statusTone: 'success' as const/)
  assert.doesNotMatch(makerCard, /status\.reviewing|statusTone: 'warning'/)

  const detail = read('makerworldmate.html')
  assert.match(detail, /href="https:\/\/chromewebstore\.google\.com\/detail\/cmkkddofgfglbfeapcafkpedipbpiaib"/)
  assert.match(detail, /class="product-button product-button-primary"/)
  assert.match(detail, /data-i18n="makerworldmate\.button\.install"/)
  assert.doesNotMatch(detail, /product-button-disabled|makerworldmate\.button\.pending|Chrome 应用商店审核中/)
  for (const locale of ['zh', 'en']) {
    const translations = read(`assets/i18n/${locale}.json`)
    assert.match(translations, /"makerworldmate\.button\.install"/)
    assert.doesNotMatch(translations, /"makerworldmate\.button\.pending"/)
  }
})

test('shared buttons no longer introduce indigo gradients or green actions', () => {
  assert.match(button, /primary: 'ui-button ui-button-primary'/)
  assert.match(button, /secondary: 'ui-button ui-button-secondary'/)
  assert.match(button, /accent: 'ui-button ui-button-primary'/)
  assert.match(button, /outline: 'ui-button ui-button-secondary'/)
  assert.doesNotMatch(button, /from-indigo-600|to-violet-600|bg-emerald-600/)
})

test('merged CSS uses a content-hashed filename for immutable caching', () => {
  const buildScript = read('scripts/build-static.mjs')
  assert.match(buildScript, /createHash\('sha256'\)\.update\(allCss\)\.digest\('hex'\)/)
  assert.match(buildScript, /const finalName = `all-\$\{cssHash\}\.min\.css`/)
  assert.doesNotMatch(buildScript, /const finalName = 'all\.min\.css'/)
})
