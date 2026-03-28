/**
 * Traductions des articles Learn (`/learn/articles/[slug]`)
 *
 * Structure : `slug` → `LandingLanguage` → objet `LearnArticle` complet (comme dans `learnArticles.ts`).
 * Source anglaise : `learnArticles.ts` — toute langue absente ici déclenche un repli sur l’anglais (`getLearnArticle`).
 *
 * Réinitialisation (2026-03) : les entrées précédentes étaient corrompues (UTF-8 / cyrillique).
 * Suivi des retraductions : `docs/LEARN_ARTICLES_TRANSLATION_STATUS.md`.
 */
import type { LearnArticle } from './learnArticles';
import type { LandingLanguage } from '@/data/website/landingTranslations';
import { russianAccusativeCaseFr } from './articleTranslationsFr/russian-accusative-case';
import { russianAccusativeCaseDe } from './articleTranslationsDe/russian-accusative-case';
import { russianAccusativeCaseTr } from './articleTranslationsTr/russian-accusative-case';
import { russianAccusativeCasePl } from './articleTranslationsPl/russian-accusative-case';
import { russianGenitiveCaseFr } from './articleTranslationsFr/russian-genitive-case';
import { russianGenitiveCaseDe } from './articleTranslationsDe/russian-genitive-case';
import { russianGenitiveCaseTr } from './articleTranslationsTr/russian-genitive-case';
import { russianGenitiveCasePl } from './articleTranslationsPl/russian-genitive-case';
import { russianDativeCaseFr } from './articleTranslationsFr/russian-dative-case';
import { russianDativeCaseDe } from './articleTranslationsDe/russian-dative-case';
import { russianDativeCaseTr } from './articleTranslationsTr/russian-dative-case';
import { russianDativeCasePl } from './articleTranslationsPl/russian-dative-case';
import { russianInstrumentalCaseFr } from './articleTranslationsFr/russian-instrumental-case';
import { russianPrepositionalCaseFr } from './articleTranslationsFr/russian-prepositional-case';
import { russianInstrumentalCaseDe } from './articleTranslationsDe/russian-instrumental-case';
import { russianPrepositionalCaseDe } from './articleTranslationsDe/russian-prepositional-case';
import { torflTrkiRussianLanguageExamGuideTranslations } from './learnArticleTranslationsTorflTrki';
import { russianCaseEndingsCheatsheetDe } from './articleTranslationsDe/russian-case-endings-cheatsheet';
import { russianCaseEndingsCheatsheetTr } from './articleTranslationsTr/russian-case-endings-cheatsheet';
import { russianCaseEndingsCheatsheetPl } from './articleTranslationsPl/russian-case-endings-cheatsheet';
import { russianInstrumentalCaseTr } from './articleTranslationsTr/russian-instrumental-case';
import { russianPrepositionalCaseTr } from './articleTranslationsTr/russian-prepositional-case';
import { russianInstrumentalCasePl } from './articleTranslationsPl/russian-instrumental-case';
import { russianPrepositionalCasePl } from './articleTranslationsPl/russian-prepositional-case';
import { howToPracticeRussianCasesFr } from './articleTranslationsFr/how-to-practice-russian-cases';
import { howToPracticeRussianCasesDe } from './articleTranslationsDe/how-to-practice-russian-cases';
import { howToPracticeRussianCasesTr } from './articleTranslationsTr/how-to-practice-russian-cases';
import { howToPracticeRussianCasesPl } from './articleTranslationsPl/how-to-practice-russian-cases';
import { top10RussianCaseMistakesFr } from './articleTranslationsFr/top-10-russian-case-mistakes';
import { top10RussianCaseMistakesDe } from './articleTranslationsDe/top-10-russian-case-mistakes';
import { top10RussianCaseMistakesTr } from './articleTranslationsTr/top-10-russian-case-mistakes';
import { top10RussianCaseMistakesPl } from './articleTranslationsPl/top-10-russian-case-mistakes';
import { russianPrepositionsAndCasesFr } from './articleTranslationsFr/russian-prepositions-and-cases';
import { russianPrepositionsAndCasesDe } from './articleTranslationsDe/russian-prepositions-and-cases';
import { russianPrepositionsAndCasesTr } from './articleTranslationsTr/russian-prepositions-and-cases';
import { russianPrepositionsAndCasesPl } from './articleTranslationsPl/russian-prepositions-and-cases';
import { russianPrepositionsCasesCheatSheetFr } from './articleTranslationsFr/russian-prepositions-cases-cheat-sheet';
import { russianPrepositionsCasesCheatSheetDe } from './articleTranslationsDe/russian-prepositions-cases-cheat-sheet';
import { russianPrepositionsCasesCheatSheetTr } from './articleTranslationsTr/russian-prepositions-cases-cheat-sheet';
import { russianPrepositionsCasesCheatSheetPl } from './articleTranslationsPl/russian-prepositions-cases-cheat-sheet';
import { top10AppsRussianFr } from './articleTranslationsFr/top-10-apps-russian';
import { top10AppsRussianDe } from './articleTranslationsDe/top-10-apps-russian';
import { top10AppsRussianTr } from './articleTranslationsTr/top-10-apps-russian';
import { top10AppsRussianPl } from './articleTranslationsPl/top-10-apps-russian';
import { bestAppsLearnRussianGrammarFr } from './articleTranslationsFr/best-apps-learn-russian-grammar';
import { bestAppsLearnRussianGrammarDe } from './articleTranslationsDe/best-apps-learn-russian-grammar';
import { bestAppsLearnRussianGrammarTr } from './articleTranslationsTr/best-apps-learn-russian-grammar';
import { bestAppsLearnRussianGrammarPl } from './articleTranslationsPl/best-apps-learn-russian-grammar';
import { bestFreeResourcesLearnRussianFr } from './articleTranslationsFr/best-free-resources-learn-russian';
import { bestFreeResourcesLearnRussianDe } from './articleTranslationsDe/best-free-resources-learn-russian';
import { bestFreeResourcesLearnRussianTr } from './articleTranslationsTr/best-free-resources-learn-russian';
import { bestFreeResourcesLearnRussianPl } from './articleTranslationsPl/best-free-resources-learn-russian';
import { russianCasesExplainedBeginnersGuideFr } from './articleTranslationsFr/russian-cases-explained-beginners-guide';
import { russianCasesExplainedBeginnersGuideDe } from './articleTranslationsDe/russian-cases-explained-beginners-guide';
import { russianCasesExplainedBeginnersGuideTr } from './articleTranslationsTr/russian-cases-explained-beginners-guide';
import { russianCasesExplainedBeginnersGuidePl } from './articleTranslationsPl/russian-cases-explained-beginners-guide';
import { howLongLearnRussianFr } from './articleTranslationsFr/how-long-learn-russian';
import { howLongLearnRussianDe } from './articleTranslationsDe/how-long-learn-russian';
import { howLongLearnRussianTr } from './articleTranslationsTr/how-long-learn-russian';
import { howLongLearnRussianPl } from './articleTranslationsPl/how-long-learn-russian';

