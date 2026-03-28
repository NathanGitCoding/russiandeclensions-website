import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getWordPageTranslations } from '@/data/website/wordPageTranslations';
import { getRelatedWords, type WordWithDeclensions } from '@/lib/words';
import { getWordDisplayTranslation } from '@/lib/wordPageLang';
import {
  buildWordCaseArticleLinks,
  buildWordCaseConfig,
  buildWordFaqItems,
  getWordDeclensionOrdinal,
  getWordLevelLabel,
} from '@/lib/wordPageBuilders';
import { LearnLeadMagnet } from '@/components/learn/LearnLeadMagnet';
import { PronunciationButton } from '@/components/learn/PronunciationButton';

const WORD_BASE_PATH = '/russian-declension';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

/* Gender badge colors - semantic, aligned with site palette */
const genderBadgeClasses: Record<string, string> = {
  masculine: 'bg-[hsl(210_100%_96%)] text-[hsl(210_100%_32%)]',
  feminine: 'bg-rose-100 text-rose-700',
  neuter: 'bg-purple-100 text-purple-700',
};

const mockWord = {
  word_id: 0,
  base_form: 'книга',
  slug: 'kniga',
  translation_en: 'book',
  translation_fr: 'livre',
  translation_de: 'Buch',
  translation_tr: 'kitap',
  translation_pl: 'książka',
  gender: 'feminine',
  type: 'noun',
  word_apparition_level: 1,
  plural_only: 'Non',
  Indeclinable: 'Non',
  nominative_sg: 'книга',
  nominative_pl: 'книги',
  accusative_sg: 'книгу',
  accusative_pl: 'книги',
  genitive_sg: 'книги',
  genitive_pl: 'книг',
  dative_sg: 'книге',
  dative_pl: 'книгам',
  instrumental_sg: 'книгой',
  instrumental_pl: 'книгами',
  prepositional_sg: 'книге',
  prepositional_pl: 'книгах',
  locative_sg: 'книге',
  locative_pl: 'книгах',
};

/** Renders text with **bold** segments as <strong> - same as learn articles */
function WithBold({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return <>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}</>;
}

