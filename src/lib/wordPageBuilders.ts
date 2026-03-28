import type { WordPageTranslations } from '@/data/website/wordPageTranslations';
import type { WordWithDeclensions } from '@/lib/words';

/** Liens vers les articles Learn pour chaque cas (hors nominatif) */
export const WORD_CASE_ARTICLE_SLUGS = [
  { slug: 'russian-accusative-case', key: 'accusative' },
  { slug: 'russian-genitive-case', key: 'genitive' },
  { slug: 'russian-dative-case', key: 'dative' },
  { slug: 'russian-instrumental-case', key: 'instrumental' },
  { slug: 'russian-prepositional-case', key: 'prepositional' },
] as const;

export function buildWordCaseConfig(word: WordWithDeclensions, t: WordPageTranslations) {
  return t.cases.map((c) => {
    const sgKey = `${c.key}_sg` as keyof WordWithDeclensions;
    const plKey = `${c.key}_pl` as keyof WordWithDeclensions;
    return {
      ...c,
      sg: (word[sgKey] as string) ?? '',
      pl: (word[plKey] as string) ?? '',
      isBase: c.key === 'nominative',
    };
  });
}

export function buildWordCaseArticleLinks(t: WordPageTranslations) {
  return WORD_CASE_ARTICLE_SLUGS.map(({ slug, key }) => ({
    slug,
    label: t.cases.find((c) => c.key === key)?.label ?? key,
  }));
}

export function getWordDeclensionOrdinal(word: WordWithDeclensions, wt: WordPageTranslations): string {
  if (word.gender === 'feminine' && word.base_form?.endsWith('ь')) return wt.declensionOrdinals.third;
  if (word.gender === 'feminine') return wt.declensionOrdinals.first;
  return wt.declensionOrdinals.second;
}

export function getWordLevelLabel(level: number, wt: WordPageTranslations): string {
  if (level <= 1) return wt.levelLabels.beginners;
  if (level === 2) return wt.levelLabels.intermediate;
  return wt.levelLabels.advanced;
}

export function buildWordFaqItems(
  word: WordWithDeclensions,
  t: WordPageTranslations,
  translation: string,
  genderLabel: string,
  wordIsIndeclinable: boolean
) {
  const caseConfig = buildWordCaseConfig(word, t);
  return [
    {
      question: t.faq.howToTranslate(translation),
      answer: t.faq.translateAnswer(translation, word.base_form, word.slug),
    },
    {
      question: t.faq.whatIsMeaning(word.base_form),
      answer: t.faq.meaningAnswer(word.base_form, translation, genderLabel),
    },
    ...caseConfig.map((row) => ({
      question: t.faq.whatIsCaseOf(row.label, word.base_form),
      answer: t.faq.caseAnswer(row.label, word.base_form, row.sg, row.pl),
    })),
    {
      question: t.faq.isMasculineOrFeminine(word.base_form),
      answer: t.faq.genderAnswer(word.base_form, genderLabel),
    },
    ...(wordIsIndeclinable
      ? [
          {
            question: t.faq.isRegularOrIrregular(word.base_form),
            answer: t.faq.indeclinableAnswer(word.base_form),
          },
        ]
      : []),
  ];
}
