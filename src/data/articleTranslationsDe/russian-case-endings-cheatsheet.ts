import type { LearnArticle } from '../learnArticles';

export const russianCaseEndingsCheatsheetDe: LearnArticle = {
  slug: 'russian-case-endings-cheatsheet',
  title: 'Russische Kasusendungen: Der ultimative Spickzettel und die Tabelle',
  metaTitle:
    'Spickzettel russische Kasusendungen | Vollständige Deklinations-Tabelle | Russian Cases with Anna',
  metaDescription:
    'Kostenloser Spickzettel zu russischen Kasusendungen: Deklinations-Tabelle für Substantive, Adjektive, Pronomen (мой, этот), Präpositionen nach Kasus. Alle 6 Fälle, farbcodierte Tabelle. Zum Ausdrucken oder Merken.',
  keywords: [
    'russische Kasusendungen',
    'Tabelle Kasusendungen Russisch',
    'Deklinations-Tabelle Russisch',
    'Substantivendungen Kasus Russisch',
    'Spickzettel russische Fälle',
    'Adjektivdeklination Russisch',
  ],
  h1: 'Russische Kasusendungen: Der ultimative Spickzettel',
  heroImage: {
    src: '/articles/russian-cases-endings-master-chart.webp',
    alt: 'Übersichtstabelle der russischen Kasusendungen mit Deklination für alle 6 Fälle',
    width: 1200,
    height: 630,
  },
  intro:
    'Russische Kasusendungen zu beherrschen ist das Rückgrat der russischen Grammatik. Ob Sie ganz am Anfang stehen und verstehen wollen, was Kasus sind, oder schon fortgeschritten sind und Endungen verwechseln — dieser Spickzettel bündelt alle Deklinations-Tabellen, die Sie brauchen.\n\nSpeichern Sie diese Seite. Drucken Sie sie aus. Machen Sie einen Screenshot. Hier finden Sie die russische Deklinations-Übersicht, zu der Sie immer wieder zurückkommen.',
  whatYouLearn: [
    'Vollständige Deklinations-Tabelle für Substantive (alle Genera, Singular und Plural)',
    'Tabelle für Adjektive (harte und weiche Stämme)',
    'Deklination der Personalpronomen (я, ты, он, она, мы, вы, они)',
    'Deklination der Possessivpronomen (мой, наш — und Ableitung der übrigen)',
    'Demonstrativpronomen (этот / тот)',
    'Tabelle Präposition → Kasus',
    'Wichtige Rechtschreibregeln, die die Endungen beeinflussen',
  ],
  leadMagnetCta: {
    title: 'Russische Deklination interaktiv üben',
    description:
      'Unsere App ist speziell für russische Kasus und Deklination gebaut: intelligente Übungen, Spaced Repetition und echte russische Beispiele — für Android und iOS.',
    ctaText: 'App herunterladen und heute mit dem Üben starten',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Der komplette Leitfaden zu den russischen Fällen: Alle 6 Fälle mit Beispielen erklärt',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Russischer Dativ: Wie man „zu“ und „für“ auf Russisch sagt',
    },
  ],
  sections: [
    {
      h2: 'Teil 1: Kasusendungen bei Substantiven — vollständige Tabelle',
      content:
        'Die Tabelle zeigt die Endungen russischer Substantive für **alle 6 Fälle**, alle Genera (maskulin, feminin, neutrum), **Singular und Plural**.\n\nHarte Stämme (am häufigsten) und weiche Stämme sind getrennt dargestellt.',
      subsections: [
        {
          h3: 'So liest man diese Tabelle',
          content:
            '**M. hart** = Maskulinum mit hartem Stamm (стол, брат). **M. weich** = Maskulinum mit weichem Stamm (музей, гений). **F. hart** = Femininum auf -а (женщина, книга). **F. weich** = Femininum auf -я (неделя, земля). **F. (-ь)** = Femininum mit weichem Zeichen (ночь, дочь).\n\n**N. (-о)** = Neutrum hart (окно, слово). **N. (-е)** = Neutrum weich (море, поле).',
        },
      ],
      table: {
        caption: 'Substantivendungen nach Kasus, Genus und Numerus',
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6, 7],
        accentColumnIndices: [0],
        headers: [
          'Kasus',
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
          ['Akk. (Sachobj.)', '= Nom.', '= Nom.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
          ['Akk. (belebt)', '= Gen.', '= Gen.', '-у', '-ю', '-ь', '= Nom.', '= Nom.'],
          ['Instrumental', '-ом', '-ем / -ём', '-ой / -ей', '-ей', '-ью', '-ом', '-ем'],
          ['Präpositional', '-е', '-е / -и', '-е / -и', '-е / -и', '-и', '-е', '-е'],
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
          ['Präpositional', '-ах', '-ях', '-ах', '-ях', '-ях', '-ах', '-ях'],
        ],
      },
      bullets: [
        '**Akkusativ belebt (mask.):** belebte maskuline Substantive haben im Akkusativ die **Genitivform**. Unbelebte maskuline bleiben wie im Nominativ.',
        '**Akkusativ Plural:** unbelebt = Nominativ Plural; belebt = Genitiv Plural.',
        '**Nullendung im Genitiv Plural:** viele feminine Substantive auf -а haben im Genitiv Plural **keine Endung** (женщина → женщин). Das ist einer der kniffligsten Bereiche der russischen Deklination.',
        '**8-Buchstaben-Regel:** nach **г, к, х, ж, ш, щ, ч, ц** schreibt man **И**, nicht Ы (z. B. книги, nicht книгы).',
        '**7-Buchstaben-Regel:** nach ж, ш, щ, ч, ц schreibt man **А** statt Я, **У** statt Ю in betonten Silben.',
      ],
    },
    {
      h2: 'Teil 2: Deklinations-Tabelle für Adjektive',
      content:
        'Russische Adjektive müssen mit dem Substantiv, das sie begleiten, in **Genus, Numerus und Kasus übereinstimmen**.\n\nUnten die vollständige Tabelle für Adjektive mit **hartem** und **weichem** Stamm.',
      subsections: [
        {
          h3: 'Harter vs. weicher Adjektivstamm',
          content: 'Adjektive zerfallen in zwei Gruppen je nach Stamm:',
          bullets: [
            '**Harter Stamm** (красный, новый, старый) — Nominativ M: -ый/-ой | Endungen mit Ы, О, У',
            '**Weicher Stamm** (синий, последний, летний) — Nominativ M: -ий | Endungen mit И, Е, Ю',
          ],
        },
      ],
      table: {
        caption: 'Adjektivendungen nach Kasus, Genus und Stammtyp',
        boldColumnIndices: [0, 1, 2, 3, 4, 5],
        accentColumnIndices: [0],
        headers: [
          'Kasus',
          'M. hart',
          'M. weich',
          'F. hart',
          'F. weich',
          'Neutrum',
          'Plural',
        ],
        rows: [
          ['Nominativ', '-ый/-ой', '-ий', '-ая', '-яя', '-ое', '-ые/-ие'],
          ['Genitiv', '-ого', '-его', '-ой', '-ей', '-ого', '-ых/-их'],
          ['Dativ', '-ому', '-ему', '-ой', '-ей', '-ому', '-ым/-им'],
          ['Akk. (Sachobj.)', '= Nom.', '= Nom.', '-ую', '-юю', '= Nom.', '= Nom.'],
          ['Akk. (belebt)', '= Gen.', '= Gen.', '-ую', '-юю', '= Nom.', '= Gen.'],
          ['Instrumental', '-ым', '-им', '-ой/-ей', '-ей', '-ым', '-ыми/-ими'],
          ['Präpositional', '-ом', '-ем', '-ой/-ей', '-ей', '-ом', '-ых/-их'],
        ],
      },
      bullets: [
        '**Beispiel harter Stamm** — новый (neu): новый / нового / новому / **новый(ого)** / новым / новом',
        '**Beispiel weicher Stamm** — синий (blau): синий / синего / синему / **синий(его)** / синим / синем',
        '**Betonungsverschobene Adjektive** (wie молодой): Nominativ endet auf **-ой** statt -ый, alle anderen Endungen folgen wie beim harten Muster.',
        '**Adjektiv-Substantiv-Kongruenz:** das Adjektiv **stimmt immer** mit dem Substantiv überein. красная книга (Gen.: красной книги) — jedes Wort in der Phrase wird gemeinsam dekliniert.',
        '**Kurze Adjektivformen:** es gibt auch kurze Adjektive (краток, красив) im Prädikat (nach быть). Sie **deklinieren nicht** nach Kasus.',
      ],
    },
    {
      h2: 'Teil 3: Deklination der Personalpronomen',
      content:
        'Personalpronomen **wechseln stark** zwischen den Kasus — viel stärker als Substantive oder Adjektive. Sie müssen **einzeln auswendig gelernt** werden.\n\nDie Tabelle zeigt die vollständige Deklination aller russischen Personalpronomen.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Kasus',
          'я (ich)',
          'ты (du)',
          'он/оно (er/es)',
          'она (sie)',
          'мы (wir)',
          'вы (Sie / ihr)',
          'они (sie)',
        ],
        rows: [
          ['Nominativ', 'я', 'ты', 'он/оно', 'она', 'мы', 'вы', 'они'],
          ['Genitiv', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Dativ', 'мне', 'тебе', 'ему', 'ей', 'нам', 'вам', 'им'],
          ['Akkusativ', 'меня', 'тебя', 'его', 'её', 'нас', 'вас', 'их'],
          ['Instrumental', 'мной', 'тобой', 'им', 'ей', 'нами', 'вами', 'ими'],
          ['Präpositional', 'мне', 'тебе', 'нём', 'ней', 'нас', 'вас', 'них'],
        ],
      },
      bullets: [
        '**Regel mit Präfix Н-:** folgt ein Pronomen der 3. Person (он, она, оно, они) auf eine Präposition, wird **Н-** vorgesetzt: у него (nicht у его), к ней (nicht к ей), с ними (nicht с ими).',
        '**Genitiv = Akkusativ** bei Personalpronomen: меня, тебя, его, её, нас, вас, их sind in **beiden** Fällen gleich.',
        '**Formen mit Präposition о/об:** обо мне, о тебе, о нём, о ней, о нас, о вас, о них.',
      ],
    },
    {
      h2: 'Teil 4: Possessivpronomen (мой, наш)',
      content:
        'Possessivpronomen werden ebenfalls nach Kasus, Genus und Numerus dekliniert. Die Tabelle umfasst **мой** (mein) und **наш** (unser) — die beiden unregelmäßigsten und wichtigsten Paradigmen.\n\nDie übrigen folgen ähnlich: **твой** (dein, du-Form) — wie мой. **ваш** (Ihr/euer) — wie наш. **его / её / их** (sein/ihr/deren) — **deklinieren nicht**! Sie bleiben in allen Fällen unverändert.',
      table: {
        caption: 'Vollständige Deklination von мой und наш',
        boldColumnIndices: [0, 1, 2, 3, 4],
        accentColumnIndices: [0],
        headers: ['Kasus', 'Mask.', 'Neutr.', 'Fem.', 'Plural'],
        rows: [
          ['МОЙ — mein', '', '', '', ''],
          ['Nominativ', 'мой', 'моё', 'моя', 'мои'],
          ['Genitiv', 'моего', 'моего', 'моей', 'моих'],
          ['Dativ', 'моему', 'моему', 'моей', 'моим'],
          ['Akk. (Sachobj.)', 'мой', 'моё', 'мою', 'мои'],
          ['Akk. (belebt)', 'моего', 'моё', 'мою', 'моих'],
          ['Instrumental', 'моим', 'моим', 'моей', 'моими'],
          ['Präpositional', 'моём', 'моём', 'моей', 'моих'],
          ['НАШ — unser', '', '', '', ''],
          ['Nominativ', 'наш', 'наше', 'наша', 'наши'],
          ['Genitiv', 'нашего', 'нашего', 'нашей', 'наших'],
          ['Dativ', 'нашему', 'нашему', 'нашей', 'нашим'],
          ['Akk. (Sachobj.)', 'наш', 'наше', 'нашу', 'наши'],
          ['Akk. (belebt)', 'нашего', 'наше', 'нашу', 'наших'],
          ['Instrumental', 'нашим', 'нашим', 'нашей', 'нашими'],
          ['Präpositional', 'нашем', 'нашем', 'нашей', 'наших'],
        ],
      },
    },
    {
      h2: 'Teil 5: Demonstrativpronomen (этот / тот)',
      content:
        '**Этот** (dieser/dieses) und **тот** (jener/jenes) sind Demonstrativa, die auch als Artikelwörter fungieren.\n\nSie werden nach **Kasus, Genus und Numerus** dekliniert und sind im gesprochenen Russisch sehr häufig.',
      table: {
        boldColumnIndices: [0, 1, 2, 3, 4, 5, 6],
        accentColumnIndices: [0],
        headers: [
          'Kasus',
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
          ['Akk. (Sachobj.)', 'этот', 'это', 'эту', 'эти', 'тот / ту', 'те'],
          ['Akk. (belebt)', 'этого', 'это', 'эту', 'этих', 'того / ту', 'тех'],
          ['Instrumental', 'этим', 'этим', 'этой', 'этими', 'тем / той', 'теми'],
          ['Präpositional', 'этом', 'этом', 'этой', 'этих', 'том / той', 'тех'],
        ],
      },
    },
    {
      h2: 'Teil 6: Präpositionen → Kasus (Kurzüberblick)',
      content:
        'Die Tabelle ordnet die wichtigsten russischen Präpositionen dem **erforderlichen Kasus** zu.\n\nPräpositionen **immer mit ihrem Kasus** zu lernen ist zentral — so vermeidet man eine der häufigsten Fehlerquellen.',
      subsections: [
        {
          h3: 'Wichtig: В und НА sind zweideutig (zwei Kasus)',
          content:
            '**в / на + Akkusativ** = **Richtung** (Bewegung zu einem Ort). **в / на + Präpositional** = **Ort** (sich an einem Ort befinden).\n\nBeispiel: Я иду в школу. (Hinbewegung → Akkusativ) vs. Я в школе. (Anwesenheit → Präpositional).',
        },
      ],
      table: {
        boldColumnIndices: [0, 1],
        accentColumnIndices: [0],
        headers: ['Kasus', 'Präpositionen', 'Beispiele'],
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
            'в, на (Richtung), за, через, под (Bewegung), про, о (Stoß)',
            'в школу, на работу, через час',
          ],
          [
            'Instrumental',
            'с, за (Lage), над, под (Lage), перед, между, рядом с',
            'с другом, над столом, перед домом',
          ],
          [
            'Präpositional',
            'в, на (Ort), о/об, при, по (nach bestimmten Verben)',
            'в Москве, о работе, при советах',
          ],
        ],
      },
    },
    {
      h2: 'Teil 7: Sieben Rechtschreibregeln, die die Endungen betreffen',
      content:
        'Russische Rechtschreibregeln können die erwartete Endung **überschreiben**.\n\nJeder Lerner sollte sie kennen — sie erklären, warum manche Wörter **nicht** dem Standardschema folgen.',
      subsections: [
        {
          h3: 'Regel 1: Die 8-Buchstaben-Regel (К, Г, Х, Ж, Ш, Щ, Ч, Ц)',
          content:
            'Nach **г, к, х, ж, ш, щ, ч, ц** schreibt man immer **И** statt Ы. книга → книги (nicht книгы), ручка → ручки (nicht ручкы).\n\nDas betrifft u. a. Nominativ Plural, Genitiv Singular femininer Substantive und Adjektivendungen.',
        },
        {
          h3: 'Regel 2: Die 7-Buchstaben-Regel (Ж, Ш, Щ, Ч, Ц — betonte Vokale)',
          content:
            'Nach ж, ш, щ, ч, ц schreibt man **А** statt Я, **У** statt Ю (in betonten Silben); **Е** statt О in unbetonten Silben.\n\nInstrumental Singular Femininum: большой → большой (betontes **-ой** ist korrekt), aber тушь → **тушью**. Diese Regel wirkt zusammen mit **-ом/-ем** bei Neutra.',
        },
        {
          h3: 'Regel 3: „Flüchtige“ Vokale',
          content:
            'Manche Substantive **verlieren einen Vokal** (о oder е) bei der Deklination — **flüchtiger Vokal** (беглая гласная).\n\nотец → отца (е verschwindet). день → дня (е verschwindet). лёд → льда (е/ё verschwindet).',
        },
        {
          h3: 'Regel 4: Verhalten des weichen Zeichens ь',
          content:
            'Feminine Substantive auf **-ь** lassen das weiche Zeichen vor der Endung nicht weg — es verschmilzt mit der Endung.\n\nночь → **ночи** (Gen./Dat./Präp.), **ночью** (Instrumental). **-ью** im Instrumental ist typisch für diese Wörter.',
        },
        {
          h3: 'Regel 5: Präpositional auf -У (Rest des Lokativs)',
          content:
            'Eine kleine Gruppe maskuliner Substantive hat im Präpositional bei **örtlicher Bedeutung** (nicht Thema) die Endung **-у/-ю**. **в лесу** (im Wald) — nicht в лесе. **в году** (im Jahr). **на берегу** (am Ufer). **на полу** (auf dem Boden).\n\nNur mit в/на + Ort. Mit О gilt das übliche -е: о лесе (über den Wald).',
        },
      ],
    },
    {
      h2: 'So nutzen Sie diesen Spickzettel effektiv',
      subsections: [
        {
          h3: 'Schritt 1 — Beginnen Sie mit Substantiven',
          content:
            'Die **Substantiv-Tabelle** ist die Basis. Erlernen Sie sie zuerst. Konzentrieren Sie sich auf die häufigsten Muster: **maskulin hart** (-стол), **feminin hart** (-книга), **neutrum hart** (-окно).\n\nDamit decken Sie die Mehrheit russischer Substantive ab.',
        },
        {
          h3: 'Schritt 2 — Dann Adjektive',
          content:
            'Kennt man die Substantivendungen, werden Adjektive leichter — die Logik ist ähnlich.\n\nZuerst **harte Adjektive** (новый), dann **weiche** (синий).',
        },
        {
          h3: 'Schritt 3 — Pronomen extra',
          content:
            '**Pronomen sind unregelmäßig** und werden einzeln gelernt. Sie folgen weder dem Substantiv- noch dem Adjektivschema.\n\nNutzen Sie Karteikarten oder eine Spaced-Repetition-App.',
        },
        {
          h3: 'Schritt 4 — Präpositionen bestimmen den Kasus',
          content:
            'Präpositionen sind der **schnellste Weg** zum richtigen Kasus: Wenn **без** immer den Genitiv und **к** immer den Dativ verlangt, ist der Kasus schon festgelegt.\n\nSetzen Sie **Paare Präposition → Kasus** an die Spitze.',
        },
        {
          h3: 'Schritt 5 — Echte Sätze',
          content:
            'Tabellen allein reichen nicht. Üben Sie die Endungen in **echten russischen Sätzen**.\n\nLesen Sie, hören Sie zu, und achten Sie darauf, wie Muttersprachler deklinierte Formen im Kontext verwenden.',
        },
      ],
    },
  ],
  conclusion:
    'Dieser Spickzettel enthält **alles Wichtige**: **alle 6 Fälle** für Substantive (alle Genera, Singular und Plural), Adjektive (harte und weiche Stämme), Personal- und Possessivpronomen, Demonstrativa sowie Präposition–Kasus-Paare.\n\n**Behalten Sie diese Referenz griffbereit** beim Lernen. Je öfter Sie sie mit echter russischer Praxis verbinden, desto schneller werden die Endungen von bewusstem Auswendiglernen zu automatischer Erkennung.',
  conclusionOutro:
    'Ausführliche Erklärungen, was jeder Kasus bedeutet und wie man ihn verwendet, finden Sie in unseren Leitfäden:',
  ctaText: 'Russische Fälle mit unserer App üben',
  ctaHref: '/',
  faq: [
    {
      question: 'Welche russische Kasusendung ist am schwersten zu lernen?',
      answer:
        'Der **Genitiv Plural** gilt oft als am schwierigsten: je nach Wortklasse gibt es mehrere konkurrierende Formen. Feminina auf -а haben oft **keine Endung** (женщина → женщин), andere bekommen **-ей** (ночь → ночей) oder **-ов/-ев** (bestimmte Maskulina).',
    },
    {
      question: 'Stimmen russische Adjektive immer mit dem Substantiv überein?',
      answer:
        'Ja, **immer**. Ein russisches Adjektiv muss mit seinem Substantiv in Genus, Numerus und Kasus **übereinstimmen**. Ändert sich die Endung des Substantivs, ändert sich auch die des Adjektivs. Das ist **grammatische Kongruenz** — im Russischen Pflicht.',
    },
    {
      question: 'Gibt es russische Substantive, die gar nicht deklinieren?',
      answer:
        'Ja. Eine kleine Gruppe **unflektierbarer Fremdwörter** (несклоняемые существительные) bleibt immer gleich: **кофе**, **метро**, **пальто**, **такси**, **кино**. Das sind Ausnahmen vom Kasussystem.',
    },
    {
      question: 'Woran erkenne ich, ob ein Substantiv belebt oder unbelebt ist?',
      answer:
        '**Belebt:** Menschen und Tiere (человек, кот, студент, врач). **Unbelebt:** Gegenstände, Begriffe, Abstrakta (стол, книга, любовь, время). Die russische Grammatik wertet manches als belebt, was deutschsprachige Lerner nicht erwarten — z. B. manche Spielsteine.',
    },
    {
      question: 'Was ist der Unterschied zwischen Genitiv und Akkusativ bei belebtem Substantiv?',
      answer:
        'Bei **belebten Maskulina** ist die Akkusativform **identisch** mit dem Genitiv — die Regel **Akkusativ belebt = Genitiv**. Beispiel: студент → студента (Gen.) = студента (Akk.). Den Kasus erkennt man nur am Satzbau.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Kasusendungen: Der ultimative Spickzettel',
    description:
      'Vollständiger Spickzettel: Substantiv- und Adjektivtabellen, Pronomen, Präpositionen nach Kasus. Alle 6 Fälle in einer Übersicht.',
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
      'russische Kasusendungen, Kasus-Tabelle Russisch, Spickzettel Kasus, russische Pronomen, Präpositionen Kasus',
  },
};
