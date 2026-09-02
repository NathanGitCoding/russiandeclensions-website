# Audit SEO — russiandeclensions.com/blog (2026-09-02)

Source de vérité auditée : `src/data/learnArticles.ts` (25 articles). Les fichiers `content/blog/*.md` sont du code mort, ignorés comme demandé.

## 1. Meta titles trop longs (systémique)

Sur 25 articles, **24/25 dépassent les ~60 caractères** recommandés pour un `metaTitle` (au-delà, Google tronque le titre dans les SERP). Cas les plus extrêmes :

| Slug | Longueur metaTitle |
|---|---|
| `russian-instrumental-case` | 104 car. |
| `russian-alphabet-cyrillic-guide` | 98 car. |
| `torfl-trki-russian-language-exam-guide` | 94 car. |
| `russian-greetings-guide` | 94 car. |
| `top-10-russian-case-mistakes` | 95 car. |
| `how-long-learn-russian` | 93 car. |
| `russian-verbal-aspect-perfective-imperfective` | 92 car. |

Seul `russian-word-stress-guide` (65 car.) s'approche de la cible. Le suffixe systématique `| Russian Cases with Anna` (25 car.) mange une bonne partie du budget — à considérer pour raccourcissement sur les titres les plus longs.

## 2. Meta descriptions trop longues (systémique)

**22/25 dépassent les ~155-160 caractères** recommandés (troncature en SERP). Cas extrêmes :

- `best-apps-learn-russian-grammar` : **246 car.**
- `russian-verbs-of-motion` : **230 car.**
- `russian-instrumental-case` : **214 car.**

Seuls `russian-most-common-words` (153) et `russian-numbers-guide` (152) sont dans la cible.

## 3. Incohérence de dates jsonLd

- `russian-case-endings-cheatsheet` et `russian-genitive-case` portent `datePublished`/`dateModified` = **2025-03-11**, alors que tous les articles voisins publiés le même jour (`top-10-apps-russian`, même date jour/mois : 2026-03-11) sont en **2026**. Ressemble à une erreur de copier-coller d'année plutôt qu'à un choix voulu — à vérifier.
- **23 articles sur 25** ont `datePublished === dateModified` : aucune trace de rafraîchissement de contenu depuis la publication initiale, y compris pour des pages cornerstone comme les cheat sheets. Seuls `top-10-apps-russian` et `best-apps-learn-russian-grammar` ont un `dateModified` postérieur (2026-05-03). Un signal de fraîcheur inexistant nuit au ranking sur du contenu evergreen à fort trafic (cheat sheets, guide TORFL).

## 4. Incohérence de branding

- `how-to-practice-russian-cases` est le **seul article sans le suffixe** `| Russian Cases with Anna` dans son `metaTitle` (74 car., mais sans branding). Tous les 24 autres l'ont.

## 5. `jsonLd.keywords` manquant

- `how-to-practice-russian-cases` n'a **aucun champ `keywords`** dans son bloc `jsonLd` (tous les autres articles en ont un, même partiel). Signal mineur mais facile à corriger.

## 6. Maillage interne : pages orphelines

En comptant les `internalLinks` qui pointent vers chaque slug depuis les *autres* articles, **4 pages ne reçoivent aucun lien entrant interne** :

- `russian-instrumental-case` (0 lien entrant) — anormal pour une page cœur de la série "cases", qui devrait être citée par les guides méthode/mistakes/prepositions.
- `torfl-trki-russian-language-exam-guide` (0)
- `russian-prepositions-cases-cheat-sheet` (0)
- `russian-days-months-guide` (0) — normal, article publié le 2026-09-01 (hier), pas encore intégré au maillage des autres pages.

À l'inverse, `russian-cases-explained-beginners-guide` (11 liens entrants) et `russian-case-endings-cheatsheet` (10) concentrent le maillage — logique pour des pages hub, mais `russian-instrumental-case` et `russian-prepositions-cases-cheat-sheet` mériteraient d'être ajoutées aux `internalLinks` des guides méthode et des autres pages de cas.

## 7. Point positif vérifié (pas un bug)

Le schema `FAQPage` n'apparaît dans aucun `jsonLd` du fichier de données, mais c'est normal : il est généré dynamiquement dans `src/app/learn/articles/[slug]/page.tsx` (lignes ~895-903) à partir du champ `faq[]`. Rien à corriger ici.

## 8. Trou de contenu identifié

La série de cas grammaticaux couvre l'accusatif, le génitif, le datif, l'instrumental et le prépositionnel (5/6 cas), mais **il n'existe pas d'article dédié au cas nominatif**. Repris dans le plan éditorial ci-dessous (semaine 1).

---

*Recommandation prioritaire : resserrer metaTitle/metaDescription sur les 5-6 pages les plus longues et à plus fort trafic (`russian-instrumental-case`, `best-apps-learn-russian-grammar`, `russian-verbs-of-motion`), corriger la date 2025 suspecte, et ajouter 2-3 liens internes vers les 3 pages orphelines. Ces correctifs n'ont pas été appliqués dans cette session (hors scope de l'audit) — à traiter dans une prochaine itération ciblée.*
