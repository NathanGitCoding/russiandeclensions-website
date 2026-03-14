import React from 'react';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import {
  getLearnPageTranslations,
  LESSON_SLUGS,
  ARTICLE_SLUGS,
} from '@/data/website/learnPageTranslations';
import LearnIndexClient from './LearnIndexClient';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

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

  const itemListElements: { '@type': 'ListItem'; position: number; name: string; url: string }[] = [];
  let pos = 1;
  for (const slug of LESSON_SLUGS) {
    const title = t.lessonTitles[slug];
    if (title) {
      const path = LESSON_PATH_MAP[slug] ?? 'lessons';
      const href = path === 'articles' ? `/learn/articles/${slug}` : `/learn/lessons/${slug}`;
      itemListElements.push({
        '@type': 'ListItem',
        position: pos++,
        name: title,
        url: `${siteUrl}${href}`,
      });
    }
  }
  for (const slug of ARTICLE_SLUGS) {
    const title = t.articleTitles[slug];
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
      <LearnIndexClient />
    </>
  );
}
