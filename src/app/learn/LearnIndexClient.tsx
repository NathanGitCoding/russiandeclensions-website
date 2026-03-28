'use client';

import React from 'react';
import Link from 'next/link';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import {
  getLearnPageTranslations,
  LESSON_SLUGS,
  ARTICLE_SLUGS,
} from '@/data/website/learnPageTranslations';

const POPULAR_DECLENSIONS = [
  { slug: 'chelovek', label: 'человек (person)' },
  { slug: 'dom', label: 'дом (house)' },
  { slug: 'voda', label: 'вода (water)' },
  { slug: 'kniga', label: 'книга (book)' },
  { slug: 'rabota', label: 'работа (work)' },
  { slug: 'gorod', label: 'город (city)' },
  { slug: 'den', label: 'день (day)' },
  { slug: 'okno', label: 'окно (window)' },
  { slug: 'drug', label: 'друг (friend)' },
  { slug: 'zhenshchina', label: 'женщина (woman)' },
  { slug: 'vremya', label: 'время (time)' },
  { slug: 'shkola', label: 'школа (school)' },
  { slug: 'strana', label: 'страна (country)' },
  { slug: 'slovo', label: 'слово (word)' },
  { slug: 'noch', label: 'ночь (night)' },
  { slug: 'ruka', label: 'рука (hand)' },
  { slug: 'mat', label: 'мать (mother)' },
  { slug: 'otets', label: 'отец (father)' },
  { slug: 'devushka', label: 'девушка (girl)' },
  { slug: 'malchik', label: 'мальчик (boy)' },
];

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

      <section className="learn-section">
        <h2 className="learn-section-title">{t.practiceQuiz.title}</h2>
        <p className="learn-lead" style={{ marginBottom: '1rem' }}>
          {t.practiceQuiz.lead}
        </p>
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/practice"
            className="learn-card"
            style={{
              display: 'inline-flex',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #4A90FF 0%, #0066FF 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              fontWeight: 600,
            }}
          >
            <span className="learn-card-title" style={{ color: 'white' }}>
              {t.practiceQuiz.cta}
            </span>
          </Link>
        </div>
        <p
          className="learn-lead"
          style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem' }}
        >
          {t.practiceQuiz.byCaseTitle}
        </p>
        <div
          className="learn-cards"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}
        >
          {(['accusative', 'genitive', 'dative', 'instrumental', 'prepositional'] as const).map(
            (c) => (
              <Link
                key={c}
                href={`/practice/${c}`}
                className="learn-card"
                style={{ flex: '0 0 auto', padding: '0.4rem 0.9rem' }}
              >
                <span className="learn-card-title">{t.practiceQuiz.cases[c]}</span>
              </Link>
            )
          )}
        </div>
      </section>

      <section className="learn-section">
        <h2 className="learn-section-title">Popular Declensions</h2>
        <p className="learn-lead" style={{ marginBottom: '1rem' }}>
          Practice with the most common Russian words. Each page shows the full declension table across all 6 cases.
        </p>
        <div className="learn-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {POPULAR_DECLENSIONS.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/russian-declension/${slug}`}
              className="learn-card"
              style={{ flex: '0 0 auto', padding: '0.5rem 1rem' }}
            >
              <span className="learn-card-title">{label}</span>
              <span className="learn-card-arrow">→</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Link
            href="/words"
            className="learn-card"
            style={{ display: 'inline-flex', padding: '0.75rem 1.5rem' }}
          >
            <span className="learn-card-title">Browse all 400+ Russian words →</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
