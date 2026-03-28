/**
 * Slugs canoniques pour /practice/[case].
 * Doit rester identique aux clés de CASE_PAGES dans app/practice/[case]/page.tsx
 * (une assertion en dev échoue si les deux divergent).
 */
export const PRACTICE_CASE_SLUGS = [
  'nominative',
  'accusative',
  'genitive',
  'dative',
  'instrumental',
  'prepositional',
] as const;

export type PracticeCaseSlug = (typeof PRACTICE_CASE_SLUGS)[number];

export function getAllPracticeCaseSlugs(): string[] {
  return [...PRACTICE_CASE_SLUGS];
}
