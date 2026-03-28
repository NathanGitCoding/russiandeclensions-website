import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-prepositions-and-cases` (Quelle EN: `learnArticles.ts`). Kyrillische Beispiele zeichengenau */
export const russianPrepositionsAndCasesDe: LearnArticle = {
  slug: 'russian-prepositions-and-cases',
  title:
    'Russische Präpositionen und Fälle: Welcher Fall folgt welcher Präposition?',
  metaTitle:
    'Russische Präpositionen und Fälle | Vollständiges Nachschlagewerk | Russian Cases with Anna',
  metaDescription:
    'Die vollständige Referenz: jede russische Präposition mit ihrem Fall. Mastertabelle mit 44 Präpositionen, Doppelfall-Regeln (в/на/за/под), Vertiefung pro Fall, Merkstrategien.',
  keywords: [
    'russische Präpositionen Fälle',
    'russische Präpositionen Genitiv',
    'Liste Präpositionen Russisch Kasus',
    'в на с по russischer Fall',
    'russisch Akkusativ Präpositional Präpositionen',
    'Tabelle Präpositionen Grammatik Russisch',
  ],
  h1: 'Russische Präpositionen und Fälle: Welcher Fall folgt welcher Präposition?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Referenztabelle russische Präpositionen und Fälle',
    width: 1200,
    height: 630,
  },
  intro:
    'Eine der **nützlichsten Fähigkeiten** im Russischen ist zu wissen, **welchen Fall jede Präposition verlangt**. Sobald Sie wissen, dass **без** immer den Genitiv nimmt, **к** immer den Dativ, und **с** je nach Bedeutung Genitiv ODER Instrumental — steigt Ihre Genauigkeit stark.\n\nDas ist der **vollständige Referenzleitfaden**. Jede wichtige russische Präposition steht mit ihrem Fall, ihrer Bedeutung und einem echten Beispiel. Nutzen Sie ihn zum Nachschlagen, und nach und nach werden die Paare automatisch.',
  whatYouLearn: [
    'Mastertabelle: jede russische Präposition und ihr Fall',
    'Präpositionen + Genitiv (18)',
    'Präpositionen + Dativ (6)',
    'Präpositionen + Akkusativ (8)',
    'Präpositionen + Instrumental (7)',
    'Präpositionen + Präpositional (5)',
    'Präpositionen mit zwei Fällen — je nach Bedeutung',
    'В vs. НА — das wichtigste Ort-/Richtungspaar',
    'Merkstrategien für Präpositions-Fall-Paare',
  ],
  leadMagnetCta: {
    title: 'Russische Präpositionen und Fälle mit unserer App üben',
    description: 'Gezielte Übungen für jedes Präpositions-Fall-Paar — Android und iOS.',
    ctaText: 'App herunterladen',
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
      href: '/learn/articles/russian-genitive-case',
      label:
        'Russischer Genitiv: Regeln, Endungen und 32 echte Beispiele',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Mastertabelle: Jede russische Präposition und ihr Fall',
      content:
        'Die Tabelle listet **alle wichtigen russischen Präpositionen**, geordnet nach dem verlangten Fall. Farbcodierung pro Fall.\n\n**Legende:** Genitiv (Navy) · Dativ (Violett) · Akkusativ (Rot) · Instrumental (Petrol) · Präpositional (Orange).',
      table: {
        caption: '44 russische Präpositionen nach verlangtem Fall',
        boldColumnIndices: [0, 1],
        headers: ['Fall', 'Präp.', 'Bedeutung', 'Mit Nomen', 'Voller Satz + Übersetzung'],
        rows: [
            [
              'Genitiv',
              'без',
              'ohne',
              'без молока',
              'Я пью кофе без молока. — Ich trinke Kaffee ohne Milch.',
            ],
            [
              'Genitiv',
              'до',
              'bis / vor / bis zu',
              'до урока',
              'Позвони мне до урока. — Ruf mich vor der Stunde an.',
            ],
            [
              'Genitiv',
              'из',
              'aus (von innen)',
              'из России',
              'Она приехала из России. — Sie kam aus Russland.',
            ],
            [
              'Genitiv',
              'с',
              'von (von einer Fläche)',
              'с полки',
              'Книга упала с полки. — Das Buch fiel vom Regal.',
            ],
            [
              'Genitiv',
              'у',
              'bei / nahe / an',
              'у меня',
              'У меня есть кошка. — Ich habe eine Katze.',
            ],
            [
              'Genitiv',
              'от',
              'von (Person / Quelle)',
              'от друга',
              'Письмо от друга. — Ein Brief von einem Freund.',
            ],
            [
              'Genitiv',
              'после',
              'nach',
              'после работы',
              'После работы я устал. — Nach der Arbeit war ich müde.',
            ],
            [
              'Genitiv',
              'для',
              'für (zum Nutzen von)',
              'для тебя',
              'Это подарок для тебя. — Das ist ein Geschenk für dich.',
            ],
            [
              'Genitiv',
              'кроме',
              'außer / neben',
              'кроме меня',
              'Все кроме меня пришли. — Alle außer mir kamen.',
            ],
            [
              'Genitiv',
              'вокруг',
              'um … herum',
              'вокруг города',
              'Мы ехали вокруг города. — Wir fuhren um die Stadt.',
            ],
            [
              'Genitiv',
              'мимо',
              'an … vorbei',
              'мимо школы',
              'Он прошёл мимо школы. — Er ging an der Schule vorbei.',
            ],
            [
              'Genitiv',
              'вместо',
              'anstelle von',
              'вместо кофе',
              'Выпей воды вместо кофе. — Trink Wasser statt Kaffee.',
            ],
            [
              'Genitiv',
              'напротив',
              'gegenüber',
              'напротив банка',
              'Кафе напротив банка. — Das Café liegt gegenüber der Bank.',
            ],
            [
              'Genitiv',
              'из-за',
              'wegen / von hinter',
              'из-за дождя',
              'Из-за дождя мы остались дома. — Wegen des Regens blieben wir zu Hause.',
            ],
            [
              'Genitiv',
              'из-под',
              'von unter',
              'из-под стола',
              'Кот вылез из-под стола. — Die Katze kam von unter dem Tisch.',
            ],
            [
              'Genitiv',
              'ради',
              'um … willen',
              'ради тебя',
              'Ради тебя я на всё готов. — Um deinetwillen bin ich zu allem bereit.',
            ],
            [
              'Genitiv',
              'около',
              'nahe / um … herum',
              'около школы',
              'Встретимся около школы. — Treffen wir uns nahe der Schule.',
            ],
            [
              'Genitiv',
              'вдоль',
              'entlang',
              'вдоль реки',
              'Мы шли вдоль реки. — Wir gingen den Fluss entlang.',
            ],
            [
              'Dativ',
              'к',
              'zu / auf … zu (Person oder Ziel)',
              'к врачу, к морю',
              'Иди к врачу! — Geh zum Arzt!',
            ],
            [
              'Dativ',
              'по',
              'entlang / in / gemäß',
              'по улице, по закону',
              'Мы гуляли по парку. — Wir spazierten im Park.',
            ],
            [
              'Dativ',
              'благодаря',
              'dank',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Dank dir hat alles geklappt!',
            ],
            [
              'Dativ',
              'вопреки',
              'trotz',
              'вопреки прогнозу',
              'Вопреки прогнозу, погода была хорошей. — Trotz der Vorhersage war das Wetter gut.',
            ],
            [
              'Dativ',
              'согласно',
              'gemäß (formell)',
              'согласно закону',
              'Согласно закону, это запрещено. — Gesetzlich ist das verboten.',
            ],
            [
              'Dativ',
              'навстречу',
              'entgegen',
              'навстречу ветру',
              'Она шла навстречу ветру. — Sie ging dem Wind entgegen.',
            ],
            [
              'Akkusativ',
              'в',
              'in / nach (Richtung)',
              'в школу',
              'Я иду в школу. — Ich gehe zur Schule.',
            ],
            [
              'Akkusativ',
              'на',
              'auf / zu (Richtung)',
              'на работу',
              'Она едет на работу. — Sie fährt zur Arbeit.',
            ],
            [
              'Akkusativ',
              'за',
              'hinter (Bewegung) / für',
              'за угол',
              'Он зашёл за угол. — Er bog um die Ecke.',
            ],
            [
              'Akkusativ',
              'под',
              'unter (Bewegung)',
              'под стол',
              'Кот залез под стол. — Die Katze kroch unter den Tisch.',
            ],
            [
              'Akkusativ',
              'через',
              'über / durch / in (Zeit)',
              'через час',
              'Приходи через час. — Komm in einer Stunde.',
            ],
            [
              'Akkusativ',
              'про',
              'über (umgangssprachlich)',
              'про тебя',
              'Он рассказал про тебя. — Er erzählte von dir.',
            ],
            [
              'Akkusativ',
              'спустя',
              'nach / später (Zeit)',
              'спустя год',
              'Спустя год он вернулся. — Ein Jahr später kehrte er zurück.',
            ],
            [
              'Akkusativ',
              'о/об',
              'gegen (anstoßen)',
              'о камень',
              'Он споткнулся о камень. — Er stolperte über einen Stein.',
            ],
            [
              'Instrumental',
              'с',
              'mit / zusammen mit',
              'с другом',
              'Я иду с другом. — Ich gehe mit einem Freund.',
            ],
            [
              'Instrumental',
              'за',
              'hinter / an (Position)',
              'за столом',
              'Он сидит за столом. — Er sitzt am Tisch.',
            ],
            [
              'Instrumental',
              'перед',
              'vor / bevor',
              'перед домом',
              'Стой перед домом. — Steh vor dem Haus.',
            ],
            [
              'Instrumental',
              'над',
              'über / oberhalb',
              'над городом',
              'Самолёт летит над городом. — Das Flugzeug fliegt über der Stadt.',
            ],
            [
              'Instrumental',
              'под',
              'unter (Position)',
              'под столом',
              'Книга под столом. — Das Buch liegt unter dem Tisch.',
            ],
            [
              'Instrumental',
              'между',
              'zwischen',
              'между нами',
              'Это между нами. — Das bleibt unter uns.',
            ],
            [
              'Instrumental',
              'рядом с',
              'neben',
              'рядом с банком',
              'Кафе рядом с банком. — Das Café ist neben der Bank.',
            ],
            [
              'Präpositional',
              'в',
              'in / innerhalb (Ort)',
              'в Москве',
              'Я живу в Москве. — Ich lebe in Moskau.',
            ],
            [
              'Präpositional',
              'на',
              'auf / an (Ort)',
              'на столе',
              'Книга на столе. — Das Buch liegt auf dem Tisch.',
            ],
            [
              'Präpositional',
              'о/об',
              'über / betreffend',
              'о работе',
              'Мы говорим о работе. — Wir sprechen über die Arbeit.',
            ],
            [
              'Präpositional',
              'при',
              'in Anwesenheit von / unter',
              'при Сталине',
              'При Сталине жизнь была трудной. — Unter Stalin war das Leben hart.',
            ],
            [
              'Präpositional',
              'по',
              'bei / nach (formell, bei Ankunft)',
              'по приезде',
              'По приезде он позвонил. — Bei seiner Ankunft rief er an.',
            ],
        ],
      },
    },


      {
        h2: 'Präpositionen mit zwei Fällen: Bedeutung je nach Fall',
        content:
          'Manche russischen Präpositionen verlangen **zwei verschiedene Fälle**; die Bedeutung ändert sich je nach Fall. Das sind die **wichtigsten zum Meistern** — ein falscher Fall ändert den Satzsinn.',
        table: {
          caption: 'Präpositionen mit zwei Fällen (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Präp.', 'Fall 1', 'Beispiel 1', 'Fall 2', 'Beispiel 2'],
          rows: [
            ['в', 'Akkusativ', 'в школу (zur Schule, Richtung)', 'Präpositional', 'в школе (in der Schule, Ort)'],
            ['на', 'Akkusativ', 'на работу (zur Arbeit, Richtung)', 'Präpositional', 'на работе (an der Arbeit, Ort)'],
            [
              'за',
              'Akkusativ',
              'сесть за стол (sich an den Tisch setzen)',
              'Instrumental',
              'за столом (am Tisch sitzen)',
            ],
            [
              'под',
              'Akkusativ',
              'положить под стол (unter den Tisch legen)',
              'Instrumental',
              'под столом (unter dem Tisch)',
            ],
            [
              'о/об',
              'Akkusativ',
              'споткнуться о порог (über die Schwelle stolpern)',
              'Präpositional',
              'говорить о работе (über die Arbeit sprechen)',
            ],
          ],
        },
        bullets: [
          '**Die В/НА-Regel Richtung vs. Ort** — das am häufigsten geprüfte Doppelfall-Muster:',
          '**В/НА + Akkusativ = RICHTUNG** (Bewegung auf etwas zu): Я иду в школу. Положи книгу на стол.',
          '**В/НА + Präpositional = ORT** (statisch, irgendwo sein): Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Präpositionen mit Genitiv — Vertiefung',
        content:
          'Der **Genitiv** hat mehr Präpositionen als jeder andere Fall. Hier sind die wichtigsten nach Bedeutung gruppiert.',
        subsections: [
          {
            h3: 'Herkunft und Trennung: из, с, от',
            content:
              '**из** — von innen aus einem Ort: из России, из дома, из школы. **с** — von (von einer Fläche): с полки, с работы (umg.), с крыши. **от** — von (Person oder Quelle): от друга, от врача, от боли. **Wichtig:** из vs. от — **из** für Orte (Innenraum); **от** für Personen und Quellen. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Zeit: до, после, с (…до)',
            content:
              '**до** — bis / vor: до урока, до свидания. **после** — nach: после работы, после дождя. **с … до** — von … bis: с утра до вечера.',
          },
          {
            h3: 'Raum: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — bei / nahe: у окна, у меня. **около** — in der Nähe: около школы, около часа. **вокруг** — herum: вокруг стола, вокруг города. **вдоль** — entlang: вдоль реки, вдоль дороги. **мимо** — vorbei: мимо нас, пройти мимо. **напротив** — gegenüber: напротив банка.',
          },
        ],
      },
      {
        h2: 'Präpositionen mit Dativ — Vertiefung',
        subsections: [
          {
            h3: 'К — Richtung auf … zu',
            content:
              "**К** drückt Bewegung oder Ausrichtung zu einer Person, einem Ding oder einem abstrakten Ziel aus — **Dativ-Gegenstück** zu в/на für Richtung: к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — die vielseitige Präposition',
            content:
              '**Entlang / auf** einer Fläche: гулять по парку, идти по улице. **Kommunikationsmittel:** по телефону, по почте, по интернету. **Fach:** урок по математике, книга по истории. **Wiederkehrende Zeit:** по понедельникам, по вечерам. **Gemäß:** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Präpositionen mit Akkusativ — Vertiefung',
        subsections: [
          {
            h3: 'В und НА für die Richtung',
            content:
              '**В** und **на** sind die wichtigsten Präpositionen des **Akkusativs der Richtung**. **В** = Bewegung in einen geschlossenen Raum: в школу, в Россию, в магазин. **НА** = auf eine Fläche oder bestimmte Orte: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — hindurch / in (Zeit)',
            content:
              '**Hindurch:** переплыть через реку, пройти через лес. **In (Zeit):** через час, через неделю, через год.',
          },
          {
            h3: 'ЗА und ПОД für Bewegung',
            content:
              '**За + Akkusativ** = Bewegung nach hinten: зайти за угол, сесть за стол. **Под + Akkusativ** = Bewegung nach unten unter: положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Präpositionen mit Instrumental — Vertiefung',
        subsections: [
          {
            h3: 'С — mit',
            content:
              '**С + Instrumental** ist sehr häufig. **Begleitung:** с другом, с семьёй. **Zutaten:** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Präpositionen der räumlichen Lage',
            content:
              '**За + Instrumental** = hinter / an: за столом, за горой. **Перед + Instrumental** = vor: перед домом, перед сном. **Над + Instrumental** = über: над городом, над столом. **Под + Instrumental** = unter (Lage): под столом, под землёй. **Между + Instrumental** = zwischen: между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Präpositionen mit Präpositional — Vertiefung',
        subsections: [
          {
            h3: 'В und НА für den Ort',
            content:
              '**В** und **на** im Präpositional drücken **statischen Ort** aus — wo etwas bereits ist: **В**: в Москве, в школе, в доме, в России. **НА**: на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — über',
            content:
              '**О + Präpositional** = Thema von Denken oder Sprechen: говорить о, думать о, мечтать о, писать о. **О чём?** | **О ком?** **об** vor Vokal: об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Merkstrategien für Präposition + Fall',
        subsections: [
          {
            h3: 'Strategie 1: Nach Fallgruppen lernen',
            content:
              "Statt einzelner Präpositionen lernt man **Cluster pro Fall**. Beginnen Sie mit dem Genitiv-Block (без, до, из, у, от, после, для, кроме), bis es automatisch sitzt, dann Dativ (к, по).",
          },
          {
            h3: 'Strategie 2: Einen merkwürdigen Satz pro Präposition',
            content:
              'Erfinden Sie für jede Präposition **einen persönlichen korrekten Satz**. Без тебя мне плохо bleibt länger hängen als „без + Nomen“.',
          },
          {
            h3: 'Strategie 3: Doppelfall-Präpositionen priorisieren',
            content:
              '**В, на, за**, **под**: je zwei Fälle. **Paarsätze**: Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Strategie 4: Test „Wo?“ vs. „Wohin?“',
            content:
              'Bei **в** und **на**: beantwortet der Satz **„Wo?“** (Präpositional) oder **„Wohin?“** (Akkusativ)?',
          },
        ],
      },
    ],
    conclusion:
      '**Präpositionen und Fälle** zu beherrschen verbessert die Genauigkeit schnell. Der Schlüssel ist das **Paar Präposition → Fall**: без → Genitiv, к → Dativ usw.\\n\\nBeginnen Sie mit den **Doppelfall-Präpositionen** (в, на, за, под). Nutzen Sie den **„Wo?“ / „Wohin?“**-Test für в/на. Üben Sie mit echten Sätzen — dann werden die Paare automatisch.',
    conclusionBullets: [
      'Der **Genitiv** hat die meisten Präpositionen (18) — Block без, до, из, у, от, после, для, кроме.',
      '**В/НА + Akkusativ** = Richtung. **В/НА + Präpositional** = Ort.',
      '**Doppelfall-Präpositionen** (в, на, за, под): Bewegung vs. Lage.',
      'Nutzen Sie die Mastertabelle als **Nachschlagewerk**, bis die Paare sitzen.',
    ],
    ctaText: 'Präpositionen in der App üben',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Russische Präpositionen und Fälle: Welcher Fall folgt welcher Präposition?',
      description:
        'Vollständiger Leitfaden: jede russische Präposition und ihr Fall. 44 Präpositionen, Doppelfälle, Vertiefung, Merkstrategien.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
      },
      keywords:
        'russische Präpositionen Fälle, russische Präpositionen Genitiv, в на с по russischer Fall',
    },
    faq: [
      {
        question: 'Welche russischen Präpositionen verlangen den Genitiv?',
        answer:
          'Die wichtigsten: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Merkhilfe **БДИ-УОП-ДК** für die häufigsten.',
      },
      {
        question: 'Unterschied zwischen в + Akkusativ und в + Präpositional?',
        answer:
          '**в + Akkusativ** = **Richtung**: Я иду в школу. **в + Präpositional** = **Ort**: Я в школе. Gleiches gilt für на.',
      },
      {
        question: 'Wann nimmt с den Genitiv, wann den Instrumental?',
        answer:
          '**с + Genitiv** = „von“ (von einer Fläche): книга упала с полки. **с + Instrumental** = „mit“: я иду с другом. Die Bedeutung ist völlig unterschiedlich.',
      },
    ],
};

