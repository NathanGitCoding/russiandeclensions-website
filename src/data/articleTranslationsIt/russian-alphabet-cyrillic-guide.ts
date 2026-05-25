import type { LearnArticle } from '../learnArticles';

/** Traduzione italiana dell'articolo `russian-alphabet-cyrillic-guide`. */
export const russianAlphabetCyrillicGuideIt: LearnArticle = {
  slug: 'russian-alphabet-cyrillic-guide',
  title: "L'alfabeto russo: impara il cirillico in 3 semplici passi",
  metaTitle:
    "L'alfabeto russo: impara il cirillico in 3 semplici passi (Guida completa 2026) | Russian Cases with Anna",
  metaDescription:
    "Impara l'alfabeto cirillico russo in 3 passi chiari: lettere familiari, falsi amici e lettere nuove — con consigli di pronuncia, trucchi mnemonici e un piano di 7 giorni.",
  keywords: [
    'alfabeto russo',
    'alfabeto cirillico',
    'imparare alfabeto russo',
    'lettere russe',
    'cirillico per principianti',
    'come leggere il russo',
  ],
  h1: "L'alfabeto russo: impara il cirillico in 3 semplici passi",
  heroImage: {
    src: '/articles/russian-alphabet-cyrillic-guide.webp',
    alt: 'Lettere cirillico russo su un quaderno di apprendimento',
    width: 1200,
    height: 630,
  },
  introByline: {
    text: '**Scritto da Nathan** — madrelingua francese; sto imparando il russo e condivido ciò che funziona davvero per la grammatica, i casi e la pratica quotidiana.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondatore di Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  intro:
    "Imparare a leggere il russo sembra stare di fronte a una porta chiusa — finché non ti rendi conto di avere già la maggior parte delle chiavi.\n\nL'alfabeto cirillico ha **33 lettere**, rispetto alle 21 dell'italiano. Circa un terzo ti sembrerà immediatamente familiare; un altro terzo sono impostori visivi che assomigliano a lettere latine ma hanno suoni completamente diversi; l'ultimo terzo è genuinamente nuovo — ma più semplice da imparare di quanto potresti aspettarti. L'intero sistema può consolidarsi in **una o due settimane** di breve pratica quotidiana.\n\nQuesta guida ordina tutte le 33 lettere in tre gruppi, fornisce trucchi mnemonici per ogni lettera difficile e spiega le regole di pronuncia — accento e riduzione vocalica — che danno al russo la sua sonorità caratteristica. Alla fine, sarai in grado di **pronunciare correttamente qualsiasi parola russa**, che è la base su cui si costruisce tutto il resto.",
  whatYouLearn: [
    'Tutte le 33 lettere cirillico suddivise in 3 gruppi gestibili',
    'Trucchi mnemonici per ogni lettera difficile o non familiare',
    "Perché l'accento russo (ударение) è la chiave per una pronuncia corretta",
    'Come la riduzione vocalica cambia il modo in cui il russo suona realmente',
    'Un piano pratico di 7 giorni per passare da zero a una lettura cirillica sicura',
  ],
  sections: [
    {
      h2: 'Perché il cirillico è più facile di quanto sembri',
      content:
        "La maggior parte degli studenti teme il cirillico perché a prima vista sembra straniero. In pratica è uno degli alfabeti più **foneticamente coerenti** di uso comune — molto più regolare dell'ortografia italiana.\n\nTre cose rendono il cirillico gestibile:\n\n**1. È fonetico.** Ogni lettera ha approssimativamente un suono. Una volta noti i suoni, puoi leggere qualsiasi parola russa correttamente.\n\n**2. Un terzo delle lettere è già familiare.** Cinque sembrano identiche ai loro equivalenti latini e suonano allo stesso modo. Altre otto sembrano familiari ma hanno suoni diversi — il che è utile perché ne riconosci già le forme.\n\n**3. Non hai bisogno della scrittura corsiva per iniziare.** Il cirillico stampato è quello che troverai in libri, app e contenuti digitali. Impara prima a leggere il cirillico stampato.",
      table: {
        caption: "Tutte le 33 lettere russe a colpo d'occhio",
        headers: ['Lettera', 'Nome', 'Suono approssimativo', 'Gruppo'],
        rows: [
          ['А а', 'a', '/a/ — come „a" in „casa"', 'Familiare'],
          ['Б б', 'be', '/b/ — come „b" in „bello"', 'Nuova'],
          ['В в', 've', '/v/ — come „v" in „vino"', 'Falso amico'],
          ['Г г', 'ghe', '/g/ — come „g" in „gatto"', 'Nuova'],
          ['Д д', 'de', '/d/ — come „d" in „dove"', 'Nuova'],
          ['Е е', 'ye', '/je/ — come „ye" in „ieri"', 'Falso amico'],
          ['Ё ё', 'yo', '/jo/ — come „yo" in „yogurt"', 'Falso amico'],
          ['Ж ж', 'she', '/ʒ/ — come „g" in „giorno"', 'Nuova'],
          ['З з', 'ze', '/z/ — come „z" in „zero"', 'Nuova'],
          ['И и', 'i', '/i/ — come „i" in „isola"', 'Nuova'],
          ['Й й', 'i breve', '/j/ — come „i" in „ieri"', 'Nuova'],
          ['К к', 'ka', '/k/ — come „c" in „cane"', 'Familiare'],
          ['Л л', 'el', '/l/ — come „l" in „luna"', 'Nuova'],
          ['М м', 'em', '/m/ — come „m" in „mare"', 'Familiare'],
          ['Н н', 'en', '/n/ — come „n" in „notte"', 'Falso amico'],
          ['О о', 'o', '/o/ — come „o" in „oro" (tonica)', 'Familiare'],
          ['П п', 'pe', '/p/ — come „p" in „pane"', 'Nuova'],
          ['Р р', 'er', '/r/ — r vibrante', 'Falso amico'],
          ['С с', 'es', '/s/ — come „s" in „sole"', 'Falso amico'],
          ['Т т', 'te', '/t/ — come „t" in „tavolo"', 'Familiare'],
          ['У у', 'u', '/u/ — come „u" in „uva"', 'Falso amico'],
          ['Ф ф', 'ef', '/f/ — come „f" in „foto"', 'Nuova'],
          ['Х х', 'kha', '/x/ — come „ch" in tedesco „Bach"', 'Falso amico'],
          ['Ц ц', 'tse', '/ts/ — come „z" in „pizza"', 'Nuova'],
          ['Ч ч', 'ce', '/tʃ/ — come „c" in „ciao"', 'Nuova'],
          ['Ш ш', 'scia', '/ʃ/ — come „sc" in „scena"', 'Nuova'],
          ['Щ щ', 'scia+cia', '/ʃtʃ/ — sc + cia insieme', 'Nuova'],
          ['Ъ ъ', 'segno duro', '(nessun suono — segno duro)', 'Nuova'],
          ['Ы ы', 'yery', '/ɨ/ — i scura', 'Nuova'],
          ['Ь ь', 'segno morbido', '(nessun suono — segno morbido)', 'Nuova'],
          ['Э э', 'e', '/e/ — come „e" in „era"', 'Nuova'],
          ['Ю ю', 'yu', '/ju/ — come „iu" in „iugoslavia"', 'Nuova'],
          ['Я я', 'ya', '/ja/ — come „ia" in „ieri"', 'Nuova'],
        ],
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Passo 1: Le 5 lettere familiari',
      content:
        'Inizia qui. Queste cinque lettere sembrano identiche ai loro equivalenti latini e suonano allo stesso modo — nessun trucco, nessuna sorpresa. Impararle richiede circa dieci minuti.',
      table: {
        headers: ['Lettera', 'Suono', 'Come in italiano', 'Parola esempio'],
        rows: [
          ['А а', '/a/', '"a" in „casa"', 'атом (atomo)'],
          ['К к', '/k/', '"c" dura in „cane"', 'кот (gatto)'],
          ['М м', '/m/', '"m" in „mare"', 'мама (mamma)'],
          ['О о', '/o/', '"o" in „oro" (tonica)', 'он (lui)'],
          ['Т т', '/t/', '"t" in „tavolo"', 'там (là)'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        '**О** suona come „o" solo quando è **tonica**. Atona si riduce verso una „a" debole (vedi la sezione sulla riduzione vocalica).',
        'Tutte e cinque sono estremamente frequenti — compaiono in quasi ogni frase russa.',
        'Esercitati cercando queste lettere in qualsiasi testo russo e pronunciandole ad alta voce.',
      ],
    },
    {
      h2: 'Passo 2: Gli 8 falsi amici',
      content:
        'Queste otto lettere sembrano lettere latine conosciute — ma producono suoni completamente diversi. Questa è la fonte più comune di confusione per i principianti. Imparale con attenzione; una volta che si fissano, avrai imparato 13 delle 33 lettere.',
      table: {
        headers: ['Lettera', 'Sembra', 'Suono reale', 'Trucco mnemonico'],
        rows: [
          ['В в', 'B', '/v/ — come „v"', '"vodka" inizia con В e suona come V'],
          ['Е е', 'E', '/je/ — come „ye"', '"YE" — come „ie" in „ieri"'],
          ['Ё ё', 'E con punti', '/jo/ — come „yo"', '"YO" — i due punti segnalano il suono „yo"'],
          ['Н н', 'H', '/n/ — come „n"', '„eN" — il nome della lettera dà il suono'],
          ['Р р', 'P', '/r/ — vibrante', 'R vibrante — Р per Россия (Russia)'],
          ['С с', 'C', '/s/ — come „s"', '„С" come „S" — stessa idea'],
          ['У у', 'Y', '/u/ — come „u"', '"U" — come la „u" italiana'],
          ['Х х', 'X', '/x/ — come „ch" tedesco', 'Suono di „ch" in „Bach"'],
        ],
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "La confusione **В / B** è l'errore più frequente. Esercitala separatamente finché В non dice sempre „V\".",
        '**Р** è una r vibrante — come la r italiana in molte pronunce regionali.',
        '**Х** è il suono „ch" del tedesco „Bach" — in russo è leggermente più morbido.',
        "Quando riconosci queste 8 lettere senza esitare, conosci 13 delle 33 — quasi il **40% dell'alfabeto**.",
      ],
    },
    {
      h2: 'Passo 3: Le 20 lettere nuove',
      content:
        "Le restanti 20 lettere non hanno un ovvio equivalente visivo latino. Alcune corrispondono a suoni esistenti in italiano (Б = B, Д = D, Л = L, П = P, Ф = F); altre introducono suoni assenti nell'italiano (Ж, Ц, Щ, Ы).",
      subsections: [
        {
          h3: '3a — Lettere nuove con suoni italiani familiari',
          content:
            'Queste lettere sembrano sconosciute ma producono suoni che già usi ogni giorno in italiano. Impara prima il suono, poi la forma.',
          table: {
            headers: ['Lettera', 'Suono', 'Come in italiano', 'Trucco mnemonico'],
            rows: [
              ['Б б', '/b/ — „bello"', '"b"', 'Sembra un 6 — „Б per B-sei"'],
              ['Г г', '/g/ — „gatto"', '"g" dura', 'Sembra una Γ greca — suono „G"'],
              ['Д д', '/d/ — „dove"', '"d"', 'Sembra una tenda — „Д per Dom (casa)"'],
              ['З з', '/z/ — „zero"', '"z" sonora', 'Sembra il numero 3 — „З per Zero"'],
              ['И и', '/i/ — „isola"', '"i"', 'Come una N al contrario — „И = I"'],
              ['Й й', '/j/ — „ieri"', '"i" in „ieri"', 'И con accento breve — I corta, suona come „I"'],
              ['Л л', '/l/ — „luna"', '"l"', 'Sembra una V rovesciata — „Л per Luna"'],
              ['П п', '/p/ — „pane"', '"p"', 'Sembra un portale П — „П per Pane"'],
              ['Ф ф', '/f/ — „foto"', '"f"', 'Sembra una phi Φ — suono F'],
            ],
          },
        },
        {
          h3: '3b — Lettere nuove con suoni nuovi',
          content:
            "Queste lettere introducono suoni che richiedono un po' di pratica — ma ognuno è foneticamente coerente, il che significa che il suono non cambia mai una volta appreso.",
          table: {
            headers: ['Lettera', 'Suono', 'Più vicino in italiano', 'Trucco mnemonico'],
            rows: [
              ['Ж ж', '/ʒ/ — come „g" in „giorno"', '"g" in „giorno"', 'Sembra un insetto — „Ж ronza"'],
              ['Ц ц', '/ts/ — come „z" in „pizza"', '"z" in „pizza"', 'Due lettere in una: T + S = Ц'],
              ['Ч ч', '/tʃ/ — come „c" in „ciao"', '"c" in „ciao"', 'Sembra un 4 al contrario — „Ч per Chetyre (quattro)"'],
              ['Ш ш', '/ʃ/ — come „sc" in „scena"', '"sc" in „scena"', 'Sembra un pettine — „Ш fa il suono SC"'],
              ['Щ щ', '/ʃtʃ/ — sc + cia', 'SC + CIA insieme', 'Ш con coda = Ш più morbida'],
              ['Э э', '/e/ — come „e" in „era"', '"e" in „era"', 'С al contrario — „Э = E pura"'],
              ['Ю ю', '/ju/ — come „iu"', '"iu" in „iugoslavia"', 'О con bastone — „Ю = IU"'],
              ['Я я', '/ja/ — come „ia"', '"ia" in „ieri"', 'R al contrario — „Я significa Io"'],
            ],
          },
        },
        {
          h3: '3c — I segni speciali: Ъ, Ы, Ь',
          content:
            "Tre lettere richiedono un trattamento speciale: **Ь** (segno morbido), **Ъ** (segno duro) e **Ы** (una vocale unica).\n\n**Ь (segno morbido)** non ha un suono proprio. Ammorbidisce la consonante precedente — palatalizza la consonante, come se premessi la lingua sul palato mentre finisci la consonante. Esempio: брат (fratello) vs брать (prendere).\n\n**Ъ (segno duro)** è raro. Crea una breve pausa tra un prefisso e la sillaba successiva (es. съезд — congresso). Non preoccupartene fino al livello intermedio.\n\n**Ы** è la vocale più difficile per gli italofoni. È una „i\" scura, centralizzata — per approssimarla, di' „i\" e sposta leggermente la lingua all'indietro. Esempi: ты (tu), мы (noi). Diventa naturale con la pratica.",
        },
      ],
    },
    {
      h2: 'Riduzione vocalica: perché il russo suona diverso da come si scrive',
      content:
        'Ecco la regola che confonde la maggior parte dei principianti: **Le vocali russe cambiano suono a seconda che siano accentate o no.**\n\nL\'esempio più notevole è la lettera О:\n- **О accentata** suona come la „o" in „oro": большой (grande) — la О in большой è accentata: bol-ŠHOJ.\n- **О non accentata** si riduce a un suono simile a una „a" debole: молоко (latte) — suona come „muh-luh-KO", non „MO-lo-KO".\n\nА si riduce anch\'essa quando non è accentata, anche se meno drasticamente. Questo si chiama **riduzione vocalica** (редукция), ed è per questo che il russo parlato può suonare molto diverso da una lettura fonetica.',
      table: {
        headers: ['Vocale', 'Accentata', 'Non accentata', 'Esempio'],
        rows: [
          ['О', '/o/ — „oro"', '/ə/ — si riduce a „a"', 'молоко → muh-luh-KO'],
          ['Е', '/je/ — „ieri"', '/jɪ/ — si riduce a „yi"', 'телефон → tyi-lyi-FON'],
          ['А', '/a/ — „casa"', '/ə/ — „a" più leggera', 'трамвай → trum-VAY'],
          ['Я', '/ja/ — „ieri"', '/jɪ/ — si riduce a „yi"', 'язык → yi-ZYIK'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        "I dizionari segnano l'accento con un accento sulla vocale tonica (es. молоко́). Usali — l'accento non è prevedibile.",
        'Non è necessario padroneggiare la riduzione vocalica prima di iniziare a leggere; basta sapere che esiste.',
        'La riduzione diventa naturale ascoltando molto russo parlato insieme alla lettura.',
      ],
    },
    {
      h2: "L'accento russo (ударение): la sfida nascosta",
      content:
        "L'accento russo è libero (può cadere su qualsiasi sillaba) e mobile (può spostarsi tra le forme grammaticali della stessa parola). Non esiste una regola che dica dove cade l'accento — deve essere imparato con ogni parola.\n\nPerché è importante?\n\n1. **I suoni vocalici cambiano** (come mostrato sopra).\n2. **Il significato della parola può cambiare**: за́мок significa „castello\"; замо́к significa „lucchetto\". Stesse lettere, accento diverso, parola diversa.\n3. **Le forme grammaticali cambiano il significato**: я пишу́ (scrivo) vs они́ пи́шут (essi scrivono) — sia le desinenze che l'accento si spostano.\n\nConsiglio pratico: **segna sempre l'accento quando scrivi una nuova parola sul tuo quaderno.**",
      table: {
        headers: ['Parola', 'Accento', 'Significato', 'Nota'],
        rows: [
          ['за́мок', '1ª sillaba', 'castello', 'ZA-mok'],
          ['замо́к', '2ª sillaba', 'lucchetto', 'za-MOK'],
          ['до́рога', '1ª sillaba', 'strada', 'DO-ro-ga'],
          ['дорога́', '3ª sillaba', 'caro / amato', 'do-ro-GA'],
        ],
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Scrivere in cirillico: configurazione rapida',
      content:
        'Scrivere è uno dei modi più rapidi per riconoscere le lettere. Configurare una tastiera cirillica richiede due minuti.',
      subsections: [
        {
          h3: 'Su iOS (iPhone / iPad)',
          content:
            "Vai su **Impostazioni → Generali → Tastiera → Tastiere → Aggiungi tastiera**. Scegli **Russo**. Una volta aggiunta, tocca l'icona del globo per passare dall'italiano al russo.",
        },
        {
          h3: 'Su Android',
          content:
            "Vai su **Impostazioni → Gestione generale → Lingua e inserimento → Tastiera su schermo**. Aggiungi il russo. Cambia toccando l'indicatore di lingua nella barra spaziatrice. Gboard e SwiftKey supportano entrambi il russo.",
        },
        {
          h3: 'Su desktop (Windows / Mac)',
          content:
            'Windows: Impostazioni → Ora e lingua → Lingua → Aggiungi russo → Russo fonetico. Mac: Impostazioni di sistema → Tastiera → Sorgenti di input → aggiungi russo (il layout fonetico è il più semplice per i principianti).',
        },
      ],
      bullets: [
        'Usa un **layout fonetico** se disponibile — mappa le lettere cirillico su tasti latini di suono simile.',
        'Scrivere una parola cinque volte vale più di leggerla venti volte per il riconoscimento delle lettere.',
        'Usa la tastiera cirillico nei messaggi reali fin dal primo giorno.',
      ],
    },
    {
      h2: "Il tuo piano di 7 giorni per padroneggiare l'alfabeto russo",
      content:
        'Dieci minuti al giorno per sette giorni sono sufficienti per raggiungere una lettura cirillico funzionale. Ecco il programma giorno per giorno:',
      table: {
        headers: ['Giorno', 'Focus', 'Obiettivo', 'Metodo di esercizio'],
        rows: [
          ['Giorno 1', '5 lettere familiari (А К М О Т)', 'Riconoscimento immediato', 'Scrivi ogni lettera 10×; leggi 5 parole brevi'],
          ['Giorno 2', '8 falsi amici (В Е Ё Н Р С У Х)', 'Conoscere la trappola di suono di ogni lettera', 'Copri la colonna del suono e dillo; controlla'],
          ['Giorno 3', 'Lettere nuove con suoni noti (Б Г Д З И Й Л П Ф)', 'Leggere una parola base con ogni lettera', '3 parole per lettera; aggiungi ad Anki'],
          ['Giorno 4', 'Lettere nuove con suoni nuovi (Ж Ц Ч Ш Щ Э Ю Я)', 'Produrre ogni suono correttamente', 'Shadowing: ascolta + ripeti 10×'],
          ['Giorno 5', 'Segni speciali (Ъ Ы Ь) + riduzione vocalica', 'Capire la funzione; produrre Ы', 'Coppie minime: брат / брать; мы / ми'],
          ['Giorno 6', "Ripasso completo dell'alfabeto", 'Leggere 33 lettere senza esitare', 'Flash test casuale: mescola e identifica'],
          ['Giorno 7', 'Leggi un breve testo russo ad alta voce', 'Sillabare ogni parola di un paragrafo', 'Duolingo / Babbel / qualsiasi testo'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Tieni un quaderno con tutte le 33 lettere, i loro suoni e una parola esempio per ciascuna.',
        "Dopo il Giorno 7: 5 minuti al giorno leggendo testo russo ad alta voce — anche se non capisci ancora le parole.",
        "Aggiungi una tastiera cirillico al tuo telefono il Giorno 1 e usala fin dall'inizio.",
      ],
    },
  ],
  leadMagnetCta: {
    title: "Dall'alfabeto alla grammatica: esercita i 6 casi russi",
    description:
      'Una volta che sai leggere il cirillico, il passo successivo è la grammatica russa — e i casi sono la sfida principale. Russian Cases with Anna ti permette di esercitare tutti e sei i casi con feedback immediato — su iOS e Android.',
    ctaText: 'Scarica Russian Cases with Anna — gratuito per iniziare →',
    ctaHref: '/',
  },
  faq: [
    {
      question: "Quanto tempo ci vuole per imparare l'alfabeto russo?",
      answer:
        "La maggior parte degli studenti riesce a leggere testi russi lentamente ma correttamente dopo una o due settimane di pratica quotidiana di 10–15 minuti. La velocità di lettura comoda e naturale si sviluppa tipicamente nel mese successivo.",
    },
    {
      question: 'Il cirillico è difficile per gli italofoni?',
      answer:
        "Il cirillico è generalmente considerato una delle parti più facili nell'apprendimento del russo. A differenza della grammatica russa (casi, aspetti, coniugazione verbale), l'alfabeto è finito e apprendibile in pochi giorni.",
    },
    {
      question: 'Ho bisogno di imparare la scrittura corsiva russa?',
      answer:
        "No, non all'inizio. Il cirillico stampato è quello che troverai in libri, app, siti web e testi digitati. La corsiva russa è genuinamente diversa ed è necessaria solo se prevedi di leggere note manoscritte o documenti antichi.",
    },
    {
      question: 'Devo memorizzare tutte le 33 lettere prima di iniziare la grammatica russa?',
      answer:
        "No — e aspettare di conoscere ogni lettera perfettamente è una comune trappola di procrastinazione. Al Giorno 7 del piano sopra dovresti iniziare a toccare la grammatica di base anche se Ы e Щ non sono ancora automatiche.",
    },
    {
      question: 'Qual è la differenza tra Ш e Щ?',
      answer:
        'Ш è un suono „sc" duro, come in „scena". Щ è un suono „shch" più morbido e lungo. Nel parlato quotidiano la distinzione è importante: шить (cucire) vs считать (contare).',
    },
    {
      question: "Cos'è il segno morbido (Ь) e devo preoccuparmene?",
      answer:
        'Il segno morbido ammorbidisce la consonante precedente — linguisticamente, la palatalizza. In pratica cambia la pronuncia e influisce anche sulla grammatica. Lo incontrerai costantemente. Riconoscilo dal Giorno 1 e impara gradualmente il suo effetto attraverso esempi reali.',
    },
  ],
  conclusionIntro:
    "Imparare il cirillico è un investimento unico che apre tutto il resto nel russo. Ecco l'essenziale:",
  conclusionBullets: [
    '**5 lettere familiari** (А К М О Т) — da imparare in una sessione',
    '**8 falsi amici** (В Е Ё Н Р С У Х) — il gruppo più importante da esercitare con cura',
    '**20 lettere nuove** — ordina per difficoltà; la maggior parte corrisponde a suoni che già produci',
    'Il russo è **foneticamente coerente** — impara i suoni una volta e leggi tutto',
    "**L'accento e la riduzione vocalica** spiegano perché il russo parlato suona diverso dalla lettura fonetica",
    'Un **piano di 7 giorni** di 10 min./giorno ti porta da zero alla lettura funzionale',
  ],
  conclusionOutro:
    'Una volta che leggi il cirillico, inizia la vera sfida: la grammatica russa e soprattutto i sei casi grammaticali. Inizia a esercitarli presto su russiandeclensions.com/practice — gratis, senza registrazione.',
  internalLinks: [
    { href: '/practice', label: 'Pratica gratuita delle declinazioni russe — tutti i 6 casi' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casi russi spiegati in modo semplice: guida visiva per principianti',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: 'Puoi imparare il russo da solo? Piano completo',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: '15 migliori risorse gratuite per imparare il russo',
    },
  ],
  ctaText: 'Pratica i casi russi — gratis →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "L'alfabeto russo: impara il cirillico in 3 semplici passi",
    description:
      "Impara l'alfabeto cirillico russo in 3 passi chiari: lettere familiari, falsi amici e lettere nuove — con consigli di pronuncia, trucchi mnemonici e un piano di 7 giorni.",
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
