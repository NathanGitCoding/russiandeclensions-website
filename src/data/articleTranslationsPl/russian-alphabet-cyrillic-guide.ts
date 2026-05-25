import type { LearnArticle } from '../learnArticles';

/** Polskie tłumaczenie artykułu `russian-alphabet-cyrillic-guide`. */
export const russianAlphabetCyrillicGuidePl: LearnArticle = {
  slug: 'russian-alphabet-cyrillic-guide',
  title: 'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach',
  metaTitle:
    'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach (Kompletny przewodnik 2026) | Russian Cases with Anna',
  metaDescription:
    'Naucz się rosyjskiego alfabetu cyrylicy w 3 jasnych krokach: znane litery, fałszywi przyjaciele i nowe litery — ze wskazówkami fonetycznymi, technikami pamięciowymi i 7-dniowym planem nauki.',
  keywords: [
    'rosyjski alfabet',
    'alfabet cyrylicy',
    'nauka rosyjskiego alfabetu',
    'rosyjskie litery',
    'cyrylica dla początkujących',
    'jak czytać po rosyjsku',
  ],
  h1: 'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach',
  heroImage: {
    src: '/articles/russian-alphabet-cyrillic-guide.webp',
    alt: 'Rosyjskie litery cyrylicy w zeszycie do nauki',
    width: 1200,
    height: 630,
  },
  introByline: {
    text: '**Napisał Nathan** — native speaker języka francuskiego; uczę się rosyjskiego i dzielę się tym, co naprawdę działa w gramatyce, przypadkach i codziennej praktyce.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, założyciel Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  intro:
    'Nauka czytania po rosyjsku przypomina stanie przed zamkniętymi drzwiami — dopóki nie zdasz sobie sprawy, że masz już większość kluczy.\n\nAlfabet cyrylicy ma **33 litery**, w porównaniu do 26 w polskim alfabecie łacińskim. Mniej więcej jedna trzecia z nich wyda się od razu znajoma; kolejna trzecia to wzrokowi oszuści, którzy wyglądają jak litery łacińskie, ale wymawiają się zupełnie inaczej; ostatnia trzecia to litery naprawdę nowe — choć prostsze do nauczenia, niż mogłoby się wydawać. Cały system może wskoczyć na miejsce w ciągu **jednego do dwóch tygodni** krótkich codziennych ćwiczeń.\n\nTen przewodnik sortuje wszystkie 33 litery na trzy grupy, daje techniki pamięciowe dla każdej trudnej litery i wyjaśnia zasady wymowy — akcent i redukcję samogłosek — które nadają rosyjskiemu jego charakterystyczne brzmienie. Na końcu będziesz w stanie **poprawnie odczytać każde rosyjskie słowo**, co stanowi fundament dla wszystkiego pozostałego.',
  whatYouLearn: [
    'Wszystkie 33 litery cyrylicy podzielone na 3 łatwe grupy',
    'Techniki pamięciowe dla każdej trudnej lub nieznanej litery',
    'Dlaczego rosyjski akcent (ударение) jest kluczem do poprawnej wymowy',
    'Jak redukcja samogłosek zmienia brzmienie języka rosyjskiego',
    'Praktyczny 7-dniowy plan, by przejść od zera do pewnego czytania cyrylicy',
  ],
  sections: [
    {
      h2: 'Dlaczego cyrylica jest łatwiejsza, niż wygląda',
      content:
        'Większość uczących się boi cyrylicy, ponieważ na pierwszy rzut oka wygląda obco. W praktyce jest to jeden z najbardziej **fonetycznie spójnych** alfabetów w powszechnym użyciu — znacznie regularniejszy niż polska ortografia z jej wyjątkami.\n\nTrzy rzeczy sprawiają, że cyrylica jest do opanowania:\n\n**1. Jest fonetyczna.** Każda litera ma mniej więcej jeden dźwięk. Gdy znasz dźwięki, możesz poprawnie przeczytać każde rosyjskie słowo.\n\n**2. Jedna trzecia liter jest już znajoma.** Pięć wygląda tak samo jak łacińskie odpowiedniki i brzmi tak samo. Osiem kolejnych wygląda znajomo, ale ma inne dźwięki — co jest pomocne, bo kształty już rozpoznajesz.\n\n**3. Nie potrzebujesz pisma odręcznego, żeby zacząć.** Drukowana cyrylica to to, co napotkasz w książkach, aplikacjach i treściach cyfrowych. Naucz się najpierw czytać druk.',
      table: {
        caption: 'Wszystkie 33 rosyjskie litery na jeden rzut oka',
        headers: ['Litera', 'Nazwa', 'Przybliżony dźwięk', 'Grupa'],
        rows: [
          ['А а', 'a', '/a/ — jak „a" w „auto"', 'Znana'],
          ['Б б', 'be', '/b/ — jak „b" w „buty"', 'Nowa'],
          ['В в', 've', '/v/ — jak „w" w „woda"', 'Fałszywy przyjaciel'],
          ['Г г', 'ge', '/g/ — jak „g" w „góra"', 'Nowa'],
          ['Д д', 'de', '/d/ — jak „d" w „dom"', 'Nowa'],
          ['Е е', 'je', '/je/ — jak „je" w „jeleń"', 'Fałszywy przyjaciel'],
          ['Ё ё', 'jo', '/jo/ — jak „jo" w „jodła"', 'Fałszywy przyjaciel'],
          ['Ж ж', 'że', '/ʒ/ — jak „ż" w „żaba"', 'Nowa'],
          ['З з', 'ze', '/z/ — jak „z" w „zero"', 'Nowa'],
          ['И и', 'i', '/i/ — jak „i" w „igła"', 'Nowa'],
          ['Й й', 'i krótkie', '/j/ — jak „j" w „jutro"', 'Nowa'],
          ['К к', 'ka', '/k/ — jak „k" w „kot"', 'Znana'],
          ['Л л', 'el', '/l/ — jak „l" w „lampa"', 'Nowa'],
          ['М м', 'em', '/m/ — jak „m" w „mama"', 'Znana'],
          ['Н н', 'en', '/n/ — jak „n" w „noc"', 'Fałszywy przyjaciel'],
          ['О о', 'o', '/o/ — jak „o" w „oko" (akcentowane)', 'Znana'],
          ['П п', 'pe', '/p/ — jak „p" w „park"', 'Nowa'],
          ['Р р', 'er', '/r/ — wibrujące r', 'Fałszywy przyjaciel'],
          ['С с', 'es', '/s/ — jak „s" w „słońce"', 'Fałszywy przyjaciel'],
          ['Т т', 'te', '/t/ — jak „t" w „tam"', 'Znana'],
          ['У у', 'u', '/u/ — jak „u" w „ulica"', 'Fałszywy przyjaciel'],
          ['Ф ф', 'ef', '/f/ — jak „f" w „fotel"', 'Nowa'],
          ['Х х', 'kha', '/x/ — jak „ch" w „chleb"', 'Fałszywy przyjaciel'],
          ['Ц ц', 'ce', '/ts/ — jak „c" w „cukier"', 'Nowa'],
          ['Ч ч', 'cze', '/tʃ/ — jak „cz" w „czas"', 'Nowa'],
          ['Ш ш', 'sza', '/ʃ/ — jak „sz" w „szkoła"', 'Nowa'],
          ['Щ щ', 'szcza', '/ʃtʃ/ — jak „szcz" w „szczur"', 'Nowa'],
          ['Ъ ъ', 'twardy znak', '(bez dźwięku — twardy znak)', 'Nowa'],
          ['Ы ы', 'jery', '/ɨ/ — ciemne „y"', 'Nowa'],
          ['Ь ь', 'miękki znak', '(bez dźwięku — miękki znak)', 'Nowa'],
          ['Э э', 'e', '/e/ — jak „e" w „era"', 'Nowa'],
          ['Ю ю', 'ju', '/ju/ — jak „ju" w „jutro"', 'Nowa'],
          ['Я я', 'ja', '/ja/ — jak „ja" w „jama"', 'Nowa'],
        ],
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Krok 1: 5 znajomych liter',
      content:
        'Zacznij tutaj. Te pięć liter wygląda tak samo jak ich łacińskie odpowiedniki i brzmi tak samo — bez żadnych pułapek ani niespodzianek. Nauka zajmuje około dziesięciu minut.',
      table: {
        headers: ['Litera', 'Dźwięk', 'Jak po polsku', 'Przykładowe słowo'],
        rows: [
          ['А а', '/a/', '"a" w „auto"', 'атом (atom)'],
          ['К к', '/k/', '"k" w „kot"', 'кот (kot)'],
          ['М м', '/m/', '"m" w „mama"', 'мама (mama)'],
          ['О о', '/o/', '"o" w „oko" (akcentowane)', 'он (on)'],
          ['Т т', '/t/', '"t" w „tam"', 'там (tam)'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        '**О** brzmi jak „o" tylko wtedy, gdy jest **akcentowane**. Nieakcentowane redukuje się do słabego „a" (więcej w sekcji o redukcji samogłosek).',
        'Wszystkie pięć liter jest bardzo częstych — pojawiają się w prawie każdym rosyjskim zdaniu.',
        'Ćwicz, szukając tych liter w dowolnym rosyjskim tekście i wypowiadając je na głos.',
      ],
    },
    {
      h2: 'Krok 2: 8 fałszywych przyjaciół',
      content:
        'Te osiem liter wygląda jak znane litery łacińskie — ale wydają zupełnie inne dźwięki. To najczęstsze źródło zamieszania dla początkujących. Naucz się ich uważnie; gdy już osiądzą, nauczysz się 13 z 33 liter.',
      table: {
        headers: ['Litera', 'Wygląda jak', 'Prawdziwy dźwięk', 'Technika pamięciowa'],
        rows: [
          ['В в', 'B', '/v/ — jak „w"', '„wódka" zaczyna się od В i brzmi jak W/V'],
          ['Е е', 'E', '/je/ — jak „je"', '"JE" — jak polskie „je" w „jeleń"'],
          ['Ё ё', 'E z kropkami', '/jo/ — jak „jo"', '"JO" — dwie kropki sygnalizują dźwięk „jo"'],
          ['Н н', 'H', '/n/ — jak „n"', '„eN" — nazwa litery daje dźwięk'],
          ['Р р', 'P', '/r/ — wibrujące', 'Wibrujące r — Р dla Россия (Rosja)'],
          ['С с', 'C', '/s/ — jak „s"', '„С" jak „S" — ten sam pomysł'],
          ['У у', 'Y', '/u/ — jak „u"', '"U" — długie U jak w „ulica"'],
          ['Х х', 'X', '/x/ — jak „ch"', '„ch" jak w „chleb" — ale z gardła'],
        ],
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Pomylenie **В z B** to najczęstszy błąd. Ćwicz oddzielnie, dopóki В zawsze nie mówi „W/V".',
        '**Р** to wibrujące lub uderzane r — polska wymowa „r" jest tu podobna.',
        '**Х** to polskie „ch" (jak w „chleb"), ale nieco łagodniejsze w rosyjskim.',
        'Gdy rozpoznasz te 8 liter bez wahania, znasz 13 z 33 — prawie **40% alfabetu**.',
      ],
    },
    {
      h2: 'Krok 3: 20 nowych liter',
      content:
        'Pozostałe 20 liter nie ma oczywistego łacińskiego odpowiednika wizualnego. Niektóre odpowiadają dźwiękom istniejącym w języku polskim (Б = B, Д = D, Л = L, П = P, Ф = F); inne wprowadzają dźwięki nieobecne w polskim (Ж, Ц, Щ, Ы).',
      subsections: [
        {
          h3: '3a — Nowe litery ze znajomymi polskimi dźwiękami',
          content:
            'Te litery wyglądają nieznajomo, ale wydają dźwięki, które już codziennie wymawiasz po polsku. Najpierw ucz się dźwięku, potem kształtu.',
          table: {
            headers: ['Litera', 'Dźwięk', 'Jak po polsku', 'Technika pamięciowa'],
            rows: [
              ['Б б', '/b/ — „buty"', '"b"', 'Wygląda jak 6 — „Б za B-sześć"'],
              ['Г г', '/g/ — „góra"', '"g"', 'Wygląda jak odwrócone L — dźwięk „G"'],
              ['Д д', '/d/ — „dom"', '"d"', 'Wygląda jak namiot — „Д dla Dom"'],
              ['З з', '/z/ — „zero"', '"z"', 'Wygląda jak cyfra 3 — „З dla Zero"'],
              ['И и', '/i/ — „igła"', '"i"', 'Jak odwrócone N — „И = I"'],
              ['Й й', '/j/ — „jutro"', '"j" w „jutro"', 'И z łukiem — krótkie И, brzmi jak „J"'],
              ['Л л', '/l/ — „lampa"', '"l"', 'Wygląda jak odwrócone V — „Л dla Lampa"'],
              ['П п', '/p/ — „park"', '"p"', 'Wygląda jak brama П — „П dla Park"'],
              ['Ф ф', '/f/ — „fotel"', '"f"', 'Wygląda jak fi Φ — dźwięk F'],
            ],
          },
        },
        {
          h3: '3b — Nowe litery z nowymi dźwiękami',
          content:
            'Te litery wprowadzają dźwięki wymagające trochę ćwiczeń — ale każdy jest fonetycznie spójny, co znaczy, że dźwięk nigdy się nie zmienia.',
          table: {
            headers: ['Litera', 'Dźwięk', 'Najbliższe po polsku', 'Technika pamięciowa'],
            rows: [
              ['Ж ж', '/ʒ/ — „żaba"', '"ż" w „żaba"', 'Wygląda jak owad — „Ж brzęczy"'],
              ['Ц ц', '/ts/ — „cukier"', '"c" w „cukier"', 'Dwie litery w jednej: T + S = Ц'],
              ['Ч ч', '/tʃ/ — „czas"', '"cz" w „czas"', 'Wygląda jak odwrócona 4 — „Ч dla Czetyrye (cztery)"'],
              ['Ш ш', '/ʃ/ — „szkoła"', '"sz" w „szkoła"', 'Wygląda jak grzebień — „Ш robi SZ"'],
              ['Щ щ', '/ʃtʃ/ — „szczur"', '"szcz" w „szczur"', 'Ш z ogonem = twardsze Ш'],
              ['Э э', '/e/ — „era"', '"e" w „era"', 'Odwrócone С — „Э = czyste E"'],
              ['Ю ю', '/ju/ — „jutro"', '"ju" w „jutro"', 'О z laską — „Ю = JU"'],
              ['Я я', '/ja/ — „jama"', '"ja" w „jama"', 'Odwrócone R — „Я znaczy Ja"'],
            ],
          },
        },
        {
          h3: '3c — Znaki specjalne: Ъ, Ы, Ь',
          content:
            'Trzy litery wymagają specjalnego traktowania: **Ь** (miękki znak), **Ъ** (twardy znak) i **Ы** (wyjątkowa samogłoska).\n\n**Ь (miękki znak)** nie ma własnego dźwięku. Zmiękcza poprzedzającą spółgłoskę — wyobraź sobie, że przyciskasz język do podniebienia, kończąc spółgłoskę. Przykład: брат (brat) kontra брать (brać).\n\n**Ъ (twardy znak)** jest rzadki. Tworzy krótką pauzę między prefiksem a następną sylabą (np. съезд — kongres). Nie przejmuj się nim do poziomu średniozaawansowanego.\n\n**Ы** to najtrudniejsza samogłoska dla polskich uczących się. To ciemne, scentralizowane „y" — by je przybliżyć, powiedz „y" i cofnij lekko język. Przykłady: ты (ty), мы (my). Z ćwiczeniami staje się naturalne.',
        },
      ],
    },
    {
      h2: 'Redukcja samogłosek: dlaczego rosyjski brzmi inaczej niż wygląda',
      content:
        'Oto zasada, która dezorientuje większość początkujących: **Rosyjskie samogłoski zmieniają dźwięk w zależności od tego, czy są akcentowane czy nie.**\n\nNajbardziej zauważalny przykład to litera О:\n- **Akcentowane О** brzmi jak „o" w „oko": большой (duży) — О w большой jest akcentowane: bol-SZOJ.\n- **Nieakcentowane О** redukuje się do słabego „a": молоко (mleko) — brzmi jak „muh-luh-KO", nie „MO-ło-KO".\n\nА też redukuje się, gdy jest nieakcentowane, choć mniej dramatycznie. Nazywa się to **redukcją samogłosek** (редукция) i dlatego mówiony rosyjski może brzmieć bardzo inaczej niż fonetyczny odczyt.',
      table: {
        headers: ['Samogłoska', 'Akcentowana', 'Nieakcentowana', 'Przykład'],
        rows: [
          ['О', '/o/ — „oko"', '/ə/ — redukuje się do „a"', 'молоко → muh-luh-KO'],
          ['Е', '/je/ — „jeleń"', '/jɪ/ — redukuje się do „ji"', 'телефон → tji-lji-FON'],
          ['А', '/a/ — „auto"', '/ə/ — lżejsze „a"', 'трамвай → tram-WAJ'],
          ['Я', '/ja/ — „jama"', '/jɪ/ — redukuje się do „ji"', 'язык → ji-ZYIK'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Słowniki zaznaczają akcent akcentem nad akcentowaną samogłoską (np. молоко́). Używaj ich — akcent nie jest przewidywalny.',
        'Nie musisz opanować redukcji samogłosek przed rozpoczęciem czytania; wystarczy wiedzieć, że istnieje.',
        'Redukcja staje się naturalna przy słuchaniu dużej ilości rosyjskiego języka mówionego razem z czytaniem.',
      ],
    },
    {
      h2: 'Rosyjski akcent (ударение): ukryte wyzwanie',
      content:
        'Rosyjski akcent jest swobodny (może padać na dowolną sylabę) i ruchomy (może się przesuwać między formami gramatycznymi tego samego słowa). Nie ma zasady mówiącej, gdzie pada akcent — trzeba go uczyć się z każdym słowem.\n\nDlaczego to ważne?\n\n1. **Dźwięki samogłosek się zmieniają** (jak pokazano powyżej).\n2. **Znaczenie słowa może się zmienić**: за́мок znaczy „zamek (budowla)"; замо́к znaczy „zamek (kłódka)". Te same litery, inny akcent, inne słowo.\n3. **Formy gramatyczne zmieniają znaczenie**: я пишу́ (piszę) kontra они́ пи́шут (oni piszą) — zarówno końcówki, jak i akcent przesuwają się.\n\nPraktyczna rada: **zawsze zaznaczaj akcent, gdy piszesz nowe słowo w zeszycie.**',
      table: {
        headers: ['Słowo', 'Akcent', 'Znaczenie', 'Uwaga'],
        rows: [
          ['за́мок', '1. sylaba', 'zamek (budowla)', 'ZA-mok'],
          ['замо́к', '2. sylaba', 'zamek (kłódka)', 'za-MOK'],
          ['до́рога', '1. sylaba', 'droga', 'DO-ro-ga'],
          ['дорога́', '3. sylaba', 'drogi / ukochany', 'do-ro-GA'],
        ],
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Pisanie cyrylicą: szybka konfiguracja',
      content:
        'Pisanie to jeden z najszybszych sposobów na rozpoznawanie liter. Konfiguracja cyrylickiej klawiatury zajmuje dwie minuty.',
      subsections: [
        {
          h3: 'Na iOS (iPhone / iPad)',
          content:
            'Przejdź do **Ustawienia → Ogólne → Klawiatura → Klawiatury → Dodaj klawiaturę**. Wybierz **Rosyjski**. Po dodaniu dotknij ikony globusa, aby przełączać między polskim a rosyjskim.',
        },
        {
          h3: 'Na Androidzie',
          content:
            'Przejdź do **Ustawienia → Zarządzanie ogólne → Język i klawiatura → Klawiatura ekranowa**. Dodaj rosyjski. Przełączaj, dotykając wskaźnika języka na pasku spacji. Gboard i SwiftKey obsługują rosyjski.',
        },
        {
          h3: 'Na komputerze (Windows / Mac)',
          content:
            'Windows: Ustawienia → Czas i język → Język → Dodaj rosyjski → Rosyjski fonetyczny. Mac: Ustawienia systemowe → Klawiatura → Źródła wejściowe → dodaj rosyjski (układ fonetyczny jest najłatwiejszy dla początkujących).',
        },
      ],
      bullets: [
        'Używaj **układu fonetycznego**, jeśli jest dostępny — mapuje litery cyrylickie na podobnie brzmiące klawisze łacińskie.',
        'Napisanie słowa pięć razy jest warte więcej niż przeczytanie go dwadzieścia razy dla rozpoznawania liter.',
        'Od pierwszego dnia używaj cyrylickiej klawiatury w prawdziwych wiadomościach.',
      ],
    },
    {
      h2: 'Twój 7-dniowy plan opanowania rosyjskiego alfabetu',
      content:
        'Dziesięć minut dziennie przez siedem dni wystarczy, aby osiągnąć funkcjonalne czytanie cyrylicy. Oto plan dzień po dniu:',
      table: {
        headers: ['Dzień', 'Skupienie', 'Cel', 'Metoda ćwiczeń'],
        rows: [
          ['Dzień 1', '5 znanych liter (А К М О Т)', 'Natychmiastowe rozpoznawanie', 'Napisz każdą literę 10×; przeczytaj 5 krótkich słów'],
          ['Dzień 2', '8 fałszywych przyjaciół (В Е Ё Н Р С У Х)', 'Znać pułapkę dźwiękową każdej litery', 'Zasłoń kolumnę dźwięku i powiedz; sprawdź'],
          ['Dzień 3', 'Nowe litery ze znanych dźwiękami (Б Г Д З И Й Л П Ф)', 'Przeczytać podstawowe słowo z każdą literą', '3 słowa na literę; dodaj do Anki'],
          ['Dzień 4', 'Nowe litery z nowymi dźwiękami (Ж Ц Ч Ш Щ Э Ю Я)', 'Poprawnie wymówić każdy dźwięk', 'Shadowing: słuchaj + powtarzaj 10×'],
          ['Dzień 5', 'Znaki specjalne (Ъ Ы Ь) + redukcja samogłosek', 'Zrozumieć funkcję; wymówić Ы', 'Minimalne pary: брат / брать; мы / ми'],
          ['Dzień 6', 'Pełna powtórka alfabetu', 'Czytać 33 litery bez wahania', 'Losowy test flash: tasuj i identyfikuj'],
          ['Dzień 7', 'Czytaj krótki rosyjski tekst na głos', 'Literuj każde słowo w akapicie', 'Duolingo / Babbel / dowolny tekst'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Prowadź zeszyt ze wszystkimi 33 literami, ich dźwiękami i jednym przykładowym słowem dla każdej.',
        'Po Dniu 7: codziennie 5 minut czytaj rosyjski tekst na głos — nawet jeśli jeszcze nie rozumiesz słów.',
        'Dodaj cyrylicką klawiaturę do telefonu w Dniu 1 i używaj jej od samego początku.',
      ],
    },
  ],
  leadMagnetCta: {
    title: 'Od alfabetu do gramatyki: ćwicz 6 rosyjskich przypadków',
    description:
      'Gdy już czytasz cyrylicę, kolejnym krokiem jest rosyjska gramatyka — a przypadki to podstawowe wyzwanie. Russian Cases with Anna pozwala ćwiczyć wszystkie sześć przypadków z natychmiastową informacją zwrotną — na iOS i Androidzie.',
    ctaText: 'Pobierz Russian Cases with Anna — darmowy start →',
    ctaHref: '/',
  },
  faq: [
    {
      question: 'Jak długo trwa nauka rosyjskiego alfabetu?',
      answer:
        'Większość uczących się potrafi powoli, ale poprawnie czytać rosyjskie teksty po jednym do dwóch tygodniach codziennych ćwiczeń po 10–15 minut. Wygodna, naturalna prędkość czytania zwykle rozwija się w ciągu następnego miesiąca.',
    },
    {
      question: 'Czy cyrylica jest trudna dla polskich uczących się?',
      answer:
        'Cyrylica jest ogólnie uważana za jedną z łatwiejszych części nauki rosyjskiego. W przeciwieństwie do rosyjskiej gramatyki (przypadki, aspekty, koniugacja), alfabet jest skończony i można go nauczyć się w ciągu kilku dni.',
    },
    {
      question: 'Czy muszę uczyć się rosyjskiego pisma odręcznego?',
      answer:
        'Nie na początku. Drukowana cyrylica to to, co napotkasz w książkach, aplikacjach, stronach internetowych i pisanych tekstach. Rosyjskie pismo odręczne jest zasadniczo różne i potrzebne tylko do czytania odręcznych notatek lub starych dokumentów.',
    },
    {
      question: 'Czy muszę zapamiętać wszystkie 33 litery przed nauką rosyjskiej gramatyki?',
      answer:
        'Nie — czekanie na doskonałą znajomość każdej litery to częsta pułapka prokrastynacji. W Dniu 7 powyższego planu powinieneś zacząć dotykać podstaw gramatyki, nawet jeśli Ы i Щ nie są jeszcze automatyczne.',
    },
    {
      question: 'Jaka jest różnica między Ш a Щ?',
      answer:
        'Ш to twarde „sz" jak w „szkoła". Щ to miększe, dłuższe „szcz" — jak „szcz" w „szczur". W codziennej mowie rozróżnienie jest ważne: шить (szyć) kontra считать (liczyć).',
    },
    {
      question: 'Czym jest miękki znak (Ь) i czy muszę się nim przejmować?',
      answer:
        'Miękki znak zmiękcza poprzedzającą spółgłoskę — lingwistycznie ją palatalizuje. W praktyce zmienia wymowę i wpływa też na gramatykę. Napotkasz go stale. Rozpoznawaj go od Dnia 1 i stopniowo ucz się jego efektu przez prawdziwe przykłady.',
    },
  ],
  conclusionIntro:
    'Nauka cyrylicy to jednorazowa inwestycja, która otwiera wszystko inne w rosyjskim. Oto najważniejsze wnioski:',
  conclusionBullets: [
    '**5 znajomych liter** (А К М О Т) — uczyć się w jednej sesji',
    '**8 fałszywych przyjaciół** (В Е Ё Н Р С У Х) — najważniejsza grupa do starannego ćwiczenia',
    '**20 nowych liter** — sortuj według trudności; większość odpowiada dźwiękom, które już wydajesz',
    'Rosyjski jest **fonetycznie spójny** — ucz się dźwięków raz i czytaj wszystko',
    '**Akcent i redukcja samogłosek** wyjaśniają, dlaczego mówiony rosyjski brzmi inaczej',
    '**7-dniowy plan** po 10 min./dzień przeniesie cię od zera do funkcjonalnego czytania',
  ],
  conclusionOutro:
    'Gdy już czytasz cyrylicę, zaczyna się prawdziwe wyzwanie: gramatyka rosyjska, a przede wszystkim sześć przypadków gramatycznych. Zacznij je ćwiczyć wcześnie na russiandeclensions.com/practice — bezpłatnie, bez rejestracji.',
  internalLinks: [
    { href: '/practice', label: 'Bezpłatne ćwiczenia deklinacji rosyjskiej — wszystkie 6 przypadków' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rosyjskie przypadki wyjaśnione prosto: Przewodnik wizualny dla początkujących',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: 'Czy można nauczyć się rosyjskiego samodzielnie? Pełny plan',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 najlepszych darmowych zasobów do nauki rosyjskiego',
    },
  ],
  ctaText: 'Ćwicz rosyjskie przypadki — bezpłatnie →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rosyjski alfabet: naucz się cyrylicy w 3 prostych krokach',
    description:
      'Naucz się rosyjskiego alfabetu cyrylicy w 3 jasnych krokach: znane litery, fałszywi przyjaciele i nowe litery — ze wskazówkami fonetycznymi, technikami pamięciowymi i 7-dniowym planem nauki.',
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Person', name: 'Nathan', url: 'https://russiandeclensions.com/' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-alphabet-cyrillic-guide',
    },
  },
};
