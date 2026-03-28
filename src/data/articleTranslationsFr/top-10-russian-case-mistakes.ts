import type { LearnArticle } from '../learnArticles';

/** Traduction française de l’article `top-10-russian-case-mistakes` (source EN : `learnArticles.ts`). Cyrillique des exemples copié à l’identique. */
export const top10RussianCaseMistakesFr: LearnArticle = {
  slug: 'top-10-russian-case-mistakes',
  title:
    'Top 10 des erreurs des anglophones sur les cas russes (et comment les corriger)',
  metaTitle:
    'Top 10 des erreurs de cas en russe (anglophones) | Corrigez votre grammaire | Russian Cases with Anna',
  metaDescription:
    'Les 10 erreurs de cas les plus fréquentes chez les anglophones — diagnostiquées et corrigées. Exemples faux vs corrects, pourquoi chaque erreur arrive, et comment les éliminer durablement.',
  keywords: [
    'erreurs cas russes',
    'fautes grammaire russe anglophones',
    'pourquoi cas russes difficiles',
    'cas russes confus',
    'erreurs grammaire russe courantes',
  ],
  h1: 'Top 10 des erreurs des anglophones sur les cas russes (et comment les corriger)',
  heroImage: {
    src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
    alt:
      'Principales erreurs et fautes de cas en russe commises par les anglophones',
    width: 1200,
    height: 630,
  },
  intro:
    'Les erreurs de grammaire russe les plus courantes — diagnostiquées et corrigées. Cet article rassemble les **10 erreurs de cas les plus fréquentes** chez les anglophones — documentées à partir de milliers d’échanges avec des apprenants, de forums et d’exercices.\n\nChaque erreur est présentée avec la forme incorrecte, la forme correcte, et une explication claire du **pourquoi** et du **comment** l’éviter durablement. Servez-vous-en comme checklist de diagnostic — lesquelles faites-vous ?',
  whatYouLearn: [
    'Les **10 erreurs de cas les plus courantes** avec exemples faux vs corrects',
    'Pourquoi chaque erreur se produit (analyse des causes)',
    'Comment corriger chaque erreur durablement',
    'Tableau de référence rapide des 10 erreurs',
    '**5 stratégies pratiques** pour ne plus les commettre',
    'Auto-test pour situer votre niveau',
  ],
  tableAccentVariant: 'orange',
  leadMagnetCta: {
    title: 'Corrigez vos erreurs de cas avec des drills ciblés',
    description:
      'Notre appli mobile repère vos points faibles et les travaille jusqu’à la maîtrise. Exercices intelligents, répétition espacée — Android et iOS.',
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
      href: '/learn/articles/how-to-practice-russian-cases',
      label:
        'Comment s’entraîner aux cas russes : 5 méthodes qui marchent',
    },
  ],
  sections: [
    {
      h2: 'Pourquoi les anglophones peinent sur les cas russes',
      content:
        'Avant les erreurs elles-mêmes, il vaut la peine de comprendre pourquoi les cas russes sont si difficiles **pour les anglophones** :',
      bullets: [
        '**L’anglais n’a presque pas de flexion** — l’ordre des mots (pas les terminaisons) marque le rôle grammatical. Le russe utilise les deux.',
        '**Les anglophones n’ont aucune intuition** pour « quel cas il faut ? » — cet instinct se construit de zéro.',
        '**Le russe a 6 cas**, et chaque nom, adjectif, pronom et numéral se décline. C’est énormément de formes.',
        '**Certaines constructions russes** sont conceptuellement inversées par rapport à l’anglais (comme **нравиться** — « plaire / aimer »).',
        '**La distinction animé / inanimé** à l’accusatif n’a pas d’équivalent en anglais.',
      ],
    },
    {
      h2: 'Les 10 erreurs de cas les plus courantes',
      content:
        'Comprendre ces causes profondes aide. Voyons maintenant les 10 erreurs concrètes qu’elles produisent.',
      mistakeCards: [
        {
          title: 'ERREUR N°1 : nominatif après НЕТ',
          wrong: 'Нет кот. | У меня нет машина. | Здесь нет сахар.',
          correct: 'Нет кота. | У меня нет машины. | Здесь нет сахара.',
          why: 'Travaillez la règle figée : **нет = « pas de X » = toujours génitif**. À chaque fois.',
          fix: 'Cas génitif russe — emploi 2 (absence et négation)',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'ERREUR N°2 : nominatif comme complément d’objet direct',
          wrong: 'Я вижу кот. | Я читаю книга. | Она любит музыка.',
          correct: 'Я вижу кота. | Я читаю книгу. | Она любит музыку.',
          why: 'Dès qu’un verbe transitif (**вижу**, **читаю**, **люблю**, **покупаю**…), vérifiez l’objet. **Féminin -а → -у.** Masc. animé → forme du génitif. Masc. inanimé → pas de changement.',
          fix: 'Cas accusatif russe — compléments d’objet direct',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'ERREUR N°3 : masculin animé traité comme inanimé',
          wrong: 'Я вижу студент. | Я встретил врач. | Полиция ищет преступник.',
          correct: 'Я вижу студента. | Я встретил врача. | Полиция ищет преступника.',
          why: 'Rappelez-vous : **accusatif masculin animé = forme du génitif**. **студент** → **студента**. **врач** → **врача**. Demandez-vous : personne ou animal ? Si oui, utilisez la forme du génitif comme accusatif.',
          fix: 'Cas accusatif russe — animé vs inanimé',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'ERREUR N°4 : Я avec НРАВИТЬСЯ au lieu de Мне',
          wrong: 'Я нравится музыка. | Я нравятся эти книги. | Он нравится футбол.',
          correct: 'Мне нравится музыка. | Мне нравятся эти книги. | Ему нравится футбол.',
          why: 'Ancrez le schéma : **[personne au datif] + нравится + [sujet de plaire]**. **нравится** (sing.) / **нравятся** (plur.) s’accordent avec la CHOSE aimée, pas avec la personne.',
          fix: 'Cas datif russe — la construction НРАВИТЬСЯ',
          fixHref: '/learn/articles/russian-dative-case',
        },
        {
          title: 'ERREUR N°5 : в + accusatif pour le lieu (au lieu du prépositionnel)',
          wrong: 'Я сейчас в школу. | Он живёт в Москву. | Книга в сумку.',
          correct: 'Я сейчас в школе. | Он живёт в Москве. | Книга в сумке.',
          why: 'Avant **в** ou **на**, une question : **la chose / la personne est déjà sur place (lieu → prépositionnel)** ou **elle y va (direction → accusatif)** ?',
          fix: 'Cas prépositionnel russe — В vs НА',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'ERREUR N°6 : nominatif pour les métiers après Был/Стала/Работает',
          wrong: 'Она была учитель. | Мой отец был врач. | Он работает инженер.',
          correct: 'Она была учительницей. | Мой отец был врачом. | Он работает инженером.',
          why: 'Règle : **être au passé ou futur + métier = instrumental**. **Стать** + métier = instrumental. **Работать** + métier = instrumental. Seul le présent autorise souvent le nominatif.',
          fix: 'Cas instrumental russe — métiers et rôles',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
        {
          title: 'ERREUR N°7 : ajouter -ОВ à tous les noms au génitif pluriel',
          wrong: 'много женщинов | много книгов | много окнов | нет девушков',
          correct: 'много женщин | много книг | много окон | нет девушек',
          why: 'Mémorisez le **schéma à terminaison zéro** : les féminins en -а perdent tout (**женщина** → **женщин**, **книга** → **книг**). Les neutres en -о aussi, avec voyelles fugitives possibles (**окно** → **окон**, **яблоко** → **яблок**). Ce sont des mots très fréquents — travaillez-les à part.',
          fix: 'Cas génitif russe — terminaisons du pluriel génitif',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'ERREUR N°8 : mauvais cas après les nombres',
          wrong: 'пять стол | три книга | много студент',
          correct: 'пять столов | три книги | много студентов',
          why: 'Trois groupes : **1 = nominatif sg.** | **2/3/4 = génitif sg.** | **5+ = génitif pl.** À chaque nombre en russe. Aussi : **много**, **мало**, **несколько**, **сколько** → génitif pluriel.',
          fix: 'Cas génitif russe — nombres et quantités',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'ERREUR N°9 : -Е au lieu de -ИИ pour les noms en -ий/-ие/-ия',
          wrong: 'в Россие | в здание | на станцие | о путешествие',
          correct: 'в России | в здании | на станции | о путешествии',
          why: 'Règle : **-ий/-ие/-ия → toujours -ИИ** au prépositionnel (et au datif pour les -ия). Les noms de pays en -ия sont cruciaux : **в России**, **в Италии**, **в Германии**, **в Австралии**.',
          fix: 'Cas prépositionnel russe — la terminaison spéciale -ИИ',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'ERREUR N°10 : accusatif avec ЗАНИМАТЬСЯ et autres verbes réfléchis',
          wrong: 'Я занимаюсь музыку. | Она интересуется историю. | Он увлекается футбол.',
          correct: 'Я занимаюсь музыкой. | Она интересуется историей. | Он увлекается футболом.',
          why: 'Apprenez ces verbes réfléchis avec l’**instrumental** : **заниматься** + instrumental, **интересоваться** + instrumental, **гордиться** + instrumental, **восхищаться** + instrumental. Faites-en un jeu de cartes dédié.',
          fix: 'Cas instrumental russe — verbes régis par l’instrumental',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
      ],
    },
    {
      h2: 'Erreurs bonus hors du top 10',
      content:
        'Mentions honorifiques — très courantes mais un peu moins universelles que le top 10 :',
      bullets: [
        '**Oublier le Н- des pronoms après une préposition :** к ему ✗ → к нему ✓ | от ей ✗ → от неё ✓',
        '**Confondre из (de l’intérieur) et от (d’une personne) :** из врача ✗ → от врача ✓',
        '**Mettre le datif au lieu du génitif pour la possession :** книга другу ✗ → книга друга ✓',
        '**Oublier l’accord de l’adjectif :** Я вижу красивый женщину ✗ → красивую женщину ✓',
        '**Mettre l’accusatif au lieu du prépositionnel avec о :** о что ты думаешь? ✗ → о чём ты думаешь? ✓',
        '**Oublier les voyelles fugitives au génitif pluriel :** ручков ✗ → ручек ✓ | окнов ✗ → окон ✓',
      ],
    },
    {
      h2: 'Référence rapide : les 10 erreurs en un coup d’œil',
      content:
        'Utilisez ce tableau comme checklist en relisant votre russe écrit ou oral :',
      table: {
        caption: 'Synthèse des 10 erreurs de cas les plus courantes',
        headers: ['#', 'Schéma d’erreur', 'Faux', 'Correct', 'Règle clé'],
        boldColumnIndices: [4],
        rows: [
          ['#1', 'нет + nominatif', 'нет кот', 'нет кота', 'нет exige toujours le génitif'],
          [
            '#2',
            'Objet direct au nominatif',
            'Я вижу кот',
            'Я вижу кота',
            'Les verbes transitifs régent l’accusatif',
          ],
          [
            '#3',
            'Acc. animé = nominatif',
            'Я вижу студент',
            'Я вижу студента',
            'Masc. animé à l’acc. = forme du génitif',
          ],
          [
            '#4',
            'я нравится (mauvais « aimant »)',
            'Я нравится музыка',
            'Мне нравится музыка',
            'Celui qui aime → datif',
          ],
          [
            '#5',
            'Direction traitée comme lieu',
            'Я в школу сейчас',
            'Я в школе сейчас',
            'Lieu statique → prépositionnel',
          ],
          [
            '#6',
            'Métiers après был/стала',
            'Она была учитель',
            'Она была учителем',
            'Passé être + métier → instrumental',
          ],
          [
            '#7',
            'Génitif pluriel → -ов',
            'много женщинов',
            'много женщин',
            'Féminins en -а → terminaison zéro au gén. pl.',
          ],
          [
            '#8',
            'Nombres : même cas partout',
            'пять стол',
            'пять столов',
            '5+ → génitif pluriel',
          ],
          [
            '#9',
            '-ий/-ие/-ия → -е',
            'в Россие (incorrect)',
            'в России (correct)',
            'Ces noms prennent -ИИ, pas -Е',
          ],
          [
            '#10',
            'Заниматься + accusatif',
            'заниматься музыку',
            'заниматься музыкой',
            'заниматься régit toujours l’instrumental',
          ],
        ],
      },
    },
    {
      h2: 'Comment ne plus faire ces erreurs : 5 stratégies pratiques',
      content: '',
      subsections: [
        {
          h3: '1. Apprendre la grammaire, pas seulement le vocabulaire',
          content:
            'La plupart de ces erreurs viennent d’apprendre des mots sans leur contexte grammatical. Avec **нет**, apprenez que **нет régit toujours le génitif**. Avec **заниматься**, **заниматься + instrumental**. Liez les règles aux mots qu’elles concernent.',
        },
        {
          h3: '2. Utiliser l’astuce des « questions de cas »',
          content:
            'Avant d’employer un nom, posez à voix haute la question de cas : **Кого? Что?** (accusatif) — **Кому? Чему?** (datif) — **Кем? Чем?** (instrumental). Cela active consciemment le système des cas et ralentit le réflexe anglais.',
        },
        {
          h3: '3. Driller à part les schémas les plus piégeurs',
          content:
            'Trois schémas expliquent **80 % des erreurs** : **нет** + génitif, accusatif animé vs inanimé, direction (accusatif) vs lieu (prépositionnel). Créez des drills dédiés pour chacun jusqu’à automatisation.',
        },
        {
          h3: '4. Lire du russe et chasser les terminaisons',
          content:
            '**Lecture active** — identifier le cas de chaque nom — est l’un des meilleurs moyens de développer l’intuition. Dans **Я вижу студента**, ne vous contentez pas du sens : notez **студента** = accusatif animé = forme du génitif. Avec le temps, ça devient instinct.',
        },
        {
          h3: '5. Être corrigé tout de suite',
          content:
            'Les erreurs de cas non corrigées se **fossilisent** — elles deviennent des habitudes plus dures à casser avec le temps. Utilisez une appli, un prof ou un tandem pour un retour en temps réel. Plus tôt l’erreur est corrigée, moins elle s’enracine.',
        },
      ],
    },
    {
      h2: 'Auto-test : combien d’erreurs faites-vous ?',
      content:
        'Parcourez honnêtement le top 10 et notez-vous :',
      bullets: [
        '**0–2 erreurs :** niveau avancé — concentrez-vous sur les erreurs bonus et le peaufinage',
        '**3–5 erreurs :** intermédiaire — prenez les 3 plus fréquentes et travaillez-les en premier',
        '**6–8 erreurs :** débutant-intermédiaire — commencez par les erreurs n°1, n°2, n°5 (les plus fréquentes)',
        '**9–10 erreurs :** débutant — utilisez notre appli structurée pour travailler les cas méthodiquement',
      ],
    },
  ],
  faq: [
    {
      question: 'Pourquoi les cas russes sont-ils si difficiles pour les anglophones ?',
      answer:
        'Parce que **l’anglais a abandonné son système de cas il y a des siècles**. L’anglais moderne marque le rôle grammatical surtout par l’ordre des mots — « the dog bites the man » vs « the man bites the dog ». Le russe le marque par les terminaisons. Les anglophones n’ont **aucune** intuition grammaticale des cas — il faut la construire de zéro, avec du temps et de la pratique volontaire.',
    },
    {
      question: 'Combien de temps faut-il pour maîtriser les cas russes ?',
      answer:
        'La plupart des apprenants atteignent une bonne précision sur les cas les plus courants (nominatif, accusatif, génitif) en **6 à 12 mois** d’étude régulière. La maîtrise complète des 6 cas, avec pluriel génitif irrégulier et exceptions « locatives », demande souvent **2 à 4 ans** d’étude sérieuse. En revanche, des progrès nets sur les schémas les plus fréquents sont possibles en quelques mois avec une pratique ciblée.',
    },
    {
      question: 'Quelle est l’erreur de cas la plus courante en russe ?',
      answer:
        'D’après l’analyse des erreurs d’apprenants, la **plus fréquente** est le nominatif après **нет** — dire **Нет кот** au lieu de **Нет кота**. La deuxième est l’oubli de mettre le complément d’objet direct à l’accusatif (**Я вижу кот** au lieu de **кота**). Ces deux erreurs apparaissent dans presque chaque phrase du débutant — ce sont les priorités absolues à corriger.',
    },
  ],
  conclusionIntro:
    'Les cas russes sont réellement difficiles — mais les erreurs typiques des anglophones sont **prévisibles, identifiables et corrigeables**. Les 10 erreurs de cet article couvrent l’essentiel des fautes de cas des anglophones. La suite est claire : repérer les vôtres, comprendre **pourquoi** elles arrivent (souvent parce que l’anglais fonctionne autrement), et driller le bon schéma jusqu’à ce qu’il remplace le mauvais.',
  conclusionBullets: [],
  conclusion:
    'Corrigez vos erreurs de cas avec des drills ciblés dans notre appli mobile. Des exercices intelligents qui repèrent vos faiblesses et les travaillent jusqu’à la maîtrise. Android et iOS.',
  ctaText: 'Télécharger l’appli',
  ctaHref: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Top 10 des erreurs des anglophones sur les cas russes (et comment les corriger)',
    description:
      'Les 10 erreurs de cas les plus fréquentes chez les anglophones — diagnostiquées et corrigées. Exemples, causes, corrections.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
    },
    keywords:
      'erreurs cas russes, grammaire russe anglophones, difficulté cas russes, fautes grammaire russe',
  },
};
