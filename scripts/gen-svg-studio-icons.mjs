import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Source and output
const projectRoot = path.resolve(__dirname, '..')
const sourceImage = path.resolve(projectRoot, 'assets/images/svg-studio/edited_image_1 (1).png')
const outDir = path.resolve(projectRoot, 'assets/images/svg-studio/icons')

const ensureDir = (p) => {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
}

async function generatePNG(size, name) {
  const outfile = path.join(outDir, `${name}-${size}.png`)
  await sharp(sourceImage)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outfile)
  return outfile
}

async function generateSocial(w, h, name) {
  const outfile = path.join(outDir, `${name}-${w}x${h}.png`)
  await sharp(sourceImage)
    .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 0, bottom: 0, left: 0, right: 0, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outfile)
  return outfile
}

async function main() {
  ensureDir(outDir)
  if (!fs.existsSync(sourceImage)) {
    console.error('Source image not found:', sourceImage)
    process.exit(1)
  }

  const sizesFavicon = [16, 32]
  const sizesPWA = [192, 512]
  const appleTouch = 180
  const maskable = 512

  console.log('Generating favicons...')
  for (const s of sizesFavicon) await generatePNG(s, 'favicon')

  console.log('Generating Apple Touch icon...')
  await generatePNG(appleTouch, 'apple-touch-icon')

  console.log('Generating PWA icons...')
  for (const s of sizesPWA) await generatePNG(s, 'pwa-icon')

  console.log('Generating maskable icon...')
  await sharp(sourceImage)
    .resize(maskable, maskable, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(outDir, `pwa-icon-${maskable}-maskable.png`))

  console.log('Generating social share image...')
  await generateSocial(1200, 630, 'og')

  console.log('Done. Output dir:', outDir)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
}) 