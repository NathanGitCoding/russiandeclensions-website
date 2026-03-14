/**
 * API mots : lecture depuis data/words.json (généré par npm run export-db).
 * Réexporte les fonctions et types de data.ts pour garder la compatibilité des imports.
 */

export {
  getWordBySlug,
  getAllSlugs,
  getAllSlugsWithBaseForm,
  getWords,
  getCyrillicLetters,
  getLegacyRedirect,
  getRelatedWords,
  isIndeclinable,
  type WordWithDeclensions,
  type WordListItem,
  type GetWordsResult,
} from './data';
