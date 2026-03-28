import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri — `russian-genitive-case`. Kiril, Almanca kaynakla aynı. */
export const russianGenitiveCaseTr: LearnArticle = {
  slug: 'russian-genitive-case',
  title:
    'Rus genitifi: kurallar, ekler ve 32 gerçek örnek',
  metaTitle:
    'Rus genitifi: kurallar, ekler ve örnekler | Russian Cases with Anna',
  metaDescription:
    'Rus genitifi için en kapsamlı rehber: 7 kullanım, tekil ve çoğul ekler, düzensiz biçimler, 16 edat, sayılar, У + genitif. Transliterasyonlu 32 gerçek örnek cümle.',
  keywords: [
    'rus genitif',
    'rus genitif ekleri',
    'rus genitif kuralları',
    'rus genitif çoğul',
    'rus genitif örnekleri',
    'rus sahiplik dilbilgisi',
  ],
  h1: 'Rus genitifi: kurallar, ekler ve 32 gerçek örnek',
  heroImage: {
    src: '/articles/free-russian-lesson-genitive-case.webp',
    alt: 'Genitif konusunda ücretsiz Rusça dersi: sahiplik, olumsuzluk ve miktarlar',
    width: 1200,
    height: 630,
  },
  intro:
    'Yalnızca **bir Rus hali** daha öğrenecekseniz, **genitif**i seçin. Rus genitifi yalın halden sonra **en sık kullanılan haldir** — **sahiplik**, **olumsuzluk**, **miktarlar**, **tarihler** ve diğer tüm hallere göre daha çok **edattan** sonra geçer.\n\nBu rehber her şeyi kapsar: kurallar, tüm ekler, herkesin takıldığı düzensiz biçimler ve genitifin pratikte nasıl işlediğini görmek için **32 Rus örnek cümlesi**.',
  whatYouLearn: [
    'Rus genitifinin ne olduğu ve ne zaman kullanılacağı (7 temel kullanım)',
    'Genitif tekil ekleri — örneklerle tüm isim türleri',
    'Genitif çoğul ekleri — sıfır ek ve kaçan ünlüler dahil',
    'Ezberlenmesi gereken 11 düzensiz genitif çoğul (человек → людей, глаз → глаз vb.)',
    'Genitif isteyen 16 edat',
    'Genitifle sayılar ve miktarlar (2/3/4 ve 5+, 21, 22, 25…)',
    'Genitif ve belirtme — canlı eril isim tuzağı',
    'Rusçada «sahip olmak» için У + genitif yapısı',
  ],
  leadMagnetCta: {
    title: 'Akıllı alıştırmalarla Rus genitifini çalışın',
    description:
      'Uygulamamız 6 Rus halinin tamamını — genitif çoğul dahil — aralıklı tekrar, gerçek cümleler ve anında geri bildirimle çalıştırır. Android ve iOS.',
    ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus hallerine tam rehber: Örneklerle açıklanan 6 hal',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rus çekim ekleri: Nihai özet sayfası',
    },
    {
      href: '/learn/lessons/dative-case-declension',
      label:
        'Rus datifi: Rusçada «-e / için» nasıl söylenir',
    },
  ],
  tableAccentVariant: 'genitive',
  sections: [
    {
      h2: 'Rus genitifi nedir?',
      content:
        '**Genitif** (Родительный падеж — kelimesi kelimesine «kaynak hali») altı Rus halinin ikincisidir. Adı ana işlevi çağrıştırır: **kaynak, aidiyet veya ilişki** — **Кого ?** (kimin?) ve **Чего ?** (neyin?) sorularına yanıt verir. İngilizcede **of** veya **’s** ile ifade edilir.\n\nRusçada her şey **sözcük ekleriyle** olur — ekstra sözcük yok. Örnek: şehrin adı = **название города** (города, город’un genitifidir).',
      subsections: [
        {
          h3: 'Kısa yanıt',
          content:
            'Rus genitifi **Кого ?** ve **Чего ?** sorularına yanıt verir.\n\nÖzellikle **sahiplik**, **yokluk**, **miktar** için kullanılır; birçok yaygın **edattan** sonra zorunludur.',
        },
      ],
    },
    {
      h2: 'Rus genitifinin 7 temel kullanımı',
      content:
        'Genitif Rusçanın **en çok yönlü** halidir.\n\n**Sahiplik**, **olumsuzluk**, **miktar**, **edatlar**, **karşılaştırma**, **tarihler** ve **belirli fiillerle** görünür.',
      image: {
        src: '/articles/when-to-use-the-genitive-case-in-russian-cheat-sheet.webp',
        alt: 'Özet: Rusçada genitif ne zaman kullanılır',
        width: 1200,
        height: 630,
      },
      subsections: [
        {
          h3: 'Kullanım 1 — Sahiplik ve aidiyet',
          content:
            'Genitif İngilizce **of** veya **’s** yerine geçer. Bir isim başkasına **ait** olduğunda **sahip** **genitifte** durur.',
          bullets: [
            '**дом отца** — babanın evi',
            '**столица России** — Rusya’nın başkenti',
            '**конец фильма** — filmin sonu',
          ],
        },
        {
          h3: 'Kullanım 2 — Yokluk ve olumsuzluk (нет, не было, не будет)',
          content:
            'Bir şeyin **olmadığını**, bulunmadığını veya yok olduğunu söylediğinizde genitif zorunludur. **нет**, **не было** ve **не будет** yapıları daima genitifle kurulur.',
          bullets: [
            '**У меня нет машины.** — Arabam yok. (нет + genitif)',
            '**Здесь нет сахара.** — Burada şeker yok.',
            '**Его не было дома.** — Evde değildi. (не было + genitif)',
            '**Завтра не будет дождя.** — Yarın yağmur olmayacak.',
          ],
        },
        {
          h3: 'Kullanım 3 — Miktar, sayı ve ölçü',
          content:
            'Çoğu **sayı** ve **miktar sözcüğünden** sonra Rusça **genitif** ister.\n\n**1** sonrası: yalın tekil. **2, 3, 4** sonrası: genitif tekil. **5–20** ve ilgili büyük sayılar sonrası: genitif çoğul. **много**, **мало**, **несколько**, **сколько** sonrası: genitif çoğul.',
        },
        {
          h3: 'Kullanım 4 — Edatlar',
          content:
            'Genitif isteyen **daha fazla edat** vardır diğer tüm hallere göre. Ana örnekler: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**. Tam tablo aşağıdaki Edatlar bölümünde.',
        },
        {
          h3: 'Kullanım 5 — Karşılaştırma',
          content:
            'Rusçada üstünlük derecesiyle **karşılaştırmalar** **genitifte** kurulur: **Он старше меня.** — Benden yaşlı. (меня = я’nın genitifi)',
        },
        {
          h3: 'Kullanım 6 — Tarihler',
          content:
            '**Tarih** için **gün ve ay** ikisi de genitifte olur: **Он родился пятого марта.** — 5 Mart’ta doğdu.',
        },
        {
          h3: 'Kullanım 7 — Bazı fiiller (nesne genitifte)',
          content:
            'Önemli bir **fiil** kümesi nesneyi **genitifle** alır: **ждать** (beklemek), **желать** (dilemek), **бояться** (korkmak), **избегать** (kaçınmak), **достигать** (ulaşmak).',
        },
      ],
    },
    {
      h2: 'Genitif ekleri — tekil',
      content:
        'Tablo her Rus isim türü için **genitif tekil**in nasıl kurulduğunu gösterir. Yalın halda **cinsiyeti** ve **son harfi** belirleyin, sonra doğru **eki** uygulayın.\n\nNot: **8 harf kuralı** **Г, К, Х, Ж, Ш, Щ, Ч, Ц** sonrasında **Ы** yerine **И** yazar.',
      table: {
        caption: 'İsim türüne göre genitif tekil',
        boldColumnIndices: [1, 3],
        headers: [
          'İsim türü',
          'Ek',
          'Oluşum',
          'Sonuç',
          'Bağlamda örnek',
        ],
        rows: [
          [
            'E. sert',
            '-а',
            'стол → стол+а',
            'стола',
            'нет стола — masa yok',
          ],
          [
            'E. yumuşak',
            '-я',
            'гений → гени+я',
            'гения',
            'без гения — dâhi olmadan',
          ],
          [
            'E. -ж/ш/щ/ч',
            '-а',
            'нож → нож+а',
            'ножа',
            'без ножа — bıçaksız',
          ],
          [
            'D. -а (sert)',
            '-ы',
            'книга → книг+ы',
            'книги',
            'нет книги — kitap yok',
          ],
          [
            'D. -а (г/к/х/ж/ш/щ/ч/ц sonrası)',
            '-и',
            'подруга → подруг+и',
            'подруги',
            'без подруги — arkadaşsız (kız)',
          ],
          [
            'D. -я',
            '-и',
            'неделя → недел+и',
            'недели',
            'нет недели — hafta yok',
          ],
          [
            'D. -ь',
            '-и',
            'ночь → ноч+и',
            'ночи',
            'до ночи — geceye kadar',
          ],
          ['N. -о', '-а', 'окно → окн+а', 'окна', 'нет окна — pencere yok'],
          ['N. -е', '-я', 'море → мор+я', 'моря', 'до моря — denize kadar'],
          [
            'N. -мя',
            '-ени',
            'имя → имен+и',
            'имени',
            'без имени — adsız',
          ],
        ],
      },
    },
    {
      h2: 'Genitif ekleri — çoğul (en zor kısım)',
      content:
        '**Genitif çoğul** genellikle Rus çekiminin **en zor** bölümü sayılır. Diğer tüm hallerden daha çok biçim ve istisnası vardır.\n\n**-а** ile dişil ve **-о** ile birçok nötr isim **sıfır ek** (**-Ø**) alır — gövde tek başına kalır. **окон** ve **яблок** gibi biçimlerde telaffuz için ünsüzler arasına kaçan **О** ünlüsü girer.',
      table: {
        caption: 'İsim türüne göre genitif çoğul',
        boldColumnIndices: [1, 3],
        headers: [
          'İsim türü',
          'Ek',
          'Oluşum',
          'Sonuç',
          'Bağlamda örnek',
        ],
        rows: [
          [
            'E. sert',
            '-ов',
            'стол → стол+ов',
            'столов',
            'пять столов — beş masa',
          ],
          [
            'E. -ж/ш/щ/ч/ц (vurgulu)',
            '-ей',
            'нож → нож+ей',
            'ножей',
            'несколько ножей — birkaç bıçak',
          ],
          [
            'E. -ж/ш/щ/ч/ц (vurgusuz)',
            '-ей',
            'врач → врач+ей',
            'врачей',
            'много врачей — çok doktor',
          ],
          [
            'E. yumuşak -й',
            '-ев',
            'музей → музе+ев',
            'музеев',
            'три музея — üç müze',
          ],
          [
            'E. yumuşak -ь',
            '-ей',
            'словарь → словар+ей',
            'словарей',
            'много словарей — çok sözlük',
          ],
          [
            'D. -а (sert)',
            '-Ø (sıfır)',
            'женщина → женщин',
            'женщин',
            'много женщин — çok kadın',
          ],
          [
            'D. -а (к/г sonrası)',
            '-Ø',
            'подруга → подруг',
            'подруг',
            'нет подруг — arkadaş yok (kız)',
          ],
          [
            'D. -я',
            '-ей / -й',
            'неделя → недель',
            'недель',
            'несколько недель — birkaç hafta',
          ],
          [
            'D. -ь',
            '-ей',
            'ночь → ноч+ей',
            'ночей',
            'пять ночей — beş gece',
          ],
          [
            'N. -о (sert)',
            '-Ø',
            'окно → окон',
            'окон',
            'много окон — çok pencere',
          ],
          ['N. -е', '-ей', 'море → мор+ей', 'морей', 'пять морей — beş deniz'],
          [
            'N. -ие/-ия',
            '-ий',
            'здание → здани+й',
            'зданий',
            'много зданий — çok bina',
          ],
        ],
      },
    },
    {
      h2: 'Düzensiz genitif çoğulları — zorunlu liste',
      content:
        'En sık geçen Rus isimlerinden bazılarının **çok düzensiz** genitif çoğulları vardır; **ezberlenmelidir**. Bunlar **yüksek frekanslı** sözcüklerdir.',
      table: {
        caption: '11 çok sık düzensiz genitif çoğul',
        boldColumnIndices: [1, 2],
        headers: [
          'Yalın tekil',
          'Genitif çoğul',
          'Örnek',
          'Not',
        ],
        rows: [
          ['человек (kişi)', 'людей', 'много людей', 'Suppletif (люди)'],
          ['ребёнок (çocuk)', 'детей', 'много детей', 'Suppletif (дети)'],
          ['глаз (göz)', 'глаз', 'пара глаз', 'Sıfır ek (глазов değil)'],
          ['раз (kez)', 'раз', 'несколько раз', 'Sıfır ek (разов değil)'],
          ['солдат (asker)', 'солдат', 'отряд солдат', 'Sıfır ek'],
          ['носок (çorap)', 'носков', 'пара носков', '-ов korunur'],
          ['чулок (çorap/külotlu)', 'чулок', 'пара чулок', 'Sıfır ek (чулков değil)'],
          ['яблоко (elma)', 'яблок', 'килограмм яблок', 'Sıfır ek'],
          ['имя (ad)', 'имён', 'список имён', '-мя nötr tipi'],
          ['мать (anne)', 'матерей', 'двое матерей', 'Özel çekim'],
          ['дочь (kız çocuk)', 'дочерей', 'трое дочерей', 'Özel çekim'],
        ],
      },
    },
    {
      h2: 'Genitif alan Rus edatları — tam liste',
      content:
        'Aşağıdaki **edatlar** daima **genitif** ister. Kısaltma ipucu — **БДИ-УОП-ДК**: **Без · До · Из · У · От · После · Для · Кроме**.\n\nBu 8 edat, edat sonrası genitif kullanımlarının **yaklaşık %90**’ını kapsar.',
      table: {
        caption: 'Örnekli 16 genitif edatı',
        boldColumnIndices: [0, 2],
        headers: [
          'Edat',
          'Anlam',
          'İsimle',
          'Tam cümle + çeviri',
        ],
        rows: [
          [
            'без',
            '-sız / olmadan',
            'без молока',
            'Я пью чай без молока. — Sütsüz çay içiyorum.',
          ],
          [
            'до',
            '-e kadar / önce / sınır',
            'до урока',
            'Позвони мне до урока. — Dersten önce beni ara.',
          ],
          [
            'из',
            '-den (içinden)',
            'из России',
            'Он приехал из России. — Rusya’dan geldi.',
          ],
          [
            'с',
            '-den (yüzeyden)',
            'с полки',
            'Книга упала с полки. — Kitap raftan düştü.',
          ],
          [
            'у',
            '-de / yanında',
            'у меня',
            'У меня есть кошка. — Kedim var.',
          ],
          [
            'от',
            '-den (kişi / kaynak)',
            'от друга',
            'Письмо от друга. — Arkadaştan bir mektup.',
          ],
          [
            'после',
            'sonra',
            'после работы',
            'После работы я устал. — İşten sonra yorgundum.',
          ],
          [
            'для',
            'için (yararına)',
            'для тебя',
            'Это подарок для тебя. — Bu senin için bir hediye.',
          ],
          [
            'кроме',
            'hariç / dışında',
            'кроме меня',
            'Все кроме меня пришли. — Ben hariç herkes geldi.',
          ],
          [
            'вокруг',
            'etrafında',
            'вокруг города',
            'Мы ехали вокруг города. — Şehrin etrafında araba kullandık.',
          ],
          [
            'мимо',
            'yanından (geçerek)',
            'мимо школы',
            'Он прошёл мимо школы. — Okulun yanından geçti.',
          ],
          [
            'вместо',
            'yerine',
            'вместо кофе',
            'Выпей воды вместо кофе. — Kahve yerine su iç.',
          ],
          [
            'напротив',
            'karşısında',
            'напротив банка',
            'Кафе напротив банка. — Kafe bankanın karşısında.',
          ],
          [
            'из-за',
            'yüzünden / arkasından',
            'из-за дождя',
            'Из-за дождя мы остались дома. — Yağmur yüzünden evde kaldık.',
          ],
          [
            'из-под',
            'altından',
            'из-под стола',
            'Кот вылез из-под стола. — Kedi masanın altından çıktı.',
          ],
          [
            'ради',
            'uğruna',
            'ради тебя',
            'Ради твоего счастья. — Mutluluğun uğruna.',
          ],
        ],
      },
    },
    {
      h2: 'Rus sayıları ve genitif',
      content:
        'Rusçada saymak **genitif** gerektirir — **tekil** mi **çoğul** mu sayıya bağlıdır.\n\nRusça **«paketler»** halinde sayar: **1** ile biten sayılar yalın kullanır; **2–4** genitif tekil; **5–0** genitif çoğul.',
      table: {
        caption: 'Sayı + hal kuralları ve örnekler',
        boldColumnIndices: [1, 2],
        headers: [
          'Sayı / belirteç',
          'Gerekli hal',
          'Örnek (стол)',
          'Çeviri',
        ],
        rows: [
          ['1', 'Yalın tekil', 'один стол', 'bir masa'],
          [
            '2, 3, 4',
            'Genitif tekil',
            'два стола / три стола',
            'iki / üç masa',
          ],
          ['5–20', 'Genitif çoğul', 'пять столов', 'beş masa'],
          [
            '21, 31, 41… (1 ile biter)',
            'Yalın tekil',
            'двадцать один стол',
            'bir masa (1 sonrası yalın tekil)',
          ],
          [
            '22–24, 32–34… (2–4 ile biter)',
            'Genitif tekil',
            'двадцать два стола',
            'yirmi iki masa',
          ],
          [
            '25–30 vb. (5–9, 0 ile biter)',
            'Genitif çoğul',
            'двадцать пять столов',
            'yirmi beş masa',
          ],
          ['100, 200, 1000…', 'Genitif çoğul', 'сто столов', 'yüz masa'],
          [
            'много / несколько / мало',
            'Genitif çoğul',
            'много столов',
            'çok / birkaç / az masa',
          ],
          [
            'сколько / столько',
            'Genitif çoğul',
            'сколько столов?',
            'kaç masa?',
          ],
        ],
      },
    },
    {
      h2: 'Genitif ve belirtme: nasıl ayırt edilir',
      content:
        '**Genitif** ile **belirtmeyi** ayırt etmek en kafa karıştırıcı noktalardan biridir. **Canlı eril** isimlerde belirtme biçimi genitifle **aynıdır** — **студента** her iki hal olabilir.\n\n**Bağlam** ve **cümle yapısı** karar verir.',
      table: {
        caption: 'Genitif / belirtme karşılaştırması',
        boldColumnIndices: [0, 1],
        headers: ['Durum', 'Rus cümle', 'Açıklama'],
        rows: [
          [
            'Sahiplik / aidiyet',
            'Это книга студента.',
            'Bu öğrencinin kitabı. (genitif sahibi işaret eder)',
          ],
          [
            'Yokluk (нет)',
            'Нет студента.',
            'Öğrenci yok. (нет daima genitif ister)',
          ],
          [
            'Doğrudan nesne (canlı)',
            'Я вижу студента.',
            'Öğrenciyi görüyorum. (canlı bel. = genitif biçimi)',
          ],
          [
            'Doğrudan nesne (cansız)',
            'Я вижу стол.',
            'Masayı görüyorum. (cansız bel. = yalın — burada genitif yok)',
          ],
          [
            '2–4 sayılarından sonra',
            'Я вижу двух студентов.',
            'İki öğrenci görüyorum. (canlı → sayı ile genitif çoğul)',
          ],
          [
            'Partitif genitif',
            'Хочешь чаю?',
            'Çay ister misin? (partitif — «biraz»)',
          ],
        ],
      },
    },
    {
      h2: 'Rus genitifinden 32 gerçek örnek',
      content:
        'İşte genitifin ana kullanımlarını gösteren **32 özgün Rus cümlesi**. Her satırda transliterasyon ve çeviri var. **1–5:** sahiplik | **6–10:** yokluk / olumsuzluk | **11–15:** miktar ve sayılar | **16–22:** edatlar | **23–32:** deyimler ve çeşitli.',
      table: {
        caption: 'Genitifli 32 örnek cümle',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Rusça', 'Transliterasyon', 'Çeviri ve notlar'],
        rows: [
          [
            '1',
            'Это машина моего брата.',
            'Eto mashina moyego brata.',
            'Bu kardeşimin arabası. (брат → брата, gen. tekil e.)',
          ],
          [
            '2',
            'Адрес нашей компании.',
            'Adres nashey kompanii.',
            'Şirketimizin adresi. (компания → компании)',
          ],
          [
            '3',
            'Столица России — Москва.',
            'Stolitsa Rossii — Moskva.',
            'Rusya’nın başkenti Moskova’dır. (Россия → России)',
          ],
          [
            '4',
            'Конец фильма был неожиданным.',
            'Konets filma byl neozhidannym.',
            'Filmin sonu beklenmedikti. (фильм → фильма)',
          ],
          [
            '5',
            'Цвет её глаз — карий.',
            'Tsvet yeyo glaz — kariy.',
            'Gözlerinin rengi ela. (глаза → глаз, gen. çoğ.)',
          ],
          [
            '6',
            'У меня нет времени.',
            'U menya net vremeni.',
            'Vaktim yok. (время → времени, -мя nötr)',
          ],
          [
            '7',
            'Здесь нет молока.',
            "Zdes' net moloka.",
            'Burada süt yok. (молоко → молока)',
          ],
          [
            '8',
            'Я не видел его несколько дней.',
            'Ya ne videl yego neskolko dney.',
            'Onu birkaç gündür görmedim. (день → дней)',
          ],
          [
            '9',
            'В холодильнике нет яиц.',
            'V kholodilnike net yaits.',
            'Buzdolabında yumurta yok. (яйцо → яиц, gen. çoğ.)',
          ],
          [
            '10',
            'Без тебя мне плохо.',
            'Bez tebya mne plokho.',
            'Sensiz kötü hissediyorum. (ты → тебя, zamir gen.)',
          ],
          [
            '11',
            'Два стакана воды, пожалуйста.',
            'Dva stakana vody, pozhaluysta.',
            'İki bardak su, lütfen. (два + gen. tekil)',
          ],
          [
            '12',
            'Пять минут ходьбы отсюда.',
            "Pyat' minut khod'by otsyuda.",
            'Buradan beş dakika yürüme. (пять + gen. çoğ.)',
          ],
          [
            '13',
            'Много людей пришло на концерт.',
            'Mnogo lyudey prishlo na kontsert.',
            'Konserde çok insan geldi. (много + людей)',
          ],
          [
            '14',
            'Несколько студентов опоздало.',
            'Neskolko studentov opozdalo.',
            'Birkaç öğrenci geç kaldı. (несколько + gen. çoğ.)',
          ],
          [
            '15',
            'Килограмм помидоров.',
            'Kilogramm pomidorov.',
            'Bir kilo domates. (помидоры → помидоров)',
          ],
          [
            '16',
            'Она пришла из Германии.',
            'Ona prishla iz Germanii.',
            'Almanya’dan geldi. (из + gen.)',
          ],
          [
            '17',
            'До свидания!',
            'Do svidaniya!',
            'Güle güle! Kelimesi kelimesine: Görüşmeye kadar. (до + gen.)',
          ],
          [
            '18',
            'Без усилий нет результатов.',
            'Bez usiliy net rezultatov.',
            'Çaba olmadan sonuç olmaz. (без + gen. çoğ.)',
          ],
          [
            '19',
            'У врача очередь.',
            "U vracha ochered'.",
            'Doktorda sıra var. (у + gen.)',
          ],
          [
            '20',
            'После дождя — солнце.',
            'Posle dozhdya — solntse.',
            'Yağmurdan sonra güneş. (после + gen.)',
          ],
          [
            '21',
            'Вокруг парка — красивые дома.',
            'Vokrug parka — krasivye doma.',
            'Parkın etrafında güzel evler var. (вокруг + gen.)',
          ],
          [
            '22',
            'Из-за пробок я опоздал.',
            'Iz-za probok ya opozdal.',
            'Trafik yüzünden geç kaldım. (из-за + gen.)',
          ],
          [
            '23',
            'Ни слова правды.',
            'Ni slova pravdy.',
            'Tek kelime doğruluk yok. (olumsuzluk genitifi)',
          ],
          [
            '24',
            'Не было смысла спорить.',
            "Ne bylo smysla sporit'.",
            'Tartışmanın anlamı yoktu. (не было + gen.)',
          ],
          [
            '25',
            'Час от часу не легче.',
            'Chas ot chasu ne legche.',
            'Her geçen saat daha da zor. (deyim: от + gen.)',
          ],
          [
            '26',
            'Ради твоего счастья.',
            'Radi tvoyego schastya.',
            'Senin mutluluğun uğruna. (ради + gen.)',
          ],
          [
            '27',
            'Сколько стоит бутылка воды?',
            'Skolko stoit butylka vody?',
            'Bir şişe su kaç para? (воды = вода’nın gen. tekil)',
          ],
          [
            '28',
            'Мне не хватает денег.',
            'Mne ne khvatayet deneg.',
            'Param yetmiyor. (не хватает + gen.)',
          ],
          [
            '29',
            'Желаю тебе счастья и здоровья!',
            'Zhelayu tebe schastya i zdorovya!',
            'Sana mutluluk ve sağlık dilerim! (желать + gen.)',
          ],
          [
            '30',
            'Начало нового года.',
            'Nachalo novogo goda.',
            'Yeni yılın başlangıcı. (zincir gen.: нового + года)',
          ],
          [
            '31',
            'У неё голубые глаза.',
            'U neyo golubye glaza.',
            'Onun mavi gözleri var. (у + zamir gen.)',
          ],
          [
            '32',
            'Вкус победы.',
            'Vkus pobedy.',
            'Zaferin tadı. (победа → победы, gen. tekil)',
          ],
        ],
      },
    },
    {
      h2: 'Rusçada sahiplik: У + genitif («sahip olmak»)',
      content:
        'Rusçanın sahipliği anlatmak için **iki ana yolu** vardır; ikisi de genitifle. **Yapı 1 — İsim + genitif:** **машина друга** — arkadaşın arabası. **Yapı 2 — У + genitif + есть:** birinin bir şeyi olduğunu söylemek için.\n\nDoğrudan **«sahip olmak»** fiili yoktur. Bunun yerine: **У** [kişi genitifte] **есть** [şey].',
      subsections: [
        {
          h3: 'У yapısı tüm zamanlarda',
          content:
            '**Şimdiki:** **У меня есть кошка.** (Kedim var — konuşmada есть sık sık düşer). **Geçmiş:** **У меня была кошка.** (Kedim vardı — была, кошка ile uyumludur). **Gelecek:** **У меня будет кошка.** (Kedim olacak).\n\n**Olumsuz — şimdi:** **У меня нет кошки.** (нет + genitif). **Olumsuz — geçmiş:** **У меня не было кошки.** **Olumsuz — gelecek:** **У меня не будет кошки.**',
        },
      ],
    },
    {
      h2: 'Genitifte en sık 7 hata (ve düzeltme)',
      content:
        'Öğrencilerin genitifle **en sık yaptığı hatalar**:',
      bullets: [
        '**НЕТ sonrası yalın** — Нет кот. ✗ → Нет кота. ✓ (нет daima genitif ister)',
        '**8 harf kuralını unutmak** — книгы ✗ → книги ✓ (г sonrası и, ы değil)',
        '**Sayıyla yanlış uyum** — пять стол ✗ → пять столов ✓ (5+ genitif çoğul ister)',
        '**Sıfır ekli dişilde -ов** — много женщинов ✗ → много женщин ✓',
        '**из ve от karıştırmak** — из = «içinden / yerden» ; от = «kişiden / kaynaktan». Он пришёл от врача vs. Он вернулся из больницы.',
        '**Karşılaştırmada belirtme yerine genitif** — Он старше я ✗ → Он старше меня ✓',
        '**Genitif çoğulda kaçan ünlüleri unutmak** — окнов ✗ → окон ✓ ; ручков ✗ → ручек ✓',
      ],
    },
  ],
  conclusion:
    'Rus genitifi hal sisteminin **iş atı**dır. **Sahiplik**, **olumsuzluk**, **miktar**, **karşılaştırma**, **tarihler** yönetir; diğer tüm hallere göre daha çok **edat** gerektirir.\n\nÖzet: **Genitif tekil** — eril **-а/-я** | dişil **-ы/-и** | nötr **-а/-я**. **Genitif çoğul** — kalıpları ve sık istisnaları ezberleyin. **НЕТ**, **НЕ БЫЛО**, **НЕ БУДЕТ** sonrası: daima genitif. **2/3/4** sonrası: genitif tekil | **5+**, **много**, **несколько** sonrası: genitif çoğul. Ana edatlar: **без**, **до**, **из**, **у**, **от**, **после**, **для**, **кроме**.',
  conclusionOutro:
    'Devam etmeye hazır mısınız? Tam Rus dilbilgisi serimizde diğer halleri keşfedin:',
  ctaText: 'Uygulamamızla Rus hallerini çalışın',
  ctaHref: '/',
  faq: [
    {
      question: 'Rus genitifi ne işe yarar?',
      answer:
        'Rus genitifi sahiplik (книга студента — öğrencinin kitabı), yokluk / olumsuzluk (нет воды — su yok), miktar ve sayılar (два стакана — iki bardak ; много людей — çok insan), birçok edattan sonra (без, до, из, у, от, после, для…), karşılaştırma (старше меня — benden yaşlı) ve tarihler için kullanılır.',
    },
    {
      question: 'Rusçada genitif çoğul nasıl kurulur?',
      answer:
        'Oluşum isim türüne bağlıdır: sert eriller -ов ekler (стол → столов) ; yumuşak eril ve dişiller genelde -ей (ночь → ночей ; словарь → словарей) ; -а dişillerde sık sıfır ek (женщина → женщин, книга → книг). -о nötrlerde de sıfır ek, bazen kaçan ünlü (окно → окон). Bu Rus çekiminin en zor kısmıdır.',
    },
    {
      question: 'Rus genitifi belirtmeyle aynı mıdır?',
      answer:
        'Tam olarak değil, ama canlı erillerde çakışır: Я вижу студента (belirtme) ve Нет студента (genitif) aynı студента biçimini kullanır. Cansızda eril belirtme yalına eşittir (Я вижу стол), genitif -а ekler (Нет стола). Dişilde belirtmede -а → -у (Я читаю книгу), genitifte -а → -ы/-и (Нет книги).',
    },
    {
      question: 'Hangi Rus fiiller genitif ister?',
      answer:
        'Yaygın genitif nesneli fiiller: бояться (korkmak), ждать (beklemek), желать (dilemek), избегать (kaçınmak), достигать (ulaşmak), лишать (mahrum etmek), касаться (ilgilenmek / dokunmak), ve partitif yapılarda хотеть (хочешь чаю? — çay ister misin?).',
    },
    {
      question: 'Rusçada «sahibim» nasıl denir?',
      answer:
        'Doğrudan «sahip olmak» fiili yok. У + [kişi genitif] + есть + [şey] kullanılır: У меня есть машина (arabam var). Olumsuz: У меня нет машины (arabam yok) — sahip olunmayan şey нет sonrası genitifte olur.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rus genitifi: kurallar, ekler ve 32 gerçek örnek',
    description:
      'Tam rehber: 7 kullanım, tekil ve çoğul ekler, düzensiz biçimler, 16 edat, sayılar, У + genitif. Transliterasyonlu 32 örnek.',
    datePublished: '2025-03-11',
    dateModified: '2025-03-11',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-genitive-case',
    },
    keywords:
      'rus genitif, rus genitif ekleri, rus genitif kuralları, rus genitif çoğul, rus genitif örnekleri, rus sahiplik dilbilgisi',
  },
};
