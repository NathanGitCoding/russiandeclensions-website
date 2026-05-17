import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BookOpen, Plus, Minus, Clock, List, Trophy, Star } from 'lucide-react';
import { LEARN_ARTICLE_STATIC_OG } from '@/data/learnArticleStaticOg';
import {
  getLearnArticle,
  getAllLearnArticleSlugs,
  type LearnArticle,
  type LearnArticleComparisonTable,
  type LearnArticleImage,
  type LearnArticleMistakeCard,
  type LearnArticleTierListChart,
  type LearnArticleItem,
} from '@/data/learnArticles';
import { getLearnLesson, getAllLearnLessonSlugs } from '@/data/learnLessons';
import { LearnLeadMagnet } from '@/components/learn/LearnLeadMagnet';
import { getLearnDetailTranslations } from '@/data/website/learnDetailTranslations';
import type { LandingLanguage } from '@/data/website/landingTranslations';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';

/** Renders text with **bold** segments as <strong> */
function WithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}

/** Like `WithBold`, plus `[label](/path)` → internal `<Link>`. */
function WithBoldAndLinks({ text }: { text: string }) {
  const boldParts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {boldParts.map((segment, i) =>
        i % 2 === 1 ? (
          <strong key={i}>{segment}</strong>
        ) : (
          <span key={i}>{renderMarkdownLinksInIntro(segment)}</span>
        )
      )}
    </>
  );
}

function renderMarkdownLinksInIntro(segment: string): React.ReactNode {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(segment)) !== null) {
    if (m.index > last) nodes.push(segment.slice(last, m.index));
    nodes.push(
      <Link key={`intro-md-${k++}`} href={m[2]} className="learn-detail-intro-link">
        {m[1]}
      </Link>
    );
    last = re.lastIndex;
  }
  if (last < segment.length) nodes.push(segment.slice(last));
  return nodes.length > 0 ? nodes : segment;
}

/** Plain text for JSON-LD (strip ** and markdown links). */
function schemaPlainText(s: string, maxLen = 320): string {
  let t = s
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
  if (t.length > maxLen) t = `${t.slice(0, maxLen - 1)}…`;
  return t;
}

function isPricingHeadingChunk(trimmed: string): boolean {
  return /^\*{0,2}(Pricing|Tarifs|Preise|Fiyatlandırma|Cennik)\s*\(\d{4}\)\*{0,2}\s*$/i.test(
    trimmed
  );
}

function isVerdictChunkStart(chunk: string): boolean {
  const t = chunk.trim();
  return /^\*{0,2}(The verdict|Verdict|Le verdict|Fazit|Unser Fazit|Sonuç|Podsumowanie)\s*:\*{0,2}\s*/i.test(
    t
  );
}

/** Splits `description` on blank lines; optional Pricing (YYYY) block → ul; resumes at The verdict:. */
function ArticleItemDescription({ description }: { description: string }) {
  const chunks = description.split(/\n\n+/).filter((c) => c.length > 0);
  const nodes: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < chunks.length) {
    const raw = chunks[i];
    const trimmed = raw.trim();
    if (isPricingHeadingChunk(trimmed) && i + 1 < chunks.length) {
      nodes.push(
        <p key={`pricing-h-${key++}`} className="learn-article-item-pricing-head">
          <WithBold text={trimmed} />
        </p>
      );
      i++;
      const pricingLines: string[] = [];
      while (i < chunks.length) {
        if (isVerdictChunkStart(chunks[i])) break;
        pricingLines.push(chunks[i].trim());
        i++;
      }
      if (pricingLines.length > 0) {
        nodes.push(
          <ul key={`pricing-ul-${key++}`} className="learn-article-item-pricing-list">
            {pricingLines.map((line, li) => (
              <li key={li}>
                <WithBold text={line} />
              </li>
            ))}
          </ul>
        );
      }
      continue;
    }
    nodes.push(
      <p key={`desc-p-${key++}`} className="learn-article-item-desc-p">
        <WithBold text={trimmed} />
      </p>
    );
    i++;
  }
  return <div className="learn-article-item-desc-block">{nodes}</div>;
}

const EDITORIAL_STAR_ICON = 15;

