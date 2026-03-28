import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie polskie artykułu `russian-prepositions-and-cases` (źródło EN, struktura jak FR). Cyrylica i rosyjskie frazy w wierszach tabel identyczne jak we francuskim pliku. */
export const russianPrepositionsAndCasesPl: LearnArticle = {
  slug: 'russian-prepositions-and-cases',
  title:
    'Rosyjskie przyimki i przypadki: jaki przypadek po którym przyimku?',
  metaTitle:
    'Rosyjskie przyimki i przypadki | Pełny przewodnik referencyjny | Russian Cases with Anna',
  metaDescription:
    'Kompletna ściąga: każdy rosyjski przyimek i wymagany przypadek. Główna tabela 44 przyimków, podwójne przypadki (в/на/за/под), pogłębienie według przypadków, strategie zapamiętywania.',
  keywords: [
    'rosyjskie przyimki przypadki',
    'przyimki rosyjski dopełniacz',
    'lista przyimków rosyjski przypadek',
    'в на с по przypadek rosyjski',
    'przyimki rosyjski biernik przyimkowy',
    'tabela przyimków gramatyka rosyjska',
  ],
  h1: 'Rosyjskie przyimki i przypadki: jaki przypadek po którym przyimku?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Tabela referencyjna rosyjskich przyimków i przypadków',
    width: 1200,
    height: 630,
  },
  intro:
    '**Jedną z najbardziej przydatnych umiejętności** w języku rosyjskim jest znajomość **przypadku wymaganego przez każdy przyimek**. Gdy wiesz, że **без** zawsze rządzi dopełniaczem, **к** zawsze celownikiem, a **с** w zależności od znaczenia przyjmuje dopełniacz **lub** narzędnik — precyzja rośnie skokowo.\n\nOto **pełny przewodnik referencyjny**. Wymieniono każdy ważny rosyjski przyimek z przypadkiem, znaczeniem i autentycznym przykładem. Korzystaj z niego przy wątpliwościach, a z czasem pary przyimek–przypadek staną się automatyczne.',
  whatYouLearn: [
    'Główna tabela: każdy rosyjski przyimek i jego przypadek',
    'Przyimki + dopełniacz (18)',
    'Przyimki + celownik (6)',
    'Przyimki + biernik (8)',
    'Przyimki + narzędnik (7)',
    'Przyimki + miejscownik (5)',
    'Przyimki z podwójnym przypadkiem — dwa przypadki według znaczenia',
    'В vs НА — najważniejsza para miejsce / kierunek',
    'Strategie utrwalania par przyimek–przypadek',
  ],
  leadMagnetCta: {
    title: 'Ćwicz przyimki i przypadki w naszej aplikacji mobilnej',
    description: 'Celowane ćwiczenia na każdą parę przyimek–przypadek — Android i iOS.',
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
      label: 'Końcówki przypadków rosyjskich: ściąga',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Dopełniacz rosyjski: zasady, końcówki i 32 autentyczne przykłady',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Główna tabela: każdy rosyjski przyimek i jego przypadek',
      content:
        'Poniższa tabela wymienia **wszystkie ważne rosyjskie przyimki**, pogrupowane według przypadku. Kolory odpowiadają przypadkom.\n\n**Legenda:** Dopełniacz (granatowy) · Celownik (fioletowy) · Biernik (czerwony) · Narzędnik (morski) · Miejscownik (pomarańczowy).',
      table: {
        caption: '44 rosyjskie przyimki według wymaganego przypadku',
        boldColumnIndices: [0, 1],
        headers: ['Przypadek', 'Przyl.', 'Znaczenie', 'Z rzeczownikiem', 'Pełne zdanie + tłumaczenie'],
        rows: [
            [
              'Dopełniacz',
              'без',
              'bez',
              'без молока',
              'Я пью кофе без молока. — Piję kawę bez mleka.',
            ],
            [
              'Dopełniacz',
              'до',
              'do / przed / najpóźniej',
              'до урока',
              'Позвони мне до урока. — Zadzwoń do mnie przed lekcją.',
            ],
            [
              'Dopełniacz',
              'из',
              'z (z wnętrza)',
              'из России',
              'Она приехала из России. — Przyjechała z Rosji.',
            ],
            [
              'Dopełniacz',
              'с',
              'z (z powierzchni)',
              'с полки',
              'Книга упала с полки. — Książka spadła z półki.',
            ],
            [
              'Dopełniacz',
              'у',
              'u / przy / u (kogoś)',
              'у меня',
              'У меня есть кошка. — Mam kota.',
            ],
            [
              'Dopełniacz',
              'от',
              'od (osoby / źródła)',
              'от друга',
              'Письмо от друга. — List od przyjaciela.',
            ],
            [
              'Dopełniacz',
              'после',
              'po',
              'после работы',
              'После работы я устал. — Po pracy byłem zmęczony.',
            ],
            [
              'Dopełniacz',
              'для',
              'dla (na korzyść)',
              'для тебя',
              'Это подарок для тебя. — To prezent dla ciebie.',
            ],
            [
              'Dopełniacz',
              'кроме',
              'oprócz / poza',
              'кроме меня',
              'Все кроме меня пришли. — Przyszli wszyscy oprócz mnie.',
            ],
            [
              'Dopełniacz',
              'вокруг',
              'wokół',
              'вокруг города',
              'Мы ехали вокруг города. — Objechaliśmy miasto.',
            ],
            [
              'Dopełniacz',
              'мимо',
              'mijając / obok',
              'мимо школы',
              'Он прошёл мимо школы. — Przeszedł obok szkoły.',
            ],
            [
              'Dopełniacz',
              'вместо',
              'zamiast',
              'вместо кофе',
              'Выпей воды вместо кофе. — Wypij wodę zamiast kawy.',
            ],
            [
              'Dopełniacz',
              'напротив',
              'naprzeciwko',
              'напротив банка',
              'Кафе напротив банка. — Kawiarnia jest naprzeciwko banku.',
            ],
            [
              'Dopełniacz',
              'из-за',
              'z powodu / spod',
              'из-за дождя',
              'Из-за дождя мы остались дома. — Z powodu deszczu zostaliśmy w domu.',
            ],
            [
              'Dopełniacz',
              'из-под',
              'spod',
              'из-под стола',
              'Кот вылез из-под стола. — Kot wyszedł spod stołu.',
            ],
            [
              'Dopełniacz',
              'ради',
              'dla (poświęcenie / korzyść)',
              'ради тебя',
              'Ради тебя я на всё готов. — Dla ciebie jestem gotów na wszystko.',
            ],
            [
              'Dopełniacz',
              'около',
              'blisko / koło',
              'около школы',
              'Встретимся около школы. — Spotkajmy się blisko szkoły.',
            ],
            [
              'Dopełniacz',
              'вдоль',
              'wzdłuż',
              'вдоль реки',
              'Мы шли вдоль реки. — Szliśmy wzdłuż rzeki.',
            ],
            [
              'Celownik',
              'к',
              'do / ku (osoba lub cel)',
              'к врачу, к морю',
              'Иди к врачу! — Idź do lekarza!',
            ],
            [
              'Celownik',
              'по',
              'wzdłuż / po / według',
              'по улице, по закону',
              'Мы гуляли по парку. — Spacerowaliśmy po parku.',
            ],
            [
              'Celownik',
              'благодаря',
              'dzięki',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Dzięki tobie wszystko się udało!',
            ],
            [
              'Celownik',
              'вопреки',
              'wbrew',
              'вопреки прогнозу',
              'Вопреки прогнозу, погода была хорошей. — Wbrew prognozie pogoda była dobra.',
            ],
            [
              'Celownik',
              'согласно',
              'według (urzędowo)',
              'согласно закону',
              'Согласно закону, это запрещено. — Według prawa jest to zakazane.',
            ],
            [
              'Celownik',
              'навстречу',
              'naprzeciw / ku',
              'навстречу ветру',
              'Она шла навстречу ветру. — Szła naprzeciw wiatrowi.',
            ],
            [
              'Biernik',
              'в',
              'do / w (kierunek)',
              'в школу',
              'Я иду в школу. — Idę do szkoły.',
            ],
            [
              'Biernik',
              'на',
              'na / w (kierunek)',
              'на работу',
              'Она едет на работу. — Jedzie do pracy.',
            ],
            [
              'Biernik',
              'за',
              'za (ruch) / dla',
              'за угол',
              'Он зашёл за угол. — Skręcił za róg.',
            ],
            [
              'Biernik',
              'под',
              'pod (ruch)',
              'под стол',
              'Кот залез под стол. — Kot wczołgał się pod stół.',
            ],
            [
              'Biernik',
              'через',
              'przez / za (czas)',
              'через час',
              'Приходи через час. — Przyjdź za godzinę.',
            ],
            [
              'Biernik',
              'про',
              'o (potocznie)',
              'про тебя',
              'Он рассказал про тебя. — Opowiadał o tobie.',
            ],
            [
              'Biernik',
              'спустя',
              'po / później (czas)',
              'спустя год',
              'Спустя год он вернулся. — Rok później wrócił.',
            ],
            [
              'Biernik',
              'о/об',
              'o (uderzyć w)',
              'о камень',
              'Он споткнулся о камень. — Potknął się o kamień.',
            ],
            [
              'Narzędnik',
              'с',
              'z / razem z',
              'с другом',
              'Я иду с другом. — Idę z przyjacielem.',
            ],
            [
              'Narzędnik',
              'за',
              'za / przy (położenie)',
              'за столом',
              'Он сидит за столом. — Siedzi przy stole.',
            ],
            [
              'Narzędnik',
              'перед',
              'przed',
              'перед домом',
              'Стой перед домом. — Stań przed domem.',
            ],
            [
              'Narzędnik',
              'над',
              'nad',
              'над городом',
              'Самолёт летит над городом. — Samolot leci nad miastem.',
            ],
            [
              'Narzędnik',
              'под',
              'pod (położenie)',
              'под столом',
              'Книга под столом. — Książka jest pod stołem.',
            ],
            [
              'Narzędnik',
              'между',
              'między',
              'между нами',
              'Это между нами. — To zostaje między nami.',
            ],
            [
              'Narzędnik',
              'рядом с',
              'obok',
              'рядом с банком',
              'Кафе рядом с банком. — Kawiarnia jest obok banku.',
            ],
            [
              'Miejscownik',
              'в',
              'w / wewnątrz (miejsce)',
              'в Москве',
              'Я живу в Москве. — Mieszkam w Moskwie.',
            ],
            [
              'Miejscownik',
              'на',
              'na (miejsce)',
              'на столе',
              'Книга на столе. — Książka leży na stole.',
            ],
            [
              'Miejscownik',
              'о/об',
              'o / dotyczący',
              'о работе',
              'Мы говорим о работе. — Rozmawiamy o pracy.',
            ],
            [
              'Miejscownik',
              'при',
              'za (panowanie) / przy',
              'при Сталине',
              'При Сталине жизнь была трудной. — Za Stalina życie było ciężkie.',
            ],
            [
              'Miejscownik',
              'по',
              'po / przy (formalnie, po przyjeździe)',
              'по приезде',
              'По приезде он позвонил. — Po przyjeździe zadzwonił.',
            ],
        ],
      },
    },
      {
        h2: 'Przyimki z podwójnym przypadkiem: dwa przypadki według znaczenia',
        content:
          'Niektóre rosyjskie przyimki mogą przyjmować **dwa różne przypadki**; znaczenie zależy od przypadku. To **najważniejsze do opanowania**: jeden zły przypadek zmienia sens zdania.',
        table: {
          caption: 'Przyimki z dwoma przypadkami (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Przyl.', 'Przypadek 1', 'Przykład 1', 'Przypadek 2', 'Przykład 2'],
          rows: [
            ['в', 'Biernik', 'в школу (do szkoły, kierunek)', 'Miejscownik', 'в школе (w szkole, miejsce)'],
            ['на', 'Biernik', 'на работу (do pracy, kierunek)', 'Miejscownik', 'на работе (w pracy, miejsce)'],
            [
              'за',
              'Biernik',
              'сесть за стол (usiąść do stołu)',
              'Narzędnik',
              'за столом (siedząc przy stole)',
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
          '**Zasada В/НА kierunek vs. miejsce** — najczęściej sprawdzany schemat podwójnego przypadka:',
          '**В/НА + biernik = KIERUNEK** (ruch dokąd): Я иду в школу. Положи книгу на стол.',
          '**В/НА + miejscownik = MIEJSCE** (być gdzieś, statycznie): Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Przyimki + dopełniacz — pogłębienie',
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
              '**до** — do / przed: до урока, до свидания. **после** — po: после работы, после дождя. **с … до** — od … do: с утра до вечера.',
          },
          {
            h3: 'Przestrzeń: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — u / przy: у окна, у меня. **около** — blisko: около школы, около часа. **вокруг** — wokół: вокруг стола, вокруг города. **вдоль** — wzdłuż: вдоль реки, вдоль дороги. **мимо** — mijać: мимо нас, пройти мимо. **напротив** — naprzeciwko: напротив банка.',
          },
        ],
      },
      {
        h2: 'Przyimki + celownik — pogłębienie',
        subsections: [
          {
            h3: 'К — kierunek ku',
            content:
              "**К** wyraża ruch lub zorientowanie ku osobie, przedmiotowi lub abstrakcyjnemu celowi — **odpowiednik celownika** dla в/на w znaczeniu kierunku: к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — wieloznaczny przyimek',
            content:
              '**Wzdłuż / po** powierzchni: гулять по парку, идти по улице. **Środek komunikacji:** по телефону, по почте, по интернету. **Przedmiot:** урок по математике, книга по истории. **Czas powtarzalny:** по понедельникам, по вечерам. **Według:** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Przyimki + biernik — pogłębienie',
        subsections: [
          {
            h3: 'В i НА dla kierunku',
            content:
              '**В** i **на** to główne przyimki **biernika kierunku**. **В** = ruch do zamkniętej przestrzeni: в школу, в Россию, в магазин. **НА** = na powierzchnię lub określone miejsca: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — przez / za (czas)',
            content:
              '**Przez:** переплыть через реку, пройти через лес. **Za (czas):** через час, через неделю, через год.',
          },
          {
            h3: 'ЗА i ПОД dla ruchu',
            content:
              '**За + biernik** = ruch za: зайти за угол, сесть за стол. **Под + biernik** = ruch pod: положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Przyimki + narzędnik — pogłębienie',
        subsections: [
          {
            h3: 'С — z',
            content:
              '**С + narzędnik** jest bardzo częsty. **Towarzystwo:** с другом, с семьёй. **Składniki:** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Przyimki położenia w przestrzeni',
            content:
              '**За + narzędnik** = za / przy: за столом, за горой. **Перед + narzędnik** = przed: перед домом, перед сном. **Над + narzędnik** = nad: над городом, над столом. **Под + narzędnik** = pod: под столом, под землёй. **Между + narzędnik** = między: между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Przyimki + miejscownik — pogłębienie',
        subsections: [
          {
            h3: 'В i НА dla miejsca',
            content:
              '**В** i **на** w miejscowniku = **miejsce statyczne** — gdzie coś już jest: **В** : в Москве, в школе, в доме, в России. **НА** : на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — o',
            content:
              '**О + miejscownik** = temat myśli lub mowy: говорить о, думать о, мечтать о, писать о. **О чём ?** | **О ком ?** **об** przed samogłoską: об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Strategie zapamiętywania: przyimek + przypadek',
        subsections: [
          {
            h3: 'Strategia 1: ucz się w grupach przypadków',
            content:
              "Zamiast pojedynczych przyimków ucz się **pakietów według przypadku**. Zacznij od bloku dopełniacza (без, до, из, у, от, после, для, кроме) do automatyzmu, potem celownik (к, по).",
          },
          {
            h3: 'Strategia 2: jedno zapadające w pamięć zdanie na przyimek',
            content:
              'Dla każdego przyimka stwórz **własne poprawne zdanie**. Без тебя мне плохо zostanie dłużej niż „без + rzeczownik”.',
          },
          {
            h3: 'Strategia 3: priorytet dla podwójnych przypadków',
            content:
              '**В, на, за**, **под** : każdy po dwa przypadki. **Zdania bliźniacze** : Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Strategia 4: test „Gdzie?” vs. „Dokąd?”',
            content:
              'Dla **в** i **на**: czy to **„Gdzie?”** (miejscownik) czy **„Dokąd?”** (biernik)?',
          },
        ],
      },
    ],
    conclusion:
      'Opanowanie **przyimków i przypadków** to szybka dźwignia precyzji. Kluczem jest **para przyimek → przypadek** : без → dopełniacz, к → celownik itd.\\n\\nZacznij od **podwójnych przypadków** (в, на, за, под). Test **„Gdzie?” / „Dokąd?”** dla в/на. Autentyczne zdania — a pary staną się automatyczne.',
    conclusionBullets: [
      '**Dopełniacz** ma najwięcej przyimków (18) — blok без, до, из, у, от, после, для, кроме.',
      '**В/НА + biernik** = kierunek. **В/НА + miejscownik** = miejsce.',
      '**Podwójne przypadki** (в, на, за, под): ruch vs. położenie.',
      'Używaj głównej tabeli jako **ściągi** do automatyzmu.',
    ],
    ctaText: 'Ćwicz przyimki w aplikacji',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rosyjskie przyimki i przypadki: jaki przypadek po którym przyimku?',
      description:
        'Pełny przewodnik: każdy rosyjski przyimek i przypadek. 44 przyimki, podwójne przypadki, pogłębienie, zapamiętywanie.',
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
        'rosyjskie przyimki przypadki, przyimki dopełniacz rosyjski, в на с по przypadek rosyjski',
    },
    faq: [
      {
        question: 'Które rosyjskie przyimki rządzą dopełniaczem?',
        answer:
          'Główne: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. Mnemonik **БДИ-УОП-ДК** dla najczęstszych.',
      },
      {
        question: 'Różnica między в + biernik a в + miejscownik?',
        answer:
          '**в + biernik** = **kierunek** : Я иду в школу. **в + miejscownik** = **miejsce** : Я в школе. To samo dla на.',
      },
      {
        question: 'Kiedy с przyjmuje dopełniacz, a kiedy narzędnik?',
        answer:
          '**с + dopełniacz** = „z” (powierzchni): книга упала с полки. **с + narzędnik** = „z” (towarzystwo): я иду с другом. Zupełnie inne znaczenie.',
      },
    ],
};
