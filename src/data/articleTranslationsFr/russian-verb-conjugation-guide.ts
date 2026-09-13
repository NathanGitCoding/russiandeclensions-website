import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-verb-conjugation-guide` (source EN : `learnArticles.ts`). */
export const russianVerbConjugationGuideFr: LearnArticle = {
  slug: 'russian-verb-conjugation-guide',
  title: 'Conjugaison des verbes russes : le guide complet (présent, passé et futur)',
  metaTitle: 'Conjugaison des verbes russes : présent, passé et futur | Russian Cases with Anna',
  metaDescription:
    'Apprenez la conjugaison des verbes russes étape par étape : les deux groupes de conjugaison, les terminaisons au présent, les mutations consonantiques, le passé, le futur et 8 verbes irréguliers entièrement conjugués.',
  keywords: [
    'conjugaison des verbes russes',
    'conjuguer les verbes russes',
    'temps des verbes russes',
    'conjugaison au présent en russe',
    'verbes au passé en russe',
    'première et deuxième conjugaison russe',
    'terminaisons des verbes russes',
    'comment conjuguer les verbes en russe',
  ],
  h1: 'Conjugaison des verbes russes : le guide complet du présent, du passé et du futur',
  intro:
    "Les noms russes se déclinent ; les verbes russes se conjuguent — et les deux systèmes ne jouent pas dans la même catégorie de difficulté. Les cas vous punissent avec une dizaine de terminaisons possibles par mot. La conjugaison des verbes, en comparaison, est presque mécanique : **une fois que vous savez à lequel des deux groupes de conjugaison un verbe appartient, six terminaisons vous disent tout sur qui fait quoi, et quand.**\n\nLe piège, c'est que « presque mécanique » cache encore quelques pièges : une poignée de verbes qui ressemblent à une conjugaison mais se comportent comme l'autre, des consonnes qui mutent discrètement à la forme « je », et un passé qui ignore complètement la personne pour ne s'intéresser qu'au genre et au nombre. Rien de tout cela n'est difficile une fois clairement exposé — et contrairement aux cas, l'essentiel de la conjugaison des verbes peut être intégré en **une seule session d'étude**.\n\nCe guide passe en revue les deux groupes de conjugaison, des tableaux complets au présent, le passé (et ses exceptions), les deux façons de construire un futur, et huit verbes irréguliers que vous utiliserez dans presque toutes les conversations.",
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    "Comment distinguer les deux groupes de conjugaison à partir de l'infinitif — et de la forme « ils » quand l'infinitif vous trompe",
    'Les terminaisons complètes au présent pour les deux groupes de conjugaison, avec des exemples travaillés',
    'Les mutations consonantiques qui changent la forme « je » (я) de nombreux verbes',
    'Comment former le passé en quelques secondes — et les verbes en -ти / -чь qui brisent le schéma',
    'La différence entre le futur simple (perfectif) et le futur composé (буду + infinitif)',
    '8 verbes irréguliers que vous utiliserez tous les jours, entièrement conjugués',
  ],
  leadMagnetCta: {
    title: 'Les terminaisons verbales ne sont que la moitié du problème — appli gratuite',
    description:
      'La conjugaison gère les verbes ; les cas russes gèrent tout le reste — noms, adjectifs et pronoms. Russian Cases with Anna entraîne les six cas avec des leçons structurées et des quiz intelligents. Gratuit sur iOS et Android.',
    ctaText: "Télécharger l'appli — Gratuit",
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Les deux groupes de conjugaison : comment les distinguer',
      content:
        "Chaque verbe russe appartient à l'un des deux groupes de conjugaison, traditionnellement appelés **première conjugaison** et **deuxième conjugaison**. Le groupe détermine quel jeu de six terminaisons le verbe prend au présent (et au futur simple).\n\nLa terminaison de l'infinitif est une bonne première indication : la plupart des verbes en **-ать / -ять** sont de première conjugaison, et la plupart des verbes en **-ить** sont de deuxième conjugaison. Mais ce n'est qu'une indication — une courte liste bien connue d'exceptions se conjugue « à l'envers », donc l'infinitif seul ne prouve rien.",
      table: {
        headers: [
          'Conjugaison',
          "Terminaison d'infinitif typique",
          'Exemple',
          'Terminaison « ils » (они)',
        ],
        rows: [
          ['Première (I)', '-ать, -ять, la plupart des -еть', 'читать, гулять, уметь', '-ут / -ют'],
          [
            'Deuxième (II)',
            '-ить (la plupart), quelques -еть / -ать',
            'говорить, смотреть, слышать',
            '-ат / -ят',
          ],
        ],
        caption: 'Les deux groupes de conjugaison des verbes russes',
        boldColumnIndices: [0],
      },
      bullets: [
        'Le test le plus fiable est la forme **они (ils)** : **-ут/-ют** signifie toujours première conjugaison, **-ат/-ят** signifie toujours deuxième conjugaison',
        'Une courte liste de verbes courants en **-еть** se conjugue en **deuxième**, pas en première : смотреть, видеть, зависеть, вертеть, обидеть, ненавидеть, терпеть',
        "Une courte liste de verbes en **-ать** se conjugue aussi en deuxième : слышать, дышать, держать, гнать — les professeurs de russe les appellent « les 7 verbes d'exception »",
        '**Брить** (se raser) et **стелить** (étendre/faire le lit) ressemblent à des verbes en -ить mais se conjuguent en **première** : бре́ю, бре́ешь, бре́ет…',
      ],
    },
    {
      h2: 'Le présent : les terminaisons de la première conjugaison (-е-)',
      content:
        "Les verbes de première conjugaison utilisent une voyelle **-е-** dans la plupart de leurs terminaisons. La lettre exacte (у/ю, ешь, ет…) dépend uniquement du fait que le radical du verbe se termine par une voyelle ou une consonne — une règle d'orthographe, pas une différence de sens.",
      table: {
        headers: ['Pronom', 'Terminaison', 'читать (lire)', 'гулять (se promener)'],
        rows: [
          ['я', '-у / -ю', 'читаю', 'гуляю'],
          ['ты', '-ешь', 'читаешь', 'гуляешь'],
          ['он / она / оно', '-ет', 'читает', 'гуляет'],
          ['мы', '-ем', 'читаем', 'гуляем'],
          ['вы', '-ете', 'читаете', 'гуляете'],
          ['они', '-ут / -ют', 'читают', 'гуляют'],
        ],
        caption: 'Terminaisons du présent de la première conjugaison',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      bullets: [
        'Les radicaux terminés par une **consonne** (чита-) prennent **-у / -ешь / -ет / -ем / -ете / -ут**',
        'Les radicaux terminés par une **voyelle** (гуля-) prennent **-ю / -ешь / -ет / -ем / -ете / -ют** — mêmes terminaisons, juste ю au lieu de у et ют au lieu de ут',
        "L'accent peut se déplacer de façon imprévisible : писать → пишу́ (terminaison accentuée) mais пи́шешь, пи́шет… (l'accent revient sur le radical) — vérifiez toujours l'accent dans un dictionnaire",
      ],
    },
    {
      h2: 'Le présent : les terminaisons de la deuxième conjugaison (-и-)',
      content:
        'Les verbes de deuxième conjugaison utilisent une voyelle **-и-** dans la plupart de leurs terminaisons. La forme я et la forme они sont celles où la deuxième conjugaison diffère le plus de la première — et où les mutations consonantiques apparaissent le plus souvent.',
      table: {
        headers: ['Pronom', 'Terminaison', 'говорить (parler)', 'видеть (voir)'],
        rows: [
          ['я', '-у / -ю', 'говорю', 'вижу'],
          ['ты', '-ишь', 'говоришь', 'видишь'],
          ['он / она / оно', '-ит', 'говорит', 'видит'],
          ['мы', '-им', 'говорим', 'видим'],
          ['вы', '-ите', 'говорите', 'видите'],
          ['они', '-ат / -ят', 'говорят', 'видят'],
        ],
        caption: 'Terminaisons du présent de la deuxième conjugaison',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      subsections: [
        {
          h3: 'Les mutations consonantiques à la forme я',
          content:
            "Un groupe de verbes de deuxième conjugaison change discrètement une consonne — mais **uniquement à la forme я**. Toutes les autres formes (ты, он, мы, вы, они) conservent la consonne d'origine, non mutée.",
          table: {
            headers: ['Mutation', 'Infinitif', 'Forme я', 'Forme ты (non mutée)'],
            rows: [
              ['д → ж', 'видеть', 'вижу', 'видишь'],
              ['т → ч', 'платить', 'плачу', 'платишь'],
              ['с → ш', 'просить', 'прошу', 'просишь'],
              ['ст → щ', 'простить', 'прощу', 'простишь'],
              ['б → бл', 'любить', 'люблю', 'любишь'],
              ['в → вл', 'готовить', 'готовлю', 'готовишь'],
              ['п → пл', 'купить', 'куплю', 'купишь'],
            ],
            caption: 'Mutations consonantiques à la forme я des verbes de deuxième conjugaison',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        "La mutation est **limitée à la forme я** — une erreur très fréquente chez les débutants consiste à l'appliquer partout : лю́бишь, et non *любьишь",
        'Le même type de mutation apparaît aussi dans certains verbes de **première conjugaison**, mais là elle parcourt tout le présent, pas seulement la forme я : писать → пишу, пишешь, пишет, пишем, пишете, пишут (с→ш partout)',
        "La **règle orthographique des 7 lettres** explique pourquoi on écrit **они пишут**, et non *пишют : après ж, ш, щ, ч, ц, г, к, х, l'orthographe russe n'autorise jamais ю ou я — seulement у ou а",
      ],
    },
    {
      h2: 'Le passé : le temps le plus simple du russe (avec quelques pièges)',
      content:
        "Bonne nouvelle d'abord : **le groupe de conjugaison n'a aucune importance pour le passé.** Retirez **-ть** de l'infinitif et ajoutez une terminaison qui s'accorde avec le **genre et le nombre du sujet** — pas avec la personne, contrairement au français et à la plupart des langues européennes.",
      table: {
        headers: ['Sujet', 'Terminaison', 'читать → passé', 'говорить → passé'],
        rows: [
          ['он (masc.)', '-л', 'чита́л', 'говори́л'],
          ['она (fém.)', '-ла', 'чита́ла', 'говори́ла'],
          ['оно (neutre)', '-ло', 'чита́ло', 'говори́ло'],
          ['они / мы / вы', '-ли', 'чита́ли', 'говори́ли'],
        ],
        caption: 'Terminaisons du passé : genre et nombre, pas la personne',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Exceptions : les verbes en -ти et -чь',
          content:
            'Un petit groupe de verbes fréquents ne suit pas le schéma net en -л. Les verbes en **-ти** (идти, нести, вести) et en **-чь** (мочь, помочь, печь) changent souvent de radical ou perdent complètement le -л au masculin.',
          table: {
            headers: ['Infinitif', 'он (masc.)', 'она (fém.)', 'они (plur.)'],
            rows: [
              ['идти (aller)', 'шёл', 'шла', 'шли'],
              ['мочь (pouvoir)', 'мог', 'могла', 'могли'],
              ['нести (porter)', 'нёс', 'несла', 'несли'],
              ['печь (cuire au four)', 'пёк', 'пекла', 'пекли'],
            ],
            caption: 'Radicaux du passé irréguliers : verbes en -ти et -чь',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        "Le passé s'accorde avec le **genre et le nombre**, pas la personne : un locuteur masculin dit **я чита́л**, une locutrice féminine dit **я чита́ла** — même pronom, forme verbale différente",
        '**Мочь** et les autres verbes en -чь perdent complètement le -л au masculin : **мог**, et non *могл',
        '**Идти** a un radical du passé entièrement suppletif (шёл), différent de son radical au présent (иду) — les deux formes ne partagent aucune lettre',
      ],
    },
    {
      h2: 'Le futur : simple ou composé',
      content:
        "Le russe construit le futur de deux manières différentes, et le choix dépend entièrement de l'**aspect**, pas d'un sens que vous choisiriez librement. Si vous n'avez pas encore étudié les verbes perfectifs et imperfectifs, notre [guide de l'aspect verbal russe](/learn/articles/russian-verbal-aspect-perfective-imperfective) est le complément naturel de cette section.",
      table: {
        headers: ['Aspect', 'Structure', 'Exemple', 'Sens'],
        rows: [
          [
            'Perfectif — futur simple',
            'Conjugué comme un verbe au présent',
            'я прочита́ю',
            'je vais le lire (et le terminer)',
          ],
          [
            'Imperfectif — futur composé',
            'буду/будешь/будет/будем/будете/будут + infinitif imperfectif',
            'я бу́ду чита́ть',
            'je vais être en train de lire / je vais lire (en cours)',
          ],
        ],
        caption: 'Futur simple (perfectif) contre futur composé (imperfectif)',
        boldColumnIndices: [0],
      },
      bullets: [
        "Un verbe **perfectif** n'a pas de présent — le conjuguer selon le schéma du présent produit automatiquement un sens **futur** : я прочита́ю (je lirai), pas « je suis en train de lire »",
        "Un verbe **imperfectif** a besoin de l'auxiliaire **буду** (je serai) conjugué selon le sujet, suivi de l'infinitif imperfectif : мы **будем** говори́ть (nous serons en train de parler / nous parlerons)",
        'Ne conjuguez jamais un infinitif imperfectif directement pour le futur — *я читаю за́втра книгу ne signifie pas « je lirai le livre demain » ; il faut буду читать',
      ],
    },
    {
      h2: '8 verbes irréguliers à connaître',
      content:
        "Une poignée de verbes extrêmement courants ne rentre proprement dans aucune des deux conjugaisons. Ils méritent d'être mémorisés comme des schémas à part — vous utiliserez la plupart d'entre eux quotidiennement.",
      table: {
        headers: ['Infinitif', 'я', 'ты', 'он', 'мы', 'вы', 'они'],
        rows: [
          ['хоте́ть (vouloir)', 'хочу́', 'хо́чешь', 'хо́чет', 'хоти́м', 'хоти́те', 'хотя́т'],
          ['есть (manger)', 'ем', 'ешь', 'ест', 'еди́м', 'еди́те', 'едя́т'],
          ['дать (donner)', 'дам', 'дашь', 'даст', 'дади́м', 'дади́те', 'даду́т'],
          ['бежа́ть (courir)', 'бегу́', 'бежи́шь', 'бежи́т', 'бежи́м', 'бежи́те', 'бегу́т'],
          ['е́хать (aller, en véhicule)', 'е́ду', 'е́дешь', 'е́дет', 'е́дем', 'е́дете', 'е́дут'],
          ['пить (boire)', 'пью', 'пьёшь', 'пьёт', 'пьём', 'пьёте', 'пьют'],
          ['жить (vivre)', 'живу́', 'живёшь', 'живёт', 'живём', 'живёте', 'живу́т'],
          ['мочь (pouvoir)', 'могу́', 'мо́жешь', 'мо́жет', 'мо́жем', 'мо́жете', 'мо́гут'],
        ],
        caption: '8 verbes russes irréguliers courants, entièrement conjugués',
        boldColumnIndices: [0],
      },
      bullets: [
        "**Хотеть** mélange les conjugaisons : le singulier (хочу́, хо́чешь, хо́чет) suit la première conjugaison, le pluriel (хоти́м, хоти́те, хотя́т) suit la deuxième — une véritable curiosité qui mérite d'être mémorisée à part",
        '**Есть** et **дать** partagent un schéma « athématique » rare, présent seulement dans une poignée de verbes russes — aucun des deux ne correspond à la première ni à la deuxième conjugaison',
        "Le présent du verbe **быть** (« être ») est presque toujours **omis** en russe moderne : **Я студе́нт** (Je suis étudiant), et non *Я есть студент — la forme archaïque есть survit surtout dans des expressions figées comme **У меня́ есть…** (J'ai…)",
      ],
    },
    {
      h2: 'Erreurs fréquentes avec la conjugaison des verbes russes',
      content:
        'Ces cinq erreurs représentent la majorité des fautes de conjugaison commises par les apprenants :',
      subsections: [
        {
          h3: "Erreur 1 : deviner la mauvaise conjugaison à partir de l'infinitif",
          content:
            '**Faux** : Я **смотрею** телевизор.\n**Correct** : Я **смотрю** телевизор.\n\n**Pourquoi** : смотреть se termine par -еть, ce qui indique généralement la première conjugaison — mais смотреть fait partie des exceptions bien connues qui se conjuguent en **deuxième**.',
        },
        {
          h3: 'Erreur 2 : appliquer la mutation de la forme я à toutes les formes',
          content:
            "**Faux** : Ты **любишь**… **любю** ? — confusion sur la forme qui mute.\n**Correct** : Я **люблю**, ты **любишь**, он **любит**.\n\n**Pourquoi** : la mutation б → бл ne se produit **qu'à la forme я**. Toutes les autres formes utilisent la consonne simple, non mutée.",
        },
        {
          h3: 'Erreur 3 : utiliser des terminaisons liées à la personne au passé',
          content:
            "**Faux** : Она **говорил** по-русски.\n**Correct** : Она **говорила** по-русски.\n\n**Pourquoi** : le passé s'accorde avec le **genre et le nombre du sujet**, jamais avec la personne. Она est féminin, donc le verbe doit prendre -ла, quel que soit le locuteur.",
        },
        {
          h3: 'Erreur 4 : conjuguer un verbe perfectif là où une habitude est visée',
          content:
            "**Faux** : Ка́ждый день я **прочита́ю** кни́гу.\n**Correct** : Ка́ждый день я **чита́ю** кни́гу.\n\n**Pourquoi** : les verbes perfectifs n'ont pas de présent, donc conjuguer прочитать ainsi signifie en réalité « je lirai » (futur), pas une habitude quotidienne. Les actions habituelles ont besoin de l'imperfectif, читать.",
        },
        {
          h3: 'Erreur 5 : enfreindre la règle orthographique des 7 lettres',
          content:
            "**Faux** : Они **пишют** пи́сьма.\n**Correct** : Они **пишут** пи́сьма.\n\n**Pourquoi** : après ж, ш, щ, ч, ц, г, к, х, l'orthographe russe n'autorise jamais ю ou я — écrivez у ou а à la place, même quand la terminaison « attendue » utiliserait normalement ю ou я.",
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Quels sont les deux groupes de conjugaison en russe ?',
      answer:
        "Les verbes russes se répartissent en **première conjugaison** (terminaisons construites autour de -е- : -у/-ю, -ешь, -ет, -ем, -ете, -ут/-ют) et **deuxième conjugaison** (terminaisons construites autour de -и- : -у/-ю, -ишь, -ит, -им, -ите, -ат/-ят). La plupart des verbes en -ать/-ять sont de première conjugaison et la plupart des verbes en -ить sont de deuxième, mais une courte liste d'exceptions courantes (смотреть, слышать, держать…) brise ce schéma.",
    },
    {
      question: 'Comment savoir si un verbe est de première ou de deuxième conjugaison ?',
      answer:
        "Le test le plus fiable est la forme **они (ils)** : si elle se termine par **-ут/-ют**, le verbe est de première conjugaison ; si elle se termine par **-ат/-ят**, il est de deuxième conjugaison. La terminaison de l'infinitif est une bonne première indication, mais ce n'est pas une preuve, puisque des verbes comme смотреть (-еть) et держать (-ать) se conjuguent en deuxième conjugaison.",
    },
    {
      question: 'Le passé russe change-t-il selon la personne, comme en français ?',
      answer:
        "Non. Le passé russe s'accorde avec le **genre et le nombre** du sujet, pas avec la personne. Chaque sujet utilise le même schéma de terminaisons : -л (masculin), -ла (féminin), -ло (neutre), -ли (pluriel) — donc я читал et он читал sont identiques si le locuteur est un homme.",
    },
    {
      question: 'Quelle est la différence entre le futur simple et le futur composé en russe ?',
      answer:
        "Le **futur simple** se construit en conjuguant un verbe perfectif selon le schéma du présent (я прочита́ю — je lirai, action terminée). Le **futur composé** se construit avec l'auxiliaire буду/будешь/будет/будем/будете/будут suivi d'un infinitif imperfectif (я бу́ду чита́ть — je vais lire / être en train de lire, en cours). Le choix dépend de l'aspect du verbe, pas d'une préférence personnelle.",
    },
    {
      question:
        'Existe-t-il de véritables verbes irréguliers en russe, ou seulement des exceptions ?',
      answer:
        "Les deux existent. Des verbes comme хотеть (conjugaison mixte), есть et дать (un schéma athématique rare) ou идти (un radical du passé suppletif, шёл) sont réellement irréguliers et doivent être mémorisés individuellement. La plupart des autres « irrégularités » — comme смотреть qui se conjugue en deuxième conjugaison, ou les verbes en -чь qui perdent le -л au masculin — sont de petits groupes d'exceptions bien documentés plutôt qu'un vrai chaos.",
    },
  ],
  conclusionIntro:
    "La conjugaison des verbes russes récompense l'effort fourni dès le début — contrairement aux cas, l'essentiel peut réellement s'intégrer en une seule session d'étude concentrée :",
  conclusionBullets: [
    "**Identifiez le groupe de conjugaison** à partir de la forme они, pas seulement de l'infinitif — -ут/-ют est la première, -ат/-ят est la deuxième",
    "**Apprenez les listes d'exceptions** : les verbes en -еть type смотреть et en -ать type слышать se conjuguent en deuxième",
    "**Surveillez les mutations à la forme я** (любить → люблю) — elles ne s'appliquent qu'à cette seule forme",
    '**Le passé = genre + nombre**, pas la personne : -л / -ла / -ло / -ли',
    "**Le futur suit l'aspect** : le perfectif se conjugue directement ; l'imperfectif a besoin de буду + infinitif",
    'Mémorisez le petit groupe de **verbes irréguliers** (хотеть, есть, дать, идти…) comme des schémas à part',
  ],
  conclusionOutro:
    "La conjugaison vous donne le verbe ; les cas russes donnent tout ce sur quoi le verbe agit — les terminaisons du nom, de l'adjectif et du pronom qui font vraiment tenir une phrase. Une fois que les terminaisons verbales deviennent automatiques, notre outil de pratique gratuit sur russiandeclensions.com/practice est l'étape naturelle suivante pour s'entraîner de façon interactive sur les six cas — sans inscription.",
  ctaText: 'Pratiquer les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  internalLinks: [
    {
      href: '/practice',
      label: 'Quiz de déclinaison russe gratuit — entraînez-vous sur les 6 cas',
    },
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: 'L’aspect verbal en russe : perfectif vs imperfectif expliqués',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Les verbes de mouvement russes : guide complet',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: "L'accent tonique en russe : pourquoi il change tout (et comment le maîtriser)",
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Conjugaison des verbes russes : le guide complet (présent, passé et futur)',
    description:
      'Apprenez la conjugaison des verbes russes étape par étape : les deux groupes de conjugaison, les terminaisons au présent, les mutations consonantiques, le passé, le futur et 8 verbes irréguliers entièrement conjugués.',
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verb-conjugation-guide',
    },
    keywords:
      'conjugaison des verbes russes, conjuguer les verbes russes, temps des verbes russes, conjugaison au présent en russe, verbes au passé en russe, terminaisons des verbes russes',
  },
};
