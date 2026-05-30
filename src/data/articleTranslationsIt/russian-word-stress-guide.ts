import type { LearnArticle } from '../learnArticles';

/** Traduzione IT di `russian-word-stress-guide` (fonte EN: `learnArticles.ts`). */
export const russianWordStressGuideIt: LearnArticle = {
  slug: 'russian-word-stress-guide',
  title: "L'accento tonico in russo: perché cambia tutto (e come padroneggiarlo)",
  metaTitle:
    "L'accento tonico in russo: guida completa | Russian Cases with Anna",
  metaDescription:
    "Padroneggia l'accento tonico russo: capisci perché è imprevedibile, come cambia il significato, come si sposta nella declinazione e strategie pratiche per allenare l'orecchio.",
  keywords: [
    'accento tonico russo',
    'accentuazione in russo',
    'regole accento russo',
    'pronuncia russa accento',
    "pattern di accento in russo",
  ],
  h1: "L'accento tonico in russo: perché cambia tutto (e come padroneggiarlo)",
  heroImage: {
    src: '/articles/russian-word-stress-guide.webp',
    alt: 'Libro di testo russo e materiali di studio con testo cirillico',
    width: 1200,
    height: 630,
  },
  intro:
    "Chiedi a qualsiasi studente di russo di livello intermedio cosa lo blocca di più, e dopo i casi la risposta è quasi sempre la stessa: **l'accento tonico**. Non perché sia concettualmente complicato — ogni parola ha semplicemente una sillaba accentata. Il problema è che l'accento russo è **libero**, **mobile** e **invisibile**.\n\nIn italiano o spagnolo, l'accento segue regole prevedibili. In russo no. Può cadere su qualsiasi sillaba, non è marcato nel testo stampato standard e può spostarsi quando si cambia il caso di un sostantivo o la persona di un verbo. Due parole che si scrivono in modo identico (за́мок vs замо́к) significano cose completamente diverse — una è un castello, l'altra è una serratura — solo a causa della posizione dell'accento.\n\nQuesta guida copre tutto ciò di cui hai bisogno: perché l'accento russo è difficile, come cambia il significato, come si sposta nella declinazione e nella coniugazione, e — soprattutto — strategie pratiche per padroneggiarlo davvero.",
  introByline: {
    text: '**Scritto da Nathan** — madrelingua francese; sto imparando il russo e condivido ciò che funziona davvero per la grammatica, i casi e la pratica quotidiana.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondatore di Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    "Perché l'accento russo è diverso dalla maggior parte delle lingue europee",
    "Coppie minime: parole dove l'accento è l'unica differenza di significato",
    "Come si sposta l'accento quando si declinano i sostantivi russi",
    "Come si sposta l'accento nella coniugazione verbale russa",
    "Pattern utili per prevedere dove cade l'accento",
    "Strategie pratiche per allenare l'orecchio",
  ],
  leadMagnetCta: {
    title: 'Pratica la grammatica russa — casi e altro ancora',
    description:
      'Russian Cases with Anna ti offre 128 lezioni strutturate e 136 quiz per esercitarti sulle declinazioni russe, le desinenze dei casi e i pattern grammaticali. Gratuito su iOS e Android.',
    ctaText: "Scarica l'app — Gratis",
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Cos'è l'accento tonico in russo?",
      content:
        "In russo, ogni parola polisillabica ha esattamente **una sillaba accentata**. Quella sillaba è pronunciata più forte, più a lungo e con un'intonazione leggermente più alta rispetto alle altre. La vocale di quella sillaba è anche pronunciata più chiaramente — mentre le vocali non accentate vengono ridotte.\n\nL'esempio più importante di riduzione vocalica: la **о** in posizione non accentata si pronuncia come «а». Per questo молоко (latte) suona come «малако» e non come «молоко». Allo stesso modo, **е** e **я** non accentate si riducono verso un suono neutro «и».\n\nNei libri di testo russi per studenti, l'accento è marcato con un accento acuto (′) sulla vocale accentata: молоко́, рабо́та, понима́ть. Ma nel **testo stampato standard** — libri, notizie, siti web — l'accento non è mai marcato.",
      bullets: [
        'Ogni parola russa ha esattamente **una sillaba accentata**',
        "La **о** non accentata si pronuncia come «а» — questo causa molti errori di pronuncia",
        "L'accento è marcato nei dizionari per studenti (молоко́) ma **non** nei testi quotidiani",
        "Non esiste una posizione fissa per l'accento — a differenza dell'italiano (tendenza penultima o terzultima) o del polacco (sempre penultima)",
      ],
    },
    {
      h2: "Perché l'accento russo è particolarmente difficile?",
      content:
        "Per chi parla italiano, inglese, spagnolo o francese, l'accento russo presenta una sfida che non esiste nello stesso modo nella propria lingua.\n\n**1. Nessuna regola di posizione fissa.** In russo, l'accento può cadere su qualsiasi sillaba — prima, ultima o in qualsiasi punto intermedio. Non esiste una regola universale a cui appoggiarsi.\n\n**2. L'accento non è scritto.** Oltre i materiali di apprendimento, si legge testo cirillico senza segni di accento. Ogni nuova parola è un indovinello se non l'hai sentita pronunciare.\n\n**3. L'accento è mobile.** Anche se si impara correttamente il nominativo singolare di un sostantivo, l'accento può spostarsi in altri casi. Anche con i verbi, può cambiare in certe coniugazioni.\n\n**4. L'accento cambia il significato.** Sbagliare l'accento può far dire una parola completamente diversa.\n\nRisultato: l'accento russo va imparato **parola per parola**, dall'audio.",
      bullets: [
        "Nessuna regola di posizione: l'accento può cadere su **qualsiasi** sillaba",
        'Non marcato nel testo standard — ogni nuova parola va confermata con audio',
        "Accento mobile: può spostarsi secondo il caso (sostantivi) e la persona (verbi)",
        "Accento sbagliato = **parola diversa** in diverse coppie note",
      ],
    },
    {
      h2: "Quando l'accento cambia il significato: coppie minime",
      content:
        "Il russo ha diverse coppie di parole che si scrivono in modo identico ma hanno significati completamente diversi a seconda della sillaba accentata. Queste **coppie minime per accento** sono un vero pericolo nella comunicazione orale.",
      table: {
        headers: ["Accento sulla 1ª sillaba", "Accento sulla 2ª sillaba", "Cambio di significato"],
        rows: [
          ['за́мок', 'замо́к', 'castello vs serratura'],
          ['му́ка', 'муко́', 'tormento / sofferenza vs farina'],
          ['а́тлас', 'атла́с', 'atlante (libro di mappe) vs raso (tessuto)'],
          ['о́рган', 'орга́н', 'organo (corpo) vs organo (strumento)'],
          ['хло́пок', 'хлопо́к', 'cotone vs schiocco / applauso'],
          ['по́лки', 'полки́', 'scaffali vs reggimenti'],
          ['пи́сать', 'писа́ть', 'urinare (colloquiale) vs scrivere'],
        ],
        caption: 'Coppie minime russe: stessa grafia, accento diverso, significato diverso',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "La coppia **замок/замок** è l'esempio più citato nei libri di grammatica russa",
        'La coppia **писать/писать** è un errore che ogni studente deve assolutamente evitare',
        "Gli errori di accento su queste parole non suonano solo stranieri — **comunicano la parola sbagliata**",
      ],
    },
    {
      h2: "Come si sposta l'accento nella declinazione dei sostantivi russi",
      content:
        "La maggior parte dei sostantivi russi ha **accento fisso**: l'accento rimane sulla stessa sillaba in tutti i casi e in entrambi i numeri. Ma un gruppo significativo ha **accento mobile** che si sposta durante la declinazione.\n\nEsistono tre schemi comuni di accento mobile:",
      subsections: [
        {
          h3: "Schema A: accento sulla radice (singolare) → accento sulla desinenza (plurale)",
          content:
            "L'accento è sulla radice al singolare ma salta alla desinenza al plurale.\n\n— **го́род** (città) → города́, городо́в, города́м\n— **лес** (foresta) → леса́, лесо́в, леса́м\n— **о́стров** (isola) → острова́, острово́в\n\nQuesto schema è molto comune tra i sostantivi maschili.",
        },
        {
          h3: "Schema B: accento sulla desinenza (maggior parte delle forme) → accento sulla radice (accusativo singolare)",
          content:
            "L'accento è sulla desinenza nella maggior parte delle forme, ma torna sulla radice all'accusativo singolare — tipico dei sostantivi femminili in -а/-я.\n\n— **рука́** (mano): руки́, руке́... ma acc. sg. = **ру́ку**\n— **нога́** (gamba): ноги́, ноге́... ma acc. sg. = **но́гу**\n— **голова́** (testa): головы́... ma acc. sg. = **го́лову**\n\nQuesto è uno degli schemi più difficili, poiché l'accento all'accusativo va imparato separatamente.",
        },
        {
          h3: "Schema C: mobilità completa — il quadro completo con рука",
          content:
            "Alcuni sostantivi spostano l'accento in quasi tutti i casi. Il sostantivo рука (mano/braccio) è l'esempio di insegnamento classico:",
          table: {
            headers: ['Caso', 'Singolare', 'Plurale'],
            rows: [
              ['Nominativo', 'рука́', 'ру́ки'],
              ['Accusativo', 'ру́ку', 'ру́ки'],
              ['Genitivo', 'руки́', 'ру́к'],
              ['Dativo', 'руке́', 'рука́м'],
              ['Strumentale', 'руко́й', 'рука́ми'],
              ['Preposizionale', 'руке́', 'рука́х'],
            ],
            caption: "Spostamenti dell'accento in tutti i casi di рука (mano/braccio)",
            boldColumnIndices: [1, 2],
          },
        },
      ],
      bullets: [
        "La maggior parte dei sostantivi = **accento fisso** (stessa sillaba in tutte le forme)",
        "I sostantivi ad **accento mobile** richiedono di imparare dove cade l'accento in ogni caso",
        "Un buon dizionario marca l'accento su ogni forma di declinazione — usalo sempre",
      ],
    },
    {
      h2: "Come si sposta l'accento nella coniugazione verbale russa",
      content:
        "Come con i sostantivi, alcuni verbi russi hanno **accento fisso** in tutta la coniugazione, mentre altri hanno **accento mobile**. Lo schema più comune: i verbi perfettivi con accento finale spesso spostano l'accento verso la radice alla 1ª persona singolare (я).",
      table: {
        headers: ['Persona', 'понять (capire)', 'начать (iniziare)', 'взять (prendere)'],
        rows: [
          ['я (io)', 'пойму́', 'начну́', 'возьму́'],
          ['ты (tu)', 'поймёшь', 'начнёшь', 'возьмёшь'],
          ['он/она (lui/lei)', 'поймёт', 'начнёт', 'возьмёт'],
          ['мы (noi)', 'поймём', 'начнём', 'возьмём'],
          ['вы (voi/Lei)', 'поймёте', 'начнёте', 'возьмёте'],
          ['они (loro)', 'поймут', 'начнут', 'возьмут'],
        ],
        caption:
          "Accento nella coniugazione: la 1ª persona singolare differisce nei verbi ad accento finale",
        accentColumnIndices: [1, 2, 3],
      },
      subsections: [
        {
          h3: 'Passato: maschile vs altre forme',
          content:
            "Alcuni verbi spostano l'accento anche al passato. Il passato maschile singolare ha spesso un accento diverso dal femminile, dal neutro e dal plurale.\n\n— **жить** (vivere): жил — жила́ — жи́ло — жи́ли\n— **брать** (prendere): брал — брала́ — бра́ло — бра́ли\n— **пить** (bere): пил — пила́ — пи́ло — пи́ли\n— **дать** (dare): дал — дала́ — да́ло — да́ли\n\nNota: le forme del **passato femminile** attraggono quasi sempre l'accento alla sillaba finale in questi verbi.",
        },
      ],
      bullets: [
        "I **verbi perfettivi** spesso spostano l'accento dalla radice alla desinenza nella coniugazione",
        'Il **passato femminile** ha frequentemente accento finale anche quando le altre forme non ce l\'hanno',
        'I verbi irregolari ad alta frequenza (жить, брать, пить, дать) vanno memorizzati individualmente',
      ],
    },
    {
      h2: "5 schemi che aiutano a prevedere l'accento russo",
      content:
        "Non esistono regole assolute per l'accento russo — ma ci sono **tendenze** che coprono una grande parte del vocabolario quotidiano. Imparare questi schemi non sostituirà l'esposizione all'audio, ma darà migliori intuizioni davanti a parole nuove.",
      subsections: [
        {
          h3: "1. Suffissi che attraggono sistematicamente l'accento",
          content:
            "Certi suffissi attraggono l'accento in modo affidabile:\n\n— **-ость** (sostantivi astratti): ра́дость (gioia), го́рдость (orgoglio), но́вость (notizia)\n— **-ение/-ание** (sostantivi verbali): реше́ние (decisione), созда́ние (creazione)\n— **-ия** (prestiti stranieri): исто́рия (storia), тера́пия (terapia)\n— **-ист** (sostantivi di professione): журнали́ст (giornalista), пиани́ст (pianista)",
        },
        {
          h3: "2. I prefissi raramente portano l'accento",
          content:
            "I prefissi (по-, пере-, вы-, за-, при-, ecc.) quasi mai ricevono l'accento in verbi e aggettivi. L'accento cade quasi sempre sulla **radice o sul suffisso**.\n\nEccezione principale: il prefisso **вы-** nei verbi perfettivi porta sempre l'accento — вы́йти (uscire), вы́пить (bere tutto), вы́учить (imparare completamente). Questa regola è quasi assoluta.",
        },
        {
          h3: "3. Parole composte: accento sul secondo elemento",
          content:
            "Nei sostantivi e aggettivi composti, l'accento cade di solito sulla **seconda radice**.\n\n— **самолёт** (aereo): само + лёт → accento su лёт\n— **водопад** (cascata): водо + пад → accento su пад\n— **землетрясение** (terremoto): земле + трясение → accento su трясение",
        },
        {
          h3: "4. I prestiti spesso conservano l'accento originale",
          content:
            "Le parole internazionali prese dal francese, inglese o tedesco spesso mantengono l'accento della lingua di origine. I prestiti dal francese tendono all'accento finale.\n\n— теа́тр (teatro)\n— шокола́д (cioccolato)\n— телефо́н (telefono)\n— университе́т (università)",
        },
        {
          h3: "5. La regola del prefisso вы- — la regola più affidabile del russo",
          content:
            "Quando il prefisso **вы-** forma un verbo perfettivo, porta sempre l'accento — indipendentemente dalla sillaba accentata nell'imperfettivo.\n\n— учи́ть → **вы́**учить\n— пи́ть → **вы́**пить\n— ходи́ть → **вы́**ходить\n\nQuesta è una delle poche regole di accento quasi assolute in russo, e si applica senza eccezioni.",
        },
      ],
      bullets: [
        "Questi schemi sono **tendenze, non regole** — esistono eccezioni per tutti tranne вы-",
        'La regola del prefisso **вы-** è la più affidabile: porta sempre l\'accento',
        "Usa questi schemi come prima intuizione e verifica sempre con l'audio",
      ],
    },
    {
      h2: "Strategie pratiche per padroneggiare l'accento russo",
      content:
        "Poiché l'accento russo non può essere dedotto completamente dall'ortografia, l'unico approccio affidabile è **costruire un ampio vocabolario orale**. Ecco le strategie più efficaci:",
      subsections: [
        {
          h3: "1. Impara sempre le parole dall'audio",
          content:
            "Non imparare mai una nuova parola russa solo dal testo. Abbinala sempre all'audio — un dizionario con pronuncia (Forvo, Wiktionary), un corso, un podcast o un tutor. Se vedi solo la forma scritta, non saprai dove cade l'accento, e un'ipotesi sbagliata può diventare un errore fossilizzato.",
        },
        {
          h3: "2. Usa un dizionario con segni d'accento",
          content:
            "Rendi i segni d'accento la tua norma. Usa dizionari che mostrano l'accento su ogni forma (Wiktionary in russo marca l'accento chiaramente). Quando aggiungi una parola al tuo sistema di schede (Anki, ecc.), includi sempre il segno d'accento.",
        },
        {
          h3: '3. Pratica lo shadowing con madrelingua',
          content:
            "Lo shadowing — ascoltare un madrelingua e ripetere immediatamente, imitandone ritmo e accento — è uno dei metodi più efficaci per interiorizzare i pattern di accento. I podcast russi, i telegiornali e i canali YouTube per studenti sono buone fonti.",
        },
        {
          h3: "4. Segnala le parole ad accento mobile nei tuoi appunti",
          content:
            "Quando impari un nuovo sostantivo o verbo, controlla se ha accento mobile. Un buon dizionario mostrerà tutte le forme di caso con segni d'accento. Per i verbi, consulta la coniugazione completa. Segna specialmente le parole ad accento mobile nei tuoi appunti di vocabolario per rivederle con più attenzione.",
        },
      ],
      bullets: [
        "Non imparare mai parole nuove **solo dal testo** — conferma sempre con l'audio",
        "Aggiungi i segni d'accento a ogni parola nel tuo sistema di schede",
        "Lo shadowing è il modo più veloce per sviluppare abitudini di accento precise e automatiche",
      ],
    },
    {
      h2: "10 parole che gli studenti quasi sempre accentano in modo sbagliato",
      content:
        "Queste sono parole che anche gli studenti di livello intermedio pronunciano frequentemente in modo errato — l'accento è controintuitivo o non corrisponde alla prima intuizione:",
      table: {
        headers: ['Parola', 'Accento corretto', 'Errore frequente', 'Significato'],
        rows: [
          ['звони́т', 'звони́т (2ª sillaba)', 'зво́нит', 'lui/lei telefona'],
          ['позвони́шь', 'позвони́шь (3ª sillaba)', 'позво́нишь', 'chiamerai'],
          ['на́чать', 'на́чать (1ª sillaba)', 'нача́ть', 'iniziare (infinito)'],
          ['по́нял', 'по́нял (1ª sillaba)', 'поня́л', 'lui ha capito (pass. m.)'],
          ['ку́хня', 'ку́хня (1ª sillaba)', 'кухня́', 'cucina'],
          ['то́рты', 'то́рты (1ª sillaba)', 'торты́', 'torte (plurale di торт)'],
          ['ша́рфы', 'ша́рфы (1ª sillaba)', 'шарфы́', 'sciarpe (plurale di шарф)'],
          ['краси́вее', 'краси́вее (2ª sillaba)', 'красиве́е', 'più bello/a'],
          ['алфави́т', 'алфави́т (3ª sillaba)', 'алфа́вит', 'alfabeto'],
          ['столя́р', 'столя́р (2ª sillaba)', 'сто́ляр', 'falegname'],
        ],
        caption: "Errori d'accento frequenti tra gli studenti — forme corrette",
        boldColumnIndices: [1],
        accentColumnIndices: [1],
      },
      bullets: [
        '**Звонит/позвонишь** sono tra gli errori di accento più discussi in russo — anche i madrelingua si correggono a vicenda',
        "**Торты** e **шарфы** sono trappole classiche — l'accento del plurale non si sposta sulla desinenza",
        "In caso di dubbio: consulta Wiktionary in versione russa, che marca l'accento su ogni forma",
      ],
    },
  ],
  faq: [
    {
      question: "L'accento tonico russo è sempre imprevedibile?",
      answer:
        "Non del tutto. Ci sono schemi e tendenze — per esempio, il prefisso вы- porta sempre l'accento, e certi suffissi (-ость, -ение, -ист) lo attraggono sistematicamente. Ma a differenza del francese o del polacco, non esiste una regola di posizione universale. La maggior parte delle parole va imparata individualmente con l'audio.",
    },
    {
      question: "Come si marca l'accento in russo?",
      answer:
        "Nei materiali di apprendimento e nei dizionari, l'accento è marcato con un accento acuto (′) sulla vocale accentata: молоко́, говори́т, рабо́та. Nel testo stampato standard russo (libri, notizie, siti web), l'accento non è marcato. La lettera ё porta sempre l'accento quando appare — questo è l'unico segno d'accento trovato nel testo normale.",
    },
    {
      question: "La lettera ё indica sempre l'accento?",
      answer:
        "Sì. In russo, ё porta sempre l'accento. Per questo è importante distinguere е da ё: все (tutti, accento su е) vs всё (tutto, ё accentata). Molti testi russi sostituiscono ё con е per ragioni tipografiche, creando confusione — ma nel testo scritto correttamente, ё viene sempre usata per la vocale accentata.",
    },
    {
      question: "I madrelingua russi sanno sempre dove cade l'accento?",
      answer:
        "Sì — i madrelingua hanno interiorizzato l'accento come parte del loro vocabolario. Tuttavia, a volte dibattono su certe parole (specialmente звонит vs зво́нит) perché le norme di accento possono variare tra generazioni o dialetti. Il riferimento è sempre un dizionario normativo come l'Орфоэпический словарь.",
    },
    {
      question: "Quanto tempo ci vuole per padroneggiare l'accento russo?",
      answer:
        "Non c'è un momento in cui si 'finisce' di imparare l'accento russo — è un processo continuo di costruzione del vocabolario orale. La maggior parte degli studenti raggiunge un livello confortevole dopo 6-12 mesi di studio regolare con esposizione all'audio.",
    },
  ],
  conclusionIntro:
    "L'accento tonico russo è uno di quegli aspetti della lingua che ricompensa lo studio paziente e orientato all'audio:",
  conclusionBullets: [
    "L'accento è **libero** in russo — può cadere su qualsiasi sillaba, senza regola universale",
    "L'accento **non è scritto** nel testo standard — va imparato dall'audio",
    "L'accento è **mobile** — si sposta secondo le forme di caso e le coniugazioni verbali",
    "Alcune coppie di parole differiscono **solo** per l'accento — accento sbagliato = parola sbagliata",
    "Il prefisso **вы-** porta sempre l'accento — la regola più affidabile del russo",
    "Impara ogni nuova parola **dall'audio**, segna l'accento sulle schede e pratica lo shadowing",
  ],
  conclusionOutro:
    "La buona notizia: più russo ascolti e parli, più l'accento diventa naturale. Inizia con il vocabolario ad alta frequenza — le 500 parole che userai ogni giorno — e impara il loro accento correttamente dall'inizio. Correggere cattive abitudini di accento in seguito è molto più difficile che impararle bene fin dall'inizio.",
  internalLinks: [
    {
      href: '/learn/articles/russian-verbal-aspect-perfective-imperfective',
      label: "L'aspetto verbale in russo: perfettivo vs imperfettivo — Guida completa",
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: "L'alfabeto russo: impara il cirillico in 3 semplici passi",
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: 'Quanto tempo ci vuole per imparare il russo?',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: 'Puoi imparare il russo da solo?',
    },
    { href: '/practice', label: 'Quiz gratuito di declinazioni — pratica tutti i 6 casi' },
  ],
  ctaText: 'Pratica i casi russi — Gratis →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "L'accento tonico in russo: perché cambia tutto (e come padroneggiarlo)",
    description:
      "Padroneggia l'accento tonico russo: capisci perché è imprevedibile, come cambia il significato, come si sposta nella declinazione e strategie pratiche per allenare l'orecchio.",
    datePublished: '2026-05-30',
    dateModified: '2026-05-30',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Madrelingua francese che impara il russo; scrive di grammatica, casi e abitudini di autoapprendimento pratiche.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-word-stress-guide',
    },
    keywords:
      "accento tonico russo, accentuazione in russo, regole accento russo, pronuncia russa",
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-word-stress-guide.webp',
      width: 1200,
      height: 630,
    },
  },
};
