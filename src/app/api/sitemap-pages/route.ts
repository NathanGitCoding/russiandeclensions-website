import { NextResponse } from 'next/server';
import { buildUrlSetXml, getBaseUrl } from '@/lib/sitemapXml';
import { getAllPracticeCaseSlugs } from '@/lib/practiceCaseSlugs';

export const dynamic = 'force-static';
export const revalidate = 86400;

/** Leçons + articles : voir sitemap-learn.xml (évite les URL en double dans l’index). */
const CONTENT_DATE = new Date('2026-03-28');

export async function GET() {
  const baseUrl = getBaseUrl();
  const now = new Date();
  const practiceCaseEntries = getAllPracticeCaseSlugs().map((slug) => ({
    url: `${baseUrl}/practice/${slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: slug === 'nominative' ? ('monthly' as const) : ('weekly' as const),
    priority: slug === 'nominative' ? (0.6 as const) : (0.7 as const),
  }));
  const entries = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/words`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/learn`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/practice`, lastModified: CONTENT_DATE, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...practiceCaseEntries,
  ];
  const xml = buildUrlSetXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
