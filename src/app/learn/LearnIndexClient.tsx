'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLearnPageTranslations, LESSON_SLUGS } from '@/data/website/learnPageTranslations';
import { getLearnCardImage } from '@/data/website/learnCardImages';
import { PageHero } from '@/components/PageHero';

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
    <>
      <PageHero
        title={t.header.title}
        subtitle={t.header.lead}
        breadcrumbAria={t.header.title}
        breadcrumb={[{ label: t.breadcrumb.home, href: '/' }, { label: t.breadcrumb.learn }]}
      />

      <article className="learn-content learn-content--wide">
        <section className="learn-section">
          <h2 className="learn-section-title">{t.sections.grammarLessons}</h2>
          <div className="learn-grid">
            {LESSON_SLUGS.map((slug) => {
              const path = LESSON_PATH_MAP[slug] ?? 'lessons';
              const title = t.lessonTitles[slug];
              if (!title) return null;
              return (
                <Link
                  key={slug}
                  href={path === 'articles' ? `/learn/articles/${slug}` : `/learn/lessons/${slug}`}
                  className="learn-grid-card"
                >
                  <div className="learn-grid-thumb">
                    <Image
                      src={getLearnCardImage(slug)}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                  </div>
                  <div className="learn-grid-body">
                    <span className="learn-grid-badge">{t.badges.lesson}</span>
                    <span className="learn-grid-title">{title}</span>
                  </div>
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
        </section>
      </article>
    </>
  );
}
