import type { MetadataRoute } from 'next';
import { getAllLearnLessonSlugs } from '@/data/learnLessons';
import { getAllLearnArticleSlugs, getLearnArticle } from '@/data/learnArticles';
import { getAllPracticeCaseSlugs } from '@/lib/practiceCaseSlugs';
import { getAllSlugsWithBaseForm } from '@/lib/data';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com').replace(
  /\/$/,
  ''
);

const CONTENT_DATE = new Date('2026-03-28');

function toAbsolute(path: string): string {
  return `${siteUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}

function articleLastModified(slug: string): Date {
  const article = getLearnArticle(slug);
  const raw =
    article && typeof (article.jsonLd as Record<string, unknown>).dateModified === 'string'
      ? ((article.jsonLd as Record<string, unknown>).dateModified as string)
      : undefined;
  return raw ? new Date(raw.includes('T') ? raw : `${raw}T12:00:00.000Z`) : CONTENT_DATE;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const basePages: MetadataRoute.Sitemap = [
    {
      url: toAbsolute('/'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: toAbsolute('/words'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: toAbsolute('/learn'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: toAbsolute('/blog'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: toAbsolute('/practice'),
      lastModified: CONTENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const practicePages: MetadataRoute.Sitemap = getAllPracticeCaseSlugs().map((slug) => ({
    url: toAbsolute(`/practice/${slug}`),
    lastModified: CONTENT_DATE,
    changeFrequency: slug === 'nominative' ? 'monthly' : 'weekly',
    priority: slug === 'nominative' ? 0.6 : 0.7,
  }));

  const lessonPages: MetadataRoute.Sitemap = getAllLearnLessonSlugs().map((slug) => ({
    url: toAbsolute(`/learn/lessons/${slug}`),
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = getAllLearnArticleSlugs().map((slug) => ({
    url: toAbsolute(`/learn/articles/${slug}`),
    lastModified: articleLastModified(slug),
    changeFrequency: 'monthly',
    priority: slug === 'top-10-apps-russian' ? 0.95 : 0.8,
  }));

  const words = await getAllSlugsWithBaseForm();
  const wordPages: MetadataRoute.Sitemap = words.map(({ slug }) => ({
    url: toAbsolute(`/russian-declension/${slug}`),
    lastModified: CONTENT_DATE,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...basePages, ...practicePages, ...lessonPages, ...articlePages, ...wordPages];
}
