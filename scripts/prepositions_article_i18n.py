# Données i18n pour scripts/_gen_prepositions_article.py (REST + en-têtes d’article par langue)

REST_DE = r'''
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
'''

REST_TR = r'''
      {
        h2: 'İki halli edatlar: anlam hale göre değişir',
        content:
          'Bazı Rus edatları **iki farklı hal** alabilir; anlam hale bağlıdır. Bunlar **öğrenmesi en kritik** edatlardır — yanlış bir hal cümlenin anlamını değiştirir.',
        table: {
          caption: 'İki hal alan edatlar (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Edat', 'Hal 1', 'Örnek 1', 'Hal 2', 'Örnek 2'],
          rows: [
            ['в', 'Belirtme', 'в школу (okula, yön)', 'Bulunma', 'в школе (okulda, yer)'],
            ['на', 'Belirtme', 'на работу (işe, yön)', 'Bulunma', 'на работе (işte, yer)'],
            [
              'за',
              'Belirtme',
              'сесть за стол (masaya oturmak)',
              'Araç hali',
              'за столом (masada oturuyor)',
            ],
            [
              'под',
              'Belirtme',
              'положить под стол (masanın altına koymak)',
              'Araç hali',
              'под столом (masanın altında)',
            ],
            [
              'о/об',
              'Belirtme',
              'споткнуться о порог (eşiğe takılmak)',
              'Bulunma',
              'говорить о работе (iş hakkında konuşmak)',
            ],
          ],
        },
        bullets: [
          '**В/НА yön vs. yer kuralı** — en sık sorulan çift hal deseni:',
          '**В/НА + belirtme = YÖN** (bir yere doğru hareket): Я иду в школу. Положи книгу на стол.',
          '**В/НА + bulunma = YER** (statik, bir yerde olmak): Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Genitif + edatlar — derinlemesine',
        content:
          '**Genitif**, diğer tüm hallerden daha fazla edat alır. En önemlileri anlama göre gruplandı.',
        subsections: [
          {
            h3: 'Köken ve ayrılma: из, с, от',
            content:
              '**из** — bir yerin içinden: из России, из дома, из школы. **с** — yüzeyden: с полки, с работы (konuşma), с крыши. **от** — kişi veya kaynak: от друга, от врача, от боли. **Ayrım:** из vs. от — **из** yerler için; **от** kişiler ve kaynaklar için. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Zaman: до, после, с (…до)',
            content:
              '**до** — kadar / önce: до урока, до свидания. **после** — sonra: после работы, после дождя. **с … до** — …-den …-e kadar: с утра до вечера.',
          },
          {
            h3: 'Mekân: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — yanında / bende: у окна, у меня. **около** — yakın: около школы, около часа. **вокруг** — etrafında: вокруг стола, вокруг города. **вдоль** — boyunca: вдоль реки, вдоль дороги. **мимо** — yanından: мимо нас, пройти мимо. **напротив** — karşısında: напротив банка.',
          },
        ],
      },
      {
        h2: 'Datif + edatlar — derinlemesine',
        subsections: [
          {
            h3: 'К — yönelme',
            content:
              "**К**, bir kişiye, nesneye veya soyut hedefe **doğru hareket veya yönelim** ifade eder — yön için в/на’nın **datif karşılığıdır**: к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — çok amaçlı edat',
            content:
              '**Boyunca / üzerinde** bir yüzey: гулять по парку, идти по улице. **İletişim:** по телефону, по почте, по интернету. **Alan:** урок по математике, книга по истории. **Tekrarlayan zaman:** по понедельникам, по вечерам. **Göre:** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Belirtme + edatlar — derinlemesine',
        subsections: [
          {
            h3: 'Yön için В ve НА',
            content:
              '**В** ve **на**, **yön belirtmesinin** başlıca edatlarıdır. **В** = kapalı alana doğru: в школу, в Россию, в магазин. **НА** = yüzeye veya belirli yerlere: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — karşıdan / içinden (zaman)',
            content:
              '**Karşıdan:** переплыть через реку, пройти через лес. **Zamanda:** через час, через неделю, через год.',
          },
          {
            h3: 'Hareket için ЗА ve ПОД',
            content:
              '**За + belirtme** = arkaya doğru: зайти за угол, сесть за стол. **Под + belirtme** = altına doğru: положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Araç hali + edatlar — derinlemesine',
        subsections: [
          {
            h3: 'С — ile',
            content:
              '**С + araç hali** çok sıktır. **Birliktelik:** с другом, с семьёй. **İçerik:** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Mekânsal konum edatları',
            content:
              '**За + araç hali** = arkasında / -de: за столом, за горой. **Перед + araç hali** = önünde: перед домом, перед сном. **Над + araç hali** = üzerinde: над городом, над столом. **Под + araç hali** = altında (konum): под столом, под землёй. **Между + araç hali** = arasında: между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Bulunma + edatlar — derinlemesine',
        subsections: [
          {
            h3: 'Yer için В ve НА',
            content:
              '**В** ve **на** bulunma halinde **statik yer** anlatır — bir şeyin zaten nerede olduğu: **В**: в Москве, в школе, в доме, в России. **НА**: на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — hakkında',
            content:
              '**О + bulunma** düşünce veya konuşma konusu: говорить о, думать о, мечтать о, писать о. **О чём?** | **О ком?** Ünlü öncesi **об**: об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Edat + hal ezberleme stratejileri',
        subsections: [
          {
            h3: 'Strateji 1: Hal gruplarıyla öğrenin',
            content:
              "Tek tek edat yerine **hal küme**leri öğrenin. Önce genitif bloğunu (без, до, из, у, от, после, для, кроме) otomatikleşene kadar çalışın, sonra datif (к, по).",
          },
          {
            h3: 'Strateji 2: Her edat için akılda kalıcı cümle',
            content:
              'Her edat için **doğru kişisel bir cümle** yazın. Без тебя мне плохо, „без + isim“den daha uzun kalır.',
          },
          {
            h3: 'Strateji 3: Çift halli edatlara öncelik',
            content:
              '**В, на, за**, **под**: her biri iki hal. **Çift cümleler**: Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Strateji 4: „Nerede?“ vs. „Nereye?“ testi',
            content:
              '**в** ve **на** için: cevap **„Nerede?“** (bulunma) mi **„Nereye?“** (belirtme) mi?',
          },
        ],
      },
    ],
    conclusion:
      '**Edatları ve halleri** bilmek doğruluğu hızla artırır. Anahtar **edat → hal çifti**: без → genitif, к → datif vb.\\n\\nÖnce **çift halli edatlarla** (в, на, за, под) başlayın. в/на için **„Nerede?“ / „Nereye?“** testini kullanın. Gerçek cümlelerle pratik yapın — çiftler otomatikleşir.',
    conclusionBullets: [
      '**Genitif** en çok edat alır (18) — без, до, из, у, от, после, для, кроме kümesi.',
      '**В/НА + belirtme** = yön. **В/НА + bulunma** = yer.',
      '**Çift halli edatlar** (в, на, за, под): hareket vs. konum.',
      'Çiftler otomatikleşene kadar mastertabloda **başvuru** olarak kullanın.',
    ],
    ctaText: 'Uygulamada edatları çalışın',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rusça edatlar ve haller: Her edattan sonra hangi hal?',
      description:
        'Tam rehber: her Rus edatı ve hali. 44 edat, çift hal kuralları, derinlemesine bölümler, ezber stratejileri.',
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
        'rusça edat haller, rusça genitif edatlar, в на с по rusça hal',
    },
    faq: [
      {
        question: 'Hangi Rus edatları genitif alır?',
        answer:
          'Başlıcaları: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Sık olanlar için **БДИ-УОП-ДК** kısaltması.',
      },
      {
        question: 'в + belirtme ile в + bulunma farkı nedir?',
        answer:
          '**в + belirtme** = **yön**: Я иду в школу. **в + bulunma** = **yer**: Я в школе. **на** için de aynı.',
      },
      {
        question: 'с ne zaman genitif, ne zaman araç hali alır?',
        answer:
          '**с + genitif** = „-den“ (yüzeyden): книга упала с полки. **с + araç hali** = „ile“: я иду с другом. Anlam tamamen farklıdır.',
      },
    ],
};
'''

