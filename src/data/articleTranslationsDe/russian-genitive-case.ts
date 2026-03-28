import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung von `russian-genitive-case` (Quelle EN/FR-Struktur). Kyrillisch unverändert aus der französischen Datei. */
export const russianGenitiveCaseDe: LearnArticle = {
  slug: 'russian-genitive-case',
  title:
    'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
  metaTitle:
    'Russischer Genitiv: Regeln, Endungen und Beispiele | Russian Cases with Anna',
  metaDescription:
    'Der vollständigste Leitfaden zum Genitiv im Russischen: 7 Verwendungen, Endungen Singular und Plural, unregelmäßige Formen, 16 Präpositionen, Zahlen, У + Genitiv. 32 echte Beispielsätze mit Transliteration.',
  keywords: [
    'russischer Genitiv',
    'Genitivendungen Russisch',
    'Genitiv Regeln Russisch',
    'Genitiv Plural Russisch',
    'Genitiv Beispiele Russisch',
    'Besitz Grammatik Russisch',
  ],
  h1: 'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
  heroImage: {
    src: '/articles/free-russian-lesson-genitive-case.webp',
    alt: 'Kostenlose Russischlektion zum Genitiv: Besitz, Verneinung und Mengen',
    width: 1200,
    height: 630,
  },
  intro:
    'Wenn Sie **nur einen weiteren russischen Kasus** neben dem Nominativ beherrschen sollten, nehmen Sie den **Genitiv**. Der russische Genitiv ist mit Abstand der **häufigste Kasus** nach dem Nominativ — er erscheint bei **Besitz**, **Verneinung**, **Mengen**, **Datumsangaben** und nach mehr **Präpositionen** als jeder andere Kasus.\n\nDieser Leitfaden deckt alles ab: die Regeln, alle Endungen, die unregelmäßigen Formen, über die jeder stolpert, und **32 russische Beispielsätze**, um zu sehen, wie der Genitiv in der Praxis funktioniert.',
  whatYouLearn: [
    'Was der russische Genitiv ist und wann man ihn braucht (7 Kernverwendungen)',
    'Genitiv Singular — alle Nomenarten mit Beispielen',
    'Genitiv Plural — inklusive Nullendung und flüchtiger Vokale',
    '11 unregelmäßige Genitiv-Plurale zum Auswendiglernen (человек → людей, глаз → глаз usw.)',
    '16 Präpositionen, die den Genitiv verlangen',
    'Zahlen und Mengen mit Genitiv (2/3/4 vs. 5+, 21, 22, 25…)',
    'Genitiv vs. Akkusativ — die Falle des belebten Maskulinums',
    'Die Konstruktion У + Genitiv für „haben“ auf Russisch',
  ],
  leadMagnetCta: {
    title: 'Üben Sie den russischen Genitiv mit intelligenten Aufgaben',
    description:
      'Unsere App trainiert alle 6 russischen Fälle — einschließlich Genitiv Plural — mit Spaced Repetition, echten Sätzen und sofortigem Feedback. Für Android und iOS.',
    ctaText: 'App herunterladen und heute mit dem Üben starten',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Der komplette Leitfaden zu den russischen Fällen: Alle 6 Fälle mit Beispielen',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Russische Kasusendungen: Der ultimative Spickzettel',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Russischer Dativ: Wie man „zu“ und „für“ auf Russisch sagt',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Was ist der russische Genitiv?',
      content:
        'Der **Genitiv** (Родительный падеж — wörtlich der „Herkunftsfall“) ist der zweite der sechs russischen Fälle. Sein Name weist auf die Hauptfunktion: **Herkunft, Zugehörigkeit oder Beziehung** — er beantwortet die Fragen **Кого ?** (wessen? von wem?) und **Чего ?** (wovon?). Im Englischen drückt man das mit **of** oder dem Possessiv **’s** aus.\n\nIm Russischen geschieht alles über **Wortendungen** — ohne Extra-Wort. Beispiel: der Name der Stadt = **название города** (города ist Genitiv von город).',
      subsections: [
        {
          h3: 'Kurzantwort',
          content:
            'Der russische Genitiv beantwortet **Кого ?** und **Чего ?**.\n\nMan braucht ihn vor allem für **Besitz**, **Abwesenheit**, **Menge**; er ist nach vielen gängigen **Präpositionen** obligatorisch.',
        },
      ],
    },
    {
      h2: '7 wichtige Verwendungen des russischen Genitivs',
      content:
        'Der Genitiv ist der **vielseitigste** Kasus im Russischen.\n\nEr erscheint bei **Besitz**, **Verneinung**, **Mengen**, **Präpositionen**, **Vergleichen**, **Daten** und bei **bestimmten Verben**.',
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
            'Der Genitiv ersetzt englisches **of** oder **’s**. Sobald ein Nomen einem anderen **gehört**, steht der **Besitzer** im **Genitiv**.',
          bullets: [
            '**дом отца** — das Haus des Vaters',
            '**столица России** — die Hauptstadt Russlands',
            '**конец фильма** — das Ende des Films',
          ],
        },
        {
          h3: 'Verwendung 2 — Abwesenheit und Verneinung (нет, не было, не будет)',
          content:
            'Sobald etwas **nicht existiert**, nicht verfügbar oder abwesend ist, ist der Genitiv Pflicht. **нет**, **не было** und **не будет** stehen immer mit dem Genitiv.',
          bullets: [
            '**У меня нет машины.** — Ich habe kein Auto. (нет + Genitiv)',
            '**Здесь нет сахара.** — Hier gibt es keinen Zucker.',
            '**Его не было дома.** — Er war nicht zu Hause. (не было + Genitiv)',
            '**Завтра не будет дождя.** — Morgen wird es keinen Regen geben.',
          ],
        },
        {
          h3: 'Verwendung 3 — Menge, Zahlen und Maß',
          content:
            'Nach den meisten **Zahlen** und **Mengenwörtern** verlangt der Russische den **Genitiv**.\n\nNach **1**: Nominativ Singular. Nach **2, 3, 4**: Genitiv Singular. Nach **5–20** und den betroffenen großen Zahlen: Genitiv Plural. Nach **много**, **мало**, **несколько**, **сколько**: Genitiv Plural.',
        },
        {
          h3: 'Verwendung 4 — Präpositionen',
          content:
            '**Mehr Präpositionen** verlangen den Genitiv als jeden anderen Kasus. Wichtige Beispiele: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**. Die vollständige Tabelle steht unten im Abschnitt Präpositionen.',
        },
        {
          h3: 'Verwendung 5 — Vergleich',
          content:
            'Im Russischen stehen **Vergleiche** mit dem Komparativ im **Genitiv**: **Он старше меня.** — Er ist älter als ich. (меня = Genitiv von я)',
        },
        {
          h3: 'Verwendung 6 — Daten',
          content:
            'Für ein **Datum** stehen **Tag und Monat** beide im Genitiv: **Он родился пятого марта.** — Er wurde am 5. März geboren.',
        },
        {
          h3: 'Verwendung 7 — Bestimmte Verben (Objekt im Genitiv)',
          content:
            'Eine wichtige Gruppe **Verben** regiert das Objekt im **Genitiv**: **ждать** (warten), **желать** (wünschen), **бояться** (sich fürchten), **избегать** (meiden), **достигать** (erreichen).',
        },
      ],
    },
    {
      h2: 'Genitivendungen — Singular',
      content:
        'Die Tabelle zeigt, wie man den **Genitiv Singular** für jeden russischen Nomtyp bildet. Bestimmen Sie **Genus** und **letzten Buchstaben** im Nominativ, dann die richtige **Endung**.\n\nHinweis: Die **8-Buchstaben-Regel** ersetzt **Ы** durch **И** nach **Г, К, Х, Ж, Ш, Щ, Ч, Ц**.',
      table: {
        caption: 'Genitiv Singular nach Nomtyp',
        boldColumnIndices: [1, 3],
        headers: [
          'Nomtyp',
          'Endung',
          'Bildung',
          'Ergebnis',
          'Beispiel im Kontext',
        ],
        rows: [
          [
            'Mask. hart',
            '-а',
            'стол → стол+а',
            'стола',
            'нет стола — es gibt keinen Tisch',
          ],
          [
            'Mask. weich',
            '-я',
            'гений → гени+я',
            'гения',
            'без гения — ohne ein Genie',
          ],
          [
            'Mask. auf -ж/ш/щ/ч',
            '-а',
            'нож → нож+а',
            'ножа',
            'без ножа — ohne Messer',
          ],
          [
            'Fem. -а (hart)',
            '-ы',
            'книга → книг+ы',
            'книги',
            'нет книги — es gibt kein Buch',
          ],
          [
            'Fem. -а (nach г/к/х/ж/ш/щ/ч/ц)',
            '-и',
            'подруга → подруг+и',
            'подруги',
            'без подруги — ohne Freundin',
          ],
          [
            'Fem. -я',
            '-и',
            'неделя → недел+и',
            'недели',
            'нет недели — es gibt keine Woche',
          ],
          [
            'Fem. -ь',
            '-и',
            'ночь → ноч+и',
            'ночи',
            'до ночи — bis zur Nacht',
          ],
          ['Neutr. -о', '-а', 'окно → окн+а', 'окна', 'нет окна — es gibt kein Fenster'],
          ['Neutr. -е', '-я', 'море → мор+я', 'моря', 'до моря — bis zum Meer'],
          [
            'Neutr. -мя',
            '-ени',
            'имя → имен+и',
            'имени',
            'без имени — ohne Namen',
          ],
        ],
      },
    },
    {
      h2: 'Genitivendungen — Plural (der schwierigste Teil)',
      content:
        'Der **Genitiv Plural** gilt oft als **schwierigster Bereich** der russischen Deklination. Er hat mehr Formen und Ausnahmen als jeder andere Kasus.\n\nViele feminine Nomen auf **-а** und neutrale auf **-о** haben eine **Nullendung** (**-Ø**) — der Stamm steht allein. Bei **окон** und **яблок** wird ein flüchtiger Vokal **О** zwischen Konsonanten eingefügt.',
      table: {
        caption: 'Genitiv Plural nach Nomtyp',
        boldColumnIndices: [1, 3],
        headers: [
          'Nomtyp',
          'Endung',
          'Bildung',
          'Ergebnis',
          'Beispiel im Kontext',
        ],
        rows: [
          [
            'Mask. hart',
            '-ов',
            'стол → стол+ов',
            'столов',
            'пять столов — fünf Tische',
          ],
          [
            'Mask. auf -ж/ш/щ/ч/ц (betont)',
            '-ей',
            'нож → нож+ей',
            'ножей',
            'несколько ножей — mehrere Messer',
          ],
          [
            'Mask. auf -ж/ш/щ/ч/ц (unbetont)',
            '-ей',
            'врач → врач+ей',
            'врачей',
            'много врачей — viele Ärzte',
          ],
          [
            'Mask. weich -й',
            '-ев',
            'музей → музе+ев',
            'музеев',
            'три музея — drei Museen',
          ],
          [
            'Mask. weich -ь',
            '-ей',
            'словарь → словар+ей',
            'словарей',
            'много словарей — viele Wörterbücher',
          ],
          [
            'Fem. -а (hart)',
            '-Ø (Null)',
            'женщина → женщин',
            'женщин',
            'много женщин — viele Frauen',
          ],
          [
            'Fem. -а (nach к/г)',
            '-Ø',
            'подруга → подруг',
            'подруг',
            'нет подруг — keine Freundinnen',
          ],
          [
            'Fem. -я',
            '-ей / -й',
            'неделя → недель',
            'недель',
            'несколько недель — mehrere Wochen',
          ],
          [
            'Fem. -ь',
            '-ей',
            'ночь → ноч+ей',
            'ночей',
            'пять ночей — fünf Nächte',
          ],
          [
            'Neutr. -о (hart)',
            '-Ø',
            'окно → окон',
            'окон',
            'много окон — viele Fenster',
          ],
          ['Neutr. -е', '-ей', 'море → мор+ей', 'морей', 'пять морей — fünf Meere'],
          [
            'Neutr. -ие/-ия',
            '-ий',
            'здание → здани+й',
            'зданий',
            'много зданий — viele Gebäude',
          ],
        ],
      },
    },
    {
      h2: 'Unregelmäßige Genitiv-Plurale — Pflichtliste',
      content:
        'Einige der häufigsten russischen Nomen haben **sehr unregelmäßige** Genitiv-Plurale, die man **auswendig lernen** muss. Das sind **Hochfrequenz-Wörter**.',
      table: {
        caption: '11 extrem häufige unregelmäßige Genitiv-Plurale',
        boldColumnIndices: [1, 2],
        headers: [
          'Nominativ Singular',
          'Genitiv Plural',
          'Beispiel',
          'Anmerkung',
        ],
        rows: [
          ['человек (Person)', 'людей', 'много людей', 'Suppletion (люди)'],
          ['ребёнок (Kind)', 'детей', 'много детей', 'Suppletion (дети)'],
          ['глаз (Auge)', 'глаз', 'пара глаз', 'Nullendung (nicht глазов)'],
          ['раз (Mal)', 'раз', 'несколько раз', 'Nullendung (nicht разов)'],
          ['солдат (Soldat)', 'солдат', 'отряд солдат', 'Nullendung'],
          ['носок (Socke)', 'носков', 'пара носков', 'behält -ов'],
          ['чулок (Strumpf)', 'чулок', 'пара чулок', 'Nullendung (nicht чулков)'],
          ['яблоко (Apfel)', 'яблок', 'килограмм яблок', 'Nullendung'],
          ['имя (Name)', 'имён', 'список имён', 'Neutrum-Typ auf -мя'],
          ['мать (Mutter)', 'матерей', 'двое матерей', 'Sonderdeklinierung'],
          ['дочь (Tochter)', 'дочерей', 'трое дочерей', 'Sonderdeklinierung'],
        ],
      },
    },
    {
      h2: 'Russische Präpositionen mit Genitiv — vollständige Liste',
      content:
        'Folgende **Präpositionen** verlangen immer den **Genitiv**. Merkhilfe — das Akronym **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**.\n\nDiese 8 Präpositionen decken **etwa 90 %** der Genitiv-Verwendung nach Präposition ab.',
      table: {
        caption: '16 Präpositionen mit Genitiv und Beispielen',
        boldColumnIndices: [0, 2],
        headers: [
          'Präp.',
          'Bedeutung',
          'Mit Nomen',
          'Vollständiger Satz + Übersetzung',
        ],
        rows: [
          [
            'без',
            'ohne',
            'без молока',
            'Я пью чай без молока. — Ich trinke Tee ohne Milch.',
          ],
          [
            'до',
            'bis / vor / bis zu (Grenze)',
            'до урока',
            'Позвони мне до урока. — Ruf mich vor der Stunde an.',
          ],
          [
            'из',
            'aus (heraus)',
            'из России',
            'Он приехал из России. — Er kam aus Russland.',
          ],
          [
            'с',
            'von (einer Fläche)',
            'с полки',
            'Книга упала с полки. — Das Buch fiel vom Regal.',
          ],
          [
            'у',
            'bei / bei jdm.',
            'у меня',
            'У меня есть кошка. — Ich habe eine Katze.',
          ],
          [
            'от',
            'von (Person / Quelle)',
            'от друга',
            'Письмо от друга. — Ein Brief von einem Freund.',
          ],
          [
            'после',
            'nach',
            'после работы',
            'После работы я устал. — Nach der Arbeit war ich müde.',
          ],
          [
            'для',
            'für (zugunsten)',
            'для тебя',
            'Это подарок для тебя. — Das ist ein Geschenk für dich.',
          ],
          [
            'кроме',
            'außer / neben',
            'кроме меня',
            'Все кроме меня пришли. — Alle außer mir sind gekommen.',
          ],
          [
            'вокруг',
            'um … herum',
            'вокруг города',
            'Мы ехали вокруг города. — Wir fuhren um die Stadt.',
          ],
          [
            'мимо',
            'an … vorbei',
            'мимо школы',
            'Он прошёл мимо школы. — Er ging an der Schule vorbei.',
          ],
          [
            'вместо',
            'anstelle von',
            'вместо кофе',
            'Выпей воды вместо кофе. — Trink Wasser statt Kaffee.',
          ],
          [
            'напротив',
            'gegenüber',
            'напротив банка',
            'Кафе напротив банка. — Das Café liegt der Bank gegenüber.',
          ],
          [
            'из-за',
            'wegen / von hinten',
            'из-за дождя',
            'Из-за дождя мы остались дома. — Wegen des Regens blieben wir zu Hause.',
          ],
          [
            'из-под',
            'von unten (her)',
            'из-под стола',
            'Кот вылез из-под стола. — Die Katze kam unter dem Tisch hervor.',
          ],
          [
            'ради',
            'um … willen',
            'ради тебя',
            'Ради твоего счастья. — Um deines Glückes willen.',
          ],
        ],
      },
    },
    {
      h2: 'Russische Zahlen und der Genitiv',
      content:
        'Zählen auf Russisch verlangt den **Genitiv** — ob **Singular** oder **Plural** hängt von der Zahl ab.\n\nDas Russische zählt in **„Paketen“**: Zahlen, die auf **1** enden, nutzen den Nominativ; **2–4** Genitiv Singular; **5–0** Genitiv Plural.',
      table: {
        caption: 'Zahl + Kasus mit Beispielen',
        boldColumnIndices: [1, 2],
        headers: [
          'Zahl / Quantor',
          'Erforderlicher Kasus',
          'Beispiel (стол)',
          'Übersetzung',
        ],
        rows: [
          ['1', 'Nominativ Singular', 'один стол', 'ein Tisch'],
          [
            '2, 3, 4',
            'Genitiv Singular',
            'два стола / три стола',
            'zwei / drei Tische',
          ],
          ['5–20', 'Genitiv Plural', 'пять столов', 'fünf Tische'],
          [
            '21, 31, 41… (endet auf 1)',
            'Nominativ Singular',
            'двадцать один стол',
            'ein Tisch (Nominativ Singular nach 1)',
          ],
          [
            '22–24, 32–34… (endet auf 2–4)',
            'Genitiv Singular',
            'двадцать два стола',
            'zweiundzwanzig Tische',
          ],
          [
            '25–30 usw. (endet auf 5–9, 0)',
            'Genitiv Plural',
            'двадцать пять столов',
            'fünfundzwanzig Tische',
          ],
          ['100, 200, 1000…', 'Genitiv Plural', 'сто столов', 'hundert Tische'],
          [
            'много / несколько / мало',
            'Genitiv Plural',
            'много столов',
            'viele / einige / wenige Tische',
          ],
          [
            'сколько / столько',
            'Genitiv Plural',
            'сколько столов?',
            'wie viele Tische?',
          ],
        ],
      },
    },
    {
      h2: 'Genitiv vs. Akkusativ: wie man sie unterscheidet',
      content:
        'Einer der verwirrendsten Punkte ist die Unterscheidung von **Genitiv** und **Akkusativ**. Bei **belebten maskulinen** Nomen ist die Akkusativform **identisch** mit dem Genitiv — **студента** kann beides sein.\n\n**Kontext** und **Satzstruktur** entscheiden.',
      table: {
        caption: 'Vergleich Genitiv / Akkusativ',
        boldColumnIndices: [0, 1],
        headers: ['Situation', 'Russischer Satz', 'Erklärung'],
        rows: [
          [
            'Besitz / Zugehörigkeit',
            'Это книга студента.',
            'Das ist das Buch des Studenten. (Genitiv markiert den Besitzer)',
          ],
          [
            'Abwesenheit (нет)',
            'Нет студента.',
            'Es gibt keinen Studenten. (нет verlangt immer Genitiv)',
          ],
          [
            'direktes Objekt (belebt)',
            'Я вижу студента.',
            'Ich sehe den Studenten. (Akk. belebt = Genitivform)',
          ],
          [
            'direktes Objekt (unbelebt)',
            'Я вижу стол.',
            'Ich sehe den Tisch. (Akk. unbelebt = Nominativ — kein Genitiv)',
          ],
          [
            'Nach Zahlwörtern 2–4',
            'Я вижу двух студентов.',
            'Ich sehe zwei Studenten. (belebt → Genitiv Plural mit Zahlwort)',
          ],
          [
            'partitiver Genitiv',
            'Хочешь чаю?',
            'Willst du Tee? (Partitiv — Genitiv für „etwas von“)',
          ],
        ],
      },
    },
    {
      h2: '32 echte Beispiele für den russischen Genitiv',
      content:
        'Hier sind **32 authentische russische Sätze** zu den wichtigsten Genitiv-Verwendungen. Jede Zeile hat Transliteration und Übersetzung. **1–5:** Besitz | **6–10:** Abwesenheit / Verneinung | **11–15:** Menge und Zahlen | **16–22:** Präpositionen | **23–32:** Redewendungen und Sonstiges.',
      table: {
        caption: '32 Beispielsätze mit Genitiv',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Russisch', 'Transliteration', 'Übersetzung und Hinweise'],
        rows: [
          [
            '1',
            'Это машина моего брата.',
            'Eto mashina moyego brata.',
            'Das ist das Auto meines Bruders. (брат → брата, Gen. Sg. Mask.)',
          ],
          [
            '2',
            'Адрес нашей компании.',
            'Adres nashey kompanii.',
            'Die Adresse unserer Firma. (компания → компании)',
          ],
          [
            '3',
            'Столица России — Москва.',
            'Stolitsa Rossii — Moskva.',
            'Die Hauptstadt Russlands ist Moskau. (Россия → России)',
          ],
          [
            '4',
            'Конец фильма был неожиданным.',
            'Konets filma byl neozhidannym.',
            'Das Filmende war überraschend. (фильм → фильма)',
          ],
          [
            '5',
            'Цвет её глаз — карий.',
            'Tsvet yeyo glaz — kariy.',
            'Die Augenfarbe ist braun. (глаза → глаз, Gen. Pl.)',
          ],
          [
            '6',
            'У меня нет времени.',
            'U menya net vremeni.',
            'Ich habe keine Zeit. (время → времени, Neutrum auf -мя)',
          ],
          [
            '7',
            'Здесь нет молока.',
            "Zdes' net moloka.",
            'Hier gibt es keine Milch. (молоко → молока)',
          ],
          [
            '8',
            'Я не видел его несколько дней.',
            'Ya ne videl yego neskolko dney.',
            'Ich hatte ihn mehrere Tage nicht gesehen. (день → дней)',
          ],
          [
            '9',
            'В холодильнике нет яиц.',
            'V kholodilnike net yaits.',
            'Im Kühlschrank sind keine Eier. (яйцо → яиц, Gen. Pl.)',
          ],
          [
            '10',
            'Без тебя мне плохо.',
            'Bez tebya mne plokho.',
            'Ohne dich geht es mir schlecht. (ты → тебя, Pronomen Genitiv)',
          ],
          [
            '11',
            'Два стакана воды, пожалуйста.',
            'Dva stakana vody, pozhaluysta.',
            'Zwei Gläser Wasser, bitte. (два + Gen. Sg.)',
          ],
          [
            '12',
            'Пять минут ходьбы отсюда.',
            "Pyat' minut khod'by otsyuda.",
            'Fünf Minuten Fußweg von hier. (пять + Gen. Pl.)',
          ],
          [
            '13',
            'Много людей пришло на концерт.',
            'Mnogo lyudey prishlo na kontsert.',
            'Viele Leute kamen zum Konzert. (много + людей)',
          ],
          [
            '14',
            'Несколько студентов опоздало.',
            'Neskolko studentov opozdalo.',
            'Mehrere Studenten kamen zu spät. (несколько + Gen. Pl.)',
          ],
          [
            '15',
            'Килограмм помидоров.',
            'Kilogramm pomidorov.',
            'Ein Kilo Tomaten. (помидоры → помидоров)',
          ],
          [
            '16',
            'Она пришла из Германии.',
            'Ona prishla iz Germanii.',
            'Sie kam aus Deutschland. (из + Gen.)',
          ],
          [
            '17',
            'До свидания!',
            'Do svidaniya!',
            'Auf Wiedersehen! Wörtlich: Bis zum Wiedersehen. (до + Gen.)',
          ],
          [
            '18',
            'Без усилий нет результатов.',
            'Bez usiliy net rezultatov.',
            'Ohne Anstrengung kein Erfolg. (без + Gen. Pl.)',
          ],
          [
            '19',
            'У врача очередь.',
            "U vracha ochered'.",
            'Beim Arzt gibt es eine Warteschlange. (у + Gen.)',
          ],
          [
            '20',
            'После дождя — солнце.',
            'Posle dozhdya — solntse.',
            'Nach dem Regen kommt Sonnenschein. (после + Gen.)',
          ],
          [
            '21',
            'Вокруг парка — красивые дома.',
            'Vokrug parka — krasivye doma.',
            'Um den Park stehen schöne Häuser. (вокруг + Gen.)',
          ],
          [
            '22',
            'Из-за пробок я опоздал.',
            'Iz-za probok ya opozdal.',
            'Wegen Staus kam ich zu spät. (из-за + Gen.)',
          ],
          [
            '23',
            'Ни слова правды.',
            'Ni slova pravdy.',
            'Kein Wort Wahrheit. (Genitiv der Verneinung)',
          ],
          [
            '24',
            'Не было смысла спорить.',
            "Ne bylo smysla sporit'.",
            'Es hatte keinen Sinn zu streiten. (не было + Gen.)',
          ],
          [
            '25',
            'Час от часу не легче.',
            'Chas ot chasu ne legche.',
            'Es wird immer schlimmer. (Redewendung: от + Gen.)',
          ],
          [
            '26',
            'Ради твоего счастья.',
            'Radi tvoyego schastya.',
            'Um deinetwillen / für dein Glück. (ради + Gen.)',
          ],
          [
            '27',
            'Сколько стоит бутылка воды?',
            'Skolko stoit butylka vody?',
            'Was kostet eine Flasche Wasser? (воды = Gen. Sg. von вода)',
          ],
          [
            '28',
            'Мне не хватает денег.',
            'Mne ne khvatayet deneg.',
            'Mir fehlt Geld. (не хватает + Gen.)',
          ],
          [
            '29',
            'Желаю тебе счастья и здоровья!',
            'Zhelayu tebe schastya i zdorovya!',
            'Ich wünsche dir Glück und Gesundheit! (желать + Gen.)',
          ],
          [
            '30',
            'Начало нового года.',
            'Nachalo novogo goda.',
            'Der Anfang des neuen Jahres. (Kette im Gen.: нового + года)',
          ],
          [
            '31',
            'У неё голубые глаза.',
            'U neyo golubye glaza.',
            'Sie hat blaue Augen. (у + Pronomen Genitiv)',
          ],
          [
            '32',
            'Вкус победы.',
            'Vkus pobedy.',
            'Der Geschmack des Sieges. (победа → победы, Gen. Sg.)',
          ],
        ],
      },
    },
    {
      h2: 'Besitz im Russischen: У + Genitiv („haben“)',
      content:
        'Das Russische hat **zwei Hauptwege** für Besitz, beide mit Genitiv. **Konstruktion 1 — Nomen + Genitiv:** **машина друга** — das Auto des Freundes. **Konstruktion 2 — У + Genitiv + есть:** um auszudrücken, dass jemand etwas hat.\n\nEs gibt kein direktes Verb für **„haben“**. Stattdessen: **У** [Person im Genitiv] **есть** [Sache].',
      subsections: [
        {
          h3: 'Die У-Konstruktion in allen Zeiten',
          content:
            '**Präsens:** **У меня есть кошка.** (Ich habe eine Katze — есть wird umgangssprachlich oft weggelassen). **Vergangenheit:** **У меня была кошка.** (Ich hatte eine Katze — была stimmt mit кошка überein). **Zukunft:** **У меня будет кошка.** (Ich werde eine Katze haben).\n\n**Verneinung — Präsens:** **У меня нет кошки.** (нет + Genitiv). **Verneinung — Vergangenheit:** **У меня не было кошки.** **Verneinung — Zukunft:** **У меня не будет кошки.**',
        },
      ],
    },
    {
      h2: 'Top 7 Genitiv-Fehler (und wie man sie vermeidet)',
      content:
        'Die **häufigsten Fehler** von Lernenden beim Genitiv:',
      bullets: [
        '**Nominativ nach НЕТ** — Нет кот. ✗ → Нет кота. ✓ (нет verlangt immer Genitiv)',
        '**8-Buchstaben-Regel vergessen** — книгы ✗ → книги ✓ (nach г → и, nicht ы)',
        '**Falsche Kongruenz mit der Zahl** — пять стол ✗ → пять столов ✓ (5+ verlangt Genitiv Plural)',
        '**-ов bei Femininum mit Nullendung** — много женщинов ✗ → много женщин ✓',
        '**из und от verwechseln** — из = „aus (innen / Ort)“ ; от = „von (Person / Quelle)“. Он пришёл от врача vs. Он вернулся из больницы.',
        '**Akkusativ statt Genitiv nach Vergleich** — Он старше я ✗ → Он старше меня ✓',
        '**Flüchtige Vokale im Genitiv Plural vergessen** — окнов ✗ → окон ✓ ; ручков ✗ → ручек ✓',
      ],
    },
  ],
  conclusion:
    'Der russische Genitiv ist das **Arbeitspferd** des Kasussystems. Er regelt **Besitz**, **Verneinung**, **Menge**, **Vergleich**, **Daten** und wird von mehr **Präpositionen** verlangt als jeder andere Kasus.\n\nKurz: **Genitiv Singular** — Maskulinum → **-а/-я** | Femininum → **-ы/-и** | Neutrum → **-а/-я**. **Genitiv Plural** — Muster und häufige Ausnahmen auswendig lernen. Nach **НЕТ**, **НЕ БЫЛО**, **НЕ БУДЕТ**: immer Genitiv. Nach **2/3/4**: Genitiv Singular | nach **5+**, **много**, **несколько**: Genitiv Plural. Schlüssel-Präpositionen: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
  conclusionOutro:
    'Weiter geht’s? Entdecken Sie die anderen Fälle in unserer kompletten Russisch-Grammatik-Serie:',
  ctaText: 'Russische Fälle mit unserer App üben',
  ctaHref: '/',
  faq: [
    {
      question: 'Wofür braucht man den Genitiv im Russischen?',
      answer:
        'Der russische Genitiv dient dem Besitz (книга студента — das Buch des Studenten), der Abwesenheit / Verneinung (нет воды — kein Wasser), Menge und Zahlen (два стакана — zwei Gläser ; много людей — viele Leute), nach vielen Präpositionen (без, до, из, у, от, после, для…), Vergleichen (старше меня — älter als ich) und Daten.',
    },
    {
      question: 'Wie bildet man den Genitiv Plural im Russischen?',
      answer:
        'Die Bildung hängt vom Nomtyp ab: harte Maskulina fügen -ов hinzu (стол → столов) ; weiche Maskulina und Feminina oft -ей (ночь → ночей ; словарь → словарей) ; Feminina auf -а haben oft Nullendung (женщина → женщин, книга → книг). Neutra auf -о ebenfalls oft mit Nullendung und manchmal flüchtigem Vokal (окно → окон). Das ist der schwierigste Teil der russischen Deklination.',
    },
    {
      question: 'Ist der russische Genitiv gleich dem Akkusativ?',
      answer:
        'Nicht genau, aber bei belebten Maskulina fallen sie zusammen: Я вижу студента (Akkusativ) und Нет студента (Genitiv) nutzen dieselbe Form студента. Bei Unbelebtem ist der maskuline Akkusativ gleich dem Nominativ (Я вижу стол), der Genitiv bekommt -а (Нет стола). Beim Femininum wird im Akkusativ -а zu -у (Я читаю книгу), im Genitiv -а zu -ы/-и (Нет книги).',
    },
    {
      question: 'Welche Verben verlangen im Russischen den Genitiv?',
      answer:
        'Häufige Verben mit Genitivobjekt: бояться (sich fürchten vor), ждать (warten auf), желать (wünschen), избегать (meiden), достигать (erreichen), лишать (berauben), касаться (betreffen), und хотеть in partitiven Wendungen (хочешь чаю? — willst du Tee?).',
    },
    {
      question: 'Wie sagt man „ich habe“ auf Russisch?',
      answer:
        'Es gibt kein direktes „haben“. Man nutzt У + [Person Genitiv] + есть + [Sache]: У меня есть машина (ich habe ein Auto). Verneinung: У меня нет машины (ich habe kein Auto) — das nicht Besessene steht nach нет im Genitiv.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
    description:
      'Kompletter Leitfaden zum Genitiv: 7 Verwendungen, Endungen Singular und Plural, unregelmäßige Formen, 16 Präpositionen, Zahlen, У + Genitiv. 32 echte Beispiele mit Transliteration.',
    datePublished: '2025-03-11',
    dateModified: '2025-03-11',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-genitive-case',
    },
    keywords:
      'russischer Genitiv, Genitivendungen Russisch, Genitiv Regeln, Genitiv Plural Russisch, Genitiv Beispiele, Besitz Grammatik Russisch',
  },
};
