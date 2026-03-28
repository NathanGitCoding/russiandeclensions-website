import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-accusative-case` (EN-Quelle: `learnArticles.ts`). Kyrillisch zeichengenau wie in der französischen Datei. */
export const russianAccusativeCaseDe: LearnArticle = {
  slug: 'russian-accusative-case',
  title:
    'Russischer Akkusativ: direkte Objekte, belebt vs. unbelebt und Bewegungsverben',
  metaTitle:
    'Russischer Akkusativ: Regeln, Endungen und 30 Beispiele | Russian Cases with Anna',
  metaDescription:
    'Kompletter Leitfaden zum russischen Akkusativ: Endungstabelle, belebt/unbelebt, Bewegungsverben, в/на Richtung vs. Ort, 9 Präpositionen, 15 transitive Verben, 30 echte Beispiele.',
  keywords: [
    'russischer Akkusativ',
    'Akkusativ Endungen Russisch',
    'belebt unbelebt Akkusativ Russisch',
    'direktes Objekt Russisch',
    'Bewegungsverben Akkusativ Russisch',
    'в на Akkusativ Russisch',
  ],
  h1: 'Russischer Akkusativ: direkte Objekte, belebt vs. unbelebt und Bewegungsverben',
  heroImage: {
    src: '/articles/free-russian-lesson-accusative-case.webp',
    alt: 'Kostenlose Russischlektion zum Akkusativ: direkte Objekte und Bewegungsverben',
    width: 1200,
    height: 630,
  },
  intro:
    'Der russische Akkusativ ist der **zweitwichtigste Kasus** nach dem Genitiv — und in vieler Hinsicht der intuitivste. Er kennzeichnet das **direkte Objekt** des Satzes: die Person oder Sache, die von der Handlung des Verbs unmittelbar betroffen ist.\n\nDer Akkusativ hat aber eine Besonderheit, die Lernende überrascht: die **Unterscheidung belebt / unbelebt**. Bei maskulinen Substantiven werden Belebtes und Unbelebtes im Akkusativ unterschiedlich dekliniert — diese Regel zu verstehen ist unverzichtbar für korrektes Russisch.',
  whatYouLearn: [
    'Was der russische Akkusativ ist und seine **4 zentralen Verwendungen**',
    'Akkusativ-Endungen für **alle Genera** (Singular und Plural)',
    'Die **Unterscheidung belebt / unbelebt** — die Hauptquelle für Verwirrung',
    'Russische **Bewegungsverben** und der Akkusativ',
    '**В und НА** mit Akkusativ (Richtung) vs. Präpositional (Ort)',
    'Die **9 Präpositionen**, die den Akkusativ verlangen',
    '**Zeitausdrücke** mit dem Akkusativ',
    '**15 unverzichtbare Verben** mit Akkusativobjekt',
    '**30 echte** russische Beispiele mit Transliteration und Übersetzung',
    'Akkusativ vs. Genitiv — wie man sie unterscheidet',
  ],
  leadMagnetCta: {
    title: 'Üben Sie den russischen Akkusativ mit intelligenten Aufgaben',
    description:
      'Unsere Mobile-App deckt alle 6 russischen Fälle ab — mit Schwerpunkt auf belebt/unbelebt, Bewegungsverben und в/на (Richtung vs. Ort). Für Android und iOS.',
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
      label: 'Russische Kasusendungen: der ultimative Spickzettel',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Russischer Dativ: wie man „zu“ und „für“ auf Russisch sagt',
    },
  ],
  sections: [
    {
      h2: 'Kurzantwort',
      content:
        'Der russische Akkusativ beantwortet die Fragen **Кого? (wen?)** und **Что? (was?)**. Er kennzeichnet direkte Objekte, drückt mit в und на die **Richtung** aus und erscheint in Zeitausdrücken.\n\nDie größte Schwierigkeit ist die **Unterscheidung belebt / unbelebt** bei maskulinen Substantiven.',
    },
    {
      h2: 'Was ist der russische Akkusativ?',
      content:
        'Der Akkusativ (**Винительный падеж**) ist der vierte der sechs russischen Fälle. Seine Hauptaufgabe ist es, das **direkte Objekt** eines transitiven Verbs zu kennzeichnen — das Substantiv, auf das die Handlung unmittelbar zielt.\n\nIm Englischen ändert sich das Wort je nach Rolle nicht. Im Russischen ändert sich die Endung des Substantivs, um zu zeigen, dass es das direkte Objekt ist.',
      subsections: [
        {
          h3: 'Der Akkusativ wird verwendet für:',
          content: '',
          bullets: [
            '**Direkte Objekte** transitiver Verben (Я вижу кота. — Ich sehe die Katze.)',
            'Die **Richtung** mit в und на (Я иду в школу. — Ich gehe zur Schule.)',
            '**Zeitausdrücke** (всю неделю — die ganze Woche; через час — in einer Stunde)',
            '**Wochentage** mit в (в понедельник — am Montag)',
            'Nach bestimmten Präpositionen: **за**, **через**, **про**, **под**, **сквозь**, **спустя**, **о**',
          ],
        },
      ],
    },
    {
      h2: 'Endungen des russischen Akkusativs — vollständige Tabelle',
      content:
        'Die Akkusativ-Endungen hängen vom **Genus** des Substantivs, von der **Stammart** (hart oder weich) und — bei Maskulinum — davon ab, ob das Wort **belebt** oder **unbelebt** ist.\n\nHier ist die vollständige Referenztabelle:',
      table: {
        caption:
          'Akkusativ-Endungen nach Substantivtyp — Singular und Plural',
        boldColumnIndices: [3],
        headers: [
          'Substantivtyp',
          'Regel',
          'Nominativ',
          'Akkusativ',
          'Beispielsatz',
        ],
        rows: [
          [
            'Mask. unbelebt (hart)',
            '= Nom. (unverändert)',
            'стол',
            'стол',
            'Я вижу стол. — Ich sehe den Tisch.',
          ],
          [
            'Mask. unbelebt (weich)',
            '= Nom. (unverändert)',
            'музей',
            'музей',
            'Я вижу музей. — Ich sehe das Museum.',
          ],
          [
            'Mask. belebt (hart)',
            '= Gen. (-а)',
            'студент',
            'студента',
            'Я вижу студента. — Ich sehe den Studenten.',
          ],
          [
            'Mask. belebt (weich)',
            '= Gen. (-я)',
            'гений',
            'гения',
            'Я вижу гения. — Ich sehe das Genie.',
          ],
          [
            'Fem. hart (-а)',
            '-у',
            'женщина',
            'женщину',
            'Я вижу женщину. — Ich sehe die Frau.',
          ],
          [
            'Fem. weich (-я)',
            '-ю',
            'земля',
            'землю',
            'Я вижу землю. — Ich sehe die Erde.',
          ],
          [
            'Fem. (-ь) unbelebt',
            '= Nom. (-ь)',
            'ночь',
            'ночь',
            'Я люблю ночь. — Ich liebe die Nacht.',
          ],
          [
            'Fem. (-ь) belebt',
            '= Nom. (-ь)',
            'мышь',
            'мышь',
            'Я вижу мышь. — Ich sehe die Maus.',
          ],
          [
            'Neutrum (hart -о)',
            '= Nom. (-о)',
            'окно',
            'окно',
            'Я вижу окно. — Ich sehe das Fenster.',
          ],
          [
            'Neutrum (weich -е)',
            '= Nom. (-е)',
            'море',
            'море',
            'Я вижу море. — Ich sehe das Meer.',
          ],
          [
            'Plural unbelebt',
            '= Nom. Pl.',
            'столы',
            'столы',
            'Я вижу столы. — Ich sehe die Tische.',
          ],
          [
            'Plural belebt',
            '= Gen. Pl.',
            'студенты',
            'студентов',
            'Я вижу студентов. — Ich sehe die Studenten.',
          ],
        ],
      },
      bullets: [
        '**Femininum -а** — -а → -у : книга → книгу',
        '**Femininum -я** — -я → -ю : неделя → неделю',
        '**Maskulinum unbelebt** — keine Änderung (Nominativ): стол → стол',
        '**Maskulinum belebt** — Genitivform: студент → студента',
        '**Neutrum** und **Femininum -ь** — unverändert (= Nominativ)',
      ],
    },
    {
      h2: 'Belebt vs. unbelebt: die wichtigste Akkusativregel',
      content:
        '**Belebte maskuline Substantive** (Personen und Tiere) nehmen im Akkusativ die **Genitivform**. **Unbelebte maskuline Substantive** bleiben unverändert (Nominativform).\n\nDas ist das markante Merkmal des russischen Akkusativs — und die häufigste Fehlerquelle.',
      subsections: [
        {
          h3: 'Was zählt als „belebt“?',
          content:
            'In der russischen Grammatik bedeutet **belebt** Personen und Tiere — lebende Wesen.\n\nEs gibt jedoch **überraschende Ausnahmen**:',
        },
      ],
      table: {
        caption:
          '12 konkrete Beispiele, darunter überraschende Fälle belebt/unbelebt',
        boldColumnIndices: [2],
        headers: [
          'Substantiv',
          'Belebt / unbelebt',
          'Form im Akkusativ',
          'Hinweis',
        ],
        rows: [
          [
            '🤝 друг (Freund)',
            'belebt',
            'Я вижу друга.',
            'Akkusativ = Genitivform (друга)',
          ],
          [
            '👨‍⚕️ врач (Arzt)',
            'belebt',
            'Я слушаю врача.',
            'Akkusativ = Genitivform (врача)',
          ],
          [
            '🐱 кот (Katze)',
            'belebt',
            'Я глажу кота.',
            'Tiere gelten als belebt (кота)',
          ],
          [
            '👶 ребёнок (Kind)',
            'belebt',
            'Мама видит ребёнка.',
            'Akkusativ = Genitiv (ребёнка)',
          ],
          [
            '🏛️ президент (Präsident)',
            'belebt',
            'Я уважаю президента.',
            'Personen sind immer belebt',
          ],
          [
            '🪑 стол (Tisch)',
            'unbelebt',
            'Я вижу стол.',
            'Akkusativ = Nominativ (unverändert)',
          ],
          [
            '🎬 фильм (Film)',
            'unbelebt',
            'Я смотрю фильм.',
            'Akkusativ = Nominativ (unverändert)',
          ],
          [
            '🏙️ город (Stadt)',
            'unbelebt',
            'Я люблю этот город.',
            'Orte sind unbelebt',
          ],
          [
            '💀 труп (Leiche)',
            'unbelebt',
            'Детектив нашёл труп.',
            'Leichen gelten grammatisch als unbelebt!',
          ],
          [
            '🪆 кукла (Puppe)',
            'unbelebt',
            'Девочка любит куклу.',
            'Spielzeug ist unbelebt (куклу — Fem.)',
          ],
          [
            '🃏 туз (Ass beim Kartenspiel)',
            'belebt*',
            'Он поставил туза.',
            'Spielkarten gelten konventionell als belebt!',
          ],
          [
            '♕ ферзь (Dame beim Schach)',
            'belebt*',
            'Он взял ферзя.',
            'Schachfiguren gelten konventionell als belebt!',
          ],
        ],
      },
      bullets: [
        '**Belebt (unerwartet):** Spielkarten (туз, король, дама), Schachfiguren (ферзь, конь)',
        '**Unbelebt (unerwartet):** труп (Leiche), кукла (Puppe), снеговик (Schneemann)',
        '**Plural unbelebt** — Nominativplural: Я вижу столы',
        '**Plural belebt** — Genitivplural: Я вижу студентов',
      ],
    },
    {
      h2: 'Russische Bewegungsverben und Akkusativ',
      content:
        'Bewegungsverben verwenden **в oder на + Akkusativ**, um die Richtung anzugeben. Das Russische hat ein reiches System von Bewegungsverben.\n\nAlle verwenden в/на + Akkusativ für die Richtung:',
      table: {
        caption:
          '10 zentrale Bewegungsverben + ungerichtet vs. gerichtet',
        boldColumnIndices: [2],
        headers: [
          'Verb',
          'Bedeutung',
          'Beispiel mit В/НА + Akk.',
          'Übersetzung',
        ],
        rows: [
          [
            'идти / ходить',
            '🚶 gehen (zu Fuß)',
            'Я иду в школу.',
            'Ich gehe zur Schule (gerade jetzt)',
          ],
          [
            'ехать / ездить',
            '🚗 fahren (mit Fahrzeug)',
            'Мы едем на работу.',
            'Wir fahren zur Arbeit',
          ],
          [
            'бежать / бегать',
            '🏃 laufen',
            'Он бежит на стадион.',
            'Er läuft zum Stadion',
          ],
          [
            'лететь / летать',
            '✈️ fliegen',
            'Самолёт летит в Москву.',
            'Das Flugzeug fliegt nach Moskau',
          ],
          [
            'плыть / плавать',
            '🏊 schwimmen / fahren (auf dem Wasser)',
            'Корабль плывёт в порт.',
            'Das Schiff fährt in den Hafen',
          ],
          [
            'везти / возить',
            '🚐 transportieren (mit Fahrzeug)',
            'Он везёт детей в школу.',
            'Er bringt die Kinder zur Schule',
          ],
          [
            'нести / носить',
            '📦 tragen (zu Fuß)',
            'Она несёт цветы на стол.',
            'Sie trägt Blumen auf den Tisch',
          ],
          [
            'ползти / ползать',
            '🐛 kriechen',
            'Ребёнок ползёт на диван.',
            'Das Kind krabbelt zur Couch',
          ],
          [
            'прийти (perf.)',
            '🎯 ankommen / kommen',
            'Приходи на вечеринку!',
            'Komm zur Party!',
          ],
          [
            'вернуться (perf.)',
            '↩️ zurückkehren',
            'Он вернулся в город.',
            'Er ist in die Stadt zurückgekehrt',
          ],
        ],
      },
      bullets: [
        '**Gerichtet** (eine Strecke, jetzt): идти, ехать, лететь — Я иду в школу.',
        '**Ungerichtet** (gewohnheitsmäßig, Hin und Her): ходить, ездить, летать — Я хожу в школу каждый день.',
        'Beide verwenden **в + Akkusativ** für die Richtung — die Kasusregel ist dieselbe.',
      ],
    },
    {
      h2: 'В und НА mit Akkusativ: Richtung vs. Ort',
      content:
        'Die Präpositionen **в** und **на** stehen jeweils mit **zwei verschiedenen Fällen**, je nachdem ob der Satz **Richtung** (Bewegung nach) oder **Ort** (sich irgendwo befinden) ausdrückt.\n\nDiese Paare sollten Sie gut lernen:',
      image: {
        src: '/articles/russian-accusative-case-direction-vs-location.webp',
        alt: 'Schema russischer Akkusativ: Richtung vs. Ort mit в und на',
        width: 1200,
        height: 630,
      },
      table: {
        caption:
          '10 Paare nebeneinander: Akkusativ (Richtung) vs. Präpositional (Ort)',
        boldColumnIndices: [0, 1],
        headers: [
          'Konstruktion',
          'Russisches Beispiel',
          'Bedeutung',
          'Übersetzung',
        ],
        rows: [
          [
            'в + Akkusativ',
            'Я иду в магазин.',
            'Richtung: in / nach',
            'Ich gehe in den Laden.',
          ],
          [
            'в + Präpositional',
            'Я нахожусь в магазине.',
            'Ort: in / bei',
            'Ich bin im Laden.',
          ],
          [
            'на + Akkusativ',
            'Она едет на работу.',
            'Richtung: auf / nach',
            'Sie fährt zur Arbeit.',
          ],
          [
            'на + Präpositional',
            'Она работает на заводе.',
            'Ort: auf / in',
            'Sie arbeitet in der Fabrik.',
          ],
          [
            'в + Akkusativ',
            'Дети пошли в школу.',
            'Richtung: zur Schule',
            'Die Kinder sind zur Schule gegangen.',
          ],
          [
            'в + Präpositional',
            'Дети учатся в школе.',
            'Ort: in der Schule',
            'Die Kinder lernen in der Schule.',
          ],
          [
            'на + Akkusativ',
            'Мы летим на Кубу.',
            'Richtung: nach Kuba',
            'Wir fliegen nach Kuba.',
          ],
          [
            'на + Präpositional',
            'Мы отдыхаем на Кубе.',
            'Ort: in Kuba',
            'Wir machen Urlaub in Kuba.',
          ],
          [
            'на + Akkusativ',
            'Поставь книгу на стол.',
            'Richtung: auf den Tisch',
            'Leg das Buch auf den Tisch.',
          ],
          [
            'на + Präpositional',
            'Книга лежит на столе.',
            'Ort: auf dem Tisch',
            'Das Buch liegt auf dem Tisch.',
          ],
        ],
      },
      subsections: [
        {
          h3: 'В vs. НА — welches für den Ort?',
          content:
            '**В (in)** verwenden Sie für: geschlossene Räume, Länder, Städte, Gebäude — в доме, в России, в школе. **НА (auf / in)** für: offene Flächen, Veranstaltungen, Inseln, bestimmte Institutionen — на улице, на концерте, на Кубе, на работе, на почте, на рынке.\n\nManche Namen verlangen konventionell на — merken Sie sie sich.',
        },
      ],
    },
    {
      h2: 'Alle Präpositionen, die den Akkusativ verlangen',
      content:
        'Neben в und на verlangen andere Präpositionen den Akkusativ.\n\nHier ist die **vollständige Liste** mit nominalisiertem Beispiel und Vollsatz:',
      table: {
        caption: '9 Präpositionen mit Akkusativ: Bedeutung und vollständiges Beispiel',
        boldColumnIndices: [0],
        headers: [
          'Präp.',
          'Bedeutung',
          'Mit Substantiv',
          'Vollsatz + Übersetzung',
        ],
        rows: [
          [
            'в',
            'in / nach (Richtung)',
            'в Москву, в школу',
            'Я лечу в Москву. — Ich fliege nach Moskau.',
          ],
          [
            'на',
            'auf / nach (Richtung)',
            'на работу, на стол',
            'Она идёт на работу. — Sie geht zur Arbeit.',
          ],
          [
            'за',
            'hinter / für (Bewegung)',
            'за угол, за хлебом',
            'Он зашёл за угол. — Er bog um die Ecke.',
          ],
          [
            'под',
            'unter (Bewegung)',
            'под стол',
            'Кот залез под стол. — Die Katze ist unter den Tisch gekrochen.',
          ],
          [
            'через',
            'durch / hinüber / in (Zeit)',
            'через реку, через час',
            'Мы переехали через реку. — Wir sind über den Fluss gefahren.',
          ],
          [
            'про',
            'über (umgangssprachlich)',
            'про тебя',
            'Он рассказал про тебя. — Er hat von dir erzählt.',
          ],
          [
            'сквозь',
            'durch (hindurchdringen)',
            'сквозь стекло',
            'Свет проходил сквозь стекло. — Das Licht drang durch das Glas.',
          ],
          [
            'спустя',
            'nach / später (Zeit)',
            'спустя год',
            'Спустя год он вернулся. — Ein Jahr später kam er zurück.',
          ],
          [
            'о/об',
            'gegen (körperlicher Kontakt)',
            'споткнуться о камень',
            'Он споткнулся о камень. — Er ist über einen Stein gestolpert.',
          ],
        ],
      },
      bullets: [
        '**Präpositionen mit zwei Rektionen:** В, НА, ЗА, ПОД — Akkusativ = Bewegung / Richtung; Instrumental oder Präpositional = ruhende Lage.',
        'за стол (Akk. → sich AN den Tisch setzen) vs. за столом (Instr. → am Tisch sitzen)',
      ],
    },
    {
      h2: 'Zeitausdrücke mit dem Akkusativ',
      content:
        'Der Akkusativ erscheint in mehreren wichtigen **Zeitausdrücken** im Russischen.\n\nDas sind feste Muster zum Auswendiglernen:',
      table: {
        caption: 'через, за, весь/всю, в + Wochentag, спустя',
        boldColumnIndices: [0],
        headers: [
          'Ausdruckstyp',
          'Beispiele',
          'Vollsatz + Übersetzung',
        ],
        rows: [
          [
            'Dauer (весь / целый)',
            'всю неделю, целый день',
            'Я работал всю неделю. — Ich habe die ganze Woche gearbeitet.',
          ],
          [
            'Wochentage (в + Akk.)',
            'в понедельник, в пятницу',
            'Я иду туда в среду. — Ich gehe mittwochs dorthin.',
          ],
          [
            'через (in / nach)',
            'через час, через неделю',
            'Приходи через час. — Komm in einer Stunde.',
          ],
          [
            'за (innerhalb von / in)',
            'за час, за неделю',
            'Я сделал это за час. — Ich habe es in einer Stunde geschafft.',
          ],
          [
            'спустя (nach / später)',
            'спустя год',
            'Спустя год он вернулся. — Ein Jahr später kam er zurück.',
          ],
        ],
      },
      bullets: [
        '**Wochentage:** В понедельник, в среду, в пятницу — alle mit **в** nehmen den Akkusativ.',
      ],
    },
    {
      h2: '15 zentrale Verben mit direktem Akkusativobjekt',
      content:
        'Jedes transitive Verb im Russischen kann ein Akkusativobjekt haben.\n\nHier sind die **15 häufigsten**, mit der wichtigen Ausnahme **ждать** (Akkusativ oder Genitiv):',
      table: {
        caption: '15 transitive Verben mit Beispielen',
        boldColumnIndices: [0],
        headers: ['Verb', 'Beispiel', 'Übersetzung', 'Hinweis'],
        rows: [
          [
            'видеть (sehen)',
            'Я вижу тебя.',
            'Ich sehe dich.',
            'Direkte visuelle Wahrnehmung',
          ],
          [
            'любить (lieben)',
            'Я люблю музыку.',
            'Ich liebe die Musik.',
            'Objekt der Zuneigung',
          ],
          [
            'знать (wissen / kennen)',
            'Я знаю этот город.',
            'Ich kenne diese Stadt.',
            'Bekannte Sache oder Person',
          ],
          [
            'читать (lesen)',
            'Она читает книгу.',
            'Sie liest ein Buch.',
            'gelesenes Objekt',
          ],
          [
            'слушать (hören)',
            'Мы слушаем музыку.',
            'Wir hören Musik.',
            'Objekt des Hörens',
          ],
          [
            'смотреть (ansehen)',
            'Он смотрит фильм.',
            'Er sieht einen Film.',
            'Objekt des Blicks',
          ],
          [
            'купить (kaufen)',
            'Я купил машину.',
            'Ich habe ein Auto gekauft.',
            'gekauftes Objekt',
          ],
          [
            'взять (nehmen)',
            'Возьми зонтик.',
            'Nimm einen Regenschirm.',
            'genommenes Objekt',
          ],
          [
            'понимать (verstehen)',
            'Я понимаю тебя.',
            'Ich verstehe dich.',
            'verstandene Person oder Sache',
          ],
          [
            'помнить (sich erinnern)',
            'Я помню этот день.',
            'Ich erinnere mich an diesen Tag.',
            'woran man sich erinnert',
          ],
          [
            'встречать (treffen)',
            'Я встречаю друга.',
            'Ich treffe einen Freund.',
            'getroffene Person (belebt)',
          ],
          [
            'ждать (warten)',
            'Я жду автобус / автобуса.',
            'Ich warte auf den Bus.',
            'Akkusativ und Genitiv möglich!',
          ],
          [
            'спрашивать (fragen)',
            'Он спрашивает меня.',
            'Er fragt mich.',
            'befragte Person',
          ],
          [
            'благодарить (danken)',
            'Я благодарю вас.',
            'Ich danke Ihnen.',
            'bedankte Person',
          ],
          [
            'изучать (studieren)',
            'Она изучает русский язык.',
            'Sie studiert Russisch.',
            'studiertes Fach',
          ],
        ],
      },
      bullets: [
        '**Ausnahme ЖДАТЬ:** Я жду автобус (Akk.) = ich warte auf genau diesen Bus. Я жду автобуса (Gen.) = ich warte auf einen Bus. Beides ist korrekt. Für Belebtes: Я жду друга (Akk. bevorzugt).',
      ],
    },
    {
      h2: '30 echte Beispiele zum russischen Akkusativ',
      content:
        'Unten **30 authentische Sätze** zu den wichtigsten Akkusativverwendungen. **1–6:** unbelebte Objekte | **7–12:** belebte Objekte | **13–18:** Richtung | **19–23:** Zeit | **24–30:** andere Präpositionen.',
      table: {
        caption: '30 Beispielsätze mit Transliteration',
        boldColumnIndices: [1],
        headers: ['#', 'Russisch', 'Transliteration', 'Übersetzung und Hinweise'],
        rows: [
          [
            '1',
            'Он читает интересную книгу.',
            'On chitayet interesnuyu knigu.',
            'Er liest ein interessantes Buch. (книга → книгу)',
          ],
          [
            '2',
            'Я купила новое платье.',
            'Ya kupila novoye plate.',
            'Ich habe ein neues Kleid gekauft. (платье Neutrum → unverändert)',
          ],
          [
            '3',
            'Мы смотрим старый фильм.',
            'My smotrim staryy film.',
            'Wir sehen einen alten Film. (Mask. unbelebt)',
          ],
          [
            '4',
            'Она пьёт горячий кофе.',
            'Ona pyot goryachiy kofe.',
            'Sie trinkt heißen Kaffee. (кофе unveränderlich)',
          ],
          [
            '5',
            'Я слышу странный звук.',
            'Ya slyshu strannyy zvuk.',
            'Ich höre ein seltsames Geräusch. (Mask. unbelebt)',
          ],
          [
            '6',
            'Дети любят мороженое.',
            'Deti lyubyat morozhenoye.',
            'Die Kinder lieben Eis. (Neutrum)',
          ],
          [
            '7',
            'Я вижу своего брата.',
            'Ya vizhu svoyego brata.',
            'Ich sehe meinen Bruder. (брат belebt → брата)',
          ],
          [
            '8',
            'Она любит своего кота.',
            'Ona lyubit svoyego kota.',
            'Sie liebt ihre Katze. (кот belebt)',
          ],
          [
            '9',
            'Врач осматривает пациента.',
            'Vrach osmotrivayet patsienta.',
            'Der Arzt untersucht den Patienten.',
          ],
          [
            '10',
            'Мы приглашаем всех друзей.',
            'My priglashaem vsekh druzey.',
            'Wir laden alle Freunde ein. (Pl. belebt)',
          ],
          [
            '11',
            'Я встретил старого учителя.',
            'Ya vstretil starogo uchitelya.',
            'Ich habe meinen alten Lehrer getroffen.',
          ],
          [
            '12',
            'Полиция ищет преступника.',
            'Politsiya ishchet prestupnika.',
            'Die Polizei sucht den Verbrecher.',
          ],
          [
            '13',
            'Я иду в супермаркет.',
            'Ya idu v supermarket.',
            'Ich gehe in den Supermarkt. (в + Akk.)',
          ],
          [
            '14',
            'Дети едут на море.',
            'Deti edut na more.',
            'Die Kinder fahren ans Meer. (на + Akk.)',
          ],
          [
            '15',
            'Он положил ключи на стол.',
            'On polozhil klyuchi na stol.',
            'Er legte die Schlüssel auf den Tisch.',
          ],
          [
            '16',
            'Мы летим в Санкт-Петербург.',
            'My letim v Sankt-Peterburg.',
            'Wir fliegen nach Sankt Petersburg.',
          ],
          [
            '17',
            'Она поехала на конференцию.',
            'Ona poyekhala na konferentsiyu.',
            'Sie ist zur Konferenz gefahren.',
          ],
          [
            '18',
            'Кот прыгнул под кровать.',
            'Kot prygnul pod krovat.',
            'Die Katze sprang unter das Bett. (под + Akk.)',
          ],
          [
            '19',
            'Я работал всю ночь.',
            'Ya rabotal vsyu noch.',
            'Ich habe die ganze Nacht gearbeitet. (всю = Akk.)',
          ],
          [
            '20',
            'Встреча в четверг в три часа.',
            'Vstrecha v chetverg v tri chasa.',
            'Treffen am Donnerstag um drei Uhr.',
          ],
          [
            '21',
            'Он вернётся через месяц.',
            'On vernyotsya cherez mesyats.',
            'Er kommt in einem Monat zurück. (через + Akk.)',
          ],
          [
            '22',
            'Я сделал домашнее задание за час.',
            'Ya sdelal domashneye zadaniye za chas.',
            'Ich habe die Hausaufgaben in einer Stunde gemacht.',
          ],
          [
            '23',
            'Они не виделись целый год.',
            'Oni ne videlis tselyy god.',
            'Sie hatten sich ein ganzes Jahr lang nicht gesehen.',
          ],
          [
            '24',
            'Он рассказал про свою жизнь.',
            'On rasskazal pro svoyu zhizn.',
            'Er erzählte von seinem Leben. (про + Akk.)',
          ],
          [
            '25',
            'Мы переплыли через реку.',
            'My pereplyli cherez reku.',
            'Wir sind den Fluss durchschwommen.',
          ],
          [
            '26',
            'Он споткнулся о порог.',
            'On spotknulsya o porog.',
            'Er ist über die Schwelle gestolpert. (о + Akk.)',
          ],
          [
            '27',
            'Спустя два часа он позвонил.',
            'Spustya dva chasa on pozvonil.',
            'Zwei Stunden später rief er an.',
          ],
          [
            '28',
            'Перенеси встречу на пятницу.',
            'Perenesi vstrechu na pyatnitsu.',
            'Verschiebe das Treffen auf Freitag.',
          ],
          [
            '29',
            'Я учу русский язык каждый день.',
            'Ya uchu russkiy yazyk kazhdyy den.',
            'Ich lerne jeden Tag Russisch.',
          ],
          [
            '30',
            'Она смотрит на меня.',
            'Ona smotrit na menya.',
            'Sie sieht mich an. (смотреть на + Akk.)',
          ],
        ],
      },
    },
    {
      h2: 'Akkusativ vs. Genitiv: wie man sie unterscheidet',
      content:
        'Weil die Form des maskulinen belebten Akkusativs mit dem Genitiv übereinstimmt, verwechselt man die beiden oft.\n\nHier ein direkter Vergleich:',
      table: {
        caption: 'Vergleich Akkusativ vs. Genitiv',
        boldColumnIndices: [0, 1],
        headers: ['Kontext', 'Russisches Beispiel', 'Kasuserklärung'],
        rows: [
          [
            'Direktes Objekt (transitiv)',
            'Я вижу студента.',
            'AKKUSATIV belebt (= Genitivform, hier aber Akkusativ)',
          ],
          [
            'Abwesenheit (нет)',
            'Нет студента.',
            'GENITIV — нет verlangt immer den Genitiv',
          ],
          [
            'Direktes Objekt unbelebt',
            'Я вижу стол.',
            'AKKUSATIV unbelebt (= Nominativ)',
          ],
          [
            'Abwesenheit unbelebt',
            'Нет стола.',
            'GENITIV (стол → стола)',
          ],
          [
            'Richtung zu einem Ort',
            'Я иду в парк.',
            'AKKUSATIV (в + Richtung)',
          ],
          [
            'Dauer',
            'Я работал всю неделю.',
            'AKKUSATIV — всю неделю',
          ],
          [
            'Menge / Teil von',
            'Я выпил стакан воды.',
            'GENITIV — воды (ein Glas Wasser)',
          ],
        ],
      },
      bullets: [
        '**Leitfrage:** Ist das Verb transitiv (es wirkt auf etwas) → Akkusativ. Abwesenheit, Besitz, Menge, Genitiv-Präposition → Genitiv.',
      ],
    },
    {
      h2: 'Die 6 häufigsten Akkusativfehler (und wie man sie korrigiert)',
      bullets: [
        '**Femininum -а → -у vergessen** — Я вижу женщина ✗ → Я вижу женщину ✓',
        '**Maskulinum belebt wie unbelebt behandeln** — Я вижу студент ✗ → Я вижу студента ✓',
        '**Akkusativ für den Ort verwenden** — Я в школу сейчас ✗ → Я в школе сейчас ✓ (Ort = Präpositional)',
        '**Nominativplural für belebte Plurale** — Я вижу студенты ✗ → Я вижу студентов ✓',
        '**Adjektivkongruenz vergessen** — Я вижу красивый женщину ✗ → Я вижу красивую женщину ✓',
        '**через und за verwechseln** — через = in X Zeit (Zukunft); за = in X Zeit (um etwas zu erledigen)',
      ],
    },
  ],
  conclusion:
    'Der russische Akkusativ ist für die Alltagskommunikation unverzichtbar. Sobald Sie davon sprechen, etwas mit etwas zu tun — ein Buch lesen, eine Person sehen, irgendwohin gehen — verwenden Sie den Akkusativ.\n\n**Femininum -А/-Я** ändert sich immer (-а → -у, -я → -ю). **Maskulinum unbelebt** = unverändert. **Maskulinum belebt** = Genitivform. **В/НА + Akkusativ** = Richtung | **В/НА + Präpositional** = Ort. **Plural belebt** → Genitivplural (студентов).',
  conclusionOutro: 'Setzen Sie Ihre russische Grammatik fort:',
  ctaText: 'Russische Fälle mit unserer App üben',
  ctaHref: '/',
  faq: [
    {
      question: 'Wofür ist der Akkusativ im Russischen?',
      answer:
        'Der russische Akkusativ kennzeichnet das **direkte Objekt** transitiver Verben (Я читаю книгу), die **Richtung** mit в und на (Я иду в школу), **Zeitausdrücke** (через час, всю ночь) und steht nach Präpositionen wie за, через, про, под, сквозь.',
    },
    {
      question:
        'Wie funktioniert die Unterscheidung belebt / unbelebt im Russischen?',
      answer:
        '**Belebte maskuline Substantive** (Personen, Tiere) nehmen im Akkusativ die **Genitivform** (студент → студента). **Unbelebte Maskulina** bleiben im Nominativ (стол → стол). Überraschend: труп = unbelebt; Spielkarten und Schachfiguren = belebt.',
    },
    {
      question:
        'Was ist der Unterschied zwischen в + Akkusativ und в + Präpositional?',
      answer:
        '**в + Akkusativ** = Richtung (Я иду в школу — Ich gehe zur Schule). **в + Präpositional** = Ort (Я в школе — Ich bin in der Schule). Entsprechend на: на работу (hingehen) vs. на работе (auf der Arbeit).',
    },
    {
      question: 'Was sind Bewegungsverben im Russischen?',
      answer:
        'Bewegungsverben: идти/ходить (zu Fuß gehen), ехать/ездить (fahren), лететь/летать (fliegen), бежать/бегать (laufen), плыть/плавать (schwimmen). Jedes Paar hat gerichtete und ungerichtete Formen. Alle verwenden **в/на + Akkusativ** für die Richtung.',
    },
    {
      question: 'Ändert der Akkusativ auch die Adjektive?',
      answer:
        'Ja. Adjektive müssen mit dem Substantiv **kongruieren**. Femininum Akkusativ: **-ую/-юю** (красивую женщину). Maskulinum unbelebt: bleibt wie Nominativ. Maskulinum belebt: Genitivform (красивого студента).',
    },
    {
      question:
        'Welche russischen Verben regieren den Genitiv statt des Akkusativs?',
      answer:
        'Die meisten transitiven Verben nehmen den Akkusativ. Ausnahmen mit **Genitiv**: бояться, ждать (unbelebt), желать, избегать, достигать, лишать. Хотеть kann beides: хочу воды (Gen., partitiv) vs. хочу воду (Akk.).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Russischer Akkusativ: direkte Objekte, belebt vs. unbelebt und Bewegungsverben',
    description:
      'Kompletter Leitfaden zum russischen Akkusativ: Endungen, belebt vs. unbelebt, Bewegungsverben, в/на, 9 Präpositionen, 30 Beispiele.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-accusative-case',
    },
    keywords:
      'russischer Akkusativ, Akkusativ Endungen Russisch, belebt unbelebt Akkusativ Russisch, direktes Objekt Russisch, Bewegungsverben Akkusativ Russisch',
  },
  tableAccentVariant: 'accusative',
};
