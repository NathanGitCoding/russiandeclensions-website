import { NextResponse } from 'next/server';
import { buildSitemapIndexXml, getBaseUrl } from '@/lib/sitemapXml';

export const dynamic = 'force-static';
export const revalidate = 86400;

const CONTENT_DATE = new Date('2025-03-15');

export async function GET() {
  const baseUrl = getBaseUrl();
  const sitemaps = [
    { url: `${baseUrl}/sitemap-pages.xml`, lastModified: CONTENT_DATE },
    { url: `${baseUrl}/sitemap-learn.xml`, lastModified: CONTENT_DATE },
    { url: `${baseUrl}/sitemap-words.xml`, lastModified: CONTENT_DATE },
  ];
  const xml = buildSitemapIndexXml(sitemaps);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
