/**
 * Images Open Graph exportées sous `public/` (même source que `opengraph-image.tsx`).
 * `relativeToPublic` = chemin sans slash initial (ex. articles/og/foo.webp).
 */
export type LearnArticleStaticOgEntry = {
  relativeToPublic: string;
  width: number;
  height: number;
};

export const LEARN_ARTICLE_STATIC_OG: Record<string, LearnArticleStaticOgEntry> = {
  'top-10-apps-russian': {
    relativeToPublic: 'articles/og/top-10-apps-russian-opengraph.webp',
    width: 1200,
    height: 630,
  },
};

/** Fragment `Article` JSON-LD (image + auteur) — même URL pour toutes les langues. */
export const TOP_10_APPS_RUSSIAN_ARTICLE_JSONLD_EXTRAS = {
  image: {
    '@type': 'ImageObject',
    url: 'https://russiandeclensions.com/articles/og/top-10-apps-russian-opengraph.webp',
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Person',
    name: 'Nathan',
    url: 'https://russiandeclensions.com/',
    image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
    description:
      'Native French speaker learning Russian; writes about grammar, Russian cases, and practical study habits.',
    worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
  },
} as const;
