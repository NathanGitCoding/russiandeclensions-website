/**
 * Récupère les phrases d'exemple par cas pour les pages /russian-declension/[slug].
 * Source : data/sentences.json (généré par npm run export-db).
 * Une phrase par cas (celle avec l'ID le plus faible). Crochets [ ] supprimés des traductions.
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
  sentence_trad_es?: string;
  sentence_trad_it?: string;
  sentence_trad_pt?: string;
  sentence_trad_nl?: string;
};

/** Format : { [wordId]: { [caseKey]: { sentence_ru, ... } } } */
type SentencesData = Record<string, Record<string, SentenceByCase>>;

let cachedSentences: SentencesData | null = null;

function loadSentences(): SentencesData {
  if (cachedSentences) return cachedSentences;

  const dataPath = path.join(process.cwd(), 'data', 'sentences.json');
  if (!fs.existsSync(dataPath)) {
    return {};
  }

  const raw = fs.readFileSync(dataPath, 'utf-8');
  const parsed = JSON.parse(raw) as Record<string, Record<string, unknown>>;

  // Rétrocompatibilité : si une entrée est un tableau (ancien format), prendre le premier
  const result: SentencesData = {};
  for (const [wordId, cases] of Object.entries(parsed)) {
    if (!cases || typeof cases !== 'object') continue;
    result[wordId] = {};
    for (const [caseKey, value] of Object.entries(cases)) {
      result[wordId][caseKey] = Array.isArray(value) ? (value[0] as SentenceByCase) : (value as SentenceByCase);
    }
  }
  cachedSentences = result;
  return result;
}

/** Supprime les crochets [ ] des traductions. */
function stripBrackets(s: string): string {
  return s.replace(/\[|\]/g, '');
}

function getTranslation(row: SentenceByCase, lang: LandingLanguage): string {
  let text: string;
  switch (lang) {
    case 'fr_fr':
      text = row.sentence_trad_fr || row.sentence_en;
      break;
    case 'de_de':
      text = row.sentence_trad_de || row.sentence_en;
      break;
    case 'pl_pl':
      text = row.sentence_trad_pl || row.sentence_en;
      break;
    case 'tr_tr':
      text = row.sentence_trad_tr || row.sentence_en;
      break;
    case 'es_es':
      text = row.sentence_trad_es || row.sentence_en;
      break;
    case 'it_it':
      text = row.sentence_trad_it || row.sentence_en;
      break;
    case 'pt_pt':
      text = row.sentence_trad_pt || row.sentence_en;
      break;
    case 'nl_nl':
      text = row.sentence_trad_nl || row.sentence_en;
      break;
    case 'ru_ru':
    case 'en_en':
    default:
      text = row.sentence_en;
  }
  return stripBrackets(text);
}

/**
 * Récupère une phrase par cas pour un mot donné (ID le plus faible).
 * Clé = case key (nominative, accusative, etc.), valeur = { sentence_ru, translation }.
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
    if (!row) continue;
    result[caseKey] = {
      sentence_ru: row.sentence_ru,
      translation: getTranslation(row, lang),
    };
  }
  return result;
}
