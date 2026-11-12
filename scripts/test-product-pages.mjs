import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = {
  'tinypass.html': 'portrait',
  'webdavy.html': 'landscape',
  'ezpixy.html': 'comparison',
  'battery-killer.html': 'portrait',
  'makerworldmate.html': 'landscape',
};

for (const [file, expectedMedia] of Object.entries(pages)) {
  test(`${file} declares its product media contract and existing assets`, () => {
    const html = readFileSync(join(root, file), 'utf8');
    const product = file.replace(/\.html$/, '');

    assert.match(html, new RegExp(`<body[^>]*data-product=["']${product}["']`));
    assert.match(html, /<link[^>]*href=["']\/assets\/css\/product-detail\.css["']/);

    const hero = html.match(/<div[^>]*class=["'][^"']*product-hero-card[^"']*["'][^>]*>/)?.[0] ?? '';
    const mediaValues = [...hero.matchAll(/data-media=["']([^"']+)["']/g)].map((match) => match[1]);
    assert.deepEqual(mediaValues, [expectedMedia], 'hero must declare exactly one supported media variant');

    const localImages = [...html.matchAll(/<img[^>]*src=["'](\/assets\/images\/[^"']+)["']/g)]
      .map((match) => match[1]);
    assert.ok(localImages.length > 0, 'page should reference product imagery');
    for (const image of localImages) {
      assert.ok(existsSync(join(root, image)), `missing local image: ${image}`);
    }
  });
}

test('shared stylesheet supports all media variants and reduced motion', () => {
  const css = readFileSync(join(root, 'assets/css/product-detail.css'), 'utf8');
  for (const variant of ['landscape', 'portrait', 'comparison']) {
    assert.match(css, new RegExp(`\\.product-hero-card\\[data-media=["']${variant}["']\\]`));
  }
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

test('static build fingerprints local CSS links on every HTML page', () => {
  const buildScript = readFileSync(join(root, 'scripts/build-static.mjs'), 'utf8');
  assert.match(buildScript, /function fingerprintStaticCssLinks\(\)/);
  assert.match(buildScript, /mergeCss\(\);\s*fingerprintStaticCssLinks\(\);/);
});

test('TinyPic favicon uses its deployed asset path', () => {
  const html = readFileSync(join(root, 'tinypic/index.html'), 'utf8');
  assert.match(html, /<link[^>]*rel=["']icon["'][^>]*href=["']\/tinypic\/logo\.svg["']/);
  assert.doesNotMatch(html, /href=["']\/logo\.svg["']/);
  assert.ok(existsSync(join(root, 'tinypic/logo.svg')));
});