REST_PL = r'''
      {
        h2: 'Przyimki z dwoma przypadkami: znaczenie zależy od przypadku',
        content:
          'Niektóre rosyjskie przyimki mogą wymagać **dwóch różnych przypadków**; znaczenie zmienia się wraz z przypadkiem. To **najważniejsze do opanowania** — jeden zły przypadek zmienia sens zdania.',
        table: {
          caption: 'Przyimki z dwoma przypadkami (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Przyim.', 'Przypadek 1', 'Przykład 1', 'Przypadek 2', 'Przykład 2'],
          rows: [
            ['в', 'Biernik', 'в школу (do szkoły, kierunek)', 'Miejscownik', 'в школе (w szkole, miejsce)'],
            ['на', 'Biernik', 'на работу (do pracy, kierunek)', 'Miejscownik', 'на работе (w pracy, miejsce)'],
            [
              'за',
              'Biernik',
              'сесть за стол (usiąść do stołu)',
              'Narzędnik',
              'за столом (przy stole, siedzi)',
            ],
            [
              'под',
              'Biernik',
              'положить под стол (położyć pod stół)',
              'Narzędnik',
              'под столом (pod stołem)',
            ],
            [
              'о/об',
              'Biernik',
              'споткнуться о порог (potknąć się o próg)',
              'Miejscownik',
              'говорить о работе (mówić o pracy)',
            ],
          ],
        },
        bullets: [
          '**Zasada В/НА kierunek vs. miejsce** — najczęściej sprawdzany wzorzec podwójnego przypadku:',
          '**В/НА + biernik = KIERUNEK** (ruch dokądś): Я иду в школу. Положи книгу на стол.',
          '**В/НА + miejscownik = MIEJSCE** (statycznie, być gdzieś): Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Przyimki z dopełniaczem — pogłębienie',
        content:
          '**Dopełniacz** ma więcej przyimków niż którykolwiek inny przypadek. Oto najważniejsze pogrupowane według znaczenia.',
        subsections: [
          {
            h3: 'Pochodzenie i oddzielenie: из, с, от',
            content:
              '**из** — z wnętrza miejsca: из России, из дома, из школы. **с** — z (powierzchni): с полки, с работы (pot.), с крыши. **от** — od (osoby lub źródła): от друга, от врача, от боли. **Różnica:** из vs. от — **из** dla miejsc (wnętrze); **от** dla osób i źródeł. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Czas: до, после, с (…до)',
            content:
              '**до** — aż do / przed: до урока, до свидания. **после** — po: после работы, после дождя. **с … до** — od … do: с утра до вечера.',
          },
          {
            h3: 'Przestrzeń: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — przy / u: у окна, у меня. **около** — blisko: около школы, около часа. **вокруг** — wokół: вокруг стола, вокруг города. **вдоль** — wzdłuż: вдоль реки, вдоль дороги. **мимо** — mimo / obok: мимо нас, пройти мимо. **напротив** — naprzeciwko: напротив банка.',
          },
        ],
      },
      {
        h2: 'Przyimki z celownikiem — pogłębienie',
        subsections: [
          {
            h3: 'К — kierunek ku',
            content:
              "**К** wyraża ruch lub zorientowanie ku osobie, przedmiotowi lub abstrakcyjnemu celowi — **odpowiednik celownikowy** в/на dla kierunku: к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — przyimek wieloznaczny',
            content:
              '**Wzdłuż / po** powierzchni: гулять по парку, идти по улице. **Środek komunikacji:** по телефону, по почте, по интернету. **Przedmiot:** урок по математике, книга по истории. **Czas powtarzalny:** по понедельникам, по вечерам. **Według:** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Przyimki z biernikiem — pogłębienie',
        subsections: [
          {
            h3: 'В i НА dla kierunku',
            content:
              '**В** i **на** to główne przyimki **biernika kierunku**. **В** = ruch do zamkniętej przestrzeni: в школу, в Россию, в магазин. **НА** = na powierzchnię lub określone miejsca: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — przez / w (czasie)',
            content:
              '**Przez:** переплыть через реку, пройти через лес. **W czasie:** через час, через неделю, через год.',
          },
          {
            h3: 'ЗА i ПОД dla ruchu',
            content:
              '**За + biernik** = ruch za: зайти за угол, сесть за стол. **Под + biernik** = ruch pod: положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Przyimki z narzędnikiem — pogłębienie',
        subsections: [
          {
            h3: 'С — z',
            content:
              '**С + narzędnik** jest bardzo częsty. **Towarzystwo:** с другом, с семьёй. **Składniki:** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Przyimki położenia w przestrzeni',
            content:
              '**За + narzędnik** = za / przy: за столом, за горой. **Перед + narzędnik** = przed: перед домом, перед сном. **Над + narzędnik** = nad: над городом, над столом. **Под + narzędnik** = pod (położenie): под столом, под землёй. **Между + narzędnik** = między: между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Przyimki z miejscownikiem — pogłębienie',
        subsections: [
          {
            h3: 'В i НА dla miejsca',
            content:
              '**В** i **на** w miejscowniku wyrażają **statyczne miejsce** — gdzie coś już jest: **В**: в Москве, в школе, в доме, в России. **НА**: на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — o',
            content:
              '**О + miejscownik** = temat myśli lub wypowiedzi: говорить о, думать о, мечтать о, писать о. **О чём?** | **О ком?** **об** przed samogłoską: об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Strategie zapamiętywania przyimek i przypadków',
        subsections: [
          {
            h3: 'Strategia 1: Ucz się grupami przypadków',
            content:
              "Zamiast pojedynczych przyimków ucz się **pakietów według przypadku**. Zacznij od bloku dopełniacza (без, до, из, у, от, после, для, кроме) aż do automatyzmu, potem celownik (к, по).",
          },
          {
            h3: 'Strategia 2: Jedno zapadające zdanie na przyimek',
            content:
              'Dla każdego przyimka wymyśl **własne poprawne zdanie**. Без тебя мне плохо zostanie dłużej niż „без + rzeczownik“.',
          },
          {
            h3: 'Strategia 3: Priorytet dla podwójnych przypadków',
            content:
              '**В, на, за**, **под**: każdy ma dwa przypadki. **Pary zdań**: Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Strategia 4: Test „Gdzie?“ vs. „Dokąd?“',
            content:
              'Dla **в** i **на**: czy odpowiedź to **„Gdzie?“** (miejscownik) czy **„Dokąd?“** (biernik)?',
          },
        ],
      },
    ],
    conclusion:
      'Opanowanie **przyimków i przypadków** szybko podnosi precyzję. Kluczem jest **para przyimek → przypadek**: без → dopełniacz, к → celownik itd.\\n\\nZacznij od **przyimków z dwoma przypadkami** (в, на, за, под). Używaj testu **„Gdzie?“ / „Dokąd?“** dla в/на. Ćwicz prawdziwymi zdaniami — pary staną się automatyczne.',
    conclusionBullets: [
      '**Dopełniacz** ma najwięcej przyimków (18) — blok без, до, из, у, от, после, для, кроме.',
      '**В/НА + biernik** = kierunek. **В/НА + miejscownik** = miejsce.',
      '**Przyimki podwójne** (в, на, за, под): ruch vs. położenie.',
      'Używaj tabeli głównej jako **ściągi**, aż pary wejdą w nawyk.',
    ],
    ctaText: 'Ćwicz przyimki w aplikacji',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rosyjskie przyimki i przypadki: Który przypadek po którym przyimku?',
      description:
        'Pełny przewodnik: każdy rosyjski przyimek i jego przypadek. 44 przyimki, zasady podwójnych przypadków, pogłębienie, strategie pamięciowe.',
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
        'rosyjskie przyimki przypadki, przyimki z dopełniaczem, в на с по przypadek',
    },
    faq: [
      {
        question: 'Które rosyjskie przyimki wymagają dopełniacza?',
        answer:
          'Główne: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Mnemonik **БДИ-УОП-ДК** dla najczęstszych.',
      },
      {
        question: 'Różnica między в + biernik a в + miejscownik?',
        answer:
          '**в + biernik** = **kierunek**: Я иду в школу. **в + miejscownik** = **miejsce**: Я в школе. To samo dla на.',
      },
      {
        question: 'Kiedy с łączy się z dopełniaczem, a kiedy z narzędnikiem?',
        answer:
          '**с + dopełniacz** = „z“ (z powierzchni): книга упала с полки. **с + narzędnik** = „z“ (towarzystwo): я иду с другом. Znaczenie jest zupełnie inne.',
      },
    ],
};
'''

