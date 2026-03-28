import type { LearnArticle } from '../learnArticles';

/** Traduction française de l’article `russian-genitive-case` (source EN : `learnArticles.ts`). Cyrillique copié à l’identique. */
export const russianGenitiveCaseFr: LearnArticle = {
  slug: 'russian-genitive-case',
  title:
    'Cas génitif russe : règles, terminaisons et 32 exemples réels',
  metaTitle:
    'Cas génitif russe : règles, terminaisons et exemples | Russian Cases with Anna',
  metaDescription:
    'Le guide le plus complet sur le génitif en russe : 7 emplois, terminaisons au singulier et au pluriel, formes irrégulières, 16 prépositions, nombres, У + génitif. 32 exemples réels avec translittération.',
  keywords: [
    'cas génitif russe',
    'terminaisons génitif russe',
    'règles génitif russe',
    'génitif pluriel russe',
    'exemples génitif russe',
    'grammaire possession russe',
  ],
  h1: 'Cas génitif russe : règles, terminaisons et 32 exemples réels',
  heroImage: {
    src: '/articles/free-russian-lesson-genitive-case.webp',
    alt: 'Leçon de russe gratuite sur le cas génitif : possession, négation et quantités',
    width: 1200,
    height: 630,
  },
  intro:
    'Si vous ne deviez maîtriser **qu’un seul cas russe** en plus du nominatif, choisissez le **génitif**. Le génitif russe est de loin le **cas le plus fréquent** après le nominatif — il apparaît dans les structures de **possession**, la **négation**, les **quantités**, les **dates**, et après plus de **prépositions** que tout autre cas.\n\nCe guide couvre tout : les règles, toutes les terminaisons, les formes irrégulières qui piègent tout le monde, et **32 phrases russes d’exemple** pour voir concrètement comment le génitif fonctionne.',
  whatYouLearn: [
    'Ce qu’est le génitif russe et quand l’utiliser (7 emplois essentiels)',
    'Terminaisons du génitif singulier — tous les genres de noms avec exemples',
    'Terminaisons du génitif pluriel — dont la « terminaison zéro » et les voyelles fugitives',
    '11 pluriels génitifs irréguliers à mémoriser (человек → людей, глаз → глаз, etc.)',
    '16 prépositions qui exigent le génitif',
    'Nombres et quantités avec le génitif (2/3/4 vs 5+, 21, 22, 25…)',
    'Génitif vs accusatif — le piège du masculin animé',
    'La construction У + génitif pour dire « avoir » en russe',
  ],
  leadMagnetCta: {
    title: 'Entraînez le génitif russe avec des exercices intelligents',
    description:
      'Notre application mobile fait travailler les 6 cas du russe — y compris le pluriel génitif — avec la répétition espacée, de vraies phrases et un retour immédiat. Disponible sur Android et iOS.',
    ctaText: 'Téléchargez l’app et commencez à vous entraîner dès aujourd’hui',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Guide complet des cas russes : les 6 cas expliqués avec des exemples',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Terminaisons des cas russes : l’aide-mémoire ultime',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Cas datif russe : comment dire « à » et « pour » en russe',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Qu’est-ce que le cas génitif russe ?',
      content:
        'Le **cas génitif** (Родительный падеж — littéralement le « cas de l’origine ») est le deuxième des six cas russes. Son nom évoque sa fonction principale : indiquer **l’origine, l’appartenance ou la relation** — il répond aux questions **Кого ?** (de qui ?) et **Чего ?** (de quoi ?). En anglais, on exprime ces relations avec **of** ou le possessif **’s**.\n\nEn russe, tout se fait par les **terminaisons des mots** — sans mot supplémentaire. Exemple : le nom de la ville = **название города** (города est город au génitif).',
      subsections: [
        {
          h3: 'Réponse courte',
          content:
            'Le génitif russe répond aux questions **Кого ?** (de qui ?) et **Чего ?** (de quoi ?).\n\nOn l’emploie surtout pour la **possession**, l’**absence**, la **quantité**, et il est obligatoire après un grand nombre de **prépositions** courantes.',
        },
      ],
    },
    {
      h2: '7 emplois essentiels du génitif russe',
      content:
        'Le génitif est le cas le **plus polyvalent** du russe.\n\nIl apparaît dans la **possession**, la **négation**, les **quantités**, les **prépositions**, les **comparaisons**, les **dates**, et avec **certains verbes**.',
      image: {
        src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
        alt: 'Aide-mémoire : quand utiliser le cas génitif en russe',
        width: 1200,
        height: 630,
      },
      subsections: [
        {
          h3: 'Emploi 1 — Possession et appartenance',
          content:
            'Le génitif remplace l’anglais **of** ou le possessif **’s**. Dès qu’un nom **appartient** à un autre, le **possesseur** se met au **génitif**.',
          bullets: [
            "**дом отца** — la maison du père (litt. : la maison du père)",
            '**столица России** — la capitale de la Russie',
            '**конец фильма** — la fin du film',
          ],
        },
        {
          h3: 'Emploi 2 — Absence et négation (нет, не было, не будет)',
          content:
            'Dès que vous dites qu’une chose **n’existe pas**, n’est pas disponible ou est absente, le génitif est obligatoire. Les constructions **нет**, **не было** et **не будет** se construisent toujours avec le génitif.',
          bullets: [
            "**У меня нет машины.** — Je n’ai pas de voiture. (нет + génitif)",
            "**Здесь нет сахара.** — Il n’y a pas de sucre ici.",
            "**Его не было дома.** — Il n’était pas à la maison. (не было + génitif)",
            "**Завтра не будет дождя.** — Il n’y aura pas de pluie demain.",
          ],
        },
        {
          h3: 'Emploi 3 — Quantité, nombres et mesure',
          content:
            'Le génitif est requis après la plupart des **nombres** et des mots de **quantité**.\n\nAprès **1** : nominatif singulier. Après **2, 3, 4** : génitif singulier. Après **5–20** et les grands nombres concernés : génitif pluriel. Après **много**, **мало**, **несколько**, **сколько** : génitif pluriel.',
        },
        {
          h3: 'Emploi 4 — Prépositions',
          content:
            '**Plus de prépositions** exigent le génitif que tout autre cas. Exemples clés : **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**. Voir le tableau complet dans la section Prépositions ci-dessous.',
        },
        {
          h3: 'Emploi 5 — Comparaison',
          content:
            'En russe, les **comparaisons** avec l’adjectif comparatif se font au **génitif** : **Он старше меня.** — Il est plus âgé que moi. (меня = génitif de я)',
        },
        {
          h3: 'Emploi 6 — Dates',
          content:
            'Le génitif s’emploie pour une **date** — le **jour et le mois** sont tous deux au génitif : **Он родился пятого марта.** — Il est né le 5 mars.',
        },
        {
          h3: 'Emploi 7 — Certains verbes (objet au génitif)',
          content:
            'Un petit ensemble important de **verbes** russes régissent leur objet au **génitif** : **ждать** (attendre), **желать** (souhaiter), **бояться** (avoir peur de), **избегать** (éviter), **достигать** (atteindre).',
        },
      ],
    },
    {
      h2: 'Terminaisons du génitif — singulier',
      content:
        'Le tableau ci-dessous montre comment former le **génitif singulier** pour chaque type de nom russe. Repérez le **genre** du nom et sa **dernière lettre** au nominatif, puis appliquez la **terminaison** correcte.\n\nNote : la **règle orthographique des 8 lettres** remplace **Ы** par **И** après **Г, К, Х, Ж, Ш, Щ, Ч, Ц**.',
      table: {
        caption: 'Terminaisons du génitif singulier selon le type de nom',
        boldColumnIndices: [1, 3],
        headers: [
          'Type de nom',
          'Terminaison',
          'Formation',
          'Résultat',
          'Exemple en contexte',
        ],
        rows: [
          [
            'Masculin dur',
            '-а',
            'стол → стол+а',
            'стола',
            'нет стола — il n’y a pas de table',
          ],
          [
            'Masculin mou',
            '-я',
            'гений → гени+я',
            'гения',
            'без гения — sans un génie',
          ],
          [
            'Masculin en -ж/ш/щ/ч',
            '-а',
            'нож → нож+а',
            'ножа',
            'без ножа — sans couteau',
          ],
          [
            'Féminin -а (dur)',
            '-ы',
            'книга → книг+ы',
            'книги',
            'нет книги — il n’y a pas de livre',
          ],
          [
            'Féminin -а (après г/к/х/ж/ш/щ/ч/ц)',
            '-и',
            'подруга → подруг+и',
            'подруги',
            'без подруги — sans amie',
          ],
          [
            'Féminin -я',
            '-и',
            'неделя → недел+и',
            'недели',
            'нет недели — il n’y a pas de semaine',
          ],
          [
            'Féminin -ь',
            '-и',
            'ночь → ноч+и',
            'ночи',
            'до ночи — jusqu’à la nuit',
          ],
          ['Neutre -о', '-а', 'окно → окн+а', 'окна', 'нет окна — il n’y a pas de fenêtre'],
          ['Neutre -е', '-я', 'море → мор+я', 'моря', 'до моря — jusqu’à la mer'],
          [
            'Neutre -мя',
            '-ени',
            'имя → имен+и',
            'имени',
            'без имени — sans nom',
          ],
        ],
      },
    },
    {
      h2: 'Terminaisons du génitif — pluriel (la partie la plus dure)',
      content:
        'Le **génitif pluriel** est souvent considéré comme la **zone la plus difficile** de la déclinaison russe. Il a plus de formes et d’exceptions que tout autre cas.\n\nBeaucoup de noms féminins en **-а** et de noms neutres en **-о** ont une **terminaison zéro** (**-Ø**) — le radical reste seul. Avec **окон** et **яблок**, une voyelle fugitive **О** s’insère entre consonnes pour la prononciation.',
      table: {
        caption: 'Terminaisons du génitif pluriel selon le type de nom',
        boldColumnIndices: [1, 3],
        headers: [
          'Type de nom',
          'Terminaison',
          'Formation',
          'Résultat',
          'Exemple en contexte',
        ],
        rows: [
          [
            'Masculin dur',
            '-ов',
            'стол → стол+ов',
            'столов',
            'пять столов — cinq tables',
          ],
          [
            'Masculin en -ж/ш/щ/ч/ц (accentué)',
            '-ей',
            'нож → нож+ей',
            'ножей',
            'несколько ножей — plusieurs couteaux',
          ],
          [
            'Masculin en -ж/ш/щ/ч/ц (inaccentué)',
            '-ей',
            'врач → врач+ей',
            'врачей',
            'много врачей — beaucoup de médecins',
          ],
          [
            'Masculin mou -й',
            '-ев',
            'музей → музе+ев',
            'музеев',
            'три музея — trois musées',
          ],
          [
            'Masculin mou -ь',
            '-ей',
            'словарь → словар+ей',
            'словарей',
            'много словарей — beaucoup de dictionnaires',
          ],
          [
            'Féminin -а (dur)',
            '-Ø (zéro)',
            'женщина → женщин',
            'женщин',
            'много женщин — beaucoup de femmes',
          ],
          [
            'Féminin -а (après к/г)',
            '-Ø',
            'подруга → подруг',
            'подруг',
            'нет подруг — pas d’amies',
          ],
          [
            'Féminin -я',
            '-ей / -й',
            'неделя → недель',
            'недель',
            'несколько недель — plusieurs semaines',
          ],
          [
            'Féminin -ь',
            '-ей',
            'ночь → ноч+ей',
            'ночей',
            'пять ночей — cinq nuits',
          ],
          [
            'Neutre -о (dur)',
            '-Ø',
            'окно → окон',
            'окон',
            'много окон — beaucoup de fenêtres',
          ],
          ['Neutre -е', '-ей', 'море → мор+ей', 'морей', 'пять морей — cinq mers'],
          [
            'Neutre -ие/-ия',
            '-ий',
            'здание → здани+й',
            'зданий',
            'много зданий — beaucoup de bâtiments',
          ],
        ],
      },
    },
    {
      h2: 'Pluriels génitifs irréguliers — liste indispensable',
      content:
        'Certains des noms russes les plus courants ont des pluriels génitifs **très irréguliers** qu’il faut **mémoriser**. Ce sont des mots **à très haute fréquence**.',
      table: {
        caption: '11 pluriels génitifs irréguliers ultra-fréquents',
        boldColumnIndices: [1, 2],
        headers: [
          'Nominatif singulier',
          'Génitif pluriel',
          'Exemple',
          'Remarque',
        ],
        rows: [
          ['человек (personne)', 'людей', 'много людей', 'supplétion (люди)'],
          ['ребёнок (enfant)', 'детей', 'много детей', 'supplétion (дети)'],
          ['глаз (œil)', 'глаз', 'пара глаз', 'terminaison zéro (pas глазов)'],
          ['раз (fois)', 'раз', 'несколько раз', 'terminaison zéro (pas разов)'],
          ['солдат (soldat)', 'солдат', 'отряд солдат', 'terminaison zéro'],
          ['носок (chaussette)', 'носков', 'пара носков', 'conserve -ов'],
          ['чулок (bas)', 'чулок', 'пара чулок', 'terminaison zéro (pas чулков)'],
          ['яблоко (pomme)', 'яблок', 'килограмм яблок', 'terminaison zéro'],
          ['имя (nom)', 'имён', 'список имён', 'type neutre en -мя'],
          ['мать (mère)', 'матерей', 'двое матерей', 'déclinaison spéciale'],
          ['дочь (fille)', 'дочерей', 'трое дочерей', 'déclinaison spéciale'],
        ],
      },
    },
    {
      h2: 'Prépositions russes au génitif — liste complète',
      content:
        'Les **prépositions** suivantes exigent toujours le **cas génitif**. Astuce mnémotechnique — l’acronyme **БДИ-УОП-ДК** : **Без · До · Из · У · От · После · Для · Кроме**.\n\nCes 8 prépositions couvrent **environ 90 %** des emplois du génitif après préposition.',
      table: {
        caption: '16 prépositions au génitif avec exemples',
        boldColumnIndices: [0, 2],
        headers: [
          'Prép.',
          'Sens',
          'Avec un nom',
          'Phrase complète + traduction',
        ],
        rows: [
          [
            'без',
            'sans',
            'без молока',
            'Я пью чай без молока. — Je bois du thé sans lait.',
          ],
          [
            'до',
            "jusqu’à / avant / jusqu’à (limite)",
            'до урока',
            'Позвони мне до урока. — Appelle-moi avant la leçon.',
          ],
          [
            'из',
            'de (l’intérieur de)',
            'из России',
            'Он приехал из России. — Il est venu de Russie.',
          ],
          [
            'с',
            'de (d’une surface)',
            'с полки',
            'Книга упала с полки. — Le livre est tombé de l’étagère.',
          ],
          [
            'у',
            'chez / près de / auprès de',
            'у меня',
            'У меня есть кошка. — J’ai un chat.',
          ],
          [
            'от',
            'de (une personne / une source)',
            'от друга',
            'Письмо от друга. — Une lettre d’un ami.',
          ],
          [
            'после',
            'après',
            'после работы',
            'После работы я устал. — Après le travail, j’étais fatigué.',
          ],
          [
            'для',
            'pour (au profit de)',
            'для тебя',
            'Это подарок для тебя. — C’est un cadeau pour toi.',
          ],
          [
            'кроме',
            'sauf / en plus de',
            'кроме меня',
            'Все кроме меня пришли. — Tout le monde sauf moi est venu.',
          ],
          [
            'вокруг',
            'autour de',
            'вокруг города',
            'Мы ехали вокруг города. — Nous avons fait le tour de la ville en voiture.',
          ],
          [
            'мимо',
            'devant / le long de (en passant)',
            'мимо школы',
            'Он прошёл мимо школы. — Il est passé devant l’école.',
          ],
          [
            'вместо',
            'au lieu de',
            'вместо кофе',
            'Выпей воды вместо кофе. — Bois de l’eau au lieu du café.',
          ],
          [
            'напротив',
            'en face de',
            'напротив банка',
            'Кафе напротив банка. — Le café est en face de la banque.',
          ],
          [
            'из-за',
            'à cause de / de derrière',
            'из-за дождя',
            'Из-за дождя мы остались дома. — À cause de la pluie, nous sommes restés à la maison.',
          ],
          [
            'из-под',
            'de dessous',
            'из-под стола',
            'Кот вылез из-под стола. — Le chat est sorti de sous la table.',
          ],
          [
            'ради',
            'pour l’amour de / au nom de',
            'ради тебя',
            'Ради твоего счастья. — Pour ton bonheur.',
          ],
        ],
      },
    },
    {
      h2: 'Les nombres russes et le cas génitif',
      content:
        'Compter en russe exige le **cas génitif** — et la forme exacte (**singulier** ou **pluriel**) dépend du nombre.\n\nLe russe compte par **« paquets »** : les nombres se terminant par **1** utilisent le nominatif ; **2–4** le génitif singulier ; **5–0** le génitif pluriel.',
      table: {
        caption: 'Règles nombre + cas avec exemples',
        boldColumnIndices: [1, 2],
        headers: [
          'Nombre / quantificateur',
          'Cas requis',
          'Exemple (стол)',
          'Traduction',
        ],
        rows: [
          ['1', 'Nominatif singulier', 'один стол', 'une table'],
          [
            '2, 3, 4',
            'Génitif singulier',
            'два стола / три стола',
            'deux / trois tables',
          ],
          ['5–20', 'Génitif pluriel', 'пять столов', 'cinq tables'],
          [
            '21, 31, 41… (finit par 1)',
            'Nominatif singulier',
            'двадцать один стол',
            'une table (nominatif singulier après 1)',
          ],
          [
            '22–24, 32–34… (finit par 2–4)',
            'Génitif singulier',
            'двадцать два стола',
            'vingt-deux tables',
          ],
          [
            '25–30, etc. (finit par 5–9, 0)',
            'Génitif pluriel',
            'двадцать пять столов',
            'vingt-cinq tables',
          ],
          ['100, 200, 1000…', 'Génitif pluriel', 'сто столов', 'cent tables'],
          [
            'много / несколько / мало',
            'Génitif pluriel',
            'много столов',
            'beaucoup / plusieurs / peu de tables',
          ],
          [
            'сколько / столько',
            'Génitif pluriel',
            'сколько столов?',
            'combien de tables ?',
          ],
        ],
      },
    },
    {
      h2: 'Génitif vs accusatif : comment les distinguer',
      content:
        'Un des points les plus déroutants est de distinguer le **génitif** de l’**accusatif**. Pour les noms **masculins animés**, la forme à l’accusatif est **identique** au génitif — **студента** peut être l’un ou l’autre.\n\nLe **contexte** et la **structure de la phrase** permettent de trancher.',
      table: {
        caption: 'Comparaison génitif / accusatif',
        boldColumnIndices: [0, 1],
        headers: ['Situation', 'Phrase russe', 'Explication'],
        rows: [
          [
            'Possession / appartenance',
            'Это книга студента.',
            'C’est le livre de l’étudiant. (le génitif marque le possesseur)',
          ],
          [
            'Absence (нет)',
            'Нет студента.',
            'Il n’y a pas d’étudiant. (нет exige toujours le génitif)',
          ],
          [
            'Objet direct (animé)',
            'Я вижу студента.',
            'Je vois l’étudiant. (accusatif du masc. animé = forme du génitif)',
          ],
          [
            'Objet direct (inanimé)',
            'Я вижу стол.',
            'Je vois la table. (accusatif de l’inanimé = nominatif — pas de génitif ici)',
          ],
          [
            'Après les numéraux 2–4',
            'Я вижу двух студентов.',
            'Je vois deux étudiants. (animé → génitif pluriel avec les numéraux)',
          ],
          [
            'Génitif partitif',
            'Хочешь чаю?',
            'Tu veux du thé ? (partitif — le génitif exprime « un peu de »)',
          ],
        ],
      },
    },
    {
      h2: '32 exemples réels du génitif russe',
      content:
        'Voici **32 phrases russes authentiques** illustrant les principaux emplois du génitif. Chacune comporte translittération et traduction. **1–5 :** possession | **6–10 :** absence / négation | **11–15 :** quantité et nombres | **16–22 :** prépositions | **23–32 :** expressions et divers.',
      table: {
        caption: '32 phrases d’exemple avec génitif',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Russe', 'Translittération', 'Traduction et remarques'],
        rows: [
          [
            '1',
            'Это машина моего брата.',
            'Eto mashina moyego brata.',
            'C’est la voiture de mon frère. (брат → брата, gén. sg. masc.)',
          ],
          [
            '2',
            'Адрес нашей компании.',
            'Adres nashey kompanii.',
            'L’adresse de notre entreprise. (компания → компании)',
          ],
          [
            '3',
            'Столица России — Москва.',
            'Stolitsa Rossii — Moskva.',
            'La capitale de la Russie est Moscou. (Россия → России)',
          ],
          [
            '4',
            'Конец фильма был неожиданным.',
            'Konets filma byl neozhidannym.',
            'La fin du film était inattendue. (фильм → фильма)',
          ],
          [
            '5',
            'Цвет её глаз — карий.',
            'Tsvet yeyo glaz — kariy.',
            'La couleur de ses yeux est marron. (глаза → глаз, gén. pl.)',
          ],
          [
            '6',
            'У меня нет времени.',
            'U menya net vremeni.',
            'Je n’ai pas le temps. (время → времени, neutre en -мя)',
          ],
          [
            '7',
            'Здесь нет молока.',
            "Zdes' net moloka.",
            'Il n’y a pas de lait ici. (молоко → молока)',
          ],
          [
            '8',
            'Я не видел его несколько дней.',
            'Ya ne videl yego neskolko dney.',
            'Je ne l’avais pas vu depuis plusieurs jours. (день → дней)',
          ],
          [
            '9',
            'В холодильнике нет яиц.',
            'V kholodilnike net yaits.',
            'Il n’y a pas d’œufs dans le frigo. (яйцо → яиц, gén. pl.)',
          ],
          [
            '10',
            'Без тебя мне плохо.',
            'Bez tebya mne plokho.',
            'Sans toi je me sens mal. (ты → тебя, pronom au génitif)',
          ],
          [
            '11',
            'Два стакана воды, пожалуйста.',
            'Dva stakana vody, pozhaluysta.',
            'Deux verres d’eau, s’il vous plaît. (два + gén. sg.)',
          ],
          [
            '12',
            'Пять минут ходьбы отсюда.',
            "Pyat' minut khod'by otsyuda.",
            'À cinq minutes à pied d’ici. (пять + gén. pl.)',
          ],
          [
            '13',
            'Много людей пришло на концерт.',
            'Mnogo lyudey prishlo na kontsert.',
            'Beaucoup de gens sont venus au concert. (много + людей)',
          ],
          [
            '14',
            'Несколько студентов опоздало.',
            'Neskolko studentov opozdalo.',
            'Plusieurs étudiants ont eu du retard. (несколько + gén. pl.)',
          ],
          [
            '15',
            'Килограмм помидоров.',
            'Kilogramm pomidorov.',
            'Un kilo de tomates. (помидоры → помидоров)',
          ],
          [
            '16',
            'Она пришла из Германии.',
            'Ona prishla iz Germanii.',
            'Elle est venue d’Allemagne. (из + gén.)',
          ],
          [
            '17',
            'До свидания!',
            'Do svidaniya!',
            'Au revoir ! Litt. : Jusqu’à la prochaine rencontre. (до + gén.)',
          ],
          [
            '18',
            'Без усилий нет результатов.',
            'Bez usiliy net rezultatov.',
            'Pas d’effort, pas de résultat. (без + gén. pl.)',
          ],
          [
            '19',
            'У врача очередь.',
            "U vracha ochered'.",
            'Il y a la queue chez le médecin. (у + gén.)',
          ],
          [
            '20',
            'После дождя — солнце.',
            'Posle dozhdya — solntse.',
            'Après la pluie, le beau temps. (после + gén.)',
          ],
          [
            '21',
            'Вокруг парка — красивые дома.',
            'Vokrug parka — krasivye doma.',
            'De belles maisons entourent le parc. (вокруг + gén.)',
          ],
          [
            '22',
            'Из-за пробок я опоздал.',
            'Iz-za probok ya opozdal.',
            'J’ai eu du retard à cause des embouteillages. (из-за + gén.)',
          ],
          [
            '23',
            'Ни слова правды.',
            'Ni slova pravdy.',
            'Pas un mot de vérité. (génitif de négation)',
          ],
          [
            '24',
            'Не было смысла спорить.',
            "Ne bylo smysla sporit'.",
            'Il n’y avait aucun sens à discuter. (не было + gén.)',
          ],
          [
            '25',
            'Час от часу не легче.',
            'Chas ot chasu ne legche.',
            'Ça ne fait qu’empirer. (idiomatique : от + gén.)',
          ],
          [
            '26',
            'Ради твоего счастья.',
            'Radi tvoyego schastya.',
            'Pour ton bonheur. (ради + gén.)',
          ],
          [
            '27',
            'Сколько стоит бутылка воды?',
            'Skolko stoit butylka vody?',
            'Combien coûte une bouteille d’eau ? (воды = gén. sg. de вода)',
          ],
          [
            '28',
            'Мне не хватает денег.',
            'Mne ne khvatayet deneg.',
            'Il me manque d’argent. (не хватает + gén.)',
          ],
          [
            '29',
            'Желаю тебе счастья и здоровья!',
            'Zhelayu tebe schastya i zdorovya!',
            'Je te souhaite bonheur et santé ! (желать + gén.)',
          ],
          [
            '30',
            'Начало нового года.',
            'Nachalo novogo goda.',
            'Le début de la nouvelle année. (chaîne au gén. : нового + года)',
          ],
          [
            '31',
            'У неё голубые глаза.',
            'U neyo golubye glaza.',
            'Elle a les yeux bleus. (у + pronom au génitif)',
          ],
          [
            '32',
            'Вкус победы.',
            'Vkus pobedy.',
            'Le goût de la victoire. (победа → победы, gén. sg.)',
          ],
        ],
      },
    },
    {
      h2: 'Possession en russe : У + génitif (« avoir »)',
      content:
        'Le russe a **deux façons principales** d’exprimer la possession, toutes deux avec le génitif. **Construction 1 — Nom + génitif :** **машина друга** — la voiture de l’ami (litt. : voiture de ami). **Construction 2 — У + génitif + есть :** pour dire que quelqu’un possède quelque chose.\n\nLe russe n’a pas de verbe direct pour **« avoir »**. À la place : **У** [personne au génitif] **есть** [chose].',
      subsections: [
        {
          h3: 'La construction У à tous les temps',
          content:
            '**Présent :** **У меня есть кошка.** (J’ai un chat — есть est souvent omis à l’oral). **Passé :** **У меня была кошка.** (J’avais un chat — была s’accorde avec кошка). **Futur :** **У меня будет кошка.** (J’aurai un chat).\n\n**Négation — présent :** **У меня нет кошки.** (нет + génitif). **Négation — passé :** **У меня не было кошки.** **Négation — futur :** **У меня не будет кошки.**',
        },
      ],
    },
    {
      h2: 'Top 7 des erreurs au génitif (et comment les corriger)',
      content:
        'Les **fautes** les plus fréquentes des apprenants avec le génitif :',
      bullets: [
        '**Mettre le nominatif après НЕТ** — Нет кот. ✗ → Нет кота. ✓ (нет exige toujours le génitif)',
        '**Oublier la règle des 8 lettres** — книгы ✗ → книги ✓ (après г → и et pas ы)',
        '**Mauvais accord avec le nombre** — пять стол ✗ → пять столов ✓ (5+ exige le génitif pluriel)',
        '**Utiliser -ов pour les féminins à terminaison zéro** — много женщинов ✗ → много женщин ✓',
        '**Confondre из et от** — из = « de l’intérieur / d’un lieu » ; от = « de la part d’une personne ou d’une source ». Он пришёл от врача vs. Он вернулся из больницы.',
        '**Mettre l’accusatif au lieu du génitif après une comparaison** — Он старше я ✗ → Он старше меня ✓',
        '**Oublier les voyelles fugitives au génitif pluriel** — окнов ✗ → окон ✓ ; ручков ✗ → ручек ✓',
      ],
    },
  ],
  conclusion:
    'Le génitif russe est le **cheval de trait** du système des cas. Il gère la **possession**, la **négation**, la **quantité**, la **comparaison**, les **dates**, et est exigé par plus de **prépositions** que tout autre cas.\n\nEn résumé : **génitif singulier** — masculin → **-а/-я** | féminin → **-ы/-и** | neutre → **-а/-я**. **Génitif pluriel** — mémorisez les schémas et les exceptions fréquentes. Après **НЕТ**, **НЕ БЫЛО**, **НЕ БУДЕТ** : toujours le génitif. Après **2/3/4** : génitif singulier | après **5+**, **много**, **несколько** : génitif pluriel. Prépositions clés : **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
  conclusionOutro:
    'Prêt à continuer ? Explorez les autres cas dans notre série complète de grammaire russe :',
  ctaText: 'Entraînez les cas russes avec notre application',
  ctaHref: '/',
  faq: [
    {
      question: 'À quoi sert le cas génitif en russe ?',
      answer:
        'Le génitif russe sert à la possession (книга студента — le livre de l’étudiant), l’absence / la négation (нет воды — pas d’eau), la quantité et les nombres (два стакана — deux verres ; много людей — beaucoup de gens), après de nombreuses prépositions (без, до, из, у, от, после, для…), les comparaisons (старше меня — plus âgé que moi), et les dates.',
    },
    {
      question: 'Comment former le génitif pluriel en russe ?',
      answer:
        'La formation du génitif pluriel dépend du type de nom : les masculins à thème dur ajoutent -ов (стол → столов) ; les masculins et féminins mous ajoutent souvent -ей (ночь → ночей ; словарь → словарей) ; les féminins en -а ont souvent une terminaison zéro (женщина → женщин, книга → книг). Les neutres en -о ont aussi des terminaisons zéro avec voyelles fugitives parfois (окно → окон). C’est la partie la plus difficile de la déclinaison russe.',
    },
    {
      question: 'Le génitif russe est-il le même que l’accusatif ?',
      answer:
        'Pas exactement, mais ils se recoupent pour les masculins animés : Я вижу студента (accusatif) et Нет студента (génitif) utilisent la même forme студента. Pour les inanimés, l’accusatif masculin égale le nominatif (Я вижу стол), tandis que le génitif ajoute -а (Нет стола). Pour le féminin, l’accusatif fait passer -а en -у (Я читаю книгу), le génitif -а en -ы/-и (Нет книги).',
    },
    {
      question: 'Quels verbes exigent le génitif en russe ?',
      answer:
        'Plusieurs verbes courants régissent l’objet au génitif : бояться (avoir peur de), ждать (attendre), желать (souhaiter), избегать (éviter), достигать (atteindre), лишать (priver de), касаться (toucher / concerner), et хотеть dans certaines constructions partitives (хочешь чаю? — tu veux du thé ?).',
    },
    {
      question: 'Comment dit-on « j’ai » en russe ?',
      answer:
        'Le russe n’a pas de verbe direct pour « avoir ». On utilise У + [personne au génitif] + есть + [chose] : У меня есть машина (j’ai une voiture). Pour la négation : У меня нет машины (je n’ai pas de voiture) — la chose non possédée se met au génitif après нет.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cas génitif russe : règles, terminaisons et 32 exemples réels',
    description:
      'Guide complet du génitif en russe : 7 emplois, terminaisons singulier et pluriel, formes irrégulières, 16 prépositions, nombres, У + génitif. 32 exemples réels avec translittération.',
    datePublished: '2025-03-11',
    dateModified: '2025-03-11',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-genitive-case',
    },
    keywords:
      'cas génitif russe, terminaisons génitif russe, règles génitif russe, génitif pluriel russe, exemples génitif russe, grammaire possession russe',
  },
};
