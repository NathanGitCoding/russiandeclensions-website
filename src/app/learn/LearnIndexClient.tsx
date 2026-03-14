'use client';

import React from 'react';
import Link from 'next/link';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import {
  getLearnPageTranslations,
  LESSON_SLUGS,
  ARTICLE_SLUGS,
} from '@/data/website/learnPageTranslations';

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

export default function LearnIndexClient() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLearnPageTranslations(landingLanguage);

  return (
    <article className="learn-content">
      <div className="learn-breadcrumb">
        <Link href="/" className="learn-breadcrumb-link">
          {t.breadcrumb.home}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <span className="learn-breadcrumb-current">{t.breadcrumb.learn}</span>
      </div>

      <header className="learn-header">
        <h1 className="learn-title">{t.header.title}</h1>
        <p className="learn-lead">{t.header.lead}</p>
      </header>

      <section className="learn-section">
        <h2 className="learn-section-title">{t.sections.grammarLessons}</h2>
        <div className="learn-cards">
          {LESSON_SLUGS.map((slug) => {
            const path = LESSON_PATH_MAP[slug] ?? 'lessons';
            const title = t.lessonTitles[slug];
            if (!title) return null;
            return (
              <Link
                key={slug}
                href={path === 'articles' ? `/learn/articles/${slug}` : `/learn/lessons/${slug}`}
                className="learn-card"
              >
                <span className="learn-card-badge">{t.badges.lesson}</span>
                <span className="learn-card-title">{title}</span>
                <span className="learn-card-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="learn-section">
        <h2 className="learn-section-title">{t.sections.articles}</h2>
        <div className="learn-cards">
          {ARTICLE_SLUGS.map((slug) => {
            const title = t.articleTitles[slug];
            if (!title) return null;
            return (
              <Link key={slug} href={`/learn/articles/${slug}`} className="learn-card">
                <span className="learn-card-badge learn-card-badge-article">
                  {t.badges.article}
                </span>
                <span className="learn-card-title">{title}</span>
                <span className="learn-card-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
}
