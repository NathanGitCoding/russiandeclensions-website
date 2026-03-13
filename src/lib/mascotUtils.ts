/**
 * Utilitaire pour gérer l'affichage aléatoire de variantes de mascottes
 */

export type MascotType =
  | 'welcome'
  | 'echec'
  | 'reussite'
  | 'loading'
  | 'une-etoile'
  | 'deux-etoiles'
  | 'trois-etoiles'
  | 'ask-review'
  | 'error';

interface MascotConfig {
  baseName: string;
  basePath: string;
}

/**
 * Configuration des différents types de mascottes
 * Avec liste des variantes disponibles (numéros réels des fichiers)
 */
const MASCOT_CONFIGS: Record<MascotType, MascotConfig & { availableVariants: number[] }> = {
  welcome: {
    baseName: 'mascotte_welcome',
    basePath: '/Mascotte/mascotte_welcome',
    availableVariants: [], // Seule la version de base existe, pas de numéros
  },
  echec: {
    baseName: 'mascotte-echec',
    basePath: '/Mascotte/mascotte-echec',
    availableVariants: [1, 4, 5, 6, 7, 8, 9], // echec-1, echec-4, echec-5, echec-6, echec-7, echec-8, echec-9
  },
  reussite: {
    baseName: 'mascotte-reussite',
    basePath: '/Mascotte/mascotte-reussite',
    availableVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], // reussite-2 à reussite-13
  },
  loading: {
    baseName: 'mascotte-loading',
    basePath: '/Mascotte/mascotte-loading',
    availableVariants: [], // Seule la version de base existe
  },
  'une-etoile': {
    baseName: 'mascotte-une-etoile',
    basePath: '/Mascotte/mascotte-une-etoile',
    availableVariants: [1, 2, 3, 4, 5, 6], // une-etoile-1, une-etoile-2, une-etoile-3, une-etoile-4, une-etoile-5, une-etoile-6
  },
  'deux-etoiles': {
    baseName: 'mascotte-deux-etoiles',
    basePath: '/Mascotte/mascotte-deux-etoiles',
    availableVariants: [1, 2], // deux-etoiles-1, deux-etoiles-2
  },
  'trois-etoiles': {
    baseName: 'mascotte-trois-etoiles',
    basePath: '/Mascotte/mascotte-trois-etoiles',
    availableVariants: [1, 2, 3, 4], // trois-etoiles-1, trois-etoiles-2, trois-etoiles-3, trois-etoiles-4
  },
  'ask-review': {
    baseName: 'mascotte-ask-review',
    basePath: '/Mascotte/mascotte-ask-review',
    availableVariants: [], // Seule la version de base existe
  },
  error: {
    baseName: 'mascotte-error',
    basePath: '/Mascotte/mascotte-error',
    availableVariants: [], // Seule la version de base existe
  },
};

/**
 * Génère le chemin d'une mascotte avec une variante
 * @param basePath - Le chemin de base (ex: "/Mascotte/mascotte_welcome")
 * @param variant - Le numéro de variante (1, 2, 3, etc.)
 * @returns Le chemin complet avec le numéro de variante
 */
function getVariantPath(basePath: string, variant: number): string {
  return `${basePath}-${variant}.webp`;
}

/**
 * Génère le chemin par défaut sans variante (pour la compatibilité)
 * @param basePath - Le chemin de base
 * @returns Le chemin par défaut sans numéro
 */
function getDefaultPath(basePath: string): string {
  return `${basePath}.webp`;
}

/**
 * Sélectionne une variante aléatoire parmi les variantes disponibles
 * @param type - Le type de mascotte
 * @returns Le chemin de la mascotte sélectionnée
 */
export function getRandomMascot(type: MascotType): string {
  const config = MASCOT_CONFIGS[type];

  // Si aucune variante numérotée n'existe, retourner la version par défaut
  if (config.availableVariants.length === 0) {
    return getDefaultPath(config.basePath);
  }

  // Sélectionner une variante aléatoire parmi les numéros disponibles
  const randomIndex = Math.floor(Math.random() * config.availableVariants.length);
  const selectedVariant = config.availableVariants[randomIndex];

  // Si selectedVariant est undefined, retourner le chemin par défaut
  if (selectedVariant === undefined) {
    return getDefaultPath(config.basePath);
  }

  return getVariantPath(config.basePath, selectedVariant);
}

/**
 * Récupère toutes les variantes disponibles pour un type de mascotte
 * @param type - Le type de mascotte
 * @returns Liste des chemins de toutes les variantes
 */
export function getAllMascotVariants(type: MascotType): string[] {
  const config = MASCOT_CONFIGS[type];

  return [
    getDefaultPath(config.basePath), // Ajouter la version par défaut
    ...config.availableVariants.map((v) => getVariantPath(config.basePath, v)),
  ];
}

/**
 * Sélectionne une variante spécifique
 * @param type - Le type de mascotte
 * @param variant - Le numéro de variante (1, 2, 3, etc.)
 * @returns Le chemin de la mascotte
 */
export function getMascotVariant(type: MascotType, variant: number): string {
  const config = MASCOT_CONFIGS[type];
  return getVariantPath(config.basePath, variant);
}

/**
 * Obtient le chemin par défaut d'une mascotte (sans variante)
 * @param type - Le type de mascotte
 * @returns Le chemin par défaut
 */
export function getDefaultMascot(type: MascotType): string {
  const config = MASCOT_CONFIGS[type];
  return getDefaultPath(config.basePath);
}
