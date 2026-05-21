'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLearnPageTranslations, ARTICLE_SLUGS } from '@/data/website/learnPageTranslations';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { getLearnCardImage } from '@/data/website/learnCardImages';
import { PageHero } from '@/components/PageHero';
import { formatLandingDate } from '@/lib/formatLandingDate';

export default function BlogIndexClient({
  publishedDates,
}: {
  publishedDates: Record<string, string>;
}) {
  const { landingLanguage } = useLandingLanguage();
  const t = getLearnPageTranslations(landingLanguage);
  const nav = getLandingTranslations(landingLanguage).navbar;

  return (
    <>
      <PageHero
        title={t.sections.articles}
        subtitle={t.header.lead}
        breadcrumbAria={t.sections.articles}
        breadcrumb={[{ label: t.breadcrumb.home, href: '/' }, { label: nav.blog }]}
      />

      <article className="learn-content learn-content--wide">
        <section className="learn-section">
          <div
            className="learn-featured-guide"
            role="region"
            aria-label={t.featuredTopAppsGuide.title}
          >
            <p className="learn-featured-guide-title">{t.featuredTopAppsGuide.title}</p>
            <p className="learn-featured-guide-lead">{t.featuredTopAppsGuide.lead}</p>
            <Link href="/learn/articles/top-10-apps-russian" className="learn-featured-guide-cta">
              {t.featuredTopAppsGuide.cta}
            </Link>
          </div>
          <div className="learn-grid">
            {[...ARTICLE_SLUGS].reverse().map((slug) => {
              const title = t.articleTitles[slug];
              if (!title) return null;
              const publishedLabel = formatLandingDate(publishedDates[slug], landingLanguage);
              return (
                <Link key={slug} href={`/learn/articles/${slug}`} className="learn-grid-card">
                  <div className="learn-grid-thumb">
                    <Image
                      src={getLearnCardImage(slug)}
                      alt={title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                  </div>
                  <div className="learn-grid-body">
                    <span className="learn-grid-badge learn-grid-badge-article">
                      {t.badges.article}
                    </span>
                    <span className="learn-grid-title">{title}</span>
                    {publishedLabel && (
                      <time className="learn-grid-date" dateTime={publishedDates[slug]}>
                        {publishedLabel}
                      </time>
                    )}
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
