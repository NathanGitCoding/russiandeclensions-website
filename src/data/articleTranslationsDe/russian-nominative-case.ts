import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung von `russian-nominative-case` (Quelle: EN-Artikel in learnArticles.ts). Kyrillischer Text unverändert aus dem Original übernommen. */
export const russianNominativeCaseDe: LearnArticle = {
  slug: 'russian-nominative-case',
  title: 'Russischer Nominativ: Regeln, Endungen und 24 echte Beispiele',
  metaTitle: 'Russischer Nominativ: Regeln, Endungen und Beispiele | Russian Cases with Anna',
  metaDescription:
    'Der vollständige Leitfaden zum russischen Nominativ: 6 Kernverwendungen, Endungen Singular und Plural, unregelmäßige Plurale, Nominativ vs. Akkusativ. 24 echte Beispiele mit Transliteration.',
  keywords: [
    'russischer Nominativ',
    'Nominativ Russisch',
    'russische Nominativendungen',
    'was ist der Nominativ im Russischen',
    'Nominativ Beispiele Russisch',
    'Nominativ Plural Russisch',
  ],
  h1: 'Russischer Nominativ: Regeln, Endungen und 24 echte Beispiele',
  heroImage: {
    src: '/articles/russian-nominative-case-dictionary-form.webp',
    alt: 'Ein aufgeschlagenes russisches Wörterbuch und Notizheft — der Nominativ, die Grundform russischer Wörter im Wörterbuch',
    width: 1536,
    height: 1024,
  },
  intro:
    'Der Nominativ ist der erste Kasus, dem jeder Russischlerner begegnet — und derjenige, von dem die meisten Lernenden glauben, sie würden ihn bereits beherrschen. Er ist die **Wörterbuchform**: die Version eines Wortes, die man nachschlägt, als Vokabelkarte auswendig lernt und isoliert ausgesprochen hört. Doch den Nominativ als „den Kasus, über den man nicht nachdenken muss“ zu behandeln, ist ein Fehler. Er hat seine eigenen **Regeln für den Plural**, seine eigenen **unregelmäßigen Formen** und seine eigene **Falle** — den Moment, in dem er plötzlich identisch mit dem Akkusativ aussieht.\n\nDieser Leitfaden deckt alles zum russischen Nominativ ab: was er ist, wann man ihn über das offensichtliche „Subjekt des Satzes“ hinaus verwendet, wie man den Plural bildet (einschließlich der Formen mit Betonungsverschiebung und der völlig unregelmäßigen Plurale, die Lernende auf mittlerem Niveau ins Stolpern bringen), und wie man ihn vom Akkusativ unterscheidet. **24 echte russische Beispiele** sind enthalten, mit Transliteration.',
  whatYouLearn: [
    'Was der russische Nominativ ist und in welchen 6 Situationen er verwendet wird',
    'Nominativ-Singular-Endungen für jedes Nomengeschlecht',
    'Nominativ-Plural-Endungen — einschließlich der Plurale mit Betonungsverschiebung (дом → дома, город → города)',
    '12 unregelmäßige Nominativ-Plurale zum Auswendiglernen (друг → друзья, ребёнок → дети usw.)',
    'Wie Adjektive und Pronomen mit Nominativ-Nomen übereinstimmen',
    'Nominativ vs. Akkusativ — wie man sie unterscheidet, wenn die Formen identisch aussehen',
    '24 echte russische Beispielsätze mit Transliteration',
  ],
  leadMagnetCta: {
    title: 'Üben Sie den russischen Nominativ (und alle 6 Fälle) mit intelligenten Aufgaben',
    description:
      'Unsere App trainiert alle 6 russischen Fälle — einschließlich der schwierigsten Pluralformen — mit Spaced Repetition, echten Sätzen und sofortigem Feedback. Für Android und iOS.',
    ctaText: 'App herunterladen und heute mit dem Üben starten',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Der komplette Leitfaden zu den russischen Fällen: Alle 6 Fälle mit Beispielen',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Russischer Akkusativ: Regeln, Endungen und Beispiele',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Kasusendungen: Der ultimative Spickzettel',
    },
  ],
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Was ist der russische Nominativ?',
      content:
        'Der **Nominativ** (Именительный падеж) ist der erste und grundlegendste der sechs russischen Fälle. Er ist die **Wörterbuchform** — die Version jedes Nomens, Adjektivs und Pronomens, wie sie in einem Wörterbucheintrag steht, ohne jede Endungsänderung. Der Nominativ beantwortet die Fragen **Кто?** (Wer?) und **Что?** (Was?).\n\nJeder andere russische Kasus ist eine Umformung des Nominativs — Genitiv, Dativ, Akkusativ, Instrumental und Präpositiv beschreiben alle, wie sich die Endung eines Wortes ändert, wenn es eine andere grammatische Rolle übernimmt. Der Nominativ ist der Ausgangspunkt, von dem aus alles andere dekliniert wird.',
      subsections: [
        {
          h3: 'Kurzantwort',
          content:
            'Der Nominativ beantwortet **Кто?** (Wer?) und **Что?** (Was?). Er markiert das **Subjekt** eines Satzes — die Person oder Sache, die die Handlung ausführt — und ist zugleich die Zitierform, die in Wörterbüchern verwendet wird.\n\nJeder russische Satz enthält mindestens ein Wort im Nominativ.',
        },
      ],
    },
    {
      h2: '6 Kernverwendungen des russischen Nominativs',
      content:
        'Auch wenn „Subjekt des Satzes“ die Hauptaufgabe des Nominativs ist, taucht er auch in fünf weiteren gängigen Situationen auf.',
      subsections: [
        {
          h3: 'Verwendung 1 — Subjekt des Satzes',
          content:
            'Die häufigste Rolle: das Nomen, das die Handlung ausführt, steht im Nominativ.',
          bullets: [
            '**Кошка спит.** — Die Katze schläft. (кошка = Subjekt)',
            '**Студент читает книгу.** — Der Student liest ein Buch. (студент = Subjekt, книгу = Akkusativobjekt)',
          ],
        },
        {
          h3: 'Verwendung 2 — Prädikatsnomen nach ausgelassenem „sein“',
          content:
            'Im Präsens lässt das Russische das Verb „sein“ (быть) vollständig weg. Sowohl das Subjekt als auch das Nomen, das es beschreibt, bleiben im **Nominativ**, oft durch einen Gedankenstrich getrennt.',
          bullets: [
            '**Она — врач.** — Sie ist Ärztin.',
            '**Москва — столица России.** — Moskau ist die Hauptstadt Russlands.',
          ],
        },
        {
          h3: 'Verwendung 3 — Benennen und Vorstellen (Это + Nominativ)',
          content:
            'Das Wort **это** („das ist / dies ist“) wird immer vom **Nominativ** gefolgt, unabhängig von Genus oder Numerus des Folgenden.',
          bullets: [
            '**Это мой брат.** — Das ist mein Bruder.',
            '**Это интересная книга.** — Das ist ein interessantes Buch.',
          ],
        },
        {
          h3: 'Verwendung 4 — Wörterbuch- und Zitierform',
          content:
            'Jeder Wörterbucheintrag, jede Vokabelliste und jede Karteikarten-App führt russische Nomen und Adjektive im **Nominativ Singular** auf. Es ist die zuerst gelernte Form und diejenige, aus der jeder andere Kasus gebildet wird.',
        },
        {
          h3: 'Verwendung 5 — Titel, Schilder und Beschriftungen',
          content:
            'Buchtitel, Ladenschilder, Straßennamen und Überschriften verwenden standardmäßig den Nominativ, da sie etwas benennen, statt eine Handlung zu beschreiben.',
          bullets: [
            '**«Война и мир»** — „Krieg und Frieden“ (ein Buchtitel)',
            '**Аптека** — Apotheke (ein Ladenschild)',
          ],
        },
        {
          h3: 'Verwendung 6 — Ausrufe und direkte Anrede',
          content:
            'Kurze Ausrufe und das Rufen eines Namens verwenden die einfache Nominativform — das Russische hat seinen eigenen Vokativ vor Jahrhunderten verloren, mit Ausnahme einiger versteinerter Formen wie **Боже!** und **Господи!**',
          bullets: [
            '**Пожар!** — Feuer!',
            '**Мама!** — Mama! (Anrufen — einfacher Nominativ, kein eigener Vokativ)',
          ],
        },
      ],
    },
    {
      h2: 'Nominativ-Singular-Endungen nach Genus',
      content:
        'Russische Nomen fallen in drei Genera, jedes mit einem vorhersagbaren Nominativ-Singular-Muster, das auf dem letzten Buchstaben des Nomens basiert.',
      table: {
        caption: 'Nominativ-Singular-Endungen nach Nomentyp',
        boldColumnIndices: [1],
        headers: ['Genus', 'Typische Endung', 'Beispiel', 'Bedeutung'],
        rows: [
          ['Maskulinum (hart)', '(Konsonant, keine Endung)', 'стол', 'Tisch'],
          ['Maskulinum (weich)', '-й / -ь', 'музей / словарь', 'Museum / Wörterbuch'],
          ['Femininum (hart)', '-а', 'книга', 'Buch'],
          ['Femininum (weich)', '-я', 'неделя', 'Woche'],
          ['Femininum (weich, ohne Vokal)', '-ь', 'ночь', 'Nacht'],
          ['Neutrum (hart)', '-о', 'окно', 'Fenster'],
          ['Neutrum (weich)', '-е', 'море', 'Meer'],
        ],
      },
      subsections: [
        {
          h3: 'Wie man das Genus erkennt',
          content:
            'Maskuline Nomen enden auf einen **Konsonanten**, **-й** oder ein **weiches Zeichen -ь**, das ein männliches Wesen oder ein Wort mit hartem Stamm beschreibt (словарь, музей). Feminine Nomen enden auf **-а**, **-я** oder ein **weiches Zeichen -ь** (eine große Gruppe, darunter die meisten abstrakten Nomen: жизнь, любовь). Neutrale Nomen enden auf **-о** oder **-е**. Die Endung **-ь** ist zwischen Maskulinum und Femininum mehrdeutig — sie muss Wort für Wort auswendig gelernt werden.',
        },
      ],
    },
    {
      h2: 'Nominativ-Plural-Endungen',
      content:
        'Den Nominativ Plural zu bilden bedeutet, die Singularendung zu ändern — das genaue Muster hängt jedoch vom Genus und von einer wichtigen Rechtschreibregel ab.',
      table: {
        caption: 'Nominativ-Plural-Endungen nach Nomentyp',
        boldColumnIndices: [1, 3],
        headers: ['Nomentyp', 'Endung', 'Bildung', 'Ergebnis'],
        rows: [
          ['Maskulinum hart', '-ы', 'стол → стол+ы', 'столы'],
          ['Maskulinum (nach г/к/х/ж/ш/щ/ч)', '-и', 'язык → язык+и', 'языки'],
          ['Maskulinum weich -й', '-и', 'музей → музе+и', 'музеи'],
          ['Maskulinum weich -ь', '-и', 'словарь → словар+и', 'словари'],
          ['Femininum -а (hart)', '-ы', 'женщина → женщин+ы', 'женщины'],
          ['Femininum -а (nach г/к/х/ж/ш/щ/ч)', '-и', 'книга → книг+и', 'книги'],
          ['Femininum -я', '-и', 'неделя → недел+и', 'недели'],
          ['Femininum -ь', '-и', 'ночь → ноч+и', 'ночи'],
          ['Neutrum -о', '-а', 'окно → окн+а', 'окна'],
          ['Neutrum -е', '-я', 'море → мор+я', 'моря'],
        ],
      },
      bullets: [
        '**Die 8-Buchstaben-Regel** ersetzt **Ы** durch **И** nach **Г, К, Х, Ж, Ш, Щ, Ч, Ц** — deshalb heißt es книга → книги, nicht книгы.',
        '**Neutrale Nomen** tauschen im Plural **-о** gegen **-а** und **-е** gegen **-я** — ein Muster, das unregelmäßig aussieht, aber vollkommen regelmäßig ist.',
        '**Maskuline Nomen mit weichem Zeichen** (**словарь, зверь**) und **feminine Nomen mit weichem Zeichen** (**ночь, дверь**) bilden identisch aussehende Plurale auf **-и** — nur ihre anderen Kasusformen verraten das Genus.',
      ],
    },
    {
      h2: 'Unregelmäßige und betonungsverschobene Nominativ-Plurale — die Pflichtliste',
      content:
        'Eine Gruppe extrem gebräuchlicher russischer Nomen bricht das reguläre Muster vollständig — entweder durch eine Betonungsverschiebung mit unerwarteter **-а/-я**-Endung oder durch die Verwendung eines völlig anderen Pluralstamms. Diese müssen einfach auswendig gelernt werden.',
      table: {
        caption: '12 unregelmäßige und betonungsverschobene Nominativ-Plurale',
        boldColumnIndices: [1],
        headers: ['Singular', 'Plural', 'Anmerkung'],
        rows: [
          ['дом (Haus)', 'дома́', 'betonungsverschobener -а-Plural (nicht домы)'],
          ['город (Stadt)', 'города́', 'betonungsverschobener -а-Plural'],
          ['глаз (Auge)', 'глаза́', 'betonungsverschobener -а-Plural'],
          ['лес (Wald)', 'леса́', 'betonungsverschobener -а-Plural'],
          ['учитель (Lehrer)', 'учителя́', 'betonungsverschobener -я-Plural'],
          ['паспорт (Pass)', 'паспорта́', 'betonungsverschobener -а-Plural'],
          ['друг (Freund)', 'друзья́', 'unregelmäßig: fügt -ья hinzu, Konsonant erweicht'],
          ['брат (Bruder)', 'бра́тья', 'unregelmäßiger -ья-Plural'],
          ['стул (Stuhl)', 'сту́лья', 'unregelmäßiger -ья-Plural'],
          ['лист (Blatt)', 'ли́стья', 'unregelmäßiger -ья-Plural (ли́сты = „Bögen Papier“ stattdessen)'],
          ['ребёнок (Kind)', 'де́ти', 'suppletiver Plural (anderer Wortstamm)'],
          ['человек (Mensch)', 'лю́ди', 'suppletiver Plural (anderer Wortstamm)'],
        ],
      },
      bullets: [
        '**Betonungsverschobene -а-Plurale** bilden eine große, produktive Gruppe meist einsilbiger maskuliner Nomen: дом, город, лес, глаз, паспорт, вечер (Abend) → вечера, доктор → доктора.',
        '**Die -ья-Plurale** (друзья, братья, стулья, листья) fügen vor **-я** einen weichen Konsonanten ein — sie sehen auf den ersten Blick überhaupt nicht wie ihre Singularform aus.',
        '**Suppletive Plurale** (ребёнок → дети, человек → люди) verwenden einen völlig anderen Wortstamm — vergleichbar mit dem Englischen „child → children“ oder „person → people“.',
        '**лист** hat je nach Bedeutung zwei verschiedene Plurale: **листья** (Blätter eines Baumes) vs. **листы** (Bögen Papier) — eine klassische Vokabelfalle.',
      ],
    },
    {
      h2: 'Nominativ vs. Akkusativ: wie man sie unterscheidet',
      content:
        'Bei **unbelebten maskulinen und neutralen Nomen** ist der Akkusativ **identisch** mit dem Nominativ — es gibt überhaupt keine Endungsänderung. Dieselbe Wortform, стол oder окно, kann entweder das Subjekt oder das direkte Objekt eines Satzes sein. Der Kontext verrät, welches von beidem gemeint ist.',
      table: {
        caption: 'Vergleich Nominativ und Akkusativ',
        boldColumnIndices: [0, 1],
        headers: ['Situation', 'Russischer Satz', 'Erklärung'],
        rows: [
          [
            'Subjekt (Nominativ)',
            'Стол стоит у окна.',
            'Der Tisch steht am Fenster. (стол = Subjekt)',
          ],
          [
            'Direktes Objekt, unbelebt (Akkusativ = Nominativ)',
            'Я вижу стол.',
            'Ich sehe den Tisch. (стол bleibt unverändert, ist jetzt aber Objekt)',
          ],
          ['Subjekt (Nominativ)', 'Мой друг пришёл.', 'Mein Freund ist gekommen. (друг = Subjekt)'],
          [
            'Direktes Objekt, belebt (Akkusativ ≠ Nominativ)',
            'Я вижу друга.',
            'Ich sehe meinen Freund. (друг → друга — belebtes Maskulinum nimmt den genitivförmigen Akkusativ)',
          ],
          [
            'Feminines Subjekt (Nominativ)',
            'Книга лежит на столе.',
            'Das Buch liegt auf dem Tisch.',
          ],
          [
            'Feminines direktes Objekt (Akkusativ ≠ Nominativ)',
            'Я читаю книгу.',
            'Ich lese ein Buch. (книга → книгу — Femininum ändert sich immer)',
          ],
        ],
      },
      subsections: [
        {
          h3: 'Die entscheidende Regel',
          content:
            '**Belebte maskuline Nomen** wechseln zum genitivförmigen Akkusativ (друг → друга). **Unbelebte maskuline und neutrale Nomen** bleiben identisch mit dem Nominativ. **Feminine Nomen** ändern ihre Endung immer (-а → -у). Das ist genau das Spiegelbild der Falle, die in unserem Leitfaden zum Akkusativ behandelt wird.',
        },
      ],
    },
    {
      h2: 'Wie Adjektive und Pronomen im Nominativ übereinstimmen',
      content:
        'Adjektive, Possessivpronomen und Demonstrativpronomen müssen mit dem Nomen, das sie beschreiben, in Genus und Numerus **übereinstimmen** — und die Nominativformen sind diejenigen, die zuerst gelernt werden.',
      table: {
        caption: 'Nominativ-Endungen von Adjektiv und Pronomen',
        boldColumnIndices: [0],
        headers: ['Genus / Numerus', 'Adjektiv (новый)', 'Possessivpronomen (мой)', 'Demonstrativpronomen (этот)'],
        rows: [
          ['Maskulinum', 'новый', 'мой', 'этот'],
          ['Femininum', 'новая', 'моя', 'эта'],
          ['Neutrum', 'новое', 'моё', 'это'],
          ['Plural (alle Genera)', 'новые', 'мои', 'эти'],
        ],
      },
      bullets: [
        '**Это**, wenn es „das ist / dies ist“ bedeutet (Verwendung 3 oben), fungiert als unveränderliches Zeigewort und ändert sich in dieser Funktion weder nach Genus noch nach Numerus.',
        '**Personalpronomen** im Nominativ — я, ты, он/она/оно, мы, вы, они — deklinieren außer in der 3. Person Singular nicht nach Genus.',
      ],
    },
    {
      h2: '24 echte Beispiele für den russischen Nominativ',
      content:
        'Im Folgenden finden Sie **24 authentische russische Sätze**, die jede wichtige Verwendung des Nominativs zeigen, mit Transliteration und Übersetzung. **1–6:** Subjekt des Satzes | **7–12:** Prädikatsnomen nach ausgelassenem „sein“ | **13–18:** Benennen mit это | **19–24:** Titel, Schilder und Ausrufe.',
      table: {
        caption: '24 Beispielsätze mit dem Nominativ',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Russisch', 'Transliteration', 'Übersetzung und Hinweise'],
        rows: [
          ['1', 'Собака лает.', 'Sobaka layet.', 'Der Hund bellt. (собака = Subjekt)'],
          [
            '2',
            'Дети играют во дворе.',
            'Deti igrayut vo dvore.',
            'Die Kinder spielen im Hof. (дети = unregelmäßiger Plural von ребёнок)',
          ],
          [
            '3',
            'Погода сегодня хорошая.',
            'Pogoda segodnya khoroshaya.',
            'Das Wetter ist heute schön. (погода = Subjekt)',
          ],
          [
            '4',
            'Мой брат работает в банке.',
            'Moy brat rabotayet v banke.',
            'Mein Bruder arbeitet bei einer Bank. (брат = Subjekt)',
          ],
          [
            '5',
            'Друзья приехали вчера.',
            'Druzya priyekhali vchera.',
            'Die Freunde sind gestern angekommen. (друзья = unregelmäßiger Plural von друг)',
          ],
          [
            '6',
            'Этот дом очень старый.',
            'Etot dom ochen staryy.',
            'Dieses Haus ist sehr alt. (дом = Subjekt)',
          ],
          [
            '7',
            'Она — моя сестра.',
            'Ona — moya sestra.',
            'Sie ist meine Schwester. (beide Nominativ, быть ausgelassen)',
          ],
          [
            '8',
            'Он врач, а она инженер.',
            'On vrach, a ona inzhener.',
            'Er ist Arzt, und sie ist Ingenieurin.',
          ],
          [
            '9',
            'Санкт-Петербург — красивый город.',
            'Sankt-Peterburg — krasivyy gorod.',
            'Sankt Petersburg ist eine schöne Stadt.',
          ],
          [
            '10',
            'Русский язык — мой любимый предмет.',
            'Russkiy yazyk — moy lyubimyy predmet.',
            'Russisch ist mein Lieblingsfach.',
          ],
          [
            '11',
            'Это здание — музей.',
            'Eto zdaniye — muzey.',
            'Dieses Gebäude ist ein Museum.',
          ],
          [
            '12',
            'Чай без сахара — моя привычка.',
            'Chay bez sakhara — moya privychka.',
            'Tee ohne Zucker ist meine Gewohnheit.',
          ],
          ['13', 'Это моя мама.', 'Eto moya mama.', 'Das ist meine Mama.'],
          [
            '14',
            'Это интересная задача.',
            'Eto interesnaya zadacha.',
            'Das ist eine interessante Aufgabe.',
          ],
          [
            '15',
            'Кто это? — Это мой сосед.',
            'Kto eto? — Eto moy sosed.',
            'Wer ist das? — Das ist mein Nachbar.',
          ],
          [
            '16',
            'Что это? — Это словарь.',
            'Chto eto? — Eto slovar.',
            'Was ist das? — Das ist ein Wörterbuch.',
          ],
          [
            '17',
            'Это не ошибка, а шутка.',
            'Eto ne oshibka, a shutka.',
            'Das ist kein Fehler, sondern ein Scherz.',
          ],
          [
            '18',
            'Это новые студенты.',
            'Eto novyye studenty.',
            'Das sind die neuen Studenten. (это bleibt unverändert; студенты ist Plural)',
          ],
          [
            '19',
            'Роман называется «Преступление и наказание».',
            'Roman nazyvayetsya "Prestupleniye i nakazaniye".',
            'Der Roman heißt „Verbrechen und Strafe“.',
          ],
          ['20', 'Вход', 'Vkhod', 'Eingang (ein Schild)'],
          [
            '21',
            'Осторожно, ступеньки!',
            'Ostorozhno, stupenki!',
            'Vorsicht, Stufen! (Warnschild, Nominativ Plural)',
          ],
          ['22', 'Пожар!', 'Pozhar!', 'Feuer! (Ausruf)'],
          [
            '23',
            'Какая красота!',
            'Kakaya krasota!',
            'Was für eine Schönheit! (Ausruf mit Adjektiv + Nominativ-Nomen)',
          ],
          [
            '24',
            'Боже мой!',
            'Bozhe moy!',
            'Mein Gott! (versteinerte Vokativform — die seltene Ausnahme)',
          ],
        ],
      },
    },
    {
      h2: 'Top 5 Nominativ-Fehler (und wie man sie behebt)',
      content: 'Die häufigsten **Fehler**, die Lernende beim Nominativ machen:',
      bullets: [
        '**Nominativ für das direkte Objekt bei belebten Nomen verwenden** — Я вижу мой друг ✗ → Я вижу моего друга ✓ (belebte maskuline direkte Objekte brauchen den Akkusativ, der wie der Genitiv aussieht)',
        '**Unregelmäßige Plurale nach einer blinden -ы/-и-Regel bilden** — други ✗ → друзья ✓ (unregelmäßige Plurale müssen einzeln auswendig gelernt werden)',
        '**Die 8-Buchstaben-Regel im Plural vergessen** — книгы ✗ → книги ✓ (nach к schreibt man -и, nicht -ы)',
        '**это wie ein Adjektiv behandeln, das übereinstimmen muss** — Эта мой брат ✗ → Это мой брат ✓ (это ändert sich nie, unabhängig von Genus oder Numerus des Folgenden)',
        '**Den Nominativ nach einer Präposition verwenden** — в дом für einen Ort ✗ → в доме ✓ (der Nominativ folgt nie auf eine Präposition — das ist tatsächlich das entscheidende Merkmal des Präpositivs)',
      ],
    },
  ],
  conclusion:
    'Der russische Nominativ wirkt täuschend einfach — er ist die zuerst gelernte Form, meist ohne Endungen, die hinzugefügt werden müssen. Doch seine Pluralformen verbergen einige der kniffligsten Unregelmäßigkeiten der gesamten Sprache, und seine Überschneidung mit dem Akkusativ ist der häufigste Stolperstein für Anfänger.\n\nZusammengefasst: Der Nominativ markiert das **Subjekt**, das **Prädikatsnomen** nach ausgelassenem „sein“ und alles, was auf **это** folgt. Die Singularendungen folgen dem Genus auf vorhersehbare Weise; die Pluralendungen folgen bei den meisten Nomen dem **-ы/-и**-Muster (mit der 8-Buchstaben-Regel), doch eine Kerngruppe hochfrequenter Wörter — **друзья, братья, дети, люди, дома, города** — muss einzeln auswendig gelernt werden.',
  conclusionOutro:
    'Weiter geht’s? Entdecken Sie die anderen Fälle in unserer kompletten Russisch-Grammatik-Serie:',
  ctaText: 'Russische Fälle mit unserer App üben',
  ctaHref: '/',
  faq: [
    {
      question: 'Wofür wird der russische Nominativ verwendet?',
      answer:
        'Der russische Nominativ wird für das Subjekt eines Satzes verwendet (Кошка спит — Die Katze schläft), für das Prädikatsnomen nach ausgelassenem „sein“ (Она — врач — Sie ist Ärztin), zum Benennen und Vorstellen mit это (Это мой брат) sowie als Wörterbuch- und Zitierform jedes Nomens.',
    },
    {
      question: 'Ist der russische Nominativ dasselbe wie der Akkusativ?',
      answer:
        'Nicht ganz, aber sie überschneiden sich bei unbelebten maskulinen und neutralen Nomen: Я вижу стол (Ich sehe den Tisch) verwendet dieselbe Form стол wie die Subjektform. Bei belebten maskulinen Nomen entspricht der Akkusativ stattdessen dem Genitiv (Я вижу друга — Ich sehe meinen Freund). Feminine Nomen ändern im Akkusativ immer ihre Endung (книга → книгу).',
    },
    {
      question: 'Wie bildet man den Nominativ Plural im Russischen?',
      answer:
        'Die meisten maskulinen und femininen Nomen fügen -ы hinzu (oder -и nach г, к, х, ж, ш, щ, ч, ц), während neutrale Nomen -о gegen -а und -е gegen -я tauschen. Eine Gruppe gebräuchlicher Nomen ist unregelmäßig und muss auswendig gelernt werden: друг → друзья, брат → братья, стул → стулья, ребёнок → дети, человек → люди, дом → дома, город → города.',
    },
    {
      question: 'Warum ändert sich это nicht nach Genus oder Numerus?',
      answer:
        'Это fungiert, wenn es „das ist / dies ist / das sind“ bedeutet, als unveränderliches Zeigewort und nicht als echtes Demonstrativadjektiv. Es bleibt это, unabhängig davon, was folgt: Это мой брат (Maskulinum), Это моя сестра (Femininum), Это мои друзья (Plural).',
    },
    {
      question: 'Hat das Russische einen eigenen Vokativ zur Anrede von Personen?',
      answer:
        'Im modernen Standardrussisch nicht — der historische Vokativ ist vor Jahrhunderten verschwunden, mit Ausnahme einiger versteinerter Formen wie Боже! (Mein Gott!) und Господи! (Herr!). Um heute jemanden anzusprechen oder zu rufen, verwendet das Russische einfach die einfache Nominativform: Мама! (Mama!), Андрей! (Andrey!).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russischer Nominativ: Regeln, Endungen und 24 echte Beispiele',
    description:
      'Der vollständige Leitfaden zum russischen Nominativ: 6 Kernverwendungen, Endungen Singular und Plural, unregelmäßige Plurale, Nominativ vs. Akkusativ. 24 echte Beispiele mit Transliteration.',
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    author: { '@type': 'Person', name: 'Nathan', url: 'https://russiandeclensions.com/' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-nominative-case',
    },
    keywords:
      'russischer Nominativ, Nominativ Russisch, russische Nominativendungen, was ist der Nominativ im Russischen, Nominativ Beispiele Russisch, Nominativ Plural Russisch',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-nominative-case-dictionary-form.webp',
      width: 1536,
      height: 1024,
    },
  },
};
