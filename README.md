# Russian Declensions Website 

Site web marketing et SEO pour Russian Cases with Anna. Contient la landing page, les articles et leçons de grammaire russe.

**Domaine :** russiandeclensions.com

## Contenu

- `/` — Page d'accueil marketing
- `/learn` — Index des leçons et articles
- `/learn/articles/[slug]` — Articles (guides, top apps, etc.)
- `/learn/lessons/[slug]` — Leçons de grammaire (déclinaisons, cas)

## Déploiement (Vercel)

1. Créer un projet Vercel lié à ce repo
2. Configurer le domaine `russiandeclensions.com`
3. Variables d'environnement requises :
   - `NEXT_PUBLIC_SUPABASE_URL` — URL Supabase
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — Clé anon (ou `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - `NEXT_PUBLIC_SITE_URL` — `https://russiandeclensions.com`

L'API `/api/waitlist` enregistre les emails dans la table Supabase `waitlist`.

## Développement

```bash
npm install --legacy-peer-deps
npm run dev
```

## Build

```bash
npm run build
npm start
```
