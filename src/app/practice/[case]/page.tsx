import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPracticeWords } from '@/lib/data';
import PracticeClient from '@/components/practice/PracticeClient';
import { PracticeFAQ } from '@/components/practice/PracticeFAQ';
import type { PracticeConfig } from '@/lib/practiceQuiz';
import { PRACTICE_CASE_SLUGS } from '@/lib/practiceCaseSlugs';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

interface CaseEndings {
  masculine: [string, string]; // [singular, plural]
  feminine: [string, string];
  neuter: [string, string];
}

interface CasePageData {
  slug: string;
  nameEn: string;
  nameRu: string;
  description: string;
  keywords: string;
  intro: string;
  endings: CaseEndings;
  examples: { word: string; form: string; sentence: string }[];
}

const CASE_PAGES: Record<string, CasePageData> = {
  nominative: {
    slug: 'nominative',
    nameEn: 'Nominative',
    nameRu: 'именительный',
    description:
      'Learn about the Russian nominative case (именительный падеж) — the dictionary form used for subjects. Understand its role and practice other cases with our free quiz.',
    keywords:
      'Russian nominative case, именительный падеж, Russian nominative endings, Russian subject case, Russian grammar nominative',
    intro:
      'The nominative case (именительный падеж) is the dictionary form of Russian nouns — the form you find in textbooks and dictionaries. It\'s used for the subject of a sentence: "Книга на столе" (The book is on the table). Since it\'s the base form, our quiz tests the other 5 cases against it.',
    endings: {
      masculine: ['— (consonant) / -ь', '-ы/-и/-а/-я'],
      feminine: ['-а/-я/-ь', '-ы/-и'],
      neuter: ['-о/-е/-мя', '-а/-я/-ена'],
    },
    examples: [
      { word: 'студент', form: 'студент', sentence: 'Студент читает (The student is reading)' },
      { word: 'книга', form: 'книга', sentence: 'Книга интересная (The book is interesting)' },
      { word: 'окно', form: 'окно', sentence: 'Окно открыто (The window is open)' },
    ],
  },
  accusative: {
    slug: 'accusative',
    nameEn: 'Accusative',
    nameRu: 'винительный',
    description:
      'Practice the Russian accusative case (винительный падеж) with a free interactive quiz. Master direct objects, motion verbs, and accusative noun endings across 400+ words.',
    keywords:
      'Russian accusative case, винительный падеж practice, Russian accusative quiz, accusative declension exercises',
    intro:
      'The accusative case (винительный падеж) is used for direct objects and with motion verbs in Russian. It\'s one of the first cases learners encounter and is essential for forming basic sentences like "I see the book" (Я вижу книгу).',
    endings: {
      masculine: ['-а/-я (animate), — (inanimate)', '-ов/-ей (animate), -ы/-и (inanimate)'],
      feminine: ['-у/-ю', '-ы/-и'],
      neuter: ['— (same as nom.)', '-а/-я'],
    },
    examples: [
      { word: 'книга', form: 'книгу', sentence: 'Я читаю книгу (I am reading a book)' },
      { word: 'студент', form: 'студента', sentence: 'Я вижу студента (I see the student)' },
      { word: 'письмо', form: 'письмо', sentence: 'Я пишу письмо (I am writing a letter)' },
    ],
  },
  genitive: {
    slug: 'genitive',
    nameEn: 'Genitive',
    nameRu: 'родительный',
    description:
      'Practice the Russian genitive case (родительный падеж) with a free interactive quiz. Master possession, quantities, negation, and genitive noun endings across 400+ words.',
    keywords:
      'Russian genitive case, родительный падеж practice, Russian genitive quiz, genitive declension exercises',
    intro:
      'The genitive case (родительный падеж) expresses possession, absence, quantities, and is used after many prepositions. It\'s one of the most common cases — you\'ll hear it in phrases like "a glass of water" (стакан воды) or "I don\'t have a book" (У меня нет книги).',
    endings: {
      masculine: ['-а/-я', '-ов/-ев/-ей'],
      feminine: ['-ы/-и', '— / -ей'],
      neuter: ['-а/-я', '— / -ей'],
    },
    examples: [
      { word: 'вода', form: 'воды', sentence: 'Стакан воды (A glass of water)' },
      { word: 'книга', form: 'книги', sentence: 'У меня нет книги (I don\'t have a book)' },
      { word: 'город', form: 'города', sentence: 'Центр города (City center)' },
    ],
  },
  dative: {
    slug: 'dative',
    nameEn: 'Dative',
    nameRu: 'дательный',
    description:
      'Practice the Russian dative case (дательный падеж) with a free interactive quiz. Master indirect objects, age expressions, and dative noun endings across 400+ words.',
    keywords:
      'Russian dative case, дательный падеж practice, Russian dative quiz, dative declension exercises',
    intro:
      'The dative case (дательный падеж) indicates the indirect object — the recipient of an action. It\'s used in common expressions like "I\'m 25 years old" (Мне 25 лет) and "Give the book to Anna" (Дай книгу Анне).',
    endings: {
      masculine: ['-у/-ю', '-ам/-ям'],
      feminine: ['-е/-и', '-ам/-ям'],
      neuter: ['-у/-ю', '-ам/-ям'],
    },
    examples: [
      { word: 'мама', form: 'маме', sentence: 'Я звоню маме (I am calling mom)' },
      { word: 'друг', form: 'другу', sentence: 'Дай книгу другу (Give the book to a friend)' },
      { word: 'море', form: 'морю', sentence: 'Идти к морю (To walk toward the sea)' },
    ],
  },
  instrumental: {
    slug: 'instrumental',
    nameEn: 'Instrumental',
    nameRu: 'творительный',
    description:
      'Practice the Russian instrumental case (творительный падеж) with a free interactive quiz. Master instruments, professions, companionship, and instrumental noun endings across 400+ words.',
    keywords:
      'Russian instrumental case, творительный падеж practice, Russian instrumental quiz, instrumental declension exercises',
    intro:
      'The instrumental case (творительный падеж) describes the means or instrument used to perform an action, as well as professions and companionship. You\'ll use it in phrases like "I write with a pen" (Я пишу ручкой) and "She works as a teacher" (Она работает учительницей).',
    endings: {
      masculine: ['-ом/-ем/-ём', '-ами/-ями'],
      feminine: ['-ой/-ей/-ёй', '-ами/-ями'],
      neuter: ['-ом/-ем/-ём', '-ами/-ями'],
    },
    examples: [
      { word: 'ручка', form: 'ручкой', sentence: 'Я пишу ручкой (I write with a pen)' },
      { word: 'нож', form: 'ножом', sentence: 'Режу ножом (I cut with a knife)' },
      { word: 'друг', form: 'другом', sentence: 'Я иду с другом (I go with a friend)' },
    ],
  },
  prepositional: {
    slug: 'prepositional',
    nameEn: 'Prepositional',
    nameRu: 'предложный',
    description:
      'Practice the Russian prepositional case (предложный падеж) with a free interactive quiz. Master locations, topics of conversation, and prepositional noun endings across 400+ words.',
    keywords:
      'Russian prepositional case, предложный падеж practice, Russian prepositional quiz, prepositional declension exercises',
    intro:
      'The prepositional case (предложный падеж) is always used with a preposition — most commonly "в" (in) and "о" (about). It expresses location and topics, as in "I live in Moscow" (Я живу в Москве) and "I\'m thinking about work" (Я думаю о работе).',
    endings: {
      masculine: ['-е/-и/-у', '-ах/-ях'],
      feminine: ['-е/-и', '-ах/-ях'],
      neuter: ['-е/-и', '-ах/-ях'],
    },
    examples: [
      { word: 'Москва', form: 'Москве', sentence: 'Я живу в Москве (I live in Moscow)' },
      { word: 'работа', form: 'работе', sentence: 'Я думаю о работе (I\'m thinking about work)' },
      { word: 'стол', form: 'столе', sentence: 'Книга на столе (The book is on the table)' },
    ],
  },
};

