import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-greetings-guide` (źródło EN: `learnArticles.ts`). */
export const russianGreetingsGuidePl: LearnArticle = {
  slug: 'russian-greetings-guide',
  title: 'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku (kompletny przewodnik 2026)',
  metaTitle:
    'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku | Kompletny przewodnik 2026 | Russian Cases with Anna',
  metaDescription:
    'Opanuj wszystkie rosyjskie pozdrowienia: formalne Здравствуйте, nieformalne Привет, pozdrowienia o różnych porach dnia, pożegnania i pozdrowienia telefoniczne — z wskazówkami wymowy.',
  keywords: [
    'rosyjskie pozdrowienia',
    'jak powiedzieć cześć po rosyjsku',
    'cześć po rosyjsku',
    'привет po rosyjsku',
    'здравствуйте po rosyjsku',
    'podstawowe zwroty rosyjskie',
    'formalne pozdrowienia rosyjskie',
    'nieformalne pozdrowienia rosyjskie',
    'do widzenia po rosyjsku',
    'rosyjskie zwroty grzecznościowe',
  ],
  h1: 'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku (kompletny przewodnik)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Plac Czerwony w Moskwie — przewodnik po rosyjskich pozdrowieniach',
    width: 1200,
    height: 630,
  },
  intro:
    'Rosyjskie pozdrowienia to pierwsze słowa, które większość uczących się zapamiętuje — i słusznie. Jednak poza wszechobecnym **Привет** (Privet — Cześć), rosyjski ma bogaty zestaw pozdrowień, które zmieniają się w zależności od **formalności, pory dnia, kontekstu** oraz liczby osób, do których się zwracamy.\n\nPomylenie się z pozdrowieniem rzadko jest gramatyczną katastrofą. Ale **wybór odpowiedniego pozdrowienia natychmiast świadczy o Tobie jako poważnym uczącym się** — a w kulturze rosyjskiej rozróżnienie między rejestrem formalnym i nieformalnym ma znacznie większe znaczenie niż w języku polskim. Używanie **Привет** wobec profesora, lekarza lub starszego nieznajomego może być odebrane jako nieuprzejme. Z kolei używanie sztywnego **Здравствуйте** (Zdravstvuyte) z bliskim rosyjskim przyjacielem wywoła dziwne spojrzenia.\n\nNiniejszy przewodnik omawia wszystkie rosyjskie pozdrowienia, których naprawdę potrzebujesz: formalne, nieformalne, zależne od pory dnia, telefoniczne i pożegnania. Na koniec będziesz wiedzieć nie tylko co mówić, ale **kiedy i dlaczego** — i w końcu zdołasz wymówić **Здравствуйте** bez potknięć.',
  introByline: {
    text: '**Napisane przez Nathana** — rodowitego Francuza; uczę się rosyjskiego i dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Różnica między formalnym **Здравствуйте** a nieformalnym **Привет** — kiedy używać każdego z nich',
    'Pozdrowienia zależne od pory dnia: Доброе утро, Добрый день, Добрый вечер',
    'Nieformalne pozdrowienia używane przez młodych Rosjan w 2026',
    'Jak zapytać po rosyjsku „jak się masz?" — 5 sposobów od formalnego do bardzo potocznego',
    'Rosyjskie pożegnania w każdym kontekście',
    'Jeden trik wymowy, który znacznie ułatwia wymówienie **Здравствуйте**',
  ],
  leadMagnetCta: {
    title: 'Opanuj rosyjską gramatykę poza pozdrowieniami — darmowa aplikacja',
    description:
      'Gdy już potrafisz się przywitać, zaczyna się prawdziwa praca: rosyjska gramatyka, przypadki i odmiana. Russian Cases with Anna oferuje ustrukturyzowane lekcje i inteligentne quizy, by zbudować prawdziwą biegłość — bezpłatnie na iOS i Android.',
    ctaText: 'Pobierz aplikację — Za darmo',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Szybki przegląd: wszystkie rosyjskie pozdrowienia w jednym miejscu',
      content:
        'Przed przejściem do szczegółów — oto pełny przegląd najważniejszych rosyjskich pozdrowień. Kluczową zmienną jest zawsze **formalność**: rosyjski wyraźnie rozróżnia rejestr formalny (вы / vy) i nieformalny (ты / ty), co determinuje wybór pozdrowienia.',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Polski', 'Rejestr'],
        rows: [
          ['Здравствуйте', 'Zdravstvuyte', 'Dzień dobry / Witam (formalnie)', 'Formalny'],
          ['Здравствуй', 'Zdravstvuy', 'Cześć (półformalnie, do jednej osoby)', 'Półformalny'],
          ['Привет', 'Privet', 'Cześć / Hej', 'Nieformalny'],
          ['Доброе утро', 'Dobroye utro', 'Dzień dobry (rano)', 'Oba'],
          ['Добрый день', "Dobryy den'", 'Dzień dobry (południe)', 'Oba'],
          ['Добрый вечер', 'Dobryy vecher', 'Dobry wieczór', 'Oba'],
          ['Хай', 'Khay', 'Hej (bardzo nieformalne)', 'Bardzo nieformalny'],
          ['Ку', 'Ku', 'Hej (slang)', 'Bardzo nieformalny / młodzieżowy'],
          ['Приветик', 'Privetik', 'Cześć czesc (czule)', 'Bardzo nieformalny'],
          ['Салют', 'Salyut', 'Hej / Siema', 'Nieformalny'],
        ],
        caption: 'Rosyjskie pozdrowienia: przegląd formalnych vs. nieformalnych',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Formalne rosyjskie pozdrowienia: Здравствуйте i jego warianty',
      content:
        '**Здравствуйте** (Zdravstvuyte) to standardowe formalne pozdrowienie po rosyjsku. Jego dosłowne znaczenie to „bądź zdrowy" — od słowa здоровье (zdorovye, zdrowie) — i od wieków jest uprzejmym rosyjskim pozdrowieniem.\n\nUżywaj **Здравствуйте** z:\n\n- Osobami, które spotykasz po raz pierwszy\n- Specjalistami: lekarzami, profesorami, urzędnikami, przełożonym\n- Osobami starszymi (każdym, kto jest znacznie starszy od Ciebie)\n- W sytuacjach formalnych: rozmowa kwalifikacyjna, urząd, spotkanie biznesowe\n- Personelem sklepu, pracownikami banku, pracownikami transportu\n\nProstszą opcją jest **Здравствуй** (Zdravstvuy), używany wobec jednej osoby, którą lekko znasz. W praktyce większość mówiących używa **Здравствуйте** z każdym, z kim nie są na „ty".\n\n**Доброе утро**, **Добрый день** i **Добрый вечер** to również w pełni akceptowalne formalne pozdrowienia, które brzmią nieco cieplej.',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Kiedy używać'],
        rows: [
          ['Здравствуйте', 'Zdravstvuyte', 'Standard formalny — najbezpieczniejszy wybór z nieznajomymi'],
          ['Здравствуй', 'Zdravstvuy', 'Półformalny — jedna osoba, którą lekko znasz'],
          ['Доброе утро', 'Dobroye utro', 'Dzień dobry (do ~południa) — formalny lub neutralny'],
          ["Добрый день", "Dobryy den'", 'Dzień dobry (~południe do ~18:00) — formalny lub neutralny'],
          ['Добрый вечер', 'Dobryy vecher', 'Dobry wieczór (~18:00 i później) — formalny lub neutralny'],
        ],
        caption: 'Formalne rosyjskie pozdrowienia i kiedy ich używać',
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Nieformalne rosyjskie pozdrowienia: Привет i co mówią młodzi Rosjanie',
      content:
        '**Привет** (Privet) to najczęstsze nieformalne pozdrowienie. Używa się go swobodnie wśród przyjaciół, rówieśników w pracy i członków rodziny.\n\nPoza **Привет**, oto co młodzi Rosjanie naprawdę mówią w 2026:',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Znaczenie / Kontekst'],
        rows: [
          ['Привет', 'Privet', 'Cześć / Hej — standardowe nieformalne pozdrowienie'],
          ['Приветик', 'Privetik', 'Czeszek — czułe, dla bliskich przyjaciół i dzieci'],
          ['Хай', 'Khay', 'Hej — z angielskiego, bardzo popularne wśród osób poniżej 35 lat'],
          ['Ку', 'Ku', 'Hej — slang komunikatorów, głównie w wiadomościach'],
          ['Салют', 'Salyut', 'Siema — nieco retro, nadal używane nieformalnie'],
          ['Что, как?', 'Shto, kak?', 'Co słychać? — nieformalne otwarcie, dosłownie „Co? Jak?"'],
          ['Как дела?', 'Kak dela?', 'Jak się masz? — naturalne uzupełnienie po Привет'],
        ],
        caption: 'Nieformalne rosyjskie pozdrowienia i slang używany dziś',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Привет** można używać o każdej porze dnia — rano, po południu lub wieczorem',
        '**Хай** staje się coraz bardziej dominujące w rosyjskim miejskim wśród osób poniżej 35 lat, szczególnie w piśmie',
        '**Ку** jest używane głównie w wiadomościach tekstowych — rzadkie w mowie',
        'Łączenie pozdrowień jest naturalne: „**Привет, как дела?**" płynie bardzo naturalnie',
        'Z nieznajomymi lub w kontekście zawodowym zawsze domyślnie używaj **Здравствуйте**',
      ],
    },
    {
      h2: 'Pozdrowienia zależne od pory dnia: dzień dobry, dobry wieczór po rosyjsku',
      content:
        'Rosyjski ma pełny zestaw pozdrowień związanych z porą dnia, działających zarówno w kontekstach formalnych, jak i nieformalnych. Brzmią nieco cieplej niż **Здравствуйте** i są częste w sklepach i biurach.',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Polski', 'Typowy zakres godzin'],
        rows: [
          ['Доброе утро', 'Dobroye utro', 'Dzień dobry (rano)', 'Do ~południa'],
          ["Добрый день", "Dobryy den'", 'Dzień dobry (południe)', '~Południe do 18:00'],
          ['Добрый вечер', 'Dobryy vecher', 'Dobry wieczór', '~18:00 i później'],
          ['Спокойной ночи', 'Spokoynoy nochi', 'Dobranoc', 'Tylko jako pożegnanie przed snem'],
          ['Доброй ночи', 'Dobroy nochi', 'Dobranoc', 'Pozdrowienie lub pożegnanie późnym wieczorem'],
        ],
        caption: 'Rosyjskie pozdrowienia zależne od pory dnia',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Доброе утро** używa formy nijakiej, bo утро (ranek) to rzeczownik nijaki',
        '**Добрый день** używa formy męskiej, bo день (dzień) jest rodzaju męskiego',
        '**Добрый вечер** jest rodzaju męskiego, bo вечер (wieczór) jest rodzaju męskiego',
        '**Спокойной ночи** jest w dopełniaczu — utarte wyrażenie używane tylko przed snem, nigdy jako pozdrowienie',
        'Te pozdrowienia można łączyć: „**Добрый день, как у вас дела?**"',
      ],
    },
    {
      h2: 'Jak zapytać „jak się masz?" po rosyjsku',
      content:
        'Sposób pytania „jak się masz?" po rosyjsku zależy w dużej mierze od tego, z kim rozmawiasz. Rosyjski oferuje kilka opcji — od bardzo formalnych do bardzo potocznych.',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Formalność', 'Uwagi'],
        rows: [
          ['Как вы поживаете?', 'Kak vy pozhivayete?', 'Bardzo formalny', 'Rzadkie w codziennej rozmowie — dla starszych osób'],
          ['Как у вас дела?', 'Kak u vas dela?', 'Formalny', 'Standard grzecznościowy — „Jak się Pan/Pani ma?"'],
          ['Как дела?', 'Kak dela?', 'Neutralny / potoczny', 'Najczęstszy — sprawdza się w prawie każdej sytuacji'],
          ['Как ты?', 'Kak ty?', 'Nieformalny', '„Jak ty?" bezpośrednio — tylko wśród bliskich'],
          ['Как сам? / Как сама?', 'Kak sam? / Kak sama?', 'Bardzo potoczny', 'M. / ż. — dosłownie „Ty jak?"'],
          ['Всё норм?', 'Vsyo norm?', 'Slang młodzieżowy', '„Wszystko ok?" — bardzo nieformalne'],
        ],
        caption: 'Sposoby pytania „jak się masz?" po rosyjsku według poziomu formalności',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Jak odpowiedzieć na Как дела?',
          content:
            'Gdy zapytają Cię **Как дела?**, najczęstsze odpowiedzi to:\n\n**Хорошо, спасибо** (Khorosho, spasibo) — Dobrze, dziękuję — bezpieczna, uprzejma odpowiedź.\n\n**Нормально** (Normal\'no) — Normalnie / W porządku — bardzo popularnie, bardziej szczere niż „dobrze".\n\n**Неплохо** (Neplo\'kho) — Nieźle — częsta odpowiedź pozytywno-neutralna.\n\n**Всё хорошо** (Vsyo khorosho) — Wszystko dobrze — nieco bardziej dobitne.\n\nUwaga: w odróżnieniu od języka polskiego, Rosjanie nie zawsze oczekują wzajemnego „a u ciebie?" Po odpowiedzi grzecznie jest dodać **А у тебя?** (A u tebya? — A u Ciebie?), ale nie jest to obowiązkowe w każdej wymianie.',
        },
      ],
    },
    {
      h2: 'Rosyjskie pożegnania: jak powiedzieć do widzenia',
      content:
        'Rosyjskie pożegnania również różnią się formalnością. Oto najważniejsze, od formalnych do potocznych:',
      table: {
        headers: ['Rosyjski', 'Transkrypcja', 'Polski', 'Rejestr'],
        rows: [
          ['До свидания', 'Do svidaniya', 'Do widzenia', 'Formalny'],
          ['До встречи', 'Do vstrechi', 'Do zobaczenia', 'Neutralno-formalny'],
          ['До скорого', 'Do skorogo', 'Do zobaczenia wkrótce', 'Nieformalny'],
          ['Пока', 'Poka', 'Cześć / Na razie', 'Nieformalny'],
          ['Всего доброго', 'Vsego dobrogo', 'Wszystkiego dobrego', 'Formalny'],
          ['Всего хорошего', 'Vsego khoroshego', 'Wszystkiego dobrego', 'Formalny'],
          ['Счастливо', 'Schastlivo', 'Powodzenia / Dbaj o siebie', 'Neutralno-nieformalny'],
          ['Бывай', 'Byvay', 'Do zobaczenia / Dbaj o siebie', 'Nieformalny'],
        ],
        caption: 'Rosyjskie pożegnania od formalnych do potocznych',
        boldColumnIndices: [0],
      },
      bullets: [
        '**До свидания** dosłownie znaczy „do spotkania" — domyślne formalne pożegnanie',
        '**Пока** to najczęściej używane nieformalne pożegnanie — odpowiednik „cześć" na odchodne',
        '**Всего доброго** i **Всего хорошего** to wymienne ciepłe formalne pożegnania',
        '**До встречи** sugeruje, że spotkasz tę osobę ponownie — dobre dla kolegów i stałych kontaktów',
      ],
    },
    {
      h2: 'Pozdrowienia telefoniczne i inne sytuacje',
      content:
        'Pozdrowienia nieco zmieniają się w specyficznych sytuacjach. Znajomość tych niuansów pomoże Ci brzmieć naturalnie poza rozmowami twarzą w twarz.',
      subsections: [
        {
          h3: 'Odbieranie telefonu',
          content:
            'Odbierając telefon po rosyjsku, standardową odpowiedzią jest **Алло** (Allo) — zapożyczone z francuskiego/angielskiego. Jest powszechne we wszystkich grupach wiekowych i kontekstach. W bardziej formalnym środowisku można usłyszeć **Слушаю** (Slushayu — Słucham).',
          bullets: [
            '**Алло** — standardowe pozdrowienie telefoniczne, używane przez wszystkich',
            '**Да?** — bardzo nieformalne, między bliskimi',
            '**Слушаю** — formalne, oznacza „słucham" — w środowisku zawodowym',
            '**[Imię/nazwa], слушаю** — profesjonalne pozdrowienie w biurach',
          ],
        },
        {
          h3: 'Wchodzenie do pomieszczenia lub sklepu',
          content:
            'Wchodząc do przestrzeni, gdzie przebywają inni, Rosjanie zazwyczaj witają się **Здравствуйте** (formalnie) lub **Привет** (nieformalnie, do przyjaciół). W małych miastach i wsiach witanie mijanych nieznajomych jest normą społeczną.',
          bullets: [
            'Wejście do biura: **Здравствуйте, добрый день**',
            'Wejście do domu przyjaciela: **Привет!** (do rówieśnika) lub **Здравствуйте!** (do rodziny)',
            'Wejście do sklepu: **Здравствуйте** lub skinienie głową wystarczy',
          ],
        },
        {
          h3: 'Pozdrawianie grup',
          content:
            '**Здравствуйте** to prawidłowa forma do formalnego pozdrowienia grupy. **Привет всем!** (Cześć wszystkim!) to nieformalne odpowiedni dla grupy przyjaciół lub bliskich współpracowników.',
        },
      ],
    },
    {
      h2: 'Wskazówki dotyczące wymowy i typowe błędy',
      content:
        'Największym wyzwaniem dla większości uczących się jest **Здравствуйте** — wygląda niemożliwie, ale staje się do opanowania po poznaniu triku.',
      subsections: [
        {
          h3: 'Jak wymówić Здравствуйте',
          content:
            '**Здравствуйте** ma 12 liter, ale wymawia się tylko **8 dźwięków**. Klucz: pierwsze **В** (po ЗД) jest nieme w naturalnej mowie.\n\nPodziel na 3 sylaby:\n1. **ЗДРА** = /zdra/ (grupa ЗД jak „zd" w angielskim „Wednesday")\n2. **ВСТВУЙ** → pierwsze В nieme → mów **СТВУЙ** = /stvooy/\n3. **ТЕ** = /tye/\n\nWynik: **ZDRA — stvooy — tye** (akcent na drugiej sylabie).\n\nĆwicz powoli trzy razy, potem przyspiesz. Większość uczących się uzyskuje rozpoznawalną wersję w 20 minut.',
        },
        {
          h3: 'Typowe błędy, których należy unikać',
          content:
            '**Błąd 1: Używanie Привет wobec nieznajomych lub starszych osób.** To najczęstszy błąd kulturowy. W rosyjskim używanie nieoficjalnego rejestru z nieznajomymi uchodzi za nieuprzejme — szczególnie między pokoleniami. Zawsze domyślnie używaj **Здравствуйте** z osobami, których nie znasz osobiście.\n\n**Błąd 2: Wymawianie wszystkich liter Здравствуйте.** Nie próbuj mówić ich wszystkich — rdzennni mówiący tego nie robią. Pierwsze В zawsze znika w naturalnej mowie.\n\n**Błąd 3: Używanie Спокойной ночи jako wieczornego pozdrowienia.** Po rosyjsku **Спокойной ночи** to tylko pożegnanie przed snem — nigdy pozdrowienie. Do wieczornego powitania używaj **Добрый вечер**.\n\n**Błąd 4: Zapominanie o porze dnia.** Mówienie **Добрый вечер** rano zdezorientuje rozmówcę.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Jaka jest różnica między Здравствуйте a Привет po rosyjsku?',
      answer:
        '**Здравствуйте** to formalne pozdrowienie używane z nieznajomymi, specjalistami, starszymi osobami i w oficjalnych kontekstach. **Привет** to nieformalne pozdrowienie dla przyjaciół, rodziny i rówieśników. Użycie **Привет** w formalnym kontekście może być uznane za nieuprzejme; użycie **Здравствуйте** z bliskim przyjacielem brzmi sztywno.',
    },
    {
      question: 'Jak powiedzieć „dzień dobry" po rosyjsku?',
      answer:
        '**Доброе утро** (Dobroye utro) to „dzień dobry" rano po rosyjsku, używane do ok. południa. Forma przymiotnika **доброе** jest nijakiego rodzaju, bo утро (ranek) to rzeczownik nijaki. To pozdrowienie sprawdza się zarówno w kontekstach formalnych, jak i nieformalnych.',
    },
    {
      question: 'Czy Привет jest formalne czy nieformalne?',
      answer:
        '**Привет** (Privet) jest nieformalne — odpowiednik „cześć" lub „hej". Powinno być używane tylko z osobami, które znasz osobiście: przyjaciółmi, rodziną, rówieśnikami lub dziećmi. W formalnych kontekstach — z nieznajomymi, urzędnikami, starszymi osobami lub zawodowo — używaj **Здравствуйте**.',
    },
    {
      question: 'Jak powiedzieć do widzenia po rosyjsku w sposób formalny?',
      answer:
        'Formalnym sposobem pożegnania po rosyjsku jest **До свидания** (Do svidaniya), które dosłownie oznacza „do spotkania". Dla cieplejszego formalnego pożegnania możesz dodać **Всего доброго** lub **Всего хорошего** (Wszystkiego dobrego). **До встречи** (Do zobaczenia) jest nieco mniej formalne.',
    },
    {
      question: 'Co mówią Rosjanie odbierając telefon?',
      answer:
        'Odbierając telefon, Rosjanie zazwyczaj mówią **Алло** (Allo) — zapożyczone z języka francuskiego. Między bliskimi kontaktami zwykłe **Да?** (Tak?) jest popularne. W środowisku zawodowym można usłyszeć **Слушаю** (Słucham) lub nazwę firmy, po której następuje слушаю.',
    },
    {
      question: 'Czy mogę używać Добрый день jako formalnego pozdrowienia?',
      answer:
        'Tak — **Добрый день** (Dzień dobry, używane od ok. południa do 18:00) jest w pełni odpowiednie jako formalne pozdrowienie i brzmi ciepło, ale z szacunkiem. Możesz go bezpiecznie używać zamiast **Здравствуйте** w większości formalnych sytuacji w ciągu dnia.',
    },
  ],
  conclusion:
    'Rosyjskie pozdrowienia to znacznie więcej niż wymowa — odzwierciedlają całą strukturę społeczną języka. **Здравствуйте** sygnalizuje szacunek i dystans; **Привет** sygnalizuje ciepło i bliskość. Pozdrowienia zależne od pory dnia pokazują uwagę na kontekst; pożegnania świadczą o trosce o rozmówcę.\n\nZacznij od podstaw: **Здравствуйте** w sytuacjach formalnych, **Привет** w nieformalnych, **Добрый день** jako bezpieczna neutralna opcja, oraz **До свидания** / **Пока** do pożegnań. Gdy te formy staną się automatyczne, rozszerz swój repertuar.\n\nPozdrowienia są Twoim punktem wejścia do rosyjskiego — ale prawdziwa praca zaczyna się z gramatyką. Rzeczowniki, zaimki i przymiotniki w każdej rozmowie zmieniają formę w sześciu rosyjskich przypadkach, i **opanowanie tych deklinacji jest tym, co zamienia niepewny rosyjski w płynną rozmowę**.',
  ctaText: 'Pobierz Russian Cases with Anna — Za darmo',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-most-common-words',
      label: '100 najczęstszych słów rosyjskich: niezbędna lista słownictwa dla początkujących',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Akcent w języku rosyjskim: dlaczego zmienia wszystko (i jak go opanować)',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: 'Ile czasu zajmuje nauka rosyjskiego? (Realistyczny harmonogram)',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 najlepszych darmowych zasobów do nauki rosyjskiego w 2026',
    },
    { href: '/practice', label: 'Darmowy quiz deklinacyjny (wszystkie sześć przypadków)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rosyjskie pozdrowienia: jak powiedzieć cześć po rosyjsku (kompletny przewodnik 2026)',
    description:
      'Opanuj wszystkie rosyjskie pozdrowienia: formalne Здравствуйте, nieformalne Привет, pozdrowienia zależne od pory dnia, pożegnania i pozdrowienia telefoniczne.',
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Rodowity Francuz uczący się rosyjskiego, dzieli się praktycznymi wskazówkami.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-greetings-guide',
    },
    keywords:
      'rosyjskie pozdrowienia, jak powiedzieć cześć po rosyjsku, привет, здравствуйте, formalne pozdrowienia rosyjskie, do widzenia po rosyjsku',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
