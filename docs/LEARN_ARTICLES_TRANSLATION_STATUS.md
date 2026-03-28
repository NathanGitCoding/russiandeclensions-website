# Suivi des traductions — articles Learn (`/learn/articles/[slug]`)

Document de travail : **mettre à jour ce tableau** après chaque langue / article livré(e). Fichier de données : `src/data/learnArticleTranslations.ts` (objet `slug` → `LandingLanguage` → contenu `LearnArticle`).

## Périmètre langues (corps des articles)

On ne traduit le **contenu long** des articles que vers **quatre langues** :

| Code | Langue |
|------|--------|
| `fr_fr` | Français |
| `de_de` | Allemand |
| `tr_tr` | Turc |
| `pl_pl` | Polonais |

Les autres codes `LandingLanguage` (`es_es`, `it_it`, `pt_pt`, `nl_nl`, `ru_ru`, etc.) : **pas de traduction article prévue** — repli automatique sur l’anglais (`learnArticles.ts`) pour le corps de page.

*(« TK » dans la spec interne = Turc = `tr_tr`.)*

## Légende

| Symbole | Signification |
|---------|----------------|
| ✅ | Traduction **complète** et validée (titres, meta, intro, sections, tableaux, alt images, CTA, FAQ, JSON-LD si vous le traduisez) — **UTF-8 vérifié** (cyrillique, accents). |
| 🔲 | **À faire** dans le périmètre FR / DE / TR / PL — repli EN jusqu’à livraison. |
| EN | Colonne **EN** : source dans `learnArticles.ts`, toujours ✅. |

## Tableau de suivi

**Dernière mise à jour :** 2026-03-28 — **EN** = source ✅. **FR / DE / TR / PL** : tableau ci-dessous à jour (articles 12–15 branchés dans `learnArticleTranslations.ts`).

| # | Slug | Sujet (court) | EN | FR | DE | TR | PL | Notes |
|---|------|---------------|----|----|----|----|-----|-------|
| 1 | `russian-case-endings-cheatsheet` | Aide-mémoire terminaisons des cas | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 2 | `russian-genitive-case` | Cas génitif | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 3 | `russian-accusative-case` | Cas accusatif | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 4 | `russian-dative-case` | Cas datif | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 5 | `russian-instrumental-case` | Cas instrumental | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 6 | `russian-prepositional-case` | Cas prépositionnel | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 7 | `how-to-practice-russian-cases` | Comment pratiquer les cas | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 8 | `top-10-russian-case-mistakes` | Top erreurs sur les cas | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 9 | `russian-prepositions-and-cases` | Prépositions et cas | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 10 | `russian-prepositions-cases-cheat-sheet` | Anti-sèche prépositions / cas | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 11 | `top-10-apps-russian` | Top apps pour apprendre le russe | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 12 | `best-apps-learn-russian-grammar` | Meilleures apps grammaire russe | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 13 | `best-free-resources-learn-russian` | Ressources gratuites | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 14 | `how-long-learn-russian` | Durée pour apprendre le russe | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 15 | `russian-cases-explained-beginners-guide` | Cas expliqués (débutants) | ✅ | ✅ | ✅ | ✅ | ✅ | |
| 16 | `torfl-trki-russian-language-exam-guide` | Examen TORFL / ТРКИ | ✅ | ✅ | ✅ | ✅ | ✅ | |

## Leçons Learn (`/learn/lessons/[slug]`)

Le suivi du **corps des leçons** (pas des articles) est dans **`docs/TRANSLATION_TRACKING.md`** §4. Si vous alignez le même périmètre **FR / DE / TR / PL** sur les leçons, mettez à jour ce tableau là-bas de la même façon (ne cocher que ces quatre colonnes comme objectif).

## Comment ajouter une traduction

1. Copier la structure de l’article depuis `learnArticles.ts` pour le `slug` concerné.
2. Traduire **tous** les champs textuels dans `learnArticleTranslations[slug][lang]` avec `lang` ∈ `fr_fr` | `de_de` | `tr_tr` | `pl_pl`.
3. Enregistrer le fichier en **UTF-8** (sans BOM de préférence). Vérifier l’affichage du cyrillique dans l’IDE et sur le site.
4. Remplacer 🔲 par ✅ dans le tableau ci-dessus et, si besoin, noter date / PR dans `docs/TRANSLATION_TRACKING.md` §8.

## Références code

- `getLearnArticle(slug, lang)` — `src/data/learnArticles.ts`
- Objet traductions — `src/data/learnArticleTranslations.ts`
