/**
 * Traductions des articles Learn
 * Structure : slug -> langue -> contenu complet LearnArticle
 * Pour ajouter une traduction : dupliquer l'article depuis learnArticles.ts
 * et traduire tous les champs textuels (title, h1, intro, sections, etc.)
 */
import type { LearnArticle } from './learnArticles';
import type { LandingLanguage } from '@/data/website/landingTranslations';

export const learnArticleTranslations: Partial<
  Record<string, Partial<Record<LandingLanguage, LearnArticle>>>
> = {
  'russian-case-endings-cheatsheet': {
    fr_fr: {
      slug: 'russian-case-endings-cheatsheet',
      title: "Terminaisons des cas russes : l'aide-mémoire ultime et tableau",
      metaTitle:
        'Aide-mémoire des terminaisons des cas russes | Tableau de déclinaison complet | Russian Cases with Anna',
      metaDescription:
        'Aide-mémoire gratuit des terminaisons des cas russes : tableau de déclinaison des noms, terminaisons des adjectifs, pronoms (мой, этот), prépositions par cas. Les 6 cas, tableau par couleurs. À imprimer ou en favoris.',
      keywords: [
        'terminaisons cas russes',
        'tableau terminaisons cas russes',
        'tableau déclinaison russe',
        'terminaisons noms russes par cas',
        'aide-mémoire cas russes',
        'déclinaison adjectifs russes',
      ],
      h1: "Terminaisons des cas russes : l'aide-mémoire ultime",
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: 'Tableau des terminaisons des cas russes avec déclinaison pour les 6 cas',
        width: 1200,
        height: 630,
      },
      intro:
        "Maîtriser les terminaisons des cas russes est le fondement de la grammaire russe. Que vous soyez un parfait débutant essayant de comprendre ce que sont les cas, ou un apprenant intermédiaire qui confond les terminaisons, cet aide-mémoire vous donne tous les tableaux de déclinaison nécessaires en un seul endroit.\n\nMettez cette page en favoris. Imprimez-la. Faites une capture d'écran. C'est la ressource de déclinaison russe à laquelle vous reviendrez encore et encore.",
      whatYouLearn: [
        'Tableau complet de déclinaison des noms russes (tous les genres, singulier et pluriel)',
        'Tableau de déclinaison des adjectifs russes (radicaux durs et doux)',
        'Déclinaison des pronoms personnels (я, ты, он, она, мы, вы, они)',
        'Déclinaison des pronoms possessifs (мой, наш — et comment dériver les autres)',
        'Pronoms démonstratifs (этот / тот)',
        'Tableau de référence préposition → cas',
        'Règles orthographiques clés qui affectent les terminaisons',
      ],
      leadMagnetCta: {
        title: 'Pratiquer les déclinaisons russes de façon interactive',
        description:
          "Notre appli mobile est conçue spécifiquement pour s'entraîner aux cas et déclinaisons russes. Exercices intelligents, répétition espacée et exemples russes réels — sur Android et iOS.",
        ctaText: "Télécharger l'appli et commencer à s'entraîner aujourd'hui",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes : les 6 cas expliqués avec exemples',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Cas datif russe : dire « à » et « pour » en russe',
        },
      ],
      sections: [
        {
          h2: 'Partie 1 : Terminaisons des noms russes — tableau complet',
          content:
            'Le tableau ci-dessous montre les terminaisons des noms russes pour **les 6 cas**, tous les genres (masculin, féminin, neutre), **singulier et pluriel**. Les radicaux durs (les plus courants) et doux sont présentés séparément.',
          subsections: [
            {
              h3: 'Comment lire ce tableau',
              content:
                '**M. dur** = Masculin à radical dur (стол, брат). **M. doux** = Masculin à radical doux (музей, гений). **F. dur** = Féminin en -а (женщина, книга). **F. doux** = Féminin en -я (неделя, земля). **F. (-ь)** = Féminin avec signe mou (ночь, дочь). **N. (-о)** = Neutre dur (окно, слово). **N. (-е)** = Neutre doux (море, поле).',
            },
          ],
          table: {
            caption: 'Terminaisons des noms par cas, genre et nombre',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'M. dur',
              'M. doux',
              'F. dur (-а)',
              'F. doux (-я)',
              'F. (-ь)',
              'N. (-о)',
              'N. (-е)',
            ],
            rows: [
              ['SINGULIER', '', '', '', '', '', '', ''],
              ['Nominatif', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Génitif', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Datif', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Accusatif (inanim.)', '= Nom.', '= Nom.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
              ['Accusatif (anim.)', '= Gen.', '= Gen.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
              ['Instrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Prépositionnel', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['PLURIEL', '', '', '', '', '', '', ''],
              ['Nominatif', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Génitif', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
              ['Datif', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              [
                'Accusatif',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
              ],
              ['Instrumental', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Prépositionnel', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
          bullets: [
            "**Accusatif animé (masc.) :** les noms masculins animés prennent la **forme du génitif** à l'accusatif. Les noms masculins inanimés restent identiques au nominatif.",
            '**Accusatif pluriel :** inanimés = nominatif pluriel ; animés = génitif pluriel.',
            '**Terminaison zéro du génitif pluriel :** de nombreux noms féminins en -а ont une **terminaison zéro** au génitif pluriel (женщина → женщин).',
            '**Règle des 8 lettres :** après **г, к, х, ж, ш, щ, ч, ц** — écrire **И** au lieu de Ы.',
            '**Règle des 7 lettres :** après ж, ш, щ, ч, ц — écrire **А** au lieu de Я, **У** au lieu de Ю en position accentuée.',
          ],
        },
        {
          h2: 'Partie 2 : Tableau de déclinaison des adjectifs russes',
          content:
            "Les adjectifs russes doivent **s'accorder avec le nom** qu'ils modifient en genre, nombre et cas. Ci-dessous le tableau complet de déclinaison des adjectifs russes pour les radicaux **durs** et **doux**.",
          subsections: [
            {
              h3: 'Radicaux durs vs doux',
              content: 'Les adjectifs se divisent en deux groupes :',
              bullets: [
                '**Radical dur** (красный, новый, старый) — Nominatif M : -ый/-ой | Terminaisons avec Ы, О, У',
                '**Radical doux** (синий, последний, летний) — Nominatif M : -ий | Terminaisons avec И, Е, Ю',
              ],
            },
          ],
          table: {
            caption: 'Terminaisons des adjectifs par cas, genre et type de radical',
            boldColumnIndices: [0, 1, 2, 3, 4, 5],
            accentColumnIndices: [0],
            headers: ['Cas', 'M. dur', 'M. doux', 'Fém. dur', 'Fém. doux', 'Neutre', 'Pluriel'],
            rows: [
              ['Nominatif', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
              ['Génitif', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
              ['Datif', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
              ['Acc. (inanim.)', '= Nom.', '= Nom.', '-ую', '-юю', '= Nom.', '= Nom.'],
              ['Acc. (anim.)', '= Gen.', '= Gen.', '-ую', '-юю', '= Nom.', '= Gen.'],
              ['Instrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
              ['Prépositionnel', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
            ],
          },
          bullets: [
            '**Adjectif dur** — новый : новый / нового / новому / **новый(ого)** / новым / новом',
            '**Adjectif doux** — синий : синий / синего / синему / **синий(его)** / синим / синем',
            "**Accord adjectif-nom :** l'adjectif **s'accorde TOUJOURS** avec le nom.",
          ],
        },
        {
          h2: 'Partie 3 : Déclinaison des pronoms personnels russes',
          content:
            'Les pronoms personnels **changent considérablement** selon les cas russes — bien plus que les noms ou adjectifs. Ils doivent être **mémorisés individuellement**.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'я (je)',
              'ты (tu)',
              'он/оно (il)',
              'она (elle)',
              'мы (nous)',
              'вы (vous)',
              'они (ils)',
            ],
            rows: [
              ['Nominatif', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
              ['Génitif', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Datif', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
              ['Accusatif', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Instrumental', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
              ['Prépositionnel', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
            ],
          },
          bullets: [
            '**Règle du préfixe Н- :** après une préposition, on ajoute **Н-** : у него, к ней, с ними.',
            '**Génitif = Accusatif** pour les pronoms personnels : меня, тебя, его, её, нас, вас, их sont identiques.',
          ],
        },
        {
          h2: 'Partie 4 : Pronoms possessifs (мой, наш)',
          content:
            'Les pronoms possessifs se déclinent aussi selon le cas, le genre et le nombre. **твой** et **ваш** suivent les mêmes modèles que мой et наш. **его / её / их** ne se déclinent **PAS** — ils restent invariables.',
          table: {
            caption: 'Déclinaison complète de мой (mon) et наш (notre)',
            boldColumnIndices: [0, 1, 2, 3, 4],
            accentColumnIndices: [0],
            headers: ['Cas', 'Masc.', 'Neutre', 'Fém.', 'Pluriel'],
            rows: [
              ['МОЙ — mon', '', '', '', ''],
              ['Nominatif', 'мой', 'моё', 'моя', 'мои'],
              ['Génitif', 'моего', 'моего', 'моей', 'моих'],
              ['Datif', 'моему', 'моему', 'моей', 'моим'],
              ['Acc. (inanim.)', 'мой', 'моё', 'мою', 'мои'],
              ['Acc. (anim.)', 'моего', 'моё', 'мою', 'моих'],
              ['Instrumental', 'моим', 'моим', 'моей', 'моими'],
              ['Prépositionnel', 'моём', 'моём', 'моей', 'моих'],
              ['НАШ — notre', '', '', '', ''],
              ['Nominatif', 'наш', 'наше', 'наша', 'наши'],
              ['Génitif', 'нашего', 'нашего', 'нашей', 'наших'],
              ['Datif', 'нашему', 'нашему', 'нашей', 'нашим'],
              ['Acc. (inanim.)', 'наш', 'наше', 'нашу', 'наши'],
              ['Acc. (anim.)', 'нашего', 'наше', 'нашу', 'наших'],
              ['Instrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
              ['Prépositionnel', 'нашем', 'нашем', 'нашей', 'наших'],
            ],
          },
        },
        {
          h2: 'Partie 5 : Pronoms démonstratifs (этот / тот)',
          content:
            '**Этот** (ce/cet) et **тот** (ce/cet-là) se déclinent selon le cas, le genre et le nombre et sont très fréquents en russe parlé.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'этот (M)',
              'это (N)',
              'эта (F)',
              'эти (Pl)',
              'тот (M) / та (F)',
              'те (Pl)',
            ],
            rows: [
              ['Nominatif', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
              ['Génitif', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
              ['Datif', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
              ['Acc. (inanim.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
              ['Acc. (anim.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
              ['Instrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
              ['Prépositionnel', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
            ],
          },
        },
        {
          h2: 'Partie 6 : Référence rapide prépositions → cas',
          content:
            'Ce tableau associe chaque préposition russe importante au **cas requis**. Apprendre les prépositions **avec leur cas** est essentiel.',
          subsections: [
            {
              h3: 'Important : в et на sont des prépositions à double cas',
              content:
                '**в / на + Accusatif** = DIRECTION (mouvement vers un lieu). **в / на + Prépositionnel** = LIEU (être dans/à un lieu). Exemple : Я иду в школу. (aller → accusatif) vs. Я в школе. (être là → prépositionnel).',
            },
          ],
          table: {
            boldColumnIndices: [0, 1],
            accentColumnIndices: [0],
            headers: ['Cas', 'Prépositions', 'Exemples'],
            rows: [
              [
                'Génitif',
                'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
                'из России, без воды, после урока',
              ],
              [
                'Datif',
                'к, по, благодаря, вопреки, согласно, навстречу',
                'к другу, по улице, благодаря тебе',
              ],
              [
                'Accusatif',
                'в, на (direction), за, через, под (mouvement), про, о',
                'в школу, на работу, через час',
              ],
              [
                'Instrumental',
                'с, за (position), над, под (position), перед, между, рядом с',
                'с другом, над столом, перед домом',
              ],
              [
                'Prépositionnel',
                'в, на (lieu), о/об, при, по (après certains verbes)',
                'в Москве, о работе, при советах',
              ],
            ],
          },
        },
        {
          h2: 'Comment utiliser cet aide-mémoire efficacement',
          subsections: [
            {
              h3: 'Étape 1 — Commencer par les noms',
              content:
                "Le **tableau de déclinaison des noms** est la base. Maîtrisez-le d'abord. Concentrez-vous sur les modèles les plus courants : masculin dur, féminin dur, neutre dur.",
            },
            {
              h3: 'Étape 2 — Puis les adjectifs',
              content:
                'Une fois les terminaisons des noms connues, celles des adjectifs deviennent plus faciles — ils suivent une logique similaire. Commencez par les **adjectifs à radical dur** (новый), puis **doux** (синий).',
            },
            {
              h3: 'Étape 3 — Mémoriser les pronoms séparément',
              content:
                '**Les formes des pronoms sont irrégulières** et doivent être mémorisées individuellement. Utilisez des cartes mémo ou une appli de répétition espacée.',
            },
            {
              h3: 'Étape 4 — Les prépositions fixent les cas',
              content:
                'Les prépositions sont le **raccourci le plus rapide** pour le bon cas : si vous savez que **без** prend toujours le génitif et **к** le datif, vous avez déjà le cas.',
            },
            {
              h3: 'Étape 5 — Pratiquer avec de vraies phrases',
              content:
                'Les tableaux ne suffisent pas. Pratiquez les terminaisons dans **de vraies phrases russes** — lisez, écoutez et observez comment les natifs utilisent les formes déclinées.',
            },
          ],
        },
      ],
      conclusion:
        "Cet aide-mémoire couvre **tout** : **les 6 cas** pour les noms (tous genres, singulier et pluriel), les adjectifs (radicaux durs et doux), les pronoms personnels, possessifs, démonstratifs et les paires préposition-cas.\n\n**Gardez cette référence à portée de main** pendant vos études. Plus vous l'utiliserez avec une pratique réelle du russe, plus vite ces terminaisons passeront de la mémoire consciente à la reconnaissance automatique.",
      conclusionOutro: 'Pour une explication complète de chaque cas, explorez nos guides :',
      ctaText: "S'entraîner aux cas russes avec notre appli",
      ctaHref: '/',
      faq: [
        {
          question: 'Quelle terminaison de cas russe est la plus difficile à apprendre ?',
          answer:
            "Le **génitif pluriel** est considéré comme le plus difficile car il a plusieurs formes concurrentes. Par exemple, les noms féminins en -а ont une **terminaison zéro** (женщина → женщин), d'autres **-ей** (ночь → ночей) ou **-ов/-ев**.",
        },
        {
          question: "Les adjectifs russes s'accordent-ils toujours avec le nom ?",
          answer:
            "Oui, **toujours**. Un adjectif russe doit **s'accorder** avec son nom en genre, nombre et cas. C'est ce qu'on appelle l'accord grammatical.",
        },
        {
          question: 'Existe-t-il des noms russes qui ne se déclinent pas ?',
          answer:
            'Oui. Un petit groupe de **mots empruntés** ne changent jamais : **кофе** (café), **метро** (métro), **пальто** (manteau), **такси** (taxi), **кино** (cinéma).',
        },
        {
          question: 'Comment savoir si un nom est animé ou inanimé ?',
          answer:
            '**Animés** = personnes et animaux (человек, кот, студент, врач). **Inanimés** = objets, concepts (стол, книга, любовь, время).',
        },
        {
          question: 'Quelle est la différence entre génitif et accusatif pour les noms animés ?',
          answer:
            "Pour les **noms masculins animés**, la forme accusatif est **identique** au génitif. C'est la règle bien connue **accusatif animé = génitif**.",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "Terminaisons des cas russes : l'aide-mémoire ultime",
        description:
          'Aide-mémoire complet des terminaisons des cas russes : tableau de déclinaison des noms, adjectifs, pronoms, prépositions par cas. Les 6 cas en un tableau.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
        },
        keywords:
          'terminaisons cas russes, tableau terminaisons cas russes, tableau déclinaison russe, aide-mémoire cas russes',
      },
    },
    de_de: {
      slug: 'russian-case-endings-cheatsheet',
      title: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
      metaTitle:
        'Russische Fallendungen Spickzettel | Vollständige Deklinationstabelle | Russian Cases with Anna',
      metaDescription:
        'Kostenloser Spickzettel zu russischen Fallendungen: Substantiv-Deklinationstabelle, Adjektivendungen, Pronomen (мой, этот), Präpositionen nach Fall. Alle 6 Fälle, farbcodierte Tabelle.',
      keywords: [
        'russische Fallendungen',
        'russische Fallendungen Tabelle',
        'russische Deklinationstabelle',
        'russische Substantivendungen nach Fall',
        'russische Fälle Spickzettel',
        'russische Adjektivdeklination',
      ],
      h1: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: 'Russische Fallendungen Master-Tabelle mit Deklinationstabelle für alle 6 Fälle',
        width: 1200,
        height: 630,
      },
      intro:
        'Russische Fallendungen zu meistern ist das Rückgrat der russischen Grammatik. Ob Sie absoluter Anfänger sind, der verstehen will, was Fälle sind, oder fortgeschrittener Lernender, der Endungen verwechselt – dieser Spickzettel bietet jede Deklinationstabelle an einem Ort.\n\nLesezeichen setzen. Ausdrucken. Screenshot machen. Dies ist die russische Deklinationstabelle, zu der Sie immer wieder zurückkehren werden.',
      whatYouLearn: [
        'Vollständige russische Substantiv-Deklinationstabelle (alle Genera, Singular & Plural)',
        'Russische Adjektiv-Deklinationstabelle (hart & weich)',
        'Personalpronomen-Deklination (я, ты, он, она, мы, вы, они)',
        'Possessivpronomen-Deklination (мой, наш – und Ableitung der anderen)',
        'Demonstrativpronomen (этот / тот)',
        'Präposition → Fall Referenztabelle',
        'Wichtige Rechtschreibregeln, die Endungen beeinflussen',
      ],
      leadMagnetCta: {
        title: 'Russische Deklinationen interaktiv üben',
        description:
          'Unsere mobile App ist speziell zum Üben russischer Fälle und Deklinationen entwickelt. Intelligente Übungen, Intervallwiederholung, echte russische Beispiele – auf Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Russischer Dativ: „An" und „für" auf Russisch',
        },
      ],
      sections: [
        {
          h2: 'Teil 1: Russische Substantiv-Fallendungen — Vollständige Tabelle',
          content:
            'Die Tabelle zeigt die russischen Substantivendungen für **alle 6 Fälle**, alle Genera (maskulin, feminin, neutrum), **Singular und Plural**. Hart- und Weichstämme sind getrennt dargestellt.',
          subsections: [
            {
              h3: 'So lesen Sie diese Tabelle',
              content:
                '**M. hart** = Maskulin hart (стол, брат). **M. weich** = Maskulin weich (музей, гений). **F. hart** = Feminin auf -а (женщина, книга). **F. weich** = Feminin auf -я (неделя, земля). **F. (-ь)** = Feminin weiches Zeichen (ночь, дочь). **N. (-о)** = Neutrum hart (окно, слово). **N. (-е)** = Neutrum weich (море, поле).',
            },
          ],
          table: {
            caption: 'Substantivendungen nach Fall, Genus und Numerus',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Fall',
              'M. hart',
              'M. weich',
              'F. hart (-а)',
              'F. weich (-я)',
              'F. (-ь)',
              'N. (-о)',
              'N. (-е)',
            ],
            rows: [
              ['SINGULAR', '', '', '', '', '', '', ''],
              ['Nominativ', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Genitiv', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Dativ', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Akkusativ (unbel.)', '= Nom.', '= Nom.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
              ['Akkusativ (bel.)', '= Gen.', '= Gen.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
              ['Instrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Präpositiv', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['PLURAL', '', '', '', '', '', '', ''],
              ['Nominativ', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Genitiv', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
              ['Dativ', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              [
                'Akkusativ',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
                '= Nom./Gen.',
              ],
              ['Instrumental', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Präpositiv', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
          bullets: [
            '**Akkusativ belebt (mask.):** belebte mask. Substantive nehmen die **Genitivform** im Akkusativ. Unbelebte bleiben wie im Nominativ.',
            '**Akkusativ Plural:** unbelebte = Nominativ Plural; belebte = Genitiv Plural.',
            '**Genitiv Plural Nullendung:** viele Feminin-а-Substantive haben im Genitiv Plural eine **Nullendung** (женщина → женщин).',
            '**8-Buchstaben-Regel:** nach **г, к, х, ж, ш, щ, ч, ц** — schreiben Sie **И** statt Ы.',
            '**7-Buchstaben-Regel:** nach ж, ш, щ, ч, ц — **А** statt Я, **У** statt Ю in betonten Positionen.',
          ],
        },
        {
          h2: 'Teil 2: Russische Adjektiv-Deklinationstabelle',
          content:
            'Russische Adjektive müssen mit dem Substantiv in Genus, Numerus und Fall **übereinstimmen**. Unten die vollständige Adjektiv-Deklinationstabelle für **Hart-** und **Weichstamm**-Adjektive.',
          subsections: [
            {
              h3: 'Hart vs. Weich Adjektivstämme',
              content: 'Adjektive teilen sich in zwei Gruppen:',
              bullets: [
                '**Hartstamm** (красный, новый, старый) — Nominativ M: -ый/-ой | Endungen mit Ы, О, У',
                '**Weichstamm** (синий, последний, летний) — Nominativ M: -ий | Endungen mit И, Е, Ю',
              ],
            },
          ],
          table: {
            caption: 'Adjektivendungen nach Fall, Genus und Stammtyp',
            boldColumnIndices: [0, 1, 2, 3, 4, 5],
            accentColumnIndices: [0],
            headers: [
              'Fall',
              'M. hart',
              'M. weich',
              'Fem. hart',
              'Fem. weich',
              'Neutrum',
              'Plural',
            ],
            rows: [
              ['Nominativ', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
              ['Genitiv', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
              ['Dativ', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
              ['Akk. (unbel.)', '= Nom.', '= Nom.', '-ую', '-юю', '= Nom.', '= Nom.'],
              ['Akk. (bel.)', '= Gen.', '= Gen.', '-ую', '-юю', '= Nom.', '= Gen.'],
              ['Instrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
              ['Präpositiv', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
            ],
          },
          bullets: [
            '**Hartes Adjektiv** — новый: новый / нового / новому / новый(ого) / новым / новом',
            '**Weiches Adjektiv** — синий: синий / синего / синему / синий(его) / синим / синем',
            '**Adjektiv-Substantiv-Kongruenz:** das Adjektiv stimmt **IMMER** mit dem Substantiv überein.',
          ],
        },
        {
          h2: 'Teil 3: Russische Personalpronomen-Deklination',
          content:
            'Personalpronomen ändern sich **dramatisch** über die russischen Fälle – weit mehr als Substantive oder Adjektive. Sie müssen **einzeln memoriert** werden.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Fall',
              'я (ich)',
              'ты (du)',
              'он/оно (er/es)',
              'она (sie)',
              'мы (wir)',
              'вы (ihr)',
              'они (sie)',
            ],
            rows: [
              ['Nominativ', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
              ['Genitiv', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Dativ', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
              ['Akkusativ', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Instrumental', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
              ['Präpositiv', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
            ],
          },
          bullets: [
            '**Н-Prefix-Regel:** Bei Präpositionen wird **Н-** hinzugefügt: у него, к ней, с ними.',
            '**Genitiv = Akkusativ** bei Personalpronomen: меня, тебя, его, её, нас, вас, их sind identisch.',
          ],
        },
        {
          h2: 'Teil 4: Possessivpronomen (мой, наш)',
          content:
            'Possessivpronomen deklinieren ebenfalls nach Fall, Genus und Numerus. **твой** und **ваш** folgen den gleichen Mustern wie мой bzw. наш. **его / её / их** deklinieren **NICHT** – sie bleiben unverändert.',
          table: {
            caption: 'мой (mein) und наш (unser) vollständige Deklination',
            boldColumnIndices: [0, 1, 2, 3, 4],
            accentColumnIndices: [0],
            headers: ['Fall', 'Mask.', 'Neutrum', 'Fem.', 'Plural'],
            rows: [
              ['МОЙ — mein', '', '', '', ''],
              ['Nominativ', 'мой', 'моё', 'моя', 'мои'],
              ['Genitiv', 'моего', 'моего', 'моей', 'моих'],
              ['Dativ', 'моему', 'моему', 'моей', 'моим'],
              ['Akk. (unbel.)', 'мой', 'моё', 'мою', 'мои'],
              ['Akk. (bel.)', 'моего', 'моё', 'мою', 'моих'],
              ['Instrumental', 'моим', 'моим', 'моей', 'моими'],
              ['Präpositiv', 'моём', 'моём', 'моей', 'моих'],
              ['НАШ — unser', '', '', '', ''],
              ['Nominativ', 'наш', 'наше', 'наша', 'наши'],
              ['Genitiv', 'нашего', 'нашего', 'нашей', 'наших'],
              ['Dativ', 'нашему', 'нашему', 'нашей', 'нашим'],
              ['Akk. (unbel.)', 'наш', 'наше', 'нашу', 'наши'],
              ['Akk. (bel.)', 'нашего', 'наше', 'нашу', 'наших'],
              ['Instrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
              ['Präpositiv', 'нашем', 'нашем', 'нашей', 'наших'],
            ],
          },
        },
        {
          h2: 'Teil 5: Demonstrativpronomen (этот / тот)',
          content:
            '**Этот** (dieser) und **тот** (jener) deklinieren nach Fall, Genus und Numerus und sind im gesprochenen Russisch sehr häufig.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Fall',
              'этот (M)',
              'это (N)',
              'эта (F)',
              'эти (Pl)',
              'тот (M) / та (F)',
              'те (Pl)',
            ],
            rows: [
              ['Nominativ', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
              ['Genitiv', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
              ['Dativ', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
              ['Akk. (unbel.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
              ['Akk. (bel.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
              ['Instrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
              ['Präpositiv', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
            ],
          },
        },
        {
          h2: 'Teil 6: Russische Präpositionen → Fall Schnellreferenz',
          content:
            'Diese Tabelle ordnet jede wichtige russische Präposition dem **erforderlichen Fall** zu. Präpositionen **zusammen mit ihrem Fall** zu lernen ist essenziell.',
          subsections: [
            {
              h3: 'Wichtig: в und на sind Zwei-Fall-Präpositionen',
              content:
                '**в / на + Akkusativ** = RICHTUNG (Bewegung zu einem Ort). **в / на + Präpositiv** = ORT (sich an einem Ort befinden). Beispiel: Я иду в школу. (gehen → Akkusativ) vs. Я в школе. (dort sein → Präpositiv).',
            },
          ],
          table: {
            boldColumnIndices: [0, 1],
            accentColumnIndices: [0],
            headers: ['Fall', 'Präpositionen', 'Beispiele'],
            rows: [
              [
                'Genitiv',
                'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
                'из России, без воды, после урока',
              ],
              [
                'Dativ',
                'к, по, благодаря, вопреки, согласно, навстречу',
                'к другу, по улице, благодаря тебе',
              ],
              [
                'Akkusativ',
                'в, на (Richtung), за, через, под (Bewegung), про, о',
                'в школу, на работу, через час',
              ],
              [
                'Instrumental',
                'с, за (Position), над, под (Position), перед, между, рядом с',
                'с другом, над столом, перед домом',
              ],
              [
                'Präpositiv',
                'в, на (Ort), о/об, при, по (nach bestimmten Verben)',
                'в Москве, о работе, при советах',
              ],
            ],
          },
        },
        {
          h2: 'So nutzen Sie diesen Spickzettel effektiv',
          subsections: [
            {
              h3: 'Schritt 1 — Mit Substantiven beginnen',
              content:
                'Die **Substantiv-Deklinationstabelle** ist die Grundlage. Meistern Sie sie zuerst. Konzentrieren Sie sich auf die häufigsten Muster: maskulin hart, feminin hart, neutrum hart.',
            },
            {
              h3: 'Schritt 2 — Als Nächstes Adjektive',
              content:
                'Sobald Sie Substantivendungen kennen, werden Adjektivendungen viel einfacher – sie folgen einer ähnlichen Logik. Beginnen Sie mit **Hartstamm-Adjektiven** (новый), dann **Weichstamm** (синий).',
            },
            {
              h3: 'Schritt 3 — Pronomen separat memorieren',
              content:
                '**Pronomenformen sind unregelmäßig** und müssen einzeln memoriert werden. Nutzen Sie Karteikarten oder eine SRS-App.',
            },
            {
              h3: 'Schritt 4 — Präpositionen festigen die Fälle',
              content:
                'Präpositionen sind der **schnellste Weg** zum richtigen Fall: Wenn Sie wissen, dass **без** immer den Genitiv verlangt und **к** den Dativ, haben Sie den Fall bereits festgelegt.',
            },
            {
              h3: 'Schritt 5 — Mit echten Sätzen üben',
              content:
                'Tabellen allein reichen nicht. Üben Sie die Endungen in **echten russischen Sätzen** – lesen, hören und achten Sie darauf, wie Muttersprachler dekliniert Formen verwenden.',
            },
          ],
        },
      ],
      conclusion:
        'Dieser Spickzettel deckt **alles** ab: **alle 6 Fälle** für Substantive (alle Genera, Singular und Plural), Adjektive (hart und weich), Personalpronomen, Possessivpronomen, Demonstrativpronomen und Präposition-Fall-Paare.\n\n**Behalten Sie diese Referenz griffbereit** beim Lernen. Je mehr Sie sie mit echtem Russisch kombinieren, desto schneller werden die Endungen von bewusster Erinnerung zu automatischer Erkennung.',
      conclusionOutro: 'Für eine vollständige Erklärung jedes Falls erkunden Sie unsere Leitfäden:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Welche russische Fallendung ist am schwersten zu lernen?',
          answer:
            'Der **Genitiv Plural** gilt als am schwierigsten wegen mehrerer konkurrierender Formen. Feminin-а-Substantive haben z.B. eine **Nullendung** (женщина → женщин), andere **-ей** (ночь → ночей) oder **-ов/-ев**.',
        },
        {
          question: 'Stimmen russische Adjektive immer mit dem Substantiv überein?',
          answer:
            'Ja, **immer**. Ein russisches Adjektiv muss in Genus, Numerus und Fall **mit dem Substantiv übereinstimmen**. Das nennt man grammatische Kongruenz.',
        },
        {
          question: 'Gibt es russische Substantive, die überhaupt nicht dekliniert werden?',
          answer:
            'Ja. Eine kleine Gruppe **entlehnter Fremdwörter** ändert sich nie: **кофе** (Kaffee), **метро** (U-Bahn), **пальто** (Mantel), **такси** (Taxi), **кино** (Kino).',
        },
        {
          question: 'Woher weiß ich, ob ein Substantiv belebt oder unbelebt ist?',
          answer:
            '**Belebt** = Menschen und Tiere (человек, кот, студент, врач). **Unbelebt** = Gegenstände, Konzepte (стол, книга, любовь, время).',
        },
        {
          question:
            'Was ist der Unterschied zwischen Genitiv und Akkusativ bei belebten Substantiven?',
          answer:
            'Bei **belebten maskulinen** Substantiven ist die Akkusativform **identisch** mit dem Genitiv. Das ist die berühmte Regel **belebter Akkusativ = Genitiv**.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        description:
          'Vollständiger Spickzettel zu russischen Fallendungen: Substantiv-Deklinationstabelle, Adjektivendungen, Pronomen, Präpositionen nach Fall. Alle 6 Fälle in einer Tabelle.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
        },
        keywords:
          'russische Fallendungen, russische Fallendungen Tabelle, russische Deklinationstabelle, russische Substantivendungen, russische Fälle Spickzettel, russische Adjektivdeklination',
      },
    },
    tr_tr: {
      slug: 'russian-case-endings-cheatsheet',
      title: 'Rusça hal ekleri: Nihai kopya kağıdı ve tablo',
      metaTitle: 'Rusça hal ekleri kopya kağıdı | Tam çekim tablosu | Russian Cases with Anna',
      metaDescription:
        'Rusça hal ekleri için ücretsiz kopya kağıdı: İsim çekim tablosu, sıfat ekleri, zamirler (мой, этот), edatlara göre haller. 6 hal, renkli tablo.',
      keywords: [
        'Rusça hal ekleri',
        'Rusça hal ekleri tablosu',
        'Rusça çekim tablosu',
        'Rusça isim ekleri hale göre',
        'Rusça haller kopya kağıdı',
        'Rusça sıfat çekimi',
      ],
      h1: 'Rusça hal ekleri: Nihai kopya kağıdı ve tablo',
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: '6 hal için çekim tablosuyla Rusça hal ekleri master tablosu',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça hal eklerinde ustalaşmak Rusça gramerin belkemiğidir. Hallerin ne olduğunu anlamak isteyen tam yeni başlayan veya ekleri karıştıran ileri seviye öğrenci olun — bu kopya kağıdı her çekim tablosunu tek yerde sunar.\n\nYer imi ekleyin. Yazdırın. Ekran görüntüsü alın. Her zaman geri döneceğiniz Rusça çekim tablosu budur.',
      whatYouLearn: [
        'Tam Rusça isim çekim tablosu (tüm cinsiyetler, tekil ve çoğul)',
        'Rusça sıfat çekim tablosu (sert ve yumuşak)',
        'Kişi zamiri çekimi (я, ты, он, она, мы, вы, они)',
        'İyelik zamiri çekimi (мой, наш — ve diğerlerinin türetimi)',
        'İşaret zamirleri (этот / тот)',
        'Edat → Hal referans tablosu',
        'Ekleri etkileyen önemli yazım kuralları',
      ],
      leadMagnetCta: {
        title: 'Rusça çekimleri interaktif pratik edin',
        description:
          'Mobil uygulamamız Rusça halleri ve çekimleri pratik etmek için özel olarak geliştirilmiştir. Akıllı alıştırmalar, aralıklı tekrar, gerçek Rusça örnekler — Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve bugün pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: "Rusçada datif: 'Kime' ve 'için' nasıl söylenir",
        },
      ],
      sections: [
        {
          h2: 'Bölüm 1: Rusça isim hal ekleri — Tam tablo',
          content:
            'Tablo **6 hal**, tüm cinsiyetler (eril, dişil, nötr), **tekil ve çoğul** için Rusça isim eklerini gösterir. Sert ve yumuşak gövdeler ayrı gösterilmiştir.',
          subsections: [
            {
              h3: 'Bu tabloyu nasıl okursunuz',
              content:
                '**Er. sert** = Eril sert (стол, брат). **Er. yumuşak** = Eril yumuşak (музей, гений). **Diş. sert** = -а ile dişil (женщина, книга). **Diş. yumuşak** = -я ile dişil (неделя, земля). **Diş. (-ь)** = Yumuşak işaretli dişil (ночь, дочь). **Nötr. (-о)** = Sert nötr (окно, слово). **Nötr. (-е)** = Yumuşak nötr (море, поле).',
            },
          ],
          table: {
            caption: 'Hale, cinsiyete ve sayıya göre isim ekleri',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Hal',
              'Er. sert',
              'Er. yumuşak',
              'Diş. sert (-а)',
              'Diş. yumuşak (-я)',
              'Diş. (-ь)',
              'Nötr. (-о)',
              'Nötr. (-е)',
            ],
            rows: [
              ['TEKİL', '', '', '', '', '', '', ''],
              ['İsim', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Genitif', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Datif', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Akkusatif (cansız)', '= İsim', '= İsim', '-у', '-ю', '-ь', '= İsim', '= İsim'],
              ['Akkusatif (canlı)', '= Gen.', '= Gen.', '-у', '-ю', '-ь', '= İsim', '= İsim'],
              ['Enstrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Lokatif', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['ÇOĞUL', '', '', '', '', '', '', ''],
              ['İsim', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Genitif', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
              ['Datif', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              [
                'Akkusatif',
                '= İsim/Gen.',
                '= İsim/Gen.',
                '= İsim/Gen.',
                '= İsim/Gen.',
                '= İsim/Gen.',
                '= İsim/Gen.',
                '= İsim/Gen.',
              ],
              ['Enstrumental', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Lokatif', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
          bullets: [
            '**Canlı akkusatif (er.):** Canlı eril isimler akkusatifte **genitif formu** alır. Cansızlar isim halinde kalır.',
            '**Çoğul akkusatif:** cansız = İsim hali çoğul; canlı = Genitif çoğul.',
            '**Çoğul genitif sıfır eki:** Birçok dişil -а isminin çoğul genitifinde **sıfır ek** vardır (женщина → женщин).',
            '**8 harf kuralı:** **г, к, х, ж, ш, щ, ч, ц** sonrasında — Ы yerine İ yazılır.',
            '**7 harf kuralı:** ж, ш, щ, ч, ц sonrasında — vurgulu konumlarda Я yerine **А**, Ю yerine **У**.',
          ],
        },
        {
          h2: 'Bölüm 2: Rusça sıfat çekim tablosu',
          content:
            'Rusça sıfatlar isimle cinsiyet, sayı ve halde **uyumlu** olmalıdır. Aşağıda **sert** ve **yumuşak gövdeli** sıfatlar için tam çekim tablosu.',
          subsections: [
            {
              h3: 'Sert vs yumuşak sıfat gövdeleri',
              content: 'Sıfatlar iki gruba ayrılır:',
              bullets: [
                '**Sert gövde** (красный, новый, старый) — İsim hali Er.: -ый/-ой | Ы, О, У ile ekler',
                '**Yumuşak gövde** (синий, последний, летний) — İsim hali Er.: -ий | İ, Е, Ю ile ekler',
              ],
            },
          ],
          table: {
            caption: 'Hale, cinsiyete ve gövde tipine göre sıfat ekleri',
            boldColumnIndices: [0, 1, 2, 3, 4, 5],
            accentColumnIndices: [0],
            headers: [
              'Hal',
              'Er. sert',
              'Er. yumuşak',
              'Diş. sert',
              'Diş. yumuşak',
              'Nötr',
              'Çoğul',
            ],
            rows: [
              ['İsim', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
              ['Genitif', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
              ['Datif', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
              ['Akk. (cansız)', '= İsim', '= İsim', '-ую', '-юю', '= İsim', '= İsim'],
              ['Akk. (canlı)', '= Gen.', '= Gen.', '-ую', '-юю', '= İsim', '= Gen.'],
              ['Enstrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
              ['Lokatif', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
            ],
          },
          bullets: [
            '**Sert sıfat** — новый: новый / нового / новому / новый(ого) / новым / новом',
            '**Yumuşak sıfat** — синий: синий / синего / синему / синий(его) / синим / синем',
            '**Sıfat-isim uyumu:** Sıfat isimle **HER ZAMAN** uyumlu olmalıdır.',
          ],
        },
        {
          h2: 'Bölüm 3: Rusça kişi zamiri çekimi',
          content:
            'Kişi zamirleri Rusça hallerde **dramatik** değişir — isimler veya sıfatlardan çok daha fazla. **Tek tek ezberlenmelidir**.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Hal',
              'я (ben)',
              'ты (sen)',
              'он/оно (o)',
              'она (o)',
              'мы (biz)',
              'вы (siz)',
              'они (onlar)',
            ],
            rows: [
              ['İsim', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
              ['Genitif', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Datif', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
              ['Akkusatif', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Enstrumental', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
              ['Lokatif', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
            ],
          },
          bullets: [
            '**Н-ön eki kuralı:** Edatlarla **Н-** eklenir: у него, к ней, с ними.',
            'Kişi zamirlerinde **Genitif = Akkusatif**: меня, тебя, его, её, нас, вас, их aynıdır.',
          ],
        },
        {
          h2: 'Bölüm 4: İyelik zamirleri (мой, наш)',
          content:
            'İyelik zamirleri de hal, cinsiyet ve sayıya göre çekimlenir. **твой** ve **ваш** мой ve наш ile aynı kalıpları izler. **его / её / их** çekimlen**mez** — değişmeden kalır.',
          table: {
            caption: 'мой (benim) ve наш (bizim) tam çekimi',
            boldColumnIndices: [0, 1, 2, 3, 4],
            accentColumnIndices: [0],
            headers: ['Hal', 'Er.', 'Nötr', 'Diş.', 'Çoğul'],
            rows: [
              ['МОЙ — benim', '', '', '', ''],
              ['İsim', 'мой', 'моё', 'моя', 'мои'],
              ['Genitif', 'моего', 'моего', 'моей', 'моих'],
              ['Datif', 'моему', 'моему', 'моей', 'моим'],
              ['Akk. (cansız)', 'мой', 'моё', 'мою', 'мои'],
              ['Akk. (canlı)', 'моего', 'моё', 'мою', 'моих'],
              ['Enstrumental', 'моим', 'моим', 'моей', 'моими'],
              ['Lokatif', 'моём', 'моём', 'моей', 'моих'],
              ['НАШ — bizim', '', '', '', ''],
              ['İsim', 'наш', 'наше', 'наша', 'наши'],
              ['Genitif', 'нашего', 'нашего', 'нашей', 'наших'],
              ['Datif', 'нашему', 'нашему', 'нашей', 'нашим'],
              ['Akk. (cansız)', 'наш', 'наше', 'нашу', 'наши'],
              ['Akk. (canlı)', 'нашего', 'наше', 'нашу', 'наших'],
              ['Enstrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
              ['Lokatif', 'нашем', 'нашем', 'нашей', 'наших'],
            ],
          },
        },
        {
          h2: 'Bölüm 5: İşaret zamirleri (этот / тот)',
          content:
            '**Этот** (bu) ve **тот** (şu) hal, cinsiyet ve sayıya göre çekimlenir ve konuşma Rusçasında çok yaygındır.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Hal',
              'этот (Er)',
              'это (Nötr)',
              'эта (Diş)',
              'эти (Çoğul)',
              'тот (Er) / та (Diş)',
              'те (Çoğul)',
            ],
            rows: [
              ['İsim', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
              ['Genitif', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
              ['Datif', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
              ['Akk. (cansız)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
              ['Akk. (canlı)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
              ['Enstrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
              ['Lokatif', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
            ],
          },
        },
        {
          h2: 'Bölüm 6: Rusça edatlar → Hal hızlı referans',
          content:
            'Bu tablo her önemli Rusça edatı **gerekli hale** atar. Edatları **halleriyle birlikte** öğrenmek esastır.',
          subsections: [
            {
              h3: 'Önemli: в ve на iki-halli edatlardır',
              content:
                '**в / на + Akkusatif** = YÖN (yere hareket). **в / на + Lokatif** = YER (yerde bulunma). Örnek: Я иду в школу. (gitmek → Akkusatif) vs. Я в школе. (orada olmak → Lokatif).',
            },
          ],
          table: {
            boldColumnIndices: [0, 1],
            accentColumnIndices: [0],
            headers: ['Hal', 'Edatlar', 'Örnekler'],
            rows: [
              [
                'Genitif',
                'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
                'из России, без воды, после урока',
              ],
              [
                'Datif',
                'к, по, благодаря, вопреки, согласно, навстречу',
                'к другу, по улице, благодаря тебе',
              ],
              [
                'Akkusatif',
                'в, на (yön), за, через, под (hareket), про, о',
                'в школу, на работу, через час',
              ],
              [
                'Enstrumental',
                'с, за (konum), над, под (konum), перед, между, рядом с',
                'с другом, над столом, перед домом',
              ],
              [
                'Lokatif',
                'в, на (yer), о/об, при, по (bazı fiillerden sonra)',
                'в Москве, о работе, при советах',
              ],
            ],
          },
        },
        {
          h2: 'Bu kopya kağıdını etkili kullanma',
          subsections: [
            {
              h3: 'Adım 1 — İsimlerle başlayın',
              content:
                '**İsim çekim tablosu** temeldir. Önce ona hakim olun. En yaygın kalıplara odaklanın: eril sert, dişil sert, nötr sert.',
            },
            {
              h3: 'Adım 2 — Sonra sıfatlar',
              content:
                'İsim eklerini bildikten sonra sıfat ekleri çok daha kolay olacak — benzer bir mantık izlerler. **Sert gövdeli sıfatlarla** (новый) başlayın, sonra **yumuşak** (синий).',
            },
            {
              h3: 'Adım 3 — Zamirleri ayrı ezberleyin',
              content:
                '**Zamir formları düzensizdir** ve tek tek ezberlenmelidir. Flash kart veya SRS uygulaması kullanın.',
            },
            {
              h3: 'Adım 4 — Edatlar halleri pekiştirir',
              content:
                'Edatlar doğru hal için **en hızlı yoldur**: **без** her zaman genitif, **к** datif gerektirir — hal zaten belirlenmiştir.',
            },
            {
              h3: 'Adım 5 — Gerçek cümlelerle pratik yapın',
              content:
                'Tablolar tek başına yeterli değildir. Ekleri **gerçek Rusça cümlelerde** pratik edin — okuyun, dinleyin ve anadili konuşanların çekimli formları nasıl kullandığına dikkat edin.',
            },
          ],
        },
      ],
      conclusion:
        'Bu kopya kağıdı **hepsini** kapsar: İsimler için **6 hal** (tüm cinsiyetler, tekil ve çoğul), sıfatlar (sert ve yumuşak), kişi zamirleri, iyelik zamirleri, işaret zamirleri ve edat-hal çiftleri.\n\n**Bu referansı elinizin altında tutun** öğrenirken. Gerçek Rusça ile ne kadar birleştirirseniz, ekler bilinçli hatırlamadan otomatik tanımaya o kadar hızlı geçer.',
      conclusionOutro: 'Her halin tam açıklaması için rehberlerimizi keşfedin:',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Öğrenmesi en zor Rusça hal eki hangisi?',
          answer:
            '**Çoğul genitif** birkaç rekabet eden form nedeniyle en zor kabul edilir. Örn. Dişil -а isimlerinde **sıfır ek** vardır (женщина → женщин), diğerlerinde **-ей** (ночь → ночей) veya **-ов/-ев**.',
        },
        {
          question: 'Rusça sıfatlar her zaman isimle uyumlu mu?',
          answer:
            'Evet, **her zaman**. Rusça sıfat cinsiyet, sayı ve halde isimle **uyumlu olmalıdır**. Buna dilbilgisel uyum denir.',
        },
        {
          question: 'Hiç çekimlenmeyen Rusça isimler var mı?',
          answer:
            'Evet. **Alıntı yabancı kelimelerden** oluşan küçük bir grup asla değişmez: **кофе** (kahve), **метро** (metro), **пальто** (palto), **такси** (taksi), **кино** (sinema).',
        },
        {
          question: 'Bir ismin canlı mı cansız mı olduğunu nasıl bilirim?',
          answer:
            '**Canlı** = İnsanlar ve hayvanlar (человек, кот, студент, врач). **Cansız** = Nesneler, kavramlar (стол, книга, любовь, время).',
        },
        {
          question: 'Canlı isimlerde genitif ve akkusatif arasındaki fark nedir?',
          answer:
            '**Canlı eril** isimlerde akkusatif form **genitif ile aynıdır**. Bu ünlü **canlı akkusatif = genitif** kuralıdır.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça hal ekleri: Nihai kopya kağıdı ve tablo',
        description:
          'Rusça hal ekleri tam kopya kağıdı: İsim çekim tablosu, sıfat ekleri, zamirler, hale göre edatlar. 6 hal tek tabloda.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
        },
        keywords:
          'Rusça hal ekleri, Rusça hal ekleri tablosu, Rusça çekim tablosu, Rusça isim ekleri, Rusça haller kopya kağıdı, Rusça sıfat çekimi',
      },
    },
    pl_pl: {
      slug: 'russian-case-endings-cheatsheet',
      title: 'Końcówki przypadków rosyjskich: Ostateczna ściąga i tabela',
      metaTitle:
        'Końcówki przypadków rosyjskich | Pełna tabela deklinacji | Russian Cases with Anna',
      metaDescription:
        'Darmowa ściąga z rosyjskich końcówek przypadków: tabela deklinacji rzeczowników, końcówki przymiotników, zaimki (мой, этот), przyimki według przypadku. Wszystkie 6 przypadków, tabela z kolorami.',
      keywords: [
        'końcówki przypadków rosyjskich',
        'tabela końcówek przypadków rosyjskich',
        'tabela deklinacji rosyjskiej',
        'końcówki rzeczowników rosyjskich według przypadku',
        'ściąga przypadków rosyjskich',
        'deklinacja przymiotników rosyjskich',
      ],
      h1: 'Końcówki przypadków rosyjskich: Ostateczna ściąga i tabela',
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: 'Tabela końcówek przypadków rosyjskich z deklinacją dla wszystkich 6 przypadków',
        width: 1200,
        height: 630,
      },
      intro:
        'Opanowanie rosyjskich końcówek przypadków to fundament gramatyki rosyjskiej. Niezależnie od tego, czy jesteś zupełnym początkującym chcącym zrozumieć, czym są przypadki, czy zaawansowanym uczniem mylącym końcówki — ta ściąga oferuje każdą tabelę deklinacji w jednym miejscu.\n\nDodaj do ulubionych. Wydrukuj. Zrób zrzut ekranu. To tabela deklinacji rosyjskiej, do której będziesz wracał.',
      whatYouLearn: [
        'Pełna tabela deklinacji rzeczowników rosyjskich (wszystkie rodzaje, l. poj. i mn.)',
        'Tabela deklinacji przymiotników rosyjskich (twarde i miękkie)',
        'Deklinacja zaimków osobowych (я, ты, он, она, мы, вы, они)',
        'Deklinacja zaimków dzierżawczych (мой, наш — i jak wyprowadzić inne)',
        'Zaimki wskazujące (этот / тот)',
        'Tabela referencyjna przyimek → przypadek',
        'Kluczowe zasady ortografii wpływające na końcówki',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjskie deklinacje interaktywnie',
        description:
          'Nasza aplikacja mobilna jest specjalnie zaprojektowana do ćwiczenia rosyjskich przypadków i deklinacji. Inteligentne ćwiczenia, powtórki rozłożone, prawdziwe rosyjskie przykłady — na Android i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć dziś',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Kompletny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rosyjski celownik: jak powiedzieć „do" i „dla"',
        },
      ],
      sections: [
        {
          h2: 'Część 1: Końcówki rzeczowników rosyjskich — Pełna tabela',
          content:
            'Tabela pokazuje rosyjskie końcówki rzeczowników dla **wszystkich 6 przypadków**, wszystkich rodzajów (męski, żeński, nijaki), **liczby pojedynczej i mnogiej**. Rdzenie twarde i miękkie są oddzielnie przedstawione.',
          subsections: [
            {
              h3: 'Jak czytać tę tabelę',
              content:
                '**M. tw.** = Męski twardy (стол, брат). **M. mięk.** = Męski miękki (музей, гений). **Ż. tw.** = Żeński na -а (женщина, книга). **Ż. mięk.** = Żeński na -я (неделя, земля). **Ż. (-ь)** = Żeński z miękkim znakiem (ночь, дочь). **N. (-о)** = Nijaki twardy (окно, слово). **N. (-е)** = Nijaki miękki (море, поле).',
            },
          ],
          table: {
            caption: 'Końcówki rzeczowników według przypadku, rodzaju i liczby',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Przypadek',
              'M. tw.',
              'M. mięk.',
              'Ż. tw. (-а)',
              'Ż. mięk. (-я)',
              'Ż. (-ь)',
              'N. (-о)',
              'N. (-е)',
            ],
            rows: [
              ['L. POJ.', '', '', '', '', '', '', ''],
              ['Mianownik', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Dopełniacz', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Celownik', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Biernik (nieżyw.)', '= Mian.', '= Mian.', '-у', '-ю', '-ь', '= Mian.', '= Mian.'],
              ['Biernik (żyw.)', '= Dop.', '= Dop.', '-у', '-ю', '-ь', '= Mian.', '= Mian.'],
              ['Narzędnik', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Miejscownik', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['L. MNOGA', '', '', '', '', '', '', ''],
              ['Mianownik', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Dopełniacz', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
              ['Celownik', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              [
                'Biernik',
                '= Mian./Dop.',
                '= Mian./Dop.',
                '= Mian./Dop.',
                '= Mian./Dop.',
                '= Mian./Dop.',
                '= Mian./Dop.',
                '= Mian./Dop.',
              ],
              ['Narzędnik', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Miejscownik', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
          bullets: [
            '**Biernik żywotny (m.):** Żywotne rzeczowniki męskie przyjmują **formę dopełniacza** w bierniku. Nieżywotne pozostają jak w mianowniku.',
            '**Biernik l.mn.:** nieżywotne = mianownik l.mn.; żywotne = dopełniacz l.mn.',
            '**Dopełniacz l.mn. końcówka zerowa:** wiele rzeczowników żeńskich na -а ma w dopełniaczu l.mn. **końcówkę zerową** (женщина → женщин).',
            '**Zasada 8 liter:** po **г, к, х, ж, ш, щ, ч, ц** — pisz **И** zamiast Ы.',
            '**Zasada 7 liter:** po ж, ш, щ, ч, ц — **А** zamiast Я, **У** zamiast Ю w pozycjach akcentowanych.',
          ],
        },
        {
          h2: 'Część 2: Tabela deklinacji przymiotników rosyjskich',
          content:
            'Rosyjskie przymiotniki muszą **zgadzać się** z rzeczownikiem w rodzaju, liczbie i przypadku. Poniżej pełna tabela deklinacji przymiotników **twardo- i miękko-tematowych**.',
          subsections: [
            {
              h3: 'Przymiotniki twarde vs miękkie',
              content: 'Przymiotniki dzielą się na dwie grupy:',
              bullets: [
                '**Twarde** (красный, новый, старый) — Mian. M: -ый/-ой | końcówki z Ы, О, У',
                '**Miękkie** (синий, последний, летний) — Mian. M: -ий | końcówki z И, Е, Ю',
              ],
            },
          ],
          table: {
            caption: 'Końcówki przymiotników według przypadku, rodzaju i typu tematu',
            boldColumnIndices: [0, 1, 2, 3, 4, 5],
            accentColumnIndices: [0],
            headers: ['Przypadek', 'M. tw.', 'M. mięk.', 'Ż. tw.', 'Ż. mięk.', 'N.', 'L.mn.'],
            rows: [
              ['Mianownik', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
              ['Dopełniacz', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
              ['Celownik', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
              ['Bier. (nieżyw.)', '= Mian.', '= Mian.', '-ую', '-юю', '= Mian.', '= Mian.'],
              ['Bier. (żyw.)', '= Dop.', '= Dop.', '-ую', '-юю', '= Mian.', '= Dop.'],
              ['Narzędnik', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
              ['Miejscownik', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
            ],
          },
          bullets: [
            '**Przymiotnik twardy** — новый: новый / нового / новому / новый(ого) / новым / новом',
            '**Przymiotnik miękki** — синий: синий / синего / синему / синий(его) / синим / синем',
            '**Zgodność przymiotnik–rzeczownik:** przymiotnik **ZAWSZE** zgadza się z rzeczownikiem.',
          ],
        },
        {
          h2: 'Część 3: Deklinacja zaimków osobowych rosyjskich',
          content:
            'Zaimki osobowe zmieniają się **drastycznie** w rosyjskich przypadkach — znacznie bardziej niż rzeczowniki czy przymiotniki. Muszą być **zapamiętane indywidualnie**.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Przypadek',
              'я (ja)',
              'ты (ty)',
              'он/оно (on)',
              'она (ona)',
              'мы (my)',
              'вы (wy)',
              'они (oni)',
            ],
            rows: [
              ['Mianownik', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
              ['Dopełniacz', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Celownik', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
              ['Biernik', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
              ['Narzędnik', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
              ['Miejscownik', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
            ],
          },
          bullets: [
            '**Zasada prefiksu Н:** Przy przyimkach dodawane jest **Н-**: у него, к ней, с ними.',
            '**Dopełniacz = Biernik** w zaimkach osobowych: меня, тебя, его, её, нас, вас, их są identyczne.',
          ],
        },
        {
          h2: 'Część 4: Zaimki dzierżawcze (мой, наш)',
          content:
            'Zaimki dzierżawcze również deklinują się według przypadku, rodzaju i liczby. **твой** i **ваш** stosują te same wzorce co мой i наш. **его / её / их** **NIE** się deklinują — pozostają niezmienne.',
          table: {
            caption: 'Pełna deklinacja мой (mój) i наш (nasz)',
            boldColumnIndices: [0, 1, 2, 3, 4],
            accentColumnIndices: [0],
            headers: ['Przypadek', 'M.', 'N.', 'Ż.', 'L.mn.'],
            rows: [
              ['МОЙ — mój', '', '', '', ''],
              ['Mianownik', 'мой', 'моё', 'моя', 'мои'],
              ['Dopełniacz', 'моего', 'моего', 'моей', 'моих'],
              ['Celownik', 'моему', 'моему', 'моей', 'моим'],
              ['Bier. (nieżyw.)', 'мой', 'моё', 'мою', 'мои'],
              ['Bier. (żyw.)', 'моего', 'моё', 'мою', 'моих'],
              ['Narzędnik', 'моим', 'моим', 'моей', 'моими'],
              ['Miejscownik', 'моём', 'моём', 'моей', 'моих'],
              ['НАШ — nasz', '', '', '', ''],
              ['Mianownik', 'наш', 'наше', 'наша', 'наши'],
              ['Dopełniacz', 'нашего', 'нашего', 'нашей', 'наших'],
              ['Celownik', 'нашему', 'нашему', 'нашей', 'нашим'],
              ['Bier. (nieżyw.)', 'наш', 'наше', 'нашу', 'наши'],
              ['Bier. (żyw.)', 'нашего', 'наше', 'нашу', 'наших'],
              ['Narzędnik', 'нашим', 'нашим', 'нашей', 'нашими'],
              ['Miejscownik', 'нашем', 'нашем', 'нашей', 'наших'],
            ],
          },
        },
        {
          h2: 'Część 5: Zaimki wskazujące (этот / тот)',
          content:
            '**Этот** (ten) i **тот** (tamten) deklinują się według przypadku, rodzaju i liczby i są bardzo częste w mówionym rosyjskim.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Przypadek',
              'этот (M)',
              'это (N)',
              'эта (Ż)',
              'эти (L.mn.)',
              'тот (M) / та (Ż)',
              'те (L.mn.)',
            ],
            rows: [
              ['Mianownik', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
              ['Dopełniacz', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
              ['Celownik', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
              ['Bier. (nieżyw.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
              ['Bier. (żyw.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
              ['Narzędnik', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
              ['Miejscownik', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
            ],
          },
        },
        {
          h2: 'Część 6: Rosyjskie przyimki → Szybka ściąga przypadku',
          content:
            'Ta tabela przypisuje każdy ważny rosyjski przyimek do **wymaganego przypadku**. Nauka przyimków **wraz z ich przypadkiem** jest niezbędna.',
          subsections: [
            {
              h3: 'Ważne: в i на to przyimki dwuprzypadkowe',
              content:
                '**в / на + Biernik** = KIERUNEK (ruch do miejsca). **в / на + Miejscownik** = MIEJSCE (bycie w miejscu). Przykład: Я иду в школу. (iść → biernik) vs. Я в школе. (być tam → miejscownik).',
            },
          ],
          table: {
            boldColumnIndices: [0, 1],
            accentColumnIndices: [0],
            headers: ['Przypadek', 'Przyimki', 'Przykłady'],
            rows: [
              [
                'Dopełniacz',
                'без, до, из, у, от, после, для, кроме, вокруг, вместо, мимо',
                'из России, без воды, после урока',
              ],
              [
                'Celownik',
                'к, по, благодаря, вопреки, согласно, навстречу',
                'к другу, по улице, благодаря тебе',
              ],
              [
                'Biernik',
                'в, на (kierunek), за, через, под (ruch), про, о',
                'в школу, на работу, через час',
              ],
              [
                'Narzędnik',
                'с, за (pozycja), над, под (pozycja), перед, между, рядом с',
                'с другом, над столом, перед домом',
              ],
              [
                'Miejscownik',
                'в, на (miejsce), о/об, при, по (po niektórych czasownikach)',
                'в Москве, о работе, при советах',
              ],
            ],
          },
        },
        {
          h2: 'Jak skutecznie korzystać z tej ściągi',
          subsections: [
            {
              h3: 'Krok 1 — Zacznij od rzeczowników',
              content:
                '**Tabela deklinacji rzeczowników** jest podstawą. Opanuj ją najpierw. Skup się na najczęstszych wzorcach: męski twardy, żeński twardy, nijaki twardy.',
            },
            {
              h3: 'Krok 2 — Potem przymiotniki',
              content:
                'Gdy poznasz końcówki rzeczowników, końcówki przymiotników staną się łatwiejsze — stosują podobną logikę. Zacznij od **przymiotników twardych** (новый), potem **miękkich** (синий).',
            },
            {
              h3: 'Krok 3 — Zapamiętuj zaimki osobno',
              content:
                '**Formy zaimków są nieregularne** i muszą być zapamiętane indywidualnie. Używaj fiszek lub aplikacji SRS.',
            },
            {
              h3: 'Krok 4 — Przyimki utrwalają przypadki',
              content:
                'Przyimki to **najszybsza droga** do właściwego przypadku: jeśli wiesz, że **без** zawsze wymaga dopełniacza, a **к** celownika, masz przypadek ustalony.',
            },
            {
              h3: 'Krok 5 — Ćwicz na prawdziwych zdaniach',
              content:
                'Same tabele nie wystarczą. Ćwicz końcówki w **prawdziwych rosyjskich zdaniach** — czytaj, słuchaj i zwracaj uwagę, jak native speakerzy używają form odmienionych.',
            },
          ],
        },
      ],
      conclusion:
        'Ta ściąga obejmuje **wszystko**: **wszystkie 6 przypadków** dla rzeczowników (wszystkie rodzaje, l. poj. i mn.), przymiotników (twarde i miękkie), zaimków osobowych, dzierżawczych, wskazujących oraz pary przyimek–przypadek.\n\n**Trzymaj tę ściągę pod ręką** podczas nauki. Im więcej łączysz ją z prawdziwym rosyjskim, tym szybciej końcówki przejdą ze świadomego zapamiętywania do automatycznego rozpoznawania.',
      conclusionOutro: 'Pełne wyjaśnienie każdego przypadku znajdziesz w naszych przewodnikach:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Która końcówka przypadku rosyjskiego jest najtrudniejsza do nauki?',
          answer:
            '**Dopełniacz liczby mnogiej** uchodzi za najtrudniejszy ze względu na kilka konkurencyjnych form. Rzeczowniki żeńskie na -а mają np. **końcówkę zerową** (женщина → женщин), inne **-ей** (ночь → ночей) lub **-ов/-ев**.',
        },
        {
          question: 'Czy rosyjskie przymiotniki zawsze zgadzają się z rzeczownikiem?',
          answer:
            'Tak, **zawsze**. Rosyjski przymiotnik musi **zgadzać się** z rzeczownikiem w rodzaju, liczbie i przypadku. Nazywa się to zgodnością gramatyczną.',
        },
        {
          question: 'Czy są rosyjskie rzeczowniki, które w ogóle się nie deklinują?',
          answer:
            'Tak. Niewielka grupa **zapożyczeń** nigdy się nie zmienia: **кофе** (kawa), **метро** (metro), **пальто** (płaszcz), **такси** (taksówka), **кино** (kino).',
        },
        {
          question: 'Skąd wiem, czy rzeczownik jest żywotny czy nieżywotny?',
          answer:
            '**Żywotne** = ludzie i zwierzęta (человек, кот, студент, врач). **Nieżywotne** = przedmioty, pojęcia (стол, книга, любовь, время).',
        },
        {
          question:
            'Jaka jest różnica między dopełniaczem a biernikiem przy rzeczownikach żywotnych?',
          answer:
            'Przy **żywotnych rzeczownikach męskich** forma biernika jest **identyczna** z dopełniaczem. To słynna zasada **biernik żywotny = dopełniacz**.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Końcówki przypadków rosyjskich: Ostateczna ściąga i tabela',
        description:
          'Pełna ściąga z rosyjskich końcówek przypadków: tabela deklinacji rzeczowników, końcówki przymiotników, zaimki, przyimki według przypadku. Wszystkie 6 przypadków w jednej tabeli.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
        },
        keywords:
          'końcówki przypadków rosyjskich, tabela końcówek przypadków rosyjskich, tabela deklinacji rosyjskiej, końcówki rzeczowników rosyjskich, ściąga przypadków rosyjskich, deklinacja przymiotników rosyjskich',
      },
    },
    ru_ru: {
      slug: 'russian-case-endings-cheatsheet',
      title: 'Окончания падежей русского языка: полная шпаргалка и таблица',
      metaTitle:
        'Окончания падежей русского языка | Полная таблица склонений | Russian Cases with Anna',
      metaDescription:
        'Бесплатная шпаргалка по окончаниям падежей русского языка: таблица склонения существительных, окончания прилагательных, местоимения (мой, этот), предлоги по падежам. Все 6 падежей в одной таблице.',
      keywords: [
        'окончания падежей русского языка',
        'таблица окончаний падежей',
        'таблица склонений русского языка',
        'окончания существительных по падежам',
        'шпаргалка падежи русского языка',
        'склонение прилагательных русский',
      ],
      h1: 'Окончания падежей русского языка: полная шпаргалка и таблица',
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: 'Таблица окончаний падежей русского языка со склонением для всех 6 падежей',
        width: 1200,
        height: 630,
      },
      intro:
        'Овладение окончаниями падежей — основа русской грамматики. Вы только начинаете разбираться в падежах или уже изучаете язык и путаете окончания — эта шпаргалка содержит все таблицы склонений в одном месте.\n\nДобавьте в закладки. Распечатайте. Сделайте скриншот. Это таблица склонений, к которой вы будете возвращаться снова и снова.',
      whatYouLearn: [
        'Полная таблица склонения существительных (все роды, ед. и мн. число)',
        'Таблица склонения прилагательных (твёрдая и мягкая основа)',
        'Склонение личных местоимений (я, ты, он, она, мы, вы, они)',
        'Склонение притяжательных местоимений (мой, наш — и как вывести остальные)',
        'Указательные местоимения (этот / тот)',
        'Справочная таблица предлог → падеж',
        'Ключевые орфографические правила, влияющие на окончания',
      ],
      leadMagnetCta: {
        title: 'Тренируйте русские склонения интерактивно',
        description:
          'Наше мобильное приложение создано специально для отработки падежей и склонений. Умные упражнения, интервальное повторение, реальные примеры — на Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам русского языка',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Дательный падеж: как сказать «кому» и «для»',
        },
      ],
      sections: [
        {
          h2: 'Часть 1: Окончания существительных — полная таблица',
          content:
            'Таблица показывает окончания существительных для **всех 6 падежей**, всех родов (мужской, женский, средний), **единственного и множественного числа**. Твёрдая и мягкая основа показаны отдельно.',
          subsections: [
            {
              h3: 'Как читать таблицу',
              content:
                '**М. тв.** = Мужской твёрдый (стол, брат). **М. мягк.** = Мужской мягкий (музей, гений). **Ж. тв.** = Женский на -а (женщина, книга). **Ж. мягк.** = Женский на -я (неделя, земля). **Ж. (-ь)** = Женский с мягким знаком (ночь, дочь). **Ср. (-о)** = Средний твёрдый (окно, слово). **Ср. (-е)** = Средний мягкий (море, поле).',
            },
          ],
          table: {
            caption: 'Окончания существительных по падежу, роду и числу',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Падеж',
              'М. тв.',
              'М. мягк.',
              'Ж. тв. (-а)',
              'Ж. мягк. (-я)',
              'Ж. (-ь)',
              'Ср. (-о)',
              'Ср. (-е)',
            ],
            rows: [
              ['ЕД. ЧИСЛО', '', '', '', '', '', '', ''],
              ['Именительный', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Родительный', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Дательный', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Винительный (неодуш.)', '= Им.', '= Им.', '-у', '-ю', '-ь', '= Им.', '= Им.'],
              ['Винительный (одуш.)', '= Род.', '= Род.', '-у', '-ю', '-ь', '= Им.', '= Им.'],
              ['Творительный', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Предложный', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['МН. ЧИСЛО', '', '', '', '', '', '', ''],
              ['Именительный', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              [
                'Родительный',
                '-ов / -ев',
                '-ев / -ей',
                '-Ø / -ей',
                '-ей',
                '-ей',
                '-Ø / -ей',
                '-ей',
              ],
              ['Дательный', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              ['Винительный', '= Им./Род.', '= Им./Род.', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Творительный', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Предложный', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
        },
      ],
      conclusion:
        'Окончания падежей — ключ к грамматике русского языка. Сохраните эту шпаргалку и возвращайтесь к ней при необходимости.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Сколько падежей в русском языке?',
          answer:
            'В русском языке **6 падежей**: именительный, родительный, дательный, винительный, творительный, предложный.',
        },
        {
          question: 'Как запомнить окончания падежей?',
          answer:
            'Лучше всего учить окончания **в контексте предложений**, а не изолированно. Используйте интервальное повторение и практикуйтесь ежедневно.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Окончания падежей русского языка: полная шпаргалка и таблица',
        description:
          'Полная шпаргалка по окончаниям падежей русского языка: таблица склонений, прилагательные, местоимения, предлоги.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-case-endings-cheatsheet',
        },
        keywords: 'окончания падежей русского языка, таблица склонений, русская грамматика',
      },
    },
  },
  'russian-genitive-case': {
    fr_fr: {
      slug: 'russian-genitive-case',
      title: 'Génitif russe : règles, terminaisons et 32 exemples authentiques',
      metaTitle: 'Génitif russe : règles, terminaisons et exemples | Russian Cases with Anna',
      metaDescription:
        'Guide complet du génitif russe : 7 usages, terminaisons singulier et pluriel, formes irrégulières, 16 prépositions, nombres, у + génitif. 32 exemples authentiques avec translittération.',
      keywords: [
        'génitif russe',
        'terminaisons génitif russe',
        'règles génitif russe',
        'génitif pluriel russe',
        'exemples génitif russe',
        'grammaire possessif russe',
      ],
      h1: 'Génitif russe : règles, terminaisons et 32 exemples authentiques',
      heroImage: {
        src: '/articles/free-russian-lesson-genitive-case.jpg',
        alt: 'Leçon gratuite de russe sur le génitif : possession, négation et quantités',
        width: 1200,
        height: 630,
      },
      intro:
        "S'il ne fallait maîtriser qu'**un seul cas russe** après le nominatif, ce devrait être le **génitif**. Le génitif russe est de loin le **cas le plus fréquent** après le nominatif – il apparaît pour la **possession**, la **négation**, les **quantités**, les **dates** et après plus de **prépositions** que tout autre cas.\n\nCe guide couvre tout : les règles, toutes les terminaisons, les formes irrégulières et **32 phrases russes authentiques** pour voir le génitif en pratique.",
      whatYouLearn: [
        "Ce qu'est le génitif russe et quand l'utiliser (7 usages principaux)",
        'Terminaisons du génitif singulier – tous les genres de noms avec exemples',
        'Terminaisons du génitif pluriel – dont « terminaison zéro » et voyelles fugaces',
        '11 génitifs pluriels irréguliers à mémoriser (человек → людей, etc.)',
        '16 prépositions qui exigent le génitif',
        'Nombres et quantités avec le génitif (2/3/4 vs 5+, 21, 22, 25…)',
        'Génitif vs accusatif – le piège du masculin animé',
        'Construction у + génitif pour « avoir » en russe',
      ],
      leadMagnetCta: {
        title: "S'entraîner au génitif russe avec des exercices intelligents",
        description:
          'Notre app mobile entraîne les 6 cas russes – dont le génitif pluriel – avec répétition espacée, phrases authentiques et retour instantané. Sur Android et iOS.',
        ctaText: "Télécharger l'app et commencer à s'entraîner",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: "Terminaisons des cas russes : l'aide-mémoire ultime",
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Datif russe : « à » et « pour » en russe',
        },
      ],
      sections: [
        {
          h2: "Qu'est-ce que le génitif russe ?",
          content:
            'Le **génitif** (Родительный падеж – litt. « cas de naissance/origine ») est le deuxième des six cas russes. Son nom renvoie à sa fonction principale : **origine, appartenance ou relation** – il répond à **Кого?** (De qui ?) et **Чего?** (De quoi ?). En français nous utilisons **« de »** ou le possessif.\n\nEn russe, cela se fait uniquement par les **terminaisons** des mots.',
        },
        {
          h2: '7 usages principaux du génitif russe',
          content:
            'Le génitif est le **cas le plus polyvalent** du russe. Il apparaît pour la **possession**, la **négation**, les **quantités**, les **prépositions**, les **comparaisons**, les **dates** et avec **certains verbes**.',
        },
        {
          h2: 'Top 5 erreurs de génitif (et comment les corriger)',
          bullets: [
            '**Nominatif après нет** — Нет кот ✗ → Нет кота ✓ (нет exige toujours le génitif)',
            '**Accord avec les nombres** — пять стол ✗ → пять столов ✓ (5+ exige génitif pluriel)',
            '**Oublier la terminaison zéro** — много женщинов ✗ → много женщин ✓',
            "**Confondre génitif et accusatif pour l'animé** — Я вижу студент ✗ → Я вижу студента ✓",
            '**у + nominatif** — У меня есть кот ✗ → У меня есть кота ✓ (принадлежность)',
          ],
        },
      ],
      conclusion:
        "Le génitif russe est essentiel pour la communication quotidienne. Maîtrisez d'abord нет + génitif, puis les nombres, puis les prépositions. Les formes du pluriel demandent de la pratique – concentrez-vous sur les 11 irréguliers les plus fréquents.",
      conclusionOutro: 'Poursuivez avec le reste de notre série de grammaire russe :',
      ctaText: "S'entraîner aux cas russes avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: 'À quoi sert le génitif en russe ?',
          answer:
            "Le génitif russe sert à la **possession** (дом отца), à l'**absence/négation** (нет кота, не было времени), aux **quantités** (много книг, пять столов), aux **dates** (пятого марта), et après de nombreuses **prépositions** (без, до, из, у, от, после, для).",
        },
        {
          question: 'Quelles prépositions exigent le génitif ?',
          answer:
            'Les principales : без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль. Plus de prépositions exigent le génitif que tout autre cas.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Génitif russe : règles, terminaisons et 32 exemples authentiques',
        description:
          'Guide complet du génitif russe : usages, terminaisons, prépositions, nombres, 32 exemples.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
        },
        keywords:
          'génitif russe, terminaisons génitif russe, règles génitif russe, grammaire russe',
      },
      tableAccentVariant: 'genitive',
    },
    de_de: {
      slug: 'russian-genitive-case',
      title: 'Russischer Genitiv: Regeln, Endungen & 32 echte Beispiele',
      metaTitle: 'Russischer Genitiv: Regeln, Endungen & Beispiele | Russian Cases with Anna',
      metaDescription:
        'Der vollständigste Leitfaden zum russischen Genitiv: 7 Verwendungen, Singular- und Plural-Endungen, unregelmäßige Formen, 16 Präpositionen, Zahlen, У + Genitiv. 32 echte Beispiele mit Transliteration.',
      keywords: [
        'Russischer Genitiv',
        'Russische Genitiv-Endungen',
        'Genitiv Russisch Regeln',
        'Russischer Genitiv Plural',
        'Genitiv Russisch Beispiele',
        'Russisch Besitz Grammatik',
      ],
      h1: 'Russischer Genitiv: Regeln, Endungen & 32 echte Beispiele',
      heroImage: {
        src: '/articles/free-russian-lesson-genitive-case.webp',
        alt: 'Kostenlose Russisch-Lektion zum Genitiv: Besitz, Verneinung und Mengen',
        width: 1200,
        height: 630,
      },
      intro:
        'Wenn Sie nur **einen russischen Fall** neben dem Nominativ meistern könnten, sollte es der **Genitiv** sein. Der russische Genitiv ist bei weitem der **häufigste Fall** nach dem Nominativ – er erscheint bei **Besitz**, **Verneinung**, **Mengen**, **Daten** und nach mehr **Präpositionen** als jeder andere Fall.\n\nDieser Leitfaden deckt alles ab: die Regeln, alle Endungen, die unregelmäßigen Formen und **32 echte russische Beispielsätze**, damit Sie sehen, wie der Genitiv in der Praxis funktioniert.',
      whatYouLearn: [
        'Was der russische Genitiv ist und wann man ihn verwendet (7 Hauptverwendungen)',
        'Genitiv Singular-Endungen – alle Substantivgenera mit Beispielen',
        'Genitiv Plural-Endungen – inkl. „Nullendung" und fleeting vowels',
        '11 unregelmäßige Genitiv-Plurale zum Memorieren (человек → людей, etc.)',
        '16 Präpositionen, die den Genitiv verlangen',
        'Zahlen & Mengen mit dem Genitiv (2/3/4 vs 5+, 21, 22, 25…)',
        'Genitiv vs. Akkusativ – die belebte maskuline Falle',
        'У + Genitiv-Konstruktion für „haben" im Russischen',
      ],
      leadMagnetCta: {
        title: 'Russischen Genitiv mit intelligenten Übungen trainieren',
        description:
          'Unsere mobile App trainiert alle 6 russischen Fälle – inkl. Genitiv Plural – mit Intervallwiederholung, echten Sätzen und sofortigem Feedback. Für Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Russischer Dativ: „An" und „für" auf Russisch',
        },
      ],
      sections: [
        {
          h2: 'Was ist der russische Genitiv?',
          content:
            'Der **Genitiv** (Родительный падеж – wörtl. „Geburts-/Herkunftsfall") ist der zweite der sechs russischen Fälle. Sein Name verweist auf seine Hauptfunktion: **Herkunft, Zugehörigkeit oder Beziehung** – er beantwortet **Кого?** (Wessen?) und **Чего?** (Wovon?). Im Deutschen drücken wir das mit **„von"** oder dem Possessiv-s aus.\n\nIm Russischen geschieht dies nur durch **Wortendungen**.',
          subsections: [
            {
              h3: 'Kurze Antwort',
              content:
                'Der Genitiv im Russischen beantwortet **Кого?** (Wessen?) und **Чего?** (Wovon?). Er wird hauptsächlich für **Besitz**, **Abwesenheit**, **Menge** verwendet und steht nach vielen **Präpositionen**.',
            },
          ],
        },
        {
          h2: '7 Hauptverwendungen des russischen Genitivs',
          content:
            'Der Genitiv ist der **vielseitigste Fall** im Russischen. Er erscheint bei **Besitz**, **Verneinung**, **Mengen**, **Präpositionen**, **Vergleichen**, **Daten** und mit **bestimmten Verben**.',
          image: {
            src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
            alt: 'Spickzettel: Wann man den Genitiv im Russischen verwendet',
            width: 1200,
            height: 630,
          },
          subsections: [
            {
              h3: 'Verwendung 1 — Besitz und Zugehörigkeit',
              content:
                'Der Genitiv ersetzt das deutsche **„von"** oder Possessiv-**s**. Der **Besitzer** steht im **Genitiv**.',
              bullets: [
                '**дом отца** — das Haus des Vaters',
                '**столица России** — die Hauptstadt Russlands',
                '**конец фильма** — das Ende des Films',
              ],
            },
            {
              h3: 'Verwendung 2 — Abwesenheit und Verneinung (нет, не было, не будет)',
              content:
                'Wenn etwas **nicht existiert**, nicht verfügbar oder abwesend ist, steht der Genitiv. **нет**, **не было**, **не будет** verlangen immer den Genitiv.',
              bullets: [
                '**У меня нет машины.** — Ich habe kein Auto.',
                '**Здесь нет сахара.** — Es gibt keinen Zucker hier.',
                '**Его не было дома.** — Er war nicht zu Hause.',
                '**Завтра не будет дождя.** — Morgen wird es keinen Regen geben.',
              ],
            },
            {
              h3: 'Verwendung 3 — Menge, Zahlen und Maß',
              content:
                'Der Genitiv steht nach **Zahlen** und **Mengenwörtern**. Nach **1**: Nominativ Singular. Nach **2, 3, 4**: Genitiv Singular. Nach **5–20** und größer: Genitiv Plural. Nach **много**, **мало**, **несколько**, **сколько**: Genitiv Plural.',
            },
            {
              h3: 'Verwendung 4 — Präpositionen',
              content:
                '**Mehr Präpositionen** verlangen den Genitiv als jeden anderen Fall: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
            },
            {
              h3: 'Verwendung 5 — Vergleich',
              content:
                'Bei Vergleichen steht der **Genitiv**: **Он старше меня.** — Er ist älter als ich.',
            },
            {
              h3: 'Verwendung 6 — Daten',
              content:
                'Bei **Datum** stehen Tag und Monat im Genitiv: **Он родился пятого марта.** — Er wurde am 5. März geboren.',
            },
            {
              h3: 'Verwendung 7 — Bestimmte Verben',
              content:
                '**ждать** (warten auf), **желать** (wünschen), **бояться** (Angst haben vor), **избегать** (vermeiden), **достигать** (erreichen) verlangen den Genitiv.',
            },
          ],
        },
        {
          h2: 'Genitiv-Endungen — Singular',
          content:
            'Die Tabelle zeigt die **Genitiv Singular**-Endungen für jeden Substantivtyp. Beachten Sie die **8-Buchstaben-Regel**: Ы wird nach Г, К, Х, Ж, Ш, Щ, Ч, Ц zu И.',
          table: {
            caption: 'Genitiv Singular-Endungen nach Substantivtyp',
            boldColumnIndices: [1, 3],
            headers: ['Substantivtyp', 'Endung', 'Bildung', 'Ergebnis', 'Beispiel im Kontext'],
            rows: [
              ['Maskulin hart', '-а', 'стол → стол+а', 'стола', 'нет стола'],
              ['Maskulin weich', '-я', 'гений → гени+я', 'гения', 'без гения'],
              ['Maskulin auf -ж/ш/щ/ч', '-а', 'нож → нож+а', 'ножа', 'без ножа'],
              ['Feminin -а (hart)', '-ы', 'книга → книг+ы', 'книги', 'нет книги'],
              [
                'Feminin -а (nach г/к/х/ж/ш/щ/ч/ц)',
                '-и',
                'подруга → подруг+и',
                'подруги',
                'без подруги',
              ],
              ['Feminin -я', '-и', 'неделя → недел+и', 'недели', 'нет недели'],
              ['Feminin -ь', '-и', 'ночь → ноч+и', 'ночи', 'до ночи'],
              ['Neutrum -о', '-а', 'окно → окн+а', 'окна', 'нет окна'],
              ['Neutrum -е', '-я', 'море → мор+я', 'моря', 'до моря'],
              ['Neutrum -мя', '-ени', 'имя → имен+и', 'имени', 'без имени'],
            ],
          },
        },
        {
          h2: 'Genitiv-Endungen — Plural (Der schwierigste Teil)',
          content:
            'Der **Genitiv Plural** gilt als **schwierigster Bereich** der russischen Deklination. Feminin-**а**- und Neutrum-**о**-Substantive haben oft eine **Nullendung** (**-Ø**).',
          table: {
            caption: 'Genitiv Plural-Endungen nach Substantivtyp',
            boldColumnIndices: [1, 3],
            headers: ['Substantivtyp', 'Endung', 'Bildung', 'Ergebnis', 'Beispiel im Kontext'],
            rows: [
              ['Maskulin hart', '-ов', 'стол → стол+ов', 'столов', 'пять столов'],
              ['Maskulin auf -ж/ш/щ/ч/ц', '-ей', 'нож → нож+ей', 'ножей', 'несколько ножей'],
              ['Maskulin weich -й', '-ев', 'музей → музе+ев', 'музеев', 'три музея'],
              ['Maskulin weich -ь', '-ей', 'словарь → словар+ей', 'словарей', 'много словарей'],
              ['Feminin -а (hart)', '-Ø', 'женщина → женщин', 'женщин', 'много женщин'],
              ['Feminin -я', '-ей / -й', 'неделя → недель', 'недель', 'несколько недель'],
              ['Feminin -ь', '-ей', 'ночь → ноч+ей', 'ночей', 'пять ночей'],
              ['Neutrum -о (hart)', '-Ø', 'окно → окон', 'окон', 'много окон'],
              ['Neutrum -е', '-ей', 'море → мор+ей', 'морей', 'пять морей'],
              ['Neutrum -ие/-ия', '-ий', 'здание → здани+й', 'зданий', 'много зданий'],
            ],
          },
        },
        {
          h2: 'Unregelmäßige Genitiv-Plurale — Muss-Liste',
          content:
            'Die häufigsten russischen Substantive haben **stark unregelmäßige** Genitiv-Pluralformen. Diese **Hochfrequenzwörter** müssen memoriert werden.',
          table: {
            caption: '11 ultra-häufige unregelmäßige Genitiv-Plurale',
            boldColumnIndices: [1, 2],
            headers: ['Nominativ Singular', 'Genitiv Plural', 'Beispiel', 'Hinweis'],
            rows: [
              ['человек (Person)', 'людей', 'много людей', 'Suppletion von люди'],
              ['ребёнок (Kind)', 'детей', 'много детей', 'Suppletion von дети'],
              ['глаз (Auge)', 'глаз', 'пара глаз', 'Nullendung'],
              ['раз (Mal)', 'раз', 'несколько раз', 'Nullendung'],
              ['солдат (Soldat)', 'солдат', 'отряд солдат', 'Nullendung'],
              ['носок (Socke)', 'носков', 'пара носков', 'behält -ов'],
              ['чулок (Strumpf)', 'чулок', 'пара чулок', 'Nullendung'],
              ['яблоко (Apfel)', 'яблок', 'килограмм яблок', 'Nullendung'],
              ['имя (Name)', 'имён', 'список имён', 'Neutrum -мя Typ'],
              ['мать (Mutter)', 'матерей', 'двое матерей', 'Spezielle Deklination'],
              ['дочь (Tochter)', 'дочерей', 'трое дочерей', 'Spezielle Deklination'],
            ],
          },
        },
        {
          h2: 'Russische Genitiv-Präpositionen — Vollständige Liste',
          content:
            'Diese **Präpositionen** verlangen immer den **Genitiv**. Merkhilfe – Akronym **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**. Diese 8 decken **90%** ab.',
          table: {
            caption: '16 Genitiv-Präpositionen mit Beispielen',
            boldColumnIndices: [0, 2],
            headers: ['Präp.', 'Bedeutung', 'Mit Substantiv', 'Vollständiges Beispiel'],
            rows: [
              ['без', 'ohne', 'без молока', 'Я пью чай без молока.'],
              ['до', 'bis / vor / bis zu', 'до урока', 'Позвони мне до урока.'],
              ['из', 'aus (innen)', 'из России', 'Он приехал из России.'],
              ['с', 'von (Oberfläche)', 'с полки', 'Книга упала с полки.'],
              ['у', 'bei / in der Nähe', 'у меня', 'У меня есть кошка.'],
              ['от', 'von (Person)', 'от друга', 'Письмо от друга.'],
              ['после', 'nach', 'после работы', 'После работы я устал.'],
              ['для', 'für', 'для тебя', 'Это подарок для тебя.'],
              ['кроме', 'außer', 'кроме меня', 'Все кроме меня пришли.'],
              ['вокруг', 'um', 'вокруг города', 'Мы ехали вокруг города.'],
              ['мимо', 'vorbei', 'мимо школы', 'Он прошёл мимо школы.'],
              ['вместо', 'statt', 'вместо кофе', 'Выпей воды вместо кофе.'],
              ['напротив', 'gegenüber', 'напротив банка', 'Кафе напротив банка.'],
              ['из-за', 'wegen / von hinter', 'из-за дождя', 'Из-за дождя мы остались дома.'],
              ['из-под', 'von unter', 'из-под стола', 'Кот вылез из-под стола.'],
              ['ради', 'um … willen', 'ради тебя', 'Ради твоего счастья.'],
            ],
          },
        },
        {
          h2: 'Russische Zahlen und der Genitiv',
          content:
            'Zählen im Russischen verlangt den **Genitiv**. **1** = Nominativ; **2–4** = Genitiv Singular; **5–0** = Genitiv Plural.',
          table: {
            caption: 'Zahl + Fall-Regeln mit Beispielen',
            boldColumnIndices: [1, 2],
            headers: ['Zahl / Quantor', 'Erforderlicher Fall', 'Beispiel (стол)', 'Übersetzung'],
            rows: [
              ['1', 'Nominativ Singular', 'один стол', 'ein Tisch'],
              ['2, 3, 4', 'Genitiv Singular', 'два стола / три стола', 'zwei / drei Tische'],
              ['5–20', 'Genitiv Plural', 'пять столов', 'fünf Tische'],
              [
                '21, 31, 41… (endet auf 1)',
                'Nominativ Singular',
                'двадцать один стол',
                'einundzwanzig Tische',
              ],
              [
                '22–24, 32–34… (endet auf 2-4)',
                'Genitiv Singular',
                'двадцать два стола',
                'zweiundzwanzig Tische',
              ],
              [
                '25–30, etc. (endet auf 5–9, 0)',
                'Genitiv Plural',
                'двадцать пять столов',
                'fünfundzwanzig Tische',
              ],
              ['100, 200, 1000…', 'Genitiv Plural', 'сто столов', 'hundert Tische'],
              [
                'много / несколько / мало',
                'Genitiv Plural',
                'много столов',
                'viele / mehrere / wenige Tische',
              ],
              ['сколько / столько', 'Genitiv Plural', 'сколько столов?', 'wie viele Tische?'],
            ],
          },
        },
        {
          h2: 'Genitiv vs. Akkusativ: Unterscheidung',
          content:
            'Bei **belebten maskulinen** Substantiven ist die Akkusativform **identisch** mit dem Genitiv – **студента** kann beides sein. **Kontext** und **Satzstruktur** zeigen, welcher Fall vorliegt.',
          table: {
            caption: 'Genitiv vs. Akkusativ Vergleich',
            boldColumnIndices: [0, 1],
            headers: ['Situation', 'Russischer Satz', 'Erklärung'],
            rows: [
              ['Besitz', 'Это книга студента.', 'Genitiv kennzeichnet den Besitzer'],
              ['Abwesenheit (нет)', 'Нет студента.', 'нет verlangt immer Genitiv'],
              ['Direktes Objekt (belebt)', 'Я вижу студента.', 'Akkusativ belebt = Genitivform'],
              ['Direktes Objekt (unbelebt)', 'Я вижу стол.', 'Akkusativ unbelebt = Nominativ'],
              ['Nach Zahlen 2–4', 'Я вижу двух студентов.', 'Belebt → Genitiv Plural'],
              ['Partitiver Genitiv', 'Хочешь чаю?', 'Genitiv drückt „etwas von" aus'],
            ],
          },
        },
        {
          h2: 'Russische Besitz-Grammatik: У + Genitiv (Haben)',
          content:
            'Russisch hat **zwei Hauptwege** für Besitz, beide mit Genitiv. **Konstruktion 1:** **машина друга** — das Auto des Freundes. **Konstruktion 2:** **У** [Person im Genitiv] **есть** [Sache] — „haben". Russisch hat kein direktes Verb für „haben".',
          subsections: [
            {
              h3: 'Die У-Konstruktion in allen Zeitformen',
              content:
                '**Präsens:** **У меня есть кошка.** (Ich habe eine Katze). **Vergangenheit:** **У меня была кошка.** (Ich hatte eine Katze). **Zukunft:** **У меня будет кошка.** (Ich werde eine Katze haben). **Verneinung:** **У меня нет кошки.** (нет + Genitiv).',
            },
          ],
        },
        {
          h2: 'Top 7 Genitiv-Fehler (und wie man sie behebt)',
          content: 'Die häufigsten **Fehler** beim Genitiv:',
          bullets: [
            '**Nominativ nach НЕТ** — Нет кот. ✗ → Нет кота. ✓',
            '**8-Buchstaben-Regel vergessen** — книгы ✗ → книги ✓',
            '**Falsche Zahlenkongruenz** — пять стол ✗ → пять столов ✓',
            '**-ов für feminine Nullendungs-Substantive** — много женщинов ✗ → много женщин ✓',
            '**из und от verwechseln** — из = aus (Ort); от = von (Person)',
            '**Akkusativ statt Genitiv nach Vergleich** — Он старше я ✗ → Он старше меня ✓',
            '**Fleeting vowels im Genitiv Plural vergessen** — окнов ✗ → окон ✓',
          ],
        },
      ],
      conclusion:
        'Der russische Genitiv ist das **Arbeitspferd** des Fallsystems. Er regelt **Besitz**, **Verneinung**, **Menge**, **Vergleich**, **Daten** und wird von mehr **Präpositionen** verlangt als jeder andere Fall.',
      conclusionOutro: 'Bereit weiterzumachen? Erkunden Sie die anderen Fälle in unserer Reihe:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wofür wird der russische Genitiv verwendet?',
          answer:
            'Der Genitiv wird für Besitz (книга студента), Abwesenheit/Verneinung (нет воды), Menge und Zahlen (два стакана, много людей), nach Präpositionen (без, до, из, у, от, после, для…), Vergleiche (старше меня) und Daten verwendet.',
        },
        {
          question: 'Wie bilde ich den Genitiv Plural im Russischen?',
          answer:
            'Maskulin hart: -ов (стол → столов). Maskulin/Feminin weich: oft -ей (ночь → ночей). Feminin -а: Nullendung (женщина → женщин). Neutrum -о: Nullendung mit fleeting vowels (окно → окон).',
        },
        {
          question: 'Ist der russische Genitiv dasselbe wie der Akkusativ?',
          answer:
            'Nicht genau, aber sie überlappen bei belebten maskulinen Substantiven: Я вижу студента (Akkusativ) und Нет студента (Genitiv) verwenden dieselbe Form. Bei unbelebten Substantiven unterscheiden sie sich.',
        },
        {
          question: 'Welche Verben verlangen den Genitiv im Russischen?',
          answer:
            'бояться, ждать, желать, избегать, достигать, лишать, касаться verlangen den Genitiv. Хотеть kann in partitiven Konstruktionen auch Genitiv nehmen (хочешь чаю?).',
        },
        {
          question: 'Wie sagt man „Ich habe" auf Russisch?',
          answer:
            'Russisch hat kein direktes Verb für „haben". Verwenden Sie: У + [Person im Genitiv] + есть + [Sache]: У меня есть машина. Bei Verneinung: У меня нет машины – die nicht besessene Sache steht im Genitiv.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russischer Genitiv: Regeln, Endungen & 32 echte Beispiele',
        description:
          'Der vollständigste Leitfaden zum russischen Genitiv: 7 Verwendungen, Singular- und Plural-Endungen, unregelmäßige Formen, 16 Präpositionen, Zahlen, У + Genitiv.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
        },
        keywords:
          'Russischer Genitiv, Russische Genitiv-Endungen, Genitiv Russisch Regeln, Russischer Genitiv Plural, Genitiv Russisch Beispiele',
      },
    },
    tr_tr: {
      slug: 'russian-genitive-case',
      title: 'Rusça tamlayan hali: kurallar, ekler ve 32 gerçek örnek',
      metaTitle: 'Rusça tamlayan hali: kurallar, ekler ve örnekler | Russian Cases with Anna',
      metaDescription:
        'Rusça tamlayan hali için en kapsamlı rehber: 7 kullanım, tekil ve çoğul ekleri, düzensiz formlar, 16 edat, sayılar, У + tamlayan. Transliterasyonlu 32 gerçek örnek.',
      keywords: [
        'Rusça tamlayan hali',
        'Rusça tamlayan ekleri',
        'Rusça tamlayan kuralları',
        'Rusça tamlayan çoğul',
        'Rusça tamlayan örnekleri',
        'Rusça mülkiyet grameri',
      ],
      h1: 'Rusça tamlayan hali: kurallar, ekler ve 32 gerçek örnek',
      heroImage: {
        src: '/articles/free-russian-lesson-genitive-case.webp',
        alt: 'Tamlayan hali: mülkiyet, olumsuzluk ve miktar - Ücretsiz Rusça dersi',
        width: 1200,
        height: 630,
      },
      intro:
        'Nominatif dışında **sadece bir Rusça hal** öğrenebilecekseniz, bu **tamlayan hali** olmalı. Rusça tamlayan hali nominatiften sonra **en sık kullanılan haldir** — **mülkiyet**, **olumsuzluk**, **miktar**, **tarih** ve diğer tüm hallerden fazla **edat** ile birlikte kullanılır.\n\nBu rehber her şeyi kapsar: kurallar, tüm ekler, düzensiz formlar ve tamlayan halinin pratikte nasıl işlediğini görmeniz için **32 gerçek Rusça örnek cümle**.',
      whatYouLearn: [
        'Rusça tamlayan halinin ne olduğu ve ne zaman kullanıldığı (7 ana kullanım)',
        'Tamlayan tekil ekleri — tüm isim cinsleriyle örnekler',
        'Tamlayan çoğul ekleri — "sıfır ek" ve geçici ünlüler dahil',
        'Ezberlenmesi gereken 11 düzensiz tamlayan çoğul (человек → людей vb.)',
        'Tamlayan gerektiren 16 edat',
        'Tamlayan ile sayılar ve miktarlar (2/3/4 vs 5+, 21, 22, 25…)',
        'Tamlayan vs akkusatif — canlı eril tuzağı',
        'Rusçada "sahip olmak" için У + tamlayan yapısı',
      ],
      leadMagnetCta: {
        title: 'Rusça tamlayan halini akıllı alıştırmalarla öğrenin',
        description:
          'Mobil uygulamamız aralıklı tekrar, gerçek cümleler ve anında geri bildirimle 6 Rusça halin tamamını — tamlayan çoğul dahil — çalıştırır. Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve bugün pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Rusça haller tam rehber' },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri: nihai kopya tablosu',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: "Rusça yönelme hali: '…e' ve '…için'",
        },
      ],
      sections: [
        {
          h2: 'Rusça tamlayan hali nedir?',
          content:
            '**Tamlayan** (Родительный падеж — kelimenin tam anlamıyla "doğum/kaynak hali") altı Rusça halin ikincisidir. Adı ana işlevine işaret eder: **kaynak, aidiyet veya ilişki** — **Кого?** (Kimin?) ve **Чего?** (Neyin?) sorularına cevap verir. Türkçede bunu **"-ın/-in"** ekiyle ifade ederiz.\n\nRusçada bu yalnızca **kelime ekleriyle** olur.',
          subsections: [
            {
              h3: 'Kısa cevap',
              content:
                'Rusçada tamlayan hali **Кого?** (Kimin?) ve **Чего?** (Neyin?) sorularına cevap verir. Ana olarak **mülkiyet**, **yokluk**, **miktar** için kullanılır ve birçok **edattan** sonra gelir.',
            },
          ],
        },
        {
          h2: 'Rusça tamlayan halinin 7 ana kullanımı',
          content:
            'Tamlayan hali Rusçada **en çok yönlü hal**dir. **Mülkiyet**, **olumsuzluk**, **miktarlar**, **edatlar**, **karşılaştırmalar**, **tarihler** ve belirli **fiillerle** birlikte kullanılır.',
          image: {
            src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
            alt: 'Rusçada tamlayan halini ne zaman kullanacağınız: kopya kağıdı',
            width: 1200,
            height: 630,
          },
          subsections: [
            {
              h3: 'Kullanım 1 — Mülkiyet ve aidiyet',
              content:
                'Tamlayan hali Türkçedeki **"-ın/-in"** ekinin yerini alır. **Sahip** **tamlayan halinde** durur.',
              bullets: [
                '**дом отца** — babanın evi',
                "**столица России** — Rusya'nın başkenti",
                '**конец фильма** — filmin sonu',
              ],
            },
            {
              h3: 'Kullanım 2 — Yokluk ve olumsuzluk (нет, не было, не будет)',
              content:
                'Bir şey **mevcut değilse**, müsait değilse veya yoksa, tamlayan hali kullanılır. **нет**, **не было**, **не будет** her zaman tamlayan gerektirir.',
              bullets: [
                '**У меня нет машины.** — Arabam yok.',
                '**Здесь нет сахара.** — Burada şeker yok.',
                '**Его не было дома.** — Evde yoktu.',
                '**Завтра не будет дождя.** — Yarın yağmur olmayacak.',
              ],
            },
            {
              h3: 'Kullanım 3 — Miktar, sayılar ve ölçü',
              content:
                "Tamlayan hali **sayılardan** ve **miktar kelimelerinden** sonra gelir. **1**'den sonra: Nominatif tekil. **2, 3, 4**'ten sonra: Tamlayan tekil. **5–20** ve üzerinden sonra: Tamlayan çoğul. **много**, **мало**, **несколько**, **сколько**'dan sonra: Tamlayan çoğul.",
            },
            {
              h3: 'Kullanım 4 — Edatlar',
              content:
                '**En fazla edat** tamlayan gerektirir: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
            },
            {
              h3: 'Kullanım 5 — Karşılaştırma',
              content:
                'Karşılaştırmalarda **tamlayan** kullanılır: **Он старше меня.** — Benden büyük.',
            },
            {
              h3: 'Kullanım 6 — Tarihler',
              content:
                "**Tarihte** gün ve ay tamlayan halindedir: **Он родился пятого марта.** — 5 Mart'ta doğdu.",
            },
            {
              h3: 'Kullanım 7 — Belirli fiiller',
              content:
                '**ждать** (beklemek), **желать** (istemek), **бояться** (korkmak), **избегать** (kaçınmak), **достигать** (ulaşmak) tamlayan gerektirir.',
            },
          ],
        },
        {
          h2: 'Tamlayan ekleri — Tekil',
          content:
            "Tablo her isim türü için **tamlayan tekil** eklerini gösterir. **8 harf kuralına** dikkat edin: Ы, Г, К, Х, Ж, Ш, Щ, Ч, Ц'den sonra И olur.",
          table: {
            caption: 'İsim türüne göre tamlayan tekil ekleri',
            boldColumnIndices: [1, 3],
            headers: ['İsim türü', 'Ek', 'Oluşum', 'Sonuç', 'Bağlamda örnek'],
            rows: [
              ['Eril sert', '-а', 'стол → стол+а', 'стола', 'нет стола'],
              ['Eril yumuşak', '-я', 'гений → гени+я', 'гения', 'без гения'],
              ['-ж/ш/щ/ч ile eril', '-а', 'нож → нож+а', 'ножа', 'без ножа'],
              ['Dişil -а (sert)', '-ы', 'книга → книг+ы', 'книги', 'нет книги'],
              [
                'Dişil -а (г/к/х/ж/ш/щ/ч/ц sonrası)',
                '-и',
                'подруга → подруг+и',
                'подруги',
                'без подруги',
              ],
              ['Dişil -я', '-и', 'неделя → недел+и', 'недели', 'нет недели'],
              ['Dişil -ь', '-и', 'ночь → ноч+и', 'ночи', 'до ночи'],
              ['Nötr -о', '-а', 'окно → окн+а', 'окна', 'нет окна'],
              ['Nötr -е', '-я', 'море → мор+я', 'моря', 'до моря'],
              ['Nötr -мя', '-ени', 'имя → имен+и', 'имени', 'без имени'],
            ],
          },
        },
        {
          h2: 'Tamlayan ekleri — Çoğul (En zor kısım)',
          content:
            '**Tamlayan çoğul** Rusça çekimin **en zor alanı** olarak kabul edilir. Dişil **-а** ve nötr **-о** isimlerde genellikle **sıfır ek** (**-Ø**) vardır.',
          table: {
            caption: 'İsim türüne göre tamlayan çoğul ekleri',
            boldColumnIndices: [1, 3],
            headers: ['İsim türü', 'Ek', 'Oluşum', 'Sonuç', 'Bağlamda örnek'],
            rows: [
              ['Eril sert', '-ов', 'стол → стол+ов', 'столов', 'пять столов'],
              ['-ж/ш/щ/ч/ц ile eril', '-ей', 'нож → нож+ей', 'ножей', 'несколько ножей'],
              ['Eril yumuşak -й', '-ев', 'музей → музе+ев', 'музеев', 'три музея'],
              ['Eril yumuşak -ь', '-ей', 'словарь → словар+ей', 'словарей', 'много словарей'],
              ['Dişil -а (sert)', '-Ø', 'женщина → женщин', 'женщин', 'много женщин'],
              ['Dişil -я', '-ей / -й', 'неделя → недель', 'недель', 'несколько недель'],
              ['Dişil -ь', '-ей', 'ночь → ноч+ей', 'ночей', 'пять ночей'],
              ['Nötr -о (sert)', '-Ø', 'окно → окон', 'окон', 'много окон'],
              ['Nötr -е', '-ей', 'море → мор+ей', 'морей', 'пять морей'],
              ['Nötr -ие/-ия', '-ий', 'здание → здани+й', 'зданий', 'много зданий'],
            ],
          },
        },
        {
          h2: 'Düzensiz tamlayan çoğullar — Mutlaka listesi',
          content:
            'En sık kullanılan Rusça isimlerin **oldukça düzensiz** tamlayan çoğul formları vardır. Bu **yüksek frekanslı kelimeler** ezberlenmelidir.',
          table: {
            caption: '11 çok yaygın düzensiz tamlayan çoğul',
            boldColumnIndices: [1, 2],
            headers: ['Nominatif tekil', 'Tamlayan çoğul', 'Örnek', 'Not'],
            rows: [
              ['человек (kişi)', 'людей', 'много людей', 'люди türevi'],
              ['ребёнок (çocuk)', 'детей', 'много детей', 'дети türevi'],
              ['глаз (göz)', 'глаз', 'пара глаз', 'Sıfır ek'],
              ['раз (kez)', 'раз', 'несколько раз', 'Sıfır ek'],
              ['солдат (asker)', 'солдат', 'отряд солдат', 'Sıfır ek'],
              ['носок (çorap)', 'носков', 'пара носков', '-ов korunur'],
              ['чулок (jartiyer)', 'чулок', 'пара чулок', 'Sıfır ek'],
              ['яблоко (elma)', 'яблок', 'килограмм яблок', 'Sıfır ek'],
              ['имя (isim)', 'имён', 'список имён', 'Nötr -мя türü'],
              ['мать (anne)', 'матерей', 'двое матерей', 'Özel çekim'],
              ['дочь (kız)', 'дочерей', 'трое дочерей', 'Özel çekim'],
            ],
          },
        },
        {
          h2: 'Rusça tamlayan edatları — Tam liste',
          content:
            "Bu **edatlar** her zaman **tamlayan** gerektirir. Bellek yardımı — kısaltma **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**. Bu 8'i **%90** kapsar.",
          table: {
            caption: 'Örneklerle 16 tamlayan edatı',
            boldColumnIndices: [0, 2],
            headers: ['Edat', 'Anlam', 'İsimle', 'Tam örnek'],
            rows: [
              ['без', 'olmadan', 'без молока', 'Я пью чай без молока.'],
              ['до', 'kadar / önce / ...e kadar', 'до урока', 'Позвони мне до урока.'],
              ['из', '...den (içten)', 'из России', 'Он приехал из России.'],
              ['с', '...den (yüzey)', 'с полки', 'Книга упала с полки.'],
              ['у', '...de / yakınında', 'у меня', 'У меня есть кошка.'],
              ['от', '...den (kişi)', 'от друга', 'Письмо от друга.'],
              ['после', '...den sonra', 'после работы', 'После работы я устал.'],
              ['для', '...için', 'для тебя', 'Это подарок для тебя.'],
              ['кроме', '...dışında', 'кроме меня', 'Все кроме меня пришли.'],
              ['вокруг', 'etrafında', 'вокруг города', 'Мы ехали вокруг города.'],
              ['мимо', 'yanından geçerek', 'мимо школы', 'Он прошёл мимо школы.'],
              ['вместо', 'yerine', 'вместо кофе', 'Выпей воды вместо кофе.'],
              ['напротив', 'karşısında', 'напротив банка', 'Кафе напротив банка.'],
              [
                'из-за',
                'yüzünden / ...nin arkasından',
                'из-за дождя',
                'Из-за дождя мы остались дома.',
              ],
              ['из-под', '...nin altından', 'из-под стола', 'Кот вылез из-под стола.'],
              ['ради', '...uğruna', 'ради тебя', 'Ради твоего счастья.'],
            ],
          },
        },
        {
          h2: 'Rusça sayılar ve tamlayan',
          content:
            'Rusçada saymak **tamlayan** gerektirir. **1** = Nominatif; **2–4** = Tamlayan tekil; **5–0** = Tamlayan çoğul.',
          table: {
            caption: 'Sayı + hal kuralları ve örnekler',
            boldColumnIndices: [1, 2],
            headers: ['Sayı / nicelik', 'Gereken hal', 'Örnek (стол)', 'Çeviri'],
            rows: [
              ['1', 'Nominatif tekil', 'один стол', 'bir masa'],
              ['2, 3, 4', 'Tamlayan tekil', 'два стола / три стола', 'iki / üç masa'],
              ['5–20', 'Tamlayan çoğul', 'пять столов', 'beş masa'],
              [
                '21, 31, 41… (1 ile biter)',
                'Nominatif tekil',
                'двадцать один стол',
                'yirmi bir masa',
              ],
              [
                '22–24, 32–34… (2-4 ile biter)',
                'Tamlayan tekil',
                'двадцать два стола',
                'yirmi iki masa',
              ],
              [
                '25–30 vb. (5–9, 0 ile biter)',
                'Tamlayan çoğul',
                'двадцать пять столов',
                'yirmi beş masa',
              ],
              ['100, 200, 1000…', 'Tamlayan çoğul', 'сто столов', 'yüz masa'],
              [
                'много / несколько / мало',
                'Tamlayan çoğul',
                'много столов',
                'çok / birkaç / az masa',
              ],
              ['сколько / столько', 'Tamlayan çoğul', 'сколько столов?', 'kaç masa?'],
            ],
          },
        },
        {
          h2: 'Tamlayan vs akkusatif: Ayrım',
          content:
            '**Canlı eril** isimlerde akkusatif form **tamlayanla aynıdır** — **студента** ikisi de olabilir. **Bağlam** ve **cümle yapısı** hangi halin söz konusu olduğunu gösterir.',
          table: {
            caption: 'Tamlayan vs akkusatif karşılaştırması',
            boldColumnIndices: [0, 1],
            headers: ['Durum', 'Rusça cümle', 'Açıklama'],
            rows: [
              ['Mülkiyet', 'Это книга студента.', 'Tamlayan sahibi belirtir'],
              ['Yokluk (нет)', 'Нет студента.', 'нет her zaman tamlayan gerektirir'],
              ['Doğrudan nesne (canlı)', 'Я вижу студента.', 'Canlı akkusatif = tamlayan formu'],
              ['Doğrudan nesne (cansız)', 'Я вижу стол.', 'Cansız akkusatif = nominatif'],
              ['2–4 sayılarından sonra', 'Я вижу двух студентов.', 'Canlı → tamlayan çoğul'],
              ['Bölümsel tamlayan', 'Хочешь чаю?', 'Tamlayan "biraz" anlamı verir'],
            ],
          },
        },
        {
          h2: 'Rusça mülkiyet grameri: У + tamlayan (Sahip olmak)',
          content:
            'Rusçada mülkiyet için **iki ana yol** vardır, ikisi de tamlayan kullanır. **Yapı 1:** **машина друга** — arkadaşın arabası. **Yapı 2:** **У** [tamlayan halinde kişi] **есть** [şey] — "sahip olmak". Rusçada doğrudan "sahip olmak" fiili yoktur.',
          subsections: [
            {
              h3: 'У yapısı tüm zamanlarda',
              content:
                '**Şimdiki:** **У меня есть кошка.** (Kedim var). **Geçmiş:** **У меня была кошка.** (Kedim vardı). **Gelecek:** **У меня будет кошка.** (Kedim olacak). **Olumsuzluk:** **У меня нет кошки.** (нет + tamlayan).',
            },
          ],
        },
        {
          h2: 'En sık 7 tamlayan hatası (ve nasıl düzeltilir)',
          content: 'Tamlayanda en sık **hatalar**:',
          bullets: [
            '**НЕТ sonrası nominatif** — Нет кот. ✗ → Нет кота. ✓',
            '**8 harf kuralı unutulması** — книгы ✗ → книги ✓',
            '**Yanlış sayı uyumu** — пять стол ✗ → пять столов ✓',
            '**Dişil sıfır eklilerde -ов** — много женщинов ✗ → много женщин ✓',
            '**из ve от karıştırılması** — из = ...den (yer); от = ...den (kişi)',
            '**Karşılaştırmadan sonra tamlayan yerine akkusatif** — Он старше я ✗ → Он старше меня ✓',
            '**Tamlayan çoğulda geçici ünlüler unutulması** — окнов ✗ → окон ✓',
          ],
        },
      ],
      conclusion:
        'Rusça tamlayan hali hal sisteminin **iş atıdır**. **Mülkiyet**, **olumsuzluk**, **miktar**, **karşılaştırma**, **tarihler** ve diğer tüm hallerden fazla **edat** tarafından gerektirilir.',
      conclusionOutro: 'Devam etmeye hazır mısınız? Serimizdeki diğer halleri keşfedin:',
      ctaText: 'Rusça halleri uygulamamızla pratik edin',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusça tamlayan hali ne için kullanılır?',
          answer:
            'Tamlayan mülkiyet (книга студента), yokluk/olumsuzluk (нет воды), miktar ve sayılar (два стакана, много людей), edatlardan sonra (без, до, из, у, от, после, для…), karşılaştırmalar (старше меня) ve tarihler için kullanılır.',
        },
        {
          question: 'Rusçada tamlayan çoğul nasıl oluşturulur?',
          answer:
            'Eril sert: -ов (стол → столов). Eril/Dişil yumuşak: genelde -ей (ночь → ночей). Dişil -а: sıfır ek (женщина → женщин). Nötr -о: geçici ünlülerle sıfır ek (окно → окон).',
        },
        {
          question: 'Rusça tamlayan akkusatifle aynı mı?',
          answer:
            'Tam değil, ancak canlı eril isimlerde örtüşürler: Я вижу студента (akkusatif) ve Нет студента (tamlayan) aynı formu kullanır. Cansız isimlerde farklıdırlar.',
        },
        {
          question: 'Hangi fiiller Rusçada tamlayan gerektirir?',
          answer:
            'бояться, ждать, желать, избегать, достигать, лишать, касаться tamlayan gerektirir. Хотеть bölümsel yapılarda da tamlayan alabilir (хочешь чаю?).',
        },
        {
          question: "Rusçada 'Arabam var' nasıl söylenir?",
          answer:
            "Rusçada doğrudan 'sahip olmak' fiili yoktur. Kullanın: У + [tamlayan halinde kişi] + есть + [şey]: У меня есть машина. Olumsuzlukta: У меня нет машины – sahip olunmayan şey tamlayan halindedir.",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça tamlayan hali: kurallar, ekler ve 32 gerçek örnek',
        description:
          'Rusça tamlayan hali için en kapsamlı rehber: 7 kullanım, tekil ve çoğul ekleri, düzensiz formlar, 16 edat, sayılar, У + tamlayan.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
        },
        keywords:
          'Rusça tamlayan hali, Rusça tamlayan ekleri, Rusça tamlayan kuralları, Rusça tamlayan çoğul, Rusça tamlayan örnekleri',
      },
    },
    pl_pl: {
      slug: 'russian-genitive-case',
      title: 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
      metaTitle: 'Rosyjski dopełniacz: zasady, końcówki i przykłady | Russian Cases with Anna',
      metaDescription:
        'Najpełniejszy przewodnik po rosyjskim dopełniaczu: 7 zastosowań, końcówki liczby pojedynczej i mnogiej, formy nieregularne, 16 przyimków, liczebniki, У + dopełniacz. 32 przykłady z transliteracją.',
      keywords: [
        'rosyjski dopełniacz',
        'końcówki dopełniacza rosyjskiego',
        'dopełniacz rosyjski zasady',
        'rosyjski dopełniacz liczba mnoga',
        'dopełniacz rosyjski przykłady',
        'gramatyka posiadania rosyjski',
      ],
      h1: 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
      heroImage: {
        src: '/articles/free-russian-lesson-genitive-case.webp',
        alt: 'Darmowa lekcja rosyjskiego o dopełniaczu: posiadanie, przeczenie i ilości',
        width: 1200,
        height: 630,
      },
      intro:
        'Gdyby można było opanować tylko **jeden rosyjski przypadek** oprócz mianownika, powinien to być **dopełniacz**. Rosyjski dopełniacz jest zdecydowanie **najczęściej używanym przypadkiem** po mianowniku – pojawia się przy **posiadaniu**, **przeczeniu**, **ilościach**, **datach** i po większej liczbie **przyimków** niż jakikolwiek inny przypadek.\n\nTen przewodnik obejmuje wszystko: zasady, wszystkie końcówki, formy nieregularne i **32 przykładowe rosyjskie zdania**, aby zobaczyć, jak dopełniacz działa w praktyce.',
      whatYouLearn: [
        'Czym jest rosyjski dopełniacz i kiedy się go używa (7 głównych zastosowań)',
        'Końcówki dopełniacza liczby pojedynczej – wszystkie rodzaje rzeczowników z przykładami',
        'Końcówki dopełniacza liczby mnogiej – w tym „końcówka zerowa" i samogłoski ruchome',
        '11 nieregularnych dopełniaczy liczby mnogiej do zapamiętania (человек → людей itd.)',
        '16 przyimków wymagających dopełniacza',
        'Liczebniki i ilości z dopełniaczem (2/3/4 vs 5+, 21, 22, 25…)',
        'Dopełniacz vs. biernik – pułapka żywotnego rodzaju męskiego',
        'Konstrukcja У + dopełniacz na „mieć" w rosyjskim',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjski dopełniacz z inteligentnymi ćwiczeniami',
        description:
          'Nasza aplikacja mobilna ćwiczy wszystkie 6 rosyjskich przypadków – w tym dopełniacz liczby mnogiej – z powtórkami rozłożonymi w czasie, prawdziwymi zdaniami i natychmiastową informacją zwrotną. Na Androida i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć dziś',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Pełny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rosyjskie końcówki przypadków: ostateczna ściągawka',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rosyjski celownik: „do" i „dla" po rosyjsku',
        },
      ],
      sections: [
        {
          h2: 'Czym jest rosyjski dopełniacz?',
          content:
            '**Dopełniacz** (Родительный падеж – dosł. „przypadek pochodzenia") jest drugim z sześciu rosyjskich przypadków. Jego nazwa nawiązuje do głównej funkcji: **pochodzenie, przynależność lub relacja** – odpowiada na **Кого?** (Czyj?) i **Чего?** (Czego?). W polskim wyrażamy to za pomocą **„od"** lub dopełniacza.\n\nW rosyjskim dzieje się to wyłącznie przez **końcówki wyrazów**.',
          subsections: [
            {
              h3: 'Krótka odpowiedź',
              content:
                'Dopełniacz w rosyjskim odpowiada na **Кого?** (Czyj?) i **Чего?** (Czego?). Używany jest głównie przy **posiadaniu**, **nieobecności**, **ilości** oraz po wielu **przyimkach**.',
            },
          ],
        },
        {
          h2: '7 głównych zastosowań rosyjskiego dopełniacza',
          content:
            'Dopełniacz jest **najwszechstronniejszym przypadkiem** w rosyjskim. Pojawia się przy **posiadaniu**, **przeczeniu**, **ilościach**, **przyimkach**, **porównaniach**, **datach** i z **określonymi czasownikami**.',
          image: {
            src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
            alt: 'Ściągawka: Kiedy używać dopełniacza w rosyjskim',
            width: 1200,
            height: 630,
          },
          subsections: [
            {
              h3: 'Zastosowanie 1 — Posiadanie i przynależność',
              content:
                'Dopełniacz zastępuje polskie **„od"** lub dopełniacz. **Posiadacz** stoi w **dopełniaczu**.',
              bullets: [
                '**дом отца** — dom ojca',
                '**столица России** — stolica Rosji',
                '**конец фильма** — koniec filmu',
              ],
            },
            {
              h3: 'Zastosowanie 2 — Nieobecność i przeczenie (нет, не было, не будет)',
              content:
                'Gdy czegoś **nie ma**, jest niedostępne lub nieobecne, używamy dopełniacza. **нет**, **не было**, **не будет** zawsze wymagają dopełniacza.',
              bullets: [
                '**У меня нет машины.** — Nie mam samochodu.',
                '**Здесь нет сахара.** — Nie ma tutaj cukru.',
                '**Его не было дома.** — Nie było go w domu.',
                '**Завтра не будет дождя.** — Jutro nie będzie deszczu.',
              ],
            },
            {
              h3: 'Zastosowanie 3 — Ilość, liczebniki i miara',
              content:
                'Dopełniacz stoi po **liczebnikach** i **słowach oznaczających ilość**. Po **1**: mianownik liczby pojedynczej. Po **2, 3, 4**: dopełniacz liczby pojedynczej. Po **5–20** i więcej: dopełniacz liczby mnogiej. Po **много**, **мало**, **несколько**, **сколько**: dopełniacz liczby mnogiej.',
            },
            {
              h3: 'Zastosowanie 4 — Przyimki',
              content:
                '**Więcej przyimków** wymaga dopełniacza niż jakiegokolwiek innego przypadku: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
            },
            {
              h3: 'Zastosowanie 5 — Porównanie',
              content:
                'W porównaniach używamy **dopełniacza**: **Он старше меня.** — Jest starszy ode mnie.',
            },
            {
              h3: 'Zastosowanie 6 — Daty',
              content:
                'Przy **dacie** dzień i miesiąc stoją w dopełniaczu: **Он родился пятого марта.** — Urodził się piątego marca.',
            },
            {
              h3: 'Zastosowanie 7 — Określone czasowniki',
              content:
                '**ждать** (czekać na), **желать** (życzyć), **бояться** (bać się), **избегать** (uniknąć), **достигать** (osiągnąć) wymagają dopełniacza.',
            },
          ],
        },
        {
          h2: 'Końcówki dopełniacza — liczba pojedyncza',
          content:
            'Tabela pokazuje końcówki **dopełniacza liczby pojedynczej** dla każdego typu rzeczownika. Uwaga na **regułę 8 liter**: Ы zamienia się na И po Г, К, Х, Ж, Ш, Щ, Ч, Ц.',
          table: {
            caption: 'Końcówki dopełniacza liczby pojedynczej według typu rzeczownika',
            boldColumnIndices: [1, 3],
            headers: ['Typ rzeczownika', 'Końcówka', 'Tworzenie', 'Wynik', 'Przykład w kontekście'],
            rows: [
              ['Męski twardy', '-а', 'стол → стол+а', 'стола', 'нет стола'],
              ['Męski miękki', '-я', 'гений → гени+я', 'гения', 'без гения'],
              ['Męski na -ж/ш/щ/ч', '-а', 'нож → нож+а', 'ножа', 'без ножа'],
              ['Żeński -а (twardy)', '-ы', 'книга → книг+ы', 'книги', 'нет книги'],
              [
                'Żeński -а (po г/к/х/ж/ш/щ/ч/ц)',
                '-и',
                'подруга → подруг+и',
                'подруги',
                'без подруги',
              ],
              ['Żeński -я', '-и', 'неделя → недел+и', 'недели', 'нет недели'],
              ['Żeński -ь', '-и', 'ночь → ноч+и', 'ночи', 'до ночи'],
              ['Nijaki -о', '-а', 'окно → окн+а', 'окна', 'нет окна'],
              ['Nijaki -е', '-я', 'море → мор+я', 'моря', 'до моря'],
              ['Nijaki -мя', '-ени', 'имя → имен+и', 'имени', 'без имени'],
            ],
          },
        },
        {
          h2: 'Końcówki dopełniacza — liczba mnoga (najtrudniejsza część)',
          content:
            '**Dopełniacz liczby mnogiej** uważa się za **najtrudniejszy obszar** rosyjskiej deklinacji. Rzeczowniki żeńskie na **-а** i nijakie na **-о** często mają **końcówkę zerową** (**-Ø**).',
          table: {
            caption: 'Końcówki dopełniacza liczby mnogiej według typu rzeczownika',
            boldColumnIndices: [1, 3],
            headers: ['Typ rzeczownika', 'Końcówka', 'Tworzenie', 'Wynik', 'Przykład w kontekście'],
            rows: [
              ['Męski twardy', '-ов', 'стол → стол+ов', 'столов', 'пять столов'],
              ['Męski na -ж/ш/щ/ч/ц', '-ей', 'нож → нож+ей', 'ножей', 'несколько ножей'],
              ['Męski miękki -й', '-ев', 'музей → музе+ев', 'музеев', 'три музея'],
              ['Męski miękki -ь', '-ей', 'словарь → словар+ей', 'словарей', 'много словарей'],
              ['Żeński -а (twardy)', '-Ø', 'женщина → женщин', 'женщин', 'много женщин'],
              ['Żeński -я', '-ей / -й', 'неделя → недель', 'недель', 'несколько недель'],
              ['Żeński -ь', '-ей', 'ночь → ноч+ей', 'ночей', 'пять ночей'],
              ['Nijaki -о (twardy)', '-Ø', 'окно → окон', 'окон', 'много окон'],
              ['Nijaki -е', '-ей', 'море → мор+ей', 'морей', 'пять морей'],
              ['Nijaki -ие/-ия', '-ий', 'здание → здани+й', 'зданий', 'много зданий'],
            ],
          },
        },
        {
          h2: 'Nieregularne dopełniacze liczby mnogiej — lista obowiązkowa',
          content:
            'Najczęściej używane rosyjskie rzeczowniki mają **silnie nieregularne** formy dopełniacza liczby mnogiej. Te **wysokoczęstotliwościowe słowa** trzeba zapamiętać.',
          table: {
            caption: '11 ultra-częstych nieregularnych dopełniaczy liczby mnogiej',
            boldColumnIndices: [1, 2],
            headers: ['Mianownik lp.', 'Dopełniacz lm.', 'Przykład', 'Uwaga'],
            rows: [
              ['человек (osoba)', 'людей', 'много людей', 'Suplecja od люди'],
              ['ребёнок (dziecko)', 'детей', 'много детей', 'Suplecja od дети'],
              ['глаз (oko)', 'глаз', 'пара глаз', 'Końcówka zerowa'],
              ['раз (raz)', 'раз', 'несколько раз', 'Końcówka zerowa'],
              ['солдат (żołnierz)', 'солдат', 'отряд солдат', 'Końcówka zerowa'],
              ['носок (skarpetka)', 'носков', 'пара носков', 'zachowuje -ов'],
              ['чулок (pończocha)', 'чулок', 'пара чулок', 'Końcówka zerowa'],
              ['яблоко (jabłko)', 'яблок', 'килограмм яблок', 'Końcówka zerowa'],
              ['имя (imię)', 'имён', 'список имён', 'Typ nijaki -мя'],
              ['мать (matka)', 'матерей', 'двое матерей', 'Specjalna deklinacja'],
              ['дочь (córka)', 'дочерей', 'трое дочерей', 'Specjalna deklinacja'],
            ],
          },
        },
        {
          h2: 'Rosyjskie przyimki z dopełniaczem — pełna lista',
          content:
            'Te **przyimki** zawsze wymagają **dopełniacza**. Mnemonika – akronim **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**. Te 8 obejmuje **90%** użyć.',
          table: {
            caption: '16 przyimków z dopełniaczem z przykładami',
            boldColumnIndices: [0, 2],
            headers: ['Przyimek', 'Znaczenie', 'Z rzeczownikiem', 'Pełny przykład'],
            rows: [
              ['без', 'bez', 'без молока', 'Я пью чай без молока.'],
              ['до', 'do / przed / aż do', 'до урока', 'Позвони мне до урока.'],
              ['из', 'z (wnętrza)', 'из России', 'Он приехал из России.'],
              ['с', 'z (powierzchni)', 'с полки', 'Книга упала с полки.'],
              ['у', 'u / blisko', 'у меня', 'У меня есть кошка.'],
              ['от', 'od (osoby)', 'от друга', 'Письмо от друга.'],
              ['после', 'po', 'после работы', 'После работы я устал.'],
              ['для', 'dla', 'для тебя', 'Это подарок для тебя.'],
              ['кроме', 'oprócz', 'кроме меня', 'Все кроме меня пришли.'],
              ['вокруг', 'dookoła', 'вокруг города', 'Мы ехали вокруг города.'],
              ['мимо', 'obok', 'мимо школы', 'Он прошёл мимо школы.'],
              ['вместо', 'zamiast', 'вместо кофе', 'Выпей воды вместо кофе.'],
              ['напротив', 'naprzeciw', 'напротив банка', 'Кафе напротив банка.'],
              ['из-за', 'z powodu / zza', 'из-за дождя', 'Из-за дождя мы остались дома.'],
              ['из-под', 'z pod', 'из-под стола', 'Кот вылез из-под стола.'],
              ['ради', 'dla (dobra)', 'ради тебя', 'Ради твоего счастья.'],
            ],
          },
        },
        {
          h2: 'Rosyjskie liczebniki i dopełniacz',
          content:
            'Liczenie w rosyjskim wymaga **dopełniacza**. **1** = mianownik; **2–4** = dopełniacz liczby pojedynczej; **5–0** = dopełniacz liczby mnogiej.',
          table: {
            caption: 'Zasady liczebnik + przypadek z przykładami',
            boldColumnIndices: [1, 2],
            headers: [
              'Liczebnik / kwantyfikator',
              'Wymagany przypadek',
              'Przykład (стол)',
              'Tłumaczenie',
            ],
            rows: [
              ['1', 'Mianownik lp.', 'один стол', 'jeden stół'],
              ['2, 3, 4', 'Dopełniacz lp.', 'два стола / три стола', 'dwa / trzy stoły'],
              ['5–20', 'Dopełniacz lm.', 'пять столов', 'pięć stołów'],
              [
                '21, 31, 41… (kończy się na 1)',
                'Mianownik lp.',
                'двадцать один стол',
                'dwadzieścia jeden stołów',
              ],
              [
                '22–24, 32–34… (kończy się na 2-4)',
                'Dopełniacz lp.',
                'двадцать два стола',
                'dwadzieścia dwa stoły',
              ],
              [
                '25–30 itd. (kończy się na 5–9, 0)',
                'Dopełniacz lm.',
                'двадцать пять столов',
                'dwadzieścia pięć stołów',
              ],
              ['100, 200, 1000…', 'Dopełniacz lm.', 'сто столов', 'sto stołów'],
              [
                'много / несколько / мало',
                'Dopełniacz lm.',
                'много столов',
                'wiele / kilka / mało stołów',
              ],
              ['сколько / столько', 'Dopełniacz lm.', 'сколько столов?', 'ile stołów?'],
            ],
          },
        },
        {
          h2: 'Dopełniacz vs. biernik: rozróżnienie',
          content:
            'Przy rzeczownikach **żywotnych rodzaju męskiego** forma biernika jest **identyczna** z dopełniaczem – **студента** może być obu. **Kontekst** i **struktura zdania** pokazują, który przypadek występuje.',
          table: {
            caption: 'Porównanie dopełniacz vs. biernik',
            boldColumnIndices: [0, 1],
            headers: ['Sytuacja', 'Zdanie rosyjskie', 'Wyjaśnienie'],
            rows: [
              ['Posiadanie', 'Это книга студента.', 'Dopełniacz oznacza posiadacza'],
              ['Nieobecność (нет)', 'Нет студента.', 'нет zawsze wymaga dopełniacza'],
              [
                'Dopełnienie bliższe (żywotne)',
                'Я вижу студента.',
                'Biernik żywotny = forma dopełniacza',
              ],
              [
                'Dopełnienie bliższe (nieżywotne)',
                'Я вижу стол.',
                'Biernik nieżywotny = mianownik',
              ],
              [
                'Po liczebnikach 2–4',
                'Я вижу двух студентов.',
                'Żywotne → dopełniacz liczby mnogiej',
              ],
              ['Dopełniacz partytywny', 'Хочешь чаю?', 'Dopełniacz wyraża „trochę z"'],
            ],
          },
        },
        {
          h2: 'Gramatyka posiadania w rosyjskim: У + dopełniacz (mieć)',
          content:
            'Rosyjski ma **dwie główne drogi** wyrażania posiadania, obie z dopełniaczem. **Konstrukcja 1:** **машина друга** — samochód przyjaciela. **Konstrukcja 2:** **У** [osoba w dopełniaczu] **есть** [rzecz] — „mieć". Rosyjski nie ma bezpośredniego czasownika na „mieć".',
          subsections: [
            {
              h3: 'Konstrukcja У we wszystkich czasach',
              content:
                '**Czas teraźniejszy:** **У меня есть кошка.** (Mam kota). **Czas przeszły:** **У меня была кошка.** (Miałem kota). **Czas przyszły:** **У меня будет кошка.** (Będę mieć kota). **Przeczenie:** **У меня нет кошки.** (нет + dopełniacz).',
            },
          ],
        },
        {
          h2: 'Top 7 błędów w dopełniaczu (i jak je naprawić)',
          content: 'Najczęstsze **błędy** w dopełniaczu:',
          bullets: [
            '**Mianownik po НЕТ** — Нет кот. ✗ → Нет кота. ✓',
            '**Zapomniana reguła 8 liter** — книгы ✗ → книги ✓',
            '**Błędna kongruencja liczebnikowa** — пять стол ✗ → пять столов ✓',
            '**-ов dla żeńskich rzeczowników z końcówką zerową** — много женщинов ✗ → много женщин ✓',
            '**Pomylenie из i от** — из = z (miejsca); от = od (osoby)',
            '**Biernik zamiast dopełniacza po porównaniu** — Он старше я ✗ → Он старше меня ✓',
            '**Zapomniane samogłoski ruchome w dopełniaczu liczby mnogiej** — окнов ✗ → окон ✓',
          ],
        },
      ],
      conclusion:
        'Rosyjski dopełniacz to **konik roboczy** systemu przypadków. Reguluje **posiadanie**, **przeczenie**, **ilość**, **porównanie**, **daty** i jest wymagany przez więcej **przyimków** niż jakikolwiek inny przypadek.',
      conclusionOutro: 'Gotowy na więcej? Poznaj inne przypadki w naszej serii:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Do czego służy rosyjski dopełniacz?',
          answer:
            'Dopełniacz służy do posiadania (книга студента), nieobecności/przeczenia (нет воды), ilości i liczebników (два стакана, много людей), po przyimkach (без, до, из, у, от, после, для…), porównań (старше меня) i dat.',
        },
        {
          question: 'Jak tworzyć dopełniacz liczby mnogiej w rosyjskim?',
          answer:
            'Męski twardy: -ов (стол → столов). Męski/żeński miękki: często -ей (ночь → ночей). Żeński -а: końcówka zerowa (женщина → женщин). Nijaki -о: końcówka zerowa ze samogłoskami ruchomymi (окно → окон).',
        },
        {
          question: 'Czy rosyjski dopełniacz to to samo co biernik?',
          answer:
            'Nie do końca, ale nakładają się przy rzeczownikach żywotnych rodzaju męskiego: Я вижу студента (biernik) i Нет студента (dopełniacz) używają tej samej formy. Przy nieżywotnych się różnią.',
        },
        {
          question: 'Które czasowniki wymagają dopełniacza w rosyjskim?',
          answer:
            'бояться, ждать, желать, избегать, достигать, лишать, касаться wymagają dopełniacza. Хотеть może w konstrukcjach partytywnych także przyjmować dopełniacz (хочешь чаю?).',
        },
        {
          question: 'Jak powiedzieć „Mam" po rosyjsku?',
          answer:
            'Rosyjski nie ma bezpośredniego czasownika na „mieć". Użyj: У + [osoba w dopełniaczu] + есть + [rzecz]: У меня есть машина. W przeczeniu: У меня нет машины – nieposiadana rzecz stoi w dopełniaczu.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
        description:
          'Najpełniejszy przewodnik po rosyjskim dopełniaczu: 7 zastosowań, końcówki lp. i lm., formy nieregularne, 16 przyimków, liczebniki, У + dopełniacz.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
        },
        keywords:
          'rosyjski dopełniacz, końcówki dopełniacza rosyjskiego, dopełniacz rosyjski zasady, rosyjski dopełniacz liczba mnoga, dopełniacz rosyjski przykłady',
      },
    },
    ru_ru: {
      slug: 'russian-genitive-case',
      title: 'Родительный падеж: правила, окончания и 32 примера',
      metaTitle:
        'Родительный падеж русского языка: правила, окончания и примеры | Russian Cases with Anna',
      metaDescription:
        'Полное руководство по родительному падежу: 7 употреблений, окончания ед. и мн. числа, неправильные формы, 16 предлогов, числительные, у + родительный. 32 примера с транслитерацией.',
      keywords: [
        'родительный падеж',
        'окончания родительного падежа',
        'родительный падеж правила',
        'родительный падеж множественное число',
        'примеры родительного падежа',
        'грамматика принадлежности русский',
      ],
      h1: 'Родительный падеж: правила, окончания и 32 примера',
      heroImage: {
        src: '/articles/free-russian-lesson-genitive-case.webp',
        alt: 'Урок русского языка: родительный падеж — принадлежность, отрицание и количество',
        width: 1200,
        height: 630,
      },
      intro:
        'Если осваивать **только один падеж** после именительного, это должен быть **родительный**. Родительный падеж — **самый частотный** после именительного: он используется для **принадлежности**, **отрицания**, **количества**, **дат** и с большим числом **предлогов**, чем любой другой падеж.\n\nВ этом руководстве: правила, все окончания, неправильные формы и **32 примера** употребления родительного падежа.',
      whatYouLearn: [
        'Что такое родительный падеж и когда его использовать (7 основных случаев)',
        'Окончания родительного падежа ед. числа — все роды существительных',
        'Окончания родительного падежа мн. числа — включая нулевое окончание',
        '11 неправильных форм родительного мн. числа (человек → людей и др.)',
        '16 предлогов, требующих родительного падежа',
        'Числительные и количество с родительным (2/3/4 vs 5+, 21, 22, 25…)',
        'Родительный vs винительный — ловушка одушевлённого мужского рода',
        'Конструкция у + родительный для выражения «иметь»',
      ],
      leadMagnetCta: {
        title: 'Тренируйте родительный падеж с умными упражнениями',
        description:
          'Наше приложение тренирует все 6 падежей — включая родительный мн. числа — с интервальным повторением и реальными примерами. На Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Окончания падежей: шпаргалка',
        },
        { href: '/learn/lessons/dative-case-declension', label: 'Дательный падеж: «кому» и «для»' },
      ],
      sections: [
        {
          h2: 'Что такое родительный падеж?',
          content:
            '**Родительный падеж** (Родительный падеж — букв. «падеж происхождения») — второй из шести падежей русского языка. Его название указывает на основную функцию: **происхождение, принадлежность или связь** — он отвечает на **Кого?** (Чьего?) и **Чего?** (Чего?). В русском это выражается **окончаниями** слов.',
        },
        {
          h2: '7 основных употреблений родительного падежа',
          content:
            'Родительный — **самый многозначный** падеж в русском. Он используется для **принадлежности**, **отрицания**, **количества**, **предлогов**, **сравнения**, **дат** и с **некоторыми глаголами**.',
        },
        {
          h2: 'Топ-5 ошибок в родительном падеже (и как их исправить)',
          bullets: [
            '**Именительный после нет** — Нет кот ✗ → Нет кота ✓',
            '**Согласование с числительными** — пять стол ✗ → пять столов ✓',
            '**Забыть нулевое окончание** — много женщинов ✗ → много женщин ✓',
            '**Спутать родительный и винительный для одуш.** — Я вижу студент ✗ → Я вижу студента ✓',
            '**у + именительный** — У меня есть кот ✗ → У меня есть кота ✓',
          ],
        },
      ],
      conclusion:
        'Родительный падеж — основа повседневной коммуникации на русском. Освойте сначала нет + родительный, затем числительные, затем предлоги. Формы мн. числа требуют практики.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Для чего используется родительный падеж в русском?',
          answer:
            'Родительный падеж используется для **принадлежности** (дом отца), **отсутствия/отрицания** (нет кота, не было времени), **количества** (много книг, пять столов), **дат** (пятого марта) и после многих **предлогов** (без, до, из, у, от, после, для).',
        },
        {
          question: 'Какие предлоги требуют родительного падежа?',
          answer:
            'Основные: без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль. С родительным падежом используется больше предлогов, чем с любым другим.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Родительный падеж: правила, окончания и 32 примера',
        description:
          'Руководство по родительному падежу: употребления, окончания, предлоги, числительные.',
        datePublished: '2025-03-11',
        dateModified: '2025-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-genitive-case',
        },
        keywords: 'родительный падеж, окончания родительного падежа, правила родительного падежа',
      },
    },
  },
  'russian-accusative-case': {
    fr_fr: {
      slug: 'russian-accusative-case',
      title: 'Accusatif russe : objets directs, animé vs inanimé et verbes de mouvement',
      metaTitle: 'Accusatif russe : règles, terminaisons et 30 exemples | Russian Cases with Anna',
      metaDescription:
        "Guide complet de l'accusatif russe : tableau des terminaisons, animé vs inanimé, verbes de mouvement, в/на direction vs lieu, 9 prépositions, 30 exemples authentiques.",
      keywords: [
        'accusatif russe',
        'terminaisons accusatif russe',
        'animé inanimé russe',
        'objet direct russe',
        'verbes de mouvement russe',
      ],
      h1: 'Accusatif russe : objets directs, animé vs inanimé et verbes de mouvement',
      heroImage: {
        src: '/articles/free-russian-lesson-accusative-case.jpg',
        alt: "Leçon gratuite de russe sur l'accusatif : objets directs et verbes de mouvement",
        width: 1200,
        height: 630,
      },
      intro:
        "L'accusatif russe est le **deuxième cas le plus important** après le génitif – et dans bien des cas le plus intuitif. Il marque l'**objet direct** : la personne ou la chose directement affectée par l'action du verbe.\n\nMais l'accusatif a une subtilité qui surprend tout apprenant : la **distinction animé/inanimé**. Pour les noms masculins, on décline différemment les objets animés et inanimés – cette règle est essentielle pour un russe correct.",
      whatYouLearn: [
        "Ce qu'est l'accusatif russe et ses **4 usages principaux**",
        "Terminaisons de l'accusatif pour **tous les genres** (singulier et pluriel)",
        "La **distinction animé vs inanimé** – source d'erreurs majeure",
        "**Verbes de mouvement** russes et l'accusatif",
        '**В et НА** avec accusatif (direction) vs prépositif (lieu)',
        "Les **9 prépositions** qui exigent l'accusatif",
        "**15 verbes** importants avec objet à l'accusatif",
        '**30 exemples** russes authentiques',
      ],
      leadMagnetCta: {
        title: "S'entraîner à l'accusatif russe avec des exercices intelligents",
        description:
          'Notre app mobile couvre les 6 cas russes – avec focus sur animé/inanimé, verbes de mouvement et в/на direction vs lieu. Sur Android et iOS.',
        ctaText: "Télécharger l'app et commencer à s'entraîner",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Génitif russe' },
        { href: '/learn/lessons/dative-case-declension', label: 'Datif russe' },
      ],
      sections: [
        {
          h2: 'Réponse rapide',
          content:
            "L'accusatif russe répond à **Кого?** (Qui ?) et **Что?** (Quoi ?). Il marque les objets directs, exprime la direction avec в et на, et apparaît dans les expressions de temps. Sa complexité principale est la **distinction animé/inanimé** pour les noms masculins.",
        },
        {
          h2: "Top 6 erreurs d'accusatif (et comment les corriger)",
          bullets: [
            '**Oublier -а → -у pour le féminin** — Я вижу женщина ✗ → Я вижу женщину ✓',
            "**Traiter l'animé masc. comme inanimé** — Я вижу студент ✗ → Я вижу студента ✓",
            "**Utiliser l'accusatif pour le lieu** — Я в школу сейчас ✗ → Я в школе сейчас ✓",
            '**Nominatif pluriel pour animés** — Я вижу студенты ✗ → Я вижу студентов ✓',
            "**Oublier l'accord de l'adjectif** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓",
          ],
        },
      ],
      conclusion:
        "L'accusatif russe est essentiel pour la communication quotidienne. **Féminin -А/-Я** changent toujours (-а → -у, -я → -ю). **Masculin inanimé** = pas de changement. **Masculin animé** = forme du génitif. **В/НА + accusatif** = direction | **В/НА + prépositif** = lieu.",
      conclusionOutro: 'Poursuivez votre apprentissage de la grammaire russe :',
      ctaText: "S'entraîner aux cas russes avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: "À quoi sert l'accusatif en russe ?",
          answer:
            "L'accusatif marque l'**objet direct** des verbes transitifs (Я читаю книгу), la **direction** avec в et на (Я иду в школу), les **expressions de temps** (через час), et apparaît après des prépositions comme за, через, про, под.",
        },
        {
          question: 'Comment fonctionne la distinction animé/inanimé ?',
          answer:
            "Les **noms masculins animés** (personnes, animaux) prennent la **forme du génitif** à l'accusatif (студент → студента). Les **masculins inanimés** restent au nominatif (стол → стол).",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Accusatif russe : objets directs, animé vs inanimé et verbes de mouvement',
        description:
          "Guide complet de l'accusatif russe : terminaisons, animé vs inanimé, verbes de mouvement, в/на.",
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
        },
      },
      tableAccentVariant: 'accusative',
    },
    de_de: {
      slug: 'russian-accusative-case',
      title: 'Russischer Akkusativ: Objekte, belebt vs unbelebt & Bewegungsverben',
      metaTitle: 'Russischer Akkusativ: Regeln, Endungen & 30 Beispiele | Russian Cases with Anna',
      metaDescription:
        'Vollständiger Leitfaden zum russischen Akkusativ: Endungstabelle, belebt vs unbelebt, Bewegungsverben, в/на Richtung vs Ort, 9 Präpositionen, 15 transitive Verben, 30 echte Beispiele.',
      keywords: [
        'Russischer Akkusativ',
        'Russische Akkusativ-Endungen',
        'belebt unbelebt russischer Akkusativ',
        'Russisch direktes Objekt',
        'Russische Bewegungsverben Akkusativ',
        'в на Akkusativ Russisch',
      ],
      h1: 'Russischer Akkusativ: Objekte, belebt vs unbelebt & Bewegungsverben',
      heroImage: {
        src: '/articles/free-russian-lesson-accusative-case.webp',
        alt: 'Kostenlose Russisch-Lektion zum Akkusativ: direkte Objekte und Bewegungsverben',
        width: 1200,
        height: 630,
      },
      intro:
        'Der russische Akkusativ ist der **zweitwichtigste Fall** nach dem Genitiv – und in vieler Hinsicht der intuitivste. Er kennzeichnet das **direkte Objekt**: die Person oder Sache, die direkt von der Verbhandlung betroffen ist.\n\nAber der Akkusativ hat einen Kniff, der jeden Russischlernenden überrascht: die **Belebt/Unbelebt-Unterscheidung**. Bei maskulinen Substantiven dekliniert man belebte und unbelebte Objekte unterschiedlich – diese Regel ist essenziell für korrektes Russisch.',
      whatYouLearn: [
        'Was der russische Akkusativ ist und seine **4 Hauptverwendungen**',
        'Akkusativ-Endungen für **alle Substantivgenera** (Singular & Plural)',
        'Die **Belebt vs. Unbelebt-Unterscheidung** – größte Fehlerquelle',
        'Russische **Bewegungsverben** und der Akkusativ',
        '**В und НА** mit Akkusativ (Richtung) vs. Präpositiv (Ort)',
        'Alle **9 Präpositionen**, die den Akkusativ verlangen',
        '**Zeitangaben** mit dem Akkusativ',
        '**15 wichtige Verben** mit Akkusativ-Objekt',
        '**30 echte russische Beispiele**',
      ],
      leadMagnetCta: {
        title: 'Russischen Akkusativ mit intelligenten Übungen trainieren',
        description:
          'Unsere mobile App deckt alle 6 russischen Fälle ab – mit Fokus auf Belebt/Unbelebt, Bewegungsverben und в/на Richtung vs. Ort. Für Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        },
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Russischer Genitiv: Regeln, Endungen & 32 Beispiele',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Russischer Dativ: „An" und „für" auf Russisch',
        },
      ],
      sections: [
        {
          h2: 'Kurze Antwort',
          content:
            'Der Akkusativ im Russischen beantwortet **Кого? (Wen?)** und **Что? (Was?)**. Er kennzeichnet direkte Objekte, drückt Richtung mit в und на aus und erscheint bei Zeitangaben. Seine Hauptkomplexität ist die **Belebt/Unbelebt-Unterscheidung** bei maskulinen Substantiven.',
        },
        {
          h2: 'Was ist der russische Akkusativ?',
          content:
            'Der Akkusativ (**Винительный падеж**) ist der vierte der sechs russischen Fälle. Seine Hauptaufgabe ist, das **direkte Objekt** eines transitiven Verbs zu kennzeichnen – das Substantiv, das die Handlung direkt empfängt. Im Russischen ändert das Substantiv seine Endung, um zu signalisieren, dass es das direkte Objekt ist.',
          subsections: [
            {
              h3: 'Der Akkusativ wird verwendet für:',
              content: '',
              bullets: [
                '**Direkte Objekte** transitiver Verben (Я вижу кота.)',
                '**Richtung** mit в und на (Я иду в школу.)',
                '**Zeitangaben** (всю неделю, через час)',
                '**Wochentage** mit в (в понедельник)',
                'Nach Präpositionen: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
              ],
            },
          ],
        },
        {
          h2: 'Russische Akkusativ-Endungen — Vollständige Tabelle',
          content:
            'Die Akkusativ-Endungen hängen vom **Genus**, **Stamm** (hart/weich) und – entscheidend bei Maskulina – **Belebtheit** ab.',
          table: {
            caption: 'Akkusativ-Endungen nach Substantivtyp — Singular & Plural',
            boldColumnIndices: [3],
            headers: ['Substantivtyp', 'Regel', 'Nominativ', 'Akkusativ', 'Beispielsatz'],
            rows: [
              ['Mask. unbelebt (hart)', '= Nom.', 'стол', 'стол', 'Я вижу стол.'],
              ['Mask. unbelebt (weich)', '= Nom.', 'музей', 'музей', 'Я вижу музей.'],
              ['Mask. belebt (hart)', '= Gen. (-а)', 'студент', 'студента', 'Я вижу студента.'],
              ['Mask. belebt (weich)', '= Gen. (-я)', 'гений', 'гения', 'Я вижу гения.'],
              ['Fem. hart (-а)', '-у', 'женщина', 'женщину', 'Я вижу женщину.'],
              ['Fem. weich (-я)', '-ю', 'земля', 'землю', 'Я вижу землю.'],
              ['Fem. (-ь) unbelebt', '= Nom.', 'ночь', 'ночь', 'Я люблю ночь.'],
              ['Fem. (-ь) belebt', '= Nom.', 'мышь', 'мышь', 'Я вижу мышь.'],
              ['Neutrum (-о)', '= Nom.', 'окно', 'окно', 'Я вижу окно.'],
              ['Neutrum (-е)', '= Nom.', 'море', 'море', 'Я вижу море.'],
              ['Plural unbelebt', '= Nom. Pl.', 'столы', 'столы', 'Я вижу столы.'],
              ['Plural belebt', '= Gen. Pl.', 'студенты', 'студентов', 'Я вижу студентов.'],
            ],
          },
          bullets: [
            '**Feminin -а** — -а → -у: книга → книгу',
            '**Feminin -я** — -я → -ю: неделя → неделю',
            '**Maskulin unbelebt** — keine Änderung: стол → стол',
            '**Maskulin belebt** — Genitivform: студент → студента',
            '**Neutrum** und **Feminin -ь** — keine Änderung',
          ],
        },
        {
          h2: 'Belebt vs. Unbelebt: Die wichtigste Akkusativ-Regel',
          content:
            '**Belebte maskuline Substantive** (Menschen, Tiere) nehmen die **Genitivform** im Akkusativ. **Unbelebte maskuline Substantive** bleiben unverändert (Nominativform). Das ist das entscheidende Merkmal des russischen Akkusativs.',
          table: {
            caption: '12 konkrete Beispiele inkl. überraschender Fälle',
            boldColumnIndices: [2],
            headers: ['Substantiv', 'Belebt / Unbelebt', 'Akkusativform', 'Hinweis'],
            rows: [
              ['друг (Freund)', 'belebt', 'Я вижу друга.', 'Akkusativ = Genitivform'],
              ['врач (Arzt)', 'belebt', 'Я слушаю врача.', 'Akkusativ = Genitivform'],
              ['кот (Katze)', 'belebt', 'Я глажу кота.', 'Tiere sind belebt'],
              ['стол (Tisch)', 'unbelebt', 'Я вижу стол.', 'Akkusativ = Nominativ'],
              ['фильм (Film)', 'unbelebt', 'Я смотрю фильм.', 'Keine Änderung'],
              [
                'труп (Leiche)',
                'unbelebt',
                'Детектив нашёл труп.',
                'Leichen sind grammatisch unbelebt!',
              ],
              [
                'туз (Ass bei Karten)',
                'belebt*',
                'Он поставил туза.',
                'Kartenspiel-Figuren = belebt per Konvention',
              ],
            ],
          },
        },
        {
          h2: 'Russische Bewegungsverben und der Akkusativ',
          content:
            'Bewegungsverben verwenden **в oder на + Akkusativ** für die Richtung. Alle verwenden в/на + Akkusativ für die Richtung.',
          table: {
            caption: '10 Haupt-Bewegungsverben',
            boldColumnIndices: [2],
            headers: ['Verb', 'Bedeutung', 'Beispiel mit В/НА + Akk.', 'Übersetzung'],
            rows: [
              ['идти / ходить', 'zu Fuß gehen', 'Я иду в школу.', 'Ich gehe zur Schule'],
              [
                'ехать / ездить',
                'mit Fahrzeug fahren',
                'Мы едем на работу.',
                'Wir fahren zur Arbeit',
              ],
              [
                'лететь / летать',
                'fliegen',
                'Самолёт летит в Москву.',
                'Das Flugzeug fliegt nach Moskau',
              ],
              ['прийти (perf.)', 'ankommen / kommen', 'Приходи на вечеринку!', 'Komm zur Party!'],
            ],
          },
          bullets: [
            '**Unidirektional** (eine Fahrt, jetzt): идти, ехать — Я иду в школу.',
            '**Multidirektional** (gewohnheitsmäßig): ходить, ездить — Я хожу в школу каждый день.',
          ],
        },
        {
          h2: 'В und НА mit dem Akkusativ: Richtung vs. Ort',
          content:
            '**в** und **на** werden mit **zwei verschiedenen Fällen** verwendet: **Richtung** (Bewegung zu) = Akkusativ; **Ort** (sich befinden) = Präpositiv.',
          image: {
            src: '/articles/russian-accusative-case-direction-vs-location.webp',
            alt: 'Russischer Akkusativ: Richtung vs. Ort mit в und на',
            width: 1200,
            height: 630,
          },
          table: {
            caption: 'Akkusativ (Richtung) vs. Präpositiv (Ort)',
            boldColumnIndices: [0, 1],
            headers: ['Konstruktion', 'Russisches Beispiel', 'Bedeutung', 'Übersetzung'],
            rows: [
              [
                'в + Akkusativ',
                'Я иду в магазин.',
                'Richtung: hinein / zu',
                'Ich gehe zum Geschäft',
              ],
              [
                'в + Präpositiv',
                'Я нахожусь в магазине.',
                'Ort: drinnen / bei',
                'Ich bin im Geschäft',
              ],
              ['на + Akkusativ', 'Она едет на работу.', 'Richtung: zu', 'Sie fährt zur Arbeit'],
              [
                'на + Präpositiv',
                'Она работает на заводе.',
                'Ort: auf / bei',
                'Sie arbeitet in der Fabrik',
              ],
            ],
          },
        },
        {
          h2: 'Alle Präpositionen, die den Akkusativ verlangen',
          content:
            'Neben в und на verlangen mehrere Präpositionen den Akkusativ: **в**, **на**, **за**, **под**, **через**, **про**, **сквозь**, **спустя**, **о/об**.',
          table: {
            caption: '9 Akkusativ-Präpositionen',
            boldColumnIndices: [0],
            headers: ['Präp.', 'Bedeutung', 'Mit Substantiv', 'Vollständiges Beispiel'],
            rows: [
              ['в', 'hinein / zu (Richtung)', 'в Москву, в школу', 'Я лечу в Москву.'],
              ['на', 'auf / zu (Richtung)', 'на работу, на стол', 'Она идёт на работу.'],
              ['за', 'hinter / für (Bewegung)', 'за угол', 'Он зашёл за угол.'],
              ['под', 'unter (Bewegung)', 'под стол', 'Кот залез под стол.'],
              [
                'через',
                'durch / über / in (Zeit)',
                'через реку, через час',
                'Мы переехали через реку.',
              ],
              ['про', 'über (informell)', 'про тебя', 'Он рассказал про тебя.'],
              ['сквозь', 'durch (durchdringend)', 'сквозь стекло', 'Свет проходил сквозь стекло.'],
              ['спустя', 'nach / später (Zeit)', 'спустя год', 'Спустя год он вернулся.'],
              ['о/об', 'gegen (physischer Kontakt)', 'о камень', 'Он споткнулся о камень.'],
            ],
          },
        },
        {
          h2: 'Top 6 Akkusativ-Fehler (und wie man sie behebt)',
          bullets: [
            '**Feminin -а → -у vergessen** — Я вижу женщина ✗ → Я вижу женщину ✓',
            '**Belebt maskulin wie unbelebt behandeln** — Я вижу студент ✗ → Я вижу студента ✓',
            '**Akkusativ für Ort verwenden** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (Ort = Präpositiv)',
            '**Nominativ Plural für belebte Plurale** — Я вижу студенты ✗ → Я вижу студентов ✓',
            '**Adjektiv-Kongruenz vergessen** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
            '**через und за verwechseln** — через = in X Zeit (Zukunft); за = innerhalb X Zeit (um etwas zu erledigen)',
          ],
        },
      ],
      conclusion:
        'Der russische Akkusativ ist essenziell für die Alltagskommunikation. Jedes Mal, wenn Sie über das Tun von etwas mit etwas sprechen – ein Buch lesen, eine Person sehen, irgendwohin gehen – verwenden Sie den Akkusativ. **Feminin -А/-Я** ändern sich immer (-а → -у, -я → -ю). **Maskulin unbelebt** = keine Änderung. **Maskulin belebt** = Genitivform. **В/НА + Akkusativ** = Richtung | **В/НА + Präpositiv** = Ort.',
      conclusionOutro: 'Setzen Sie Ihre Russisch-Grammatik-Reise fort:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wofür wird der Akkusativ im Russischen verwendet?',
          answer:
            'Der Akkusativ kennzeichnet das **direkte Objekt** transitiver Verben (Я читаю книгу), **Richtung** mit в und на (Я иду в школу), **Zeitangaben** (через час, всю ночь) und erscheint nach Präpositionen wie за, через, про, под, сквозь.',
        },
        {
          question: 'Wie funktioniert die Belebt/Unbelebt-Unterscheidung?',
          answer:
            '**Belebte maskuline Substantive** (Menschen, Tiere) nehmen die **Genitivform** im Akkusativ (студент → студента). **Unbelebte maskuline** bleiben im Nominativ (стол → стол). Überraschend: труп = unbelebt; Spielkarten und Schachfiguren = belebt.',
        },
        {
          question: 'Was ist der Unterschied zwischen в + Akkusativ und в + Präpositiv?',
          answer:
            '**в + Akkusativ** = Richtung (Я иду в школу — Ich gehe zur Schule). **в + Präpositiv** = Ort (Я в школе — Ich bin in der Schule). Gleiches für на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russischer Akkusativ: Objekte, belebt vs unbelebt & Bewegungsverben',
        description:
          'Vollständiger Leitfaden zum russischen Akkusativ: Endungen, belebt vs unbelebt, Bewegungsverben, в/на, 9 Präpositionen, 30 Beispiele.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
        },
        keywords:
          'Russischer Akkusativ, Russische Akkusativ-Endungen, belebt unbelebt russischer Akkusativ, Russisch direktes Objekt, Russische Bewegungsverben',
      },
      tableAccentVariant: 'accusative',
    },
    tr_tr: {
      slug: 'russian-accusative-case',
      title: 'Rusça akkusatif: Nesneler, canlı vs cansız ve hareket fiilleri',
      metaTitle: 'Rusça akkusatif: Kurallar, ekler ve 30 örnek | Russian Cases with Anna',
      metaDescription:
        'Rusça akkusatif için kapsamlı rehber: ek tablosu, canlı vs cansız, hareket fiilleri, в/на yön vs yer, 9 edat, 15 geçişli fiil, 30 gerçek örnek.',
      keywords: [
        'Rusça akkusatif',
        'Rusça akkusatif ekleri',
        'canlı cansız Rusça akkusatif',
        'Rusça direkt nesne',
        'Rusça hareket fiilleri akkusatif',
        'в на akkusatif Rusça',
      ],
      h1: 'Rusça akkusatif: Nesneler, canlı vs cansız ve hareket fiilleri',
      heroImage: {
        src: '/articles/free-russian-lesson-accusative-case.webp',
        alt: 'Ücretsiz Rusça akkusatif dersi: direkt nesneler ve hareket fiilleri',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça akkusatif, genitiften sonra **en önemli ikinci** haldir – ve birçok açıdan en sezgiseli. **Direkt nesneyi** belirtir: fiil eyleminden doğrudan etkilenen kişi veya şey.\n\nAncak akkusatifin her Rusça öğrenenini şaşırtan bir inceliği vardır: **canlı/cansız ayrımı**. Eril isimlerde canlı ve cansız nesneler farklı çekilir – bu kural doğru Rusça için temeldir.',
      whatYouLearn: [
        'Rusça akkusatif nedir ve **4 ana kullanımı**',
        '**Tüm isim türleri** için akkusatif ekleri (tekil ve çoğul)',
        '**Canlı vs cansız ayrımı** – en büyük hata kaynağı',
        'Rusça **hareket fiilleri** ve akkusatif',
        '**В ve НА** akkusatifle (yön) vs lokatif (yer)',
        'Akkusatif gerektiren **9 edat**',
        '**Zaman ifadeleri** akkusatifle',
        '**15 önemli fiil** akkusatif nesneyle',
        '**30 gerçek Rusça örnek**',
      ],
      leadMagnetCta: {
        title: 'Akıllı alıştırmalarla Rusça akkusatifi pratik edin',
        description:
          'Mobil uygulamamız 6 Rusça halin hepsini kapsar – canlı/cansız, hareket fiilleri ve в/на yön vs yer odağıyla. Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve bugün pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri: Nihai kopya kağıdı',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rusça genitif' },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rusça datif: Rusçada "kime" ve "için"',
        },
      ],
      sections: [
        {
          h2: 'Kısa cevap',
          content:
            'Rusçada akkusatif **Кого? (Kimi?)** ve **Что? (Neyi?)** sorularına cevap verir. Direkt nesneleri belirtir, в ve на ile yön ifade eder ve zaman ifadelerinde kullanılır. Ana karmaşıklığı eril isimlerde **canlı/cansız ayrımı**dır.',
        },
        {
          h2: 'Top 6 akkusatif hatası (ve nasıl düzeltilir)',
          bullets: [
            '**Dişil -а → -у unutmak** — Я вижу женщина ✗ → Я вижу женщину ✓',
            '**Canlı erili cansız gibi kullanmak** — Я вижу студент ✗ → Я вижу студента ✓',
            '**Yer için akkusatif kullanmak** — Я в школу сейчас ✗ → Я в школе сейчас ✓',
            '**Canlı çoğullarda nominatif** — Я вижу студенты ✗ → Я вижу студентов ✓',
            '**Sıfat uyumunu unutmak** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
          ],
        },
      ],
      conclusion:
        'Rusça akkusatif günlük iletişim için temeldir. **Dişil -А/-Я** her zaman değişir (-а → -у, -я → -ю). **Eril cansız** = değişiklik yok. **Eril canlı** = genitif formu. **В/НА + akkusatif** = yön | **В/НА + lokatif** = yer.',
      conclusionOutro: 'Rusça gramer yolculuğunuza devam edin:',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusçada akkusatif ne için kullanılır?',
          answer:
            'Akkusatif geçişli fiillerin **direkt nesnesini** (Я читаю книгу), в ve на ile **yönü** (Я иду в школу), **zaman ifadelerini** (через час) belirtir ve за, через, про, под gibi edatlardan sonra gelir.',
        },
        {
          question: 'Canlı/cansız ayrımı nasıl çalışır?',
          answer:
            '**Canlı eril isimler** (insanlar, hayvanlar) akkusatifte **genitif formunu** alır (студент → студента). **Cansız eriller** nominatifte kalır (стол → стол).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça akkusatif: Nesneler, canlı vs cansız ve hareket fiilleri',
        description:
          'Rusça akkusatif kapsamlı rehber: ekler, canlı vs cansız, hareket fiilleri, в/на.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
        },
        keywords:
          'Rusça akkusatif, Rusça akkusatif ekleri, canlı cansız Rusça akkusatif, Rusça direkt nesne, Rusça hareket fiilleri',
      },
      tableAccentVariant: 'accusative',
    },
    pl_pl: {
      slug: 'russian-accusative-case',
      title: 'Rosyjski biernik: dopełnienia, żywotny vs nieżywotny & czasowniki ruchu',
      metaTitle: 'Rosyjski biernik: zasady, końcówki i 30 przykładów | Russian Cases with Anna',
      metaDescription:
        'Pełny przewodnik po rosyjskim bierniku: tabela końcówek, żywotny vs nieżywotny, czasowniki ruchu, в/на kierunek vs miejsce, 9 przyimków, 15 czasowników przechodnich, 30 przykładów.',
      keywords: [
        'rosyjski biernik',
        'końcówki biernika rosyjskiego',
        'żywotny nieżywotny rosyjski biernik',
        'rosyjskie dopełnienie bliższe',
        'rosyjskie czasowniki ruchu biernik',
        'в на biernik rosyjski',
      ],
      h1: 'Rosyjski biernik: dopełnienia, żywotny vs nieżywotny & czasowniki ruchu',
      heroImage: {
        src: '/articles/free-russian-lesson-accusative-case.webp',
        alt: 'Darmowa lekcja rosyjskiego o bierniku: dopełnienia bliższe i czasowniki ruchu',
        width: 1200,
        height: 630,
      },
      intro:
        'Rosyjski biernik to **drugi najważniejszy przypadek** po dopełniaczu – i pod wieloma względami najbardziej intuicyjny. Oznacza **dopełnienie bliższe**: osobę lub rzecz bezpośrednio dotkniętą przez czynność czasownika.\n\nAle biernik ma jeden trik, który zaskakuje każdego uczącego się rosyjskiego: **rozróżnienie żywotny/nieżywotny**. Przy rzeczownikach rodzaju męskiego żywotne i nieżywotne dopełnienia odmienia się inaczej – ta zasada jest kluczowa dla poprawnej rosyjszczyzny.',
      whatYouLearn: [
        'Czym jest rosyjski biernik i jego **4 główne zastosowania**',
        'Końcówki biernika dla **wszystkich rodzajów rzeczowników** (liczba pojedyncza i mnoga)',
        '**Rozróżnienie żywotny vs nieżywotny** – najczęstsze źródło błędów',
        'Rosyjskie **czasowniki ruchu** i biernik',
        '**В i НА** z biernikiem (kierunek) vs miejscownik (miejsce)',
        'Wszystkie **9 przyimków** wymagających biernika',
        '**Określenia czasu** z biernikiem',
        '**15 ważnych czasowników** z dopełnieniem w bierniku',
        '**30 przykładowych zdań**',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjski biernik z inteligentnymi ćwiczeniami',
        description:
          'Nasza aplikacja mobilna obejmuje wszystkie 6 rosyjskich przypadków – z naciskiem na żywotny/nieżywotny, czasowniki ruchu oraz в/на kierunek vs miejsce. Na Androida i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć dziś',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Pełny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rosyjskie końcówki przypadków: ostateczna ściągawka',
        },
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Rosyjski dopełniacz: zasady, końcówki i 32 przykłady',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rosyjski celownik: „do" i „dla" po rosyjsku',
        },
      ],
      sections: [
        {
          h2: 'Krótka odpowiedź',
          content:
            'Biernik w rosyjskim odpowiada na **Кого? (Kogo?)** i **Что? (Co?)**. Oznacza dopełnienia bliższe, wyraża kierunek za pomocą в i на oraz pojawia się przy określeniach czasu. Jego główna złożoność to **rozróżnienie żywotny/nieżywotny** przy rzeczownikach rodzaju męskiego.',
        },
        {
          h2: 'Czym jest rosyjski biernik?',
          content:
            'Biernik (**Винительный падеж**) jest czwartym z sześciu rosyjskich przypadków. Jego główne zadanie to oznaczanie **dopełnienia bliższego** czasownika przechodniego – rzeczownika, który bezpośrednio otrzymuje czynność. W rosyjskim rzeczownik zmienia końcówkę, by sygnalizować, że jest dopełnieniem bliższym.',
          subsections: [
            {
              h3: 'Biernik używany jest do:',
              content: '',
              bullets: [
                '**Dopełnień bliższych** czasowników przechodnich (Я вижу кота.)',
                '**Kierunku** z в i на (Я иду в школу.)',
                '**Określeń czasu** (всю неделю, через час)',
                '**Dni tygodnia** z в (в понедельник)',
                'Po przyimkach: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
              ],
            },
          ],
        },
        {
          h2: 'Rosyjskie końcówki biernika — pełna tabela',
          content:
            'Końcówki biernika zależą od **rodzaju**, **tematu** (twardy/miękki) i – decydująco przy męskim – **żywotności**.',
          table: {
            caption: 'Końcówki biernika według typu rzeczownika — liczba pojedyncza i mnoga',
            boldColumnIndices: [3],
            headers: ['Typ rzeczownika', 'Reguła', 'Mianownik', 'Biernik', 'Przykładowe zdanie'],
            rows: [
              ['M. nieżywotny (twardy)', '= mian.', 'стол', 'стол', 'Я вижу стол.'],
              ['M. nieżywotny (miękki)', '= mian.', 'музей', 'музей', 'Я вижу музей.'],
              ['M. żywotny (twardy)', '= dop. (-а)', 'студент', 'студента', 'Я вижу студента.'],
              ['M. żywotny (miękki)', '= dop. (-я)', 'гений', 'гения', 'Я вижу гения.'],
              ['Ż. twardy (-а)', '-у', 'женщина', 'женщину', 'Я вижу женщину.'],
              ['Ż. miękki (-я)', '-ю', 'земля', 'землю', 'Я вижу землю.'],
              ['Ż. (-ь) nieżywotny', '= mian.', 'ночь', 'ночь', 'Я люблю ночь.'],
              ['Ż. (-ь) żywotny', '= mian.', 'мышь', 'мышь', 'Я вижу мышь.'],
              ['Nijaki (-о)', '= mian.', 'окно', 'окно', 'Я вижу окно.'],
              ['Nijaki (-е)', '= mian.', 'море', 'море', 'Я вижу море.'],
              ['Liczba mnoga nieżywotny', '= mian. lm.', 'столы', 'столы', 'Я вижу столы.'],
              ['Liczba mnoga żywotny', '= dop. lm.', 'студенты', 'студентов', 'Я вижу студентов.'],
            ],
          },
          bullets: [
            '**Żeński -а** — -а → -у: книга → книгу',
            '**Żeński -я** — -я → -ю: неделя → неделю',
            '**Męski nieżywotny** — brak zmiany: стол → стол',
            '**Męski żywotny** — forma dopełniacza: студент → студента',
            '**Nijaki** i **żeński -ь** — brak zmiany',
          ],
        },
        {
          h2: 'Żywotny vs nieżywotny: najważniejsza zasada biernika',
          content:
            '**Rzeczowniki męskie żywotne** (ludzie, zwierzęta) przyjmują **formę dopełniacza** w bierniku. **Rzeczowniki męskie nieżywotne** pozostają bez zmiany (forma mianownika). To kluczowa cecha rosyjskiego biernika.',
          table: {
            caption: '12 konkretnych przykładów, w tym zaskakujące przypadki',
            boldColumnIndices: [2],
            headers: ['Rzeczownik', 'Żywotny / Nieżywotny', 'Forma biernika', 'Uwaga'],
            rows: [
              ['друг (przyjaciel)', 'żywotny', 'Я вижу друга.', 'Biernik = forma dopełniacza'],
              ['врач (lekarz)', 'żywotny', 'Я слушаю врача.', 'Biernik = forma dopełniacza'],
              ['кот (kot)', 'żywotny', 'Я глажу кота.', 'Zwierzęta są żywotne'],
              ['стол (stół)', 'nieżywotny', 'Я вижу стол.', 'Biernik = mianownik'],
              ['фильм (film)', 'nieżywotny', 'Я смотрю фильм.', 'Brak zmiany'],
              [
                'труп (zwłoki)',
                'nieżywotny',
                'Детектив нашёл труп.',
                'Zwłoki są gramatycznie nieżywotne!',
              ],
              [
                'туз (as w kartach)',
                'żywotny*',
                'Он поставил туза.',
                'Figury kartowe = żywotne według konwencji',
              ],
            ],
          },
        },
        {
          h2: 'Rosyjskie czasowniki ruchu i biernik',
          content:
            'Czasowniki ruchu używają **в lub на + biernik** dla kierunku. Wszystkie używają в/на + biernik dla kierunku.',
          table: {
            caption: '10 głównych czasowników ruchu',
            boldColumnIndices: [2],
            headers: ['Czasownik', 'Znaczenie', 'Przykład z В/НА + biernik', 'Tłumaczenie'],
            rows: [
              ['идти / ходить', 'iść pieszo', 'Я иду в школу.', 'Idę do szkoły'],
              [
                'ехать / ездить',
                'jechać środkiem transportu',
                'Мы едем на работу.',
                'Jedziemy do pracy',
              ],
              ['лететь / летать', 'latać', 'Самолёт летит в Москву.', 'Samolot leci do Moskwy'],
              [
                'прийти (dok.)',
                'przyjść / przybyć',
                'Приходи на вечеринку!',
                'Przyjdź na imprezę!',
              ],
            ],
          },
          bullets: [
            '**Jednokierunkowy** (jedna podróż, teraz): идти, ехать — Я иду в школу.',
            '**Wielokierunkowy** (nawykowo): ходить, ездить — Я хожу в школу каждый день.',
          ],
        },
        {
          h2: 'В i НА z biernikiem: kierunek vs miejsce',
          content:
            '**в** i **на** używane są z **dwoma różnymi przypadkami**: **kierunek** (ruch ku) = biernik; **miejsce** (znajdowanie się) = miejscownik.',
          image: {
            src: '/articles/russian-accusative-case-direction-vs-location.webp',
            alt: 'Rosyjski biernik: kierunek vs miejsce z в i на',
            width: 1200,
            height: 630,
          },
          table: {
            caption: 'Biernik (kierunek) vs miejscownik (miejsce)',
            boldColumnIndices: [0, 1],
            headers: ['Konstrukcja', 'Przykład rosyjski', 'Znaczenie', 'Tłumaczenie'],
            rows: [
              ['в + biernik', 'Я иду в магазин.', 'Kierunek: do środka / do', 'Idę do sklepu'],
              [
                'в + miejscownik',
                'Я нахожусь в магазине.',
                'Miejsce: w środku / przy',
                'Jestem w sklepie',
              ],
              ['на + biernik', 'Она едет на работу.', 'Kierunek: do', 'Jedzie do pracy'],
              [
                'на + miejscownik',
                'Она работает на заводе.',
                'Miejsce: na / przy',
                'Pracuje w fabryce',
              ],
            ],
          },
        },
        {
          h2: 'Wszystkie przyimki wymagające biernika',
          content:
            'Oprócz в i на kilka przyimków wymaga biernika: **в**, **на**, **за**, **под**, **через**, **про**, **сквозь**, **спустя**, **о/об**.',
          table: {
            caption: '9 przyimków z biernikiem',
            boldColumnIndices: [0],
            headers: ['Przyimek', 'Znaczenie', 'Z rzeczownikiem', 'Pełny przykład'],
            rows: [
              ['в', 'do środka / do (kierunek)', 'в Москву, в школу', 'Я лечу в Москву.'],
              ['на', 'na / do (kierunek)', 'на работу, на стол', 'Она идёт на работу.'],
              ['за', 'za / dla (ruch)', 'за угол', 'Он зашёл за угол.'],
              ['под', 'pod (ruch)', 'под стол', 'Кот залез под стол.'],
              [
                'через',
                'przez / ponad / za (czas)',
                'через реку, через час',
                'Мы переехали через реку.',
              ],
              ['про', 'o (nieformalnie)', 'про тебя', 'Он рассказал про тебя.'],
              ['сквозь', 'przez (przenikający)', 'сквозь стекло', 'Свет проходил сквозь стекло.'],
              ['спустя', 'po / później (czas)', 'спустя год', 'Спустя год он вернулся.'],
              ['о/об', 'o (kontakt fizyczny)', 'о камень', 'Он споткнулся о камень.'],
            ],
          },
        },
        {
          h2: 'Top 6 błędów w bierniku (i jak je naprawić)',
          bullets: [
            '**Zapomniany żeński -а → -у** — Я вижу женщина ✗ → Я вижу женщину ✓',
            '**Traktowanie męskiego żywotnego jak nieżywotnego** — Я вижу студент ✗ → Я вижу студента ✓',
            '**Użycie biernika dla miejsca** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (miejsce = miejscownik)',
            '**Mianownik liczby mnogiej dla żywotnych** — Я вижу студенты ✗ → Я вижу студентов ✓',
            '**Zapomniana kongruencja przymiotnika** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
            '**Pomylenie через i за** — через = za X czasu (przyszłość); за = w ciągu X czasu (żeby coś zrobić)',
          ],
        },
      ],
      conclusion:
        'Rosyjski biernik jest niezbędny w codziennej komunikacji. Za każdym razem, gdy mówisz o robieniu czegoś z czymś – czytaniu książki, widzeniu osoby, chodzeniu gdzieś – używasz biernika. **Żeński -А/-Я** zawsze się zmienia (-а → -у, -я → -ю). **Męski nieżywotny** = brak zmiany. **Męski żywotny** = forma dopełniacza. **В/НА + biernik** = kierunek | **В/НА + miejscownik** = miejsce.',
      conclusionOutro: 'Kontynuuj swoją podróż przez rosyjską gramatykę:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Do czego służy biernik w rosyjskim?',
          answer:
            'Biernik oznacza **dopełnienie bliższe** czasowników przechodnich (Я читаю книгу), **kierunek** z в i на (Я иду в школу), **określenia czasu** (через час, всю ночь) oraz pojawia się po przyimkach jak за, через, про, под, сквозь.',
        },
        {
          question: 'Jak działa rozróżnienie żywotny/nieżywotny?',
          answer:
            '**Rzeczowniki męskie żywotne** (ludzie, zwierzęta) przyjmują **formę dopełniacza** w bierniku (студент → студента). **Męskie nieżywotne** pozostają w mianowniku (стол → стол). Zaskakujące: труп = nieżywotny; karty i figury szachowe = żywotne.',
        },
        {
          question: 'Jaka jest różnica między в + biernik i в + miejscownik?',
          answer:
            '**в + biernik** = kierunek (Я иду в школу — Idę do szkoły). **в + miejscownik** = miejsce (Я в школе — Jestem w szkole). To samo dla на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjski biernik: dopełnienia, żywotny vs nieżywotny & czasowniki ruchu',
        description:
          'Pełny przewodnik po rosyjskim bierniku: końcówki, żywotny vs nieżywotny, czasowniki ruchu, в/на, 9 przyimków, 30 przykładów.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
        },
        keywords:
          'rosyjski biernik, końcówki biernika rosyjskiego, żywotny nieżywotny rosyjski biernik, rosyjskie dopełnienie bliższe, rosyjskie czasowniki ruchu',
      },
      tableAccentVariant: 'accusative',
    },
    ru_ru: {
      slug: 'russian-accusative-case',
      title: 'Винительный падеж: дополнения, одушевлённость и глаголы движения',
      metaTitle: 'Винительный падеж: правила, окончания и 30 примеров | Russian Cases with Anna',
      metaDescription:
        'Руководство по винительному падежу: окончания, одушевлённые/неодушевлённые, глаголы движения, в/на направление vs место, 9 предлогов, 30 примеров.',
      keywords: [
        'винительный падеж',
        'окончания винительного падежа',
        'одушевлённый неодушевлённый русский',
        'прямое дополнение русский',
        'глаголы движения русский',
      ],
      h1: 'Винительный падеж: дополнения, одушевлённость и глаголы движения',
      heroImage: {
        src: '/articles/free-russian-lesson-accusative-case.jpg',
        alt: 'Урок русского языка: винительный падеж — дополнения и глаголы движения',
        width: 1200,
        height: 630,
      },
      intro:
        'Винительный падеж — **второй по важности** после родительного и во многом самый интуитивный. Он обозначает **прямое дополнение**: лицо или предмет, на которое напрямую направлено действие глагола.\n\nОднако винительный имеет особенность, которая удивляет всех изучающих: **различие одушевлённого и неодушевлённого**. Для существительных мужского рода одушевлённые и неодушевлённые склоняются по-разному.',
      whatYouLearn: [
        'Что такое винительный падеж и 4 основных употребления',
        'Окончания винительного для всех родов (ед. и мн. число)',
        'Различие одушевлённый vs неодушевлённый',
        'Глаголы движения и винительный',
        'В и НА с винительным (направление) vs предложный (место)',
        '9 предлогов, требующих винительного',
      ],
      leadMagnetCta: {
        title: 'Тренируйте винительный падеж с умными упражнениями',
        description:
          'Наше приложение охватывает все 6 падежей — с фокусом на одушевлённость, глаголы движения и в/на. На Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        { href: '/learn/articles/russian-genitive-case', label: 'Родительный падеж' },
        { href: '/learn/lessons/dative-case-declension', label: 'Дательный падеж' },
      ],
      sections: [
        {
          h2: 'Краткий ответ',
          content:
            'Винительный падеж отвечает на **Кого?** и **Что?**. Обозначает прямое дополнение, направление с в и на, встречается в выражениях времени. Главная сложность — **одушевлённость/неодушевлённость** для существительных мужского рода.',
        },
        {
          h2: 'Топ-5 ошибок в винительном падеже',
          bullets: [
            '**Женский -а → -у** — Я вижу женщина ✗ → Я вижу женщину ✓',
            '**Одуш. муж. как неодуш.** — Я вижу студент ✗ → Я вижу студента ✓',
            '**Винительный для места** — Я в школу сейчас ✗ → Я в школе сейчас ✓',
            '**Именительный мн. для одуш.** — Я вижу студенты ✗ → Я вижу студентов ✓',
            '**Согласование прилагательного** — красивый женщину ✗ → красивую женщину ✓',
          ],
        },
      ],
      conclusion:
        'Винительный падеж необходим для повседневного общения. Женский -а/-я всегда меняются. Мужской неодуш. = без изменений. Мужской одуш. = форма родительного. В/НА + винительный = направление | В/НА + предложный = место.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Для чего используется винительный падеж?',
          answer:
            'Винительный обозначает **прямое дополнение** (Я читаю книгу), **направление** с в и на (Я иду в школу), **выражения времени** (через час) и используется после предлогов за, через, про, под.',
        },
        {
          question: 'Как работает одушевлённость/неодушевлённость?',
          answer:
            '**Одушевлённые существительные мужского рода** принимают форму родительного (студент → студента). **Неодушевлённые** остаются в именительном (стол → стол).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Винительный падеж: дополнения, одушевлённость и глаголы движения',
        description:
          'Руководство по винительному падежу: окончания, одушевлённость, глаголы движения, в/на.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-accusative-case',
        },
        keywords: 'винительный падеж, окончания винительного падежа, одушевлённый неодушевлённый',
      },
      tableAccentVariant: 'accusative',
    },
  },
  'russian-dative-case': {
    fr_fr: {
      slug: 'russian-dative-case',
      title: 'Datif russe : comment dire « à » et « pour » en russe',
      metaTitle:
        'Datif russe : règles, terminaisons, нравиться et 30 exemples | Russian Cases with Anna',
      metaDescription:
        "Guide complet du datif russe : terminaisons des noms et adjectifs, construction нравиться, expressions d'âge, 8 prépositions, 15 verbes, 30 exemples authentiques.",
      keywords: [
        'datif russe',
        'terminaisons datif russe',
        'grammaire мне нравится',
        'objet indirect russe',
        'prépositions к по russe',
      ],
      h1: 'Datif russe : comment dire « à » et « pour » en russe',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.jpg',
        alt: 'Leçon gratuite de russe sur le datif : à et pour en russe',
        width: 1200,
        height: 630,
      },
      intro:
        "Le datif russe est l'un des cas les plus **polyvalents** et fascinants de la langue. Son rôle classique est de marquer l'**objet indirect** (le destinataire de l'action), mais il va bien au-delà du « donner à quelqu'un ».\n\nC'est le cas de l'**expérience**, de la **sensation**, de l'**âge**, de la **permission** et de la pertinence personnelle. Si vous vous êtes demandé comment dire « j'aime », « j'ai froid », « il me faut » ou « j'ai 25 ans » en russe – la réponse implique toujours le **datif**.",
      whatYouLearn: [
        "Ce qu'est le datif russe et ses **6 usages principaux**",
        '**Terminaisons du datif** pour les noms (tous genres, singulier et pluriel)',
        '**Pronoms personnels** au datif (мне, тебе, ему, ей, нам, вам, им)',
        "La **construction НРАВИТЬСЯ** – comment dire « j'aime » en russe",
        "**Expressions d'âge** (Мне 25 лет)",
        '**Expressions impersonnelles** (нужно, можно, нельзя, холодно, скучно…)',
        '**Prépositions** к, по, благодаря, вопреки…',
        '**15 verbes** qui prennent un objet indirect au datif',
      ],
      leadMagnetCta: {
        title: "S'entraîner au datif russe sur son téléphone",
        description:
          "Notre app mobile entraîne les 6 cas russes – avec focus sur нравиться, expressions d'âge et objets indirects. Sur Android et iOS.",
        ctaText: "Télécharger l'app et commencer à s'entraîner",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Génitif russe' },
        { href: '/learn/articles/russian-accusative-case', label: 'Accusatif russe' },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Comment décliner au datif en russe',
        },
      ],
      sections: [
        {
          h2: 'Réponse rapide',
          content:
            "Le datif russe répond à **Кому?** (À qui ?) et **Чему?** (À quoi ?). Il sert pour les **objets indirects**, les **expressions d'âge** (Мне 25 лет), l'**expérience** (мне нравится, мне холодно), et après les prépositions **к** et **по**.",
        },
        {
          h2: 'Top 6 erreurs de datif (et comment les corriger)',
          bullets: [
            '**Nominatif pour « celui qui aime »** — Я нравится музыка ✗ → Мне нравится музыка ✓',
            '**Accord du verbe avec нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓',
            '**Mauvais pronom après préposition** — к ей ✗ → к ней ✓',
            '**Confondre к et в/на** — Иди к школу ✗ → Иди в школу ✓',
            '**Oublier -ии pour les noms en -ия** — к станце ✗ → к станции ✓',
            '**Accord de нужен** — Мне нужен помощь ✗ → Мне нужна помощь ✓',
          ],
        },
      ],
      conclusion:
        'Le datif russe est bien plus riche que « le cas du don ». Utilisations : objet indirect, expérience de нравиться, âge, expressions impersonnelles, après к et по.',
      conclusionOutro: 'Poursuivez avec le reste de notre série de grammaire russe :',
      ctaText: "S'entraîner aux cas russes avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: 'À quoi sert le datif en russe ?',
          answer:
            "Le datif sert aux **objets indirects** (Я дал маме цветы), à la **construction нравиться** (Мне нравится), aux **expressions d'âge** (Мне 25 лет), aux **expressions impersonnelles** (Мне нужно, Мне холодно), et après **к** (vers) et **по** (le long de/selon).",
        },
        {
          question: "Comment dire « j'aime » en russe ?",
          answer:
            "Utilisez [personne au datif] + нравится/нравятся + [sujet]. Мне нравится музыка (La musique me plaît = J'aime la musique). **Нравится** au singulier, **нравятся** au pluriel.",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Datif russe : comment dire « à » et « pour » en russe',
        description:
          "Guide complet du datif russe : terminaisons, нравиться, expressions d'âge, prépositions.",
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
        },
      },
      tableAccentVariant: 'dative',
    },
    de_de: {
      slug: 'russian-dative-case',
      title: 'Russischer Dativ: Wie man „an" und „für" auf Russisch sagt',
      metaTitle:
        'Russischer Dativ: Regeln, Endungen, нравиться & 30 Beispiele | Russian Cases with Anna',
      metaDescription:
        'Vollständiger Leitfaden zum russischen Dativ: Substantivendungen, Adjektive, нравиться-Konstruktion, Altersausdrücke, unpersönliche Konstruktionen, 8 Präpositionen, 15 Verben, 30 echte Beispiele.',
      keywords: [
        'Russischer Dativ',
        'Russische Dativ-Endungen',
        'мне нравится Grammatik',
        'Russisches indirektes Objekt',
        'Russische Dativ-Präpositionen к по',
        'Wie sagt man an jemanden auf Russisch',
      ],
      h1: 'Russischer Dativ: Wie man „an" und „für" auf Russisch sagt',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.webp',
        alt: 'Russischer Dativ: Kostenlose Lektion, wie man an und für auf Russisch sagt',
        width: 1200,
        height: 630,
      },
      intro:
        'Der russische Dativ ist einer der **vielfältigsten** – und faszinierendsten – Fälle der russischen Sprache. Während seine Lehrbuchfunktion darin besteht, das **indirekte Objekt** (den Empfänger einer Handlung) zu kennzeichnen, geht der Dativ weit über „Dingen an Leute geben" hinaus.\n\nEr ist der Fall von **Erlebnis**, **Empfindung**, **Alter**, **Erlaubnis** und persönlicher Relevanz. Wenn Sie sich je gefragt haben, wie man auf Russisch „Mir gefällt", „Mir ist kalt", „Ich brauche", „Mir ist erlaubt" oder „Ich bin 25 Jahre alt" sagt – die Antwort ist in jedem Fall der **Dativ**.',
      whatYouLearn: [
        'Was der russische Dativ ist und seine **6 Kernverwendungen**',
        '**Dativ-Endungen** für Substantive (alle Genera, Singular & Plural)',
        'Dativ-Endungen für **Adjektive**',
        '**Personalpronomen** im Dativ (мне, тебе, ему, ей, нам, вам, им)',
        'Die **НРАВИТЬСЯ-Konstruktion** – wie man „Mir gefällt" auf Russisch sagt',
        '**Altersausdrücke** (Мне 25 лет.)',
        '**Unpersönliche Ausdrücke** (нужно, можно, нельзя, холодно, скучно…)',
        '**Präpositionen** к, по, благодаря, вопреки…',
        '**15 Verben**, die ein Dativ-Indirektobjekt verlangen',
        '**30 echte Beispiele** mit Transkription',
        'Dativ vs. andere Fälle – wie man sie auseinanderhält',
      ],
      leadMagnetCta: {
        title: 'Russische Dativ-Übungen auf dem Handy trainieren',
        description:
          'Unsere mobile App übt alle 6 russischen Fälle – mit Schwerpunkt auf нравиться, Altersausdrücken, unpersönlichen Konstruktionen und indirekten Objekten. Für Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        },
        {
          href: '/learn/articles/russian-genitive-case',
          label: 'Russischer Genitiv: Regeln, Endungen & 32 Beispiele',
        },
        {
          href: '/learn/articles/russian-accusative-case',
          label: 'Russischer Akkusativ: Direkte Objekte, belebt vs unbelebt',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Wie man im Dativ im Russischen dekliniert',
        },
      ],
      sections: [
        {
          h2: 'Kurze Antwort',
          content: 'Der russische Dativ beantwortet **Кому? (Wem?)** und **Чему? (Wem/Was?)**.',
          bullets: [
            '**Indirekte Objekte** – der Empfänger einer Handlung',
            '**Altersausdrücke** – Мне 25 лет (Ich bin 25 Jahre alt)',
            '**Erleber von Gefühlen** – мне нравится (Mir gefällt), мне холодно (Mir ist kalt)',
            '**Erforderlich nach Präpositionen** – к (zu/gegen) und по (entlang/laut)',
          ],
        },
        {
          h2: 'Was ist der russische Dativ?',
          content:
            'Der Dativ (**Дательный падеж** – von дать, „geben") ist der dritte der sechs russischen Fälle. Sein Name spiegelt seine ursprüngliche Funktion wider: Er kennzeichnet den **Empfänger beim Geben**.\n\nIm modernen Russischen tut er weit mehr.',
          subsections: [
            {
              h3: 'Der Dativ wird verwendet für:',
              content: '',
              bullets: [
                '**Indirekte Objekte** – den Empfänger (Я дал маме цветы — Ich gab Mama Blumen)',
                'Die **НРАВИТЬСЯ**-Konstruktion – „gefallen" (Мне нравится… — Mir gefällt…)',
                '**Altersausdrücke** (Мне двадцать лет. — Ich bin zwanzig Jahre alt.)',
                '**Unpersönliche/modale** Ausdrücke (Мне нужно, мне можно, мне холодно, мне скучно)',
                'Nach den Präpositionen **К** (zu/gegen) und **ПО** (entlang/laut/nach)',
                'Nach Verben der Kommunikation, Hilfe, Anweisung, Glauben, Neid',
              ],
            },
          ],
        },
        {
          h2: 'Russische Dativ-Endungen — Substantive',
          content:
            'Der Dativ ist einer der **regelmäßigsten Fälle** im Russischen.\n\nDie Endungen folgen klaren Mustern je nach Genus und Stammtyp:',
          table: {
            caption: 'Dativ-Substantivendungen — alle Genera, Singular & Plural',
            boldColumnIndices: [1, 3],
            headers: ['Substantivtyp', 'Endung', 'Bildung', 'Ergebnis', 'Beispiel im Kontext'],
            rows: [
              [
                'Mask. hart (Konsonant)',
                '-у',
                'брат → брат+у',
                'брату',
                'Я дал книгу брату. — Ich gab dem Bruder das Buch.',
              ],
              [
                'Mask. weich (-й)',
                '-ю',
                'музей → музе+ю',
                'музею',
                'Подари это музею. — Schenke das dem Museum.',
              ],
              [
                'Mask. weich (-ь)',
                '-ю',
                'словарь → словар+ю',
                'словарю',
                'Я доверяю словарю. — Ich vertraue dem Wörterbuch.',
              ],
              [
                'Fem. hart (-а)',
                '-е',
                'сестра → сестр+е',
                'сестре',
                'Я звоню сестре. — Ich rufe meine Schwester an.',
              ],
              [
                'Fem. weich (-я)',
                '-е',
                'земля → земл+е',
                'земле',
                'Привет земле! — Hallo an die Erde!',
              ],
              [
                'Fem. auf -ия',
                '-ии',
                'станция → станци+и',
                'станции',
                'Иди к станции метро. — Geh zur U-Bahn-Station.',
              ],
              [
                'Fem. (-ь)',
                '-и',
                'ночь → ноч+и',
                'ночи',
                'К ночи похолодало. — Bis zur Nacht wurde es kalt.',
              ],
              [
                'Neutrum (-о) hart',
                '-у',
                'окно → окн+у',
                'окну',
                'Подойди к окну. — Komm zum Fenster.',
              ],
              [
                'Neutrum (-е) weich',
                '-ю',
                'море → мор+ю',
                'морю',
                'Мы едем к морю. — Wir fahren ans Meer.',
              ],
              [
                'Neutrum (-ие)',
                '-ию',
                'здание → здани+ю',
                'зданию',
                'Иди к зданию. — Geh zum Gebäude.',
              ],
              [
                'Mask./Neutrum Plural',
                '-ам/-ям',
                'братья → брать+ям',
                'братьям',
                'Я помогаю братьям. — Ich helfe meinen Brüdern.',
              ],
              [
                'Fem. Plural',
                '-ам/-ям',
                'сёстры → сёстр+ам',
                'сёстрам',
                'Я пишу сёстрам. — Ich schreibe meinen Schwestern.',
              ],
            ],
          },
          bullets: [
            '**Mask. & Neutrum (Hartstamm)** — -У: брат→брату, окно→окну',
            '**Mask. & Neutrum (Weichstamm)** — -Ю: музей→музею, море→морю',
            '**Feminin -а** — -Е: сестра→сестре',
            '**Feminin -я** — -Е: земля→земле',
            '**Feminin -ия** — -ИИ: станция→станции',
            '**Feminin -ь** — -И: ночь→ночи',
            '**Plural (Hartstamm)** — -АМ: братья→братьям',
            '**Plural (Weichstamm)** — -ЯМ: сёстры→сёстрам',
          ],
        },
        {
          h2: 'Russische Dativ-Endungen — Adjektive',
          content:
            'Adjektive müssen in Genus, Numerus und Fall mit dem Substantiv **übereinstimmen**.\n\nIm Dativ:',
          bullets: [
            '**Mask./Neutrum hart** → -ому (новый → новому брату)',
            '**Mask./Neutrum weich** → -ему (синий → синему морю)',
            '**Feminin hart** → -ой (красивая → красивой подруге)',
            '**Feminin weich** → -ей (летняя → летней школе)',
            '**Plural (alle Genera)** → -ым/-им (новые → новым студентам)',
            '**Beispiel:** Я пишу **старому другу** — Ich schreibe meinem alten Freund.',
          ],
          table: {
            caption: '5 Adjektivformen mit vollständigen Beispielsätzen',
            boldColumnIndices: [1],
            headers: ['Genus/Numerus', 'Endung', 'Beispielform', 'Bedeutung', 'Satz'],
            rows: [
              [
                'Mask./Neutrum hart',
                '-ому',
                'новый → новому брату',
                'neuer Bruder (Dat.)',
                'Я помогаю новому брату.',
              ],
              [
                'Mask./Neutrum weich',
                '-ему',
                'синий → синему морю',
                'blaues Meer (Dat.)',
                'Мы едем к синему морю.',
              ],
              [
                'Fem. hart',
                '-ой',
                'красивая → красивой',
                'schön (Dat.)',
                'Я звоню красивой подруге.',
              ],
              ['Fem. weich', '-ей', 'летняя → летней', 'Sommer (Dat.)', 'В летней школе нравится.'],
              [
                'Plural alle Genera',
                '-ым/-им',
                'новые → новым',
                'neue (Dat. Pl.)',
                'Помоги новым студентам.',
              ],
            ],
          },
        },
        {
          h2: 'Personalpronomen im Dativ',
          content:
            'Personalpronomen haben **eigene Dativformen**, die man sich merken muss.\n\nDiese gehören zu den am häufigsten verwendeten Wörtern – man braucht sie für нравиться, Altersausdrücke und unpersönliche Sätze.',
          table: {
            caption: '7 Formen mit нравиться-Beispielen',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            headers: [
              'я (ich)',
              'ты (du)',
              'он/оно (er/es)',
              'она (sie)',
              'мы (wir)',
              'вы (ihr)',
              'они (sie)',
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
            '**Nach к:** к нему, к ней, к ним (Н- bei Pronomen der 3. Person hinzufügen)',
            '**Nach по:** по нему, по ней (Н- bei Pronomen der 3. Person hinzufügen)',
            '**Nie:** к ему, к ей — immer das N- hinzufügen',
          ],
        },
        {
          h2: 'Die НРАВИТЬСЯ-Konstruktion: Wie man „Mir gefällt" auf Russisch sagt',
          content:
            'Die wichtigste Verwendung des Dativs ist **нравиться** (gefallen / gefallen). Im Deutschen: Subjekt GEFÄLLT Objekt.\n\nIm Russischen: **Objekt GEFÄLLT Dativ-Person** → Мне нравится музыка. (Musik gefällt mir.)',
          subsections: [
            {
              h3: 'Der häufigste Fehler bei нравиться',
              content:
                'Das Verb **НРАВИТЬСЯ** stimmt mit dem **SUBJEKT** überein (dem, was gefällt), nicht mit der Person. Мне **нравится** музыка. (Singular) Мне **нравятся** фильмы. (Plural) Die Person steht im **DATIV** – niemals Nominativ! ✗ Я нравится музыка. ✓ Мне нравится музыка.',
            },
          ],
          table: {
            caption: '10 Formen: Präsens, Vergangenheit, Zukunft, Verneinung',
            boldColumnIndices: [1],
            headers: ['Deutsch', 'Russisch (нравиться)', 'Hinweise'],
            rows: [
              [
                'Mir gefällt',
                'Мне нравится музыка.',
                'нравится stimmt mit музыка überein — Singular',
              ],
              [
                'Dir gefällt',
                'Тебе нравятся фильмы.',
                'нравятся stimmt mit фильмы überein — Plural',
              ],
              ['Ihm gefällt', 'Ему нравится эта книга.', 'Ihm gefällt dieses Buch.'],
              ['Ihr gefällt', 'Ей нравится твой голос.', 'Ihr gefällt deine Stimme.'],
              ['Uns gefällt', 'Нам нравится здесь.', 'здесь = hier, kein Subjekt-Substantiv'],
              ['Euch gefällt', 'Вам нравятся эти места.', 'Euch gefallen diese Orte.'],
              [
                'Ihnen gefällt',
                'Им нравится русский язык.',
                'Ihnen gefällt die russische Sprache.',
              ],
              [
                'Mir hat gefallen',
                'Мне понравился фильм.',
                'perfektiv Vergangenheit, Mask.-Kongruenz',
              ],
              ['Mir wird gefallen', 'Мне понравится этот город.', 'Futur perfektiv'],
              ['Mir gefällt nicht', 'Мне не нравится шум.', 'Verneinung: не + нравится'],
            ],
          },
          bullets: [
            '**Нравиться** = spontane Wertschätzung. **Любить** = tiefere, gewohnheitsmäßige Liebe. Beide gängig. Нравиться neutraler; любить stärker.',
          ],
        },
        {
          h2: 'Altersausdrücke: Wie man das Alter auf Russisch angibt',
          image: {
            src: '/articles/how-to-say-your-age-in-russian-grammar-rule-table.webp',
            alt: 'Grammatikregel-Tabelle: Wie man sein Alter auf Russisch sagt (Dativ)',
            width: 1200,
            height: 630,
          },
          content:
            'Im Russischen wird das Alter mit dem **Dativ** ausgedrückt: [Person im Dativ] + [Zahl] + [год/года/лет].',
          bullets: [
            '**1 Jahr** → год (Мне один год. — Ich bin ein Jahr alt.)',
            '**2–4 Jahre** → года (Мне два года. Тебе четыре года.)',
            '**5+ Jahre** → лет (Мне двадцать пять лет. — Ich bin 25 Jahre alt.)',
            '**Geburtstage:** Ивану исполнилось тридцать лет. — Ivan wurde 30. Когда тебе исполнится восемнадцать? — Wann wirst du 18?',
          ],
          table: {
            caption: '9 Beispiele für 1/2-4/5+ sowie Fragen und Geburtstage',
            boldColumnIndices: [1],
            headers: ['Deutsch', 'Russisch', 'Grammatikhinweis'],
            rows: [
              ['Ich bin 10 Jahre alt', 'Мне десять лет.', 'Мне (Dativ von я) + 10 + лет'],
              ['Du bist 25 Jahre alt', 'Тебе двадцать пять лет.', 'Тебе (Dativ von ты)'],
              ['Er ist 30 Jahre alt', 'Ему тридцать лет.', 'Ему (Dativ von он)'],
              ['Sie ist 18 Jahre alt', 'Ей восемнадцать лет.', 'Ей (Dativ von она)'],
              ['Wir sind 40 Jahre alt', 'Нам сорок лет.', 'Нам (Dativ von мы)'],
              ['Ivan ist 2 Jahre alt', 'Ивану два года.', 'Ивану + 2 + года (Gen. Sg. nach 2)'],
              ['Anna ist 5 Jahre alt', 'Анне пять лет.', 'Анне + 5 + лет (Gen. Pl.)'],
              ['Die Katze ist 3 Jahre alt', 'Коту три года.', 'Funktioniert auch für Tiere!'],
              ['Wie alt bist du?', 'Сколько тебе лет?', 'Сколько + Dativ-Pronomen + лет'],
            ],
          },
        },
        {
          h2: 'Unpersönliche und modale Ausdrücke mit dem Dativ',
          content:
            'Einige der häufigsten alltäglichen russischen Ausdrücke verwenden den **Dativ**, um die Person zu kennzeichnen, die einen Zustand, ein Gefühl oder eine Verpflichtung erlebt.\n\nDas sind **unpersönliche Konstruktionen** – kein grammatisches Subjekt.',
          bullets: [
            '**Verpflichtung / Erlaubnis** — мне нужно (ich brauche), тебе можно (dir ist erlaubt), ему нельзя (er darf nicht)',
            '**Körperliche Empfindungen** — мне холодно (mir ist kalt), мне жарко (mir ist heiß)',
            '**Gefühle / Zustände** — ей скучно (ihr ist langweilig), ему грустно (ihm ist traurig), нам весело (uns macht es Spaß)',
            '**Schwierigkeit / Bewertung** — ей трудно (es fällt ihr schwer), мне лучше (mir geht es besser)',
            '**Muster:** [Person im Dativ] + [prädikatives Wort] + [optional Infinitiv] — Мне нужно купить продукты. Тебе можно отдохнуть. Ему нельзя курить.',
          ],
          table: {
            caption: '12 Konstruktionen: нужно, можно, нельзя, etc.',
            boldColumnIndices: [0, 1],
            headers: ['Ausdruck', 'Russisches Beispiel', 'Übersetzung', 'Grammatikhinweis'],
            rows: [
              [
                'нужно / надо',
                'Мне нужно работать.',
                'Ich muss arbeiten.',
                'Dativ = Person, die braucht',
              ],
              ['можно', 'Тебе можно идти.', 'Du darfst gehen.', 'Dativ = Person, der erlaubt ist'],
              [
                'нельзя',
                'Ему нельзя есть сахар.',
                'Er darf keinen Zucker essen.',
                'Dativ = verbotene Person',
              ],
              [
                'нужен/нужна/нужно',
                'Мне нужна помощь.',
                'Ich brauche Hilfe.',
                'Stimmt mit der benötigten Sache überein',
              ],
              [
                'интересно',
                'Мне интересно.',
                'Ich finde es interessant.',
                'Dativ = interessierte Person',
              ],
              [
                'скучно',
                'Ей скучно на уроке.',
                'Ihr ist langweilig im Unterricht.',
                'Dativ = Langweilige',
              ],
              ['весело', 'Нам было весело.', 'Wir hatten Spaß.', 'Vergangenheit: было + Dativ'],
              ['грустно', 'Ему грустно без тебя.', 'Ihm ist traurig ohne dich.', 'Gefühlszustand'],
              ['холодно / жарко', 'Мне холодно.', 'Mir ist kalt.', 'Körperliche Empfindung'],
              ['стыдно', 'Мне стыдно за тебя.', 'Ich schäme mich für dich.', 'Dativ-Erleber'],
              ['трудно', 'Ей трудно учиться.', 'Es fällt ihr schwer zu lernen.', 'Schwierigkeit'],
              [
                'лучше / хуже',
                'Мне лучше сегодня.',
                'Mir geht es heute besser.',
                'Gesundheit/Zustand',
              ],
            ],
          },
        },
        {
          h2: 'Dativ-Präpositionen: К und ПО (und weitere)',
          content:
            'Zwei wichtige russische Präpositionen verlangen immer den **Dativ**: **к** und **по**.\n\nMehrere weitere verlangen ebenfalls den Dativ:',
          table: {
            caption: '8 Präpositionen mit Bedeutung und vollständigen Beispielen',
            boldColumnIndices: [0],
            headers: [
              'Präp.',
              'Bedeutung',
              'Mit Substantiv',
              'Vollständiges Beispiel + Übersetzung',
            ],
            rows: [
              [
                'к',
                'zu / zu (Person oder Ort)',
                'к другу, к врачу, к окну',
                'Иди к врачу! — Geh zum Arzt!',
              ],
              [
                'по',
                'entlang / umher / laut / nach',
                'по улице, по правилам, по почте',
                'Мы гуляли по парку. — Wir spazierten durch den Park.',
              ],
              [
                'благодаря',
                'dank (positiv)',
                'благодаря тебе',
                'Благодаря тебе всё получилось! — Dank dir hat alles geklappt!',
              ],
              [
                'вопреки',
                'entgegen / trotz',
                'вопреки правилам',
                'Вопреки прогнозу, погода была хорошей.',
              ],
              ['согласно', 'laut (formell)', 'согласно закону', 'Согласно закону, это запрещено.'],
              [
                'навстречу',
                'entgegen / treffen',
                'навстречу ветру',
                'Она шла навстречу ветру. — Sie ging dem Wind entgegen.',
              ],
              ['наперекор', 'zum Trotz', 'наперекор судьбе', 'Наперекор судьбе он добился успеха.'],
              [
                'подобно',
                'ähnlich wie / wie (literarisch)',
                'подобно птице',
                'Подобно птице, он был свободен.',
              ],
            ],
          },
          subsections: [
            {
              h3: 'К (zu / gegen) — Richtungspräposition',
              content:
                '**К** drückt Bewegung zu einer Person, einem Ort oder Ziel aus. Es ist die Dativ-Entsprechung von в/на für die Richtung – aber **к** wird verwendet, wenn man sich **zu einer Person oder einem Objekt** bewegt, nicht in einen umschlossenen Raum.\n\nИди к врачу. Подойди к доске. Мы стремимся к цели.',
            },
            {
              h3: 'ПО — Die vielseitige Präposition',
              content:
                '**По** ist eine der vielseitigsten Präpositionen im Russischen. Mit dem Dativ:',
              bullets: [
                '**Bewegung entlang** — гулять по парку (im Park spazieren)',
                '**Verteilung** — по одному яблоку (ein Apfel pro Person)',
                '**Mittel / Kanal** — по телефону, по почте (per Telefon, per Post)',
                '**Thema / Gegenstand** — урок по математике (Matheunterricht)',
                '**Wiederkehrende Zeit** — по понедельникам (montags, jeden Montag)',
                '**Laut** — по закону (laut Gesetz)',
                '**По + Dativ Plural** = jeder [Tag]: по понедельникам — montags | в понедельник — an (einem bestimmten) Montag',
              ],
            },
          ],
        },
        {
          h2: '15 wichtige Verben, die den Dativ verlangen',
          content:
            'Diese Verben nehmen ihr **Indirektobjekt im Dativ**. Wichtig zu lernen mit ihrem Dativ-Objekt.',
          bullets: [
            '**Geben & Übertragen** — давать/дать (geben), показывать (zeigen)',
            '**Kommunikation** — говорить/сказать (sagen), писать (schreiben), звонить (anrufen), объяснять (erklären), отвечать (antworten)',
            '**Hilfe & Erlaubnis** — помогать (helfen), разрешать (erlauben), советовать (raten)',
            '**Gefühle & Zustände** — нравиться (gefallen), верить (glauben), завидовать (beneiden), мешать (stören)',
            '**Besitz** — принадлежать (gehören)',
          ],
          table: {
            caption: '15 Verben mit Beispielen und Hinweisen',
            boldColumnIndices: [0],
            headers: ['Verb', 'Beispiel', 'Übersetzung', 'Hinweis'],
            rows: [
              [
                'давать / дать',
                'Я дал ему книгу.',
                'Ich gab ihm ein Buch.',
                'Klassisches Indirektobjekt',
              ],
              [
                'говорить / сказать',
                'Скажи мне правду.',
                'Sag mir die Wahrheit.',
                'Jemandem etwas sagen',
              ],
              [
                'писать / написать',
                'Я написал тебе письмо.',
                'Ich schrieb dir einen Brief.',
                'Jemandem schreiben',
              ],
              ['звонить / позвонить', 'Позвони маме.', 'Ruf Mama an.', 'Jemanden anrufen'],
              ['помогать / помочь', 'Помоги мне!', 'Hilf mir!', 'Jemandem helfen'],
              [
                'нравиться / понравиться',
                'Мне нравится музыка.',
                'Mir gefällt Musik.',
                'Dativ = Erleber',
              ],
              [
                'показывать / показать',
                'Покажи мне карту.',
                'Zeig mir die Karte.',
                'Jemandem etwas zeigen',
              ],
              [
                'объяснять / объяснить',
                'Объясни мне это.',
                'Erkläre mir das.',
                'Jemandem etwas erklären',
              ],
              [
                'отвечать / ответить',
                'Ответь мне на вопрос.',
                'Beantworte meine Frage.',
                'Jemandem antworten',
              ],
              [
                'разрешать / разрешить',
                'Разреши мне уйти.',
                'Erlaube mir zu gehen.',
                'Erlaubnis geben',
              ],
              ['мешать / помешать', 'Не мешай мне!', 'Stör mich nicht!', 'Jemanden stören'],
              ['советовать', 'Советую тебе поехать.', 'Ich rate dir zu fahren.', 'Ratschlag geben'],
              ['верить / поверить', 'Я верю тебе.', 'Ich glaube dir.', 'Jemandem vertrauen'],
              ['завидовать', 'Он завидует другу.', 'Er beneidet seinen Freund.', 'Neid empfinden'],
              ['принадлежать', 'Это принадлежит мне.', 'Das gehört mir.', 'Jemandem gehören'],
            ],
          },
        },
        {
          h2: '30 echte russische Dativ-Beispiele',
          content:
            'Hier sind **30 authentische Sätze**, die jede wichtige Verwendung des Dativs demonstrieren.',
          bullets: [
            '**1–6:** Indirekte Objekte (geben, sagen, helfen, etc.)',
            '**7–10:** Нравиться-Konstruktion',
            '**11–13:** Altersausdrücke',
            '**14–19:** Präpositionen (к, навстречу, благодаря, вопреки, по)',
            '**20–26:** Unpersönliche Ausdrücke (нужно, можно, холодно, скучно…)',
            '**27–30:** Weitere Verben (советовать, завидовать, верить, желать)',
          ],
          table: {
            caption: '30 Beispiele nach Verwendung gruppiert',
            boldColumnIndices: [1],
            headers: ['#', 'Russisch', 'Transkription', 'Übersetzung & Hinweise'],
            rows: [
              [
                '1',
                'Я дал маме цветы.',
                'Ya dal mame tsvety.',
                'Ich gab Mama Blumen. (мама → маме)',
              ],
              [
                '2',
                'Скажи мне правду.',
                'Skazhi mne pravdu.',
                'Sag mir die Wahrheit. (мне = Dativ von я)',
              ],
              [
                '3',
                'Он написал другу длинное письмо.',
                'On napisal drugu dlinnoye pismo.',
                'Er schrieb seinem Freund einen langen Brief.',
              ],
              ['4', 'Помогите мне, пожалуйста!', 'Pomogite mne, pozhaluysta!', 'Bitte helft mir!'],
              [
                '5',
                'Я позвонила бабушке.',
                'Ya pozvonila babushke.',
                'Ich rief Oma an. (бабушка → бабушке)',
              ],
              [
                '6',
                'Преподаватель объяснил нам грамматику.',
                'Prepodavatel obyasnil nam grammatiku.',
                'Der Lehrer erklärte uns die Grammatik.',
              ],
              [
                '7',
                'Мне нравится русская музыка.',
                'Mne nravitsya russkaya muzyka.',
                'Mir gefällt russische Musik. (мне = Erleber)',
              ],
              [
                '8',
                'Тебе понравился фильм?',
                'Tebe ponravilsya film?',
                'Hat dir der Film gefallen? (понравился stimmt mit фильм)',
              ],
              [
                '9',
                'Ей не нравятся эти правила.',
                'Ey ne nravyatsya eti pravila.',
                'Ihr gefallen diese Regeln nicht.',
              ],
              [
                '10',
                'Нам понравилась Москва.',
                'Nam ponravilas Moskva.',
                'Uns hat Moskau gefallen. (понравилась stimmt mit Москва)',
              ],
              ['11', 'Мне двадцать три года.', 'Mne dvadtsat tri goda.', 'Ich bin 23 Jahre alt.'],
              [
                '12',
                'Брату исполнилось пять лет.',
                'Bratu ispolnilos pyat let.',
                'Mein Bruder wurde fünf.',
              ],
              [
                '13',
                'Сколько лет вашей маме?',
                'Skolko let vashey mame?',
                'Wie alt ist Ihre Mutter?',
              ],
              [
                '14',
                'Иди к врачу немедленно!',
                'Idi k vrachu nemedlenno!',
                'Geh sofort zum Arzt! (к + Dat.)',
              ],
              [
                '15',
                'Мы подошли к морю на закате.',
                'My podoshli k moryu na zakate.',
                'Wir kamen bei Sonnenuntergang ans Meer.',
              ],
              [
                '16',
                'Она шла навстречу судьбе.',
                'Ona shla navstrechu sudbe.',
                'Sie ging ihrer Bestimmung entgegen.',
              ],
              [
                '17',
                'Благодаря вам проект удался.',
                'Blagodarya vam proyekt udalsya.',
                'Dank euch ist das Projekt gelungen.',
              ],
              [
                '18',
                'Вопреки ожиданиям, всё получилось.',
                'Vopreki ozhidaniyam, vsyo poluchilos.',
                'Entgegen den Erwartungen hat alles geklappt.',
              ],
              [
                '19',
                'По правилам, это запрещено.',
                'Po pravilam, eto zapreshcheno.',
                'Laut den Regeln ist das verboten.',
              ],
              [
                '20',
                'Мне нужно поговорить с тобой.',
                'Mne nuzhno pogovorit s toboy.',
                'Ich muss mit dir sprechen.',
              ],
              [
                '21',
                'Тебе можно идти домой.',
                'Tebe mozhno iti domoy.',
                'Du darfst nach Hause gehen.',
              ],
              [
                '22',
                'Ему нельзя пить кофе.',
                'Emu nelzya pit kofe.',
                'Er darf keinen Kaffee trinken.',
              ],
              [
                '23',
                'Мне холодно, закрой окно.',
                'Mne holodno, zakroy okno.',
                'Mir ist kalt, mach das Fenster zu.',
              ],
              [
                '24',
                'Ей скучно одной дома.',
                'Ey skuchno odnoy doma.',
                'Ihr ist allein zu Hause langweilig.',
              ],
              [
                '25',
                'Нам было очень весело на вечеринке.',
                'Nam bylo ochen veselo na vecherinke.',
                'Wir hatten viel Spaß auf der Party.',
              ],
              [
                '26',
                'Мне стыдно за своё поведение.',
                'Mne stydno za svoyo povedeniye.',
                'Ich schäme mich für mein Verhalten.',
              ],
              [
                '27',
                'Советую вам прочитать эту книгу.',
                'Sovetuyu vam prochitat etu knigu.',
                'Ich rate euch, dieses Buch zu lesen.',
              ],
              [
                '28',
                'Он завидует нашему успеху.',
                'On zaviduyet nashemu uspekhu.',
                'Er beneidet unseren Erfolg.',
              ],
              [
                '29',
                'Я верю каждому его слову.',
                'Ya veryu kazhdomu yego slovu.',
                'Ich glaube seinem jedem Wort.',
              ],
              [
                '30',
                'Желаю вам счастья и здоровья!',
                'Zhelayu vam schastya i zdorovya!',
                'Ich wünsche euch Glück und Gesundheit!',
              ],
            ],
          },
        },
        {
          h2: 'Dativ vs. andere Fälle: Wie man sie auseinanderhält',
          content:
            'Der Dativ wird manchmal mit dem **Genitiv** (Besitz) und dem **Akkusativ** (direkte Objekte) verwechselt.\n\nDiese Tabelle hilft:',
          table: {
            caption: 'Dativ vs. andere Fälle im Vergleich',
            boldColumnIndices: [0, 1],
            headers: ['Kontext', 'Russisches Beispiel', 'Fallerklärung'],
            rows: [
              [
                'Indirektobjekt → Dativ',
                'Я дал книгу другу.',
                'DATIV: другу (einem Freund). Buch gegeben AN den Freund.',
              ],
              [
                'Direktes Objekt → Akkusativ',
                'Я купил книгу.',
                'AKKUSATIV: книгу (das Buch selbst).',
              ],
              ['Besitz → Genitiv', 'Это книга друга.', 'GENITIV: друга (das Buch des Freundes).'],
              [
                'Gefallen (нравиться) → Dativ',
                'Мне нравится книга.',
                'DATIV: мне. NICHT я verwenden.',
              ],
              [
                'Brauchen (нужен) → Dativ',
                'Мне нужна эта книга.',
                'DATIV: мне (ich bin derjenige, der es braucht).',
              ],
              ['Richtung к → Dativ', 'Иди к другу.', 'Dativ nach к: другу (zum Freund).'],
              ['Ort у → Genitiv', 'Я у друга.', 'Genitiv nach у: друга (beim Freund).'],
              [
                'Altersausdruck → Dativ',
                'Другу двадцать лет.',
                'DATIV: другу (der Freund ist 20).',
              ],
            ],
          },
          bullets: [
            '**Schlüsselfrage:** Ist das Substantiv der **EMPFÄNGER** einer Handlung (→ Dativ)? Oder BESESSEN (→ Genitiv), BEHANDELT (→ Akkusativ) oder ORT (→ Präpositiv)?',
          ],
        },
        {
          h2: 'Top 6 Dativ-Fehler (und wie man sie behebt)',
          bullets: [
            '**Nominativ für den „Gefällt-mir"-Erleber** — Я нравится музыка ✗ → Мне нравится музыка ✓',
            '**Verb-Kongruenz bei нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓ (stimmt mit Subjekt)',
            '**Falsches Pronomen nach Präposition** — к ей ✗ → к ней ✓ (N- bei Pronomen 3. Person hinzufügen)',
            '**к mit в/на verwechseln** — Иди к школу ✗ → Иди в школу ✓ (к = zu Person/Objekt; в = in Raum)',
            '**-ии für -ия-Substantive vergessen** — к станце ✗ → к станции ✓ (станция → станции)',
            '**нужен-Kongruenz** — Мне нужен помощь ✗ → Мне нужна помощь ✓ (stimmt mit der BENÖTIGTEN Sache)',
          ],
        },
      ],
      conclusion: 'Der russische Dativ ist weit reicher, als „der Gebefall" vermuten lässt.',
      conclusionBullets: [
        '**Verwendung:** Indirektobjekt, Erleber von нравиться, Alter, unpersönliche Ausdrücke (мне нужно, мне холодно), nach Präpositionen к und по',
        '**Substantiv-Endungen:** Mask./Neut. hart→-У, weich→-Ю | Fem. -а/-я→-Е, -ия→-ИИ, -ь→-И | Plural hart→-АМ, weich→-ЯМ',
        '**Personalpronomen:** мне, тебе, ему, ей, нам, вам, им',
        '**НРАВИТЬСЯ:** Person im Dativ; Verb stimmt mit der gefällenden Sache überein',
        '**Alter:** [Dativ] + Zahl + год/года/лет',
        '**Nach Präpositionen:** N- bei Pronomen 3. Person hinzufügen (к нему, к ней, к ним)',
      ],
      conclusionOutro: 'Machen Sie mit unserer Russisch-Grammatik-Serie weiter:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wofür wird der Dativ im Russischen verwendet?',
          answer:
            'Der russische Dativ wird verwendet für: **Indirektobjekte** (Я дал маме цветы), die **нравиться**-Konstruktion (Мне нравится — Mir gefällt), **Altersausdrücke** (Мне 25 лет), **unpersönliche Ausdrücke** (Мне нужно, Мне холодно) und nach den Präpositionen **к** (zu) und **по** (entlang/laut).',
        },
        {
          question: 'Wie sagt man „Mir gefällt" auf Russisch?',
          answer:
            'Verwenden Sie [Person im Dativ] + нравится/нравятся + [Subjekt]. Мне нравится музыка (Musik gefällt mir = Mir gefällt Musik). **Нравится** für Singular, **нравятся** für Plural. Für stärkere Vorliebe: Я люблю классическую музыку.',
        },
        {
          question: 'Wie drückt man das Alter auf Russisch aus?',
          answer:
            '[Person im Dativ] + [Zahl] + год/года/лет. один год (1), два/три/четыре года (2-4), пять лет (5+). Мне двадцать пять лет. Um zu fragen: Сколько тебе лет?',
        },
        {
          question: 'Was ist der Unterschied zwischen к und в/на für die Richtung?',
          answer:
            '**К + Dativ** = zu einer Person oder einem Objekt: Иди к врачу. **В/НА + Akkusativ** = in/auf einen Ort: Иди в магазин. К für Personen/Objekte; в/на für Orte und Räume.',
        },
        {
          question: 'Was bedeutet по im Russischen?',
          answer:
            '**По** mit Dativ drückt aus: Bewegung entlang (гулять по парку), Verteilung (по одному), Mittel (по телефону), Thema (урок по математике), wiederkehrende Zeit (по понедельникам), Übereinstimmung (по закону).',
        },
        {
          question: 'Welche Verben verlangen den Dativ im Russischen?',
          answer:
            'давать/дать, говорить/сказать, писать, звонить, помогать, показывать, объяснять, советовать, верить, завидовать, мешать, принадлежать. **Нравиться** nimmt den Erleber im Dativ.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russischer Dativ: Wie man „an" und „für" auf Russisch sagt',
        description:
          'Vollständiger Leitfaden zum russischen Dativ: Substantivendungen, нравиться, Altersausdrücke, unpersönliche Konstruktionen, 8 Präpositionen, 15 Verben, 30 Beispiele.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
        },
        keywords:
          'Russischer Dativ, Russische Dativ-Endungen, мне нравится Grammatik, Russisches indirektes Objekt',
      },
      tableAccentVariant: 'dative',
    },
    tr_tr: {
      slug: 'russian-dative-case',
      title: 'Rusça datif: Rusçada "kime" ve "için" nasıl söylenir',
      metaTitle: 'Rusça datif: Kurallar, ekler, нравиться ve 30 örnek | Russian Cases with Anna',
      metaDescription:
        'Rusça datif için kapsamlı rehber: isim ve sıfat ekleri, нравиться yapısı, yaş ifadeleri, 8 edat, 15 fiil, 30 gerçek örnek.',
      keywords: [
        'Rusça datif',
        'Rusça datif ekleri',
        'мне нравится grameri',
        'Rusça dolaylı nesne',
        'Rusça к по edatları',
      ],
      h1: 'Rusça datif: Rusçada "kime" ve "için" nasıl söylenir',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.jpg',
        alt: 'Ücretsiz Rusça datif dersi: Rusçada kime ve için',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça datif dilin en **çok yönlü** ve ilginç hallerinden biridir. Klasik rolü **dolaylı nesneyi** (eylemin alıcısını) belirtmektir, ama "birine vermek"ten çok öteye uzanır.\n\n**Deneyim**, **duygu**, **yaş**, **izin** ve kişisel alaka halidir. Rusçada "beğeniyorum", "üşüyorum", "ihtiyacım var" veya "25 yaşındayım" demeyi merak ettiyseniz — cevap her zaman **datif**le ilgilidir.',
      whatYouLearn: [
        'Rusça datif nedir ve **6 ana kullanımı**',
        '**Datif ekleri** isimler için (tüm türler, tekil ve çoğul)',
        '**Kişi zamirleri** datifte (мне, тебе, ему, ей, нам, вам, им)',
        '**НРАВИТЬСЯ yapısı** — Rusçada "beğeniyorum" nasıl söylenir',
        '**Yaş ifadeleri** (Мне 25 лет)',
        '**Kişisiz ifadeler** (нужно, можно, нельзя, холодно, скучно…)',
        '**Edatlar** к, по, благодаря, вопреки…',
        '**15 fiil** dolaylı nesne datifte gerektirir',
      ],
      leadMagnetCta: {
        title: 'Rusça datifi telefonda pratik edin',
        description:
          'Mobil uygulamamız 6 Rusça halin hepsini çalıştırır — нравиться, yaş ifadeleri ve dolaylı nesneler özellikle. Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rusça genitif' },
        { href: '/learn/articles/russian-accusative-case', label: 'Rusça akkusatif' },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Rusçada datifte nasıl çekim yapılır',
        },
      ],
      sections: [
        {
          h2: 'Kısa cevap',
          content:
            'Rusçada datif **Кому?** (Kime?) ve **Чему?** (Neye?) sorularına cevap verir. **Dolaylı nesneler**, **yaş ifadeleri** (Мне 25 лет), **deneyim** (мне нравится, мне холодно) ve **к** ile **по** edatlarından sonra kullanılır.',
        },
        {
          h2: 'Top 6 datif hatası (ve nasıl düzeltilir)',
          bullets: [
            '**"Beğenen" için nominatif** — Я нравится музыка ✗ → Мне нравится музыка ✓',
            '**нравиться fiil uyumu** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓',
            '**Edattan sonra yanlış zamir** — к ей ✗ → к ней ✓',
            '**к ile в/на karıştırmak** — Иди к школу ✗ → Иди в школу ✓',
            '**-ия isimlerde -ии unutmak** — к станце ✗ → к станции ✓',
            '**нужен uyumu** — Мне нужен помощь ✗ → Мне нужна помощь ✓',
          ],
        },
      ],
      conclusion:
        'Rusça datif "verme hali"nden çok daha zengindir. Kullanımlar: dolaylı nesne, нравиться deneyimi, yaş, kişisiz ifadeler, к ve по sonrası.',
      conclusionOutro: 'Rusça gramer serimizle devam edin:',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusçada datif ne için kullanılır?',
          answer:
            'Datif **dolaylı nesneler** (Я дал маме цветы), **нравиться yapısı** (Мне нравится), **yaş ifadeleri** (Мне 25 лет), **kişisiz ifadeler** (Мне нужно, Мне холодно) ve **к** (kime/neye) ile **по** (boyunca/göre) edatlarından sonra kullanılır.',
        },
        {
          question: 'Rusçada "beğeniyorum" nasıl söylenir?',
          answer:
            '[Datifte kişi] + нравится/нравятся + [özne] kullanın. Мне нравится музыка (Müzik bana hoş geliyor = Müziği beğeniyorum). **Нравится** tekil, **нравятся** çoğul için.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça datif: Rusçada "kime" ve "için" nasıl söylenir',
        description:
          'Rusça datif kapsamlı rehber: ekler, нравиться, yaş ifadeleri, 8 edat, 30 örnek.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
        },
        keywords: 'Rusça datif, Rusça datif ekleri, мне нравится grameri, Rusça dolaylı nesne',
      },
      tableAccentVariant: 'dative',
    },
    pl_pl: {
      slug: 'russian-dative-case',
      title: 'Rosyjski celownik: Jak powiedzieć „do" i „dla" po rosyjsku',
      metaTitle:
        'Rosyjski celownik: Zasady, końcówki, нравиться i 30 przykładów | Russian Cases with Anna',
      metaDescription:
        'Kompletny przewodnik po rosyjskim celowniku: końcówki rzeczowników i przymiotników, konstrukcja нравиться, wyrażenia wieku, 8 przyimków, 15 czasowników, 30 autentycznych przykładów.',
      keywords: [
        'Rosyjski celownik',
        'Końcówki celownika rosyjskiego',
        'Gramatyka мне нравится',
        'Rosyjskie dopełnienie dalsze',
        'Przyimki rosyjskie к по',
      ],
      h1: 'Rosyjski celownik: Jak powiedzieć „do" i „dla" po rosyjsku',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.jpg',
        alt: 'Darmowa lekcja rosyjskiego o celowniku: do i dla po rosyjsku',
        width: 1200,
        height: 630,
      },
      intro:
        'Rosyjski celownik to jeden z najbardziej **wszechstronnych** i fascynujących przypadków języka. Jego klasyczna rola to oznaczanie **dopełnienia dalszego** (odbiorcy czynności), ale wykracza daleko poza „dawanie komuś".\n\nTo przypadek **doświadczenia**, **uczucia**, **wieku**, **zezwolenia** i osobistej relewantności. Jeśli zastanawiałeś się, jak powiedzieć „lubię", „jest mi zimno", „potrzebuję" lub „mam 25 lat" po rosyjsku — odpowiedź zawsze wiąże się z **celownikiem**.',
      whatYouLearn: [
        'Czym jest rosyjski celownik i jego **6 głównych użyć**',
        '**Końcówki celownika** dla rzeczowników (wszystkie rodzaje, l. poj. i mn.)',
        '**Zaimki osobowe** w celowniku (мне, тебе, ему, ей, нам, вам, им)',
        '**Konstrukcja НРАВИТЬСЯ** — jak powiedzieć „lubię" po rosyjsku',
        '**Wyrażenia wieku** (Мне 25 лет)',
        '**Wyrażenia nieosobowe** (нужно, можно, нельзя, холодно, скучно…)',
        '**Przyimki** к, по, благодаря, вопреки…',
        '**15 czasowników** wymagających dopełnienia dalszego w celowniku',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjski celownik na telefonie',
        description:
          'Nasza aplikacja mobilna ćwiczy wszystkie 6 rosyjskich przypadków — ze szczególnym naciskiem na нравиться, wyrażenia wieku i dopełnienia dalsze. Na Android i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Kompletny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rosyjski dopełniacz' },
        { href: '/learn/articles/russian-accusative-case', label: 'Rosyjski biernik' },
        {
          href: '/learn/lessons/dative-case-declension',
          label: 'Jak odmieniać w celowniku po rosyjsku',
        },
      ],
      sections: [
        {
          h2: 'Szybka odpowiedź',
          content:
            'Rosyjski celownik odpowiada na **Кому?** (Komu?) i **Чему?** (Czemu?). Służy do **dopełnień dalszych**, **wyrażeń wieku** (Мне 25 лет), **doświadczenia** (мне нравится, мне холодно) oraz po przyimkach **к** i **по**.',
        },
        {
          h2: 'Top 6 błędów w celowniku (i jak je naprawić)',
          bullets: [
            '**Mianownik dla „tego, kto lubi"** — Я нравится музыка ✗ → Мне нравится музыка ✓',
            '**Zgodność czasownika z нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓',
            '**Zły zaimek po przyimku** — к ей ✗ → к ней ✓',
            '**Mylenie к i в/на** — Иди к школу ✗ → Иди в школу ✓',
            '**Zapominanie -ии dla rzeczowników na -ия** — к станце ✗ → к станции ✓',
            '**Zgodność нужен** — Мне нужен помощь ✗ → Мне нужна помощь ✓',
          ],
        },
      ],
      conclusion:
        'Rosyjski celownik jest znacznie bogatszy niż „przypadek dawania". Zastosowania: dopełnienie dalsze, doświadczenie нравиться, wiek, wyrażenia nieosobowe, po к i по.',
      conclusionOutro: 'Kontynuuj z resztą naszej serii gramatyki rosyjskiej:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Do czego służy celownik w rosyjskim?',
          answer:
            'Celownik służy do **dopełnień dalszych** (Я дал маме цветы), **konstrukcji нравиться** (Мне нравится), **wyrażeń wieku** (Мне 25 лет), **wyrażeń nieosobowych** (Мне нужно, Мне холодно) oraz po **к** (ku) i **по** (wzdłuż/według).',
        },
        {
          question: 'Jak powiedzieć „lubię" po rosyjsku?',
          answer:
            'Użyj [osoba w celowniku] + нравится/нравятся + [podmiot]. Мне нравится музыка (Muzyka mi się podoba = Lubię muzykę). **Нравится** w liczbie pojedynczej, **нравятся** w mnogiej.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjski celownik: Jak powiedzieć „do" i „dla" po rosyjsku',
        description:
          'Kompletny przewodnik po rosyjskim celowniku: końcówki, нравиться, wyrażenia wieku, przyimki.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
        },
      },
      tableAccentVariant: 'dative',
    },
    ru_ru: {
      slug: 'russian-dative-case',
      title: 'Дательный падеж: как сказать «кому» и «для» по-русски',
      metaTitle:
        'Дательный падеж: правила, окончания, нравиться и 30 примеров | Russian Cases with Anna',
      metaDescription:
        'Руководство по дательному падежу: окончания существительных и прилагательных, конструкция нравиться, выражения возраста, 8 предлогов, 15 глаголов.',
      keywords: [
        'дательный падеж',
        'окончания дательного падежа',
        'мне нравится грамматика',
        'косвенное дополнение русский',
        'предлоги к по русский',
      ],
      h1: 'Дательный падеж: как сказать «кому» и «для» по-русски',
      heroImage: {
        src: '/articles/free-russian-lesson-dative-case.jpg',
        alt: 'Урок русского языка: дательный падеж — «кому» и «для»',
        width: 1200,
        height: 630,
      },
      intro:
        'Дательный падеж — один из самых **многозначных** и интересных падежей русского языка. Классическая роль — обозначать **косвенное дополнение** (получателя действия), но он используется гораздо шире.\n\nЭто падеж **переживания**, **ощущения**, **возраста**, **разрешения**. Как сказать «мне нравится», «мне холодно», «мне нужно» или «мне 25 лет» — ответ всегда связан с **дательным**.',
      whatYouLearn: [
        'Что такое дательный падеж и 6 основных употреблений',
        'Окончания дательного для существительных',
        'Местоимения в дательном (мне, тебе, ему, ей, нам, вам, им)',
        'Конструкция НРАВИТЬСЯ — как сказать «мне нравится»',
        'Выражения возраста (Мне 25 лет)',
        'Безличные выражения (нужно, можно, нельзя, холодно, скучно)',
        'Предлоги к, по, благодаря, вопреки',
      ],
      leadMagnetCta: {
        title: 'Тренируйте дательный падеж в приложении',
        description:
          'Наше приложение тренирует все 6 падежей — с фокусом на нравиться, выражения возраста и косвенные дополнения. На Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        { href: '/learn/articles/russian-genitive-case', label: 'Родительный падеж' },
        { href: '/learn/articles/russian-accusative-case', label: 'Винительный падеж' },
        { href: '/learn/lessons/dative-case-declension', label: 'Дательный падеж: склонение' },
      ],
      sections: [
        {
          h2: 'Краткий ответ',
          content:
            'Дательный падеж отвечает на **Кому?** и **Чему?**. Используется для **косвенных дополнений**, **выражений возраста** (Мне 25 лет), **переживания** (мне нравится, мне холодно) и после предлогов **к** и **по**.',
        },
        {
          h2: 'Топ-6 ошибок в дательном падеже',
          bullets: [
            '**Именительный для «того, кому нравится»** — Я нравится музыка ✗ → Мне нравится музыка ✓',
            '**Согласование глагола с нравиться** — Мне нравится фильмы ✗ → Мне нравятся фильмы ✓',
            '**Неправильное местоимение после предлога** — к ей ✗ → к ней ✓',
            '**Путать к и в/на** — Иди к школу ✗ → Иди в школу ✓',
            '**Забыть -ии для -ия** — к станце ✗ → к станции ✓',
            '**Согласование нужен** — Мне нужен помощь ✗ → Мне нужна помощь ✓',
          ],
        },
      ],
      conclusion:
        'Дательный падеж богаче, чем «падеж давания»: косвенное дополнение, нравиться, возраст, безличные выражения, предлоги к и по.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Для чего используется дательный падеж?',
          answer:
            'Дательный используется для **косвенных дополнений** (Я дал маме цветы), конструкции **нравиться** (Мне нравится), **выражений возраста** (Мне 25 лет), **безличных выражений** (Мне нужно, Мне холодно) и после предлогов **к** и **по**.',
        },
        {
          question: 'Как сказать «мне нравится» по-русски?',
          answer:
            'Используйте [лицо в дательном] + нравится/нравятся + [подлежащее]. Мне нравится музыка. **Нравится** — ед. число, **нравятся** — мн. число.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Дательный падеж: как сказать «кому» и «для» по-русски',
        description:
          'Руководство по дательному падежу: окончания, нравиться, выражения возраста, предлоги.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-dative-case',
        },
        keywords: 'дательный падеж, окончания дательного падежа, мне нравится грамматика',
      },
      tableAccentVariant: 'dative',
    },
  },
  'russian-instrumental-case': {
    fr_fr: {
      slug: 'russian-instrumental-case',
      title:
        "Instrumental russe : quand l'utiliser et pourquoi il est plus simple qu'il n'y paraît",
      metaTitle:
        'Instrumental russe : terminaisons, professions, с + instrumental, 30 exemples | Russian Cases with Anna',
      metaDescription:
        "Guide complet de l'instrumental russe : terminaisons des noms et adjectifs, professions (быть/стать/работать), с + instrumental, prépositions spatiales, expressions de temps.",
      keywords: [
        'instrumental russe',
        'terminaisons instrumental russe',
        'с + instrumental russe',
        'prépositions instrumental russe',
        'professions russe instrumental',
      ],
      h1: "Instrumental russe : quand l'utiliser et pourquoi il est plus simple qu'il n'y paraît",
      heroImage: {
        src: '/articles/free-russian-lesson-instrumental-case.jpg',
        alt: "Leçon gratuite de russe sur l'instrumental : professions et с + instrumental",
        width: 1200,
        height: 630,
      },
      intro:
        "De tous les cas russes, l'instrumental a la réputation d'être intimidant. Les apprenants voient des terminaisons comme **-ом**, **-ей**, **-ью**, **-ями** et se sentent submergés.\n\nMais l'**instrumental** a certaines des terminaisons les plus **régulières et prévisibles** du russe – et une fois que vous en comprenez les usages principaux, il devient l'un des cas les plus logiques.",
      whatYouLearn: [
        "Ce qu'est l'instrumental et ses **6 usages principaux**",
        "**Terminaisons** de l'instrumental pour les noms – tous genres, singulier et pluriel",
        "**Professions et rôles** avec l'instrumental (работать врачом, стать учителем)",
        '**С + instrumental** – comment dire « avec » en russe',
        "Toutes les **prépositions** qui exigent l'instrumental (за, перед, над, под, между)",
        "**Expressions de temps** avec l'instrumental (утром, летом, ночью)",
        "**15 verbes** clés qui prennent l'instrumental",
      ],
      leadMagnetCta: {
        title: "S'entraîner à l'instrumental russe sur son téléphone",
        description:
          'Notre app mobile entraîne les 6 cas russes – avec focus sur professions, с + instrumental et prépositions spatiales. Sur Android et iOS.',
        ctaText: "Télécharger l'app et commencer à s'entraîner",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Génitif russe' },
        { href: '/learn/articles/russian-accusative-case', label: 'Accusatif russe' },
        { href: '/learn/articles/russian-dative-case', label: 'Datif russe' },
      ],
      sections: [
        {
          h2: 'Réponse rapide',
          content:
            "L'instrumental répond à **Кем?** (Par qui ?) et **Чем?** (Par quoi ? / Avec quoi ?). Il sert pour l'instrument ou le moyen, l'accompagnement (avec **с**), les professions et rôles (après **быть/стать**), et est exigé par plusieurs prépositions (**за**, **перед**, **над**, **под**, **между**).",
        },
        {
          h2: "Top 5 erreurs d'instrumental (et comment les corriger)",
          bullets: [
            '**Nominatif pour la profession après был/стала** — Она была учитель ✗ → Она была учителем ✓',
            '**Oublier -ЬЮ pour les noms féminins en -ь** — ночь → ночью ✓',
            '**Mauvais cas spatial** — Он за стол ✗ → Он за столом ✓',
            "**Oublier l'accord de l'adjectif** — горжусь умный сын ✗ → горжусь умным сыном ✓",
            '**Accusatif avec заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓',
          ],
        },
      ],
      conclusion:
        "L'instrumental russe est moins intimidant que sa réputation. Une fois les schémas clés acquis – instruments, accompagnement, professions, prépositions spatiales, expressions de temps – il apparaît naturellement partout.",
      conclusionOutro: 'Poursuivez avec le reste de notre série de grammaire russe :',
      ctaText: "S'entraîner à l'instrumental russe avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: "À quoi sert l'instrumental en russe ?",
          answer:
            "L'instrumental sert à l'**instrument ou moyen** (писать ручкой), à l'**accompagnement** avec с (с другом), à la **profession** après быть/стать/работать (работать врачом), aux **expressions de temps** (утром, летом), aux **positions spatiales** avec за/перед/над/под, et avec des verbes comme заниматься, гордиться.",
        },
        {
          question: 'Comment dire les professions en russe ?',
          answer:
            "Utilisez l'**instrumental** du nom de profession après le verbe : travailler + instrumental (работает врачом), стать + instrumental (стала учителем), être au passé/futur + instrumental (был инженером).",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          "Instrumental russe : quand l'utiliser et pourquoi il est plus simple qu'il n'y paraît",
        description:
          "Guide complet de l'instrumental russe : terminaisons, professions, с + instrumental.",
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
        },
      },
      tableAccentVariant: 'instrumental',
    },
    de_de: {
      slug: 'russian-instrumental-case',
      title:
        'Russischer Instrumental: Wann man ihn verwendet und warum er einfacher ist als gedacht',
      metaTitle:
        'Russischer Instrumental: Endungen, Berufe, с + Instrumental, 30 Beispiele | Russian Cases with Anna',
      metaDescription:
        'Vollständiger Leitfaden zum russischen Instrumental: Substantivendungen, Adjektive, Berufe (быть/стать/работать), с + Instrumental, räumliche Präpositionen (за/перед/над/под), Zeitausdrücke, 15 Verben, 30 echte Beispiele.',
      keywords: [
        'Russischer Instrumental',
        'Russische Instrumental-Endungen',
        'с + Instrumental Russisch',
        'Russische Instrumental-Präpositionen',
        'быть стать работать Instrumental',
        'Russische Instrumental-Berufe',
      ],
      h1: 'Russischer Instrumental: Wann man ihn verwendet und warum er einfacher ist als gedacht',
      heroImage: {
        src: '/articles/free-russian-lesson-instrumental-case.webp',
        alt: 'Kostenlose Russisch-Lektion zum Instrumental: Berufe, с + Instrumental und mehr',
        width: 1200,
        height: 630,
      },
      intro:
        'Von allen russischen Fällen hat der Instrumental den Ruf, einschüchternd zu sein. Lernende sehen Endungen wie **-ом**, **-ей**, **-ью**, **-ями** und fühlen sich überfordert.\n\nAber der **Instrumental** hat einige der regelmäßigsten, vorhersehbarsten Endungen im Russischen – und sobald man seine Kernverwendungen versteht, wird er zu einem der logischeren Fälle. Dieser Leitfaden entmystifiziert ihn vollständig.',
      whatYouLearn: [
        'Was der Instrumental ist und seine **6 Kernverwendungen**',
        '**Instrumental-Endungen** für Substantive — alle Genera, Singular & Plural',
        'Instrumental-Endungen für **Adjektive**',
        '**Berufe und Rollen** mit dem Instrumental (работать врачом, стать учителем)',
        '**С + Instrumental** — wie man „mit" auf Russisch sagt',
        'Alle Präpositionen, die den Instrumental verlangen (**за, перед, над, под, между**)',
        '**Zeitausdrücke** mit dem Instrumental (утром, летом, ночью)',
        '**15 wichtige Verben**, die den Instrumental verlangen',
        '**30 echte russische Beispielsätze** mit Transkription',
      ],
      leadMagnetCta: {
        title: 'Russische Instrumental-Übungen auf dem Handy trainieren',
        description:
          'Unsere mobile App übt alle 6 russischen Fälle – mit Schwerpunkt auf Berufe, с + Instrumental, räumliche Präpositionen und reflexive Verben. Für Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Russischer Genitiv' },
        { href: '/learn/articles/russian-accusative-case', label: 'Russischer Akkusativ' },
        { href: '/learn/articles/russian-dative-case', label: 'Russischer Dativ' },
      ],
      sections: [
        {
          h2: 'Kurze Antwort',
          content:
            'Der Instrumental beantwortet **Кем? (Von wem?)** und **Чем? (Womit? / Mit was?)**.\n\nEr wird für Instrumente und Mittel, Begleitung (mit **с**), Berufe und Rollen (nach **быть/стать**) verwendet und wird von mehreren wichtigen Präpositionen verlangt (**за**, **перед**, **над**, **под**, **между**).',
        },
        {
          h2: 'Was ist der russische Instrumental?',
          content:
            'Der Instrumental (**Творительный падеж** – von творить, „schaffen/tun") ist der fünfte der sechs russischen Fälle. Sein Name offenbart seinen ursprünglichen Zweck: das **Instrument oder Werkzeug** zu kennzeichnen, mit dem eine Handlung ausgeführt wird.\n\nKernbeispiel: **Он пишет ручкой.** — Er schreibt mit dem Stift. (ручка → ручкой — der Stift ist das Instrument)',
          subsections: [
            {
              h3: 'Der Instrumental wird verwendet für:',
              content: '',
              bullets: [
                '**Instrument oder Mittel** der Handlung (писать ручкой — mit dem Stift schreiben)',
                '**Begleitung** mit С (идти с другом — mit einem Freund gehen)',
                '**Beruf oder Rolle** nach быть/стать/работать (быть врачом — Arzt sein)',
                '**Zeitausdrücke** (утром — morgens, летом — im Sommer, ночью — nachts)',
                '**Räumliche Position** nach за, перед, над, под, между (за столом — am Tisch)',
                '**Reflexive Verben** (заниматься, интересоваться, гордиться…)',
              ],
            },
          ],
        },
        {
          h2: 'Russische Instrumental-Endungen — Substantive',
          content:
            'Hier ist die vollständige Tabelle der Instrumental-Endungen für russische Substantive.\n\nDie Muster sind **konsistent**, und der Plural ist für alle Genera gleich (**-ами/-ями**).',
          image: {
            src: '/articles/instrumental-case-russian-noun-endings-declension-table.jpg',
            alt: 'Instrumental-Deklinationstabelle: Russische Substantivendungen nach Genus',
            width: 1200,
            height: 630,
          },
          table: {
            caption: 'Instrumental-Substantivendungen — alle Genera, Singular & Plural',
            boldColumnIndices: [1, 3],
            headers: ['Substantivtyp', 'Endung', 'Bildung', 'Ergebnis', 'Beispiel im Kontext'],
            rows: [
              [
                'Mask. hart (Konsonant)',
                '-ом',
                'стол → стол+ом',
                'столом',
                'Он пишет карандашом. — Er schreibt mit dem Bleistift.',
              ],
              [
                'Mask. weich (-й)',
                '-ем',
                'музей → музе+ем',
                'музеем',
                'перед музеем — vor dem Museum',
              ],
              [
                'Mask. weich (-ь)',
                '-ем',
                'словарь → словар+ём',
                'словарём',
                'Он машет словарём. — Er winkt mit dem Wörterbuch.',
              ],
              [
                'Mask. nach ж/ш/щ/ч/ц',
                '-ем (unbetont)',
                'врач → врач+ом',
                'врачом',
                'Он работает врачом. — Er arbeitet als Arzt.',
              ],
              [
                'Fem. hart (-а)',
                '-ой / -ею',
                'женщина → женщин+ой',
                'женщиной',
                'с красивой женщиной — mit einer schönen Frau',
              ],
              [
                'Fem. weich (-я)',
                '-ей / -ею',
                'земля → земл+ёй',
                'землёй',
                'под землёй — unter der Erde',
              ],
              ['Fem. (-ь)', '-ью', 'ночь → ноч+ью', 'ночью', 'ночью — nachts / bei Nacht'],
              [
                'Neutrum hart (-о)',
                '-ом',
                'окно → окн+ом',
                'окном',
                'за окном — hinter dem Fenster',
              ],
              [
                'Neutrum weich (-е)',
                '-ем',
                'море → мор+ем',
                'морем',
                'за морем — überseeisch / jenseits des Meeres',
              ],
              [
                'Plural (hart)',
                '-ами',
                'столы → стол+ами',
                'столами',
                'между столами — zwischen den Tischen',
              ],
              [
                'Plural (weich)',
                '-ями',
                'моря → мор+ями',
                'морями',
                'над морями — über den Meeren',
              ],
            ],
          },
          bullets: [
            '**Maskulin & Neutrum (Hartstamm)** — -ОМ: стол→столом, окно→окном',
            '**Maskulin & Neutrum (Weichstamm)** — -ЕМ/-ЁМ: музей→музеем, море→морем',
            '**Feminin -а** — -ОЙ: женщина→женщиной',
            '**Feminin -я** — -ЕЙ: земля→землёй',
            '**Feminin -ь** — -ЬЮ: ночь→ночью (einzigartig für den Instrumental!)',
            '**Plural (Hartstamm)** — -АМИ: столы→столами',
            '**Plural (Weichstamm)** — -ЯМИ: моря→морями',
          ],
        },
        {
          h2: 'Russische Instrumental-Endungen — Adjektive',
          content:
            'Adjektive stimmen mit ihrem Substantiv in Genus, Numerus und Fall überein.\n\nIm Instrumental sind die Endungen **charakteristisch und konsistent**:',
          table: {
            caption: 'Adjektiv-Instrumental-Endungen',
            boldColumnIndices: [1, 2],
            headers: ['Genus/Numerus', 'Endung', 'Adj.-Form', 'Vollständige Phrase', 'Bedeutung'],
            rows: [
              [
                'Mask./Neutrum hart',
                '-ым',
                'новый → новым',
                'новым другом',
                'mit einem neuen Freund',
              ],
              ['Mask./Neutrum weich', '-им', 'синий → синим', 'синим морем', 'mit dem blauen Meer'],
              [
                'Fem. hart',
                '-ой / -ою',
                'красивая → красивой',
                'с красивой девушкой',
                'mit einem schönen Mädchen',
              ],
              ['Fem. weich', '-ей', 'летняя → летней', 'летней ночью', 'in einer Sommernacht'],
              [
                'Plural alle Genera',
                '-ыми / -ими',
                'новые → новыми',
                'новыми словами',
                'mit neuen Wörtern',
              ],
            ],
          },
          bullets: [
            '**Vollständiges Phrasenbeispiel:** Я горжусь умным сыном — Ich bin stolz auf meinen intelligenten Sohn. (умным = mask. Instr.-Adj.; сыном = mask. Instr.-Substantiv)',
          ],
        },
        {
          h2: 'Berufe und Rollen mit dem Instrumental',
          content:
            'Eine der charakteristischsten Verwendungen des russischen Instrumentals ist die Angabe von **Beruf, Rolle oder Status** einer Person – besonders nach den Verben **быть** (sein), **стать** (werden), **работать** (arbeiten als) und **назначить** (ernennen).\n\nIm Deutschen sagen wir „Er ist Arzt". Im Russischen steht das Prädikatnomen im Instrumental: **Он был врачом** (Er war Arzt – Instrumental erforderlich).',
          subsections: [
            {
              h3: 'Präsens vs. Vergangenheit/Zukunft-Regel',
              content: '',
              bullets: [
                '**Präsens** mit weggelassenem быть: Nominativ ist üblich (Он — врач. / Она — учитель.)',
                '**Vergangenheit** (был/была): Instrumental ist **erforderlich** (Он был врачом. / Она была учителем.)',
                '**Zukunft** (будет): Instrumental ist **erforderlich** (Он будет врачом.)',
                'Nach **стать**: immer Instrumental (Она стала врачом.)',
                'Nach **работать**: immer Instrumental (Он работает врачом.)',
              ],
            },
          ],
          table: {
            caption: 'Berufe mit Instrumental',
            boldColumnIndices: [1],
            headers: ['Beruf (Nominativ)', 'Russischer Satz', 'Übersetzung', 'Grammatikhinweis'],
            rows: [
              ['врач (Arzt)', 'Он работает врачом.', 'Er arbeitet als Arzt.', 'Mask. → -ом'],
              [
                'учитель (Lehrer)',
                'Она работает учительницей.',
                'Sie arbeitet als Lehrerin.',
                'Fem. Beruf → -ей',
              ],
              [
                'инженер (Ingenieur)',
                'Мой брат — инженером.',
                'Mein Bruder ist Ingenieur.',
                'Prädikat mit быть → Instrumental',
              ],
              [
                'переводчик (Übersetzer)',
                'Она стала переводчиком.',
                'Sie wurde Übersetzerin.',
                'Стать + Instrumental',
              ],
              [
                'президент (Präsident)',
                'Он был президентом.',
                'Er war Präsident.',
                'Быть in Vergangenheit + Instrumental',
              ],
              [
                'директор (Direktor)',
                'Её назначили директором.',
                'Sie wurde zur Direktorin ernannt.',
                'Назначить + Instrumental',
              ],
            ],
          },
        },
        {
          h2: 'С + Instrumental: Wie man „mit" auf Russisch sagt',
          content:
            'Die Präposition **с** (mit) gefolgt vom Instrumental ist eine der häufigsten Konstruktionen im Russischen.\n\nSie drückt **Begleitung** aus – etwas gemeinsam mit jemandem oder etwas tun.',
          subsections: [
            {
              h3: 'Beispiele',
              content:
                'Я иду с другом. — Ich gehe mit einem Freund. | Выпей чай с лимоном. — Trink Tee mit Zitrone. | Мы живём с родителями. — Wir wohnen bei unseren Eltern.\n\nКофе с молоком. — Kaffee mit Milch. | Бутерброд с сыром. — Ein Sandwich mit Käse.',
            },
            {
              h3: 'С vs. СО — wann welche Form',
              content: '',
              bullets: [
                '**С** ist die Standardform: с другом, с мамой, с молоком',
                '**СО** wird vor Konsonantenclustern verwendet (besonders mit с/з/ш): со мной, со временем, со вкусом',
                'Auch: со мной (Instr.) vs. с тобой (Instr.) vs. с ним/с ней/с ними (N-Regel bei Präpositionen)',
              ],
            },
          ],
          bullets: [
            '**Das с + Instrumental „Zutaten"-Muster:** Russisch verwendet с + Instrumental für Essen und Getränke: суп с грибами — Pilzsuppe | пицца с сыром — Käsepizza | чай с лимоном и мёдом — Tee mit Zitrone und Honig',
          ],
        },
        {
          h2: 'Russische Instrumental-Präpositionen — Vollständige Referenz',
          content:
            'Acht wichtige russische Präpositionen verlangen den Instrumental. Die meisten drücken **räumliche Position** aus – wo sich etwas in Relation zu etwas anderem befindet.\n\n**⚠️ Zweikasus-Präpositionen:** За, под, перед, над können Instrumental ODER Akkusativ nehmen. **Instrumental** = statische Position (wo etwas IST): за столом, под столом. **Akkusativ** = Bewegung zu (wohin etwas GEHT): сесть за стол, положить под стол. Merkhilfe: **Instrumental = Ich bin schon DORT. Akkusativ = Ich gehe DORTHIN.**',
          table: {
            caption: '8 Präpositionen mit Instrumental',
            boldColumnIndices: [0],
            headers: [
              'Präp.',
              'Bedeutung',
              'Mit Substantiv',
              'Vollständiges Beispiel + Übersetzung',
            ],
            rows: [
              [
                'с',
                'mit / zusammen mit',
                'с другом, с молоком',
                'Я иду с другом. — Ich gehe mit einem Freund.',
              ],
              ['со', 'mit (vor Clustern)', 'со мной, со временем', 'Иди со мной! — Komm mit mir!'],
              [
                'за',
                'hinter / an (Position)',
                'за столом, за дверью',
                'Он сидит за столом. — Er sitzt am Tisch.',
              ],
              [
                'перед',
                'vor / vor (Position)',
                'перед домом, перед сном',
                'Стой перед домом. — Steh vor dem Haus.',
              ],
              [
                'над',
                'über',
                'над городом, над столом',
                'Самолёт летит над городом. — Das Flugzeug fliegt über der Stadt.',
              ],
              [
                'под',
                'unter (Position)',
                'под столом, под землёй',
                'Кот под столом. — Die Katze ist unter dem Tisch.',
              ],
              [
                'между',
                'zwischen',
                'между домами, между нами',
                'Это между нами. — Das bleibt unter uns.',
              ],
              [
                'рядом с',
                'neben',
                'рядом с домом',
                'Кафе рядом с метро. — Das Café ist neben der U-Bahn.',
              ],
            ],
          },
        },
        {
          h2: 'Zeitausdrücke mit dem Instrumental',
          content:
            'Russisch verwendet den Instrumental für viele Zeitadverbien – besonders für **Tageszeiten** und **Jahreszeiten**. Diese sind extrem häufig in der Alltagssprache und lohnen sich auswendig zu lernen.\n\nEs sind technisch Instrumentalformen von Substantiven: утро → утром (Morgen → morgens), вечер → вечером, ночь → ночью (beachten Sie die -ЬЮ-Endung!), лето → летом, зима → зимой, осень → осенью.',
          table: {
            caption: 'Zeitausdrücke im Instrumental',
            boldColumnIndices: [0],
            headers: ['Russische Ausdrücke', 'Beispielsatz + Übersetzung'],
            rows: [
              ['утром, вечером, ночью', 'Утром я пью кофе. — Morgens trinke ich Kaffee.'],
              ['весной, летом, осенью, зимой', 'Летом жарко. — Im Sommer ist es heiß.'],
              ['днём, ночью', 'Он работает ночью. — Er arbeitet nachts.'],
              [
                'годом раньше / позже',
                'Годом раньше он уехал. — Ein Jahr früher ist er weggezogen.',
              ],
            ],
          },
          bullets: [
            '**Feste Formen zum Auswendiglernen:** утром, днём, вечером, ночью | весной, летом, осенью, зимой',
          ],
        },
        {
          h2: '15 wichtige Verben, die den Instrumental verlangen',
          content:
            'Eine bedeutende Gruppe russischer Verben nimmt ihr Objekt im **Instrumental**, nicht im Akkusativ.\n\nDas sind meist **reflexive Verben** (-ся-Endung), die Engagement, Leidenschaft oder Einstellung zu etwas ausdrücken:',
          table: {
            caption: '15 Verben mit Instrumental',
            boldColumnIndices: [0],
            headers: ['Verb', 'Beispiel', 'Übersetzung', 'Hinweis'],
            rows: [
              [
                'заниматься',
                'Я занимаюсь русским языком.',
                'Ich lerne Russisch.',
                'Reflexives Verb des Engagements',
              ],
              [
                'интересоваться',
                'Она интересуется историей.',
                'Sie interessiert sich für Geschichte.',
                'Objekt des Interesses',
              ],
              ['гордиться', 'Мы гордимся тобой.', 'Wir sind stolz auf dich.', 'Objekt des Stolzes'],
              [
                'восхищаться',
                'Он восхищается закатом.',
                'Er bewundert den Sonnenuntergang.',
                'Objekt der Bewunderung',
              ],
              [
                'увлекаться',
                'Он увлекается музыкой.',
                'Er ist begeistert von Musik.',
                'Leidenschaft / Hobby',
              ],
              [
                'пользоваться',
                'Я пользуюсь словарём.',
                'Ich benutze ein Wörterbuch.',
                'Werkzeug oder Ressource',
              ],
              [
                'владеть',
                'Она владеет тремя языками.',
                'Sie spricht drei Sprachen.',
                'Beherrschung / Besitz',
              ],
              [
                'управлять',
                'Он управляет машиной.',
                'Er fährt ein Auto.',
                'Kontrolle eines Fahrzeugs',
              ],
              [
                'являться',
                'Москва является столицей.',
                'Moskau ist die Hauptstadt.',
                'Formell = быть',
              ],
              ['служить', 'Это служит примером.', 'Das dient als Beispiel.', 'Rolle / Funktion'],
              ['стать', 'Она стала врачом.', 'Sie wurde Ärztin.', 'Zustandsänderung → Beruf'],
              ['быть', 'Он был студентом.', 'Er war Student.', 'Vergangenheit/Zukunft „sein"'],
              [
                'называть',
                'Все называют его гением.',
                'Alle nennen ihn ein Genie.',
                'Benennen / Etikettieren',
              ],
              [
                'считать',
                'Я считаю его другом.',
                'Ich halte ihn für einen Freund.',
                'Meinung / Urteil',
              ],
              [
                'махать',
                'Она машет рукой.',
                'Sie winkt mit der Hand.',
                'Körperteil bei der Handlung',
              ],
            ],
          },
        },
        {
          h2: '30 echte russische Instrumental-Beispiele',
          content:
            'Hier sind **30 authentische Sätze**, die jede wichtige Verwendung des Instrumentals demonstrieren. **1–5:** Instrument/Werkzeug | **6–10:** Berufe | **11–14:** С + Begleitung | **15–20:** Räumliche Präpositionen | **21–23:** Zeitausdrücke | **24–30:** Verben mit Instrumental.',
          table: {
            caption: '30 Beispiele nach Verwendung gruppiert',
            boldColumnIndices: [1],
            headers: ['#', 'Russischer Satz', 'Transkription', 'Übersetzung & Hinweise'],
            rows: [
              [
                '1',
                'Он пишет ручкой.',
                'On pishet ruchkoy.',
                'Er schreibt mit dem Stift. (ручка → ручкой)',
              ],
              [
                '2',
                'Я режу хлеб ножом.',
                'Ya rezhu khleb nozhom.',
                'Ich schneide Brot mit dem Messer.',
              ],
              ['3', 'Мы едем поездом.', 'My yedyom poyezdom.', 'Wir fahren mit dem Zug.'],
              [
                '4',
                'Она рисует карандашом.',
                'Ona risuyet karandashom.',
                'Sie zeichnet mit dem Bleistift.',
              ],
              [
                '5',
                'Открой дверь ключом.',
                'Otkroy dver klyuchom.',
                'Öffne die Tür mit dem Schlüssel.',
              ],
              ['6', 'Он работает врачом.', 'On rabotayet vrachom.', 'Er arbeitet als Arzt.'],
              ['7', 'Она стала учительницей.', 'Ona stala uchitelnitsyey.', 'Sie wurde Lehrerin.'],
              [
                '8',
                'Мой отец был инженером.',
                'Moy otets byl inzhenyerom.',
                'Mein Vater war Ingenieur.',
              ],
              [
                '9',
                'Его назначили директором.',
                'Yego naznachili direktorom.',
                'Er wurde zum Direktor ernannt.',
              ],
              [
                '10',
                'Я хочу стать космонавтом.',
                'Ya khochu stat kosmonavtom.',
                'Ich möchte Kosmonaut werden.',
              ],
              ['11', 'Я иду с другом.', 'Ya idu s drugom.', 'Ich gehe mit einem Freund.'],
              ['12', 'Он пришёл с женой.', 'On prishol s zhonoy.', 'Er kam mit seiner Frau.'],
              ['13', 'Выпей кофе с молоком.', 'Vypey kofe s molokom.', 'Trink Kaffee mit Milch.'],
              [
                '14',
                'Мы живём с родителями.',
                'My zhivyom s roditelyami.',
                'Wir wohnen bei unseren Eltern.',
              ],
              [
                '15',
                'Книга лежит под лампой.',
                'Kniga lezhit pod lampoy.',
                'Das Buch liegt unter der Lampe. (под + Instr.)',
              ],
              ['16', 'Они сидят за столом.', 'Oni sidyat za stolom.', 'Sie sitzen am Tisch.'],
              [
                '17',
                'Самолёт летит над облаками.',
                'Samolyot letit nad oblakami.',
                'Das Flugzeug fliegt über den Wolken.',
              ],
              [
                '18',
                'Дом стоит перед лесом.',
                'Dom stoit pered lesom.',
                'Das Haus steht vor dem Wald.',
              ],
              [
                '19',
                'Мы договорились между собой.',
                'My dogovorilis mezhdu soboy.',
                'Wir haben untereinander vereinbart.',
              ],
              [
                '20',
                'Кафе рядом с банком.',
                'Kafe ryadom s bankom.',
                'Das Café ist neben der Bank.',
              ],
              [
                '21',
                'Утром я бегаю в парке.',
                'Utrom ya begayu v parke.',
                'Morgens jogge ich im Park.',
              ],
              [
                '22',
                'Летом мы ездим на море.',
                'Letom my yezdim na more.',
                'Im Sommer fahren wir ans Meer.',
              ],
              ['23', 'Ночью город красив.', 'Nochyu gorod krasiv.', 'Nachts ist die Stadt schön.'],
              ['24', 'Я занимаюсь спортом.', 'Ya zanimayus sportom.', 'Ich treibe Sport.'],
              [
                '25',
                'Она гордится сыном.',
                'Ona gorditsya synom.',
                'Sie ist stolz auf ihren Sohn.',
              ],
              [
                '26',
                'Мы восхищаемся закатом.',
                'My voskhishchaemsa zakatom.',
                'Wir bewundern den Sonnenuntergang.',
              ],
              [
                '27',
                'Он увлекается музыкой.',
                'On uvlekayetsya muzykoy.',
                'Er ist begeistert von Musik.',
              ],
              [
                '28',
                'Пахнет свежей травой.',
                'Pakhnet svezhey travoy.',
                'Es riecht nach frischem Gras.',
              ],
              [
                '29',
                'Она машет рукой на прощание.',
                'Ona mashet rukoy na proshchaniye.',
                'Sie winkt zum Abschied mit der Hand.',
              ],
              [
                '30',
                'Он стал известным писателем.',
                'On stal izvestnym pisatelem.',
                'Er wurde ein berühmter Schriftsteller.',
              ],
            ],
          },
        },
        {
          h2: 'Top 5 Instrumental-Fehler (und wie man sie behebt)',
          bullets: [
            '**Nominativ für Beruf nach был/стала** — Она была учитель ✗ → Она была учителем ✓ (Vergangenheit von быть verlangt Instrumental)',
            '**-ЬЮ für Femininum -ь vergessen** — ночь → ночью ✓ (die -ЬЮ-Endung ist einzigartig)',
            '**Falscher räumlicher Fall** — Он за стол ✗ → Он за столом ✓ (statische Position → Instrumental)',
            '**Adjektiv-Kongruenz vergessen** — горжусь умный сын ✗ → горжусь умным сыном ✓ (Substantiv und Adj. im Instrumental)',
            '**Akkusativ mit заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓ (заниматься verlangt immer Instrumental)',
          ],
        },
      ],
      conclusion:
        'Der russische Instrumental ist weniger einschüchternd, als sein Ruf vermuten lässt. Seine Endungen sind regelmäßig, seine Verwendungen logisch.\n\nSobald Sie die Schlüsselmuster lernen – Instrumente, Begleitung, Berufe, räumliche Präpositionen und Zeitausdrücke – wird er Ihnen natürlich überall im Russischen begegnen.',
      conclusionBullets: [
        '**Substantiv-Endungen:** mask./neutr. -ОМ/-ЕМ | fem. -ОЙ/-ЕЙ | fem. -ь → -ЬЮ | Plural -АМИ/-ЯМИ',
        '**С + Instrumental** = „mit jemandem/etwas"',
        '**Berufe/Rollen** nach arbeiten, стать, быть (Vergangenheit/Zukunft) → immer Instrumental',
        '**Zeit:** утром, вечером, ночью, летом, зимой, осенью',
        '**Positionspräpositionen:** за/перед/над/под/между + Instrumental (statisch)',
        '**Verben:** заниматься, гордиться, интересоваться, восхищаться + Instrumental',
      ],
      conclusionOutro: 'Machen Sie mit unserer Russisch-Grammatik-Serie weiter:',
      ctaText: 'Russischen Instrumental mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wofür wird der russische Instrumental verwendet?',
          answer:
            'Der russische Instrumental wird verwendet für: das **Instrument oder Mittel**, mit dem eine Handlung ausgeführt wird (писать ручкой), **Begleitung** mit с (с другом), **Beruf oder Rolle** nach быть/стать/работать (работать врачом), **Zeitausdrücke** (утром, летом, ночью), **räumliche Positionen** mit Präpositionen за/перед/над/под/между und mit reflexiven Verben wie заниматься, гордиться, интересоваться.',
        },
        {
          question: 'Wie sagt man Berufe auf Russisch?',
          answer:
            'Verwenden Sie den **Instrumental** des Berufssubstantivs nach dem jeweiligen Verb: работать + Instrumental (работает врачом), стать + Instrumental (стала учителем), быть in Vergangenheit/Zukunft + Instrumental (был инженером). Im Präsens mit weggelassenem быть ist auch der Nominativ akzeptabel: Он — врач.',
        },
        {
          question: 'Wie verwendet man с + Instrumental im Russischen?',
          answer:
            '**С + Instrumental** drückt Begleitung aus – etwas mit jemandem tun oder etwas beschreiben, das mit etwas anderem kommt. Beispiele: Я иду с другом, Кофе с молоком, Мы живём с родителями. Vor Konsonantenclustern wird с zu со: со мной, со временем.',
        },
        {
          question:
            'Was ist der Unterschied zwischen Instrumental und Akkusativ bei Positionspräpositionen?',
          answer:
            'Präpositionen wie за, под, перед, над können **Instrumental** oder **Akkusativ** nehmen. **Instrumental** = statische Position (wo etwas IST): книга под столом. **Akkusativ** = Bewegung zu: положи книгу под стол. Instrumental = Ich bin schon DORT. Akkusativ = Ich gehe DORTHIN.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          'Russischer Instrumental: Wann man ihn verwendet und warum er einfacher ist als gedacht',
        description:
          'Vollständiger Leitfaden zum russischen Instrumental: Substantivendungen, Berufe, с + Instrumental, Präpositionen, Zeitausdrücke, 15 Verben, 30 Beispiele.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
        },
        keywords:
          'Russischer Instrumental, Russische Instrumental-Endungen, с + Instrumental Russisch, Russische Instrumental-Präpositionen',
      },
      tableAccentVariant: 'instrumental',
    },
    pl_pl: {
      slug: 'russian-instrumental-case',
      title: 'Rosyjski narzędnik: Kiedy go używać i dlaczego jest prostszy niż myślisz',
      metaTitle:
        'Rosyjski narzędnik: Końcówki, zawody, с + narzędnik, 30 przykładów | Russian Cases with Anna',
      metaDescription:
        'Pełny przewodnik po rosyjskim narzędniku: końcówki rzeczowników i przymiotników, zawody (быть/стать/работать), с + narzędnik, przyimki przestrzenne, wyrażenia czasu.',
      keywords: [
        'rosyjski narzędnik',
        'końcówki narzędnika rosyjskiego',
        'с + narzędnik rosyjski',
        'rosyjskie przyimki narzędnika',
        'rosyjski narzędnik zawody',
      ],
      h1: 'Rosyjski narzędnik: Kiedy go używać i dlaczego jest prostszy niż myślisz',
      heroImage: {
        src: '/articles/free-russian-lesson-instrumental-case.jpg',
        alt: 'Darmowa lekcja rosyjskiego o narzędniku: zawody i с + narzędnik',
        width: 1200,
        height: 630,
      },
      intro:
        'Rosyjski narzędnik ma opinię jednego z najbardziej onieśmielających przypadków. Ale ma jedne z najbardziej **regularnych końcówek** w rosyjskim – a gdy zrozumiesz jego główne zastosowania, stanie się jednym z najbardziej logicznych.',
      whatYouLearn: [
        'Czym jest narzędnik i jego **6 głównych zastosowań**',
        '**Końcówki** narzędnika dla rzeczowników',
        '**Zawody i role** z narzędnikiem (работать врачом, стать учителем)',
        '**С + narzędnik** – jak powiedzieć „z" po rosyjsku',
        'Wszystkie **przyimki** wymagające narzędnika (за, перед, над, под, между)',
        '**Wyrażenia czasu** (утром, летом, ночью)',
        '**15 czasowników** z narzędnikiem',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjski narzędnik na telefonie',
        description:
          'Nasza aplikacja ćwiczy wszystkie 6 rosyjskich przypadków – ze szczególnym naciskiem na zawody, с + narzędnik i przyimki przestrzenne. Na Android i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Pełny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rosyjski dopełniacz' },
        { href: '/learn/articles/russian-accusative-case', label: 'Rosyjski biernik' },
        { href: '/learn/articles/russian-dative-case', label: 'Rosyjski celownik' },
      ],
      sections: [
        {
          h2: 'Szybka odpowiedź',
          content:
            'Narzędnik odpowiada na **Кем?** (Kim?) i **Чем?** (Czym?). Służy do narzędzia, towarzystwa (с), zawodów po быть/стать oraz po przyimkach за, перед, над, под, между.',
        },
        {
          h2: 'Top 5 błędów narzędnika (i jak je naprawić)',
          bullets: [
            '**Mianownik dla zawodu po был/стала** — Она была учитель ✗ → Она была учителем ✓',
            '**Zapomnieć -ЬЮ dla fem. -ь** — ночь → ночью ✓',
            '**Zły przypadek przestrzenny** — Он за стол ✗ → Он за столом ✓',
            '**Zapomnieć o zgodności przymiotnika** — горжусь умный сын ✗ → горжусь умным сыном ✓',
            '**Biernik z заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓',
          ],
        },
      ],
      conclusion:
        'Rosyjski narzędnik jest mniej onieśmielający niż sugeruje jego reputacja. Gdy nauczysz się wzorców – narzędzie, towarzystwo, zawody, przyimki przestrzenne, wyrażenia czasu – pojawi się naturalnie wszędzie.',
      conclusionOutro: 'Kontynuuj z naszą serią gramatyki rosyjskiej:',
      ctaText: 'Ćwicz rosyjski narzędnik z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Do czego służy narzędnik w rosyjskim?',
          answer:
            'Narzędnik służy do **narzędzia** (писать ручкой), **towarzystwa** ze с (с другом), **zawodu** po быть/стать/работать (работать врачом), **wyrażeń czasu** (утром, летом), **pozycji** po за/перед/над/под oraz z czasownikami jak заниматься, гордиться.',
        },
        {
          question: 'Jak powiedzieć zawody po rosyjsku?',
          answer:
            'Użyj **narzędnika** rzeczownika zawodu po czasowniku: работать + narzędnik (работает врачом), стать + narzędnik (стала учителем), быть w czasie przeszłym/przyszłym + narzędnik (был инженером).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjski narzędnik: Kiedy go używać i dlaczego jest prostszy niż myślisz',
        description: 'Pełny przewodnik po rosyjskim narzędniku: końcówki, zawody, с + narzędnik.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
        },
      },
      tableAccentVariant: 'instrumental',
    },
    tr_tr: {
      slug: 'russian-instrumental-case',
      title: 'Rusça enstrumental: Ne zaman kullanılır ve neden düşündüğünüzden kolay',
      metaTitle: 'Rusça enstrumental: Kurallar, ekler ve 30 örnek | Russian Cases with Anna',
      metaDescription:
        'Rusça enstrumental rehberi: isim ekleri, meslekler, с + enstrumental, edatlar, zaman ifadeleri, 15 fiil, 30 örnek.',
      keywords: [
        'Rusça enstrumental',
        'Rusça enstrumental ekleri',
        'с + enstrumental Rusça',
        'Rusça enstrumental edatları',
      ],
      h1: 'Rusça enstrumental: Ne zaman kullanılır ve neden düşündüğünüzden kolay',
      heroImage: {
        src: '/articles/free-russian-lesson-instrumental-case.jpg',
        alt: 'Ücretsiz Rusça enstrumental dersi: araç, meslek ve с ile',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça enstrumental itibarının önerdiğinden daha az göz korkutucudur. Ekleri düzenlidir, kullanımları mantıklıdır. Ana kalıpları öğrendiğinizde – araçlar, birliktelik, meslekler, mekânsal edatlar ve zaman ifadeleri – Rusçada her yerde doğal karşınıza çıkar.',
      whatYouLearn: [
        'Rusça enstrumental nedir ve **5 ana kullanımı**',
        '**İsim ekleri**: mask./nötr -ОМ/-ЕМ | dişil -ОЙ/-ЕЙ | dişil -ь → -ЬЮ | çoğul -АМИ/-ЯМИ',
        '**С + enstrumental** = "biriyle/bir şeyle"',
        '**Meslekler/roller** работать, стать, быть sonrası → her zaman enstrumental',
        '**Zaman**: утром, вечером, ночью, летом, зимой, осенью',
        '**Konum edatları**: за/перед/над/под/между + enstrumental (statik)',
        '**Fiiller**: заниматься, гордиться, интересоваться, восхищаться + enstrumental',
      ],
      leadMagnetCta: {
        title: 'Rusça enstrumentali uygulamamızla pratik edin',
        description: 'Mobil uygulamamız 6 Rusça halin hepsini çalıştırır. Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve bugün pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Rusça hal ekleri' },
        { href: '/learn/articles/russian-dative-case', label: 'Rusça datif' },
      ],
      sections: [
        {
          h2: 'Top 5 enstrumental hatası (ve nasıl düzeltilir)',
          bullets: [
            '**был/стала sonrası meslekte nominatif** — Она была учитель ✗ → Она была учителем ✓',
            '**Dişil -ь için -ЬЮ unutmak** — ночь → ночью ✓',
            '**Yanlış mekânsal hal** — Он за стол ✗ → Он за столом ✓',
            '**Sıfat uyumunu unutmak** — горжусь умный сын ✗ → горжусь умным сыном ✓',
            '**заниматься ile akkusatif** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓',
          ],
        },
      ],
      conclusion:
        'Rusça enstrumental itibarının önerdiğinden daha az göz korkutucudur. Ekleri düzenlidir, kullanımları mantıklıdır.',
      conclusionOutro: 'Rusça gramer serimizle devam edin:',
      ctaText: 'Rusça enstrumentali uygulamamızla pratik edin',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusçada enstrumental ne için kullanılır?',
          answer:
            'Enstrumental **araç veya vasıta** (писать ручкой), **с ile birliktelik** (с другом), **meslek veya rol** (работать врачом), **zaman ifadeleri** (утром, летом), **konum edatları** (за столом) ve заниматься, гордиться gibi fiiller için kullanılır.',
        },
        {
          question: 'Rusçada meslekler nasıl söylenir?',
          answer:
            'Meslek ismini **enstrumental** kullanın: работать + enstrumental (работает врачом), стать + enstrumental (стала учителем), быть geçmiş/gelecekte + enstrumental (был инженером).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça enstrumental: Ne zaman kullanılır ve neden düşündüğünüzden kolay',
        description: 'Rusça enstrumental rehberi: ekler, meslekler, с, edatlar, 30 örnek.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
        },
        keywords: 'Rusça enstrumental, Rusça enstrumental ekleri, с + enstrumental Rusça',
      },
      tableAccentVariant: 'instrumental',
    },
    ru_ru: {
      slug: 'russian-instrumental-case',
      title: 'Творительный падеж: когда использовать и почему он проще, чем кажется',
      metaTitle:
        'Творительный падеж: окончания, профессии, с + творительный, 30 примеров | Russian Cases with Anna',
      metaDescription:
        'Руководство по творительному падежу: окончания существительных и прилагательных, профессии, с + творительный, пространственные предлоги, выражения времени.',
      keywords: [
        'творительный падеж',
        'окончания творительного падежа',
        'с творительный падеж',
        'профессии творительный падеж',
        'предлоги творительный падеж',
      ],
      h1: 'Творительный падеж: когда использовать и почему он проще, чем кажется',
      heroImage: {
        src: '/articles/free-russian-lesson-instrumental-case.jpg',
        alt: 'Урок русского языка: творительный падеж — профессии и с + творительный',
        width: 1200,
        height: 630,
      },
      intro:
        'Творительный падеж имеет репутацию одного из самых сложных. Но у него одни из самых **регулярных окончаний** в русском — и как только вы поймёте основные употребления, он станет одним из самых логичных.',
      whatYouLearn: [
        'Что такое творительный падеж и 6 основных употреблений',
        'Окончания творительного для существительных',
        'Профессии и роли (работать врачом, стать учителем)',
        'С + творительный — как сказать «с» по-русски',
        'Предлоги за, перед, над, под, между',
        'Выражения времени (утром, летом, ночью)',
      ],
      leadMagnetCta: {
        title: 'Тренируйте творительный падеж в приложении',
        description:
          'Наше приложение тренирует все 6 падежей — с фокусом на профессии, с + творительный и пространственные предлоги. На Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        { href: '/learn/articles/russian-genitive-case', label: 'Родительный падеж' },
        { href: '/learn/articles/russian-accusative-case', label: 'Винительный падеж' },
        { href: '/learn/articles/russian-dative-case', label: 'Дательный падеж' },
      ],
      sections: [
        {
          h2: 'Краткий ответ',
          content:
            'Творительный отвечает на **Кем?** и **Чем?**. Используется для орудия действия, совместности (с), профессий после быть/стать и после предлогов за, перед, над, под, между.',
        },
        {
          h2: 'Топ-5 ошибок в творительном падеже',
          bullets: [
            '**Именительный для профессии после был/стала** — Она была учитель ✗ → Она была учителем ✓',
            '**Забыть -ью для жен. -ь** — ночь → ночью ✓',
            '**Неправильный пространственный падеж** — Он за стол ✗ → Он за столом ✓',
            '**Согласование прилагательного** — горжусь умный сын ✗ → горжусь умным сыном ✓',
            '**Винительный с заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓',
          ],
        },
      ],
      conclusion:
        'Творительный падеж проще, чем кажется. Овладейте ключевыми паттернами — орудие, совместность, профессии, предлоги, время — и он будет встречаться естественно.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать творительный падеж в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Для чего используется творительный падеж?',
          answer:
            'Творительный используется для **орудия** (писать ручкой), **совместности** с с (с другом), **профессии** после работать/стать/быть (работать врачом), **выражений времени** (утром, летом), **позиции** с за/перед/над/под и с глаголами заниматься, гордиться.',
        },
        {
          question: 'Как сказать профессию по-русски?',
          answer:
            'Используйте **творительный падеж** существительного профессии после глагола: работать + творительный (работает врачом), стать + творительный (стала учителем), быть в прошлом/будущем + творительный (был инженером).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Творительный падеж: когда использовать и почему он проще, чем кажется',
        description: 'Руководство по творительному падежу: окончания, профессии, с + творительный.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
        },
        keywords: 'творительный падеж, окончания творительного падежа, с творительный падеж',
      },
      tableAccentVariant: 'instrumental',
    },
  },
  'russian-prepositional-case': {
    fr_fr: {
      slug: 'russian-prepositional-case',
      title: 'Prépositif russe : le seul cas qui ne se tient jamais seul',
      metaTitle:
        'Prépositif russe : terminaisons, в vs на, о чём et 30 exemples | Russian Cases with Anna',
      metaDescription:
        'Guide complet du prépositif russe : lieu, thème (о чём), tableau des terminaisons, règle -ИИ, formes locatives en -У, в vs на, о/об, 30 exemples authentiques.',
      keywords: [
        'prépositif russe',
        'terminaisons prépositif russe',
        'в на о prépositif russe',
        'grammaire lieu russe',
        'о чём grammaire russe',
      ],
      h1: 'Prépositif russe : le seul cas qui ne se tient jamais seul',
      heroImage: {
        src: '/articles/free-russian-lesson-prepositional-case.jpg',
        alt: 'Leçon gratuite de russe sur le prépositif : lieu, thème et в/на/о',
        width: 1200,
        height: 630,
      },
      intro:
        "Le prépositif russe a une particularité que nul autre cas ne peut revendiquer : c'est le **seul cas russe** qui n'est jamais utilisé sans préposition. Chaque autre cas peut apparaître seul – un nom au nominatif est simplement le sujet, un nom à l'instrumental peut être un outil. Mais un nom au prépositif ? Il est toujours attaché à **в**, **на**, **о**, **при** ou **по**.\n\nCela en fait paradoxalement l'un des plus faciles à maîtriser : si vous voyez l'une de ces cinq prépositions, vous savez que le prépositif suit.",
      whatYouLearn: [
        'Ce qui rend le prépositif **unique** parmi les 6 cas russes',
        'Ses **3 usages principaux** : lieu, thème et conditions',
        '**Tableau complet** des terminaisons pour les noms',
        'La terminaison spéciale **-ИИ** pour les noms en -ий/-ие/-ия',
        'Le **résidu locatif** : terminaisons irrégulières en **-У** (в лесу, на полу, в году)',
        '**В vs НА** – quand utiliser chacune pour le lieu',
        '**О/ОБ** – la préposition « sur/à propos de »',
        '**О чём?** – comment demander « de quoi ? » en russe',
      ],
      leadMagnetCta: {
        title: "S'entraîner à la grammaire du lieu russe et au prépositif",
        description:
          'Notre app mobile entraîne les 6 cas russes – dont в/на lieu et о + thème – avec des phrases authentiques. Sur Android et iOS.',
        ctaText: "Télécharger l'app et commencer à s'entraîner",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/lessons/russian-prepositions-cases', label: 'Prépositions russes et cas' },
      ],
      sections: [
        {
          h2: 'Réponse rapide',
          content:
            'Le prépositif répond à **О ком?** (De qui ?) et **О чём?** (De quoi ?) – et aussi à **Где?** (Où ?) pour le lieu. Il sert pour le **lieu** (в школе), le **thème** (о работе) et les **conditions** (при Сталине).',
        },
        {
          h2: 'Top 5 erreurs de prépositif (et comment les corriger)',
          bullets: [
            '**Oublier -ИИ pour les noms en -ий/-ие/-ия** — в здание ✗ → в здании ✓',
            "**Utiliser l'accusatif pour le lieu** — Я в школу сейчас ✗ → Я в школе сейчас ✓",
            '**В au lieu de НА** — в работе ✗ → на работе ✓',
            '**Oublier la forme locative en -У** — в лесе ✗ → в лесу ✓',
            '**О devant voyelle sans ОБ** — о этом ✗ → об этом ✓',
          ],
        },
      ],
      conclusion:
        'Le prépositif russe est le seul cas qui exige toujours une préposition – ses terminaisons sont régulières et ses usages clairs.',
      conclusionIntro:
        'Le prépositif russe est sans doute le cas le plus accessible pour débuter – ses terminaisons sont régulières, il apparaît toujours avec une préposition, et ses usages sont clairs.',
      conclusionBullets: [
        '**Prépositif singulier :** presque tout → **-Е**',
        '**Exception -ИИ :** noms en -ий/-ие/-ия',
        '**Locatif -У :** в лесу, на полу, в году',
        '**Pluriel :** -АХ / -ЯХ',
        '**В** = dans | **НА** = sur | **О/ОБ** = à propos de',
      ],
      conclusionOutro: 'Entraînez-vous au prépositif avec notre app mobile.',
      ctaText: "S'entraîner aux cas russes avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: "Pourquoi l'appelle-t-on « prépositif » ?",
          answer:
            "Le prépositif russe tire son nom du fait qu'il est le **seul cas** qui exige toujours une préposition. Aucun autre cas russe n'a cette propriété.",
        },
        {
          question: 'Quelle est la différence entre в et на pour le lieu ?',
          answer:
            '**В** (dans) pour les espaces fermés : pays, villes, bâtiments. **НА** (sur/à) pour les surfaces, espaces ouverts et certaines institutions (на работе, на почте, на вокзале).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Prépositif russe : le seul cas qui ne se tient jamais seul',
        description:
          'Guide complet du prépositif russe : lieu, thème (о чём), terminaisons, règle -ИИ, в vs на.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
        },
      },
      tableAccentVariant: 'prepositional',
    },
    de_de: {
      slug: 'russian-prepositional-case',
      title: 'Russischer Präpositiv: Der einzige Fall, der niemals allein steht',
      metaTitle:
        'Russischer Präpositiv: Endungen, в vs на, о чём & 30 Beispiele | Russian Cases with Anna',
      metaDescription:
        'Vollständiger Leitfaden zum russischen Präpositiv: Ort, Thema (о чём), Endungstabelle, -ИИ-Regel, lokativische -У-Formen, в vs на, о/об, 10 Verben + о, 30 echte Beispiele mit Transkription.',
      keywords: [
        'Russischer Präpositiv',
        'Russische Präpositiv-Endungen',
        'в на о Präpositiv Russisch',
        'Russische Ortsgrammatik',
        'о чём Russische Grammatik',
      ],
      h1: 'Russischer Präpositiv: Der einzige Fall, der niemals allein steht',
      heroImage: {
        src: '/articles/free-russian-lesson-prepositional-case.jpg',
        alt: 'Kostenlose Russisch-Lektion zum Präpositiv: Ort, Thema und в/на/о',
        width: 1200,
        height: 630,
      },
      intro:
        'Der russische Präpositiv hat eine Besonderheit, die kein anderer Fall für sich beanspruchen kann: Er ist der **einzige russische Fall**, der nie ohne Präposition verwendet wird. Jeder andere Fall kann eigenständig in einem Satz erscheinen. Aber ein Substantiv im Präpositiv steht immer mit **в**, **на**, **о**, **при** oder **по**.\n\nDadurch ist er paradoxerweise einer der leichtesten zu meistern: Wenn Sie eine dieser fünf Präpositionen sehen, wissen Sie, dass der Präpositiv folgt.',
      whatYouLearn: [
        'Was den Präpositiv **einzigartig** unter den 6 russischen Fällen macht',
        'Seine **3 Kernverwendungen**: Ort, Thema und Bedingungen',
        'Vollständige **Endungstabelle** für Substantive',
        'Die besondere **-ИИ**-Endung für Substantive auf -ий/-ие/-ия',
        '**Lokativ-Rest**: unregelmäßige **-У**-Endungen (в лесу, на полу, в году)',
        '**В vs. НА** — wann welche für den Ort',
        '**О/ОБ** — die „über"-Präposition',
        '**О чём?** — wie man „worüber?" auf Russisch fragt',
        '**10 wichtige Verben** mit о + Präpositiv',
        '**30 echte russische** Beispielsätze',
      ],
      leadMagnetCta: {
        title: 'Russische Ortsgrammatik und den Präpositiv trainieren',
        description:
          'Unsere mobile App übt alle 6 russischen Fälle – inkl. в/на-Ort und о + Thema – mit echten Sätzen. Für Android und iOS.',
        ctaText: 'App herunterladen und heute mit dem Üben beginnen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen: Die ultimative Spickzettel-Tabelle',
        },
        {
          href: '/learn/lessons/russian-prepositions-cases',
          label: 'Russische Präpositionen und Fälle',
        },
      ],
      sections: [
        {
          h2: 'Kurze Antwort',
          content:
            'Der Präpositiv beantwortet **О ком?** (Über wen?) und **О чём?** (Über was?) – und auch **Где?** (Wo?) bei Ortsangaben. Er wird für **Ort** (в школе), **Thema** (о работе) und **Bedingungen** (при Сталине) verwendet.',
        },
        {
          h2: 'Top 5 Präpositiv-Fehler (und wie man sie behebt)',
          bullets: [
            '**-ИИ für -ий/-ие/-ия vergessen** — в здание ✗ → в здании ✓ | в Россие ✗ → в России ✓',
            '**Akkusativ für Ort verwenden** — Я в школу сейчас. ✗ → Я в школе сейчас. ✓',
            '**В statt НА** — в работе ✗ → на работе ✓ | в вокзале ✗ → на вокзале ✓',
            '**Lokativische -У-Form vergessen** — в лесе ✗ → в лесу ✓',
            '**О vor Vokal ohne ОБ** — о этом ✗ → об этом ✓',
          ],
        },
      ],
      conclusionIntro:
        'Der russische Präpositiv ist wohl der anfängerfreundlichste Fall – seine Endungen sind regelmäßig, er erscheint immer mit einer Präposition, und seine Verwendungen sind klar.',
      conclusionBullets: [
        '**Präpositiv Singular:** fast alles → **-Е**',
        '**Ausnahme -ИИ:** Substantive auf -ий/-ие/-ия',
        '**Lokativ -У:** в лесу, на полу, в году',
        '**Plural:** -АХ / -ЯХ',
        '**В** = in | **НА** = auf/an | **О/ОБ** = über',
      ],
      conclusion: '',
      conclusionOutro: 'Trainieren Sie den Präpositiv mit unserer mobilen App.',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Warum heißt er „Präpositiv"?',
          answer:
            'Der russische Präpositiv ist der **einzige Fall**, der immer eine Präposition verlangt. Kein anderer russischer Fall hat diese Eigenschaft.',
        },
        {
          question: 'Was ist der Unterschied zwischen в und на für den Ort?',
          answer:
            '**В** (in) für geschlossene Räume: Länder, Städte, Gebäude. **НА** (auf/an) für Oberflächen, offene Räume und bestimmte Institutionen (на работе, на почте, на вокзале).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russischer Präpositiv: Der einzige Fall, der niemals allein steht',
        description:
          'Vollständiger Leitfaden zum russischen Präpositiv: Ort, Thema (о чём), Endungen, -ИИ-Regel, в vs на, о/об.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
        },
        keywords:
          'Russischer Präpositiv, Russische Präpositiv-Endungen, в на о Präpositiv Russisch',
      },
      tableAccentVariant: 'prepositional',
    },
    tr_tr: {
      slug: 'russian-prepositional-case',
      title: 'Rusça lokatif: Tek başına asla durmayan tek hal',
      metaTitle: 'Rusça lokatif: Ekler, в vs на, о чём ve 30 örnek | Russian Cases with Anna',
      metaDescription:
        'Rusça lokatif rehberi: yer, tema (о чём), ek tablosu, -ИИ kuralı, в vs на, о/об, 30 örnek.',
      keywords: [
        'Rusça lokatif',
        'Rusça lokatif ekleri',
        'в на о lokatif Rusça',
        'Rusça yer grameri',
        'о чём Rusça gramer',
      ],
      h1: 'Rusça lokatif: Tek başına asla durmayan tek hal',
      heroImage: {
        src: '/articles/free-russian-lesson-prepositional-case.jpg',
        alt: 'Ücretsiz Rusça lokatif dersi: yer, tema ve в/на/о',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça lokatifin diğer hiçbir halin sahip olmadığı bir özelliği vardır: Edatsız asla kullanılmayan **tek Rusça haldir**. Her diğer hal cümlede tek başına gelebilir. Ama lokatifte bir isim her zaman **в**, **на**, **о**, **при** veya **по** ile gelir. Bu paradoksal olarak en kolay öğrenileceklerden biri yapar: Bu beş edattan birini gördüğünüzde lokatif geldiğini bilirsiniz.',
      whatYouLearn: [
        'Lokatifin 6 Rusça hal arasında **benzersiz** olması',
        '**3 ana kullanım**: yer, tema ve koşullar',
        '**Tam ek tablosu** isimler için',
        '**-ий/-ие/-ия** isimleri için özel **-ИИ** eki',
        '**Lokatif -У** kalıntısı (в лесу, на полу, в году)',
        '**В vs НА** — yer için hangisi',
        '**О/ОБ** — "hakkında" edatı',
      ],
      leadMagnetCta: {
        title: 'Rusça yer grameri ve lokatifi pratik edin',
        description:
          'Mobil uygulamamız 6 Rusça halin hepsini – в/на yer ve о + tema dahil – gerçek cümlelerle çalıştırır. Android ve iOS.',
        ctaText: 'Uygulamayı indirin ve bugün pratik yapmaya başlayın',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Rusça hal ekleri' },
        {
          href: '/learn/articles/russian-prepositions-and-cases',
          label: 'Rusça edatlar ve haller',
        },
      ],
      sections: [
        {
          h2: 'Kısa cevap',
          content:
            'Lokatif **О ком?** (Kim hakkında?) ve **О чём?** (Ne hakkında?) sorularına – ve yer ifadelerinde **Где?** (Nerede?) sorusuna cevap verir. **Yer** (в школе), **tema** (о работе) ve **koşullar** (при Сталине) için kullanılır.',
        },
        {
          h2: 'Top 5 lokatif hatası (ve nasıl düzeltilir)',
          bullets: [
            '**-ий/-ие/-ия için -ИИ unutmak** — в здание ✗ → в здании ✓ | в Россие ✗ → в России ✓',
            '**Yer için akkusatif kullanmak** — Я в школу сейчас. ✗ → Я в школе сейчас. ✓',
            '**В yerine НА** — в работе ✗ → на работе ✓ | в вокзале ✗ → на вокзале ✓',
            '**Lokatif -У formunu unutmak** — в лесе ✗ → в лесу ✓',
            '**Vokal öncesi О için ОБ unutmak** — о этом ✗ → об этом ✓',
          ],
        },
      ],
      conclusion:
        'Rusça lokatif muhtemelen en başlangıç dostu haldir – ekleri düzenlidir, her zaman edatla gelir, kullanımları nettir.',
      conclusionOutro: 'Lokatifi mobil uygulamamızla pratik edin.',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Neden "lokatif" (prepositiv) deniyor?',
          answer:
            'Rusça lokatif her zaman bir edat gerektiren **tek haldir**. Başka hiçbir Rusça halin bu özelliği yoktur.',
        },
        {
          question: 'Yer için в ve на arasındaki fark nedir?',
          answer:
            '**В** (içinde) kapalı mekânlar için: ülkeler, şehirler, binalar. **НА** (üzerinde/yanında) yüzeyler, açık alanlar ve belirli kurumlar için (на работе, на почте, на вокзале).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça lokatif: Tek başına asla durmayan tek hal',
        description: 'Rusça lokatif rehberi: yer, tema (о чём), ekler, в vs на.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
        },
        keywords: 'Rusça lokatif, Rusça lokatif ekleri, в на о lokatif Rusça',
      },
      tableAccentVariant: 'prepositional',
    },
    pl_pl: {
      slug: 'russian-prepositional-case',
      title: 'Rosyjski miejscownik: Jedyny przypadek, który nigdy nie stoi sam',
      metaTitle:
        'Rosyjski miejscownik: Końcówki, в vs на, o czym i 30 przykładów | Russian Cases with Anna',
      metaDescription:
        'Kompletny przewodnik po rosyjskim miejscowniku: miejsce, temat (о чём), tabela końcówek, zasada -ИИ, formy lokatywne na -У, в vs на, о/об, 30 autentycznych przykładów.',
      keywords: [
        'Rosyjski miejscownik',
        'Końcówki miejscownika rosyjskiego',
        'в на о miejscownik rosyjski',
        'Gramatyka miejsca rosyjskiego',
        'о чём gramatyka rosyjska',
      ],
      h1: 'Rosyjski miejscownik: Jedyny przypadek, który nigdy nie stoi sam',
      heroImage: {
        src: '/articles/free-russian-lesson-prepositional-case.jpg',
        alt: 'Darmowa lekcja rosyjskiego o miejscowniku: miejsce, temat i в/на/о',
        width: 1200,
        height: 630,
      },
      intro:
        'Rosyjski miejscownik ma szczególność, której żaden inny przypadek nie może się pochwalić: to **jedyny rosyjski przypadek**, który nigdy nie jest używany bez przyimka. Każdy inny przypadek może występować sam — rzeczownik w mianowniku to po prostu podmiot, rzeczownik w narzędniku może być narzędziem. Ale rzeczownik w miejscowniku? Zawsze jest związany z **в**, **на**, **о**, **при** lub **по**.\n\nParadoksalnie czyni go to jednym z najłatwiejszych do opanowania: jeśli widzisz jeden z tych pięciu przyimków, wiesz, że po nim idzie miejscownik.',
      whatYouLearn: [
        'Co czyni miejscownik **wyjątkowym** spośród 6 rosyjskich przypadków',
        'Jego **3 główne zastosowania**: miejsce, temat i warunki',
        '**Pełna tabela** końcówek dla rzeczowników',
        'Specjalna końcówka **-ИИ** dla rzeczowników na -ий/-ие/-ия',
        '**Pozostałość lokatywna**: nieregularne końcówki na **-У** (в лесу, на полу, в году)',
        '**В vs НА** — kiedy którego użyć',
        '**30 autentycznych przykładów**',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjski miejscownik na telefonie',
        description:
          'Nasza aplikacja mobilna ćwiczy wszystkie 6 rosyjskich przypadków — ze szczególnym naciskiem na в/на/о i miejscownik. Na Android i iOS.',
        ctaText: 'Pobierz aplikację i zacznij ćwiczyć',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Kompletny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rosyjski dopełniacz' },
        { href: '/learn/articles/russian-accusative-case', label: 'Rosyjski biernik' },
        { href: '/learn/articles/russian-dative-case', label: 'Rosyjski celownik' },
      ],
      sections: [
        {
          h2: 'Szybka odpowiedź',
          content:
            'Miejscownik odpowiada na **О ком?** (O kim?) i **О чём?** (O czym?). Jest używany wyłącznie z przyimkami: **в**, **на** (miejsce), **о/об** (temat), **при** (warunek). To jedyny przypadek, który nigdy nie występuje sam.',
        },
      ],
      conclusion:
        'Miejscownik jest jednym z najłatwiejszych do rozpoznania: jeśli widzisz в, на, о, при lub по — wiesz, że to miejscownik.',
      conclusionOutro: 'Kontynuuj z naszą serią gramatyki rosyjskiej:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Do czego służy miejscownik w rosyjskim?',
          answer:
            'Miejscownik służy do **miejsca** (в школе, на работе), **tematu** (о погоде, об этом) i **warunków** (при родителях). Zawsze wymaga przyimka.',
        },
        {
          question: 'Kiedy użyć в, a kiedy на?',
          answer:
            '**В** — do wnętrza, zamkniętych przestrzeni (в школе, в городе). **На** — na powierzchni, otwartych przestrzeniach, wydarzeniach (на работе, на концерте). Są wyjątki, które trzeba zapamiętać.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjski miejscownik: Jedyny przypadek, który nigdy nie stoi sam',
        description:
          'Kompletny przewodnik po rosyjskim miejscowniku: miejsce, temat (о чём), końcówki, zasada -ИИ, в vs на, о/об.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
        },
        keywords:
          'Rosyjski miejscownik, końcówki miejscownika rosyjskiego, в на о miejscownik rosyjski',
      },
      tableAccentVariant: 'prepositional',
    },
    ru_ru: {
      slug: 'russian-prepositional-case',
      title: 'Предложный падеж: единственный падеж, который никогда не стоит один',
      metaTitle:
        'Предложный падеж: окончания, в vs на, о чём и 30 примеров | Russian Cases with Anna',
      metaDescription:
        'Руководство по предложному падежу: место, тема (о чём), таблица окончаний, правило -ИИ, формы на -У, в vs на, о/об.',
      keywords: [
        'предложный падеж',
        'окончания предложного падежа',
        'в на о предложный падеж',
        'грамматика места русский',
        'о чём грамматика',
      ],
      h1: 'Предложный падеж: единственный падеж, который никогда не стоит один',
      heroImage: {
        src: '/articles/free-russian-lesson-prepositional-case.jpg',
        alt: 'Урок русского языка: предложный падеж — место, тема и в/на/о',
        width: 1200,
        height: 630,
      },
      intro:
        'Предложный падеж имеет особенность, которой не может похвастаться ни один другой: это **единственный падеж**, который никогда не используется без предлога. Существительное в предложном падеже всегда употребляется с **в**, **на**, **о**, **при** или **по**.\n\nПарадоксально, но это делает его одним из самых лёгких для освоения: увидев один из этих предлогов, вы знаете, что далее следует предложный падеж.',
      whatYouLearn: [
        'Что делает предложный падеж уникальным среди 6 падежей',
        '3 основных употребления: место, тема и условия',
        'Полная таблица окончаний для существительных',
        'Особое окончание -ИИ для существительных на -ий/-ие/-ия',
        'Локативные формы на -У (в лесу, на полу, в году)',
        'В vs НА — когда что использовать для места',
        'О/ОБ — предлог «о/об»',
      ],
      leadMagnetCta: {
        title: 'Тренируйте предложный падеж и грамматику места',
        description:
          'Наше приложение тренирует все 6 падежей — включая в/на место и о + тема. На Android и iOS.',
        ctaText: 'Скачать приложение и начать тренировку',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        {
          href: '/learn/lessons/russian-prepositions-cases',
          label: 'Русские предлоги и падежи',
        },
      ],
      sections: [
        {
          h2: 'Краткий ответ',
          content:
            'Предложный отвечает на **О ком?** и **О чём?** — а также на **Где?** для места. Используется для **места** (в школе), **темы** (о работе) и **условий** (при Сталине).',
        },
        {
          h2: 'Топ-5 ошибок в предложном падеже',
          bullets: [
            '**Забыть -ИИ для -ий/-ие/-ия** — в здание ✗ → в здании ✓ | в Россие ✗ → в России ✓',
            '**Винительный для места** — Я в школу сейчас ✗ → Я в школе сейчас ✓',
            '**В вместо НА** — в работе ✗ → на работе ✓ | в вокзале ✗ → на вокзале ✓',
            '**Забыть локативную форму на -У** — в лесе ✗ → в лесу ✓',
            '**О перед гласной без ОБ** — о этом ✗ → об этом ✓',
          ],
        },
      ],
      conclusion:
        'Предложный падеж — единственный, который всегда требует предлога. Его окончания регулярны, употребления понятны.',
      conclusionOutro: 'Тренируйте предложный падеж в нашем приложении.',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Почему он называется «предложный»?',
          answer:
            'Предложный падеж — **единственный падеж**, который всегда требует предлога. Ни один другой русский падеж не имеет этого свойства.',
        },
        {
          question: 'В чём разница между в и на для места?',
          answer:
            '**В** — для замкнутых пространств: страны, города, здания. **НА** — для поверхностей, открытых пространств и некоторых учреждений (на работе, на почте, на вокзале).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Предложный падеж: единственный падеж, который никогда не стоит один',
        description: 'Руководство по предложному падежу: место, тема (о чём), окончания, в vs на.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/russian-prepositional-case',
        },
        keywords: 'предложный падеж, окончания предложного падежа, в на о предложный падеж',
      },
      tableAccentVariant: 'prepositional',
    },
  },
  'how-to-practice-russian-cases': {
    fr_fr: {
      slug: 'how-to-practice-russian-cases',
      title: "Comment s'entraîner aux cas russes : 5 méthodes éprouvées",
      metaTitle:
        "Comment s'entraîner aux cas russes : 5 méthodes pour qu'ils restent enfin | Russian Cases with Anna",
      metaDescription:
        'Techniques fondées sur la recherche pour mémoriser les déclinaisons russes – SRS, exercices, lecture active, écriture et parole. Plan sur 12 semaines.',
      keywords: [
        "s'entraîner cas russes",
        'exercices cas russes',
        'pratique déclinaison russe',
        'meilleure app cas russes',
      ],
      h1: "Comment s'entraîner aux cas russes : 5 méthodes éprouvées pour qu'ils restent enfin",
      heroImage: {
        src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.jpg',
        alt: 'Meilleures apps de grammaire russe pour apprendre les cas',
        width: 1200,
        height: 630,
      },
      intro:
        "Vous comprenez comment fonctionnent les cas russes – en théorie. Et puis tout s'écroule. C'est l'**écart savoir-faire**. Ce guide vous donne **5 méthodes éprouvées** pour vous entraîner aux cas russes de manière efficace.",
      whatYouLearn: [
        'Pourquoi les cas russes ne restent pas avec les méthodes traditionnelles',
        "5 méthodes éprouvées pour s'entraîner efficacement",
        "Un plan d'étude sur 12 semaines",
        'Le rôle de la répétition espacée',
        'Comment utiliser une app de cas russes',
        'Erreurs de pratique courantes',
      ],
      leadMagnetCta: {
        title: "Commencer à s'entraîner aux cas russes aujourd'hui",
        description:
          "Téléchargez notre app de cas russes – l'outil le plus ciblé pour s'entraîner aux 6 cas. Sur Android et iOS.",
        ctaText: "Télécharger l'app →",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/articles/russian-accusative-case', label: 'Accusatif russe' },
        { href: '/learn/articles/russian-dative-case', label: 'Datif russe' },
      ],
      sections: [],
      conclusion:
        'Les cas russes deviennent automatiques grâce à une **pratique délibérée, variée et régulière** avec un vrai retour. Les cinq méthodes – répétition espacée, exercices par cas, lecture active, écriture et parole avec correction – couvrent tous les aspects.',
      conclusionOutro: 'Poursuivez avec le reste de notre série de grammaire russe :',
      ctaText: "S'entraîner aux cas russes avec notre app",
      ctaHref: '/',
      faq: [
        {
          question: 'Combien de temps pour apprendre les cas russes ?',
          answer:
            'Avec 20–30 minutes de pratique quotidienne, la plupart développent une bonne maîtrise en **3–6 mois**. La maîtrise complète prend typiquement **12–24 mois**.',
        },
        {
          question: 'Quelle est la meilleure façon de mémoriser les terminaisons ?',
          answer:
            '**Répétition espacée combinée à des exercices de phrases**. Apprenez les terminaisons dans le contexte de phrases réelles, pas de façon isolée.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "Comment s'entraîner aux cas russes : 5 méthodes éprouvées",
        description: 'Techniques fondées sur la recherche pour mémoriser les déclinaisons russes.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
        },
      },
    },
    de_de: {
      slug: 'how-to-practice-russian-cases',
      title: 'Wie man russische Fälle übt: 5 bewährte Methoden',
      metaTitle:
        'Wie man russische Fälle übt: 5 bewährte Methoden, damit sie endlich sitzen | Russian Cases with Anna',
      metaDescription:
        'Evidenzbasierte Techniken zum Einprägen russischer Deklinationen – SRS, gezielte Übungen, aktives Lesen, Schreiben & Sprechen. 12-Wochen-Plan.',
      keywords: [
        'Russische Fälle üben',
        'Russische Fälle Übungen',
        'Russische Deklination trainieren',
        'Beste App Russische Fälle lernen',
      ],
      h1: 'Wie man russische Fälle übt: 5 bewährte Methoden, damit sie endlich sitzen',
      heroImage: {
        src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.jpg',
        alt: 'Beste Russisch-Grammatik-Apps zum Lernen von Fällen',
        width: 1200,
        height: 630,
      },
      intro:
        'Sie verstehen, wie russische Fälle funktionieren – in der Theorie. Und dann bricht alles zusammen. Das ist die **Wissens-Tun-Lücke**. Dieser Leitfaden gibt Ihnen **5 bewährte Methoden**, russische Fälle so zu üben, dass es wirklich funktioniert.',
      whatYouLearn: [
        'Warum russische Fälle mit traditionellen Methoden nicht haften bleiben',
        '5 bewährte Methoden zum effektiven Üben',
        'Einen 12-Wochen-Lernplan',
        'Die Rolle der Intervallwiederholung',
        'Wie man eine Russisch-Fälle-App nutzt',
        'Häufige Übungsfehler',
      ],
      leadMagnetCta: {
        title: 'Heute mit dem Üben russischer Fälle beginnen',
        description:
          'Laden Sie unsere Russisch-Fälle-App herunter – das fokussierteste Tool zum Üben aller 6 russischen Fälle. Für Android und iOS.',
        ctaText: 'App herunterladen →',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden zu den russischen Fällen',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen',
        },
        { href: '/learn/articles/russian-accusative-case', label: 'Russischer Akkusativ' },
        { href: '/learn/articles/russian-dative-case', label: 'Russischer Dativ' },
      ],
      sections: [],
      conclusion:
        'Russische Fälle werden automatisch durch **gezielte, abwechslungsreiche, konsequente Übung** mit echtem Feedback. Die fünf Methoden – Intervallwiederholung, fallenspezifische Übungen, aktives Lesen, Schreibübungen und Sprechen mit Korrektur – decken jeden Aspekt ab.',
      conclusionOutro: 'Machen Sie mit unserer Russisch-Grammatik-Serie weiter:',
      ctaText: 'Russische Fälle mit unserer App üben',
      ctaHref: '/',
      faq: [
        {
          question: 'Wie lange dauert es, russische Fälle zu lernen?',
          answer:
            'Bei täglicher Übung (20–30 Min.) entwickeln die meisten innerhalb von **3–6 Monaten** solide Kenntnisse. Vollständige Beherrschung dauert typischerweise **12–24 Monate**.',
        },
        {
          question: 'Was ist der beste Weg, Fallendungen einzuprägen?',
          answer:
            '**Intervallwiederholung kombiniert mit Satzübungen**. Lernen Sie Endungen im Kontext echter Sätze, nicht isoliert.',
        },
        {
          question: 'Welchen Fall soll ich zuerst lernen?',
          answer:
            'Nominativ, dann Akkusativ, dann Genitiv. Addieren Sie Dativ, Instrumental und Präpositiv, sobald die Basis solide wird.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Wie man russische Fälle übt: 5 bewährte Methoden',
        description: 'Evidenzbasierte Techniken zum Einprägen russischer Deklinationen.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
        },
      },
    },
    tr_tr: {
      slug: 'how-to-practice-russian-cases',
      title: 'Rusça halleri nasıl pratik edilir: 5 kanıtlanmış yöntem',
      metaTitle:
        'Rusça halleri nasıl pratik edilir: Sonunda oturması için 5 kanıtlanmış yöntem | Russian Cases with Anna',
      metaDescription:
        'Rusça çekimleri ezberlemek için kanıta dayalı teknikler — SRS, alıştırmalar, aktif okuma, yazma ve konuşma. 12 haftalık plan.',
      keywords: [
        'Rusça haller pratik',
        'Rusça haller alıştırmaları',
        'Rusça çekim antrenmanı',
        'Rusça haller öğrenme en iyi uygulama',
      ],
      h1: 'Rusça halleri nasıl pratik edilir: Sonunda oturması için 5 kanıtlanmış yöntem',
      heroImage: {
        src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.jpg',
        alt: 'Rusça haller öğrenmek için en iyi gramer uygulamaları',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusça hallerin nasıl çalıştığını anlıyorsunuz — teoride. Sonra her şey dağılıyor. Bu **bilgi-eylem boşluğudur**. Bu rehber size Rusça halleri **gerçekten işe yarayacak şekilde** pratik etmek için **5 kanıtlanmış yöntem** sunar.',
      whatYouLearn: [
        'Rusça hallerin geleneksel yöntemlerle neden kalıcı olmadığı',
        'Etkili pratik için 5 kanıtlanmış yöntem',
        '12 haftalık öğrenme planı',
        'Aralıklı tekrarın rolü',
        'Rusça haller uygulaması nasıl kullanılır',
        'Yaygın pratik hataları',
      ],
      leadMagnetCta: {
        title: 'Rusça haller pratiğine bugün başlayın',
        description:
          'Rusça haller uygulamamızı indirin — 6 Rusça halin hepsini pratik etmek için en odaklı araç. Android ve iOS.',
        ctaText: 'Uygulamayı indir →',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Rusça halleri: Kapsamlı rehber',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri',
        },
        { href: '/learn/articles/russian-accusative-case', label: 'Rusça akkusatif' },
        { href: '/learn/articles/russian-dative-case', label: 'Rusça datif' },
      ],
      sections: [],
      conclusion:
        'Rusça haller **hedefli, çeşitli, tutarlı pratik** ve gerçek geri bildirimle otomatik hale gelir. Beş yöntem — Aralıklı Tekrar, hale özel alıştırmalar, aktif okuma, yazma pratiği ve düzeltmeli konuşma — her yönü kapsar.',
      conclusionOutro: 'Rusça gramer serimizle devam edin:',
      ctaText: 'Rusça halleri uygulamamızla pratik yapın',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusça halleri öğrenmek ne kadar sürer?',
          answer:
            'Günlük pratikle (20–30 dk) çoğu **3–6 ay** içinde sağlam bilgi geliştirir. Tam hakimiyet genellikle **12–24 ay** sürer.',
        },
        {
          question: 'Hal eklerini ezberlemenin en iyi yolu nedir?',
          answer:
            '**Aralıklı Tekrar cümle alıştırmalarıyla birleştirildiğinde**. Ekleri gerçek cümlelerin bağlamında öğrenin, izole değil.',
        },
        {
          question: 'Önce hangi hali öğrenmeliyim?',
          answer:
            'İsim hali, sonra akkusatif, sonra genitif. Temel sağlamlaştıkça datif, enstrumental ve lokatif ekleyin.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça halleri nasıl pratik edilir: 5 kanıtlanmış yöntem',
        description: 'Rusça çekimleri ezberlemek için kanıta dayalı teknikler.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
        },
      },
    },
    pl_pl: {
      slug: 'how-to-practice-russian-cases',
      title: 'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod',
      metaTitle:
        'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod, by w końcu je opanować | Russian Cases with Anna',
      metaDescription:
        'Techniki oparte na dowodach do zapamiętywania rosyjskich deklinacji — SRS, ćwiczenia, aktywne czytanie, pisanie i mówienie. Plan na 12 tygodni.',
      keywords: [
        'ćwiczenie rosyjskich przypadków',
        'ćwiczenia rosyjskich przypadków',
        'trening deklinacji rosyjskiej',
        'najlepsza aplikacja do nauki rosyjskich przypadków',
      ],
      h1: 'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod, by w końcu je opanować',
      heroImage: {
        src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.jpg',
        alt: 'Najlepsze aplikacje do gramatyki rosyjskiej do nauki przypadków',
        width: 1200,
        height: 630,
      },
      intro:
        'Rozumiesz, jak działają rosyjskie przypadki — w teorii. A potem wszystko się sypie. To **luka między wiedzą a działaniem**. Ten przewodnik daje ci **5 sprawdzonych metod** ćwiczenia rosyjskich przypadków tak, by naprawdę działały.',
      whatYouLearn: [
        'Dlaczego rosyjskie przypadki nie utrwalają się przy tradycyjnych metodach',
        '5 sprawdzonych metod skutecznego ćwiczenia',
        'Plan nauki na 12 tygodni',
        'Rola powtórek rozłożonych',
        'Jak wykorzystać aplikację do rosyjskich przypadków',
        'Częste błędy w ćwiczeniach',
      ],
      leadMagnetCta: {
        title: 'Zacznij ćwiczyć rosyjskie przypadki dziś',
        description:
          'Pobierz naszą aplikację do rosyjskich przypadków — najbardziej ukierunkowane narzędzie do ćwiczenia wszystkich 6 przypadków. Na Android i iOS.',
        ctaText: 'Pobierz aplikację →',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Kompletny przewodnik po rosyjskich przypadkach',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        { href: '/learn/articles/russian-accusative-case', label: 'Rosyjski biernik' },
        { href: '/learn/articles/russian-dative-case', label: 'Rosyjski celownik' },
      ],
      sections: [],
      conclusion:
        'Rosyjskie przypadki stają się automatyczne dzięki **celowej, urozmaiconej, konsekwentnej praktyce** z prawdziwym feedbackiem. Pięć metod — powtórki rozłożone, ćwiczenia ukierunkowane na przypadki, aktywne czytanie, ćwiczenia pisania i mówienie z korektą — obejmują każdy aspekt.',
      conclusionOutro: 'Kontynuuj z naszą serią gramatyki rosyjskiej:',
      ctaText: 'Ćwicz rosyjskie przypadki z naszą aplikacją',
      ctaHref: '/',
      faq: [
        {
          question: 'Ile czasu zajmuje nauka rosyjskich przypadków?',
          answer:
            'Przy codziennej praktyce (20–30 min) większość osiąga solidną znajomość w **3–6 miesięcy**. Pełne opanowanie zwykle trwa **12–24 miesiące**.',
        },
        {
          question: 'Jaki jest najlepszy sposób na zapamiętanie końcówek przypadków?',
          answer:
            '**Powtórki rozłożone w połączeniu z ćwiczeniami na zdaniach**. Ucz się końcówek w kontekście prawdziwych zdań, nie w izolacji.',
        },
        {
          question: 'Który przypadek uczyć się najpierw?',
          answer:
            'Mianownik, potem biernik, potem dopełniacz. Dodawaj celownik, narzędnik i miejscownik, gdy baza stanie się solidna.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod',
        description: 'Techniki oparte na dowodach do zapamiętywania rosyjskich deklinacji.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
        },
      },
    },
    ru_ru: {
      slug: 'how-to-practice-russian-cases',
      title: 'Как практиковать русские падежи: 5 проверенных методов',
      metaTitle:
        'Как практиковать русские падежи: 5 методов, чтобы они наконец закрепились | Russian Cases with Anna',
      metaDescription:
        'Методы, основанные на исследованиях, для запоминания русских склонений — интервальное повторение, упражнения, активное чтение, письмо и речь. План на 12 недель.',
      keywords: [
        'практика русских падежей',
        'упражнения русских падежей',
        'тренировка склонений',
        'лучшее приложение русские падежи',
      ],
      h1: 'Как практиковать русские падежи: 5 проверенных методов, чтобы они наконец закрепились',
      heroImage: {
        src: '/articles/what-is-the-best-russian-grammar-app-to-learn-cases.jpg',
        alt: 'Лучшие приложения для изучения русских падежей',
        width: 1200,
        height: 630,
      },
      intro:
        'Вы понимаете, как работают русские падежи — в теории. А на практике всё рушится. Это **разрыв между знанием и действием**. Этот гид даёт **5 проверенных методов** практиковать русские падежи так, чтобы это действительно работало.',
      whatYouLearn: [
        'Почему падежи не закрепляются при традиционных методах',
        '5 проверенных методов для эффективной практики',
        '12-недельный план обучения',
        'Роль интервального повторения',
        'Как использовать приложение для падежей',
        'Частые ошибки при практике',
      ],
      leadMagnetCta: {
        title: 'Начните практиковать падежи сегодня',
        description:
          'Скачайте наше приложение — самый целенаправленный инструмент для практики всех 6 падежей. На Android и iOS.',
        ctaText: 'Скачать приложение →',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Полное руководство по падежам',
        },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        { href: '/learn/articles/russian-accusative-case', label: 'Винительный падеж' },
        { href: '/learn/articles/russian-dative-case', label: 'Дательный падеж' },
      ],
      sections: [],
      conclusion:
        'Русские падежи становятся автоматическими благодаря **целенаправленной, разнообразной, последовательной практике** с реальной обратной связью. Пять методов — интервальное повторение, упражнения по падежам, активное чтение, письменные упражнения и разговор с исправлением — охватывают каждый аспект.',
      conclusionOutro: 'Продолжайте изучать русскую грамматику:',
      ctaText: 'Тренировать падежи в нашем приложении',
      ctaHref: '/',
      faq: [
        {
          question: 'Сколько времени нужно, чтобы выучить русские падежи?',
          answer:
            'При ежедневной практике (20–30 мин) большинство достигает уверенного уровня за **3–6 месяцев**. Полное освоение обычно занимает **12–24 месяца**.',
        },
        {
          question: 'Как лучше всего запоминать окончания падежей?',
          answer:
            '**Интервальное повторение в сочетании с упражнениями на предложениях**. Учите окончания в контексте реальных фраз, а не изолированно.',
        },
        {
          question: 'Какой падеж учить первым?',
          answer:
            'Именительный, затем винительный, затем родительный. Добавляйте дательный, творительный и предложный по мере укрепления базы.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Как практиковать русские падежи: 5 проверенных методов',
        description: 'Методы для запоминания русских склонений, основанные на исследованиях.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/how-to-practice-russian-cases',
        },
      },
    },
  },
  'top-10-russian-case-mistakes': {
    fr_fr: {
      slug: 'top-10-russian-case-mistakes',
      title: 'Top 10 erreurs de cas russes (et comment les corriger)',
      metaTitle: 'Top 10 erreurs de cas russes | Améliorer sa grammaire | Russian Cases with Anna',
      metaDescription:
        'Les 10 erreurs de cas russes les plus fréquentes – analysées et corrigées. Faux vs juste, pourquoi chaque erreur se produit et comment la corriger durablement.',
      keywords: [
        'erreurs cas russes',
        'erreurs grammaire russe',
        'pourquoi les cas russes sont difficiles',
        'erreurs grammaire courantes russe',
      ],
      h1: 'Top 10 erreurs de cas russes (et comment les corriger)',
      heroImage: {
        src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.jpg',
        alt: 'Top erreurs de cas russes',
        width: 1200,
        height: 630,
      },
      intro:
        'Cet article recense les **10 erreurs de cas russes les plus fréquentes** – avec la forme incorrecte, la forme correcte et une explication claire du pourquoi et du comment les éviter durablement.',
      whatYouLearn: [
        '10 erreurs de cas russes les plus fréquentes avec faux vs juste',
        'Pourquoi chaque erreur se produit',
        'Comment corriger chaque erreur',
        '5 stratégies pratiques',
      ],
      tableAccentVariant: 'orange',
      leadMagnetCta: {
        title: 'Corriger vos erreurs de cas avec des exercices ciblés',
        description:
          "Notre app identifie vos points faibles et vous entraîne jusqu'à la maîtrise. Sur Android et iOS.",
        ctaText: "Télécharger l'app",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        {
          href: '/learn/articles/how-to-practice-russian-cases',
          label: "Comment s'entraîner aux cas russes",
        },
      ],
      sections: [],
      conclusionIntro:
        'Les erreurs de cas russes sont **prévisibles, diagnostiquables et corrigeables**. Identifiez vos erreurs, comprenez leurs causes et entraînez-vous aux bons schémas.',
      conclusionBullets: [],
      conclusion:
        'Corrigez vos erreurs de cas avec des exercices ciblés dans notre app. Sur Android et iOS.',
      ctaText: "Télécharger l'app",
      ctaHref: '/',
      faq: [
        {
          question: 'Pourquoi les cas russes sont-ils si difficiles ?',
          answer:
            "Le français a moins de cas et des règles différentes. L'intuition « quel cas convient ici ? » doit être reconstruite.",
        },
        {
          question: "Quelle est l'erreur de cas russe la plus fréquente ?",
          answer:
            "L'utilisation du nominatif après **нет** (Нет кот au lieu de Нет кота) et l'oubli de l'accusatif pour l'objet direct (Я вижу кот au lieu de кота).",
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 erreurs de cas russes (et comment les corriger)',
        description: 'Les 10 erreurs de cas russes les plus fréquentes – analysées et corrigées.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
        },
      },
    },
    de_de: {
      slug: 'top-10-russian-case-mistakes',
      title: 'Top 10 russische Fallfehler (und wie man sie behebt)',
      metaTitle: 'Top 10 russische Fallfehler | Grammatik verbessern | Russian Cases with Anna',
      metaDescription:
        'Die 10 häufigsten russischen Fallfehler – analysiert und behoben. Falsch vs. richtig, warum jeder Fehler passiert und wie man ihn behebt.',
      keywords: [
        'Russische Fallfehler',
        'Russische Grammatikfehler',
        'Warum sind russische Fälle schwer',
        'Häufige russische Grammatikfehler',
      ],
      h1: 'Top 10 russische Fallfehler (und wie man sie behebt)',
      heroImage: {
        src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.jpg',
        alt: 'Top russische Fallfehler',
        width: 1200,
        height: 630,
      },
      intro:
        'Dieser Artikel versammelt die **10 häufigsten russischen Fallfehler** – mit falscher Form, richtiger Form und Erklärung, warum sie passieren und wie man sie vermeidet.',
      whatYouLearn: [
        '10 häufigste russische Fallfehler mit falsch vs. richtig',
        'Warum jeder Fehler passiert',
        'Wie man jeden Fehler behebt',
        '5 praktische Strategien',
      ],
      tableAccentVariant: 'orange',
      leadMagnetCta: {
        title: 'Russische Fallfehler mit gezielten Übungen beheben',
        description:
          'Unsere App identifiziert Ihre Schwachstellen und übt sie zur Perfektion. Für Android und iOS.',
        ctaText: 'App herunterladen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen',
        },
        {
          href: '/learn/articles/how-to-practice-russian-cases',
          label: 'Wie man russische Fälle übt',
        },
      ],
      sections: [],
      conclusionIntro:
        'Russische Fallfehler sind **vorhersehbar, diagnostizierbar und behebbar**. Identifizieren Sie Ihre Fehler, verstehen Sie die Ursachen, und üben Sie die richtigen Muster.',
      conclusionBullets: [],
      conclusion:
        'Beheben Sie Ihre Fallfehler mit gezielten Übungen in unserer App. Für Android und iOS.',
      ctaText: 'App herunterladen',
      ctaHref: '/',
      faq: [
        {
          question: 'Warum sind russische Fälle so schwer?',
          answer:
            'Deutsch hat weniger Fälle und andere Regeln. Die Intuition „welcher Fall gehört hierhin?" muss neu aufgebaut werden.',
        },
        {
          question: 'Was ist der häufigste russische Fallfehler?',
          answer:
            'Die Verwendung des Nominativs nach **нет** (Нет кот statt Нет кота) und das Vergessen des Akkusativs beim direkten Objekt (Я вижу кот statt кота).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 russische Fallfehler (und wie man sie behebt)',
        description: 'Die 10 häufigsten russischen Fallfehler – analysiert und behoben.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
        },
      },
    },
    tr_tr: {
      slug: 'top-10-russian-case-mistakes',
      title: 'Rusça hallerde en sık yapılan 10 hata (ve nasıl düzeltilir)',
      metaTitle:
        'Rusça hallerde en sık yapılan 10 hata | Grameri iyileştirin | Russian Cases with Anna',
      metaDescription:
        'En sık yapılan 10 Rusça hal hatası — analiz edildi ve düzeltildi. Yanlış vs doğru, her hatanın neden olduğu ve nasıl kalıcı düzeltileceği.',
      keywords: [
        'Rusça hal hataları',
        'Rusça gramer hataları',
        'Rusça haller neden zor',
        'Yaygın Rusça gramer hataları',
      ],
      h1: 'Rusça hallerde en sık yapılan 10 hata (ve nasıl düzeltilir)',
      heroImage: {
        src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.jpg',
        alt: 'Rusça hal hataları',
        width: 1200,
        height: 630,
      },
      intro:
        'Bu makale **en sık yapılan 10 Rusça hal hatasını** toplar — yanlış form, doğru form ve neden oldukları, nasıl kaçınılacağı açıklamasıyla.',
      whatYouLearn: [
        'Yanlış vs doğru ile 10 en yaygın Rusça hal hatası',
        'Her hatanın neden olduğu',
        'Her hatanın nasıl düzeltileceği',
        '5 pratik strateji',
      ],
      tableAccentVariant: 'orange',
      leadMagnetCta: {
        title: 'Rusça hal hatalarını hedefli alıştırmalarla düzeltin',
        description:
          'Uygulamamız zayıf noktalarınızı belirler ve mükemmelliğe kadar pratik eder. Android ve iOS.',
        ctaText: 'Uygulamayı indir',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Kapsamlı rehber' },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri',
        },
        {
          href: '/learn/articles/how-to-practice-russian-cases',
          label: 'Rusça haller nasıl pratik edilir',
        },
      ],
      sections: [],
      conclusionIntro:
        'Rusça hal hataları **tahmin edilebilir, teşhis edilebilir ve düzeltilebilir**. Hatalarınızı belirleyin, nedenleri anlayın ve doğru kalıpları pratik edin.',
      conclusionBullets: [],
      conclusion:
        'Hal hatalarınızı uygulamamızdaki hedefli alıştırmalarla düzeltin. Android ve iOS.',
      ctaText: 'Uygulamayı indir',
      ctaHref: '/',
      faq: [
        {
          question: 'Rusça haller neden bu kadar zor?',
          answer:
            'Türkçe farklı kurallara sahip. "Hangi hal buraya ait?" sezgisi yeniden inşa edilmelidir.',
        },
        {
          question: 'En yaygın Rusça hal hatası nedir?',
          answer:
            '**нет** sonrasında isim halinin kullanılması (Нет кот yerine Нет кота) ve doğrudan nesnede akkusatifin unutulması (Я вижу кот yerine кота).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça hallerde en sık yapılan 10 hata (ve nasıl düzeltilir)',
        description: 'En sık yapılan 10 Rusça hal hatası — analiz edildi ve düzeltildi.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
        },
      },
    },
    pl_pl: {
      slug: 'top-10-russian-case-mistakes',
      title: 'Top 10 błędów w rosyjskich przypadkach (i jak je naprawić)',
      metaTitle:
        'Top 10 błędów w rosyjskich przypadkach | Popraw gramatykę | Russian Cases with Anna',
      metaDescription:
        '10 najczęstszych błędów w rosyjskich przypadkach — przeanalizowanych i naprawionych. Źle vs dobrze, dlaczego każdy błąd się pojawia i jak go trwale poprawić.',
      keywords: [
        'błędy w rosyjskich przypadkach',
        'błędy gramatyki rosyjskiej',
        'dlaczego rosyjskie przypadki są trudne',
        'częste błędy gramatyki rosyjskiej',
      ],
      h1: 'Top 10 błędów w rosyjskich przypadkach (i jak je naprawić)',
      heroImage: {
        src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.jpg',
        alt: 'Top błędy w rosyjskich przypadkach',
        width: 1200,
        height: 630,
      },
      intro:
        'Ten artykuł zbiera **10 najczęstszych błędów w rosyjskich przypadkach** — z formą błędną, poprawną i wyjaśnieniem, dlaczego się pojawiają i jak ich unikać.',
      whatYouLearn: [
        '10 najczęstszych błędów w rosyjskich przypadkach — źle vs dobrze',
        'Dlaczego każdy błąd się pojawia',
        'Jak naprawić każdy błąd',
        '5 praktycznych strategii',
      ],
      tableAccentVariant: 'orange',
      leadMagnetCta: {
        title: 'Napraw błędy w przypadkach dzięki celowym ćwiczeniom',
        description:
          'Nasza aplikacja identyfikuje twoje słabe punkty i ćwiczy je do perfekcji. Na Android i iOS.',
        ctaText: 'Pobierz aplikację',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Kompletny przewodnik' },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        {
          href: '/learn/articles/how-to-practice-russian-cases',
          label: 'Jak ćwiczyć rosyjskie przypadki',
        },
      ],
      sections: [],
      conclusionIntro:
        'Błędy w rosyjskich przypadkach są **przewidywalne, diagnozowalne i naprawialne**. Zidentyfikuj swoje błędy, zrozum przyczyny i ćwicz poprawne wzorce.',
      conclusionBullets: [],
      conclusion:
        'Napraw błędy w przypadkach dzięki celowym ćwiczeniom w naszej aplikacji. Na Android i iOS.',
      ctaText: 'Pobierz aplikację',
      ctaHref: '/',
      faq: [
        {
          question: 'Dlaczego rosyjskie przypadki są tak trudne?',
          answer:
            'Polski ma inne reguły. Intuicja „który przypadek pasuje tutaj?" musi być budowana od nowa.',
        },
        {
          question: 'Jaki jest najczęstszy błąd w rosyjskich przypadkach?',
          answer:
            'Używanie mianownika po **нет** (Нет кот zamiast Нет кота) i zapominanie o bierniku przy dopełnieniu bliższym (Я вижу кот zamiast кота).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 błędów w rosyjskich przypadkach (i jak je naprawić)',
        description:
          '10 najczęstszych błędów w rosyjskich przypadkach — przeanalizowanych i naprawionych.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
        },
      },
    },
    ru_ru: {
      slug: 'top-10-russian-case-mistakes',
      title: 'Топ-10 ошибок в русских падежах (и как их исправить)',
      metaTitle: 'Топ-10 ошибок в русских падежах | Улучшить грамматику | Russian Cases with Anna',
      metaDescription:
        '10 самых частых ошибок в русских падежах — разобраны и исправлены. Неправильно vs правильно, почему каждая ошибка возникает и как её исправить.',
      keywords: [
        'ошибки в русских падежах',
        'грамматические ошибки русский',
        'почему русские падежи сложны',
        'частые ошибки грамматики',
      ],
      h1: 'Топ-10 ошибок в русских падежах (и как их исправить)',
      heroImage: {
        src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.jpg',
        alt: 'Топ ошибок в русских падежах',
        width: 1200,
        height: 630,
      },
      intro:
        'Эта статья собирает **10 самых частых ошибок в русских падежах** — с неправильной формой, правильной формой и объяснением, почему они возникают и как их избежать.',
      whatYouLearn: [
        '10 самых частых ошибок — неправильно vs правильно',
        'Почему возникает каждая ошибка',
        'Как исправить каждую ошибку',
        '5 практических стратегий',
      ],
      tableAccentVariant: 'orange',
      leadMagnetCta: {
        title: 'Исправьте ошибки в падежах с целенаправленными упражнениями',
        description:
          'Наше приложение определяет ваши слабые места и отрабатывает их до совершенства. На Android и iOS.',
        ctaText: 'Скачать приложение',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Полное руководство' },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        {
          href: '/learn/articles/how-to-practice-russian-cases',
          label: 'Как практиковать русские падежи',
        },
      ],
      sections: [],
      conclusionIntro:
        'Ошибки в падежах **предсказуемы, диагностируемы и исправимы**. Определите свои ошибки, поймите причины и отработайте правильные паттерны.',
      conclusionBullets: [],
      conclusion:
        'Исправьте ошибки в падежах с целенаправленными упражнениями в нашем приложении. На Android и iOS.',
      ctaText: 'Скачать приложение',
      ctaHref: '/',
      faq: [
        {
          question: 'Почему русские падежи такие сложные?',
          answer:
            'В других языках меньше падежей и другие правила. Интуиция «какой падеж здесь нужен?» должна быть построена заново.',
        },
        {
          question: 'Какая самая частая ошибка в падежах?',
          answer:
            'Использование именительного после **нет** (Нет кот вместо Нет кота) и забывание винительного для прямого дополнения (Я вижу кот вместо кота).',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Топ-10 ошибок в русских падежах (и как их исправить)',
        description: '10 самых частых ошибок в русских падежах — разобраны и исправлены.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
        },
      },
    },
  },
  'russian-prepositions-and-cases': {
    fr_fr: {
      slug: 'russian-prepositions-and-cases',
      title: 'Prépositions russes et cas : quel cas pour quelle préposition ?',
      metaTitle: 'Prépositions russes et cas | Référence complète | Russian Cases with Anna',
      metaDescription:
        'La référence complète : chaque préposition russe associée à son cas requis. Tableau maître, règles à double cas.',
      keywords: [
        'prépositions russes cas',
        'prépositions russes génitif',
        'liste prépositions russes',
        'в на с по cas russe',
      ],
      h1: 'Prépositions russes et cas : quel cas pour quelle préposition ?',
      heroImage: {
        src: '/articles/russian-prepositions-case-grammar-reference.jpg',
        alt: 'Tableau de référence grammaire prépositions et cas russes',
        width: 1200,
        height: 630,
      },
      intro:
        "Une des **compétences les plus pratiques** en russe est de savoir **quel cas chaque préposition exige**. Une fois que vous savez que без exige toujours le génitif, que к exige toujours le datif, et que с peut prendre le génitif OU l'instrumental selon le sens – votre précision augmente fortement.",
      whatYouLearn: [
        'Tableau maître complet : chaque préposition associée à son cas',
        'Prépositions au génitif, datif, accusatif, instrumental et prépositif',
        'Prépositions à double cas (в/на/за/под)',
        'В vs НА expliqué',
      ],
      leadMagnetCta: {
        title: "S'entraîner aux prépositions et cas russes avec notre app",
        description: 'Exercices ciblés pour chaque paire préposition-cas – sur Android et iOS.',
        ctaText: "Télécharger l'app",
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Le guide complet des cas russes',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Terminaisons des cas russes',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Génitif russe' },
      ],
      tableAccentVariant: 'genitive',
      sections: [],
      conclusion:
        "Savoir quel cas chaque préposition exige est l'une des façons les plus efficaces d'améliorer votre précision grammaticale en russe.",
      ctaText: "Télécharger l'app",
      ctaHref: '/',
      faq: [
        {
          question: 'Quelles prépositions exigent le génitif ?',
          answer:
            "без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль et d'autres.",
        },
        {
          question: 'Quelle est la différence entre в + accusatif et в + prépositif ?',
          answer:
            '**в + accusatif** = direction (Я иду в школу). **в + prépositif** = lieu (Я в школе). Même chose pour на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Prépositions russes et cas : quel cas pour quelle préposition ?',
        description: 'La référence complète : chaque préposition russe associée à son cas.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
        },
      },
    },
    de_de: {
      slug: 'russian-prepositions-and-cases',
      title: 'Russische Präpositionen und Fälle: Welcher Fall bei welcher Präposition?',
      metaTitle:
        'Russische Präpositionen und Fälle | Vollständige Referenz | Russian Cases with Anna',
      metaDescription:
        'Die vollständige Referenz: jede russische Präposition ihrem verlangten Fall zugeordnet. Mastertabelle, Zweikasus-Regeln.',
      keywords: [
        'Russische Präpositionen Fälle',
        'Russische Präpositionen mit Genitiv',
        'Russische Präpositionen Liste',
        'в на с по russischer Fall',
      ],
      h1: 'Russische Präpositionen und Fälle: Welcher Fall bei welcher Präposition?',
      heroImage: {
        src: '/articles/russian-prepositions-case-grammar-reference.jpg',
        alt: 'Russische Präpositionen und Fall-Grammatik-Referenztabelle',
        width: 1200,
        height: 630,
      },
      intro:
        'Eine der **praktischsten Fähigkeiten** im Russischen ist zu wissen, **welchen Fall jede Präposition verlangt**. Sobald Sie wissen, dass без immer Genitiv verlangt, к immer Dativ, und с je nach Bedeutung Genitiv ODER Instrumental nehmen kann – steigt Ihre Genauigkeit dramatisch.',
      whatYouLearn: [
        'Vollständige Mastertabelle: jede Präposition ihrem Fall zugeordnet',
        'Genitiv-, Dativ-, Akkusativ-, Instrumental- und Präpositiv-Präpositionen',
        'Zweikasus-Präpositionen (в/на/за/под)',
        'В vs. НА erklärt',
      ],
      leadMagnetCta: {
        title: 'Russische Präpositionen und Fälle mit unserer App üben',
        description: 'Gezielte Übungen für jede Präpositions-Fall-Paarung – für Android und iOS.',
        ctaText: 'App herunterladen',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label: 'Der vollständige Leitfaden',
        },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Russische Fallendungen',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Russischer Genitiv' },
      ],
      tableAccentVariant: 'genitive',
      sections: [],
      conclusion:
        'Zu wissen, welcher Fall bei welcher Präposition verlangt wird, ist eine der effektivsten Möglichkeiten, Ihre russische Grammatikgenauigkeit zu verbessern.',
      ctaText: 'App herunterladen',
      ctaHref: '/',
      faq: [
        {
          question: 'Welche Präpositionen verlangen den Genitiv?',
          answer:
            'без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль und weitere.',
        },
        {
          question: 'Was ist der Unterschied zwischen в + Akkusativ und в + Präpositiv?',
          answer:
            '**в + Akkusativ** = Richtung (Я иду в школу). **в + Präpositiv** = Ort (Я в школе). Gleiches für на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Russische Präpositionen und Fälle: Welcher Fall bei welcher Präposition?',
        description: 'Die vollständige Referenz: jede russische Präposition ihrem Fall zugeordnet.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
        },
      },
    },
    tr_tr: {
      slug: 'russian-prepositions-and-cases',
      title: 'Rusça edatlar ve haller: Her edat hangi hali gerektirir?',
      metaTitle: 'Rusça edatlar ve haller | Tam referans | Russian Cases with Anna',
      metaDescription:
        'Tam referans: her Rusça edat gerektirdiği halle eşleştirildi. Ana tablo, çift hal kuralları.',
      keywords: [
        'Rusça edatlar haller',
        'Rusça edatlar genitif',
        'Rusça edat listesi',
        'в на с по Rusça hal',
      ],
      h1: 'Rusça edatlar ve haller: Her edat hangi hali gerektirir?',
      heroImage: {
        src: '/articles/russian-prepositions-case-grammar-reference.jpg',
        alt: 'Rusça edat ve hal grameri referans tablosu',
        width: 1200,
        height: 630,
      },
      intro:
        'Rusçadaki **en pratik becerilerden** biri **her edatın hangi hali gerektirdiğini** bilmektir. без her zaman genitif, к her zaman datif gerektirir ve с anlama göre genitif VEYA enstrumental alabilir – bunu bilince doğruluğunuz dramatik artar.',
      whatYouLearn: [
        'Tam ana tablo: her edat haliyle eşleştirildi',
        'Genitif, datif, akkusatif, enstrumental ve lokatif edatları',
        'Çift hal edatları (в/на/за/под)',
        'В vs НА açıklaması',
      ],
      leadMagnetCta: {
        title: 'Rusça edatları ve halleri uygulamamızla pratik edin',
        description: 'Her edat-hal çifti için hedefli alıştırmalar – Android ve iOS.',
        ctaText: 'Uygulamayı indir',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Kapsamlı rehber' },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Rusça hal ekleri',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rusça genitif' },
      ],
      tableAccentVariant: 'genitive',
      sections: [],
      conclusion:
        'Hangi edatın hangi hali gerektirdiğini bilmek Rusça gramer doğruluğunuzu artırmanın en etkili yollarından biridir.',
      ctaText: 'Uygulamayı indir',
      ctaHref: '/',
      faq: [
        {
          question: 'Hangi edatlar genitif gerektirir?',
          answer:
            'без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль ve diğerleri.',
        },
        {
          question: 'в + akkusatif ile в + lokatif arasındaki fark nedir?',
          answer:
            '**в + akkusatif** = yön (Я иду в школу). **в + lokatif** = yer (Я в школе). на için de aynı.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rusça edatlar ve haller: Her edat hangi hali gerektirir?',
        description: 'Tam referans: her Rusça edat gerektirdiği halle eşleştirildi.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
        },
      },
    },
    pl_pl: {
      slug: 'russian-prepositions-and-cases',
      title: 'Rosyjskie przyimki i przypadki: Który przyimek wymaga którego przypadku?',
      metaTitle: 'Rosyjskie przyimki i przypadki | Pełna referencja | Russian Cases with Anna',
      metaDescription:
        'Pełna referencja: każdy rosyjski przyimek przypisany do wymaganego przypadku. Tabela główna, zasady przyimków dwuprzypadkowych.',
      keywords: [
        'rosyjskie przyimki przypadki',
        'rosyjskie przyimki z dopełniaczem',
        'lista przyimków rosyjskich',
        'в на с по przypadek rosyjski',
      ],
      h1: 'Rosyjskie przyimki i przypadki: Który przyimek wymaga którego przypadku?',
      heroImage: {
        src: '/articles/russian-prepositions-case-grammar-reference.jpg',
        alt: 'Tabela referencyjna gramatyki przyimków i przypadków rosyjskich',
        width: 1200,
        height: 630,
      },
      intro:
        'Jedną z najbardziej **praktycznych umiejętności** w rosyjskim jest wiedza, **który przypadek wymaga każdy przyimek**. Gdy wiesz, że без zawsze wymaga dopełniacza, к zawsze celownika, a с może przyjmować dopełniacz LUB narzędnik w zależności od znaczenia — twoja precyzja rośnie znacząco.',
      whatYouLearn: [
        'Pełna tabela główna: każdy przyimek przypisany do przypadku',
        'Przyimki dopełniacza, celownika, biernika, narzędnika i miejscownika',
        'Przyimki dwuprzypadkowe (в/на/за/под)',
        'В vs НА wyjaśnione',
      ],
      leadMagnetCta: {
        title: 'Ćwicz rosyjskie przyimki i przypadki z naszą aplikacją',
        description: 'Celowane ćwiczenia dla każdej pary przyimek–przypadek — na Android i iOS.',
        ctaText: 'Pobierz aplikację',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Kompletny przewodnik' },
        {
          href: '/learn/articles/russian-case-endings-cheatsheet',
          label: 'Końcówki przypadków rosyjskich',
        },
        { href: '/learn/articles/russian-genitive-case', label: 'Rosyjski dopełniacz' },
      ],
      tableAccentVariant: 'genitive',
      sections: [],
      conclusion:
        'Wiedza, który przypadek wymaga każdy przyimek, to jeden z najskuteczniejszych sposobów na poprawę precyzji gramatycznej w rosyjskim.',
      ctaText: 'Pobierz aplikację',
      ctaHref: '/',
      faq: [
        {
          question: 'Które przyimki wymagają dopełniacza?',
          answer:
            'без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль i inne.',
        },
        {
          question: 'Jaka jest różnica między в + biernik i в + miejscownik?',
          answer:
            '**в + biernik** = kierunek (Я иду в школу). **в + miejscownik** = miejsce (Я в школе). To samo dla на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Rosyjskie przyimki i przypadki: Który przyimek wymaga którego przypadku?',
        description: 'Pełna referencja: każdy rosyjski przyimek przypisany do swego przypadku.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
        },
      },
    },
    ru_ru: {
      slug: 'russian-prepositions-and-cases',
      title: 'Русские предлоги и падежи: какой предлог требует какой падеж?',
      metaTitle: 'Русские предлоги и падежи | Полная справка | Russian Cases with Anna',
      metaDescription:
        'Полная справка: каждый русский предлог сопоставлен с требуемым падежом. Основная таблица, правила предлогов с двумя падежами.',
      keywords: [
        'русские предлоги падежи',
        'русские предлоги родительный',
        'список русских предлогов',
        'в на с по падеж русский',
      ],
      h1: 'Русские предлоги и падежи: какой предлог требует какой падеж?',
      heroImage: {
        src: '/articles/russian-prepositions-case-grammar-reference.jpg',
        alt: 'Справочная таблица предлогов и падежей русского языка',
        width: 1200,
        height: 630,
      },
      intro:
        'Одна из самых **практичных компетенций** в русском — знать, **какой падеж требует каждый предлог**. Как только вы знаете, что без всегда требует родительного, к — дательного, а с может принимать родительный ИЛИ творительный в зависимости от смысла — ваша точность значительно растёт.',
      whatYouLearn: [
        'Полная основная таблица: каждый предлог сопоставлен с падежом',
        'Предлоги родительного, дательного, винительного, творительного и предложного',
        'Предлоги с двумя падежами (в/на/за/под)',
        'В vs НА — объяснение',
      ],
      leadMagnetCta: {
        title: 'Тренируйте предлоги и падежи в нашем приложении',
        description: 'Целенаправленные упражнения для каждой пары предлог–падеж. На Android и iOS.',
        ctaText: 'Скачать приложение',
        ctaHref: '/',
      },
      internalLinks: [
        { href: '/learn/lessons/russian-cases-complete-guide', label: 'Полное руководство' },
        { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Окончания падежей' },
        { href: '/learn/articles/russian-genitive-case', label: 'Родительный падеж' },
      ],
      tableAccentVariant: 'genitive',
      sections: [],
      conclusion:
        'Знание того, какой падеж требует каждый предлог, — один из самых эффективных способов улучшить грамматическую точность в русском.',
      ctaText: 'Скачать приложение',
      ctaHref: '/',
      faq: [
        {
          question: 'Какие предлоги требуют родительного падежа?',
          answer:
            'без, до, из, у, от, после, для, кроме, вместо, напротив, из-за, ради, около, вдоль и другие.',
        },
        {
          question: 'В чём разница между в + винительный и в + предложный?',
          answer:
            '**в + винительный** = направление (Я иду в школу). **в + предложный** = место (Я в школе). То же для на.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Русские предлоги и падежи: какой предлог требует какой падеж?',
        description: 'Полная справка: каждый русский предлог сопоставлен с падежом.',
        datePublished: '2026-03-12',
        dateModified: '2026-03-12',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
        },
      },
    },
  },
  'top-10-apps-russian': {
    fr_fr: {
      slug: 'top-10-apps-russian',
      title: 'Top 10 applis pour apprendre le russe en 2026',
      metaTitle: 'Top 10 applis pour apprendre le russe en 2026 | Russian Cases with Anna',
      metaDescription:
        'Découvrez les meilleures applis pour apprendre le russe en 2026 : grammaire, vocabulaire, cas et conversation. Notre top 10 vous aide à maîtriser le russe à votre rythme.',
      keywords: [
        'appli apprendre russe',
        'meilleures applis russe',
        'appli grammaire russe',
        'appli cas russes',
        'top applis apprendre russe',
      ],
      h1: 'Top 10 applis pour apprendre le russe en 2026 : le guide ultime',
      intro:
        "Apprendre le russe peut sembler gravir une montagne. Entre l'alphabet cyrillique, les six cas grammaticaux et les verbes de mouvement, il est facile de se sentir submergé. Cependant, avec les bons outils en poche, cette montagne devient une série d'étapes gérables.\n\nEn 2026, la technologie d'apprentissage des langues a atteint de nouveaux sommets. Que vous soyez un parfait débutant ou un apprenant avancé souhaitant peaufiner votre fluidité, nous avons testé et classé les 10 meilleures applis pour apprendre le russe. Voici notre analyse détaillée pour trouver votre match parfait.",
      heroImage: {
        src: '/articles/top-10-apps-to-learn-russian-2026.webp',
        alt: 'Infographie : top 10 des applis pour apprendre le russe en 2026 avec logos et classements',
        width: 1200,
        height: 630,
      },
      items: [
        {
          rank: 1,
          title: 'Russian Cases with Anna : le choix des spécialistes de la grammaire',
          description:
            "Pour les apprenants sérieux qui veulent construire des bases grammaticales solides, Russian Cases with Anna est l'outil ultime. Alors que d'autres applis effleurent la surface, celle-ci **plonge au cœur de la langue russe** : le système des cas et les déclinaisons. Elle équilibre parfaitement des leçons courtes avec des quiz interactifs captivants.",
          image: {
            src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
            alt: "Icône de l'appli Russian Cases with Anna",
            width: 256,
            height: 256,
          },
          pros: [
            'Focus inégalé sur les cas et déclinaisons',
            "Modules d'apprentissage rapides",
            'Quiz captivants',
          ],
          cons: [
            'Très centrée sur la grammaire ; une seconde appli pour le vocabulaire général et la conversation sera nécessaire',
          ],
        },
        {
          rank: 2,
          title: 'Duolingo : le meilleur pour commencer',
          description:
            "Duolingo reste la porte d'entrée la plus connue vers la langue russe. Il **transforme l'apprentissage en jeu**, rendant presque impossible d'oublier votre pratique quotidienne. Structure gamifiée en « arbre » centrée sur le vocabulaire de base et la construction de phrases simples.",
          image: {
            src: '/articles/logos/duolingo-icon-app-logo.webp',
            alt: "Icône de l'appli Duolingo",
            width: 256,
            height: 256,
          },
          pros: [
            'Entièrement gratuit (avec option premium)',
            'Excellente interface',
            'Haute « accroche » qui vous fait revenir',
          ],
          cons: [
            "Peu d'explications grammaticales (dont le russe a besoin)",
            'Utilise des phrases parfois « absurdes »',
            'Manque de pratique orale approfondie',
          ],
        },
        {
          rank: 3,
          title: 'Babbel : un choix solide pour la grammaire',
          description:
            'Si vous préférez une structure plus « type cours » sans les cours ennuyeux, Babbel est le meilleur choix. Il est conçu pour vous **rendre conversationnel rapidement**. Leçons créées par des experts alliant dialogue, règles de grammaire et contexte culturel.',
          image: {
            src: '/articles/logos/babel-app-icon-logo.webp',
            alt: "Icône de l'appli Babbel",
            width: 256,
            height: 256,
          },
          pros: [
            'Explications très claires du système des cas russes',
            'Audio de haute qualité',
            'Vocabulaire pratique',
          ],
          cons: ['Abonnement payant requis', 'Peut sembler un peu répétitif pour certains'],
        },
        {
          rank: 4,
          title: 'Memrise : apprenez auprès de vrais locaux',
          description:
            "Memrise se démarque car il n'utilise pas que des voix robotisées. Il utilise **des milliers de courtes vidéos de vrais Russes** parlant dans leur environnement naturel. Répétition espacée et contenu vidéo immersif pour graver les mots dans votre mémoire.",
          image: {
            src: '/articles/logos/memrise-icon-app-logo.webp',
            alt: "Icône de l'appli Memrise",
            width: 256,
            height: 256,
          },
          pros: [
            'Accents et débits variés, essentiels pour la compréhension orale réelle',
            'La fonction « Apprendre avec des locaux » change la donne',
          ],
          cons: ['Pas idéal pour les structures de phrases complexes ou la grammaire approfondie'],
        },
        {
          rank: 5,
          title: "Busuu : l'appli communautaire",
          description:
            "Busuu propose un cours complet suivant les niveaux CECRL (A1 à B2). Son atout majeur : **faire corriger vos exercices par des locuteurs natifs**. Leçons structurées combinées à un réseau social d'apprenants de langues.",
          image: {
            src: '/articles/logos/busuu-icon-app-logo.webp',
            alt: "Icône de l'appli Busuu",
            width: 256,
            height: 256,
          },
          pros: [
            'Retours en temps réel de Russes',
            'Mode hors ligne',
            'Progression de difficulté très logique',
          ],
          cons: [
            'La version gratuite est limitée ; la version Premium est nécessaire pour progresser',
          ],
        },
        {
          rank: 6,
          title: "Pimsleur : le roi de l'audio et de la prononciation",
          description:
            'Si vous voulez **sonner comme un natif** et que lire/écrire ne vous intéresse pas encore, Pimsleur est la « référence or ». Parfait pour les trajets. Méthode 100 % audio centrée sur la récupération active et la conversation naturelle.',
          image: {
            src: '/articles/logos/Pimsleur-app-icon-logo.webp',
            alt: "Icône de l'appli Pimsleur",
            width: 256,
            height: 256,
          },
          pros: [
            'Développe un accent authentique et une « mémoire musculaire » pour la parole',
            "Pas d'écran requis",
          ],
          cons: [
            "N'enseigne pas l'alphabet cyrillique ni l'écriture",
            'Peut sembler un peu « vieille école » pour les plus jeunes',
          ],
        },
        {
          rank: 7,
          title: 'italki : une vraie connexion humaine',
          description:
            "Parfois, il faut simplement un humain. italki n'est pas une appli de « cours » ; c'est une plateforme qui **vous connecte à des professeurs de russe professionnels** pour des cours individuels. Leçons vidéo personnalisées adaptées à vos objectifs.",
          image: {
            src: '/articles/logos/italki-icon-app-logo.webp',
            alt: "Icône de l'appli italki",
            width: 256,
            height: 256,
          },
          pros: [
            'Flexibilité totale',
            'Très abordable (tuteurs à moins de 10 €/h)',
            'Le moyen le plus rapide de surmonter la « peur de parler »',
          ],
          cons: [
            'Pas une appli « en déplacement » ; nécessite prise de rendez-vous et connexion stable',
          ],
        },
        {
          rank: 8,
          title: 'RussianPod101 : la bibliothèque audio infinie',
          description:
            "C'est peut-être **la ressource la plus complète de la liste**. Une immense bibliothèque de podcasts couvrant tous les sujets possibles en russe. Apprentissage par l'écoute de dialogues naturels avec notes de leçon PDF détaillées.",
          image: {
            src: '/articles/logos/RussianPod101-icon-app-logo.webp',
            alt: "Icône de l'appli RussianPod101",
            width: 256,
            height: 256,
          },
          pros: [
            "De « l'argot » au « russe des affaires », tout y est",
            'Excellent pour les apprenants intermédiaires en plateau',
          ],
          cons: ["L'interface peut sembler écrasante — trop de contenu"],
        },
        {
          rank: 9,
          title: 'Clozemaster : pour les apprenants intermédiaires',
          description:
            'Une fois les bases acquises, Duolingo devient trop facile. Clozemaster **comble ce fossé** avec des tests « cloze » (texte à trous) dans des milliers de phrases réelles. Immersion massive par les phrases pour apprendre comment les mots fonctionnent en contexte.',
          image: {
            src: '/articles/logos/clozemaster-icon-app-logo.webp',
            alt: "Icône de l'appli Clozemaster",
            width: 256,
            height: 256,
          },
          pros: [
            'Meilleure appli pour élargir le vocabulaire rapidement à partir du niveau B1',
            'Design rétro 8-bit amusant',
          ],
          cons: [
            "Pas adapté aux débutants. Sans connaissance de l'alphabet, à éviter pour l'instant.",
          ],
        },
        {
          rank: 10,
          title: 'Drops : le constructeur de vocabulaire visuel',
          description:
            "Drops est une appli au design soigné qui vous limite à **5 minutes d'étude par jour** (sauf si vous payez). Elle traite le vocabulaire comme un jeu visuel rapide. Association d'icônes minimalistes aux mots russes — sans traductions.",
          image: {
            src: '/articles/logos/drops-icon-app-logo.webp',
            alt: "Icône de l'appli Drops",
            width: 256,
            height: 256,
          },
          pros: [
            'Design superbe',
            "Idéal pour apprendre l'alphabet cyrillique et les noms de base sans stress",
          ],
          cons: ["Zéro grammaire. C'est un complément, pas un cours complet."],
        },
      ],
      conclusionIntro: 'Pour maîtriser le russe, nous recommandons une **approche hybride** :',
      conclusionBullets: [
        '**Une appli de base :** Utilisez **Russian Cases with Anna** ou **Busuu** pour construire vos fondations grammaticales.',
        '**Un outil de parole :** Utilisez **italki** une fois par semaine pour pratiquer avec un humain ce que vous avez appris.',
        '**Un « bouche-trou » :** Utilisez **Duolingo** pendant vos trajets pour garder votre vocabulaire frais.',
      ],
      conclusion: '',
      ctaText: 'Voir Russian Cases with Anna',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 applis pour apprendre le russe en 2026 : le guide ultime',
        description:
          'Les meilleures applis mobiles pour apprendre la grammaire, le vocabulaire et la conversation russes en 2026.',
        datePublished: '2026-03-11',
        dateModified: '2026-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
        },
        keywords: 'appli apprendre russe, meilleures applis russe, appli grammaire russe',
      },
    },
    de_de: {
      slug: 'top-10-apps-russian',
      title: 'Top 10 Apps zum Russischlernen 2026',
      metaTitle: 'Top 10 Apps zum Russischlernen 2026 | Russian Cases with Anna',
      metaDescription:
        'Entdecken Sie die besten Apps zum Russischlernen 2026: Grammatik, Wortschatz, Fälle und Konversation. Unsere Top 10 helfen Ihnen, Russisch in Ihrem eigenen Tempo zu meistern.',
      keywords: [
        'Russisch-App',
        'beste Russisch-Lern-Apps',
        'Russisch-Grammatik-App',
        'Russische Fälle App',
        'Top Apps Russisch lernen',
      ],
      h1: 'Top 10 Apps zum Russischlernen 2026: Der ultimative Leitfaden',
      intro:
        'Russisch zu lernen kann sich anfühlen wie ein Berg zu besteigen. Zwischen Kyrillisch, den sechs grammatischen Fällen und Bewegungsverben ist es leicht, überwältigt zu werden. Mit den richtigen Tools in der Tasche wird der Berg jedoch zu einer Reihe machbarer Schritte.\n\nIm Jahr 2026 hat die Sprachlerntechnologie neue Höhen erreicht. Ob Sie absoluter Anfänger sind oder fortgeschrittener Lernender, der seine Sprachgewandtheit verfeinern möchte – wir haben die 10 besten Apps zum Russischlernen getestet und bewertet. Hier ist unsere detaillierte Übersicht, um Ihre perfekte Wahl zu finden.',
      heroImage: {
        src: '/articles/top-10-apps-to-learn-russian-2026.webp',
        alt: 'Infografik: Top 10 Apps zum Russischlernen 2026 mit App-Logos und Rankings',
        width: 1200,
        height: 630,
      },
      items: [
        {
          rank: 1,
          title: 'Russian Cases with Anna: Die Spezialisten-Wahl für Grammatik',
          description:
            'Für ernsthafte Lernende, die solide Grammatik-Grundlagen aufbauen möchten, ist Russian Cases with Anna das ultimative Tool. Während andere Apps nur an der Oberfläche kratzen, **taucht diese tief ins Herz der russischen Sprache** ein: Fallsystem und Deklinationen. Kurze Lektionen und ansprechende interaktive Quizze sind perfekt ausbalanciert.',
          image: {
            src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
            alt: 'Russian Cases with Anna App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Unübertroffener Fokus auf Fälle und Deklinationen',
            'Schnelle Lernmodule',
            'Ansprechende Quizze',
          ],
          cons: [
            'Sehr grammatikfokussiert; ein zusätzliches Tool für allgemeinen Wortschatz und Konversation ist nötig',
          ],
        },
        {
          rank: 2,
          title: 'Duolingo: Am besten für den Einstieg',
          description:
            'Duolingo bleibt das bekannteste Tor zur russischen Sprache. Es **verwandelt Lernen in ein Spiel** und macht es fast unmöglich, die tägliche Übung zu vergessen. Gamifizierter „Baum" mit grundlegendem Wortschatz und einfachem Satzbau.',
          image: {
            src: '/articles/logos/duolingo-icon-app-logo.webp',
            alt: 'Duolingo App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Komplett kostenlos (mit Premium-Option)',
            'Ausgezeichnete Benutzeroberfläche',
            'Hohe „Bindung" – man kommt gerne zurück',
          ],
          cons: [
            'Wenig Grammatikerklärungen (die Russisch dringend braucht)',
            'Verwendet teils „Unsinns"-Sätze',
            'Fehlende tiefgehende Sprechübungen',
          ],
        },
        {
          rank: 3,
          title: 'Babbel: Solide Wahl für Grammatik',
          description:
            'Wenn Sie eine eher „unterrichtsähnliche" Struktur ohne langweilige Vorlesungen bevorzugen, ist Babbel die beste Wahl. Es ist speziell dafür konzipiert, **Sie schnell konversationsfähig zu machen**. Von Experten erstellte Lektionen mit Dialogen, Grammatikregeln und kulturellem Kontext.',
          image: {
            src: '/articles/logos/babel-app-icon-logo.webp',
            alt: 'Babbel App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Sehr klare Erklärungen des russischen Fallsystems',
            'Hochwertiges Audio',
            'Praktischer Wortschatz',
          ],
          cons: [
            'Kostenpflichtiges Abo erforderlich',
            'Kann sich für manche etwas repetitiv anfühlen',
          ],
        },
        {
          rank: 4,
          title: 'Memrise: Lernen von echten Einheimischen',
          description:
            'Memrise sticht hervor, weil es nicht nur roboterhafte Stimmen nutzt. Es verwendet **tausende kurze Videoclips echter Russen**, die in ihrer natürlichen Umgebung sprechen. Intervallwiederholung und eintauchende Videoinhalte zum Einprägen von Wörtern.',
          image: {
            src: '/articles/logos/memrise-icon-app-logo.webp',
            alt: 'Memrise App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Verschiedene Akzente und Sprechtempi – wichtig für echtes Hörverständnis',
            'Die Funktion „Lernen mit Einheimischen" ist ein Wendepunkt',
          ],
          cons: ['Nicht ideal für komplexe Satzstrukturen oder tiefe Grammatik'],
        },
        {
          rank: 5,
          title: 'Busuu: Die Community-getriebene App',
          description:
            'Busuu bietet einen kompletten Kurs nach CEFR-Niveaus (A1 bis B2). Das Herzstück: **Ihre Übungen werden von Muttersprachlern korrigiert**. Strukturierte Lektionen kombiniert mit einem sozialen Netzwerk von Sprachlernenden.',
          image: {
            src: '/articles/logos/busuu-icon-app-logo.webp',
            alt: 'Busuu App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Echtzeit-Feedback von Russen',
            'Offline-Modus',
            'Sehr logische Schwierigkeitsprogression',
          ],
          cons: [
            'Die kostenlose Version ist ziemlich eingeschränkt; für Fortschritt brauchen Sie Premium',
          ],
        },
        {
          rank: 6,
          title: 'Pimsleur: Der König von Audio & Aussprache',
          description:
            'Wenn Sie **wie ein Muttersprachler klingen** möchten und Lesen/Schreiben noch egal ist, ist Pimsleur der „Goldstandard". Perfekt für Pendler. Eine 100% audio-basierte Methode mit aktivem Abruf und natürlicher Konversation.',
          image: {
            src: '/articles/logos/Pimsleur-app-icon-logo.webp',
            alt: 'Pimsleur App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Entwickelt authentischen Akzent und „Muskelgedächtnis" fürs Sprechen',
            'Kein Bildschirm nötig',
          ],
          cons: [
            'Lehrt weder Kyrillisch noch Schreiben',
            'Kann sich für jüngere Lernende etwas „altmodisch" anfühlen',
          ],
        },
        {
          rank: 7,
          title: 'italki: Echte menschliche Verbindung',
          description:
            'Manchmal braucht man einfach einen Menschen. italki ist keine „Kurs"-App, sondern eine Plattform, die **Sie mit professionellen Russischlehrern** für Einzelunterricht verbindet. Personalisierter Videounterricht für Ihre Ziele.',
          image: {
            src: '/articles/logos/italki-icon-app-logo.webp',
            alt: 'italki App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Totale Flexibilität',
            'Sehr erschwinglich (Tutoren unter 10€/Stunde möglich)',
            'Der schnellste Weg, die „Sprechangst" zu überwinden',
          ],
          cons: ['Keine „unterwegs"-App; erfordert Terminplanung und stabiles Internet'],
        },
        {
          rank: 8,
          title: 'RussianPod101: Die unendliche Audio-Bibliothek',
          description:
            'Vielleicht **die umfassendste Ressource der Liste**. Im Wesentlichen eine riesige Podcast-Bibliothek zu jedem möglichen Thema auf Russisch. Lernen durch natürliche Dialoge mit detaillierten PDF-Lektionsnotizen.',
          image: {
            src: '/articles/logos/RussianPod101-icon-app-logo.webp',
            alt: 'RussianPod101 App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Von „Slang" bis „Business Russisch" – alles dabei',
            'Exzellent für fortgeschrittene Lernende, die ein Plateau erreicht haben',
          ],
          cons: ['Die Oberfläche kann überwältigend sein – zu viel Inhalt'],
        },
        {
          rank: 9,
          title: 'Clozemaster: Für fortgeschrittene Lernende',
          description:
            'Sobald Sie die Basics können, wird Duolingo zu einfach. Clozemaster **schließt diese Lücke** mit Lückentests in tausenden echten Sätzen. Massives Eintauchen in Sätze, um zu lernen, wie Wörter im Kontext funktionieren.',
          image: {
            src: '/articles/logos/clozemaster-icon-app-logo.webp',
            alt: 'Clozemaster App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Beste App zur raschen Wortschatzerweiterung ab B1-Niveau',
            'Retro-8-Bit-Design macht Spaß',
          ],
          cons: ['Nicht anfängerfreundlich. Ohne Alphabetkenntnisse vorerst meiden.'],
        },
        {
          rank: 10,
          title: 'Drops: Der visuelle Wortschatz-Builder',
          description:
            'Drops ist eine schön gestaltete App, die Sie auf **5 Minuten Lernen pro Tag** begrenzt (außer Sie zahlen). Wortschatz als schnelles visuelles Spiel. Minimalistische Icons werden russischen Wörtern zugeordnet – ohne Übersetzungen.',
          image: {
            src: '/articles/logos/drops-icon-app-logo.webp',
            alt: 'Drops App-Icon',
            width: 256,
            height: 256,
          },
          pros: [
            'Hervorragendes Design',
            'Ideal zum Erlernen des Kyrillischen und grundlegender Substantive ohne Stress',
          ],
          cons: ['Keine Grammatik. Es ist eine Ergänzung, kein vollständiger Kurs.'],
        },
      ],
      conclusionIntro: 'Um Russisch zu meistern, empfehlen wir einen **hybriden Ansatz**:',
      conclusionBullets: [
        '**Eine Kern-App:** Verwenden Sie **Russian Cases with Anna** oder **Busuu** für Ihre grammatische Basis.',
        '**Ein Sprech-Tool:** Nutzen Sie **italki** wöchentlich, um Gelerntes mit einem Menschen zu üben.',
        '**Ein „Lückenfüller":** Nutzen Sie **Duolingo** unterwegs, um Ihren Wortschatz frisch zu halten.',
      ],
      conclusion: '',
      ctaText: 'Russian Cases with Anna ansehen',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 Apps zum Russischlernen 2026: Der ultimative Leitfaden',
        description:
          'Die besten mobilen Apps zum Lernen von Russisch-Grammatik, Wortschatz und Konversation 2026.',
        datePublished: '2026-03-11',
        dateModified: '2026-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
        },
        keywords: 'Russisch-App, beste Russisch-Lern-Apps, Russisch-Grammatik-App',
      },
    },
    tr_tr: {
      slug: 'top-10-apps-russian',
      title: "2026'da Rusça öğrenmek için en iyi 10 uygulama",
      metaTitle: "2026'da Rusça öğrenmek için en iyi 10 uygulama | Russian Cases with Anna",
      metaDescription:
        "2026'da Rusça öğrenmek için en iyi uygulamaları keşfedin: gramer, kelime, haller ve konuşma. Top 10'umuz kendi temponuzda Rusçaya hakim olmanıza yardım eder.",
      keywords: [
        'Rusça uygulaması',
        'en iyi Rusça öğrenme uygulamaları',
        'Rusça gramer uygulaması',
        'Rusça haller uygulaması',
        'Rusça öğrenmek için top uygulamalar',
      ],
      h1: "2026'da Rusça öğrenmek için en iyi 10 uygulama: Nihai rehber",
      intro:
        "Rusça öğrenmek bir dağa tırmanmak gibi hissedebilir. Kiril alfabesi, altı gramer hali ve hareket fiilleri arasında bunalmak kolay. Ancak doğru araçlarla bu dağ yönetilebilir adımlar dizisine dönüşür.\n\n2026'da dil öğrenme teknolojisi yeni zirvelere ulaştı. İster tam yeni başlayan ister akıcılığını cilalamak isteyen ileri seviye olun – Rusça öğrenmek için en iyi 10 uygulamayı test ettik ve sıraladık. İşte mükemmel eşleşmenizi bulmak için detaylı analizimiz.",
      heroImage: {
        src: '/articles/top-10-apps-to-learn-russian-2026.webp',
        alt: "İnfografik: 2026'da Rusça öğrenmek için top 10 uygulama logosu ve sıralamasıyla",
        width: 1200,
        height: 630,
      },
      items: [
        {
          rank: 1,
          title: 'Russian Cases with Anna: Gramer uzmanlarının tercihi',
          description:
            'Sağlam gramer temeli kurmak isteyen ciddi öğrenenler için Russian Cases with Anna nihai araçtır. Diğer uygulamalar yüzeysel kalırken bu **Rusça dilin kalbine dalar**: hal sistemi ve çekimler. Kısa dersler ve çekici etkileşimli sınavlar mükemmel dengelenmiş.',
          image: {
            src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
            alt: 'Russian Cases with Anna uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Hallere ve çekimlere benzersiz odak',
            'Hızlı öğrenme modülleri',
            'Çekici sınavlar',
          ],
          cons: ['Çok gramer odaklı; genel kelime ve konuşma için ek araç gerekli'],
        },
        {
          rank: 2,
          title: 'Duolingo: Başlangıç için en iyi',
          description:
            "Duolingo Rusçaya en bilinen kapı olmaya devam ediyor. **Öğrenmeyi oyuna dönüştürür** ve günlük pratiği unutmayı neredeyse imkânsız kılar. Temel kelime ve basit cümle yapısıyla oyunlaştırılmış 'ağaç'.",
          image: {
            src: '/articles/logos/duolingo-icon-app-logo.webp',
            alt: 'Duolingo uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Tamamen ücretsiz (Premium seçeneğiyle)',
            'Mükemmel arayüz',
            "Yüksek 'bağlılık' – geri dönmek kolay",
          ],
          cons: [
            'Az gramer açıklaması (Rusça için acil gerekli)',
            'Bazen "saçma" cümleler kullanır',
            'Derinlemesine konuşma pratiği eksik',
          ],
        },
        {
          rank: 3,
          title: 'Babbel: Gramer için sağlam seçim',
          description:
            "Sıkıcı dersler olmadan 'ders benzeri' yapı tercih ediyorsanız Babbel en iyi seçim. **Sizi hızla konuşmaya hazır yapmak** için özel tasarlandı. Uzmanlar tarafından hazırlanmış dersler, diyaloglar, gramer kuralları ve kültürel bağlam.",
          image: {
            src: '/articles/logos/babel-app-icon-logo.webp',
            alt: 'Babbel uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Rusça hal sisteminin çok net açıklamaları',
            'Yüksek kalite ses',
            'Pratik kelime bilgisi',
          ],
          cons: ['Ücretli abonelik gerekli', 'Bazıları için tekrarlayıcı gelebilir'],
        },
        {
          rank: 4,
          title: 'Memrise: Gerçek yerlilerden öğrenin',
          description:
            'Memrise sadece robot sesleri kullanmadığı için öne çıkar. **Binlerce kısa video kliple** doğal ortamlarında konuşan gerçek Ruslar kullanır. Kelime ezberleme için aralıklı tekrar ve sürükleyici video içerik.',
          image: {
            src: '/articles/logos/memrise-icon-app-logo.webp',
            alt: 'Memrise uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Farklı aksanlar ve konuşma tempoları – gerçek dinleme için önemli',
            '"Yerlilerle Öğren" özelliği oyun değiştirici',
          ],
          cons: ['Karmaşık cümle yapıları veya derin gramer için ideal değil'],
        },
        {
          rank: 5,
          title: 'Busuu: Topluluk odaklı uygulama',
          description:
            'Busuu CEFR seviyelerine (A1-B2) tam kurs sunar. Ana avantaj: **Alıştırmalarınız ana dili konuşanlar tarafından düzeltilir**. Yapılandırılmış dersler dil öğrenenlerin sosyal ağıyla birleşir.',
          image: {
            src: '/articles/logos/busuu-icon-app-logo.webp',
            alt: 'Busuu uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Ruslardan gerçek zamanlı geri bildirim',
            'Çevrimdışı mod',
            'Çok mantıklı zorluk ilerlemesi',
          ],
          cons: ['Ücretsiz sürüm oldukça kısıtlı; ilerleme için Premium gerekli'],
        },
        {
          rank: 6,
          title: 'Pimsleur: Ses ve telaffuz kralı',
          description:
            "**Ana dili gibi ses çıkarmak** istiyorsanız ve okuma/yazma henüz önemli değilse Pimsleur 'altın standart'. Günlük yolculuklar için mükemmel. Aktif hatırlama ve doğal konuşmayla %100 ses tabanlı yöntem.",
          image: {
            src: '/articles/logos/Pimsleur-app-icon-logo.webp',
            alt: 'Pimsleur uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: ['Otantik aksan ve konuşma için "kas hafızası" geliştirir', 'Ekrana gerek yok'],
          cons: ['Ne Kiril ne yazma öğretir', 'Genç öğrenenlere biraz "eski usul" gelebilir'],
        },
        {
          rank: 7,
          title: 'italki: Gerçek insan bağlantısı',
          description:
            "Bazen sadece bir insan gerekir. italki 'kurs' uygulaması değil, **sizi birebir ders için profesyonel Rusça öğretmenleriyle** buluşturan bir platform. Hedeflerinize özel video dersler.",
          image: {
            src: '/articles/logos/italki-icon-app-logo.webp',
            alt: 'italki uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Tam esneklik',
            'Çok uygun fiyat (10€/saat altı öğretmenler mümkün)',
            '"Konuşma korkusunu" aşmanın en hızlı yolu',
          ],
          cons: ['"Yolda" uygulaması değil; randevu ve stabil internet gerekli'],
        },
        {
          rank: 8,
          title: 'RussianPod101: Sonsuz ses kütüphanesi',
          description:
            'Belki **listede en kapsamlı kaynak**. Özünde Rusçada her olası konuda dev podcast kütüphanesi. Detaylı PDF ders notlarıyla doğal diyaloglarla öğrenme.',
          image: {
            src: '/articles/logos/RussianPod101-icon-app-logo.webp',
            alt: 'RussianPod101 uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            '"Argo"dan "iş Rusçası"na – hepsi var',
            'Plato yapan ileri öğrenenler için mükemmel',
          ],
          cons: ['Arayüz bunaltıcı gelebilir – çok fazla içerik'],
        },
        {
          rank: 9,
          title: 'Clozemaster: İleri öğrenenler için',
          description:
            "Temeller oturduğunda Duolingo çok kolay gelir. Clozemaster **bu boşluğu** binlerce gerçek cümlede 'cloze' (boşluk doldurma) testleriyle kapatır. Kelimelerin bağlamda nasıl çalıştığını öğrenmek için cümlelere yoğun daldırma.",
          image: {
            src: '/articles/logos/clozemaster-icon-app-logo.webp',
            alt: 'Clozemaster uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'B1 seviyesinden hızlı kelime genişletme için en iyi uygulama',
            'Retro 8-bit tasarım eğlenceli',
          ],
          cons: ['Başlangıç dostu değil. Alfabe bilgisi olmadan şimdilik kaçının.'],
        },
        {
          rank: 10,
          title: 'Drops: Görsel kelime oluşturucu',
          description:
            'Drops sizi **günde 5 dakika çalışmaya** sınırlayan (ücret ödemedikçe) şık tasarımlı bir uygulama. Kelime bilgisini hızlı görsel oyun olarak işler. Minimalist ikonların Rusça kelimelerle eşleşmesi – çeviri yok.',
          image: {
            src: '/articles/logos/drops-icon-app-logo.webp',
            alt: 'Drops uygulama ikonu',
            width: 256,
            height: 256,
          },
          pros: [
            'Muhteşem tasarım',
            'Kiril alfabesi ve temel isimleri stressiz öğrenmek için ideal',
          ],
          cons: ['Sıfır gramer. Tamamlayıcı, tam kurs değil.'],
        },
      ],
      conclusionIntro: 'Rusçaya hakim olmak için **hibrit bir yaklaşım** öneriyoruz:',
      conclusionBullets: [
        '**Temel uygulama:** Gramer temeliniz için **Russian Cases with Anna** veya **Busuu** kullanın.',
        '**Konuşma aracı:** Öğrendiklerinizi bir insanla pratik etmek için haftada bir **italki** kullanın.',
        '"**Boşluk doldurucu**:" Kelimenizi taze tutmak için yolculukta **Duolingo** kullanın.',
      ],
      conclusion: '',
      ctaText: "Russian Cases with Anna'ı görüntüle",
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: "2026'da Rusça öğrenmek için en iyi 10 uygulama: Nihai rehber",
        description:
          "2026'da Rusça gramer, kelime ve konuşma öğrenmek için en iyi mobil uygulamalar.",
        datePublished: '2026-03-11',
        dateModified: '2026-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
        },
        keywords: 'Rusça uygulaması, en iyi Rusça öğrenme uygulamaları, Rusça gramer uygulaması',
      },
    },
    pl_pl: {
      slug: 'top-10-apps-russian',
      title: 'Top 10 aplikacji do nauki rosyjskiego w 2026',
      metaTitle: 'Top 10 aplikacji do nauki rosyjskiego w 2026 | Russian Cases with Anna',
      metaDescription:
        'Odkryj najlepsze aplikacje do nauki rosyjskiego w 2026: gramatyka, słownictwo, przypadki i konwersacje. Nasza top 10 pomoże ci opanować rosyjski we własnym tempie.',
      keywords: [
        'aplikacja do nauki rosyjskiego',
        'najlepsze aplikacje do nauki rosyjskiego',
        'aplikacja gramatyka rosyjska',
        'aplikacja rosyjskie przypadki',
        'top aplikacje nauka rosyjskiego',
      ],
      h1: 'Top 10 aplikacji do nauki rosyjskiego w 2026: Kompletny przewodnik',
      intro:
        'Nauka rosyjskiego może przypominać wspinaczkę na górę. Między cyrylicą, sześcioma przypadkami gramatycznymi a czasownikami ruchu łatwo się przytłoczyć. Jednak z odpowiednimi narzędziami w kieszeni góra staje się serią wykonalnych kroków.\n\nW 2026 roku technologia nauki języków osiągnęła nowe wyżyny. Czy jesteś zupełnym początkującym, czy zaawansowanym uczniem pragnącym dopracować płynność — przetestowaliśmy i oceniliśmy 10 najlepszych aplikacji do nauki rosyjskiego. Oto nasze szczegółowe zestawienie, byś znalazł idealny wybór.',
      heroImage: {
        src: '/articles/top-10-apps-to-learn-russian-2026.webp',
        alt: 'Infografika: Top 10 aplikacji do nauki rosyjskiego w 2026 z logo aplikacji i rankingiem',
        width: 1200,
        height: 630,
      },
      items: [
        {
          rank: 1,
          title: 'Russian Cases with Anna: Ekspert od gramatyki',
          description:
            'Dla poważnych uczniów pragnących zbudować solidne podstawy gramatyczne, Russian Cases with Anna to najlepsze narzędzie. Gdy inne aplikacje ledwo muskają powierzchnię, **ta zagłębia się w serce języka rosyjskiego**: system przypadków i deklinacje. Krótkie lekcje i angażujące interaktywne quizy są idealnie wyważone.',
          image: {
            src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
            alt: 'Ikona aplikacji Russian Cases with Anna',
            width: 256,
            height: 256,
          },
          pros: [
            'Bezkonkurencyjne skupienie na przypadkach i deklinacjach',
            'Szybkie moduły nauki',
            'Angażujące quizy',
          ],
          cons: [
            'Bardzo ukierunkowana na gramatykę; potrzebne dodatkowe narzędzie do słownictwa i konwersacji',
          ],
        },
        {
          rank: 2,
          title: 'Duolingo: Najlepszy na start',
          description:
            'Duolingo pozostaje najbardziej znaną bramą do języka rosyjskiego. **Zamienia naukę w grę** i czyni niemal niemożliwym zapomnienie codziennej praktyki. Ugryziona struktura „drzewa" z podstawowym słownictwem i prostą budową zdań.',
          image: {
            src: '/articles/logos/duolingo-icon-app-logo.webp',
            alt: 'Ikona aplikacji Duolingo',
            width: 256,
            height: 256,
          },
          pros: [
            'Całkowicie darmowa (z opcją Premium)',
            'Doskonały interfejs',
            'Wysoka „przyczepność" — chętnie się wraca',
          ],
          cons: [
            'Mało wyjaśnień gramatycznych (których rosyjski desperacko potrzebuje)',
            'Używa częściowo „nonsensownych" zdań',
            'Brak pogłębionych ćwiczeń mówienia',
          ],
        },
        {
          rank: 3,
          title: 'Babbel: Solidny wybór do gramatyki',
          description:
            'Jeśli preferujesz bardziej „lekcyjną" strukturę bez nudnych wykładów, Babbel to najlepszy wybór. Został zaprojektowany tak, by **szybko uczynić cię zdolnym do konwersacji**. Lekcje stworzone przez ekspertów z dialogami, zasadami gramatyki i kontekstem kulturowym.',
          image: {
            src: '/articles/logos/babel-app-icon-logo.webp',
            alt: 'Ikona aplikacji Babbel',
            width: 256,
            height: 256,
          },
          pros: [
            'Bardzo przejrzyste wyjaśnienia systemu przypadków rosyjskich',
            'Wysokiej jakości audio',
            'Praktyczne słownictwo',
          ],
          cons: ['Wymagana płatna subskrypcja', 'Może wydać się niektórym nieco powtarzalna'],
        },
        {
          rank: 4,
          title: 'Memrise: Nauka od prawdziwych Rosjan',
          description:
            'Memrise wyróżnia się tym, że nie używa tylko robotycznych głosów. Wykorzystuje **tysiące krótkich wideoklipów prawdziwych Rosjan** mówiących w naturalnym otoczeniu. Powtórki rozłożone i immersyjne treści wideo do zapamiętywania słówek.',
          image: {
            src: '/articles/logos/memrise-icon-app-logo.webp',
            alt: 'Ikona aplikacji Memrise',
            width: 256,
            height: 256,
          },
          pros: [
            'Różne akcenty i tempo mowy — ważne dla prawdziwego rozumienia ze słuchu',
            'Funkcja „Nauka z rodowitymi" to przełom',
          ],
          cons: ['Nie idealna do złożonych struktur zdań lub głębokiej gramatyki'],
        },
        {
          rank: 5,
          title: 'Busuu: Aplikacja napędzana społecznością',
          description:
            'Busuu oferuje kompletny kurs według poziomów CEFR (A1–B2). Główna zaleta: **Twoje ćwiczenia są poprawiane przez rodzimych użytkowników**. Ustrukturyzowane lekcje połączone z siecią społeczną uczących się języków.',
          image: {
            src: '/articles/logos/busuu-icon-app-logo.webp',
            alt: 'Ikona aplikacji Busuu',
            width: 256,
            height: 256,
          },
          pros: [
            'Feedback w czasie rzeczywistym od Rosjan',
            'Tryb offline',
            'Bardzo logiczna progresja trudności',
          ],
          cons: ['Darmowa wersja jest dość ograniczona; do postępów potrzebna Premium'],
        },
        {
          rank: 6,
          title: 'Pimsleur: Król audio i wymowy',
          description:
            'Jeśli chcesz **brzmieć jak native speaker** i czytanie/pisanie nie są na razie istotne, Pimsleur to „złoty standard". Idealny dla dojeżdżających. Metoda w 100% oparta na audio z aktywnym przypominaniem i naturalną konwersacją.',
          image: {
            src: '/articles/logos/Pimsleur-app-icon-logo.webp',
            alt: 'Ikona aplikacji Pimsleur',
            width: 256,
            height: 256,
          },
          pros: ['Buduje autentyczny akcent i „pamięć mięśniową" do mówienia', 'Nie wymaga ekranu'],
          cons: [
            'Nie uczy ani cyrylicy, ani pisania',
            'Może wydać się młodym uczniom nieco staroświecka',
          ],
        },
        {
          rank: 7,
          title: 'italki: Prawdziwe ludzkie połączenie',
          description:
            'Czasem po prostu potrzebujesz człowieka. italki to nie aplikacja „kursowa", lecz platforma łącząca **cię z profesjonalnymi nauczycielami rosyjskiego** na lekcje indywidualne. Spersonalizowane lekcje wideo pod twoje cele.',
          image: {
            src: '/articles/logos/italki-icon-app-logo.webp',
            alt: 'Ikona aplikacji italki',
            width: 256,
            height: 256,
          },
          pros: [
            'Całkowita elastyczność',
            'Bardzo przystępne ceny (możliwi tutorzy poniżej 10€/godz.)',
            'Najszybsza droga do przezwyciężenia „lęku przed mówieniem"',
          ],
          cons: ['Nie aplikacja „w drodze"; wymaga planowania i stabilnego internetu'],
        },
        {
          rank: 8,
          title: 'RussianPod101: Nieskończona biblioteka audio',
          description:
            'Prawdopodobnie **najobszerniejszy zasób na liście**. W istocie ogromna biblioteka podcastów na każdy możliwy temat po rosyjsku. Nauka przez naturalne dialogi z szczegółowymi notatkami PDF do lekcji.',
          image: {
            src: '/articles/logos/RussianPod101-icon-app-logo.webp',
            alt: 'Ikona aplikacji RussianPod101',
            width: 256,
            height: 256,
          },
          pros: [
            'Od „slangu" po „rosyjski biznesowy" — wszystko w jednym',
            'Doskonały dla zaawansowanych, którzy osiągnęli plateau',
          ],
          cons: ['Interfejs może przytłaczać — za dużo treści'],
        },
        {
          rank: 9,
          title: 'Clozemaster: Dla zaawansowanych',
          description:
            'Gdy opanujesz podstawy, Duolingo stanie się za proste. Clozemaster **wypełnia tę lukę** testami uzupełniania w tysiącach prawdziwych zdań. Masywne zanurzenie w zdaniach, by nauczyć się, jak słowa działają w kontekście.',
          image: {
            src: '/articles/logos/clozemaster-icon-app-logo.webp',
            alt: 'Ikona aplikacji Clozemaster',
            width: 256,
            height: 256,
          },
          pros: [
            'Najlepsza aplikacja do szybkiego rozbudowywania słownictwa od poziomu B1',
            'Retro design 8-bit dodaje zabawy',
          ],
          cons: ['Nie przyjazna początkującym. Bez znajomości alfabetu na razie unikać.'],
        },
        {
          rank: 10,
          title: 'Drops: Wizualny budowniczy słownictwa',
          description:
            'Drops to pięknie zaprojektowana aplikacja ograniczająca cię do **5 minut nauki dziennie** (chyba że płacisz). Słownictwo jako szybka wizualna gra. Minimalistyczne ikony powiązane z rosyjskimi słowami — bez tłumaczeń.',
          image: {
            src: '/articles/logos/drops-icon-app-logo.webp',
            alt: 'Ikona aplikacji Drops',
            width: 256,
            height: 256,
          },
          pros: [
            'Znakomity design',
            'Idealna do nauki cyrylicy i podstawowych rzeczowników bez stresu',
          ],
          cons: ['Brak gramatyki. To uzupełnienie, nie pełny kurs.'],
        },
      ],
      conclusionIntro: 'Aby opanować rosyjski, zalecamy **podejście hybrydowe**:',
      conclusionBullets: [
        '**Aplikacja główna:** Używaj **Russian Cases with Anna** lub **Busuu** jako bazy gramatycznej.',
        '**Narzędzie do mówienia:** Korzystaj z **italki** co tydzień, by ćwiczyć z żywym człowiekiem.',
        '**„Wypełniacz luk":** Używaj **Duolingo** w drodze, by utrzymać słownictwo w formie.',
      ],
      conclusion: '',
      ctaText: 'Zobacz Russian Cases with Anna',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Top 10 aplikacji do nauki rosyjskiego w 2026: Kompletny przewodnik',
        description:
          'Najlepsze mobilne aplikacje do nauki gramatyki rosyjskiej, słownictwa i konwersacji w 2026.',
        datePublished: '2026-03-11',
        dateModified: '2026-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
        },
        keywords:
          'aplikacja do nauki rosyjskiego, najlepsze aplikacje do nauki rosyjskiego, aplikacja gramatyka rosyjska',
      },
    },
    ru_ru: {
      slug: 'top-10-apps-russian',
      title: 'Топ-10 приложений для изучения русского в 2026',
      metaTitle: 'Топ-10 приложений для изучения русского в 2026 | Russian Cases with Anna',
      metaDescription:
        'Лучшие приложения для изучения русского в 2026: грамматика, лексика, падежи и разговорная практика. Наша десятка поможет освоить русский в своём темпе.',
      keywords: [
        'приложение для изучения русского',
        'лучшие приложения русский язык',
        'приложение грамматика русский',
        'приложение падежи русский',
      ],
      h1: 'Топ-10 приложений для изучения русского в 2026: полный гид',
      intro:
        'Учить русский может казаться восхождением на гору. Между кириллицей, шестью падежами и глаголами движения легко почувствовать себя перегруженным. Но с правильными инструментами гора превращается в ряд управляемых шагов.\n\nВ 2026 технологии изучения языков достигли новых высот. Будь вы полным новичком или продвинутым учеником — мы протестировали и оценили 10 лучших приложений для изучения русского. Вот наш обзор, чтобы найти идеальный вариант.',
      heroImage: {
        src: '/articles/top-10-apps-to-learn-russian-2026.webp',
        alt: 'Инфографика: топ-10 приложений для изучения русского в 2026',
        width: 1200,
        height: 630,
      },
      items: [
        {
          rank: 1,
          title: 'Russian Cases with Anna: выбор специалистов по грамматике',
          description:
            'Для серьёзных учеников, желающих построить крепкую грамматическую базу, Russian Cases with Anna — идеальный инструмент. Пока другие приложения скользят по поверхности, это **погружается в сердце русского языка**: систему падежей и склонений. Короткие уроки и увлекательные интерактивные викторины.',
          image: {
            src: '/articles/logos/russian-cases-with-anna-icon-app-logo.webp',
            alt: 'Иконка приложения Russian Cases with Anna',
            width: 256,
            height: 256,
          },
          pros: [
            'Беспрецедентный фокус на падежах и склонениях',
            'Быстрые обучающие модули',
            'Увлекательные викторины',
          ],
          cons: [
            'Сильный фокус на грамматике; потребуется второе приложение для лексики и разговора',
          ],
        },
        {
          rank: 2,
          title: 'Duolingo: лучший старт',
          description:
            'Duolingo остаётся самой известной дверью в русский язык. **Превращает обучение в игру**, делая почти невозможным забыть ежедневную практику. Геймифицированное «дерево» с базовой лексикой и простыми предложениями.',
          image: {
            src: '/articles/logos/duolingo-icon-app-logo.webp',
            alt: 'Иконка приложения Duolingo',
            width: 256,
            height: 256,
          },
          pros: [
            'Полностью бесплатно (с премиум-опцией)',
            'Отличный интерфейс',
            'Высокая вовлечённость',
          ],
          cons: [
            'Мало грамматических объяснений',
            'Иногда абсурдные фразы',
            'Недостаток устной практики',
          ],
        },
        {
          rank: 3,
          title: 'Babbel: надёжный выбор для грамматики',
          description:
            'Если предпочитаете структуру «как на курсе» без скучных лекций, Babbel — лучший выбор. Создан, чтобы **быстро сделать вас разговорным**. Уроки от экспертов с диалогами, правилами грамматики и культурным контекстом.',
          image: {
            src: '/articles/logos/babel-app-icon-logo.webp',
            alt: 'Иконка приложения Babbel',
            width: 256,
            height: 256,
          },
          pros: [
            'Очень понятные объяснения падежной системы',
            'Высокое качество аудио',
            'Практичная лексика',
          ],
          cons: ['Требуется платная подписка', 'Может показаться повторяющимся'],
        },
        {
          rank: 4,
          title: 'Memrise: учитесь у настоящих носителей',
          description:
            'Memrise выделяется тем, что использует не только роботизированные голоса. **Тысячи коротких видео настоящих русских** в естественной среде. Интервальное повторение и иммерсивный видеоконтент.',
          image: {
            src: '/articles/logos/memrise-icon-app-logo.webp',
            alt: 'Иконка приложения Memrise',
            width: 256,
            height: 256,
          },
          pros: ['Разные акценты и темп речи', 'Функция «Учитесь с носителями» меняет правила'],
          cons: ['Не идеален для сложных конструкций и глубокой грамматики'],
        },
        {
          rank: 5,
          title: 'Busuu: приложение-сообщество',
          description:
            'Busuu предлагает полный курс по уровням CEFR (A1–B2). Ключевая функция: **проверка упражнений носителями языка**. Структурированные уроки плюс соцсеть изучающих языки.',
          image: {
            src: '/articles/logos/busuu-icon-app-logo.webp',
            alt: 'Иконка приложения Busuu',
            width: 256,
            height: 256,
          },
          pros: [
            'Обратная связь в реальном времени от русских',
            'Офлайн-режим',
            'Логичная прогрессия сложности',
          ],
          cons: ['Бесплатная версия ограничена; для прогресса нужен Premium'],
        },
        {
          rank: 6,
          title: 'Pimsleur: король аудио и произношения',
          description:
            'Если хотите **звучать как носитель** и чтение/письмо пока не интересны, Pimsleur — «золотой стандарт». Идеален в дороге. 100% аудио-метод с активным вспоминанием и естественной беседой.',
          image: {
            src: '/articles/logos/Pimsleur-app-icon-logo.webp',
            alt: 'Иконка приложения Pimsleur',
            width: 256,
            height: 256,
          },
          pros: ['Развивает аутентичный акцент и «мышечную память» речи', 'Экран не нужен'],
          cons: ['Не учит кириллице и письму', 'Может показаться устаревшим молодёжи'],
        },
        {
          rank: 7,
          title: 'italki: настоящее человеческое общение',
          description:
            'Иногда нужен просто человек. italki — не «курсовое» приложение, а платформа, **связывающая вас с профессиональными преподавателями русского** для индивидуальных уроков. Персональные видео-уроки под ваши цели.',
          image: {
            src: '/articles/logos/italki-icon-app-logo.webp',
            alt: 'Иконка приложения italki',
            width: 256,
            height: 256,
          },
          pros: [
            'Полная гибкость',
            'Доступно (репетиторы от 10€/ч)',
            'Самый быстрый путь преодолеть «страх говорить»',
          ],
          cons: ['Не приложение «в дороге»; нужна запись и стабильный интернет'],
        },
        {
          rank: 8,
          title: 'RussianPod101: бесконечная аудиобиблиотека',
          description:
            'Возможно, **самый объёмный ресурс в списке**. Огромная библиотека подкастов на любую тему по-русски. Обучение через естественные диалоги с детальными PDF-заметками к урокам.',
          image: {
            src: '/articles/logos/RussianPod101-icon-app-logo.webp',
            alt: 'Иконка приложения RussianPod101',
            width: 256,
            height: 256,
          },
          pros: [
            'От сленга до делового русского — всё есть',
            'Отлично для средних, вышедших на плато',
          ],
          cons: ['Интерфейс может ошеломить — слишком много контента'],
        },
        {
          rank: 9,
          title: 'Clozemaster: для продвинутых',
          description:
            'Когда основы освоены, Duolingo становится слишком простым. Clozemaster **заполняет пробел** тестами с пропусками в тысячах реальных фраз. Массивное погружение через предложения.',
          image: {
            src: '/articles/logos/clozemaster-icon-app-logo.webp',
            alt: 'Иконка приложения Clozemaster',
            width: 256,
            height: 256,
          },
          pros: [
            'Лучшее приложение для быстрого расширения лексики с B1',
            'Забавный ретро-дизайн 8-bit',
          ],
          cons: ['Не для новичков. Без знания алфавита пока избегать.'],
        },
        {
          rank: 10,
          title: 'Drops: визуальный конструктор лексики',
          description:
            'Drops — красиво оформленное приложение, ограничивающее **5 минутами в день** (если не платить). Лексика как быстрая визуальная игра. Минималистичные иконки + русские слова — без переводов.',
          image: {
            src: '/articles/logos/drops-icon-app-logo.webp',
            alt: 'Иконка приложения Drops',
            width: 256,
            height: 256,
          },
          pros: [
            'Превосходный дизайн',
            'Идеально для кириллицы и базовых существительных без стресса',
          ],
          cons: ['Ноль грамматики. Дополнение, не полный курс.'],
        },
      ],
      conclusionIntro: 'Чтобы овладеть русским, рекомендуем **гибридный подход**:',
      conclusionBullets: [
        '**Базовое приложение:** Используйте **Russian Cases with Anna** или **Busuu** для грамматической основы.',
        '**Инструмент для речи:** **italki** раз в неделю, чтобы практиковать с живым человеком.',
        '**«Заполнитель пробелов»:** **Duolingo** в дороге, чтобы поддерживать лексику.',
      ],
      conclusion: '',
      ctaText: 'Смотреть Russian Cases with Anna',
      ctaHref: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Топ-10 приложений для изучения русского в 2026: полный гид',
        description:
          'Лучшие мобильные приложения для грамматики, лексики и разговора по-русски в 2026.',
        datePublished: '2026-03-11',
        dateModified: '2026-03-11',
        author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://russiandeclensions.com/learn/articles/top-10-apps-russian',
        },
        keywords:
          'приложение учить русский, лучшие приложения русский, приложение грамматика русский',
      },
    },
  },
};
