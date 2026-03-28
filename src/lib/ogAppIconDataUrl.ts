import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/** PNG derived from the WebP app icon — Satori/next/og decodes PNG reliably at build time. */
const ICON_PATH = join(process.cwd(), 'public/landing-cases/icon-app-russian-cases-with-anna-og.png');

let memo: Promise<string> | null = null;

/** Data URL for OG image templates — local file, no HTTP fetch at build time. */
export function getOgAppIconDataUrl(): Promise<string> {
  if (!memo) {
    memo = readFile(ICON_PATH).then(
      (buf) => `data:image/png;base64,${buf.toString('base64')}`
    );
  }
  return memo;
}
