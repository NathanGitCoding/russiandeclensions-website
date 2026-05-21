/**
 * Image de carte (vignette grille) pour chaque leçon / article de /learn et /blog.
 * Réutilise les visuels existants de /public/articles ; 4 photos Unsplash libres
 * de droit ont été téléchargées pour combler les manques.
 */

const FALLBACK = '/articles/russia-kremlin-moscow.webp';

const LEARN_CARD_IMAGES: Record<string, string> = {
  // Grammar lessons
  'russian-cases-complete-guide': '/articles/the-six-russian-cases-quick-reference.webp',
  'dative-case-declension': '/articles/free-russian-lesson-dative-case.webp',
  'russian-case-endings-cheatsheet': '/articles/russian-cases-endings-master-chart.webp',
  'russian-prepositions-and-cases': '/articles/russian-prepositions-case-grammar-reference.webp',
  'russian-genitive-case': '/articles/free-russian-lesson-genitive-case.webp',
  'russian-dative-case': '/articles/free-russian-lesson-dative-case.webp',
  'russian-prepositional-case': '/articles/free-russian-lesson-prepositional-case.webp',
  'russian-accusative-case': '/articles/free-russian-lesson-accusative-case.webp',
  'russian-instrumental-case': '/articles/free-russian-lesson-instrumental-case.webp',

  // Blog articles
  'top-10-apps-russian': '/articles/top-10-apps-to-learn-russian-2026.webp',
  'top-10-russian-case-mistakes':
    '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
  'how-to-practice-russian-cases': '/articles/how-to-practice-russian-cases.webp',
  'best-free-resources-learn-russian': '/articles/best-free-resources-learn-russian.webp',
  'russian-cases-explained-beginners-guide': '/articles/the-six-russian-cases-quick-reference.webp',
  'best-apps-learn-russian-grammar':
    '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.webp',
  'how-long-learn-russian': '/articles/how-long-learn-russian.webp',
  'torfl-trki-russian-language-exam-guide': '/articles/torfl-trki-russian-exam-guide.webp',
  'russian-prepositions-cases-cheat-sheet':
    '/articles/russian-prepositions-case-grammar-reference.webp',
  'russian-verbs-of-motion': '/articles/russian-verbs-of-motion-complete-guide.webp',
  'learn-russian-on-your-own': '/articles/learn-russian-on-your-own.webp',
};

export function getLearnCardImage(slug: string): string {
  return LEARN_CARD_IMAGES[slug] ?? FALLBACK;
}
