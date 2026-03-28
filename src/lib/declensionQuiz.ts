/**
 * Declension quiz logic: generates 5 random questions from a word's declension forms.
 * Pure functions, no side effects, no persistence.
 */

import type { WordWithDeclensions } from './data';
import type { CaseConfigItem } from '@/data/website/wordPageTranslations';
import type { LandingLanguage } from '@/data/website/landingTranslations';
import { getWordTranslationForLandingLang } from './wordTranslationLanding';

// === TYPES ===

export interface DeclensionQuizQuestion {
  base_form: string;
  slug?: string;            // word slug for internal linking
  gender: string;
  caseKey: string;         // e.g. "accusative"
  numberKey: 'sg' | 'pl';  // singular or plural
  caseLabel: string;       // localized case name (e.g. "Accusative")
  numberLabel: string;     // localized "Singular" or "Plural"
  correctAnswer: string;   // the correct declined form
  allAnswers: { form: string; isCorrect: boolean }[];
  /** Base-form gloss in UI language (shown under the Russian lemma). */
  translationHint?: string;
}

export interface DeclensionQuizResult {
  questionIndex: number;
  base_form: string;
  slug?: string;            // word slug for internal linking
  caseLabel: string;
  numberLabel: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

// === UTILITIES ===

const ALL_COLUMNS = [
  'nominative_sg', 'nominative_pl',
  'accusative_sg', 'accusative_pl',
  'genitive_sg', 'genitive_pl',
  'dative_sg', 'dative_pl',
  'instrumental_sg', 'instrumental_pl',
  'prepositional_sg', 'prepositional_pl',
  'locative_sg', 'locative_pl',
] as const;

type DeclensionColumn = (typeof ALL_COLUMNS)[number];

export function parseCaseForm(column: string): { caseKey: string; number: 'sg' | 'pl' } {
  const lastUnderscore = column.lastIndexOf('_');
  return {
    caseKey: column.slice(0, lastUnderscore),
    number: column.slice(lastUnderscore + 1) as 'sg' | 'pl',
  };
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function getColumnValue(word: WordWithDeclensions, column: DeclensionColumn): string | null {
  const val = word[column];
  if (!val || val === '-' || val === '') return null;
  return val;
}

// === MAIN ===

export function generateDeclensionQuiz(
  word: WordWithDeclensions,
  cases: CaseConfigItem[],
  singularLabel: string,
  pluralLabel: string,
  userLang?: LandingLanguage,
): DeclensionQuizQuestion[] {
  const translationHint = userLang
    ? getWordTranslationForLandingLang(word, userLang)
    : undefined;
  // Build a case label map from translations
  const caseLabelMap: Record<string, string> = {};
  for (const c of cases) {
    caseLabelMap[c.key] = c.label;
  }

  // Filter valid columns (non-empty, non-'-')
  // Exclude locatives whose value equals the prepositional of the same number
  const validColumns = ALL_COLUMNS.filter((col) => {
    const value = getColumnValue(word, col);
    if (!value) return false;

    // Skip locative if identical to prepositional
    if (col === 'locative_sg' && value === getColumnValue(word, 'prepositional_sg')) return false;
    if (col === 'locative_pl' && value === getColumnValue(word, 'prepositional_pl')) return false;

    return true;
  });

  // Shuffle and take 5
  const selectedColumns = shuffleArray(validColumns).slice(0, 5);

  const questions: DeclensionQuizQuestion[] = [];

  for (const correctColumn of selectedColumns) {
    const correctAnswer = getColumnValue(word, correctColumn)!;
    const { caseKey, number } = parseCaseForm(correctColumn);

    // Generate wrong answers from other columns of the same word
    const wrongAnswers: string[] = [];
    const candidateColumns = shuffleArray(
      ALL_COLUMNS.filter((col) => col !== correctColumn)
    );

    for (const col of candidateColumns) {
      const value = getColumnValue(word, col);
      if (value && value !== correctAnswer && !wrongAnswers.includes(value)) {
        wrongAnswers.push(value);
        if (wrongAnswers.length >= 3) break;
      }
    }

    // Need at least 2 wrong answers for a valid question
    if (wrongAnswers.length < 2) continue;

    const allAnswers = shuffleArray([
      { form: correctAnswer, isCorrect: true },
      ...wrongAnswers.map((form) => ({ form, isCorrect: false })),
    ]);

    questions.push({
      base_form: word.base_form,
      gender: word.gender,
      caseKey,
      numberKey: number,
      caseLabel: caseLabelMap[caseKey] ?? caseKey,
      numberLabel: number === 'sg' ? singularLabel : pluralLabel,
      correctAnswer,
      allAnswers,
      translationHint: translationHint || undefined,
    });
  }

  return questions;
}
