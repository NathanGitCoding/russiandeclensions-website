import { NextResponse } from 'next/server';
import { getAllSlugsWithBaseForm } from '@/lib/words';
import { buildUrlSetXml, getBaseUrl } from '@/lib/sitemapXml';

export const dynamic = 'force-static';
export const revalidate = 86400;

const CONTENT_DATE = new Date('2026-03-28');

export async function GET() {
  const baseUrl = getBaseUrl();
  const wordItems = await getAllSlugsWithBaseForm();
  const entries = wordItems.map(({ slug }) => ({
    url: `${baseUrl}/russian-declension/${slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  const xml = buildUrlSetXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
