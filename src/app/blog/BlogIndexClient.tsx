'use client';

import React from 'react';
import Link from 'next/link';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLearnPageTranslations, ARTICLE_SLUGS } from '@/data/website/learnPageTranslations';
import { getLandingTranslations } from '@/data/website/landingTranslations';

export default function BlogIndexClient() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLearnPageTranslations(landingLanguage);
  const nav = getLandingTranslations(landingLanguage).navbar;

  return (
    <article className="learn-content">
      <div className="learn-breadcrumb">
        <Link href="/" className="learn-breadcrumb-link">
          {t.breadcrumb.home}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <span className="learn-breadcrumb-current">{nav.blog}</span>
      </div>

      <header className="learn-header">
        <h1 className="learn-title">{t.sections.articles}</h1>
        <p className="learn-lead">{t.header.lead}</p>
      </header>

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