# Szablony: __HEADER_LINE__ i __ROWS__ są wstawiane w generatorze.

BODY_FR = """  title:
    'Prépositions et cas en russe : quel cas après chaque préposition ?',
  metaTitle:
    'Prépositions et cas en russe | Guide de référence complet | Russian Cases with Anna',
  metaDescription:
    'La référence complète : chaque préposition russe et le cas qu\\'elle exige. Tableau maître de 44 prépositions, règles doubles (в/на/за/под), approfondissement par cas, stratégies de mémorisation.',
  keywords: [
    'prépositions cas russe',
    'prépositions russe génitif',
    'liste prépositions russe cas',
    'в на с по cas russe',
    'prépositions russe accusatif prépositionnel',
    'tableau prépositions grammaire russe',
  ],
  h1: 'Prépositions et cas en russe : quel cas après chaque préposition ?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Tableau de référence des prépositions russes et des cas',
    width: 1200,
    height: 630,
  },
  intro:
    'L\\'une des **compétences les plus utiles** en russe est de savoir **quel cas exige chaque préposition**. Quand vous savez que **без** régit toujours le génitif, que **к** régit toujours le datif, et que **с** peut prendre le génitif **ou** l\\'instrumental selon le sens — votre précision grimpe en flèche.\\n\\nVoici le **guide de référence complet**. Chaque grande préposition russe est listée avec son cas, son sens et un exemple authentique. Servez-vous-en pour vérifier quand vous hésitez, et peu à peu les paires préposition–cas deviendront automatiques.',
  whatYouLearn: [
    'Tableau maître : chaque préposition russe et son cas',
    'Prépositions + génitif (18)',
    'Prépositions + datif (6)',
    'Prépositions + accusatif (8)',
    'Prépositions + instrumental (7)',
    'Prépositions + prépositionnel (5)',
    'Prépositions à double cas — deux cas selon le sens',
    'В vs НА — la paire lieu / direction la plus importante',
    'Stratégies pour ancrer les paires préposition–cas',
  ],
  leadMagnetCta: {
    title: 'Entraînez prépositions et cas avec notre appli mobile',
    description: 'Exercices ciblés pour chaque paire préposition–cas — Android et iOS.',
    ctaText: 'Télécharger l\\'appli',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Guide complet des cas russes : les 6 cas expliqués avec des exemples',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Terminaisons des cas russes : l\\'aide-mémoire ultime',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Cas génitif russe : règles, terminaisons et 32 exemples réels',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Tableau maître : chaque préposition russe et son cas',
      content:
        'Le tableau ci-dessous liste **toutes les grandes prépositions russes**, classées par cas. Code couleur par cas.\\n\\n**Légende :** Génitif (bleu marine) · Datif (violet) · Accusatif (rouge) · Instrumental (sarcelle) · Prépositionnel (orange).',
      table: {
        caption: '44 prépositions russes selon le cas requis',
        boldColumnIndices: [0, 1],
__HEADER_LINE__
        rows: [
__ROWS__
        ],
      },
    },
"""

