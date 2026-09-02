# Plan de contenu — octobre 2026

Préparé le 2026-09-02. Source : audit de `src/data/learnArticles.ts` (25 slugs existants, listés en annexe) pour éviter tout doublon thématique.

## ⚠️ Note méthodologique sur 2a) recherche de mots-clés

L'outil **SearchFit** demandé n'est disponible ni comme connecteur MCP installé pour ce compte, ni dans le registre MCP interrogeable depuis cette session (vérifié via la recherche de connecteurs). Faute d'accès à un outil de clustering/volume réel (type Semrush, Ahrefs), la recherche ci-dessous a été faite via recherche web qualitative (SERP, "people also ask", concurrence en place) plutôt qu'avec des chiffres de volume/difficulté vérifiés. **Les volumes et difficultés ci-dessous sont des estimations qualitatives (Élevé/Moyen/Faible) fondées sur la densité de concurrence observée et la spécificité de la requête — pas des données d'outil SEO.** À remplacer par de vraies données dès qu'un accès Semrush/Ahrefs/OpenRush est connecté (ces trois connecteurs existent dans le registre MCP mais ne sont pas installés sur ce compte).

## 2a) Clustering de mots-clés par catégorie (estimations qualitatives)

| Catégorie | Cluster / angle | Volume estimé | Difficulté estimée | Constat |
|---|---|---|---|---|
| Grammaire/déclinaisons | cas nominatif russe | Faible-Moyen | Faible | Trou de contenu confirmé : les 5 autres cas ont chacun leur page, pas le nominatif |
| Grammaire/déclinaisons | verbes de mouvement, aspect | Moyen | Moyen | Déjà couvert par 2 articles existants — pas de nouveau sujet ce mois-ci |
| Vocabulaire/pratique quotidienne | vocabulaire famille (мама, папа, братья...) | Moyen-Élevé | Faible | Fort volume "long-tail" beginner, aucune page dédiée famille (numbers/greetings/days déjà traités) |
| Acquisition de base | prononciation consonnes dures/molles, ы vs и | Moyen | Faible-Moyen | Confusion très fréquente signalée dans les guides concurrents (FluentU, RussianPod101) ; alphabet et accent tonique déjà couverts, pas la prononciation consonnes |
| Méthodologie/outils | SRS/Anki vs app intégrée pour les cas | Faible-Moyen | Faible | Requête de comparaison, peu de concurrence directe sur l'angle "cases russes" |
| Certifications TORFL/ТРКИ | quel niveau TORFL choisir (A1 vs A2 vs B1) | Faible-Moyen | Faible | Sous-angle non couvert par le guide TORFL général existant ; forte intention décisionnelle |
| Expatriation/vie pratique | types de visa russe expliqués | Moyen | Moyen | Catégorie à 0 article sur le site ; forte concurrence généraliste (expat blogs) mais aucun angle "apprenant du russe qui part vivre en Russie" |
| Travail/business en Russie | étiquette business, erreurs à éviter | Faible-Moyen | Faible | Catégorie à 0 article ; peu de concurrence spécifique "apprenant de russe + business" |
| Ressources gratuites | podcasts/YouTube (déjà couvert en généraliste) | Moyen | Moyen | 1 article générique existe déjà (`best-free-resources-learn-russian`) ; priorité plus basse ce mois-ci |
| Communauté/échange linguistique | apps d'échange linguistique (Tandem, HelloTalk...) | Moyen | Faible-Moyen | Catégorie à 0 article ; angle listicle proche du format "top 10 apps" qui performe déjà bien sur le site |

## 2b) Plan éditorial — 8 sujets, 2/semaine sur 4 semaines

| Titre proposé | Slug proposé | Mot-clé principal visé | Intention de recherche | Semaine cible | Statut |
|---|---|---|---|---|---|
| Russian Nominative Case: Rules, Endings & When to Use It | `russian-nominative-case` | russian nominative case | Informationnelle (complète la série des 6 cas) | 1 | à faire |
| Russian Family Vocabulary: Words for Mom, Dad, Siblings & Relatives | `russian-family-vocabulary` | russian family vocabulary | Informationnelle / listicle débutant | 1 | à faire |
| Russian Consonants: Hard vs Soft — The Pronunciation Guide Beginners Skip | `russian-hard-soft-consonants-guide` | hard and soft consonants russian | Informationnelle (résout une confusion fréquente) | 2 | à faire |
| Anki vs Built-In App: Best Way to Drill Russian Case Endings with SRS | `anki-vs-app-russian-cases-srs` | best way to memorize russian cases | Comparative | 2 | à faire |
| TORFL A1 vs A2 vs B1: Which Level Should You Register For First? | `torfl-level-guide-which-to-choose` | which torfl level to take | Décisionnelle / comparative | 3 | à faire |
| Russian Visa Types Explained: Which One Do You Actually Need in 2026 | `russian-visa-types-explained` | russian visa types | Informationnelle / pratique | 3 | à faire |
| Russian Business Etiquette: 10 Rules Foreign Professionals Get Wrong | `russian-business-etiquette-guide` | russian business etiquette | Informationnelle / listicle | 4 | à faire |
| Best Language Exchange Apps to Practice Russian (Tandem, HelloTalk & More) | `best-language-exchange-apps-russian` | language exchange apps russian | Comparative / listicle | 4 | à faire |

Répartition volontaire : 2 sujets grammaire/vocabulaire (fondamentaux à fort trafic), 2 méthodologie/acquisition, 2 sujets pratiques nouveaux (visa, business) pour élargir l'audience au-delà des apprenants purs, 1 certification, 1 communauté — aucun des 8 slugs proposés n'existe dans `learnArticles.ts`.

La catégorie "ressources gratuites" n'a volontairement pas reçu de nouveau sujet ce mois-ci : elle dispose déjà d'un article généraliste récent (`best-free-resources-learn-russian`, 2026-03-22) et les 4 catégories à 0 article (expatriation, business, communauté, + complétion grammaire) ont été priorisées.

---

## Annexe — slugs déjà existants (vérifiés, à ne pas dupliquer)

`top-10-apps-russian`, `russian-case-endings-cheatsheet`, `russian-genitive-case`, `russian-accusative-case`, `russian-dative-case`, `russian-instrumental-case`, `russian-prepositional-case`, `how-to-practice-russian-cases`, `top-10-russian-case-mistakes`, `russian-prepositions-and-cases`, `best-free-resources-learn-russian`, `russian-cases-explained-beginners-guide`, `best-apps-learn-russian-grammar`, `how-long-learn-russian`, `torfl-trki-russian-language-exam-guide`, `russian-prepositions-cases-cheat-sheet`, `russian-verbs-of-motion`, `russian-alphabet-cyrillic-guide`, `learn-russian-on-your-own`, `russian-verbal-aspect-perfective-imperfective`, `russian-word-stress-guide`, `russian-most-common-words`, `russian-numbers-guide`, `russian-greetings-guide`, `russian-days-months-guide`

Voir aussi `docs/seo-audit-2026-09.md` pour l'audit SEO complet des articles existants.
