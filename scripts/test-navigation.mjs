import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const root = fileURLToPath(new URL('../', import.meta.url))
const read = (path) => readFileSync(resolve(root, path), 'utf8')
const css = read('assets/css/nav-unified.css')
const header = read('src/components/Header.tsx')
const home = read('src/pages/HomePage.tsx')
const index = read('index.html')

test('header uses a warm translucent surface and compact scrolled state', () => {
  assert.match(css, /rgba\(255, 247, 237, 0\.86\)/)
  assert.match(css, /backdrop-filter:\s*blur\(16px\)/)
  assert.match(css, /\.site-header-v1\.is-scrolled/)
  assert.match(css, /\.site-header-v1\.is-scrolled \.nav-v1/)
  assert.match(header, /window\.scrollY > 12/)
  assert.match(header, /is-scrolled/)
})

test('desktop navigation exposes hover, focus and current-section feedback', () => {
  assert.match(css, /\.nav-links-v1 a:hover/)
  assert.match(css, /\.nav-links-v1 a:focus-visible/)
  assert.match(css, /\.nav-links-v1 a\.is-active/)
  assert.match(header, /setActiveSection/)
  assert.match(header, /aria-current=/)
  assert.match(header, /'location'/)
})

test('mobile navigation is accessible and dismisses predictably', () => {
  assert.match(header, /aria-controls="mobile-navigation"/)
  assert.match(header, /aria-expanded=\{isMenuOpen\}/)
  assert.match(header, /event\.key === 'Escape'/)
  assert.match(header, /setIsMenuOpen\(false\)/)
  assert.match(header, /id="mobile-navigation"/)
  assert.match(header, /className="nav-mobile-toggle"/)
  assert.match(header, /className="mobile-nav-v1"/)
  assert.match(css, /\.nav-mobile-toggle/)
  assert.match(css, /\.mobile-nav-v1/)
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/)
  for (const locale of ['zh', 'en']) {
    assert.match(read(`assets/i18n/${locale}.json`), /"nav\.menu"/)
  }
})

test('all X profile references use the current account', () => {
  assert.ok(home.includes('https://x.com/angiie_inside'))
  assert.ok(index.includes('https://x.com/angiie_inside'))
  assert.doesNotMatch(home, /angiie_smart/)
  assert.doesNotMatch(index, /angiie_smart/)
})