export const learnArticleTranslations: Partial<
  Record<string, Partial<Record<LandingLanguage, LearnArticle>>>
> = {
  'russian-case-endings-cheatsheet': {
    de_de: russianCaseEndingsCheatsheetDe,
    tr_tr: russianCaseEndingsCheatsheetTr,
    pl_pl: russianCaseEndingsCheatsheetPl,
    fr_fr: {
      slug: 'russian-case-endings-cheatsheet',
      title:
        'Terminaisons des cas russes : l’aide-mémoire et le tableau complets',
      metaTitle:
        'Aide-mémoire des terminaisons des cas russes | Tableau de déclinaison complet | Russian Cases with Anna',
      metaDescription:
        'Aide-mémoire gratuit des terminaisons des cas russes : tableau de déclinaison des noms, adjectifs, pronoms (мой, этот), prépositions par cas. Les 6 cas, tableau coloré. À imprimer ou à mettre en favori.',
      keywords: [
        'terminaisons cas russes',
        'tableau terminaisons cas russes',
        'table déclinaison russe',
        'terminaisons noms cas russe',
        'aide-mémoire cas russes',
        'déclinaison adjectifs russe',
      ],
      h1: 'Terminaisons des cas russes : l’aide-mémoire ultime',
      heroImage: {
        src: '/articles/russian-cases-endings-master-chart.webp',
        alt: 'Tableau maître des terminaisons des cas russes avec déclinaisons pour les 6 cas',
        width: 1200,
        height: 630,
      },
      intro:
        'Maîtriser les terminaisons des cas russes, c’est le socle de la grammaire russe. Que vous soyez débutant et que vous cherchiez à comprendre ce que sont les cas, ou apprenant intermédiaire qui confond encore les terminaisons, cette aide-mémoire regroupe tous les tableaux de déclinaison dont vous avez besoin au même endroit.\n\nMettez cette page en favori. Imprimez-la. Faites une capture d’écran. C’est la ressource sur les déclinaisons russes vers laquelle vous reviendrez encore et encore.',
      whatYouLearn: [
        'Tableau complet de déclinaison des noms (tous genres, singulier et pluriel)',
        'Tableau des adjectifs (thèmes durs et mous)',
        'Déclinaison des pronoms personnels (я, ты, он, она, мы, вы, они)',
        'Déclinaison des possessifs (мой, наш — et comment en déduire les autres)',
        'Pronoms démonstratifs (этот / тот)',
        'Tableau préposition → cas',
        'Règles d’orthographe qui influencent les terminaisons',
      ],
      leadMagnetCta: {
        title: 'Entraînez les déclinaisons russes de façon interactive',
        description:
          'Notre application mobile est conçue pour travailler les cas et déclinaisons russes. Exercices intelligents, répétition espacée et exemples authentiques — sur Android et iOS.',
        ctaText: 'Téléchargez l’app et commencez à réviser dès aujourd’hui',
        ctaHref: '/',
      },
      internalLinks: [
        {
          href: '/learn/lessons/russian-cases-complete-guide',
          label:
            'Guide complet des cas russes : les 6 cas expliqués avec exemples',
        },
        {
          href: '/learn/lessons/dative-case-declension',
          label:
            'Le datif russe : comment dire « à » et « pour » en russe',
        },
      ],
      sections: [
        {
          h2: 'Partie 1 : terminaisons des noms — tableau complet',
          content:
            'Le tableau ci-dessous donne les terminaisons des noms russes pour **les 6 cas**, tous les genres (masculin, féminin, neutre), au **singulier et au pluriel**.\n\nLes thèmes durs (les plus fréquents) et les thèmes mous sont présentés séparément.',
          subsections: [
            {
              h3: 'Comment lire ce tableau',
              content:
                '**M. dur** = masculin à thème dur (стол, брат). **M. mou** = masculin à thème mou (музей, гений). **F. dur** = féminin en -а (женщина, книга). **F. mou** = féminin en -я (неделя, земля). **F. (-ь)** = féminin avec signe mou (ночь, дочь).\n\n**N. (-о)** = neutre dur (окно, слово). **N. (-е)** = neutre mou (море, поле).',
            },
          ],
          table: {
            caption: 'Terminaisons des noms selon le cas, le genre et le nombre',
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'M. dur',
              'M. mou',
              'F. dur (-а)',
              'F. mou (-я)',
              'F. (-ь)',
              'N. (-о)',
              'N. (-е)',
            ],
            rows: [
              ['SINGULIER', '', '', '', '', '', '', ''],
              ['Nominatif', '-Ø', '-й / -ь', '-а', '-я', '-ь', '-о', '-е'],
              ['Génitif', '-а', '-я', '-ы / -и', '-и', '-и', '-а', '-я'],
              ['Datif', '-у', '-ю', '-е / -и', '-е / -и', '-и', '-у', '-ю'],
              ['Accusatif (inan.)', '= nom.', '= nom.', '-у', '-ю', '-ь', '= nom.', '= nom.'],
              ['Accusatif (anim.)', '= gén.', '= gén.', '-у', '-ю', '-ь', '= nom.', '= nom.'],
              ['Instrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
              ['Prépositionnel', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
              ['PLURIEL', '', '', '', '', '', '', ''],
              ['Nominatif', '-ы / -и', '-и', '-ы / -и', '-и', '-и', '-а / -я', '-я'],
              ['Génitif', '-ов / -ев', '-ев / -ей', '-Ø / -ей', '-ей', '-ей', '-Ø / -ей', '-ей'],
              ['Datif', '-ам', '-ям', '-ам', '-ям', '-ям', '-ам', '-ям'],
              [
                'Accusatif',
                '= nom./gén.',
                '= nom./gén.',
                '= nom./gén.',
                '= nom./gén.',
                '= nom./gén.',
                '= nom./gén.',
                '= nom./gén.',
              ],
              ['Instrumental', '-ами', '-ями', '-ами', '-ями', '-ями', '-ами', '-ями'],
              ['Prépositionnel', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
            ],
          },
          bullets: [
            '**Accusatif animé (masc.) :** les noms masculins animés prennent la **forme du génitif** à l’accusatif. Les noms masculins inanimés restent comme au nominatif.',
            '**Accusatif pluriel :** pluriels inanimés = pluriel nominatif ; pluriels animés = pluriel génitif.',
            '**Zéro au génitif pluriel :** beaucoup de noms féminins en -а ont une **terminaison zéro** au génitif pluriel (женщина → женщин). C’est l’un des points les plus délicats de la déclinaison russe.',
            '**Règle des 8 lettres :** après **г, к, х, ж, ш, щ, ч, ц** — écrivez **И** et non Ы (ex. книги, pas книгы).',
            '**Règle des 7 lettres :** après ж, ш, щ, ч, ц — écrivez **А** et non Я, **У** et non Ю dans les syllabes accentuées.',
          ],
        },
        {
          h2: 'Partie 2 : tableau de déclinaison des adjectifs',
          content:
            'Les adjectifs russes doivent **s’accorder avec le nom** qu’ils déterminent en genre, nombre et cas.\n\nCi-dessous le tableau complet pour les adjectifs à **thème dur** et à **thème mou**.',
          subsections: [
            {
              h3: 'Thème dur vs. thème mou',
              content: 'Les adjectifs se répartissent en deux groupes selon le thème :',
              bullets: [
                '**Thème dur** (красный, новый, старый) — nominatif M : -ый/-ой | terminaisons avec Ы, О, У',
                '**Thème mou** (синий, последний, летний) — nominatif M : -ий | terminaisons avec И, Е, Ю',
              ],
            },
          ],
          table: {
            caption: 'Terminaisons des adjectifs selon le cas, le genre et le type de thème',
            boldColumnIndices: [0, 1, 2, 3, 4, 5],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'M. dur',
              'M. mou',
              'F. dur',
              'F. mou',
              'Neutre',
              'Pluriel',
            ],
            rows: [
              ['Nominatif', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
              ['Génitif', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
              ['Datif', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
              ['Acc. (inan.)', '= nom.', '= nom.', '-ую', '-юю', '= nom.', '= nom.'],
              ['Acc. (anim.)', '= gén.', '= gén.', '-ую', '-юю', '= nom.', '= gén.'],
              ['Instrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
              ['Prépositionnel', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
            ],
          },
          bullets: [
            '**Exemple thème dur** — новый (nouveau) : новый / нового / новому / **новый(ого)** / новым / новом',
            '**Exemple thème mou** — синий (bleu) : синий / синего / синему / **синий(его)** / синим / синем',
            '**Adjectifs à accent déplacé** (comme молодой) : le nominatif se termine en **-ой** plutôt qu’en -ый, mais toutes les autres terminaisons suivent le schéma dur comme d’habitude.',
            '**Accord adjectif–nom :** l’adjectif **s’accorde toujours** avec son nom. красная книга (gén. : красной книги) — chaque mot de la syntagme se décline ensemble.',
            '**Formes courtes :** le russe a aussi des adjectifs courts (краток, красив) employés en prédicat (après быть). Ils **ne se déclinent pas** selon les cas.',
          ],
        },
        {
          h2: 'Partie 3 : déclinaison des pronoms personnels',
          content:
            'Les pronoms personnels **changent fortement** d’un cas à l’autre — bien plus que les noms ou les adjectifs. Il faut les **apprendre un par un**.\n\nLe tableau ci-dessous donne la déclinaison complète de tous les pronoms personnels russes.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'я (je)',
              'ты (tu)',
              'он/оно (il/cela)',
              'она (elle)',
              'мы (nous)',
              'вы (vous)',
              'они (ils/elles)',
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
            '**Règle du préfixe Н- :** quand un pronom de la 3e personne (он, она, оно, они) suit une préposition, on ajoute **Н-** : у него (pas у его), к ней (pas к ей), с ними (pas с ими).',
            '**Génitif = accusatif** pour les pronoms personnels : меня, тебя, его, её, нас, вас, их sont **identiques** dans les deux cas.',
            '**Formes prépositionnelles :** après о/об — обо мне, о тебе, о нём, о ней, о нас, о вас, о них.',
          ],
        },
        {
          h2: 'Partie 4 : possessifs (мой, наш)',
          content:
            'Les possessifs se déclinent aussi en cas, genre et nombre. Le tableau couvre **мой** (mon / ma / mes) et **наш** (notre / nos) — les deux paradigmes les plus irréguliers et les plus utiles.\n\nLes autres suivent des schémas proches : **твой** (ton / ta / tes) — comme мой. **ваш** (votre / vos) — comme наш. **его / её / их** (son / sa / ses / leur) — **ne se déclinent pas** ! Ils restent inchangés dans tous les cas.',
          table: {
            caption: 'Déclinaison complète de мой et наш',
            boldColumnIndices: [0, 1, 2, 3, 4],
            accentColumnIndices: [0],
            headers: ['Cas', 'Masc.', 'Neutre', 'Fém.', 'Pluriel'],
            rows: [
              ['МОЙ — mon / ma / mes', '', '', '', ''],
              ['Nominatif', 'мой', 'моё', 'моя', 'мои'],
              ['Génitif', 'моего', 'моего', 'моей', 'моих'],
              ['Datif', 'моему', 'моему', 'моей', 'моим'],
              ['Acc. (inan.)', 'мой', 'моё', 'мою', 'мои'],
              ['Acc. (anim.)', 'моего', 'моё', 'мою', 'моих'],
              ['Instrumental', 'моим', 'моим', 'моей', 'моими'],
              ['Prépositionnel', 'моём', 'моём', 'моей', 'моих'],
              ['НАШ — notre / nos', '', '', '', ''],
              ['Nominatif', 'наш', 'наше', 'наша', 'наши'],
              ['Génitif', 'нашего', 'нашего', 'нашей', 'наших'],
              ['Datif', 'нашему', 'нашему', 'нашей', 'нашим'],
              ['Acc. (inan.)', 'наш', 'наше', 'нашу', 'наши'],
              ['Acc. (anim.)', 'нашего', 'наше', 'нашу', 'наших'],
              ['Instrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
              ['Prépositionnel', 'нашем', 'нашем', 'нашей', 'наших'],
            ],
          },
        },
        {
          h2: 'Partie 5 : démonstratifs (этот / тот)',
          content:
            '**Этот** (ce…-ci / ceci) et **тот** (ce…-là / cela) sont des démonstratifs qui servent aussi de déterminants.\n\nIls se déclinent en **cas, genre et nombre** et sont très courants à l’oral.',
          table: {
            boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
            accentColumnIndices: [0],
            headers: [
              'Cas',
              'этот (M)',
              'это (N)',
              'эта (F)',
              'эти (pl.)',
              'тот (M) / та (F)',
              'те (pl.)',
            ],
            rows: [
              ['Nominatif', 'этот', 'это', 'эта', 'эти', 'тот / та', 'те'],
              ['Génitif', 'этого', 'этого', 'этой', 'этих', 'того / той', 'тех'],
              ['Datif', 'этому', 'этому', 'этой', 'этим', 'тому / той', 'тем'],
              ['Acc. (inan.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
              ['Acc. (anim.)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
              ['Instrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
              ['Prépositionnel', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
            ],
          },
        },
        {
          h2: 'Partie 6 : prépositions → cas (mémo rapide)',
          content:
            'Ce tableau associe les principales prépositions russes au **cas qu’elles réclament**.\n\nApprendre les prépositions **avec leur cas** est indispensable — cela supprime une des plus grosses sources d’erreurs.',
          subsections: [
            {
              h3: 'Important : В et НА sont ambiguës (deux cas)',
              content:
                '**в / на + accusatif** = **direction** (mouvement vers un lieu). **в / на + prépositionnel** = **lieu** (être dans / sur).\n\nExemple : Я иду в школу. (on va → accusatif) vs. Я в школе. (on y est → prépositionnel).',
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
                'в, на (direction), за, через, под (mouvement), про, о (choc)',
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
          h2: 'Partie 7 : sept règles d’orthographe qui touchent aux terminaisons',
          content:
            'Les règles orthographiques du russe peuvent **annuler** la terminaison « attendue ».\n\nTout apprenant doit les connaître — elles expliquent pourquoi certains noms et adjectifs **ne suivent pas** le schéma standard.',
          subsections: [
            {
              h3: 'Règle 1 : les 8 lettres (К, Г, Х, Ж, Ш, Щ, Ч, Ц)',
              content:
                'Après **г, к, х, ж, ш, щ, ч, ц** — écrivez toujours **И** au lieu de Ы. книга → книги (pas книгы), ручка → ручки (pas ручкы).\n\nCela concerne notamment le pluriel nominatif, le génitif singulier des féminins et les adjectifs.',
            },
            {
              h3: 'Règle 2 : les 7 lettres (Ж, Ш, Щ, Ч, Ц — voyelles accentuées)',
              content:
                'Après ж, ш, щ, ч, ц — **А** et non Я, **У** et non Ю (syllabe accentuée) ; **Е** et non О en syllabe inaccentuée.\n\nInstrumental singulier féminin : большой → большой (l’**-ой** accentué est correct), mais тушь → **тушью**. Cette règle interagit avec **-ом/-ем** des neutres.',
            },
            {
              h3: 'Règle 3 : voyelles « fugitives »',
              content:
                'Certains noms **perdent une voyelle** (о ou е) à la déclinaison — **voyelle fugitive** (беглая гласная).\n\nотец → отца (le е disparaît). день → дня (le е disparaît). лёд → льда (le е/ё disparaît).',
            },
            {
              h3: 'Règle 4 : comportement du signe mou ь',
              content:
                'Les féminins en **-ь** ne perdent pas le signe mou devant la terminaison — il fusionne avec elle.\n\nночь → **ночи** (génitif/datif/prépositionnel), **ночью** (instrumental). L’**-ью** à l’instrumental est typique de ces noms.',
            },
            {
              h3: 'Règle 5 : prépositionnel en -У (vestige du locatif)',
              content:
                'Un petit groupe de masculins prend **-у/-ю** au prépositionnel pour le **lieu** (pas le sujet de pensée). **в лесу** (dans la forêt) — pas в лесе. **в году** (dans l’année). **на берегу** (sur le rivage). **на полу** (par terre).\n\nUniquement avec в/на + lieu. Avec О, c’est le -е habituel : о лесе (à propos de la forêt).',
            },
          ],
        },
        {
          h2: 'Comment utiliser efficacement cette aide-mémoire',
          subsections: [
            {
              h3: 'Étape 1 — Commencez par les noms',
              content:
                'Le **tableau des noms** est la base. Maîtrisez-le en premier. Concentrez-vous sur les modèles les plus fréquents : **masculin dur** (-стол), **féminin dur** (-книга), **neutre dur** (-окно).\n\nIls couvrent la majorité des noms russes.',
            },
            {
              h3: 'Étape 2 — Puis les adjectifs',
              content:
                'Une fois les noms acquis, les adjectifs deviennent plus simples — la logique est proche.\n\nCommencez par les **adjectifs à thème dur** (новый), puis ajoutez les **thèmes mous** (синий).',
            },
            {
              h3: 'Étape 3 — Les pronoms à part',
              content:
                '**Les formes pronominales sont irrégulières** et se mémorisent une par une. Elles ne suivent pas les schémas des noms ni des adjectifs.\n\nUtilisez des cartes ou une appli de répétition espacée.',
            },
            {
              h3: 'Étape 4 — Les prépositions fixent le cas',
              content:
                'Les prépositions sont le **raccourci le plus rapide** vers le bon cas : si vous savez que **без** prend toujours le génitif et **к** toujours le datif, le cas est déjà choisi.\n\nPriorité absolue aux **paires préposition → cas**.',
            },
            {
              h3: 'Étape 5 — Phrases réelles',
              content:
                'Les tableaux ne suffisent pas. Après avoir révisé les terminaisons, entraînez-vous dans de **vraies phrases** russes.\n\nLisez, écoutez, et observez comment les locuteurs emploient les formes déclinées en contexte.',
            },
          ],
        },
      ],
      conclusion:
        'Cette aide-mémoire couvre **tout** le nécessaire : **les 6 cas** pour les noms (tous genres, singulier et pluriel), les adjectifs (thèmes durs et mous), les pronoms personnels et possessifs, les démonstratifs, et les paires préposition–cas.\n\n**Gardez cette référence sous la main** pendant votre apprentissage. Plus vous l’utiliserez avec de la pratique réelle, plus vite les terminaisons passeront de la mémoire consciente à la reconnaissance automatique.',
      conclusionOutro:
        'Pour une explication complète de ce que signifie chaque cas et comment l’employer, consultez nos guides détaillés :',
      ctaText: 'Entraînez les cas russes avec notre application',
      ctaHref: '/',
      faq: [
        {
          question:
            'Quelle terminaison de cas russe est la plus difficile à apprendre ?',
          answer:
            'Le **génitif pluriel** est souvent considéré comme le plus difficile : plusieurs formes concurrentes selon la classe du nom. Par exemple, les féminins en -а ont souvent une **terminaison zéro** (женщина → женщин), d’autres ajoutent **-ей** (ночь → ночей) ou **-ов/-ев** (certains masculins).',
        },
        {
          question: 'Les adjectifs russes s’accordent-ils toujours avec le nom ?',
          answer:
            'Oui, **toujours**. Un adjectif russe doit **s’accorder** avec son nom en genre, nombre et cas. Si le nom change de terminaison, l’adjectif change aussi. C’est l’**accord grammatical** : en russe, c’est obligatoire.',
        },
        {
          question: 'Existe-t-il des noms russes qui ne se déclinent pas ?',
          answer:
            'Oui. Un petit ensemble d’**emprunts** (несклоняемые существительные) ne varient jamais : **кофе**, **метро**, **пальто**, **такси**, **кино**. Ce sont des exceptions au système des cas.',
        },
        {
          question: 'Comment savoir si un nom est animé ou inanimé ?',
          answer:
            '**Animés :** personnes et animaux (человек, кот, студент, врач). **Inanimés :** objets, idées, abstractions (стол, книга, любовь, время). La grammaire russe classe parfois comme « animés » des choses qu’un francophone ne classerait pas ainsi — par ex. certaines pièces aux cartes ou aux échecs.',
        },
        {
          question:
            'Quelle différence entre génitif et accusatif pour les noms animés ?',
          answer:
            'Pour les **masculins animés**, la forme à l’accusatif est **identique** au génitif. C’est la règle **accusatif animé = génitif**. Ex. : студент → студента (gén.) = студента (acc.). On ne distingue les cas que par le contexte de la phrase.',
        },
      ],
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Terminaisons des cas russes : l’aide-mémoire ultime',
        description:
          'Aide-mémoire complète : tableau des noms, adjectifs, pronoms, prépositions par cas. Les 6 cas en un seul tableau.',
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
          'terminaisons cas russes, tableau déclinaison russe, aide-mémoire cas, pronoms russe, prépositions cas',
      },
    },
  },
  'russian-genitive-case': {
    fr_fr: russianGenitiveCaseFr,
    de_de: russianGenitiveCaseDe,
    tr_tr: russianGenitiveCaseTr,
    pl_pl: russianGenitiveCasePl,
  },
  'russian-accusative-case': {
    de_de: russianAccusativeCaseDe,
    fr_fr: russianAccusativeCaseFr,
    tr_tr: russianAccusativeCaseTr,
    pl_pl: russianAccusativeCasePl,
  },
  'russian-dative-case': {
    fr_fr: russianDativeCaseFr,
    de_de: russianDativeCaseDe,
    tr_tr: russianDativeCaseTr,
    pl_pl: russianDativeCasePl,
  },
  'russian-instrumental-case': {
    fr_fr: russianInstrumentalCaseFr,
    de_de: russianInstrumentalCaseDe,
    tr_tr: russianInstrumentalCaseTr,
    pl_pl: russianInstrumentalCasePl,
  },
  'russian-prepositional-case': {
    fr_fr: russianPrepositionalCaseFr,
    de_de: russianPrepositionalCaseDe,
    tr_tr: russianPrepositionalCaseTr,
    pl_pl: russianPrepositionalCasePl,
  },
  'how-to-practice-russian-cases': {
    fr_fr: howToPracticeRussianCasesFr,
    de_de: howToPracticeRussianCasesDe,
    tr_tr: howToPracticeRussianCasesTr,
    pl_pl: howToPracticeRussianCasesPl,
  },
  'top-10-russian-case-mistakes': {
    fr_fr: top10RussianCaseMistakesFr,
    de_de: top10RussianCaseMistakesDe,
    tr_tr: top10RussianCaseMistakesTr,
    pl_pl: top10RussianCaseMistakesPl,
  },
  'russian-prepositions-and-cases': {
    fr_fr: russianPrepositionsAndCasesFr,
    de_de: russianPrepositionsAndCasesDe,
    tr_tr: russianPrepositionsAndCasesTr,
    pl_pl: russianPrepositionsAndCasesPl,
  },
  'russian-prepositions-cases-cheat-sheet': {
    fr_fr: russianPrepositionsCasesCheatSheetFr,
    de_de: russianPrepositionsCasesCheatSheetDe,
    tr_tr: russianPrepositionsCasesCheatSheetTr,
    pl_pl: russianPrepositionsCasesCheatSheetPl,
  },
  'top-10-apps-russian': {
    fr_fr: top10AppsRussianFr,
    de_de: top10AppsRussianDe,
    tr_tr: top10AppsRussianTr,
    pl_pl: top10AppsRussianPl,
  },
  'best-apps-learn-russian-grammar': {
    fr_fr: bestAppsLearnRussianGrammarFr,
    de_de: bestAppsLearnRussianGrammarDe,
    tr_tr: bestAppsLearnRussianGrammarTr,
    pl_pl: bestAppsLearnRussianGrammarPl,
  },
  'best-free-resources-learn-russian': {
    fr_fr: bestFreeResourcesLearnRussianFr,
    de_de: bestFreeResourcesLearnRussianDe,
    tr_tr: bestFreeResourcesLearnRussianTr,
    pl_pl: bestFreeResourcesLearnRussianPl,
  },
  'russian-cases-explained-beginners-guide': {
    fr_fr: russianCasesExplainedBeginnersGuideFr,
    de_de: russianCasesExplainedBeginnersGuideDe,
    tr_tr: russianCasesExplainedBeginnersGuideTr,
    pl_pl: russianCasesExplainedBeginnersGuidePl,
  },
  'how-long-learn-russian': {
    fr_fr: howLongLearnRussianFr,
    de_de: howLongLearnRussianDe,
    tr_tr: howLongLearnRussianTr,
    pl_pl: howLongLearnRussianPl,
  },
  'torfl-trki-russian-language-exam-guide':
    torflTrkiRussianLanguageExamGuideTranslations,
};
