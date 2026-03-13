import type { MetadataRoute } from 'next';
import { getAllLearnLessonSlugs } from '@/data/learnLessons';
import { getAllLearnArticleSlugs } from '@/data/learnArticles';
import { getAllBlogSlugs } from '@/lib/blog';
import { getAllSlugsWithBaseForm } from '@/lib/words';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl.replace(/\/$/, '');

  const learnLessonEntries = getAllLearnLessonSlugs().map((slug) => ({
    url: `${baseUrl}/learn/lessons/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const learnArticleEntries = getAllLearnArticleSlugs().map((slug) => ({
    url: `${baseUrl}/learn/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogEntries = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const wordItems = await getAllSlugsWithBaseForm();
  const wordEntries = wordItems.map(({ slug }) => ({
    url: `${baseUrl}/russian-declension/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/words`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...learnLessonEntries,
    ...learnArticleEntries,
    ...blogEntries,
    ...wordEntries,
  ];
}
