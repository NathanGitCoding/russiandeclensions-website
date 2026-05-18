import type { LearnArticle } from '../learnArticles';

/** Traduction FR de `russian-verbs-of-motion` (source EN : `learnArticles.ts`). Cyrillique copié à l’identique. */
export const russianVerbsOfMotionFr: LearnArticle = {
  slug: 'russian-verbs-of-motion',
  title: 'Verbes de mouvement russes : le guide complet (идти, ходить, ехать, ездить)',
  metaTitle:
    'Verbes de mouvement russes : идти, ходить, ехать, ездить expliqués | Russian Cases with Anna',
  metaDescription:
    'Maîtrisez les verbes de mouvement russes : comprenez la différence entre идти/ходить (à pied) et ехать/ездить (en véhicule), les verbes unidirectionnels vs multidirectionnels, les verbes préfixés et les cas grammaticaux qu’ils régissent.',
  keywords: [
    'verbes de mouvement russes',
    'идти ходить',
    'ехать ездить',
    'verbes unidirectionnels russe',
    'verbes de mouvement grammaire russe',
    'verbes déterminés indéterminés russe',
  ],
  h1: 'Verbes de mouvement russes : le guide complet — идти, ходить, ехать, ездить',
  heroImage: {
    src: '/articles/russian-verbs-of-motion-complete-guide.webp',
    alt: 'Guide des verbes de mouvement russes — идти, ходить, ехать, ездить',
    width: 1200,
    height: 630,
  },
  intro:
    'Les verbes de mouvement russes comptent parmi les aspects les plus fascinants — et les plus redoutés — de la grammaire russe. Contrairement au français qui utilise simplement « aller » pour presque tout déplacement, **le russe vous oblige à préciser exactement comment vous vous déplacez** : à pied ou en véhicule, dans une seule direction ou de façon habituelle. Une erreur sur ce point et un locuteur natif comprendra ce que vous dites, mais saura immédiatement que vous êtes apprenant.\n\nLa bonne nouvelle : le système est logique. Une fois que vous avez compris les deux distinctions clés — **unidirectionnel vs multidirectionnel** et **à pied vs en véhicule** — tout le reste suit des règles prévisibles. Ce guide décortique le système complet avec des tableaux clairs, de vrais exemples et les liens avec les **cas grammaticaux russes**, pour que vous puissiez utiliser ces verbes correctement dès le premier jour.',
  whatYouLearn: [
    'La différence fondamentale entre **идти** et **ходить** (et quand utiliser chacun)',
    'La différence fondamentale entre **ехать** et **ездить** (déplacement en véhicule)',
    'Les 14 verbes de mouvement russes les plus importants avec leurs paires',
    'Comment les préfixes transforment les verbes de mouvement (приходить, уходить, приезжать…)',
    'Quels cas russes les verbes de mouvement régissent — et pourquoi',
  ],
  leadMagnetCta: {
    title: 'Entraînez les cas russes avec les verbes de mouvement',
    description:
      'Russian Cases with Anna est la seule appli dédiée aux déclinaisons et cas russes. Les verbes de mouvement déclenchent l’accusatif et le datif — nos quiz interactifs vous aident à les maîtriser jusqu’à ce que ça devienne automatique. Téléchargement gratuit sur iOS et Android.',
    ctaText: 'Télécharger l’appli — Gratuit',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Ce qui rend les verbes de mouvement russes uniques',
      content:
        'Le français possède un verbe universel pour le mouvement : « aller ». On dit « je vais à l’école », « je vais en bus », « j’y vais tous les jours » et « j’y vais maintenant » — toujours le même verbe, on s’appuie sur le contexte.\n\nLe russe fonctionne différemment. Il dispose d’une classe spécifique de **verbes de mouvement** (глаголы движения), qui encodent deux informations ignorées par le français :\n\n1. **La direction du mouvement :** s’agit-il d’un trajet unique et dirigé (je vais là-bas maintenant) — ou d’un mouvement général, habituel ou aller-retour (j’y vais régulièrement) ?\n2. **Le mode de déplacement :** est-ce à pied (идти / ходить) ou en véhicule (ехать / ездить) ?',
      subsections: [
        {
          h3: 'Unidirectionnel vs multidirectionnel : le concept clé',
          content:
            'Les **verbes unidirectionnels** (aussi appelés déterminés) décrivent un mouvement dans une direction précise, à un instant précis. Imaginez une flèche droite qui pointe vers un endroit.\n\nLes **verbes multidirectionnels** (aussi appelés indéterminés) décrivent un mouvement habituel, répété, aller-retour ou général — pas un trajet unique et précis. Imaginez un zigzag ou un cercle.',
          bullets: [
            '**Unidirectionnel (идти, ехать) :** Je vais au travail *en ce moment* / Elle marche vers nous / Le train part',
            '**Multidirectionnel (ходить, ездить) :** Je vais au travail tous les jours / Elle se promène souvent dans le parc / Il voyageait beaucoup autrefois',
          ],
        },
        {
          h3: 'Le test rapide',
          content:
            'Avant d’utiliser un verbe de mouvement russe, posez-vous deux questions :\n\n**Question 1 :** Est-ce que je décris un mouvement qui se passe maintenant dans une direction, ou un mouvement habituel/répété/aller-retour ?\n• Maintenant, une direction → utilisez l’**unidirectionnel** (идти / ехать)\n• Habituel, répété ou général → utilisez le **multidirectionnel** (ходить / ездить)\n\n**Question 2 :** Est-ce que je me déplace à pied ou en véhicule (voiture, bus, train, vélo…) ?\n• À pied → идти / ходить\n• En véhicule → ехать / ездить',
        },
      ],
    },
    {
      h2: 'Les deux paires de verbes essentielles : à pied et en véhicule',
      content:
        'Les paires les plus importantes sont **идти/ходить** (déplacement à pied) et **ехать/ездить** (déplacement en véhicule). Voici comment elles se comparent :',
      table: {
        headers: ['', 'À pied', 'En véhicule'],
        rows: [
          ['**Unidirectionnel**', 'идти', 'ехать'],
          ['**Multidirectionnel**', 'ходить', 'ездить'],
        ],
        caption: 'Les quatre verbes de mouvement fondamentaux du russe',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'идти — aller (à pied, maintenant, dans une direction)',
          content:
            'Utilisez **идти** pour décrire un déplacement à pied qui se passe en ce moment, dans une direction précise, en trajet simple.',
          bullets: [
            '**Я иду в магазин.** — Je vais au magasin. (maintenant, à pied)',
            '**Она идёт к нам.** — Elle vient vers nous. (en cours, à pied)',
            '**Поезд идёт в Москву.** — Le train va à Moscou. (directionnel — même les trains « marchent » en russe !)',
            '**Дети идут в школу.** — Les enfants vont à l’école. (maintenant, à pied)',
          ],
        },
        {
          h3: 'ходить — aller (à pied, habituellement ou aller-retour)',
          content:
            'Utilisez **ходить** lorsque le déplacement à pied est habituel, répété, ou décrit la capacité/tendance générale à aller quelque part.',
          bullets: [
            '**Я хожу в спортзал каждый день.** — Je vais à la salle de sport tous les jours. (habituel)',
            '**Мы часто ходим в кино.** — Nous allons souvent au cinéma. (répété)',
            '**Вчера я ходил в банк.** — Hier, je suis allé à la banque (et je suis revenu). (aller-retour accompli dans le passé)',
            '**Она хорошо ходит.** — Elle marche bien. (capacité générale)',
          ],
        },
        {
          h3: 'ехать — aller (en véhicule, maintenant, dans une direction)',
          content:
            'Utilisez **ехать** lorsqu’un déplacement en véhicule (voiture, train, bus, vélo…) se passe en ce moment, dans une direction précise.',
          bullets: [
            '**Мы едем в Москву.** — Nous allons à Moscou. (en véhicule, maintenant)',
            '**Автобус едет медленно.** — Le bus avance lentement. (en cours)',
            '**Я еду на такси.** — Je prends un taxi. (trajet précis, maintenant)',
            '**Машина едет быстро.** — La voiture roule vite. (mouvement directionnel)',
          ],
        },
        {
          h3: 'ездить — aller (en véhicule, habituellement ou aller-retour)',
          content:
            'Utilisez **ездить** lorsque le voyage en véhicule est habituel, répété, ou décrit une tendance générale.',
          bullets: [
            '**Я езжу на работу на метро.** — Je vais au travail en métro. (habitude quotidienne)',
            '**Она часто ездит за границу.** — Elle voyage souvent à l’étranger. (répété)',
            '**Вчера мы ездили на дачу.** — Hier, nous sommes allés à la datcha (et revenus). (aller-retour dans le passé)',
            '**Он умеет ездить на велосипеде.** — Il sait faire du vélo. (capacité)',
          ],
        },
        {
          h3: 'Le tableau complet : 14 verbes de mouvement',
          content:
            'Le russe possède en réalité 14 paires de verbes de mouvement — chacune encodant un type de déplacement différent. Les plus courants sont listés ci-dessous.',
          table: {
            headers: ['Unidirectionnel', 'Multidirectionnel', 'Signification'],
            rows: [
              ['идти', 'ходить', 'aller à pied'],
              ['ехать', 'ездить', 'aller en véhicule'],
              ['бежать', 'бегать', 'courir'],
              ['лететь', 'летать', 'voler'],
              ['плыть', 'плавать', 'nager / naviguer'],
              ['нести', 'носить', 'porter (à pied)'],
              ['везти', 'возить', 'transporter (en véhicule)'],
              ['вести', 'водить', 'conduire / emmener'],
              ['ползти', 'ползать', 'ramper'],
              ['лезть', 'лазить', 'grimper'],
            ],
            caption: 'Les paires de verbes de mouvement russes les plus courantes',
            boldColumnIndices: [0, 1],
          },
        },
      ],
    },
    {
      h2: 'Les verbes de mouvement préfixés : le niveau suivant',
      content:
        'Dès qu’on ajoute un **préfixe** à un verbe de mouvement, quelque chose d’important se produit : le verbe **perd la distinction unidirectionnel/multidirectionnel** et devient à la place une paire imperfectif/perfectif ordinaire. Les préfixes indiquent un type ou une direction de mouvement précis, et se fixent toujours sur la base multidirectionnelle.',
      subsections: [
        {
          h3: 'Comment fonctionnent les préfixes',
          content:
            'Prenons le préfixe **при-** (qui signifie « arrivée, venue »). Il se fixe sur les deux formes :\n\n• **при-** + ходить → **приходить** (venir / arriver régulièrement — imperfectif)\n• **при-** + йти → **прийти** (venir / arriver — perfectif)\n\nNote : **идти** change d’orthographe avec un préfixe (→ -йти). **ехать** devient **-езжать** (imperfectif) et **-ехать** (perfectif).',
          bullets: [
            '**приходить / прийти** — arriver (à pied)',
            '**уходить / уйти** — partir, s’en aller (à pied)',
            '**выходить / выйти** — sortir (à pied)',
            '**входить / войти** — entrer (à pied)',
            '**переходить / перейти** — traverser (à pied)',
            '**приезжать / приехать** — arriver (en véhicule)',
            '**уезжать / уехать** — partir (en véhicule)',
            '**выезжать / выехать** — sortir en voiture, quitter (en véhicule)',
          ],
        },
        {
          h3: 'Les préfixes les plus courants',
          content: 'Voici les préfixes essentiels que vous rencontrerez au quotidien, avec leur signification :',
          table: {
            headers: ['Préfixe', 'Sens', 'Exemple (à pied)', 'Exemple (en véhicule)'],
            rows: [
              ['при-', 'arrivée', 'приходить (venir)', 'приезжать (arriver)'],
              ['у-', 'départ', 'уходить (partir)', 'уезжать (partir en véhicule)'],
              ['вы-', 'sortie', 'выходить (sortir)', 'выезжать (sortir en voiture)'],
              ['в-/вой-', 'entrée', 'входить (entrer)', 'въезжать (entrer en voiture)'],
              ['пере-', 'traversée', 'переходить (traverser)', 'переезжать (traverser / déménager)'],
              ['под-', 'approche', 'подходить (s’approcher)', 'подъезжать (s’approcher en véhicule)'],
              ['от-', 's’éloigner', 'отходить (s’écarter)', 'отъезжать (s’éloigner en voiture)'],
              ['за-', 'passer par', 'заходить (passer)', 'заезжать (passer en voiture)'],
              ['до-', 'atteindre', 'доходить (arriver jusqu’à)', 'доезжать (arriver en véhicule)'],
            ],
            caption: 'Préfixes des verbes de mouvement russes — à pied vs en véhicule',
            boldColumnIndices: [0],
          },
        },
        {
          h3: 'Exemples dans des phrases réelles',
          content:
            'Voici comment les verbes de mouvement préfixés fonctionnent en contexte. Notez comme le préfixe rend la direction du mouvement totalement non ambiguë :',
          bullets: [
            '**Он пришёл домой в 6 часов.** — Il est rentré à la maison à 6 heures. (прийти — arrivé à pied, perfectif)',
            '**Она ушла из офиса.** — Elle est partie du bureau. (уйти — départ à pied, perfectif)',
            '**Они приехали из Лондона.** — Ils sont arrivés de Londres. (приехать — arrivé en véhicule, perfectif)',
            '**Я выхожу из дома каждое утро.** — Je sors de chez moi chaque matin. (выходить — habituel, imperfectif)',
            '**Когда ты придёшь?** — Quand est-ce que tu viendras ? (прийти — futur, perfectif)',
          ],
        },
      ],
    },
    {
      h2: 'Verbes de mouvement et cas russes',
      content:
        'Les verbes de mouvement russes sont directement liés au **système des cas grammaticaux**. Le cas nécessaire dépend de si vous parlez d’une **destination (où allez-vous ?)** ou d’une **localisation (où êtes-vous ?)**. C’est là que les verbes de mouvement rejoignent le système plus large des prépositions et des cas.',
      subsections: [
        {
          h3: 'Direction (куда ?) → accusatif',
          content:
            'Pour répondre à la question **куда ?** (où ?/vers où ?), le russe utilise l’**accusatif** après les verbes de mouvement. Cela s’applique avec les prépositions **в** et **на** pour indiquer la direction.',
          bullets: [
            '**Я иду в школу.** — Je vais à l’école. (школу = accusatif de школа)',
            '**Мы едем на работу.** — Nous allons au travail. (работу = accusatif de работа)',
            '**Она идёт в магазин.** — Elle va au magasin. (магазин = accusatif)',
            '**Он едет на вокзал.** — Il va à la gare. (вокзал = accusatif)',
          ],
        },
        {
          h3: 'Localisation (где ?) → prépositionnel',
          content:
            'Pour répondre à la question **где ?** (où ?/à quel endroit ?), le russe utilise le **prépositionnel** avec les mêmes prépositions **в** et **на** — mais cette fois elles indiquent une localisation statique, non un mouvement.',
          bullets: [
            '**Я учусь в школе.** — J’étudie à l’école. (школе = prépositionnel de школа)',
            '**Мы работаем на заводе.** — Nous travaillons à l’usine. (заводе = prépositionnel)',
            '**Она живёт в Москве.** — Elle habite à Moscou. (Москве = prépositionnel)',
          ],
        },
        {
          h3: 'La distinction direction-localisation',
          content:
            'Ce contraste — **accusatif pour la direction, prépositionnel pour la localisation** — est la règle de cas la plus importante liée aux verbes de mouvement. Elle s’applique avec **в** (dans/vers) et **на** (sur/vers) :',
          table: {
            headers: ['Question', 'Cas', 'Préposition', 'Exemple'],
            rows: [
              ['куда ? (où aller ?)', 'Accusatif', 'в / на', 'Я иду **в школу**'],
              ['где ? (où ?)', 'Prépositionnel', 'в / на', 'Я нахожусь **в школе**'],
            ],
            caption: 'Direction vs localisation : accusatif vs prépositionnel',
            boldColumnIndices: [1],
          },
        },
        {
          h3: 'Datif avec к (vers une personne)',
          content:
            'Lorsqu’on se déplace **vers une personne** (et non vers un lieu), le russe utilise la préposition **к** + **datif**.',
          bullets: [
            '**Я иду к врачу.** — Je vais chez le médecin. (врачу = datif de врач)',
            '**Она едет к маме.** — Elle va chez sa maman. (маме = datif de мама)',
            '**Мы идём к другу.** — Nous allons chez un ami. (другу = datif de друг)',
          ],
        },
      ],
      bullets: [
        '**куда ?** (vers où ?) → **в/на + accusatif** après les verbes de direction',
        '**где ?** (où ?) → **в/на + prépositionnel** pour la localisation statique',
        '**к кому ?** (vers qui ?) → **к + datif** quand on se dirige vers une personne',
        'Mémorisez ces trois règles et vous éliminerez 80 % des erreurs de cas liés aux verbes de mouvement',
      ],
    },
  ],
  faq: [
    {
      question: 'Quelle est la différence entre идти et ходить ?',
      answer:
        '**идти** est unidirectionnel : il décrit un déplacement à pied qui se passe maintenant, dans une direction précise (ex. : « Je vais au magasin en ce moment »). **ходить** est multidirectionnel : il décrit un mouvement habituel, répété ou aller-retour à pied (ex. : « Je vais au magasin tous les jours » ou « Hier, je suis allé au magasin et je suis revenu »). La question clé est : est-ce que je décris un trajet unique et dirigé maintenant, ou une habitude générale/répétée ?',
    },
    {
      question: 'Quelle est la différence entre ехать et ездить ?',
      answer:
        '**ехать** est le verbe unidirectionnel pour le voyage en véhicule — il décrit un trajet précis en cours (ex. : « Nous allons à Moscou en train »). **ездить** est le verbe multidirectionnel — il décrit un voyage en véhicule habituel ou répété (ex. : « Je prends le métro pour aller au travail tous les jours » ou « Elle voyage souvent à l’étranger »). La logique est identique à идти vs ходить, mais pour les déplacements en véhicule.',
    },
    {
      question: 'Quand les verbes de mouvement nécessitent-ils l’accusatif ?',
      answer:
        'Les verbes de mouvement utilisent l’**accusatif** pour exprimer la **destination** (куда ? — vers où ?). Avec les prépositions **в** et **на** indiquant la direction, le nom suivant se met à l’accusatif : « Я иду **в школу** » (Je vais à l’école), « Мы едем **на работу** » (Nous allons au travail). Cela contraste avec le prépositionnel utilisé pour la localisation statique.',
    },
    {
      question: 'Comment fonctionnent les verbes de mouvement préfixés ?',
      answer:
        'Lorsqu’on ajoute un préfixe à un verbe de mouvement, le focus passe du type de mouvement (aller-retour vs habituel) à la **direction ou la manière** du mouvement. Le préfixe se fixe sur les formes imperfective et perfective. Exemple : **при-** (arrivée) + ходить/идти = **приходить** (imperfectif : venir régulièrement) / **прийти** (perfectif : arriver une fois). Préfixes courants : при- (arrivée), у- (départ), вы- (sortie), в- (entrée), пере- (traversée).',
    },
  ],
  conclusion: '',
  conclusionIntro:
    'Les verbes de mouvement russes constituent un système puissant qui, une fois maîtrisé, rend votre russe nettement plus précis et naturel. Voici le résumé essentiel :',
  conclusionBullets: [
    '**идти** = à pied, maintenant, une direction | **ходить** = à pied, habituel ou aller-retour',
    '**ехать** = en véhicule, maintenant, une direction | **ездить** = en véhicule, habituel ou aller-retour',
    'Avec un préfixe (при-, у-, вы-, в-…), la distinction unidirectionnel/multidirectionnel devient imperfectif/perfectif',
    'Direction (куда ?) → accusatif ; Localisation (где ?) → prépositionnel ; Vers une personne (к кому ?) → datif',
    'Pratiquez avec de vraies phrases — les verbes de mouvement s’ancrent bien plus vite en contexte qu’avec des tableaux seuls',
  ],
  conclusionOutro:
    'Prêt à vous entraîner sur les cas russes déclenchés par les verbes de mouvement ? Notre quiz interactif gratuit sur russiandeclensions.com/practice vous permet de pratiquer l’accusatif, le datif et le prépositionnel avec un retour immédiat.',
  internalLinks: [
    { href: '/practice', label: 'Quiz de déclinaisons russe gratuit — pratiquer les 6 cas' },
    { href: '/learn/articles/russian-accusative-case', label: 'Guide du cas accusatif russe' },
    { href: '/learn/articles/russian-dative-case', label: 'Guide du cas datif russe' },
    { href: '/learn/articles/russian-prepositional-case', label: 'Guide du cas prépositionnel russe' },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Prépositions et cas russes : référence complète',
    },
    {
      href: '/learn/articles/how-to-practice-russian-cases',
      label: 'Comment pratiquer les cas russes : 5 méthodes éprouvées',
    },
  ],
  ctaText: 'Pratiquer les cas russes — Gratuit →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Verbes de mouvement russes : le guide complet — идти, ходить, ехать, ездить',
    description:
      'Maîtrisez les verbes de mouvement russes : идти/ходить vs ехать/ездить, la distinction unidirectionnel/multidirectionnel, les verbes préfixés et les cas qu’ils régissent.',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verbs-of-motion',
    },
    keywords:
      'verbes de mouvement russes, идти ходить, ехать ездить, verbes unidirectionnels russe, verbes déterminés indéterminés russe',
  },
};
