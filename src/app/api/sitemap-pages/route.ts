import { NextResponse } from 'next/server';
import { buildUrlSetXml, getBaseUrl } from '@/lib/sitemapXml';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const baseUrl = getBaseUrl();
  const entries = [
    { url: baseUrl, lastModified: new Date('2025-03-15'), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/words`, lastModified: new Date('2025-03-15'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/learn`, lastModified: new Date('2025-03-15'), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];
  const xml = buildUrlSetXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
