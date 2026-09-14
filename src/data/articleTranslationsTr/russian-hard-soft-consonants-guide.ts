import type { LearnArticle } from '../learnArticles';

/** `russian-hard-soft-consonants-guide` makalesinin Türkçe çevirisi (kaynak EN: `learnArticles.ts`). */
export const russianHardSoftConsonantsGuideTr: LearnArticle = {
  slug: 'russian-hard-soft-consonants-guide',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusçada sert ve yumuşak ünsüzler: Yeni başlayanların atladığı telaffuz rehberi',
  metaTitle: 'Rusçada sert vs yumuşak ünsüzler | Russian Cases with Anna',
  metaDescription:
    'Rusça sert ve yumuşak ünsüzleri öğrenin: çiftler, yumuşak işaret, yumuşak ünlüler, ы vs и ve yumuşaklığın sonları nasıl değiştirdiği — minimal çiftler ve okuma pratiğiyle.',
  keywords: [
    'rusça sert ve yumuşak ünsüzler',
    'rusça yumuşak ünsüzler',
    'rusça sert yumuşak çiftler',
    'rusça yumuşak işaret',
    'ы vs и rusça',
    'rusça palatalizasyon',
    'rusça telaffuz başlangıç',
    'sert vs yumuşak rusça ünsüzler',
  ],
  h1: 'Rusçada sert ve yumuşak ünsüzler: Yeni başlayanların atladığı telaffuz rehberi',
  heroImage: {
    src: '/articles/russian-hard-soft-consonants-header.webp',
    alt: 'Telaffuz için Rusça sert ve yumuşak ünsüz çiftlerini gösteren tahta',
    width: 1280,
    height: 720,
  },
  intro:
    'Çoğu yeni başlayan Kiril alfabesini öğrenir, sonra kelime dağarcığına koşar — ve Rusçayı *Rusça gibi* gösteren tek telaffuz sistemini atlar: **sert vs yumuşak ünsüzler**.\n\nYumuşaklık (palatalizasyon) süs değildir. Anlamı değiştirebilir (**угол** “köşe” vs **уголь** “kömür”), **ы** mü **и** mi yazacağınızı belirler ve yumuşak gövdeli sıfat ile isimlerin neden farklı sonlar aldığını açıklar. Bu rehber size çiftleri, yumuşak işaret / yumuşak ünlü kurallarını, **ы vs и** tuzağını, minimal çiftleri ve kısa okuma pratiğini verir.',
  whatYouLearn: [
    'Rusça telaffuzda “sert” ve “yumuşak” ne demektir',
    'Sert/yumuşak ünsüz çiftleri (yaklaşık İngilizce/Türkçe dayanaklarla)',
    'Yumuşak işaret, yumuşak ünlüler ve й yumuşaklığı nasıl oluşturur',
    'Yumuşaklığın kelime sonlarında nasıl göründüğü (gramer bağlantısı)',
    'Ы vs и — klasik karışıklık',
    'Minimal çiftler ve kısa bir okuma alıştırması',
  ],
  leadMagnetCta: {
    title: 'Telaffuz + hâller = gerçekten kullanabileceğiniz kelimeler',
    description:
      'Sonlar kulağa net gelmeye başlayınca onları bağlamda çalışın. Russian Cases with Anna altı hâli aralıklı tekrar ile eğitir. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Rusçada “sert” ve “yumuşak” ne demektir',
      content:
        'Rusçada birçok ünsüz **çift** gelir: bir **sert** ve bir **yumuşak** sürüm. Yumuşak ünsüzler dilin ortası damağa doğru kaldırılarak söylenir — tam ekstra hece eklemeden hafif bir “y” niteliği.\n\nTürkçe ve İngilizce bunu yalnızca ara sıra yapar (“soğan”daki n, “hayır”daki n’den yumuşaktır). Rusça bunu **sistematik** olarak, çoğu ünsüzde, neredeyse her kelimede yapar.',
      bullets: [
        'Sert ≠ “yüksek ses” ve yumuşak ≠ “sessiz.” Yumuşak demek **palatalize** demektir.',
        'Aynı harf şekli, ardından gelene (veya yumuşak işarete) göre sert veya yumuşak sesi temsil edebilir.',
        'Bazı ünsüzler **her zaman sert** veya **her zaman yumuşaktır** — çiftleri yoktur.',
      ],
    },
    {
      h2: 'Sert/yumuşak ünsüz çiftleri',
      content:
        'Bunlar eşleşmiş ünsüzlerdir. Onları ikiz gibi öğrenin: aynı artikülasyon yeri, farklı yumuşaklık.',
      table: {
        headers: ['Sert', 'Yumuşak', 'Yaklaşık dayanak', 'Örnek sert → yumuşak'],
        rows: [
          ['б', "б'", 'b / by', 'был → бил'],
          ['п', "п'", 'p / py', 'пыль → пить'],
          ['м', "м'", 'm / my', 'мы → мир'],
          ['в', "в'", 'v / vy', 'вы → вид'],
          ['ф', "ф'", 'f / fy', 'факт → фильм'],
          ['д', "д'", 'd / dy', 'дышать → диван'],
          ['т', "т'", 't / ty', 'ты → тихо'],
          ['н', "н'", 'n / ny', 'ныть → низ'],
          ['з', "з'", 'z / zy', 'зыбкий → зима'],
          ['с', "с'", 's / sy', 'сын → синий'],
          ['л', "л'", 'l / ly (koyu vs açık)', 'лыжи → лиса'],
          ['р', "р'", 'titrek r / yumuşak r', 'рынок → рис'],
          ['г', "г'", 'g / gy', 'гусь → гимн'],
          ['к', "к'", 'k / ky', 'куст → кино'],
          ['х', "х'", 'loch / daha yumuşak kh', 'хата → химия'],
        ],
        caption: 'Rusça sert/yumuşak ünsüz çiftleri',
        boldColumnIndices: [0, 1],
      },
      subsections: [
        {
          h3: 'Her zaman sert (standart eşleşmede yumuşak ikiz yok)',
          content:
            '**ж, ш, ц** serttir. Yazım “yumuşak” görünse bile telaffuz sert kalır: **жить**, **шире**, **цикл**.',
        },
        {
          h3: 'Her zaman yumuşak',
          content:
            '**ч, щ, й** yumuşaktır. **Чай**, **щека**, **мой** asla aynı harfin sert ikizine dönüşmez.',
        },
      ],
    },
    {
      h2: 'Yumuşak işaret, yumuşak ünlüler ve Й',
      content:
        'Rusça yumuşaklığı üç ana yolla işaretler. Doğru okumak için üçünü de bilmeniz gerekir.',
      subsections: [
        {
          h3: '1. Yumuşak ünlüler: е, ё, и, ю, я',
          content:
            'Bir ünsüzden sonra genellikle ünsüzün yumuşak olduğunu gösterirler: **нет** (yumuşak n), **мёд**, **пила**, **люблю**, **мяч**.\n\nKelime başında (veya ünlüden sonra) çoğu zaman bir **y-kayması** içerirler: **ель**, **ёлка**, **юбка**, **яблоко**.',
        },
        {
          h3: '2. Yumuşak işaret ь',
          content:
            'Yumuşak işaretin **kendi sesi yoktur**. Önündeki ünsüzü yumuşatır: **мать**, **день**, **соль**, **словарь**.\n\nBaşka bir harften önce ünsüzü yumuşak tutmak için kelimenin ortasında da görünür: **семья**.',
        },
        {
          h3: '3. Sert işaret ъ',
          content:
            'Sert işaretin de sesi yoktur. Yumuşatmayı engeller / bir öneki yumuşak ünlüden ayırır: **объект**, **съесть**. Yeni başlayanlar bunu ь’den daha az görür — “sert telaffuz düğmesi” değil, ayırıcı olarak öğrenin.',
        },
        {
          h3: '4. Й',
          content:
            '**Й**, “y” ünsüzüdür (İngilizce “boy”daki gibi). Nitelik olarak her zaman yumuşaktır; sonlarda ve diftong benzeri dizilerde yaygındır: **мой**, **русский**, **чай**.',
        },
      ],
      bullets: [
        'Sert ünsüzleri tipik olarak izleyen sert ünlüler: **а, о, у, ы, э**.',
        'Yumuşaklık olmadan yalnızca harfleri ezberlerseniz Rusça “düz” duyulur; vurgu/son ipuçlarını duymak zorlaşır.',
      ],
    },
    {
      h2: 'Yumuşaklık kelime sonlarını nasıl değiştirir',
      content:
        'Yumuşaklık yalnızca telaffuz değildir — grameri besler. Yumuşak gövdeler “yumuşak” son setini alır.',
      table: {
        headers: ['Sert gövde örneği', 'Yumuşak gövde örneği', 'Ne değişir'],
        rows: [
          [
            'новый (sıfat)',
            'синий (sıfat)',
            'Sıfat sonları: -ого vs -его, -ым vs -им…',
          ],
          ['стол → стола', 'словарь → словаря', 'İsim genitifi: -а vs -я'],
          [
            'карта → карте',
            'земля → земле',
            'Yumuşak dişil gövdeler -е/-и kalıplarını tercih eder',
          ],
          ['мы', 'милиция', 'ы sert gövdelerden sonra; и yumuşaklardan sonra'],
        ],
        caption: 'Yumuşaklık telaffuzu çekim sonlarına bağlar',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Bu yüzden yumuşak sıfatlar [sıfat çekimi rehberimizde](/learn/articles/russian-adjective-declension) ayrıca ele alınır.',
        'İsim cinsi + sert/yumuşak gövde birlikte son tablosunu seçer — ayrıca [isim cinsi](/learn/articles/russian-noun-gender-guide) ve [hâl sonları cheat sheet](/learn/articles/russian-case-endings-cheatsheet) sayfalarına bakın.',
      ],
    },
    {
      h2: 'Ы vs И: Klasik karışıklık',
      content:
        'Türkçe konuşanlar çoğu zaman **ы** ve **и**’yi aynı “i” gibi duyar. Anadili Rusça olanlar duymaz.',
      table: {
        headers: ['Harf', 'Ne zaman görünür', 'His / ipucu', 'Örnek'],
        rows: [
          [
            'и',
            'Yumuşak ünsüzlerden sonra; varsayılan “i”',
            'Dil önde, hafif gülümseme',
            'мир, синий, пить',
          ],
          [
            'ы',
            'Sert ünsüzlerden sonra',
            'Dil geri çekilmiş, daha koyu “i”',
            'мы, сын, ты',
          ],
        ],
        caption: 'Ы vs и — dağılım ve his',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Yazım kuralı (pratik)',
          content:
            '**г, к, х, ж, ш, щ, ч**’ten sonra Rusça **и** yazar, **ы** değil (жир, шить, чистый) — ж/ш telaffuzda sert kalsa bile. Ezberlenmesi gereken bir yazım kuralıdır.',
        },
      ],
      bullets: [
        'Minimal karşıtlık: **бил** (dövdü) vs **был** (idi) — yumuşak б+и vs sert б+ы.',
        '**ы**’niz **и** ile aynı duyuluyorsa kendinizi kaydedip anadil sesiyle karşılaştırın; çözüm dil konumudur, ses yüksekliği değil.',
      ],
    },
    {
      h2: 'Kulağı eğitmek için minimal çiftler',
      content:
        'Karşıtlıklarla çalışın. Her çifti yavaş söyleyin, sonra konuşma hızında.',
      table: {
        headers: ['Sert tarafa yakın', 'Yumuşak tarafa yakın', 'Anlam farkı'],
        rows: [
          ['угол', 'уголь', 'köşe / kömür'],
          ['был', 'бил', 'idi / dövdü'],
          ['мат', 'мать', 'mat (kaba argo da var) / anne'],
          ['мол', 'моль', 'dalgakıran / güve'],
          ['рад', 'ряд', 'memnun / sıra'],
          ['нос', 'нёс', 'burun / taşıdı (нести’nin geçmişi)'],
        ],
        caption: 'Sert vs yumuşak pratiği için minimal çiftler',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Her çift mükemmel bir sözlük ikizi değildir — amaç yumuşak jesti **duymak ve üretmektir**.',
        'Sesli herhangi bir sözlükten audio ekleyin; yalnızca görsel tablolar kulağı düzeltmez.',
      ],
    },
    {
      h2: 'Okuma pratiği',
      content:
        'Bunları sesli okuyun. İlerlerken yumuşak ünsüzleri zihinsel apostrofla işaretleyin.',
      table: {
        headers: ['Rusça', 'Odak', 'Türkçe'],
        rows: [
          [
            'Синий словарь на столе.',
            'словарь’da yumuşak с, н, р',
            'Mavi bir sözlük masada.',
          ],
          [
            'Мать и дочь дома.',
            'yumuşak işaretli kelimeler',
            'Anne ve kız evde.',
          ],
          [
            'Мы были в кино.',
            'ы vs и; кино’da yumuşak н',
            'Sinemadaydık.',
          ],
          [
            'Холодный день в январе.',
            'sert д/н vs день’de yumuşak д; я-',
            'Ocakta soğuk bir gün.',
          ],
          [
            'Русский язык трудный, но красивый.',
            'her zaman yumuşak ч; русский’da yumuşak к',
            'Rusça zor ama güzel.',
          ],
        ],
        caption: 'Sert/yumuşak farkındalığı için kısa okuma alıştırması',
        boldColumnIndices: [0],
      },
      bullets: [
        'Bir hafta boyunca her gün yeniden okuyun; hız doğruluktan sonra gelir.',
        'Sonra [alfabe rehberine](/learn/articles/russian-alphabet-cyrillic-guide) ve [vurgu rehberine](/learn/articles/russian-word-stress-guide) dönün — vurgu + yumuşaklık birlikte gerçek Rusça ritmini yaratır.',
      ],
    },
    {
      h2: 'Sert ve yumuşak ünsüzlerde sık hatalar',
      bullets: [
        '**ь’yi yok saymak** — мать’ı мат gibi okumak.',
        '**ы = и yapmak** — мы ve ми tek seste birleşir.',
        '**ж/ш’yi yumuşatmak** — и’den önce bile sert kalırlar.',
        '**ч/щ’yi sertleştirmek** — yumuşak kalırlar.',
        '**Yumuşaklık olmadan sonları öğrenmek** — kulak yetişene kadar yumuşak gövde tabloları rastgele gelir.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada sert ve yumuşak ünsüzler nedir?',
      answer:
        'Birçok Rusça ünsüz çift gelir: sert (palatalize olmayan) ve yumuşak (palatalize) ses. Yumuşak ünsüzler dil damağa doğru kaldırılarak söylenir. Fark anlamı değiştirebilir; yazımı ve gramer sonlarını etkiler.',
    },
    {
      question: 'Bir ünsüzün yumuşak olduğunu nasıl anlarım?',
      answer:
        'Ardından gelene bakın. Yumuşak ünlüler е, ё, и, ю, я genellikle yumuşak ünsüzü işaretler; yumuşak işaret ь de önceki ünsüzü yumuşatır. Bazı harfler her zaman yumuşaktır (ч, щ, й) veya her zaman serttir (ж, ш, ц).',
    },
    {
      question: 'Ы ile и arasındaki fark nedir?',
      answer:
        'И, tipik olarak yumuşak ünsüzleri izleyen ön “i” sesidir. Ы, sert ünsüzleri izleyen daha koyu, geri çekilmiş bir ünlüdür (мы, сын). Türkçe konuşanlar başta onları birleştirir; dil konumu temel ayrımdır.',
    },
    {
      question: 'Yumuşak işaret ses çıkarır mı?',
      answer:
        'Hayır. Yumuşak işaret ь’nin kendi sesi yoktur. Önündeki ünsüzü yumuşatır (ve kelime içinde sesleri ayırabilir). Sert işaret ъ de sessizdir ve esas olarak bir öneki sonraki yumuşak ünlüden ayırır.',
    },
    {
      question: 'Yumuşaklık Rusça hâller için neden önemli?',
      answer:
        'Yumuşak gövdeli isim ve sıfatlar, sert gövdelerden farklı son ünlüleri alır (örneğin -я/-ю/-е kalıpları vs -а/-у/-о ve -его/-ему gibi yumuşak sıfat sonları). Yumuşaklığı duymak doğru çekim tablosunu otomatik seçmenize yardım eder.',
    },
  ],
  conclusionIntro:
    'Sert vs yumuşak, Kiril okumanın — ve birçok sonun — altındaki gizli katmandır.',
  conclusionBullets: [
    'Eşleşmiş ünsüzleri **sert/yumuşak ikizler** gibi ele alın',
    'Yumuşaklığı **yumuşak ünlüler**, **ь** ve her zaman yumuşak harflerden okuyun',
    '**ы** (sert) ile **и** (yumuşak / ön) ayırın',
    'Yumuşaklığı isim ve sıfat **son tablolarına** bağlayın',
    '**Minimal çiftler** ve kısa günlük sesli okumayla çalışın',
  ],
  conclusionOutro:
    'Yumuşaklık otomatikleşmeye başlayınca gramer tabloları keyfî görünmeyi bırakır. [Alfabe](/learn/articles/russian-alphabet-cyrillic-guide), [vurgu](/learn/articles/russian-word-stress-guide) ve [sıfat sonları](/learn/articles/russian-adjective-declension) rehberleriyle devam edin — sonra ücretsiz [pratik aracımızda](/practice) formları çalışın.',
  internalLinks: [
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Rus alfabesi: Kiril’i 3 basit adımda öğrenin',
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Rusça kelime vurgusu: Neden her şeyi değiştirir',
    },
    {
      href: '/learn/articles/russian-adjective-declension',
      label: 'Rusça sıfat çekimi: Son tablosu',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rusça hâl sonları cheat sheet',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Rusça yalın hâl rehberi',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça çekim quiz’i',
    },
  ],
  ctaText: 'Rusça hâlleri çalışın — Ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rusçada sert ve yumuşak ünsüzler: Yeni başlayanların atladığı telaffuz rehberi',
    description:
      'Rusça sert ve yumuşak ünsüzleri öğrenin: çiftler, yumuşak işaret, yumuşak ünlüler, ы vs и ve yumuşaklığın sonları nasıl değiştirdiği — minimal çiftler ve okuma pratiğiyle.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Anadili Fransızca olan, Rusça öğrenen biri; gramer, hâller ve pratik kendi kendine çalışma alışkanlıkları hakkında yazar.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-hard-soft-consonants-guide',
    },
    keywords:
      'rusça sert ve yumuşak ünsüzler, rusça yumuşak ünsüzler, rusça yumuşak işaret, ы vs и rusça, rusça palatalizasyon',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-hard-soft-consonants-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