BODY_DE = """  title:
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
    'Eine der **nützlichsten Fähigkeiten** im Russischen ist zu wissen, **welchen Fall jede Präposition verlangt**. Sobald Sie wissen, dass **без** immer den Genitiv nimmt, **к** immer den Dativ, und **с** je nach Bedeutung Genitiv ODER Instrumental — steigt Ihre Genauigkeit stark.\\n\\nDas ist der **vollständige Referenzleitfaden**. Jede wichtige russische Präposition steht mit ihrem Fall, ihrer Bedeutung und einem echten Beispiel. Nutzen Sie ihn zum Nachschlagen, und nach und nach werden die Paare automatisch.',
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
        'Die Tabelle listet **alle wichtigen russischen Präpositionen**, geordnet nach dem verlangten Fall. Farbcodierung pro Fall.\\n\\n**Legende:** Genitiv (Navy) · Dativ (Violett) · Akkusativ (Rot) · Instrumental (Petrol) · Präpositional (Orange).',
      table: {
        caption: '44 russische Präpositionen nach verlangtem Fall',
        boldColumnIndices: [0, 1],
__HEADER_LINE__
        rows: [
__ROWS__
        ],
      },
    },
"""

BODY_TR = """  title:
    'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
  metaTitle:
    'Rusça edatlar ve haller | Tam başvuru rehberi | Russian Cases with Anna',
  metaDescription:
    'Tam referans: her Rus edatı ve gerektirdiği hal. 44 edatlı ana tablo, çift hal kuralları (в/на/за/под), hale göre derinlemesine bölümler, ezber stratejileri.',
  keywords: [
    'rusça edat haller',
    'rusça genitif edatlar',
    'rusça edat listesi haller',
    'в на с по rusça hal',
    'rusça belirtme bulunma edatları',
    'rusça gramer edat tablosu',
  ],
  h1: 'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Rusça edat ve dilbilgisi halleri başvuru tablosu',
    width: 1200,
    height: 630,
  },
  intro:
    'Rusçada **en pratik becerilerden biri**, her edatın **hangi hal** gerektirdiğini bilmektir. **без**in her zaman genitif, **к**nin her zaman datif, **с**nin anlama göre genitif VEYA araç hali aldığını bildiğinizde — doğruluğunuz hızla artar.\\n\\nBu **tam başvuru rehberidir**. Her önemli Rus edatı gerekli hali, anlamı ve gerçek bir örnekle listelenir. Emin olmadığınızda başvurun; zamanla çiftler otomatikleşir.',
  whatYouLearn: [
    'Ana tablo: her Rus edatı ve hali',
    'Genitif + edatlar (18)',
    'Datif + edatlar (6)',
    'Belirtme + edatlar (8)',
    'Araç hali + edatlar (7)',
    'Bulunma + edatlar (5)',
    'İki farklı hal alan edatlar — anlama göre',
    'В ve НА — en önemli yer / yön çifti',
    'Edat-hal çiftlerini pekiştirme stratejileri',
  ],
  leadMagnetCta: {
    title: 'Mobil uygulamamızla Rusça edat ve halleri çalışın',
    description: 'Her edat-hal çifti için hedeflenmiş alıştırmalar — Android ve iOS.',
    ctaText: 'Uygulamayı indir',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus hallerine tam giriş: Örneklerle 6 halin tamamı',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça hal sonları: Nihai kopya kağıdı',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Rusça genitif: Kurallar, sonlar ve 32 gerçek örnek',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Ana tablo: Her Rus edatı ve hali',
      content:
        'Aşağıdaki tablo **tüm önemli Rus edatlarını**, gerektirdikleri hale göre listeler. Hale göre renk kodlu.\\n\\n**Renk anahtarı:** Genitif (lacivert) · Datif (mor) · Belirtme (kırmızı) · Araç hali (petrol mavisi) · Bulunma (turuncu).',
      table: {
        caption: 'Gerektirilen hale göre 44 Rus edatı',
        boldColumnIndices: [0, 1],
__HEADER_LINE__
        rows: [
__ROWS__
        ],
      },
    },
"""

