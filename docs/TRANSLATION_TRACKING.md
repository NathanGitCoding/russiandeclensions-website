# Suivi des traductions du site

Document vivant : à **mettre à jour** après chaque lot de traductions (cocher, dater, pointer vers la PR ou le commit si utile).

## Langues de référence

| Code   | Langue    | Usage principal                          |
|--------|-----------|------------------------------------------|
| `en_en` | Anglais  | Contenu source Learn (articles / leçons) |
| `fr_fr` | Français |                                          |
| `tr_tr` | Turc     |                                          |
| `de_de` | Allemand |                                          |
| `pl_pl` | Polonais |                                          |
| `es_es` | Espagnol |                                          |
| `it_it` | Italien  |                                          |
| `pt_pt` | Portugais |                                         |
| `nl_nl` | Néerlandais |                                       |
| `ru_ru` | Russe    | Landing + index Learn + détail Learn UI  |

## Légende des statuts

| Symbole | Signification |
|---------|-----------------|
| ✅      | Traduction présente et validée |
| 🔲      | Manquant — à traduire |
| ➖      | Non applicable (langue non proposée pour cette surface) |
| EN      | Repli : l’interface est dans la langue choisie mais le **corps** reste en anglais (`getLearnArticle` / `getLearnLesson` sans entrée pour cette langue) |

**Convention de mise à jour :** remplacer 🔲 par ✅, ajouter une courte note (date, initiales) dans la colonne « Notes » ou dans l’historique en bas de fichier.

---

## 1. Pages et routes (vue d’ensemble)

| Route | Type | Rôle | Fichiers / données clés |
|-------|------|------|-------------------------|
| `/` | Page | Accueil marketing | `src/data/website/landingTranslations.ts`, composants `src/components/landing/*` |
| `/learn` | Page | Index leçons + articles | `src/data/website/learnPageTranslations.ts` |
| `/learn/articles/[slug]` | Dynamique | Article long | `src/data/learnArticles.ts` (EN), `src/data/learnArticleTranslations.ts` + modules `src/data/*-translations.ts` |
| `/learn/lessons/[slug]` | Dynamique | Leçon longue | `src/data/learnLessons.ts` (EN), `src/data/learnLessonTranslations.ts` |
| `/words` | Page | Liste des mots | `src/data/website/wordsIndexPageTranslations.ts` |
| `/russian-declension/[slug]` | Dynamique | Fiche déclinaison | UI : `src/data/website/wordPageTranslations.ts` · **Glose par mot** : `data/words.json` (`translation_*`) |
| `/words/[slug]` | Redirection | 301 → `/russian-declension/[slug]` | — |
| `/words/template` | Page | Maquette interne (mot fictif) | Même UI que fiche mot |
| `/practice` | Page | Config quiz multi-mots | `src/data/website/practicePageTranslations.ts` |
| `/practice/[case]` | Dynamique | Quiz par cas | Même fichier + logique quiz |
| API `sitemap-*`, `waitlist` | Routes | Non-UI / technique | Hors périmètre rédactionnel sauf messages utilisateur |

---

## 2. Enveloppe UI (textes chrome du site)

Toutes les langues listées dans `LandingLanguage` doivent être présentes dans ces fichiers (sinon erreur TypeScript ou repli `en_en`).

| Surface | Fichier source | `en` | `fr` | `tr` | `de` | `pl` | `es` | `it` | `pt` | `nl` | `ru` | Notes |
|---------|----------------|------|------|------|------|------|------|------|------|------|------|-------|
| Landing `/` | `landingTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Index Learn | `learnPageTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Détail article / leçon (libellés) | `learnDetailTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Titres des cartes « related », CTA, etc. |
| Index mots | `wordsIndexPageTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Fiche mot (UI) | `wordPageTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Practice | `practicePageTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | |
| Modale waitlist | `waitlistModalTranslations.ts` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ➖ | Pas de `ru_ru` dans ce fichier |

**Écart UI :** si une nouvelle chaîne est ajoutée dans un composant sans passage par ces fichiers, compléter **toutes** les langues du `Record` concerné.

---

## 3. Corps des articles Learn (contenu long)

Source anglaise : `learnArticles.ts`. Traductions : `learnArticleTranslations.ts` (+ imports `best-*`, `how-long-*`, `russian-cases-explained-*`, `torfl-*`, etc.).

**Langues actuellement couvertes pour le corps (hors anglais source) :** `fr_fr`, `de_de`, `tr_tr`, `pl_pl`, `ru_ru`.

**Langues à compléter pour le corps :** `es_es`, `it_it`, `pt_pt`, `nl_nl` → aujourd’hui **repli EN** si l’utilisateur choisit l’une de ces langues.

### Tableau par article

Cocher **ES / IT / PT / NL** quand l’article complet (titres, meta, sections, tableaux, alt, CTA, JSON-LD si traduit) est en place pour cette langue.

