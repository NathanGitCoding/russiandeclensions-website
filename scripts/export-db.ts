/**
 * Exporte toutes les données Supabase nécessaires au build vers data/words.json.
 * À exécuter manuellement après mise à jour des mots : npm run export-db
 *
 * Slugs SEO : translittération BGN/PCGN (книга → kniga), segment URL /russian-declension/
 *
 * Run: npx tsx scripts/export-db.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import { translate as transliterate, BGN_PCGN } from 'iuliia';
import type { WordWithDeclensions } from '../src/lib/words';
import { isIndeclinableWord } from '../src/lib/indeclinableWords';

/** Translittère base_form cyrillique en slug SEO (ex. книга → kniga) */
function slugifyCyrillic(baseForm: string): string {
  if (!baseForm || !baseForm.trim()) return '';
  const transliterated = transliterate(baseForm.trim(), BGN_PCGN);
  return transliterated
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || '';
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const OUTPUT_PATH = path.join(PROJECT_ROOT, 'data', 'words.json');
const SENTENCES_OUTPUT_PATH = path.join(PROJECT_ROOT, 'data', 'sentences.json');

// Chargement de .env.local
function loadEnvLocal(): void {
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('❌ Fichier .env.local introuvable. Créez-le avec NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eq = trimmed.indexOf('=');
      if (eq > 0) {
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        process.env[key] = value;
      }
    }
  }
}

loadEnvLocal();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Variables NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY requises dans .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface DbWord {
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
  Indeclinable?: string; // optionnel, on utilise indeclinableWords.ts
}

