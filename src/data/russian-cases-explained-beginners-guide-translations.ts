/**
 * Traductions pour l'article russian-cases-explained-beginners-guide
 * À insérer dans learnArticleTranslations.ts
 */
import type { LearnArticle } from './learnArticles';
import type { LandingLanguage } from '@/data/website/landingTranslations';

export const russianCasesExplainedBeginnersGuideTranslations: Partial<
  Record<LandingLanguage, LearnArticle>
> = {
  fr_fr: {
    slug: 'russian-cases-explained-beginners-guide',
    title: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    metaTitle:
      'Les cas russes expliqués simplement : guide visuel pour débutants | Russian Cases with Anna',
    metaDescription:
      'Les 6 cas grammaticaux russes expliqués en français avec des exemples simples. Comprendre nominatif, accusatif, génitif, datif, instrumental et prépositionnel en 10 minutes.',
    keywords: [
      'cas russes expliqués',
      'cas russes débutants',
      'cas grammaticaux russes simple',
      'comprendre les cas russes',
      'exemples cas russes',
      '6 cas russes',
    ],
    h1: 'Les cas russes expliqués simplement : guide visuel pour débutants',
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: 'Les 6 cas russes expliqués simplement pour les débutants',
      width: 1200,
      height: 630,
    },
    intro:
      "Le russe possède **6 cas grammaticaux**, et c'est le plus gros obstacle pour les anglophones qui apprennent la langue. Mais bonne nouvelle : les cas ne sont pas aussi effrayants qu'ils en ont l'air. Chaque cas répond à une question simple, et une fois que vous comprenez **ce que fait chaque cas**, les terminaisons deviennent bien plus faciles à apprendre.\n\nCe guide explique les 6 cas russes en **français simple**, avec un exemple clair pour chacun. Pas de jargon linguistique, pas de tableaux écrasants — juste l'essentiel pour bien démarrer.",
    whatYouLearn: [
      "**Ce qu'est un cas grammatical** et pourquoi le russe les utilise",
      "**Les 6 cas expliqués** avec un exemple simple pour chacun",
      "**Quels cas apprendre en premier** (ordre de priorité pour débutants)",
      "**Comment les terminaisons des noms changent** — aperçu simplifié",
      "**Où pratiquer** — quiz gratuit et ressources",
    ],
    leadMagnetCta: {
      title: 'Prêt à pratiquer les cas russes ?',
      description:
        "Téléchargez Russian Cases with Anna — la seule app 100 % dédiée à la maîtrise des déclinaisons russes. 128 leçons, 136 quiz, 400+ mots. Gratuite sur iOS et Android.",
      ctaText: "Télécharger l'app — Gratuit",
      ctaHref: '/',
    },
    sections: [
      {
        h2: "Qu'est-ce qu'un cas grammatical ?",
        content:
          "En anglais, l'**ordre des mots** indique qui fait quoi dans une phrase. « The dog bites the man » et « The man bites the dog » ont des sens complètement différents — le sujet vient toujours en premier.\n\nLe russe fonctionne autrement. Au lieu de s'appuyer sur l'ordre des mots, le russe modifie la **terminaison du mot** pour indiquer son rôle dans la phrase. Ces terminaisons différentes sont appelées **cas**.\n\nPensez-y ainsi : en anglais, vous dites « **I** see **him** » (pas « me see he »). Les mots « I/me » et « he/him » changent de forme selon leur rôle. Le russe fait pareil — mais pour **chaque nom, adjectif et pronom** de la langue.\n\nIl y a **6 cas** en russe. Chacun répond à une question précise et marque un rôle grammatical spécifique.",
      },
      {
        h2: "Les 6 cas russes en un coup d'œil",
        content:
          "Avant d'entrer dans le détail de chaque cas, voici un aperçu rapide. Chaque cas répond à une question et modifie la terminaison du nom en conséquence :",
        table: {
          headers: ['Cas', 'Nom russe', 'Question', 'Exemple'],
          rows: [
            ['Nominatif', 'Именительный', 'Qui ? Quoi ?', 'Кошка спит — Le chat dort'],
            ['Accusatif', 'Винительный', 'Qui ? Quoi ? (objet)', 'Я вижу кошку — Je vois le chat'],
            ['Génitif', 'Родительный', 'De qui ? De quoi ?', 'Нет кошки — Il n\'y a pas de chat'],
            ['Datif', 'Дательный', 'À qui ? Pour qui ?', 'Дай кошке — Donne au chat'],
            ['Instrumental', 'Творительный', 'Par qui ? Avec quoi ?', 'С кошкой — Avec le chat'],
            ['Prépositionnel', 'Предложный', 'À propos de qui ? Où ?', 'О кошке — À propos du chat'],
          ],
          caption: 'Les 6 cas russes avec questions et exemples utilisant кошка (chat)',
          accentColumnIndices: [3],
        },
        bullets: [
          "Remarquez comment le mot **кошка** (chat) change de terminaison à chaque cas : кошка → кошку → кошки → кошке → кошкой → кошке",
          "Ce schéma de terminaisons s'appelle la **déclinaison** — et chaque nom russe en suit une",
        ],
      },
      {
        h2: 'Cas 1 : Nominatif (Именительный) — Le sujet',
        content:
          "Le nominatif est la **forme par défaut** d'un mot — celle que vous trouvez dans le dictionnaire. Il répond aux questions **Кто ? (Qui ?)** et **Что ? (Quoi ?)**.\n\nVous utilisez le nominatif pour le **sujet** d'une phrase — la personne ou la chose qui effectue l'action.",
        subsections: [
          {
            h3: 'Exemples',
            content:
              '**Мама** готовит ужин — **Maman** prépare le dîner\n\n**Книга** лежит на столе — **Le livre** est sur la table\n\n**Студент** читает — **L\'étudiant** lit',
          },
        ],
        bullets: [
          "Le nominatif est le **cas le plus facile** — pas de changement de terminaison nécessaire",
          "Chaque phrase russe a au moins un nom au nominatif",
          "C'est la forme que vous connaissez déjà des listes de vocabulaire",
        ],
      },
      {
        h2: 'Cas 2 : Accusatif (Винительный) — Le complément d\'objet direct',
        content:
          "L'accusatif répond à **Кого ? (Qui ?)** et **Что ? (Quoi ?)** — mais cette fois comme **objet** de l'action, pas le sujet. Il marque la chose sur laquelle on agit.\n\nL'accusatif est aussi utilisé avec les **verbes de mouvement** pour indiquer la direction (aller **vers** quelque part).",
        subsections: [
          {
            h3: 'Exemples',
            content:
              'Я вижу **маму** — Je vois **maman** (мама → маму)\n\nОн читает **книгу** — Il lit **le livre** (книга → книгу)\n\nМы идём **в школу** — Nous allons **à l\'école** (школа → школу)',
          },
        ],
        bullets: [
          "Pour les **noms féminins**, -а devient **-у** (мама → маму)",
          "Pour les **noms masculins inanimés**, l'accusatif est identique au nominatif (стол → стол)",
          "Pour les **noms masculins animés**, l'accusatif ressemble au génitif (студент → студента)",
        ],
      },
      {
        h2: 'Cas 3 : Génitif (Родительный) — Possession et absence',
        content:
          "Le génitif répond à **Кого ? (De qui ?)** et **Чего ? (De quoi ?)**. C'est le cas de la **possession** (comme « de » ou « 's » en anglais), de l'**absence** (il n'y a pas de...), et des **quantités**.\n\nC'est l'un des cas les plus fréquemment utilisés en russe — vous le rencontrerez partout.",
        subsections: [
          {
            h3: 'Exemples',
            content:
              'Книга **мамы** — Le livre **de maman** (мама → мамы)\n\nНет **воды** — Il n\'y a pas **d\'eau** (вода → воды)\n\nСтакан **молока** — Un verre **de lait** (молоко → молока)\n\nУ **студента** есть книга — **L\'étudiant** a un livre (студент → студента)',
          },
        ],
        bullets: [
          "Pour les **noms féminins**, -а devient **-ы** ou **-и** (мама → мамы, книга → книги)",
          "Pour les **noms masculins**, ajoutez **-а** ou **-я** (студент → студента, учитель → учителя)",
          "Utilisé après les **nombres 2-4** et après **нет** (négation)",
        ],
      },
      {
        h2: 'Cas 4 : Datif (Дательный) — Le complément d\'objet indirect',
        content:
          "Le datif répond à **Кому ? (À qui ?)** et **Чему ? (À quoi ?)**. Il marque le **destinataire** d'une action — la personne à qui quelque chose est donné, dit ou fait.\n\nLe datif est aussi utilisé dans des expressions courantes sur l'**âge** et les **sentiments**.",
        subsections: [
          {
            h3: 'Exemples',
            content:
              'Я дал книгу **маме** — J\'ai donné le livre **à maman** (мама → маме)\n\n**Мне** 25 лет — **J\'ai** 25 ans (я → мне)\n\n**Студенту** нужна помощь — **L\'étudiant** a besoin d\'aide (студент → студенту)',
          },
        ],
        bullets: [
          "Pour les **noms féminins**, -а devient **-е** (мама → маме)",
          "Pour les **noms masculins**, ajoutez **-у** ou **-ю** (студент → студенту)",
          "Utilisé dans les expressions d'âge : **Мне** 20 лет (littéralement : « à moi 20 ans »)",
        ],
      },
      {
        h2: 'Cas 5 : Instrumental (Творительный) — Moyen et compagnie',
        content:
          "L'instrumental répond à **Кем ? (Par qui ?)** et **Чем ? (Avec quoi ?)**. Il décrit l'**instrument ou le moyen** utilisé pour faire quelque chose, ainsi que la **compagnie** (avec quelqu'un).\n\nIl est aussi utilisé après le verbe **быть** (être) pour décrire les professions.",
        subsections: [
          {
            h3: 'Exemples',
            content:
              'Я пишу **ручкой** — J\'écris **avec un stylo** (ручка → ручкой)\n\nОна работает **учительницей** — Elle travaille **comme enseignante** (учительница → учительницей)\n\nЯ иду **с мамой** — Je vais **avec maman** (мама → мамой)',
          },
        ],
        bullets: [
          "Pour les **noms féminins**, -а devient **-ой** ou **-ей** (мама → мамой, земля → землёй)",
          "Pour les **noms masculins**, ajoutez **-ом** ou **-ем** (студент → студентом)",
          "Toujours utilisé après la préposition **с** (avec) pour la compagnie",
        ],
      },
      {
        h2: 'Cas 6 : Prépositionnel (Предложный) — Lieu et sujet',
        content:
          "Le prépositionnel répond à **О ком? (À propos de qui ?)** et **О чём? (À propos de quoi ?)**. Comme son nom l'indique, il est **toujours utilisé avec une préposition** — le plus souvent **в** (dans), **на** (sur/à) et **о** (à propos de).\n\nC'est le seul cas russe qui ne peut jamais apparaître sans préposition.",
        subsections: [
          {
            h3: 'Exemples',
            content:
              'Я живу **в Москве** — Je vis **à Moscou** (Москва → Москве)\n\nОн думает **о маме** — Il pense **à maman** (мама → маме)\n\nКнига **на столе** — Le livre est **sur la table** (стол → столе)',
          },
        ],
        bullets: [
          "Pour les **noms féminins**, -а devient **-е** (мама → маме, Москва → Москве)",
          "Pour les **noms masculins**, ajoutez **-е** (стол → столе, студент → студенте)",
          "Le prépositionnel et le datif ont souvent des **terminaisons identiques** — le contexte les distingue",
        ],
      },
      {
        h2: 'Quels cas apprendre en premier ?',
        content:
          "Vous n'avez pas besoin de maîtriser les 6 cas d'un coup. Voici l'**ordre d'apprentissage recommandé** selon la fréquence et la difficulté :",
        bullets: [
          "**1. Nominatif** — Vous le connaissez déjà (forme du dictionnaire)",
          "**2. Accusatif** — Essentiel pour les phrases de base (« Je mange du pain », « Je vois un chien »)",
          "**3. Génitif** — Très courant (possession, négation, quantités)",
          "**4. Prépositionnel** — Relativement facile (toujours avec préposition, terminaisons simples)",
          "**5. Datif** — Moins fréquent mais important (compléments indirects, âge)",
          "**6. Instrumental** — Le moins courant à l'oral, mais toujours essentiel",
        ],
      },
      {
        h2: 'Commencez à pratiquer maintenant',
        content:
          "Comprendre les cas est la première étape. La suivante est la **pratique active** — voir et choisir les bonnes formes de façon répétée jusqu'à ce que cela devienne automatique.\n\nComment commencer :\n\n• Faites notre **quiz de déclinaison en ligne gratuit** sur russiandeclensions.com/practice — choisissez les cas à pratiquer et répondez à 10 questions à choix multiples parmi plus de 400 noms russes.\n\n• Parcourez nos **tableaux de déclinaison complets** sur russiandeclensions.com/words — voyez comment chaque mot change dans les 6 cas.\n\n• Téléchargez l'**application Russian Cases with Anna** pour des leçons de grammaire structurées avec quiz interactifs, répétition espacée et accès hors ligne.",
      },
    ],
    conclusion:
      "Les cas russes sont simplement des **étiquettes pour les rôles des mots** dans une phrase. Le nominatif est l'acteur, l'accusatif est le receveur, le génitif montre la possession, le datif marque le destinataire, l'instrumental décrit le moyen, et le prépositionnel indique le lieu ou le sujet.\n\nUne fois que vous comprenez **ce que signifie chaque cas**, apprendre les terminaisons devient une affaire de reconnaissance de motifs et de pratique. N'essayez pas de mémoriser toutes les terminaisons d'un coup — apprenez un cas à la fois, pratiquez jusqu'à ce que ce soit naturel, puis passez au suivant.",
    conclusionBullets: [
      "**6 cas, 6 rôles** — chaque cas répond à une question spécifique",
      "**Commencez par l'accusatif et le génitif** — les deux cas les plus courants après le nominatif",
      "**Pratiquez avec de vrais mots** — utilisez notre quiz et nos tableaux de déclinaison",
      "**Un cas à la fois** — ne vous submergez pas avec les 6 d'un coup",
      "**La régularité gagne** — 10 minutes par jour valent mieux que 2 heures une fois par semaine",
    ],
    conclusionOutro:
      'Approfondissez chaque cas avec nos guides détaillés :',
    internalLinks: [
      { href: '/learn/lessons/russian-cases-complete-guide', label: 'Le guide complet des cas russes — les 6 cas en profondeur' },
      { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Aide-mémoire des terminaisons — toutes les terminaisons en un tableau' },
      { href: '/practice/accusative', label: "Pratiquer l'accusatif — quiz gratuit" },
      { href: '/practice/genitive', label: 'Pratiquer le génitif — quiz gratuit' },
      { href: '/words', label: 'Parcourir 400+ mots russes — tableaux de déclinaison complets' },
    ],
    ctaText: 'Commencer à pratiquer les cas russes maintenant',
    ctaHref: '/practice',
    faq: [
      {
        question: "Combien de cas le russe a-t-il ?",
        answer:
          "Le russe possède **6 cas grammaticaux** : Nominatif (Именительный), Accusatif (Винительный), Génitif (Родительный), Datif (Дательный), Instrumental (Творительный) et Prépositionnel (Предложный). Chaque cas modifie la terminaison des noms, adjectifs et pronoms pour indiquer leur rôle dans la phrase.",
      },
      {
        question: "Quel est le cas russe le plus difficile à apprendre ?",
        answer:
          "La plupart des apprenants trouvent le **génitif** le plus difficile car il a le plus d'usages (possession, absence, quantités, après les nombres, après de nombreuses prépositions) et des terminaisons plurielles irrégulières. Cependant, chaque cas a ses défis selon votre langue maternelle.",
      },
      {
        question: "Dois-je vraiment apprendre les 6 cas russes ?",
        answer:
          "Oui — les 6 cas sont activement utilisés en russe moderne. Vous ne pouvez pas former des phrases correctes sans eux. Cependant, vous n'avez pas besoin de tous les apprendre d'un coup. Commencez par le **nominatif** et l'**accusatif**, puis ajoutez les autres progressivement.",
      },
      {
        question: "Quel est le cas russe le plus facile ?",
        answer:
          "Le **nominatif** est le plus facile car c'est la forme du dictionnaire — pas de changement de terminaison. Ensuite, le **prépositionnel** est souvent considéré comme le plus facile car il apparaît toujours avec une préposition et a des terminaisons relativement simples et régulières (-е pour la plupart des noms).",
      },
      {
        question: "Combien de temps faut-il pour apprendre les cas russes ?",
        answer:
          "Avec une pratique quotidienne régulière, la plupart des apprenants peuvent comprendre le concept de base des 6 cas en **quelques semaines** et les utiliser confortablement dans des phrases simples en **3 à 6 mois**. La maîtrise complète (y compris toutes les formes irrégulières et les déclinaisons au pluriel) prend généralement **1 à 2 ans** d'étude régulière.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Les cas russes expliqués simplement : guide visuel pour débutants',
      description:
        "Les 6 cas grammaticaux russes expliqués en français avec des exemples simples. Nominatif, accusatif, génitif, datif, instrumental et prépositionnel rendus accessibles.",
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
      },
      keywords:
        'cas russes expliqués, cas russes débutants, 6 cas russes, cas grammaticaux russes simple, comprendre cas russes',
    },
  },
  tr_tr: {
    slug: 'russian-cases-explained-beginners-guide',
    title: 'Rusça Halleri Basitçe Açıklandı: Başlangıç İçin Görsel Rehber',
    metaTitle:
      'Rusça Halleri Basitçe Açıklandı: Başlangıç İçin Görsel Rehber | Russian Cases with Anna',
    metaDescription:
      '6 Rusça gramer halini basit örneklerle Türkçe açıklama. Nominatif, aküzatif, genitif, datif, alet ve ilgeç hallerini 10 dakikada anlayın.',
    keywords: [
      'rusça halleri açıklama',
      'rusça halleri başlangıç',
      'rusça gramer halleri basit',
      'rusça halleri anlama',
      'rusça haller örnekleri',
      '6 rusça hal',
    ],
    h1: 'Rusça Halleri Basitçe Açıklandı: Başlangıç İçin Görsel Rehber',
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: 'Başlangıç için 6 Rusça hal basitçe açıklandı',
      width: 1200,
      height: 630,
    },
    intro:
      "Rusçada **6 gramer hali** vardır ve İngilizce konuşanlar için en büyük engeldir. Ama iyi haber: haller göründükleri kadar korkutucu değil. Her hal basit bir soruya cevap verir ve **her halin ne işe yaradığını** anladığınızda, son ekleri öğrenmek çok daha kolay hale gelir.\n\nBu rehber tüm 6 Rusça halini **sade Türkçe** ile, her biri için bir net örnekle açıklıyor. Dilbilim jargonu yok, bunaltıcı tablolar yok — sadece başlamanız için gereken temel bilgiler.",
    whatYouLearn: [
      "**Gramer halinin ne olduğunu** ve Rusçanın neden kullandığını",
      "**6 halin tamamını** her biri için bir basit örnekle",
      "**Önce hangi halleri öğrenmeniz gerektiğini** (başlangıç öncelik sırası)",
      "**İsim son eklerinin nasıl değiştiğini** — sadeleştirilmiş genel bakış",
      "**Nerede pratik yapacağınızı** — ücretsiz quiz ve kaynaklar",
    ],
    leadMagnetCta: {
      title: 'Rusça halleri pratik etmeye hazır mısınız?',
      description:
        "Russian Cases with Anna'yı indirin — Rusça çekimlere tamamen adanmış tek uygulama. 128 ders, 136 quiz, 400+ kelime. iOS ve Android'de ücretsiz.",
      ctaText: "Uygulamayı indir — Ücretsiz",
      ctaHref: '/',
    },
    sections: [
      {
        h2: 'Gramer Hali Nedir?',
        content:
          "İngilizcede **kelime sırası** cümlede kimin ne yaptığını söyler. \"The dog bites the man\" ve \"The man bites the dog\" tamamen farklı anlamlar taşır — özne her zaman önce gelir.\n\nRusça farklı çalışır. Kelime sırasına güvenmek yerine, Rusça kelimenin cümledeki rolünü göstermek için **kelimenin sonunu** değiştirir. Bu farklı son ekler **haller** olarak adlandırılır.\n\nŞöyle düşünün: İngilizcede \"**I** see **him**\" dersiniz (\"me see he\" değil). \"I/me\" ve \"he/him\" kelimeleri rollerine göre biçim değiştirir. Rusça da aynı şeyi yapar — ama dildeki **her tekil isim, sıfat ve zamir** için.\n\nRusçada **6 hal** vardır. Her biri belirli bir soruya cevap verir ve belirli bir gramer rolünü işaretler.",
      },
      {
        h2: '6 Rusça Hali Bir Bakışta',
        content:
          "Her hale girmeden önce, hızlı bir genel bakış. Her hal bir soruya cevap verir ve isim sonunu buna göre değiştirir:",
        table: {
          headers: ['Hal', 'Rusça Adı', 'Soru', 'Örnek'],
          rows: [
            ['Nominatif', 'Именительный', 'Kim? Ne?', 'Кошка спит — Kedi uyuyor'],
            ['Aküzatif', 'Винительный', 'Kim? Ne? (nesne)', 'Я вижу кошку — Kediyi görüyorum'],
            ['Genitif', 'Родительный', 'Kimin? Neyin?', 'Нет кошки — Kedi yok'],
            ['Datif', 'Дательный', 'Kime? Kim için?', 'Дай кошке — Kedilik ver'],
            ['Alet', 'Творительный', 'Kim tarafından? Neyle?', 'С кошкой — Kedilik ile'],
            ['İlgeç', 'Предложный', 'Kim hakkında? Nerede?', 'О кошке — Kedi hakkında'],
          ],
          caption: 'кошка (kedi) kullanan 6 Rusça hal, sorular ve örnekler',
          accentColumnIndices: [3],
        },
        bullets: [
          "**кошка** (kedi) kelimesinin her halde sonunun nasıl değiştiğine dikkat edin: кошка → кошку → кошки → кошке → кошкой → кошке",
          "Bu son ek desenine **çekim** denir — ve her Rusça isim birini takip eder",
        ],
      },
      {
        h2: 'Hal 1: Nominatif (Именительный) — Özne',
        content:
          "Nominatif hali, kelimenin **varsayılan biçimidir** — sözlükte bulduğunuz. **Кто? (Kim?)** ve **Что? (Ne?)** sorularına cevap verir.\n\nCümlenin **özne**si — eylemi gerçekleştiren kişi veya şey — için nominatifi kullanırsınız.",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              '**Мама** готовит ужин — **Anne** akşam yemeği pişiriyor\n\n**Книга** лежит на столе — **Kitap** masanın üzerinde\n\n**Студент** читает — **Öğrenci** okuyor',
          },
        ],
        bullets: [
          "Nominatif **en kolay hal**dir — son ek değişikliği gerekmez",
          "Her Rusça cümlede en az bir nominatif isim vardır",
          "Bu, kelime listelerinden zaten bildiğiniz biçimdir",
        ],
      },
      {
        h2: 'Hal 2: Aküzatif (Винительный) — Belirtili Nesne',
        content:
          "Aküzatif **Кого? (Kim?)** ve **Что? (Ne?)** sorularına cevap verir — ama bu kez eylemin **nesnesi** olarak, özne değil. Üzerinde işlem yapılan şeyi işaretler.\n\nAküzatif **hareket fiilleri** ile yön belirtmek için de kullanılır (bir yere **giderken**).",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              'Я вижу **маму** — **Anneyi** görüyorum (мама → маму)\n\nОн читает **книгу** — **Kitabı** okuyor (книга → книгу)\n\nМы идём **в школу** — **Okula** gidiyoruz (школа → школу)',
          },
        ],
        bullets: [
          "**Dişil isimler** için -а **-у** olur (мама → маму)",
          "**Eril cansız** isimler için aküzatif nominatif ile aynı görünür (стол → стол)",
          "**Eril canlı** isimler için aküzatif genitif gibi görünür (студент → студента)",
        ],
      },
      {
        h2: 'Hal 3: Genitif (Родительный) — Sahiplik ve Yokluk',
        content:
          "Genitif **Кого? (Kimin?)** ve **Чего? (Neyin?)** sorularına cevap verir. **Sahiplik** (İngilizcede \"of\" veya \"'s\" gibi), **yokluk** (...yok) ve **miktarlar** halidir.\n\nBu Rusçada en sık kullanılan hallerden biridir — her yerde karşınıza çıkar.",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              'Книга **мамы** — **Annenin** kitabı (мама → мамы)\n\nНет **воды** — **Su** yok (вода → воды)\n\nСтакан **молока** — Bir bardak **süt** (молоко → молока)\n\nУ **студента** есть книга — **Öğrencinin** kitabı var (студент → студента)',
          },
        ],
        bullets: [
          "**Dişil isimler** için -а **-ы** veya **-и** olur (мама → мамы, книга → книги)",
          "**Eril isimler** için **-а** veya **-я** eklenir (студент → студента, учитель → учителя)",
          "**2-4 sayıları**ndan ve **нет** (olumsuzluk) sonrasında kullanılır",
        ],
      },
      {
        h2: 'Hal 4: Datif (Дательный) — Dolaylı Nesne',
        content:
          "Datif **Кому? (Kime?)** ve **Чему? (Neye?)** sorularına cevap verir. Eylemin **alıcısını** işaretler — bir şeyin verildiği, söylendiği veya yapıldığı kişi.\n\nDatif ayrıca **yaş** ve **duygular** hakkındaki yaygın ifadelerde kullanılır.",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              'Я дал книгу **маме** — Kitabı **anneye** verdim (мама → маме)\n\n**Мне** 25 лет — **25 yaşındayım** (я → мне)\n\n**Студенту** нужна помощь — **Öğrencinin** yardıma ihtiyacı var (студент → студенту)',
          },
        ],
        bullets: [
          "**Dişil isimler** için -а **-е** olur (мама → маме)",
          "**Eril isimler** için **-у** veya **-ю** eklenir (студент → студенту)",
          "Yaş ifadelerinde kullanılır: **Мне** 20 лет (kelimenin tam anlamıyla: \"bana 20 yıl\")",
        ],
      },
      {
        h2: 'Hal 5: Alet (Творительный) — Araç ve Birliktelik',
        content:
          "Alet **Кем? (Kim tarafından?)** ve **Чем? (Neyle?)** sorularına cevap verir. Bir şeyi yapmak için kullanılan **araç veya aracı** ve **birlikteliği** (biriyle) tanımlar.\n\n**быть** (olmak) fiilinden sonra meslekleri tanımlamak için de kullanılır.",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              'Я пишу **ручкой** — **Kalemle** yazıyorum (ручка → ручкой)\n\nОна работает **учительницей** — **Öğretmen olarak** çalışıyor (учительница → учительницей)\n\nЯ иду **с мамой** — **Anneyle** gidiyorum (мама → мамой)',
          },
        ],
        bullets: [
          "**Dişil isimler** için -а **-ой** veya **-ей** olur (мама → мамой, земля → землёй)",
          "**Eril isimler** için **-ом** veya **-ем** eklenir (студент → студентом)",
          "Birliktelik için **с** (ile) edatından sonra her zaman kullanılır",
        ],
      },
      {
        h2: 'Hal 6: İlgeç (Предложный) — Yer ve Konu',
        content:
          "İlgeç **О ком? (Kim hakkında?)** ve **О чём? (Ne hakkında?)** sorularına cevap verir. Adından anlaşılacağı gibi **her zaman bir edatla** kullanılır — en yaygın olarak **в** (içinde), **на** (üzerinde/yer) ve **о** (hakkında).\n\nBu, edat olmadan asla görünemeyen tek Rusça haldir.",
        subsections: [
          {
            h3: 'Örnekler',
            content:
              'Я живу **в Москве** — **Moskova\'da** yaşıyorum (Москва → Москве)\n\nОн думает **о маме** — **Anne hakkında** düşünüyor (мама → маме)\n\nКнига **на столе** — Kitap **masanın üzerinde** (стол → столе)',
          },
        ],
        bullets: [
          "**Dişil isimler** için -а **-е** olur (мама → маме, Москва → Москве)",
          "**Eril isimler** için **-е** eklenir (стол → столе, студент → студенте)",
          "İlgeç ve datif genellikle **aynı son ekleri** taşır — bağlam onları ayırır",
        ],
      },
      {
        h2: 'Önce Hangi Halleri Öğrenmelisiniz?',
        content:
          "6 halin hepsini bir anda ustalaştırmanız gerekmez. Frekans ve zorluğa göre önerilen **öğrenme sırası**:",
        bullets: [
          "**1. Nominatif** — Bunu zaten biliyorsunuz (sözlük biçimi)",
          "**2. Aküzatif** — Temel cümleler için gerekli (\"Ekmek yiyorum\", \"Köpek görüyorum\")",
          "**3. Genitif** — Çok yaygın (sahiplik, olumsuzluk, miktarlar)",
          "**4. İlgeç** — Nispeten kolay (her zaman edatla, basit son ekler)",
          "**5. Datif** — Daha az sık ama önemli (dolaylı nesneler, yaş)",
          "**6. Alet** — Günlük konuşmada en az yaygın ama yine de gerekli",
        ],
      },
      {
        h2: 'Şimdi Pratik Yapmaya Başlayın',
        content:
          "Halleri anlamak ilk adımdır. Sonraki adım **aktif pratik** — doğru formları tekrar tekrar görüp seçmek, otomatik olana kadar.\n\nNasıl başlanır:\n\n• russiandeclensions.com/practice adresindeki **ücretsiz çevrimiçi çekim quiz**imize katılın — hangi halleri pratik edeceğinizi seçin ve 400+ gerçek Rusça isimden 10 çoktan seçmeli soruyu cevaplayın.\n\n• russiandeclensions.com/words adresindeki **tam çekim tablolarımızı** inceleyin — her kelimenin 6 halde nasıl değiştiğini görün.\n\n• Yapılandırılmış gramer dersleri, etkileşimli quizler, aralıklı tekrar ve çevrimdışı erişim için **Russian Cases with Anna** uygulamasını indirin.",
      },
    ],
    conclusion:
      "Rusça halleri cümledeki kelimelerin oynadığı **rollerin etiketleridir**. Nominatif yapan, aküzatif alan, genitif sahipliği gösterir, datif alıcıyı işaretler, alet aracı tanımlar ve ilgeç yeri veya konuyu belirtir.\n\n**Her halin ne anlama geldiğini** anladığınızda, son ekleri öğrenmek desen tanıma ve pratik meselesi haline gelir. Tüm son ekleri bir anda ezberlemeye çalışmayın — bir seferde bir hal öğrenin, doğal hissedene kadar pratik yapın, sonra sıradakine geçin.",
    conclusionBullets: [
      "**6 hal, 6 rol** — her hal belirli bir soruya cevap verir",
      "**Aküzatif ve genitif ile başlayın** — nominatiften sonra en yaygın iki hal",
      "**Gerçek kelimelerle pratik yapın** — quiz ve çekim tablolarımızı kullanın",
      "**Bir seferde bir hal** — kendinizi 6\'sıyla birden bunaltmayın",
      "**Tutarlılık kazanır** — haftada bir kez 2 saatten günde 10 dakika daha iyidir",
    ],
    conclusionOutro: 'Her hali detaylı rehberlerimizle derinleştirin:',
    internalLinks: [
      { href: '/learn/lessons/russian-cases-complete-guide', label: 'Rusça Halleri Tam Rehber — 6 hal derinlemesine' },
      { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Rusça Hal Son Ekleri Kopya Kağıdı — tüm son ekler tek tabloda' },
      { href: '/practice/accusative', label: 'Aküzatif Pratik — ücretsiz quiz' },
      { href: '/practice/genitive', label: 'Genitif Pratik — ücretsiz quiz' },
      { href: '/words', label: '400+ Rusça Kelime — tam çekim tabloları' },
    ],
    ctaText: 'Rusça halleri pratik etmeye başlayın',
    ctaHref: '/practice',
    faq: [
      {
        question: 'Rusçada kaç hal vardır?',
        answer:
          "Rusçada **6 gramer hali** vardır: Nominatif (Именительный), Aküzatif (Винительный), Genitif (Родительный), Datif (Дательный), Alet (Творительный) ve İlgeç (Предложный). Her hal, isimlerin, sıfatların ve zamirlerin cümledeki rollerini göstermek için sonlarını değiştirir.",
      },
      {
        question: 'Öğrenmesi en zor Rusça hal hangisi?',
        answer:
          "Çoğu öğrenci **Genitif halini** en zor bulur çünkü en çok kullanımı vardır (sahiplik, yokluk, miktarlar, sayılardan sonra, birçok edattan sonra) ve düzensiz çoğul son ekleri vardır. Ancak her halin kendi zorlukları vardır ve ana dilinize bağlıdır.",
      },
      {
        question: 'Gerçekten 6 Rusça halin hepsini öğrenmem gerekiyor mu?',
        answer:
          "Evet — 6 halin hepsi modern Rusçada aktif olarak kullanılır. Onlarsız doğru cümleler kuramazsınız. Ancak hepsini bir anda öğrenmeniz gerekmez. **Nominatif** ve **aküzatif** ile başlayın, sonra diğerlerini kademeli olarak ekleyin.",
      },
      {
        question: 'En kolay Rusça hal hangisi?',
        answer:
          "**Nominatif** en kolaydır çünkü sözlük biçimidir — son ek değişikliği yok. Sonrasında **ilgeç** genellikle en kolay öğrenilen olarak kabul edilir çünkü her zaman bir edatla görünür ve nispeten basit, tutarlı son ekleri vardır (-е çoğu isim için).",
      },
      {
        question: 'Rusça halleri öğrenmek ne kadar sürer?',
        answer:
          "Tutarlı günlük pratikle, çoğu öğrenci tüm 6 halin temel kavramını **birkaç haftada** anlayabilir ve basit cümlelerde rahatça kullanabilir **3-6 ay** içinde. Tam ustalık (tüm düzensiz formlar ve çoğul çekimler dahil) tipik olarak düzenli çalışmayla **1-2 yıl** sürer.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rusça Halleri Basitçe Açıklandı: Başlangıç İçin Görsel Rehber',
      description: '6 Rusça gramer halini basit örneklerle açıklama. Nominatif, aküzatif, genitif, datif, alet ve ilgeç kolay.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
      },
      keywords: 'rusça halleri açıklama, rusça halleri başlangıç, 6 rusça hal, rusça gramer halleri basit',
    },
  },
  de_de: {
    slug: 'russian-cases-explained-beginners-guide',
    title: 'Russische Fälle einfach erklärt: Ein visueller Anfänger-Guide',
    metaTitle:
      'Russische Fälle einfach erklärt: Ein visueller Anfänger-Guide | Russian Cases with Anna',
    metaDescription:
      'Die 6 russischen grammatischen Fälle einfach erklärt mit Beispielen. Nominativ, Akkusativ, Genitiv, Dativ, Instrumental und Präpositiv in 10 Minuten verstehen.',
    keywords: [
      'russische Fälle erklärt',
      'russische Fälle Anfänger',
      'russische grammatische Fälle einfach',
      'russische Fälle verstehen',
      'russische Fälle Beispiele',
      '6 russische Fälle',
    ],
    h1: 'Russische Fälle einfach erklärt: Ein visueller Anfänger-Guide',
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: 'Die 6 russischen Fälle einfach für Anfänger erklärt',
      width: 1200,
      height: 630,
    },
    intro:
      "Russisch hat **6 grammatische Fälle**, und sie sind das größte Hindernis für Englischsprachige beim Russischlernen. Aber die gute Nachricht: Fälle sind nicht so beängstigend, wie sie scheinen. Jeder Fall beantwortet eine einfache Frage, und sobald Sie verstehen, **was jeder Fall macht**, werden die Endungen viel leichter zu lernen.\n\nDieser Guide erklärt alle 6 russischen Fälle in **einfachem Deutsch**, mit einem klaren Beispiel für jeden. Kein linguistischer Jargon, keine überwältigenden Tabellen — nur das Wesentliche zum Einstieg.",
    whatYouLearn: [
      "**Was ein grammatischer Fall ist** und warum Russisch sie verwendet",
      "**Alle 6 Fälle erklärt** mit je einem einfachen Beispiel",
      "**Welche Fälle Sie zuerst lernen sollten** (Anfänger-Prioritätsreihenfolge)",
      "**Wie sich Substantivendungen ändern** — eine vereinfachte Übersicht",
      "**Wo Sie üben können** — kostenloser Quiz und Ressourcen",
    ],
    leadMagnetCta: {
      title: 'Bereit, russische Fälle zu üben?',
      description:
        'Laden Sie Russian Cases with Anna herunter — die einzige App, die 100 % den russischen Deklinationen gewidmet ist. 128 Lektionen, 136 Quiz, 400+ Wörter. Kostenlos für iOS und Android.',
      ctaText: 'App herunterladen — Kostenlos',
      ctaHref: '/',
    },
    sections: [
      {
        h2: 'Was ist ein grammatischer Fall?',
        content:
          "Im Englischen zeigt die **Wortstellung**, wer was in einem Satz tut. \"The dog bites the man\" und \"The man bites the dog\" bedeuten völlig unterschiedliche Dinge — das Subjekt kommt immer zuerst.\n\nRussisch funktioniert anders. Statt sich auf die Wortstellung zu verlassen, ändert Russisch die **Endung eines Wortes**, um seine Rolle im Satz zu zeigen. Diese unterschiedlichen Endungen heißen **Fälle**.\n\nDenken Sie so: Im Englischen sagen Sie \"**I** see **him**\" (nicht \"me see he\"). Die Wörter \"I/me\" und \"he/him\" ändern ihre Form je nach ihrer Rolle. Russisch macht dasselbe — aber für **jedes Substantiv, Adjektiv und Pronomen** der Sprache.\n\nEs gibt **6 Fälle** im Russischen. Jeder beantwortet eine bestimmte Frage und kennzeichnet eine bestimmte grammatische Rolle.",
      },
      {
        h2: 'Die 6 russischen Fälle auf einen Blick',
        content:
          'Bevor wir in jeden Fall eintauchen, hier eine kurze Übersicht. Jeder Fall beantwortet eine Frage und ändert die Substantivendung entsprechend:',
        table: {
          headers: ['Fall', 'Russischer Name', 'Frage', 'Beispiel'],
          rows: [
            ['Nominativ', 'Именительный', 'Wer? Was?', 'Кошка спит — Die Katze schläft'],
            ['Akkusativ', 'Винительный', 'Wen? Was? (Objekt)', 'Я вижу кошку — Ich sehe die Katze'],
            ['Genitiv', 'Родительный', 'Wessen? Von wem/von was?', 'Нет кошки — Es gibt keine Katze'],
            ['Dativ', 'Дательный', 'Wem? Für wen?', 'Дай кошке — Gib der Katze'],
            ['Instrumental', 'Творительный', 'Mit wem? Womit?', 'С кошкой — Mit der Katze'],
            ['Präpositiv', 'Предложный', 'Über wen? Wo?', 'О кошке — Über die Katze'],
          ],
          caption: 'Die 6 russischen Fälle mit Fragen und Beispielen mit кошка (Katze)',
          accentColumnIndices: [3],
        },
        bullets: [
          "Beachten Sie, wie das Wort **кошка** (Katze) seine Endung in jedem Fall ändert: кошка → кошку → кошки → кошке → кошкой → кошке",
          "Dieses Muster von Endungen heißt **Deklination** — und jedes russische Substantiv folgt einer",
        ],
      },
      {
        h2: 'Fall 1: Nominativ (Именительный) — Das Subjekt',
        content:
          "Der Nominativ ist die **Grundform** eines Wortes — die, die Sie im Wörterbuch finden. Er beantwortet die Fragen **Кто? (Wer?)** und **Что? (Was?)**.\n\nSie verwenden den Nominativ für das **Subjekt** eines Satzes — die Person oder Sache, die die Handlung ausführt.",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              '**Мама** готовит ужин — **Mama** kocht das Abendessen\n\n**Книга** лежит на столе — **Das Buch** liegt auf dem Tisch\n\n**Студент** читает — **Der Student** liest',
          },
        ],
        bullets: [
          "Der Nominativ ist der **einfachste Fall** — keine Endungsänderungen nötig",
          "Jeder russische Satz hat mindestens ein Substantiv im Nominativ",
          "Das ist die Form, die Sie bereits aus Vokabellisten kennen",
        ],
      },
      {
        h2: 'Fall 2: Akkusativ (Винительный) — Das direkte Objekt',
        content:
          "Der Akkusativ beantwortet **Кого? (Wen?)** und **Что? (Was?)** — aber diesmal als **Objekt** der Handlung, nicht als Subjekt. Er kennzeichnet die Sache, auf die eingewirkt wird.\n\nDer Akkusativ wird auch mit **Bewegungsverben** verwendet, um die Richtung anzugeben (wohin gehen).",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              'Я вижу **маму** — Ich sehe **Mama** (мама → маму)\n\nОн читает **книгу** — Er liest **das Buch** (книга → книгу)\n\nМы идём **в школу** — Wir gehen **zur Schule** (школа → школу)',
          },
        ],
        bullets: [
          "Bei **femininen Substantiven** wird -а zu **-у** (мама → маму)",
          "Bei **maskulinen unbelebten** Substantiven sieht der Akkusativ wie der Nominativ aus (стол → стол)",
          "Bei **maskulinen belebten** Substantiven sieht der Akkusativ wie der Genitiv aus (студент → студента)",
        ],
      },
      {
        h2: 'Fall 3: Genitiv (Родительный) — Besitz & Abwesenheit',
        content:
          "Der Genitiv beantwortet **Кого? (Wessen?)** und **Чего? (Wessen?)**. Er ist der Fall des **Besitzes** (wie \"von\" oder \"'s\" im Englischen), der **Abwesenheit** (es gibt kein...) und von **Mengen**.\n\nDies ist einer der am häufigsten verwendeten Fälle im Russischen — Sie werden ihm überall begegnen.",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              'Книга **мамы** — **Mamas** Buch (мама → мамы)\n\nНет **воды** — Es gibt kein **Wasser** (вода → воды)\n\nСтакан **молока** — Ein Glas **Milch** (молоко → молока)\n\nУ **студента** есть книга — **Der Student** hat ein Buch (студент → студента)',
          },
        ],
        bullets: [
          "Bei **femininen Substantiven** wird -а zu **-ы** oder **-и** (мама → мамы, книга → книги)",
          "Bei **maskulinen Substantiven** wird **-а** oder **-я** hinzugefügt (студент → студента, учитель → учителя)",
          "Wird nach **Zahlen 2-4** und nach **нет** (Verneinung) verwendet",
        ],
      },
      {
        h2: 'Fall 4: Dativ (Дательный) — Das indirekte Objekt',
        content:
          "Der Dativ beantwortet **Кому? (Wem?)** und **Чему? (Wem/Was?)**. Er kennzeichnet den **Empfänger** einer Handlung — die Person, der etwas gegeben, gesagt oder getan wird.\n\nDer Dativ wird auch in gebräuchlichen Ausdrücken über **Alter** und **Gefühle** verwendet.",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              'Я дал книгу **маме** — Ich gab das Buch **Mama** (мама → маме)\n\n**Мне** 25 лет — **Ich bin** 25 Jahre alt (я → мне)\n\n**Студенту** нужна помощь — **Der Student** braucht Hilfe (студент → студенту)',
          },
        ],
        bullets: [
          "Bei **femininen Substantiven** wird -а zu **-е** (мама → маме)",
          "Bei **maskulinen Substantiven** wird **-у** oder **-ю** hinzugefügt (студент → студенту)",
          "Wird in Altersausdrücken verwendet: **Мне** 20 лет (wörtlich: \"mir 20 Jahre\")",
        ],
      },
      {
        h2: 'Fall 5: Instrumental (Творительный) — Mittel & Begleitung',
        content:
          "Der Instrumental beantwortet **Кем? (Von wem?)** und **Чем? (Womit?)**. Er beschreibt das **Werkzeug oder Mittel**, mit dem etwas getan wird, sowie die **Begleitung** (mit jemandem).\n\nEr wird auch nach dem Verb **быть** (sein) verwendet, um Berufe zu beschreiben.",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              'Я пишу **ручкой** — Ich schreibe **mit einem Stift** (ручка → ручкой)\n\nОна работает **учительницей** — Sie arbeitet **als Lehrerin** (учительница → учительницей)\n\nЯ иду **с мамой** — Ich gehe **mit Mama** (мама → мамой)',
          },
        ],
        bullets: [
          "Bei **femininen Substantiven** wird -а zu **-ой** oder **-ей** (мама → мамой, земля → землёй)",
          "Bei **maskulinen Substantiven** wird **-ом** oder **-ем** hinzugefügt (студент → студентом)",
          "Wird immer nach der Präposition **с** (mit) für Begleitung verwendet",
        ],
      },
      {
        h2: 'Fall 6: Präpositiv (Предложный) — Ort & Thema',
        content:
          "Der Präpositiv beantwortet **О ком? (Über wen?)** und **О чём? (Über was?)**. Wie der Name sagt, wird er **immer mit einer Präposition** verwendet — am häufigsten **в** (in), **на** (auf/an) und **о** (über).\n\nDies ist der einzige russische Fall, der nie ohne Präposition vorkommen kann.",
        subsections: [
          {
            h3: 'Beispiele',
            content:
              'Я живу **в Москве** — Ich lebe **in Moskau** (Москва → Москве)\n\nОн думает **о маме** — Er denkt **an Mama** (мама → маме)\n\nКнига **на столе** — Das Buch liegt **auf dem Tisch** (стол → столе)',
          },
        ],
        bullets: [
          "Bei **femininen Substantiven** wird -а zu **-е** (мама → маме, Москва → Москве)",
          "Bei **maskulinen Substantiven** wird **-е** hinzugefügt (стол → столе, студент → студенте)",
          "Präpositiv und Dativ haben oft **identische Endungen** — der Kontext unterscheidet sie",
        ],
      },
      {
        h2: 'Welche Fälle sollten Sie zuerst lernen?',
        content:
          "Sie müssen nicht alle 6 Fälle auf einmal beherrschen. Hier die empfohlene **Lernreihenfolge** nach Häufigkeit und Schwierigkeit:",
        bullets: [
          "**1. Nominativ** — Den kennen Sie bereits (Wörterbuchform)",
          "**2. Akkusativ** — Unerlässlich für einfache Sätze (\"Ich esse Brot\", \"Ich sehe einen Hund\")",
          "**3. Genitiv** — Sehr häufig (Besitz, Verneinung, Mengen)",
          "**4. Präpositiv** — Relativ einfach (immer mit Präposition, einfache Endungen)",
          "**5. Dativ** — Weniger häufig aber wichtig (indirekte Objekte, Alter)",
          "**6. Instrumental** — Am wenigsten häufig in der Alltagssprache, aber dennoch unerlässlich",
        ],
      },
      {
        h2: 'Beginnen Sie jetzt mit dem Üben',
        content:
          "Die Fälle zu verstehen ist der erste Schritt. Der nächste ist **aktives Üben** — die richtigen Formen wiederholt sehen und wählen, bis es automatisch wird.\n\nSo beginnen Sie:\n\n• Machen Sie unseren **kostenlosen Online-Deklinations-Quiz** unter russiandeclensions.com/practice — wählen Sie, welche Fälle Sie üben möchten, und beantworten Sie 10 Multiple-Choice-Fragen aus über 400 echten russischen Substantiven.\n\n• Durchsuchen Sie unsere **vollständigen Deklinationstabellen** unter russiandeclensions.com/words — sehen Sie, wie jedes Wort sich in allen 6 Fällen ändert.\n\n• Laden Sie die **Russian Cases with Anna**-App herunter für strukturierte Grammatiklektionen mit interaktiven Quiz, Karteikarten und Offline-Zugang.",
      },
    ],
    conclusion:
      "Russische Fälle sind einfach **Etiketten für die Rollen, die Wörter** in einem Satz spielen. Der Nominativ ist der Handelnde, der Akkusativ der Empfänger, der Genitiv zeigt Besitz, der Dativ kennzeichnet den Empfänger, der Instrumental beschreibt das Mittel und der Präpositiv zeigt Ort oder Thema.\n\nSobald Sie verstehen, **was jeder Fall bedeutet**, wird das Lernen der Endungen eine Sache der Mustererkennung und Übung. Versuchen Sie nicht, alle Endungen auf einmal auswendig zu lernen — lernen Sie einen Fall nach dem anderen, üben Sie, bis er sich natürlich anfühlt, und gehen Sie dann zum nächsten über.",
    conclusionBullets: [
      "**6 Fälle, 6 Rollen** — jeder Fall beantwortet eine bestimmte Frage",
      "**Beginnen Sie mit Akkusativ und Genitiv** — die beiden häufigsten Fälle nach dem Nominativ",
      "**Üben Sie mit echten Wörtern** — nutzen Sie unseren Quiz und Deklinationstabellen",
      "**Ein Fall nach dem anderen** — überfordern Sie sich nicht mit allen 6 auf einmal",
      "**Kontinuität gewinnt** — 10 Minuten täglich sind besser als 2 Stunden einmal pro Woche",
    ],
    conclusionOutro: 'Vertiefen Sie jeden Fall mit unseren detaillierten Leitfäden:',
    internalLinks: [
      { href: '/learn/lessons/russian-cases-complete-guide', label: 'Der vollständige Leitfaden zu russischen Fällen — alle 6 Fälle im Detail' },
      { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Russische Fallendungen Spickzettel — alle Endungen in einer Tabelle' },
      { href: '/practice/accusative', label: 'Akkusativ üben — kostenloser Quiz' },
      { href: '/practice/genitive', label: 'Genitiv üben — kostenloser Quiz' },
      { href: '/words', label: '400+ russische Wörter durchsuchen — vollständige Deklinationstabellen' },
    ],
    ctaText: 'Jetzt russische Fälle üben',
    ctaHref: '/practice',
    faq: [
      {
        question: 'Wie viele Fälle hat Russisch?',
        answer:
          "Russisch hat **6 grammatische Fälle**: Nominativ (Именительный), Akkusativ (Винительный), Genitiv (Родительный), Dativ (Дательный), Instrumental (Творительный) und Präpositiv (Предложный). Jeder Fall ändert die Endung von Substantiven, Adjektiven und Pronomen, um ihre Rolle im Satz zu zeigen.",
      },
      {
        question: 'Welcher russische Fall ist am schwersten zu lernen?',
        answer:
          "Die meisten Lernenden finden den **Genitiv** am schwersten, weil er die meisten Verwendungen hat (Besitz, Abwesenheit, Mengen, nach Zahlen, nach vielen Präpositionen) und unregelmäßige Pluralendungen. Jeder Fall hat jedoch seine eigenen Herausforderungen, abhängig von Ihrer Muttersprache.",
      },
      {
        question: 'Muss ich wirklich alle 6 russischen Fälle lernen?',
        answer:
          "Ja — alle 6 Fälle werden im modernen Russisch aktiv verwendet. Ohne sie können Sie keine korrekten Sätze bilden. Sie müssen sie jedoch nicht alle auf einmal lernen. Beginnen Sie mit **Nominativ** und **Akkusativ**, dann fügen Sie die anderen schrittweise hinzu.",
      },
      {
        question: 'Welcher russische Fall ist am einfachsten?',
        answer:
          "Der **Nominativ** ist am einfachsten, weil es die Wörterbuchform ist — keine Endungsänderungen. Danach gilt der **Präpositiv** oft als am einfachsten zu lernen, weil er immer mit einer Präposition vorkommt und relativ einfache, konsistente Endungen hat (-е für die meisten Substantive).",
      },
      {
        question: 'Wie lange dauert es, russische Fälle zu lernen?',
        answer:
          "Bei konsequenter täglicher Übung können die meisten Lernenden das Grundkonzept aller 6 Fälle in **ein paar Wochen** verstehen und sie innerhalb von **3-6 Monaten** in einfachen Sätzen sicher verwenden. Volle Beherrschung (einschließlich aller unregelmäßigen Formen und Pluraldeklinationen) dauert typischerweise **1-2 Jahre** regelmäßigen Lernens.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russische Fälle einfach erklärt: Ein visueller Anfänger-Guide',
      description: 'Die 6 russischen grammatischen Fälle einfach mit Beispielen erklärt. Nominativ, Akkusativ, Genitiv, Dativ, Instrumental und Präpositiv leicht gemacht.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
      },
      keywords: 'russische Fälle erklärt, russische Fälle Anfänger, 6 russische Fälle, russische grammatische Fälle einfach',
    },
  },
  pl_pl: {
    slug: 'russian-cases-explained-beginners-guide',
    title: 'Rosyjskie przypadki wyjaśnione prosto: Wizualny przewodnik dla początkujących',
    metaTitle:
      'Rosyjskie przypadki wyjaśnione prosto: Wizualny przewodnik dla początkujących | Russian Cases with Anna',
    metaDescription:
      '6 rosyjskich przypadków gramatycznych wyjaśnionych po polsku z prostymi przykładami. Zrozum mianownik, biernik, dopełniacz, celownik, narzędnik i miejscownik w 10 minut.',
    keywords: [
      'rosyjskie przypadki wyjaśnione',
      'rosyjskie przypadki początkujący',
      'rosyjskie przypadki gramatyczne proste',
      'zrozumieć rosyjskie przypadki',
      'przykłady rosyjskich przypadków',
      '6 rosyjskich przypadków',
    ],
    h1: 'Rosyjskie przypadki wyjaśnione prosto: Wizualny przewodnik dla początkujących',
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: '6 rosyjskich przypadków wyjaśnionych prosto dla początkujących',
      width: 1200,
      height: 630,
    },
    intro:
      "Rosyjski ma **6 przypadków gramatycznych** i to największa przeszkoda dla anglojęzycznych uczących się tego języka. Ale dobra wiadomość: przypadki nie są tak straszne, jak się wydaje. Każdy przypadek odpowiada na proste pytanie, a gdy zrozumiesz **co robi każdy przypadek**, końcówki stają się dużo łatwiejsze do nauki.\n\nTen przewodnik wyjaśnia wszystkie 6 rosyjskich przypadków po **prostu po polsku**, z jednym jasnym przykładem dla każdego. Bez żargonu lingwistycznego, bez przytłaczających tabel — tylko to, co niezbędne, by zacząć.",
    whatYouLearn: [
      "**Czym jest przypadek gramatyczny** i dlaczego rosyjski go używa",
      "**Wszystkie 6 przypadków wyjaśnione** z jednym prostym przykładem każdy",
      "**Które przypadki uczyć się najpierw** (kolejność priorytetów dla początkujących)",
      "**Jak zmieniają się końcówki rzeczowników** — uproszczony przegląd",
      "**Gdzie ćwiczyć** — darmowy quiz i zasoby",
    ],
    leadMagnetCta: {
      title: 'Gotowy ćwiczyć rosyjskie przypadki?',
      description:
        'Pobierz Russian Cases with Anna — jedyną aplikację w 100% poświęconą rosyjskim deklinacjom. 128 lekcji, 136 quizów, 400+ słów. Za darmo na iOS i Android.',
      ctaText: 'Pobierz aplikację — Za darmo',
      ctaHref: '/',
    },
    sections: [
      {
        h2: 'Czym jest przypadek gramatyczny?',
        content:
          "W angielskim **kolejność słów** mówi, kto co robi w zdaniu. \"The dog bites the man\" i \"The man bites the dog\" oznaczają zupełnie co innego — podmiot zawsze jest na pierwszym miejscu.\n\nRosyjski działa inaczej. Zamiast polegać na kolejności słów, rosyjski zmienia **końcówkę słowa**, by pokazać jego rolę w zdaniu. Te różne końcówki nazywane są **przypadkami**.\n\nPomyśl o tym tak: po angielsku mówisz \"**I** see **him**\" (nie \"me see he\"). Słowa \"I/me\" i \"he/him\" zmieniają formę w zależności od roli. Rosyjski robi to samo — ale dla **każdego rzeczownika, przymiotnika i zaimka** w języku.\n\nW rosyjskim jest **6 przypadków**. Każdy odpowiada na konkretne pytanie i oznacza konkretną rolę gramatyczną.",
      },
      {
        h2: '6 rosyjskich przypadków na pierwszy rzut oka',
        content:
          'Zanim zagłębimy się w każdy przypadek, oto szybki przegląd. Każdy przypadek odpowiada na pytanie i zmienia końcówkę rzeczownika odpowiednio:',
        table: {
          headers: ['Przypadek', 'Nazwa rosyjska', 'Pytanie', 'Przykład'],
          rows: [
            ['Mianownik', 'Именительный', 'Kto? Co?', 'Кошка спит — Kot śpi'],
            ['Biernik', 'Винительный', 'Kogo? Co? (dopełnienie)', 'Я вижу кошку — Widzę kota'],
            ['Dopełniacz', 'Родительный', 'Czyj? Czego?', 'Нет кошки — Nie ma kota'],
            ['Celownik', 'Дательный', 'Komu? Dla kogo?', 'Дай кошке — Daj kotu'],
            ['Narzędnik', 'Творительный', 'Z kim? Czym?', 'С кошкой — Z kotem'],
            ['Miejscownik', 'Предложный', 'O kim? Gdzie?', 'О кошке — O kocie'],
          ],
          caption: '6 rosyjskich przypadków z pytaniami i przykładami z кошка (kot)',
          accentColumnIndices: [3],
        },
        bullets: [
          "Zauważ, jak słowo **кошка** (kot) zmienia końcówkę w każdym przypadku: кошка → кошку → кошки → кошке → кошкой → кошке",
          "Ten wzór końcówek nazywa się **deklinacją** — i każdy rosyjski rzeczownik ma jedną",
        ],
      },
      {
        h2: 'Przypadek 1: Mianownik (Именительный) — Podmiot',
        content:
          "Mianownik to **forma podstawowa** słowa — ta, którą znajdziesz w słowniku. Odpowiada na pytania **Кто? (Kto?)** i **Что? (Co?)**.\n\nUżywasz mianownika dla **podmiotu** zdania — osoby lub rzeczy wykonującej czynność.",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              '**Мама** готовит ужин — **Mama** gotuje kolację\n\n**Книга** лежит на столе — **Książka** leży na stole\n\n**Студент** читает — **Student** czyta',
          },
        ],
        bullets: [
          "Mianownik to **najłatwiejszy przypadek** — nie trzeba zmieniać końcówek",
          "Każde rosyjskie zdanie ma co najmniej jeden rzeczownik w mianowniku",
          "To forma, którą już znasz z list słownictwa",
        ],
      },
      {
        h2: 'Przypadek 2: Biernik (Винительный) — Dopełnienie bliższe',
        content:
          "Biernik odpowiada na **Кого? (Kogo?)** i **Что? (Co?)** — ale tym razem jako **dopełnienie** czynności, nie podmiot. Oznacza rzecz, na którą działa się.\n\nBiernik używa się też z **czasownikami ruchu** by wskazać kierunek (iść **do** somewhere).",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              'Я вижу **маму** — Widzę **mamę** (мама → маму)\n\nОн читает **книгу** — Czyta **książkę** (книга → книгу)\n\nМы идём **в школу** — Idziemy **do szkoły** (школа → школу)',
          },
        ],
        bullets: [
          "Dla **rzeczowników żeńskich** -а zmienia się na **-у** (мама → маму)",
          "Dla **rzeczowników męskich nieżywotnych** biernik wygląda jak mianownik (стол → стол)",
          "Dla **rzeczowników męskich żywotnych** biernik wygląda jak dopełniacz (студент → студента)",
        ],
      },
      {
        h2: 'Przypadek 3: Dopełniacz (Родительный) — Posiadanie i brak',
        content:
          "Dopełniacz odpowiada na **Кого? (Czyj?)** i **Чего? (Czego?)**. To przypadek **posiadania** (jak \"of\" lub \"'s\" po angielsku), **braku** (nie ma...) i **ilości**.\n\nTo jeden z najczęściej używanych przypadków w rosyjskim — spotkasz go wszędzie.",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              'Книга **мамы** — **Mamy** książka (мама → мамы)\n\nНет **воды** — Nie ma **wody** (вода → воды)\n\nСтакан **молока** — Szklanka **mleka** (молоко → молока)\n\nУ **студента** есть книга — **Student** ma książkę (студент → студента)',
          },
        ],
        bullets: [
          "Dla **rzeczowników żeńskich** -а zmienia się na **-ы** lub **-и** (мама → мамы, книга → книги)",
          "Dla **rzeczowników męskich** dodaj **-а** lub **-я** (студент → студента, учитель → учителя)",
          "Używany po **liczbach 2-4** i po **нет** (przeczenie)",
        ],
      },
      {
        h2: 'Przypadek 4: Celownik (Дательный) — Dopełnienie dalsze',
        content:
          "Celownik odpowiada na **Кому? (Komu?)** i **Чему? (Czemu?)**. Oznacza **odbiorcę** czynności — osobę, której coś się daje, mówi lub robi.\n\nCelownik używany jest też w powszechnych wyrażeniach o **wieku** i **uczuciach**.",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              'Я дал книгу **маме** — Dałem książkę **mamie** (мама → маме)\n\n**Мне** 25 лет — **Mam** 25 lat (я → мне)\n\n**Студенту** нужна помощь — **Student** potrzebuje pomocy (студент → студенту)',
          },
        ],
        bullets: [
          "Dla **rzeczowników żeńskich** -а zmienia się na **-е** (мама → маме)",
          "Dla **rzeczowników męskich** dodaj **-у** lub **-ю** (студент → студенту)",
          "Używany w wyrażeniach o wieku: **Мне** 20 лет (dosłownie: \"mnie 20 lat\")",
        ],
      },
      {
        h2: 'Przypadek 5: Narzędnik (Творительный) — Środek i towarzystwo',
        content:
          "Narzędnik odpowiada na **Кем? (Z kim?)** i **Чем? (Czym?)**. Opisuje **narzędzie lub środek** użyty do zrobienia czegoś oraz **towarzystwo** (z kimś).\n\nUżywany jest też po czasowniku **быть** (być) do opisu zawodów.",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              'Я пишу **ручкой** — Piszę **długopisem** (ручка → ручкой)\n\nОна работает **учительницей** — Pracuje **jako nauczycielka** (учительница → учительницей)\n\nЯ иду **с мамой** — Idę **z mamą** (мама → мамой)',
          },
        ],
        bullets: [
          "Dla **rzeczowników żeńskich** -а zmienia się na **-ой** lub **-ей** (мама → мамой, земля → землёй)",
          "Dla **rzeczowników męskich** dodaj **-ом** lub **-ем** (студент → студентом)",
          "Zawsze używany po przyimku **с** (z) dla towarzystwa",
        ],
      },
      {
        h2: 'Przypadek 6: Miejscownik (Предложный) — Miejsce i temat',
        content:
          "Miejscownik odpowiada na **О ком? (O kim?)** i **О чём? (O czym?)**. Jak nazwa wskazuje, **zawsze używany jest z przyimkiem** — najczęściej **в** (w), **на** (na/przy) i **о** (o).\n\nTo jedyny rosyjski przypadek, który nigdy nie może wystąpić bez przyimka.",
        subsections: [
          {
            h3: 'Przykłady',
            content:
              'Я живу **в Москве** — Mieszkam **w Moskwie** (Москва → Москве)\n\nОн думает **о маме** — Myśli **o mamie** (мама → маме)\n\nКнига **на столе** — Książka jest **na stole** (стол → столе)',
          },
        ],
        bullets: [
          "Dla **rzeczowników żeńskich** -а zmienia się na **-е** (мама → маме, Москва → Москве)",
          "Dla **rzeczowników męskich** dodaj **-е** (стол → столе, студент → студенте)",
          "Miejscownik i celownik często mają **identyczne końcówki** — kontekst je rozróżnia",
        ],
      },
      {
        h2: 'Które przypadki uczyć się najpierw?',
        content:
          "Nie musisz opanować wszystkich 6 przypadków naraz. Oto zalecana **kolejność nauki** na podstawie częstotliwości i trudności:",
        bullets: [
          "**1. Mianownik** — Ten już znasz (forma słownikowa)",
          "**2. Biernik** — Niezbędny do podstawowych zdań (\"Jem chleb\", \"Widzę psa\")",
          "**3. Dopełniacz** — Bardzo częsty (posiadanie, przeczenie, ilości)",
          "**4. Miejscownik** — Stosunkowo łatwy (zawsze z przyimkiem, proste końcówki)",
          "**5. Celownik** — Rzadszy, ale ważny (dopełnienie dalsze, wiek)",
          "**6. Narzędnik** — Najrzadszy w codziennej mowie, ale nadal niezbędny",
        ],
      },
      {
        h2: 'Zacznij ćwiczyć teraz',
        content:
          "Zrozumienie przypadków to pierwszy krok. Kolejny to **aktywna praktyka** — wielokrotne widzenie i wybieranie poprawnych form, aż stanie się to automatyczne.\n\nJak zacząć:\n\n• Rozwiąż nasz **darmowy quiz deklinacji online** na russiandeclensions.com/practice — wybierz, które przypadki ćwiczyć i odpowiedz na 10 pytań wielokrotnego wyboru spośród 400+ prawdziwych rosyjskich rzeczowników.\n\n• Przeglądaj nasze **pełne tabele deklinacji** na russiandeclensions.com/words — zobacz, jak każde słowo zmienia się we wszystkich 6 przypadkach.\n\n• Pobierz aplikację **Russian Cases with Anna** na ustrukturyzowane lekcje gramatyki z interaktywnymi quizami, powtórkami rozłożonymi w czasie i dostępem offline.",
      },
    ],
    conclusion:
      "Rosyjskie przypadki to po prostu **etykiety ról słów** w zdaniu. Mianownik to wykonawca, biernik to odbiorca, dopełniacz pokazuje posiadanie, celownik oznacza odbiorcę, narzędnik opisuje środek, a miejscownik wskazuje miejsce lub temat.\n\nGdy zrozumiesz **co oznacza każdy przypadek**, nauka końcówek staje się kwestią rozpoznawania wzorców i praktyki. Nie próbuj zapamiętać wszystkich końcówek naraz — ucz się jednego przypadku na raz, ćwicz, aż poczuje się naturalnie, potem przejdź do kolejnego.",
    conclusionBullets: [
      "**6 przypadków, 6 ról** — każdy przypadek odpowiada na konkretne pytanie",
      "**Zacznij od biernika i dopełniacza** — dwa najczęstsze przypadki po mianowniku",
      "**Ćwicz z prawdziwymi słowami** — korzystaj z naszego quizu i tabel deklinacji",
      "**Jeden przypadek na raz** — nie przeciążaj się wszystkimi 6 naraz",
      "**Regularność wygrywa** — 10 minut dziennie lepsze niż 2 godziny raz w tygodniu",
    ],
    conclusionOutro: 'Zagłęb się w każdy przypadek z naszymi szczegółowymi przewodnikami:',
    internalLinks: [
      { href: '/learn/lessons/russian-cases-complete-guide', label: 'Pełny przewodnik po rosyjskich przypadkach — wszystkie 6 szczegółowo' },
      { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Ściągawka rosyjskich końcówek — wszystkie końcówki w jednej tabeli' },
      { href: '/practice/accusative', label: 'Ćwicz biernik — darmowy quiz' },
      { href: '/practice/genitive', label: 'Ćwicz dopełniacz — darmowy quiz' },
      { href: '/words', label: 'Przeglądaj 400+ rosyjskich słów — pełne tabele deklinacji' },
    ],
    ctaText: 'Zacznij ćwiczyć rosyjskie przypadki teraz',
    ctaHref: '/practice',
    faq: [
      {
        question: 'Ile przypadków ma rosyjski?',
        answer:
          "Rosyjski ma **6 przypadków gramatycznych**: Mianownik (Именительный), Biernik (Винительный), Dopełniacz (Родительный), Celownik (Дательный), Narzędnik (Творительный) i Miejscownik (Предложный). Każdy przypadek zmienia końcówkę rzeczowników, przymiotników i zaimków, by pokazać ich rolę w zdaniu.",
      },
      {
        question: 'Który rosyjski przypadek jest najtrudniejszy do nauki?',
        answer:
          "Większość uczących się uważa **dopełniacz** za najtrudniejszy, bo ma najwięcej zastosowań (posiadanie, brak, ilości, po liczbach, po wielu przyimkach) i nieregularne końcówki liczby mnogiej. Każdy przypadek ma jednak własne wyzwania w zależności od języka ojczystego.",
      },
      {
        question: 'Czy naprawdę muszę nauczyć się wszystkich 6 rosyjskich przypadków?',
        answer:
          "Tak — wszystkie 6 są aktywnie używane we współczesnym rosyjskim. Nie zbudujesz poprawnych zdań bez nich. Nie musisz jednak uczyć się ich wszystkich naraz. Zacznij od **mianownika** i **biernika**, potem stopniowo dodawaj pozostałe.",
      },
      {
        question: 'Który rosyjski przypadek jest najłatwiejszy?',
        answer:
          "**Mianownik** jest najłatwiejszy, bo to forma słownikowa — bez zmiany końcówek. Potem **miejscownik** często uważany jest za najłatwiejszy do nauki, bo zawsze występuje z przyimkiem i ma stosunkowo proste, spójne końcówki (-е dla większości rzeczowników).",
      },
      {
        question: 'Ile czasu zajmuje nauka rosyjskich przypadków?',
        answer:
          "Przy konsekwentnej codziennej praktyce większość uczących się może zrozumieć podstawową koncepcję wszystkich 6 przypadków w **kilka tygodni** i używać ich swobodnie w prostych zdaniach w **3-6 miesięcy**. Pełne opanowanie (w tym wszystkie formy nieregularne i deklinacje liczby mnogiej) zwykle trwa **1-2 lata** regularnej nauki.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rosyjskie przypadki wyjaśnione prosto: Wizualny przewodnik dla początkujących',
      description: '6 rosyjskich przypadków gramatycznych wyjaśnionych z prostymi przykładami. Mianownik, biernik, dopełniacz, celownik, narzędnik i miejscownik w prosty sposób.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
      },
      keywords: 'rosyjskie przypadki wyjaśnione, rosyjskie przypadki początkujący, 6 rosyjskich przypadków',
    },
  },
  ru_ru: {
    slug: 'russian-cases-explained-beginners-guide',
    title: 'Падежи русского языка просто: Визуальный гид для начинающих',
    metaTitle:
      'Падежи русского языка просто: Визуальный гид для начинающих | Russian Cases with Anna',
    metaDescription:
      '6 падежей русского языка объяснены простым языком с примерами. Поймите именительный, винительный, родительный, дательный, творительный и предложный за 10 минут.',
    keywords: [
      'падежи русского языка объяснение',
      'падежи русского для начинающих',
      'грамматические падежи русского простым языком',
      'понять падежи русского',
      'примеры падежей русского',
      '6 падежей русского',
    ],
    h1: 'Падежи русского языка просто: Визуальный гид для начинающих',
    heroImage: {
      src: '/articles/top-10-apps-to-learn-russian-2026.webp',
      alt: '6 падежей русского языка объяснены просто для начинающих',
      width: 1200,
      height: 630,
    },
    intro:
      "В русском языке **6 грамматических падежей**, и это главное препятствие для англоязычных при изучении языка. Но хорошая новость: падежи не так страшны, как кажутся. Каждый падеж отвечает на простой вопрос, и как только вы поймёте, **что делает каждый падеж**, окончания станут гораздо легче учить.\n\nЭтот гид объясняет все 6 падежей русского языка **простым языком**, с одним ясным примером для каждого. Без лингвистического жаргона, без перегруженных таблиц — только самое необходимое для старта.",
    whatYouLearn: [
      "**Что такое грамматический падеж** и зачем русский его использует",
      "**Все 6 падежей объяснены** с одним простым примером каждый",
      "**Какие падежи учить первыми** (порядок приоритетов для начинающих)",
      "**Как меняются окончания существительных** — упрощённый обзор",
      "**Где практиковаться** — бесплатный квиз и ресурсы",
    ],
    leadMagnetCta: {
      title: 'Готовы практиковать падежи русского?',
      description:
        'Скачайте Russian Cases with Anna — единственное приложение, полностью посвящённое склонениям русского языка. 128 уроков, 136 квизов, 400+ слов. Бесплатно на iOS и Android.',
      ctaText: 'Скачать приложение — Бесплатно',
      ctaHref: '/',
    },
    sections: [
      {
        h2: 'Что такое грамматический падеж?',
        content:
          "В английском **порядок слов** указывает, кто что делает в предложении. \"The dog bites the man\" и \"The man bites the dog\" означают совершенно разное — подлежащее всегда на первом месте.\n\nВ русском всё иначе. Вместо порядка слов русский меняет **окончание слова**, чтобы показать его роль в предложении. Эти разные окончания называются **падежами**.\n\nДумайте так: по-английски вы говорите \"**I** see **him**\" (а не \"me see he\"). Слова \"I/me\" и \"he/him\" меняют форму в зависимости от роли. Русский делает то же самое — но для **каждого существительного, прилагательного и местоимения** в языке.\n\nВ русском **6 падежей**. Каждый отвечает на определённый вопрос и обозначает определённую грамматическую роль.",
      },
      {
        h2: '6 падежей русского языка: краткий обзор',
        content:
          'Прежде чем разбирать каждый падеж, вот краткий обзор. Каждый падеж отвечает на вопрос и соответственно меняет окончание существительного:',
        table: {
          headers: ['Падеж', 'Русское название', 'Вопрос', 'Пример'],
          rows: [
            ['Именительный', 'Именительный', 'Кто? Что?', 'Кошка спит — Кошка спит'],
            ['Винительный', 'Винительный', 'Кого? Что? (объект)', 'Я вижу кошку — Я вижу кошку'],
            ['Родительный', 'Родительный', 'Кого? Чего?', 'Нет кошки — Нет кошки'],
            ['Дательный', 'Дательный', 'Кому? Чему?', 'Дай кошке — Дай кошке'],
            ['Творительный', 'Творительный', 'Кем? Чем?', 'С кошкой — С кошкой'],
            ['Предложный', 'Предложный', 'О ком? О чём? Где?', 'О кошке — О кошке'],
          ],
          caption: '6 падежей русского с вопросами и примерами на слове кошка',
          accentColumnIndices: [3],
        },
        bullets: [
          "Обратите внимание, как слово **кошка** меняет окончание в каждом падеже: кошка → кошку → кошки → кошке → кошкой → кошке",
          "Такая схема окончаний называется **склонением** — и у каждого русского существительного оно есть",
        ],
      },
      {
        h2: 'Падеж 1: Именительный — Подлежащее',
        content:
          "Именительный падеж — это **начальная форма** слова, та, что в словаре. Отвечает на вопросы **Кто?** и **Что?**.\n\nИменительный используется для **подлежащего** — лица или предмета, совершающего действие.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              '**Мама** готовит ужин — **Мама** готовит ужин\n\n**Книга** лежит на столе — **Книга** лежит на столе\n\n**Студент** читает — **Студент** читает',
          },
        ],
        bullets: [
          "Именительный — **самый простой падеж**, менять окончания не нужно",
          "В каждом русском предложении есть хотя бы одно существительное в именительном",
          "Это форма, которую вы уже знаете из списков слов",
        ],
      },
      {
        h2: 'Падеж 2: Винительный — Прямое дополнение',
        content:
          "Винительный отвечает на **Кого?** и **Что?** — но как **объект** действия, а не подлежащее. Обозначает то, на что направлено действие.\n\nВинительный также используется с **глаголами движения** для указания направления.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              'Я вижу **маму** — Я вижу **маму** (мама → маму)\n\nОн читает **книгу** — Он читает **книгу** (книга → книгу)\n\nМы идём **в школу** — Мы идём **в школу** (школа → школу)',
          },
        ],
        bullets: [
          "У **существительных женского рода** -а меняется на **-у** (мама → маму)",
          "У **существительных мужского рода неодушевлённых** винительный совпадает с именительным (стол → стол)",
          "У **существительных мужского рода одушевлённых** винительный совпадает с родительным (студент → студента)",
        ],
      },
      {
        h2: 'Падеж 3: Родительный — Принадлежность и отсутствие',
        content:
          "Родительный отвечает на **Кого?** и **Чего?**. Это падеж **принадлежности** (как \"of\" или \"'s\" в английском), **отсутствия** (нет...) и **количества**.\n\nОдин из самых частых падежей в русском — встретите его повсюду.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              'Книга **мамы** — Книга **мамы** (мама → мамы)\n\nНет **воды** — Нет **воды** (вода → воды)\n\nСтакан **молока** — Стакан **молока** (молоко → молока)\n\nУ **студента** есть книга — У **студента** есть книга (студент → студента)',
          },
        ],
        bullets: [
          "У **существительных женского рода** -а меняется на **-ы** или **-и** (мама → мамы, книга → книги)",
          "У **существительных мужского рода** добавляется **-а** или **-я** (студент → студента, учитель → учителя)",
          "Используется после **числительных 2–4** и после **нет**",
        ],
      },
      {
        h2: 'Падеж 4: Дательный — Косвенное дополнение',
        content:
          "Дательный отвечает на **Кому?** и **Чему?**. Обозначает **получателя** действия — человека, которому что-то дают, говорят или делают.\n\nТакже используется в выражениях о **возрасте** и **чувствах**.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              'Я дал книгу **маме** — Я дал книгу **маме** (мама → маме)\n\n**Мне** 25 лет — **Мне** 25 лет (я → мне)\n\n**Студенту** нужна помощь — **Студенту** нужна помощь (студент → студенту)',
          },
        ],
        bullets: [
          "У **существительных женского рода** -а меняется на **-е** (мама → маме)",
          "У **существительных мужского рода** добавляется **-у** или **-ю** (студент → студенту)",
          "Используется в выражениях возраста: **Мне** 20 лет",
        ],
      },
      {
        h2: 'Падеж 5: Творительный — Средство и сопровождение',
        content:
          "Творительный отвечает на **Кем?** и **Чем?**. Описывает **инструмент или средство** действия, а также **сопровождение** (с кем-то).\n\nИспользуется после глагола **быть** при указании профессии.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              'Я пишу **ручкой** — Я пишу **ручкой** (ручка → ручкой)\n\nОна работает **учительницей** — Она работает **учительницей** (учительница → учительницей)\n\nЯ иду **с мамой** — Я иду **с мамой** (мама → мамой)',
          },
        ],
        bullets: [
          "У **существительных женского рода** -а меняется на **-ой** или **-ей** (мама → мамой, земля → землёй)",
          "У **существительных мужского рода** добавляется **-ом** или **-ем** (студент → студентом)",
          "Всегда используется после предлога **с** (с кем-то)",
        ],
      },
      {
        h2: 'Падеж 6: Предложный — Место и тема',
        content:
          "Предложный отвечает на **О ком?** и **О чём?**. Как видно из названия, **всегда используется с предлогом** — чаще всего **в**, **на** и **о**.\n\nЕдинственный падеж русского, который не может употребляться без предлога.",
        subsections: [
          {
            h3: 'Примеры',
            content:
              'Я живу **в Москве** — Я живу **в Москве** (Москва → Москве)\n\nОн думает **о маме** — Он думает **о маме** (мама → маме)\n\nКнига **на столе** — Книга **на столе** (стол → столе)',
          },
        ],
        bullets: [
          "У **существительных женского рода** -а меняется на **-е** (мама → маме, Москва → Москве)",
          "У **существительных мужского рода** добавляется **-е** (стол → столе, студент → студенте)",
          "У предложного и дательного часто **одинаковые окончания** — различаются по контексту",
        ],
      },
      {
        h2: 'Какие падежи учить первыми?',
        content:
          "Не нужно осваивать все 6 падежей сразу. Рекомендуемый **порядок изучения** по частоте и сложности:",
        bullets: [
          "**1. Именительный** — Его вы уже знаете (словарная форма)",
          "**2. Винительный** — Необходим для простых предложений (\"Я ем хлеб\", \"Я вижу собаку\")",
          "**3. Родительный** — Очень частый (принадлежность, отрицание, количество)",
          "**4. Предложный** — Относительно простой (всегда с предлогом)",
          "**5. Дательный** — Реже, но важен (косвенное дополнение, возраст)",
          "**6. Творительный** — Наименее частый в обиходе, но тоже необходим",
        ],
      },
      {
        h2: 'Начните практиковать сейчас',
        content:
          "Понимание падежей — первый шаг. Следующий — **активная практика**: многократно видеть и выбирать правильные формы, пока это не станет автоматическим.\n\nКак начать:\n\n• Пройдите **бесплатный квиз на склонение** на russiandeclensions.com/practice — выберите падежи для практики и ответьте на 10 вопросов из 400+ русских существительных.\n\n• Просмотрите **полные таблицы склонений** на russiandeclensions.com/words — посмотрите, как каждое слово меняется во всех 6 падежах.\n\n• Скачайте приложение **Russian Cases with Anna** для структурированных уроков грамматики с интерактивными квизами и повторениями.",
      },
    ],
    conclusion:
      "Падежи русского — это просто **обозначения ролей слов** в предложении. Именительный — действующее лицо, винительный — объект, родительный — принадлежность, дательный — получатель, творительный — средство, предложный — место или тема.\n\nКак только вы поймёте **что означает каждый падеж**, изучение окончаний станет делом распознавания паттернов и практики. Не пытайтесь запомнить все окончания сразу — учите по одному падежу, практикуйте, пока не станет естественно, затем переходите к следующему.",
    conclusionBullets: [
      "**6 падежей, 6 ролей** — каждый падеж отвечает на свой вопрос",
      "**Начните с винительного и родительного** — два самых частых после именительного",
      "**Практикуйтесь на реальных словах** — используйте наш квиз и таблицы склонений",
      "**По одному падежу** — не перегружайте себя всеми 6 сразу",
      "**Регулярность важнее** — 10 минут в день лучше, чем 2 часа раз в неделю",
    ],
    conclusionOutro: 'Углубитесь в каждый падеж с нашими подробными руководствами:',
    internalLinks: [
      { href: '/learn/lessons/russian-cases-complete-guide', label: 'Полный гид по падежам русского — все 6 подробно' },
      { href: '/learn/articles/russian-case-endings-cheatsheet', label: 'Шпаргалка по падежным окончаниям — все в одной таблице' },
      { href: '/practice/accusative', label: 'Практика винительного — бесплатный квиз' },
      { href: '/practice/genitive', label: 'Практика родительного — бесплатный квиз' },
      { href: '/words', label: '400+ русских слов — полные таблицы склонений' },
    ],
    ctaText: 'Начать практиковать падежи русского',
    ctaHref: '/practice',
    faq: [
      {
        question: 'Сколько падежей в русском языке?',
        answer:
          "В русском языке **6 грамматических падежей**: Именительный, Винительный, Родительный, Дательный, Творительный и Предложный. Каждый падеж меняет окончания существительных, прилагательных и местоимений, показывая их роль в предложении.",
      },
      {
        question: 'Какой падеж русского труднее всего выучить?',
        answer:
          "Чаще всего **родительный** считают самым трудным из-за множества значений (принадлежность, отсутствие, количество, после числительных, после предлогов) и нерегулярных окончаний множественного числа.",
      },
      {
        question: 'Нужно ли учить все 6 падежей?',
        answer:
          "Да — все 6 падежей активно используются в современном русском. Без них нельзя строить правильные предложения. Но учить их можно постепенно: начните с **именительного** и **винительного**, затем добавляйте остальные.",
      },
      {
        question: 'Какой падеж русского легче всего?',
        answer:
          "**Именительный** — самый лёгкий, это словарная форма. Затем **предложный** часто считают простым, так как он всегда с предлогом и имеет относительно простые окончания (-е).",
      },
      {
        question: 'Сколько времени нужно, чтобы выучить падежи русского?',
        answer:
          "При регулярной ежедневной практике большинство учащихся понимают основную идею всех 6 падежей за **несколько недель** и уверенно используют их в простых предложениях за **3–6 месяцев**. Полное освоение (включая все неправильные формы) обычно занимает **1–2 года** регулярных занятий.",
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Падежи русского языка просто: Визуальный гид для начинающих',
      description: '6 падежей русского языка объяснены простым языком с примерами. Именительный, винительный, родительный, дательный, творительный и предложный — просто и понятно.',
      datePublished: '2026-03-22',
      dateModified: '2026-03-22',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
      },
      keywords: 'падежи русского объяснение, падежи для начинающих, 6 падежей русского',
    },
  },
};