const CASE_PAGE_KEYS = Object.keys(CASE_PAGES);
{
  const fromPages = new Set(CASE_PAGE_KEYS);
  const fromSlugs = new Set(PRACTICE_CASE_SLUGS);
  const mismatch =
    fromPages.size !== fromSlugs.size || ![...fromSlugs].every((k) => fromPages.has(k));
  if (mismatch) {
    throw new Error(
      `practice CASE_PAGES keys must match PRACTICE_CASE_SLUGS (see src/lib/practiceCaseSlugs.ts).\n` +
        `CASE_PAGES: ${CASE_PAGE_KEYS.sort().join(', ')}\n` +
        `PRACTICE_CASE_SLUGS: ${[...PRACTICE_CASE_SLUGS].sort().join(', ')}`,
    );
  }
}

const VALID_CASES = CASE_PAGE_KEYS;

function makeCaseConfig(caseSlug: string): PracticeConfig {
  const cases: PracticeConfig['cases'] = {};
  for (const key of VALID_CASES) {
    const on = key === caseSlug;
    cases[key] = {
      enabled: on,
      sg: on,
      pl: on,
    };
  }
  return {
    cases,
    genders: { masculine: true, feminine: true, neuter: true },
  };
}

export function generateStaticParams() {
  return VALID_CASES.map((c) => ({ case: c }));
}

type PageProps = { params: Promise<{ case: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { case: caseSlug } = await params;
  const data = CASE_PAGES[caseSlug];
  if (!data) return {};

  return {
    title: `Practice Russian ${data.nameEn} Case Online — Free Quiz | Russian Cases with Anna`,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `/practice/${data.slug}`,
      languages: {
        'en': `/practice/${data.slug}`,
        'fr': `/practice/${data.slug}`,
        'de': `/practice/${data.slug}`,
        'pl': `/practice/${data.slug}`,
        'es': `/practice/${data.slug}`,
        'it': `/practice/${data.slug}`,
        'pt': `/practice/${data.slug}`,
        'nl': `/practice/${data.slug}`,
        'x-default': `/practice/${data.slug}`,
      },
    },
    openGraph: {
      url: `/practice/${data.slug}`,
      type: 'website',
      siteName: 'Russian Cases with Anna®',
      images: [
        {
          url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
          width: 1200,
          height: 1200,
          alt: `Practice Russian ${data.nameEn} Case`,
        },
      ],
    },
  };
}

