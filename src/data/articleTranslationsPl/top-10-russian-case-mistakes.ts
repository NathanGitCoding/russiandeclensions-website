import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie polskie artykułu `top-10-russian-case-mistakes` (źródło EN: `learnArticles.ts`). Cyrylica przykładów zachowana znak po znaku. */
export const top10RussianCaseMistakesPl: LearnArticle = {
  slug: 'top-10-russian-case-mistakes',
  title:
    'Top 10 błędów przy rosyjskich przypadkach u osób mówiących po angielsku (i jak je naprawić)',
  metaTitle:
    'Top 10 błędów przypadków rosyjskich (anglojęzyczni) | Popraw gramatykę | Russian Cases with Anna',
  metaDescription:
    '10 najczęstszych błędów przypadkowych u anglojęzycznych uczących się — zdiagnozowane i naprawione. Źle vs dobrze, dlaczego powstaje każdy błąd i jak unikać go na stałe.',
  keywords: [
    'błędy przypadków rosyjskich',
    'błędy gramatyki rosyjskiej anglojęzyczni',
    'dlaczego rosyjskie przypadki trudne',
    'rosyjskie przypadki mylące',
    'powszechne błędy gramatyki rosyjskiej',
  ],
  h1: 'Top 10 błędów przy rosyjskich przypadkach u osób mówiących po angielsku (i jak je naprawić)',
  heroImage: {
    src: '/articles/top-russian-case-errors-and-mistakes-by-english-speakers.webp',
    alt:
      'Najczęstsze błędy przypadków w rosyjskim u osób mówiących po angielsku',
    width: 1200,
    height: 630,
  },
  intro:
    'Najczęstsze błędy gramatyki rosyjskiej — zdiagnozowane i naprawione. Artykuł zbiera **10 najczęstszych błędów przypadkowych** u anglojęzycznych uczących się — udokumentowane na podstawie tysięcy interakcji, forów i ćwiczeń.\n\nKażdy błąd jest pokazany ze złą formą, dobrą formą i jasnym wyjaśnieniem **dlaczego** powstaje i **jak** unikać go na stałe. Użyj jako listy kontrolnej diagnostycznej — ile z nich popełniasz?',
  whatYouLearn: [
    '**10 najczęstszych błędów przypadkowych** ze złymi i dobrymi przykładami',
    'Dlaczego powstaje każdy błąd (analiza przyczyn)',
    'Jak na stałe naprawić każdy błąd',
    'Szybka tabela wszystkich 10 błędów',
    '**5 praktycznych strategii**, żeby przestać je robić',
    'Samodzielny test poziomu',
  ],
  tableAccentVariant: 'orange',
  leadMagnetCta: {
    title: 'Napraw błędy przypadków ukierunkowanymi drillami',
    description:
      'Nasza aplikacja mobilna wykrywa twoje słabe punkty i ćwiczy je do opanowania. Inteligentne zadania, powtórzenia rozłożone w czasie — Android i iOS.',
    ctaText: 'Pobierz aplikację i zacznij ćwiczyć już dziś',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Kompletny przewodnik po rosyjskich przypadkach: 6 przypadków z przykładami',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Końcówki przypadków rosyjskich: ściąga',
    },
    {
      href: '/learn/articles/how-to-practice-russian-cases',
      label: 'Jak ćwiczyć rosyjskie przypadki: 5 sprawdzonych metod',
    },
  ],
  sections: [
    {
      h2: 'Dlaczego anglojęzyczni mają trudności z rosyjskimi przypadkami',
      content:
        'Zanim przejdziemy do błędów, warto zrozumieć, dlaczego rosyjskie przypadki są tak trudne **dla osób mówiących po angielsku**:',
      bullets: [
        '**Angielski prawie się nie odmienia** — rolę gramatyczną sygnalizuje szyk wyrazów (nie końcówki). Rosyjski używa obu.',
        '**Anglojęzyczni nie mają intuicji** „jaki przypadek?” — trzeba ją budować od zera.',
        '**Rosyjski ma 6 przypadków**, a każdy rzeczownik, przymiotnik, zaimek i liczebnik się odmienia. To mnóstwo form.',
        '**Niektóre konstrukcje rosyjskie** są pojęciowo odwrócone względem angielskiego (jak **нравиться** — „podobać się/lubić”).',
        '**Rozróżnienie ożywione/nieożywione** w bierniku nie ma odpowiednika w angielskim.',
      ],
    },
    {
      h2: '10 najczęstszych błędów przypadkowych',
      content:
        'Zrozumienie tych przyczyn pomaga. Teraz 10 konkretnych błędów, które z nich wynikają.',
      mistakeCards: [
        {
          title: 'BŁĄD #1: mianownik po НЕТ',
          wrong: 'Нет кот. | У меня нет машина. | Здесь нет сахар.',
          correct: 'Нет кота. | У меня нет машины. | Здесь нет сахара.',
          why: 'Wydrilluj jako stałą regułę: **нет = „brak X” = zawsze dopełniacz**. Za każdym razem.',
          fix: 'Rosyjski dopełniacz — zastosowanie 2 (brak i negacja)',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'BŁĄD #2: mianownik jako dopełnienie bezpośrednie',
          wrong: 'Я вижу кот. | Я читаю книга. | Она любит музыка.',
          correct: 'Я вижу кота. | Я читаю книгу. | Она любит музыку.',
          why: 'Przy czasowniku przechodnim (**вижу**, **читаю**, **люблю**, **покупаю**…) sprawdź dopełnienie. **Żeński -а → -у.** Męski ożywiony → forma dopełniacza. Męski nieożywiony → bez zmiany.',
          fix: 'Rosyjski biernik: dopełnienia bezpośrednie',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'BŁĄD #3: męski ożywiony traktowany jak nieożywiony',
          wrong: 'Я вижу студент. | Я встретил врач. | Полиция ищет преступник.',
          correct: 'Я вижу студента. | Я встретил врача. | Полиция ищет преступника.',
          why: 'Pamiętaj: **biernik męski ożywiony = forma dopełniacza**. **студент** → **студента**. **врач** → **врача**. Zawsze pytaj: osoba lub zwierzę? Jeśli tak, użyj formy dopełniacza jako biernika.',
          fix: 'Rosyjski biernik: ożywione vs nieożywione',
          fixHref: '/learn/articles/russian-accusative-case',
        },
        {
          title: 'BŁĄD #4: Я z НРАВИТЬСЯ zamiast Мне',
          wrong: 'Я нравится музыка. | Я нравятся эти книги. | Он нравится футбол.',
          correct: 'Мне нравится музыка. | Мне нравятся эти книги. | Ему нравится футбол.',
          why: 'Utwardź wzorzec: **[osoba w celowniku] + нравится + [podmiot]**. **нравится** (lp.) / **нравятся** (lm.) zgadza się z RZECZĄ, która się podoba, nie z osobą.',
          fix: 'Rosyjski celownik: konstrukcja НРАВИТЬСЯ',
          fixHref: '/learn/articles/russian-dative-case',
        },
        {
          title: 'BŁĄD #5: в + biernik dla miejsca (zamiast miejscownika)',
          wrong: 'Я сейчас в школу. | Он живёт в Москву. | Книга в сумку.',
          correct: 'Я сейчас в школе. | Он живёт в Москве. | Книга в сумке.',
          why: 'Przed **в** lub **на** jedno pytanie: **rzecz/osoba już tam jest (miejsce → miejscownik)** czy **tam idzie (kierunek → biernik)**?',
          fix: 'Rosyjski miejscownik: В vs НА',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'BŁĄD #6: mianownik zawodów po Был/Стала/Работает',
          wrong: 'Она была учитель. | Мой отец был врач. | Он работает инженер.',
          correct: 'Она была учительницей. | Мой отец был врачом. | Он работает инженером.',
          why: 'Reguła: **być w przeszłości lub przyszłości + zawód = narzędnik**. **Стать** + zawód = narzędnik. **Работать** + zawód = narzędnik. Tylko teraźniejszość często dopuszcza mianownik.',
          fix: 'Rosyjski narzędnik: zawody i role',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
        {
          title: 'BŁĄD #7: dodawanie -ОВ do wszystkich rzeczowników w dopełniaczu lm.',
          wrong: 'много женщинов | много книгов | много окнов | нет девушков',
          correct: 'много женщин | много книг | много окон | нет девушек',
          why: 'Zapamiętaj **wzorzec z zerową końcówką**: żeńskie na -а tracą wszystko (**женщина** → **женщин**, **книга** → **книг**). Neutra na -о też, z możliwymi uciekającymi samogłoskami (**окно** → **окон**, **яблоко** → **яблок**). To bardzo częste słowa — drilluj osobno.',
          fix: 'Rosyjski dopełniacz: końcówki dopełniacza lm.',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'BŁĄD #8: zły przypadek po liczbach',
          wrong: 'пять стол | три книга | много студент',
          correct: 'пять столов | три книги | много студентов',
          why: 'Trzy grupy: **1 = mianownik lp.** | **2/3/4 = dopełniacz lp.** | **5+ = dopełniacz lm.** Przy każdej liczbie po rosyjsku. Ponadto: **много**, **мало**, **несколько**, **сколько** → dopełniacz lm.',
          fix: 'Rosyjski dopełniacz: liczby i ilości',
          fixHref: '/learn/articles/russian-genitive-case',
        },
        {
          title: 'BŁĄD #9: -Е zamiast -ИИ przy -ий/-ие/-ия',
          wrong: 'в Россие | в здание | на станцие | о путешествие',
          correct: 'в России | в здании | на станции | о путешествии',
          why: 'Reguła: **-ий/-ие/-ия → zawsze -ИИ** w miejscowniku (i w celowniku przy -ия). Nazwy państw na -ия są kluczowe: **в России**, **в Италии**, **в Германии**, **в Австралии**.',
          fix: 'Rosyjski miejscownik: specjalna końcówka -ИИ',
          fixHref: '/learn/lessons/russian-cases-complete-guide',
        },
        {
          title: 'BŁĄD #10: biernik z ЗАНИМАТЬСЯ i innymi czasownikami zwrotnymi',
          wrong: 'Я занимаюсь музыку. | Она интересуется историю. | Он увлекается футбол.',
          correct: 'Я занимаюсь музыкой. | Она интересуется историей. | Он увлекается футболом.',
          why: 'Ucz tych czasowników zwrotnych razem z **narzędnikiem**: **заниматься** + narzędnik, **интересоваться** + narzędnik, **гордиться** + narzędnik, **восхищаться** + narzędnik. Zrób osobny zestaw fiszek.',
          fix: 'Rosyjski narzędnik: czasowniki z narzędnikiem',
          fixHref: '/learn/articles/russian-instrumental-case',
        },
      ],
    },
    {
      h2: 'Bonusowe błędy poza top 10',
      content:
        'Wzmianki honorowe — bardzo częste, ale nieco mniej uniwersalne niż top 10:',
      bullets: [
        '**Zapomnienie Н- w zaimkach po przyimku:** к ему ✗ → к нему ✓ | от ей ✗ → от неё ✓',
        '**Pomyłка из (z wnętrza) i от (od osoby):** из врача ✗ → от врача ✓',
        '**Celownik zamiast dopełniacza przy posiadaniu:** книга другу ✗ → книга друга ✓',
        '**Zapomnienie zgodności przymiotnika:** Я вижу красивый женщину ✗ → красивую женщину ✓',
        '**Biernik zamiast miejscownika z о:** о что ты думаешь? ✗ → о чём ты думаешь? ✓',
        '**Zapomnienie uciekających samogłosek w dopełniaczu lm.:** ручков ✗ → ручек ✓ | окнов ✗ → окон ✓',
      ],
    },
    {
      h2: 'Szybki przegląd: wszystkie 10 błędów naraz',
      content:
        'Użyj tabeli jako listy kontrolnej przy korekcie pisanego lub mówionego rosyjskiego:',
      table: {
        caption: 'Podsumowanie 10 najczęstszych błędów przypadkowych',
        headers: ['#', 'Wzorzec błędu', 'Źle', 'Dobrze', 'Kluczowa reguła'],
        boldColumnIndices: [4],
        rows: [
          ['#1', 'нет + mianownik', 'нет кот', 'нет кота', 'нет zawsze wymaga dopełniacza'],
          [
            '#2',
            'Dopełnienie bezpośrednie → mianownik',
            'Я вижу кот',
            'Я вижу кота',
            'Czasowniki przechodnie: biernik',
          ],
          [
            '#3',
            'Bier. ożyw. = mianownik',
            'Я вижу студент',
            'Я вижу студента',
            'Męski ożywiony bier. = forma dopełniacza',
          ],
          [
            '#4',
            'я нравится (zła osoba)',
            'Я нравится музыка',
            'Мне нравится музыка',
            'Kto lubi → celownik',
          ],
          [
            '#5',
            'Kierunek = miejscownik',
            'Я в школу сейчас',
            'Я в школе сейчас',
            'Statyczne miejsce → miejscownik',
          ],
          [
            '#6',
            'Zawody po был/стала',
            'Она была учитель',
            'Она была учителем',
            'Przeszłe być + zawód → narzędnik',
          ],
          [
            '#7',
            'Dop. lm. → -ов',
            'много женщинов',
            'много женщин',
            'Żeńskie -а → zerowa końcówka w dop. lm.',
          ],
          [
            '#8',
            'Liczby: ten sam przypadek',
            'пять стол',
            'пять столов',
            '5+ → dopełniacz lm.',
          ],
          [
            '#9',
            '-ий/-ие/-ия → -е',
            'в Россие (źle)',
            'в России (dobrze)',
            'Te rzeczowniki: -ИИ, nie -Е',
          ],
          [
            '#10',
            'Заниматься + biernik',
            'заниматься музыку',
            'заниматься музыкой',
            'заниматься zawsze z narzędnikiem',
          ],
        ],
      },
    },
    {
      h2: 'Jak przestać te błędy robić: 5 praktycznych strategii',
      content: '',
      subsections: [
        {
          h3: '1. Ucz reguł gramatyki, nie tylko słownictwa',
          content:
            'Większość tych błędów wynika z nauki słów bez kontekstu gramatycznego. Ucząc **нет**, od razu: **нет zawsze z dopełniaczem**. Ucząc **заниматься**: **заниматься + narzędnik**. Pakuj reguły ze słowami, którymi rządzą.',
        },
        {
          h3: '2. Sztuczka „pytania przypadkowego”',
          content:
            'Przed użyciem rzeczownika zadaj na głos pytanie przypadkowe: **Кого? Что?** (biernik) — **Кому? Чему?** (celownik) — **Кем? Чем?** (narzędnik). To świadomie uruchamia system przypadków i hamuje angielski odruch.',
        },
        {
          h3: '3. Drilluj osobno najtrudniejsze wzorce',
          content:
            'Trzy wzorce generują **80% błędów**: **нет** + dopełniacz, biernik ożywiony vs nieożywiony, kierunek (biernik) vs miejsce (miejscownik). Zrób dedykowane drille dla każdego, aż staną się automatyczne.',
        },
        {
          h3: '4. Czytaj po rosyjsku i poluj na końcówki',
          content:
            '**Aktywne czytanie** — określanie przypadku każdego rzeczownika — buduje intuicję przypadkową. Czytając **Я вижу студента**, nie tylko przetwarzaj sens: **студента** = biernik ożywiony = forma dopełniacza. Z czasem staje się instynktem.',
        },
        {
          h3: '5. Dostawaj korektę od razu',
          content:
            'Niekorygowane błędy przypadków **fossylizują** — stają się nawykami. Użyj aplikacji, korepetytora lub wymiany językowej z informacją zwrotną w czasie rzeczywistym. Im wcześniej korekta, tym mniej się utrwala.',
        },
      ],
    },
    {
      h2: 'Samodzielny test: ile błędów popełniasz?',
      content: 'Przejdź uczciwie listę top 10:',
      bullets: [
        '**0–2 błędy:** zaawansowany — skup się na bonusowych błędach i dopracowaniu',
        '**3–5 błędów:** średnio zaawansowany — najpierw drilluj 3 najczęstsze',
        '**6–8 błędów:** początkujący-średni — zacznij od błędów #1, #2, #5 (najczęstsze)',
        '**9–10 błędów:** początkujący — użyj naszej strukturalnej aplikacji do systematycznego drillu przypadków',
      ],
    },
  ],
  faq: [
    {
      question: 'Dlaczego rosyjskie przypadki są tak trudne dla anglojęzycznych?',
      answer:
        'Bo **angielski porzucił system przypadków wieki temu**. Współczesny angielski sygnalizuje rolę gramatyczną niemal wyłącznie szykiem. Rosyjski robi to końcówkami. Anglojęzyczni **nie mają** gramatycznej intuicji przypadków — trzeba ją budować od zera, czasem i świadomą praktyką.',
    },
    {
      question: 'Ile trwa opanowanie rosyjskich przypadków?',
      answer:
        'Większość uczących się osiąga komfortową poprawność w najczęstszych przypadkach (mianownik, biernik, dopełniacz) w ciągu **6–12 miesięcy** konsekwentnej nauki. Pełne opanowanie wszystkich 6 przypadków, w tym nieregularnego dopełniacza lm. i wyjątków miejscownika, zwykle zajmuje **2–4 lata** poważnej nauki. Przy ukierunkowanej praktyce znaczny postęp na najczęstszych wzorcach możliwy jest już w kilka miesięcy.',
    },
    {
      question: 'Jaki jest najczęstszy błąd przypadkowy w rosyjskim?',
      answer:
        'Według analizy błędów uczących się **najpowszechniejszy pojedynczy błąd** to mianownik po **нет** — mówienie **Нет кот** zamiast **Нет кота**. Drugi to nieodmienienie dopełnienia bezpośredniego na biernik (**Я вижу кот** zamiast **кота**). Te dwa błędy pojawiają się w niemal każdym zdaniu początkującego — absolutny priorytet korekty.',
    },
  ],
  conclusionIntro:
    'Rosyjskie przypadki są naprawdę trudne — ale typowe błędy anglojęzycznych są **przewidywalne, możliwe do zdiagnozowania i do naprawienia**. 10 błędów z tego artykułu obejmuje zdecydowaną większość błędów przypadkowych native speakerów angielskiego. Droga jest jasna: zidentyfikuj swoje, zrozum **dlaczego** powstają (zwykle bo angielski działa inaczej) i drilluj poprawny wzorzec, aż zastąpi błędny.',
  conclusionBullets: [],
  conclusion:
    'Napraw błędy przypadków ukierunkowanymi drillami w naszej aplikacji mobilnej. Inteligentne ćwiczenia wykrywają słabe punkty i ćwiczą je do opanowania. Android i iOS.',
  ctaText: 'Pobierz aplikację',
  ctaHref: '/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Top 10 błędów przy rosyjskich przypadkach u osób mówiących po angielsku (i jak je naprawić)',
    description:
      '10 najczęstszych błędów przypadkowych u anglojęzycznych — zdiagnozowane i naprawione. Przykłady, przyczyny, rozwiązania.',
    datePublished: '2026-03-12',
    dateModified: '2026-03-12',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/top-10-russian-case-mistakes',
    },
    keywords:
      'błędy przypadków rosyjskich, gramatyka rosyjska anglojęzyczni, trudność przypadków rosyjskich, powszechne błędy rosyjskie',
  },
};
