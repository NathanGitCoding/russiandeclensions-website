import React from 'react';
import type { Metadata } from 'next';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLearnPageTranslations, ARTICLE_SLUGS } from '@/data/website/learnPageTranslations';
import { getLearnArticlePublishedDate } from '@/data/learnArticles';
import BlogIndexClient from './BlogIndexClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const blogDescription =
  'In-depth Russian grammar articles and guides: case-by-case explanations, study methods, app reviews, and cheat sheets to master Russian declensions.';

export const metadata: Metadata = {
  title: 'Russian Grammar Articles & Guides',
  description: blogDescription,
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Russian Grammar Articles & Guides',
    description: blogDescription,
    images: [{ url: '/landing-cases/icon-app-russian-cases-with-anna.webp', width: 1200, height: 1200 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Russian Grammar Articles & Guides',
    description: blogDescription,
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

export default async function BlogIndexPage() {
  const lang = await getLandingLangFromRequest();
  const t = getLearnPageTranslations(lang);

  const itemListElements: { '@type': 'ListItem'; position: number; name: string; url: string }[] =
    [];
  const publishedDates: Record<string, string> = {};
  let pos = 1;
  for (const slug of ARTICLE_SLUGS) {
    const title = t.articleTitles[slug];
    const date = getLearnArticlePublishedDate(slug);
    if (date) publishedDates[slug] = date;
    if (title) {
      itemListElements.push({
        '@type': 'ListItem',
        position: pos++,
        name: title,
        url: `${siteUrl}/learn/articles/${slug}`,
      });
    }
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.sections.articles, item: `${siteUrl}/blog` },
    ],
  };

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t.sections.articles,
    description: t.header.lead,
    url: `${siteUrl}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      name: t.sections.articles,
      numberOfItems: itemListElements.length,
      itemListElement: itemListElements,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogIndexClient publishedDates={publishedDates} />
    </>
  );
}
