import Link from 'next/link';
import { getPracticeWords } from '@/lib/data';
import PracticeClient from '@/components/practice/PracticeClient';
import { PracticeFAQ } from '@/components/practice/PracticeFAQ';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getPracticeTranslations } from '@/data/website/practicePageTranslations';
import type { LandingLanguage } from '@/data/website/landingTranslations';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const CASE_SLUGS = [
  'nominative',
  'accusative',
  'genitive',
  'dative',
  'instrumental',
  'prepositional',
] as const;

/** Nom russe du cas (référence pédagogique, inchangé quelle que soit la langue UI) */
const RU_CASE_NAMES: Record<(typeof CASE_SLUGS)[number], string> = {
  nominative: 'именительный',
  accusative: 'винительный',
  genitive: 'родительный',
  dative: 'дательный',
  instrumental: 'творительный',
  prepositional: 'предложный',
};

const LANG_TO_BCP47: Record<LandingLanguage, string> = {
  en_en: 'en',
  fr_fr: 'fr',
  de_de: 'de',
  pl_pl: 'pl',
  tr_tr: 'tr',
  es_es: 'es',
  it_it: 'it',
  pt_pt: 'pt',
  nl_nl: 'nl',
  ru_ru: 'ru',
};

export default async function PracticePage() {
  const words = await getPracticeWords();
  const lang = await getLandingLangFromRequest();
  const t = getPracticeTranslations(lang);
  const locale = LANG_TO_BCP47[lang];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: t.breadcrumb.home,
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: t.breadcrumb.practice,
          item: `${siteUrl}/practice`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: t.metadata.title,
      description: t.metadata.description,
      educationalLevel: 'Beginner to Intermediate',
      learningResourceType: 'Quiz',
      interactivityType: 'active',
      inLanguage: 'ru',
      url: `${siteUrl}/practice`,
      provider: {
        '@type': 'Organization',
        name: 'Russian Cases with Anna',
        url: siteUrl,
      },
      about: [
        { '@type': 'Thing', name: 'Russian language' },
        { '@type': 'Thing', name: 'Russian noun declension' },
        { '@type': 'Thing', name: 'Russian grammatical cases' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t.metadata.title,
      description: t.metadata.description,
      inLanguage: locale,
      url: `${siteUrl}/practice`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Russian Cases with Anna',
        url: siteUrl,
      },
      mainEntity: {
        '@type': 'LearningResource',
        name: t.h1,
        learningResourceType: 'Quiz',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: t.breadcrumb.practice,
            item: `${siteUrl}/practice`,
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: t.h1,
      description: t.metadata.description,
      url: `${siteUrl}/practice`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any (Web Browser)',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      inLanguage: ['en', 'ru', 'fr', 'de', 'pl', 'tr', 'es', 'it', 'pt', 'nl'],
      browserRequirements: 'Requires JavaScript',
      provider: {
        '@type': 'Organization',
        name: 'Russian Cases with Anna',
        url: siteUrl,
      },
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

      <section className="container mx-auto px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-2xl text-center">
          <nav aria-label={t.breadcrumbAria} className="mb-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              {t.breadcrumb.home}
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-gray-600">{t.breadcrumb.practice}</span>
          </nav>
        </div>
      </section>

      <PracticeClient words={words} />

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl">{t.seo.whyTitle}</h2>
          <div className="space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
            <p>{t.seo.introP1}</p>
            <p>{t.seo.introP2}</p>
            <p>{t.seo.introP3}</p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-base font-semibold text-gray-700">{t.seo.howItWorksTitle}</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {t.seo.howItWorksSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-gray-200 p-4 text-center"
                >
                  <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {String(index + 1)}
                  </span>
                  <h4 className="mb-1 text-sm font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-base font-semibold text-gray-700">{t.seo.practiceByCaseTitle}</h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {CASE_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`/practice/${slug}`}
                  className="flex flex-col items-center rounded-xl border border-gray-200 px-3 py-3 text-center transition-colors hover:border-blue-400 hover:bg-blue-50"
                >
                  <span className="text-sm font-semibold text-gray-800">
                    {t.config.cases[slug]}
                  </span>
                  <span className="text-xs text-gray-400" lang="ru">
                    {RU_CASE_NAMES[slug]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base">
            {t.seo.footerIntro}
            <Link href="/words" className="font-medium text-blue-600 hover:underline">
              {t.seo.footerWordsLink}
            </Link>
            {t.seo.footerMid}
            <Link href="/learn" className="font-medium text-blue-600 hover:underline">
              {t.seo.footerLessonsLink}
            </Link>
            {t.seo.footerOutro}
          </p>
        </div>
      </section>

      <PracticeFAQ />
    </>
  );
}
