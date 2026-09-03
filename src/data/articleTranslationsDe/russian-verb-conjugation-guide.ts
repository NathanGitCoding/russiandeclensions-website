import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung von `russian-verb-conjugation-guide` (EN-Quelle: `learnArticles.ts`). */
export const russianVerbConjugationGuideDe: LearnArticle = {
  slug: 'russian-verb-conjugation-guide',
  title: 'Russische Verbkonjugation: Der vollständige Leitfaden (Präsens, Vergangenheit & Zukunft)',
  metaTitle:
    'Russische Verbkonjugation: Präsens, Vergangenheit & Zukunft | Russian Cases with Anna',
  metaDescription:
    'Lernen Sie die russische Verbkonjugation Schritt für Schritt: die zwei Konjugationsgruppen, Präsensendungen, Konsonantenmutationen, Vergangenheit, Zukunft und 8 vollständig konjugierte unregelmäßige Verben.',
  keywords: [
    'russische Verbkonjugation',
    'russische Verben konjugieren',
    'russische Verbzeiten',
    'russische Präsenskonjugation',
    'russische Verben Vergangenheit',
    'erste und zweite Konjugation Russisch',
    'russische Verbendungen',
    'wie konjugiert man russische Verben',
  ],
  h1: 'Russische Verbkonjugation: Der vollständige Leitfaden zu Präsens, Vergangenheit und Zukunft',
  intro:
    'Russische Substantive werden dekliniert; russische Verben werden konjugiert — und die beiden Systeme spielen in völlig unterschiedlichen Schwierigkeitsklassen. Fälle bestrafen Sie mit einem Dutzend möglicher Endungen pro Wort. Die Verbkonjugation ist im Vergleich dazu fast mechanisch: **Sobald Sie wissen, zu welcher der zwei Konjugationsgruppen ein Verb gehört, sagen Ihnen sechs Endungen alles darüber, wer was tut und wann.**\n\nDer Haken ist, dass „fast mechanisch" noch ein paar Fallen versteckt: eine Handvoll Verben, die wie die eine Konjugation aussehen, sich aber wie die andere verhalten, Konsonanten, die in der „Ich"-Form still mutieren, und eine Vergangenheitsform, die Person völlig ignoriert und sich nur um Geschlecht und Zahl kümmert. Nichts davon ist schwierig, sobald es klar dargelegt ist — und anders als bei den Fällen kann der Großteil der Verbkonjugation in **einer einzigen konzentrierten Lernsitzung** verinnerlicht werden.\n\nDieser Leitfaden geht die zwei Konjugationsgruppen durch, vollständige Präsenstabellen, die Vergangenheit (und ihre Ausnahmen), die zwei Arten, eine Zukunftsform zu bilden, sowie acht unregelmäßige Verben, die Sie in fast jedem Gespräch verwenden werden.',
  introByline: {
    text: '**Verfasst von Nathan** — Muttersprachler Französisch; ich lerne Russisch und teile, was wirklich für Grammatik, Fälle und tägliches Üben funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Wie Sie die zwei Konjugationsgruppen am Infinitiv erkennen — und an der „Sie/Er"-Form (они), wenn der Infinitiv Sie in die Irre führt',
    'Die vollständigen Präsensendungen für beide Konjugationsgruppen, mit durchgearbeiteten Beispielen',
    'Die Konsonantenmutationen, die die „Ich"-Form (я) vieler Verben verändern',
    'Wie Sie die Vergangenheitsform in Sekunden bilden — und die Verben auf -ти / -чь, die das Muster brechen',
    'Den Unterschied zwischen einfacher Zukunft (perfektiv) und zusammengesetzter Zukunft (буду + Infinitiv)',
    '8 unregelmäßige Verben, die Sie täglich verwenden werden, vollständig konjugiert',
  ],
  leadMagnetCta: {
    title: 'Verbendungen sind nur die halbe Miete — kostenlose App',
    description:
      'Konjugation regelt Verben; russische Fälle regeln alles andere — Substantive, Adjektive und Pronomen. Russian Cases with Anna trainiert alle sechs Fälle mit strukturierten Lektionen und intelligenten Quiz. Kostenlos auf iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Die zwei Konjugationsgruppen: Wie man sie unterscheidet',
      content:
        'Jedes russische Verb gehört zu einer von zwei Konjugationsgruppen, traditionell **erste Konjugation** und **zweite Konjugation** genannt. Die Gruppe bestimmt, welchen Satz von sechs Endungen das Verb im Präsens (und im einfachen Futur) annimmt.\n\nDie Infinitivendung ist eine nützliche erste Vermutung: Die meisten **-ать/-ять**-Verben gehören zur ersten Konjugation, und die meisten **-ить**-Verben zur zweiten. Aber es ist nur eine Vermutung — eine kurze, bekannte Liste von Ausnahmen konjugiert „falsch herum", sodass der Infinitiv allein kein Beweis ist.',
      table: {
        headers: ['Konjugation', 'Typische Infinitivendung', 'Beispiel', '„Sie"-Endung (они)'],
        rows: [
          ['Erste (I)', '-ать, -ять, die meisten -еть', 'читать, гулять, уметь', '-ут / -ют'],
          [
            'Zweite (II)',
            '-ить (meist), einige -еть / -ать',
            'говорить, смотреть, слышать',
            '-ат / -ят',
          ],
        ],
        caption: 'Die zwei russischen Verbkonjugationsgruppen',
        boldColumnIndices: [0],
      },
      bullets: [
        'Die zuverlässigste Prüfung ist die **они (sie)**-Form: **-ут/-ют** bedeutet immer erste Konjugation, **-ат/-ят** bedeutet immer zweite Konjugation',
        'Eine kurze Liste häufiger **-еть**-Verben konjugiert als **zweite**, nicht erste Konjugation: смотреть, видеть, зависеть, вертеть, обидеть, ненавидеть, терпеть',
        'Eine kurze Liste von **-ать**-Verben konjugiert ebenfalls als zweite: слышать, дышать, держать, гнать — russische Lehrer nennen sie „die 7 Ausnahmeverben"',
        '**Брить** (rasieren) und **стелить** (ausbreiten/Bett machen) sehen wie -ить-Verben aus, konjugieren aber als **erste**: бре́ю, бре́ешь, бре́ет…',
      ],
    },
    {
      h2: 'Präsens: Endungen der ersten Konjugation (-е-)',
      content:
        'Verben der ersten Konjugation verwenden in den meisten Endungen einen **-е-**-Vokal. Der genaue Buchstabe (у/ю, ешь, ет…) hängt nur davon ab, ob der Verbstamm auf einen Vokal oder einen Konsonanten endet — eine Rechtschreibregel, kein Bedeutungsunterschied.',
      table: {
        headers: ['Pronomen', 'Endung', 'читать (lesen)', 'гулять (spazieren gehen)'],
        rows: [
          ['я', '-у / -ю', 'читаю', 'гуляю'],
          ['ты', '-ешь', 'читаешь', 'гуляешь'],
          ['он / она / оно', '-ет', 'читает', 'гуляет'],
          ['мы', '-ем', 'читаем', 'гуляем'],
          ['вы', '-ете', 'читаете', 'гуляете'],
          ['они', '-ут / -ют', 'читают', 'гуляют'],
        ],
        caption: 'Präsensendungen der ersten Konjugation',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      bullets: [
        'Stämme, die auf einen **Konsonanten** enden (чита-), nehmen **-у / -ешь / -ет / -ем / -ете / -ут**',
        'Stämme, die auf einen **Vokal** enden (гуля-), nehmen **-ю / -ешь / -ет / -ем / -ете / -ют** — gleiche Endungen, nur ю statt у und ют statt ут',
        'Die Betonung kann unvorhersehbar springen: писать → пишу́ (betonte Endung), aber пи́шешь, пи́шет… (Betonung kehrt zum Stamm zurück) — prüfen Sie die Betonung immer in einem Wörterbuch',
      ],
    },
    {
      h2: 'Präsens: Endungen der zweiten Konjugation (-и-)',
      content:
        'Verben der zweiten Konjugation verwenden in den meisten Endungen einen **-и-**-Vokal. Die я-Form und die они-Form unterscheiden sich am stärksten von der ersten Konjugation — und dort treten Konsonantenmutationen am häufigsten auf.',
      table: {
        headers: ['Pronomen', 'Endung', 'говорить (sprechen)', 'видеть (sehen)'],
        rows: [
          ['я', '-у / -ю', 'говорю', 'вижу'],
          ['ты', '-ишь', 'говоришь', 'видишь'],
          ['он / она / оно', '-ит', 'говорит', 'видит'],
          ['мы', '-им', 'говорим', 'видим'],
          ['вы', '-ите', 'говорите', 'видите'],
          ['они', '-ат / -ят', 'говорят', 'видят'],
        ],
        caption: 'Präsensendungen der zweiten Konjugation',
        boldColumnIndices: [0, 1],
        accentColumnIndices: [1],
      },
      subsections: [
        {
          h3: 'Konsonantenmutationen in der я-Form',
          content:
            'Eine Gruppe von Verben der zweiten Konjugation tauscht still einen Konsonanten aus — aber **nur in der я-Form**. Jede andere Form (ты, он, мы, вы, они) behält den ursprünglichen, unveränderten Konsonanten bei.',
          table: {
            headers: ['Mutation', 'Infinitiv', 'я-Form', 'ты-Form (unverändert)'],
            rows: [
              ['д → ж', 'видеть', 'вижу', 'видишь'],
              ['т → ч', 'платить', 'плачу', 'платишь'],
              ['с → ш', 'просить', 'прошу', 'просишь'],
              ['ст → щ', 'простить', 'прощу', 'простишь'],
              ['б → бл', 'любить', 'люблю', 'любишь'],
              ['в → вл', 'готовить', 'готовлю', 'готовишь'],
              ['п → пл', 'купить', 'куплю', 'купишь'],
            ],
            caption: 'Konsonantenmutationen in der я-Form von Verben der zweiten Konjugation',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Die Mutation ist **auf die я-Form beschränkt** — ein sehr häufiger Anfängerfehler ist, sie überall anzuwenden: лю́бишь, nicht *любьишь',
        'Die gleiche Art von Mutation taucht auch bei manchen Verben der **ersten Konjugation** auf, dort aber im gesamten Präsens, nicht nur bei я: писать → пишу, пишешь, пишет, пишем, пишете, пишут (с→ш durchgehend)',
        'Die **7-Buchstaben-Rechtschreibregel** erklärt, warum man **они пишут** schreibt, nicht *пишют: nach ж, ш, щ, ч, ц, г, к, х erlaubt die russische Rechtschreibung niemals ю oder я — nur у oder а',
      ],
    },
    {
      h2: 'Vergangenheit: Die einfachste Zeitform des Russischen (mit ein paar Fallen)',
      content:
        'Zuerst die gute Nachricht: **die Konjugationsgruppe spielt für die Vergangenheit keine Rolle.** Entfernen Sie **-ть** vom Infinitiv und fügen Sie eine Endung hinzu, die mit **Geschlecht und Zahl des Subjekts** übereinstimmt — nicht mit der Person, anders als im Deutschen und den meisten europäischen Sprachen.',
      table: {
        headers: ['Subjekt', 'Endung', 'читать → Vergangenheit', 'говорить → Vergangenheit'],
        rows: [
          ['он (mask.)', '-л', 'чита́л', 'говори́л'],
          ['она (fem.)', '-ла', 'чита́ла', 'говори́ла'],
          ['оно (neutr.)', '-ло', 'чита́ло', 'говори́ло'],
          ['они / мы / вы', '-ли', 'чита́ли', 'говори́ли'],
        ],
        caption: 'Vergangenheitsendungen: Geschlecht und Zahl, nicht Person',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Ausnahmen: Verben auf -ти und -чь',
          content:
            'Eine kleine, aber häufige Gruppe von Verben folgt nicht dem sauberen -л-Muster. Verben auf **-ти** (идти, нести, вести) und **-чь** (мочь, помочь, печь) verschieben oft ihren Stamm oder lassen das maskuline -л ganz weg.',
          table: {
            headers: ['Infinitiv', 'он (mask.)', 'она (fem.)', 'они (Plural)'],
            rows: [
              ['идти (gehen)', 'шёл', 'шла', 'шли'],
              ['мочь (können)', 'мог', 'могла', 'могли'],
              ['нести (tragen)', 'нёс', 'несла', 'несли'],
              ['печь (backen)', 'пёк', 'пекла', 'пекли'],
            ],
            caption: 'Unregelmäßige Vergangenheitsstämme: -ти- und -чь-Verben',
            boldColumnIndices: [0],
          },
        },
      ],
      bullets: [
        'Die Vergangenheit stimmt mit **Geschlecht und Zahl** überein, nicht mit der Person: ein männlicher Sprecher sagt **я чита́л**, eine weibliche Sprecherin sagt **я чита́ла** — gleiches Pronomen, unterschiedliche Verbform',
        '**Мочь** und andere -чь-Verben lassen das maskuline -л komplett weg: **мог**, nicht *могл',
        '**Идти** hat einen völlig suppletiven Vergangenheitsstamm (шёл), anders als sein Präsensstamm (иду) — beide Formen teilen keinen einzigen Buchstaben',
      ],
    },
    {
      h2: 'Zukunft: Einfach oder zusammengesetzt',
      content:
        'Das Russische bildet die Zukunftsform auf zwei verschiedene Arten, und welche Sie verwenden, hängt vollständig vom **Aspekt** ab, nicht von einer frei wählbaren Bedeutung. Falls Sie perfektive und imperfektive Verben noch nicht behandelt haben, ist unser [Leitfaden zum russischen Verbalaspekt](/learn/articles/russian-verbal-aspect-perfective-imperfective) die natürliche Ergänzung zu diesem Abschnitt.',
      table: {
        headers: ['Aspekt', 'Struktur', 'Beispiel', 'Bedeutung'],
        rows: [
          [
            'Perfektiv — einfache Zukunft',
            'Konjugiert wie ein Präsensverb',
            'я прочита́ю',
            'ich werde es lesen (und fertig lesen)',
          ],
          [
            'Imperfektiv — zusammengesetzte Zukunft',
            'буду/будешь/будет/будем/будете/будут + imperfektiver Infinitiv',
            'я бу́ду чита́ть',
            'ich werde lesen / am Lesen sein (andauernd)',
          ],
        ],
        caption: 'Einfache Zukunft (perfektiv) vs. zusammengesetzte Zukunft (imperfektiv)',
        boldColumnIndices: [0],
      },
      bullets: [
        'Ein **perfektives** Verb hat kein Präsens — es nach dem Präsensmuster zu konjugieren erzeugt automatisch eine **Zukunfts**bedeutung: я прочита́ю (ich werde lesen), nicht „ich lese gerade"',
        'Ein **imperfektives** Verb braucht das Hilfsverb **буду** (ich werde sein), passend zum Subjekt konjugiert, gefolgt vom imperfektiven Infinitiv: мы **будем** говори́ть (wir werden sprechen / am Sprechen sein)',
        'Konjugieren Sie einen imperfektiven Infinitiv niemals direkt für die Zukunft — *я читаю за́втра книгу bedeutet nicht „ich werde morgen das Buch lesen"; es braucht буду читать',
      ],
    },
    {
      h2: '8 unregelmäßige Verben, die Sie kennen sollten',
      content:
        'Eine Handvoll extrem häufiger Verben passt in keine der beiden Konjugationen sauber hinein. Sie sind es wert, als eigenständige Muster auswendig gelernt zu werden — die meisten davon werden Sie täglich verwenden.',
      table: {
        headers: ['Infinitiv', 'я', 'ты', 'он', 'мы', 'вы', 'они'],
        rows: [
          ['хоте́ть (wollen)', 'хочу́', 'хо́чешь', 'хо́чет', 'хоти́м', 'хоти́те', 'хотя́т'],
          ['есть (essen)', 'ем', 'ешь', 'ест', 'еди́м', 'еди́те', 'едя́т'],
          ['дать (geben)', 'дам', 'дашь', 'даст', 'дади́м', 'дади́те', 'даду́т'],
          ['бежа́ть (laufen)', 'бегу́', 'бежи́шь', 'бежи́т', 'бежи́м', 'бежи́те', 'бегу́т'],
          ['е́хать (fahren)', 'е́ду', 'е́дешь', 'е́дет', 'е́дем', 'е́дете', 'е́дут'],
          ['пить (trinken)', 'пью', 'пьёшь', 'пьёт', 'пьём', 'пьёте', 'пьют'],
          ['жить (leben)', 'живу́', 'живёшь', 'живёт', 'живём', 'живёте', 'живу́т'],
          ['мочь (können)', 'могу́', 'мо́жешь', 'мо́жет', 'мо́жем', 'мо́жете', 'мо́гут'],
        ],
        caption: '8 häufige unregelmäßige russische Verben, vollständig konjugiert',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Хотеть** mischt Konjugationen: der Singular (хочу́, хо́чешь, хо́чет) folgt der ersten Konjugation, der Plural (хоти́м, хоти́те, хотя́т) der zweiten — eine echte Eigenart, die es wert ist, für sich gelernt zu werden',
        '**Есть** und **дать** teilen sich ein seltenes „athematisches" Muster, das nur bei einer Handvoll russischer Verben vorkommt — keines von beiden passt zur ersten oder zweiten Konjugation',
        'Das Präsens von **быть** („sein") wird im modernen Russisch fast immer **weggelassen**: **Я студе́нт** (Ich bin Student), nicht *Я есть студент — die archaische Form есть überlebt hauptsächlich in festen Wendungen wie **У меня́ есть…** (Ich habe…)',
      ],
    },
    {
      h2: 'Häufige Fehler bei der russischen Verbkonjugation',
      content: 'Diese fünf Fehler machen den Großteil der Konjugationsfehler von Lernenden aus:',
      subsections: [
        {
          h3: 'Fehler 1: Die falsche Konjugation vom Infinitiv erraten',
          content:
            '**Falsch**: Я **смотрею** телевизор.\n**Richtig**: Я **смотрю** телевизор.\n\n**Warum**: смотреть endet auf -еть, was normalerweise erste Konjugation anzeigt — aber смотреть gehört zu den bekannten Ausnahmen, die als **zweite** Konjugation konjugieren.',
        },
        {
          h3: 'Fehler 2: Die я-Form-Mutation auf jede Form anwenden',
          content:
            '**Falsch**: Ты **любишь**… **любю**? — Verwechslung, welche Form mutiert.\n**Richtig**: Я **люблю**, ты **любишь**, он **любит**.\n\n**Warum**: die Mutation б → бл tritt **nur in der я-Form** auf. Alle anderen Formen verwenden den einfachen, unveränderten Konsonanten.',
        },
        {
          h3: 'Fehler 3: Personenbezogene Endungen in der Vergangenheit verwenden',
          content:
            '**Falsch**: Она **говорил** по-русски.\n**Richtig**: Она **говорила** по-русски.\n\n**Warum**: die Vergangenheit stimmt mit **Geschlecht und Zahl des Subjekts** überein, nie mit der Person. Она ist feminin, also muss das Verb -ла nehmen, unabhängig davon, wer spricht.',
        },
        {
          h3: 'Fehler 4: Ein perfektives Verb konjugieren, wo eine Gewohnheit gemeint ist',
          content:
            '**Falsch**: Ка́ждый день я **прочита́ю** кни́гу.\n**Richtig**: Ка́ждый день я **чита́ю** кни́гу.\n\n**Warum**: perfektive Verben haben kein Präsens, daher bedeutet прочитать so konjugiert eigentlich „ich werde lesen" (Zukunft), keine tägliche Gewohnheit. Gewohnheitsmäßige Handlungen brauchen das Imperfektiv, читать.',
        },
        {
          h3: 'Fehler 5: Die 7-Buchstaben-Rechtschreibregel verletzen',
          content:
            '**Falsch**: Они **пишют** пи́сьма.\n**Richtig**: Они **пишут** пи́сьма.\n\n**Warum**: nach ж, ш, щ, ч, ц, г, к, х erlaubt die russische Rechtschreibung niemals ю oder я — schreiben Sie stattdessen у oder а, selbst wenn die „erwartete" Endung normalerweise ю oder я verwenden würde.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Was sind die zwei Konjugationsgruppen im Russischen?',
      answer:
        'Russische Verben teilen sich in die **erste Konjugation** (Endungen um -е- herum: -у/-ю, -ешь, -ет, -ем, -ете, -ут/-ют) und die **zweite Konjugation** (Endungen um -и- herum: -у/-ю, -ишь, -ит, -им, -ите, -ат/-ят). Die meisten -ать/-ять-Verben sind erste Konjugation und die meisten -ить-Verben sind zweite, aber eine kurze Liste bekannter Ausnahmen (смотреть, слышать, держать…) durchbricht dieses Muster.',
    },
    {
      question: 'Wie erkenne ich, ob ein Verb erste oder zweite Konjugation ist?',
      answer:
        'Der zuverlässigste Test ist die **они (sie)**-Form: Endet sie auf **-ут/-ют**, ist das Verb erste Konjugation; endet sie auf **-ат/-ят**, ist es zweite Konjugation. Die Infinitivendung ist eine nützliche erste Vermutung, aber kein Beweis, da Verben wie смотреть (-еть) und держать (-ать) als zweite Konjugation konjugieren.',
    },
    {
      question: 'Ändert sich die russische Vergangenheitsform nach Person, wie im Deutschen?',
      answer:
        'Nein. Die russische Vergangenheit stimmt mit **Geschlecht und Zahl** des Subjekts überein, nicht mit der Person. Jedes Subjekt verwendet dasselbe Endungsmuster: -л (maskulin), -ла (feminin), -ло (neutrum), -ли (Plural) — daher sehen я читал und он читал identisch aus, wenn der Sprecher männlich ist.',
    },
    {
      question:
        'Was ist der Unterschied zwischen einfacher und zusammengesetzter Zukunft im Russischen?',
      answer:
        'Die **einfache Zukunft** entsteht, indem man ein perfektives Verb nach dem Präsensmuster konjugiert (я прочита́ю — ich werde lesen, abgeschlossen). Die **zusammengesetzte Zukunft** entsteht mit dem Hilfsverb буду/будешь/будет/будем/будете/будут plus imperfektivem Infinitiv (я бу́ду чита́ть — ich werde lesen / am Lesen sein, andauernd). Welche Form Sie verwenden, hängt vom Aspekt des Verbs ab, nicht von persönlicher Vorliebe.',
    },
    {
      question: 'Gibt es im Russischen wirklich unregelmäßige Verben, oder nur Ausnahmen?',
      answer:
        'Beides existiert. Verben wie хотеть (gemischte Konjugation), есть und дать (ein seltenes athematisches Muster) oder идти (ein suppletiver Vergangenheitsstamm, шёл) sind wirklich unregelmäßig und müssen einzeln auswendig gelernt werden. Die meisten anderen „Unregelmäßigkeiten" — wie смотреть, das als zweite Konjugation konjugiert, oder die -чь-Verben, die das maskuline -л weglassen — sind kleine, gut dokumentierte Ausnahmegruppen statt echtes Chaos.',
    },
  ],
  conclusionIntro:
    'Die russische Verbkonjugation belohnt frühen Einsatz — anders als bei den Fällen kann der Großteil davon tatsächlich in einer einzigen konzentrierten Lernsitzung klicken:',
  conclusionBullets: [
    '**Bestimmen Sie die Konjugationsgruppe** anhand der они-Form, nicht nur des Infinitivs — -ут/-ют ist erste, -ат/-ят ist zweite',
    '**Lernen Sie die Ausnahmelisten**: смотреть-artige -еть-Verben und слышать-artige -ать-Verben konjugieren als zweite',
    '**Achten Sie auf я-Form-Mutationen** (любить → люблю) — sie gelten nur für diese eine Form',
    '**Vergangenheit = Geschlecht + Zahl**, nicht Person: -л / -ла / -ло / -ли',
    '**Die Zukunft folgt dem Aspekt**: Perfektiv konjugiert direkt; Imperfektiv braucht буду + Infinitiv',
    'Merken Sie sich die kleine Gruppe **unregelmäßiger Verben** (хотеть, есть, дать, идти…) als eigenständige Muster',
  ],
  conclusionOutro:
    'Konjugation gibt Ihnen das Verb; russische Fälle geben Ihnen alles, worauf das Verb einwirkt — die Substantiv-, Adjektiv- und Pronomenendungen, die einen Satz wirklich zusammenhalten lassen. Sobald sich Verbendungen automatisch anfühlen, ist unser kostenloses Übungstool auf russiandeclensions.com/practice der natürliche nächste Schritt, um alle sechs Fälle interaktiv zu üben — ohne Anmeldung.',
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  conclusion: '',
  internalLinks: [
    { href: '/practice', label: 'Kostenloses russisches Deklinationsquiz — alle 6 Fälle üben' },
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: 'Russischer Verbalaspekt: Perfektiv vs. Imperfektiv erklärt',
    },
    {
      href: '/learn/articles/russian-verbs-of-motion',
      label: 'Russische Bewegungsverben: Der vollständige Leitfaden',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Russische Wortbetonung: Warum sie alles verändert (und wie man sie meistert)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Russische Fälle einfach erklärt: Leitfaden für Anfänger',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Russische Verbkonjugation: Der vollständige Leitfaden (Präsens, Vergangenheit & Zukunft)',
    description:
      'Lernen Sie die russische Verbkonjugation Schritt für Schritt: die zwei Konjugationsgruppen, Präsensendungen, Konsonantenmutationen, Vergangenheit, Zukunft und 8 vollständig konjugierte unregelmäßige Verben.',
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-verb-conjugation-guide',
    },
    keywords:
      'russische Verbkonjugation, russische Verben konjugieren, russische Verbzeiten, russische Präsenskonjugation, russische Verben Vergangenheit, russische Verbendungen',
  },
};
