import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri: `russian-prepositions-and-cases` (EN kaynak, FR ile aynı yapı). Tablo satırlarındaki Kiril ve Rus örnek ifadeler Fransızca dosyayla aynı kalır. */
export const russianPrepositionsAndCasesTr: LearnArticle = {
  slug: 'russian-prepositions-and-cases',
  title:
    'Rus edatları ve haller: Her edattan sonra hangi hal kullanılır?',
  metaTitle:
    'Rus edatları ve haller | Eksiksiz başvuru rehberi | Russian Cases with Anna',
  metaDescription:
    'Tam referans: her Rus edatı ve gerektirdiği hal. 44 edat ana tablosu, çift haller (в/на/за/под), hale göre derinlemesine inceleme, ezber stratejileri.',
  keywords: [
    'Rus edatları hal',
    'Rus edatları genitif',
    'Rus edatları hal listesi',
    'в на с по Rus hali',
    'Rus edatları bulunma hali',
    'Rus grameri edat tablosu',
  ],
  h1: 'Rus edatları ve haller: Her edattan sonra hangi hal kullanılır?',
  heroImage: {
    src: '/articles/russian-prepositions-case-grammar-reference.webp',
    alt: 'Rus edatları ve haller için başvuru tablosu',
    width: 1200,
    height: 630,
  },
  intro:
    'Rusçada **en işe yarayan becerilerden biri**, **her edatın hangi hal gerektirdiğini** bilmektir. **без**’in her zaman genitif, **к**’nin her zaman datif, **с**’nin anlama göre genitif **veya** enstrümantal aldığını bildiğinizde — doğruluğunuz hızla artar.\n\nİşte **eksiksiz başvuru rehberi**. Önemli Rus edatlarının her biri hali, anlamı ve özgün örnekle listelenmiştir. Tereddüt ettiğinizde buradan kontrol edin; zamanla edat–hal çiftleri otomatikleşir.',
  whatYouLearn: [
    'Ana tablo: her Rus edatı ve hali',
    'Edat + genitif (18)',
    'Edat + datif (6)',
    'Edat + belirtme (8)',
    'Edat + enstrümantal (7)',
    'Edat + bulunma (5)',
    'Çift halli edatlar — anlama göre iki hal',
    'В ile НА — en önemli yer / yön çifti',
    'Edat–hal çiftlerini pekiştirme stratejileri',
  ],
  leadMagnetCta: {
    title: 'Edatları ve halleri mobil uygulamamızla çalışın',
    description: 'Her edat–hal çifti için hedefli alıştırmalar — Android ve iOS.',
    ctaText: 'Uygulamayı indir',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus halleri tam rehberi: 6 hal örneklerle açıklanıyor',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rus hal sonları: nihai kopya kağıdı',
    },
    {
      href: '/learn/articles/russian-genitive-case',
      label:
        'Rus genitifi: kurallar, sonlar ve 32 gerçek örnek',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Ana tablo: her Rus edatı ve hali',
      content:
        'Aşağıdaki tablo **tüm önemli Rus edatlarını** hale göre sıralar. Renkler hale göre kodlanmıştır.\n\n**Açıklama:** Genitif (lacivert) · Datif (mor) · Belirtme (kırmızı) · Enstrümantal (petrol mavisi) · Bulunma (turuncu).',
      table: {
        caption: 'Gereken hale göre 44 Rus edatı',
        boldColumnIndices: [0, 1],
        headers: ['Hal', 'Ed.', 'Anlam', 'İsimle', 'Tam cümle + çeviri'],
        rows: [
            [
              'Genitif',
              'без',
              '…sız / … olmadan',
              'без молока',
              'Я пью кофе без молока. — Kahvemi sütsüz içiyorum.',
            ],
            [
              'Genitif',
              'до',
              'kadar / önce / en geç',
              'до урока',
              'Позвони мне до урока. — Dersten önce beni ara.',
            ],
            [
              'Genitif',
              'из',
              'içinden / -den (içeriden)',
              'из России',
              'Она приехала из России. — Rusya’dan geldi.',
            ],
            [
              'Genitif',
              'с',
              'üzerinden / -den (yüzeyden)',
              'с полки',
              'Книга упала с полки. — Kitap raftan düştü.',
            ],
            [
              'Genitif',
              'у',
              'yanında / -de (birinin yanında)',
              'у меня',
              'У меня есть кошка. — Bir kedim var.',
            ],
            [
              'Genitif',
              'от',
              'kimden / kaynaktan',
              'от друга',
              'Письмо от друга. — Arkadaşımdan bir mektup.',
            ],
            [
              'Genitif',
              'после',
              'sonra',
              'после работы',
              'После работы я устал. — İşten sonra yorgundum.',
            ],
            [
              'Genitif',
              'для',
              'için (yararına)',
              'для тебя',
              'Это подарок для тебя. — Bu senin için bir hediye.',
            ],
            [
              'Genitif',
              'кроме',
              'hariç / dışında',
              'кроме меня',
              'Все кроме меня пришли. — Herkes geldi ben hariç.',
            ],
            [
              'Genitif',
              'вокруг',
              'etrafında',
              'вокруг города',
              'Мы ехали вокруг города. — Şehrin etrafında gezdik.',
            ],
            [
              'Genitif',
              'мимо',
              'yanından / önünden geçerek',
              'мимо школы',
              'Он прошёл мимо школы. — Okulun önünden geçti.',
            ],
            [
              'Genitif',
              'вместо',
              'yerine',
              'вместо кофе',
              'Выпей воды вместо кофе. — Kahve yerine su iç.',
            ],
            [
              'Genitif',
              'напротив',
              'karşısında',
              'напротив банка',
              'Кафе напротив банка. — Kafe bankanın karşısında.',
            ],
            [
              'Genitif',
              'из-за',
              'yüzünden / arkasından',
              'из-за дождя',
              'Из-за дождя мы остались дома. — Yağmur yüzünden evde kaldık.',
            ],
            [
              'Genitif',
              'из-под',
              'altından',
              'из-под стола',
              'Кот вылез из-под стола. — Kedi masanın altından çıktı.',
            ],
            [
              'Genitif',
              'ради',
              'uğruna / hatırına',
              'ради тебя',
              'Ради тебя я на всё готов. — Senin uğruna her şeye hazırım.',
            ],
            [
              'Genitif',
              'около',
              'yakınında / civarında',
              'около школы',
              'Встретимся около школы. — Okulun yakınında buluşalım.',
            ],
            [
              'Genitif',
              'вдоль',
              'boyunca',
              'вдоль реки',
              'Мы шли вдоль реки. — Nehir boyunca yürüdük.',
            ],
            [
              'Datif',
              'к',
              'doğru / -e (kişi veya hedef)',
              'к врачу, к морю',
              'Иди к врачу! — Doktora git!',
            ],
            [
              'Datif',
              'по',
              'boyunca / içinde / göre',
              'по улице, по закону',
              'Мы гуляли по парку. — Parkta gezdik.',
            ],
            [
              'Datif',
              'благодаря',
              'sayesinde',
              'благодаря тебе',
              'Благодаря тебе всё получилось! — Sayende her şey yolunda gitti!',
            ],
            [
              'Datif',
              'вопреки',
              'rağmen',
              'вопреки прогнозу',
              'Вопреки прогнозу, погода была хорошей. — Tahminlere rağmen hava güzeldi.',
            ],
            [
              'Datif',
              'согласно',
              'göre (resmi)',
              'согласно закону',
              'Согласно закону, это запрещено. — Kanuna göre bu yasak.',
            ],
            [
              'Datif',
              'навстречу',
              'karşılamak üzere / doğrultusunda',
              'навстречу ветру',
              'Она шла навстречу ветру. — Rüzgârın karşısına doğru yürüyordu.',
            ],
            [
              'Belirtme',
              'в',
              'içine / yön (hareket)',
              'в школу',
              'Я иду в школу. — Okula gidiyorum.',
            ],
            [
              'Belirtme',
              'на',
              'üzerine / yön (hareket)',
              'на работу',
              'Она едет на работу. — İşe gidiyor.',
            ],
            [
              'Belirtme',
              'за',
              'arkasına (hareket) / için',
              'за угол',
              'Он зашёл за угол. — Köşeyi döndü.',
            ],
            [
              'Belirtme',
              'под',
              'altına (hareket)',
              'под стол',
              'Кот залез под стол. — Kedi masanın altına girdi.',
            ],
            [
              'Belirtme',
              'через',
              'içinden / -den (zaman)',
              'через час',
              'Приходи через час. — Bir saat sonra gel.',
            ],
            [
              'Belirtme',
              'про',
              'hakkında (konuşma dili)',
              'про тебя',
              'Он рассказал про тебя. — Senden bahsetti.',
            ],
            [
              'Belirtme',
              'спустя',
              'sonra / geç (zaman)',
              'спустя год',
              'Спустя год он вернулся. — Bir yıl sonra döndü.',
            ],
            [
              'Belirtme',
              'о/об',
              'çarpmak (bir şeye)',
              'о камень',
              'Он споткнулся о камень. — Bir taşa takıldı.',
            ],
            [
              'Enstrümantal',
              'с',
              'ile / birlikte',
              'с другом',
              'Я иду с другом. — Bir arkadaşımla gidiyorum.',
            ],
            [
              'Enstrümantal',
              'за',
              'arkasında / -de (konum)',
              'за столом',
              'Он сидит за столом. — Masada oturuyor.',
            ],
            [
              'Enstrümantal',
              'перед',
              'önünde / önce',
              'перед домом',
              'Стой перед домом. — Evin önünde dur.',
            ],
            [
              'Enstrümantal',
              'над',
              'üzerinde',
              'над городом',
              'Самолёт летит над городом. — Uçak şehrin üzerinde uçuyor.',
            ],
            [
              'Enstrümantal',
              'под',
              'altında (konum)',
              'под столом',
              'Книга под столом. — Kitap masanın altında.',
            ],
            [
              'Enstrümantal',
              'между',
              'arasında',
              'между нами',
              'Это между нами. — Bu aramızda kalsın.',
            ],
            [
              'Enstrümantal',
              'рядом с',
              'yanında',
              'рядом с банком',
              'Кафе рядом с банком. — Kafe bankanın yanında.',
            ],
            [
              'Bulunma',
              'в',
              'içinde / -de (yer)',
              'в Москве',
              'Я живу в Москве. — Moskova’da yaşıyorum.',
            ],
            [
              'Bulunma',
              'на',
              'üzerinde / -de (yer)',
              'на столе',
              'Книга на столе. — Kitap masanın üzerinde.',
            ],
            [
              'Bulunma',
              'о/об',
              'hakkında / ile ilgili',
              'о работе',
              'Мы говорим о работе. — İşten bahsediyoruz.',
            ],
            [
              'Bulunma',
              'при',
              'iken / döneminde',
              'при Сталине',
              'При Сталине жизнь была трудной. — Stalin döneminde yaşam zordu.',
            ],
            [
              'Bulunma',
              'по',
              'varınca / -de (resmi, varıştan sonra)',
              'по приезде',
              'По приезде он позвонил. — Varınca aradı.',
            ],
        ],
      },
    },
      {
        h2: 'Çift halli edatlar: anlama göre iki hal',
        content:
          'Bazı Rus edatları **iki farklı hal** alabilir; anlam hale göre değişir. Bunlar **öğrenmesi en önemlileridir**: yanlış bir hal cümlenin anlamını değiştirir.',
        table: {
          caption: 'İki halli edatlar (в, на, за, под, о/об)',
          boldColumnIndices: [0, 1, 2],
          headers: ['Ed.', 'Hal 1', 'Örnek 1', 'Hal 2', 'Örnek 2'],
          rows: [
            ['в', 'Belirtme', 'в школу (okula, yön)', 'Bulunma', 'в школе (okulda, yer)'],
            ['на', 'Belirtme', 'на работу (işe, yön)', 'Bulunma', 'на работе (işte, yer)'],
            [
              'за',
              'Belirtme',
              'сесть за стол (masaya oturmak)',
              'Enstrümantal',
              'за столом (masada oturarak)',
            ],
            [
              'под',
              'Belirtme',
              'положить под стол (masanın altına koymak)',
              'Enstrümantal',
              'под столом (masanın altında)',
            ],
            [
              'о/об',
              'Belirtme',
              'споткнуться о порог (eşiğe takılmak)',
              'Bulunma',
              'говорить о работе (işten bahsetmek)',
            ],
          ],
        },
        bullets: [
          '**В/НА yön vs. yer kuralı** — en sık sorulan çift hal şeması:',
          '**В/НА + belirtme = YÖN** (nereye hareket): Я иду в школу. Положи книгу на стол.',
          '**В/НА + bulunma = YER** (bir yerde olmak, durağan): Я нахожусь в школе. Книга лежит на столе.',
        ],
      },
      {
        h2: 'Edat + genitif — derinlemesine',
        content:
          '**Genitif** diğer tüm hallerden daha çok edat alır. İşte anlama göre gruplanmış en önemlileri.',
        subsections: [
          {
            h3: 'Köken ve ayrılma: из, с, от',
            content:
              '**из** — bir yerin içinden: из России, из дома, из школы. **с** — -den (yüzeyden): с полки, с работы (konuşma), с крыши. **от** — -den (kişi veya kaynak): от друга, от врача, от боли. **Ayırt edin:** из ve от — **из** yerler (iç) için; **от** kişiler ve kaynaklar için. Я вернулся из Москвы vs. Я получил письмо от Ивана.',
          },
          {
            h3: 'Zaman: до, после, с (…до)',
            content:
              '**до** — kadar / önce: до урока, до свидания. **после** — sonra: после работы, после дождя. **с … до** — -den -e kadar: с утра до вечера.',
          },
          {
            h3: 'Mekân: у, около, вокруг, вдоль, мимо, напротив',
            content:
              '**у** — yanında: у окна, у меня. **около** — yakınında: около школы, около часа. **вокруг** — etrafında: вокруг стола, вокруг города. **вдоль** — boyunca: вдоль реки, вдоль дороги. **мимо** — yanından: мимо нас, пройти мимо. **напротив** — karşısında: напротив банка.',
          },
        ],
      },
      {
        h2: 'Edat + datif — derinlemesine',
        subsections: [
          {
            h3: 'К — yönelme',
            content:
              "**К** bir kişiye, nesneye veya soyut bir hedefe doğru hareketi veya yönelimi ifade eder — yön için в/на'nın **datif karşılığıdır**: к врачу, к другу, к окну, стремиться к цели.",
          },
          {
            h3: 'По — çok yönlü edat',
            content:
              '**Boyunca / içinde** bir yüzey: гулять по парку, идти по улице. **İletişim aracı:** по телефону, по почте, по интернету. **Konu:** урок по математике, книга по истории. **Tekrarlayan zaman:** по понедельникам, по вечерам. **Göre:** по закону, по правилам.',
          },
        ],
      },
      {
        h2: 'Edat + belirtme — derinlemesine',
        subsections: [
          {
            h3: 'Yön için В ve НА',
            content:
              '**В** ve **на** **yön belirtme halinin** başlıca edatlarıdır. **В** = kapalı bir alana doğru hareket: в школу, в Россию, в магазин. **НА** = bir yüzeye veya belirli yerlere: на стол, на работу, на Кубу.',
          },
          {
            h3: 'ЧЕРЕЗ — içinden / (zaman)',
            content:
              '**İçinden:** переплыть через реку, пройти через лес. **Zaman içinde:** через час, через неделю, через год.',
          },
          {
            h3: 'Hareket için ЗА ve ПОД',
            content:
              '**За + belirtme** = arkaya doğru hareket: зайти за угол, сесть за стол. **Под + belirtme** = aşağı doğru hareket: положить под стол, залезть под кровать.',
          },
        ],
      },
      {
        h2: 'Edat + enstrümantal — derinlemesine',
        subsections: [
          {
            h3: 'С — ile',
            content:
              '**С + enstrümantal** çok yaygındır. **Birliktelik:** с другом, с семьёй. **Malzemeler:** кофе с молоком, суп с грибами.',
          },
          {
            h3: 'Mekânsal konum edatları',
            content:
              '**За + enstrümantal** = arkasında / -de: за столом, за горой. **Перед + enstrümantal** = önünde: перед домом, перед сном. **Над + enstrümantal** = üzerinde: над городом, над столом. **Под + enstrümantal** = altında: под столом, под землёй. **Между + enstrümantal** = arasında: между нами, между домами.',
          },
        ],
      },
      {
        h2: 'Edat + bulunma — derinlemesine',
        subsections: [
          {
            h3: 'Yer için В ve НА',
            content:
              '**В** ve **на** bulunma halinde = **durağan yer** — bir şeyin zaten nerede olduğu: **В** : в Москве, в школе, в доме, в России. **НА** : на столе, на работе, на улице, на Кубе.',
          },
          {
            h3: 'О/ОБ — hakkında',
            content:
              '**О + bulunma** = düşünce veya konuşmanın konusu: говорить о, думать о, мечтать о, писать о. **О чём ?** | **О ком ?** **об** ünlüden önce: об этом, об Иване.',
          },
        ],
      },
      {
        h2: 'Ezberleme stratejileri: edat + hal',
        subsections: [
          {
            h3: 'Strateji 1: hale göre gruplar halinde öğrenin',
            content:
              "Tek tek edat yerine **hale göre paketler** öğrenin. Otomatikleşene kadar genitif bloğuyla (без, до, из, у, от, после, для, кроме) başlayın, sonra datif (к, по).",
          },
          {
            h3: 'Strateji 2: edat başına akılda kalıcı bir cümle',
            content:
              'Her edat için **kişisel, doğru bir cümle** üretin. Без тебя мне плохо, „без + isim“den daha uzun süre kalır.',
          },
          {
            h3: 'Strateji 3: çift hallere öncelik',
            content:
              '**В, на, за**, **под** : her biri iki hal. **İkiz cümleler** : Я иду в школу / Я в школе. Я поставил книгу за шкаф / Книга за шкафом.',
          },
          {
            h3: 'Strateji 4: „Nerede?“ vs. „Nereye?“ testi',
            content:
              '**в** ve **на** için: **„Nerede?“** (bulunma) mi yoksa **„Nereye?“** (belirtme) mi?',
          },
        ],
      },
    ],
    conclusion:
      '**Edatları ve halleri** bilmek doğruluk için hızlı bir kaldıraçtır. Anahtar **edat → hal çiftidir** : без → genitif, к → datif vb.\\n\\n**Çift hallerle** (в, на, за, под) başlayın. В/на için **„Nerede?“ / „Nereye?“** testi. Gerçek cümleler — çiftler otomatikleşir.',
    conclusionBullets: [
      '**Genitif** en çok edatı alır (18) — без, до, из, у, от, после, для, кроме bloğu.',
      '**В/НА + belirtme** = yön. **В/НА + bulunma** = yer.',
      '**Çift haller** (в, на, за, под): hareket vs. konum.',
      'Otomatikleşene kadar ana tabloyu **referans** olarak kullanın.',
    ],
    ctaText: 'Edatları uygulamada çalışın',
    ctaHref: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Rus edatları ve haller: Her edattan sonra hangi hal kullanılır?',
      description:
        'Tam rehber: her Rus edatı ve hali. 44 edat, çift haller, derinlemesine inceleme, ezber ipuçları.',
      datePublished: '2026-03-12',
      dateModified: '2026-03-12',
      author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://russiandeclensions.com/learn/articles/russian-prepositions-and-cases',
      },
      keywords:
        'Rus edatları hal, Rus edatları genitif, в на с по Rus hali',
    },
    faq: [
      {
        question: 'Hangi Rus edatları genitif gerektirir?',
        answer:
          'Başlıcaları: **без**, **до**, **из**, **с**, **у**, **от**, **после**, **для**, **кроме**, **вокруг**, **мимо**, **вместо**, **напротив**, **из-за**, **из-под**, **ради**, **около**, **вдоль**. En sık kullanılanlar için **БДИ-УОП-ДК** kısaltması.',
      },
      {
        question: 'в + belirtme ile в + bulunma arasındaki fark nedir?',
        answer:
          '**в + belirtme** = **yön** : Я иду в школу. **в + bulunma** = **yer** : Я в школе. **на** için de aynı mantık.',
      },
      {
        question: 'с ne zaman genitif, ne zaman enstrümantal alır?',
        answer:
          '**с + genitif** = „-den“ (yüzeyden): книга упала с полки. **с + enstrümantal** = „ile“: я иду с другом. Anlam tamamen farklıdır.',
      },
    ],
};
