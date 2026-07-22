import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const publicDir = resolve(root, 'public');

const heroSource = resolve(root, 'src/assets/hero/91club-hero-banner.jpg');
await sharp(heroSource)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .png({ quality: 90 })
  .toFile(resolve(publicDir, 'og-image.png'));
console.log('Generated og-image.png (1200x630) from hero banner');

const faviconSvg = readFileSync(resolve(publicDir, 'favicon.svg'));
await sharp(faviconSvg, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(resolve(publicDir, 'apple-touch-icon.png'));
console.log('Generated apple-touch-icon.png (180x180)');

await sharp(faviconSvg, { density: 384 })
  .resize(32, 32)
  .png()
  .toFile(resolve(publicDir, 'favicon-32x32.png'));
console.log('Generated favicon-32x32.png');
