import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-adjective-declension` (source EN : `learnArticles.ts`). */
export const russianAdjectiveDeclensionFr: LearnArticle = {
  slug: 'russian-adjective-declension',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Déclinaison des adjectifs russes : tableau des terminaisons pour les 6 cas',
  metaTitle: 'Terminaisons des adjectifs russes | Russian Cases with Anna',
  metaDescription:
    'Tableau complet des terminaisons d’adjectifs russes : thèmes durs et mous, 6 cas, accusatif animé, formes brèves et possessifs — avec vrais exemples.',
  keywords: [
    'terminaisons adjectifs russes',
    'déclinaison adjectifs russes',
    'accord adjectifs russes',
    'thèmes durs et mous adjectifs russes',
    'tableau cas adjectifs russes',
    'formes brèves adjectifs russes',
    'adjectifs possessifs russes',
    'décliner les adjectifs russes',
  ],
  h1: 'Déclinaison des adjectifs russes : tableau des terminaisons pour les 6 cas',
  heroImage: {
    src: '/articles/russian-adjective-declension-header.webp',
    alt: 'Carnet avec des exemples d’accord d’adjectifs russes новый новая новое pour les terminaisons de cas',
    width: 1280,
    height: 720,
  },
  intro:
    'Les noms concentrent l’attention quand on parle des cas russes — mais **les adjectifs se déclinent aussi**, et ils doivent correspondre au nom en **genre, nombre et cas** à chaque fois. Ratez la terminaison et la phrase sonne faux même si le nom est parfait.\n\nLa bonne nouvelle : les terminaisons d’adjectifs sont **plus régulières que celles des noms**. Une fois le schéma du thème dur (`новый`) et du thème mou (`синий`) connus, vous pouvez décliner des milliers d’adjectifs. Ce guide vous donne les tableaux complets, la règle de l’accusatif animé/inanimé, les formes brèves, les possessifs, et les erreurs qui piègent le plus souvent les francophones.',
  whatYouLearn: [
    'Ce que signifie l’accord de l’adjectif russe (genre × nombre × cas)',
    'Tableau complet des thèmes durs avec `новый`',
    'Tableau complet des thèmes mous avec `синий`',
    'Comment l’animé vs l’inanimé change l’accusatif',
    'Groupes nom + adjectif déclinés dans les 6 cas',
    'Adjectifs en forme brève (prédicative) vs forme longue',
    'Adjectifs possessifs : `мой`, `наш`, `свой`',
    '8 erreurs fréquentes — et comment les corriger',
  ],
  leadMagnetCta: {
    title: 'Entraînez l’accord adjectif + nom dans les 6 cas',
    description:
      'Russian Cases with Anna entraîne les terminaisons que partagent adjectifs et noms — avec répétition espacée, vraies phrases et feedback immédiat. Gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app et commencez à vous entraîner dès aujourd’hui',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Ce que signifie l’accord de l’adjectif russe',
      content:
        'En français, l’adjectif s’accorde déjà en genre et en nombre ; en russe, il s’accorde aussi en **cas**. Si le nom est au génitif féminin singulier, l’adjectif doit l’être aussi.\n\nCet accord à trois dimensions — **genre × nombre × cas** — est tout le travail de la déclinaison des adjectifs.',
      table: {
        headers: ['Groupe nominal', 'Genre / nombre / cas', 'Français'],
        rows: [
          ['новый дом', 'masc. sing. nominatif', 'une nouvelle maison'],
          ['новой книги', 'fém. sing. génitif', 'd’un nouveau livre'],
          ['новым окнам', 'neutre pl. datif', 'aux nouvelles fenêtres'],
          ['о синих глазах', 'pl. prépositionnel', 'à propos d’yeux bleus'],
        ],
        caption: 'La terminaison de l’adjectif reflète toujours la grammaire du nom',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Apprenez d’abord le **genre du nom** — sans lui, vous ne pouvez pas choisir la bonne terminaison d’adjectif (voir notre [guide du genre des noms](/learn/articles/russian-noun-gender-guide)).',
        'Les adjectifs répondent aux mêmes questions de cas que les noms : **какой? какая? какое? какие?** plus les formes déclinées de ces questions.',
        'Les règles d’orthographe s’appliquent aussi : après **г, к, х, ж, ш, щ, ч, ц**, le russe préfère **и** à **ы** dans beaucoup de terminaisons — d’où **хороший**, et non *хорошый*.',
      ],
    },
    {
      h2: 'Tableau des thèmes durs (новый)',
      content:
        'Les adjectifs à thème dur sont le schéma par défaut. Au nominatif masculin, ils se terminent en général par **-ый** (новый, красный) ou **-ой** accentué (молодой, большой). Toutes les autres terminaisons suivent le même tableau dur.',
      table: {
        headers: ['Cas', 'Masculin', 'Neutre', 'Féminin', 'Pluriel'],
        rows: [
          ['Nominatif', 'новый', 'новое', 'новая', 'новые'],
          ['Génitif', 'нового', 'нового', 'новой', 'новых'],
          ['Datif', 'новому', 'новому', 'новой', 'новым'],
          ['Accusatif', 'новый / нового', 'новое', 'новую', 'новые / новых'],
          ['Instrumental', 'новым', 'новым', 'новой', 'новыми'],
          ['Prépositionnel', 'новом', 'новом', 'новой', 'новых'],
        ],
        caption: 'Terminaisons des adjectifs à thème dur — exemple : новый (nouveau)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Le **masculin et le neutre partagent** les terminaisons du génitif, du datif, de l’instrumental et du prépositionnel — mémorisez un jeu, vous en avez deux.',
        'Le **féminin fusionne** génitif, datif, instrumental et prépositionnel en **-ой** (parfois poétique **-ою** à l’instrumental).',
        'Les adjectifs en **-ой** accentué (большой, молодой) ne diffèrent qu’au nominatif masculin — toutes les autres cases suivent le tableau dur.',
      ],
      subsections: [
        {
          h3: 'Aides-mémoire rapides',
          content:
            'Si vous ne retenez que trois faits sur les adjectifs durs, retenez ceux-ci : les formes obliques masculin/neutre partagent **-ого / -ому / -ым / -ом** ; les formes obliques féminines partagent **-ой** ; le génitif et le prépositionnel pluriels utilisent tous deux **-ых**.',
        },
      ],
    },
    {
      h2: 'Tableau des thèmes mous (синий)',
      content:
        'Les adjectifs à thème mou se terminent par **-ий** au nominatif masculin (синий, летний, последний). Leurs terminaisons remplacent les voyelles dures par des molles : **о→е**, **ы→и**, **у→ю**, **а→я**.',
      table: {
        headers: ['Cas', 'Masculin', 'Neutre', 'Féminin', 'Pluriel'],
        rows: [
          ['Nominatif', 'синий', 'синее', 'синяя', 'синие'],
          ['Génitif', 'синего', 'синего', 'синей', 'синих'],
          ['Datif', 'синему', 'синему', 'синей', 'синим'],
          ['Accusatif', 'синий / синего', 'синее', 'синюю', 'синие / синих'],
          ['Instrumental', 'синим', 'синим', 'синей', 'синими'],
          ['Prépositionnel', 'синем', 'синем', 'синей', 'синих'],
        ],
        caption: 'Terminaisons des adjectifs à thème mou — exemple : синий (bleu)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Les thèmes mous sont moins nombreux que les durs, mais incluent des mots très fréquents : **синий, русский, хороший, последний, летний**.',
        '**Хороший** a l’air mou (-ий) et se décline comme un mou — un adjectif de débutant très courant.',
        'Si le nominatif masculin se termine par **-ий** (pas -ый/-ой), partez du tableau mou.',
      ],
    },
    {
      h2: 'Accusatif : adjectifs animés vs inanimés',
      content:
        'Comme les noms, les adjectifs suivent la **règle d’animacité** à l’accusatif au masculin singulier et à tous les pluriels. Le féminin et le neutre singuliers gardent une seule forme d’accusatif.',
      table: {
        headers: ['Situation', 'Forme de l’adjectif', 'Exemple', 'Français'],
        rows: [
          ['Masc. inanimé', '= Nominatif', 'Я вижу новый дом.', 'Je vois une nouvelle maison.'],
          ['Masc. animé', '= Génitif', 'Я вижу нового друга.', 'Je vois un nouvel ami.'],
          ['Féminin', '-ую / -юю', 'Я вижу новую книгу.', 'Je vois un nouveau livre.'],
          ['Neutre', '= Nominatif', 'Я вижу новое окно.', 'Je vois une nouvelle fenêtre.'],
          ['Pluriel inanimé', '= Nominatif', 'Я вижу новые дома.', 'Je vois de nouvelles maisons.'],
          ['Pluriel animé', '= Génitif', 'Я вижу новых друзей.', 'Je vois de nouveaux amis.'],
        ],
        caption: 'Les terminaisons d’adjectif à l’accusatif dépendent de l’animacité',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Le nom et l’adjectif **doivent s’accorder sur l’animacité** — si le nom prend l’accusatif en forme de génitif, l’adjectif aussi.',
        'C’est la même règle que dans notre [guide de l’accusatif](/learn/articles/russian-accusative-case) — les adjectifs l’héritent simplement.',
        'Les débutants déclinent souvent le nom correctement et laissent l’adjectif au nominatif : *Я вижу новый друга* ✗ → **нового друга** ✓.',
      ],
    },
    {
      h2: 'Groupes nom + adjectif dans les 6 cas',
      content:
        'Les tableaux aident ; les groupes complets font « cliquer » le système. Voici **новый дом** (dur, masc. inanimé), **новая книга** (dur, fém.) et **синий карандаш** (mou, masc. inanimé) déclinés ensemble.',
      table: {
        headers: ['Cas', 'новый дом', 'новая книга', 'синий карандаш'],
        rows: [
          ['Nominatif', 'новый дом', 'новая книга', 'синий карандаш'],
          ['Génitif', 'нового дома', 'новой книги', 'синего карандаша'],
          ['Datif', 'новому дому', 'новой книге', 'синему карандашу'],
          ['Accusatif', 'новый дом', 'новую книгу', 'синий карандаш'],
          ['Instrumental', 'новым домом', 'новой книгой', 'синим карандашом'],
          ['Prépositionnel', 'о новом доме', 'о новой книге', 'о синем карандаше'],
        ],
        caption: 'Groupes adjectif + nom déclinés dans les six cas',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Contraste masculin animé',
          content:
            'Remplacez дом par **друг** et seul l’accusatif change : **нового друга**, pas новый друг. Le génitif avait déjà cette forme — c’est pourquoi l’accusatif animé « emprunte » la forme du génitif.',
        },
        {
          h3: 'Approfondir cas par cas',
          content:
            'Une fois les terminaisons d’adjectifs familières, entraînez-les dans chaque article de cas : [nominatif](/learn/articles/russian-nominative-case), [génitif](/learn/articles/russian-genitive-case), [datif](/learn/articles/russian-dative-case), [accusatif](/learn/articles/russian-accusative-case), [instrumental](/learn/articles/russian-instrumental-case), [prépositionnel](/learn/articles/russian-prepositional-case).',
        },
      ],
    },
    {
      h2: 'Formes brèves des adjectifs (prédicatives)',
      content:
        'Le russe a un second système d’adjectifs : les **formes brèves**, utilisées surtout comme prédicats (après un « être » omis). Elles répondent à « comment est X ? » plutôt qu’à « quel X ? ».',
      table: {
        headers: ['Forme longue', 'Court masc.', 'Court fém.', 'Court neutre', 'Court pluriel'],
        rows: [
          ['новый', 'нов', 'нова', 'ново', 'новы'],
          ['красивый', 'красив', 'красива', 'красиво', 'красивы'],
          ['интересный', 'интересен', 'интересна', 'интересно', 'интересны'],
          ['занятый', 'занят', 'занята', 'занято', 'заняты'],
        ],
        caption: 'Formes longues vs formes brèves des adjectifs',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La **forme longue** se décline selon le cas et se place à côté d’un nom : **новая книга** (un nouveau livre).',
        'La **forme brève** ne se **décline pas** selon le cas et sert en général de prédicat seule : **Книга нова.** / plus naturellement **Книга новая.** en russe moderne.',
        'Beaucoup de formes brèves sont courantes dans des expressions figées : **Он занят** (Il est occupé), **Мне холодно** (J’ai froid — neutre bref adverbial).',
        'Si vous maîtrisez encore les cas, priorisez d’abord les **formes longues** — ce sont elles qu’il vous faut pour l’accord dans les groupes nominaux.',
      ],
    },
    {
      h2: 'Adjectifs possessifs : мой, наш, свой',
      content:
        'Les possessifs se comportent comme des adjectifs : ils s’accordent en genre, nombre et cas. `мой` / `твой` / `свой` partagent un schéma ; `наш` / `ваш` en partagent un autre. `его` / `её` / `их` (« son / sa / leur ») **ne se déclinent pas**.',
      table: {
        headers: ['Cas', 'мой (masc.)', 'моя (fém.)', 'моё (neutre)', 'мои (pl.)'],
        rows: [
          ['Nominatif', 'мой', 'моя', 'моё', 'мои'],
          ['Génitif', 'моего', 'моей', 'моего', 'моих'],
          ['Datif', 'моему', 'моей', 'моему', 'моим'],
          ['Accusatif', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Instrumental', 'моим', 'моей', 'моим', 'моими'],
          ['Prépositionnel', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'Déclinaison de мой — le modèle pour твой et свой',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Свой** renvoie au sujet (« le sien propre ») : **Он читает свою книгу** (Il lit son propre livre) vs **его книгу** (celui de quelqu’un d’autre).',
        '**Наш / ваш** suivent des terminaisons d’apparence molle : нашего, нашей, наши…',
        '**Его / её / их** ne changent jamais : **о его новой машине** — seuls l’adjectif et le nom se déclinent.',
      ],
    },
    {
      h2: '8 erreurs fréquentes avec les adjectifs russes',
      content:
        'Voici les erreurs que font le plus souvent les apprenants francophones — chacune se corrige avec une seule règle.',
      bullets: [
        '**Laisser l’adjectif au nominatif** en déclinant le nom : *в новый доме* ✗ → **в новом доме** ✓.',
        '**Oublier l’animacité à l’accusatif** : *Я знаю хороший врача* ✗ → **хорошего врача** ✓.',
        '**Mélanger tableaux dur et mou** : синий prend **синего**, pas *синого*.',
        '**Mettre -ый après ш/ж/ч/щ/ц** : écrivez **хороший**, **свежий** (règle d’orthographe).',
        '**Décliner его / её / их** : ils restent fixes — ne déclinez que les mots qui suivent.',
        '**Confondre свой et его** : свой = appartient au sujet ; его = appartient à quelqu’un d’autre déjà nommé.',
        '**Traiter les formes brèves comme marquées par le cas** : les formes brèves ne prennent pas de terminaisons de cas.',
        '**Ignorer l’accord neutre** : окно est neutre → **новое окно**, pas *новый окно*.',
      ],
    },
    {
      h2: 'Comment s’entraîner à la déclinaison des adjectifs',
      content:
        'Lire les tableaux une fois ne suffit pas. Utilisez une boucle qui force l’accord sous pression de temps :',
      bullets: [
        'Choisissez un nom bien connu et déclinez **adjectif + nom** à voix haute dans les 6 cas.',
        'Changez de genre (дом → книга → окно) et répétez avec le même adjectif.',
        'Ajoutez le contraste d’animacité : новый стол vs новый друг à l’accusatif.',
        'Entraînez-vous dans de vraies phrases avec notre [outil de pratique gratuit](/practice) et la [anti-sèche des terminaisons de cas](/learn/articles/russian-case-endings-cheatsheet).',
      ],
    },
  ],
  faq: [
    {
      question: 'Les adjectifs russes changent-ils à chaque cas ?',
      answer:
        'Oui. Les adjectifs en forme longue s’accordent avec le nom en genre, nombre et cas, donc la terminaison change en général dès que le cas du nom change. Les formes brèves sont l’exception : elles sont prédicatives et ne se déclinent pas selon le cas.',
    },
    {
      question: 'Quelle est la différence entre thèmes durs et mous ?',
      answer:
        'Les adjectifs à thème dur se terminent typiquement par -ый ou -ой au nominatif masculin (новый, большой) et utilisent des terminaisons avec о/ы/у. Les thèmes mous se terminent par -ий (синий, летний) et utilisent е/и/ю à la place. Le schéma logique est le même ; seul le jeu de voyelles change.',
    },
    {
      question: 'Pourquoi новый друга paraît incorrect et нового друга correct ?',
      answer:
        'Parce que друг est un masculin animé. À l’accusatif, les masculins animés (et les pluriels animés) prennent la terminaison en forme de génitif — et l’adjectif doit suivre : нового друга, pas новый друга.',
    },
    {
      question: 'Faut-il apprendre tôt les formes brèves ?',
      answer:
        'Apprenez quelques formes brèves très fréquentes (занят, рад, должен, нужно/можно comme prédicatifs proches), mais priorisez d’abord la déclinaison des formes longues. Ce sont elles qu’il vous faut pour les groupes nominaux dans les six cas.',
    },
    {
      question: 'En quoi мой diffère-t-il de его ?',
      answer:
        'Мой, твой, свой, наш et ваш se déclinent comme des adjectifs. Его, её et их ne changent jamais de forme ; seuls le nom et les autres adjectifs autour se déclinent.',
    },
  ],
  conclusionIntro: 'La déclinaison des adjectifs paraît vaste sur le papier, mais elle se résume à un petit ensemble d’habitudes :',
  conclusionBullets: [
    'Accordez toujours **genre × nombre × cas** — l’adjectif ne reste jamais au nominatif par défaut',
    'Maîtrisez d’abord le **tableau dur**, puis mappez-le sur le **tableau mou**',
    'Appliquez la **règle d’animacité** à l’accusatif pour le masculin et le pluriel',
    'Utilisez les **formes longues** dans les groupes nominaux ; gardez les **formes brèves** pour les prédicats',
    'Déclinez **мой/твой/свой/наш/ваш** ; laissez **его/её/их** inchangés',
  ],
  conclusionOutro:
    'Quand les paires adjectif + nom commencent à devenir automatiques, vous êtes prêt à accélérer dans chaque cas. Entraînez-vous avec notre outil de pratique gratuit — et gardez l’[anti-sèche des terminaisons de cas russes](/learn/articles/russian-case-endings-cheatsheet) ouverte tant que les tableaux ne sont pas encore ancrés.',
  internalLinks: [
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Les terminaisons de cas russes : l’anti-sèche ultime',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Le genre des noms russes : masculin, féminin, neutre',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Le cas nominatif russe : règles, terminaisons et exemples',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Le cas accusatif russe : animé vs inanimé',
    },
    {
      href: '/practice',
      label: 'Quiz de déclinaisons russes gratuit — les 6 cas',
    },
  ],
  ctaText: 'Entraînez les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Déclinaison des adjectifs russes : tableau des terminaisons pour les 6 cas',
    description:
      'Tableau complet des terminaisons d’adjectifs russes : thèmes durs et mous, 6 cas, accusatif animé, formes brèves et possessifs — avec vrais exemples.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-adjective-declension',
    },
    keywords:
      'terminaisons adjectifs russes, déclinaison adjectifs russes, accord adjectifs russes, thèmes durs et mous adjectifs russes, tableau cas adjectifs russes, formes brèves adjectifs russes',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-adjective-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
