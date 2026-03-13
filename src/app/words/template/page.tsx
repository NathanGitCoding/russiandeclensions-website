import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLearnDetailTranslations } from '@/data/website/learnDetailTranslations';
import { getWordPageTranslations } from '@/data/website/wordPageTranslations';
import { LearnLeadMagnet } from '@/components/learn/LearnLeadMagnet';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const leadMagnetCta = {
  title: 'Practice Russian declensions on your phone',
  description:
    'Stop memorizing tables, start practicing how to decline книга and thousands of other Russian words in interactive quizzes.',
  ctaText: 'Download the app and start drilling today',
  ctaHref: '/',
};

/* Gender badge colors - semantic, aligned with site palette */
const genderBadgeClasses: Record<string, string> = {
  masculine: 'bg-[hsl(210_100%_96%)] text-[hsl(210_100%_32%)]',
  feminine: 'bg-rose-100 text-rose-700',
  neuter: 'bg-purple-100 text-purple-700',
};

const mockWord = {
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

const caseConfig = [
  {
    key: 'nominative',
    label: 'Nominative',
    hint: 'subject',
    sg: mockWord.nominative_sg,
    pl: mockWord.nominative_pl,
    isBase: true,
  },
  {
    key: 'accusative',
    label: 'Accusative',
    hint: 'direct object',
    sg: mockWord.accusative_sg,
    pl: mockWord.accusative_pl,
    isBase: false,
  },
  {
    key: 'genitive',
    label: 'Genitive',
    hint: 'possession / absence',
    sg: mockWord.genitive_sg,
    pl: mockWord.genitive_pl,
    isBase: false,
  },
  {
    key: 'dative',
    label: 'Dative',
    hint: 'to / for',
    sg: mockWord.dative_sg,
    pl: mockWord.dative_pl,
    isBase: false,
  },
  {
    key: 'instrumental',
    label: 'Instrumental',
    hint: 'with / by means of',
    sg: mockWord.instrumental_sg,
    pl: mockWord.instrumental_pl,
    isBase: false,
  },
  {
    key: 'prepositional',
    label: 'Prepositional',
    hint: 'location / topic',
    sg: mockWord.prepositional_sg,
    pl: mockWord.prepositional_pl,
    isBase: false,
  },
  {
    key: 'locative',
    label: 'Locative',
    hint: 'specific location (в/на)',
    sg: mockWord.locative_sg,
    pl: mockWord.locative_pl,
    isBase: false,
  },
];

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

const faqItems = [
  { question: 'How to translate book in Russian?', answer: 'The Russian word for "book" is **книга** (kniga).' },
  { question: 'What is the meaning of книга?', answer: '**книга** means "book" in English. It is a feminine noun in Russian.' },
  ...caseConfig.map((row) => ({
    question: `What is the ${row.label.toLowerCase()} of ${mockWord.base_form}?`,
    answer: `The ${row.label.toLowerCase()} singular of ${mockWord.base_form} is **${row.sg}**. The ${row.label.toLowerCase()} plural is **${row.pl}**.`,
  })),
  { question: 'Is книга masculine or feminine?', answer: '**книга** is a feminine noun in Russian.' },
  { question: 'Is книга regular or irregular?', answer: '**книга** is a **regular** noun. It follows the standard declension pattern for feminine nouns ending in -а.' },
];

const exampleSentencesCases = [
  { case: 'Nominative', ru: 'Это интересная книга.', en: 'This is an interesting book.', hasContent: true },
  { case: 'Accusative', ru: '', en: '', hasContent: false },
  { case: 'Genitive', ru: '', en: '', hasContent: false },
  { case: 'Dative', ru: '', en: '', hasContent: false },
  { case: 'Instrumental', ru: '', en: '', hasContent: false },
  { case: 'Prepositional', ru: '', en: '', hasContent: false },
];

/* Internal links to Russian case articles (existing on site) */
const caseArticleLinks = [
  { slug: 'russian-accusative-case', label: 'accusative' },
  { slug: 'russian-genitive-case', label: 'genitive' },
  { slug: 'russian-dative-case', label: 'dative' },
  { slug: 'russian-instrumental-case', label: 'instrumental' },
  { slug: 'russian-prepositional-case', label: 'prepositional' },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  if (process.env.NODE_ENV === 'production') {
    return { title: 'Not Found' };
  }

  const title = `${mockWord.base_form} (${mockWord.translation_en}) – Russian Declension Table`;
  const description = `Full declension table of ${mockWord.base_form} (${mockWord.translation_en}) in Russian. Nominative, genitive, dative, accusative, instrumental and prepositional cases with singular and plural forms.`;

  const canonicalUrl = `${siteUrl}/russian-declension/${mockWord.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Russian Declensions',
    },
  };
}

export default async function WordTemplatePage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  const lang = await getLandingLangFromRequest();
  const t = getLearnDetailTranslations(lang);
  const wt = getWordPageTranslations(lang);
  const badgeClass = genderBadgeClasses[mockWord.gender] ?? 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]';

  const canonicalUrl = `${siteUrl}/russian-declension/${mockWord.slug}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Learn', item: `${siteUrl}/learn` },
      { '@type': 'ListItem', position: 3, name: 'Words', item: `${siteUrl}/words` },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${mockWord.base_form} (${mockWord.translation_en})`,
        item: canonicalUrl,
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${mockWord.base_form} (${mockWord.translation_en}) – Russian Declension Table`,
    description: `Full declension table of ${mockWord.base_form} in Russian. ${mockWord.base_form} is a ${mockWord.gender} ${mockWord.type}.`,
    mainEntity: {
      '@type': 'Article',
      name: `${mockWord.base_form} declension`,
      articleSection: 'Russian grammar',
      datePublished: '2024-01-01',
      dateModified: '2024-12-01',
      author: { '@type': 'Organization', name: 'Russian Declensions', url: siteUrl },
      publisher: { '@type': 'Organization', name: 'Russian Declensions', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.ico` } },
      about: {
        '@type': 'Thing',
        name: mockWord.base_form,
        description: `Russian word for ${mockWord.translation_en}`,
      },
      hasPart: {
        '@type': 'Table',
        name: `Declension table for ${mockWord.base_form}`,
        abstract: `Complete declension of the Russian ${mockWord.type} ${mockWord.base_form} across all cases (nominative, accusative, genitive, dative, instrumental, prepositional, locative) in singular and plural forms.`,
        about: {
          '@type': 'Thing',
          name: mockWord.base_form,
          description: `Russian word for ${mockWord.translation_en}`,
        },
        cssSelector: '.learn-detail-table',
      },
    },
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to decline ${mockWord.base_form} (${mockWord.translation_en}) in Russian`,
    description: `Step-by-step guide to declining the Russian ${mockWord.type} ${mockWord.base_form} across all cases.`,
    step: caseConfig.map((row) => ({
      '@type': 'HowToStep' as const,
      name: `${row.label} case`,
      text: `Singular: ${row.sg}. Plural: ${row.pl}. ${row.hint}`,
    })),
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

      {/* Breadcrumbs */}
      <nav className="learn-breadcrumb mb-6" aria-label="Breadcrumb">
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
          {mockWord.base_form} ({mockWord.translation_en})
        </span>
      </nav>

      {/* [1. HERO] */}
      <section className="learn-detail-header">
        <h1
          className="learn-detail-title text-4xl sm:text-5xl"
          style={{ fontFamily: 'var(--font-cyrillic)' }}
          lang="ru"
        >
          {mockWord.base_form} ({mockWord.translation_en})
        </h1>
        <p className="mt-2 font-mono text-sm text-[hsl(var(--muted-foreground))]">
          /{mockWord.slug}/
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${badgeClass}`}
          >
            {mockWord.gender}
          </span>
          <span className="inline-flex rounded-full bg-[hsl(var(--muted))] px-3 py-1 text-sm font-medium text-[hsl(var(--muted-foreground))]">
            {mockWord.type}
          </span>
        </div>
      </section>

      {/* [2. DECLENSION TABLE] */}
      <section className="learn-detail-section">
        <h2 className="mb-6 text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>
          Full declension table of {mockWord.base_form}
        </h2>
        <div className="mb-4 space-y-3 text-[hsl(var(--muted-foreground))] leading-relaxed">
          <p>
            The Russian {mockWord.type} <strong>{mockWord.base_form}</strong> ({mockWord.translation_en}) is a{' '}
            <strong>{mockWord.gender} noun</strong>.
          </p>
          <p>
            Below is its full declension across all <strong>Russian cases</strong> (nominative, accusative, genitive,
            dative, instrumental, prepositional and locative) in <strong>singular</strong> and <strong>plural</strong> forms.
          </p>
          <p>
            How to decline {mockWord.base_form}?
          </p>
        </div>
        <div className="learn-detail-table-wrap">
          <table className="learn-detail-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              {caseConfig.map((row, index) => (
                <tr
                  key={row.key}
                  className={index % 2 === 0 ? 'bg-[hsl(var(--primary)_/_0.08)]' : 'bg-white'}
                >
                  <td>
                    <span className="font-semibold text-[hsl(var(--foreground))]">{row.label} Case</span>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]" title={row.hint}>
                      {row.hint}
                    </p>
                  </td>
                  <td className="font-semibold" lang="ru">
                    <HighlightedEnding text={row.sg} baseForm={mockWord.base_form} nominativeSg={mockWord.base_form} wordType={mockWord.type} stem={getDeclensionStem(mockWord)} />
                  </td>
                  <td className="font-semibold" lang="ru">
                    <HighlightedEnding text={row.pl} baseForm={mockWord.nominative_pl} nominativeSg={mockWord.base_form} wordType={mockWord.type} stem={getDeclensionStem(mockWord)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
          Learn more about each case:{' '}
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
          . See also the{' '}
          <Link
            href="/learn/articles/russian-case-endings-cheatsheet"
            className="text-[hsl(var(--primary))] hover:underline"
          >
            Russian case endings cheatsheet
          </Link>
          .
        </p>
      </section>

      {/* [3. USAGE NOTES] */}
      <section className="learn-detail-section">
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>Usage notes</h2>
        <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
          The Russian word for book, книга, follows the standard declension pattern for feminine nouns
          ending in -а. Use the nominative for the subject, accusative for the direct object, genitive
          for possession or absence, dative for indirect objects (to/for), instrumental with/by, and
          prepositional after в, на, о. See our guides on{' '}
          <Link href="/learn/articles/russian-case-endings-cheatsheet" className="text-[hsl(var(--primary))] hover:underline">
            Russian case endings
          </Link>{' '}
          and{' '}
          <Link href="/learn" className="text-[hsl(var(--primary))] hover:underline">
            Russian grammar
          </Link>{' '}
          for more.
        </p>
      </section>

      {/* [4. EXAMPLE SENTENCES] */}
      <section
        className="learn-detail-section"
        style={{
          background: 'hsl(var(--primary) / 0.06)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid hsl(var(--primary) / 0.2)',
        }}
      >
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] block" style={{ marginBottom: '1.5rem' }}>
          Example sentences
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {exampleSentencesCases.map((item) => (
            <div
              key={item.case}
              className="learn-mistake-card"
            >
              <span className="learn-card-badge">{item.case}</span>
              {item.hasContent ? (
                <div className="mt-2 space-y-1">
                  <p className="text-[hsl(var(--foreground))] whitespace-nowrap overflow-x-auto" lang="ru">{item.ru}</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] whitespace-nowrap overflow-x-auto">{item.en}</p>
                </div>
              ) : (
                <p className="mt-2 italic text-[hsl(var(--muted-foreground))]">Coming soon...</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <LearnLeadMagnet cta={leadMagnetCta} />

      {/* [5. FAQ] - same model as /learn articles */}
      <section className="learn-detail-faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="learn-detail-faq-title" style={{ marginBottom: '1.5rem' }}>
          {t.frequentlyAskedQuestions}
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

      {/* [6. PREV / NEXT NAVIGATION] */}
      <nav className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-8">
        <Link href="/russian-declension/dom" className="learn-detail-back" aria-label="Previous word">
          ← дом
        </Link>
        <Link href="/russian-declension/voda" className="learn-detail-back" aria-label="Next word">
          вода →
        </Link>
      </nav>
    </article>
  );
}
