import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { getLearnLesson, getAllLearnLessonSlugs } from '@/data/learnLessons';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLearnDetailTranslations } from '@/data/website/learnDetailTranslations';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

/** Renders text with **bold** segments as <strong> */
function WithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}

/** Parses a content block: bullet list (lines starting with "- ") or paragraph with bold */
function LessonContentBlock({ block }: { block: string }) {
  const trimmed = block.trim();
  if (!trimmed) return null;
  const lines = trimmed.split('\n').filter((l) => l.trim());
  const isBulletBlock =
    lines.length >= 1 && lines.every((l) => /^[-•]\s/.test(l.trim()) || /^\d+\.\s/.test(l.trim()));
  if (isBulletBlock) {
    return (
      <ul className="learn-detail-bullets">
        {lines.map((line, i) => {
          const text = line.replace(/^[-•]\s*/, '').replace(/^\d+\.\s*/, '');
          return (
            <li key={i}>
              <WithBold text={text} />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <p>
      <WithBold text={trimmed} />
    </p>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllLearnLessonSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLandingLangFromRequest();
  const lesson = getLearnLesson(slug, lang);
  if (!lesson) return { title: 'Lesson not found' };

  const url = `${siteUrl}/learn/lessons/${slug}`;
  const ogImage = lesson.heroImage
    ? {
        url: lesson.heroImage.src,
        width: lesson.heroImage.width ?? 1200,
        height: lesson.heroImage.height ?? 800,
        alt: lesson.heroImage.alt,
      }
    : {
        url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
        width: 1200,
        height: 1200,
        alt: lesson.h1,
      };
  return {
    title: lesson.metaTitle,
    description: lesson.metaDescription,
    keywords: lesson.keywords.join(', '),
    alternates: { canonical: `/learn/lessons/${slug}` },
    openGraph: {
      url,
      title: lesson.metaTitle,
      description: lesson.metaDescription,
      type: 'article',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: lesson.metaTitle,
      description: lesson.metaDescription,
      images: [ogImage.url as string],
    },
  };
}

export default async function LearnLessonPage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLandingLangFromRequest();
  const lesson = getLearnLesson(slug, lang);
  const t = getLearnDetailTranslations(lang);
  if (!lesson) notFound();

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/landing-cases` },
      { '@type': 'ListItem', position: 2, name: 'Learn', item: `${siteUrl}/learn` },
      { '@type': 'ListItem', position: 3, name: 'Grammar Lessons', item: `${siteUrl}/learn` },
      {
        '@type': 'ListItem',
        position: 4,
        name: lesson.h1,
        item: `${siteUrl}/learn/lessons/${slug}`,
      },
    ],
  };

  const faqLd =
    lesson.faq && lesson.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: lesson.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lesson.jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <article className="learn-detail" itemScope itemType="https://schema.org/Article">
        <nav className="learn-breadcrumb" aria-label="Breadcrumb">
          <Link href="/landing-cases" className="learn-breadcrumb-link">
            {t.breadcrumb.home}
          </Link>
          <span className="learn-breadcrumb-sep">/</span>
          <Link href="/learn" className="learn-breadcrumb-link">
            {t.breadcrumb.learn}
          </Link>
          <span className="learn-breadcrumb-sep">/</span>
          <span className="learn-breadcrumb-current">{lesson.h1}</span>
        </nav>

        <header className="learn-detail-header">
          <Link href="/learn" className="learn-detail-back">
            {t.backToLearn}
          </Link>
          <h1 className="learn-detail-title" itemProp="headline">
            {lesson.h1}
          </h1>
          <p className="learn-detail-intro" itemProp="description">
            {lesson.intro}
          </p>
          {lesson.lastUpdated && (
            <p className="learn-detail-last-updated">
              {t.lastUpdated} {lesson.lastUpdated}
            </p>
          )}
          {lesson.whatYouLearn && lesson.whatYouLearn.length > 0 && (
            <div
              className="learn-what-you-learn"
              role="complementary"
              aria-label={t.whatYouLearnInThisGuide}
            >
              <span className="learn-what-you-learn-title">{t.whatYouLearnInThisGuide}</span>
              <ul>
                {lesson.whatYouLearn.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {lesson.heroImage && (
            <figure className="learn-detail-hero">
              <Image
                src={lesson.heroImage.src}
                alt={lesson.heroImage.alt}
                width={lesson.heroImage.width ?? 1200}
                height={lesson.heroImage.height ?? 800}
                className="learn-detail-hero-img"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 42rem"
              />
              {lesson.heroImage.caption && (
                <figcaption className="learn-detail-hero-caption">
                  {lesson.heroImage.caption}
                </figcaption>
              )}
            </figure>
          )}
        </header>

        {lesson.internalLinks &&
          lesson.internalLinks.length > 0 &&
          lesson.internalLinksPosition !== 'conclusion' && (
            <nav className="learn-detail-internal-links" aria-label={t.relatedGrammar}>
              <h2 className="learn-detail-internal-links-title">{t.relatedGrammar}</h2>
              <ul>
                {lesson.internalLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

        <div className="learn-detail-body">
          {lesson.sections.map((section, idx) => (
            <section key={idx} className="learn-detail-section">
              <div className="learn-detail-section-header">
                <span className="learn-detail-section-num" aria-hidden>
                  {idx + 1}
                </span>
                <h2>{section.h2}</h2>
              </div>
              {(section.content || '')
                .split(/\n\n+/)
                .filter(Boolean)
                .map((block, i) => (
                  <LessonContentBlock key={i} block={block} />
                ))}
              {section.image && (
                <figure className="learn-detail-section-fig">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width ?? 1200}
                    height={section.image.height ?? 800}
                    className="learn-detail-section-img"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 42rem"
                  />
                  {section.image.caption && <figcaption>{section.image.caption}</figcaption>}
                </figure>
              )}
              {section.table && (
                <div
                  className="learn-detail-table-wrap"
                  role="region"
                  aria-label="Declension table"
                >
                  <table className="learn-detail-table">
                    {section.table.caption && <caption>{section.table.caption}</caption>}
                    <thead>
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} scope="col">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx}>
                              {section.table?.boldColumnIndices?.includes(cellIdx) ? (
                                <strong>{cell}</strong>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.subsections?.map((sub, subIdx) => (
                <div key={subIdx} className="learn-detail-subsection">
                  <div className="learn-detail-subsection-header">
                    <span className="learn-detail-subsection-icon-wrap" aria-hidden>
                      <BookOpen className="learn-detail-subsection-icon" />
                    </span>
                    <h3>{sub.h3}</h3>
                  </div>
                  {(sub.content || '')
                    .split(/\n\n+/)
                    .filter(Boolean)
                    .map((block, i) => (
                      <LessonContentBlock key={i} block={block} />
                    ))}
                </div>
              ))}
              {section.link && (
                <p className="learn-detail-section-link">
                  <Link href={section.link.href}>→ {section.link.label}</Link>
                </p>
              )}
            </section>
          ))}

          {lesson.faq && lesson.faq.length > 0 && (
            <section className="learn-detail-faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="learn-detail-faq-title">
                {t.frequentlyAskedQuestions}
              </h2>
              <dl>
                {lesson.faq.map((item, i) => (
                  <div key={i} className="learn-detail-faq-item">
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="learn-detail-conclusion">
            {lesson.conclusionBullets ? (
              <>
                {(lesson.conclusionIntro ?? '')
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>
                      <WithBold text={para} />
                    </p>
                  ))}
                <ul className="learn-detail-conclusion-bullets">
                  {lesson.conclusionBullets.map((item, i) => (
                    <li key={i}>
                      <WithBold text={item} />
                    </li>
                  ))}
                </ul>
                {(lesson.conclusionOutro ?? '')
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>
                      <WithBold text={para} />
                    </p>
                  ))}
              </>
            ) : (
              <>
                {(lesson.conclusion ?? '')
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>
                      <WithBold text={para} />
                    </p>
                  ))}
              </>
            )}
            {lesson.internalLinks &&
              lesson.internalLinks.length > 0 &&
              lesson.internalLinksPosition === 'conclusion' && (
                <nav
                  className="learn-detail-internal-links learn-detail-internal-links-bottom"
                  aria-label={t.exploreEachCase}
                >
                  <ul>
                    {lesson.internalLinks.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>→ {link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            <p className="learn-detail-cta">
              <Link href={lesson.ctaHref}>{lesson.ctaText} →</Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
