import type { LearnArticle } from '../learnArticles';

/** Traduzione italiana dell'articolo `russian-days-months-guide` (fonte inglese: `learnArticles.ts`). */
export const russianDaysMonthsGuideIt: LearnArticle = {
  slug: 'russian-days-months-guide',
  title: 'I giorni della settimana e i mesi in russo (guida completa 2026)',
  metaTitle:
    'I giorni della settimana e i mesi in russo | Guida completa 2026 | Russian Cases with Anna',
  metaDescription:
    'Impara i giorni della settimana e i mesi in russo con la pronuncia, più la regola grammaticale che mette in difficoltà chi studia: в понедельник (accusativo) vs в январе (preposizionale).',
  keywords: [
    'giorni della settimana in russo',
    'mesi in russo',
    'giorni della settimana russi',
    'mesi russi',
    'come dire i giorni in russo',
    'vocabolario del calendario russo',
    'понедельник russo',
    'grammatica delle date in russo',
    'giorni e mesi casi russi',
    'vocabolario della settimana in russo',
  ],
  h1: 'I giorni della settimana e i mesi in russo (guida completa)',
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: 'Imparare i giorni della settimana e i mesi in russo — guida completa',
    width: 1200,
    height: 630,
  },
  intro:
    'I giorni della settimana e i mesi sembrano puro vocabolario — sette parole, dodici parole, si memorizzano e si va avanti. **Ma in russo arrivano con una trappola grammaticale che coglie quasi ogni studente almeno una volta.** Dire "lunedì" richiede un caso grammaticale. Dire "a gennaio" ne richiede uno completamente diverso. Confonderli produce una frase che suona nettamente straniera, anche se ogni parola è corretta.\n\nLa buona notizia: **la regola è semplice una volta enunciata con chiarezza**, e i manuali russi raramente la riassumono in un unico punto. Questa guida ti offre l\'elenco completo dei giorni e dei mesi con la pronuncia, la regola di caso esatta per "il [giorno]" contro "a [mese]", come costruire una data completa e come chiedere che giorno è o che data è oggi.',
  introByline: {
    text: '**Scritto da Nathan** — madrelingua francese che sta imparando il russo; condivido ciò che funziona davvero per la grammatica, i casi e la pratica quotidiana.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, fondatore di Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Tutti e sette i giorni della settimana in russo, con pronuncia e significato letterale',
    'Tutti e dodici i mesi in russo, con pronuncia e forme al genitivo/preposizionale',
    'La regola centrale: i giorni usano **«в» + accusativo**, i mesi usano **«в» + preposizionale**',
    'Come esprimere i giorni **ricorrenti**: «di lunedì» (по + dativo plurale)',
    'Come costruire una data completa e chiedere «che giorno è oggi?» / «che data è oggi?»',
    'Gli errori più comuni — e la parola (среда) che cambia accento all\'accusativo',
  ],
  leadMagnetCta: {
    title: 'Padroneggia i casi russi oltre il calendario — app gratuita',
    description:
      'Giorni e mesi sono solo un altro luogo in cui compaiono i casi russi. Russian Cases with Anna offre lezioni strutturate e quiz intelligenti per rendere automatico ogni caso — gratis su iOS e Android.',
    ctaText: "Scarica l'app — Gratis",
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'I giorni della settimana in russo: l\'elenco completo',
      content:
        'A differenza del calendario di molti paesi occidentali, **la settimana russa inizia di lunedì** (понедельник) e finisce di domenica (воскресенье) — questo corrisponde allo standard ISO e a qualsiasi calendario o agenda russa che vedrai. Diversi nomi dei giorni diventano trasparenti una volta conosciuta la loro origine.',
      table: {
        headers: ['Giorno', 'Russo', 'Traslitterazione', 'Origine letterale'],
        rows: [
          ['Lunedì', 'понедельник', "ponedel'nik", 'после недели — "dopo il (giorno di) riposo"'],
          ['Martedì', 'вторник', 'vtornik', 'второй — "il secondo (giorno)"'],
          ['Mercoledì', 'среда', 'sreda', 'середина — "il centro (della settimana)"'],
          ['Giovedì', 'четверг', 'chetverg', 'четвёртый — "il quarto (giorno)"'],
          ['Venerdì', 'пятница', 'pyatnitsa', 'пятый — "il quinto (giorno)"'],
          ['Sabato', 'суббота', 'subbota', 'dall\'ebraico "Shabbat", tramite lo slavo ecclesiastico'],
          ['Domenica', 'воскресенье', "voskresen'ye", 'воскресение — "Resurrezione"'],
        ],
        caption: 'I sette giorni della settimana in russo',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La settimana russa va **dal lunedì alla domenica**, non dalla domenica al sabato',
        '**Среда** (mercoledì) significa letteralmente "il centro" — si trova a metà della settimana lavorativa',
        '**Суббота** (sabato) è un prestito dall\'ebraico шаббат (Shabbat), preso in prestito tramite lo slavo ecclesiastico',
        '**Воскресенье** (domenica) ha sostituito l\'antica parola pagana неделя ("senza lavoro") con la diffusione del cristianesimo — неделя oggi significa "settimana" nel russo moderno',
        'Tutti i nomi dei giorni si scrivono in **minuscolo** in russo, a differenza dell\'inglese',
      ],
    },
    {
      h2: 'I mesi in russo: l\'elenco completo',
      content:
        'I nomi dei mesi russi non hanno alcuna relazione con quelli italiani (derivano da antiche parole slave legate alla natura, non dal latino) — con un\'eccezione: sono **sempre in minuscolo**, e la maggior parte degli studenti li trova più facili da pronunciare rispetto ai giorni. Di seguito trovi la forma nominativa (la forma "da dizionario") più le due forme che userai davvero più spesso: il genitivo (per le date) e il preposizionale (per "a [mese]").',
      table: {
        headers: ['Mese', 'Russo (nominativo)', 'Genitivo (date)', 'Preposizionale ("a...")'],
        rows: [
          ['Gennaio', 'январь', 'января', 'январе'],
          ['Febbraio', 'февраль', 'февраля', 'феврале'],
          ['Marzo', 'март', 'марта', 'марте'],
          ['Aprile', 'апрель', 'апреля', 'апреле'],
          ['Maggio', 'май', 'мая', 'мае'],
          ['Giugno', 'июнь', 'июня', 'июне'],
          ['Luglio', 'июль', 'июля', 'июле'],
          ['Agosto', 'август', 'августа', 'августе'],
          ['Settembre', 'сентябрь', 'сентября', 'сентябре'],
          ['Ottobre', 'октябрь', 'октября', 'октябре'],
          ['Novembre', 'ноябрь', 'ноября', 'ноябре'],
          ['Dicembre', 'декабрь', 'декабря', 'декабре'],
        ],
        caption: 'Mesi russi: forme nominativa, genitiva e preposizionale',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'La maggior parte dei mesi è **maschile** e termina in consonante o in **-ь** (январь, май, июнь)',
        'La forma al genitivo (usata nelle date) termina sempre in **-я**: января, февраля, марта…',
        'La forma al preposizionale (usata dopo "в" per "a [mese]") termina in **-е**: январе, феврале, марте…',
        '**Июнь** (giugno) e **июль** (luglio) si confondono facilmente nel parlato veloce — ascolta la consonante finale: -нь contro -ль',
        'I nomi dei mesi non si scrivono mai con la maiuscola in russo, nemmeno a inizio frase',
      ],
    },
    {
      h2: 'La regola grammaticale: i giorni prendono l\'accusativo, i mesi il preposizionale',
      content:
        'Questa è la regola che coglie quasi ogni studente. Quando dici "**[giorno]**" o "**a [mese]**" con la preposizione **в**, il caso che segue è diverso per giorni e mesi — e non c\'è scorciatoia, bisogna semplicemente sapere quale è quale.\n\n**Giorni della settimana: "в" + accusativo.** Он придёт **в понедельник** (Verrà lunedì). Мы встречаемся **во вторник** (Ci vediamo martedì).\n\n**Mesi: "в" + preposizionale.** Я родился **в январе** (Sono nato a gennaio). Свадьба будет **в июне** (Il matrimonio sarà a giugno).\n\nPer i nomi di giorni maschili (понедельник, вторник, четверг) l\'accusativo è identico al nominativo, quindi la regola risulta invisibile. Diventa visibile con i tre giorni femminili — среда, пятница, суббота —, che cambiano davvero forma, e con воскресенье, che è neutro e rimane anch\'esso invariato.',
      table: {
        headers: ['Categoria', 'Caso dopo «в»', 'Esempio'],
        rows: [
          ['Giorni della settimana', 'Accusativo', 'в понедельник, во вторник, в среду, в пятницу, в субботу'],
          ['Mesi', 'Preposizionale', 'в январе, в марте, в июне, в декабре'],
        ],
        caption: 'Giorni contro mesi: quale caso segue «в»',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Среда** (mercoledì) è la più insidiosa: il nominativo è accentato sredá, ma l\'accusativo **в сре́ду** sposta l\'accento sulla prima sillaba — uno schema classico di spostamento d\'accento in russo (come рука́ → в ру́ку)',
        '**Пятница → в пятницу** e **суббота → в субботу**: entrambe femminili, entrambe prendono la desinenza regolare **-у** all\'accusativo',
        '**Вторник** diventa **во вторник** (non в вторник) — «в» diventa «во» prima di un gruppo consonantico, per facilitare la pronuncia',
        'Un errore comune è dire "**в январь**" invece di **в январе** — i mesi non prendono mai l\'accusativo dopo "в" in questo contesto',
        'La stessa regola dell\'accusativo si applica ad altre espressioni di tempo: **в эту среду** (questo mercoledì), **в прошлый вторник** (martedì scorso)',
      ],
    },
    {
      h2: 'Parlare di ogni lunedì, ogni settimana: «По» + dativo plurale',
      content:
        'Per dire che qualcosa accade **regolarmente** in un giorno specifico ("il lunedì", "ogni martedì"), il russo cambia completamente preposizione: si usa **по** con il **dativo plurale** del giorno, non **в** con l\'accusativo singolare.',
      table: {
        headers: ['Italiano', 'Russo', 'Caso'],
        rows: [
          ['il lunedì', 'по понедельникам', 'Dativo plurale'],
          ['il martedì', 'по вторникам', 'Dativo plurale'],
          ['il mercoledì', 'по средам', 'Dativo plurale'],
          ['il giovedì', 'по четвергам', 'Dativo plurale'],
          ['il venerdì', 'по пятницам', 'Dativo plurale'],
          ['il sabato', 'по субботам', 'Dativo plurale'],
          ['la domenica', 'по воскресеньям', 'Dativo plurale'],
        ],
        caption: 'Giorni ricorrenti: по + dativo plurale',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**У меня русский по понедельникам** (Ho lezione di russo il lunedì) — un giorno unico e ricorrente',
        'Confronta: **в понедельник** (questo lunedì specifico, in arrivo) contro **по понедельникам** (ogni lunedì, come regola)',
        'È lo stesso schema **по + dativo** usato in "по субботам магазин закрыт" (il negozio è chiuso il sabato)',
      ],
    },
    {
      h2: 'Come dire la data completa in russo',
      content:
        'Una data completa combina tre elementi, ciascuno in una forma diversa: il **numero del giorno** (un ordinale neutro, perché il nome sottinteso è число — "data/numero"), il **mese** (genitivo) e l\'**anno** (un ordinale al caso preposizionale, introdotto da в).\n\n**5 giugno 2026 → пятое июня две тысячи двадцать шестого года.**\n\nPer un approfondimento sui numeri ordinali e su come si formano gli anni, consulta la nostra [guida completa ai numeri russi](/learn/articles/russian-numbers-guide) — questa sezione copre solo la meccanica giorno/mese/anno specifica per scrivere date complete.',
      table: {
        headers: ['Italiano', 'Russo', 'Note'],
        rows: [
          ['1 gennaio', 'первое января', 'Ordinale (neutro) + mese al genitivo'],
          ['8 marzo', 'восьмое марта', 'Ordinale (neutro) + mese al genitivo'],
          ['9 maggio', 'девятое мая', 'Ordinale (neutro) + mese al genitivo'],
          ['31 dicembre', 'тридцать первое декабря', 'Ordinale composto + mese al genitivo'],
        ],
        caption: 'Scrivere le date: giorno (ordinale) + mese (genitivo)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'In una data, "il" non si traduce con **в** — si usa semplicemente l\'ordinale da solo: **Я приеду пятого июня** (Arriverò il 5 giugno) — questo è genitivo, non accusativo, perché risponde a "quando esattamente" come data, non come giorno della settimana',
        'Le date scritte sui documenti usano il formato numerico **giorno.mese.anno**: 05.06.2026',
        'Per gli anni, la costruzione "nel [anno]" è **в две тысячи двадцать шестом году** — vedi la guida ai numeri per il quadro completo',
      ],
    },
    {
      h2: 'Come chiedere «che giorno è oggi?» e «che data è oggi?»',
      content:
        'Il russo ha qui due domande distinte — non confonderle, perché usano parole interrogative diverse e richiedono risposte in casi diversi.',
      table: {
        headers: ['Domanda', 'Russo', 'Esempio di risposta'],
        rows: [
          ['Che giorno della settimana è oggi?', 'Какой сегодня день недели?', 'Сегодня среда. (Nominativo)'],
          ['Che data è oggi?', 'Какое сегодня число?', 'Сегодня пятое июня. (Ordinale + mese al genitivo)'],
          ['Che giorno sarà venerdì?', 'Какой день недели будет в пятницу?', '—'],
        ],
        caption: 'Chiedere il giorno e la data',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какой сегодня день (недели)?** chiede il giorno della settimana — risposta al nominativo: Сегодня понедельник (Oggi è lunedì)',
        '**Какое сегодня число?** chiede la data del calendario — risposta con ordinale + mese al genitivo: Сегодня пятнадцатое марта (Oggi è il 15 marzo)',
        'Entrambe le domande usano «сегодня» (oggi), ma **какой** (maschile, concorda con день) e **какое** (neutro, concorda con число) non sono intercambiabili',
      ],
    },
    {
      h2: 'Errori comuni con giorni e mesi',
      content:
        'Questi quattro errori spiegano la maggior parte degli sbagli commessi dagli studenti con i giorni e i mesi russi:',
      bullets: [
        '**Usare l\'accusativo dopo i mesi.** Dire "**в январь**" invece di **в январе**. I mesi prendono sempre il preposizionale dopo в.',
        '**Usare il preposizionale dopo i giorni.** Dire "**в понедельнике**" invece di **в понедельник**. I giorni prendono sempre l\'accusativo dopo в.',
        '**Dimenticare lo spostamento d\'accento in среда.** Il nominativo è sredá, ma l\'accusativo è **сре́ду** — l\'accento si sposta sulla prima sillaba. Dire sredú suona straniero.',
        '**Confondere какой e какое.** Какой день (maschile, concorda con день) contro какое число (neutro, concorda con число) — confonderli è un errore molto comune tra i principianti.',
        '**Confondere в + accusativo (un giorno specifico) con по + dativo plurale (ogni settimana).** В субботу = questo sabato; по субботам = ogni sabato.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quale caso prendono i giorni della settimana in russo?',
      answer:
        'I giorni della settimana prendono l\'**accusativo** dopo la preposizione **в**: в понедельник (lunedì), во вторник (martedì), в среду (mercoledì). I nomi dei giorni maschili e neutri sono identici al nominativo all\'accusativo; i tre giorni femminili (среда, пятница, суббота) cambiano desinenza, e среда sposta anche l\'accento: **в сре́ду**.',
    },
    {
      question: 'Quale caso prendono i mesi in russo?',
      answer:
        'I mesi prendono il **preposizionale** dopo в per dire "a [mese]": в январе (a gennaio), в июне (a giugno), в декабре (a dicembre). Questo è diverso dall\'accusativo usato per i giorni — una fonte comune di errori per chi studia.',
    },
    {
      question: 'La settimana russa inizia di lunedì o di domenica?',
      answer:
        'La settimana russa inizia di **lunedì** (понедельник) e finisce di **domenica** (воскресенье), seguendo lo standard ISO 8601. Questo è l\'opposto della convenzione tradizionale del calendario statunitense, dove la settimana inizia di domenica.',
    },
    {
      question: 'Come si dice "ogni lunedì" in russo?',
      answer:
        'Usa **по + dativo plurale**: по понедельникам (il lunedì / ogni lunedì). Questo è diverso da **в понедельник** (accusativo singolare), che si riferisce a un lunedì specifico, non a uno schema ricorrente.',
    },
    {
      question: 'Come si dice una data completa in russo, come "5 giugno 2026"?',
      answer:
        'Combina un numero ordinale (neutro, per il giorno) con il mese al genitivo: **пятое июня** (5 giugno). Per l\'anno, aggiungi anche il numero ordinale dell\'anno al genitivo, introdotto da "di": **пятое июня две тысячи двадцать шестого года**. Consulta la nostra [guida ai numeri russi](/learn/articles/russian-numbers-guide) per le regole complete su ordinali e anni.',
    },
  ],
  conclusion:
    'Giorni e mesi sembrano semplici liste di vocabolario, ma sono in realtà una lezione compatta su come funzionano i casi russi in frasi reali e quotidiane. Una volta che la regola centrale diventa chiara — **i giorni prendono l\'accusativo dopo в, i mesi prendono il preposizionale dopo в** — puoi parlare del tuo programma, del tuo compleanno e dei tuoi piani con vera sicurezza.\n\nIl modo più veloce per renderlo automatico è usarlo: menziona in che giorno accade qualcosa, usa по + dativo plurale per la tua routine settimanale, e esercitati a dire date complete ad alta voce. Parlare di calendario ricorre in quasi ogni conversazione reale, quindi questo è uno degli schemi grammaticali più redditizi da esercitare.',
  conclusionBullets: [
    'La settimana russa va **dal lunedì alla domenica** — sette nomi di giorni, tutti in minuscolo',
    'I dodici mesi non hanno alcuna relazione con i nomi latini e si scrivono anch\'essi sempre in minuscolo',
    'Regola centrale: **giorni + в → accusativo**; **mesi + в → preposizionale**',
    'I giorni ricorrenti usano **по + dativo plurale**: по понедельникам (il lunedì)',
    'Среда è la parola da tenere d\'occhio — il suo accento si sposta all\'accusativo: **в сре́ду**',
  ],
  conclusionOutro:
    'Giorni e mesi sono solo un piccolo angolo di un sistema molto più grande — gli stessi casi accusativo e preposizionale che hai appena usato governano nomi, pronomi e aggettivi in tutta la lingua. **Padroneggiare quel sistema di casi completo è ciò che trasforma "conosco alcune parole russe" in un russo vero e fluente.**',
  ctaText: 'Scarica Russian Cases with Anna — Gratis',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'I numeri in russo: come contare in russo (guida completa)',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Saluti in russo: come dire ciao in russo (guida completa)',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: "L'accento tonico in russo: perché cambia tutto (e come padroneggiarlo)",
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Casi russi spiegati in modo semplice: guida visiva per principianti',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Preposizioni russe e casi: quale preposizione richiede quale caso?',
    },
    { href: '/practice', label: 'Quiz di declinazioni russe gratuito (tutti e sei i casi)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'I giorni della settimana e i mesi in russo (guida completa 2026)',
    description:
      'Impara i giorni della settimana e i mesi in russo con la pronuncia, più la regola grammaticale che mette in difficoltà chi studia: в понедельник (accusativo) vs в январе (preposizionale).',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: 'Madrelingua francese che impara il russo, condivide ciò che funziona davvero.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-days-months-guide',
    },
    keywords:
      'giorni della settimana in russo, mesi in russo, giorni della settimana russi, mesi russi, vocabolario del calendario russo, grammatica delle date in russo',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
