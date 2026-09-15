import type { LearnArticle } from '../learnArticles';

/** Deutsche Übersetzung des Artikels `russian-names-patronymics-guide` (englische Quelle: `learnArticles.ts`). */
export const russianNamesPatronymicsGuideDe: LearnArticle = {
  slug: 'russian-names-patronymics-guide',
  introByline: {
    text: '**Geschrieben von Nathan** — französischer Muttersprachler, der Russisch lernt; ich teile, was bei Grammatik, Fällen und Alltagspraxis wirklich funktioniert.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Gründer von Russian Cases with Anna',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Russische Namen erklärt: Vorname, Vatersname, Nachname (und ihre Deklination)',
  metaTitle: 'Russische Namen & Vatersnamen erklärt | Russian Cases with Anna',
  metaDescription:
    'Russische Namen verstehen: Vorname, Vatersname (отчество), Nachname-Endungen, Kosenamen, formelle Anrede und wie sich jeder nach Fall ändert.',
  keywords: [
    'russische namen guide',
    'russischer vatersname',
    'отчество bedeutung',
    'russische namensdeklination',
    'russische kosenamen',
    'ty vs wy russische namen',
    'russische nachname endungen',
    'wie funktionieren russische namen',
  ],
  h1: 'Russische Namen erklärt: Vorname, Vatersname, Nachname (und ihre Deklination)',
  heroImage: {
    src: '/articles/russian-names-patronymics-guide-header.webp',
    alt: 'Frau hält einen russischen Reisepass neben einem Notizbuch mit dem Namen Иван Иванович Смирнов, im Hintergrund die Basilius-Kathedrale',
    width: 1536,
    height: 1024,
  },
  intro:
    'Ein russischer Name ist nicht ein Wort — es sind drei: ein **Vorname** (имя), ein **Vatersname** (отчество, gebildet aus dem Vornamen des Vaters) und ein **Nachname** (фамилия). Bei der falschen Kombination können Sie gegenüber Fremden unhöflich oder gegenüber Freunden seltsam formell wirken. Und sobald Sie Namen in echten Sätzen verwenden, verhalten sie sich wie jedes andere russische Substantiv: Sie **deklinieren**.\n\nDieser Leitfaden erklärt, wie das Drei-Teile-System funktioniert, wie Vatersnamen und Kosenamen gebildet werden, welche Nachname-Endung für Frauen bzw. Männer gilt, und wie sich ein Name wie Иван durch alle sechs Fälle ändert.',
  whatYouLearn: [
    'Wie das System имя / отчество / фамилия funktioniert',
    'Einen Vatersnamen aus dem Vornamen des Vaters bilden',
    'Gängige Kosenamen für beliebte russische Vornamen',
    'Nachname-Endungen und warum sie sich nach Geschlecht ändern',
    'Wann ты statt formellem Vor- + Vatersnamen verwendet wird',
    'Wie Namen durch die sechs russischen Fälle deklinieren',
  ],
  leadMagnetCta: {
    title: 'Namen deklinieren auch — nicht nur gewöhnliche Substantive',
    description:
      'Иван wird je nach Fall zu Ивана, Ивану, Иваном. Üben Sie echte Deklinationsmuster, Namen inklusive, mit Russian Cases with Anna — kostenlos für iOS und Android.',
    ctaText: 'App herunterladen — Kostenlos',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Wie das russische Namenssystem funktioniert',
      content:
        'Offizielle Dokumente, Schulregister und formelle Vorstellungen verwenden alle drei Teile: **имя** (Vorname), **отчество** (Vatersname, vom Vornamen des Vaters) und **фамилия** (Nachname). Zusammen identifizieren sie eine Person wie ein voller gesetzlicher Name im Deutschen — nur ist der mittlere Teil kein „zweiter Vorname", sondern wird aus dem Namen Ihres Vaters gebildet.',
      table: {
        headers: ['Teil', 'Russischer Begriff', 'Beispiel (Sohn von Иван)'],
        rows: [
          ['Vorname', 'имя', 'Пётр'],
          ['Vatersname', 'отчество', 'Иванович'],
          ['Nachname', 'фамилия', 'Соколов'],
        ],
        caption: 'Die drei Teile eines vollen russischen Namens',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Der Vatersname bedeutet wörtlich „Sohn von Иван" oder „Tochter von Иван" — **Иванович** / **Ивановна**.',
        'Alle drei Teile stehen im Reisepass; nur die ersten beiden werden in höflicher gesprochener Anrede verwendet.',
        'Nachnamen werden von der Familie vererbt, wie im Deutschen — sie hängen nicht vom Vornamen eines Elternteils ab.',
      ],
    },
    {
      h2: 'Vornamen und ihre Kosenamen',
      content:
        'Russen benutzen ständig kurze, liebevolle Formen — mit Freunden, Familie und Kindern kann der volle Name sogar kalt klingen. Jeder Vorname hat eine oder mehrere Standard-Kosenamen.',
      table: {
        headers: ['Voller Name', 'Gängige Kosenamen', 'Geschlecht'],
        rows: [
          ['Александр', 'Саша, Саня, Шура', 'Männlich'],
          ['Александра', 'Саша, Шура', 'Weiblich'],
          ['Дмитрий', 'Дима, Митя', 'Männlich'],
          ['Мария', 'Маша, Маруся', 'Weiblich'],
          ['Иван', 'Ваня', 'Männlich'],
          ['Екатерина', 'Катя, Катюша', 'Weiblich'],
          ['Николай', 'Коля', 'Männlich'],
          ['Наталья', 'Наташа', 'Weiblich'],
          ['Михаил', 'Миша', 'Männlich'],
          ['Елена', 'Лена, Алёна', 'Weiblich'],
        ],
        caption: 'Beliebte russische Vornamen und ihre Kosenamen',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Kosenamen sind für **informelle ты-Kontexte** — kombinieren Sie nie einen Kosenamen mit einem Vatersnamen (kein „Саша Иванович").',
        'Suffixe wie **-очка/-енька** machen Namen noch liebevoller: Машенька, Ванечка.',
        'Zu den Geschlechtsregeln hinter diesen Endungen siehe den [Leitfaden zum Substantivgeschlecht](/learn/articles/russian-noun-gender-guide).',
      ],
    },
    {
      h2: 'Den Vatersnamen bilden (Отчество)',
      content:
        'Der Vatersname wird aus dem **Vornamen des Vaters** plus einem Suffix gebildet, das vom Geschlecht abhängt: **-ович / -евич** für Söhne, **-овна / -евна** für Töchter. Namen, die auf einen weichen Konsonanten oder Vokal enden, erhalten ein leicht anderes Suffix.',
      table: {
        headers: ['Name des Vaters', 'Vatersname des Sohnes', 'Vatersname der Tochter'],
        rows: [
          ['Иван', 'Иванович', 'Ивановна'],
          ['Сергей', 'Сергеевич', 'Сергеевна'],
          ['Александр', 'Александрович', 'Александровна'],
          ['Дмитрий', 'Дмитриевич', 'Дмитриевна'],
          ['Никита', 'Никитич', 'Никитична'],
          ['Илья', 'Ильич', 'Ильинична'],
        ],
        caption: 'Gängige Vatersname-Muster',
        boldColumnIndices: [0],
      },
      bullets: [
        'Der Vatersname wird zusammen mit dem Vornamen verwendet — **Иван Иванович**, in den meisten Kontexten nicht allein.',
        'Bei älteren Generationen ist die Verwendung des Vatersnamens **allein** (z. B. jemanden nur „Ивановна" nennen) ein Zeichen vertrauten Respekts, üblich für ältere Frauen im Dorf oder am Arbeitsplatz.',
        'Sie wählen Ihren eigenen Vatersnamen nie selbst — er ergibt sich automatisch aus dem Namen Ihres Vaters.',
      ],
    },
    {
      h2: 'Nachnamen und Geschlechtsübereinstimmung',
      content:
        'Anders als deutsche Nachnamen ändern die meisten russischen Nachnamen ihre Form je nachdem, ob sie einem Mann oder einer Frau gehören — weil viele Nachnamen grammatisch **Adjektive** sind.',
      table: {
        headers: ['Männlicher Nachname', 'Weiblicher Nachname', 'Muster'],
        rows: [
          ['Иванов', 'Иванова', '-ов / -ова'],
          ['Смирнов', 'Смирнова', '-ов / -ова'],
          ['Достоевский', 'Достоевская', '-ский / -ская'],
          ['Толстой', 'Толстая', '-ой / -ая'],
        ],
        caption: 'Wie sich Nachname-Endungen mit dem Geschlecht ändern',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Nachnamen auf **-ский/-ская** deklinieren genau wie Adjektive — siehe den [Leitfaden zur Adjektivdeklination](/learn/articles/russian-adjective-declension).',
        'Nachnamen auf **-ов/-ев/-ин** deklinieren wie Substantive, mit ein paar eingemischten Adjektiv-Endungen (Instrumental **-ым**).',
        'Manche Nachnamen sind **undeklinierbar**: Namen fremden Ursprungs und solche auf **-ко, -их, -ых** (z. B. Шевченко, Седых) ändern sich nie, für kein Geschlecht und keinen Fall.',
      ],
    },
    {
      h2: 'Formelle vs. informelle Anrede: Ты, Вы und Namensformen',
      content:
        'Die richtige Namensform zu wählen hat ebenso viel mit der Beziehung wie mit der Grammatik zu tun. Einen Kosenamen mit вы, oder vollen Namen + Vatersnamen mit ты zu mischen, klingt für russische Ohren falsch.',
      table: {
        headers: ['Kontext', 'Anredeform', 'Beispiel'],
        rows: [
          ['Fremder, Arzt, Beamter', 'Имя + Отчество + вы', 'Иван Иванович, вы не подскажете...?'],
          ['Neuer Kollege, Lehrer', 'Имя + Отчество + вы', 'Мария Сергеевна, у меня вопрос.'],
          ['Enger Freund, Familie', 'Kosename + ты', 'Ваня, ты идёшь?'],
          ['Kind spricht mit Gleichaltrigem', 'Kosename + ты', 'Саша, пойдём!'],
        ],
        caption: 'Anredeform an den Kontext anpassen',
        boldColumnIndices: [1],
      },
      bullets: [
        'Im Zweifel standardmäßig **Имя + Отчество + вы** verwenden — das ist nie unhöflich, nur immer sicher.',
        'Ausländern wird oft verziehen, wenn sie den Vatersnamen weglassen, aber der Versuch wird wirklich geschätzt.',
        'Arbeitsplätze bewegen sich für jüngere Mitarbeiter hin zur Anrede nur mit Vornamen — folgen Sie der Stimmung im Raum.',
      ],
    },
    {
      h2: 'Namen nach Fall deklinieren',
      content:
        'Namen sind Substantive, daher erhalten sie Fallendungen wie alles andere in einem russischen Satz. Vornamen folgen regulären Substantiv-Mustern; Vatersnamen und adjektivartige Nachnamen kombinieren Substantiv- und Adjektiv-Endungen.',
      table: {
        headers: ['Fall', 'Иван (Vorname)', 'Ивановна (Vatersname)', 'Иванов (Nachname)'],
        rows: [
          ['Nominativ', 'Иван', 'Ивановна', 'Иванов'],
          ['Genitiv', 'Ивана', 'Ивановны', 'Иванова'],
          ['Dativ', 'Ивану', 'Ивановне', 'Иванову'],
          ['Akkusativ', 'Ивана', 'Ивановну', 'Иванова'],
          ['Instrumental', 'Иваном', 'Ивановной', 'Ивановым'],
          ['Präpositional', 'об Иване', 'об Ивановне', 'об Иванове'],
        ],
        caption: 'Ein Name dekliniert durch alle sechs Fälle',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Я иду к Ивану** („Ich gehe zu Ivan") verwendet den Dativ, wie jedes andere Substantiv nach к.',
        '**Я говорю об Ивановне** („Ich spreche über Ivanovna") verwendet den Präpositional nach об.',
        'Zum vollen Muster jedes Falls siehe unsere Leitfäden zum [Genitiv](/learn/articles/russian-genitive-case), [Dativ](/learn/articles/russian-dative-case) und [Präpositional](/learn/articles/russian-prepositional-case).',
      ],
      subsections: [
        {
          h3: 'Und wie ist es mit Nachnamen wie Толстой oder Достоевская?',
          content:
            'Diese deklinieren genau wie Adjektive: **Толстого** (Genitiv), **Толстому** (Dativ), **Толстым** (Instrumental). Wer die Adjektiv-Endungen schon kennt, kennt auch diese Nachnamen.',
        },
      ],
    },
    {
      h2: 'Häufige Fehler bei russischen Namen',
      content: 'Ein paar Gewohnheiten verraten einen Anfänger sofort — und sind leicht zu beheben.',
      bullets: [
        '**Саша Иванович** ✗ — nie einen Kosenamen mit einem Vatersnamen kombinieren; entweder **Иван Иванович** oder nur **Ваня** verwenden.',
        '**Мария Ивановна** für eine Frau, deren Vater Иван heißt ✓ — aber das Geschlecht prüfen: ein Vater namens **Илья** ergibt **Ильинична**, nicht „Ильевна".',
        'Vergessen, dass Nachnamen wie **Достоевский** im Geschlecht übereinstimmen müssen: eine Frau ist **Достоевская**, nie „Достоевский".',
        'вы mit einem Kosenamen verwenden („Ваня, вы...") — ein Register wählen: entweder voller Name + вы oder Kosename + ты.',
      ],
    },
  ],
  faq: [
    {
      question: 'Was ist ein russischer Vatersname (отчество)?',
      answer:
        'Es ist ein Name, der aus dem Vornamen Ihres Vaters gebildet wird und als mittlerer Teil eines formellen russischen Namens dient. Söhne erhalten -ович/-евич (z. B. Иванович); Töchter erhalten -овна/-евна (z. B. Ивановна).',
    },
    {
      question: 'Muss ich den Vatersnamen von jemandem verwenden?',
      answer:
        'In formellen, beruflichen Kontexten oder beim ersten Treffen, ja — verwenden Sie Vorname + Vatersname mit вы. Unter Freunden und Familie ist ein Kosename mit ты normal, und Vatersnamen entfallen ganz.',
    },
    {
      question: 'Warum ändern sich russische Nachnamen zwischen Männern und Frauen?',
      answer:
        'Viele russische Nachnamen sind grammatisch Adjektive oder adjektivartige Substantive, daher stimmen sie im Geschlecht überein: Иванов (er) / Иванова (sie), Достоевский (er) / Достоевская (sie).',
    },
    {
      question: 'Deklinieren russische Vornamen nach Fall?',
      answer:
        'Ja. Vornamen folgen der regulären Substantivdeklination: Иван → Ивана (Genitiv/Akkusativ), Ивану (Dativ), Иваном (Instrumental), об Иване (Präpositional).',
    },
    {
      question: 'Ist es unhöflich, einen Kosenamen bei einem Fremden zu verwenden?',
      answer:
        'Ja, das kann zu vertraut wirken. Standardmäßig Vorname + Vatersname + вы verwenden, bis die andere Person ein informelleres Register einlädt.',
    },
  ],
  conclusionIntro:
    'Drei Teile, zwei Geschlechter, sechs Fälle — aber eine Handvoll Muster deckt fast jeden ab, dem Sie begegnen werden.',
  conclusionBullets: [
    '**имя + отчество + вы** bei Fremden und in formellen Situationen verwenden',
    'Zu **Kosename + ты** mit Freunden und Familie wechseln',
    '**Nachname-Endungen** an das Geschlecht anpassen: -ов/-ова, -ский/-ская',
    'Daran denken, dass Namen wie jedes andere russische Substantiv **deklinieren**',
    'Im Zweifel ist die formelle Form immer die sichere Wahl',
  ],
  conclusionOutro:
    'Sobald diese Formen natürlich wirken, festigen Sie die dahinterliegenden Fallendungen mit unseren Leitfäden zum [Genitiv](/learn/articles/russian-genitive-case) und [Dativ](/learn/articles/russian-dative-case), und üben Sie Deklinationsmuster im kostenlosen [Übungstool](/practice).',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Leitfaden zur russischen Adjektivdeklination',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Leitfaden zum russischen Genitiv',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Leitfaden zum russischen Dativ',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Leitfaden zum Substantivgeschlecht',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Leitfaden zu russischen Begrüßungen',
    },
    { href: '/practice', label: 'Kostenloses russisches Deklinationsquiz' },
  ],
  ctaText: 'Russische Fälle üben — Kostenlos →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Russische Namen erklärt: Vorname, Vatersname, Nachname (und ihre Deklination)',
    description:
      'Russische Namen verstehen: Vorname, Vatersname (отчество), Nachname-Endungen, Kosenamen, formelle Anrede und wie sich jeder nach Fall ändert.',
    datePublished: '2026-09-14',
    dateModified: '2026-09-14',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Französischer Muttersprachler, der Russisch lernt; schreibt über Grammatik, Fälle und praktische Selbstlerngewohnheiten.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-names-patronymics-guide',
    },
    keywords:
      'russische namen guide, russischer vatersname, отчество bedeutung, russische namensdeklination, russische kosenamen',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-names-patronymics-guide-header.webp',
      width: 1536,
      height: 1024,
    },
  },
};