interface DbDeclension {
  word_id: number;
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

interface DbSentence {
  sentence_id: number;
  word_id: number;
  sentence_ru: string;
  sentence_en: string | null;
  correct_case_form: string | null;
}

interface DbSentenceTranslation {
  sentence_id: number;
  sentence_trad_fr: string | null;
  sentence_trad_de: string | null;
  sentence_trad_pl: string | null;
  sentence_trad_tr: string | null;
}

/** Extrait le cas (nominative, accusative, etc.) depuis correct_case_form */
function extractCaseKey(correctCaseForm: string | null): string {
  if (!correctCaseForm) return '';
  const underscore = correctCaseForm.indexOf('_');
  return underscore > 0 ? correctCaseForm.slice(0, underscore) : correctCaseForm;
}

/** Format de sortie : { [slug]: WordWithDeclensions, _legacy?: Record<string, string> } */
type WordsExport = Record<string, WordWithDeclensions | Record<string, string>>;

const BATCH_SIZE = 1000; // Limite Supabase par requête

async function exportWords(): Promise<WordsExport> {
  const words: DbWord[] = [];
  let offset = 0;
  let hasMore = true;

  // Pagination : récupérer TOUS les mots (Supabase limite à ~1000 par requête)
  while (hasMore) {
    const { data: batch, error: wordsError } = await supabase
      .from('a01_words')
      .select('*')
      .order('word_apparition_level', { ascending: true })
      .order('base_form', { ascending: true })
      .range(offset, offset + BATCH_SIZE - 1);

    if (wordsError) {
      console.error('❌ Erreur a01_words:', wordsError.message);
      process.exit(1);
    }

    const rows = (batch ?? []) as DbWord[];
    words.push(...rows);
    hasMore = rows.length === BATCH_SIZE;
    offset += BATCH_SIZE;
  }

  console.log(`   a01_words : ${words.length} mots récupérés`);

  const wordIds = words.map((w) => w.word_id);
  const declByWordId = new Map<number, DbDeclension>();

  // Pagination pour les déclinaisons : .in() peut être limité, on récupère par lots
  for (let i = 0; i < wordIds.length; i += BATCH_SIZE) {
    const batchIds = wordIds.slice(i, i + BATCH_SIZE);
    const { data: declData, error: declError } = await supabase
      .from('a02_declensions')
      .select('*')
      .in('word_id', batchIds);

    if (declError) {
      console.error('❌ Erreur a02_declensions:', declError.message);
      process.exit(1);
    }

    for (const d of (declData ?? []) as DbDeclension[]) {
      declByWordId.set(d.word_id, d);
    }
  }

  console.log(`   a02_declensions : ${declByWordId.size} déclinaisons chargées`);

  const bySlug: WordsExport = {};
  const legacySlugToSlug: Record<string, string> = {};
  const usedSlugs = new Set<string>();
  let skippedNoDecl = 0;

  for (const w of words) {
    const decl = declByWordId.get(w.word_id);
    if (!decl) {
      skippedNoDecl++;
      continue;
    }

    const existingSlug = w.slug && String(w.slug).trim();
    let slug: string;

    if (existingSlug && /^[a-z0-9-]+$/i.test(existingSlug)) {
      slug = existingSlug.toLowerCase();
    } else {
      const baseSlug = slugifyCyrillic(w.base_form) || `word-${w.word_id}`;
      slug = baseSlug;
      let suffix = 0;
      while (usedSlugs.has(slug)) {
        suffix++;
        slug = `${baseSlug}-${suffix}`;
      }
    }
    usedSlugs.add(slug);

    const legacySlug = `word-${w.word_id}`;
    if (legacySlug !== slug) {
      legacySlugToSlug[legacySlug] = slug;
    }
    if (existingSlug && existingSlug.toLowerCase() !== slug) {
      legacySlugToSlug[existingSlug.toLowerCase()] = slug;
    }

    const wordIsIndeclinable = isIndeclinableWord(w.base_form ?? '');
    const nominativeSg = (w.base_form ?? decl.nominative_sg ?? '') as string;

    const word: WordWithDeclensions = {
      word_id: w.word_id,
      base_form: w.base_form ?? '',
      slug,
      word_apparition_level: w.word_apparition_level ?? 0,
      translation_en: w.translation_en ?? '',
      translation_fr: w.translation_fr ?? '',
      translation_de: w.translation_de ?? '',
      translation_tr: w.translation_tr ?? '',
      translation_pl: w.translation_pl ?? '',
      gender: w.gender ?? '',
      type: w.type ?? '',
      plural_only: w.plural_only ?? 'Non',
      Indeclinable: wordIsIndeclinable ? 'Oui' : 'Non',
      nominative_sg: wordIsIndeclinable ? nominativeSg : (decl.nominative_sg ?? ''),
      nominative_pl: wordIsIndeclinable ? nominativeSg : (decl.nominative_pl ?? ''),
      accusative_sg: wordIsIndeclinable ? nominativeSg : (decl.accusative_sg ?? ''),
      accusative_pl: wordIsIndeclinable ? nominativeSg : (decl.accusative_pl ?? ''),
      genitive_sg: wordIsIndeclinable ? nominativeSg : (decl.genitive_sg ?? ''),
      genitive_pl: wordIsIndeclinable ? nominativeSg : (decl.genitive_pl ?? ''),
      dative_sg: wordIsIndeclinable ? nominativeSg : (decl.dative_sg ?? ''),
      dative_pl: wordIsIndeclinable ? nominativeSg : (decl.dative_pl ?? ''),
      instrumental_sg: wordIsIndeclinable ? nominativeSg : (decl.instrumental_sg ?? ''),
      instrumental_pl: wordIsIndeclinable ? nominativeSg : (decl.instrumental_pl ?? ''),
      prepositional_sg: wordIsIndeclinable ? nominativeSg : (decl.prepositional_sg ?? ''),
      prepositional_pl: wordIsIndeclinable ? nominativeSg : (decl.prepositional_pl ?? ''),
      locative_sg: wordIsIndeclinable ? nominativeSg : (decl.locative_sg ?? ''),
      locative_pl: wordIsIndeclinable ? nominativeSg : (decl.locative_pl ?? ''),
    };

    bySlug[slug] = word;
  }

  if (skippedNoDecl > 0) {
    console.log(`   ⚠ ${skippedNoDecl} mots ignorés (pas de déclinaison dans a02_declensions)`);
  }

  if (Object.keys(legacySlugToSlug).length > 0) {
    bySlug['_legacy'] = legacySlugToSlug;
  }

  return bySlug;
}

/** Format : { [wordId]: { [caseKey]: { sentence_ru, sentence_en, sentence_trad_fr, ... } } } */
type SentencesExport = Record<string, Record<string, { sentence_ru: string; sentence_en: string; sentence_trad_fr?: string; sentence_trad_de?: string; sentence_trad_pl?: string; sentence_trad_tr?: string }>>;

async function exportSentences(wordIds: number[]): Promise<SentencesExport> {
  if (wordIds.length === 0) return {};

  const result: SentencesExport = {};
  const byCase = new Map<number, Map<string, { sentence_id: number; sentence_ru: string; sentence_en: string; sentence_trad_fr?: string; sentence_trad_de?: string; sentence_trad_pl?: string; sentence_trad_tr?: string }>>();

  for (let i = 0; i < wordIds.length; i += BATCH_SIZE) {
    const batchIds = wordIds.slice(i, i + BATCH_SIZE);
    const { data: sentences, error: sErr } = await supabase
      .from('b01_sentences')
      .select('sentence_id, sentence_ru, sentence_en, correct_case_form, word_id')
      .in('word_id', batchIds);

    if (sErr) {
      console.error('❌ Erreur b01_sentences:', sErr.message);
      process.exit(1);
    }

    const rows = (sentences ?? []) as DbSentence[];
    const sentenceIds = [...new Set(rows.map((r) => r.sentence_id))];

    const { data: trans } = await supabase
      .from('b02_sentence_translations')
      .select('sentence_id, sentence_trad_fr, sentence_trad_de, sentence_trad_pl, sentence_trad_tr')
      .in('sentence_id', sentenceIds);

    const transMap = new Map<number, DbSentenceTranslation>();
    for (const t of (trans ?? []) as DbSentenceTranslation[]) {
      transMap.set(t.sentence_id, t);
    }

    for (const s of rows) {
      const caseKey = extractCaseKey(s.correct_case_form);
      if (!caseKey) continue;

      const t = transMap.get(s.sentence_id);
      const entry = {
        sentence_id: s.sentence_id,
        sentence_ru: s.sentence_ru ?? '',
        sentence_en: s.sentence_en ?? '',
        sentence_trad_fr: t?.sentence_trad_fr ?? undefined,
        sentence_trad_de: t?.sentence_trad_de ?? undefined,
        sentence_trad_pl: t?.sentence_trad_pl ?? undefined,
        sentence_trad_tr: t?.sentence_trad_tr ?? undefined,
      };

      let wordMap = byCase.get(s.word_id);
      if (!wordMap) {
        wordMap = new Map();
        byCase.set(s.word_id, wordMap);
      }
      const existing = wordMap.get(caseKey);
      if (!existing || s.sentence_id < existing.sentence_id) {
        wordMap.set(caseKey, entry);
      }
    }
  }

  for (const [wordId, wordMap] of byCase.entries()) {
    const cases: Record<string, { sentence_ru: string; sentence_en: string; sentence_trad_fr?: string; sentence_trad_de?: string; sentence_trad_pl?: string; sentence_trad_tr?: string }> = {};
    for (const [caseKey, v] of wordMap.entries()) {
      const { sentence_id: _sid, ...rest } = v;
      cases[caseKey] = rest;
    }
    result[String(wordId)] = cases;
  }

  return result;
}

async function main(): Promise<void> {
  console.log('📥 Export Supabase → data/words.json + data/sentences.json...');

  const exportData = await exportWords();
  const legacyCount = '_legacy' in exportData ? Object.keys(exportData['_legacy'] as Record<string, string>).length : 0;
  const wordCount = Object.keys(exportData).length - (legacyCount > 0 ? 1 : 0);

  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(exportData, null, 0), 'utf-8');
  console.log(`   ✅ data/words.json : ${wordCount} mots, ${legacyCount} redirections legacy`);

  const wordIds = (Object.values(exportData) as WordWithDeclensions[])
    .filter((w): w is WordWithDeclensions => w && typeof w === 'object' && 'word_id' in w)
    .map((w) => w.word_id);

  console.log('📥 Export phrases exemples...');
  const sentencesData = await exportSentences(wordIds);
  const sentenceWordCount = Object.keys(sentencesData).length;
  fs.writeFileSync(SENTENCES_OUTPUT_PATH, JSON.stringify(sentencesData, null, 0), 'utf-8');
  console.log(`   ✅ data/sentences.json : ${sentenceWordCount} mots avec phrases`);

  console.log('✅ Export terminé.');
}

main();
