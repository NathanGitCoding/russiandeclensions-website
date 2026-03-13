/**
 * Couche d'accès aux données mots : lit depuis data/words.json (généré par npm run export-db).
 * Utilisé uniquement côté serveur au build et au runtime serveur.
 */

import fs from 'fs';
import path from 'path';
import { isIndeclinableWord } from './indeclinableWords';

/** word_id exclus : aucune page /russian-declension/[slug] n'est générée pour ces mots */
const EXCLUDED_WORD_IDS = new Set([
  19, 20, 21, 22, 23, 24, 25, 26,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2011, 2012, 2013,
  3000, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009,
  3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017,
]);

export interface WordWithDeclensions {
  word_id: number;
  base_form: string;
  slug: string;
  word_apparition_level: number;
  translation_en: string;
  translation_fr: string;
  translation_de: string;
  translation_tr: string;
  translation_pl: string;
  gender: string;
  type: string;
  plural_only: string;
  Indeclinable: string;
  nominative_sg: string;
  nominative_pl: string;
  accusative_sg: string;
  accusative_pl: string;
  genitive_sg: string;
  genitive_pl: string;
  dative_sg: string;
  dative_pl: string;
  instrumental_sg: string;
  instrumental_pl: string;
  prepositional_sg: string;
  prepositional_pl: string;
  locative_sg: string;
  locative_pl: string;
}

export interface WordListItem {
  word_id: number;
  base_form: string;
  slug: string;
  translation_en: string;
  translation_fr: string;
  translation_de: string;
  translation_tr: string;
  translation_pl: string;
  gender: string;
  type: string;
  word_apparition_level: number;
}

export interface GetWordsResult {
  words: WordListItem[];
  total: number;
}

type WordsBySlug = Record<string, WordWithDeclensions>;

const WORDS_PER_PAGE = 50;
const LEGACY_KEY = '_legacy';

let cachedData: WordsBySlug | null = null;
let cachedLegacy: Record<string, string> | null = null;

function getDataPath(): string {
  return path.join(process.cwd(), 'data', 'words.json');
}

function loadWords(): WordsBySlug {
  if (cachedData) return cachedData;

  const dataPath = getDataPath();
  if (!fs.existsSync(dataPath)) {
    console.warn(
      `⚠️ data/words.json introuvable. Lancez "npm run export-db" pour générer le fichier.`
    );
    return {};
  }

  const raw = fs.readFileSync(dataPath, 'utf-8');
  const parsed = JSON.parse(raw) as Record<string, unknown>;
  const legacy = parsed[LEGACY_KEY];
  if (legacy && typeof legacy === 'object' && !Array.isArray(legacy)) {
    cachedLegacy = legacy as Record<string, string>;
  }
  const { [LEGACY_KEY]: _, ...words } = parsed;
  cachedData = words as WordsBySlug;
  return cachedData;
}

/**
 * Retourne le slug canonique si le slug donné est un ancien slug (ex. word-16 → aleksandr).
 * Utilisé pour les redirections 301 /words/word-16 → /russian-declension/aleksandr
 */
export function getLegacyRedirect(slug: string): string | null {
  loadWords();
  return cachedLegacy?.[slug] ?? null;
}

/** Clés des formes de déclinaison (sg/pl par cas) */
const DECLENSION_KEYS = [
  'nominative_sg', 'nominative_pl', 'accusative_sg', 'accusative_pl',
  'genitive_sg', 'genitive_pl', 'dative_sg', 'dative_pl',
  'instrumental_sg', 'instrumental_pl', 'prepositional_sg', 'prepositional_pl',
  'locative_sg', 'locative_pl',
] as const;

/** Vérifie si un mot est indéclinable (base_form dans la liste du site) */
export function isIndeclinable(word: WordWithDeclensions): boolean {
  return isIndeclinableWord(word.base_form ?? '');
}

/**
 * Récupère un mot par son slug. Accès O(1).
 * Retourne null pour les mots exclus (EXCLUDED_WORD_IDS).
 * Pour les mots indéclinables (liste dans indeclinableWords.ts), la table affiche le nominatif singulier partout.
 */
