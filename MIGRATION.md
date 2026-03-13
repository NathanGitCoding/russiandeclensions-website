# Migration depuis russian-coach

Ce projet a été extrait du monolithe `russian-coach` le 2025-03-13.

## Origine

Tout le contenu marketing et SEO (landing, learn, articles) provient de :
`russian-coach/src/app/landing-cases`, `russian-coach/src/app/learn`, et dépendances.

## Adaptations effectuées

1. **LandingLanguageContext** : version autonome (cookie + sessionStorage), sans dépendance à `useLanguage` de l'app
2. **WaitlistModal** : utilise `useLandingLanguage()` avec fallback `ru_ru` → `en_en` pour les traductions
3. **Layout** : minimal (fonts, LandingLanguageProvider), pas de Supabase Auth, Capacitor, WebAccessGuard
4. **siteUrl** : russiandeclensions.com par défaut
5. **Sitemap** : landing-cases + learn uniquement

## Déploiement

Vercel, domaine russiandeclensions.com. Variables : NEXT_PUBLIC_SUPABASE_*, NEXT_PUBLIC_SITE_URL.

## Documentation complète

Voir `russian-coach/docs/MIGRATION_SEPARATION_REPOS.md` pour la liste exhaustive des changements.
