# Blog SEO - Format et nommage des articles

## Format frontmatter (compatible)

```yaml
---
title: "Russian Genitive Case: Rules, Endings & 32 Real Examples"
description: "Complete guide to the Russian genitive case..."
slug: "russian-genitive-case"
date: "2025-03-13"
keywords: ["russian genitive case", "russian genitive case endings"]
---
```

Champs supportés :
- **title** (requis)
- **description** (requis)
- **slug** (optionnel) — le slug d’URL est dérivé du **nom du fichier**
- **date** ou **publishedAt** — au moins un des deux requis pour le tri
- **keywords** (optionnel) — tableau pour le SEO
- **image** (optionnel) — chemin vers l’image OG
- **author** (optionnel)

## Nommage des 10 fichiers .md

Le slug d’URL = nom du fichier sans `.md`. Par exemple `russian-genitive-case.md` → `/blog/russian-genitive-case`.

| # | Nom du fichier | URL |
|---|----------------|-----|
| 1 | `russian-genitive-case.md` | /blog/russian-genitive-case |
| 2 | `russian-dative-case.md` | /blog/russian-dative-case |
| 3 | `russian-prepositional-case.md` | /blog/russian-prepositional-case |
| 4 | `russian-accusative-case.md` | /blog/russian-accusative-case |
| 5 | `russian-instrumental-case.md` | /blog/russian-instrumental-case |
| 6 | `russian-case-endings-cheatsheet.md` | /blog/russian-case-endings-cheatsheet |
| 7 | `russian-prepositions-and-cases.md` | /blog/russian-prepositions-and-cases |
| 8 | `top-10-apps-russian.md` | /blog/top-10-apps-russian |
| 9 | `top-10-russian-case-mistakes.md` | /blog/top-10-russian-case-mistakes |
| 10 | `how-to-practice-russian-cases.md` | /blog/how-to-practice-russian-cases |

## Sitemap

Le sitemap (`/sitemap.xml`) inclut automatiquement tous les slugs du blog via `getAllBlogSlugs()`. Aucune modification manuelle nécessaire : ajoutez les fichiers et le build mettra à jour le sitemap.