/** Longest common prefix of all declension forms → gives the real stem (e.g. книг for книга) */
function getDeclensionStem(word: typeof mockWord): string {
  const forms = [
    word.nominative_sg,
    word.genitive_sg,
    word.dative_sg,
    word.accusative_sg,
    word.instrumental_sg,
    word.prepositional_sg,
    word.nominative_pl,
    word.genitive_pl,
    word.dative_pl,
    word.accusative_pl,
    word.instrumental_pl,
    word.prepositional_pl,
  ].filter(Boolean) as string[];
  if (forms.length === 0) return word.base_form;
  let prefix = forms[0];
  for (let i = 1; i < forms.length; i++) {
    while (prefix.length > 0 && !forms[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (!prefix) break;
  }
  return prefix;
}

/** Highlight declension endings (same logic as app) */
function HighlightedEnding({
  text,
  baseForm,
  nominativeSg,
  wordType,
  stem: stemOverride,
}: {
  text: string;
  baseForm: string;
  nominativeSg: string;
  wordType: string;
  stem?: string;
}) {
  const type = (wordType || '').toLowerCase().replace(/\s/g, '_');
  const mutedClass = 'text-[hsl(var(--muted-foreground))]';
  const endingClass = 'font-bold text-[hsl(var(--section-blue))]';
  if (!text || (type !== 'noun' && type !== 'proper_noun')) return <span className={mutedClass}>{text}</span>;
  if (!baseForm || baseForm.length === 0) return <span className={mutedClass}>{text}</span>;

  const stemBase = stemOverride ?? nominativeSg ?? baseForm;
  const prefixLen = text.startsWith(stemBase) ? stemBase.length : 0;
  const hasEnding = prefixLen > 0 && prefixLen < text.length;
  if (hasEnding) {
    return <><span className={mutedClass}>{text.slice(0, prefixLen)}</span><strong className={endingClass}>{text.slice(prefixLen)}</strong></>;
  }
  return <span className={mutedClass}>{text}</span>;
}

const TEMPLATE_EXAMPLE_CASE_KEYS = [
  'nominative',
  'accusative',
  'genitive',
  'dative',
  'instrumental',
  'prepositional',
] as const;

export async function generateMetadata(): Promise<Metadata> {
  if (process.env.NODE_ENV === 'production') {
    return { title: 'Not Found' };
  }

  const lang = await getLandingLangFromRequest();
  const wt = getWordPageTranslations(lang);
  const translation = getWordDisplayTranslation(mockWord as WordWithDeclensions, lang);
  const title = wt.metadata.title(translation, mockWord.base_form);
  const description = wt.metadata.description(mockWord.base_form, translation, mockWord.gender);

  const canonicalUrl = `${siteUrl}/russian-declension/${mockWord.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: wt.openGraph.siteName,
    },
  };
}

export default async function WordTemplatePage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  const lang = await getLandingLangFromRequest();
  const wt = getWordPageTranslations(lang);
  const w = mockWord as WordWithDeclensions;
  const translation = getWordDisplayTranslation(w, lang);
  const genderLabel = wt.gender[mockWord.gender] ?? mockWord.gender;
  const typeLabel = wt.type[mockWord.type] ?? mockWord.type;
  const badgeClass = genderBadgeClasses[mockWord.gender] ?? 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]';

  const caseConfig = buildWordCaseConfig(w, wt);
  const faqItems = buildWordFaqItems(w, wt, translation, genderLabel, false);
  const caseArticleLinks = buildWordCaseArticleLinks(wt);
  const declensionOrdinal = getWordDeclensionOrdinal(w, wt);
  const levelLabel = getWordLevelLabel(mockWord.word_apparition_level ?? 1, wt);
  const relatedWords = await getRelatedWords(mockWord.slug, mockWord.gender, 5);

  const exampleRows = TEMPLATE_EXAMPLE_CASE_KEYS.map((key) => {
    const c = wt.cases.find((x) => x.key === key)!;
    const hasContent = key === 'nominative';
    return {
      key,
      label: c.label,
      ru: hasContent ? 'Это интересная книга.' : '',
      gloss:
        hasContent && lang === 'fr_fr'
          ? 'Ceci est un livre intéressant.'
          : hasContent
            ? 'This is an interesting book.'
            : '',
      hasContent,
    };
  });

  const leadMagnetCta = {
    title: wt.leadMagnet.title,
    description: wt.leadMagnet.description(mockWord.base_form),
    ctaText: wt.leadMagnet.ctaText,
    ctaHref: '/',
  };

  const canonicalUrl = `${siteUrl}/russian-declension/${mockWord.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: wt.breadcrumb.home, item: siteUrl },
      { '@type': 'ListItem', position: 2, name: wt.breadcrumb.learn, item: `${siteUrl}/learn` },
      { '@type': 'ListItem', position: 3, name: wt.breadcrumb.words, item: `${siteUrl}/words` },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${mockWord.base_form} (${translation})`,
        item: canonicalUrl,
      },
    ],
  };

  const j = wt.jsonLd;
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: j.webPageName(mockWord.base_form, translation),
    description: j.webPageDescription(mockWord.base_form, genderLabel, typeLabel),
    mainEntity: {
      '@type': 'Article',
      name: j.articleName(mockWord.base_form),
      articleSection: j.articleSection,
      datePublished: '2024-01-01',
      dateModified: '2024-12-01',
      author: { '@type': 'Organization', name: j.organizationName, url: siteUrl },
      publisher: {
        '@type': 'Organization',
        name: j.organizationName,
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` },
      },
      about: {
        '@type': 'Thing',
        name: mockWord.base_form,
        description: j.aboutDescription(translation),
      },
      hasPart: {
        '@type': 'Table',
        name: j.tableName(mockWord.base_form),
        abstract: j.tableAbstract(mockWord.base_form, typeLabel),
        about: {
          '@type': 'Thing',
          name: mockWord.base_form,
          description: j.aboutDescription(translation),
        },
        cssSelector: '.learn-detail-table',
      },
    },
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: j.howToName(mockWord.base_form, translation),
    description: j.howToDescription(mockWord.base_form, typeLabel),
    step: caseConfig.map((row) => ({
      '@type': 'HowToStep' as const,
      name: j.howToStepName(row.label),
      text: j.howToStepText(row.sg, row.pl, row.hint),
    })),
  };

  const learningResourceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: j.learningResourceName(mockWord.base_form, translation),
    description: j.learningResourceDescription(mockWord.base_form, genderLabel, typeLabel),
    learningResourceType: j.learningResourceType,
    educationalLevel: j.educationalLevel,
    about: {
      '@type': 'Thing',
      name: mockWord.base_form,
      description: j.aboutDescription(translation),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.learn-detail-faq'] },
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question' as const,
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: item.answer.replace(/\*\*/g, ''),
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(learningResourceJsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav className="learn-breadcrumb mb-6" aria-label={wt.a11y.breadcrumb}>
        <Link href="/" className="learn-breadcrumb-link">
          {wt.breadcrumb.home}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <Link href="/learn" className="learn-breadcrumb-link">
          {wt.breadcrumb.learn}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <Link href="/words" className="learn-breadcrumb-link">
          {wt.breadcrumb.words}
        </Link>
        <span className="learn-breadcrumb-sep">/</span>
        <span className="learn-breadcrumb-current" lang="ru">
          {mockWord.base_form} ({translation})
        </span>
      </nav>

      {/* [1. HERO] */}
      <section className="learn-detail-header">
        <div className="flex flex-wrap items-center gap-3">
          <h1
            className="learn-detail-title text-4xl sm:text-5xl"
            style={{ fontFamily: 'var(--font-cyrillic)' }}
            lang="ru"
          >
            {wt.h1Title(mockWord.base_form, translation)}
          </h1>
          <PronunciationButton
            text={mockWord.base_form}
            ariaLabel={wt.a11y.listenPronunciation}
            size="lg"
          />
        </div>
        <p className="mt-2 font-mono text-sm text-[hsl(var(--muted-foreground))]">
          /{mockWord.slug}/
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${badgeClass}`}
          >
            {genderLabel}
          </span>
          <span className="inline-flex rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-sm font-medium text-[hsl(var(--muted-foreground))]">
            {typeLabel}
          </span>
        </div>
      </section>

      {/* [1b. TABLE OF CONTENTS - SEO] */}
      <nav
        className="mb-8 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted)_/_0.3)] px-6 py-5"
        aria-label={wt.tocTitle}
      >
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
          {wt.tocTitle}
        </h2>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#declension-table" className="text-[hsl(var(--primary))] hover:underline">
              {wt.h2FullTable(mockWord.base_form)}
            </a>
            <ul className="ml-4 mt-1.5 space-y-1 border-l-2 border-[hsl(var(--border))] pl-4">
              {caseConfig.map((row) => (
                <li key={row.key}>
                  <a href={`#case-${row.key}`} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:underline">
                    {wt.tocCaseDeclensionLink(mockWord.base_form, row.label)}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="#usage-notes" className="text-[hsl(var(--primary))] hover:underline">
              {wt.usageNotes}
            </a>
          </li>
          <li>
            <a href="#example-sentences" className="text-[hsl(var(--primary))] hover:underline">
              {wt.h2HowToUse(mockWord.base_form)}
            </a>
          </li>
          <li>
            <a href="#faq-heading" className="text-[hsl(var(--primary))] hover:underline">
              {wt.h2Faq(mockWord.base_form)}
            </a>
          </li>
        </ol>
      </nav>

      {/* [2. DECLENSION TABLE] */}
      <section id="declension-table" className="learn-detail-section scroll-mt-6">
        <h2 className="mb-6 text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>
          {wt.h2FullTable(mockWord.base_form)}
        </h2>
        <div className="mb-4 space-y-3 text-[hsl(var(--muted-foreground))] leading-relaxed">
          <p>
            <WithBold text={wt.contextSnippetType(mockWord.base_form, genderLabel, declensionOrdinal)} />
          </p>
          <p>
            {wt.contextSnippetUsage(levelLabel)}
          </p>
        </div>
        <div className="learn-detail-table-wrap">
          <table className="learn-detail-table">
            <thead>
              <tr>
                <th>{wt.tableHeaders.case}</th>
                <th>{wt.tableHeaders.singular}</th>
                <th>{wt.tableHeaders.plural}</th>
              </tr>
            </thead>
            <tbody>
              {caseConfig.map((row, index) => (
                <tr
                  key={row.key}
                  id={`case-${row.key}`}
                  className={`scroll-mt-24 ${index % 2 === 0 ? 'bg-[hsl(var(--primary)_/_0.08)]' : 'bg-white'}`}
                >
                  <td>
                    <span className="font-semibold text-[hsl(var(--foreground))]">
                      {wt.formatCaseDisplay(wt.caseLabel, row.label)}
                    </span>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]" title={row.hint}>
                      {row.hint}
                    </p>
                  </td>
                  <td className="font-semibold" lang="ru">
                    <div className="flex items-center gap-2">
                      <span>
                        <HighlightedEnding text={row.sg} baseForm={mockWord.base_form} nominativeSg={mockWord.base_form} wordType={mockWord.type} stem={getDeclensionStem(mockWord)} />
                      </span>
                      <PronunciationButton
                        text={row.sg}
                        size="xs"
                        ariaLabel={wt.a11y.listenPronunciationOf(row.sg)}
                      />
                    </div>
                  </td>
                  <td className="font-semibold" lang="ru">
                    <div className="flex items-center gap-2">
                      <span>
                        <HighlightedEnding text={row.pl} baseForm={mockWord.nominative_pl} nominativeSg={mockWord.base_form} wordType={mockWord.type} stem={getDeclensionStem(mockWord)} />
                      </span>
                      <PronunciationButton
                        text={row.pl}
                        size="xs"
                        ariaLabel={wt.a11y.listenPronunciationOf(row.pl)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          {wt.learnMoreAboutCase}{' '}
          {caseArticleLinks.map((link, i) => (
            <span key={link.slug}>
              <Link
                href={`/learn/articles/${link.slug}`}
                className="text-[hsl(var(--primary))] hover:underline"
              >
                {link.label}
              </Link>
              {i < caseArticleLinks.length - 1 ? ', ' : ''}
            </span>
          ))}
          .{' '}
          <Link
            href="/learn/articles/russian-case-endings-cheatsheet"
            className="text-[hsl(var(--primary))] hover:underline"
          >
            {wt.russianCaseEndingsCheatsheet}
          </Link>
          .
        </p>
      </section>

      {/* [3. USAGE NOTES] */}
      <section id="usage-notes" className="learn-detail-section scroll-mt-24">
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>
          {wt.usageNotes}
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
          {wt.usageNotesContent(translation, mockWord.base_form, genderLabel)}
          <Link href="/learn/articles/russian-case-endings-cheatsheet" className="text-[hsl(var(--primary))] hover:underline">
            {wt.usageNotesCaseEndings}
          </Link>
          {wt.usageNotesAnd}
          <Link href="/learn" className="text-[hsl(var(--primary))] hover:underline">
            {wt.usageNotesGrammar}
          </Link>
          {wt.usageNotesForMore}
        </p>
      </section>

      {/* [4. EXAMPLE SENTENCES] */}
      <section
        id="example-sentences"
        className="learn-detail-section scroll-mt-24"
        style={{
          background: 'hsl(var(--primary) / 0.06)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid hsl(var(--primary) / 0.2)',
        }}
      >
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>
          {wt.h2HowToUse(mockWord.base_form)}
        </h2>
        <div className="flex flex-col gap-3">
          {exampleRows.map((item) => (
            <div key={item.key} className="learn-mistake-card">
              <span className="learn-card-badge">{item.label}</span>
              {item.hasContent ? (
                <div className="mt-2 space-y-1">
                  <p className="text-[hsl(var(--foreground))] whitespace-nowrap overflow-x-auto" lang="ru">
                    {item.ru}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] whitespace-nowrap overflow-x-auto">
                    {item.gloss}
                  </p>
                </div>
              ) : (
                <p className="mt-2 italic text-[hsl(var(--muted-foreground))]">{wt.comingSoon}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <LearnLeadMagnet cta={leadMagnetCta} />

      {/* [5. FAQ] - same model as /learn articles */}
      <section className="learn-detail-faq scroll-mt-24" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="learn-detail-faq-title" style={{ marginBottom: '1.5rem' }}>
          {wt.h2Faq(mockWord.base_form)}
        </h2>
        <dl>
          {faqItems.map((item, i) => (
            <div key={i} className="learn-detail-faq-item">
              <dt>{item.question}</dt>
              <dd>
                <WithBold text={item.answer} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {relatedWords.length > 0 && (
        <section className="mt-8 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted)_/_0.2)] px-6 py-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
            {wt.peopleAlsoSearchedFor}
          </h3>
          <p className="flex flex-wrap gap-x-2 gap-y-1">
            {relatedWords.map((related, i) => (
              <span key={related.slug}>
                <Link
                  href={`${WORD_BASE_PATH}/${related.slug}`}
                  className="text-[hsl(var(--primary))] hover:underline"
                >
                  {related.base_form}
                </Link>
                {i < relatedWords.length - 1 && (
                  <span className="text-[hsl(var(--muted-foreground))]"> · </span>
                )}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* [6. PREV / NEXT NAVIGATION] */}
      <nav className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-8">
        <Link href="/russian-declension/dom" className="learn-detail-back" aria-label={wt.nav.previousWord}>
          ← дом
        </Link>
        <Link href="/russian-declension/voda" className="learn-detail-back" aria-label={wt.nav.nextWord}>
          вода →
        </Link>
      </nav>
    </article>
  );
}
