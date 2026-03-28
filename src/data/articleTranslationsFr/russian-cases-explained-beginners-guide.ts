import type { LearnArticle } from '../learnArticles';

/** Traduction française (fr_fr) de l’article « russian-cases-explained-beginners-guide » — source EN : `learnArticles.ts`. Cyrillic preserved from EN source. */
export const russianCasesExplainedBeginnersGuideFr: LearnArticle = {
  slug: 'russian-cases-explained-beginners-guide',
  title:
    'Les cas russes expliqués simplement : guide visuel pour débutants',
  metaTitle:
    'Les cas russes expliqués simplement : guide pour débutants | Russian Cases with Anna',
  metaDescription:
    'Les 6 cas grammaticaux du russe expliqués en français simple avec des exemples clairs. Nominatif, accusatif, génitif, datif, instrumental et prépositionnel en une dizaine de minutes.',
  keywords: [
    'cas russes expliqués',
    'cas russes débutants',
    'cas grammaticaux russe simple',
    'comprendre les cas russes',
    'exemples cas russes',
    '6 cas russes',
  ],
  h1: 'Les cas russes expliqués simplement : guide visuel pour débutants',
  heroImage: {
    src: '/articles/top-10-apps-to-learn-russian-2026.webp',
    alt: 'Les 6 cas du russe expliqués simplement pour débutants',
    width: 1200,
    height: 630,
  },
  intro:
    "Le russe compte **6 cas grammaticaux**, et c’est le plus gros obstacle pour les anglophones. Bonne nouvelle : ce n’est pas si effrayant. Chaque cas répond à une question simple, et une fois que vous comprenez **à quoi sert chaque cas**, les terminaisons deviennent beaucoup plus abordables.\n\nCe guide présente les **6 cas en français clair**, avec un exemple net pour chacun. Pas de jargon linguistique, pas de tableaux écrasants — juste l’essentiel pour démarrer.",
  whatYouLearn: [
    '**Ce qu’est un cas grammatical** et pourquoi le russe en a',
    '**Les 6 cas expliqués** avec un exemple simple chacun',
    '**Dans quel ordre les apprendre** (priorité débutant)',
    '**Comment changent les terminaisons des noms** — aperçu simplifié',
    '**Où s’entraîner** — quiz gratuit et ressources',
  ],
  leadMagnetCta: {
    title: 'Prêt à pratiquer les cas russes ?',
    description:
      'Téléchargez Russian Cases with Anna — la seule appli 100 % dédiée aux déclinaisons russes. 128 leçons, 136 quiz, 400+ mots. Gratuit sur iOS et Android.',
    ctaText: 'Télécharger l’appli — gratuit',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Qu’est-ce qu’un cas grammatical ?',
      content:
        "En français, c’est souvent **l’ordre des mots** qui indique qui fait quoi. « Le chien mord l’homme » et « L’homme mord le chien » ne veulent pas dire la même chose — le sujet est en tête.\n\nLe russe fonctionne autrement. Plutôt que l’ordre des mots, le russe modifie la **fin du mot** pour montrer son rôle dans la phrase. Ces différentes formes s’appellent des **cas**.\n\nEn français aussi les pronoms changent : on dit « **Je** **le** vois », pas « *moi vois il* » — la forme dépend du rôle. Le russe fait pareil — mais pour **chaque nom, adjectif et pronom**.\n\nIl y a **6 cas** en russe. Chacun répond à une question précise et marque un rôle grammatical.",
    },
    {
      h2: 'Les 6 cas du russe en un coup d’œil',
      content:
        'Avant le détail, voici un aperçu. Chaque cas répond à une question et modifie la terminaison du nom :',
      table: {
        headers: ['Cas', 'Nom russe', 'Question', 'Exemple'],
        rows: [
          ['Nominatif', 'Именительный', 'Qui ? Quoi ?', 'Кошка спит — Le chat dort'],
          ['Accusatif', 'Винительный', 'Qui ? Quoi ? (objet)', 'Я вижу кошку — Je vois le chat'],
          ['Génitif', 'Родительный', 'De qui ? De quoi ?', 'Нет кошки — Il n’y a pas de chat'],
          ['Datif', 'Дательный', 'À qui ? Pour qui ?', 'Дай кошке — Donne au chat'],
          ['Instrumental', 'Творительный', 'Par qui ? Avec quoi ?', 'С кошкой — Avec le chat'],
          ['Prépositionnel', 'Предложный', 'À propos de qui ? Où ?', 'О кошке — À propos du chat'],
        ],
        caption:
          'Les 6 cas du russe avec questions et exemples avec кошка (chat)',
        accentColumnIndices: [3],
      },
      bullets: [
        'Remarquez comment **кошка** (chat) change de terminaison à chaque cas : кошка → кошку → кошки → кошке → кошкой → кошке',
        'Ce schéma de terminaisons s’appelle la **déclinaison** — chaque nom russe suit l’une des déclinaisons',
      ],
    },
    {
      h2: 'Cas 1 : nominatif (Именительный) — le sujet',
      content:
        "Le nominatif est la **forme de dictionnaire** — celle que vous trouvez dans le lexique. Il répond aux questions **Кто? (qui ?)** et **Что? (quoi ?)**.\n\nOn l’emploie pour le **sujet** de la phrase — celui qui fait l’action.",
      subsections: [
        {
          h3: 'Exemples',
          content:
            '**Мама** готовит ужин — **Maman** prépare le dîner\n\n**Книга** лежит на столе — **Le livre** est sur la table\n\n**Студент** читает — **L’étudiant** lit',
        },
      ],
      bullets: [
        'Le nominatif est le **cas le plus simple** — pas de changement de terminaison à apprendre pour cette fonction',
        'Toute phrase russe contient au moins un nom au nominatif',
        'C’est la forme que vous connaissez déjà dans les listes de vocabulaire',
      ],
    },
    {
      h2: 'Cas 2 : accusatif (Винительный) — complément d’objet direct',
      content:
        "L’accusatif répond à **Кого? (qui ?)** et **Что? (quoi ?)** — mais cette fois comme **objet** de l’action, pas comme sujet. Il marque ce sur quoi porte l’action.\n\nOn l’utilise aussi avec les **verbes de mouvement** pour la direction (aller **vers** un lieu).",
      subsections: [
        {
          h3: 'Exemples',
          content:
            'Я вижу **маму** — Je vois **maman** (мама → маму)\n\nОн читает **книгу** — Il lit **le livre** (книга → книгу)\n\nМы идём **в школу** — Nous allons **à l’école** (школа → школу)',
        },
      ],
      bullets: [
        'Pour les **noms féminins**, -а devient **-у** (мама → маму)',
        'Pour les **noms masculins inanimés**, l’accusatif est identique au nominatif (стол → стол)',
        'Pour les **noms masculins animés**, l’accusatif ressemble au génitif (студент → студента)',
      ],
    },
    {
      h2: 'Cas 3 : génitif (Родительный) — possession et absence',
      content:
        "Le génitif répond à **Кого? (de qui ?)** et **Чего? (de quoi ?)**. C’est le cas de la **possession** (comme « de » ou le génitif saxon en anglais), de l’**absence** (il n’y a pas de…), et des **quantités**.\n\nC’est l’un des cas les plus fréquents — vous le croiserez partout.",
      subsections: [
        {
          h3: 'Exemples',
          content:
            'Книга **мамы** — Le livre **de maman** (мама → мамы)\n\nНет **воды** — Il n’y a pas **d’eau** (вода → воды)\n\nСтакан **молока** — Un verre **de lait** (молоко → молока)\n\nУ **студента** есть книга — **L’étudiant** a un livre (студент → студента)',
        },
      ],
      bullets: [
        'Pour les **noms féminins**, -а devient **-ы** ou **-и** (мама → мамы, книга → книги)',
        'Pour les **noms masculins**, on ajoute **-а** ou **-я** (студент → студента, учитель → учителя)',
        'Employé après les **nombres 2–4** et après **нет** (négation)',
      ],
    },
    {
      h2: 'Cas 4 : datif (Дательный) — complément d’objet indirect',
      content:
        "Le datif répond à **Кому? (à qui ?)** et **Чему? (à quoi ?)**. Il marque le **destinataire** — à qui l’on donne, à qui l’on parle, pour qui l’on agit.\n\nIl entre aussi dans des tournures courantes d’**âge** et de **sentiments**.",
      subsections: [
        {
          h3: 'Exemples',
          content:
            'Я дал книгу **маме** — J’ai donné le livre **à maman** (мама → маме)\n\n**Мне** 25 лет — **J’ai** 25 ans (я → мне)\n\n**Студенту** нужна помощь — **L’étudiant** a besoin d’aide (студент → студенту)',
        },
      ],
      bullets: [
        'Pour les **noms féminins**, -а devient **-е** (мама → маме)',
        'Pour les **noms masculins**, on ajoute **-у** ou **-ю** (студент → студенту)',
        'Expressions d’âge : **Мне** 20 лет (littéralement : « à moi 20 ans »)',
      ],
    },
    {
      h2: 'Cas 5 : instrumental (Творительный) — moyen et accompagnement',
      content:
        "L’instrumental répond à **Кем? (par qui ? / avec qui ?)** et **Чем? (avec quoi ?)**. Il décrit le **moyen** ou l’**instrument**, ainsi que l’**accompagnement** (avec quelqu’un).\n\nOn l’emploie aussi après **быть** pour les professions.",
      subsections: [
        {
          h3: 'Exemples',
          content:
            'Я пишу **ручкой** — J’écris **au stylo** (ручка → ручкой)\n\nОна работает **учительницей** — Elle travaille **comme enseignante** (учительница → учительницей)\n\nЯ иду **с мамой** — Je vais **avec maman** (мама → мамой)',
        },
      ],
      bullets: [
        'Pour les **noms féminins**, -а devient **-ой** ou **-ей** (мама → мамой, земля → землёй)',
        'Pour les **noms masculins**, on ajoute **-ом** ou **-ем** (студент → студентом)',
        'Toujours après la préposition **с** (avec) pour l’accompagnement',
      ],
    },
    {
      h2: 'Cas 6 : prépositionnel (Предложный) — lieu et sujet de pensée',
      content:
        "Le prépositionnel répond à **О ком? (à propos de qui ?)** et **О чём? (à propos de quoi ?)**. Comme son nom l’indique, il est **toujours lié à une préposition** — surtout **в** (dans), **на** (sur / à) et **о** (à propos de).\n\nC’est le seul cas russe qui ne peut jamais apparaître sans préposition.",
      subsections: [
        {
          h3: 'Exemples',
          content:
            'Я живу **в Москве** — J’habite **à Moscou** (Москва → Москве)\n\nОн думает **о маме** — Il pense **à maman** (мама → маме)\n\nКнига **на столе** — Le livre est **sur la table** (стол → столе)',
        },
      ],
      bullets: [
        'Pour les **noms féminins**, -а devient **-е** (мама → маме, Москва → Москве)',
        'Pour les **noms masculins**, on ajoute **-е** (стол → столе, студент → студенте)',
        'Le prépositionnel et le datif ont souvent **les mêmes terminaisons** — le contexte les distingue',
      ],
    },
    {
      h2: 'Quels cas apprendre en premier ?',
      content:
        "Inutile de maîtriser les 6 cas d’un coup. Voici l’**ordre d’apprentissage** recommandé selon fréquence et difficulté :",
      bullets: [
        '**1. Nominatif** — vous le connaissez déjà (forme du dictionnaire)',
        '**2. Accusatif** — indispensable pour les phrases simples (« je mange du pain », « je vois un chien »)',
        '**3. Génitif** — très courant (possession, négation, quantités)',
        '**4. Prépositionnel** — relativement facile (toujours avec préposition, terminaisons simples)',
        '**5. Datif** — moins fréquent mais important (objets indirects, âge)',
        '**6. Instrumental** — le moins courant au quotidien, mais nécessaire',
      ],
    },
    {
      h2: 'Commencer à pratiquer tout de suite',
      content:
        "Comprendre les cas est la première étape. La suivante, c’est la **pratique active** — revoir et choisir les bonnes formes jusqu’à l’automatisation.\n\nPour démarrer :\n\n• Faites notre **quiz de déclinaison en ligne gratuit** sur russiandeclensions.com/practice — choisissez les cas à travailler et répondez à 10 questions à choix multiples parmi plus de 400 noms réels.\n\n• Parcourez nos **tableaux de déclinaison complets** sur russiandeclensions.com/words — voyez comment chaque mot change dans les 6 cas.\n\n• Téléchargez l’appli **Russian Cases with Anna** pour un parcours structuré avec quiz interactifs, répétition espacée et mode hors ligne.",
    },
  ],
  conclusion:
    "Les cas russes sont simplement des **étiquettes pour les rôles des mots** dans la phrase. Le nominatif, c’est l’acteur ; l’accusatif, ce qui subit l’action ; le génitif, la possession ; le datif, le destinataire ; l’instrumental, le moyen ; le prépositionnel, le lieu ou le sujet de la pensée.\n\nUne fois que vous comprenez **ce que signifie chaque cas**, apprendre les terminaisons devient une question de reconnaissance de motifs et de pratique. N’essayez pas de tout mémoriser d’un coup — un cas à la fois, jusqu’à ce que ce soit naturel, puis le suivant.",
  conclusionBullets: [
    '**6 cas, 6 rôles** — chaque cas répond à une question précise',
    '**Commencez par l’accusatif et le génitif** — les deux plus fréquents après le nominatif',
    '**Pratiquez avec de vrais mots** — notre quiz et nos tableaux de déclinaison',
    '**Un cas à la fois** — ne vous surchargez pas avec les 6 d’un coup',
    '**La régularité gagne** — 10 minutes par jour valent mieux que 2 heures une fois par semaine',
  ],
  conclusionOutro:
    'Approfondissez chaque cas avec nos guides détaillés :',
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Guide complet des cas russes — les 6 cas en profondeur',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Aide-mémoire des terminaisons — toutes les fins en un tableau',
    },
    {
      href: '/practice/accusative',
      label: 'Pratiquer l’accusatif — quiz gratuit',
    },
    {
      href: '/practice/genitive',
      label: 'Pratiquer le génitif — quiz gratuit',
    },
    {
      href: '/words',
      label: 'Parcourir 400+ mots russes — tableaux de déclinaison complets',
    },
  ],
  ctaText: 'Commencer à pratiquer les cas russes',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Combien de cas y a-t-il en russe ?',
      answer:
        'Le russe a **6 cas grammaticaux** : nominatif (Именительный), accusatif (Винительный), génitif (Родительный), datif (Дательный), instrumental (Творительный) et prépositionnel (Предложный). Chaque cas modifie les terminaisons des noms, adjectifs et pronoms pour indiquer leur rôle dans la phrase.',
    },
    {
      question: 'Quel est le cas russe le plus difficile ?',
      answer:
        'Beaucoup d’apprenants trouvent le **génitif** le plus difficile : il a le plus d’emplois (possession, absence, quantités, après certains nombres, après de nombreuses prépositions) et des pluriels irréguliers. Chaque cas reste cependant challengeant selon la langue maternelle.',
    },
    {
      question: 'Faut-il vraiment apprendre les 6 cas ?',
      answer:
        'Oui — les **6 cas** sont tous activement employés dans le russe moderne. On ne peut pas former des phrases correctes sans eux. En revanche, vous n’avez pas besoin de tout apprendre en même temps. Commencez par le **nominatif** et l’**accusatif**, puis ajoutez les autres progressivement.',
    },
    {
      question: 'Quel est le cas russe le plus facile ?',
      answer:
        'Le **nominatif** est le plus facile : c’est la forme du dictionnaire, sans changement de terminaison pour cette fonction. Ensuite, le **prépositionnel** est souvent jugé le plus simple : il apparaît toujours avec une préposition et a des terminaisons assez régulières (**-е** pour la plupart des noms).',
    },
    {
      question: 'Combien de temps pour apprendre les cas russes ?',
      answer:
        'Avec une pratique quotidienne régulière, la plupart des apprenants comprennent les bases des **6 cas en quelques semaines** et les emploient correctement dans des phrases simples en **3 à 6 mois**. Une maîtrise complète (formes irrégulières et pluriels) demande en général **1 à 2 ans** d’étude régulière.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Les cas russes expliqués simplement : guide visuel pour débutants',
    description:
      'Les 6 cas grammaticaux du russe expliqués en français avec des exemples simples. Nominatif, accusatif, génitif, datif, instrumental et prépositionnel.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
    },
    keywords:
      'cas russes expliqués, cas russes débutants, 6 cas russes, cas grammaticaux russe, comprendre cas russes',
  },
};
