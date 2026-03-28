import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-instrumental-case` (EN-Quelle: `learnArticles.ts`). Kyrillisch zeichengenau übernommen. */
export const russianInstrumentalCaseDe: LearnArticle = {
  slug: 'russian-instrumental-case',
  title:
    'Russischer Instrumental: wann man ihn braucht — und warum er einfacher ist als gedacht',
  metaTitle:
    'Russischer Instrumental: Endungen, Berufe, с + Instrumental, 30 Beispiele | Russian Cases with Anna',
  metaDescription:
    'Vollständiger Leitfaden zum russischen Instrumental: Substantiv- und Adjektivendungen, Berufe (быть/стать/работать), с + Instrumental, räumliche Präpositionen (за/перед/над/под), Zeitangaben, 15 Verben, 30 echte Beispiele.',
  keywords: [
    'russischer Instrumental',
    'Instrumental Endungen Russisch',
    'с + Instrumental Russisch',
    'Instrumental Präpositionen Russisch',
    'быть стать работать Instrumental',
    'Berufe Instrumental Russisch',
  ],
  h1: 'Russischer Instrumental: wann man ihn braucht — und warum er einfacher ist als gedacht',
  heroImage: {
    src: '/articles/free-russian-lesson-instrumental-case.webp',
    alt:
      'Kostenlose Russischlektion zum Instrumental: Berufe, с + Instrumental und mehr',
    width: 1200,
    height: 630,
  },
  intro:
    'Unter den russischen Fällen hat der Instrumental den Ruf, einschüchternd zu sein. Lernende sehen Endungen wie **-ом**, **-ей**, **-ью**, **-ями** und fühlen sich überfordert.\n\nDoch der **Instrumental** gehört zu den **regelmäßigsten und vorhersagbarsten** Endungen im Russischen — und sobald man die Kernverwendungen versteht, wird er zu einem der logischsten Fälle. Dieser Leitfaden erklärt ihn vollständig.',
  whatYouLearn: [
    'Was der Instrumental ist und seine **6 Kernverwendungen**',
    '**Instrumental-Endungen** bei Substantiven — alle Genera, Singular und Plural',
    'Instrumental-Endungen bei **Adjektiven**',
    '**Berufe und Rollen** im Instrumental (работать врачом, стать учителем)',
    '**С + Instrumental** — wie man auf Russisch „mit“ sagt',
    'Alle Präpositionen, die den Instrumental verlangen (**за, перед, над, под, между**)',
    '**Zeitangaben** im Instrumental (утром, летом, ночью)',
    '**15 zentrale Verben** mit Instrumental-Ergänzung',
    '**30 echte russische Sätze** mit Transliteration',
  ],
  leadMagnetCta: {
    title:
      'Üben Sie den russischen Instrumental mit Übungen auf dem Handy',
    description:
      'Unsere Mobile-App trainiert alle 6 russischen Fälle — mit Schwerpunkt auf Berufen, с + Instrumental, räumlichen Präpositionen und reflexiven Verben. Für Android und iOS.',
    ctaText: 'App herunterladen und heute noch üben',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Vollständiger Leitfaden zu den russischen Fällen: alle 6 Fälle mit Beispielen',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label:
        'Russische Kasusendungen: der ultimative Spickzettel',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label:
        'Russischer Akkusativ: direkte Objekte, belebt vs. unbelebt',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label:
        'Russischer Dativ: wie man „zu“ und „für“ auf Russisch sagt',
    },
  ],
  tableAccentVariant: 'instrumental',
  sections: [
    {
      h2: 'Kurzantwort',
      content:
        'Der Instrumental beantwortet die Fragen **Кем? (durch wen?)** und **Чем? (womit? / durch was?)**.\n\nEr wird für Werkzeug und Mittel, Begleitung (mit **с**), Berufe und Rollen (nach **быть/стать**) gebraucht und von mehreren wichtigen Präpositionen verlangt (**за**, **перед**, **над**, **под**, **между**).',
    },
    {
      h2: 'Was ist der russische Instrumental?',
      content:
        'Der Instrumental (**Творительный падеж** — von творить, „schaffen/tun“) ist der fünfte der sechs russischen Fälle. Der Name weist auf die ursprüngliche Funktion: das **Werkzeug oder Mittel** zu kennzeichnen, mit dem eine Handlung ausgeführt wird.\n\nKernbeispiel: **Он пишет ручкой.** — Er schreibt mit dem Stift. (ручка → ручкой — der Stift ist das Mittel)',
      subsections: [
        {
          h3: 'Der Instrumental wird gebraucht für:',
          content: '',
          bullets: [
            '**Werkzeug oder Mittel** der Handlung (писать ручкой — mit dem Stift schreiben)',
            '**Begleitung** mit С (идти с другом — mit einem Freund gehen)',
            '**Beruf oder Rolle** nach быть/стать/работать (быть врачом — Arzt sein)',
            '**Zeitangaben** (утром — morgens, летом — im Sommer, ночью — nachts)',
            '**Räumliche Lage** nach за, перед, над, под, между (за столом — am Tisch)',
            '**Reflexive Verben des Engagements** (заниматься, интересоваться, гордиться…)',
          ],
        },
      ],
    },
    {
      h2: 'Instrumental-Endungen — Substantive',
      content:
        'Hier ist die vollständige Tabelle der Instrumental-Endungen für russische Substantive.\n\nDie Muster sind **einheitlich**, und der Plural ist für alle Genera gleich (**-ами/-ями**).',
      image: {
        src: '/articles/instrumental-case-russian-noun-endings-declension-table.webp',
        alt:
          'Deklinationstabelle Instrumental: russische Substantivendungen nach Genus',
        width: 1200,
        height: 630,
      },
      table: {
        caption:
          'Substantiv-Endungen im Instrumental — alle Genera, Singular und Plural',
        boldColumnIndices: [1, 3],
        headers: [
          'Substantivtyp',
          'Endung',
          'Bildung',
          'Ergebnis',
          'Beispiel im Kontext',
        ],
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
            'Он машет словарём. — Er schwenkt das Wörterbuch.',
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
          [
            'Fem. (-ь)',
            '-ью',
            'ночь → ноч+ью',
            'ночью',
            'ночью — nachts / bei Nacht',
          ],
          [
            'Neutrum hart (-о)',
            '-ом',
            'окно → окн+ом',
            'окном',
            'за окном — draußen / hinter dem Fenster',
          ],
          [
            'Neutrum weich (-е)',
            '-ем',
            'море → мор+ем',
            'морем',
            'за морем — jenseits des Meeres / über See',
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
        '**Maskulin und Neutrum (hart)** — -ОМ: стол→столом, окно→окном',
        '**Maskulin und Neutrum (weich)** — -ЕМ/-ЁМ: музей→музеем, море→морем',
        '**Feminin -а** — -ОЙ: женщина→женщиной',
        '**Feminin -я** — -ЕЙ: земля→землёй',
        '**Feminin -ь** — -ЬЮ: ночь→ночью (nur im Instrumental!)',
        '**Plural (hart)** — -АМИ: столы→столами',
        '**Plural (weich)** — -ЯМИ: моря→морями',
      ],
    },
    {
      h2: 'Instrumental-Endungen — Adjektive',
      content:
        'Adjektive stimmen mit ihrem Substantiv in Genus, Numerus und Kasus überein.\n\nIm Instrumental sind die Endungen **deutlich und regelmäßig**:',
      table: {
        caption: 'Adjektiv-Endungen im Instrumental',
        boldColumnIndices: [1, 2],
        headers: [
          'Genus / Numerus',
          'Endung',
          'Adj.-Form',
          'Vollständige Phrase',
          'Bedeutung',
        ],
        rows: [
          [
            'Mask./Neutrum hart',
            '-ым',
            'новый → новым',
            'новым другом',
            'mit einem neuen Freund',
          ],
          [
            'Mask./Neutrum weich',
            '-им',
            'синий → синим',
            'синим морем',
            'mit dem blauen Meer',
          ],
          [
            'Feminin hart',
            '-ой / -ою',
            'красивая → красивой',
            'с красивой девушкой',
            'mit einem schönen Mädchen',
          ],
          [
            'Feminin weich',
            '-ей',
            'летняя → летней',
            'летней ночью',
            'in einer Sommernacht',
          ],
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
        '**Beispiel ganze Phrase:** Я горжусь умным сыном — Ich bin stolz auf meinen klugen Sohn. (умным = mask. instr. Adj.; сыном = mask. instr. Subst.)',
      ],
    },
    {
      h2: 'Berufe und Rollen im Instrumental',
      content:
        'Eine der markantesten Verwendungen des russischen Instrumentals ist die **Beruf, Rolle oder Status** einer Person — besonders nach den Verben **быть** (sein), **стать** (werden), **работать** (arbeiten als) und **назначить** (ernennen).\n\nIm Englischen sagt man „He is a doctor“. Im Russischen steht das Prädikatsnomen im Instrumental: **Он был врачом** (Er war Arzt — Instrumental obligatorisch).',
      subsections: [
        {
          h3: 'Präsens vs. Vergangenheit / Zukunft',
          content: '',
          bullets: [
            '**Präsens** mit weggelassenem sein: Nominativ ist üblich (Он — врач. / Она — учитель.)',
            '**Vergangenheit** (был/была): Instrumental ist **obligatorisch** (Он был врачом. / Она была учителем.)',
            '**Zukunft** (будет): Instrumental ist **obligatorisch** (Он будет врачом.)',
            'Nach **стать**: immer Instrumental (Она стала врачом.)',
            'Nach **работать**: immer Instrumental (Он работает врачом.)',
          ],
        },
      ],
      table: {
        caption: 'Berufe mit Instrumental',
        boldColumnIndices: [1],
        headers: [
          'Beruf (Nominativ)',
          'Russischer Satz',
          'Übersetzung',
          'Grammatikhinweis',
        ],
        rows: [
          [
            'врач (Arzt)',
            'Он работает врачом.',
            'Er arbeitet als Arzt.',
            'Mask. → -ом',
          ],
          [
            'учитель (Lehrer)',
            'Она работает учительницей.',
            'Sie arbeitet als Lehrerin.',
            'Fem. Beruf → -ей',
          ],
          [
            'инженер',
            'Мой брат — инженером.',
            'Mein Bruder ist Ingenieur.',
            'Prädikat mit sein → Instrumental',
          ],
          [
            'переводчик (Übersetzer)',
            'Она стала переводчиком.',
            'Sie wurde Übersetzerin.',
            'Стать + Instrumental',
          ],
          [
            'президент',
            'Он был президентом.',
            'Er war Präsident.',
            'Быть in der Vergangenheit + Instrumental',
          ],
          [
            'директор (Direktor/in)',
            'Её назначили директором.',
            'Sie wurde zur Direktorin ernannt.',
            'Назначить + Instrumental',
          ],
        ],
      },
    },
    {
      h2: 'С + Instrumental: „mit“ auf Russisch',
      content:
        'Die Präposition **с** (mit) mit Instrumental ist eine der häufigsten Konstruktionen im Russischen.\n\nSie drückt **Begleitung** aus — etwas gemeinsam mit jemandem oder etwas tun.',
      subsections: [
        {
          h3: 'Beispiele',
          content:
            'Я иду с другом. — Ich gehe mit einem Freund. | Выпей чай с лимоном. — Trink Tee mit Zitrone. | Мы живём с родителями. — Wir leben bei unseren Eltern.\n\nКофе с молоком. — Kaffee mit Milch. | Бутерброд с сыром. — Ein Sandwich mit Käse.',
        },
        {
          h3: 'С vs. СО — welche Form?',
          content: '',
          bullets: [
            '**С** ist die Standardform: с другом, с мамой, с молоком',
            '**СО** vor Konsonantenclustern (besonders с/з/ш): со мной, со временем, со вкусом',
            'Außerdem: со мной (Instr.) vs. с тобой (Instr.) vs. с ним/с ней/с ними (Н-Regel mit Präpositionen)',
          ],
        },
      ],
      bullets: [
        '**Muster с + Instrumental „Zutaten“:** Russisch nutzt с + Instrumental für Essen und Getränke: суп с грибами — Pilzsuppe | пицца с сыром — Pizza mit Käse | чай с лимоном и мёдом — Tee mit Zitrone und Honig',
      ],
    },
    {
      h2: 'Russische Präpositionen mit Instrumental — Referenz',
      content:
        'Acht zentrale russische Präpositionen verlangen den Instrumental. Die meisten drücken **räumliche Lage** aus — wo sich etwas zu etwas anderem befindet.\n\n**Zweikasus-Präpositionen:** За, под, перед, над können **Instrumental ODER Akkusativ** regieren. **Instrumental** = ruhende Lage (wo etwas **ist**): за столом, под столом. **Akkusativ** = Bewegung wohin (wohin etwas **geht**): сесть за стол, положить под стол. Merksatz: **Instrumental = ich bin schon DA. Akkusativ = ich gehe DAHIN.**',
      table: {
        caption: '8 Präpositionen mit Instrumental',
        boldColumnIndices: [0],
        headers: [
          'Präp.',
          'Bedeutung',
          'Mit Substantiv',
          'Vollbeispiel + Übersetzung',
        ],
        rows: [
          [
            'с',
            'mit / zusammen mit',
            'с другом, с молоком',
            'Я иду с другом. — Ich gehe mit einem Freund.',
          ],
          [
            'со',
            'mit (vor Cluster)',
            'со мной, со временем',
            'Иди со мной! — Komm mit mir!',
          ],
          [
            'за',
            'hinter / an (Lage)',
            'за столом, за дверью',
            'Он сидит за столом. — Er sitzt am Tisch.',
          ],
          [
            'перед',
            'vor / bevor',
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
            'unter (Lage)',
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
      h2: 'Zeitangaben im Instrumental',
      content:
        'Das Russische verwendet den Instrumental für viele Zeitadverbien — vor allem **Tageszeiten** und **Jahreszeiten**. Sie sind im Alltag sehr häufig und sollten als feste Formen gelernt werden.\n\nTechnisch sind es Instrumentalformen von Substantiven: утро → утром (Morgen → morgens), вечер → вечером, ночь → ночью (die Endung -ЬЮ!), лето → летом, зима → зимой, осень → осенью.',
      table: {
        caption: 'Zeitangaben im Instrumental',
        boldColumnIndices: [0],
        headers: ['Russische Ausdrücke', 'Beispielsatz + Übersetzung'],
        rows: [
          [
            'утром, вечером, ночью',
            'Утром я пью кофе. — Morgens trinke ich Kaffee.',
          ],
          [
            'весной, летом, осенью, зимой',
            'Летом жарко. — Im Sommer ist es heiß.',
          ],
          ['днём, ночью', 'Он работает ночью. — Er arbeitet nachts.'],
          [
            'годом раньше / позже',
            'Годом раньше он уехал. — Ein Jahr früher war er weggefahren.',
          ],
        ],
      },
      bullets: [
        '**Auswendig lernen:** утром, днём, вечером, ночью | весной, летом, осенью, зимой',
      ],
    },
    {
      h2: '15 zentrale Verben mit Instrumental-Ergänzung',
      content:
        'Eine große Gruppe russischer Verben regiert das Objekt im **Instrumental**, nicht im Akkusativ.\n\nDas sind vor allem **reflexive Verben** (auf -ся), die Engagement, Leidenschaft oder Haltung ausdrücken:',
      table: {
        caption: '15 Verben mit Instrumental',
        boldColumnIndices: [0],
        headers: ['Verb', 'Beispiel', 'Übersetzung', 'Hinweis'],
        rows: [
          [
            'заниматься',
            'Я занимаюсь русским языком.',
            'Ich lerne Russisch.',
            'Reflexives Engagement',
          ],
          [
            'интересоваться',
            'Она интересуется историей.',
            'Sie interessiert sich für Geschichte.',
            'Interessenobjekt',
          ],
          [
            'гордиться',
            'Мы гордимся тобой.',
            'Wir sind stolz auf dich.',
            'Stolzobjekt',
          ],
          [
            'восхищаться',
            'Он восхищается закатом.',
            'Er bewundert den Sonnenuntergang.',
            'Bewunderungsobjekt',
          ],
          [
            'увлекаться',
            'Он увлекается музыкой.',
            'Er ist von Musik begeistert.',
            'Hobby / Leidenschaft',
          ],
          [
            'пользоваться',
            'Я пользуюсь словарём.',
            'Ich benutze ein Wörterbuch.',
            'Benutztes Werkzeug',
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
            'Fahrzeug steuern',
          ],
          [
            'являться',
            'Москва является столицей.',
            'Moskau ist die Hauptstadt.',
            'Formell = sein',
          ],
          [
            'служить',
            'Это служит примером.',
            'Das dient als Beispiel.',
            'Rolle / Funktion',
          ],
          [
            'стать',
            'Она стала врачом.',
            'Sie wurde Ärztin.',
            'Zustandswechsel → Beruf',
          ],
          [
            'быть',
            'Он был студентом.',
            'Er war Student.',
            '„Sein“ in Vergangenheit/Zukunft',
          ],
          [
            'называть',
            'Все называют его гением.',
            'Alle nennen ihn ein Genie.',
            'Benennen / Bezeichnen',
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
            'Körperteil in der Handlung',
          ],
        ],
      },
    },
    {
      h2: '30 echte Beispiele zum Instrumental',
      content:
        'Nachfolgend **30 authentische Sätze** zu allen wichtigen Verwendungen des Instrumentals. **1–5:** Werkzeug / Mittel | **6–10:** Berufe | **11–14:** С + Begleitung | **15–20:** räumliche Präpositionen | **21–23:** Zeit | **24–30:** Verben mit Instrumental.',
      table: {
        caption: '30 Beispiele nach Verwendung gruppiert',
        boldColumnIndices: [1],
        headers: ['#', 'Russischer Satz', 'Transliteration', 'Übersetzung & Hinweise'],
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
          [
            '6',
            'Он работает врачом.',
            'On rabotayet vrachom.',
            'Er arbeitet als Arzt.',
          ],
          [
            '7',
            'Она стала учительницей.',
            'Ona stala uchitelnitsyey.',
            'Sie wurde Lehrerin.',
          ],
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
            'Ich will Kosmonaut werden.',
          ],
          [
            '11',
            'Я иду с другом.',
            'Ya idu s drugom.',
            'Ich gehe mit einem Freund.',
          ],
          [
            '12',
            'Он пришёл с женой.',
            'On prishol s zhonoy.',
            'Er kam mit seiner Frau.',
          ],
          [
            '13',
            'Выпей кофе с молоком.',
            'Vypey kofe s molokom.',
            'Trink Kaffee mit Milch.',
          ],
          [
            '14',
            'Мы живём с родителями.',
            'My zhivyom s roditelyami.',
            'Wir leben bei unseren Eltern.',
          ],
          [
            '15',
            'Книга лежит под лампой.',
            'Kniga lezhit pod lampoy.',
            'Das Buch liegt unter der Lampe. (под + Instr.)',
          ],
          [
            '16',
            'Они сидят за столом.',
            'Oni sidyat za stolom.',
            'Sie sitzen am Tisch.',
          ],
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
            'Wir haben uns untereinander geeinigt.',
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
          [
            '23',
            'Ночью город красив.',
            'Nochyu gorod krasiv.',
            'Nachts ist die Stadt schön.',
          ],
          [
            '24',
            'Я занимаюсь спортом.',
            'Ya zanimayus sportom.',
            'Ich treibe Sport.',
          ],
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
            'Er ist von Musik begeistert.',
          ],
          [
            '28',
            'Пахнет свежей травой.',
            'Pakhnet svezhey travoy.',
            'Es duftet nach frischem Gras.',
          ],
          [
            '29',
            'Она машет рукой на прощание.',
            'Ona mashet rukoy na proshchaniye.',
            'Sie winkt zum Abschied.',
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
      h2: 'Top 5 Fehler im Instrumental (und wie man sie vermeidet)',
      bullets: [
        '**Nominativ für den Beruf nach был/стала** — Она была учитель ✗ → Она была учителем ✓ (sein in der Vergangenheit verlangt Instrumental)',
        '**-ЬЮ bei Fem. auf -ь vergessen** — ночь → ночью ✓ (die Endung -ЬЮ ist einzigartig)',
        '**Falscher räumlicher Kasus** — Он за стол ✗ → Он за столом ✓ (ruhende Lage → Instrumental)',
        '**Adjektivkongruenz vergessen** — горжусь умный сын ✗ → горжусь умным сыном ✓ (Substantiv und Adj. im Instrumental)',
        '**Akkusativ mit заниматься** — Я занимаюсь музыку ✗ → Я занимаюсь музыкой ✓ (заниматься regiert immer Instrumental)',
      ],
    },
  ],
  conclusion:
    'Der russische Instrumental ist weniger furchteinflößend, als sein Ruf. Seine Endungen sind regelmäßig, seine Verwendungen logisch.\n\nSobald Sie die Kernmuster kennen — Werkzeug, Begleitung, Berufe, räumliche Präpositionen und Zeitangaben — werden Sie ihn überall natürlich im Russischen wiedererkennen.',
  conclusionBullets: [
    '**Substantive:** mask./neutr. -ОМ/-ЕМ | fem. -ОЙ/-ЕЙ | fem. -ь → -ЬЮ | Pl. -АМИ/-ЯМИ',
    '**С + Instrumental** = „mit jemandem / etwas“',
    '**Berufe / Rollen** nach работать, стать, sein (Vergangenheit/Zukunft) → immer Instrumental',
    '**Zeit:** утром, вечером, ночью, летом, зимой, осенью',
    '**Lage-Präpositionen:** за/перед/над/под/между + Instrumental (ruhend)',
    '**Verben:** заниматься, гордиться, интересоваться, восхищаться + Instrumental',
  ],
  conclusionOutro: 'Weiter mit der übrigen russischen Grammatikserie:',
  ctaText: 'Russischen Instrumental mit unserer App üben',
  ctaHref: '/',
  faq: [
    {
      question: 'Wofür wird der russische Instrumental gebraucht?',
      answer:
        'Der russische Instrumental dient für: **Werkzeug oder Mittel** der Handlung (писать ручкой), **Begleitung** mit с (с другом), **Beruf oder Rolle** nach быть/стать/работать (работать врачом), **Zeitangaben** (утром, летом, ночью), **räumliche Lagen** mit за/перед/над/под/между, und mit reflexiven Verben wie заниматься, гордиться, интересоваться.',
    },
    {
      question: 'Wie drückt man Berufe auf Russisch aus?',
      answer:
        'Verwenden Sie den **Instrumental** des Berufsnomens nach dem passenden Verb: работать + Instrumental (работает врачом), стать + Instrumental (стала учителем), sein in Vergangenheit/Zukunft + Instrumental (был инженером). Im Präsens mit weggelassenem sein ist auch der Nominativ möglich: Он — врач.',
    },
    {
      question: 'Wie verwendet man с + Instrumental auf Russisch?',
      answer:
        '**С + Instrumental** drückt Begleitung aus — etwas mit jemandem tun oder beschreiben, was zu etwas dazugehört. Beispiele: Я иду с другом, Кофе с молоком, Мы живём с родителями. Vor Konsonantenclustern wird с zu со: со мной, со временем.',
    },
    {
      question:
        'Was ist der Unterschied zwischen Instrumental und Akkusativ bei Lage-Präpositionen?',
      answer:
        'Präpositionen wie за, под, перед, над können **Instrumental** oder **Akkusativ** regieren. **Instrumental** = ruhende Lage (wo etwas **ist**): книга под столом. **Akkusativ** = Bewegung wohin: положи книгу под стол. Instrumental = ich bin schon da. Akkusativ = ich gehe dorthin.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Russischer Instrumental: wann man ihn braucht — und warum er einfacher ist als gedacht',
    description:
      'Vollständiger Leitfaden zum russischen Instrumental: Substantivendungen, Berufe, с + Instrumental, Präpositionen, Zeitangaben, 15 Verben, 30 Beispiele.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-instrumental-case',
    },
    keywords:
      'russischer Instrumental, Instrumental Endungen Russisch, с + Instrumental Russisch, Instrumental Präpositionen Russisch',
  },
};
