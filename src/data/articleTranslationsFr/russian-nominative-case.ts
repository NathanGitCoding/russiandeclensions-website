import type { LearnArticle } from '../learnArticles';

/** Traduction française de l’article `russian-nominative-case` (source EN : `learnArticles.ts`). Cyrillique copié à l’identique. */
export const russianNominativeCaseFr: LearnArticle = {
  slug: 'russian-nominative-case',
  title: 'Cas nominatif russe : règles, terminaisons et 24 exemples réels',
  metaTitle: 'Cas nominatif russe : règles, terminaisons et exemples | Russian Cases with Anna',
  metaDescription:
    'Le guide complet du cas nominatif russe : 6 emplois essentiels, terminaisons au singulier et au pluriel, pluriels irréguliers, nominatif vs accusatif. 24 exemples réels avec translittération.',
  keywords: [
    'cas nominatif russe',
    'nominatif russe règles',
    'terminaisons nominatif russe',
    'qu’est-ce que le nominatif en russe',
    'exemples nominatif russe',
    'pluriel nominatif russe',
  ],
  h1: 'Cas nominatif russe : règles, terminaisons et 24 exemples réels',
  heroImage: {
    src: '/articles/russian-nominative-case-dictionary-form.webp',
    alt: 'Un dictionnaire de russe ouvert et un cahier — apprendre le cas nominatif, la forme de dictionnaire de base des mots russes',
    width: 1536,
    height: 1024,
  },
  intro:
    'Le cas nominatif est le premier cas que rencontre tout apprenant du russe — et celui que la plupart pensent déjà maîtriser. C’est la **forme de dictionnaire** : la version d’un mot qu’on cherche dans le dictionnaire, qu’on mémorise sur une flashcard, et qu’on entend prononcée isolément. Mais considérer le nominatif comme « le cas auquel on n’a pas besoin de réfléchir » est une erreur. Il a ses propres **règles de pluriel**, ses propres **formes irrégulières**, et son propre **piège** — le moment précis où il commence à ressembler exactement au cas accusatif.\n\nCe guide couvre tout sur le cas nominatif russe : ce qu’il est, quand l’utiliser au-delà de l’évident « sujet de la phrase », comment former le pluriel (y compris les pluriels à déplacement d’accent et les pluriels franchement irréguliers qui piègent les apprenants de niveau intermédiaire), et comment le distinguer de l’accusatif. **24 exemples russes réels** inclus, avec translittération.',
  whatYouLearn: [
    'Ce qu’est le cas nominatif russe et les 6 situations où on l’emploie',
    'Les terminaisons du nominatif singulier pour chaque genre de nom',
    'Les terminaisons du nominatif pluriel — y compris les pluriels à déplacement d’accent (дом → дома, город → города)',
    '12 pluriels nominatifs irréguliers à mémoriser (друг → друзья, ребёнок → дети, etc.)',
    'Comment les adjectifs et les pronoms s’accordent avec les noms au nominatif',
    'Nominatif vs accusatif — comment les distinguer quand les formes se ressemblent',
    '24 phrases russes d’exemple réelles avec translittération',
  ],
  leadMagnetCta: {
    title: 'Entraînez le cas nominatif russe (et les 6 cas) avec des exercices intelligents',
    description:
      'Notre application mobile fait travailler les 6 cas du russe — y compris les formes plurielles les plus délicates — avec la répétition espacée, de vraies phrases et un retour immédiat. Disponible sur Android et iOS.',
    ctaText: 'Téléchargez l’app et commencez à vous entraîner dès aujourd’hui',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Guide complet des cas russes : les 6 cas expliqués avec des exemples',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Cas accusatif russe : règles, terminaisons et exemples',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Terminaisons des cas russes : l’aide-mémoire ultime',
    },
  ],
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Qu’est-ce que le cas nominatif russe ?',
      content:
        'Le **cas nominatif** (Именительный падеж) est le premier et le plus basique des six cas russes. C’est la **forme de dictionnaire** — la version de tout nom, adjectif et pronom qu’on trouve dans une entrée de dictionnaire, sans aucun changement de terminaison. Le nominatif répond aux questions **Кто?** (qui ?) et **Что?** (quoi ?).\n\nTous les autres cas russes sont une transformation du nominatif — le génitif, le datif, l’accusatif, l’instrumental et le prépositionnel décrivent tous comment la terminaison d’un mot change lorsqu’il joue un rôle grammatical différent. Le nominatif est le point de départ à partir duquel tout le reste se décline.',
      subsections: [
        {
          h3: 'Réponse courte',
          content:
            'Le cas nominatif répond aux questions **Кто?** (qui ?) et **Что?** (quoi ?). Il marque le **sujet** d’une phrase — la personne ou la chose qui accomplit l’action — et sert aussi de forme de citation dans les dictionnaires.\n\nToute phrase russe contient au moins un mot au cas nominatif.',
        },
      ],
    },
    {
      h2: '6 emplois essentiels du cas nominatif russe',
      content:
        'Si « sujet de la phrase » est la fonction phare du nominatif, il apparaît aussi dans cinq autres situations courantes.',
      subsections: [
        {
          h3: 'Emploi 1 — Sujet de la phrase',
          content:
            'Le rôle le plus courant : le nom qui accomplit l’action se met au nominatif.',
          bullets: [
            '**Кошка спит.** — Le chat dort. (кошка = sujet)',
            '**Студент читает книгу.** — L’étudiant lit un livre. (студент = sujet, книгу = objet à l’accusatif)',
          ],
        },
        {
          h3: 'Emploi 2 — Nom attribut après un « être » omis',
          content:
            'Au présent, le russe omet complètement le verbe « être » (быть). Le sujet et le nom qui le décrit restent tous deux au **nominatif**, souvent séparés par un tiret.',
          bullets: [
            '**Она — врач.** — Elle est médecin.',
            '**Москва — столица России.** — Moscou est la capitale de la Russie.',
          ],
        },
        {
          h3: 'Emploi 3 — Nommer et présenter (Это + nominatif)',
          content:
            'Le mot **это** (« c’est / voici / voilà ») est toujours suivi du cas **nominatif**, quel que soit le genre ou le nombre de ce qui suit.',
          bullets: [
            '**Это мой брат.** — C’est mon frère.',
            '**Это интересная книга.** — C’est un livre intéressant.',
          ],
        },
        {
          h3: 'Emploi 4 — Forme de dictionnaire / de citation',
          content:
            'Chaque entrée de dictionnaire, liste de vocabulaire et appli de flashcards répertorie les noms et adjectifs russes au **nominatif singulier**. C’est la forme apprise en premier, et celle à partir de laquelle tous les autres cas se construisent.',
        },
        {
          h3: 'Emploi 5 — Titres, enseignes et étiquettes',
          content:
            'Les titres de livres, les enseignes de magasins, les noms de rues et les gros titres utilisent le nominatif par défaut, puisqu’ils nomment quelque chose plutôt que de décrire une action.',
          bullets: [
            '**«Война и мир»** — « Guerre et Paix » (un titre de livre)',
            '**Аптека** — Pharmacie (une enseigne de magasin)',
          ],
        },
        {
          h3: 'Emploi 6 — Exclamations et interpellation directe',
          content:
            'Les courtes exclamations et le fait d’interpeller quelqu’un par son nom utilisent la simple forme nominative — le russe a perdu son cas vocatif distinct il y a des siècles, à l’exception de quelques formes fossilisées comme **Боже!** et **Господи!**',
          bullets: [
            '**Пожар!** — Au feu !',
            '**Мама!** — Maman ! (interpellation — nominatif simple, pas un vocatif distinct)',
          ],
        },
      ],
    },
    {
      h2: 'Terminaisons du nominatif singulier par genre',
      content:
        'Les noms russes se répartissent en trois genres, chacun avec un schéma de nominatif singulier prévisible fondé sur la dernière lettre du nom.',
      table: {
        caption: 'Terminaisons du nominatif singulier selon le type de nom',
        boldColumnIndices: [1],
        headers: ['Genre', 'Terminaison typique', 'Exemple', 'Signification'],
        rows: [
          ['Masculin (dur)', '(consonne, pas de terminaison)', 'стол', 'table'],
          ['Masculin (mou)', '-й / -ь', 'музей / словарь', 'musée / dictionnaire'],
          ['Féminin (dur)', '-а', 'книга', 'livre'],
          ['Féminin (mou)', '-я', 'неделя', 'semaine'],
          ['Féminin (mou, sans voyelle)', '-ь', 'ночь', 'nuit'],
          ['Neutre (dur)', '-о', 'окно', 'fenêtre'],
          ['Neutre (mou)', '-е', 'море', 'mer'],
        ],
      },
      subsections: [
        {
          h3: 'Comment repérer le genre',
          content:
            'Les noms masculins se terminent par une **consonne**, **-й**, ou un **signe mou -ь** décrivant un être masculin ou un mot à thème dur (словарь, музей). Les noms féminins se terminent par **-а**, **-я**, ou un **signe mou -ь** (un grand groupe, incluant la plupart des noms abstraits : жизнь, любовь). Les noms neutres se terminent par **-о** ou **-е**. La terminaison **-ь** est ambiguë entre masculin et féminin — elle doit être mémorisée nom par nom.',
        },
      ],
    },
    {
      h2: 'Terminaisons du nominatif pluriel',
      content:
        'Former le nominatif pluriel signifie changer la terminaison du singulier — mais le schéma exact dépend du genre et d’une règle orthographique clé.',
      table: {
        caption: 'Terminaisons du nominatif pluriel selon le type de nom',
        boldColumnIndices: [1, 3],
        headers: ['Type de nom', 'Terminaison', 'Formation', 'Résultat'],
        rows: [
          ['Masculin dur', '-ы', 'стол → стол+ы', 'столы'],
          ['Masculin (après г/к/х/ж/ш/щ/ч)', '-и', 'язык → язык+и', 'языки'],
          ['Masculin mou -й', '-и', 'музей → музе+и', 'музеи'],
          ['Masculin mou -ь', '-и', 'словарь → словар+и', 'словари'],
          ['Féminin -а (dur)', '-ы', 'женщина → женщин+ы', 'женщины'],
          ['Féminin -а (après г/к/х/ж/ш/щ/ч)', '-и', 'книга → книг+и', 'книги'],
          ['Féminin -я', '-и', 'неделя → недел+и', 'недели'],
          ['Féminin -ь', '-и', 'ночь → ноч+и', 'ночи'],
          ['Neutre -о', '-а', 'окно → окн+а', 'окна'],
          ['Neutre -е', '-я', 'море → мор+я', 'моря'],
        ],
      },
      bullets: [
        '**La règle orthographique des 8 lettres** remplace **Ы** par **И** après **Г, К, Х, Ж, Ш, Щ, Ч, Ц** — c’est pourquoi книга → книги, et non книгы.',
        '**Les noms neutres** échangent **-о** contre **-а** et **-е** contre **-я** au pluriel — un schéma qui a l’air irrégulier mais qui est parfaitement régulier.',
        '**Les noms masculins en signe mou** (**словарь, зверь**) et les **noms féminins en signe mou** (**ночь, дверь**) forment des pluriels d’apparence identique en **-и** — seules leurs autres formes de cas révèlent le genre.',
      ],
    },
    {
      h2: 'Pluriels nominatifs irréguliers et à déplacement d’accent — la liste indispensable',
      content:
        'Un groupe de noms russes extrêmement courants rompt totalement avec le schéma régulier — soit en déplaçant l’accent et en prenant une terminaison inattendue en **-а/-я**, soit en utilisant un radical de pluriel complètement différent. Ceux-ci doivent simplement être mémorisés.',
      table: {
        caption: '12 pluriels nominatifs irréguliers et à déplacement d’accent',
        boldColumnIndices: [1],
        headers: ['Singulier', 'Pluriel', 'Remarque'],
        rows: [
          ['дом (maison)', 'дома́', 'pluriel en -а à déplacement d’accent (pas домы)'],
          ['город (ville)', 'города́', 'pluriel en -а à déplacement d’accent'],
          ['глаз (œil)', 'глаза́', 'pluriel en -а à déplacement d’accent'],
          ['лес (forêt)', 'леса́', 'pluriel en -а à déplacement d’accent'],
          ['учитель (enseignant)', 'учителя́', 'pluriel en -я à déplacement d’accent'],
          ['паспорт (passeport)', 'паспорта́', 'pluriel en -а à déplacement d’accent'],
          ['друг (ami)', 'друзья́', 'irrégulier : ajoute -ья, la consonne s’adoucit'],
          ['брат (frère)', 'бра́тья', 'pluriel irrégulier en -ья'],
          ['стул (chaise)', 'сту́лья', 'pluriel irrégulier en -ья'],
          ['лист (feuille)', 'ли́стья', 'pluriel irrégulier en -ья (ли́сты = « feuilles de papier » à la place)'],
          ['ребёнок (enfant)', 'де́ти', 'pluriel supplétif (racine différente)'],
          ['человек (personne)', 'лю́ди', 'pluriel supplétif (racine différente)'],
        ],
      },
      bullets: [
        '**Les pluriels en -а à déplacement d’accent** forment un groupe large et productif de noms majoritairement masculins monosyllabiques : дом, город, лес, глаз, паспорт, вечер (soir) → вечера, доктор → доктора.',
        '**Les pluriels en -ья** (друзья, братья, стулья, листья) insèrent une consonne mouillée avant **-я** — ils ne ressemblent absolument pas à leur forme singulière au premier regard.',
        '**Les pluriels supplétifs** (ребёнок → дети, человек → люди) utilisent une racine entièrement différente, comme en anglais « child → children » ou « person → people ».',
        '**лист** a deux pluriels différents selon le sens : **листья** (les feuilles d’un arbre) vs. **листы** (des feuilles de papier) — un piège de vocabulaire classique.',
      ],
    },
    {
      h2: 'Nominatif vs accusatif : comment les distinguer',
      content:
        'Pour les **noms masculins et neutres inanimés**, le cas accusatif est **identique** au nominatif — aucun changement de terminaison. La même forme du mot, стол ou окно, peut être soit le sujet, soit l’objet direct d’une phrase. C’est le **contexte** qui permet de trancher.',
      table: {
        caption: 'Comparaison nominatif / accusatif',
        boldColumnIndices: [0, 1],
        headers: ['Situation', 'Phrase russe', 'Explication'],
        rows: [
          [
            'Sujet (nominatif)',
            'Стол стоит у окна.',
            'La table se trouve près de la fenêtre. (стол = sujet)',
          ],
          [
            'Objet direct, inanimé (accusatif = nominatif)',
            'Я вижу стол.',
            'Je vois la table. (стол est inchangé, mais est maintenant l’objet)',
          ],
          ['Sujet (nominatif)', 'Мой друг пришёл.', 'Mon ami est arrivé. (друг = sujet)'],
          [
            'Objet direct, animé (accusatif ≠ nominatif)',
            'Я вижу друга.',
            'Je vois mon ami. (друг → друга — le masculin animé prend l’accusatif à forme de génitif)',
          ],
          [
            'Sujet féminin (nominatif)',
            'Книга лежит на столе.',
            'Le livre est posé sur la table.',
          ],
          [
            'Objet direct féminin (accusatif ≠ nominatif)',
            'Я читаю книгу.',
            'Je lis un livre. (книга → книгу — le féminin change toujours)',
          ],
        ],
      },
      subsections: [
        {
          h3: 'La règle qui tranche',
          content:
            '**Les noms masculins animés** basculent vers l’accusatif à forme de génitif (друг → друга). **Les noms masculins et neutres inanimés** restent identiques au nominatif. **Les noms féminins** changent toujours leur terminaison (-а → -у). C’est exactement le miroir du piège traité dans notre guide sur le cas accusatif.',
        },
      ],
    },
    {
      h2: 'Comment les adjectifs et les pronoms s’accordent au nominatif',
      content:
        'Les adjectifs, les possessifs et les démonstratifs doivent **s’accorder** en genre et en nombre avec le nom qu’ils décrivent — et les formes du nominatif sont celles qu’on apprend en premier.',
      table: {
        caption: 'Terminaisons des adjectifs et pronoms au nominatif',
        boldColumnIndices: [0],
        headers: ['Genre / nombre', 'Adjectif (новый)', 'Possessif (мой)', 'Démonstratif (этот)'],
        rows: [
          ['Masculin', 'новый', 'мой', 'этот'],
          ['Féminin', 'новая', 'моя', 'эта'],
          ['Neutre', 'новое', 'моё', 'это'],
          ['Pluriel (tous genres)', 'новые', 'мои', 'эти'],
        ],
      },
      bullets: [
        '**Это**, quand il signifie « c’est / voici / voilà » (Emploi 3 ci-dessus), fonctionne comme un mot de désignation invariable et ne change ni pour le genre ni pour le nombre dans ce rôle.',
        '**Les pronoms personnels** au nominatif — я, ты, он/она/оно, мы, вы, они — ne se déclinent pas selon le genre, sauf à la troisième personne du singulier.',
      ],
    },
    {
      h2: '24 exemples réels du cas nominatif russe',
      content:
        'Voici **24 phrases russes authentiques** illustrant chaque emploi majeur du cas nominatif, avec translittération et traduction. **1–6 :** sujet de la phrase | **7–12 :** noms attributs après un « être » omis | **13–18 :** nommer avec это | **19–24 :** titres, enseignes et exclamations.',
      table: {
        caption: '24 phrases d’exemple avec le cas nominatif',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Russe', 'Translittération', 'Traduction et remarques'],
        rows: [
          ['1', 'Собака лает.', 'Sobaka layet.', 'Le chien aboie. (собака = sujet)'],
          [
            '2',
            'Дети играют во дворе.',
            'Deti igrayut vo dvore.',
            'Les enfants jouent dans la cour. (дети = pluriel irrégulier de ребёнок)',
          ],
          [
            '3',
            'Погода сегодня хорошая.',
            'Pogoda segodnya khoroshaya.',
            'Il fait beau aujourd’hui. (погода = sujet)',
          ],
          [
            '4',
            'Мой брат работает в банке.',
            'Moy brat rabotayet v banke.',
            'Mon frère travaille dans une banque. (брат = sujet)',
          ],
          [
            '5',
            'Друзья приехали вчера.',
            'Druzya priyekhali vchera.',
            'Les amis sont arrivés hier. (друзья = pluriel irrégulier de друг)',
          ],
          [
            '6',
            'Этот дом очень старый.',
            'Etot dom ochen staryy.',
            'Cette maison est très vieille. (дом = sujet)',
          ],
          [
            '7',
            'Она — моя сестра.',
            'Ona — moya sestra.',
            'Elle est ma sœur. (les deux au nominatif, быть omis)',
          ],
          [
            '8',
            'Он врач, а она инженер.',
            'On vrach, a ona inzhener.',
            'Il est médecin, et elle est ingénieure.',
          ],
          [
            '9',
            'Санкт-Петербург — красивый город.',
            'Sankt-Peterburg — krasivyy gorod.',
            'Saint-Pétersbourg est une belle ville.',
          ],
          [
            '10',
            'Русский язык — мой любимый предмет.',
            'Russkiy yazyk — moy lyubimyy predmet.',
            'Le russe est ma matière préférée.',
          ],
          [
            '11',
            'Это здание — музей.',
            'Eto zdaniye — muzey.',
            'Ce bâtiment est un musée.',
          ],
          [
            '12',
            'Чай без сахара — моя привычка.',
            'Chay bez sakhara — moya privychka.',
            'Le thé sans sucre est mon habitude.',
          ],
          ['13', 'Это моя мама.', 'Eto moya mama.', 'C’est ma maman.'],
          [
            '14',
            'Это интересная задача.',
            'Eto interesnaya zadacha.',
            'C’est une tâche intéressante.',
          ],
          [
            '15',
            'Кто это? — Это мой сосед.',
            'Kto eto? — Eto moy sosed.',
            'Qui est-ce ? — C’est mon voisin.',
          ],
          [
            '16',
            'Что это? — Это словарь.',
            'Chto eto? — Eto slovar.',
            'Qu’est-ce que c’est ? — C’est un dictionnaire.',
          ],
          [
            '17',
            'Это не ошибка, а шутка.',
            'Eto ne oshibka, a shutka.',
            'Ce n’est pas une erreur, mais une blague.',
          ],
          [
            '18',
            'Это новые студенты.',
            'Eto novyye studenty.',
            'Ce sont les nouveaux étudiants. (это reste invariable ; студенты est au pluriel)',
          ],
          [
            '19',
            'Роман называется «Преступление и наказание».',
            'Roman nazyvayetsya "Prestupleniye i nakazaniye".',
            'Le roman s’intitule « Crime et Châtiment ».',
          ],
          ['20', 'Вход', 'Vkhod', 'Entrée (une enseigne)'],
          [
            '21',
            'Осторожно, ступеньки!',
            'Ostorozhno, stupenki!',
            'Attention, marches ! (panneau d’avertissement, nominatif pluriel)',
          ],
          ['22', 'Пожар!', 'Pozhar!', 'Au feu ! (exclamation)'],
          [
            '23',
            'Какая красота!',
            'Kakaya krasota!',
            'Quelle beauté ! (exclamation avec adjectif + nom au nominatif)',
          ],
          [
            '24',
            'Боже мой!',
            'Bozhe moy!',
            'Mon Dieu ! (forme vocative fossilisée — la rare exception)',
          ],
        ],
      },
    },
    {
      h2: 'Top 5 des erreurs au nominatif (et comment les corriger)',
      content: 'Les **fautes** les plus fréquentes des apprenants avec le nominatif :',
      bullets: [
        '**Utiliser le nominatif pour l’objet direct des noms animés** — Я вижу мой друг ✗ → Я вижу моего друга ✓ (les objets directs masculins animés exigent l’accusatif, qui ressemble au génitif)',
        '**Former les pluriels irréguliers avec une règle aveugle en -ы/-и** — други ✗ → друзья ✓ (les pluriels irréguliers doivent être mémorisés individuellement)',
        '**Oublier la règle orthographique des 8 lettres au pluriel** — книгы ✗ → книги ✓ (après к, on écrit -и, pas -ы)',
        '**Traiter это comme un adjectif qui doit s’accorder** — Эта мой брат ✗ → Это мой брат ✓ (это ne change jamais, quel que soit le genre ou le nombre de ce qui suit)',
        '**Utiliser le nominatif après une préposition** — в дом pour un lieu ✗ → в доме ✓ (le nominatif ne suit jamais une préposition — c’est justement ce qui caractérise le cas prépositionnel)',
      ],
    },
  ],
  conclusion:
    'Le cas nominatif russe semble trompeusement simple — c’est la forme apprise en premier, sans presque aucune terminaison à ajouter. Mais ses formes plurielles cachent certaines des irrégularités les plus retorses de toute la langue, et son chevauchement avec le cas accusatif est l’obstacle le plus courant pour les débutants.\n\nEn résumé : le nominatif marque le **sujet**, le **nom attribut** après un « être » omis, et tout ce qui suit **это**. Les terminaisons du singulier suivent le genre de façon prévisible ; les terminaisons du pluriel suivent le schéma **-ы/-и** (avec la règle orthographique des 8 lettres) pour la plupart des noms, mais un noyau de mots à très haute fréquence — **друзья, братья, дети, люди, дома, города** — doit être mémorisé individuellement.',
  conclusionOutro:
    'Prêt à continuer ? Explorez les autres cas dans notre série complète de grammaire russe :',
  ctaText: 'Entraînez les cas russes avec notre application',
  ctaHref: '/',
  faq: [
    {
      question: 'À quoi sert le cas nominatif en russe ?',
      answer:
        'Le cas nominatif russe sert pour le sujet d’une phrase (Кошка спит — Le chat dort), le nom attribut après une forme omise de « être » (Она — врач — Elle est médecin), nommer et présenter avec это (Это мой брат), et comme forme de dictionnaire / de citation de tout nom.',
    },
    {
      question: 'Le cas nominatif russe est-il le même que l’accusatif ?',
      answer:
        'Pas exactement, mais ils se recoupent pour les noms masculins et neutres inanimés : Я вижу стол (Je vois la table) utilise la même forme стол que la forme sujet. Pour les noms masculins animés, l’accusatif correspond en revanche au génitif (Я вижу друга — Je vois mon ami). Les noms féminins changent toujours leur terminaison à l’accusatif (книга → книгу).',
    },
    {
      question: 'Comment former le nominatif pluriel en russe ?',
      answer:
        'La plupart des noms masculins et féminins ajoutent -ы (ou -и après г, к, х, ж, ш, щ, ч, ц), tandis que les noms neutres échangent -о contre -а et -е contre -я. Un groupe de noms courants est irrégulier et doit être mémorisé : друг → друзья, брат → братья, стул → стулья, ребёнок → дети, человек → люди, дом → дома, город → города.',
    },
    {
      question: 'Pourquoi это ne change-t-il pas selon le genre ou le nombre ?',
      answer:
        'Это, quand il signifie « c’est / voici / voilà / ce sont », fonctionne comme un mot de désignation invariable plutôt que comme un véritable adjectif démonstratif. Il reste это quel que soit ce qui suit : Это мой брат (masculin), Это моя сестра (féminin), Это мои друзья (pluriel).',
    },
    {
      question: 'Le russe a-t-il un cas vocatif distinct pour s’adresser aux gens ?',
      answer:
        'Pas en russe standard moderne — l’ancien cas vocatif a disparu il y a des siècles, à l’exception d’une poignée de formes fossilisées comme Боже! (Mon Dieu !) et Господи! (Seigneur !). Pour s’adresser à quelqu’un ou l’interpeller aujourd’hui, le russe utilise simplement la forme nominative simple : Мама! (Maman !), Андрей! (Andrey !).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cas nominatif russe : règles, terminaisons et 24 exemples réels',
    description:
      'Le guide complet du cas nominatif russe : 6 emplois essentiels, terminaisons au singulier et au pluriel, pluriels irréguliers, nominatif vs accusatif. 24 exemples réels avec translittération.',
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Native French speaker learning Russian; writes about grammar, cases, and practical self-study habits.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-nominative-case',
    },
    keywords:
      'cas nominatif russe, nominatif russe règles, terminaisons nominatif russe, qu’est-ce que le nominatif en russe, exemples nominatif russe, pluriel nominatif russe',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-nominative-case-dictionary-form.webp',
      width: 1536,
      height: 1024,
    },
  },
};
