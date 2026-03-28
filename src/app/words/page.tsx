import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getWords, getCyrillicLetters } from '@/lib/words';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getWordsIndexPageTranslations } from '@/data/website/wordsIndexPageTranslations';
import { getLearnPageTranslations } from '@/data/website/learnPageTranslations';
import type { LandingLanguage } from '@/data/website/landingTranslations';
import type { WordListItem } from '@/lib/data';

/* Case articles for internal linking (SEO) */
const CASE_ARTICLE_SLUGS = [
  'russian-genitive-case',
  'russian-accusative-case',
  'russian-dative-case',
  'russian-instrumental-case',
  'russian-prepositional-case',
  'russian-prepositions-and-cases',
] as const;

/* Popular word slugs for internal linking (SEO) */
const POPULAR_WORDS: { slug: string; baseForm: string }[] = [
  { slug: 'kniga', baseForm: 'Книга' },
  { slug: 'dom', baseForm: 'Дом' },
  { slug: 'rabota', baseForm: 'Работа' },
  { slug: 'voda', baseForm: 'Вода' },
  { slug: 'gorod', baseForm: 'Город' },
  { slug: 'chelovek', baseForm: 'Человек' },
  { slug: 'den', baseForm: 'День' },
  { slug: 'okno', baseForm: 'Окно' },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';
const WORDS_PER_PAGE = 50;

export const revalidate = 3600;

function getDisplayTranslation(word: WordListItem, lang: LandingLanguage): string {
  let text: string;
  if (lang === 'fr_fr') text = word.translation_fr || word.translation_en;
  else if (lang === 'de_de') text = word.translation_de || word.translation_en;
  else if (lang === 'tr_tr') text = word.translation_tr || word.translation_en;
  else if (lang === 'pl_pl') text = word.translation_pl || word.translation_en;
  else if (lang === 'es_es') text = word.translation_es || word.translation_en;
  else if (lang === 'it_it') text = word.translation_it || word.translation_en;
  else if (lang === 'pt_pt') text = word.translation_pt || word.translation_en;
  else if (lang === 'nl_nl') text = word.translation_nl || word.translation_en;
  else text = word.translation_en;
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

/** Renders text with **bold** segments as <strong> */
function WithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}

/** Première lettre en majuscule pour les mots russes (cyrillique). */
function capitalizeRussianWord(s: string): string {
  if (!s || s.length === 0) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/* Gender badge colors - aligned with /russian-declension/[slug] */
const genderBadgeClasses: Record<string, string> = {
  masculine: 'bg-[hsl(210_100%_96%)] text-[hsl(210_100%_32%)]',
  feminine: 'bg-rose-100 text-rose-700',
  neuter: 'bg-purple-100 text-purple-700',
};

function buildWordsUrl(params: { letter?: string; level?: number; page?: number; q?: string }): string {
  const search = new URLSearchParams();
  if (params.letter) search.set('letter', params.letter);
  if (params.level !== undefined && params.level !== null) search.set('level', String(params.level));
  if (params.page && params.page > 1) search.set('page', String(params.page));
  if (params.q?.trim()) search.set('q', params.q.trim());
  const qs = search.toString();
  return qs ? `/words?${qs}` : '/words';
}

type Props = { searchParams: Promise<{ letter?: string; level?: string; page?: string; q?: string }> };

function buildCanonicalUrl(params: { letter?: string; level?: number; page?: number; q?: string }): string {
  const search = new URLSearchParams();
  if (params.letter) search.set('letter', params.letter);
  if (params.level !== undefined && params.level !== null) search.set('level', String(params.level));
  if (params.page && params.page > 1) search.set('page', String(params.page));
  if (params.q?.trim()) search.set('q', params.q.trim());
  const qs = search.toString();
  return qs ? `${siteUrl}/words?${qs}` : `${siteUrl}/words`;
}

const OG_IMAGE = '/landing-cases/icon-app-russian-cases-with-anna.webp';

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const letter = typeof params.letter === 'string' ? params.letter : undefined;
  const levelParam = params.level;
  const level =
    levelParam === '1' ? 1 : levelParam === '2' ? 2 : levelParam === '3' ? 3 : undefined;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const q = typeof params.q === 'string' ? params.q : undefined;

  const [lang, { total }] = await Promise.all([
    getLandingLangFromRequest(),
    getWords({ letter, level, page, q }),
  ]);
  const t = getWordsIndexPageTranslations(lang);
  const totalPages = Math.ceil(total / WORDS_PER_PAGE);

  const canonicalUrl = buildCanonicalUrl({ letter, level, page, q });
  const prevUrl =
    page > 1
      ? buildCanonicalUrl({ letter, level, page: page - 1, q })
      : undefined;
  const nextUrl =
    page < totalPages
      ? buildCanonicalUrl({ letter, level, page: page + 1, q })
      : undefined;

  const alternates: Metadata['alternates'] = {
    canonical: canonicalUrl,
    ...(prevUrl && { prev: prevUrl }),
    ...(nextUrl && { next: nextUrl }),
  };

  return {
    title: t.metadata.title(total),
    description: t.metadata.description(total),
    keywords:
      'Russian declensions, Russian word declension, Russian cases, Russian grammar, declension table, Russian nouns, learn Russian, русские склонения, падежи русского языка',
    alternates,
    openGraph: {
      title: t.metadata.title(total),
      description: t.metadata.description(total),
      url: canonicalUrl,
      siteName: 'Russian Declensions',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 1200,
          alt: '410 most useful Russian words - full declension tables for all 6 cases',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function WordsIndexPage({ searchParams }: Props) {
  const params = await searchParams;
  const letter = typeof params.letter === 'string' ? params.letter : undefined;
  const levelParam = params.level;
  const level =
    levelParam === '1' ? 1 : levelParam === '2' ? 2 : levelParam === '3' ? 3 : undefined;
  const page = Math.max(1, parseInt(params.page ?? '1', 10) || 1);
  const q = typeof params.q === 'string' ? params.q : undefined;

  const [lang, cyrillicLetters, { words, total }] = await Promise.all([
    getLandingLangFromRequest(),
    getCyrillicLetters(),
    getWords({ letter, level, page, q }),
  ]);
  const t = getWordsIndexPageTranslations(lang);
  const learnT = getLearnPageTranslations(lang);

  const totalPages = Math.ceil(total / WORDS_PER_PAGE);
  const from = (page - 1) * WORDS_PER_PAGE + 1;
  const to = Math.min(page * WORDS_PER_PAGE, total);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: t.breadcrumb.learn, item: `${siteUrl}/learn` },
      { '@type': 'ListItem', position: 3, name: t.breadcrumb.words, item: `${siteUrl}/words` },
    ],
  };

  const itemListJsonLd = {
    '@type': 'ItemList',
    name: t.titleWithCount(total),
    description: t.subtitle(total),
    numberOfItems: total,
    itemListElement: words.map((w, i) => ({
      '@type': 'ListItem' as const,
      position: from + i,
      name: w.base_form,
      url: `${siteUrl}/russian-declension/${w.slug}`,
    })),
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t.titleWithCount(total),
    description: t.metadata.description(total),
    url: buildCanonicalUrl({ letter, level, page }),
    mainEntity: itemListJsonLd,
  };

  return (
    <article className="learn-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <nav className="learn-breadcrumb mb-6" aria-label="Breadcrumb">
        <Link href="/" className="learn-breadcrumb-link">
          {t.breadcrumb.home}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <Link href="/learn" className="learn-breadcrumb-link">
          {t.breadcrumb.learn}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <span className="learn-breadcrumb-current">{t.breadcrumb.words}</span>
      </nav>

      {/* HERO */}
      <section className="learn-detail-header !mb-0">
        <h1 className="learn-detail-title text-4xl sm:text-5xl">
          {t.titleWithCount(total)}
        </h1>
        <div className="mt-4 space-y-3 text-lg text-[hsl(var(--muted-foreground))]">
          {t.intro.paragraphs(total).map((para, i) => (
            <p key={i}>
              <WithBold text={para} />
            </p>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-[hsl(var(--border))]">
          <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
            {t.heroH2.title(total)}
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">
            {t.heroH2.body(total)}
          </p>
          <Link
            href="/learn/lessons/russian-cases-complete-guide"
            className="inline-flex items-center text-[hsl(var(--primary))] font-medium hover:underline"
          >
            {learnT.lessonTitles['russian-cases-complete-guide']} →
          </Link>
        </div>
      </section>

      {/* WORDS TABLE + ALPHABET SIDEBAR */}
      <section className="learn-detail-section flex flex-col sm:flex-row gap-6 items-start">
        <div className="learn-detail-table-wrap flex-1 min-w-0">
          <table className="learn-detail-table">
            <thead>
              <tr>
                <th>{t.tableHeaders.russian}</th>
                <th>{t.tableHeaders.translation}</th>
                <th>{t.tableHeaders.gender}</th>
                <th className="text-right">{t.tableHeaders.viewDeclension}</th>
              </tr>
            </thead>
            <tbody>
              {words.map((w) => (
                <tr
                  key={w.word_id}
                  className="group hover:bg-[hsl(var(--primary)_/_0.06)] transition-colors"
                >
                  <td className="font-semibold" lang="ru">
                    <Link
                      href={`/russian-declension/${w.slug}`}
                      className="text-[hsl(var(--primary))] hover:underline"
                      style={{ fontFamily: 'var(--font-cyrillic)' }}
                    >
                      {capitalizeRussianWord(w.base_form)}
                    </Link>
                  </td>
                  <td className="text-[hsl(var(--muted-foreground))]">
                    {getDisplayTranslation(w, lang)}
                  </td>
                  <td>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        genderBadgeClasses[w.gender] ??
                        'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]'
                      }`}
                    >
                      {t.gender[w.gender] ?? w.gender}
                    </span>
                  </td>
                  <td className="text-right">
                    <Link
                      href={`/russian-declension/${w.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[hsl(var(--primary))] bg-transparent px-3 py-1.5 text-sm font-medium text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)_/_0.1)] transition-colors"
                    >
                      {t.tableHeaders.viewDeclension}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ALPHABET FILTER BAR - vertical on the right */}
        <aside
          className="shrink-0 flex flex-col gap-1.5 sticky top-24"
          aria-label={t.filterByLetter}
        >
          <Link
            href={buildWordsUrl({ level, page: 1, q })}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              !letter
                ? 'bg-[hsl(var(--primary))] text-white'
                : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]/80'
            }`}
          >
            {t.filterAll}
          </Link>
          {cyrillicLetters.map((l) => (
            <Link
              key={l}
              href={buildWordsUrl({ letter: l, level, page: 1, q })}
              className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                letter?.toUpperCase() === l
                  ? 'bg-[hsl(var(--primary))] text-white'
                  : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]/80'
              }`}
              style={{ fontFamily: 'var(--font-cyrillic)' }}
            >
              {l}
            </Link>
          ))}
        </aside>
      </section>

      {words.length === 0 && (
        <p className="py-8 text-center text-[hsl(var(--muted-foreground))] -mt-4">
          {t.emptyState}
        </p>
      )}

      {/* PAGINATION */}
      {total > 0 && (
        <nav
          className="mt-8 pt-8 border-t border-[hsl(var(--border))]"
          aria-label="Pagination"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
            {t.pagination.showing(from, to, total)}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {page > 1 && (
              <Link
                href={buildWordsUrl({ letter, level, page: page - 1, q })}
                className="inline-flex items-center gap-1 rounded-lg border border-[hsl(var(--border))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
              >
                {t.pagination.previous}
              </Link>
            )}
            <span className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let p: number;
                if (totalPages <= 5) {
                  p = i + 1;
                } else if (page <= 3) {
                  p = i + 1;
                } else if (page >= totalPages - 2) {
                  p = totalPages - 4 + i;
                } else {
                  p = page - 2 + i;
                }
                return (
                  <Link
                    key={p}
                    href={buildWordsUrl({ letter, level, page: p, q })}
                    className={`min-w-[2.25rem] py-2 px-3 rounded-lg text-center text-sm font-medium transition-colors ${
                      p === page
                        ? 'bg-[hsl(var(--primary))] text-white'
                        : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]/80'
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
            </span>
            {page < totalPages && (
              <Link
                href={buildWordsUrl({ letter, level, page: page + 1, q })}
                className="inline-flex items-center gap-1 rounded-lg border border-[hsl(var(--border))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
              >
                {t.pagination.next}
              </Link>
            )}
          </div>
        </nav>
      )}

      {/* Internal links for SEO */}
      <section
        className="mt-12 pt-8 border-t border-[hsl(var(--border))]"
        aria-labelledby="related-links-heading"
      >
        <h2 id="related-links-heading" className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
          {t.relatedLinks.title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-2">
              {t.relatedLinks.learnLabel}
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/learn"
                  className="text-[hsl(var(--primary))] hover:underline text-sm"
                >
                  {learnT.header.title}
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="text-[hsl(var(--primary))] hover:underline text-sm"
                >
                  {t.relatedLinks.blogLabel}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-2">
              {t.relatedLinks.caseArticlesTitle}
            </p>
            <ul className="space-y-1">
              {CASE_ARTICLE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/learn/articles/${slug}`}
                    className="text-[hsl(var(--primary))] hover:underline text-sm"
                  >
                    {learnT.lessonTitles[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm font-medium text-[hsl(var(--muted-foreground))] mb-2">
            {t.relatedLinks.popularWordsTitle}
          </p>
          <ul className="flex flex-wrap gap-2">
            {POPULAR_WORDS.map(({ slug, baseForm }) => (
              <li key={slug}>
                <Link
                  href={`/russian-declension/${slug}`}
                  className="inline-flex rounded-lg border border-[hsl(var(--border))] px-3 py-1.5 text-sm text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-colors"
                  style={{ fontFamily: 'var(--font-cyrillic)' }}
                  lang="ru"
                >
                  {baseForm}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
