/**
 * Traductions des leçons Learn
 * Structure : slug -> langue -> contenu complet LearnLesson
 */
import type { LearnLesson } from './learnLessons';
import type { LandingLanguage } from '@/data/website/landingTranslations';

export const learnLessonTranslations: Partial<
  Record<string, Partial<Record<LandingLanguage, LearnLesson>>>
> = {
  'russian-cases-complete-guide': {
    fr_fr: {
      slug: 'russian-cases-complete-guide',
      title: 'Le guide complet des cas russes | Les 6 cas expliqués',
      metaTitle: 'Cas russes : guide complet avec exemples | Russian Cases with Anna',
      metaDescription:
        'Maîtrisez les 6 cas russes avec notre guide complet. Nominatif, génitif, datif, accusatif, instrumental, prépositionnel — définitions, terminaisons, prépositions et exemples. Ressource grammaticale gratuite.',
      keywords: [
        'cas russes',
        'grammaire russe cas',
        '6 cas russes',
        'cas russes expliqués',
        'système des cas russes',
        'apprendre les cas russes',
      ],
      h1: 'Le guide complet des cas russes',
      intro:
        "Les 6 cas expliqués avec des exemples. Si vous apprenez le russe, vous avez certainement déjà rencontré le concept des cas russes — et les avez trouvés très déroutants. Vous n'êtes pas seul.\n\nLe système des cas russes est l'un des plus gros obstacles pour les francophones, mais une fois compris, lire et parler le russe devient beaucoup plus facile. Dans ce guide complet, nous détaillerons les 6 cas russes un par un, expliquerons le rôle de chacun, montrerons les terminaisons et donnerons de nombreux exemples réels.",
      lastUpdated: 'Mars 2026',
      whatYouLearn: [
        'Ce que sont les cas russes et pourquoi ils existent',
        'Les 6 cas avec leurs significations, terminaisons et exemples réels',
        'Quelles prépositions déclenchent quel cas',
        'Les erreurs les plus courantes à éviter',
        'Conseils pratiques pour mémoriser le système des cas plus rapidement',
      ],
      internalLinksPosition: 'conclusion',
      internalLinks: [
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Cas génitif russe : règles, terminaisons et 30+ exemples réels',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Cas accusatif russe : objets directs, animé vs inanimé et verbes de mouvement',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Cas datif russe : dire « à » et « pour » en russe',
        },
        {
          href: '/learn/articles/russian-instrumental-case',
          label:
            "Cas instrumental russe : quand l'utiliser et pourquoi c'est plus simple qu'il n'y paraît",
        },
        {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Cas prépositionnel russe : le seul cas qui ne se tient jamais seul',
        },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Prépositions russes et cas : quelle préposition utilise quel cas ?',
        },
      ],
      sections: [
        {
          h2: 'Qu’est-ce que les cas russes ? (Et pourquoi le russe en a-t-il ?)',
          content:
            "En **français**, l'ordre des mots indique qui fait quoi. « Le chien mord l'homme » signifie quelque chose de très différent de « L'homme mord le chien » — même avec exactement les mêmes mots.\n\nLe **russe** fonctionne différemment. Le russe est une langue fortement **flexionnelle** : les terminaisons des mots changent selon leur rôle grammatical dans la phrase. Ces différentes formes sont appelées **cas**. Comme chaque mot porte sa fonction grammaticale dans sa terminaison, l'ordre des mots en russe est beaucoup plus flexible qu'en français.\n\nExemple : **Собака кусает мужчину** (Le chien mord l'homme). Que vous écriviez « Мужчину кусает собака » ou « Кусает собака мужчину », le sens reste le même — la terminaison **-у** sur мужчину indique toujours qu'il est celui qui est mordu.\n\nLe russe a **6 cas**, et chaque nom, pronom, adjectif et numéral change de forme selon le cas. Apprendre ces cas est la **clé pour maîtriser la grammaire russe**.",
        },
        {
          h2: 'Vue d’ensemble : les 6 cas russes en un coup d’œil',
          image: {
            src: '/articles/the-six-russian-cases-quick-reference.webp',
            alt: 'Tableau de référence rapide des six cas russes',
            width: 1200,
            height: 630,
          },
          content: 'Voici un **aperçu rapide** des 6 cas russes avant d’entrer dans les détails :',
          table: {
            headers: [
              'Cas',
              'Nom russe',
              'Question clé',
              'Utilisation principale',
              'Exemple rapide',
            ],
            rows: [
              [
                'Nominatif',
                'Именительный',
                'Кто? Что? (Qui ? Quoi ?)',
                'Sujet de la phrase',
                'Кот спит. (Le chat dort.)',
              ],
              [
                'Génitif',
                'Родительный',
                'Кого? Чего? (De qui ? De quoi ?)',
                'Possession, absence, quantité',
                "Нет кота. (Il n'y a pas de chat.)",
              ],
              [
                'Datif',
                'Дательный',
                'Кому? Чему? (À qui ?)',
                'Objet indirect, destinataire',
                "Я дал коту молоко. (J'ai donné du lait au chat.)",
              ],
              [
                'Accusatif',
                'Винительный',
                'Кого? Что? (Qui ? Quoi ?)',
                'Objet direct, direction',
                'Я вижу кота. (Je vois le chat.)',
              ],
              [
                'Instrumental',
                'Творительный',
                'Кем? Чем? (Avec qui ?)',
                'Instrument, accompagnement, rôle',
                "Я пишу ручкой. (J'écris avec un stylo.)",
              ],
              [
                'Prépositionnel',
                'Предложный',
                'О ком? О чём? (À propos de qui ?)',
                'Lieu, sujet',
                'Я думаю о коте. (Je pense au chat.)',
              ],
            ],
          },
        },
        {
          h2: '1. Le cas nominatif (Именительный падеж)',
          content:
            "Le **cas nominatif** est la **forme de base** d'un mot russe — celle que vous trouvez dans le dictionnaire. Chaque nom russe a une forme nominative, qui répond aux questions **Кто?** (Qui ?) ou **Что?** (Quoi ?). Le nominatif sert pour le **sujet** de la phrase : la personne ou la chose qui fait l'action.",
          table: {
            headers: [
              'Genre',
              'Terminaison singulier',
              'Exemple (sing.)',
              'Terminaison pluriel',
              'Exemple (plur.)',
            ],
            boldColumnIndices: [1, 3],
            rows: [
              [
                'Masculin',
                '-Ø / -й / -ь',
                'стол (table), музей (musée)',
                '-ы / -и',
                'столы, музеи',
              ],
              [
                'Féminin',
                '-а / -я / -ь',
                'женщина (femme), неделя (semaine)',
                '-ы / -и',
                'женщины, недели',
              ],
              ['Neutre', '-о / -е', 'окно (fenêtre), море (mer)', '-а / -я', 'окна, моря'],
            ],
          },
          subsections: [
            {
              h3: 'Exemples au nominatif',
              content:
                '**Иван читает книгу.** — Ivan lit un livre. (Иван = sujet → nominatif)\n\n**Собака бежит.** — Le chien court. (Собака = sujet → nominatif)\n\n**Москва — красивый город.** — Moscou est une belle ville. (Москва = sujet → nominatif)\n\n**Point clé :** Le nominatif est aussi utilisé pour le **nom du prédicat** après le verbe « être » (souvent omis au présent en russe). Exemple : **Он — врач.** (Il est médecin.) — Врач est au nominatif.',
            },
          ],
        },
        {
          h2: '2. Le cas génitif (Родительный падеж)',
          content:
            "Le **cas génitif** est le cas le plus fréquent après le nominatif — et l'un des plus importants à maîtriser pour le russe quotidien. Il répond aux questions **Кого?** (De qui ?) ou **Чего?** (De quoi ?).\n\nLe génitif exprime la **possession** (comme le « de » français ou l’apostrophe s), l’**absence** et la **quantité**. Il est aussi requis après de nombreuses prépositions russes courantes.\n\n- **Possession :** книга студента — le livre de l'étudiant\n- **Absence avec нет :** У меня нет времени. — Je n'ai pas le temps\n- **Après les nombres 2, 3, 4 :** два стола, три окна\n- **Après les nombres 5+ :** пять столов\n- **Après les prépositions :** без, до, из, от, у, после, для, кроме\n- **Comparaison :** больше кошки — plus grand qu'un chat\n\n**Exemples :** Это книга моего друга. — C'est le livre de mon ami. У неё нет машины. — Elle n'a pas de voiture. Он приехал из России. — Il est venu de Russie.",
          link: {
            href: '/learn/articles/russian-genitive-case',
            label: 'Cas génitif russe : règles, terminaisons et 32 exemples réels',
          },
          table: {
            caption: 'Terminaisons du génitif par genre',
            headers: ['Genre', 'Singulier', 'Exemple', 'Pluriel', 'Exemple'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Masculin (dur)', '-а', 'стол → стола', '-ов', 'стол → столов'],
              [
                'Masculin (doux/sifflante)',
                '-я / -а',
                'музей → музея',
                '-ев / -ей',
                'музей → музеев',
              ],
              ['Féminin (-а/-я)', '-ы / -и', 'женщина → женщины', '-Ø / -ь', 'женщин'],
              ['Féminin (-ь)', '-и', 'ночь → ночи', '-ей', 'ночей'],
              ['Neutre (-о)', '-а', 'окно → окна', '-Ø', 'окон'],
              ['Neutre (-е)', '-я', 'море → моря', '-ей', 'морей'],
            ],
          },
        },
        {
          h2: '3. Le cas datif (Дательный падеж)',
          content:
            "Le **cas datif** marque l’**objet indirect** de la phrase — le destinataire de l'action. Il répond aux questions **Кому?** (À qui ?) ou **Чему?** (À quoi ?). C'est le cas du **« don »** : quand on donne, dit, montre ou envoie quelque chose à quelqu'un, cette personne prend le datif.",
          link: {
            href: '/learn/articles/russian-dative-case',
            label: 'Cas datif russe : règles, terminaisons, нравиться et 30 exemples',
          },
          subsections: [
            {
              h3: 'Utilisations principales du datif',
              content:
                "- **Objet indirect :** Я дал книгу другу. — J'ai donné le livre à mon ami.\n- **Verbes de communication :** говорить, писать, звонить, помогать (parler, écrire, appeler, aider quelqu'un)\n- **Exprimer l'âge :** Мне двадцать лет. — J'ai vingt ans.\n- **Construction « X aime Y » (нравиться) :** Мне нравится музыка. — J'aime la musique.\n- **Après les prépositions :** к (vers/à), по (le long de/selon), благодаря (grâce à), вопреки (contrairement à)",
            },
          ],
          table: {
            headers: ['Genre', 'Singulier', 'Exemple', 'Pluriel', 'Exemple'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Masculin (dur)', '-у', 'брат → брату', '-ам', 'братьям'],
              ['Masculin (doux)', '-ю', 'гений → гению', '-ям', 'гениям'],
              ['Féminin (-а/-я)', '-е / -и', 'сестра → сестре', '-ам/-ям', 'сёстрам'],
              ['Féminin (-ь)', '-и', 'ночь → ночи', '-ям', 'ночам'],
              ['Neutre (-о)', '-у', 'окно → окну', '-ам', 'окнам'],
              ['Neutre (-е)', '-ю', 'море → морю', '-ям', 'морям'],
            ],
          },
        },
        {
          h2: '4. Le cas accusatif (Винительный падеж)',
          content:
            "Le **cas accusatif** marque l’**objet direct** — la personne ou la chose directement affectée par l'action. Il répond aux questions **Кого?** (Qui ?) ou **Что?** (Quoi ?). C'est aussi le cas utilisé pour le **mouvement et la direction** (aller quelque part), ce qui en fait l'un des cas les plus fréquents en russe quotidien.",
          link: {
            href: '/learn/articles/russian-accusative-case',
            label: 'Cas accusatif russe : objets directs, animé vs inanimé',
          },
          subsections: [
            {
              h3: 'La distinction animé vs inanimé',
              content:
                "L'accusatif a une distinction cruciale qui n'existe pas en français : les **noms animés** (personnes, animaux) se comportent différemment des **noms inanimés** (objets, concepts).\n\n- **Noms masculins et neutres inanimés :** même terminaison qu'au nominatif\n- **Noms masculins animés :** même terminaison qu'au génitif\n- **Noms féminins :** -а → -у (ou -я → -ю) quel que soit l'animacité\n\n**Erreur courante :** Я вижу стол. (Je vois la table) — стол inanimé → pas de changement. Я вижу студента. (Je vois l'étudiant) — студент animé → accusatif = forme du génitif.",
            },
            {
              h3: 'Accusatif et mouvement',
              content:
                "L'accusatif s'utilise après **в** (dans, vers) et **на** (sur, vers) pour exprimer le mouvement vers une destination — par opposition au **cas prépositionnel**, qui exprime le lieu.\n\n- **Я иду в школу.** — Je vais à l'école. (direction → accusatif)\n- **Я нахожусь в школе.** — Je suis à l'école. (lieu → prépositionnel)",
            },
          ],
          table: {
            headers: ['Genre / Animacité', 'Nominatif', 'Accusatif', 'Exemple'],
            boldColumnIndices: [2],
            rows: [
              ['Masculin inanimé', 'стол', 'стол (inchangé)', 'Я вижу стол.'],
              ['Masculin animé', 'студент', 'студента (-а)', 'Я вижу студента.'],
              ['Féminin (-а)', 'книга', 'книгу (-у)', 'Я читаю книгу.'],
              ['Féminin (-я)', 'неделя', 'неделю (-ю)', 'Всю неделю.'],
              ['Neutre', 'окно', 'окно (inchangé)', 'Я вижу окно.'],
              ['Pluriel inanimé', 'столы', 'столы (inchangé)', 'Я вижу столы.'],
              ['Pluriel animé', 'студенты', 'студентов (gén. pl.)', 'Я вижу студентов.'],
            ],
          },
        },
        {
          h2: '5. Le cas instrumental (Творительный падеж)',
          content:
            "Le **cas instrumental** indique le **moyen ou l'instrument** par lequel une action est accomplie. Il répond aux questions **Кем?** (Par qui ?) ou **Чем?** (Par quoi ? / Avec quoi ?). Malgré son nom intimidant, l'instrumental a des **terminaisons assez prévisibles** — et une fois apprises, c'est l'un des cas les plus faciles à utiliser.",
          link: {
            href: '/learn/articles/russian-instrumental-case',
            label: "Cas instrumental russe : quand l'utiliser et pourquoi",
          },
          subsections: [
            {
              h3: "Utilisations principales de l'instrumental",
              content:
                '- **Instrument ou moyen :** писать ручкой — écrire avec un stylo.\n- **Accompagnement (avec с) :** гулять с другом — se promener avec un ami.\n- **Profession ou rôle (après быть/работать) :** быть врачом — être médecin ; работать учителем — travailler comme professeur.\n- **Expressions de temps :** утром — le matin ; вечером — le soir ; летом — en été.\n- **Après les prépositions :** с (avec), за (derrière/pour), над (au-dessus), под (sous), перед (devant), между (entre), рядом с (à côté de)',
            },
          ],
          table: {
            headers: ['Genre', 'Singulier', 'Exemple', 'Pluriel', 'Exemple'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Masculin (dur)', '-ом', 'стол → столом', '-ами', 'столами'],
              ['Masculin (doux)', '-ем / -ём', 'гений → гением', '-ями', 'гениями'],
              ['Féminin (-а)', '-ой / -ей', 'сестра → сестрой', '-ами', 'сёстрами'],
              ['Féminin (-ь)', '-ью', 'ночь → ночью', '-ями', 'ночами'],
              ['Neutre (-о)', '-ом', 'окно → окном', '-ами', 'окнами'],
              ['Neutre (-е)', '-ем', 'море → морем', '-ями', 'морями'],
            ],
          },
        },
        {
          h2: '6. Le cas prépositionnel (Предложный падеж)',
          content:
            "Le **cas prépositionnel** est unique parmi les 6 cas russes : c'est le **seul cas qui n'apparaît JAMAIS sans préposition**. Il est toujours déclenché par une. Il répond à **О ком?** (À propos de qui ?) ou **О чём?** (À propos de quoi ?) et sert aussi pour le **lieu**. Il a les terminaisons les plus régulières et prévisibles, ce qui en fait un excellent point de départ pour les débutants.",
          link: {
            href: '/learn/articles/russian-prepositional-case',
            label: 'Cas prépositionnel russe : le seul cas qui ne se tient jamais seul',
          },
          subsections: [
            {
              h3: 'Utilisations principales du prépositionnel',
              content:
                '- **Lieu avec в et на :** Я живу в России. — Je vis en Russie.\n- **Sujet avec о/об :** Мы говорим о погоде. — Nous parlons du temps.\n- **Moyen de transport avec на :** ехать на поезде — aller en train.\n- **Après les prépositions :** в (dans/à — lieu), на (sur/à — lieu), о/об (à propos de), при (en présence de / sous)',
            },
            {
              h3: 'Prépositionnel vs accusatif avec В et На',
              content:
                "C'est l'une des **distinctions les plus importantes** de la grammaire russe :\n\n- **Direction (mouvement vers) → Accusatif :** Я иду в магазин. — Je vais au magasin.\n- **Lieu (position statique) → Prépositionnel :** Я нахожусь в магазине. — Je suis au magasin.",
            },
          ],
          table: {
            headers: ['Genre', 'Terminaison sing.', 'Exemple', 'Terminaison plur.', 'Exemple'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Masculin (dur)', '-е', 'стол → столе (на столе)', '-ах', 'столах'],
              ['Masculin (doux)', '-е / -и', 'музей → музее', '-ях', 'музеях'],
              ['Féminin (-а/-я)', '-е / -и', 'страна → стране (в стране)', '-ах/-ях', 'странах'],
              ['Féminin (-ь)', '-и', 'ночь → ночи', '-ях', 'ночах'],
              ['Neutre (-о)', '-е', 'окно → окне (в окне)', '-ах', 'окнах'],
              ['Neutre (-е)', '-е', 'море → море (в море)', '-ях', 'морях'],
            ],
          },
        },
        {
          h2: 'Terminaisons des cas russes : tableau de référence',
          content:
            "Voici une **vue d'ensemble consolidée** des terminaisons des cas pour les noms masculins, féminins et neutres au singulier. Utilisez-le comme **aide-mémoire** pour étudier les déclinaisons russes.",
          table: {
            caption: 'Terminaisons des noms au singulier par cas et genre',
            headers: [
              'Cas',
              'Masc. dur',
              'Masc. doux',
              'Fém. (-а)',
              'Fém. (-ь)',
              'Neutr. (-о)',
              'Neutr. (-е)',
            ],
            boldColumnIndices: [1, 2, 3, 4, 5, 6],
            rows: [
              ['Nominatif', '-Ø', '-й/-ь', '-а', '-ь', '-о', '-е'],
              ['Génitif', '-а', '-я', '-ы/-и', '-и', '-а', '-я'],
              ['Datif', '-у', '-ю', '-е', '-и', '-у', '-ю'],
              ['Accusatif (inanim.)', '-Ø', '-й/-ь', '-у', '-ь', '-о', '-е'],
              ['Accusatif (anim.)', '-а', '-я', '-у', '-ь', '-о', '-е'],
              ['Instrumental', '-ом', '-ем/-ём', '-ой/-ей', '-ью', '-ом', '-ем'],
              ['Prépositionnel', '-е', '-е/-и', '-е/-и', '-и', '-е', '-е'],
            ],
          },
        },
        {
          h2: 'Prépositions russes et leurs cas',
          content:
            "L'un des aspects les plus **pratiques** pour apprendre les cas russes est de savoir quelles prépositions déclenchent quel cas. Voici une référence complète :",
          link: {
            href: '/learn/articles/russian-prepositions-and-cases',
            label: 'Prépositions russes et cas : quelle préposition utilise quel cas ?',
          },
          table: {
            headers: ['Cas requis', 'Prépositions', 'Sens', 'Exemple'],
            rows: [
              ['Génitif', 'без', 'sans', 'без сахара — sans sucre'],
              ['Génitif', 'до', "jusqu'à / avant", 'до обеда — avant le déjeuner'],
              ['Génitif', 'из / с', 'de (intérieur) / de (surface)', 'из России — de Russie'],
              ['Génitif', 'у', 'chez / près de', "у меня — j'ai (litt. : chez moi)"],
              ['Génitif', 'от', 'de (personne)', 'письмо от мамы — une lettre de maman'],
              ['Génitif', 'после', 'après', 'после урока — après la leçon'],
              ['Génitif', 'для', 'pour', 'для тебя — pour toi'],
              ['Génitif', 'кроме', 'sauf', 'все кроме него — tout le monde sauf lui'],
              ['Datif', 'к', 'vers / à (personne)', 'к врачу — chez le médecin'],
              ['Datif', 'по', 'le long de / selon', 'по улице — le long de la rue'],
              ['Accusatif', 'в / на', 'dans / vers (direction)', "в школу — à l'école"],
              ['Accusatif', 'за', 'derrière (mouvement) / pour', 'за стол — derrière la table'],
              ['Accusatif', 'через', 'à travers / dans', 'через час — dans une heure'],
              ['Instrumental', 'с', 'avec', 'с другом — avec un ami'],
              [
                'Instrumental',
                'за / перед',
                'derrière / devant (position)',
                'за домом — derrière la maison',
              ],
              [
                'Instrumental',
                'над / под',
                'au-dessus / sous',
                'над столом — au-dessus de la table',
              ],
              ['Instrumental', 'между', 'entre', 'между нами — entre nous'],
              ['Prépositionnel', 'в / на', 'dans / sur (lieu)', 'в Москве — à Moscou'],
              ['Prépositionnel', 'о / об', 'à propos de', 'о работе — à propos du travail'],
              ['Prépositionnel', 'при', 'en présence de / sous', 'при Сталине — sous Staline'],
            ],
          },
        },
        {
          h2: 'Conseils pour apprendre les cas russes plus vite',
          subsections: [
            {
              h3: '1. Apprendre un cas à la fois',
              content:
                "N'essayez pas de mémoriser les 6 cas d'un coup. Commencez par le **nominatif** (vous le connaissez déjà — c'est la forme du dictionnaire), puis passez à l'**accusatif** (objets directs), puis au **génitif** (possession et absence). Ajoutez de nouveaux cas seulement quand vous êtes à l'aise avec le précédent.",
            },
            {
              h3: "2. Utiliser l'astuce des questions",
              content:
                "Chaque cas russe a une **question** associée (Кто ? Что ? — Кого ? Чего ? — Кому ? etc.). Quand vous hésitez sur le cas à utiliser, demandez-vous quelle question le nom répond dans la phrase. C'est un **raccourci** puissant utilisé par les professeurs de russe natifs.",
            },
            {
              h3: '3. Se concentrer sur les motifs, pas sur les terminaisons individuelles',
              content:
                'Plutôt que de mémoriser chaque terminaison, cherchez les **motifs**. Par exemple, le datif singulier se termine presque toujours par **-у** (dur) ou **-ю** (doux) pour le masculin et le neutre, et par -е ou -и pour le féminin. Reconnaître ces motifs accélère considérablement la mémorisation.',
            },
            {
              h3: '4. Apprendre les prépositions avec leurs cas',
              content:
                "N'apprenez jamais une préposition russe sans apprendre **en même temps quel cas elle régit**. Apprenez sans comme « sans + génitif » dès le départ, pas seulement « sans = without ». Cela évitera beaucoup de confusion plus tard.",
            },
            {
              h3: "5. S'entraîner avec de vraies phrases",
              content:
                "Les exercices abstraits ont leur place, mais la **meilleure façon** d'intérioriser les cas russes est de lire et écouter du russe réel. Quand vous rencontrez une forme déclinée, essayez d'identifier son cas. Avec le temps, certaines formes sembleront naturellement justes ou fausses — c'est ce qu'on appelle développer une **intuition linguistique**.",
            },
            {
              h3: '6. Utiliser la répétition espacée',
              content:
                'Les terminaisons des cas russes sont parfaites pour les **systèmes de répétition espacée (SRS)**. Les applis conçues pour la grammaire russe peuvent vous interroger sur les déclinaisons et repérer vos points faibles — vous aidant à passer plus de temps sur ce que vous ne maîtrisez pas et moins sur ce que vous connaissez déjà.',
            },
          ],
        },
        {
          h2: 'Erreurs les plus courantes avec les cas russes',
          content: 'Évitez ces **erreurs fréquentes** :',
          table: {
            headers: ['Erreur', 'Faux', 'Correct', 'Explication'],
            boldColumnIndices: [2],
            rows: [
              [
                'Utiliser le nominatif comme objet direct',
                'Я вижу кот.',
                'Я вижу кота.',
                "Les objets directs prennent l'accusatif, pas le nominatif",
              ],
              [
                "Oublier la règle de l'animé à l'accusatif",
                'Я вижу студент.',
                'Я вижу студента.',
                "Les noms masculins animés prennent la forme du génitif à l'accusatif",
              ],
              [
                'Confondre direction vs lieu avec в/на',
                'Я в школу сейчас.',
                'Я в школе сейчас.',
                "Le lieu prend le prépositionnel ; la direction prend l'accusatif",
              ],
              [
                'Utiliser le datif au lieu du génitif pour la possession',
                'Книга другу.',
                'Книга друга.',
                'La possession se met au génitif, pas au datif',
              ],
            ],
          },
        },
      ],
      conclusion:
        "Le système des cas russes n'est pas aussi terrifiant qu'il y paraît. Au fond, c'est un système logique : chacun des 6 cas remplit un rôle grammatical précis, suit des motifs de terminaisons cohérents et répond à des mots interrogatifs qui aident à identifier le cas applicable.",
      conclusionIntro:
        "Le système des cas russes n'est pas aussi terrifiant qu'il y paraît. Au fond, c'est un système logique. Pour résumer :",
      conclusionBullets: [
        'Nominatif — le sujet ; la forme « par défaut »',
        'Génitif — possession, absence, quantité ; le cas le plus polyvalent',
        "Datif — objets indirects, destinataires, expressions d'âge",
        'Accusatif — objets directs ; aussi direction avec в/на',
        'Instrumental — moyen, accompagnement, rôles, expressions de temps',
        'Prépositionnel — lieu et sujet ; exige toujours une préposition',
      ],
      conclusionOutro:
        "La clé pour apprendre les cas russes est une pratique régulière et structurée. Apprenez les motifs un cas à la fois, entraînez-vous aux prépositions avec leurs cas requis et exposez-vous autant que possible au russe réel.\n\nMaintenant que vous avez une vue d'ensemble complète du système des cas russes, vous pouvez approfondir chaque cas. Utilisez les liens ci-dessous pour explorer chaque cas en détail :",
      ctaText: "S'entraîner aux cas russes avec notre appli",
      ctaHref: '/',
      faq: [
        {
          question: 'Combien de cas a le russe ?',
          answer:
            'Le russe a 6 cas : nominatif, génitif, datif, accusatif, instrumental et prépositionnel. Certains linguistes évoquent des « sous-cas » supplémentaires (comme le locatif ou le vocatif en russe archaïque), mais le programme standard de grammaire russe moderne enseigne 6 cas.',
        },
        {
          question: 'Quel cas russe est le plus difficile ?',
          answer:
            "La plupart des apprenants trouvent le génitif pluriel le plus difficile, car il a plusieurs formes concurrentes et de nombreuses exceptions. L'instrumental est souvent cité comme déroutant pour les débutants à cause de sa variété d'emplois. Cependant, avec une pratique régulière, les 6 cas deviennent gérables.",
        },
        {
          question: 'Le russe est-il la seule langue à avoir des cas ?',
          answer:
            "Non. De nombreuses langues ont des cas : l'allemand (4 cas), le finnois (15+ cas), le hongrois (18+ cas), le latin (6 cas) et le polonais (7 cas). Les 6 cas du russe sont en fait moins nombreux que dans beaucoup d'autres langues à cas, ce qui peut rassurer les apprenants.",
        },
        {
          question: 'Les adjectifs russes se déclinent-ils aussi ?',
          answer:
            "Oui. Les adjectifs russes doivent s'accorder avec le nom qu'ils modifient en genre, nombre et cas. C'est ce qu'on appelle la déclinaison adjectivale, et elle suit son propre ensemble de terminaisons. Bonne nouvelle : les terminaisons adjectivales sont assez régulières et peuvent s'apprendre comme un motif.",
        },
        {
          question: 'Peut-on se débrouiller en russe sans apprendre les cas ?',
          answer:
            'Vous pouvez communiquer à un niveau très basique sans maîtriser chaque cas, mais vous ferez constamment des erreurs grammaticales et serez plus difficile à comprendre. Les russophones comprendront la plupart du temps ce que vous voulez dire, mais votre langage semblera peu naturel. Pour une vraie fluidité, apprendre le système des cas russes est indispensable.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Le guide complet des cas russes',
            description:
              'Guide complet des 6 cas russes avec règles de déclinaison, prépositions, exemples et conseils.',
            educationalLevel: 'beginner',
            inLanguage: 'fr',
            teaches: 'cas russes, grammaire russe, déclinaison russe',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
          },
          {
            '@type': 'Article',
            headline: 'Le guide complet des cas russes',
            description:
              'Maîtrisez les 6 cas russes : nominatif, génitif, datif, accusatif, instrumental, prépositionnel.',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
            },
            keywords:
              'cas russes, grammaire russe cas, 6 cas russes, cas russes expliqués, apprendre cas russes',
          },
        ],
      },
    },
    de_de: {
      slug: 'russian-cases-complete-guide',
      title: 'Der vollständige Leitfaden zu den russischen Fällen | Alle 6 Fälle erklärt',
      metaTitle:
        'Russische Fälle: Vollständiger Leitfaden mit Beispielen | Russian Cases with Anna',
      metaDescription:
        'Meistern Sie alle 6 russischen Fälle: Nominativ, Genitiv, Dativ, Akkusativ, Instrumental, Präpositiv — Definitionen, Endungen, Präpositionen und Beispiele. Kostenlose Grammatikressource.',
      keywords: [
        'russische Fälle',
        'russische Grammatik Fälle',
        '6 russische Fälle',
        'russische Fälle erklärt',
        'russisches Fallsystem',
        'russische Fälle lernen',
      ],
      h1: 'Der vollständige Leitfaden zu den russischen Fällen',
      intro:
        'Alle 6 Fälle mit Beispielen erklärt. Wenn Sie Russisch lernen, sind Sie fast sicher schon auf das Konzept der russischen Fälle gestoßen – und fanden es zutiefst verwirrend. Sie sind nicht allein.\n\nDas russische Fallsystem ist eine der größten Hürden für Deutschsprachige, aber sobald Sie es verstehen, werden Lesen und Sprechen dramatisch einfacher. In diesem vollständigen Leitfaden gehen wir alle 6 russischen Fälle der Reihe nach durch, erklären die Funktion eines jeden, zeigen die Endungen und geben viele echte Beispiele.',
      lastUpdated: 'März 2026',
      whatYouLearn: [
        'Was russische Fälle sind und warum es sie gibt',
        'Alle 6 Fälle mit Bedeutungen, Endungen und echten Beispielen',
        'Welche Präpositionen welchen Fall auslösen',
        'Die häufigsten Fehler, die Sie vermeiden sollten',
        'Praktische Tipps zum schnelleren Einprägen des Fallsystems',
      ],
      internalLinksPosition: 'conclusion',
      internalLinks: [
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Russischer Genitiv: Regeln, Endungen & 32 Beispiele',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Russischer Akkusativ: Objekte, belebt vs unbelebt',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Russischer Dativ: „An" und „für" auf Russisch',
        },
        {
          href: '/learn/articles/russian-instrumental-case',
          label: 'Russischer Instrumental: Wann und warum',
        },
        {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Russischer Präpositiv: Der Fall, der nie allein steht',
        },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Russische Präpositionen und Fälle: Welche Präposition verlangt welchen Fall?',
        },
      ],
      sections: [
        {
          h2: 'Was sind russische Fälle? (Und warum hat Russisch sie?)',
          content:
            'Im **Deutschen** verrät die Wortstellung, wer was tut. „Der Hund beißt den Mann" bedeutet etwas anderes als „Den Mann beißt der Hund" – trotz gleicher Wörter.\n\n**Russisch** funktioniert anders. Russisch ist eine stark **flektierende Sprache**: Die Endungen der Wörter ändern sich je nach grammatischer Rolle im Satz. Diese verschiedenen Formen heißen **Fälle**. Da jede Wortform ihre Funktion in der Endung trägt, ist die russische Wortstellung viel flexibler.\n\nBeispiel: **Собака кусает мужчину** (Der Hund beißt den Mann). Ob Sie „Мужчину кусает собака" oder „Кусает собака мужчину" schreiben – die Bedeutung bleibt gleich. Die Endung **-у** auf мужчину zeigt stets, dass er gebissen wird.\n\nRussisch hat **6 Fälle**, und jedes Substantiv, Pronomen, Adjektiv und Numeral ändert seine Form. Diese Fälle zu lernen ist der **Schlüssel zur russischen Grammatik**.',
        },
        {
          h2: 'Überblick: Die 6 russischen Fälle auf einen Blick',
          image: {
            src: '/articles/the-six-russian-cases-quick-reference.webp',
            alt: 'Schnellreferenz der sechs russischen Fälle',
            width: 1200,
            height: 630,
          },
          content: 'Hier ein **schneller Überblick** über alle 6 russischen Fälle:',
          table: {
            headers: ['Fall', 'Russischer Name', 'Kernfrage', 'Hauptverwendung', 'Kurzes Beispiel'],
            rows: [
              [
                'Nominativ',
                'Именительный',
                'Кто? Что? (Wer? Was?)',
                'Subjekt des Satzes',
                'Кот спит. (Die Katze schläft.)',
              ],
              [
                'Genitiv',
                'Родительный',
                'Кого? Чего? (Wessen? Wovon?)',
                'Besitz, Abwesenheit, Menge',
                'Нет кота. (Es gibt keine Katze.)',
              ],
              [
                'Dativ',
                'Дательный',
                'Кому? Чему? (Wem?)',
                'Indirektes Objekt, Empfänger',
                'Я дал коту молоко. (Ich gab der Katze Milch.)',
              ],
              [
                'Akkusativ',
                'Винительный',
                'Кого? Что? (Wen? Was?)',
                'Direktes Objekt, Richtung',
                'Я вижу кота. (Ich sehe die Katze.)',
              ],
              [
                'Instrumental',
                'Творительный',
                'Кем? Чем? (Mit wem? Womit?)',
                'Mittel, Begleitung, Rolle',
                'Я пишу ручкой. (Ich schreibe mit dem Stift.)',
              ],
              [
                'Präpositiv',
                'Предложный',
                'О ком? О чём? (Über wen? Wovon?)',
                'Ort, Thema',
                'Я думаю о коте. (Ich denke an die Katze.)',
              ],
            ],
          },
        },
        {
          h2: '1. Der Nominativ (Именительный падеж)',
          content:
            'Der **Nominativ** ist die **Grundform** eines russischen Wortes – die Form im Wörterbuch. Jedes russische Substantiv hat eine Nominativform. Sie beantwortet **Кто?** (Wer?) oder **Что?** (Was?). Der Nominativ kennzeichnet das **Subjekt** des Satzes.',
          table: {
            headers: [
              'Genus',
              'Singular-Endung',
              'Beispiel (Sg.)',
              'Plural-Endung',
              'Beispiel (Pl.)',
            ],
            boldColumnIndices: [1, 3],
            rows: [
              [
                'Maskulin',
                '-Ø / -й / -ь',
                'стол (Tisch), музей (Museum)',
                '-ы / -и',
                'столы, музеи',
              ],
              [
                'Feminin',
                '-а / -я / -ь',
                'женщина (Frau), неделя (Woche)',
                '-ы / -и',
                'женщины, недели',
              ],
              ['Neutrum', '-о / -е', 'окно (Fenster), море (Meer)', '-а / -я', 'окна, моря'],
            ],
          },
          subsections: [
            {
              h3: 'Beispiele Nominativ',
              content:
                '**Иван читает книгу.** — Iwan liest ein Buch. (Иван = Subjekt → Nominativ)\n\n**Собака бежит.** — Der Hund rennt. (Собака = Subjekt → Nominativ)\n\n**Москва — красивый город.** — Moskau ist eine schöne Stadt. (Москва = Subjekt → Nominativ)\n\n**Wichtig:** Der Nominativ wird auch für das **Prädikatsnomen** nach „sein" verwendet (oft im Präsens weggelassen). Beispiel: **Он — врач.** (Er ist Arzt.) — Врач steht im Nominativ.',
            },
          ],
        },
        {
          h2: '2. Der Genitiv (Родительный падеж)',
          content:
            'Der **Genitiv** ist nach dem Nominativ der häufigste Fall und einer der wichtigsten im Alltagsrussisch. Er beantwortet **Кого?** (Wessen?) oder **Чего?** (Wovon?).\n\nDer Genitiv drückt **Besitz**, **Abwesenheit** und **Menge** aus. Er steht auch nach vielen Präpositionen.\n\n- **Besitz:** книга студента — das Buch des Studenten\n- **Abwesenheit mit нет:** У меня нет времени. — Ich habe keine Zeit\n- **Nach Zahlen 2, 3, 4:** два стола, три окна\n- **Nach Zahlen 5+:** пять столов\n- **Nach Präpositionen:** без, до, из, от, у, после, для, кроме\n- **Vergleich:** больше кошки — größer als eine Katze\n\n**Beispiele:** Это книга моего друга. — Das ist das Buch meines Freundes. У неё нет машины. — Sie hat kein Auto. Он приехал из России. — Er kam aus Russland.',
          link: {
            href: '/learn/articles/russian-genitive-case',
            label: 'Russischer Genitiv: Regeln, Endungen & 32 Beispiele',
          },
          table: {
            caption: 'Genitiv-Endungen nach Genus',
            headers: ['Genus', 'Singular', 'Beispiel', 'Plural', 'Beispiel'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Maskulin (hart)', '-а', 'стол → стола', '-ов', 'стол → столов'],
              ['Maskulin (weich)', '-я / -а', 'музей → музея', '-ев / -ей', 'музей → музеев'],
              ['Feminin (-а/-я)', '-ы / -и', 'женщина → женщины', '-Ø / -ь', 'женщин'],
              ['Feminin (-ь)', '-и', 'ночь → ночи', '-ей', 'ночей'],
              ['Neutrum (-о)', '-а', 'окно → окна', '-Ø', 'окон'],
              ['Neutrum (-е)', '-я', 'море → моря', '-ей', 'морей'],
            ],
          },
        },
        {
          h2: '3. Der Dativ (Дательный падеж)',
          content:
            'Der **Dativ** kennzeichnet das **indirekte Objekt** – den Empfänger einer Handlung. Er beantwortet **Кому?** (Wem?) oder **Чему?** (Was?). Man kann ihn als den **„Geben"-Fall** betrachten.',
          link: {
            href: '/learn/articles/russian-dative-case',
            label: 'Russischer Dativ: Regeln, Endungen, нравиться & 30 Beispiele',
          },
          subsections: [
            {
              h3: 'Hauptverwendungen des Dativs',
              content:
                '- **Indirektes Objekt:** Я дал книгу другу. — Ich gab dem Freund das Buch.\n- **Verben der Mitteilung:** говорить, писать, звонить, помогать (sprechen/schreiben/anrufen/helfen)\n- **Altersangabe:** Мне двадцать лет. — Ich bin zwanzig Jahre alt.\n- **Konstruktion „X gefällt Y" (нравиться):** Мне нравится музыка. — Mir gefällt die Musik.\n- **Nach Präpositionen:** к, по, благодаря, вопреки',
            },
          ],
          table: {
            headers: ['Genus', 'Singular', 'Beispiel', 'Plural', 'Beispiel'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Maskulin (hart)', '-у', 'брат → брату', '-ам', 'братьям'],
              ['Maskulin (weich)', '-ю', 'гений → гению', '-ям', 'гениям'],
              ['Feminin (-а/-я)', '-е / -и', 'сестра → сестре', '-ам/-ям', 'сёстрам'],
              ['Feminin (-ь)', '-и', 'ночь → ночи', '-ям', 'ночам'],
              ['Neutrum (-о)', '-у', 'окно → окну', '-ам', 'окнам'],
              ['Neutrum (-е)', '-ю', 'море → морю', '-ям', 'морям'],
            ],
          },
        },
        {
          h2: '4. Der Akkusativ (Винительный падеж)',
          content:
            'Der **Akkusativ** kennzeichnet das **direkte Objekt** – die Person oder Sache, die direkt von der Handlung betroffen ist. Er beantwortet **Кого?** (Wen?) oder **Что?** (Was?). Er wird auch für **Richtung/Bewegung** verwendet.',
          link: {
            href: '/learn/articles/russian-accusative-case',
            label: 'Russischer Akkusativ: Objekte, belebt vs unbelebt',
          },
          subsections: [
            {
              h3: 'Belebt vs. Unbelebt',
              content:
                'Beim Akkusativ gilt: **unbelebte** Substantive (mask./neutr.) = Nominativform; **belebte** maskuline Substantive = Genitivform; **feminine** Substantive: -а → -у (oder -я → -ю).\n\n**Häufiger Fehler:** Я вижу стол. (Ich sehe den Tisch) — стол unbelebt, keine Änderung. Я вижу студента. (Ich sehe den Studenten) — студент belebt, Akkusativ = Genitivform.',
            },
            {
              h3: 'Akkusativ und Bewegung',
              content:
                'Der Akkusativ steht nach **в** und **на** bei Bewegung zu einem Ziel – im Gegensatz zum **Präpositiv** für den Ort.\n\n- **Я иду в школу.** — Ich gehe zur Schule. (Richtung → Akkusativ)\n- **Я нахожусь в школе.** — Ich bin in der Schule. (Ort → Präpositiv)',
            },
          ],
          table: {
            headers: ['Genus / Belebtheit', 'Nominativ', 'Akkusativ', 'Beispiel'],
            boldColumnIndices: [2],
            rows: [
              ['Maskulin unbelebt', 'стол', 'стол (keine Änderung)', 'Я вижу стол.'],
              ['Maskulin belebt', 'студент', 'студента (-а)', 'Я вижу студента.'],
              ['Feminin (-а)', 'книга', 'книгу (-у)', 'Я читаю книгу.'],
              ['Feminin (-я)', 'неделя', 'неделю (-ю)', 'Всю неделю.'],
              ['Neutrum', 'окно', 'окно (keine Änderung)', 'Я вижу окно.'],
              ['Plural unbelebt', 'столы', 'столы (keine Änderung)', 'Я вижу столы.'],
              ['Plural belebt', 'студенты', 'студентов (Gen. Pl.)', 'Я вижу студентов.'],
            ],
          },
        },
        {
          h2: '5. Der Instrumental (Творительный падеж)',
          content:
            'Der **Instrumental** bezeichnet das **Mittel oder Werkzeug** einer Handlung. Er beantwortet **Кем?** (Mit wem?) oder **Чем?** (Womit?). Trotz des komplizierten Namens sind die Endungen **recht vorhersagbar**.',
          link: {
            href: '/learn/articles/russian-instrumental-case',
            label: 'Russischer Instrumental: Wann und warum',
          },
          subsections: [
            {
              h3: 'Hauptverwendungen des Instrumentals',
              content:
                '- **Mittel:** писать ручкой — mit dem Stift schreiben.\n- **Begleitung (mit с):** гулять с другом — mit dem Freund spazieren.\n- **Beruf/Rolle (nach быть/работать):** быть врачом — Arzt sein; работать учителем — als Lehrer arbeiten.\n- **Zeitangaben:** утром, вечером, летом.\n- **Nach Präpositionen:** с, за, над, под, перед, между, рядом с',
            },
          ],
          table: {
            headers: ['Genus', 'Singular', 'Beispiel', 'Plural', 'Beispiel'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Maskulin (hart)', '-ом', 'стол → столом', '-ами', 'столами'],
              ['Maskulin (weich)', '-ем / -ём', 'гений → гением', '-ями', 'гениями'],
              ['Feminin (-а)', '-ой / -ей', 'сестра → сестрой', '-ами', 'сёстрами'],
              ['Feminin (-ь)', '-ью', 'ночь → ночью', '-ями', 'ночами'],
              ['Neutrum (-о)', '-ом', 'окно → окном', '-ами', 'окнами'],
              ['Neutrum (-е)', '-ем', 'море → морем', '-ями', 'морями'],
            ],
          },
        },
        {
          h2: '6. Der Präpositiv (Предложный падеж)',
          content:
            'Der **Präpositiv** ist der einzige Fall, der **nie ohne Präposition** vorkommt. Er beantwortet **О ком?** (Über wen?) oder **О чём?** (Wovon?) und dient auch für **Ort**.',
          link: {
            href: '/learn/articles/russian-prepositional-case',
            label: 'Russischer Präpositiv: Der Fall, der nie allein steht',
          },
          subsections: [
            {
              h3: 'Hauptverwendungen des Präpositivs',
              content:
                '- **Ort mit в und на:** Я живу в России. — Ich lebe in Russland.\n- **Thema mit о/об:** Мы говорим о погоде. — Wir sprechen über das Wetter.\n- **Transportmittel mit на:** ехать на поезде — mit dem Zug fahren.\n- **Nach Präpositionen:** в, на (Ort), о/об, при',
            },
            {
              h3: 'Präpositiv vs. Akkusativ bei в und на',
              content:
                'Wichtige Unterscheidung:\n\n- **Richtung (Bewegung) → Akkusativ:** Я иду в магазин. — Ich gehe zum Geschäft.\n- **Ort (statisch) → Präpositiv:** Я нахожусь в магазине. — Ich bin im Geschäft.',
            },
          ],
          table: {
            headers: ['Genus', 'Singular-Endung', 'Beispiel', 'Plural-Endung', 'Beispiel'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Maskulin (hart)', '-е', 'стол → столе (на столе)', '-ах', 'столах'],
              ['Maskulin (weich)', '-е / -и', 'музей → музее', '-ях', 'музеях'],
              ['Feminin (-а/-я)', '-е / -и', 'страна → стране (в стране)', '-ах/-ях', 'странах'],
              ['Feminin (-ь)', '-и', 'ночь → ночи', '-ях', 'ночах'],
              ['Neutrum (-о)', '-е', 'окно → окне (в окне)', '-ах', 'окнах'],
              ['Neutrum (-е)', '-е', 'море → море (в море)', '-ях', 'морях'],
            ],
          },
        },
        {
          h2: 'Russische Fallendungen: Referenztabelle',
          content:
            'Hier eine **übersichtliche Tabelle** der Fallendungen für maskuline, feminine und neutrale Substantive im Singular. Nutzen Sie sie als **Spickzettel**.',
          table: {
            caption: 'Singular-Endungen nach Fall und Genus',
            headers: [
              'Fall',
              'Mask. hart',
              'Mask. weich',
              'Fem. (-а)',
              'Fem. (-ь)',
              'Neutr. (-о)',
              'Neutr. (-е)',
            ],
            boldColumnIndices: [1, 2, 3, 4, 5, 6],
            rows: [
              ['Nominativ', '-Ø', '-й/-ь', '-а', '-ь', '-о', '-е'],
              ['Genitiv', '-а', '-я', '-ы/-и', '-и', '-а', '-я'],
              ['Dativ', '-у', '-ю', '-е', '-и', '-у', '-ю'],
              ['Akkusativ (unbel.)', '-Ø', '-й/-ь', '-у', '-ь', '-о', '-е'],
              ['Akkusativ (bel.)', '-а', '-я', '-у', '-ь', '-о', '-е'],
              ['Instrumental', '-ом', '-ем/-ём', '-ой/-ей', '-ью', '-ом', '-ем'],
              ['Präpositiv', '-е', '-е/-и', '-е/-и', '-и', '-е', '-е'],
            ],
          },
        },
        {
          h2: 'Russische Präpositionen und ihre Fälle',
          content:
            'Ein **praktischer Aspekt** beim Lernen russischer Fälle: Welche Präposition verlangt welchen Fall? Hier eine Übersicht:',
          link: {
            href: '/learn/articles/russian-prepositions-and-cases',
            label: 'Russische Präpositionen und Fälle: Welche Präposition verlangt welchen Fall?',
          },
          table: {
            headers: ['Erforderlicher Fall', 'Präpositionen', 'Bedeutung', 'Beispiel'],
            rows: [
              ['Genitiv', 'без', 'ohne', 'без сахара — ohne Zucker'],
              ['Genitiv', 'до', 'bis / vor / bis zu', 'до обеда — vor dem Mittagessen'],
              ['Genitiv', 'из / с', 'aus (innen) / von (Oberfläche)', 'из России — aus Russland'],
              ['Genitiv', 'у', 'bei / in der Nähe', 'у меня — ich habe'],
              ['Genitiv', 'от', 'von (Person)', 'письмо от мамы — ein Brief von Mama'],
              ['Genitiv', 'после', 'nach', 'после урока — nach der Stunde'],
              ['Genitiv', 'для', 'für', 'для тебя — für dich'],
              ['Genitiv', 'кроме', 'außer', 'все кроме него — alle außer ihm'],
              ['Dativ', 'к', 'zu (Person)', 'к врачу — zum Arzt'],
              ['Dativ', 'по', 'entlang / laut', 'по улице — entlang der Straße'],
              ['Akkusativ', 'в / на', 'in / auf (Richtung)', 'в школу — zur Schule'],
              ['Akkusativ', 'за', 'hinter (Bewegung) / für', 'за стол — hinter den Tisch'],
              ['Akkusativ', 'через', 'durch / in', 'через час — in einer Stunde'],
              ['Instrumental', 'с', 'mit', 'с другом — mit dem Freund'],
              [
                'Instrumental',
                'за / перед',
                'hinter / vor (Position)',
                'за домом — hinter dem Haus',
              ],
              ['Instrumental', 'над / под', 'über / unter', 'над столом — über dem Tisch'],
              ['Instrumental', 'между', 'zwischen', 'между нами — zwischen uns'],
              ['Präpositiv', 'в / на', 'in / auf (Ort)', 'в Москве — in Moskau'],
              ['Präpositiv', 'о / об', 'über', 'о работе — über die Arbeit'],
              ['Präpositiv', 'при', 'unter / in Anwesenheit von', 'при Сталине — unter Stalin'],
            ],
          },
        },
        {
          h2: 'Tipps zum schnelleren Lernen der russischen Fälle',
          subsections: [
            {
              h3: '1. Einen Fall nach dem anderen lernen',
              content:
                'Versuchen Sie nicht, alle 6 Fälle auf einmal zu lernen. Beginnen Sie mit dem **Nominativ** (die Wörterbuchform), dann **Akkusativ** (direkte Objekte), dann **Genitiv** (Besitz, Abwesenheit). Nehmen Sie den nächsten Fall erst dazu, wenn Sie den vorherigen beherrschen.',
            },
            {
              h3: '2. Die Fragen-Trick nutzen',
              content:
                'Jeder Fall hat eine **Frage** (Кто? Что? — Кого? Чего? — Кому? usw.). Wenn Sie unsicher sind, fragen Sie: Welche Frage beantwortet das Substantiv? Das ist ein wirksamer **Kurzweg**.',
            },
            {
              h3: '3. Muster erkennen statt Einzelendungen pauken',
              content:
                'Suchen Sie nach **Mustern**. Der Dativ Singular endet bei Mask./Neutr. meist auf **-у** oder **-ю**, bei Fem. auf -е oder -и. Solche Muster beschleunigen das Lernen.',
            },
            {
              h3: '4. Präpositionen immer mit ihrem Fall lernen',
              content:
                'Lernen Sie jede Präposition von Anfang an **mit ihrem Fall**: без + Genitiv, nicht nur „без = ohne". Das spart später viel Verwirrung.',
            },
            {
              h3: '5. Mit echten Sätzen üben',
              content:
                'Abstrakte Übungen haben ihren Platz, aber der **schnellste Weg** ist echtes Russisch: Lesen, Hören, und bei jeder deklinierten Form den Fall identifizieren. Mit der Zeit entwickelt sich eine **Sprachintuition**.',
            },
            {
              h3: '6. Spaced Repetition nutzen',
              content:
                'Russische Fallendungen eignen sich ideal für **Spaced Repetition (SRS)**. Apps speziell für russische Grammatik können Sie abfragen und Schwächen gezielt trainieren.',
            },
          ],
        },
        {
          h2: 'Häufigste Fehler bei russischen Fällen',
          content: 'Vermeiden Sie diese **typischen Fehler**:',
          table: {
            headers: ['Fehler', 'Falsch', 'Richtig', 'Erklärung'],
            boldColumnIndices: [2],
            rows: [
              [
                'Nominativ als direktes Objekt',
                'Я вижу кот.',
                'Я вижу кота.',
                'Direkte Objekte stehen im Akkusativ',
              ],
              [
                'Belebtheitsregel im Akkusativ vergessen',
                'Я вижу студент.',
                'Я вижу студента.',
                'Belebte mask. Substantive = Genitivform im Akkusativ',
              ],
              [
                'в/на Richtung vs. Ort verwechseln',
                'Я в школу сейчас.',
                'Я в школе сейчас.',
                'Ort = Präpositiv; Richtung = Akkusativ',
              ],
              [
                'Dativ statt Genitiv bei Besitz',
                'Книга другу.',
                'Книга друга.',
                'Besitz steht im Genitiv',
              ],
            ],
          },
        },
      ],
      conclusion:
        'Das russische Fallsystem ist weniger furchterregend als es zunächst scheint. Es ist ein logisches System: Jeder der 6 Fälle hat eine spezifische Rolle, folgt konsistenten Endungsmustern und antwortet auf bestimmte Fragewörter.',
      conclusionIntro:
        'Das russische Fallsystem ist weniger furchterregend als es zunächst scheint. Es ist ein logisches System. Kurz zusammengefasst:',
      conclusionBullets: [
        'Nominativ — das Subjekt; die Grundform',
        'Genitiv — Besitz, Abwesenheit, Menge; der vielseitigste Fall',
        'Dativ — indirekte Objekte, Empfänger, Altersangaben',
        'Akkusativ — direkte Objekte; auch Richtung mit в/на',
        'Instrumental — Mittel, Begleitung, Rollen, Zeitangaben',
        'Präpositiv — Ort und Thema; immer mit Präposition',
      ],
      conclusionOutro:
        'Der Schlüssel zum Lernen der russischen Fälle ist regelmäßige, strukturierte Übung. Lernen Sie die Muster Fall für Fall, trainieren Sie Präpositionen mit ihren Fällen und setzen Sie sich viel mit echtem Russisch auseinander.\n\nNutzen Sie die Links unten, um jeden Fall im Detail zu erkunden:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wie viele Fälle hat Russisch?',
          answer:
            'Russisch hat 6 Fälle: Nominativ, Genitiv, Dativ, Akkusativ, Instrumental und Präpositiv. Einige Linguisten nehmen weitere Sub-Fälle an (z.B. Lokativ oder Vokativ im archaischen Russisch), der Standard ist 6 Fälle.',
        },
        {
          question: 'Welcher russische Fall ist der schwerste?',
          answer:
            'Die meisten Lernenden finden den Genitiv Plural am schwierigsten wegen mehrerer konkurrierender Formen und Ausnahmen. Der Instrumental wird oft als verwirrend genannt. Mit konsequenter Übung werden alle 6 Fälle beherrschbar.',
        },
        {
          question: 'Hat nur Russisch Fälle?',
          answer:
            'Nein. Viele Sprachen haben Fälle: Deutsch (4), Finnisch (15+), Ungarisch (18+), Latein (6), Polnisch (7). Russisch mit 6 Fällen liegt im Mittelfeld.',
        },
        {
          question: 'Deklinieren russische Adjektive auch?',
          answer:
            'Ja. Russische Adjektive müssen mit dem Substantiv in Genus, Numerus und Kasus übereinstimmen. Das nennt man Adjektivdeklination. Die gute Nachricht: Die Endungen sind recht regelmäßig.',
        },
        {
          question: 'Kann man ohne Fälle Russisch sprechen?',
          answer:
            'Auf sehr niedrigem Niveau ja, aber mit ständigen Grammatikfehlern. Russen verstehen meist, was Sie meinen, aber es klingt unnatürlich. Für echte Flüssigkeit sind die Fälle unverzichtbar.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Der vollständige Leitfaden zu den russischen Fällen',
            description:
              'Vollständiger Leitfaden zu allen 6 russischen Fällen mit Deklinationsregeln, Präpositionen, Beispielen und Tipps.',
            educationalLevel: 'beginner',
            inLanguage: 'de',
            teaches: 'russische Fälle, russische Grammatik, russische Deklination',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
          },
          {
            '@type': 'Article',
            headline: 'Der vollständige Leitfaden zu den russischen Fällen',
            description:
              'Meistern Sie alle 6 russischen Fälle: Nominativ, Genitiv, Dativ, Akkusativ, Instrumental, Präpositiv.',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
            },
            keywords:
              'russische Fälle, russische Grammatik Fälle, 6 russische Fälle, russische Fälle erklärt, russische Fälle lernen',
          },
        ],
      },
    },
    tr_tr: {
      slug: 'russian-cases-complete-guide',
      title: 'Rusça halleri: Kapsamlı rehber | 6 hal açıklaması',
      metaTitle: 'Rusça halleri: Örneklerle kapsamlı rehber | Russian Cases with Anna',
      metaDescription:
        '6 Rusça halini öğrenin: İsim, genitif, datif, akkusatif, enstrumental, lokatif — tanımlar, ekler, edatlar ve örnekler. Ücretsiz gramer kaynağı.',
      keywords: [
        'Rusça haller',
        'Rusça gramer halleri',
        '6 Rusça hal',
        'Rusça haller açıklaması',
        'Rusça hal sistemi',
        'Rusça haller öğren',
      ],
      h1: 'Rusça halleri: Kapsamlı rehber',
      intro:
        'Tüm 6 hal örneklerle açıklanıyor. Rusça öğreniyorsanız, muhtemelen Rusça haller kavramıyla karşılaştınız — ve kafa karıştırıcı buldunuz. Yalnız değilsiniz.\n\nRusça hal sistemi, Türkçe konuşanlar için en büyük engellerden biridir, ancak bir kez anladığınızda okuma ve konuşma dramatik şekilde kolaylaşır. Bu kapsamlı rehberde 6 Rusça halini tek tek ele alacağız, her birinin işlevini açıklayacağız, ekleri göstereceğiz ve bolca gerçek örnek vereceğiz.',
      lastUpdated: 'Mart 2026',
      whatYouLearn: [
        'Rusça hallerin ne olduğu ve neden var olduğu',
        'Anlamları, ekleri ve gerçek örnekleriyle 6 hal',
        'Hangi edatların hangi halı tetiklediği',
        'Kaçınılması gereken yaygın hatalar',
        'Hal sistemini daha hızlı ezberlemek için pratik ipuçları',
      ],
      internalLinksPosition: 'conclusion',
      internalLinks: [
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Rusça genitif: Kurallar, ekler ve 32 örnek',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Rusça akkusatif: Nesneler, canlı vs cansız',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: "Rusçada datif: 'Kime' ve 'için' nasıl söylenir",
        },
        {
          href: '/learn/articles/russian-instrumental-case',
          label: 'Rusça enstrumental: Ne zaman ve neden',
        },
        {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Rusça lokatif: Tek başına asla durmayan tek hal',
        },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
        },
      ],
      sections: [
        {
          h2: 'Rusça haller nelerdir? (Ve Rusçada neden var?)',
          content:
            '**Türkçede** kelime sırası kimin ne yaptığını söyler. "Köpek adamı ısırır" ile "Adam köpeği ısırır" aynı kelimelerle farklı anlamlar taşır.\n\n**Rusça** farklı çalışır. Rusça, kelimelerin cümledeki dilbilgisel rollerine göre eklerinin değiştiği, **çekimli** bir dildir. Bu farklı biçimlere **haller** denir. Her kelime işlevini ekinde taşıdığı için Rusça kelime sırası çok daha esnektir.\n\nÖrnek: **Собака кусает мужчину** (Köpek adamı ısırır). "Мужчину кусает собака" veya "Кусает собака мужчину" yazsanız da anlam aynı kalır — мужчину üzerindeki **-у** eki her zaman ısırılanın o olduğunu gösterir.\n\nRusçada **6 hal** vardır ve her isim, zamir, sıfat ve sayı biçimini değiştirir. Bu halleri öğrenmek **Rusça gramerin anahtarıdır**.',
        },
        {
          h2: 'Genel bakış: 6 Rusça hal tek bakışta',
          image: {
            src: '/articles/the-six-russian-cases-quick-reference.webp',
            alt: 'Altı Rusça hal hızlı referans tablosu',
            width: 1200,
            height: 630,
          },
          content: 'İşte 6 Rusça halin **hızlı bir özeti**:',
          table: {
            headers: ['Hal', 'Rusça adı', 'Ana soru', 'Ana kullanım', 'Kısa örnek'],
            rows: [
              [
                'İsim',
                'Именительный',
                'Кто? Что? (Kim? Ne?)',
                'Cümlenin öznesi',
                'Кот спит. (Kedi uyuyor.)',
              ],
              [
                'Genitif',
                'Родительный',
                'Кого? Чего? (Kimin? Neyin?)',
                'Sahiplik, yokluk, miktar',
                'Нет кота. (Kedi yok.)',
              ],
              [
                'Datif',
                'Дательный',
                'Кому? Чему? (Kime? Neye?)',
                'Dolaylı nesne, alıcı',
                'Я дал коту молоко. (Kediye süt verdim.)',
              ],
              [
                'Akkusatif',
                'Винительный',
                'Кого? Что? (Kimi? Neyi?)',
                'Doğrudan nesne, yön',
                'Я вижу кота. (Kediyi görüyorum.)',
              ],
              [
                'Enstrumental',
                'Творительный',
                'Кем? Чем? (Kimle? Neyle?)',
                'Araç, birliktelik, rol',
                'Я пишу ручкой. (Kalemle yazıyorum.)',
              ],
              [
                'Lokatif',
                'Предложный',
                'О ком? О чём? (Kim hakkında? Ne hakkında?)',
                'Yer, konu',
                'Я думаю о коте. (Kediyi düşünüyorum.)',
              ],
            ],
          },
        },
        {
          h2: '1. İsim hali (Именительный падеж)',
          content:
            '**İsim hali** Rusça bir kelimenin **temel biçimidir** — sözlükteki form. Her Rusça ismin isim halinde bir biçimi vardır. **Кто?** (Kim?) veya **Что?** (Ne?) sorularına cevap verir. İsim hali cümlenin **öznesini** belirtir.',
          table: {
            headers: ['Cinsiyet', 'Tekil eki', 'Örnek (T.)', 'Çoğul eki', 'Örnek (Ç.)'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Eril', '-Ø / -й / -ь', 'стол (masa), музей (müze)', '-ы / -и', 'столы, музеи'],
              [
                'Dişil',
                '-а / -я / -ь',
                'женщина (kadın), неделя (hafta)',
                '-ы / -и',
                'женщины, недели',
              ],
              ['Nötr', '-о / -е', 'окно (pencere), море (deniz)', '-а / -я', 'окна, моря'],
            ],
          },
          subsections: [
            {
              h3: 'İsim hali örnekleri',
              content:
                '**Иван читает книгу.** — İvan kitap okuyor. (Иван = özne → İsim hali)\n\n**Собака бежит.** — Köpek koşuyor. (Собака = özne → İsim hali)\n\n**Москва — красивый город.** — Moskova güzel bir şehirdir. (Москва = özne → İsim hali)\n\n**Önemli:** İsim hali "olmak" fiilinden sonra **yüklem** için de kullanılır (genellikle şimdiki zamanda atlanır). Örnek: **Он — врач.** (O doktordur.) — Врач isim halindedir.',
            },
          ],
        },
        {
          h2: '2. Genitif (Родительный падеж)',
          content:
            "**Genitif** isim halinden sonra en sık kullanılan hal ve günlük Rusçada en önemlilerinden biridir. **Кого?** (Kimin?) veya **Чего?** (Neyin?) sorularına cevap verir.\n\nGenitif **sahiplik**, **yokluk** ve **miktar** ifade eder. Birçok edattan sonra da gelir.\n\n- **Sahiplik:** книга студента — öğrencinin kitabı\n- **нет ile yokluk:** У меня нет времени. — Zamanım yok\n- **2, 3, 4 sayılarından sonra:** два стола, три окна\n- **5+ sayılarından sonra:** пять столов\n- **Edatlardan sonra:** без, до, из, от, у, после, для, кроме\n- **Karşılaştırma:** больше кошки — bir kediden daha büyük\n\n**Örnekler:** Это книга моего друга. — Bu arkadaşımın kitabı. У неё нет машины. — Arabası yok. Он приехал из России. — Rusya'dan geldi.",
          link: {
            href: '/learn/articles/russian-genitive-case',
            label: 'Rusça genitif: Kurallar, ekler ve 32 örnek',
          },
          table: {
            caption: 'Cinsiyete göre genitif ekleri',
            headers: ['Cinsiyet', 'Tekil', 'Örnek', 'Çoğul', 'Örnek'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Eril (sert)', '-а', 'стол → стола', '-ов', 'стол → столов'],
              ['Eril (yumuşak)', '-я / -а', 'музей → музея', '-ев / -ей', 'музей → музеев'],
              ['Dişil (-а/-я)', '-ы / -и', 'женщина → женщины', '-Ø / -ь', 'женщин'],
              ['Dişil (-ь)', '-и', 'ночь → ночи', '-ей', 'ночей'],
              ['Nötr (-о)', '-а', 'окно → окна', '-Ø', 'окон'],
              ['Nötr (-е)', '-я', 'море → моря', '-ей', 'морей'],
            ],
          },
        },
        {
          h2: '3. Datif (Дательный падеж)',
          content:
            '**Datif** **dolaylı nesneyi** belirtir — eylemin alıcısı. **Кому?** (Kime?) veya **Чему?** (Neye?) sorularına cevap verir. **"Verme" hali** olarak düşünülebilir.',
          link: {
            href: '/learn/articles/russian-dative-case',
            label: 'Rusça datif: Kurallar, ekler, нравиться ve 30 örnek',
          },
          subsections: [
            {
              h3: 'Datifin ana kullanımları',
              content:
                '- **Dolaylı nesne:** Я дал книгу другу. — Arkadaşa kitap verdim.\n- **İletişim fiilleri:** говорить, писать, звонить, помогать (konuşmak, yazmak, aramak, yardım etmek)\n- **Yaş ifadesi:** Мне двадцать лет. — Yirmi yaşındayım.\n- **"X, Y\'yi beğeniyor" yapısı (нравиться):** Мне нравится музыка. — Müziği seviyorum.\n- **Edatlardan sonra:** к, по, благодаря, вопреки',
            },
          ],
          table: {
            headers: ['Cinsiyet', 'Tekil', 'Örnek', 'Çoğul', 'Örnek'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Eril (sert)', '-у', 'брат → брату', '-ам', 'братьям'],
              ['Eril (yumuşak)', '-ю', 'гений → гению', '-ям', 'гениям'],
              ['Dişil (-а/-я)', '-е / -и', 'сестра → сестре', '-ам/-ям', 'сёстрам'],
              ['Dişil (-ь)', '-и', 'ночь → ночи', '-ям', 'ночам'],
              ['Nötr (-о)', '-у', 'окно → окну', '-ам', 'окнам'],
              ['Nötr (-е)', '-ю', 'море → морю', '-ям', 'морям'],
            ],
          },
        },
        {
          h2: '4. Akkusatif (Винительный падеж)',
          content:
            '**Akkusatif** **doğrudan nesneyi** belirtir — eylemden doğrudan etkilenen kişi veya şey. **Кого?** (Kimi?) veya **Что?** (Neyi?) sorularına cevap verir. **Yön/hareket** için de kullanılır.',
          link: {
            href: '/learn/articles/russian-accusative-case',
            label: 'Rusça akkusatif: Nesneler, canlı vs cansız',
          },
          subsections: [
            {
              h3: 'Canlı vs cansız',
              content:
                'Akkusatifte: **cansız** isimler (er./nötr.) = İsim hali formu; **canlı** eril isimler = Genitif formu; **dişil** isimler: -а → -у (veya -я → -ю).\n\n**Yaygın hata:** Я вижу стол. (Masayı görüyorum) — стол cansız, değişiklik yok. Я вижу студента. (Öğrenciyi görüyorum) — студент canlı, akkusatif = genitif formu.',
            },
            {
              h3: 'Akkusatif ve hareket',
              content:
                '**в** ve **на** ile hedefe hareketten sonra akkusatif kullanılır — **lokatif** (yer) ile zıt.\n\n- **Я иду в школу.** — Okula gidiyorum. (Yön → Akkusatif)\n- **Я нахожусь в школе.** — Okuldayım. (Yer → Lokatif)',
            },
          ],
          table: {
            headers: ['Cinsiyet / Canlılık', 'İsim hali', 'Akkusatif', 'Örnek'],
            boldColumnIndices: [2],
            rows: [
              ['Eril cansız', 'стол', 'стол (değişiklik yok)', 'Я вижу стол.'],
              ['Eril canlı', 'студент', 'студента (-а)', 'Я вижу студента.'],
              ['Dişil (-а)', 'книга', 'книгу (-у)', 'Я читаю книгу.'],
              ['Dişil (-я)', 'неделя', 'неделю (-ю)', 'Всю неделю.'],
              ['Nötr', 'окно', 'окно (değişiklik yok)', 'Я вижу окно.'],
              ['Çoğul cansız', 'столы', 'столы (değişiklik yok)', 'Я вижу столы.'],
              ['Çoğul canlı', 'студенты', 'студентов (Gen. Ç.)', 'Я вижу студентов.'],
            ],
          },
        },
        {
          h2: '5. Enstrumental (Творительный падеж)',
          content:
            '**Enstrumental** eylemin **aracını veya aletini** belirtir. **Кем?** (Kimle?) veya **Чем?** (Neyle?) sorularına cevap verir. Karmaşık adına rağmen ekler **oldukça tahmin edilebilir**.',
          link: {
            href: '/learn/articles/russian-instrumental-case',
            label: 'Rusça enstrumental: Ne zaman ve neden',
          },
          subsections: [
            {
              h3: 'Enstrumentalin ana kullanımları',
              content:
                '- **Araç:** писать ручкой — kalemle yazmak.\n- **Birliktelik (с ile):** гулять с другом — arkadaşla yürüyüş yapmak.\n- **Meslek/Rol (быть/работать sonrası):** быть врачом — doktor olmak; работать учителем — öğretmen olarak çalışmak.\n- **Zaman ifadeleri:** утром, вечером, летом.\n- **Edatlardan sonra:** с, за, над, под, перед, между, рядом с',
            },
          ],
          table: {
            headers: ['Cinsiyet', 'Tekil', 'Örnek', 'Çoğul', 'Örnek'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Eril (sert)', '-ом', 'стол → столом', '-ами', 'столами'],
              ['Eril (yumuşak)', '-ем / -ём', 'гений → гением', '-ями', 'гениями'],
              ['Dişil (-а)', '-ой / -ей', 'сестра → сестрой', '-ами', 'сёстрами'],
              ['Dişil (-ь)', '-ью', 'ночь → ночью', '-ями', 'ночами'],
              ['Nötr (-о)', '-ом', 'окно → окном', '-ами', 'окнами'],
              ['Nötr (-е)', '-ем', 'море → морем', '-ями', 'морями'],
            ],
          },
        },
        {
          h2: '6. Lokatif (Предложный падеж)',
          content:
            '**Lokatif** **asla edatsız** kullanılmayan tek haldir. **О ком?** (Kim hakkında?) veya **О чём?** (Ne hakkında?) sorularına cevap verir ve **yer** için de kullanılır.',
          link: {
            href: '/learn/articles/russian-prepositional-case',
            label: 'Rusça lokatif: Tek başına asla durmayan tek hal',
          },
          subsections: [
            {
              h3: 'Lokatifin ana kullanımları',
              content:
                "- **в ve на ile yer:** Я живу в России. — Rusya'da yaşıyorum.\n- **о/об ile konu:** Мы говорим о погоде. — Hava hakkında konuşuyoruz.\n- **на ile ulaşım:** ехать на поезде — trenle gitmek.\n- **Edatlardan sonra:** в, на (yer), о/об, при",
            },
            {
              h3: 'в ve на ile lokatif vs akkusatif',
              content:
                'Önemli ayrım:\n\n- **Yön (hareket) → Akkusatif:** Я иду в магазин. — Mağazaya gidiyorum.\n- **Yer (statik) → Lokatif:** Я нахожусь в магазине. — Mağazadayım.',
            },
          ],
          table: {
            headers: ['Cinsiyet', 'Tekil eki', 'Örnek', 'Çoğul eki', 'Örnek'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Eril (sert)', '-е', 'стол → столе (на столе)', '-ах', 'столах'],
              ['Eril (yumuşak)', '-е / -и', 'музей → музее', '-ях', 'музеях'],
              ['Dişil (-а/-я)', '-е / -и', 'страна → стране (в стране)', '-ах/-ях', 'странах'],
              ['Dişil (-ь)', '-и', 'ночь → ночи', '-ях', 'ночах'],
              ['Nötr (-о)', '-е', 'окно → окне (в окне)', '-ах', 'окнах'],
              ['Nötr (-е)', '-е', 'море → море (в море)', '-ях', 'морях'],
            ],
          },
        },
        {
          h2: 'Rusça hal ekleri: Referans tablosu',
          content:
            'İşte eril, dişil ve nötr isimlerin tekil hal eklerinin **özet tablosu**. **Kopya kağıdı** olarak kullanın.',
          table: {
            caption: 'Hale ve cinsiyete göre tekil ekleri',
            headers: [
              'Hal',
              'Er. sert',
              'Er. yumuşak',
              'Diş. (-а)',
              'Diş. (-ь)',
              'Nötr. (-о)',
              'Nötr. (-е)',
            ],
            boldColumnIndices: [1, 2, 3, 4, 5, 6],
            rows: [
              ['İsim', '-Ø', '-й/-ь', '-а', '-ь', '-о', '-е'],
              ['Genitif', '-а', '-я', '-ы/-и', '-и', '-а', '-я'],
              ['Datif', '-у', '-ю', '-е', '-и', '-у', '-ю'],
              ['Akkusatif (cansız)', '-Ø', '-й/-ь', '-у', '-ь', '-о', '-е'],
              ['Akkusatif (canlı)', '-а', '-я', '-у', '-ь', '-о', '-е'],
              ['Enstrumental', '-ом', '-ем/-ём', '-ой/-ей', '-ью', '-ом', '-ем'],
              ['Lokatif', '-е', '-е/-и', '-е/-и', '-и', '-е', '-е'],
            ],
          },
        },
        {
          h2: 'Rusça edatlar ve halleri',
          content:
            'Rusça halleri öğrenirken **pratik bir nokta**: Hangi edat hangi halı gerektirir? İşte bir özet:',
          link: {
            href: '/learn/articles/russian-prepositions-and-cases',
            label: 'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
          },
          table: {
            headers: ['Gerekli hal', 'Edatlar', 'Anlam', 'Örnek'],
            rows: [
              ['Genitif', 'без', 'olmadan', 'без сахара — şekersiz'],
              ['Genitif', 'до', 'kadar / önce', 'до обеда — öğle yemeğinden önce'],
              ['Genitif', 'из / с', 'içinden / üzerinden', "из России — Rusya'dan"],
              ['Genitif', 'у', 'yanında / yakınında', 'у меня — bende var'],
              ['Genitif', 'от', '...den (kişi)', 'письмо от мамы — anneden mektup'],
              ['Genitif', 'после', 'sonra', 'после урока — dersten sonra'],
              ['Genitif', 'для', 'için', 'для тебя — senin için'],
              ['Genitif', 'кроме', 'hariç', 'все кроме него — o hariç herkes'],
              ['Datif', 'к', '...e (kişi)', 'к врачу — doktora'],
              ['Datif', 'по', 'boyunca / göre', 'по улице — sokak boyunca'],
              ['Akkusatif', 'в / на', 'içine / üzerine (yön)', 'в школу — okula'],
              ['Akkusatif', 'за', 'arkasına (hareket) / için', 'за стол — masanın arkasına'],
              ['Akkusatif', 'через', 'içinden / içinde', 'через час — bir saat sonra'],
              ['Enstrumental', 'с', 'ile', 'с другом — arkadaşla'],
              ['Enstrumental', 'за / перед', 'arkasında / önünde', 'за домом — evin arkasında'],
              ['Enstrumental', 'над / под', 'üstünde / altında', 'над столом — masanın üstünde'],
              ['Enstrumental', 'между', 'arasında', 'между нами — aramızda'],
              ['Lokatif', 'в / на', 'içinde / üzerinde (yer)', "в Москве — Moskova'da"],
              ['Lokatif', 'о / об', 'hakkında', 'о работе — iş hakkında'],
              ['Lokatif', 'при', 'altında / varlığında', 'при Сталине — Stalin döneminde'],
            ],
          },
        },
        {
          h2: 'Rusça halleri daha hızlı öğrenme ipuçları',
          subsections: [
            {
              h3: '1. Tek seferde bir hal öğrenin',
              content:
                '6 halin hepsini bir anda öğrenmeye çalışmayın. **İsim hali** (sözlük formu) ile başlayın, sonra **akkusatif** (doğrudan nesneler), ardından **genitif** (sahiplik, yokluk). Önceki hale hakim olmadan sonrakine geçmeyin.',
            },
            {
              h3: '2. Soru numarası numarasını kullanın',
              content:
                'Her halin bir **sorusu** vardır (Кто? Что? — Кого? Чего? — Кому? vb.). Emin değilseniz sorun: Bu isim hangi soruyu cevaplıyor? Bu etkili bir **kısayoldur**.',
            },
            {
              h3: '3. Kalıpları tanıyın, tek tek ek ezberlemeyin',
              content:
                "**Kalıplar** arayın. Datif tekil genellikle Er./Nötr'de **-у** veya **-ю** ile, Diş'te -е veya -и ile biter. Bu tür kalıplar öğrenmeyi hızlandırır.",
            },
            {
              h3: '4. Edatları her zaman haliyle öğrenin',
              content:
                'Her edatı baştan **haliyle** öğrenin: без + Genitif, sadece "без = olmadan" değil. Bu daha sonra kafa karışıklığını önler.',
            },
            {
              h3: '5. Gerçek cümlelerle pratik yapın',
              content:
                'Soyut alıştırmaların yeri var ama **en hızlı yol** gerçek Rusça: okumak, dinlemek ve her çekimli formda hal tanımlamak. Zamanla **dil sezgisi** gelişir.',
            },
            {
              h3: '6. Aralıklı tekrar kullanın',
              content:
                'Rusça hal ekleri **Aralıklı Tekrar (SRS)** için idealdir. Rusça gramer için özel uygulamalar sizi sorgulayabilir ve zayıf noktaları hedefleyebilir.',
            },
          ],
        },
        {
          h2: 'Rusça hallerde en yaygın hatalar',
          content: 'Bu **tipik hatalardan** kaçının:',
          table: {
            headers: ['Hata', 'Yanlış', 'Doğru', 'Açıklama'],
            boldColumnIndices: [2],
            rows: [
              [
                'Doğrudan nesne için isim hali',
                'Я вижу кот.',
                'Я вижу кота.',
                'Doğrudan nesneler akkusatifte olur',
              ],
              [
                'Akkusatifte canlılık kuralını unutmak',
                'Я вижу студент.',
                'Я вижу студента.',
                'Canlı eril isimler = akkusatifte genitif formu',
              ],
              [
                'в/на yön vs yer karıştırmak',
                'Я в школу сейчас.',
                'Я в школе сейчас.',
                'Yer = Lokatif; Yön = Akkusatif',
              ],
              [
                'Sahiplikte datif yerine genitif',
                'Книга другу.',
                'Книга друга.',
                'Sahiplik genitifte olur',
              ],
            ],
          },
        },
      ],
      conclusion:
        'Rusça hal sistemi ilk bakışta göründüğü kadar korkutucu değildir. Mantıklı bir sistemdir: 6 halin her birinin özel bir rolü vardır, tutarlı ek kalıpları takip eder ve belirli soru kelimelerine cevap verir.',
      conclusionIntro:
        'Rusça hal sistemi ilk bakışta göründüğü kadar korkutucu değildir. Mantıklı bir sistemdir. Kısaca:',
      conclusionBullets: [
        'İsim — özne; temel form',
        'Genitif — sahiplik, yokluk, miktar; en çok yönlü hal',
        'Datif — dolaylı nesneler, alıcılar, yaş ifadeleri',
        'Akkusatif — doğrudan nesneler; в/на ile yön',
        'Enstrumental — araç, birliktelik, roller, zaman ifadeleri',
        'Lokatif — yer ve konu; her zaman edatla',
      ],
      conclusionOutro:
        'Rusça halleri öğrenmenin anahtarı düzenli, yapılandırılmış pratik yapmaktır. Hal kalıplarını tek tek öğrenin, edatları halleriyle pratik edin ve bolca gerçek Rusça ile temas kurun.\n\nHer hali detaylı keşfetmek için aşağıdaki bağlantıları kullanın:',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusçada kaç hal vardır?',
          answer:
            'Rusçada 6 hal vardır: İsim, genitif, datif, akkusatif, enstrumental ve lokatif. Bazı dilbilimciler ek alt-haller önerir (ör. arkaik Rusçada lokatif veya vokatif), standart 6 haldir.',
        },
        {
          question: 'En zor Rusça hal hangisi?',
          answer:
            'Çoğu öğrenci genitif çoğulu en zor bulur çünkü birkaç rekabet eden form ve istisna vardır. Enstrumental de genellikle kafa karıştırıcı bulunur. Tutarlı pratikle 6 hal de öğrenilebilir.',
        },
        {
          question: 'Sadece Rusçada mı hal var?',
          answer:
            'Hayır. Birçok dilde haller vardır: Almanca (4), Fince (15+), Macarca (18+), Latince (6), Lehçe (7). Rusça 6 haliyle ortada yer alır.',
        },
        {
          question: 'Rusça sıfatlar da çekimlenir mi?',
          answer:
            'Evet. Rusça sıfatlar isimle cinsiyet, sayı ve halde uyuşmalıdır. Buna sıfat çekimi denir. İyi haber: ekler oldukça düzenlidir.',
        },
        {
          question: 'Halleri bilmeden Rusça konuşulabilir mi?',
          answer:
            'Çok düşük seviyede evet, ama sürekli gramer hatalarıyla. Ruslar genelde ne demek istediğinizi anlar ama doğal gelmez. Gerçek akıcılık için haller zorunludur.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Rusça halleri: Kapsamlı rehber',
            description:
              '6 Rusça hal, çekim kuralları, edatlar, örnekler ve ipuçlarıyla kapsamlı rehber.',
            educationalLevel: 'beginner',
            inLanguage: 'tr',
            teaches: 'Rusça haller, Rusça gramer, Rusça çekim',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
          },
          {
            '@type': 'Article',
            headline: 'Rusça halleri: Kapsamlı rehber',
            description:
              '6 Rusça hal: İsim, genitif, datif, akkusatif, enstrumental, lokatif — hepsini öğrenin.',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
            },
            keywords:
              'Rusça haller, Rusça gramer halleri, 6 Rusça hal, Rusça haller açıklaması, Rusça haller öğren',
          },
        ],
      },
    },
    pl_pl: {
      slug: 'russian-cases-complete-guide',
      title: 'Kompletny przewodnik po rosyjskich przypadkach | Wszystkie 6 przypadków wyjaśnione',
      metaTitle:
        'Rosyjskie przypadki: Kompletny przewodnik z przykładami | Russian Cases with Anna',
      metaDescription:
        'Opanuj wszystkie 6 rosyjskich przypadków: mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik — definicje, końcówki, przyimki i przykłady. Darmowy zasób gramatyczny.',
      keywords: [
        'rosyjskie przypadki',
        'gramatyka rosyjska przypadki',
        '6 rosyjskich przypadków',
        'rosyjskie przypadki wyjaśnione',
        'system przypadków rosyjskich',
        'nauka rosyjskich przypadków',
      ],
      h1: 'Kompletny przewodnik po rosyjskich przypadkach',
      intro:
        'Wszystkie 6 przypadków wyjaśnione z przykładami. Jeśli uczysz się rosyjskiego, niemal na pewno zetknąłeś się z koncepcją rosyjskich przypadków — i uznałeś je za bardzo mylące. Nie jesteś sam.\n\nSystem przypadków rosyjskich to jedna z największych przeszkód dla osób anglojęzycznych, ale gdy go zrozumiesz, czytanie i mówienie po rosyjsku stanie się znacznie łatwiejsze. W tym kompletnym przewodniku omówimy wszystkie 6 rosyjskich przypadków jeden po drugim, wyjaśnimy funkcję każdego z nich, pokażemy końcówki i damy wiele prawdziwych przykładów.',
      lastUpdated: 'Marzec 2026',
      whatYouLearn: [
        'Czym są rosyjskie przypadki i dlaczego istnieją',
        'Wszystkie 6 przypadków z ich znaczeniami, końcówkami i prawdziwymi przykładami',
        'Które przyimki wymagają którego przypadku',
        'Najczęstsze błędy, których należy unikać',
        'Praktyczne wskazówki, jak szybciej zapamiętać system przypadków',
      ],
      internalLinksPosition: 'conclusion',
      internalLinks: [
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Rosyjski dopełniacz: zasady, końcówki i 30+ przykładów',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Rosyjski biernik: dopełnienia bliższe, żywotny vs nieżywotny i czasowniki ruchu',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rosyjski celownik: jak powiedzieć „do" i „dla" po rosyjsku',
        },
        {
          href: '/learn/articles/russian-instrumental-case',
          label: 'Rosyjski narzędnik: kiedy go używać i dlaczego jest prostszy niż myślisz',
        },
        {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Rosyjski miejscownik: jedyny przypadek, który nigdy nie stoi sam',
        },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Rosyjskie przyimki i przypadki: który przyimek wymaga którego przypadku?',
        },
      ],
      sections: [
        {
          h2: 'Czym są rosyjskie przypadki? (I dlaczego rosyjski je ma?)',
          content:
            'W **języku angielskim** kolejność słów wskazuje, kto co robi. „The dog bites the man" znaczy coś zupełnie innego niż „The man bites the dog" — mimo że używa tych samych słów.\n\n**Rosyjski** działa inaczej. Rosyjski jest językiem o **silnej fleksji**, co oznacza, że końcówki słów zmieniają się w zależności od ich roli gramatycznej w zdaniu. Te różne formy nazywamy **przypadkami**. Ponieważ każde słowo zawiera swoją funkcję gramatyczną w końcówce, szyk wyrazów w rosyjskim jest znacznie bardziej elastyczny niż w angielskim.\n\nPrzykład: **Собака кусает мужчину** (Pies gryzie mężczyznę). Bez względu na to, czy napiszesz „Мужчину кусает собака" czy „Кусает собака мужчину", znaczenie pozostaje takie samo — końcówka **-у** na мужчину zawsze sygnalizuje, że to on jest gryziony.\n\nRosyjski ma **6 przypadków**, a każde rzeczownik, zaimek, przymiotnik i liczebnik zmienia formę w zależności od przypadku. Nauka tych przypadków to **klucz do opanowania rosyjskiej gramatyki**.',
        },
        {
          h2: 'Przegląd: 6 rosyjskich przypadków w skrócie',
          image: {
            src: '/articles/the-six-russian-cases-quick-reference.webp',
            alt: 'Szybka ściąga z sześciu rosyjskich przypadków',
            width: 1200,
            height: 630,
          },
          content: 'Oto **szybki przegląd** wszystkich 6 rosyjskich przypadków:',
          table: {
            headers: [
              'Przypadek',
              'Nazwa rosyjska',
              'Pytanie kluczowe',
              'Główne użycie',
              'Krótki przykład',
            ],
            rows: [
              [
                'Mianownik',
                'Именительный',
                'Кто? Что? (Kto? Co?)',
                'Podmiot zdania',
                'Кот спит. (Kot śpi.)',
              ],
              [
                'Dopełniacz',
                'Родительный',
                'Кого? Чего? (Kogo? Czego?)',
                'Posiadanie, brak, ilość',
                'Нет кота. (Nie ma kota.)',
              ],
              [
                'Celownik',
                'Дательный',
                'Кому? Чему? (Komu? Czemu?)',
                'Dopełnienie dalsze, odbiorca',
                'Я дал коту молоко. (Dałem kotu mleko.)',
              ],
              [
                'Biernik',
                'Винительный',
                'Кого? Что? (Kogo? Co?)',
                'Dopełnienie bliższe, kierunek',
                'Я вижу кота. (Widzę kota.)',
              ],
              [
                'Narzędnik',
                'Творительный',
                'Кем? Чем? (Kim? Czym?)',
                'Środek, towarzystwo, rola',
                'Я пишу ручкой. (Piszę piórem.)',
              ],
              [
                'Miejscownik',
                'Предложный',
                'О ком? О чём? (O kim? O czym?)',
                'Miejsce, temat',
                'Я думаю о коте. (Myślę o kocie.)',
              ],
            ],
          },
        },
        {
          h2: '1. Przypadek mianownikowy (Именительный падеж)',
          content:
            '**Mianownik** to **forma podstawowa** rosyjskiego słowa — forma, którą znajdziesz w słowniku. Każdy rosyjski rzeczownik ma formę mianownika, odpowiada na pytania **Кто?** (Kto?) lub **Что?** (Co?). Mianownik służy do oznaczania **podmiotu** zdania: osoby lub rzeczy wykonującej czynność.',
          table: {
            headers: [
              'Rodzaj',
              'Końcówka l. poj.',
              'Przykład (l. poj.)',
              'Końcówka l. mn.',
              'Przykład (l. mn.)',
            ],
            boldColumnIndices: [1, 3],
            rows: [
              ['Męski', '-Ø / -й / -ь', 'стол (stół), музей (muzeum)', '-ы / -и', 'столы, музеи'],
              [
                'Żeński',
                '-а / -я / -ь',
                'женщина (kobieta), неделя (tydzień)',
                '-ы / -и / -и',
                'женщины, недели',
              ],
              ['Nijaki', '-о / -е', 'окно (okno), море (morze)', '-а / -я', 'окна, моря'],
            ],
          },
          subsections: [
            {
              h3: 'Przykłady mianownika',
              content:
                '**Иван читает книгу.** — Iwan czyta książkę. (Иван to podmiot → mianownik)\n\n**Собака бежит.** — Pies biegnie. (Собака to podmiot → mianownik)\n\n**Москва — красивый город.** — Moskwa to piękne miasto. (Москва to podmiot → mianownik)\n\n**Ważne:** Mianownik służy również do **orzecznika** po czasowniku „być" (który zwykle jest pomijany w czasie teraźniejszym w rosyjskim). Przykład: **Он — врач.** (On jest lekarzem.) — Врач jest w mianowniku.',
            },
          ],
        },
        {
          h2: '2. Przypadek dopełniacza (Родительный падеж)',
          content:
            '**Dopełniacz** to drugi po mianowniku najczęściej używany przypadek — i jeden z najważniejszych do opanowania w codziennym rosyjskim. Odpowiada na pytania **Кого?** (Kogo?) lub **Чего?** (Czego?).\n\nDopełniacz wyraża **posiadanie** (jak angielskie „of" lub apostrof-s), **brak** i **ilość**. Wymagany jest także po wielu częstych rosyjskich przyimkach.\n\n- **Posiadanie:** книга студента — książka studenta\n- **Brak z нет:** У меня нет времени. — Nie mam czasu\n- **Po liczebnikach 2, 3, 4:** два стола, три окна\n- **Po liczebnikach 5+:** пять столов\n- **Po przyimkach:** без, до, из, от, у, после, для, кроме\n- **Porównanie:** больше кошки — większy niż kot\n\n**Przykłady:** Это книга моего друга. — To książka mojego przyjaciela. У неё нет машины. — Ona nie ma samochodu. Он приехал из России. — Przyjechał z Rosji.',
          link: {
            href: '/learn/articles/russian-genitive-case',
            label: 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
          },
          table: {
            caption: 'Końcówki dopełniacza według rodzaju',
            headers: ['Rodzaj', 'Liczba pojedyncza', 'Przykład', 'Liczba mnoga', 'Przykład'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Męski (twardy)', '-а', 'стол → стола', '-ов', 'стол → столов'],
              ['Męski (miękki)', '-я / -а', 'музей → музея', '-ев / -ей', 'музей → музеев'],
              ['Żeński (-а/-я)', '-ы / -и', 'женщина → женщины', '-Ø / -ь', 'женщин'],
              ['Żeński (-ь)', '-и', 'ночь → ночи', '-ей', 'ночей'],
              ['Nijaki (-о)', '-а', 'окно → окна', '-Ø', 'окон'],
              ['Nijaki (-е)', '-я', 'море → моря', '-ей', 'морей'],
            ],
          },
        },
        {
          h2: '3. Przypadek celownika (Дательный падеж)',
          content:
            '**Celownik** oznacza **dopełnienie dalsze** zdania — odbiorcę czynności. Odpowiada na pytania **Кому?** (Komu?) lub **Чему?** (Czemu?). Można go uważać za przypadek **„dawania"**: gdy coś się komuś daje, mówi, pokazuje lub wysyła, ta osoba występuje w celowniku.',
          link: {
            href: '/learn/articles/russian-dative-case',
            label: 'Rosyjski celownik: zasady, końcówki, нравиться i 30 przykładów',
          },
          subsections: [
            {
              h3: 'Główne użycia celownika',
              content:
                '- **Dopełnienie dalsze:** Я дал книгу другу. — Dałem książkę przyjacielowi.\n- **Czasowniki komunikacji:** говорить, писать, звонить, помогать (mówić/pisać/dzwonić/pomagać komuś)\n- **Wyrażanie wieku:** Мне двадцать лет. — Mam dwadzieścia lat.\n- **Konstrukcja „X podoba się Y" (нравиться):** Мне нравится музыка. — Podoba mi się muzyka.\n- **Po przyimkach:** к, по, благодаря, вопреки',
            },
          ],
          table: {
            headers: ['Rodzaj', 'Liczba pojedyncza', 'Przykład', 'Liczba mnoga', 'Przykład'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Męski (twardy)', '-у', 'брат → брату', '-ам', 'братьям'],
              ['Męski (miękki)', '-ю', 'гений → гению', '-ям', 'гениям'],
              ['Żeński (-а/-я)', '-е / -и', 'сестра → сестре', '-ам/-ям', 'сёстрам'],
              ['Żeński (-ь)', '-и', 'ночь → ночи', '-ям', 'ночам'],
              ['Nijaki (-о)', '-у', 'окно → окну', '-ам', 'окнам'],
              ['Nijaki (-е)', '-ю', 'море → морю', '-ям', 'морям'],
            ],
          },
        },
        {
          h2: '4. Przypadek biernika (Винительный падеж)',
          content:
            '**Biernik** oznacza **dopełnienie bliższe** zdania — osobę lub rzecz bezpośrednio dotkniętą przez czynność. Odpowiada na pytania **Кого?** (Kogo?) lub **Что?** (Co?). Służy także do wyrażania **ruchu i kierunku** (idąc do miejsca), co czyni go jednym z najczęściej używanych przypadków w codziennej mowie rosyjskiej.',
          link: {
            href: '/learn/articles/russian-accusative-case',
            label: 'Rosyjski biernik: dopełnienia bliższe, żywotny vs nieżywotny',
          },
          subsections: [
            {
              h3: 'Rozróżnienie żywotny vs nieżywotny',
              content:
                'Biernik ma kluczowe rozróżnienie nieistniejące w angielskim: **rzeczowniki żywotne** (ludzie, zwierzęta) zachowują się inaczej niż **rzeczowniki nieżywotne** (przedmioty, pojęcia).\n\n- **Nieżywotne rzeczowniki męskie i nijakie:** ta sama końcówka co w mianowniku\n- **Żywotne rzeczowniki męskie:** ta sama końcówka co w dopełniaczu\n- **Rzeczowniki żeńskie:** -а → -у (lub -я → -ю) niezależnie od żywotności\n\n**Częsty błąd:** Я вижу стол. (Widzę stół) — стол jest nieżywotny → brak zmiany. Я вижу студента. (Widzę studenta) — студент jest żywotny → biernik = forma dopełniacza.',
            },
            {
              h3: 'Biernik i ruch',
              content:
                'Biernik jest używany po **в** (do, do wnętrza) i **на** (na, na powierzchnię) przy wyrażaniu ruchu w kierunku celu — w przeciwieństwie do **miejscownika**, który wyraża lokalizację.\n\n- **Я иду в школу.** — Idę do szkoły. (kierunek → biernik)\n- **Я нахожусь в школе.** — Jestem w szkole. (lokalizacja → miejscownik)',
            },
          ],
          table: {
            headers: ['Rodzaj / Żywotność', 'Mianownik', 'Biernik', 'Przykład'],
            boldColumnIndices: [2],
            rows: [
              ['Męski nieżywotny', 'стол', 'стол (bez zmiany)', 'Я вижу стол.'],
              ['Męski żywotny', 'студент', 'студента (-а)', 'Я вижу студента.'],
              ['Żeński (-а)', 'книга', 'книгу (-у)', 'Я читаю книгу.'],
              ['Żeński (-я)', 'неделя', 'неделю (-ю)', 'Всю неделю.'],
              ['Nijaki', 'окно', 'окно (bez zmiany)', 'Я вижу окно.'],
              ['Liczba mnoga nieżywotna', 'столы', 'столы (bez zmiany)', 'Я вижу столы.'],
              ['Liczba mnoga żywotna', 'студенты', 'студентов (dop. l.mn.)', 'Я вижу студентов.'],
            ],
          },
        },
        {
          h2: '5. Przypadek narzędnika (Творительный падеж)',
          content:
            '**Narzędnik** wskazuje **środek lub narzędzie**, za pomocą którego wykonywana jest czynność. Odpowiada na pytania **Кем?** (Kim?) lub **Чем?** (Czym?). Mimo przerażająco brzmiącej nazwy narzędnik ma dość **przewidywalne końcówki** — a gdy je opanujesz, jest jednym z łatwiejszych przypadków w użyciu.',
          link: {
            href: '/learn/articles/russian-instrumental-case',
            label: 'Rosyjski narzędnik: kiedy go używać i dlaczego',
          },
          subsections: [
            {
              h3: 'Główne użycia narzędnika',
              content:
                '- **Narzędzie lub środek:** писать ручкой — pisać piórem.\n- **Towarzystwo (z с):** гулять с другом — spacerować z przyjacielem.\n- **Zawód lub rola (po быть/работать):** быть врачом — być lekarzem; работать учителем — pracować jako nauczyciel.\n- **Wyrażenia czasowe:** утром — rano; вечером — wieczorem; летом — latem.\n- **Po przyimkach:** с, за, над, под, перед, между, рядом с',
            },
          ],
          table: {
            headers: ['Rodzaj', 'Liczba pojedyncza', 'Przykład', 'Liczba mnoga', 'Przykład'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Męski (twardy)', '-ом', 'стол → столом', '-ами', 'столами'],
              ['Męski (miękki)', '-ем / -ём', 'гений → гением', '-ями', 'гениями'],
              ['Żeński (-а)', '-ой / -ей', 'сестра → сестрой', '-ами', 'сёстрами'],
              ['Żeński (-ь)', '-ью', 'ночь → ночью', '-ями', 'ночами'],
              ['Nijaki (-о)', '-ом', 'окно → окном', '-ами', 'окнами'],
              ['Nijaki (-е)', '-ем', 'море → морем', '-ями', 'морями'],
            ],
          },
        },
        {
          h2: '6. Przypadek miejscownikowy (Предложный падеж)',
          content:
            '**Miejscownik** jest wyjątkowy spośród 6 rosyjskich przypadków: to **jedyny przypadek, który NIGDY nie występuje bez przyimka**. Zawsze jest nim wymuszony. Odpowiada na **О ком?** (O kim?) lub **О чём?** (O czym?) i służy także do wyrażania **lokalizacji**. Ma najbardziej regularne i przewidywalne końcówki, co czyni go świetnym punktem wyjścia dla początkujących.',
          link: {
            href: '/learn/articles/russian-prepositional-case',
            label: 'Rosyjski miejscownik: jedyny przypadek, który nigdy nie stoi sam',
          },
          subsections: [
            {
              h3: 'Główne użycia miejscownika',
              content:
                '- **Lokalizacja z в i на:** Я живу в России. — Mieszkam w Rosji.\n- **Temat z о/об:** Мы говорим о погоде. — Mówimy o pogodzie.\n- **Środek transportu z на:** ехать на поезде — jechać pociągiem.\n- **Po przyimkach:** в, на (lokalizacja), о/об, при',
            },
            {
              h3: 'Miejscownik vs biernik z в i на',
              content:
                'To jedno z **najważniejszych rozróżnień** w rosyjskiej gramatyce:\n\n- **Kierunek (ruch w stronę) → Biernik:** Я иду в магазин. — Idę do sklepu.\n- **Lokalizacja (pozycja statyczna) → Miejscownik:** Я нахожусь в магазине. — Jestem w sklepie.',
            },
          ],
          table: {
            headers: ['Rodzaj', 'Końcówka l. poj.', 'Przykład', 'Końcówka l. mn.', 'Przykład'],
            boldColumnIndices: [1, 3],
            rows: [
              ['Męski (twardy)', '-е', 'стол → столе (на столе)', '-ах', 'столах'],
              ['Męski (miękki)', '-е / -и', 'музей → музее', '-ях', 'музеях'],
              ['Żeński (-а/-я)', '-е / -и', 'страна → стране (в стране)', '-ах/-ях', 'странах'],
              ['Żeński (-ь)', '-и', 'ночь → ночи', '-ях', 'ночах'],
              ['Nijaki (-о)', '-е', 'окно → окне (в окне)', '-ах', 'окнах'],
              ['Nijaki (-е)', '-е', 'море → море (в море)', '-ях', 'морях'],
            ],
          },
        },
        {
          h2: 'Rosyjskie końcówki przypadków: tabela referencyjna',
          content:
            'Oto **skonsolidowany przegląd** końcówek przypadków dla rzeczowników męskich, żeńskich i nijakich w liczbie pojedynczej. Użyj tego jako **ściągi** przy nauce rosyjskich deklinacji.',
          table: {
            caption: 'Końcówki rzeczowników w liczbie pojedynczej według przypadku i rodzaju',
            headers: [
              'Przypadek',
              'M. twardy',
              'M. miękki',
              'Ż. (-а)',
              'Ż. (-ь)',
              'N. (-о)',
              'N. (-е)',
            ],
            boldColumnIndices: [1, 2, 3, 4, 5, 6],
            rows: [
              ['Mianownik', '-Ø', '-й/-ь', '-а', '-ь', '-о', '-е'],
              ['Dopełniacz', '-а', '-я', '-ы/-и', '-и', '-а', '-я'],
              ['Celownik', '-у', '-ю', '-е', '-и', '-у', '-ю'],
              ['Biernik (nieżyw.)', '-Ø', '-й/-ь', '-у', '-ь', '-о', '-е'],
              ['Biernik (żyw.)', '-а', '-я', '-у', '-ь', '-о', '-е'],
              ['Narzędnik', '-ом', '-ем/-ём', '-ой/-ей', '-ью', '-ом', '-ем'],
              ['Miejscownik', '-е', '-е/-и', '-е/-и', '-и', '-е', '-е'],
            ],
          },
        },
        {
          h2: 'Rosyjskie przyimki i ich przypadki',
          content:
            'Jednym z najbardziej **praktycznych aspektów** nauki rosyjskich przypadków jest zrozumienie, który przyimek wymaga którego przypadku. Oto kompleksowa ściąga:',
          link: {
            href: '/learn/articles/russian-prepositions-and-cases',
            label: 'Rosyjskie przyimki i przypadki: który przyimek wymaga którego przypadku?',
          },
          table: {
            headers: ['Wymagany przypadek', 'Przyimki', 'Znaczenie', 'Przykład'],
            rows: [
              ['Dopełniacz', 'без', 'bez', 'без сахара — bez cukru'],
              ['Dopełniacz', 'до', 'do / przed / do', 'до обеда — przed obiadem'],
              ['Dopełniacz', 'из / с', 'z (wnętrza) / z (powierzchni)', 'из России — z Rosji'],
              ['Dopełniacz', 'у', 'u / przy / blisko', 'у меня — mam'],
              ['Dopełniacz', 'от', 'od (osoby)', 'письмо от мамы — list od mamy'],
              ['Dopełniacz', 'после', 'po', 'после урока — po lekcji'],
              ['Dopełniacz', 'для', 'dla', 'для тебя — dla ciebie'],
              ['Dopełniacz', 'кроме', 'oprócz', 'все кроме него — wszyscy oprócz niego'],
              ['Celownik', 'к', 'do (osoby)', 'к врачу — do lekarza'],
              ['Celownik', 'по', 'wzdłuż / według', 'по улице — wzdłuż ulicy'],
              ['Biernik', 'в / на', 'do (kierunek)', 'в школу — do szkoły'],
              ['Biernik', 'за', 'za (ruch) / dla', 'за стол — za stół'],
              ['Biernik', 'через', 'przez / przez / za', 'через час — za godzinę'],
              ['Narzędnik', 'с', 'z / razem z', 'с другом — z przyjacielem'],
              ['Narzędnik', 'за / перед', 'za / przed (pozycja)', 'за домом — za domem'],
              ['Narzędnik', 'над / под', 'nad / pod', 'над столом — nad stołem'],
              ['Narzędnik', 'между', 'między', 'между нами — między nami'],
              ['Miejscownik', 'в / на', 'w / na (lokalizacja)', 'в Москве — w Moskwie'],
              ['Miejscownik', 'о / об', 'o', 'о работе — o pracy'],
              ['Miejscownik', 'при', 'w obecności / pod', 'при Сталине — za Stalina'],
            ],
          },
        },
        {
          h2: 'Wskazówki, jak szybciej nauczyć się rosyjskich przypadków',
          subsections: [
            {
              h3: '1. Ucz się jednego przypadku na raz',
              content:
                'Nie próbuj zapamiętać wszystkich 6 rosyjskich przypadków naraz. Zacznij od **mianownika** (już go znasz — to forma słownikowa), potem przejdź do **biernika** (dopełnienia bliższe), a następnie **dopełniacza** (posiadanie i brak). Dodawaj kolejne przypadki dopiero, gdy opanujesz poprzedni.',
            },
            {
              h3: '2. Użyj triku z pytaniami',
              content:
                'Każdy rosyjski przypadek ma przypisane **pytanie** (Кто? Что? — Кого? Чего? — Кому? itd.). Gdy nie jesteś pewien, którego przypadku użyć, zapytaj siebie, na jakie pytanie odpowiada rzeczownik w zdaniu. To potężny **skrót**, którego używają rodzimi nauczyciele rosyjskiego.',
            },
            {
              h3: '3. Skup się na wzorcach, nie na pojedynczych końcówkach',
              content:
                'Zamiast zapamiętywać pojedyncze końcówki, szukaj **wzorców**. Na przykład celownik l. poj. niemal zawsze kończy się na **-у** (twardy) lub **-ю** (miękki) dla męskiego i nijakiego, a na -е lub -и dla żeńskiego. Rozpoznawanie tych wzorców przyspieszy zapamiętywanie.',
            },
            {
              h3: '4. Ucz się przyimków z ich przypadkami',
              content:
                'Nigdy nie ucz się rosyjskiego przyimka bez jednoczesnej nauki **tego, który przypadek wymusza**. Ucz się без jako „без + dopełniacz" od początku, nie tylko „без = bez". To zaoszczędzi ci mnóstwo zamieszania później.',
            },
            {
              h3: '5. Ćwicz na prawdziwych zdaniach',
              content:
                'Abstrakcyjne ćwiczenia mają swoje miejsce, ale **najszybszym sposobem** na przyswojenie rosyjskich przypadków jest czytanie i słuchanie prawdziwego rosyjskiego. Gdy napotkasz formę odmienioną, spróbuj zidentyfikować jej przypadek. Z czasem pewne formy zaczną brzmieć naturalnie dobrze lub źle — to nazywa się rozwijaniem **intuicji językowej**.',
            },
            {
              h3: '6. Użyj powtórek rozłożonych',
              content:
                'Rosyjskie końcówki przypadków idealnie nadają się do **systemów powtórek rozłożonych (SRS)**. Aplikacje zaprojektowane specjalnie do rosyjskiej gramatyki mogą odpytywać cię z deklinacji i śledzić słabe punkty — pomagając poświęcać więcej czasu na to, czego nie wiesz, a mniej na to, co już opanowałeś.',
            },
          ],
        },
        {
          h2: 'Najczęstsze błędy z rosyjskimi przypadkami',
          content: 'Unikaj tych **częstych błędów** przy nauce rosyjskich przypadków:',
          table: {
            headers: ['Błąd', 'Źle', 'Dobrze', 'Wyjaśnienie'],
            boldColumnIndices: [2],
            rows: [
              [
                'Używanie mianownika jako dopełnienia bliższego',
                'Я вижу кот.',
                'Я вижу кота.',
                'Dopełnienia bliższe używają biernika',
              ],
              [
                'Zapominanie o regule żywotności w bierniku',
                'Я вижу студент.',
                'Я вижу студента.',
                'Żywotne rzeczowniki męskie przyjmują formę dopełniacza w bierniku',
              ],
              [
                'Mylenie в/на kierunek vs lokalizacja',
                'Я в школу сейчас.',
                'Я в школе сейчас.',
                'Lokalizacja używa miejscownika; kierunek używa biernika',
              ],
              [
                'Używanie celownika zamiast dopełniacza przy posiadaniu',
                'Книга другу.',
                'Книга друга.',
                'Posiadanie jest w dopełniaczu',
              ],
            ],
          },
        },
      ],
      conclusion:
        'System przypadków rosyjskich nie jest tak straszny, jak się początkowo wydaje. W swej istocie jest logicznym systemem: każdy z 6 rosyjskich przypadków pełni określoną rolę gramatyczną, stosuje się do spójnych wzorców końcówek i odpowiada na zestaw pytań, które pomagają zidentyfikować odpowiedni przypadek.',
      conclusionIntro:
        'System przypadków rosyjskich nie jest tak straszny, jak się początkowo wydaje. W swej istocie jest logicznym systemem. Podsumowując:',
      conclusionBullets: [
        'Mianownik — podmiot; forma „domyślna"',
        'Dopełniacz — posiadanie, brak, ilość; najbardziej wszechstronny przypadek',
        'Celownik — dopełnienia dalsze, odbiorcy, wyrażenia wieku',
        'Biernik — dopełnienia bliższe; także kierunek z в/на',
        'Narzędnik — środki, towarzystwo, role, wyrażenia czasowe',
        'Miejscownik — lokalizacja i temat; zawsze wymaga przyimka',
      ],
      conclusionOutro:
        'Kluczem do nauki rosyjskich przypadków jest systematyczna, uporządkowana praktyka. Ucz się wzorców po jednym przypadku, ćwicz przyimki wraz z ich wymaganymi przypadkami i wystawiaj się na prawdziwy rosyjski jak najczęściej.\n\nTeraz, gdy masz kompletny przegląd systemu przypadków rosyjskich, możesz zagłębić się w każdy przypadek osobno. Użyj linków poniżej, aby zbadać każdy przypadek szczegółowo:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Ile przypadków ma rosyjski?',
          answer:
            'Rosyjski ma 6 przypadków: mianownik, dopełniacz, celownik, biernik, narzędnik i miejscownik. Niektórzy lingwiści argumentują za istnieniem dodatkowych „subprzypadków" (np. lokatyw lub wołacz w archaicznym rosyjskim), ale standardowy współczesny program nauczania gramatyki rosyjskiej obejmuje 6 przypadków.',
        },
        {
          question: 'Który rosyjski przypadek jest najtrudniejszy?',
          answer:
            'Większość uczących się uważa dopełniacz liczby mnogiej za najtrudniejszy ze względu na kilka rywalizujących form i liczne wyjątki. Narzędnik jest często wymieniany jako mylący dla początkujących ze względu na zakres użyć. Jednak przy systematycznej praktyce wszystkie 6 przypadków stają się opanowalne.',
        },
        {
          question: 'Czy tylko rosyjski ma przypadki?',
          answer:
            'Nie. Wiele języków ma przypadki, w tym niemiecki (4 przypadki), fiński (15+ przypadków), węgierski (18+ przypadków), łacina (6 przypadków) i polski (7 przypadków). 6 przypadków rosyjskich to faktycznie mniej niż w wielu innych językach obficie używających przypadków, co może uspokoić uczących się.',
        },
        {
          question: 'Czy rosyjskie przymiotniki też się odmieniają?',
          answer:
            'Tak. Rosyjskie przymiotniki muszą zgadzać się z rzeczownikiem, który określają, w rodzaju, liczbie i przypadku. Nazywa się to deklinacją przymiotnikową i stosuje własny zestaw końcówek. Dobra wiadomość: końcówki przymiotnikowe są dość regularne i można je nauczyć się jako wzorzec.',
        },
        {
          question: 'Czy mogę poradzić sobie po rosyjsku bez nauki przypadków?',
          answer:
            'Możesz komunikować się na bardzo podstawowym poziomie bez opanowania każdego przypadku, ale będziesz ciągle popełniał błędy gramatyczne i trudniej będzie cię zrozumieć. Rosjanie w większości będą rozumieć, co masz na myśli, ale twój język będzie brzmiał nienaturalnie. Dla prawdziwej płynności nauka systemu przypadków rosyjskich jest niezbędna.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Kompletny przewodnik po rosyjskich przypadkach',
            description:
              'Kompletny przewodnik po wszystkich 6 rosyjskich przypadkach z zasadami deklinacji, przyimkami, przykładami i wskazówkami.',
            educationalLevel: 'beginner',
            inLanguage: 'pl',
            teaches: 'rosyjskie przypadki, gramatyka rosyjska, deklinacja rosyjska',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
          },
          {
            '@type': 'Article',
            headline: 'Kompletny przewodnik po rosyjskich przypadkach',
            description:
              'Opanuj wszystkie 6 rosyjskich przypadków: mianownik, dopełniacz, celownik, biernik, narzędnik, miejscownik.',
            datePublished: '2025-03-11',
            dateModified: '2025-03-11',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
            },
            keywords:
              'rosyjskie przypadki, gramatyka rosyjska przypadki, 6 rosyjskich przypadków, rosyjskie przypadki wyjaśnione, nauka rosyjskich przypadków',
          },
        ],
      },
    },
    ru_ru: {
      slug: 'russian-cases-complete-guide',
      title: 'Полное руководство по падежам русского языка | Все 6 падежей',
      metaTitle: 'Падежи русского языка: полное руководство с примерами | Russian Cases with Anna',
      metaDescription:
        'Освойте все 6 падежей русского языка: именительный, родительный, дательный, винительный, творительный, предложный — определения, окончания, предлоги и примеры. Бесплатный грамматический ресурс.',
      keywords: [
        'падежи русского языка',
        'грамматика русского языка падежи',
        '6 падежей русского языка',
        'падежи русского языка объяснение',
        'система падежей русского языка',
        'изучение падежей русского языка',
      ],
      h1: 'Полное руководство по падежам русского языка',
      intro:
        'Все 6 падежей объяснены с примерами. Изучая русский язык, вы наверняка уже сталкивались с понятием падежей — и находили их запутанными. Вы не одиноки.\n\nСистема падежей — один из главных барьеров для изучающих русский, но, поняв её, читать и говорить становится гораздо проще. В этом руководстве разбираем все 6 падежей, объясняем роль каждого, показываем окончания и даём примеры.',
      lastUpdated: 'Март 2026',
      whatYouLearn: [
        'Что такое падежи и зачем они нужны',
        'Все 6 падежей с их значениями, окончаниями и примерами',
        'Какие предлоги требуют какой падеж',
        'Частые ошибки и как их избежать',
        'Советы по запоминанию падежной системы',
      ],
      internalLinksPosition: 'conclusion',
      internalLinks: [
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Родительный падеж: правила и примеры',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Винительный падеж: объекты и одушевлённость',
        },
        { href: '/learn/lessons/dative-case-declension', label: 'Дательный падеж: «кому» и «для»' },
        {
          href: '/learn/articles/russian-instrumental-case',
          label: 'Творительный падеж: когда использовать',
        },
        {
          href: '/learn/articles/russian-prepositional-case',
          label: 'Предложный падеж: единственный, который не стоит один',
        },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Предлоги и падежи: какой предлог — какой падеж',
        },
      ],
      sections: [
        {
          h2: 'Что такое падежи русского языка? (И зачем они нужны?)',
          content:
            'В русском языке **окончания слов** меняются в зависимости от их роли в предложении. Эти формы называются **падежами**. Каждое слово несёт свою грамматическую функцию в окончании, поэтому порядок слов в русском гораздо свободнее.\n\nПример: **Собака кусает мужчину**. Окончание **-у** на мужчину всегда указывает, что его кусают. Русский имеет **6 падежей**, и каждое существительное, местоимение, прилагательное и числительное меняет форму по падежу. Изучение падежей — **ключ к русской грамматике**.',
        },
        {
          h2: 'Обзор: 6 падежей в одном взгляде',
          image: {
            src: '/articles/the-six-russian-cases-quick-reference.webp',
            alt: 'Справочная таблица шести падежей русского языка',
            width: 1200,
            height: 630,
          },
          content: 'Краткий обзор всех 6 падежей:',
          table: {
            headers: [
              'Падеж',
              'Русское название',
              'Ключевой вопрос',
              'Основное употребление',
              'Пример',
            ],
            rows: [
              ['Именительный', 'Именительный', 'Кто? Что?', 'Подлежащее', 'Кот спит.'],
              [
                'Родительный',
                'Родительный',
                'Кого? Чего?',
                'Принадлежность, отсутствие',
                'Нет кота.',
              ],
              ['Дательный', 'Дательный', 'Кому? Чему?', 'Косвенное дополнение', 'Дал другу.'],
              ['Винительный', 'Винительный', 'Кого? Что?', 'Прямое дополнение', 'Вижу кота.'],
              ['Творительный', 'Творительный', 'Кем? Чем?', 'Инструмент, способ', 'Пишу ручкой.'],
              ['Предложный', 'Предложный', 'О ком? О чём?', 'Место, тема', 'В школе, о погоде.'],
            ],
          },
        },
      ],
      conclusion:
        'Падежи — основа русской грамматики. Начните с именительного, затем винительный и родительный. Добавляйте остальные по мере освоения.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Сколько падежей в русском языке?',
          answer:
            'В русском **6 падежей**: именительный, родительный, дательный, винительный, творительный, предложный.',
        },
        {
          question: 'Какой падеж самый сложный?',
          answer:
            'Чаще всего труднее всего даётся родительный множественного числа — много форм и исключений. Творительный падеж тоже может сбивать с толку из-за разнообразия употреблений.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Полное руководство по падежам русского языка',
        description: 'Все 6 падежей: определения, окончания, предлоги и примеры.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/lessons/russian-cases-complete-guide',
        },
        keywords: 'падежи русского языка, грамматика русского языка, 6 падежей',
      },
    },
  },
  'dative-case-declension': {
    fr_fr: {
      slug: 'dative-case-declension',
      title: 'Maîtriser le cas datif russe (Дательный падеж)',
      metaTitle: 'Cas datif russe : guide complet de la déclinaison | Russian Cases with Anna',
      metaDescription:
        "Maîtrisez le cas datif russe (дательный падеж) avec notre guide complet. Apprenez les sentiments, l'âge, la nécessité, les terminaisons des noms, les pronoms et les constructions impersonnelles.",
      keywords: [
        'cas datif russe',
        'datif russe',
        'дательный падеж',
        'déclinaison russe',
        'cas russes',
        'grammaire russe',
        'déclinaison datif',
        'apprendre les cas russes',
      ],
      h1: 'Maîtriser le cas datif russe (Дательный падеж)',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: 'Cas datif russe : leçon gratuite sur comment dire « à » et « pour » en russe',
        width: 1200,
        height: 630,
      },
      intro:
        "Pour vraiment maîtriser le **cas datif** (Дательный падеж), il faut aller au-delà du simple « donner ». En russe, le datif est le cas des **sentiments, de l'âge et de la nécessité**.",
      sections: [
        {
          h2: 'Maîtriser le cas datif russe (Дательный падеж)',
          content:
            "Le datif répond principalement aux questions **Кому?** (À qui ?) et **Чему?** (À quoi ?). Il marque souvent l'objet indirect, mais est aussi essentiel pour exprimer les états impersonnels et l'âge.\n\nPour former le datif, on modifie généralement la terminaison de la forme nominative (du dictionnaire).",
          table: {
            caption: 'Terminaisons du datif des noms par genre',
            headers: ['Genre', 'Terminaison nominatif', 'Datif singulier', 'Exemple'],
            rows: [
              ['Masculin', 'Consonne / -й / -ь', '-у / -ю', 'брат → брату / чай → чаю'],
              ['Féminin', '-а / -я', '-е', 'сестра → сестре'],
              ['Féminin (spéc.)', '-ия / -ь', '-и', 'Россия → России / ночь → ночи'],
              ['Neutre', '-о / -е', '-у / -ю', 'письмо → письму'],
              ['Pluriel (tous)', '(variable)', '-ам / -ям', 'друзья → друзьям / книги → книгам'],
            ],
            boldColumnIndices: [0, 2],
          },
        },
        {
          h2: 'Pronoms personnels (le cas des « sentiments »)',
          image: {
            src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
            alt: 'Tableau de règle grammaticale : comment dire son âge en russe (cas datif)',
            width: 1200,
            height: 630,
          },
          content:
            "Contrairement au français, le russe utilise le datif pour de nombreuses expressions courantes. On n'« a » pas un âge ou un sentiment ; ils vous « arrivent ».\n\n- **Мне** (À moi)\n- **Тебе** (À toi — informel)\n- **Ему / Ей** (À lui / À elle)\n- **Нам** (À nous)\n- **Вам** (À vous)\n- **Им** (À eux)\n\n**Exemple (âge) :** **Мне** двадцать лет. (J'ai 20 ans — *litt. « À moi sont 20 ans »*).",
        },
        {
          h2: 'Déclinaison des adjectifs',
          content:
            "Si vous donnez quelque chose à un « ami gentil », l'adjectif doit s'accorder avec le nom au datif.\n\n- **Masculin/Neutre :** Termine en **-ому / -ему**. *Ex. : новому другу* (au nouvel ami).\n- **Féminin :** Termine en **-ой / -ей**. *Ex. : хорошей подруге* (à la bonne amie).\n- **Pluriel :** Termine en **-ым / -им**. *Ex. : старым людям* (aux personnes âgées).",
        },
        {
          h2: 'Utilisation avancée et constructions impersonnelles',
          content:
            "C'est là que le datif devient intéressant. Il est utilisé pour les **états impersonnels** où il n'y a pas de « sujet » actif qui accomplit une action.",
          subsections: [
            {
              h3: 'A. États physiques et émotionnels',
              content:
                "Si vous avez froid, vous vous ennuyez ou vous êtes heureux, la personne concernée se met au **datif**.\n\n- **Мне** холодно. (J'ai froid).\n- **Тебе** скучно? (Tu t'ennuies ?).\n- **Ей** весело. (Elle s'amuse).",
            },
            {
              h3: 'B. Nécessité (Нужно / Надо)',
              content:
                'Quand vous devez faire quelque chose, utilisez le datif.\n\n- **Нам** нужно идти. (Nous devons partir).\n- **Ивану** надо работать. (Ivan doit travailler).',
            },
            {
              h3: 'C. Le verbe « aimer » (Нравиться)',
              content:
                "En russe, on n'« aime » pas les choses ; les choses vous « plaisent ».\n\n- **Мне** нравится этот город. (J'aime cette ville — *litt. « Cette ville me plaît »*).",
            },
          ],
        },
        {
          h2: 'Prépositions : К et ПО',
          content:
            'Le datif est utilisé avec ces prépositions clés :\n\n- **К (vers/à) :** Utilisé pour se déplacer vers une **personne** ou une destination précise. *Я иду **к** врач**у*** (Je vais chez le médecin).\n- **ПО (le long de/par/selon) :** **Mouvement :** Гулять **по** парк**у** (Se promener dans le parc). **Communication :** Говорить **по** телефон**у** (Parler au téléphone). **Sujet :** Урок **по** математик**е** (Cours de mathématiques).',
        },
        {
          h2: "Vérification rapide : l'exception du neutre en -мя",
          content:
            "Les noms en **-мя** (comme *имя* — nom, ou *время* — temps) suivent un modèle particulier :\n\n- Имя → **Имени**\n- Время → **Времени**\n\n*Exemple :* Приятно по **имени**. (C'est agréable [d'appeler quelqu'un] par son nom).",
        },
      ],
      conclusion:
        "Le cas datif va bien au-delà du « donner » — il est essentiel pour exprimer les sentiments, l'âge, la nécessité et les états impersonnels en russe. Avec une pratique régulière de ces terminaisons, pronoms et combinaisons de prépositions, vous améliorerez rapidement votre grammaire russe.\n\nSi vous voulez vous entraîner aux six cas avec des exercices interactifs, l'appli Russian Cases with Anna peut vous aider.",
      ctaText: "Voir l'appli",
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Comment décliner au cas datif en russe',
            description:
              'Guide complet du cas datif russe (дательный падеж) avec règles de déclinaison et exemples.',
            educationalLevel: 'beginner',
            inLanguage: 'fr',
            teaches: 'cas datif russe',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
          },
          {
            '@type': 'Article',
            headline: 'Comment décliner au cas datif en russe',
            description:
              'Guide complet du cas datif russe (дательный падеж) avec règles de déclinaison et exemples.',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
            },
            keywords: 'cas datif russe, дательный падеж, déclinaison russe, grammaire russe',
          },
        ],
      },
    },
    de_de: {
      slug: 'dative-case-declension',
      title: 'Der russische Dativ (Дательный падеж) meistern',
      metaTitle: 'Russischer Dativ: Vollständiger Deklinationsleitfaden | Russian Cases with Anna',
      metaDescription:
        'Meistern Sie den russischen Dativ (дательный падеж) mit unserem vollständigen Deklinationsleitfaden. Lernen Sie Gefühle, Alter, Notwendigkeit, Substantivendungen, Pronomen und unpersönliche Konstruktionen.',
      keywords: [
        'Russischer Dativ',
        'Dativ Russisch',
        'дательный падеж',
        'Russische Deklination',
        'Russische Fälle',
        'Russische Grammatik',
        'Dativ-Deklination',
        'Russische Fälle lernen',
      ],
      h1: 'Der russische Dativ (Дательный падеж) meistern',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: 'Russischer Dativ: kostenlose Lektion zu „an" und „für" auf Russisch',
        width: 1200,
        height: 630,
      },
      intro:
        'Um den **Dativ** (Дательный падеж) wirklich zu meistern, müssen Sie über das bloße „Geben" hinausschauen. Im Russischen ist der Dativ der Fall für **Gefühle, Alter und Notwendigkeit**.',
      sections: [
        {
          h2: 'Der russische Dativ (Дательный падеж) meistern',
          content:
            'Der Dativ beantwortet hauptsächlich die Fragen **Кому?** (Wem?) und **Чему?** (Was?). Er kennzeichnet oft das indirekte Objekt, ist aber auch unerlässlich für unpersönliche Zustände und Altersangaben.\n\nUm den Dativ zu bilden, verändert man normalerweise die Endung der Nominativ- (Wörterbuch-)Form.',
          table: {
            caption: 'Dativ-Endungen der Substantive nach Genus',
            headers: ['Genus', 'Nominativ-Endung', 'Dativ Singular', 'Beispiel'],
            rows: [
              ['Maskulin', 'Konsonant / -й / -ь', '-у / -ю', 'брат → брату / чай → чаю'],
              ['Feminin', '-а / -я', '-е', 'сестра → сестре'],
              ['Feminin (spez.)', '-ия / -ь', '-и', 'Россия → России / ночь → ночи'],
              ['Neutrum', '-о / -е', '-у / -ю', 'письмо → письму'],
              ['Plural (alle)', '(verschiedene)', '-ам / -ям', 'друзья → друзьям / книги → книгам'],
            ],
            boldColumnIndices: [0, 2],
          },
        },
        {
          h2: 'Personalpronomen (Der „Gefühls"-Fall)',
          image: {
            src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
            alt: 'Grammatiktabelle: wie man sein Alter auf Russisch sagt (Dativ)',
            width: 1200,
            height: 630,
          },
          content:
            'Anders als im Deutschen verwendet das Russische den Dativ für viele alltägliche Ausdrücke. Man „hat" kein Alter oder Gefühl; sie „passieren" einem.\n\n- **Мне** (mir)\n- **Тебе** (dir – informell)\n- **Ему / Ей** (ihm / ihr)\n- **Нам** (uns)\n- **Вам** (Ihnen / euch)\n- **Им** (ihnen)\n\n**Beispiel (Alter):** **Мне** двадцать лет. (Ich bin 20 Jahre alt – *wörtl. „Mir sind 20 Jahre"*).',
        },
        {
          h2: 'Adjektiv-Deklination',
          content:
            'Wenn Sie etwas einem „netten Freund" geben, muss das Adjektiv mit dem Dativ-Substantiv übereinstimmen.\n\n- **Maskulin/Neutrum:** Endet auf **-ому / -ему**. *Z.B.: новому другу* (dem neuen Freund).\n- **Feminin:** Endet auf **-ой / -ей**. *Z.B.: хорошей подруге* (der guten Freundin).\n- **Plural:** Endet auf **-ым / -им**. *Z.B.: старым людям* (alten Menschen).',
        },
        {
          h2: 'Erweiterte Verwendung & unpersönliche Konstruktionen',
          content:
            'Hier wird der Dativ interessant. Er wird für **unpersönliche Zustände** verwendet, bei denen es kein aktives „Subjekt" gibt, das eine Handlung ausführt.',
          subsections: [
            {
              h3: 'A. Körperliche & emotionale Zustände',
              content:
                'Wenn Ihnen kalt ist, langweilig oder Sie glücklich sind – die Person im Dativ.\n\n- **Мне** холодно. (Mir ist kalt).\n- **Тебе** скучно? (Ist dir langweilig?).\n- **Ей** весело. (Ihr ist lustig / sie hat Spaß).',
            },
            {
              h3: 'B. Notwendigkeit (Нужно / Надо)',
              content:
                'Wenn Sie etwas tun müssen, verwenden Sie den Dativ.\n\n- **Нам** нужно идти. (Wir müssen gehen).\n- **Ивану** надо работать. (Iwan muss arbeiten).',
            },
            {
              h3: 'C. Das Verb „mögen" (Нравиться)',
              content:
                'Im Russischen „mögen" Sie Dinge nicht; Dinge „gefallen Ihnen".\n\n- **Мне** нравится этот город. (Mir gefällt diese Stadt – *wörtl. „Mir ist diese Stadt angenehm"*).',
            },
          ],
        },
        {
          h2: 'Präpositionen: К und ПО',
          content:
            'Der Dativ wird mit diesen Präpositionen verwendet:\n\n- **К (zu/nach):** Beim Bewegen zu einer **Person** oder einem Ziel. *Я иду **к** врач**у*** (Ich gehe zum Arzt).\n- **ПО (entlang/nach/laut):** **Bewegung:** Гулять **по** парк**у** (durch den Park spazieren). **Kommunikation:** Говорить **по** телефон**у** (am Telefon sprechen). **Thema:** Урок **по** математик**е** (Mathematikstunde).',
        },
        {
          h2: 'Kurzcheck: Die Ausnahme „Neutrum -мя"',
          content:
            'Substantive auf **-мя** (wie *имя* – Name, oder *время* – Zeit) folgen einem Sonderfall:\n\n- Имя → **Имени**\n- Время → **Времени**\n\n*Beispiel:* Приятно по **имени**. (Es ist nett, jemanden beim Namen zu nennen).',
        },
      ],
      conclusion:
        'Der Dativ geht weit über „Geben" hinaus – er ist unerlässlich für Gefühle, Alter, Notwendigkeit und unpersönliche Zustände im Russischen. Mit regelmäßiger Übung dieser Endungen, Pronomen und Präpositionenkombinationen verbessern Sie schnell Ihre russische Grammatik.\n\nWenn Sie alle sechs Fälle mit interaktiven Übungen üben möchten, kann Ihnen die App Russian Cases with Anna helfen.',
      ctaText: 'App ansehen',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Wie man im Dativ im Russischen dekliniert',
            description:
              'Vollständiger Leitfaden zum russischen Dativ (дательный падеж) mit Deklinationsregeln und Beispielen.',
            educationalLevel: 'beginner',
            inLanguage: 'de',
            teaches: 'Russischer Dativ',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
          },
          {
            '@type': 'Article',
            headline: 'Wie man im Dativ im Russischen dekliniert',
            description:
              'Vollständiger Leitfaden zum russischen Dativ (дательный падеж) mit Deklinationsregeln und Beispielen.',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
            },
            keywords:
              'Russischer Dativ, дательный падеж, Russische Deklination, Russische Grammatik',
          },
        ],
      },
    },
    tr_tr: {
      slug: 'dative-case-declension',
      title: 'Rusça datif (Дательный падеж) rehberi',
      metaTitle: 'Rusça datif: Tam çekim rehberi | Russian Cases with Anna',
      metaDescription:
        'Rusça datifi (дательный падеж) tam çekim rehberimizle öğrenin. Duygular, yaş, gereklilik, isim ekleri, zamirler ve kişisiz yapılar.',
      keywords: [
        'Rusça datif',
        'Datif Rusça',
        'дательный падеж',
        'Rusça çekim',
        'Rusça haller',
        'Rusça gramer',
        'Datif çekimi',
        'Rusça haller öğren',
      ],
      h1: 'Rusça datif (Дательный падеж) rehberi',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: "Rusça datif: Rusçada 'kime' ve 'için' ücretsiz ders",
        width: 1200,
        height: 630,
      },
      intro:
        '**Datif**i (Дательный падеж) gerçekten öğrenmek için sadece "vermek"in ötesine bakmanız gerekir. Rusçada datif **duygular, yaş ve gereklilik** halidir.',
      sections: [
        {
          h2: 'Rusça datif (Дательный падеж) rehberi',
          content:
            'Datif temel olarak **Кому?** (Kime?) ve **Чему?** (Neye?) sorularına cevap verir. Genellikle dolaylı nesneyi belirtir ama kişisiz durumlar ve yaş ifadeleri için de gereklidir.\n\nDatif oluşturmak için genellikle isim (sözlük) formunun eki değiştirilir.',
          table: {
            caption: 'Cinsiyete göre isimlerin datif ekleri',
            headers: ['Cinsiyet', 'İsim hali eki', 'Datif tekil', 'Örnek'],
            rows: [
              ['Eril', 'Ünsüz / -й / -ь', '-у / -ю', 'брат → брату / чай → чаю'],
              ['Dişil', '-а / -я', '-е', 'сестра → сестре'],
              ['Dişil (özel)', '-ия / -ь', '-и', 'Россия → России / ночь → ночи'],
              ['Nötr', '-о / -е', '-у / -ю', 'письмо → письму'],
              ['Çoğul (tümü)', '(çeşitli)', '-ам / -ям', 'друзья → друзьям / книги → книгам'],
            ],
            boldColumnIndices: [0, 2],
          },
        },
        {
          h2: 'Kişi zamirleri („Duygu" hali)',
          image: {
            src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
            alt: 'Gramer tablosu: Rusçada yaşınızı nasıl söylersiniz (Datif)',
            width: 1200,
            height: 630,
          },
          content:
            'Almancadan farklı olarak Rusça birçok günlük ifade için datif kullanır. Yaş veya duygu "sahip olunmaz"; bunlar size "olur".\n\n- **Мне** (bana)\n- **Тебе** (sana — gayriresmi)\n- **Ему / Ей** (ona)\n- **Нам** (bize)\n- **Вам** (size)\n- **Им** (onlara)\n\n**Örnek (yaş):** **Мне** двадцать лет. (Yirmi yaşındayım — *kelimenin tam anlamıyla "Bana yirmi yıl"*).',
        },
        {
          h2: 'Sıfat çekimi',
          content:
            '"Nazik bir arkadaşa" bir şey verirken, sıfat datif isimle uyumlu olmalıdır.\n\n- **Eril/Nötr:** **-ому / -ему** ile biter. *Örn.: новому другу* (yeni arkadaşa).\n- **Dişil:** **-ой / -ей** ile biter. *Örn.: хорошей подруге* (iyi arkadaşa [kadın]).\n- **Çoğul:** **-ым / -им** ile biter. *Örn.: старым людям* (yaşlı insanlara).',
        },
        {
          h2: 'Gelişmiş kullanım ve kişisiz yapılar',
          content:
            'İşte datif ilginçleşiyor. Eylemi gerçekleştiren aktif bir "özne" olmadığı **kişisiz durumlar** için kullanılır.',
          subsections: [
            {
              h3: 'A. Fiziksel ve duygusal durumlar',
              content:
                'Üşüdüğünüzde, sıkıldığınızda veya mutlu olduğunuzda — kişi datifte.\n\n- **Мне** холодно. (Üşüyorum).\n- **Тебе** скучно? (Sıkılıyor musun?).\n- **Ей** весело. (Eğleniyor).',
            },
            {
              h3: 'B. Gereklilik (Нужно / Надо)',
              content:
                'Bir şey yapmanız gerektiğinde datif kullanın.\n\n- **Нам** нужно идти. (Gitmemiz gerekiyor).\n- **Ивану** надо работать. (İvan çalışmalı).',
            },
            {
              h3: 'C. "Beğenmek" fiili (Нравиться)',
              content:
                'Rusçada bir şeyi "beğenmezsiniz"; şeyler size "hoş gelir".\n\n- **Мне** нравится этот город. (Bu şehri seviyorum — *kelimenin tam anlamıyla "Bana bu şehir hoş geliyor"*).',
            },
          ],
        },
        {
          h2: 'Edatlar: К ve ПО',
          content:
            'Datif şu edatlarla kullanılır:\n\n- **К (kime/neye):** Bir **kişiye** veya hedefe hareket ederken. *Я иду **к** врач**у*** (Doktora gidiyorum).\n- **ПО (boyunca/göre):** **Hareket:** Гулять **по** парк**у** (parkta yürümek). **İletişim:** Говорить **по** телефон**у** (telefonda konuşmak). **Konu:** Урок **по** математик**е** (matematik dersi).',
        },
        {
          h2: 'Hızlı kontrol: „Nötr -мя" istisnası',
          content:
            '**-мя** ile biten isimler (*имя* — isim veya *время* — zaman gibi) özel bir kalıp izler:\n\n- Имя → **Имени**\n- Время → **Времени**\n\n*Örnek:* Приятно по **имени**. (İsmiyle hitap etmek güzel).',
        },
      ],
      conclusion:
        'Datif sadece "vermek"in çok ötesindedir — Rusçada duygular, yaş, gereklilik ve kişisiz durumlar için gereklidir. Bu eklerin, zamirlerin ve edat kombinasyonlarının düzenli pratiğiyle Rusça gramerinizi hızla geliştirirsiniz.\n\nAltı halin hepsini interaktif alıştırmalarla pratik etmek isterseniz, Russian Cases with Anna uygulaması yardımcı olabilir.',
      ctaText: 'Uygulamayı görün',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Rusçada datif halinde nasıl çekim yapılır',
            description:
              'Rusça datif (дательный падеж) için çekim kuralları ve örneklerle tam rehber.',
            educationalLevel: 'beginner',
            inLanguage: 'tr',
            teaches: 'Rusça datif',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
          },
          {
            '@type': 'Article',
            headline: 'Rusçada datif halinde nasıl çekim yapılır',
            description:
              'Rusça datif (дательный падеж) için çekim kuralları ve örneklerle tam rehber.',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
            },
            keywords: 'Rusça datif, дательный падеж, Rusça çekim, Rusça gramer',
          },
        ],
      },
    },
    pl_pl: {
      slug: 'dative-case-declension',
      title: 'Opanuj rosyjski celownik (Дательный падеж)',
      metaTitle: 'Rosyjski celownik: Kompletny przewodnik po deklinacji | Russian Cases with Anna',
      metaDescription:
        'Opanuj rosyjski celownik (дательный падеж) dzięki naszemu kompletnemu przewodnikowi. Naucz się uczuć, wieku, konieczności, końcówek rzeczowników, zaimków i konstrukcji nieosobowych.',
      keywords: [
        'Rosyjski celownik',
        'Celownik rosyjski',
        'дательный падеж',
        'Deklinacja rosyjska',
        'Rosyjskie przypadki',
        'Gramatyka rosyjska',
        'Deklinacja celownika',
        'Nauka rosyjskich przypadków',
      ],
      h1: 'Opanuj rosyjski celownik (Дательный падеж)',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: 'Rosyjski celownik: darmowa lekcja o tym, jak powiedzieć „do" i „dla" po rosyjsku',
        width: 1200,
        height: 630,
      },
      intro:
        'Aby naprawdę opanować **celownik** (Дательный падеж), musisz wyjść poza samo „dawanie". W rosyjskim celownik to przypadek **uczuć, wieku i konieczności**.',
      sections: [
        {
          h2: 'Opanuj rosyjski celownik (Дательный падеж)',
          content:
            'Celownik przede wszystkim odpowiada na pytania **Кому?** (Komu?) i **Чему?** (Czemu?). Choć często oznacza dopełnienie dalsze, jest także niezbędny do wyrażania stanów nieosobowych i wieku.\n\nAby utworzyć celownik, zwykle zmienia się końcówkę formy mianownika (słownikowej).',
          table: {
            caption: 'Końcówki celownika rzeczowników według rodzaju',
            headers: ['Rodzaj', 'Końcówka mianownika', 'Celownik l. poj.', 'Przykład'],
            rows: [
              ['Męski', 'Spółgłoska / -й / -ь', '-у / -ю', 'брат → брату / чай → чаю'],
              ['Żeński', '-а / -я', '-е', 'сестра → сестре'],
              ['Żeński (spec.)', '-ия / -ь', '-и', 'Россия → России / ночь → ночи'],
              ['Nijaki', '-о / -е', '-у / -ю', 'письмо → письму'],
              [
                'Liczba mnoga (wszystkie)',
                '(różne)',
                '-ам / -ям',
                'друзья → друзьям / книги → книгам',
              ],
            ],
            boldColumnIndices: [0, 2],
          },
        },
        {
          h2: 'Zaimki osobowe (przypadek „uczuć")',
          image: {
            src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
            alt: 'Tabela gramatyczna: jak powiedzieć swój wiek po rosyjsku (celownik)',
            width: 1200,
            height: 630,
          },
          content:
            'W przeciwieństwie do polskiego, rosyjski używa celownika w wielu codziennych wyrażeniach. Nie „masz" wieku ani uczucia — one ci „się przydarzają".\n\n- **Мне** (mnie)\n- **Тебе** (tobie — nieformalnie)\n- **Ему / Ей** (jemu / jej)\n- **Нам** (nam)\n- **Вам** (wam / Państwu)\n- **Им** (im)\n\n**Przykład (wiek):** **Мне** двадцать лет. (Mam 20 lat — *dosł. „Mnie jest 20 lat"*).',
        },
        {
          h2: 'Deklinacja przymiotników',
          content:
            'Gdy dajesz coś „miłemu przyjacielowi", przymiotnik musi zgadzać się z rzeczownikiem w celowniku.\n\n- **Męski/Nijaki:** Kończy się na **-ому / -ему**. *Np.: новому другу* (nowemu przyjacielowi).\n- **Żeński:** Kończy się na **-ой / -ей**. *Np.: хорошей подруге* (dobrej przyjaciółce).\n- **Liczba mnoga:** Kończy się na **-ым / -им**. *Np.: старым людям* (starym ludziom).',
        },
        {
          h2: 'Zaawansowane użycie i konstrukcje nieosobowe',
          content:
            'Tu celownik staje się interesujący. Służy do **stanów nieosobowych**, w których nie ma aktywnego „podmiotu" wykonującego czynność.',
          subsections: [
            {
              h3: 'A. Stany fizyczne i emocjonalne',
              content:
                'Gdy jest ci zimno, nudzisz się lub jesteś szczęśliwy — osoba jest w **celowniku**.\n\n- **Мне** холодно. (Jest mi zimno).\n- **Тебе** скучно? (Nudzisz się?).\n- **Ей** весело. (Jest jej wesoło / dobrze się bawi).',
            },
            {
              h3: 'B. Konieczność (Нужно / Надо)',
              content:
                'Gdy musisz coś zrobić, użyj celownika.\n\n- **Нам** нужно идти. (Musimy iść).\n- **Ивану** надо работать. (Iwan musi pracować).',
            },
            {
              h3: 'C. Czasownik „podobać się" (Нравиться)',
              content:
                'W rosyjskim nie „podobają" ci się rzeczy; rzeczy ci „się podobają".\n\n- **Мне** нравится этот город. (Podoba mi się to miasto — *dosł. „Mnie jest przyjemne to miasto"*).',
            },
          ],
        },
        {
          h2: 'Przyimki: К i ПО',
          content:
            'Celownik jest używany z tymi kluczowymi przyimkami:\n\n- **К (do/ku):** Używany przy ruchu w stronę **osoby** lub celu. *Я иду **к** врач**у*** (Idę do lekarza).\n- **ПО (wzdłuż/według):** **Ruch:** Гулять **по** парк**у** (Spacerować po parku). **Komunikacja:** Говорить **по** телефон**у** (Rozmawiać przez telefon). **Temat:** Урок **по** математик**е** (Lekcja matematyki).',
        },
        {
          h2: 'Szybka kontrola: wyjątek „nijaki -мя"',
          content:
            'Rzeczowniki kończące się na **-мя** (jak *имя* — imię, czy *время* — czas) stosują się do specjalnego wzorca:\n\n- Имя → **Имени**\n- Время → **Времени**\n\n*Przykład:* Приятно по **имени**. (Miło jest [zwracać się do kogoś] po imieniu).',
        },
      ],
      conclusion:
        'Celownik wykracza daleko poza „dawanie" — jest niezbędny do wyrażania uczuć, wieku, konieczności i stanów nieosobowych w rosyjskim. Dzięki regularnej praktyce tych końcówek, zaimków i kombinacji przyimków szybko poprawisz swoją rosyjską gramatykę.\n\nJeśli chcesz ćwiczyć wszystkie sześć przypadków z interaktywnymi ćwiczeniami, aplikacja Russian Cases with Anna może ci pomóc.',
      ctaText: 'Zobacz aplikację',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'LearningResource',
            name: 'Jak odmieniać w celowniku po rosyjsku',
            description:
              'Kompletny przewodnik po rosyjskim celowniku (дательный падеж) z zasadami deklinacji i przykładami.',
            educationalLevel: 'beginner',
            inLanguage: 'pl',
            teaches: 'Rosyjski celownik',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            url: 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
          },
          {
            '@type': 'Article',
            headline: 'Jak odmieniać w celowniku po rosyjsku',
            description:
              'Kompletny przewodnik po rosyjskim celowniku (дательный падеж) z zasadami deklinacji i przykładami.',
            datePublished: '2025-03-01',
            dateModified: '2025-03-01',
            author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
            },
            keywords: 'Rosyjski celownik, дательный падеж, Deklinacja rosyjska, Gramatyka rosyjska',
          },
        ],
      },
    },
    ru_ru: {
      slug: 'dative-case-declension',
      title: 'Дательный падеж русского языка (Дательный падеж)',
      metaTitle: 'Дательный падеж: полное руководство по склонению | Russian Cases with Anna',
      metaDescription:
        'Освойте дательный падеж (дательный падеж) с нашим руководством. Чувства, возраст, необходимость, окончания существительных, местоимения и безличные конструкции.',
      keywords: [
        'дательный падеж',
        'дательный падеж русский',
        'склонение дательный падеж',
        'падежи русского языка',
        'грамматика русского языка',
      ],
      h1: 'Дательный падеж русского языка (Дательный падеж)',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: 'Дательный падеж: бесплатный урок о том, как сказать «кому» и «для»',
        width: 1200,
        height: 630,
      },
      intro:
        'Чтобы по-настоящему освоить **дательный падеж**, нужно выйти за рамки простого «давать». В русском дательный — это падеж **чувств, возраста и необходимости**.',
      sections: [
        {
          h2: 'Дательный падеж: основные сведения',
          content:
            'Дательный падеж отвечает на вопросы **Кому?** и **Чему?**. Он часто обозначает косвенное дополнение, а также необходим для безличных состояний и выражения возраста.\n\nДля образования дательного падежа обычно меняется окончание формы именительного падежа.',
          table: {
            caption: 'Окончания дательного падежа существительных по роду',
            headers: ['Род', 'Окончание им. п.', 'Дательный ед. ч.', 'Пример'],
            rows: [
              ['Мужской', 'Согласная / -й / -ь', '-у / -ю', 'брат → брату, чай → чаю'],
              ['Женский', '-а / -я', '-е', 'сестра → сестре'],
              ['Женский (особ.)', '-ия / -ь', '-и', 'Россия → России, ночь → ночи'],
              ['Средний', '-о / -е', '-у / -ю', 'письмо → письму'],
              ['Мн. ч. (все)', '(разное)', '-ам / -ям', 'друзья → друзьям, книги → книгам'],
            ],
            boldColumnIndices: [0, 2],
          },
        },
        {
          h2: 'Личные местоимения (падеж «чувств»)',
          content:
            'В русском дательный падеж используется во многих повседневных выражениях. Возраст или чувство не «имеются» — они «приходят» к вам.\n\n- **Мне** (мне)\n- **Тебе** (тебе)\n- **Ему / Ей** (ему / ей)\n- **Нам** (нам)\n- **Вам** (вам)\n- **Им** (им)\n\n**Пример (возраст):** **Мне** двадцать лет. (Мне 20 лет).',
        },
        {
          h2: 'Безличные конструкции',
          content:
            'Дательный падеж используется для **безличных состояний**, когда нет активного подлежащего.\n\n- **Мне** холодно. (Мне холодно)\n- **Тебе** скучно? (Тебе скучно?)\n- **Нам** нужно идти. (Нам нужно идти)\n- **Мне** нравится этот город. (Мне нравится этот город)',
        },
      ],
      conclusion:
        'Дательный падеж — один из самых многозначных падежей русского языка. Освойте его для естественной речи.',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Дательный падеж русского языка',
        description:
          'Руководство по дательному падежу: окончания, местоимения, безличные конструкции.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/lessons/dative-case-declension',
        },
        keywords: 'дательный падеж, падежи русского языка, грамматика русского языка',
      },
    },
  },
};
