import type { LearnArticle } from '../learnArticles';

/** `russian-pronouns-declension` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianPronounsDeclensionTr: LearnArticle = {
  slug: 'russian-pronouns-declension',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça Zamir Çekimi: Şahıs, İyelik ve İşaret Zamirleri',
  metaTitle: 'Rusça Zamir Çekimi Tablosu | Russian Cases with Anna',
  metaDescription:
    'Rusça zamirleri 6 hâlde çekin: şahıs (я, ты, он…), iyelik (мой, наш), işaret (этот/тот) ve него/неё edat tuzağı — örnek cümlelerle.',
  keywords: [
    'rusça zamir çekimi',
    'rusça şahıs zamirleri hâller',
    'rusça zamirleri çekmek',
    'мой наш çekimi',
    'этот тот rusça',
    'него неё rusça',
    'rusça iyelik zamirleri',
    'rusça işaret zamirleri',
  ],
  h1: 'Rusça Zamir Çekimi: Şahıs, İyelik ve İşaret Zamirleri',
  heroImage: {
    src: '/articles/russian-pronouns-declension-header.webp',
    alt: 'Çalışma masasında Rusça şahıs zamirleri я ты он она мы вы они yazılı flaş kartlar',
    width: 1280,
    height: 720,
  },
  intro:
    'İsimler ve sıfatlar oldukça düzenli ek tablolarını izler. **Zamirler izlemez.** **меня, ему, неё, этом** gibi biçimler **я, он, она, этот** ile ilişkisiz görünür — ta ki onları ezberlemeniz gereken kapalı bir sistem olarak görene kadar.\n\nBu rehber her gün ihtiyaç duyduğunuz üç zamir grubunu kapsar: **şahıs** (я, ты, он…), **iyelik** (мой, наш, свой…) ve **işaret** (этот / тот). Ayrıca edat tuzağını (**него / неё / них**) ve transliterasyonlu 20 örnek cümleyi de bulacaksınız.',
  whatYouLearn: [
    'Zamirlerin düzenli isim kalıplarını neden bozduğu',
    '6 hâlin tümü için tam şahıs zamiri tabloları',
    'İyelik zamirleri ve uyum (мой, наш, свой)',
    'İşaret zamirleri: çekimli этот ve тот',
    'Edat tuzağı: него, неё, них',
    'Transliterasyonlu 20 gerçek örnek cümle',
  ],
  leadMagnetCta: {
    title: 'Zamirler + hâller = gerçek cümleler',
    description:
      'Russian Cases with Anna, ekleri bağlamda çalıştırır — her diyalogda çıkan zamirler dahil. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'dative',
  sections: [
    {
      h2: 'Zamirler Neden İsim Kalıplarını İzlemez',
      content:
        'Rusça isim ekleri cinsiyeti bildikten sonra büyük ölçüde tahmin edilebilir. Zamirler **suppletiftir**: birçok hâl biçimi daha eski gövdelerden gelir, bu yüzden **я → меня → мне → мной** harf harf kurulmayan, bir set olarak ezberlenen bir paradigmadır.\n\nKulağa olduğundan kötü gelir. Yalnızca bir avuç şahıs zamiri vardır ve onları sürekli kullanırsınız — bu yüzden tabloları çalışmak neredeyse her gramer tablosundan daha hızlı karşılık verir.',
      bullets: [
        'Şahıs zamirleri hâller arasında **gövde** değiştirir (я / меня / мной).',
        'İyelik ve işaret zamirleri daha çok **sıfat** gibi davranır — cinsiyet, sayı ve hâlde uyum sağlarlar.',
        'Çoğu edattan sonra üçüncü kişi zamirleri **н-** ekler: него, неё, них (*его, *её, *их değil).',
      ],
    },
    {
      h2: '6 Hâlin Tümünde Şahıs Zamirleri',
      content:
        'Bunları dikey sütunlar olarak öğrenin. Yalın alıntı biçimidir; diğer her hâl gerçek cümlelerde duyacağınız konuşma biçimidir.',
      table: {
        headers: ['Hâl', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
        rows: [
          ['Yalın', 'я', 'ты', 'он', 'она', 'оно', 'мы', 'вы', 'они'],
          ['Genitif', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Datif', 'мне', 'тебе', 'ему', 'ей', 'ему', 'нам', 'вам', 'им'],
          ['Belirtme', 'меня', 'тебя', 'его', 'её', 'его', 'нас', 'вас', 'их'],
          ['Araçlık', 'мной (-ою)', 'тобой (-ою)', 'им', 'ей (-ею)', 'им', 'нами', 'вами', 'ими'],
          ['Bulunma', 'мне', 'тебе', 'нём', 'ней', 'нём', 'нас', 'вас', 'них'],
        ],
        caption: 'Altı hâlin tümünde çekilmiş şahıs zamirleri',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Fark etmeye değer kalıplar',
          content:
            'я, ты, он, она, оно, мы, вы, они için **genitif = belirtme** (aynı biçimler: меня, тебя, его…). Bu ezberi neredeyse yarıya indirir.\n\n**Datif ve bulunma**, tekil birinci ve ikinci kişi için **мне / тебе** paylaşır.\n\n**Вы** hem çoğul “siz” hem kibar tekil “siz”dir — biçimler aynıdır; yalnızca fiil uyumu ve toplumsal bağlam değişir.',
        },
      ],
      bullets: [
        'Araçlık **мной / тобой** bazen resmi veya şiirsel üslupta **мною / тобою** olarak geçer — günlük konuşmada nadirdir.',
        '**Он / оно** yalın dışı neredeyse tüm biçimleri paylaşır (**его, ему, им, нём**).',
        'Zaten bildiğiniz fiillerle çalışın: **дай мне**, **я вижу тебя**, **мы говорим о нём**.',
      ],
    },
    {
      h2: 'İyelik Zamirleri ve Uyum',
      content:
        'İyelikler **чей? чья? чьё? чьи?** (kimin?) sorularına yanıt verir. İngilizce “my”den farklı olarak Rusça **мой**, nitelediği isimle değişir — tıpkı bir sıfat gibi.',
      table: {
        headers: ['Hâl', 'мой (eril)', 'моя (dişil)', 'моё (nötr)', 'мои (çoğul)'],
        rows: [
          ['Yalın', 'мой', 'моя', 'моё', 'мои'],
          ['Genitif', 'моего', 'моей', 'моего', 'моих'],
          ['Datif', 'моему', 'моей', 'моему', 'моим'],
          ['Belirtme', 'мой / моего', 'мою', 'моё', 'мои / моих'],
          ['Araçlık', 'моим', 'моей', 'моим', 'моими'],
          ['Bulunma', 'моём', 'моей', 'моём', 'моих'],
        ],
        caption: 'мой çekimi — твой ve свой için model',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'наш / ваш',
          content:
            '**Наш** ve **ваш** yumuşak görünümlü bir kalıp izler: нашего, нашей, нашему, наши… Мой ile aynı uyum mantığı.',
        },
        {
          h3: 'свой vs его / её / их',
          content:
            '**Свой** “kendi” anlamına gelir ve **özneye** döner: **Он читает свою книгу** (kendi kitabı).\n\n**Его / её / их** “onun / onların” demektir ve **çekilmez**: **Я вижу его книгу** (Onun kitabını görüyorum). Yalnızca isim (ve varsa sıfatlar) değişir.',
        },
      ],
      bullets: [
        'Belirtmede canlılık kuralı geçerlidir: **я вижу моего брата**, ama **я вижу мой дом**.',
        'Bu eklerin ardındaki tam sıfat mantığı için bkz. [Rusça sıfat çekimi](/learn/articles/russian-adjective-declension).',
      ],
    },
    {
      h2: 'İşaret Zamirleri: этот / тот',
      content:
        '**Этот** = bu (yakın); **тот** = şu / o (uzak / daha önce anılan). İkisi de çekilir ve isimle uyum sağlar.',
      table: {
        headers: ['Hâl', 'этот', 'эта', 'это', 'эти'],
        rows: [
          ['Yalın', 'этот', 'эта', 'это', 'эти'],
          ['Genitif', 'этого', 'этой', 'этого', 'этих'],
          ['Datif', 'этому', 'этой', 'этому', 'этим'],
          ['Belirtme', 'этот / этого', 'эту', 'это', 'эти / этих'],
          ['Araçlık', 'этим', 'этой', 'этим', 'этими'],
          ['Bulunma', 'этом', 'этой', 'этом', 'этих'],
        ],
        caption: 'этот (bu) çekimi',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'тот kısaca',
          content:
            '**Тот / та / то / те** aynı hâl mantığını farklı gövdelerle izler: того, той, тому, ту, тем, том, тех…\n\nYararlı karşıtlık: **Эта книга интересная, а та — скучная.** (Bu kitap ilginç, şu ise sıkıcı.)',
        },
        {
          h3: 'это vs этот',
          content:
            '“Bu / bunlar” anlamındaki değişmez **это** o rolde **çekilmez**: **Это мой брат.** Çekimli **этот/эта/это/эти** bir ismi niteler: **Этот брат живёт в Москве.**',
        },
      ],
    },
    {
      h2: 'Edat Tuzağı (него, неё, них)',
      content:
        'Çoğu edattan sonra üçüncü kişi zamirleri başta **н-** alır. Unutmak, orta seviyenin en yaygın hatalarından biridir.',
      table: {
        headers: ['Edatsız', 'Edatlı', 'Türkçe'],
        rows: [
          ['я знаю его', 'я думаю о нём', 'onu tanıyorum / onu düşünüyorum'],
          ['я вижу её', 'я иду к ней', 'onu görüyorum / ona gidiyorum'],
          ['я слушаю их', 'я говорю с ними', 'onları dinliyorum / onlarla konuşuyorum'],
          ['это его книга', 'книга у него', 'bu onun kitabı / onun bir kitabı var'],
        ],
        caption: 'Edatlı ve edatsız üçüncü kişi zamirleri',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Ezberlenecek biçimler: **него, нему, ним, нём** (он/оно); **неё, ней** (она); **них, ним, ними** (они).',
        '**н-**, **о, у, к, с, для, без, из, от…** gibi edatlardan sonra gelir.',
        'İyelik **его / её / их** (“onun/onların”) hâlâ çekilmez — ama bir edattan sonra nesne zamiri olarak **н-**’li şahıs biçimlerini kullanın.',
      ],
    },
    {
      h2: '20 Örnek Cümle',
      content:
        'Şahıs, iyelik ve işaret zamirlerini kapsayan yirmi cümle. **1–8** şahıs · **9–14** iyelik · **15–20** işaret / edat tuzağı.',
      table: {
        headers: ['#', 'Rusça', 'Transliterasyon', 'Türkçe'],
        rows: [
          ['1', 'Дай мне книгу.', 'Day mne knigu.', 'Bana kitabı ver.'],
          ['2', 'Я вижу тебя.', 'Ya vizhu tebya.', 'Seni görüyorum.'],
          ['3', 'Мы говорим о нём.', 'My govorim o nyom.', 'Ondan bahsediyoruz.'],
          ['4', 'Скажи ей правду.', 'Skazhi yey pravdu.', 'Ona gerçeği söyle.'],
          ['5', 'Он идёт с нами.', 'On idyot s nami.', 'Bizimle geliyor.'],
          ['6', 'Это письмо для вас.', "Eto pis'mo dlya vas.", 'Bu mektup sizin için.'],
          ['7', 'Я их не знаю.', 'Ya ikh ne znayu.', 'Onları tanımıyorum.'],
          ['8', 'У неё есть сестра.', "U neyo yest' sestra.", 'Onun bir kız kardeşi var.'],
          ['9', 'Это мой брат.', 'Eto moy brat.', 'Bu benim kardeşim.'],
          ['10', 'Я читаю свою книгу.', 'Ya chitayu svoyu knigu.', 'Kendi kitabımı okuyorum.'],
          ['11', 'Где наша машина?', 'Gde nasha mashina?', 'Arabamız nerede?'],
          ['12', 'Я вижу моего друга.', 'Ya vizhu moyego druga.', 'Arkadaşımı görüyorum.'],
          ['13', 'Его дом большой.', "Yego dom bol'shoy.", 'Onun evi büyük.'],
          ['14', 'Она любит свою работу.', 'Ona lyubit svoyu rabotu.', 'Kendi işini seviyor.'],
          ['15', 'Этот город красивый.', 'Etot gorod krasivyy.', 'Bu şehir güzel.'],
          ['16', 'Я живу в этом доме.', 'Ya zhivu v etom dome.', 'Bu evde yaşıyorum.'],
          ['17', 'Дай мне ту ручку.', 'Day mne tu ruchku.', 'Bana şu kalemi ver.'],
          ['18', 'Мы говорим об этой проблеме.', 'My govorim ob etoy probleme.', 'Bu sorundan bahsediyoruz.'],
          ['19', 'Кто это? — Это она.', 'Kto eto? — Eto ona.', 'Kim bu? — O.'],
          ['20', 'Я иду к нему.', 'Ya idu k nemu.', 'Ona gidiyorum.'],
        ],
        caption: 'Transliterasyonlu 20 zamir örneği',
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: 'Rusça Zamirlerde Sık Yapılan Hatalar',
      bullets: [
        '**Edattan sonra его kullanmak:** *о его* ✗ → **о нём** ✓ (zamir edatın nesnesiyken).',
        '**Свой ile его’yu karıştırmak:** öznenin kendi şeyi → **свой**; başkasınınki → **его/её/их**.',
        '**Мой’da uyumu unutmak:** *мой книга* ✗ → **моя книга** ✓.',
        '**Это’yu (bu) этот (bu + isim) gibi ele almak:** **Это мама** vs **Эта мама**.',
        '**Datif ile belirtmeyi karıştırmak:** **дай мне** (datif) vs **вижу меня** (belirtme).',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusça şahıs zamirlerinin her hâl için farklı biçimleri var mı?',
      answer:
        'Evet. Her şahıs zamirinin tam altı hâllik bir paradigması vardır. İyi haber: hepsinde genitif ve belirtme aynıdır; bu da ezberlenecekleri azaltır.',
    },
    {
      question: 'Его yerine него’yu ne zaman kullanırım?',
      answer:
        'Zamir o edatın nesnesiyken edatlardan sonra него / неё / них (ve ilgili н- biçimleri) kullanın: о нём, у неё, с ними. Yalın его / её / их, yöneten bir edat olmadan veya onun/onların anlamında çekimsiz iyelik olarak kullanılır.',
    },
    {
      question: 'Мой ile свой arasındaki fark nedir?',
      answer:
        'Мой, konuşmacının bakış açısından “benim” demektir. Свой “kendi” demektir ve cümlenin öznesine döner: Он взял свою сумку (Kendi çantasını aldı).',
    },
    {
      question: 'Этот ile это nasıl farklıdır?',
      answer:
        '“Bu / bunlar” anlamındaki это değişmezdir: Это мой брат. Этот / эта / это / эти, bir isimle uyum sağlayan işaret sıfatlarıdır: Этот брат живёт здесь.',
    },
    {
      question: 'Вы her zaman çoğul mudur?',
      answer:
        'Dilbilgisel olarak biçimler aynıdır. Вы birden fazla kişiye veya kibarca tek kişiye hitap edebilir. Fiiller ve geçmiş zaman biçimleri, kibar tekilde bile çoğul вы ile uyum sağlar: Вы были правы.',
    },
  ],
  conclusionIntro: 'Zamir çekimi sonludur — ve neredeyse her Rusça cümleyi açar.',
  conclusionBullets: [
    '**Şahıs zamirlerini** tam sütunlar olarak ezberleyin (genitif = belirtme)',
    '**мой / твой / свой / наш / ваш**’ı sıfat gibi çekin',
    'İyelik **его / её / их**’i olduğu gibi bırakın',
    'Edatlardan sonra **н-** ekleyin: него, неё, них',
    'Uyum otomatikleşene kadar **этот / тот**’u gerçek isimlerle çalışın',
  ],
  conclusionOutro:
    'Sonraki adımda zamirleri günlük konuşmada sorulara (кто? кому? о ком?) bağlayın ve ücretsiz [pratik aracımızda](/practice) hâlleri çalışmaya devam edin. Sıfat tarzı ekler için ayrıntılı olarak [sıfat çekimi rehberine](/learn/articles/russian-adjective-declension) dönün.',
  internalLinks: [
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Rusça Sıfat Çekimi: 6 Hâlin Tümü için Ek Tablosu',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça Hâl Ekleri: Nihai Kısa Not',
    },
    {
      href: '/learn/articles/russian-dative-case',
      label: 'Rusça Yönelme Hâli Rehberi',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça Genitif Hâl Rehberi',
    },
    {
      href: '/learn/articles/top-10-russian-case-mistakes',
      label: 'Rusça Hâllerde Top 10 Hata',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça Çekim Testi',
    },
  ],
  ctaText: 'Rusça Hâlleri Çalışın — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça Zamir Çekimi: Şahıs, İyelik ve İşaret Zamirleri',
    description:
      'Rusça zamirleri 6 hâlde çekin: şahıs (я, ты, он…), iyelik (мой, наш), işaret (этот/тот) ve него/неё edat tuzağı — örnek cümlelerle.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve pratik kendi kendine çalışma alışkanlıkları hakkında yazar.',
      worksFor: {
        '@type': 'Organization',
        name: 'Russian Cases with Anna®',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Russian Cases with Anna®',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-pronouns-declension',
    },
    keywords:
      'rusça zamir çekimi, rusça şahıs zamirleri hâller, мой наш çekimi, этот тот rusça, него неё rusça',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-pronouns-declension-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