/** Classement rédactionnel sur 5 ★ : rangs 1–3 → 5 étoiles, puis descente linéaire jusqu’à 3 sur le dernier. */
function editorialStarsOutOfFive(rank: number, total: number): number {
  if (total <= 0 || rank < 1) return 5;
  if (rank <= 3) return 5;
  if (total <= 3) return 5;
  const raw = 5 - (2 * (rank - 3)) / (total - 3);
  return Math.round(Math.min(5, Math.max(3, raw)) * 2) / 2;
}

function LearnArticleEditorialStars({ value, ariaLabel }: { value: number; ariaLabel: string }) {
  const v = Math.round(Math.min(5, Math.max(0, value)) * 2) / 2;
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <div className="learn-article-item-stars-wrap">
      <span className="sr-only">{ariaLabel}</span>
      <div className="learn-article-item-stars-row" aria-hidden>
        {Array.from({ length: full }, (_, i) => (
          <Star
            key={`f-${i}`}
            size={EDITORIAL_STAR_ICON}
            strokeWidth={2}
            className="learn-article-item-star learn-article-item-star--full"
            fill="currentColor"
            aria-hidden
          />
        ))}
        {half ? (
          <span
            key="half"
            className="learn-article-item-star learn-article-item-star--half-wrap"
            aria-hidden
          >
            <Star
              size={EDITORIAL_STAR_ICON}
              strokeWidth={2}
              className="learn-article-item-star-half-bg"
              aria-hidden
            />
            <span className="learn-article-item-star-half-clip">
              <Star
                size={EDITORIAL_STAR_ICON}
                strokeWidth={2}
                fill="currentColor"
                className="learn-article-item-star-half-fg"
                aria-hidden
              />
            </span>
          </span>
        ) : null}
        {Array.from({ length: empty }, (_, i) => (
          <Star
            key={`e-${i}`}
            size={EDITORIAL_STAR_ICON}
            strokeWidth={2}
            className="learn-article-item-star learn-article-item-star--empty"
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

const LEARN_APP_PROMO_FRACTION = 0.3;

/** Slugs sans carte promo au milieu de la liste (comparatifs multi-apps, etc.). */
const LEARN_ARTICLE_APP_PROMO_EXCLUDE_SLUGS = new Set<string>([]);

function countWords(text?: string): number {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function estimateComparisonTableWords(table?: LearnArticleComparisonTable): number {
  if (!table?.rows?.length) return 0;
  let w = 0;
  for (const row of table.rows) {
    for (const v of Object.values(row)) w += countWords(v);
  }
  return w;
}

function estimateItemListWordsBeforeReviews(article: LearnArticle): number {
  let w = 0;
  w += countWords(article.quickTopPicksComparisonTitle);
  w += countWords(article.quickTopPicksComparisonIntro);
  w += estimateComparisonTableWords(article.quickTopPicksComparison);
  w += countWords(article.comparisonTableTitle);
  w += countWords(article.comparisonTableIntro);
  w += estimateComparisonTableWords(article.comparisonTable);
  w += countWords(article.itemsSectionTitle);
  w += countWords(article.itemsSectionLead);
  return w;
}

function estimateItemWords(item: LearnArticleItem): number {
  let w = countWords(item.title) + countWords(item.description) + countWords(item.price);
  item.pros?.forEach((p) => {
    w += countWords(p);
  });
  item.cons?.forEach((c) => {
    w += countWords(c);
  });
  return w;
}

function getItemListPromoPlacement(
  article: LearnArticle
): { kind: 'none' } | { kind: 'after_tables' } | { kind: 'after_item_index'; index: number } {
  if (!article.leadMagnetCta) return { kind: 'none' };
  if (LEARN_ARTICLE_APP_PROMO_EXCLUDE_SLUGS.has(article.slug)) return { kind: 'none' };
  const items = article.items ?? [];
  if (items.length === 0) return { kind: 'none' };

  const before = estimateItemListWordsBeforeReviews(article);
  const perItem = items.map(estimateItemWords);
  const itemsTotal = perItem.reduce((a, b) => a + b, 0);
  const total = before + itemsTotal;
  if (total === 0) return { kind: 'after_tables' };

  const target = LEARN_APP_PROMO_FRACTION * total;
  let cum = before;
  if (cum >= target) return { kind: 'after_tables' };

  for (let idx = 0; idx < items.length; idx++) {
    cum += perItem[idx];
    if (cum >= target) return { kind: 'after_item_index', index: idx };
  }
  return { kind: 'after_item_index', index: items.length - 1 };
}

/** Tier list S–D — logos depuis `tierListChart`. */
function LearnArticleTierListChart({ chart }: { chart: LearnArticleTierListChart }) {
  return (
    <section
      className="learn-tier-chart"
      aria-label={chart.title ?? 'Russian learning apps tier list'}
    >
      {chart.title && <p className="learn-tier-chart-title">{chart.title}</p>}
      <div className="learn-tier-chart-rows">
        {chart.tiers.map((tier) => (
          <div key={tier.letter} className="learn-tier-row">
            <div className={`learn-tier-label learn-tier-label--${tier.tone}`} aria-hidden>
              {tier.letter}
            </div>
            <div className="learn-tier-apps">
              {tier.apps.map((app) => (
                <div
                  key={`${tier.letter}-${app.src}`}
                  className={`learn-tier-app${app.showLabel ? '' : 'learn-tier-app--icon-only'}`}
                >
                  <Image
                    src={app.src}
                    alt={app.alt}
                    width={62}
                    height={62}
                    className={
                      app.tierIconSmaller
                        ? 'learn-tier-app-img learn-tier-app-img--tier-smaller-15'
                        : 'learn-tier-app-img'
                    }
                    loading="eager"
                    sizes={app.tierIconSmaller ? '54px' : '64px'}
                  />
                  {app.showLabel ? (
                    <span
                      className={
                        app.tierIconSmaller
                          ? 'learn-tier-app-name learn-tier-app-name--minus-1px'
                          : 'learn-tier-app-name'
                      }
                    >
                      {(app.label ?? app.alt).split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {i > 0 ? <br /> : null}
                          {line}
                        </React.Fragment>
                      ))}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Podium #2 | #1 | #3 — `rowIcons` dans l’ordre des lignes du tableau (#1, #2, #3). */
function QuickPicksPodium({ rowIcons }: { rowIcons: LearnArticleImage[] }) {
  if (rowIcons.length !== 3) return null;
  const slots: { rowIndex: number; tier: 'silver' | 'gold' | 'bronze'; rank: number }[] = [
    { rowIndex: 1, tier: 'silver', rank: 2 },
    { rowIndex: 0, tier: 'gold', rank: 1 },
    { rowIndex: 2, tier: 'bronze', rank: 3 },
  ];
  return (
    <div className="learn-article-podium" role="group" aria-label="Top three apps on the podium">
      {slots.map(({ rowIndex, tier, rank }) => {
        const icon = rowIcons[rowIndex];
        return (
          <div
            key={tier}
            className={`learn-article-podium-slot learn-article-podium-slot--${tier}`}
            aria-label={`Rank ${rank}: ${icon.alt}`}
          >
            <span className="learn-article-podium-rank" aria-hidden>
              #{rank}
            </span>
            <div className="learn-article-podium-icon-wrap">
              <Image
                src={icon.src}
                alt=""
                width={125}
                height={125}
                className="learn-article-podium-icon-img"
                loading="lazy"
                sizes="(max-width: 480px) 100px, 125px"
              />
            </div>
            <div className={`learn-article-podium-block learn-article-podium-block--${tier}`}>
              <span className="learn-article-podium-app-name">{icon.alt}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function isComparisonRankHeader(h: string): boolean {
  return (
    h === 'Rank' ||
    h === 'Rang' ||
    h === 'Platz' ||
    h === 'Miejsce' ||
    h === 'Sıra' ||
    h === 'Puesto' ||
    h === 'Posizione' ||
    h === 'Posição' ||
    h === 'Positie' ||
    h === 'Место'
  );
}

function isComparisonAppHeader(h: string): boolean {
  return (
    h === 'App' || h === 'Appli' || h === 'Aplikacja' || h === 'Uygulama' || h === 'Приложение'
  );
}

function isComparisonBestForHeader(h: string): boolean {
  return (
    h === 'Best for' ||
    h === 'Idéal pour' ||
    h === 'Ideal für' ||
    h === 'Najlepiej do' ||
    h === 'En uygun' ||
    h === 'Ideal para' ||
    h === 'Ideale per' ||
    h === 'Ideaal voor' ||
    h === 'Лучше всего для'
  );
}

function LearnComparisonTableSection({
  heading,
  headingId,
  intro,
  table,
  ariaLabel,
  headingTrophy,
  showPodium,
  compactTableIcons,
}: {
  heading: string;
  headingId: string;
  intro?: string;
  table: LearnArticleComparisonTable;
  ariaLabel: string;
  headingTrophy?: boolean;
  showPodium?: boolean;
  /** Colonne logos ~30 % plus petite (ex. tableau « All 10 apps »). */
  compactTableIcons?: boolean;
}) {
  const icons = table.rowIcons;
  const showIconColumn =
    Array.isArray(icons) && icons.length > 0 && icons.length === table.rows.length;
  const podiumIcons = showPodium && showIconColumn && icons.length === 3 ? icons : null;

  return (
    <section
      className={[
        'learn-article-comparison',
        showPodium && 'learn-article-comparison--has-podium',
        compactTableIcons && 'learn-article-comparison--compact-table-icons',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className={
          headingTrophy
            ? 'learn-article-comparison-title learn-article-comparison-title--with-trophy'
            : 'learn-article-comparison-title'
        }
      >
        {headingTrophy && (
          <Trophy
            className="learn-article-comparison-trophy"
            size={26}
            strokeWidth={2}
            aria-hidden
          />
        )}
        {headingTrophy ? (
          <span className="learn-article-comparison-title-text">{heading}</span>
        ) : (
          heading
        )}
      </h2>
      {intro && (
        <p className="learn-article-comparison-lead">
          <WithBold text={intro} />
        </p>
      )}
      {podiumIcons && <QuickPicksPodium rowIcons={podiumIcons} />}
      <div className="learn-article-table-wrap" role="region" aria-label={ariaLabel}>
        <table className="learn-article-table">
          <thead>
            <tr>
              {showIconColumn && (
                <th scope="col" className="learn-article-table-icon-head">
                  <span className="sr-only">App logo</span>
                </th>
              )}
              {table.headers.map((h, i) => {
                const thClass = [
                  isComparisonRankHeader(h) && 'learn-article-table-rank-col',
                  isComparisonAppHeader(h) && 'learn-article-table-app-col',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <th key={i} scope="col" className={thClass || undefined}>
                    {h}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {showIconColumn && icons[rowIdx] && (
                  <td className="learn-article-table-icon-cell">
                    <span className="learn-article-table-icon-wrap">
                      <Image
                        src={icons[rowIdx].src}
                        alt={icons[rowIdx].alt}
                        width={icons[rowIdx].width ?? 83}
                        height={icons[rowIdx].height ?? 83}
                        className="learn-article-table-icon-img"
                        loading="lazy"
                        sizes={compactTableIcons ? '36px' : '52px'}
                      />
                    </span>
                  </td>
                )}
                {table.headers.map((h, colIdx) => {
                  const cell = row[h] ?? '';
                  const isRankCol = isComparisonRankHeader(h);
                  const isBestForCol = isComparisonBestForHeader(h);
                  const isAppCol = isComparisonAppHeader(h);
                  const tdClass = [
                    isRankCol && 'learn-article-table-rank-col',
                    isBestForCol && 'learn-article-table-best-for-col',
                    isAppCol && 'learn-article-table-app-col',
                  ]
                    .filter(Boolean)
                    .join(' ');
                  return (
                    <td key={colIdx} className={tdClass || undefined}>
                      {cell.includes('**') ? <WithBold text={cell} /> : cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
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

/** Estimate reading time in minutes from article content */
function estimateReadingTime(article: LearnArticle): number {
  let wordCount = 0;
  const countWords = (text?: string) => {
    if (!text) return;
    wordCount += text.split(/\s+/).filter(Boolean).length;
  };
  countWords(article.intro);
  countWords(article.introByline?.text);
  countWords(article.conclusion);
  countWords(article.conclusionIntro);
  article.conclusionBullets?.forEach(countWords);
  countWords(article.conclusionOutro);
  article.sections?.forEach((s) => {
    countWords(s.h2);
    countWords(s.content);
    s.bullets?.forEach(countWords);
    s.subsections?.forEach((sub) => {
      countWords(sub.h3);
      countWords(sub.content);
      sub.bullets?.forEach(countWords);
    });
    s.mistakeCards?.forEach((c) => {
      countWords(c.title);
      countWords(c.wrong);
      countWords(c.correct);
      countWords(c.why);
      countWords(c.fix);
    });
  });
  countWords(article.itemsSectionTitle);
  countWords(article.itemsSectionLead);
  article.items?.forEach((item) => {
    countWords(item.title);
    countWords(item.description);
    countWords(item.price);
    item.pros?.forEach(countWords);
    item.cons?.forEach(countWords);
  });
  article.faq?.forEach((f) => {
    countWords(f.question);
    countWords(f.answer);
  });
  countWords(article.tierListChart?.title);
  article.tierListChart?.tiers.forEach((tier) => {
    tier.apps.forEach((app) => countWords(app.alt));
  });
  countWords(article.quickTopPicksComparisonTitle);
  countWords(article.quickTopPicksComparisonIntro);
  countWords(article.comparisonTableTitle);
  countWords(article.comparisonTableIntro);
  article.quickTopPicksComparison?.rows.forEach((row) => {
    Object.values(row).forEach((v) => countWords(v));
  });
  article.comparisonTable?.rows.forEach((row) => {
    Object.values(row).forEach((v) => countWords(v));
  });
  return Math.max(1, Math.round(wordCount / 200));
}

/** Slugify a heading for anchor IDs */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9а-яё\s-]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60);
}

const LANDING_TO_DATE_LOCALE: Record<LandingLanguage, string> = {
  en_en: 'en-US',
  fr_fr: 'fr-FR',
  tr_tr: 'tr-TR',
  de_de: 'de-DE',
  pl_pl: 'pl-PL',
  es_es: 'es-ES',
  it_it: 'it-IT',
  pt_pt: 'pt-PT',
  nl_nl: 'nl-NL',
  ru_ru: 'ru-RU',
};

function parseJsonLdDateString(raw: string): Date {
  return new Date(raw.includes('T') ? raw : `${raw}T12:00:00.000Z`);
}

function formatArticleDateForLocale(raw: string | undefined, lang: LandingLanguage): string | null {
  if (!raw) return null;
  try {
    const d = parseJsonLdDateString(raw);
    if (Number.isNaN(d.getTime())) return null;
    return new Intl.DateTimeFormat(LANDING_TO_DATE_LOCALE[lang] ?? 'en-US', {
      dateStyle: 'medium',
    }).format(d);
  } catch {
    return null;
  }
}

/** Get 3 related articles based on internalLinks or fallback to other articles */
function getRelatedArticles(
  currentSlug: string,
  article: LearnArticle
): { slug: string; title: string }[] {
  const allSlugs = getAllLearnArticleSlugs().filter((s) => s !== currentSlug);
  const related: { slug: string; title: string }[] = [];

  // First: find articles referenced in internalLinks
  if (article.internalLinks) {
    for (const link of article.internalLinks) {
      const match = link.href.match(/\/learn\/articles\/(.+)/);
      if (match && allSlugs.includes(match[1])) {
        const linkedArticle = getLearnArticle(match[1]);
        if (linkedArticle) {
          related.push({ slug: match[1], title: linkedArticle.title });
        }
      }
      if (related.length >= 3) break;
    }
  }

  // Fill remaining spots with other articles
  if (related.length < 3) {
    for (const slug of allSlugs) {
      if (related.some((r) => r.slug === slug)) continue;
      const a = getLearnArticle(slug);
      if (a) related.push({ slug, title: a.title });
      if (related.length >= 3) break;
    }
  }

  return related;
}

/** Map article slugs to their corresponding practice case route */
const SLUG_TO_PRACTICE_CASE: Record<string, string> = {
  'russian-genitive-case': 'genitive',
  'russian-accusative-case': 'accusative',
  'russian-dative-case': 'dative',
  'russian-instrumental-case': 'instrumental',
  'russian-prepositional-case': 'prepositional',
};

/** Get related lessons for an article (max 3) */
function getRelatedLessons(currentSlug: string, lang?: string): { slug: string; title: string }[] {
  const lessonSlugs = getAllLearnLessonSlugs();
  const related: { slug: string; title: string }[] = [];

  // Case-specific articles → matching case lesson first
  const caseName = SLUG_TO_PRACTICE_CASE[currentSlug];
  for (const lSlug of lessonSlugs) {
    const lesson = getLearnLesson(lSlug, lang as Parameters<typeof getLearnLesson>[1]);
    if (!lesson) continue;
    // Prioritize lesson that matches the same case
    if (caseName && lSlug.includes(caseName)) {
      related.unshift({ slug: lSlug, title: lesson.title });
    } else {
      related.push({ slug: lSlug, title: lesson.title });
    }
  }

  return related.slice(0, 3);
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';
export const dynamic = 'force-static';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllLearnArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getLearnArticle(slug);
  if (!article) return { title: 'Article not found' };

  const url = `${siteUrl}/learn/articles/${slug}`;
  const staticOg = LEARN_ARTICLE_STATIC_OG[slug];
  const ogImage = article.heroImage
    ? {
        url: article.heroImage.src,
        width: article.heroImage.width ?? 1200,
        height: article.heroImage.height ?? 630,
        alt: article.h1,
      }
    : staticOg
      ? {
          url: `/${staticOg.relativeToPublic}`,
          width: staticOg.width,
          height: staticOg.height,
          alt: article.h1,
        }
      : {
          url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
          width: 1200,
          height: 1200,
          alt: article.h1,
        };
  const datePublished = (article.jsonLd as Record<string, unknown>).datePublished as
    | string
    | undefined;
  const dateModified = (article.jsonLd as Record<string, unknown>).dateModified as
    | string
    | undefined;

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
      ...(datePublished && { publishedTime: datePublished }),
      ...(dateModified && { modifiedTime: dateModified }),
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
  const article = getLearnArticle(slug);
  const lang = await getLandingLangFromRequest();
  const t = getLearnDetailTranslations(lang);
  if (!article) notFound();

  const readingTime = estimateReadingTime(article);
  const relatedArticles = getRelatedArticles(slug, article);
  const relatedLessons = getRelatedLessons(slug, lang);
  const practiceCase = SLUG_TO_PRACTICE_CASE[slug];
  const hasToc = (article.sections?.length ?? 0) >= 4;
  const tocItems = hasToc ? article.sections!.map((s) => ({ id: slugify(s.h2), label: s.h2 })) : [];

  const jl = article.jsonLd as Record<string, unknown>;
  const dateModifiedRaw = jl.dateModified as string | undefined;
  const lastUpdatedLabel = formatArticleDateForLocale(dateModifiedRaw, lang);
  const staticOgEntry = LEARN_ARTICLE_STATIC_OG[slug];
  const imageFromStaticOg =
    jl.image == null && staticOgEntry
      ? {
          '@type': 'ImageObject',
          url: `${siteUrl}/${staticOgEntry.relativeToPublic}`,
          width: staticOgEntry.width,
          height: staticOgEntry.height,
        }
      : null;

  const enrichedJsonLd = {
    ...article.jsonLd,
    timeRequired: `PT${readingTime}M`,
    ...(imageFromStaticOg ? { image: imageFromStaticOg } : {}),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: t.breadcrumb.learn, item: `${siteUrl}/learn` },
      {
        '@type': 'ListItem',
        position: 3,
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
          description: article.metaDescription,
          numberOfItems: article.items.length,
          itemListElement: article.items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.title,
            description: schemaPlainText(item.description),
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

  const isItemsOnlyLayout =
    !(article.sections && article.sections.length > 0) && (article.items?.length ?? 0) > 0;
  const itemListPromoPlacement = isItemsOnlyLayout
    ? getItemListPromoPlacement(article)
    : ({ kind: 'none' } as const);
  const showLeadMagnetBottom =
    Boolean(article.leadMagnetCta) &&
    (!isItemsOnlyLayout || itemListPromoPlacement.kind === 'none');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedJsonLd) }}
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

        {article.tierListChart && article.tierListChart.tiers.length > 0 ? (
          <LearnArticleTierListChart chart={article.tierListChart} />
        ) : null}

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
          <div className="learn-detail-meta-row">
            <p className="learn-detail-reading-time">
              <Clock size={14} />
              <span>{readingTime} min read</span>
            </p>
            {lastUpdatedLabel ? (
              <p className="learn-detail-last-updated">
                <time dateTime={dateModifiedRaw} itemProp="dateModified">
                  {t.lastUpdated} {lastUpdatedLabel}
                </time>
              </p>
            ) : null}
          </div>
          {article.intro
            .split(/\n\n+/)
            .filter(Boolean)
            .map((para, i) => (
              <p
                key={`intro-${i}`}
                className="learn-detail-intro"
                {...(i === 0 ? { itemProp: 'description' } : {})}
              >
                <WithBoldAndLinks text={para.trim()} />
              </p>
            ))}
          {article.introByline && (
            <div className="learn-detail-intro-byline">
              <div className="learn-detail-intro-byline-img-wrap">
                <Image
                  src={article.introByline.imageSrc}
                  alt={article.introByline.imageAlt}
                  width={article.introByline.imageWidth ?? 96}
                  height={article.introByline.imageHeight ?? 96}
                  className="learn-detail-intro-byline-img"
                  sizes="48px"
                />
              </div>
              <p className="learn-detail-intro-byline-text">
                <WithBold text={article.introByline.text} />
              </p>
            </div>
          )}
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
          {hasToc && (
            <nav className="learn-detail-toc" aria-label="Table of contents">
              <div className="learn-detail-toc-header">
                <List size={16} />
                <span>Table of Contents</span>
              </div>
              <ol className="learn-detail-toc-list">
                {tocItems.map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
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
                        <h2 id={slugify(section.h2)}>{section.h2}</h2>
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
              {article.quickTopPicksComparison &&
                article.quickTopPicksComparison.rows.length > 0 && (
                  <LearnComparisonTableSection
                    heading={article.quickTopPicksComparisonTitle ?? 'Quick comparison: top picks'}
                    headingId="quick-top-picks-heading"
                    intro={article.quickTopPicksComparisonIntro}
                    table={article.quickTopPicksComparison}
                    ariaLabel="Quick comparison top three apps"
                    headingTrophy
                    showPodium
                  />
                )}
              {article.comparisonTable && article.comparisonTable.rows.length > 0 && (
                <LearnComparisonTableSection
                  heading={article.comparisonTableTitle ?? t.quickComparison}
                  headingId="full-comparison-heading"
                  intro={article.comparisonTableIntro}
                  table={article.comparisonTable}
                  ariaLabel="Apps comparison"
                  compactTableIcons={article.comparisonTable.rows.length >= 10}
                />
              )}

              {(article.itemsSectionTitle || article.itemsSectionLead) && (
                <div className="learn-article-items-head">
                  {article.itemsSectionTitle ? (
                    <h2 className="learn-article-items-title">{article.itemsSectionTitle}</h2>
                  ) : null}
                  {article.itemsSectionLead ? (
                    <p className="learn-article-items-lead">
                      <WithBold text={article.itemsSectionLead} />
                    </p>
                  ) : null}
                </div>
              )}

              <div itemScope itemType="https://schema.org/ItemList">
                {(() => {
                  const items = article.items ?? [];
                  const placement = itemListPromoPlacement;
                  const magnet = article.leadMagnetCta;

                  const renderItem = (item: LearnArticleItem) => {
                    const totalItems = items.length;
                    const editorialStarValue = editorialStarsOutOfFive(item.rank, totalItems);
                    const starAria = t.editorialStarRatingAria.replace(
                      '{{n}}',
                      String(editorialStarValue)
                    );
                    const hasProsCons =
                      (item.pros?.length ?? 0) > 0 || (item.cons?.length ?? 0) > 0;
                    return (
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
                        <div className="learn-article-item-main">
                          <div className="learn-article-item-content">
                            {item.image ? (
                              <figure className="learn-article-item-fig">
                                <Image
                                  src={item.image.src}
                                  alt={item.image.alt}
                                  width={item.image.width ?? 1200}
                                  height={item.image.height ?? 630}
                                  className="learn-article-item-img"
                                  loading="lazy"
                                  sizes="(max-width: 640px) 100vw, 196px"
                                />
                              </figure>
                            ) : null}
                            <div className="learn-article-item-text">
                              <h2 className="learn-article-item-title" itemProp="name">
                                {item.title}
                              </h2>
                              <div itemProp="description">
                                <ArticleItemDescription description={item.description} />
                              </div>
                            </div>
                          </div>
                          <div
                            className={[
                              'learn-article-item-review-panel',
                              !hasProsCons && 'learn-article-item-review-panel--stars-only',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            {hasProsCons ? (
                              <div className="learn-article-review-pros-cons">
                                {(item.pros?.length ?? 0) > 0 ? (
                                  <div className="learn-article-review-column">
                                    <p className="learn-article-review-subheading">
                                      {t.reviewPros}
                                    </p>
                                    <ul className="learn-article-item-pros">
                                      {item.pros!.map((pro, i) => (
                                        <li key={i}>
                                          <span
                                            className="learn-article-item-icon learn-article-item-icon-plus"
                                            aria-hidden
                                          >
                                            <Plus size={16} strokeWidth={2.5} />
                                          </span>
                                          <span>
                                            <WithBold text={pro} />
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                                {(item.cons?.length ?? 0) > 0 ? (
                                  <div className="learn-article-review-column">
                                    <p className="learn-article-review-subheading">
                                      {t.reviewCons}
                                    </p>
                                    <ul className="learn-article-item-cons">
                                      {item.cons!.map((con, i) => (
                                        <li key={i}>
                                          <span
                                            className="learn-article-item-icon learn-article-item-icon-minus"
                                            aria-hidden
                                          >
                                            <Minus size={16} strokeWidth={2.5} />
                                          </span>
                                          <span>
                                            <WithBold text={con} />
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : null}
                              </div>
                            ) : null}
                            <div className="learn-article-item-stars-col">
                              <LearnArticleEditorialStars
                                value={editorialStarValue}
                                ariaLabel={starAria}
                              />
                            </div>
                          </div>
                          {item.affiliateLink ? (
                            <p className="learn-article-item-cta">
                              <a
                                href={item.affiliateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {t.viewApp}
                              </a>
                            </p>
                          ) : null}
                        </div>
                      </li>
                    );
                  };

                  if (!magnet || placement.kind === 'none' || items.length === 0) {
                    return <ol className="learn-article-list">{items.map(renderItem)}</ol>;
                  }
                  if (placement.kind === 'after_tables') {
                    return (
                      <>
                        <LearnLeadMagnet cta={magnet} />
                        <ol className="learn-article-list">{items.map(renderItem)}</ol>
                      </>
                    );
                  }
                  const splitIdx = placement.index;
                  const firstChunk = items.slice(0, splitIdx + 1);
                  const restChunk = items.slice(splitIdx + 1);
                  return (
                    <>
                      <ol className="learn-article-list">{firstChunk.map(renderItem)}</ol>
                      <LearnLeadMagnet cta={magnet} />
                      {restChunk.length > 0 ? (
                        <ol className="learn-article-list" start={restChunk[0].rank}>
                          {restChunk.map(renderItem)}
                        </ol>
                      ) : null}
                    </>
                  );
                })()}
              </div>
            </>
          )}

          {showLeadMagnetBottom && article.leadMagnetCta ? (
            <LearnLeadMagnet cta={article.leadMagnetCta} />
          ) : null}

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
            {article.conclusionBullets && article.conclusionBullets.length > 0 ? (
              <>
                {article.conclusionIntro
                  ? article.conclusionIntro
                      .split(/\n\n+/)
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={`conclusion-intro-${i}`}>
                          <WithBold text={para} />
                        </p>
                      ))
                  : null}
                <ul className="learn-detail-conclusion-bullets">
                  {article.conclusionBullets.map((item, i) => (
                    <li key={i}>
                      <WithBold text={item} />
                    </li>
                  ))}
                </ul>
                {article.conclusionOutro
                  ? article.conclusionOutro
                      .split(/\n\n+/)
                      .filter(Boolean)
                      .map((para, i) => (
                        <p key={`conclusion-outro-${i}`}>
                          <WithBold text={para} />
                        </p>
                      ))
                  : null}
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

        {/* Practice CTA */}
        {practiceCase && (
          <section className="learn-detail-practice-cta" aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="learn-detail-related-title">
              {t.practiceThisCase}
            </h2>
            <Link href={`/practice/${practiceCase}`} className="learn-detail-related-card">
              <span className="learn-detail-related-card-title">{t.practiceNow}</span>
              <span className="learn-detail-related-card-arrow">→</span>
            </Link>
          </section>
        )}

        {/* Related Lessons */}
        {relatedLessons.length > 0 && (
          <section className="learn-detail-related" aria-labelledby="related-lessons-heading">
            <h2 id="related-lessons-heading" className="learn-detail-related-title">
              {t.relatedLessons}
            </h2>
            <div className="learn-detail-related-grid">
              {relatedLessons.map((rl) => (
                <Link
                  key={rl.slug}
                  href={`/learn/lessons/${rl.slug}`}
                  className="learn-detail-related-card"
                >
                  <span className="learn-detail-related-card-title">{rl.title}</span>
                  <span className="learn-detail-related-card-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="learn-detail-related" aria-labelledby="related-heading">
            <h2 id="related-heading" className="learn-detail-related-title">
              {t.relatedGuides}
            </h2>
            <div className="learn-detail-related-grid">
              {relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  href={`/learn/articles/${ra.slug}`}
                  className="learn-detail-related-card"
                >
                  <span className="learn-detail-related-card-title">{ra.title}</span>
                  <span className="learn-detail-related-card-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
