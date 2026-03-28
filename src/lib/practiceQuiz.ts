/**
 * Practice quiz: generates 10 MCQ questions from a pool of words.
 * Wrong answers are other declensions of the same word (same slug / word row).
 */

import type { PracticeWord } from './data';
import type { DeclensionQuizQuestion } from './declensionQuiz';
import type { LandingLanguage } from '@/data/website/landingTranslations';
import { getWordTranslationForLandingLang } from './wordTranslationLanding';

export interface PracticeConfig {
  cases: Record<string, { enabled: boolean; sg: boolean; pl: boolean }>;
  genders: { masculine: boolean; feminine: boolean; neuter: boolean };
}

type DeclColumn = Exclude<
  keyof PracticeWord,
  | 'base_form'
  | 'slug'
  | 'gender'
  | 'translation_en'
  | 'translation_fr'
  | 'translation_de'
  | 'translation_tr'
  | 'translation_pl'
  | 'translation_es'
  | 'translation_it'
  | 'translation_pt'
  | 'translation_nl'
>;

const ALL_DECL_COLUMNS: DeclColumn[] = [
  'nominative_sg',
  'nominative_pl',
  'accusative_sg',
  'accusative_pl',
  'genitive_sg',
  'genitive_pl',
  'dative_sg',
  'dative_pl',
  'instrumental_sg',
  'instrumental_pl',
  'prepositional_sg',
  'prepositional_pl',
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function getVal(word: PracticeWord, col: DeclColumn): string | null {
  const v = word[col];
  if (!v || v === '-' || v === '') return null;
  return v;
}

export function generatePracticeQuiz(
  words: PracticeWord[],
  config: PracticeConfig,
  caseLabels: Record<string, string>,
  singularLabel: string,
  pluralLabel: string,
  userLang: LandingLanguage,
): DeclensionQuizQuestion[] {
  // 1. Filter by selected genders
  const genderFilter = new Set<string>();
  if (config.genders.masculine) genderFilter.add('masculine');
  if (config.genders.feminine) genderFilter.add('feminine');
  if (config.genders.neuter) genderFilter.add('neuter');
  const pool = words.filter((w) => genderFilter.has(w.gender));

  if (pool.length === 0) return [];

  // 2. Build target columns
  const targetColumns: DeclColumn[] = [];
  for (const [caseKey, cfg] of Object.entries(config.cases)) {
    if (!cfg.sg && !cfg.pl) continue;
    if (cfg.sg) targetColumns.push(`${caseKey}_sg` as DeclColumn);
    if (cfg.pl) targetColumns.push(`${caseKey}_pl` as DeclColumn);
  }

  if (targetColumns.length === 0) return [];

  // 3. Generate 10 questions
  const questions: DeclensionQuizQuestion[] = [];
  const used = new Set<string>(); // "slug|column" to avoid duplicates

  for (let attempt = 0; attempt < 50 && questions.length < 10; attempt++) {
    const col = targetColumns[Math.floor(Math.random() * targetColumns.length)]!;
    const shuffled = shuffleArray(pool);
    const word = shuffled.find((w) => {
      const key = `${w.slug}|${col}`;
      return !used.has(key) && getVal(w, col) !== null;
    });

    if (!word) continue;

    const correctAnswer = getVal(word, col)!;
    used.add(`${word.slug}|${col}`);

    // Wrong answers: other case/number columns for this same word
    const wrongCandidates: string[] = [];
    for (const c of ALL_DECL_COLUMNS) {
      if (c === col) continue;
      const v = getVal(word, c);
      if (v && v !== correctAnswer && !wrongCandidates.includes(v)) {
        wrongCandidates.push(v);
      }
    }
    const wrongAnswers = shuffleArray(wrongCandidates).slice(0, 3);

    if (wrongAnswers.length < 3) continue;

    // Parse case key and number from column name
    const lastUnderscore = col.lastIndexOf('_');
    const caseKey = col.slice(0, lastUnderscore);
    const numberKey = col.slice(lastUnderscore + 1) as 'sg' | 'pl';

    const allAnswers = shuffleArray([
      { form: correctAnswer, isCorrect: true },
      ...wrongAnswers.map((form) => ({ form, isCorrect: false })),
    ]);

    const gloss = getWordTranslationForLandingLang(word, userLang);

    questions.push({
      base_form: word.base_form,
      slug: word.slug,
      gender: word.gender,
      caseKey,
      numberKey,
      caseLabel: caseLabels[caseKey] ?? caseKey,
      numberLabel: numberKey === 'sg' ? singularLabel : pluralLabel,
      correctAnswer,
      allAnswers,
      translationHint: gloss || undefined,
    });
  }

  return questions;
}
