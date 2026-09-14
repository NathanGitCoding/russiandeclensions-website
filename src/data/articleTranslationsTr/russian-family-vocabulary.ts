import type { LearnArticle } from '../learnArticles';

/** `russian-family-vocabulary` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianFamilyVocabularyTr: LearnArticle = {
  slug: 'russian-family-vocabulary',
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  title: 'Rusça Aile Kelimeleri: Anne, Baba, Kardeşler ve Akrabalar',
  metaTitle: 'Rusça Aile Kelimeleri Rehberi | Russian Cases with Anna',
  metaDescription:
    'Rusça aile kelimelerini öğrenin: мама, папа, kardeşler, akrabalar, düzensiz çoğullar ve у + genitif ile «benim … var» — mini diyalog dahil.',
  keywords: [
    'rusça aile kelimeleri',
    'rusçada aile üyeleri',
    'rusça aile sözlüğü',
    'мама папа rusça',
    'rusça akrabalık kelimeleri',
    'rusçada aile hakkında konuşmak',
    'у меня есть aile rusça',
    'rusça aile üyeleri listesi',
  ],
  h1: 'Rusça Aile Kelimeleri: Anne, Baba, Kardeşler ve Akrabalar',
  heroImage: {
    src: '/articles/russian-family-vocabulary-header.webp',
    alt: 'Açık aile fotoğraf albümü ve мама папа брат сестра Rusça aile kelimeleri not defteri',
    width: 1280,
    height: 720,
  },
  intro:
    'Aile kelimeleri Rusçada ihtiyaç duyduğunuz ilk isimlerden — ve en faydalılarından. Kendinizi tanıtmak, başkalarını sormak ve günlük hayattan bahsetmek için kullanırsınız. Ayrıca sizi doğrudan **gerçek gramer**e çekerler: **брат → братья** gibi düzensiz çoğullar ve **genitif** ile klasik sahiplik kalıbı **у меня есть…**.\n\nBu kılavuz size yakın ve geniş aile kelimelerini, düzenli kalıbı bozan çoğulları, hazır tanıtım cümlelerini ve yüksek sesle pratik edebileceğiniz kısa bir diyaloğu verir.',
  whatYouLearn: [
    'Yakın aile temel kelimeleri (ebeveynler, kardeşler, çocuklar, eş)',
    'Geniş aile kelimeleri (büyükanne-büyükbaba, teyze-amca, kayınlar)',
    'Ezberlenmesi gereken düzensiz çoğullar (братья, сёстры, дети…)',
    '**У + genitif** ile «benim bir … var» demeyi',
    'Ailenizi tanıtmak için faydalı cümleler',
    'Gerçek konuşmalarda yeniden kullanabileceğiniz bir mini diyalog',
  ],
  leadMagnetCta: {
    title: 'Hâller otomatikleşince aile kelimeleri daha hızlı yerleşir',
    description:
      'У меня есть брата yanlıştır — у меня есть брат doğrudur, ama genitif aile konuşmasının her yerinde çıkar. Russian Cases with Anna altı hâli gerçek cümlelerle çalıştırır. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indir — Ücretsiz',
    ctaHref: '/',
  },
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Yakın aile kelimeleri',
      content:
        'Buradan başlayın. Bunlar günlük Rusçadaki en sık aile isimleridir — neredeyse her kişisel tanıtımda duyacaklarınız.',
      table: {
        headers: ['Rusça', 'Transliterasyon', 'Türkçe', 'Cinsiyet'],
        rows: [
          ['мама / мать', "mama / mat'", 'anne / anne (resmi)', 'Dişil'],
          ['папа / отец', 'papa / otets', 'baba / baba (resmi)', 'Eril'],
          ['родители', 'roditeli', 'ebeveynler', 'Çoğul'],
          ['сын', 'syn', 'oğul', 'Eril'],
          ['дочь', "doch'", 'kız çocuğu', 'Dişil'],
          ['ребёнок / дети', 'rebyonok / deti', 'çocuk / çocuklar', 'Eril / Çoğul'],
          ['брат', 'brat', 'erkek kardeş', 'Eril'],
          ['сестра', 'sestra', 'kız kardeş', 'Dişil'],
          ['муж', 'muzh', 'koca', 'Eril'],
          ['жена', 'zhena', 'eş (kadın)', 'Dişil'],
          ['семья', "sem'ya", 'aile', 'Dişil'],
        ],
        caption: 'Yakın aile — başlangıç seviyesi temel kelime dağarcığı',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        '**Мама / папа** günlük biçimlerdir; **мать / отец** daha resmi veya resmi konuşmada (belgeler, resmi dil) duyulur.',
        '**Ребёнок** tekil «çocuk»tur; çoğulu düzensiz **дети** — *ребёнки* değil.',
        '**Семья** («aile») bir grubu anlatsa da dişil tekildir: **моя семья большая** (Ailem büyük).',
        'Doğal cinsiyet istisnası: **папа**, **мужчина**, **дедушка** **-а/-я** ile biter ama **gramer olarak erildir** — eril sıfat alırlar (**мой папа**, *моя папа* değil).',
      ],
    },
    {
      h2: 'Geniş aile kelimeleri',
      content:
        'Çekirdek yerleşince hikâye, bayram ve daha uzun tanıtımlar için ihtiyaç duyduğunuz akrabaları ekleyin.',
      table: {
        headers: ['Rusça', 'Transliterasyon', 'Türkçe', 'Cinsiyet'],
        rows: [
          ['бабушка', 'babushka', 'büyükanne', 'Dişil'],
          ['дедушка', 'dedushka', 'büyükbaba', 'Eril'],
          ['бабушка и дедушка', 'babushka i dedushka', 'büyükanne ve büyükbaba', '—'],
          ['внук', 'vnuk', 'torun (erkek)', 'Eril'],
          ['внучка', 'vnuchka', 'torun (kız)', 'Dişil'],
          ['дядя', 'dyadya', 'amca / dayı', 'Eril'],
          ['тётя', 'tyotya', 'teyze / hala', 'Dişil'],
          ['двоюродный брат', 'dvoyurodnyy brat', 'kuzen (erkek)', 'Eril'],
          ['двоюродная сестра', 'dvoyurodnaya sestra', 'kuzen (kız)', 'Dişil'],
          ['племянник', 'plemyannik', 'yeğen (erkek)', 'Eril'],
          ['племянница', 'plemyannitsa', 'yeğen (kız)', 'Dişil'],
          ['свекровь', "svekrov'", 'kaynana (kocanın annesi)', 'Dişil'],
          ['тёща', 'tyoshcha', 'kaynana (karının annesi)', 'Dişil'],
          ['свёкор', 'svyokor', 'kayınpeder (kocanın babası)', 'Eril'],
          ['тесть', "test'", 'kayınpeder (karının babası)', 'Eril'],
        ],
        caption: 'Geniş aile ve kayınlar',
        boldColumnIndices: [0, 3],
      },
      bullets: [
        'Rusça sıkça bir kayının **kimin** ebeveyni olduğunu ayırır — İngilizce «mother-in-law» **свекровь** ile **тёща** olarak bölünür.',
        '**Дядя** ve **дедушка** dişil görünür (-я/-а) ama erildir: **мой дядя**, **добрый дедушка**.',
        '«Kuzen» genelde **двоюродный брат / двоюродная сестра**dır — Rusça, İngilizce «cousin» gibi tek bir günlük cinsiyet-nötr kelimeye dayanmaz.',
      ],
    },
    {
      h2: 'Ezberlenmesi gereken düzensiz çoğullar',
      content:
        'Birkaç aile ismi düzenli çoğul kalıbını reddeder. Bunları sabit çiftler olarak öğrenin — konuşmada sürekli çıkarlar.',
      table: {
        headers: ['Tekil', 'Çoğul', 'Türkçe', 'Not'],
        rows: [
          ['брат', 'бра́тья', 'erkek kardeş → erkek kardeşler', 'Düzensiz -ья çoğul'],
          ['сын', 'сыновья́ / сыны́', 'oğul → oğullar', 'сыновья konuşma dilinde yaygın çoğuldur'],
          ['друг', 'друзья́', 'arkadaş → arkadaşlar', 'Aynı -ья kalıbı; aile değil ama aynı tuzak'],
          ['ребёнок', 'де́ти', 'çocuk → çocuklar', 'Suppletif çoğul (farklı kök)'],
          ['человек', 'лю́ди', 'kişi → insanlar', 'Suppletif; aile büyüklüğü için faydalı'],
          ['мать', 'ма́тери', 'anne → anneler', 'Kök değişimi'],
          ['дочь', 'до́чери', 'kız → kızlar', 'Kök değişimi'],
          ['сестра', 'сёстры', 'kız kardeş → kız kardeşler', 'Vurgu + ё'],
          ['муж', 'мужья́', 'koca → kocalar', 'Düzensiz -ья'],
          ['жена', 'жёны', 'eş → eşler', 'Vurgu + ё'],
        ],
        caption: 'Düzenli kalıbı bozan aile çoğulları',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Брат → братья** başlangıç Rusçasındaki en değerli düzensizliklerden biridir — erken çalışın.',
        '**Дети**, günlük konuşmada **ребёнок**ün tek normal çoğuludur.',
        'Düzensiz yalın çoğullar için [yalın hali rehberi](/learn/articles/russian-nominative-case)ne bakın.',
      ],
    },
    {
      h2: 'У + genitif ile ailenizden bahsetmek',
      content:
        'İngilizce «I have…» Rusçada genellikle **у + genitif + есть** olur. **Sahip** **у**dan sonra genitiftedir; sahip olunan şey **yalın** kalır.',
      table: {
        headers: ['Rusça', 'Transliterasyon', 'Türkçe'],
        rows: [
          ['У меня есть брат.', "U menya yest' brat.", 'Bir erkek kardeşim var.'],
          ['У меня есть сестра.', "U menya yest' sestra.", 'Bir kız kardeşim var.'],
          ['У него есть жена.', "U nego yest' zhena.", 'Onun bir eşi var.'],
          ['У неё есть дети.', "U neyo yest' deti.", 'Onun çocukları var.'],
          ["У нас большая семья.", "U nas bol'shaya sem'ya.", 'Büyük bir ailemiz var.'],
          ['У вас есть дети?', "U vas yest' deti?", 'Çocuklarınız var mı? (resmi/çoğul)'],
        ],
        caption: 'У + genitif ile sahiplik',
        boldColumnIndices: [0],
      },
      subsections: [
        {
          h3: 'Kalıp tek satırda',
          content:
            '**У + ben/sen/o… (genitif) + есть + kişi/şey (yalın).**\n\nYani: **у меня** (я’nın genitifi), **у тебя**, **у него / у неё**, **у нас**, **у вас**, **у них**. Edattan sonra **он/она/они** **н-** biçimlerini alır: него, неё, них.',
        },
        {
          h3: 'Olumsuzlukta sahip olunan şey genitife girer',
          content:
            'Olumlu: **У меня есть брат.** (брат = yalın)\nOlumsuz: **У меня нет брата.** (брата = genitif)\n\nÖğrenenlerin [genitif hali](/learn/articles/russian-genitive-case)nin neden bu kadar önemli olduğunu ilk hissettikleri yerlerden biridir.',
        },
      ],
      bullets: [
        'Normal «bir erkek kardeşim var» için *Я имею брата* **demeyin** — bu anlamda doğallıktan uzak durur.',
        'Sıfat varken günlük konuşmada **есть** düşebilir: **У нас большая семья.**',
        'Aynı kalıpla devam edin: **А у тебя?** (Ya sen?).',
      ],
    },
    {
      h2: 'Tanıtım için faydalı cümleler',
      content:
        'Küçük bir tam cümle setini ezberleyin. Yukarıdaki kelime dağarcığını yeniden kullanır ve ilk tanışmalarda doğal durur.',
      table: {
        headers: ['Rusça', 'Türkçe'],
        rows: [
          ['Это моя семья.', 'Bu benim ailem.'],
          ['Это мой папа и моя мама.', 'Bu benim babam ve annem.'],
          ['У меня два брата и одна сестра.', 'İki erkek kardeşim ve bir kız kardeşim var.'],
          ['Мой младший брат студент.', 'Küçük erkek kardeşim öğrenci.'],
          ['Моя старшая сестра живёт в Москве.', 'Büyük kız kardeşim Moskova’da yaşıyor.'],
          ['Мы из большой семьи.', 'Büyük bir ailedeniz.'],
          ['Знакомьтесь: это мой муж / моя жена.', 'Tanışın: bu benim kocam / eşim.'],
          ['У нас трое детей.', 'Üç çocuğumuz var.'],
        ],
        caption: 'Yüksek frekanslı aile tanıtım cümleleri',
        boldColumnIndices: [0],
      },
      bullets: [
        '**Старший / младший** (büyük / küçük) sıfat gibi uyum sağlar: **старшая сестра**, **младший брат**.',
        'Sayılar hâl kurallarını tetikler: **два брата**, **три сестры**, **пять детей** — ayrıntılar [sayılar rehberi](/learn/articles/russian-numbers-guide) ve genitif makalesinde.',
        '**Это** ile işaret etmek sonraki ismi **yalın**da tutar: **Это моя мама.**',
      ],
    },
    {
      h2: 'Mini diyalog: Ailemle tanışın',
      content:
        'Uyarlayabileceğiniz kısa bir konuşma. Yüksek sesle okuyun, sonra kendi akrabalarınızı koyun.',
      table: {
        headers: ['Konuşmacı', 'Rusça', 'Türkçe'],
        rows: [
          ['Anna', 'Привет! Расскажи о своей семье.', 'Merhaba! Ailenden bahset.'],
          [
            'Ivan',
            'У меня есть мама, папа и младшая сестра.',
            'Annem, babam ve küçük kız kardeşim var.',
          ],
          ['Anna', 'А братья у тебя есть?', 'Peki erkek kardeşin var mı?'],
          ['Ivan', 'Нет, у меня нет братьев. А у тебя?', 'Hayır, erkek kardeşim yok. Ya senin?'],
          [
            'Anna',
            'У меня два брата. Старший брат женат.',
            'İki erkek kardeşim var. Büyüğü evli.',
          ],
          ['Ivan', 'Круто. А родители где живут?', 'Süper. Peki ebeveynlerin nerede yaşıyor?'],
          [
            'Anna',
            'В Казани. А моя бабушка живёт с нами.',
            'Kazan’da. Büyükannem de bizimle yaşıyor.',
          ],
        ],
        caption: 'Aile hakkında yeniden kullanılabilir mini diyalog',
        boldColumnIndices: [1],
      },
      bullets: [
        '**Нет братьев**e dikkat — olumsuzluk «erkek kardeşler»i **çoğul genitif**e sokar.',
        '**Женат** (erkek için evli) / **замужем** (kadın için evli) aile sohbetinden sonra yüksek değerli devamlardır.',
        'İsimleri ve şehirleri değiştirin, gramer çerçevesini koruyun.',
      ],
    },
    {
      h2: 'Rusça aile kelimelerinde sık yapılan hatalar',
      bullets: [
        '***Моя папа* demek.** Папа erildir → **мой папа**.',
        '**Çoğul olarak *ребёнки* kullanmak.** **Дети** kullanın.',
        '**Нет’ten sonra genitifi unutmak:** *У меня нет брат* ✗ → **У меня нет брата** ✓.',
        '**Свекровь ile тёща’yı karıştırmak** — birbirinin yerine geçmezler.',
        '**Gündelik aile konuşmasında «var»ı я имею diye çevirmek** — **у меня есть** tercih edin.',
      ],
    },
  ],
  faq: [
    {
      question: 'Başlangıç seviyesi için en önemli Rusça aile kelimeleri nelerdir?',
      answer:
        'Мама, папа, брат, сестра, сын, дочь, муж, жена, ребёнок/дети ve семья ile başlayın. Sonra бабушка, дедушка, дядя ve тётя ekleyin. Bunlar neredeyse her başlangıç tanıtımını kapsar.',
    },
    {
      question: 'Rusçada «bir erkek kardeşim var» nasıl denir?',
      answer:
        'У меня есть брат deyin. Sahip (меня) у’dan sonra genitiftir ve брат yalın kalır. «Erkek kardeşim yok» için У меня нет брата — брата genitiftir.',
    },
    {
      question: 'Папа -а ile bitiyorsa neden erildir?',
      answer:
        'Çünkü erkek kişilerde doğal cinsiyet kazanır. Папа, дедушка, дядя ve мужчина gibi kelimeler yazımda dişil görünür ama eril uyum alır: мой папа, добрый дедушка.',
    },
    {
      question: 'Брат ve ребёнок’ün çoğulu nedir?',
      answer:
        'Брат → братья (düzensiz). Ребёнок → дети (tamamen farklı kök). İkisi de aile konuşmaları için ezberlenmesi gereken biçimlerdir.',
    },
    {
      question: 'Ruslar «kuzen»e ne der?',
      answer:
        'Genellikle erkek kuzen için двоюродный брат, kız kuzen için двоюродная сестра. İngilizce «cousin» gibi her bağlamda işleyen tek bir günlük cinsiyet-nötr kelime yoktur.',
    },
  ],
  conclusion: '',
  conclusionIntro:
    'Aile kelime dağarcığı mükemmel bir başlangıç paketidir: faydalı kelimeler artı konuşmada gerçekten çıkan gramer.',
  conclusionBullets: [
    'Önce **yakın aileyi**, sonra **geniş akrabaları** ve kayınları öğrenin',
    '**Düzensiz çoğulları** ezberleyin: братья, дети, мужья, сёстры…',
    'Her «… var» cümlesini **у + genitif + (есть) + yalın** ile kurun',
    '«Yok» için **нет + genitif** kullanın',
    'Çerçeveler otomatikleşene kadar kısa bir diyalogla pratik yapın',
  ],
  conclusionOutro:
    'Bu cümleler kolay gelince grameri [genitif rehberi](/learn/articles/russian-genitive-case)miz ve ücretsiz [çekim pratiği](/practice) ile ilerletin — aile konuşması hâlleri gerçek hissettirmenin en hızlı yollarından biridir.',
  internalLinks: [
    {
      href: '/learn/articles/russian-genitive-case',
      label: 'Rus genitifi: kurallar, ekler ve 32 gerçek örnek',
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir",
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: 'En Yaygın 100 Rusça Kelime',
    },
    {
      href: '/learn/articles/russian-nominative-case',
      label: 'Rus yalın hali: kurallar, ekler ve 24 gerçek örnek',
    },
    {
      href: '/learn/articles/russian-noun-gender-guide',
      label: 'Rusçada İsim Cinsiyeti: Eril, Dişil, Nötr',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça çekim quizi',
    },
  ],
  ctaText: 'Rusça hâlleri pratik edin — Ücretsiz →',
  ctaHref: '/practice',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça Aile Kelimeleri: Anne, Baba, Kardeşler ve Akrabalar',
    description:
      'Rusça aile kelimelerini öğrenin: мама, папа, kardeşler, akrabalar, düzensiz çoğullar ve у + genitif ile «benim … var» — mini diyalog dahil.',
    datePublished: '2026-09-13',
    dateModified: '2026-09-13',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Anadili Fransızca olan, Rusça öğrenen yazar; gramer, hâller ve pratik kendi kendine öğrenme alışkanlıkları hakkında yazar.',
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
      '@id': 'https://russiandeclensions.com/learn/articles/russian-family-vocabulary',
    },
    keywords:
      'rusça aile kelimeleri, rusçada aile üyeleri, rusça aile sözlüğü, rusçada aile hakkında konuşmak, у меня есть aile rusça',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-family-vocabulary-header.webp',
      width: 1280,
      height: 720,
    },
  },
};
