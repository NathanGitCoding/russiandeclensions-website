/**
 * Convertit toutes les images PNG et JPG en WebP dans public/
 * Usage: npx tsx scripts/convert-images-to-webp.ts
 */

import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = join(process.cwd(), 'public');

function* walk(dir: string): Generator<string> {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        yield fullPath;
      }
    }
  }
}

async function convertToWebp(inputPath: string): Promise<void> {
  const webpPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const relativePath = inputPath.replace(process.cwd(), '');

  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const inputSize = (statSync(inputPath).size / 1024).toFixed(1);
    const outputSize = (statSync(webpPath).size / 1024).toFixed(1);
    console.log(`✓ ${relativePath} → .webp (${inputSize}K → ${outputSize}K)`);
  } catch (err) {
    console.error(`✗ Erreur ${relativePath}:`, err);
    throw err;
  }
}

async function main() {
  console.log('Conversion des images en WebP...\n');
  const files = [...walk(PUBLIC_DIR)];

  for (const file of files) {
    await convertToWebp(file);
  }

  console.log(`\n${files.length} image(s) convertie(s).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
