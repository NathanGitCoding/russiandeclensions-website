import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BookOpen, Plus, Minus } from 'lucide-react';
import {
  getLearnArticle,
  getAllLearnArticleSlugs,
  type LearnArticleMistakeCard,
} from '@/data/learnArticles';
import { LearnLeadMagnet } from '@/components/learn/LearnLeadMagnet';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLearnDetailTranslations } from '@/data/website/learnDetailTranslations';

/** Renders text with **bold** segments as <strong> */
function WithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}

/** Mistake card: Wrong / Correct / Why / Fix */
function MistakeCard({
  card,
  labels,
}: {
  card: LearnArticleMistakeCard;
  labels: { wrong: string; correct: string; why: string; fix: string };
}) {
  return (
    <div className="learn-mistake-card" role="article">
      <h3 className="learn-mistake-card-title">{card.title}</h3>
      <div className="learn-mistake-card-row learn-mistake-wrong">
        <span className="learn-mistake-icon" aria-hidden>
          ✗
        </span>
        <span className="learn-mistake-label">{labels.wrong}</span>
        <span>
          <WithBold text={card.wrong} />
        </span>
      </div>
      <div className="learn-mistake-card-row learn-mistake-correct">
        <span className="learn-mistake-icon" aria-hidden>
          ✓
        </span>
        <span className="learn-mistake-label">{labels.correct}</span>
        <span>
          <WithBold text={card.correct} />
        </span>
      </div>
      <div className="learn-mistake-card-row learn-mistake-why">
        <span className="learn-mistake-icon" aria-hidden>
          📌
        </span>
        <span className="learn-mistake-label">{labels.why}</span>
        <span>
          <WithBold text={card.why} />
        </span>
      </div>
      <div className="learn-mistake-card-row learn-mistake-fix">
        <span className="learn-mistake-icon" aria-hidden>
          🔧
        </span>
        <span className="learn-mistake-label">{labels.fix}</span>
        <span>
          {card.fixHref ? (
            <Link href={card.fixHref}>
              <WithBold text={card.fix} />
            </Link>
          ) : (
            <WithBold text={card.fix} />
          )}
        </span>
      </div>
    </div>
  );
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllLearnArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLandingLangFromRequest();
  const article = getLearnArticle(slug, lang);
  if (!article) return { title: 'Article not found' };

  const url = `${siteUrl}/learn/articles/${slug}`;
  const ogImage = article.heroImage
    ? {
        url: article.heroImage.src,
        width: article.heroImage.width ?? 1200,
        height: article.heroImage.height ?? 630,
        alt: article.h1,
      }
    : {
        url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
        width: 1200,
        height: 1200,
        alt: article.h1,
      };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords.join(', '),
    alternates: { canonical: `/learn/articles/${slug}` },
    openGraph: {
      url,
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: [ogImage.url],
    },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLandingLangFromRequest();
  const article = getLearnArticle(slug, lang);
  const t = getLearnDetailTranslations(lang);
  if (!article) notFound();

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: t.breadcrumb.learn, item: `${siteUrl}/learn` },
      { '@type': 'ListItem', position: 3, name: 'Articles', item: `${siteUrl}/learn` },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.h1,
        item: `${siteUrl}/learn/articles/${slug}`,
      },
    ],
  };

  const itemListLd =
    article.items && article.items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: article.h1,
          description: article.intro,
          numberOfItems: article.items.length,
          itemListElement: article.items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.title,
            description: item.description,
          })),
        }
      : null;

  const faqLd =
    article.faq && article.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer.replace(/\*\*/g, ''),
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article.jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {itemListLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      )}
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <article className="learn-detail" itemScope itemType="https://schema.org/Article">
        <nav className="learn-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="learn-breadcrumb-link">
            {t.breadcrumb.home}
          </Link>
          <span className="learn-breadcrumb-sep">/</span>
          <Link href="/learn" className="learn-breadcrumb-link">
            {t.breadcrumb.learn}
          </Link>
          <span className="learn-breadcrumb-sep">/</span>
          <span className="learn-breadcrumb-current">{article.h1}</span>
        </nav>

        <header className="learn-detail-header">
          <Link href="/learn" className="learn-detail-back">
            {t.backToLearn}
          </Link>
          {article.heroImage && (
            <figure className="learn-detail-hero">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                width={article.heroImage.width ?? 1200}
                height={article.heroImage.height ?? 630}
                className="learn-detail-hero-img"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </figure>
          )}
          <h1 className="learn-detail-title" itemProp="headline">
            {article.h1}
          </h1>
          <p className="learn-detail-intro" itemProp="description">
            <WithBold text={article.intro} />
          </p>
          {article.whatYouLearn && article.whatYouLearn.length > 0 && (
            <div
              className="learn-what-you-learn"
              role="complementary"
              aria-label={t.whatsInThisCheatsheet}
            >
              <span className="learn-what-you-learn-title">{t.whatsInThisCheatsheet}</span>
              <ul>
                {article.whatYouLearn.map((item, i) => (
                  <li key={i}>
                    <WithBold text={item} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        <div className="learn-detail-body">
          {article.sections && article.sections.length > 0 ? (
            <>
              {article.sections.map((section, idx) => {
                const insertLeadMagnetAfter =
                  article.leadMagnetCta &&
                  idx === Math.max(0, Math.ceil(article.sections!.length / 3) - 1);
                return (
                  <React.Fragment key={idx}>
                    <section className="learn-detail-section">
                      <div className="learn-detail-section-header">
                        <span className="learn-detail-section-num" aria-hidden>
                          {idx + 1}
                        </span>
                        <h2>{section.h2}</h2>
                      </div>
                      {section.image && (
                        <figure className="learn-detail-hero">
                          <Image
                            src={section.image.src}
                            alt={section.image.alt}
                            width={section.image.width ?? 1200}
                            height={section.image.height ?? 630}
                            className="learn-detail-hero-img"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 1200px"
                          />
                        </figure>
                      )}
                      {section.content &&
                        section.content
                          .split(/\n\n+/)
                          .filter(Boolean)
                          .map((p, i) => (
                            <p key={i}>
                              <WithBold text={p} />
                            </p>
                          ))}
                      {section.mistakeCards && section.mistakeCards.length > 0 && (
                        <div className="learn-mistake-cards">
                          {section.mistakeCards.map((card, cardIdx) => (
                            <MistakeCard key={cardIdx} card={card} labels={t.mistakeLabels} />
                          ))}
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
                            .map((p, i) => (
                              <p key={i}>
                                <WithBold text={p} />
                              </p>
                            ))}
                          {sub.bullets && sub.bullets.length > 0 && (
                            <ul className="learn-detail-conclusion-bullets">
                              {sub.bullets.map((b, i) => (
                                <li key={i}>
                                  <WithBold text={b} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
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
                                {section.table.headers.map((h, i) => {
                                  const accentCols =
                                    section.table?.accentColumnIndices ??
                                    section.table?.boldColumnIndices;
                                  const hasAccent = accentCols?.includes(i);
                                  const accentClass = article.tableAccentVariant ?? 'accusative';
                                  return (
                                    <th
                                      key={i}
                                      scope="col"
                                      className={
                                        hasAccent ? `learn-detail-table-${accentClass}` : undefined
                                      }
                                    >
                                      {h}
                                    </th>
                                  );
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                  {row.map((cell, cellIdx) => {
                                    const isBoldCol =
                                      section.table?.boldColumnIndices?.includes(cellIdx);
                                    const accentCols =
                                      section.table?.accentColumnIndices ??
                                      section.table?.boldColumnIndices;
                                    const hasAccent = accentCols?.includes(cellIdx);
                                    const accentClass = article.tableAccentVariant ?? 'accusative';
                                    const content = cell.includes('**') ? (
                                      <WithBold text={cell} />
                                    ) : (
                                      cell
                                    );
                                    return (
                                      <td
                                        key={cellIdx}
                                        className={
                                          hasAccent
                                            ? `learn-detail-table-${accentClass}`
                                            : undefined
                                        }
                                      >
                                        {isBoldCol ? <strong>{content}</strong> : content}
                                      </td>
                                    );
                                  })}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="learn-detail-conclusion-bullets">
                          {section.bullets.map((b, i) => (
                            <li key={i}>
                              <WithBold text={b} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                    {insertLeadMagnetAfter && <LearnLeadMagnet cta={article.leadMagnetCta!} />}
                  </React.Fragment>
                );
              })}
            </>
          ) : (
            <>
              {article.comparisonTable && article.comparisonTable.rows.length > 0 && (
                <section className="learn-article-comparison" aria-labelledby="comparison-heading">
                  <h2 id="comparison-heading" className="learn-article-comparison-title">
                    {t.quickComparison}
                  </h2>
                  <div
                    className="learn-article-table-wrap"
                    role="region"
                    aria-label="Apps comparison"
                  >
                    <table className="learn-article-table">
                      <thead>
                        <tr>
                          {article.comparisonTable.headers.map((h, i) => (
                            <th key={i} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {article.comparisonTable.rows.map((row, rowIdx) => (
                          <tr key={rowIdx}>
                            {article.comparisonTable!.headers.map((h, colIdx) => (
                              <td key={colIdx}>{row[h] ?? ''}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              <div itemScope itemType="https://schema.org/ItemList">
                {(() => {
                  const items = article.items ?? [];
                  const firstTierEnd = Math.max(1, Math.ceil(items.length / 3));
                  const firstTier = items.slice(0, firstTierEnd);
                  const restTier = items.slice(firstTierEnd);
                  const renderItem = (item: (typeof items)[0]) => (
                    <li
                      key={item.rank}
                      className="learn-article-item"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/ListItem"
                    >
                      <meta itemProp="position" content={String(item.rank)} />
                      <span className="learn-article-rank" aria-hidden>
                        {item.rank}
                      </span>
                      <div className="learn-article-item-content">
                        {item.image && (
                          <figure className="learn-article-item-fig">
                            <Image
                              src={item.image.src}
                              alt={item.image.alt}
                              width={item.image.width ?? 1200}
                              height={item.image.height ?? 630}
                              className="learn-article-item-img"
                              loading="lazy"
                              sizes="(max-width: 640px) 100vw, 280px"
                            />
                          </figure>
                        )}
                        <div>
                          <h2 itemProp="name">{item.title}</h2>
                          {typeof item.rating === 'number' && (
                            <p
                              className="learn-article-item-rating"
                              aria-label={`Rating: ${item.rating} out of 10`}
                            >
                              Russian cases: <strong>{item.rating}/10</strong>
                            </p>
                          )}
                          {item.price && <p className="learn-article-item-price">{item.price}</p>}
                          <p itemProp="description">
                            <WithBold text={item.description} />
                          </p>
                          {(item.pros?.length ?? 0) > 0 && (
                            <ul className="learn-article-item-pros">
                              {item.pros!.map((pro, i) => (
                                <li key={i}>
                                  <span
                                    className="learn-article-item-icon learn-article-item-icon-plus"
                                    aria-hidden
                                  >
                                    <Plus size={16} strokeWidth={2.5} />
                                  </span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          )}
                          {(item.cons?.length ?? 0) > 0 && (
                            <ul className="learn-article-item-cons">
                              {item.cons!.map((con, i) => (
                                <li key={i}>
                                  <span
                                    className="learn-article-item-icon learn-article-item-icon-minus"
                                    aria-hidden
                                  >
                                    <Minus size={16} strokeWidth={2.5} />
                                  </span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.affiliateLink && (
                            <p className="learn-article-item-cta">
                              <Link
                                href={item.affiliateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {t.viewApp}
                              </Link>
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                  return (
                    <>
                      <ol className="learn-article-list">{firstTier.map(renderItem)}</ol>
                      {article.leadMagnetCta && <LearnLeadMagnet cta={article.leadMagnetCta} />}
                      {restTier.length > 0 && (
                        <ol className="learn-article-list" start={firstTierEnd + 1}>
                          {restTier.map(renderItem)}
                        </ol>
                      )}
                    </>
                  );
                })()}
              </div>
            </>
          )}

          {article.leadMagnetCta && <LearnLeadMagnet cta={article.leadMagnetCta} />}

          {article.faq && article.faq.length > 0 && (
            <section className="learn-detail-faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="learn-detail-faq-title">
                {t.frequentlyAskedQuestions}
              </h2>
              <dl>
                {article.faq.map((item, i) => (
                  <div key={i} className="learn-detail-faq-item">
                    <dt>{item.question}</dt>
                    <dd>
                      <WithBold text={item.answer} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="learn-detail-conclusion">
            {article.conclusionBullets ? (
              <>
                {article.conclusionIntro && (
                  <p>
                    <WithBold text={article.conclusionIntro} />
                  </p>
                )}
                <ul className="learn-detail-conclusion-bullets">
                  {article.conclusionBullets.map((item, i) => (
                    <li key={i}>
                      <WithBold text={item} />
                    </li>
                  ))}
                </ul>
                {article.conclusionOutro && (
                  <p>
                    <WithBold text={article.conclusionOutro} />
                  </p>
                )}
                {article.internalLinks && article.internalLinks.length > 0 && (
                  <nav
                    className="learn-detail-internal-links learn-detail-internal-links-bottom"
                    aria-label={t.relatedGuides}
                  >
                    <ul>
                      {article.internalLinks.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>→ {link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </>
            ) : (
              <>
                {article.conclusion
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i}>
                      <WithBold text={para} />
                    </p>
                  ))}
                {article.conclusionOutro && (
                  <p>
                    <WithBold text={article.conclusionOutro} />
                  </p>
                )}
                {article.internalLinks && article.internalLinks.length > 0 && (
                  <nav
                    className="learn-detail-internal-links learn-detail-internal-links-bottom"
                    aria-label={t.relatedGuides}
                  >
                    <ul>
                      {article.internalLinks.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>→ {link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </>
            )}
            <p className="learn-detail-cta">
              <Link href={article.ctaHref}>{article.ctaText} →</Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