| Slug | Sujet (court) | FR | DE | TR | PL | RU | ES | IT | PT | NL | Notes |
|------|---------------|----|----|----|----|----|----|----|----|----|-------|
| `top-10-apps-russian` | Top apps russe 2026 | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-case-endings-cheatsheet` | Aide-mémoire terminaisons | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-genitive-case` | Cas génitif | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-accusative-case` | Cas accusatif | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-dative-case` | Cas datif | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-instrumental-case` | Cas instrumental | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-prepositional-case` | Cas prépositionnel | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `how-to-practice-russian-cases` | Pratiquer les cas | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `top-10-russian-case-mistakes` | Erreurs fréquentes | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-prepositions-and-cases` | Prépositions et cas | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `russian-prepositions-cases-cheat-sheet` | Anti-sèche prép. | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `best-free-resources-learn-russian` | Ressources gratuites | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | Fichier `best-free-resources-learn-russian-translations.ts` |
| `russian-cases-explained-beginners-guide` | Guide visuel débutant | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | `russian-cases-explained-beginners-guide-translations.ts` |
| `best-apps-learn-russian-grammar` | Apps grammaire | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | `best-apps-learn-russian-grammar-translations*.ts` |
| `how-long-learn-russian` | Durée d’apprentissage | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | `how-long-learn-russian-translations.ts` |
| `torfl-trki-russian-language-exam-guide` | Examen TORFL/TRKI | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | `torfl-trki-russian-language-exam-guide-translations.ts` |

---

## 4. Corps des leçons Learn

Source anglaise : `learnLessons.ts`. Traductions : `learnLessonTranslations.ts`.

| Slug | Sujet | FR | DE | TR | PL | RU | ES | IT | PT | NL | Notes |
|------|-------|----|----|----|----|----|----|----|----|----|-------|
| `russian-cases-complete-guide` | Guide des 6 cas | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |
| `dative-case-declension` | Datif (leçon) | ✅ | ✅ | ✅ | ✅ | ✅ | 🔲 | 🔲 | 🔲 | 🔲 | |

> Les titres affichés sur `/learn` pour d’autres slugs « type leçon » relèvent de `learnPageTranslations.ts` (section Grammar Lessons) ; les pages dynamiques `/learn/lessons/[slug]` n’existent que pour les slugs présents dans `learnLessons.ts`.

---

## 5. Fiches mots (`/russian-declension/[slug]`)

| Couche | Description | Suivi |
|--------|-------------|--------|
| **UI** | Titres de section, FAQ templates, quiz, navigation | Voir §2 — `wordPageTranslations.ts` (complet 10 + `ru`). |
| **Glose du mot** | Traduction affichée selon la langue (équivalent dans la langue de l’UI) | Champs optionnels dans `data/words.json` : `translation_es`, `translation_it`, `translation_pt`, `translation_nl` (en plus de `translation_en`, `translation_fr`, `translation_de`, `translation_tr`, `translation_pl`). |

### Suivi des données `words.json` (glose)

Ne pas lister ici chaque slug : le fichier est généré (`npm run export-db`). Pour un **audit automatique** des champs manquants :

```bash
# Exemple : compter les mots sans traduction ES (à adapter selon votre environnement Node)
node -e "
const w = require('./data/words.json');
let n = 0, miss = 0;
for (const [k,v] of Object.entries(w)) {
  if (k === '__legacySlugRedirects' || !v || typeof v !== 'object') continue;
  n++;
  if (!v.translation_es) miss++;
}
console.log({ words: n, missing_translation_es: miss });
"
```

Répéter pour `translation_it`, `translation_pt`, `translation_nl` selon les priorités marché.

| Champ JSON | Rôle | Statut global (à remplir) |
|------------|------|---------------------------|
| `translation_es` | Glose ES | 🔲 Audit recommandé |
| `translation_it` | Glose IT | 🔲 Audit recommandé |
| `translation_pt` | Glose PT | 🔲 Audit recommandé |
| `translation_nl` | Glose NL | 🔲 Audit recommandé |

---

## 6. Composants & textes hors fichiers centralisés

Vérifier lors des revues que les nouvelles chaînes passent bien par un fichier de traductions ou un mécanisme équivalent.

| Zone | Fichiers / notes |
|------|------------------|
| Quiz déclinaison (modal / inline) | `src/components/quiz/*.tsx`, `src/hooks/useDeclensionQuiz.ts`, `src/lib/declensionQuiz.ts` — vérifier couverture par `landingLanguage` |
| Landing | `LandingNavbar`, `LandingFooter`, etc. — idéalement clés dans `landingTranslations.ts` |
| SEO / métadonnées | `layout.tsx`, `opengraph-image.tsx`, routes sitemap — aligner avec les langues servies |

---

## 7. Checklist « langue considérée comme complète »

Pour une langue cible (ex. `es_es`) :

- [ ] Toutes les entrées des `Record<LandingLanguage, …>` des fichiers du §2
- [ ] Tous les articles du §3 (corps)
- [ ] Toutes les leçons du §4 (corps)
- [ ] Gloses `words.json` si vous exigez la parité sur les fiches mot
- [ ] Smoke test manuel : `/`, `/learn`, un article, une leçon, `/words`, une fiche mot, `/practice`

---

## 8. Historique des mises à jour (exemple)

| Date | Auteur | Changement |
|------|--------|------------|
| 2026-03-28 | — | Création du document ; état initial basé sur le dépôt |

---

## Références rapides dans le code

- Résolution article : `getLearnArticle(slug, lang)` dans `src/data/learnArticles.ts`
- Résolution leçon : `getLearnLesson(slug, lang)` dans `src/data/learnLessons.ts`
- Type langue : `LandingLanguage` dans `src/data/website/landingTranslations.ts`
- Langues app (hors `ru`) : `Language` dans `src/data/languages.ts`
