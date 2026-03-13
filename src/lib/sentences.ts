/**
 * Récupère les phrases d'exemple par cas pour les pages /russian-declension/[slug].
 * Source : data/sentences.json (généré par npm run export-db).
 * Pour chaque combo (word_id, cas), une phrase par cas est stockée avec toutes les traductions.
 */

import fs from 'fs';
import path from 'path';
import type { LandingLanguage } from '@/data/website/landingTranslations';

export interface ExampleSentence {
  sentence_ru: string;
  translation: string;
}

type SentenceByCase = {
  sentence_ru: string;
  sentence_en: string;
  sentence_trad_fr?: string;
  sentence_trad_de?: string;
  sentence_trad_pl?: string;
  sentence_trad_tr?: string;
};

type SentencesData = Record<string, Record<string, SentenceByCase>>;

let cachedSentences: SentencesData | null = null;

function loadSentences(): SentencesData {
  if (cachedSentences) return cachedSentences;

  const dataPath = path.join(process.cwd(), 'data', 'sentences.json');
  if (!fs.existsSync(dataPath)) {
    return {};
  }

  const raw = fs.readFileSync(dataPath, 'utf-8');
  cachedSentences = JSON.parse(raw) as SentencesData;
  return cachedSentences ?? {};
}

function getTranslation(row: SentenceByCase, lang: LandingLanguage): string {
  switch (lang) {
    case 'fr_fr':
      return row.sentence_trad_fr || row.sentence_en;
    case 'de_de':
      return row.sentence_trad_de || row.sentence_en;
    case 'pl_pl':
      return row.sentence_trad_pl || row.sentence_en;
    case 'tr_tr':
      return row.sentence_trad_tr || row.sentence_en;
    case 'ru_ru':
    case 'en_en':
    default:
      return row.sentence_en;
  }
}

/**
 * Récupère une phrase par cas pour un mot donné.
 * Clé = case key (nominative, accusative, etc.), valeur = { sentence_ru, translation }.
 * Lit depuis data/sentences.json (généré par npm run export-db).
 */
export async function getExampleSentencesForWord(
  wordId: number,
  lang: LandingLanguage
): Promise<Record<string, ExampleSentence>> {
  const data = loadSentences();
  const wordData = data[String(wordId)];
  if (!wordData) return {};

  const result: Record<string, ExampleSentence> = {};
  for (const [caseKey, row] of Object.entries(wordData)) {
    result[caseKey] = {
      sentence_ru: row.sentence_ru,
      translation: getTranslation(row, lang),
    };
  }
  return result;
}
