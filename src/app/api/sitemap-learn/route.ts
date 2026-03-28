import { NextResponse } from 'next/server';
import { getAllLearnLessonSlugs } from '@/data/learnLessons';
import { getAllLearnArticleSlugs } from '@/data/learnArticles';
import { buildUrlSetXml, getBaseUrl } from '@/lib/sitemapXml';

export const dynamic = 'force-static';
export const revalidate = 86400;

const CONTENT_DATE = new Date('2026-03-28');

export async function GET() {
  const baseUrl = getBaseUrl();

  const lessonEntries = getAllLearnLessonSlugs().map((slug) => ({
    url: `${baseUrl}/learn/lessons/${slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articleEntries = getAllLearnArticleSlugs().map((slug) => ({
    url: `${baseUrl}/learn/articles/${slug}`,
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const entries = [...lessonEntries, ...articleEntries];
  const xml = buildUrlSetXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
