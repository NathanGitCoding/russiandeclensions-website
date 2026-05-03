import { NextResponse } from 'next/server';
import { getAllLearnLessonSlugs } from '@/data/learnLessons';
import { getAllLearnArticleSlugs, getLearnArticle } from '@/data/learnArticles';
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

  const articleEntries = getAllLearnArticleSlugs().map((slug) => {
    const article = getLearnArticle(slug);
    const raw =
      article && typeof (article.jsonLd as Record<string, unknown>).dateModified === 'string'
        ? ((article.jsonLd as Record<string, unknown>).dateModified as string)
        : undefined;
    const lastModified = raw
      ? new Date(raw.includes('T') ? raw : `${raw}T12:00:00.000Z`)
      : CONTENT_DATE;
    const priority = slug === 'top-10-apps-russian' ? 0.95 : 0.8;
    return {
      url: `${baseUrl}/learn/articles/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
    };
  });

  const entries = [...lessonEntries, ...articleEntries];
  const xml = buildUrlSetXml(entries);
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
