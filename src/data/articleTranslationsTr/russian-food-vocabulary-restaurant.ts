import type { LearnArticle } from '../learnArticles';

/** `russian-food-vocabulary-restaurant` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianFoodVocabularyRestaurantTr: LearnArticle = {
  slug: 'russian-food-vocabulary-restaurant',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça yemek kelimeleri: restoranda donmadan sipariş verin',
  metaTitle: 'Rusça restoran cümleleri ve yemek | Russian Cases with Anna',
  metaDescription:
    'Rusça yemek siparişi: restoran cümleleri, yemek kelimeleri, belirtme hâliyle sipariş, без + genitif, tam diyalog ve nezaket ipuçları.',
  keywords: [
    'rusça restoran cümleleri',
    'rusça yemek kelimeleri',
    'rusça yemek siparişi',
    'rusça kafe cümleleri',
    'без genitif rusça',
    'я возьму rusça',
    'rusça menü kelimeleri',
    'rusçada restoranda sipariş',
  ],
  h1: 'Rusça yemek kelimeleri: restoranda donmadan sipariş verin',
  heroImage: {
    src: '/articles/russian-food-vocabulary-restaurant-header.webp',
    alt: 'Restoran kelimeleri için борщ, çay ve menülü Rusça kafe masası',
    width: 1280,
    height: 720,
  },
  intro:
    'Restoran Rusçası yeni başlayanlar için yüksek baskıdır: açsınızdır, biri bekliyordur ve gramer hâlâ sipariş ettiğiniz şey için **belirtme hâli**, «soğansız» için **genitif** ister. Donarsınız — menüyü işaret edersiniz. Bu rehber hayatta kalma cümleleri, yemek kelimeleri, siparişin arkasındaki hâl kalıpları, tam bir garson–müşteri diyaloğu ve insan gibi görünmenizi sağlayan nezaket ayrıntılarını verir.\n\nYemek için mükemmel hâllere ihtiyacınız yok — ama birkaç çerçeve tüm etkileşimi daha akıcı yapar.',
  whatYouLearn: [
    'Bilmeniz gereken restoran cümleleri (menü, sipariş, hesap, paket)',
    'Temel yemek ve içecek kelimeleri',
    'Belirtme hâliyle sipariş (Я возьму…)',
    '«…sız» ve miktarlar için genitif',
    'Yeniden kullanabileceğiniz tam garson–müşteri diyaloğu',
    'Nezaket, ты/вы ve sık tuzaklar',
  ],
  leadMagnetCta: {
    title: 'Restoran konuşması, kılık değiştirmiş belirtme + genitiftir',
    description:
      'Я возьму… ve без лука otomatik olana kadar bu hâlleri çalışın. Russian Cases with Anna — iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'accusative',
  sections: [
    {
      h2: 'Bilmeniz gereken restoran cümleleri',
      content:
        'Önce bunları ezberleyin. Kafe ve restoran etkileşimlerinin yaklaşık %80’ini kapsarlar.',
      table: {
        headers: ['Rusça', 'Transliterasyon', 'Türkçe'],
        rows: [
          ['Можно меню, пожалуйста?', 'Mozhno menyu, pozhaluysta?', 'Menüyü alabilir miyim, lütfen?'],
          ['Что вы посоветуете?', 'Chto vy posovetuyete?', 'Ne tavsiye edersiniz?'],
          ['Я буду / Я возьму…', "Ya budu / Ya voz'mu…", '… alacağım / … istiyorum'],
          ['Для меня…', 'Dlya menya…', 'Benim için…'],
          ['Ещё один, пожалуйста.', 'Yeshchyo odin, pozhaluysta.', 'Bir tane daha, lütfen.'],
          ['Это остро?', 'Eto ostro?', 'Bu acı mı?'],
          ['Можно без лука?', 'Mozhno bez luka?', 'Soğansız olabilir mi?'],
          ['С собой, пожалуйста.', 'S soboy, pozhaluysta.', 'Paket, lütfen.'],
          ['Здесь / в зале.', "Zdes' / v zale.", 'Burada / salonda.'],
          ['Счёт, пожалуйста.', 'Schyot, pozhaluysta.', 'Hesap, lütfen.'],
          ['Можно картой?', 'Mozhno kartoy?', 'Kartla ödeyebilir miyim?'],
          ['Спасибо, всё было вкусно!', 'Spasibo, vsyo bylo vkusno!', 'Teşekkürler, her şey çok lezzetliydi!'],
        ],
        caption: 'Temel restoran hayatta kalma cümleleri',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Пожалуйста** neredeyse her isteği yumuşatır — rahatça kullanın.',
        '**Я буду** ve **Я возьму** sipariş için ikisi de doğaldır; **возьму** biraz daha «alacağım» gibi gelir.',
        'Varışta selamlaşma için [selamlaşma rehberine](/learn/articles/russian-greetings-guide) bakın.',
      ],
    },
    {
      h2: 'Yemek ve içecek kelimeleri',
      content:
        'Yüksek frekanslı kelimelerden oluşan kompakt bir menü. Cinsiyet, sonra uyum için önemlidir.',
      table: {
        headers: ['Rusça', 'Türkçe', 'Cinsiyet'],
        rows: [
          ['меню', 'menü', 'Nötr (çekimsiz)'],
          ['заказ', 'sipariş', 'Eril'],
          ['счёт', 'hesap', 'Eril'],
          ['официант / официантка', 'garson (e) / garson (k)', 'Eril / Dişil'],
          ['суп', 'çorba', 'Eril'],
          ['салат', 'salata', 'Eril'],
          ['борщ', 'borş', 'Eril'],
          ['пельмени', 'pelmeni (mantı)', 'Çoğul'],
          ['блины', 'blini / krep', 'Çoğul'],
          ['мясо', 'et', 'Nötr'],
          ['курица', 'tavuk', 'Dişil'],
          ['рыба', 'balık', 'Dişil'],
          ['овощи', 'sebze', 'Çoğul'],
          ['хлеб', 'ekmek', 'Eril'],
          ['сыр', 'peynir', 'Eril'],
          ['рис', 'pirinç', 'Eril'],
          ['картошка / картофель', 'patates', 'Dişil gündelik / Eril'],
          ['вода', 'su', 'Dişil'],
          ['сок', 'meyve suyu', 'Eril'],
          ['чай', 'çay', 'Eril'],
          ['кофе', 'kahve', 'Eril (geleneksel)'],
          ['пиво', 'bira', 'Nötr'],
          ['вино', 'şarap', 'Nötr'],
          ['десерт', 'tatlı', 'Eril'],
          ['мороженое', 'dondurma', 'Nötr'],
          ['соль / перец / сахар', 'tuz / biber / şeker', 'Dişil / Eril / Eril'],
        ],
        caption: 'Yüksek frekanslı yemek ve içecek kelimeleri',
        boldColumnIndices: [0, 2],
      },
      subsections: [
        {
          h3: 'Beslenme ekleri',
          content:
            '**вегетарианский** (vejetaryen), **без мяса** (etsiz), **без глютена** (glutensiz), **аллергия на…** (… alerjisi).\n**Я не ем мясо.** — Et yemem.',
        },
      ],
    },
    {
      h2: 'Belirtme hâliyle sipariş',
      content:
        'Sipariş ettiğiniz şey genellikle **dolaysız nesne** → **belirtme hâli**. **-а/-я** ile biten dişil isimler değişimi net gösterir.',
      table: {
        headers: ['Yalın (menü biçimi)', 'Siparişte belirtme', 'Örnek'],
        rows: [
          ['вода', 'воду', 'Я возьму воду.'],
          ['рыба', 'рыбу', 'Для меня рыбу.'],
          ['курица', 'курицу', 'Я буду курицу.'],
          ['пицца*', 'пиццу', 'Одну пиццу, пожалуйста.'],
          ['чай', 'чай', 'Я возьму чай. (eril cansız = aynı biçim)'],
          ['кофе', 'кофе', 'Кофе, пожалуйста. (pratikte çekimsiz)'],
          ['пельмени', 'пельмени', 'Пельмени, пожалуйста. (çoğul cansız)'],
        ],
        caption: 'Siparişte belirtme biçimleri',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '*пицца yaygın bir ödünç sözcüktür; belirtme **пиццу** geniş kullanılır.',
        'Canlı nesneler (menülerde nadir) genitif biçimli belirtme alır — [belirtme hâli rehberine](/learn/articles/russian-accusative-case) bakın.',
        'Sayılar: **два чая**, **две воды** [sayılar rehberindeki](/learn/articles/russian-numbers-guide) sayı+hâl kurallarını izler.',
      ],
    },
    {
      h2: '«…sız» ve miktarlar (genitif)',
      content:
        '**Без** her zaman **genitif** ister. Belirtmeden sonra en yararlı restoran gramatiğidir.',
      table: {
        headers: ['Rusça', 'Türkçe', 'Genitif ipucu'],
        rows: [
          ['без лука', 'soğansız', 'лук → лука'],
          ['без сахара', 'şekersiz', 'сахар → сахара'],
          ['без мяса', 'etsiz', 'мясо → мяса'],
          ['без молока', 'sütsüz', 'молоко → молока'],
          ['без льда', 'buzsuz', 'лёд → льда'],
          ['чашка чая', 'bir fincan çay', 'partitif benzeri genitif'],
          ['тарелка супа', 'bir tabak / kâse çorba', 'miktar + genitif'],
          ['бутылка воды', 'bir şişe su', 'miktar + genitif'],
        ],
        caption: 'без ve miktar sözcüklerinden sonra genitif',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Можно без лука?** kibar ve nettir.',
        'Miktar isimleri (**чашка, тарелка, бутылка**) yemek/içeceği genitife iter.',
        'Daha derin kurallar: [genitif rehberi](/learn/articles/russian-genitive-case).',
      ],
    },
    {
      h2: 'Tam garson–müşteri diyaloğu',
      content:
        'Yeniden kullanılabilir bir senaryo. Yemekleri değiştirin; çerçeveleri koruyun.',
      table: {
        headers: ['Konuşan', 'Rusça', 'Türkçe'],
        rows: [
          ['Garson', 'Здравствуйте! Что будете заказывать?', 'Merhaba! Ne sipariş edeceksiniz?'],
          ['Siz', 'Здравствуйте. Можно меню, пожалуйста?', 'Merhaba. Menüyü alabilir miyim, lütfen?'],
          ['Garson', 'Конечно. Вот меню.', 'Tabii. İşte menü.'],
          ['Siz', 'Что вы посоветуете?', 'Ne tavsiye edersiniz?'],
          ['Garson', 'Борщ очень хороший. И пирожки свежие.', 'Borş çok iyi. Ve pirojki taze.'],
          ['Siz', 'Тогда я возьму борщ и чай без сахара.', 'O zaman borş ve şekersiz çay alacağım.'],
          ['Garson', 'Вам здесь или с собой?', 'Burada mı, paket mi?'],
          ['Siz', 'Здесь, пожалуйста.', 'Burada, lütfen.'],
          ['Garson', 'Хорошо. Минутку!', 'Tamam. Bir dakika!'],
          ['Siz', 'Счёт, пожалуйста. Можно картой?', 'Hesap, lütfen. Kartla ödeyebilir miyim?'],
          ['Garson', 'Да, конечно.', 'Evet, tabii.'],
          ['Siz', 'Спасибо, всё было вкусно!', 'Teşekkürler, her şey çok lezzetliydi!'],
        ],
        caption: 'Kafe / restoran diyaloğu',
        boldColumnIndices: [1],
      },
    },
    {
      h2: 'Nezaket ve sık tuzaklar',
      content:
        'Küçük sosyal ayrıntılar kelime kadar önemlidir.',
      bullets: [
        'Personel için varsayılan **вы**: **Что вы посоветуете?** — ты değil.',
        'İsteklerde **пожалуйста**; yemek gelince ve çıkarken **спасибо**.',
        'Bahşiş normları şehre ve mekâna göre değişir — yerel işaretleri izleyin; **оставьте сдачу** (üstü kalsın) bazı bağlamlarda geçer.',
        'Eki unutursanız paniklemeyin — işaret etmek + **это, пожалуйста** hâlâ işe yarar; sonra tam cümlelere geçin.',
        '**Кофе** geleneksel olarak erildir (**чёрный кофе**); birçok konuşur gündelikte nötr kullanır — özenli konuşmada eril daha güvenlidir.',
      ],
      subsections: [
        {
          h3: 'Kaçınılacak hatalar',
          content:
            '**без лук** ✗ → **без лука** ✓.\n**Я возьму вода** ✗ → **воду** ✓.\nYalnız **Счёт?** sert gelebilir — **пожалуйста** ekleyin.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada kibarca nasıl yemek sipariş edilir?',
      answer:
        'Я возьму… veya Я буду… artı пожалуйста kullanın. Örnek: Я возьму борщ и чай, пожалуйста. Personele вы demek tonu kibar tutar.',
    },
    {
      question: 'Sipariş verirken hangi hâli kullanırım?',
      answer:
        'Sipariş ettiğiniz şey genellikle belirtme hâlindedir (dolaysız nesne): Я возьму воду, Я буду рыбу. Eril cansız isimler çoğu zaman yalınla aynı görünür (чай, суп).',
    },
    {
      question: '«Şekersiz» veya «soğansız» nasıl denir?',
      answer:
        'без + genitif kullanın: без сахара, без лука, без молока. Можно без лука? doğal ve kibar bir istektir.',
    },
    {
      question: 'Rusçada hesap nasıl istenir?',
      answer:
        'Счёт, пожалуйста deyin. Kartla ödeme için: Можно картой?',
    },
    {
      question: 'Paket nasıl sipariş edilir?',
      answer:
        'С собой, пожалуйста deyin (paket / yanımda). İçerde yemek için: Здесь veya В зале.',
    },
  ],
  conclusionIntro:
    'Kısa bir cümle seti artı iki hâl, çoğu Rusça kafede işinizi görür.',
  conclusionBullets: [
    '**Hayatta kalma cümlelerini** öğrenin (menü, sipariş, hesap, kart)',
    '**Belirtme** ile sipariş verin (Я возьму…)',
    'Özelleştirme için **без + genitif** kullanın',
    '**вы + пожалуйста**da kalın',
    '**Diyaloğu** sıkıcı gelene kadar pratik edin — o zaman hazırsınız',
  ],
  conclusionOutro:
    'Bu çerçeveler kolay gelince grameri [belirtme](/learn/articles/russian-accusative-case) ve [genitif](/learn/articles/russian-genitive-case) rehberlerimizle güçlendirin ve ücretsiz [pratik aracında](/practice) ekleri çalışın.',
  internalLinks: [
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça belirtme hâli rehberi',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rusça genitif rehberi',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: 'Rusça selamlaşma rehberi',
    },
    {
      href: '/learn/articles/russian-numbers-guide',
      label: 'Rusça sayılar rehberi',
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: 'En sık 100 Rusça kelime',
    },
    { href: '/practice', label: 'Ücretsiz Rusça çekim quiz’i' },
  ],
  ctaText: 'Rusça hâlleri çalışın — Ücretsiz →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça yemek kelimeleri: restoranda donmadan sipariş verin',
    description:
      'Rusça yemek siparişi: restoran cümleleri, yemek kelimeleri, belirtme hâliyle sipariş, без + genitif, tam diyalog ve nezaket ipuçları.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Anadili Fransızca olan, Rusça öğrenen biri; gramer, hâller ve pratik kendi kendine öğrenme alışkanlıkları hakkında yazar.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-food-vocabulary-restaurant',
    },
    keywords:
      'rusça restoran cümleleri, rusça yemek kelimeleri, rusça yemek siparişi, без genitif rusça, я возьму rusça',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-food-vocabulary-restaurant-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