export async function getWordBySlug(slug: string): Promise<WordWithDeclensions | null> {
  const data = loadWords();
  const raw = data[slug] ?? null;
  if (!raw || EXCLUDED_WORD_IDS.has(raw.word_id)) return null;

  if (isIndeclinable(raw)) {
    const nominativeSg = raw.base_form ?? raw.nominative_sg ?? '';
    return {
      ...raw,
      ...Object.fromEntries(DECLENSION_KEYS.map((k) => [k, nominativeSg])),
    } as WordWithDeclensions;
  }

  return raw;
}

/**
 * Retourne tous les slugs. Pour compatibilité.
 * Exclut les mots dont word_id est dans EXCLUDED_WORD_IDS.
 */
export async function getAllSlugs(): Promise<string[]> {
  const data = loadWords();
  return Object.entries(data)
    .filter(([slug, w]) => slug && !EXCLUDED_WORD_IDS.has(w.word_id))
    .map(([slug]) => slug);
}

/**
 * Retourne tous les slugs avec base_form, triés (par level puis base_form comme à l'export).
 * Exclut les mots dont word_id est dans EXCLUDED_WORD_IDS.
 */
export async function getAllSlugsWithBaseForm(): Promise<{ slug: string; base_form: string }[]> {
  const data = loadWords();
  return Object.entries(data)
    .filter(([slug, w]) => slug && !EXCLUDED_WORD_IDS.has(w.word_id))
    .map(([slug, w]) => ({ slug, base_form: w.base_form ?? slug }));
}

/**
 * Liste des mots avec filtres et pagination. Filtrage en mémoire.
 * Le paramètre q filtre par base_form ou traductions (recherche partielle insensible à la casse).
 */
export async function getWords({
  letter,
  level,
  page = 1,
  q,
}: {
  letter?: string;
  level?: number;
  page?: number;
  q?: string;
}): Promise<GetWordsResult> {
  const data = loadWords();
  let items = Object.values(data).filter((w) => !EXCLUDED_WORD_IDS.has(w.word_id));

  if (q && q.trim().length > 0) {
    const term = q.trim().toLowerCase();
    items = items.filter(
      (w) =>
        (w.base_form ?? '').toLowerCase().includes(term) ||
        (w.translation_en ?? '').toLowerCase().includes(term) ||
        (w.translation_fr ?? '').toLowerCase().includes(term) ||
        (w.translation_de ?? '').toLowerCase().includes(term) ||
        (w.translation_tr ?? '').toLowerCase().includes(term) ||
        (w.translation_pl ?? '').toLowerCase().includes(term)
    );
  }

  if (letter && letter.length > 0) {
    items = items.filter((w) => w.base_form.toLowerCase().startsWith(letter.toLowerCase()));
  }

  if (level !== undefined && level !== null) {
    if (level === 3) {
      items = items.filter((w) => w.word_apparition_level >= 3);
    } else {
      items = items.filter((w) => w.word_apparition_level === level);
    }
  }

  items.sort((a, b) => a.word_id - b.word_id);

  const total = items.length;
  const pageNum = Math.max(1, page ?? 1);
  const from = (pageNum - 1) * WORDS_PER_PAGE;
  const slice = items.slice(from, from + WORDS_PER_PAGE);

  const words: WordListItem[] = slice.map((w) => ({
    word_id: w.word_id,
    base_form: w.base_form ?? '',
    slug: w.slug ?? '',
    translation_en: w.translation_en ?? '',
    translation_fr: w.translation_fr ?? '',
    translation_de: w.translation_de ?? '',
    translation_tr: w.translation_tr ?? '',
    translation_pl: w.translation_pl ?? '',
    gender: w.gender ?? '',
    type: w.type ?? '',
    word_apparition_level: w.word_apparition_level ?? 0,
  }));

  return { words, total };
}

/**
 * Lettres cyrilliques distinctes, triées.
 * Exclut les mots dont word_id est dans EXCLUDED_WORD_IDS.
 */
export async function getCyrillicLetters(): Promise<string[]> {
  const data = loadWords();
  const letters = new Set<string>();
  for (const w of Object.values(data)) {
    if (EXCLUDED_WORD_IDS.has(w.word_id)) continue;
    if (w.base_form && w.base_form.length > 0) {
      letters.add(w.base_form.charAt(0).toUpperCase());
    }
  }
  return Array.from(letters).sort();
}
