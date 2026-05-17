/* One-off: download curated royalty-free Unsplash photos and store as webp card thumbnails. */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const OUT_DIR = join(process.cwd(), 'public', 'articles');

const IMAGES: { id: string; out: string }[] = [
  { id: 'photo-1456513080510-7bf3a84b82f8', out: 'how-to-practice-russian-cases.webp' },
  { id: 'photo-1507842217343-583bb7270b66', out: 'best-free-resources-learn-russian.webp' },
  { id: 'photo-1501139083538-0139583c060f', out: 'how-long-learn-russian.webp' },
  { id: 'photo-1434030216411-0b793f4b4173', out: 'torfl-trki-russian-exam-guide.webp' },
];

async function main() {
  for (const { id, out } of IMAGES) {
    const url = `https://images.unsplash.com/${id}?w=1200&q=85&auto=format&fit=crop`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed ${id}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf)
      .resize(800, 450, { fit: 'cover', position: 'attention' })
      .webp({ quality: 80 })
      .toBuffer();
    await writeFile(join(OUT_DIR, out), webp);
    console.log(`✓ ${out} (${(webp.length / 1024).toFixed(0)} KB)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
