import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-family-vocabulary` (source EN : `learnArticles.ts`). */
export const russianFamilyVocabularyFr: LearnArticle = {
  slug: 'russian-family-vocabulary',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Vocabulaire de la famille en russe : maman, papa, frères, sœurs et proches',
  metaTitle: 'Vocabulaire de la famille en russe | Russian Cases with Anna',
  metaDescription:
    'Apprenez les mots de famille en russe : мама, папа, frères et sœurs, proches, pluriels irréguliers, et « j’ai… » avec у + génitif — plus un mini-dialogue.',
  keywords: [
    'vocabulaire famille russe',
    'membres de la famille en russe',
    'mots russes pour la famille',
    'мама папа russe',
    'vocabulaire parents russes',
    'parler de sa famille en russe',
    'у меня есть famille russe',
    'liste famille russe',
  ],
  h1: 'Vocabulaire de la famille en russe : maman, papa, frères, sœurs et proches',
  heroImage: {
    src: '/articles/russian-family-vocabulary-header.webp',
    alt: 'Album photo de famille ouvert et carnet avec les mots russes мама папа брат сестра',
    width: 1280,
    height: 720,
  },
  intro:
    'Les mots de famille font partie des premiers noms dont vous avez besoin en russe — et des plus utiles. Vous vous en servirez pour vous présenter, demander des nouvelles des autres, et parler du quotidien. Ils vous plongent aussi directement dans la **vraie grammaire** : des pluriels irréguliers comme **брат → братья**, et le schéma classique de possession **у меня есть…** avec le **génitif**.\n\nCe guide vous donne le vocabulaire de la famille proche et élargie, les pluriels qui cassent le schéma régulier, des phrases de présentation prêtes à l’emploi, et un court dialogue à pratiquer à voix haute.',
  whatYouLearn: [
    'Les mots essentiels de la famille proche (parents, frères et sœurs, enfants, conjoint)',
    'Le vocabulaire de la famille élargie (grands-parents, oncles, tantes, beaux-parents)',
    'Les pluriels irréguliers à mémoriser (братья, сёстры, дети…)',
    'Comment dire « j’ai un/une… » avec **у + génitif**',
    'Des phrases utiles pour présenter votre famille',
    'Un mini-dialogue réutilisable dans de vraies conversations',
  ],
  leadMagnetCta: {
    title: 'Les mots de famille s’ancrent plus vite quand les cas deviennent automatiques',
    description:
      'У меня есть брата est faux — у меня есть брат est juste, mais le génitif apparaît partout ailleurs autour de la famille. Russian Cases with Anna entraîne les six cas avec de vraies phrases. Gratuit sur iOS et Android.',
    ctaText: "Télécharger l'appli — Gratuit",
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Mots de la famille proche',
      content:
        'Commencez ici. Ce sont les noms de famille les plus fréquents dans le russe du quotidien — ceux que vous entendrez dans presque chaque présentation personnelle.',
      table: {
        headers: ['Russe', 'Translittération', 'Français', 'Genre'],
        rows: [
          ['мама / мать', "mama / mat'", 'maman / mère', 'Féminin'],
          ['папа / отец', 'papa / otets', 'papa / père', 'Masculin'],
          ['родители', 'roditeli', 'parents', 'Pluriel'],
          ['сын', 'syn', 'fils', 'Masculin'],
          ['дочь', "doch'", 'fille', 'Féminin'],
          ['ребёнок / дети', 'rebyonok / deti', 'enfant / enfants', 'Masc. / Pluriel'],
          ['брат', 'brat', 'frère', 'Masculin'],
          ['сестра', 'sestra', 'sœur', 'Féminin'],
          ['муж', 'muzh', 'mari', 'Masculin'],
          ['жена', 'zhena', 'femme (épouse)', 'Féminin'],
          ['семья', "sem'ya", 'famille', 'Féminin'],
        ],
        caption: 'Famille proche — vocabulaire de base pour débutants',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        '**Мама / папа** sont les formes du quotidien ; **мать / отец** sonnent plus formels ou officiels (documents, discours soutenu).',
        '**Ребёнок** est le singulier « enfant » ; le pluriel est irrégulier **дети** — pas *ребёнки*.',
        '**Семья** (« famille ») est féminin singulier même s’il désigne un groupe : **моя семья большая** (Ma famille est grande).',
        'Exception de genre naturel : **папа**, **мужчина**, **дедушка** se terminent en **-а/-я** mais sont **grammaticalement masculins** — ils prennent des adjectifs masculins (**мой папа**, pas *моя папа*).',
      ],
    },
    {
      h2: 'Mots de la famille élargie',
      content:
        'Une fois le noyau solide, ajoutez les proches dont vous avez besoin pour raconter, les fêtes et les présentations plus longues.',
      table: {
        headers: ['Russe', 'Translittération', 'Français', 'Genre'],
        rows: [
          ['бабушка', 'babushka', 'grand-mère', 'Féminin'],
          ['дедушка', 'dedushka', 'grand-père', 'Masculin'],
          ['бабушка и дедушка', 'babushka i dedushka', 'grands-parents', '—'],
          ['внук', 'vnuk', 'petit-fils', 'Masculin'],
          ['внучка', 'vnuchka', 'petite-fille', 'Féminin'],
          ['дядя', 'dyadya', 'oncle', 'Masculin'],
          ['тётя', 'tyotya', 'tante', 'Féminin'],
          ['двоюродный брат', 'dvoyurodnyy brat', 'cousin (homme)', 'Masculin'],
          ['двоюродная сестра', 'dvoyurodnaya sestra', 'cousine', 'Féminin'],
          ['племянник', 'plemyannik', 'neveu', 'Masculin'],
          ['племянница', 'plemyannitsa', 'nièce', 'Féminin'],
          ['свекровь', "svekrov'", 'belle-mère (mère du mari)', 'Féminin'],
          ['тёща', 'tyoshcha', 'belle-mère (mère de la femme)', 'Féminin'],
          ['свёкор', 'svyokor', 'beau-père (père du mari)', 'Masculin'],
          ['тесть', "test'", 'beau-père (père de la femme)', 'Masculin'],
        ],
        caption: 'Famille élargie et beaux-parents',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        'Le russe distingue souvent **de quel côté** vient un beau-parent — le « belle-mère » anglais se scinde en **свекровь** vs **тёща**.',
        '**Дядя** et **дедушка** ont l’air féminins (-я/-а) mais sont masculins : **мой дядя**, **добрый дедушка**.',
        '« Cousin » se dit en général **двоюродный брат / двоюродная сестра** — le russe n’a pas un seul mot courant neutre comme l’anglais « cousin ».',
      ],
    },
    {
      h2: 'Pluriels irréguliers à mémoriser',
      content:
        'Plusieurs noms de famille refusent le pluriel régulier. Apprenez-les comme des paires fixes — ils reviennent sans cesse en conversation.',
      table: {
        headers: ['Singulier', 'Pluriel', 'Français', 'Note'],
        rows: [
          ['брат', 'бра́тья', 'frère → frères', 'Pluriel irrégulier en -ья'],
          ['сын', 'сыновья́ / сыны́', 'fils → fils (pl.)', 'сыновья est le pluriel courant à l’oral'],
          ['друг', 'друзья́', 'ami → amis', 'Même schéma -ья ; pas la famille, mais le même piège'],
          ['ребёнок', 'де́ти', 'enfant → enfants', 'Pluriel supplétif (racine différente)'],
          ['человек', 'лю́ди', 'personne → gens', 'Supplétif ; utile pour la taille de la famille'],
          ['мать', 'ма́тери', 'mère → mères', 'Changement de radical'],
          ['дочь', 'до́чери', 'fille → filles', 'Changement de radical'],
          ['сестра', 'сёстры', 'sœur → sœurs', 'Accent + ё'],
          ['муж', 'мужья́', 'mari → maris', 'Irrégulier en -ья'],
          ['жена', 'жёны', 'épouse → épouses', 'Accent + ё'],
        ],
        caption: 'Pluriels de famille qui cassent le schéma régulier',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Брат → братья** est l’un des irréguliers les plus utiles du russe débutant — entraînez-le tôt.',
        '**Дети** est le seul pluriel normal de **ребёнок** dans le parler quotidien.',
        'Pour aller plus loin sur les pluriels nominatifs irréguliers, voir le [guide du nominatif](/learn/articles/russian-nominative-case).',
      ],
    },
    {
      h2: 'Parler de sa famille avec У + génitif',
      content:
        'Le « j’ai… » anglais se rend en général par **у + génitif + есть** en russe. Le **possesseur** va au génitif après **у** ; la chose possédée reste au **nominatif**.',
      table: {
        headers: ['Russe', 'Translittération', 'Français'],
        rows: [
          ['У меня есть брат.', "U menya yest' brat.", "J'ai un frère."],
          ['У меня есть сестра.', "U menya yest' sestra.", "J'ai une sœur."],
          ['У него есть жена.', "U nego yest' zhena.", 'Il a une femme.'],
          ['У неё есть дети.', "U neyo yest' deti.", 'Elle a des enfants.'],
          ["У нас большая семья.", "U nas bol'shaya sem'ya.", 'Nous avons une grande famille.'],
          ['У вас есть дети?', "U vas yest' deti?", 'Avez-vous des enfants ? (formel/pluriel)'],
        ],
        caption: 'Possession avec у + génitif',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Le schéma en une ligne',
          content:
            '**У + moi/toi/lui… (génitif) + есть + personne/chose (nominatif).**\n\nDonc : **у меня** (génitif de я), **у тебя**, **у него / у неё**, **у нас**, **у вас**, **у них**. Après une préposition, **он/она/они** prennent les formes en **н-** : него, неё, них.',
        },
        {
          h3: 'La négation met la chose possédée au génitif',
          content:
            'Affirmatif : **У меня есть брат.** (брат = nominatif)\nNégatif : **У меня нет брата.** (брата = génitif)\n\nC’est l’un des premiers endroits où les apprenants comprennent pourquoi le [cas génitif](/learn/articles/russian-genitive-case) compte autant.',
        },
      ],
      bullets: [
        'Ne dites **pas** *Я имею брата* pour un « j’ai un frère » normal — cela sonne peu naturel dans ce sens.',
        '**Есть** peut disparaître à l’oral quand un adjectif est présent : **У нас большая семья.**',
        'Enchaînez avec le même schéma : **А у тебя?** (Et toi ?).',
      ],
    },
    {
      h2: 'Phrases utiles pour les présentations',
      content:
        'Mémorisez un petit jeu de phrases complètes. Elles recyclent le vocabulaire ci-dessus et sonnent naturelles lors d’une première rencontre.',
      table: {
        headers: ['Russe', 'Français'],
        rows: [
          ['Это моя семья.', "C'est ma famille."],
          ['Это мой папа и моя мама.', "C'est mon papa et ma maman."],
          ['У меня два брата и одна сестра.', "J'ai deux frères et une sœur."],
          ['Мой младший брат студент.', 'Mon frère cadet est étudiant.'],
          ['Моя старшая сестра живёт в Москве.', 'Ma sœur aînée vit à Moscou.'],
          ['Мы из большой семьи.', 'Nous venons d’une grande famille.'],
          ['Знакомьтесь: это мой муж / моя жена.', 'Je vous présente : mon mari / ma femme.'],
          ['У нас трое детей.', 'Nous avons trois enfants.'],
        ],
        caption: 'Phrases de présentation famille très fréquentes',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Старший / младший** (aîné / cadet) s’accordent comme des adjectifs : **старшая сестра**, **младший брат**.',
        'Les nombres déclenchent des règles de cas : **два брата**, **три сестры**, **пять детей** — détails dans le [guide des nombres](/learn/articles/russian-numbers-guide) et l’article sur le génitif.',
        'Pointer avec **это** laisse le nom suivant au **nominatif** : **Это моя мама.**',
      ],
    },
    {
      h2: 'Mini-dialogue : rencontrez ma famille',
      content:
        'Une courte conversation à adapter. Lisez-la à voix haute, puis remplacez par vos propres proches.',
      table: {
        headers: ['Locuteur', 'Russe', 'Français'],
        rows: [
          ['Anna', 'Привет! Расскажи о своей семье.', 'Salut ! Parle-moi de ta famille.'],
          [
            'Ivan',
            'У меня есть мама, папа и младшая сестра.',
            "J'ai une maman, un papa et une sœur cadette.",
          ],
          ['Anna', 'А братья у тебя есть?', 'Et tu as des frères ?'],
          ['Ivan', 'Нет, у меня нет братьев. А у тебя?', "Non, je n'ai pas de frères. Et toi ?"],
          [
            'Anna',
            'У меня два брата. Старший брат женат.',
            "J'ai deux frères. L'aîné est marié.",
          ],
          ['Ivan', 'Круто. А родители где живут?', 'Cool. Et où vivent tes parents ?'],
          [
            'Anna',
            'В Казани. А моя бабушка живёт с нами.',
            'À Kazan. Et ma grand-mère vit avec nous.',
          ],
        ],
        caption: 'Mini-dialogue réutilisable sur la famille',
        boldColumnIndices: [1],
      },
      bullets: [
        'Remarquez **нет братьев** — la négation met « frères » au **génitif pluriel**.',
        '**Женат** (marié, pour un homme) / **замужем** (mariée, pour une femme) sont des suites très utiles après avoir parlé de la famille.',
        'Changez les noms et les villes, gardez le cadre grammatical.',
      ],
    },
    {
      h2: 'Erreurs fréquentes avec le vocabulaire de la famille russe',
      bullets: [
        '**Dire *моя папа*.** Папа est masculin → **мой папа**.',
        '**Utiliser *ребёнки* au pluriel.** Utilisez **дети**.',
        '**Oublier le génitif après нет :** *У меня нет брат* ✗ → **У меня нет брата** ✓.',
        '**Mélanger свекровь et тёща** — elles ne sont pas interchangeables.',
        '**Traduire « j’ai » par я имею** dans le parler famille courant — préférez **у меня есть**.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quels sont les mots de famille russes les plus importants pour débutants ?',
      answer:
        'Commencez par мама, папа, брат, сестра, сын, дочь, муж, жена, ребёнок/дети et семья. Ajoutez ensuite бабушка, дедушка, дядя et тётя. Cela couvre presque chaque présentation débutant.',
    },
    {
      question: 'Comment dit-on « j’ai un frère » en russe ?',
      answer:
        'Dites У меня есть брат. Le possesseur (меня) est au génitif après у, et брат reste au nominatif. Pour « je n’ai pas de frère », dites У меня нет брата — брата est au génitif.',
    },
    {
      question: 'Pourquoi папа est-il masculin s’il se termine en -а ?',
      answer:
        'Parce que le genre naturel l’emporte pour les personnes masculines. Des mots comme папа, дедушка, дядя et мужчина ont l’air féminins à l’écrit mais prennent l’accord masculin : мой папа, добрый дедушка.',
    },
    {
      question: 'Quel est le pluriel de брат et de ребёнок ?',
      answer:
        'Брат → братья (irrégulier). Ребёнок → дети (racine entièrement différente). Les deux formes sont à mémoriser absolument pour parler de la famille.',
    },
    {
      question: 'Comment les Russes disent-ils « cousin » ?',
      answer:
        'En général двоюродный брат pour un cousin et двоюродная сестра pour une cousine. Il n’existe pas un seul mot courant neutre qui fonctionne comme l’anglais « cousin » dans tous les contextes.',
    },
  ],
  conclusion: '',
  conclusionIntro:
    'Le vocabulaire de la famille est un pack débutant parfait : des mots utiles plus une grammaire qui apparaît vraiment à l’oral.',
  conclusionBullets: [
    'Apprenez d’abord la **famille proche**, puis les **proches élargis** et les beaux-parents',
    'Mémorisez les **pluriels irréguliers** : братья, дети, мужья, сёстры…',
    'Construisez chaque « j’ai… » avec **у + génitif + (есть) + nominatif**',
    'Utilisez **нет + génitif** pour « je n’ai pas… »',
    'Pratiquez avec un court dialogue jusqu’à ce que les cadres deviennent automatiques',
  ],
  conclusionOutro:
    'Quand ces phrases vous semblent faciles, poussez la grammaire plus loin avec notre [guide du génitif](/learn/articles/russian-genitive-case) et la [pratique de déclinaison](/practice) gratuite — parler de la famille est l’un des moyens les plus rapides de rendre les cas concrets.',
  internalLinks: [
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Cas génitif russe : règles, terminaisons et 32 exemples réels',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Salutations en russe : comment dire bonjour en russe',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 mots russes les plus courants',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Cas nominatif russe : règles, terminaisons et 24 exemples réels',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Le genre des noms russes : masculin, féminin, neutre',
    },
    {
      href: '/practice',
      label: 'Quiz gratuit de déclinaison russe',
    },
  ],
  ctaText: 'Entraînez-vous aux cas russes — Gratuit →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vocabulaire de la famille en russe : maman, papa, frères, sœurs et proches',
    description:
      'Apprenez les mots de famille en russe : мама, папа, frères et sœurs, proches, pluriels irréguliers, et « j’ai… » avec у + génitif — plus un mini-dialogue.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Francophone passionné de russe ; écrit sur la grammaire, les cas et les habitudes d’auto-apprentissage concrètes.',
      worksFor: {
        '@type': 'Organization',
        name: 'Russian Cases with Anna®',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Russian Cases with Anna®',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-family-vocabulary',
    },
    keywords:
      'vocabulaire famille russe, membres de la famille en russe, mots russes pour la famille, parler de sa famille en russe, у меня есть famille russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-family-vocabulary-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
