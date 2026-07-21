// 把 assets/images 下的大图转 WebP，省 PageSpeed 报告里 "改进图片传送" 的容量。
// 一次性脚本，输出 <原名_无空格>.webp，保留原图作 fallback。
import sharp from 'sharp';
import { existsSync, statSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '..', 'assets', 'images');

const targets = [
  { rel: 'svg-studio/edited_image_1 (1).png', maxWidth: 1920, quality: 80 },
  { rel: 'lexa/logo.png',                       maxWidth: 512,  quality: 85 },
  { rel: 'icons/avatar.jpeg',                   maxWidth: 256,  quality: 82 },
];

async function convertOne({ rel, maxWidth, quality }) {
  const src = join(IMG_DIR, rel);
  if (!existsSync(src)) {
    console.log(`  ⚠️  not found: ${rel}`);
    return;
  }
  const dir = dirname(src);
  const ext = extname(src);
  const stem = basename(src, ext);
  const outName = stem.replace(/\s+/g, '_') + '.webp';
  const out = join(dir, outName);

  try {
    const before = statSync(src).size;
    await sharp(src)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out);
    const after = statSync(out).size;
    const saved = ((before - after) / 1024).toFixed(1);
    console.log(`  ✅ ${rel}: ${(before/1024).toFixed(1)}KB → ${outName}: ${(after/1024).toFixed(1)}KB (省 ${saved}KB)`);
  } catch (e) {
    console.log(`  ❌ ${rel}: ${e.message}`);
  }
}

console.log('🔄 开始转换大图为 WebP...');
for (const t of targets) {
  await convertOne(t);
}
console.log('🎉 完成');
