import type { LandingLanguage } from '@/data/website/landingTranslations';
import type { LearnArticle } from './learnArticles';
import { torflTrkiLearnArticleDeDe } from './learnArticleTranslationsTorflTrkiDe';
import { torflTrkiLearnArticlePlPl } from './learnArticleTranslationsTorflTrkiPl';
import { torflTrkiLearnArticleTrTr } from './learnArticleTranslationsTorflTrkiTr';

/** Traductions TORFL / ТРКИ — texte pédagogique traduit ; russe copié depuis `learnArticles.ts`. */
export const torflTrkiRussianLanguageExamGuideTranslations: Partial<
  Record<LandingLanguage, LearnArticle>
> = {
  fr_fr: {
    slug: 'torfl-trki-russian-language-exam-guide',
    title:
      'Examen TORFL (ТРКИ) : guide complet du test de compétence en russe',
    metaTitle:
      'Guide TORFL (ТРКИ) — niveaux, format, préparation et inscription | Russian Cases with Anna',
    metaDescription:
      'Tout ce qu’il faut savoir sur l’examen TORFL (ТРКИ) : 6 niveaux de A1 à C2, format en 5 épreuves, conseils de grammaire, centres d’examens, coûts et réussite.',
    keywords: [
      'examen TORFL',
      'ТРКИ',
      'préparation TORFL',
      'test de compétence en russe',
      'niveaux TORFL',
      'format examen TORFL',
      'test du russe langue étrangère',
      'inscription TORFL',
      'certificat de russe',
    ],
    h1: 'Examen TORFL (ТРКИ) : le guide complet du test officiel de compétence en russe',
    intro:
      "Que vous ayez besoin d’un certificat pour la nationalité russe, l’admission à l’université ou la crédibilité professionnelle, le **TORFL** (Test of Russian as a Foreign Language / ТРКИ — Тест по русскому языку как иностранному) est la référence internationalement reconnue. Voyez-le comme l’équivalent russe du DELF pour le français ou du Goethe-Zertifikat pour l’allemand.\n\nAvec **6 niveaux de A1 à C2**, un format structuré en 5 épreuves et une reconnaissance par les gouvernements et universités du monde entier, le TORFL est la référence pour attester votre niveau de russe. Ce guide couvre tout : ce qu’exige chaque niveau, comment se déroule l’examen, ce que teste l’épreuve de grammaire et comment vous préparer efficacement.",
    whatYouLearn: [
      'Ce qu’est le TORFL/ТРКИ et qui en a besoin',
      'Les 6 niveaux (A1 → C2) et ce qu’ils ouvrent concrètement',
      'Le format d’examen en 5 parties, en détail',
      'Pourquoi la grammaire (surtout les cas) est l’épreuve la plus dure — et comment s’y préparer',
      'Où passer l’examen, combien ça coûte et comment s’inscrire',
    ],
    sections: [
      {
        h2: 'Qu’est-ce que le TORFL (ТРКИ) ?',
        content:
          'Le TORFL — **Test of Russian as a Foreign Language** (russe : ТРКИ — Тест по русскому языку как иностранному) — est la seule certification d’État de compétence en russe pour les non-natifs. Il a été mis au point par le ministère russe de l’Éducation et est organisé par des centres d’examens agréés dans le monde.\n\nLe certificat est :\n\n• **Exigé** pour les demandes de nationalité russe (niveau minimum : ТРКИ-1 / B1)\n• **Exigé** pour l’admission dans les universités russes (la plupart des cursus demandent ТРКИ-1 ou ТРКИ-2)\n• **Reconnu** à l’international par les employeurs, les établissements et les administrations\n• **Valable 5 ans** à compter de la délivrance (ensuite vous pouvez repasser l’examen)\n\nContrairement aux évaluations informelles, le TORFL suit des procédures normalisées strictes et est noté par des examinateurs certifiés. Le réussir atteste réellement de votre capacité à vous débrouiller en russe à un niveau donné.',
      },
      {
        h2: 'Les 6 niveaux du TORFL expliqués',
        content:
          'Le TORFL comporte 6 niveaux alignés sur le CECRL (cadre européen commun de référence). Chaque niveau a une abréviation officielle en russe :',
        table: {
          headers: ['Niveau', 'Nom russe', 'CECRL', 'Ce que ça prouve', 'Qui en a besoin'],
          rows: [
            ['ТЭУ', 'Элементарный уровень', 'A1', 'Russe de survie élémentaire', 'Débutants qui valident leurs premiers progrès'],
            ['ТБУ', 'Базовый уровень', 'A2', 'Situations du quotidien', 'Requis pour le titre de séjour temporaire'],
            ['ТРКИ-1', 'Первый уровень', 'B1', 'Compétence conversationnelle', 'Nationalité russe et la plupart des universités'],
            ['ТРКИ-2', 'Второй уровень', 'B2', 'Niveau professionnel de travail', 'Masters, doctorats et nombreux emplois'],
            ['ТРКИ-3', 'Третий уровень', 'C1', 'Maîtrise académique avancée', 'Doctorat, interprètes, enseignants'],
            ['ТРКИ-4', 'Четвёртый уровень', 'C2', 'Maîtrise proche du natif', 'Traducteurs assermentés et philologues'],
          ],
          caption: 'Niveaux TORFL, équivalences CECRL et usages pratiques',
          boldColumnIndices: [0],
        },
        subsections: [
          {
            h3: 'ТЭУ — niveau élémentaire (A1)',
            content:
              'L’examen d’entrée teste les bases : se présenter, poser des questions simples, comprendre de courts textes et un débit lent. Il faut connaître **le nominatif et l’accusatif**, le présent, les nombres de base et environ 700 à 800 mots.\n\nCe niveau sert surtout de repère personnel — les usages officiels sont limités, mais il montre que vous avez posé des fondations solides.',
          },
          {
            h3: 'ТБУ — niveau de base (A2)',
            content:
              'À A2, vous gérez le quotidien : courses, transports, médecin, décrire votre routine. On attend une maîtrise correcte du **nominatif, de l’accusatif, du génitif et du prépositionnel**, ainsi que du passé et du futur. Lexique : environ 1 300 mots.\n\nCe niveau est requis pour obtenir un **titre de séjour temporaire** (РВП) en Russie.',
          },
          {
            h3: 'ТРКИ-1 — premier certificat (B1)',
            content:
              'C’est le niveau TORFL le plus passé. Il atteste que vous pouvez vous débrouiller seul dans un environnement russophone : conversations sur des sujets familiers, médias russes (avec effort), lettres et courts textes, et **les six cas grammaticaux** au singulier et au pluriel.\n\nТРКИ-1 est le minimum pour la **nationalité russe** et l’admission en **licence** dans la plupart des universités russes. Lexique : environ 2 300 mots.',
          },
          {
            h3: 'ТРКИ-2 — deuxième certificat (B2)',
            content:
              'À B2, vous abordez des sujets complexes, comprenez les JT et articles de presse, rédigez des textes analytiques et nuancez vos opinions. La grammaire doit être en grande partie sans faute : **structures complexes**, participes, adverbes verbaux (деепричастия), tous les cas avec prépositions.\n\nRequis pour les **cycles master et doctorat** et de nombreux postes en Russie. Lexique : environ 6 000 mots.',
          },
          {
            h3: 'ТРКИ-3 et ТРКИ-4 — avancé et maîtrise (C1/C2)',
            content:
              'Ces niveaux visent les professionnels qui ont besoin du russe au plus haut niveau : interprètes, traducteurs, enseignants universitaires, philologues. C1 teste les sens implicites, idiomes et références culturelles. C2 exige une compétence quasi native dans tous les registres — soutenu, familier, académique, littéraire.\n\nPeu d’apprenants non natifs les tentent. Il faut **des années d’immersion**, souvent en Russie.',
          },
        ],
      },
      {
        h2: 'Format de l’examen : les 5 épreuves',
        content:
          'Chaque niveau TORFL (sauf légères variantes à A1/A2) évalue **5 compétences** en sous-épreuves distinctes. Il faut réussir **chaque partie indépendamment** — au moins 66 % par épreuve. Échouer une partie, c’est échouer l’ensemble (certains centres permettent de repasser une partie seule).',
        subsections: [
          {
            h3: '1. Grammaire et lexique (Лексика. Грамматика)',
            content:
              'C’est là que la plupart des candidats peinent. On teste les bonnes terminaisons de cas, formes verbales, prépositions, conjonctions et ordre des mots. À partir de B1, QCM et trous à combler couvrent **les six cas**, les aspects du verbe (accompli/inaccompli), les verbes de déplacement et les subordonnées complexes.\n\n**Pourquoi cette épreuve compte le plus :** les erreurs de grammaire se répercutent partout. Si vous ne déclinez pas correctement, l’écrit, la compréhension écrite et l’oral en pâtissent. C’est là que le travail ciblé sur **les déclinaisons russes** rapporte le plus.',
            bullets: [
              'A1/A2 : 100 items, 50 min — cas de base, conjugaison, prépositions simples',
              'B1 : 165 items, 90 min — les six cas, aspects, prépositions complexes',
              'B2 : 150 items, 90 min — participes, adverbes verbaux, choix de style',
            ],
          },
          {
            h3: '2. Compréhension écrite (Чтение)',
            content:
              'Vous lisez des textes russes authentiques (adaptés aux niveaux bas) et répondez à des questions. Des annonces et horaires (A1) jusqu’aux articles et extraits littéraires (B2+). Il faut saisir le contenu explicite et le sens implicite.',
            bullets: [
              'A1/A2 : textes courts (pubs, menus, panneaux) — 30 à 45 min',
              'B1 : textes moyens (articles, lettres) — 50 min',
              'B2 : textes longs et denses (éditoriaux, articles savants) — 60 min',
            ],
          },
          {
            h3: '3. Compréhension orale (Аудирование)',
            content:
              'Vous écoutez dialogues, annonces, cours ou JT et répondez aux questions. L’audio est joué une ou deux fois selon le niveau. À partir de B1, débit et intonation naturels — pas de « russe manuel » sur-articulé.',
            bullets: [
              'A1/A2 : dialogues et annonces simples — 25 à 30 min',
              'B1 : dialogues, radio, courts exposés — 35 min',
              'B2 : JT, débats, cours — 40 min',
            ],
          },
          {
            h3: '4. Expression écrite (Письмо)',
            content:
              'Vous produisez des textes adaptés au niveau : formulaires (A1), lettres personnelles (A2–B1), courriers et essais formels (B2+). La correction grammaticale compte lourd : fautes de cas, d’accord ou de temps sont pénalisées.',
            bullets: [
              'A1 : remplir un formulaire — 30 min',
              'A2/B1 : lettre (personnelle ou semi-formelle) — 50 à 60 min',
              'B2 : lettre formelle + essai analytique — 55 min',
            ],
          },
          {
            h3: '5. Expression orale (Говорение)',
            content:
              'Entretien face à un examinateur certifié : jeux de rôle (billet, médecin), description d’images, opinions, débats. On évalue fluidité, prononciation, grammaire et efficacité communicative.\n\nC’est l’épreuve qui impressionne le plus mais souvent la plus « clémente » — les examinateurs sont formés pour rassurer. En revanche, **les erreurs de cas à l’oral sautent aux yeux** et pèsent sur la note.',
            bullets: [
              'A1/A2 : dialogues simples, présentation — 10 à 15 min',
              'B1 : jeux de rôle, image, questions d’opinion — 25 min',
              'B2 : débat, discussion abstraite, résolution de problème — 25 min',
            ],
          },
        ],
      },
      {
        h2: 'Pourquoi la grammaire (surtout les cas) est la clé de la réussite',
        content:
          'Sur les cinq épreuves, **l’exactitude grammaticale** — en particulier l’emploi correct des cas russes — est le facteur le plus décisif. Voici pourquoi :\n\n**À l’épreuve de grammaire :** c’est le test le plus direct. Des phrases du type « Я позвонил ___ » (j’ai téléphoné à ___) exigent le bon datif. Sans répétition systématique des déclinaisons, on devine — et 165 questions laissent beaucoup de marge à l’erreur.\n\n**À l’écrit :** les fautes de cas sont la première cause de perte de points. Écrire « Я живу в Москва » au lieu de « Я живу в Москве » (prépositionnel) trahit tout de suite un niveau insuffisant.\n\n**À l’oral :** les examinateurs repèrent les erreurs de cas en temps réel. Dire « Я дал книга другу » au lieu de « Я дал книгу другу » (accusatif) fragilise une prestation pourtant fluide.\n\n**En lecture :** reconnaître les formes casuelles aide à analyser les phrases longues. Si vous ne voyez pas que « друзей » est le pluriel génitif de « друг », vous pouvez tout interpréter de travers.\n\nEn résumé : **le temps passé à driller les déclinaisons est la préparation au meilleur rapport effort/résultat** pour le TORFL, quel que soit le niveau.',
      },
      {
        h2: 'Comment se préparer à l’examen TORFL',
        content:
          'La durée de préparation varie selon le niveau, mais la stratégie reste la même :',
        subsections: [
          {
            h3: 'Étape 1 : évaluez votre niveau actuel',
            content:
              'Passez un test de placement en ligne (beaucoup d’écoles de russe en proposent) ou confrontez-vous honnêtement aux descripteurs CECRL ci-dessus. Ne vous inscrivez pas au-dessus de vos moyens — sans préparation, les échecs sont fréquents et les frais d’examen ne sont en général pas remboursés.',
          },
          {
            h3: 'Étape 2 : procurez-vous les annales officielles',
            content:
              'Le consortium TORFL publie des supports officiels par niveau (« Типовые тесты »). C’est ce qui se rapproche le plus du vrai examen : format des questions, temps, difficulté. On les trouve chez Zlatoust et dans la plupart des librairies russes.',
          },
          {
            h3: 'Étape 3 : travaillez la grammaire en système',
            content:
              'C’est là que la plupart des candidats investissent le plus de temps — à juste titre. À partir de B1, **les six cas** doivent être automatiques, pas réfléchis à chaque phrase.\n\nL’approche la plus efficace : un outil dédié aux déclinaisons. Le **quiz en ligne gratuit** sur russiandeclensions.com permet de cibler accusatif, génitif, datif, instrumental, prépositionnel avec plus de 400 noms réels au singulier et au pluriel. Complétez avec l’appli **Russian Cases with Anna** pour des leçons structurées sur les règles de chaque cas.',
          },
          {
            h3: 'Étape 4 : entraînez-vous en conditions réelles',
            content:
              'Chronométrez-vous. L’examen est strictement limité dans le temps ; beaucoup échouent non par ignorance mais par manque de temps. Entraînez-vous à faire 165 questions de grammaire en 90 minutes — environ 33 secondes par question.',
          },
          {
            h3: 'Étape 5 : un prof pour l’oral',
            content:
              'L’oral exige une préparation spécifique, difficile seul. Trouvez un tuteur habitué au TORFL (en ligne ou en présentiel) pour simuler l’entretien et corriger grammaire, prononciation et stratégies de communication.',
          },
        ],
      },
      {
        h2: 'Où passer l’examen TORFL',
        content:
          'Le TORFL est organisé par des **centres agréés** dans le monde, souvent rattachés à des universités russes ou à des instituts culturels. Les principaux centres sont notamment :\n\n• **Université d’État de Moscou (МГУ)** — berceau historique du TORFL\n• **Université d’État de Saint-Pétersbourg (СПбГУ)**\n• **Université de l’amitié entre les peuples (РУДН)**\n• **Institut Pouchkine de l’état de la langue russe**\n\nDes centres existent dans la plupart des grandes villes en Europe, Asie, Moyen-Orient et Amériques. Le site officiel (www.torfl.org) tient à jour l’annuaire des centres certifiés.\n\nCertains proposent désormais le **TORFL en ligne** (introduit pendant la Covid, maintenu depuis), mais tous les niveaux ne sont pas toujours disponibles à distance. Renseignez-vous auprès du centre choisi.',
      },
      {
        h2: 'Tarifs, inscription et organisation',
        content:
          'Les frais varient selon le pays, le niveau et le centre. Ordres de grandeur :',
        table: {
          headers: ['Niveau', 'Fourchette (Russie)', 'Fourchette (international)', 'Durée'],
          rows: [
            ['ТЭУ (A1)', '3 500–5 000 ₽ (~40–55 $)', '80–150 $', '~2 h 30'],
            ['ТБУ (A2)', '4 000–6 000 ₽ (~45–65 $)', '100–180 $', '~3 h'],
            ['ТРКИ-1 (B1)', '5 000–7 000 ₽ (~55–75 $)', '150–250 $', '~3 h 30'],
            ['ТРКИ-2 (B2)', '5 500–8 000 ₽ (~60–85 $)', '180–300 $', '~4 h'],
            ['ТРКИ-3 (C1)', '6 000–9 000 ₽ (~65–100 $)', '200–350 $', '~4 h'],
            ['ТРКИ-4 (C2)', '7 000–10 000 ₽ (~75–110 $)', '250–400 $', '~4 h 30'],
          ],
          caption: 'Frais indicatifs TORFL (2025–2026, selon les centres)',
          boldColumnIndices: [0],
        },
        bullets: [
          '**Inscription :** contactez directement le centre. Souvent 2 à 4 semaines à l’avance.',
          '**Documents :** passeport (original), formulaire, preuve de paiement.',
          '**Résultats :** en général sous 2 à 4 semaines. Certificat envoyé par courrier ou à retirer sur place.',
          '**Reprise :** si une partie est échouée, certains centres autorisent de la repasser seule dans un délai donné ; sinon, tout l’examen.',
          '**Validité :** le certificat TORFL est valable **5 ans** à compter de la délivrance.',
        ],
      },
      {
        h2: 'TORFL et autres certificats de russe',
        content:
          'Le TORFL n’est pas le seul certificat, mais de loin le plus reconnu :',
        table: {
          headers: ['Certificat', 'Organisme', 'Reconnaissance', 'Idéal pour'],
          rows: [
            ['TORFL (ТРКИ)', 'Ministère russe de l’Éducation', 'État, universités, employeurs mondiaux', 'Nationalité, université, usage pro'],
            ['ECL Russian', 'European Consortium for the Certificate of Attainment in Modern Languages', 'Pays de l’UE', 'Reconnaissance académique en Europe'],
            ['TELC Russian', 'telc GmbH (Allemagne)', 'Surtout pays germanophones', 'Immigration vers l’Allemagne/l’Autriche avec preuve de russe'],
          ],
          caption: 'Comparaison des certificats de compétence en russe',
          boldColumnIndices: [0],
        },
        bullets: [
          'Pour la plupart des usages — surtout nationalité, université ou reconnaissance internationale — **seul le TORFL compte vraiment**',
          'Si vous vivez, travaillez ou étudiez en Russie, le TORFL est la norme',
        ],
      },
      {
        h2: 'Conclusion : commencez par la grammaire',
        content:
          'Le TORFL est un examen sérieux et structuré — mais tout à fait accessible avec une préparation ciblée. Les candidats qui réussissent régulièrement ont un point commun : **ils ont massivement investi dans la grammaire, surtout les cas et les déclinaisons**, avant le reste.\n\nCiblez d’abord votre niveau visé, procurez-vous les tests officiels et entraînez-vous à la grammaire chaque jour. Pour B1 et plus, les six cas doivent être automatiques avant le jour J. Le **quiz de déclinaisons gratuit** et l’appli **Russian Cases with Anna** servent précisément à ce type de travail ciblé.\n\nBonne chance — удачи на экзамене! 🍀',
      },
    ],
    conclusion: '',
    ctaText: 'Entraîner les cas russes pour le TORFL — quiz gratuit',
    ctaHref: '/practice',
    faq: [
      {
        question: 'Qu’est-ce que l’examen TORFL ?',
        answer:
          'Le TORFL (Test of Russian as a Foreign Language / ТРКИ — Тест по русскому языку как иностранному) est l’examen officiel de russe reconnu par l’État russe, les universités et les employeurs dans le monde. Il comporte 6 niveaux de A1 à C2 et teste 5 compétences : grammaire, lecture, compréhension orale, écrit et oral.',
      },
      {
        question: 'Quel niveau TORFL pour la nationalité russe ?',
        answer:
          'Il faut au minimum ТРКИ-1 (B1 — premier certificat). Pour le titre de séjour temporaire (РВП), le minimum est ТБУ (A2 — niveau de base).',
      },
      {
        question: 'Le TORFL est-il difficile ?',
        answer:
          'C’est un examen exigeant ; sans préparation, l’échec est fréquent. L’épreuve de grammaire est en général la plus dure : cas, conjugaisons, prépositions. Avec 3 à 6 mois de préparation sérieuse et les tests officiels, l’examen reste tout à fait gérable.',
      },
      {
        question: 'Combien coûte le TORFL ?',
        answer:
          'En Russie, comptez environ 3 500 à 10 000 roubles (40 à 110 $) selon le niveau. À l’étranger, souvent entre 80 et 400 $ selon le pays et le centre.',
      },
      {
        question: 'Peut-on passer le TORFL en ligne ?',
        answer:
          'Certains centres agréés proposent le TORFL à distance, une pratique apparue pendant la Covid. Tous les niveaux ne sont pas toujours disponibles à distance ; les règles varient. Demandez au centre de votre choix.',
      },
      {
        question: 'Combien de temps le certificat TORFL est-il valable ?',
        answer:
          '5 ans à partir de la date de délivrance. Ensuite vous pouvez repasser l’examen au même niveau ou à un niveau supérieur.',
      },
    ],
    leadMagnetCta: {
      title: 'Préparer la grammaire du TORFL — entraînement gratuit',
      description:
        'L’épreuve de grammaire est celle qui fait le plus échouer. Travaillez les six cas avec notre quiz interactif gratuit : plus de 400 mots, singulier et pluriel, correction immédiate.',
      ctaText: 'Commencer à travailler les cas →',
      ctaHref: '/practice',
    },
    internalLinks: [
      { href: '/practice', label: 'Quiz gratuit de déclinaisons' },
      { href: '/practice/accusative', label: 'Entraîner l’accusatif' },
      { href: '/practice/genitive', label: 'Entraîner le génitif' },
      { href: '/practice/dative', label: 'Entraîner le datif' },
      { href: '/practice/instrumental', label: 'Entraîner l’instrumental' },
      { href: '/practice/prepositional', label: 'Entraîner le prépositionnel' },
      { href: '/learn/articles/how-long-learn-russian', label: 'Combien de temps pour apprendre le russe ?' },
      { href: '/learn/articles/russian-cases-explained-beginners-guide', label: 'Les cas russes expliqués : guide débutant' },
      { href: '/words', label: 'Parcourir les 400+ tableaux de déclinaison' },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        'Examen TORFL (ТРКИ) : guide complet du test de compétence en russe',
      description:
        'Guide complet du TORFL (ТРКИ) : 6 niveaux, format en 5 parties, préparation grammaire, centres, coûts et inscription.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/torfl-trki-russian-language-exam-guide',
      },
      keywords:
        'examen TORFL, ТРКИ, préparation TORFL, test de russe, niveaux TORFL, test du russe langue étrangère',
    },
  },
  de_de: torflTrkiLearnArticleDeDe,
  tr_tr: torflTrkiLearnArticleTrTr,
  pl_pl: torflTrkiLearnArticlePlPl,
};