export default async function CasePracticePage({ params }: PageProps) {
  const { case: caseSlug } = await params;
  const data = CASE_PAGES[caseSlug];
  if (!data) notFound();

  const words = await getPracticeWords();
  const initialConfig = makeCaseConfig(caseSlug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Practice', item: `${siteUrl}/practice` },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${data.nameEn} Case`,
          item: `${siteUrl}/practice/${data.slug}`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: `Practice Russian ${data.nameEn} Case (${data.nameRu} падеж)`,
      description: data.description,
      educationalLevel: 'Beginner to Intermediate',
      learningResourceType: 'Quiz',
      interactivityType: 'active',
      inLanguage: 'ru',
      url: `${siteUrl}/practice/${data.slug}`,
      isPartOf: {
        '@type': 'WebPage',
        name: 'Practice Russian Declensions Online',
        url: `${siteUrl}/practice`,
      },
      about: [
        { '@type': 'Thing', name: 'Russian language' },
        { '@type': 'Thing', name: `Russian ${data.nameEn.toLowerCase()} case` },
        { '@type': 'Thing', name: data.nameRu + ' падеж' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: `Russian ${data.nameEn} Case Quiz`,
      description: data.description,
      url: `${siteUrl}/practice/${data.slug}`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any (Web Browser)',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      {/* Server-rendered SEO content */}
      <section className="container mx-auto px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-2xl">
          <nav aria-label="breadcrumb" className="mb-4 text-center text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link href="/practice" className="transition-colors hover:text-blue-600">
              Practice
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600">{data.nameEn}</span>
          </nav>

          <h1 className="mb-3 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Practice Russian {data.nameEn} Case
          </h1>
          <p className="mb-6 text-center text-gray-600">{data.intro}</p>

          {/* Links to other cases */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {VALID_CASES.filter((c) => c !== caseSlug).map((c) => (
              <Link
                key={c}
                href={`/practice/${c}`}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
              >
                {CASE_PAGES[c].nameEn}
              </Link>
            ))}
            <Link
              href="/practice"
              className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-100"
            >
              All Cases
            </Link>
          </div>
        </div>
      </section>

      {caseSlug !== 'nominative' ? (
        <PracticeClient words={words} initialConfig={initialConfig} />
      ) : (
        /* Nominative is the base form — no quiz, but educational content + CTA */
        <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-lg rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
            <h2 className="mb-2 text-lg font-bold text-gray-800">
              Ready to Practice?
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              The nominative is the base form of Russian nouns. Our quiz tests your ability to
              transform nominative forms into the other 5 cases. Start practicing now!
            </p>
            <Link
              href="/practice"
              className="inline-block rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ background: '#0080FF' }}
            >
              Start the Quiz — All Cases
            </Link>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {VALID_CASES.filter((c) => c !== 'nominative').map((c) => (
                <Link
                  key={c}
                  href={`/practice/${c}`}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500 transition-colors hover:border-blue-400 hover:text-blue-700"
                >
                  {CASE_PAGES[c].nameEn}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Server-rendered SEO content: endings table + examples */}
      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">
            {data.nameEn} Case Endings ({data.nameRu} падеж)
          </h2>

          {/* Endings table */}
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Singular</th>
                  <th className="px-4 py-3">Plural</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(['masculine', 'feminine', 'neuter'] as const).map((gender) => (
                  <tr key={gender} className="text-gray-700">
                    <td className="px-4 py-2.5 font-medium capitalize">{gender}</td>
                    <td className="px-4 py-2.5 font-mono text-sm" lang="ru">
                      {data.endings[gender][0]}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-sm" lang="ru">
                      {data.endings[gender][1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Examples */}
          <h3 className="mb-3 text-base font-semibold text-gray-700">
            Examples
          </h3>
          <div className="space-y-2">
            {data.examples.map(({ word, form, sentence }, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-800">
                    <span className="font-medium" lang="ru">{word}</span>
                    <span className="mx-2 text-gray-400">&rarr;</span>
                    <span className="font-semibold text-blue-700" lang="ru">{form}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500" lang="ru">{sentence}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Want to explore complete declension tables?{' '}
            <Link href="/words" className="font-medium text-blue-600 hover:underline">
              Browse all 400+ Russian words
            </Link>{' '}
            or{' '}
            <Link href="/learn" className="font-medium text-blue-600 hover:underline">
              read our grammar lessons
            </Link>{' '}
            for in-depth explanations of the {data.nameEn.toLowerCase()} case and others.
          </p>
        </div>
      </section>

      <PracticeFAQ />
    </>
  );
}
