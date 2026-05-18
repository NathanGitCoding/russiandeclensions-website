import React from 'react';
import type { Metadata } from 'next';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLearnPageTranslations, LESSON_SLUGS } from '@/data/website/learnPageTranslations';
import { getLearnArticlePublishedDate } from '@/data/learnArticles';
import { getLearnLessonPublishedDate } from '@/data/learnLessons';
import LearnIndexClient from './LearnIndexClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const learnDescription =
  'Free Russian grammar lessons and articles: all 6 cases, declension rules, endings cheat sheets, and step-by-step guides for every Russian case.';

export const metadata: Metadata = {
  title: 'Learn Russian Grammar & Cases',
  description: learnDescription,
  alternates: { canonical: '/learn' },
  openGraph: {
    type: 'website',
    url: '/learn',
    title: 'Learn Russian Grammar & Cases',
    description: learnDescription,
    images: [{ url: '/landing-cases/icon-app-russian-cases-with-anna.webp', width: 1200, height: 1200 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Russian Grammar & Cases',
    description: learnDescription,
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

/** Path pour chaque slug de leçon: 'articles' | 'lessons' */
const LESSON_PATH_MAP: Record<string, 'articles' | 'lessons'> = {
  'russian-cases-complete-guide': 'lessons',
  'dative-case-declension': 'lessons',
  'russian-case-endings-cheatsheet': 'articles',
  'russian-prepositions-and-cases': 'articles',
  'russian-genitive-case': 'articles',
  'russian-dative-case': 'articles',
  'russian-prepositional-case': 'articles',
  'russian-accusative-case': 'articles',
  'russian-instrumental-case': 'articles',
};

export default async function LearnIndexPage() {
  const lang = await getLandingLangFromRequest();
  const t = getLearnPageTranslations(lang);

  const itemListElements: { '@type': 'ListItem'; position: number; name: string; url: string }[] =
    [];
  const publishedDates: Record<string, string> = {};
  let pos = 1;
  for (const slug of LESSON_SLUGS) {
    const title = t.lessonTitles[slug];
    const path = LESSON_PATH_MAP[slug] ?? 'lessons';
    const date =
      path === 'articles'
        ? getLearnArticlePublishedDate(slug)
        : getLearnLessonPublishedDate(slug);
    if (date) publishedDates[slug] = date;
    if (title) {
      const href = path === 'articles' ? `/learn/articles/${slug}` : `/learn/lessons/${slug}`;
      itemListElements.push({
        '@type': 'ListItem',
        position: pos++,
        name: title,
        url: `${siteUrl}${href}`,
      });
    }
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.breadcrumb.learn, item: `${siteUrl}/learn` },
    ],
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.header.title,
    description: t.header.lead,
    url: `${siteUrl}/learn`,
    mainEntity: {
      '@type': 'ItemList',
      name: t.header.title,
      description: t.header.lead,
      numberOfItems: itemListElements.length,
      itemListElement: itemListElements,
    },
  };

  const learningResourceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: t.header.title,
    description: t.header.lead,
    learningResourceType: 'Course',
    educationalLevel: 'Beginner',
    about: {
      '@type': 'Thing',
      name: 'Russian grammar',
      description: 'Russian cases, declensions, and grammatical structures',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
      />
      <LearnIndexClient publishedDates={publishedDates} />
    </>
  );
}
