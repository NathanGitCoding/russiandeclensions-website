import type { LearnArticle } from '../learnArticles';

/** Traduction française de l’article `russian-dative-case` (source EN : `learnArticles.ts`). Cyrillique copié à l’identique. */
export const russianDativeCaseFr: LearnArticle = {
  slug: 'russian-dative-case',
  title: 'Cas datif russe : comment dire « à » et « pour » en russe',
  metaTitle:
    'Cas datif russe : règles, terminaisons, нравиться et 30 exemples | Russian Cases with Anna',
  metaDescription:
    'Guide complet du cas datif russe : terminaisons des noms et adjectifs, construction нравиться, expressions d’âge, constructions impersonnelles, 8 prépositions, 15 verbes, 30 exemples concrets.',
  keywords: [
    'cas datif russe',
    'terminaisons datif russe',
    'grammaire мне нравится',
    'objet indirect russe',
    'prépositions russe к по datif',
    'comment dire à quelqu’un en russe',
  ],
  h1: 'Cas datif russe : comment dire « à » et « pour » en russe',
  heroImage: {
    src: '/articles/free-russian-lesson-dative-case.webp',
    alt: 'Cas datif russe : leçon gratuite pour dire « à » et « pour » en russe',
    width: 1200,
    height: 630,
  },
  intro:
    'Le cas datif russe est l’un des cas les plus **polyvalents** — et les plus fascinants — de la langue russe. Dans les manuels, il sert surtout à marquer l’**objet indirect** (le destinataire d’une action), mais le datif va bien au-delà du simple « donner quelque chose à quelqu’un ».\n\nC’est le cas de l’**expérience**, de la **sensation**, de l’**âge**, de la **permission** et de la pertinence personnelle. Si vous vous êtes déjà demandé comment dire « j’aime », « j’ai froid », « j’ai besoin », « j’ai le droit de » ou « j’ai 25 ans » en russe — dans tous ces cas, la réponse implique le **datif**.',
  whatYouLearn: [
    'Ce qu’est le cas datif russe et ses **6 grands emplois**',
    '**Terminaisons du datif** pour les noms (tous genres, singulier et pluriel)',
    'Terminaisons du datif pour les **adjectifs**',
    '**Pronoms personnels** au datif (мне, тебе, ему, ей, нам, вам, им)',
    'La construction **НРАВИТЬСЯ** — comment dire « j’aime » en russe',
    '**Expressions d’âge** (Мне 25 лет.)',
    '**Expressions impersonnelles** (нужно, можно, нельзя, холодно, скучно…)',
    '**Prépositions** к, по, благодаря, вопреки…',
    '**15 verbes** avec objet indirect au datif',
    '**30 exemples réels** avec translittération',
    'Datif vs autres cas — comment les distinguer',
  ],
  leadMagnetCta: {
    title: 'Entraînez le datif russe sur votre téléphone',
    description:
      'Notre application mobile fait travailler les 6 cas du russe — avec un accent particulier sur нравиться, les expressions d’âge, les constructions impersonnelles et les objets indirects. Disponible sur Android et iOS.',
    ctaText: 'Téléchargez l’app et commencez à vous entraîner dès aujourd’hui',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Guide complet des cas russes',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Terminaisons des cas russes : l’aide-mémoire ultime',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Cas génitif russe : règles, terminaisons et exemples',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Cas accusatif russe : objets directs, animé vs inanimé',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label: 'Comment décliner au datif en russe',
    },
  ],
  tableAccentVariant: 'dative',
  sections: [
    {
      h2: 'Réponse rapide',
      content:
        'Le cas datif russe répond aux questions **Кому ? (À qui ?)** et **Чему ? (À quoi ?)**.',
      bullets: [
        '**Objets indirects** — le destinataire d’une action',
        '**Expressions d’âge** — Мне 25 лет (j’ai 25 ans)',
        '**Personne qui vit une émotion** — мне нравится (j’aime), мне холодно (j’ai froid)',
        '**Après certaines prépositions** — к (vers) et по (le long de / selon)',
      ],
    },
    {
      h2: 'Qu’est-ce que le cas datif russe ?',
      content:
        'Le cas datif (**Дательный падеж** — de дать, « donner ») est le troisième des six cas russes. Son nom reflète sa fonction d’origine : il marque le **destinataire du don**.\n\nEn russe moderne, il fait bien davantage.',
      subsections: [
        {
          h3: 'Le datif sert notamment à :',
          content: '',
          bullets: [
            '**Objets indirects** — le destinataire (Я дал маме цветы — j’ai donné des fleurs à maman)',
            'La construction **НРАВИТЬСЯ** — « aimer » (Мне нравится… — j’aime…)',
            '**Expressions d’âge** (Мне двадцать лет. — j’ai vingt ans.)',
            '**Expressions impersonnelles / modales** (Мне нужно, мне можно, мне холодно, мне скучно)',
            'Après les prépositions **К** (vers) et **ПО** (le long de / selon / après)',
            'Après des verbes de communication, d’aide, d’instruction, de croyance, d’envie',
          ],
        },
      ],
    },
    {
      h2: 'Terminaisons du datif russe — Noms',
      content:
        'Le datif est l’un des cas les plus **réguliers** en russe.\n\nLes terminaisons suivent des schémas clairs selon le genre et le type de thème :',
      table: {
        caption: 'Terminaisons des noms au datif — tous genres, singulier et pluriel',
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
            'Masc. dur (consonne)',
            '-у',
            'брат → брат+у',
            'брату',
            'Я дал книгу брату. — J’ai donné le livre à mon frère.',
          ],
          [
            'Masc. mou (-й)',
            '-ю',
            'музей → музе+ю',
            'музею',
            'Подари это музею. — Faites don de ceci au musée.',
          ],
          [
            'Masc. mou (-ь)',
            '-ю',
            'словарь → словар+ю',
            'словарю',
            'Я доверяю словарю. — Je me fie au dictionnaire.',
          ],
          [
            'Fém. dur (-а)',
            '-е',
            'сестра → сестр+е',
            'сестре',
            'Я звоню сестре. — J’appelle ma sœur.',
          ],
          [
            'Fém. mou (-я)',
            '-е',
            'земля → земл+е',
            'земле',
            'Привет земле! — Salut à la Terre !',
          ],
          [
            'Fém. en -ия',
            '-ии',
            'станция → станци+и',
            'станции',
            'Иди к станции метро. — Va vers la station de métro.',
          ],
          [
            'Fém. (-ь)',
            '-и',
            'ночь → ноч+и',
            'ночи',
            'К ночи похолодало. — Il a refroidi vers la nuit.',
          ],
          [
            'Neutre (-о) dur',
            '-у',
            'окно → окн+у',
            'окну',
            'Подойди к окну. — Approche-toi de la fenêtre.',
          ],
          [
            'Neutre (-е) mou',
            '-ю',
            'море → мор+ю',
            'морю',
            'Мы едем к морю. — Nous allons vers la mer.',
          ],
          [
            'Neutre (-ие)',
            '-ию',
            'здание → здани+ю',
            'зданию',
            'Иди к зданию. — Va vers le bâtiment.',
          ],
          [
            'Pluriel masc./neutre',
            '-ам/-ям',
            'братья → брать+ям',
            'братьям',
            'Я помогаю братьям. — J’aide mes frères.',
          ],
          [
            'Pluriel féminin',
            '-ам/-ям',
            'сёстры → сёстр+ам',
            'сёстрам',
            'Я пишу сёстрам. — J’écris à mes sœurs.',
          ],
        ],
      },
      bullets: [
        '**Masc. et neutre (thème dur)** — -У : брат→брату, окно→окну',
        '**Masc. et neutre (thème mou)** — -Ю : музей→музею, море→морю',
        '**Féminin -а** — -Е : сестра→сестре',
        '**Féminin -я** — -Е : земля→земле',
        '**Féminin -ия** — -ИИ : станция→станции',
        '**Féminin -ь** — -И : ночь→ночи',
        '**Pluriel (thème dur)** — -АМ : братья→братьям',
        '**Pluriel (thème mou)** — -ЯМ : сёстры→сёстрам',
      ],
    },
    {
      h2: 'Terminaisons du datif russe — Adjectifs',
      content:
        'Les adjectifs doivent **s’accorder** avec leur nom en genre, nombre et cas.\n\nAu datif :',
      bullets: [
        '**Masc./neutre dur** → -ому (новый → новому брату)',
        '**Masc./neutre mou** → -ему (синий → синему морю)',
        '**Féminin dur** → -ой (красивая → красивой подруге)',
        '**Féminin mou** → -ей (летняя → летней школе)',
        '**Pluriel (tous genres)** → -ым/-им (новые → новым студентам)',
        '**Exemple :** Я пишу **старому другу** — J’écris à mon vieil ami.',
      ],
      table: {
        caption: '5 formes adjectivales avec phrases complètes',
        boldColumnIndices: [1],
        headers: ['Genre / nombre', 'Terminaison', 'Forme exemple', 'Sens', 'Phrase'],
        rows: [
          [
            'Masc./neutre dur',
            '-ому',
            'новый → новому брату',
            'nouveau frère (dat.)',
            'Я помогаю новому брату.',
          ],
          [
            'Masc./neutre mou',
            '-ему',
            'синий → синему морю',
            'mer bleue (dat.)',
            'Мы едем к синему морю.',
          ],
          [
            'Fém. dur',
            '-ой',
            'красивая → красивой',
            'belle (dat.)',
            'Я звоню красивой подруге.',
          ],
          [
            'Fém. mou',
            '-ей',
            'летняя → летней',
            'd’été (dat.)',
            'В летней школе нравится.',
          ],
          [
            'Pluriel tous genres',
            '-ым/-им',
            'новые → новым',
            'nouveaux (dat. pl.)',
            'Помоги новым студентам.',
          ],
        ],
      },
    },
    {
      h2: 'Pronoms personnels au datif',
      content:
        'Les pronoms personnels ont des **formes datives propres** à mémoriser.\n\nCe sont parmi les mots les plus fréquents — indispensables pour нравиться, l’âge et les phrases impersonnelles.',
      table: {
        caption: '7 formes avec exemples нравится',
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        headers: [
          'я (je)',
          'ты (tu)',
          'он/оно (il/ça)',
          'она (elle)',
          'мы (nous)',
          'вы (vous)',
          'они (ils/elles)',
        ],
        rows: [
          ['мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
          [
            'Мне нравится.',
            'Тебе нравится.',
            'Ему нравится.',
            'Ей нравится.',
            'Нам нравится.',
            'Вам нравится.',
            'Им нравится.',
          ],
        ],
      },
      bullets: [
        '**Après к :** к нему, к ней, к ним (ajout de Н- aux pronoms de 3e personne)',
        '**Après по :** по нему, по ней (ajout de Н- aux pronoms de 3e personne)',
        '**Jamais :** к ему, к ей — il faut toujours le préfixe Н-',
      ],
    },
    {
      h2: 'La construction НРАВИТЬСЯ : comment dire « j’aime » en russe',
      content:
        'L’emploi le plus important du datif est **нравиться** (plaire / aimer au sens de « trouver agréable »). En anglais : le sujet AIME l’objet.\n\nEn russe : **l’objet PLAÎT à la personne au datif** → Мне нравится музыка. (La musique me plaît.)',
      subsections: [
        {
          h3: 'L’erreur n°1 avec нравиться',
          content:
            'Le verbe **НРАВИТЬСЯ** s’accorde avec le **SUJET** (la chose aimée), pas avec la personne. Мне **нравится** музыка. (singulier) Мне **нравятся** фильмы. (pluriel) La personne est au **DATIF** — jamais au nominatif ! ✗ Я нравится музыка. ✓ Мне нравится музыка.',
        },
      ],
      table: {
        caption: '10 formes : présent, passé, futur, négation',
        boldColumnIndices: [1],
        headers: ['Français', 'Russe (нравиться)', 'Remarques'],
        rows: [
          ['J’aime', 'Мне нравится музыка.', 'нравится s’accorde avec музыка — singulier'],
          ['Tu aimes', 'Тебе нравятся фильмы.', 'нравятся s’accorde avec фильмы — pluriel'],
          ['Il aime', 'Ему нравится эта книга.', 'Il aime ce livre.'],
          ['Elle aime', 'Ей нравится твой голос.', 'Elle aime ta voix.'],
          ['Nous aimons', 'Нам нравится здесь.', 'здесь = ici, pas de nom sujet'],
          ['Vous aimez (pl.)', 'Вам нравятся эти места.', 'Vous aimez ces endroits.'],
          ['Ils aiment', 'Им нравится русский язык.', 'Ils aiment la langue russe.'],
          ["J'ai aimé", 'Мне понравился фильм.', 'passé perfectif, accord masc.'],
          ["J'aimerai", 'Мне понравится этот город.', 'futur perfectif'],
          ['Je n’aime pas', 'Мне не нравится шум.', 'négation : не + нравится'],
        ],
      },
      bullets: [
        '**Нравиться** = appréciation spontanée. **Любить** = affection plus profonde, habituelle. Les deux sont courants. Нравиться plus neutre ; любить plus fort.',
      ],
    },
    {
      h2: 'Expressions d’âge : dire l’âge de quelqu’un en russe',
      image: {
        src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
        alt: 'Tableau de règles : comment dire son âge en russe (cas datif)',
        width: 1200,
        height: 630,
      },
      content:
        'En russe, l’âge s’exprime avec le **cas datif** : [personne au datif] + [nombre] + [год/года/лет].',
      bullets: [
        '**1 an** → год (Мне один год. — J’ai un an.)',
        '**2–4 ans** → года (Мне два года. Тебе четыре года.)',
        '**5 ans et plus** → лет (Мне двадцать пять лет. — J’ai 25 ans.)',
        '**Anniversaires :** Ивану исполнилось тридцать лет. — Ivan a eu 30 ans. Когда тебе исполнится восемнадцать? — Quand auras-tu 18 ans ?',
      ],
      table: {
        caption: '9 exemples : 1 / 2–4 / 5+, questions et anniversaires',
        boldColumnIndices: [1],
        headers: ['Français', 'Russe', 'Note grammaticale'],
        rows: [
          ['J’ai 10 ans', 'Мне десять лет.', 'Мне (datif de я) + 10 + лет'],
          ['Tu as 25 ans', 'Тебе двадцать пять лет.', 'Тебе (datif de ты)'],
          ['Il a 30 ans', 'Ему тридцать лет.', 'Ему (datif de он)'],
          ['Elle a 18 ans', 'Ей восемнадцать лет.', 'Ей (datif de она)'],
          ['Nous avons 40 ans', 'Нам сорок лет.', 'Нам (datif de мы)'],
          ['Ivan a 2 ans', 'Ивану два года.', 'Ивану + 2 + года (gén. sg. après 2)'],
          ['Anna a 5 ans', 'Анне пять лет.', 'Анне + 5 + лет (gén. pl.)'],
          ['Le chat a 3 ans', 'Коту три года.', 'Fonctionne aussi pour les animaux !'],
          ['Quel âge as-tu ?', 'Сколько тебе лет?', 'Сколько + pronom datif + лет'],
        ],
      },
    },
    {
      h2: 'Expressions impersonnelles et modales avec le datif',
      content:
        'Certaines des expressions russes les plus courantes du quotidien utilisent le **datif** pour marquer la personne qui vit un état, un sentiment ou une obligation.\n\nCe sont des **constructions impersonnelles** — pas de sujet grammatical.',
      bullets: [
        '**Obligation / permission** — мне нужно (il me faut / je dois), тебе можно (tu peux), ему нельзя (il ne doit pas)',
        '**Sensations physiques** — мне холодно (j’ai froid), мне жарко (j’ai chaud)',
        '**Émotions / états** — ей скучно (elle s’ennuie), ему грустно (il est triste), нам весело (nous nous amusons)',
        '**Difficulté / évaluation** — ей трудно (c’est dur pour elle), мне лучше (je me sens mieux)',
        '**Schéma :** [personne au datif] + [mot prédicatif] + [infinitif optionnel] — Мне нужно купить продукты. Тебе можно отдохнуть. Ему нельзя курить.',
      ],
      table: {
        caption: '12 constructions : нужно, можно, нельзя, etc.',
        boldColumnIndices: [0, 1],
        headers: ['Expression', 'Exemple russe', 'Traduction', 'Note grammaticale'],
        rows: [
          ['нужно / надо', 'Мне нужно работать.', 'Il faut que je travaille / Je dois travailler.', 'Datif = personne concernée'],
          ['можно', 'Тебе можно идти.', 'Tu peux y aller.', 'Datif = personne autorisée'],
          [
            'нельзя',
            'Ему нельзя есть сахар.',
            'Il ne doit pas manger de sucre.',
            'Datif = personne interdite',
          ],
          [
            'нужен/нужна/нужно',
            'Мне нужна помощь.',
            'J’ai besoin d’aide.',
            'Accord avec la chose dont on a besoin',
          ],
          ['интересно', 'Мне интересно.', 'Ça m’intéresse.', 'Datif = personne intéressée'],
          ['скучно', 'Ей скучно на уроке.', 'Elle s’ennuie en cours.', 'Datif = personne qui s’ennuie'],
          ['весело', 'Нам было весело.', 'Nous nous sommes bien amusés.', 'Passé : было + datif'],
          ['грустно', 'Ему грустно без тебя.', 'Il est triste sans toi.', 'État émotionnel'],
          ['холодно / жарко', 'Мне холодно.', 'J’ai froid.', 'Sensation physique'],
          ['стыдно', 'Мне стыдно за тебя.', 'J’ai honte pour toi.', 'Expérimentateur au datif'],
          ['трудно', 'Ей трудно учиться.', 'Il lui est difficile d’étudier.', 'Difficulté'],
          ['лучше / хуже', 'Мне лучше сегодня.', 'Je me sens mieux aujourd’hui.', 'Santé / état'],
        ],
      },
    },
    {
      h2: 'Prépositions au datif : К et ПО (et autres)',
      content:
        'Deux grandes prépositions russes exigent toujours le **cas datif** : **к** et **по**.\n\nPlusieurs autres se construisent aussi avec le datif :',
      table: {
        caption: '8 prépositions avec sens et exemples complets',
        boldColumnIndices: [0],
        headers: ['Prép.', 'Sens', 'Avec un nom', 'Exemple complet + traduction'],
        rows: [
          [
            'к',
            'vers / chez (personne ou lieu)',
            'к другу, к врачу, к окну',
            'Иди к врачу! — Va chez le médecin !',
          ],
          [
            'по',
            'le long de / selon / par (moyen)',
            'по улице, по правилам, по почте',
            'Мы гуляли по парку. — Nous nous sommes promenés dans le parc.',
          ],
          [
            'благодаря',
            'grâce à (positif)',
            'благодаря тебе',
            'Благодаря тебе всё получилось! — Grâce à toi, tout a réussi !',
          ],
          [
            'вопреки',
            'malgré / en dépit de',
            'вопреки правилам',
            'Вопреки прогнозу, погода была хорошей.',
          ],
          [
            'согласно',
            'conformément à (soutenu)',
            'согласно закону',
            'Согласно закону, это запрещено.',
          ],
          [
            'навстречу',
            'à la rencontre de / vers',
            'навстречу ветру',
            'Она шла навстречу ветру. — Elle marchait au-devant du vent.',
          ],
          [
            'наперекор',
            'au mépris de',
            'наперекор судьбе',
            'Наперекор судьбе он добился успеха.',
          ],
          [
            'подобно',
            'semblable à / comme (littéraire)',
            'подобно птице',
            'Подобно птице, он был свободен.',
          ],
        ],
      },
      subsections: [
        {
          h3: 'К (vers / chez) — préposition de direction',
          content:
            '**К** exprime un mouvement vers une personne, un lieu ou un but. C’est l’équivalent datif de в/на pour la direction — mais **к** s’emploie quand on va **vers une personne ou un objet**, pas à l’intérieur d’un espace fermé.\n\nИди к врачу. Подойди к доске. Мы стремимся к цели.',
        },
        {
          h3: 'ПО — la préposition multi-usage',
          content: '**По** est l’une des prépositions les plus polyvalentes du russe. Avec le datif :',
          bullets: [
            '**Mouvement le long de** — гулять по парку (se promener dans le parc)',
            '**Distribution** — по одному яблоку (une pomme chacun)',
            '**Moyen / canal** — по телефону, по почте (par téléphone, par la poste)',
            '**Matière / sujet** — урок по математике (cours de maths)',
            '**Temps récurrent** — по понедельникам (le lundi, chaque lundi)',
            '**Conformément à** — по закону (selon la loi)',
            '**По + pluriel datif** = chaque [jour] : по понедельникам — le lundi (chaque semaine) | в понедельник — lundi (un jour précis)',
          ],
        },
      ],
    },
    {
      h2: '15 verbes essentiels avec complément au datif',
      content:
        'Ces verbes prennent leur **objet indirect au datif**. Indispensables à apprendre avec leur régime.',
      bullets: [
        '**Donner / transférer** — давать/дать (donner), показывать (montrer)',
        '**Communication** — говорить/сказать (dire), писать (écrire), звонить (appeler), объяснять (expliquer), отвечать (répondre)',
        '**Aide / permission** — помогать (aider), разрешать (permettre), советовать (conseiller)',
        '**Sentiments / états** — нравиться (plaire / aimer), верить (croire), завидовать (envier), мешать (déranger)',
        '**Possession** — принадлежать (appartenir à)',
      ],
      table: {
        caption: '15 verbes avec exemples et remarques',
        boldColumnIndices: [0],
        headers: ['Verbe', 'Exemple', 'Traduction', 'Remarque'],
        rows: [
          ['давать / дать', 'Я дал ему книгу.', 'Je lui ai donné un livre.', 'Objet indirect classique'],
          ['говорить / сказать', 'Скажи мне правду.', 'Dis-moi la vérité.', 'Dire à quelqu’un'],
          [
            'писать / написать',
            'Я написал тебе письмо.',
            'Je t’ai écrit une lettre.',
            'Écrire à quelqu’un',
          ],
          ['звонить / позвонить', 'Позвони маме.', 'Appelle ta mère.', 'Appeler quelqu’un'],
          ['помогать / помочь', 'Помоги мне!', 'Aide-moi !', 'Aider quelqu’un'],
          [
            'нравиться / понравиться',
            'Мне нравится музыка.',
            'J’aime la musique.',
            'Datif = expérimentateur',
          ],
          [
            'показывать / показать',
            'Покажи мне карту.',
            'Montre-moi la carte.',
            'Montrer à quelqu’un',
          ],
          [
            'объяснять / объяснить',
            'Объясни мне это.',
            'Explique-moi ça.',
            'Expliquer à quelqu’un',
          ],
          [
            'отвечать / ответить',
            'Ответь мне на вопрос.',
            'Réponds à ma question.',
            'Répondre à quelqu’un',
          ],
          [
            'разрешать / разрешить',
            'Разреши мне уйти.',
            'Permets-moi de partir.',
            'Donner la permission',
          ],
          ['мешать / помешать', 'Не мешай мне!', 'Ne me dérange pas !', 'Gêner quelqu’un'],
          ['советовать', 'Советую тебе поехать.', 'Je te conseille d’y aller.', 'Donner un conseil'],
          ['верить / поверить', 'Я верю тебе.', 'Je te crois.', 'Faire confiance à quelqu’un'],
          ['завидовать', 'Он завидует другу.', 'Il envie son ami.', 'Ressentir de l’envie'],
          ['принадлежать', 'Это принадлежит мне.', 'Cela m’appartient.', 'Appartenir à quelqu’un'],
        ],
      },
    },
    {
      h2: '30 exemples réels du datif russe',
      content:
        'Voici **30 phrases authentiques** illustrant les principaux emplois du datif.',
      bullets: [
        '**1–6 :** objets indirects (donner, dire, aider, etc.)',
        '**7–10 :** construction нравиться',
        '**11–13 :** expressions d’âge',
        '**14–19 :** prépositions (к, навстречу, благодаря, вопреки, по)',
        '**20–26 :** expressions impersonnelles (нужно, можно, холодно, скучно…)',
        '**27–30 :** autres verbes (советовать, завидовать, верить, желать)',
      ],
      table: {
        caption: '30 exemples regroupés par usage',
        boldColumnIndices: [1],
        headers: ['#', 'Russe', 'Translittération', 'Traduction et remarques'],
        rows: [
          [
            '1',
            'Я дал маме цветы.',
            'Ya dal mame tsvety.',
            'J’ai donné des fleurs à ma mère. (мама → маме)',
          ],
          [
            '2',
            'Скажи мне правду.',
            'Skazhi mne pravdu.',
            'Dis-moi la vérité. (мне = datif de я)',
          ],
          [
            '3',
            'Он написал другу длинное письмо.',
            'On napisal drugu dlinnoye pismo.',
            'Il a écrit une longue lettre à son ami.',
          ],
          ['4', 'Помогите мне, пожалуйста!', 'Pomogite mne, pozhaluysta!', 'Aidez-moi, s’il vous plaît !'],
          [
            '5',
            'Я позвонила бабушке.',
            'Ya pozvonila babushke.',
            'J’ai appelé ma grand-mère. (бабушка → бабушке)',
          ],
          [
            '6',
            'Преподаватель объяснил нам грамматику.',
            'Prepodavatel obyasnil nam grammatiku.',
            'Le professeur nous a expliqué la grammaire.',
          ],
          [
            '7',
            'Мне нравится русская музыка.',
            'Mne nravitsya russkaya muzyka.',
            'J’aime la musique russe. (мне = expérimentateur)',
          ],
          [
            '8',
            'Тебе понравился фильм?',
            'Tebe ponravilsya film?',
            'Tu as aimé le film ? (понравился s’accorde avec фильм)',
          ],
          [
            '9',
            'Ей не нравятся эти правила.',
            'Ey ne nravyatsya eti pravila.',
            'Ces règles ne lui plaisent pas.',
          ],
          [
            '10',
            'Нам понравилась Москва.',
            'Nam ponravilas Moskva.',
            'Moscou nous a plu. (понравилась s’accorde avec Москва)',
          ],
          ['11', 'Мне двадцать три года.', 'Mne dvadtsat tri goda.', 'J’ai 23 ans.'],
          [
            '12',
            'Брату исполнилось пять лет.',
            'Bratu ispolnilos pyat let.',
            'Mon frère a eu cinq ans.',
          ],
          ['13', 'Сколько лет вашей маме?', 'Skolko let vashey mame?', 'Quel âge a votre mère ?'],
          [
            '14',
            'Иди к врачу немедленно!',
            'Idi k vrachu nemedlenno!',
            'Va chez le médecin immédiatement ! (к + dat.)',
          ],
          [
            '15',
            'Мы подошли к морю на закате.',
            'My podoshli k moryu na zakate.',
            'Nous sommes arrivés vers la mer au coucher du soleil.',
          ],
          [
            '16',
            'Она шла навстречу судьбе.',
            'Ona shla navstrechu sudbe.',
            'Elle marchait au-devant du destin.',
          ],
          [
            '17',
            'Благодаря вам проект удался.',
            'Blagodarya vam proyekt udalsya.',
            'Grâce à vous, le projet a réussi.',
          ],
          [
            '18',
            'Вопреки ожиданиям, всё получилось.',
            'Vopreki ozhidaniyam, vsyo poluchilos.',
            'Malgré les attentes (contrairement à ce qu’on attendait), tout s’est bien passé.',
          ],
          [
            '19',
            'По правилам, это запрещено.',
            'Po pravilam, eto zapreshcheno.',
            'Selon les règles, c’est interdit.',
          ],
          [
            '20',
            'Мне нужно поговорить с тобой.',
            'Mne nuzhno pogovorit s toboy.',
            'Il faut que je te parle / Je dois te parler.',
          ],
          ['21', 'Тебе можно идти домой.', 'Tebe mozhno idti domoy.', 'Tu peux rentrer chez toi.'],
          ['22', 'Ему нельзя пить кофе.', 'Emu nelzya pit kofe.', 'Il ne doit pas boire de café.'],
          [
            '23',
            'Мне холодно, закрой окно.',
            'Mne holodno, zakroy okno.',
            'J’ai froid, ferme la fenêtre.',
          ],
          [
            '24',
            'Ей скучно одной дома.',
            'Ey skuchno odnoy doma.',
            'Elle s’ennuie seule à la maison.',
          ],
          [
            '25',
            'Нам было очень весело на вечеринке.',
            'Nam bylo ochen veselo na vecherinke.',
            'Nous nous sommes beaucoup amusés à la fête.',
          ],
          [
            '26',
            'Мне стыдно за своё поведение.',
            'Mne stydno za svoyo povedeniye.',
            'J’ai honte de mon comportement.',
          ],
          [
            '27',
            'Советую вам прочитать эту книгу.',
            'Sovetuyu vam prochitat etu knigu.',
            'Je vous conseille de lire ce livre.',
          ],
          [
            '28',
            'Он завидует нашему успеху.',
            'On zaviduyet nashemu uspekhu.',
            'Il envie notre succès.',
          ],
          [
            '29',
            'Я верю каждому его слову.',
            'Ya veryu kazhdomu yego slovu.',
            'Je crois chacun de ses mots.',
          ],
          [
            '30',
            'Желаю вам счастья и здоровья!',
            'Zhelayu vam schastya i zdorovya!',
            'Je vous souhaite bonheur et santé !',
          ],
        ],
      },
    },
    {
      h2: 'Datif vs autres cas : comment les distinguer',
      content:
        'On confond parfois le datif avec le **génitif** (possession) et l’**accusatif** (objets directs).\n\nCe tableau aide à y voir clair :',
      table: {
        caption: 'Comparaison datif / autres cas',
        boldColumnIndices: [0, 1],
        headers: ['Contexte', 'Exemple russe', 'Explication du cas'],
        rows: [
          [
            'Objet indirect → datif',
            'Я дал книгу другу.',
            'DATIF : другу (à un ami). Le livre est donné À l’ami.',
          ],
          [
            'Objet direct → accusatif',
            'Я купил книгу.',
            'ACCUSATIF : книгу (le livre lui-même).',
          ],
          ['Possession → génitif', 'Это книга друга.', 'GÉNITIF : друга (le livre de l’ami).'],
          [
            'Aimer (нравиться) → datif',
            'Мне нравится книга.',
            'DATIF : мне. Ne pas utiliser я ici.',
          ],
          [
            'Besoin (нужен) → datif',
            'Мне нужна эта книга.',
            'DATIF : мне (c’est moi qui en ai besoin).',
          ],
          ['Direction к → datif', 'Иди к другу.', 'DATIF après к : другу (vers l’ami).'],
          [
            'Lieu у → génitif',
            'Я у друга.',
            'GÉNITIF après у : друга (chez l’ami).',
          ],
          ['Expression d’âge → datif', 'Другу двадцать лет.', 'DATIF : другу (l’ami a 20 ans).'],
        ],
      },
      bullets: [
        '**Question clé :** le nom est-il le **DESTINATAIRE** d’une action (→ datif) ? Possédé (→ génitif), **SUBI** par l’action (→ accusatif), ou **LIEU** (→ prépositionnel) ?',
      ],
    },
    {
      h2: 'Les 6 erreurs courantes au datif (et comment les corriger)',
      bullets: [
        '**Nominatif pour celui qui aime** — Я нравится музыка ✗ → Мне нравится музыка ✓',
        '**Accord du verbe avec нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓ (accord avec le sujet)',
        '**Mauvais pronom après préposition** — к ей ✗ → к ней ✓ (ajouter Н- aux pronoms de 3e personne)',
        '**Confondre к avec в/на** — Иди к школу ✗ → Иди в школу ✓ (к = vers personne/objet ; в = dans l’espace)',
        '**Oublier -ии pour les noms en -ия** — к станце ✗ → к станции ✓ (станция → станции)',
        '**Accord de нужен** — Мне нужен помощь ✗ → Мне нужна помощь ✓ (accord avec la CHOSE dont on a besoin)',
      ],
    },
  ],
  conclusion:
    'Le cas datif russe est bien plus riche que ne le suggère l’étiquette « cas du don ».',
  conclusionBullets: [
    '**Emplois :** objet indirect, expérience de нравиться, âge, expressions impersonnelles (мне нужно, мне холодно), après к et по',
    '**Terminaisons des noms :** masc./neutre dur→-У, mou→-Ю | fém. -а/-я→-Е, -ия→-ИИ, -ь→-И | pluriel dur→-АМ, mou→-ЯМ',
    '**Pronoms personnels :** мне, тебе, ему, ей, нам, вам, им',
    '**НРАВИТЬСЯ :** personne au datif ; le verbe s’accorde avec la chose aimée',
    '**Âge :** [datif] + nombre + год/года/лет',
    '**Après prépositions :** ajouter Н- aux pronoms de 3e personne (к нему, к ней, к ним)',
  ],
  conclusionOutro: 'Poursuivez avec le reste de notre série de grammaire russe :',
  ctaText: 'Entraînez les cas russes avec notre application',
  ctaHref: '/',
  faq: [
    {
      question: 'À quoi sert le cas datif en russe ?',
      answer:
        'Le datif russe sert pour : les **objets indirects** (Я дал маме цветы), la construction **нравиться** (Мне нравится — j’aime), les **expressions d’âge** (Мне 25 лет), les **expressions impersonnelles** (Мне нужно, Мне холодно), et après les prépositions **к** (vers) et **по** (le long de / selon).',
    },
    {
      question: 'Comment dit-on « j’aime » en russe ?',
      answer:
        'On utilise [personne au datif] + нравится/нравятся + [sujet]. Мне нравится музыка (La musique me plaît = j’aime la musique). **Нравится** au singulier, **нравятся** au pluriel. Pour une préférence plus forte : Я люблю классическую музыку.',
    },
    {
      question: 'Comment exprime-t-on l’âge en russe ?',
      answer:
        '[Personne au datif] + [nombre] + год/года/лет. один год (1), два/три/четыре года (2–4), пять лет (5+). Мне двадцать пять лет. Pour demander : Сколько тебе лет?',
    },
    {
      question: 'Quelle est la différence entre к et в/на pour la direction ?',
      answer:
        '**К + datif** = vers une personne ou un objet : Иди к врачу. **В/НА + accusatif** = dans/sur un lieu : Иди в магазин. К pour les personnes/objets ; в/на pour les lieux et espaces.',
    },
    {
      question: 'Que signifie по en russe ?',
      answer:
        '**По** avec le datif exprime : mouvement le long de (гулять по парку), distribution (по одному), moyen (по телефону), matière (урок по математике), temps récurrent (по понедельникам), conformité (по закону).',
    },
    {
      question: 'Quels verbes se construisent avec le datif en russe ?',
      answer:
        'давать/дать, говорить/сказать, писать, звонить, помогать, показывать, объяснять, советовать, верить, завидовать, мешать, принадлежать. **Нравиться** prend l’expérimentateur au datif.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cas datif russe : comment dire « à » et « pour » en russe',
    description:
      'Guide complet du cas datif russe : terminaisons des noms, нравиться, expressions d’âge, constructions impersonnelles, 8 prépositions, 15 verbes, 30 exemples.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
    },
    keywords:
      'cas datif russe, terminaisons datif russe, grammaire мне нравится, objet indirect russe',
  },
};
