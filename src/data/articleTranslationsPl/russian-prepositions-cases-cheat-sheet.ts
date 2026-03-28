import type { LearnArticle } from '../learnArticles';

/** Tłumaczenie PL artykułu `russian-prepositions-cases-cheat-sheet` (źródło EN: `learnArticles.ts`). Cyrylica w przykładach jak w EN. */
export const russianPrepositionsCasesCheatSheetPl: LearnArticle = {
  slug: 'russian-prepositions-cases-cheat-sheet',
  title:
    'Ściąga: rosyjskie przyimki i przypadki — który przypadek po którym przyimku',
  metaTitle:
    'Ściąga rosyjskich przyimków i przypadków — który przypadek? | Russian Cases with Anna',
  metaDescription:
    'Darmowa ściąga: który rosyjski przypadek po którym przyimku. в + biernik vs. miejscownik, на, с, о, за, под, над i więcej. Czytelna tabela z przykładami. Dodaj stronę do zakładek.',
  keywords: [
    'rosyjskie przyimki i przypadki',
    'jaki przypadek po в',
    'ściąga rosyjskich przyimków',
    'в biernik czy miejscownik',
    'tabela rosyjskich przyimków',
    'rosyjskie przypadki po przyimkach',
    'на biernik czy miejscownik',
    'с dopełniacz czy narzędnik',
  ],
  h1: 'Ściąga: rosyjskie przyimki i przypadki — który przypadek po każdym przyimku',
  intro:
    'Jedną z najbardziej mylących części gramatyki rosyjskiej jest wiedza, **którego przypadku użyć po każdym przyimku**. Ten sam przyimek może wymagać różnych przypadków w zależności od znaczenia — „в школу” (biernik, kierunek) vs. „в школе” (miejscownik, miejsce) — a pomyłka całkowicie zmienia zdanie.\n\nTa ściąga zbiera **wszystkie główne rosyjskie przyimki** z wymaganym przypadkiem (przypadkami), jasnymi przykładami i sztuczkami pamięciowymi. Zapisz tę stronę w zakładkach — często do niej wrócisz.',
  whatYouLearn: [
    'Którego przypadku wymaga każdy ważny rosyjski przyimek',
    'Przyimki zmieniające przypadek w zależności od znaczenia (в, на, за, под, с)',
    '10 najczęstszych przyimków z przykładowymi zdaniami',
    'Sztuczki, by nie mylić przypadków po przyimkach',
  ],
  sections: [
    {
      h2: 'Złota zasada: przyimki narzucają przypadek',
      content:
        'Po rosyjsku **przyimki rządzą przypadkiem** — zmuszają następujące po nich rzeczownik do konkretnego przypadku gramatycznego. W przeciwieństwie do angielskiego, gdzie przyimki tylko stoją przed rzeczownikiem („in the house”, „to the school”), rosyjskie przyimki aktywnie zmieniają końcówkę rzeczownika.\n\nNiektóre przyimki zawsze wymagają tego samego przypadku. Inne — te podstępne — wymagają **różnych przypadków w zależności od tego, czy chodzi o kierunek (ruch) czy miejsce (nieruchomość)**. To rozróżnienie kierunek vs. miejsce to główne źródło błędów przypadkowych u uczących się.',
    },
    {
      h2: 'Tabela główna: każdy przyimek według przypadku',
      content:
        'Oto pełny przegląd. Przyimki oznaczone ★ mogą przyjmować więcej niż jeden przypadek (szczegóły niżej).',
      table: {
        headers: ['Przypadek', 'Przyimki', 'Znaczenie / użycie'],
        rows: [
          [
            'Dopełniacz',
            'без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под',
            'Bez, dla, aż do / przed, z (wnętrza), od / z dala, u / przy, po, wokół, oprócz, zamiast, z powodu, spod',
          ],
          [
            'Celownik',
            'к, по, благодаря, вопреки, навстречу, согласно',
            'Ku, wzdłuż / według, dzięki, wbrew, naprzeciwko (spotkanie), zgodnie z',
          ],
          [
            'Biernik',
            'через, про, сквозь',
            'Przez / na wskroś, o (mówić), na wskroś',
          ],
          [
            'Biernik ★',
            'в (kierunek), на (kierunek), за (kierunek), под (kierunek)',
            'Do środka, na (ruch w górę), za / poza, pod (ruch w dół)',
          ],
          [
            'Narzędnik',
            'с, между, над, перед, за ★, под ★',
            'Z (towarzystwo), między, nad, przed, za (miejsce), pod (miejsce)',
          ],
          [
            'Miejscownik',
            'о (об, обо), при',
            'O, przy / w obecności',
          ],
          [
            'Miejscownik ★',
            'в (miejsce), на (miejsce)',
            'W (nieruchomość), na / przy (nieruchomość)',
          ],
        ],
        caption: 'Pełna tabela odniesienia: rosyjskie przyimki i przypadki',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Podstępne: przyimki ze zmiennym przypadkiem',
      content:
        'Te 5 przyimków odpowiada za zdecydowaną większość zamieszania. Opanujesz je — wyeliminujesz większość błędów przyimkowych.',
      subsections: [
        {
          h3: 'в — „w” / „do (wewnątrz)”',
          content:
            '**в + biernik** = kierunek (ruch DO środka czegoś)\n**в + miejscownik** = miejsce (bycie W czymś)\n\nTo najważniejsze rozróżnienie przyimkowe w rosyjskim. Pytanie: **idę tam, czy już tam jestem?**',
          bullets: [
            '**в школу** (biernik) — do szkoły (idę do szkoły)',
            '**в школе** (miejscownik) — w szkole (jestem w szkole)',
            '**в город** (biernik) — do miasta (zmierzam tam)',
            '**в городе** (miejscownik) — w mieście (już tam jestem)',
            '**в Россию** (biernik) — do Rosji (podróż)',
            '**в России** (miejscownik) — w Rosji (przebywanie)',
          ],
        },
        {
          h3: 'на — „na” / „na (ruch)”',
          content:
            '**на + biernik** = kierunek (ruch NA coś)\n**на + miejscownik** = miejsce (bycie NA czymś)\n\nTa sama logika co przy „в” — kierunek vs. miejsce. Uwaga: „на” bywa też przy miejscach, których anglojęzyczny się nie spodziewa (на работе = w pracy, на вокзале = na dworcu).',
          bullets: [
            '**на стол** (biernik) — na stół (kładzenie czegoś)',
            '**на столе** (miejscownik) — na stole (leży tam)',
            '**на работу** (biernik) — do pracy (idę)',
            '**на работе** (miejscownik) — w pracy (już tam jestem)',
            '**на урок** (biernik) — na lekcję',
            '**на уроке** (miejscownik) — na / podczas lekcji',
          ],
        },
        {
          h3: 'за — „za” / „dla” / „poza”',
          content:
            '**за + biernik** = kierunek (ruch za / poza) LUB „za” (w zamian, po stronie)\n**за + narzędnik** = miejsce (za czymś, nieruchomość)\n\nTen przyimek myli nawet na poziomie średnio zaawansowanym — „за” ma tyle znaczeń.',
          bullets: [
            '**за дом** (biernik) — za dom (idę za dom)',
            '**за домом** (narzędnik) — za domem (tam jest)',
            '**за хлебом** (narzędnik) — po chleb (idę kupić)',
            '**Спасибо за помощь** (biernik) — Dziękuję za pomoc',
            '**Я за тебя** (biernik) — Jestem po twojej stronie',
          ],
        },
        {
          h3: 'под — „pod”',
          content:
            '**под + biernik** = kierunek (ruch pod coś)\n**под + narzędnik** = miejsce (pod czymś, nieruchomość)',
          bullets: [
            '**под стол** (biernik) — pod stół (kot pobiegł)',
            '**под столом** (narzędnik) — pod stołem (kot siedzi)',
            '**под дождём** (narzędnik) — w deszczu (stoję w nim)',
            '**под дождь** (biernik) — w deszcz (wychodzę)',
          ],
        },
        {
          h3: 'с — „z (towarzystwo)” / „z (ze)”',
          content:
            '**с + narzędnik** = z (towarzystwo)\n**с + dopełniacz** = z (z góry, ze zjazdem)\n\nTe dwa znaczenia są zupełnie różne; różnica przypadku pomaga zrozumieć intencję.',
          bullets: [
            '**с другом** (narzędnik) — z przyjacielem',
            '**с молоком** (narzędnik) — z mlekiem',
            '**с горы** (dopełniacz) — z góry',
            '**с работы** (dopełniacz) — z pracy (wracam)',
            '**с утра** (dopełniacz) — od rana',
          ],
        },
      ],
    },
    {
      h2: '10 najczęstszych przyimków (z przykładami)',
      content:
        'Te 10 przyimków to około 80% użycia przyimków w rosyjskim. Jeśli zapamiętasz tylko je, pokryjesz większość sytuacji:',
      table: {
        headers: ['#', 'Przyimek', 'Przypadek(i)', 'Przykład', 'Tłumaczenie'],
        rows: [
          [
            '1',
            'в',
            'Bier. / miej.',
            'Я иду **в магазин**. Я **в магазине**.',
            'Idę do sklepu. Jestem w sklepie.',
          ],
          [
            '2',
            'на',
            'Bier. / miej.',
            'Иди **на кухню**. Я **на кухне**.',
            'Idź do kuchni. Jestem w kuchni.',
          ],
          [
            '3',
            'с',
            'Narz. / dop.',
            'Кофе **с молоком**. Пришёл **с работы**.',
            'Kawa z mlekiem. Przyszedł z pracy.',
          ],
          [
            '4',
            'к',
            'Cel.',
            'Иду **к врачу**.',
            'Idę do lekarza.',
          ],
          [
            '5',
            'из',
            'Dop.',
            'Вышел **из дома**.',
            'Wyszedł z domu.',
          ],
          [
            '6',
            'о (об)',
            'Miej.',
            'Думаю **о тебе**.',
            'Myślę o tobie.',
          ],
          [
            '7',
            'для',
            'Dop.',
            'Подарок **для мамы**.',
            'Prezent dla mamy.',
          ],
          [
            '8',
            'от',
            'Dop.',
            'Письмо **от друга**.',
            'List od przyjaciela.',
          ],
          [
            '9',
            'за',
            'Bier. / narz.',
            'Спасибо **за помощь**. Сижу **за столом**.',
            'Dzięki za pomoc. Siedzę przy stole.',
          ],
          [
            '10',
            'по',
            'Cel.',
            'Гуляю **по парку**.',
            'Spaceruję po parku.',
          ],
        ],
        caption: '10 najczęstszych rosyjskich przyimków: przypadki i przykłady',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Przyimki z dopełniaczem — największa grupa',
      content:
        'Dopełniacz ma najwięcej przyimków — ma to sens, bo wyraża pochodzenie, posiadanie, brak i przyczynę. Kluczowe:',
      table: {
        headers: ['Przyimek', 'Znaczenie', 'Przykład', 'Tłumaczenie'],
        rows: [
          ['без', 'bez', 'без **сахара**', 'bez cukru'],
          ['для', 'dla (cel)', 'для **студентов**', 'dla studentów'],
          ['до', 'aż do, przed', 'до **утра**', 'do rana'],
          ['из', 'z (wnętrza)', 'из **России**', 'z Rosji'],
          ['от', 'od (osoba/źródło)', 'от **врача**', 'od lekarza'],
          ['у', 'u, przy, posiadanie', 'у **меня**', 'mam (u mnie)'],
          ['после', 'po', 'после **обеда**', 'po obiedzie'],
          ['около', 'blisko, około', 'около **дома**', 'blisko domu'],
          ['вокруг', 'wokół', 'вокруг **города**', 'wokół miasta'],
          ['кроме', 'oprócz', 'кроме **меня**', 'oprócz mnie'],
          ['вместо', 'zamiast', 'вместо **воды**', 'zamiast wody'],
          ['из-за', 'z powodu, spod', 'из-за **дождя**', 'z powodu deszczu'],
          ['из-под', 'spod', 'из-под **стола**', 'spod stołu'],
        ],
        caption: 'Przyimki z dopełniaczem — przykłady',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Przyimki z celownikiem',
      content:
        'Celownik ma mniej przyimków, ale są bardzo częste:',
      table: {
        headers: ['Przyimek', 'Znaczenie', 'Przykład', 'Tłumaczenie'],
        rows: [
          ['к', 'ku, do (osoba)', 'к **другу**', 'do przyjaciela'],
          ['по', 'wzdłuż, według', 'по **улице**', 'wzdłuż ulicy'],
          ['благодаря', 'dzięki', 'благодаря **учителю**', 'dzięki nauczycielowi'],
          ['вопреки', 'wbrew', 'вопреки **правилам**', 'wbrew zasadom'],
          ['навстречу', 'naprzeciwko (spotkanie)', 'навстречу **мне**', 'naprzeciwko mnie'],
          ['согласно', 'zgodnie z', 'согласно **закону**', 'zgodnie z prawem'],
        ],
        caption: 'Przyimki z celownikiem — przykłady',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Przyimki z narzędnikiem',
      content:
        'Narzędnik oznacza towarzystwo, położenie za / pod / nad oraz środek działania:',
      table: {
        headers: ['Przyimek', 'Znaczenie', 'Przykład', 'Tłumaczenie'],
        rows: [
          ['с', 'z', 'с **друзьями**', 'z przyjaciółmi'],
          ['между', 'między', 'между **нами**', 'między nami'],
          ['над', 'nad', 'над **городом**', 'nad miastem'],
          ['перед', 'przed', 'перед **домом**', 'przed domem'],
          ['за', 'za (miejsce)', 'за **дверью**', 'za drzwiami'],
          ['под', 'pod (miejsce)', 'под **деревом**', 'pod drzewem'],
        ],
        caption: 'Przyimki z narzędnikiem — przykłady',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Przyimki z miejscownikiem',
      content:
        'Mimo nazwy miejscownik ma najmniej dedykowanych przyimków. Głównie z в/на (miejsce) i о (o):',
      table: {
        headers: ['Przyimek', 'Znaczenie', 'Przykład', 'Tłumaczenie'],
        rows: [
          ['в', 'w (miejsce)', 'в **доме**', 'w domu'],
          ['на', 'na, przy (miejsce)', 'на **столе**', 'na stole'],
          ['о (об, обо)', 'o', 'о **России**', 'o Rosji'],
          ['при', 'za panowania, przy', 'при **Петре I**', 'za Piotra I'],
        ],
        caption: 'Przyimki z miejscownikiem — przykłady',
        boldColumnIndices: [0],
        accentColumnIndices: [0],
      },
    },
    {
      h2: 'Sztuczki pamięciowe: jak zapamiętać przypadek',
      content:
        'Sprawdzone skróty myślowe do par przyimek–przypadek:',
      bullets: [
        '**Kierunek = biernik, miejsce = miejscownik / narzędnik.** Gdy idziesz gdzieś (в/на + ruch) — biernik. Gdy już tam jesteś — miejscownik (в/на) lub narzędnik (за/под).',
        '**„Z (towarzystwo)” = narzędnik.** Narzędnik to dosłownie „za pomocą” — więc „z” (towarzystwo lub narzędzie) zawsze narzędnik: с другом, с ножом.',
        '**„Z (pochodzenie)” = dopełniacz.** Pochodzenie, źródło, oddalenie — wszystko „z” lub „bez” bierze dopełniacz: из России, от друга, с горы, без воды.',
        '**„Do kogoś” = celownik.** Idziesz do kogoś lub dajesz komuś: к другу, по улице.',
        '**„O czymś” = miejscownik.** Mowa lub myśl o czymś: о книге, о России.',
        '**Ucz się w parach.** Kierunek i miejsce razem: в школу / в школе, на работу / на работе, за дом / за домом. Para utrwala oba przypadki.',
      ],
    },
    {
      h2: 'Częste błędy do unikania',
      content:
        'Najczęstsze błędy przyimek–przypadek u uczących się:',
      mistakeCards: [
        {
          title: 'в + zły przypadek dla miejsca',
          wrong: 'Я живу в Москва.',
          correct: 'Я живу в Москве.',
          why: '„В” z miejscem wymaga miejscownika. Москва → Москве.',
          fix: 'Zapytaj się: ruszam się czy stoję? Stoję = miejscownik.',
          fixHref: '/practice/prepositional',
        },
        {
          title: 'с + dopełniacz zamiast narzędnika („z”)',
          wrong: 'Я пошёл с друга.',
          correct: 'Я пошёл с другом.',
          why: '„С” w znaczeniu „z (towarzystwo)” bierze narzędnik. W znaczeniu „z (skąd)” dopełniacz (с горы). Tu: „z przyjacielem”.',
          fix: 'Jeśli możesz zamienić „с” na „razem z” — narzędnik.',
          fixHref: '/practice/instrumental',
        },
        {
          title: 'к + zły przypadek',
          wrong: 'Я иду к друг.',
          correct: 'Я иду к другу.',
          why: '„К” zawsze wymaga celownika. друг → другу.',
          fix: 'к = zawsze celownik. Bez wyjątków.',
          fixHref: '/practice/dative',
        },
        {
          title: 'Mylenie из i от',
          wrong: 'Я получил письмо из друга.',
          correct: 'Я получил письмо от друга.',
          why: '„Из” = z wnętrza (из дома = z domu). „От” = od osoby lub źródła. List od osoby → от.',
          fix: 'из = z wnętrza miejsca. от = od osoby/źródła.',
        },
        {
          title: 'на + biernik dla miejsca',
          wrong: 'Книга лежит на стол.',
          correct: 'Книга лежит на столе.',
          why: 'Książka leży (nieruchomo) na stole → на + miejscownik. „На стол” (biernik) to ruch „na stół”.',
          fix: 'Czasowniki położenia (лежать, стоять, сидеть) → miejscownik. Ruchu (идти, ставить, класть) → biernik.',
          fixHref: '/practice/prepositional',
        },
      ],
    },
    {
      h2: 'Szybki przegląd: przyimek → przypadek',
      content:
        'Wydrukuj lub zapisz w telefonie — najszybsze sprawdzenie dowolnego przyimku:',
      table: {
        headers: ['Przyimek', 'Przypadek', 'Krótkie znaczenie'],
        rows: [
          ['без', 'Dop.', 'bez'],
          ['благодаря', 'Cel.', 'dzięki'],
          ['в', 'Bier. → / miej. ●', 'do środka → / w ●'],
          ['вместо', 'Dop.', 'zamiast'],
          ['вокруг', 'Dop.', 'wokół'],
          ['вопреки', 'Cel.', 'wbrew'],
          ['для', 'Dop.', 'dla (cel)'],
          ['до', 'Dop.', 'aż do, przed'],
          ['за', 'Bier. → / narz. ●', 'za → / za ● / za (w zamian)'],
          ['из', 'Dop.', 'z (wnętrza)'],
          ['из-за', 'Dop.', 'z powodu'],
          ['из-под', 'Dop.', 'spod'],
          ['к', 'Cel.', 'ku, do'],
          ['кроме', 'Dop.', 'oprócz'],
          ['между', 'Narz.', 'między'],
          ['на', 'Bier. → / miej. ●', 'na (ruch) → / na ●'],
          ['над', 'Narz.', 'nad'],
          ['навстречу', 'Cel.', 'naprzeciwko'],
          ['о (об)', 'Miej.', 'o'],
          ['около', 'Dop.', 'blisko'],
          ['от', 'Dop.', 'od (osoba/źródło)'],
          ['перед', 'Narz.', 'przed'],
          ['по', 'Cel.', 'wzdłuż, według'],
          ['под', 'Bier. → / narz. ●', 'pod → / pod ●'],
          ['после', 'Dop.', 'po'],
          ['при', 'Miej.', 'przy, za (panowania)'],
          ['про', 'Bier.', 'o (potocznie)'],
          ['с', 'Narz. / dop.', 'z / z (skąd)'],
          ['согласно', 'Cel.', 'zgodnie z'],
          ['у', 'Dop.', 'u, przy, mieć'],
          ['через', 'Bier.', 'przez, na wskroś'],
        ],
        caption: '→ = kierunek/ruch, ● = miejsce/nieruchomość',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Podsumowanie: praktyka utrwala',
      content:
        'Wiedza, który przypadek po którym przyimku, to **połowa walki** z rosyjską gramatyką. Druga połowa to automatyczne tworzenie właściwej końcówki rzeczownika — bez zastanawiania się.\n\nTa ściąga daje reguły. Teraz potrzebujesz powtórzeń. Użyj **darmowego quizu deklinacji**, ćwicz każdy przypadek osobno, aż końcówki wejdą w krew. Zacznij od biernika i miejscownika (najczęstsze z przyimkami), potem dopełniacz, celownik i narzędnik.\n\nZapisz stronę w zakładkach i wracaj, gdy masz wątpliwość. Z czasem będziesz jej potrzebować coraz mniej — wtedy przypadki naprawdę „siadają”.',
    },
  ],
  conclusion: '',
  ctaText: 'Ćwicz deklinacje — darmowy quiz',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Którego rosyjskiego przypadku używa się po в?',
      answer:
        'Zależy od znaczenia. „В” + biernik = kierunek/ruch (в школу = do szkoły). „В” + miejscownik = miejsce (в школе = w szkole). Zapytaj się: idę tam czy już tam jestem?',
    },
    {
      question: 'Ile jest rosyjskich przyimków?',
      answer:
        'Około 30 powszechnie używanych. Około 10 (в, на, с, к, из, о, для, от, за, по) to mniej więcej 80% użycia. Opanowanie tych 10 pokrywa większość sytuacji.',
    },
    {
      question: 'Który przypadek ma najwięcej przyimków w rosyjskim?',
      answer:
        'Dopełniacz — ponad tuzin, m.in. без, для, до, из, от, у, после, около, вокруг, кроме, вместо, из-за, из-под. To ma sens: dopełniacz wyraża pochodzenie, brak i posiadanie.',
    },
    {
      question: 'Jaka jest różnica między из a от po rosyjsku?',
      answer:
        'Oba to „z”, ale inaczej. „Из” = z wnętrza miejsca (из дома = z domu, из России = z Rosji). „От” = od osoby lub źródła (от друга = od przyjaciela, от врача = od lekarza). Oba z dopełniaczem.',
    },
    {
      question: 'Skąd wiem, czy przyimek wymaga biernika czy miejscownika?',
      answer:
        'Dla przyimków z oboma (в, на): kierunek/ruch → biernik (в школу, на работу), miejsce/nieruchomość → miejscownik (в школе, на работе). Dla за i под: ruch → biernik, miejsce → narzędnik (за столом, под деревом).',
    },
  ],
  leadMagnetCta: {
    title: 'Powtarzaj końcówki przypadków, aż staną się automatyczne',
    description:
      'Wiedza, jakiego przypadka wymaga przyimek, to krok pierwszy. Krok drugi: natychmiast poprawna końcówka rzeczownika. Ćwicz wszystkie 6 przypadków z ponad 400 słowami — za darmo, bez rejestracji.',
    ctaText: 'Rozpocznij darmowy quiz →',
    ctaHref: '/practice',
  },
  internalLinks: [
    { href: '/practice', label: 'Darmowy quiz rosyjskiej deklinacji' },
    { href: '/practice/accusative', label: 'Ćwicz biernik' },
    { href: '/practice/genitive', label: 'Ćwicz dopełniacz' },
    { href: '/practice/dative', label: 'Ćwicz celownik' },
    { href: '/practice/instrumental', label: 'Ćwicz narzędnik' },
    { href: '/practice/prepositional', label: 'Ćwicz miejscownik' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rosyjskie przypadki wyjaśnione: przewodnik dla początkujących',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: '10 najczęstszych błędów w rosyjskich przypadkach',
    },
    { href: '/words', label: 'Przeglądaj wszystkie 400+ tabel deklinacji' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Ściąga: rosyjskie przyimki i przypadki — który przypadek po każdym przyimku',
    description:
      'Pełna ściąga: który rosyjski przypadek po którym przyimku. Tabele, przykłady, sztuczki i częste błędy.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-prepositions-cases-cheat-sheet',
    },
    keywords:
      'rosyjskie przyimki i przypadki, jaki przypadek po в, ściąga rosyjskich przyimków, rosyjskie przypadki po przyimkach',
  },
};
