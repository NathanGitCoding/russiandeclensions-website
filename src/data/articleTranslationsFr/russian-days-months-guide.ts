import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-days-months-guide` (source EN : `learnArticles.ts`). */
export const russianDaysMonthsGuideFr: LearnArticle = {
  slug: 'russian-days-months-guide',
  title: 'Les jours de la semaine et les mois en russe (guide complet 2026)',
  metaTitle:
    'Les jours de la semaine et les mois en russe | Guide complet 2026 | Russian Cases with Anna',
  metaDescription:
    "Apprenez les jours de la semaine et les mois en russe avec la prononciation, et la règle de grammaire qui piège les apprenants : в понедельник (accusatif) vs в январе (prépositionnel).",
  keywords: [
    'jours de la semaine en russe',
    'mois en russe',
    'jours de la semaine russes',
    'mois russes',
    'comment dire les jours en russe',
    'vocabulaire du calendrier russe',
    'понедельник russe',
    'grammaire des dates en russe',
    'jours et mois cas russes',
    'vocabulaire de la semaine en russe',
  ],
  h1: 'Les jours de la semaine et les mois en russe (guide complet)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Apprendre les jours de la semaine et les mois en russe — guide complet',
    width: 1200,
    height: 630,
  },
  intro:
    "Les jours de la semaine et les mois ressemblent à du pur vocabulaire — sept mots, douze mots, on mémorise et on passe à autre chose. **Mais en russe, ils s'accompagnent d'un piège grammatical qui surprend presque tous les apprenants au moins une fois.** Dire « lundi » exige un cas grammatical. Dire « en janvier » en exige un tout autre. Les confondre donne une phrase qui sonne nettement étrangère, même si chaque mot est correct.\n\nBonne nouvelle : **la règle est simple une fois énoncée clairement**, et les manuels russes la formulent rarement en un seul endroit. Ce guide vous donne la liste complète des jours et des mois avec la prononciation, la règle de cas exacte pour « le [jour] » face à « en [mois] », comment construire une date complète, et comment demander quel jour ou quelle date on est.",
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Les sept jours de la semaine en russe, avec prononciation et sens littéral',
    'Les douze mois en russe, avec prononciation et formes au génitif/prépositionnel',
    'La règle centrale : les jours prennent **« в » + accusatif**, les mois prennent **« в » + prépositionnel**',
    'Comment exprimer la **récurrence** : « le lundi » (по + datif pluriel)',
    'Comment construire une date complète et demander « quel jour sommes-nous ? » / « quelle est la date d\'aujourd\'hui ? »',
    'Les erreurs les plus fréquentes — et le mot (среда) dont l\'accent change à l\'accusatif',
  ],
  leadMagnetCta: {
    title: 'Maîtrisez les cas russes au-delà du calendrier — appli gratuite',
    description:
      "Les jours et les mois ne sont qu'un autre endroit où les cas russes apparaissent. Russian Cases with Anna propose des leçons structurées et des quiz intelligents pour automatiser chaque cas — gratuit sur iOS et Android.",
    ctaText: "Télécharger l'appli — Gratuit",
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Les jours de la semaine en russe : la liste complète',
      content:
        "Contrairement à la semaine anglo-saxonne, **la semaine russe commence le lundi** (понедельник) et se termine le dimanche (воскресенье) — cela correspond à la norme ISO et à tout calendrier ou agenda russe que vous verrez. Plusieurs noms de jours deviennent transparents une fois qu'on connaît leur origine.",
      table: {
        headers: ['Jour', 'Russe', 'Translittération', 'Origine littérale'],
        rows: [
          ['Lundi', 'понедельник', "ponedel'nik", 'после недели — « après le (jour de) repos »'],
          ['Mardi', 'вторник', 'vtornik', 'второй — « le deuxième (jour) »'],
          ['Mercredi', 'среда', 'sreda', 'середина — « le milieu (de la semaine) »'],
          ['Jeudi', 'четверг', 'chetverg', 'четвёртый — « le quatrième (jour) »'],
          ['Vendredi', 'пятница', 'pyatnitsa', 'пятый — « le cinquième (jour) »'],
          ['Samedi', 'суббота', 'subbota', "de l'hébreu « Shabbat », via le slavon d'église"],
          ['Dimanche', 'воскресенье', "voskresen'ye", 'воскресение — « Résurrection »'],
        ],
        caption: 'Les sept jours de la semaine en russe',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La semaine russe va du **lundi au dimanche**, et non du dimanche au samedi',
        '**Среда** (mercredi) signifie littéralement « le milieu » — il se trouve au milieu de la semaine de travail',
        '**Суббота** (samedi) est un emprunt à l\'hébreu шаббат (Shabbat), transmis via le slavon d\'église',
        '**Воскресенье** (dimanche) a remplacé l\'ancien mot païen неделя (« sans travail ») avec la christianisation — неделя signifie aujourd\'hui « semaine » en russe moderne',
        'Tous les noms de jours s\'écrivent en **minuscule** en russe, contrairement au français où certains contextes utilisent la majuscule',
      ],
    },
    {
      h2: 'Les mois en russe : la liste complète',
      content:
        "Les noms de mois russes n'ont aucun lien avec les noms français (ils viennent de vieux mots slaves liés à la nature, pas du latin) — à une exception près : ils sont **toujours en minuscule**, et la plupart des apprenants les trouvent plus faciles à prononcer que les jours. Voici la forme nominative (la forme « du dictionnaire ») ainsi que les deux formes que vous emploierez le plus souvent : le génitif (pour les dates) et le prépositionnel (pour « en [mois] »).",
      table: {
        headers: ['Mois', 'Russe (nominatif)', 'Génitif (dates)', 'Prépositionnel (« en… »)'],
        rows: [
          ['Janvier', 'январь', 'января', 'январе'],
          ['Février', 'февраль', 'февраля', 'феврале'],
          ['Mars', 'март', 'марта', 'марте'],
          ['Avril', 'апрель', 'апреля', 'апреле'],
          ['Mai', 'май', 'мая', 'мае'],
          ['Juin', 'июнь', 'июня', 'июне'],
          ['Juillet', 'июль', 'июля', 'июле'],
          ['Août', 'август', 'августа', 'августе'],
          ['Septembre', 'сентябрь', 'сентября', 'сентябре'],
          ['Octobre', 'октябрь', 'октября', 'октябре'],
          ['Novembre', 'ноябрь', 'ноября', 'ноябре'],
          ['Décembre', 'декабрь', 'декабря', 'декабре'],
        ],
        caption: 'Les mois russes : formes nominative, génitive et prépositionnelle',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La plupart des mois sont **masculins** et se terminent par une consonne ou **-ь** (январь, май, июнь)',
        'La forme au génitif (utilisée dans les dates) se termine toujours par **-я** : января, февраля, марта…',
        'La forme au prépositionnel (utilisée après « в » pour « en [mois] ») se termine par **-е** : январе, феврале, марте…',
        '**Июнь** (juin) et **июль** (juillet) sont facilement confondus à l\'oral rapide — écoutez la consonne finale : -нь contre -ль',
        'Les noms de mois ne prennent jamais de majuscule en russe, même en début de phrase',
      ],
    },
    {
      h2: 'La règle de grammaire : les jours prennent l\'accusatif, les mois le prépositionnel',
      content:
        "C'est la règle qui piège presque tous les apprenants. Quand vous dites « **le [jour]** » ou « **en [mois]** » avec la préposition **в**, le cas qui suit diffère entre jours et mois — et il n'y a pas de raccourci, il faut simplement savoir lequel est lequel.\n\n**Jours de la semaine : « в » + accusatif.** Он придёт **в понедельник** (Il viendra lundi). Мы встречаемся **во вторник** (Nous nous voyons mardi).\n\n**Mois : « в » + prépositionnel.** Я родился **в январе** (Je suis né en janvier). Свадьба будет **в июне** (Le mariage aura lieu en juin).\n\nPour les noms de jours masculins (понедельник, вторник, четверг), l'accusatif est identique au nominatif, donc la règle est invisible. Elle devient visible avec les trois jours féminins — среда, пятница, суббота — qui changent réellement de forme, et avec воскресенье, qui est neutre et reste également inchangé.",
      table: {
        headers: ['Catégorie', 'Cas après « в »', 'Exemple'],
        rows: [
          ['Jours de la semaine', 'Accusatif', 'в понедельник, во вторник, в среду, в пятницу, в субботу'],
          ['Mois', 'Prépositionnel', 'в январе, в марте, в июне, в декабре'],
        ],
        caption: 'Jours contre mois : quel cas suit « в »',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Среда** (mercredi) est le plus piégeux : le nominatif est accentué sredá, mais l\'accusatif **в сре́ду** déplace l\'accent sur la première syllabe — un schéma classique de déplacement d\'accent en russe (comme рука́ → в ру́ку)',
        '**Пятница → в пятницу** et **суббота → в субботу** : tous deux féminins, tous deux prennent la terminaison régulière **-у** à l\'accusatif',
        '**Вторник** devient **во вторник** (et non в вторник) — « в » se transforme en « во » devant un groupe de consonnes, pour faciliter la prononciation',
        'Une erreur fréquente consiste à dire « **в январь** » au lieu de **в январе** — les mois ne prennent jamais l\'accusatif après « в » dans ce contexte',
        'La même règle de l\'accusatif s\'applique à d\'autres expressions de temps : **в эту среду** (ce mercredi), **в прошлый вторник** (mardi dernier)',
      ],
    },
    {
      h2: 'Parler de chaque lundi, chaque semaine : « По » + datif pluriel',
      content:
        'Pour exprimer qu\'un événement a lieu **régulièrement** un jour donné (« le lundi », « chaque mardi »), le russe change entièrement de préposition : on utilise **по** avec le **datif pluriel** du jour, et non **в** avec l\'accusatif singulier.',
      table: {
        headers: ['Français', 'Russe', 'Cas'],
        rows: [
          ['le lundi (chaque lundi)', 'по понедельникам', 'Datif pluriel'],
          ['le mardi', 'по вторникам', 'Datif pluriel'],
          ['le mercredi', 'по средам', 'Datif pluriel'],
          ['le jeudi', 'по четвергам', 'Datif pluriel'],
          ['le vendredi', 'по пятницам', 'Datif pluriel'],
          ['le samedi', 'по субботам', 'Datif pluriel'],
          ['le dimanche', 'по воскресеньям', 'Datif pluriel'],
        ],
        caption: 'Jours récurrents : по + datif pluriel',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**У меня русский по понедельникам** (J\'ai cours de russe le lundi) — un jour unique et récurrent',
        'Comparez : **в понедельник** (ce lundi précis, à venir) contre **по понедельникам** (tous les lundis, systématiquement)',
        'C\'est le même schéma **по + datif** que dans « по субботам магазин закрыт » (le magasin est fermé le samedi)',
      ],
    },
    {
      h2: 'Comment dire la date complète en russe',
      content:
        "Une date complète combine trois éléments, chacun sous une forme différente : le **numéro du jour** (un ordinal neutre, car le nom sous-entendu est число — « date/numéro »), le **mois** (au génitif), et l'**année** (un ordinal au cas prépositionnel, introduit par в).\n\n**5 juin 2026 → пятое июня две тысячи двадцать шестого года.**\n\nPour un développement plus approfondi sur les nombres ordinaux et la formation des années, consultez notre [guide complet des nombres russes](/learn/articles/russian-numbers-guide) — cette section se limite ici à la mécanique jour/mois/année propre à l'écriture des dates complètes.",
      table: {
        headers: ['Français', 'Russe', 'Remarques'],
        rows: [
          ['1er janvier', 'первое января', 'Ordinal (neutre) + mois au génitif'],
          ['8 mars', 'восьмое марта', 'Ordinal (neutre) + mois au génitif'],
          ['9 mai', 'девятое мая', 'Ordinal (neutre) + mois au génitif'],
          ['31 décembre', 'тридцать первое декабря', 'Ordinal composé + mois au génitif'],
        ],
        caption: 'Écrire les dates : jour (ordinal) + mois (génitif)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "Dans une date, « le » ne se traduit pas par **в** — on utilise simplement l'ordinal seul : **Я приеду пятого июня** (J'arriverai le 5 juin) — c'est le génitif, pas l'accusatif, car cela répond à « quand exactement » en tant que date, pas comme jour de la semaine",
        'Les dates écrites sur les documents utilisent le format numérique **jour.mois.année** : 05.06.2026',
        "Pour les années, la construction « en [année] » est **в две тысячи двадцать шестом году** — voir le guide des nombres pour le détail complet",
      ],
    },
    {
      h2: 'Comment demander « quel jour sommes-nous ? » et « quelle est la date ? »',
      content:
        'Le russe distingue deux questions ici — ne les confondez pas, car elles utilisent des mots interrogatifs différents et attendent des réponses dans des cas différents.',
      table: {
        headers: ['Question', 'Russe', 'Exemple de réponse'],
        rows: [
          ['Quel jour de la semaine sommes-nous ?', 'Какой сегодня день недели?', 'Сегодня среда. (Nominatif)'],
          ["Quelle est la date d'aujourd'hui ?", 'Какое сегодня число?', 'Сегодня пятое июня. (Ordinal + mois au génitif)'],
          ['Quel jour serons-nous vendredi ?', 'Какой день недели будет в пятницу?', '—'],
        ],
        caption: 'Demander le jour et la date',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какой сегодня день (недели)?** demande le jour de la semaine — réponse au nominatif : Сегодня понедельник (Aujourd\'hui, c\'est lundi)',
        '**Какое сегодня число?** demande la date du calendrier — réponse avec l\'ordinal + mois au génitif : Сегодня пятнадцатое марта (Aujourd\'hui, c\'est le 15 mars)',
        'Les deux questions utilisent « сегодня » (aujourd\'hui), mais **какой** (masculin, s\'accorde avec день) et **какое** (neutre, s\'accorde avec число) ne sont pas interchangeables',
      ],
    },
    {
      h2: 'Erreurs fréquentes avec les jours et les mois',
      content:
        'Ces quatre erreurs représentent la majorité des fautes commises par les apprenants avec les jours et les mois russes :',
      bullets: [
        '**Utiliser l\'accusatif après les mois.** Dire « **в январь** » au lieu de **в январе**. Les mois prennent toujours le prépositionnel après в.',
        '**Utiliser le prépositionnel après les jours.** Dire « **в понедельнике** » au lieu de **в понедельник**. Les jours prennent toujours l\'accusatif après в.',
        '**Oublier le déplacement d\'accent dans среда.** Le nominatif est sredá, mais l\'accusatif est **сре́ду** — l\'accent se déplace sur la première syllabe. Dire sredú sonne étranger.',
        '**Confondre какой et какое.** Какой день (masculin, s\'accorde avec день) contre какое число (neutre, s\'accorde avec число) — les confondre est une erreur très fréquente chez les débutants.',
        '**Mélanger в + accusatif (un jour précis) et по + datif pluriel (chaque semaine).** В субботу = ce samedi ; по субботам = chaque samedi.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quel cas prennent les jours de la semaine en russe ?',
      answer:
        "Les jours de la semaine prennent l'**accusatif** après la préposition **в** : в понедельник (lundi), во вторник (mardi), в среду (mercredi). Les noms de jours masculins et neutres sont identiques au nominatif à l'accusatif ; les trois jours féminins (среда, пятница, суббота) changent de terminaison, et среда déplace aussi son accent : **в сре́ду**.",
    },
    {
      question: 'Quel cas prennent les mois en russe ?',
      answer:
        'Les mois prennent le **prépositionnel** après в pour dire « en [mois] » : в январе (en janvier), в июне (en juin), в декабре (en décembre). C\'est différent de l\'accusatif utilisé pour les jours — une source d\'erreur fréquente chez les apprenants.',
    },
    {
      question: 'La semaine russe commence-t-elle le lundi ou le dimanche ?',
      answer:
        "La semaine russe commence le **lundi** (понедельник) et se termine le **dimanche** (воскресенье), conformément à la norme ISO 8601. C'est le contraire de la convention traditionnelle du calendrier américain, où la semaine commence le dimanche.",
    },
    {
      question: 'Comment dit-on « tous les lundis » en russe ?',
      answer:
        "Utilisez **по + datif pluriel** : по понедельникам (le lundi / tous les lundis). C'est différent de **в понедельник** (accusatif singulier), qui désigne un lundi précis, et non une récurrence.",
    },
    {
      question: 'Comment dit-on une date complète en russe, comme « 5 juin 2026 » ?',
      answer:
        "Combinez un nombre ordinal (neutre, pour le jour) avec le mois au génitif : **пятое июня** (5 juin). Pour l'année, ajoutez le nombre ordinal de l'année, également au génitif, introduit par « of » : **пятое июня две тысячи двадцать шестого года**. Consultez notre [guide des nombres russes](/learn/articles/russian-numbers-guide) pour les règles complètes sur les ordinaux et les années.",
    },
  ],
  conclusion:
    "Les jours et les mois ressemblent à de simples listes de vocabulaire, mais ils constituent en réalité une leçon compacte sur le fonctionnement des cas russes dans de vraies phrases du quotidien. Une fois que la règle centrale devient évidente — **les jours prennent l'accusatif après в, les mois prennent le prépositionnel après в** — vous pouvez parler de votre emploi du temps, de votre anniversaire et de vos projets avec une vraie assurance.\n\nLe moyen le plus rapide de rendre cela automatique est de l'utiliser : mentionnez le jour où quelque chose se passe, utilisez по + datif pluriel pour votre routine hebdomadaire, et entraînez-vous à dire des dates complètes à voix haute. Parler du calendrier revient dans presque toutes les conversations réelles — c'est donc l'un des schémas grammaticaux les plus rentables à travailler.",
  conclusionBullets: [
    'La semaine russe va du **lundi au dimanche** — sept noms de jours, tous en minuscule',
    'Les douze mois n\'ont aucun lien avec les noms latins et sont eux aussi toujours en minuscule',
    'Règle centrale : **jours + в → accusatif** ; **mois + в → prépositionnel**',
    'Les jours récurrents utilisent **по + datif pluriel** : по понедельникам (le lundi)',
    'Среда est le mot à surveiller — son accent se déplace à l\'accusatif : **в сре́ду**',
  ],
  conclusionOutro:
    "Les jours et les mois ne sont qu'un petit coin d'un système bien plus vaste — les mêmes cas accusatif et prépositionnel que vous venez d'utiliser régissent les noms, les pronoms et les adjectifs dans toute la langue. **Maîtriser ce système de cas complet est ce qui transforme « je connais quelques mots russes » en un vrai russe fluide.**",
  ctaText: 'Télécharger Russian Cases with Anna — Gratuit',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Les nombres en russe : comment compter en russe (guide complet)',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Salutations en russe : comment dire bonjour en russe (guide complet)',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: "L'accent tonique en russe : pourquoi il change tout (et comment le maîtriser)",
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Prépositions russes et cas : quelle préposition régit quel cas ?',
    },
    { href: '/practice', label: 'Quiz de déclinaisons russes gratuit (les six cas)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Les jours de la semaine et les mois en russe (guide complet 2026)',
    description:
      "Apprenez les jours de la semaine et les mois en russe avec la prononciation, et la règle de grammaire qui piège les apprenants : в понедельник (accusatif) vs в январе (prépositionnel).",
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Francophone passionné de russe, partage ce qui fonctionne vraiment.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-days-months-guide',
    },
    keywords:
      'jours de la semaine en russe, mois en russe, jours de la semaine russes, mois russes, vocabulaire du calendrier russe, grammaire des dates en russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
