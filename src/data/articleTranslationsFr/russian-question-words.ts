import type { LearnArticle } from '../learnArticles';

/** Traduction française de l'article `russian-question-words` (source EN : `learnArticles.ts`). */
export const russianQuestionWordsFr: LearnArticle = {
  slug: 'russian-question-words',
  introByline: {
    text: '**Rédigé par Nathan** — francophone passionné de russe ; je partage ce qui fonctionne vraiment pour la grammaire, les cas et la pratique au quotidien.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondateur de Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Mots interrogatifs russes : qui, quoi, où, quand et comment (guide complet)',
  metaTitle: 'Guide des mots interrogatifs russes | Russian Cases with Anna',
  metaDescription:
    'Apprenez les mots interrogatifs russes : кто, что, где, куда, какой, сколько — et quel cas chacun déclenche, avec 25 questions prêtes à l’emploi.',
  keywords: [
    'mots interrogatifs russes',
    'questions en russe',
    'кто что где куда',
    'liste mots interrogatifs russe',
    'comment poser des questions en russe',
    'какой который чей russe',
    'сколько génitif russe',
    'где vs куда vs откуда',
  ],
  h1: 'Mots interrogatifs russes : qui, quoi, où, quand et comment (guide complet)',
  heroImage: {
    src: '/articles/russian-question-words-header.webp',
    alt: 'Carnet avec les mots interrogatifs russes manuscrits кто что где куда когда как почему',
    width: 1280,
    height: 720,
  },
  intro:
    'Si vous savez poser des questions en russe, vous pouvez orienter presque n’importe quelle conversation. Le piège : beaucoup de mots interrogatifs russes sont **liés aux cas**. **Кого?** n’est pas seulement « qui ? » — c’est « qui ? / de qui ? » au génitif/accusatif. **Сколько?** tire le nom qui suit au **génitif**. **Где?** et **куда?** se ressemblent en français (« où ? ») mais exigent une grammaire différente.\n\nCe guide vous donne le jeu complet pour débutants, montre comment **кто/что** se déclinent, sépare **где / куда / откуда**, couvre **какой / который / чей**, explique **сколько + génitif**, et se termine par **25 questions prêtes à l’emploi**.',
  whatYouLearn: [
    'Une liste complète des mots interrogatifs russes les plus utiles',
    'Comment кто et что se déclinent selon les cas',
    'Где vs куда vs откуда (lieu vs direction vs origine)',
    'Какой, который et чей — et comment ils s’accordent',
    'Сколько et pourquoi il prend le génitif',
    '25 questions prêtes à l’emploi pour de vraies conversations',
  ],
  leadMagnetCta: {
    title: 'Les questions deviennent plus faciles quand les terminaisons de cas sont automatiques',
    description:
      'Russian Cases with Anna entraîne les terminaisons derrière кого, чему, о ком et сколько + génitif. Gratuit sur iOS et Android.',
    ctaText: 'Téléchargez l’app — Gratuit',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Liste complète des mots interrogatifs russes',
      content:
        'Commencez par cette vue d’ensemble. Ajoutez-la à vos favoris, puis plongez dans les sections ci-dessous pour la grammaire que chaque mot déclenche.',
      table: {
        headers: ['Russe', 'Translittération', 'Français', 'Note de grammaire'],
        rows: [
          ['кто', 'kto', 'qui', 'Se décline (кого, кому…)'],
          ['что', 'chto', 'quoi / que', 'Se décline (чего, чему…)'],
          ['где', 'gde', 'où (lieu)', 'Réponse souvent au prépositionnel'],
          ['куда', 'kuda', 'où (direction)', 'Réponse souvent à l’accusatif'],
          ['откуда', 'otkuda', 'd’où', 'Réponse souvent de + génitif'],
          ['когда', 'kogda', 'quand', 'Expressions de temps / cas variables'],
          ['почему', 'pochemu', 'pourquoi (cause)', 'Souvent потому что…'],
          ['зачем', 'zachem', 'pourquoi (but)', 'But / à quoi bon'],
          ['как', 'kak', 'comment', 'Manière ; aussi « comment est… ? »'],
          ['какой / какая / какое / какие', 'kakoy…', 'quel / quelle sorte', 'S’accorde comme un adjectif'],
          ['который', 'kotoryy', 'lequel (d’un ensemble) / que', 'Relatif / lequel'],
          ['чей / чья / чьё / чьи', 'chey…', 'à qui', 'S’accorde avec le nom'],
          ['сколько', "skol'ko", 'combien', 'Nom au génitif'],
          ['сколько стоит…?', "skol'ko stoit", 'combien ça coûte ?', 'Question shopping fixe'],
        ],
        caption: 'Les mots interrogatifs russes essentiels en un coup d’œil',
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Кто et Что — et comment ils se déclinent',
      content:
        '**Кто?** (qui ?) et **Что?** (quoi / que ?) sont la base. Au nominatif, ils ont l’air simples. Aux autres cas, ils deviennent les formes que les francophones oublient en premier : **кого, чему, о ком…**',
      table: {
        headers: ['Cas', 'кто', 'что', 'Repère français'],
        rows: [
          ['Nominatif', 'кто', 'что', 'qui ? / quoi ? (sujet)'],
          ['Génitif', 'кого', 'чего', 'de qui ? / de quoi ? / нет кого ?'],
          ['Datif', 'кому', 'чему', 'à qui ? / à quoi ?'],
          ['Accusatif', 'кого', 'что', 'qui ? / quoi ? (objet)'],
          ['Instrumental', 'кем', 'чем', 'avec/par qui ? / avec quoi ?'],
          ['Prépositionnel', 'о ком', 'о чём', 'de qui ? / de quoi ? (à propos)'],
        ],
        caption: 'Déclinaison de кто et что',
        boldColumnIndices: [0, 1, 2],
      },
      subsections: [
        {
          h3: 'Exemples rapides',
          content:
            '**Кто это?** — Qui est-ce ?\n**Кого ты видишь?** — Qui vois-tu ?\n**Кому дать книгу?** — À qui dois-je donner le livre ?\n**О чём вы говорите?** — De quoi parlez-vous ?\n**Чем ты пишешь?** — Avec quoi écris-tu ?',
        },
      ],
      bullets: [
        '**Кого** est à la fois le génitif et l’accusatif de кто — le contexte indique lequel.',
        'Pour les parallèles pronominaux (мне, его, неё…), voir [Déclinaison des pronoms russes](/learn/articles/russian-pronouns-declension).',
      ],
    },
    {
      h2: 'Где vs Куда vs Откуда',
      content:
        'Le français utilise souvent un seul mot — « où ? ». Le russe sépare lieu, destination et origine. Les confondre est l’une des erreurs les plus fréquentes chez les débutants.',
      table: {
        headers: ['Question', 'Sens', 'Schéma de réponse typique', 'Exemple'],
        rows: [
          ['Где?', 'Où (à/dans) ?', 'в/на + prépositionnel', 'Где книга? — На столе.'],
          ['Куда?', 'Où (vers) ?', 'в/на + accusatif', 'Куда ты идёшь? — В школу.'],
          ['Откуда?', 'D’où ?', 'из/с/от + génitif', 'Откуда ты? — Из Франции.'],
        ],
        caption: 'Lieu vs direction vs origine',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Где?** → lieu statique (souvent [cas prépositionnel](/learn/articles/russian-prepositional-case)).',
        '**Куда?** → mouvement vers (souvent [accusatif](/learn/articles/russian-accusative-case) après в/на).',
        '**Откуда?** → origine (souvent [génitif](/learn/articles/russian-genitive-case) après из/с/от).',
        'Même nom, trois formes : **в школе** / **в школу** / **из школы**.',
      ],
    },
    {
      h2: 'Какой, Который et Чей',
      content:
        'Ces trois-là se ressemblent dans les traductions françaises (« quel / lequel / à qui ») mais ne sont pas interchangeables.',
      subsections: [
        {
          h3: 'Какой — quelle sorte / quel',
          content:
            '**Какой?** s’accorde comme un adjectif : какая, какое, какие + terminaisons de cas.\n**Какой это фильм?** — Quel genre de film est-ce ?\n**В каком доме ты живёшь?** — Dans quelle maison habites-tu ?',
        },
        {
          h3: 'Который — lequel / que (relatif)',
          content:
            '**Который** choisit dans un ensemble connu ou introduit une relative.\n**Который час?** — Quelle heure est-il ?\n**Книга, которую я читаю…** — Le livre que je lis…',
        },
        {
          h3: 'Чей — à qui',
          content:
            '**Чей / чья / чьё / чьи** s’accordent avec la **chose possédée**, pas avec le propriétaire.\n**Чья это сумка?** — À qui est ce sac ?\n**Чьи это ключи?** — À qui sont ces clés ?',
        },
      ],
      bullets: [
        'Si vous avez besoin des tableaux d’accord des adjectifs, voir [déclinaison des adjectifs](/learn/articles/russian-adjective-declension).',
        '**Какой** est le cheval de bataille du quotidien pour « quel / quelle sorte de + nom ».',
      ],
    },
    {
      h2: 'Сколько et le génitif',
      content:
        '**Сколько?** signifie « combien ? ». Le nom qui suit est normalement au **génitif**.',
      table: {
        headers: ['Russe', 'Français', 'Note'],
        rows: [
          ['Сколько у тебя братьев?', 'Combien de frères as-tu ?', 'братьев = génitif pluriel'],
          ['Сколько это стоит?', 'Combien ça coûte ?', 'Question commerce fixe'],
          ['Сколько времени?', 'Combien de temps ?', 'времени = génitif'],
          ['Сколько лет тебе?', 'Quel âge as-tu ?', 'Schéma d’âge avec datif тебе'],
        ],
        caption: 'Questions сколько avec le génitif',
        boldColumnIndices: [0],
      },
      bullets: [
        'Les nombres eux-mêmes interagissent aussi avec le génitif — détails dans le [guide des nombres](/learn/articles/russian-numbers-guide) et le [guide du génitif](/learn/articles/russian-genitive-case).',
        'Après **сколько**, ne laissez pas le nom au nominatif : *сколько братья* ✗ → **сколько братьев** ✓.',
      ],
    },
    {
      h2: '25 questions prêtes à l’emploi',
      content:
        'Mémorisez-les comme des cadres. Remplacez par vos propres noms une fois le schéma automatique.',
      table: {
        headers: ['#', 'Russe', 'Français'],
        rows: [
          ['1', 'Кто это?', 'Qui est-ce ?'],
          ['2', 'Что это?', 'Qu’est-ce que c’est ?'],
          ['3', 'Как тебя зовут?', 'Comment t’appelles-tu ?'],
          ['4', 'Откуда ты?', 'D’où viens-tu ?'],
          ['5', 'Где ты живёшь?', 'Où habites-tu ?'],
          ['6', 'Куда ты идёшь?', 'Où vas-tu ?'],
          ['7', 'Когда мы встретимся?', 'Quand nous rencontrons-nous ?'],
          ['8', 'Почему ты устал?', 'Pourquoi es-tu fatigué ?'],
          ['9', 'Зачем тебе это?', 'À quoi te sert ça ?'],
          ['10', 'Как дела?', 'Comment ça va ?'],
          ['11', 'Какой сегодня день?', 'Quel jour sommes-nous ?'],
          ['12', 'Который час?', 'Quelle heure est-il ?'],
          ['13', 'Чья это книга?', 'À qui est ce livre ?'],
          ['14', 'Сколько это стоит?', 'Combien ça coûte ?'],
          ['15', 'Сколько тебе лет?', 'Quel âge as-tu ?'],
          ['16', 'Кого ты ждёшь?', 'Qui attends-tu ?'],
          ['17', 'Кому позвонить?', 'À qui dois-je téléphoner ?'],
          ['18', 'О чём фильм?', 'De quoi parle le film ?'],
          ['19', 'Чем ты занимаешься?', 'Que fais-tu ? / À quoi t’occupes-tu ?'],
          ['20', 'В каком городе ты был?', 'Dans quelle ville étais-tu ?'],
          ['21', 'Как пройти к метро?', 'Comment aller au métro ?'],
          ['22', 'Где можно купить билет?', 'Où peut-on acheter un billet ?'],
          ['23', 'Когда открывается музей?', 'Quand le musée ouvre-t-il ?'],
          ['24', 'Почему здесь так шумно?', 'Pourquoi est-ce si bruyant ici ?'],
          ['25', 'Сколько остановок до центра?', 'Combien d’arrêts jusqu’au centre ?'],
        ],
        caption: '25 questions russes à haute fréquence',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Erreurs fréquentes avec les mots interrogatifs russes',
      bullets: [
        '**Utiliser где pour la direction :** *Где ты идёшь?* ✗ → **Куда ты идёшь?** ✓.',
        '**Oublier le génitif après сколько :** *Сколько братья?* ✗ → **Сколько братьев?** ✓.',
        '**Laisser кто/что coincés au nominatif** après les prépositions : il faut **о ком / о чём**, **с кем / с чем**.',
        '**Confondre почему et зачем** — cause vs but.',
        '**Utiliser который quand какой** est le choix naturel du quotidien pour « quelle sorte de… ».',
      ],
    },
  ],
  faq: [
    {
      question: 'Quels sont les mots interrogatifs russes les plus importants pour débutants ?',
      answer:
        'Commencez par кто, что, где, куда, откуда, когда, почему, как, какой, чей et сколько. Ils couvrent les présentations, les directions, le temps, les raisons et les achats.',
    },
    {
      question: 'Quelle est la différence entre где et куда ?',
      answer:
        'Где demande le lieu (Où es-tu ?). Куда demande la destination (Où vas-tu ?). Les réponses utilisent en général des cas différents : prépositionnel pour где, accusatif de direction pour куда après в/на.',
    },
    {
      question: 'Est-ce que кто et что changent selon les cas ?',
      answer:
        'Oui. Ils se déclinent entièrement : кого/чего, кому/чему, кем/чем, о ком/о чём, etc. Apprendre ces formes est essentiel pour des questions naturelles.',
    },
    {
      question: 'Pourquoi сколько prend-il le génitif ?',
      answer:
        'Parce que les expressions de quantité en russe exigent en général le génitif du nom compté : сколько братьев, сколько времени. C’est la même famille de règles que pour les nombres et нет + génitif.',
    },
    {
      question: 'Quand utiliser какой vs который ?',
      answer:
        'Какой est la question courante pour « quel / quelle sorte de » avec un nom. Который signifie souvent « lequel » dans un ensemble, ou introduit une relative (le livre que…).',
    },
  ],
  conclusionIntro: 'Les mots interrogatifs, c’est du vocabulaire plus de la logique des cas dans un même paquet.',
  conclusionBullets: [
    'Apprenez la **liste de base**, puis les **formes de cas** de кто/что',
    'Ne confondez jamais **где / куда / откуда**',
    'Déclinez **какой / чей** comme des adjectifs',
    'Mettez les noms après **сколько** au **génitif**',
    'Entraînez les **25 cadres** jusqu’à ce qu’ils sortent automatiquement',
  ],
  conclusionOutro:
    'Ensuite, reliez ces questions à des drills de cas complets dans notre [outil de pratique](/practice) gratuit, et gardez ouverts les guides des [pronoms](/learn/articles/russian-pronouns-declension) et du [génitif](/learn/articles/russian-genitive-case) pendant que les formes se stabilisent.',
  internalLinks: [
    {
      href: '/learn/articles/russian-pronouns-declension',
      label: 'Déclinaison des pronoms russes',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Guide du cas génitif russe',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Guide du cas accusatif russe',
    },
    {
      href: '/learn/articles/russian-prepositional-case',
      label: 'Guide du cas prépositionnel russe',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Guide des salutations russes',
    },
    {
      href: '/practice',
      label: 'Quiz de déclinaisons russes gratuit',
    },
  ],
  ctaText: 'Entraînez les cas russes — Gratuit →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mots interrogatifs russes : qui, quoi, où, quand et comment (guide complet)',
    description:
      'Apprenez les mots interrogatifs russes : кто, что, где, куда, какой, сколько — et quel cas chacun déclenche, avec 25 questions prêtes à l’emploi.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-question-words',
    },
    keywords:
      'mots interrogatifs russes, questions en russe, кто что где куда, сколько génitif russe, где vs куда vs откуда',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-question-words-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
