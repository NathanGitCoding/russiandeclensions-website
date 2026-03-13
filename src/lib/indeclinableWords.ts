/**
 * Liste des mots russes indéclinables (source unique pour le site).
 * Utilisée pour afficher la vue simplifiée (sans tableau de déclinaison complet).
 */

/** Mots d'emprunt étrangers + toponymes étrangers indéclinables */
const INDECLINABLE_BASE_FORMS = [
  'кафе',
  'метро',
  'такси',
  'кино',
  'радио',
  'какао',
  'кофе',
  'меню',
  'жюри',
  'шоу',
  'фото',
  'евро',
  'Хельсинки',
  'Сочи',
  'Токио',
] as const;

const INDECLINABLE_SET = new Set<string>(INDECLINABLE_BASE_FORMS);

export function isIndeclinableWord(baseForm: string): boolean {
  return baseForm ? INDECLINABLE_SET.has(baseForm.trim()) : false;
}