BODY_PL = """  title:
    'Rosyjskie przyimki i przypadki: Który przypadek po którym przyimku?',
  metaTitle:
    'Rosyjskie przyimki i przypadki | Pełny przewodnik | Russian Cases with Anna',
  metaDescription:
    'Pełna referencja: każdy rosyjski przyimek i wymagany przypadek. Główna tabela 44 przyimków, zasady podwójnych przypadków (в/на/за/под), pogłębienie według przypadku, strategie pamięciowe.',
  keywords: [
    'rosyjskie przyimki przypadki',
    'rosyjskie przyimki dopełniacz',
    'lista przyimków rosyjski przypadki',
    'в на с по przypadek rosyjski',
    'rosyjski biernik miejscownik przyimki',
    'tabela przyimków gramatyka rosyjska',
  ],
  h1: 'Rosyjskie przyimki i przypadki: Który przypadek po którym przyimku?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Tabela odniesienia rosyjskich przyimków i przypadków',
    width: 1200,
    height: 630,
  },
  intro:
    'Jedną z **najpraktyczniejszych umiejętności** w języku rosyjskim jest znajomość **tego, jakiego przypadka wymaga każdy przyimek**. Gdy wiesz, że **без** zawsze łączy się z dopełniaczem, **к** zawsze z celownikiem, a **с** w zależności od znaczenia z dopełniaczem LUB narzędnikiem — twoja poprawność rośnie gwałtownie.\\n\\nTo **pełny przewodnik referencyjny**. Każdy ważny rosyjski przyimek jest wymieniony z wymaganym przypadkiem, znaczeniem i prawdziwym przykładem. Korzystaj z niego przy wątpliwościach, a z czasem pary staną się automatyczne.',
  whatYouLearn: [
    'Pełna tabela: każdy rosyjski przyimek i jego przypadek',
    'Przyimki + dopełniacz (18)',
    'Przyimki + celownik (6)',
    'Przyimki + biernik (8)',
    'Przyimki + narzędnik (7)',
    'Przyimki + miejscownik (5)',
    'Przyimki z dwoma przypadkami — zależnie od znaczenia',
    'В a НА — najważniejsza para miejsce / kierunek',
    'Strategie utrwalania par przyimek–przypadek',
  ],
  leadMagnetCta: {
    title: 'Ćwicz rosyjskie przyimki i przypadki w naszej aplikacji',
    description: 'Ćwiczenia ukierunkowane na każdą parę przyimek–przypadek — Android i iOS.',
    ctaText: 'Pobierz aplikację',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Pełny przewodnik po rosyjskich przypadkach: wszystkie 6 przypadków z przykładami',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Końcówki przypadków w języku rosyjskim: ściąga',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Rosyjski dopełniacz: zasady, końcówki i 32 prawdziwe przykłady',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Tabela główna: Każdy rosyjski przyimek i jego przypadek',
      content:
        'Poniższa tabela wymienia **wszystkie ważne rosyjskie przyimki**, uporządkowane według wymaganego przypadku. Kod kolorów według przypadku.\\n\\n**Legenda:** Dopełniacz (granat) · Celownik (fiolet) · Biernik (czerwony) · Narzędnik (morski) · Miejscownik (pomarańczowy).',
      table: {
        caption: '44 rosyjskie przyimki według wymaganego przypadku',
        boldColumnIndices: [0, 1],
__HEADER_LINE__
        rows: [
__ROWS__
        ],
      },
    },
"""

BODY_BLOCKS = {
    "fr": BODY_FR,
    "de": BODY_DE,
    "tr": BODY_TR,
    "pl": BODY_PL,
}
