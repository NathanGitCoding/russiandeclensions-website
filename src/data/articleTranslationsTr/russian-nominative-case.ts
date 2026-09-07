import type { LearnArticle } from '../learnArticles';

/** Türkçe çeviri — `russian-nominative-case`. Kiril, İngilizce kaynakla aynı. */
export const russianNominativeCaseTr: LearnArticle = {
  slug: 'russian-nominative-case',
  title: 'Rus yalın hali: kurallar, ekler ve 24 gerçek örnek',
  metaTitle: 'Rus yalın hali: kurallar, ekler ve örnekler | Russian Cases with Anna',
  metaDescription:
    'Rus yalın haline dair eksiksiz rehber: 6 temel kullanım, tekil ve çoğul ekler, düzensiz çoğullar, yalın hal ile belirtme hali karşılaştırması. Transliterasyonlu 24 gerçek örnek.',
  keywords: [
    'rus yalın hali',
    'rusça yalın hal',
    'rus yalın hali ekleri',
    'rusçada yalın hal nedir',
    'rus yalın hali örnekleri',
    'rus yalın hal çoğul',
  ],
  h1: 'Rus yalın hali: kurallar, ekler ve 24 gerçek örnek',
  heroImage: {
    src: '/articles/russian-nominative-case-dictionary-form.webp',
    alt: 'Açık bir Rusça sözlük ve defter — Rusça sözcüklerin temel sözlük biçimi olan yalın hali öğrenmek',
    width: 1536,
    height: 1024,
  },
  intro:
    'Yalın hal, her Rusça öğrencisinin karşılaştığı ilk haldir — ve çoğu öğrencinin zaten bildiğini sandığı haldir. Bu, **sözlük biçimidir**: bir sözcüğü sözlükte aradığınızda, flash kart olarak ezberlediğinizde ve tek başına söylendiğini duyduğunuzda gördüğünüz biçim. Ama yalın hali «üzerinde düşünmenize gerek olmayan hal» olarak görmek bir hatadır. Kendine özgü **çoğul kuralları**, kendine özgü **düzensiz biçimleri** ve kendine özgü bir **tuzağı** vardır — belirtme haliyle birebir aynı görünmeye başladığı o tam an.\n\nBu rehber Rus yalın hali hakkında her şeyi kapsar: ne olduğu, «cümlenin öznesi» dışında ne zaman kullanıldığı, çoğulun nasıl kurulduğu (orta seviye öğrencileri şaşırtan vurgu kaymalı ve tümüyle düzensiz çoğullar dahil) ve belirtme halinden nasıl ayırt edileceği. Transliterasyonlu **24 gerçek Rusça örnek** dahildir.',
  whatYouLearn: [
    'Rus yalın halinin ne olduğu ve kullanıldığı 6 durum',
    'Her isim cinsi için yalın tekil ekleri',
    'Yalın çoğul ekleri — vurgu kaymalı çoğullar dahil (дом → дома, город → города)',
    'Ezberlenmesi gereken 12 düzensiz yalın çoğul (друг → друзья, ребёнок → дети vb.)',
    'Sıfatların ve zamirlerin yalın hal isimlerle nasıl uyumlu olduğu',
    'Yalın hal ve belirtme hali — biçimler aynı göründüğünde nasıl ayırt edilir',
    'Transliterasyonlu 24 gerçek Rusça örnek cümle',
  ],
  leadMagnetCta: {
    title: 'Akıllı alıştırmalarla Rus yalın halini (ve 6 halin tamamını) çalışın',
    description:
      'Mobil uygulamamız 6 Rus halinin tamamını — en zorlu çoğul biçimler dahil — aralıklı tekrar, gerçek cümleler ve anında geri bildirimle çalıştırır. Android ve iOS için mevcuttur.',
    ctaText: 'Uygulamayı indirin ve bugün çalışmaya başlayın',
    ctaHref: '/',
  },
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label: 'Rus hallerine tam rehber: örneklerle açıklanan 6 hal',
    },
    {
      href: '/learn/articles/russian-accusative-case',
      label: 'Rusça belirtme hali: kurallar, ekler ve örnekler',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label: 'Rus hal ekleri: nihai özet sayfası',
    },
  ],
  tableAccentVariant: 'nominative',
  sections: [
    {
      h2: 'Rus yalın hali nedir?',
      content:
        '**Yalın hal** (Именительный падеж) altı Rus halinin ilki ve en temel olanıdır. Bu, **sözlük biçimidir** — hiçbir ek değişikliği uygulanmamış, sözlükte bulduğunuz her ismin, sıfatın ve zamirin biçimi. Yalın hal **Кто?** (kim?) ve **Что?** (ne?) sorularına yanıt verir.\n\nDiğer tüm Rus halleri yalın halin bir dönüşümüdür — genitif, datif, belirtme, araçlık ve edat halleri, bir sözcüğün farklı bir dilbilgisel rol üstlendiğinde ekinin nasıl değiştiğini anlatır. Yalın hal, diğer her şeyin çekimlendiği başlangıç noktasıdır.',
      subsections: [
        {
          h3: 'Kısa yanıt',
          content:
            'Yalın hal **Кто?** (kim?) ve **Что?** (ne?) sorularına yanıt verir. Cümlenin **öznesini** — eylemi gerçekleştiren kişi veya şeyi — işaret eder ve aynı zamanda sözlüklerde kullanılan alıntı biçimidir.\n\nHer Rus cümlesinde yalın halde en az bir sözcük bulunur.',
        },
      ],
    },
    {
      h2: 'Rus yalın halinin 6 temel kullanımı',
      content:
        '"Cümlenin öznesi" yalın halin başlıca görevi olsa da, beş yaygın durumda daha karşımıza çıkar.',
      subsections: [
        {
          h3: 'Kullanım 1 — Cümlenin öznesi',
          content:
            'En yaygın rol: eylemi gerçekleştiren isim yalın halde yer alır.',
          bullets: [
            '**Кошка спит.** — Kedi uyuyor. (кошка = özne)',
            '**Студент читает книгу.** — Öğrenci kitap okuyor. (студент = özne, книгу = belirtme halinde nesne)',
          ],
        },
        {
          h3: 'Kullanım 2 — Düşürülmüş «olmak» fiilinden sonra yüklem ismi',
          content:
            'Şimdiki zamanda Rusça «olmak» fiilini (быть) tamamen atlar. Hem özne hem de onu tanımlayan isim **yalın halde** kalır; genellikle aralarına bir tire konur.',
          bullets: [
            '**Она — врач.** — O bir doktor.',
            '**Москва — столица России.** — Moskova, Rusya’nın başkentidir.',
          ],
        },
        {
          h3: 'Kullanım 3 — Adlandırma ve tanıtma (Это + yalın hal)',
          content:
            '**это** sözcüğünden («bu / şu») sonra, ardından gelenin cinsi veya sayısı ne olursa olsun her zaman **yalın hal** gelir.',
          bullets: [
            '**Это мой брат.** — Bu benim kardeşim.',
            '**Это интересная книга.** — Bu ilginç bir kitap.',
          ],
        },
        {
          h3: 'Kullanım 4 — Sözlük / alıntı biçimi',
          content:
            'Her sözlük maddesi, kelime listesi ve flash kart uygulaması Rus isimlerini ve sıfatlarını **yalın tekil** biçimde listeler. Bu, ilk öğrenilen biçimdir ve diğer tüm hallerin üzerine kurulduğu biçimdir.',
        },
        {
          h3: 'Kullanım 5 — Başlıklar, tabelalar ve etiketler',
          content:
            'Kitap başlıkları, dükkân tabelaları, sokak adları ve manşetler, bir eylemi tanımlamak yerine bir şeyi adlandırdıkları için varsayılan olarak yalın hali kullanır.',
          bullets: [
            '**«Война и мир»** — «Savaş ve Barış» (bir kitap başlığı)',
            '**Аптека** — Eczane (bir dükkân tabelası)',
          ],
        },
        {
          h3: 'Kullanım 6 — Ünlemler ve doğrudan hitap',
          content:
            'Kısa ünlemler ve birinin adını seslenerek çağırmak, düz yalın biçimi kullanır — Rusça, **Боже!** ve **Господи!** gibi birkaç fosilleşmiş biçim dışında, ayrı bir seslenme (vokatif) halini yüzyıllar önce kaybetmiştir.',
          bullets: [
            '**Пожар!** — Yangın!',
            '**Мама!** — Anne! (seslenme — ayrı bir vokatif değil, düz yalın hal)',
          ],
        },
      ],
    },
    {
      h2: 'Cinse göre yalın tekil ekleri',
      content:
        'Rus isimleri üç cinse ayrılır; her birinin, ismin son harfine dayanan öngörülebilir bir yalın tekil kalıbı vardır.',
      table: {
        caption: 'İsim türüne göre yalın tekil ekleri',
        boldColumnIndices: [1],
        headers: ['Cins', 'Tipik ek', 'Örnek', 'Anlam'],
        rows: [
          ['Eril (sert)', '(ünsüz, ek yok)', 'стол', 'masa'],
          ['Eril (yumuşak)', '-й / -ь', 'музей / словарь', 'müze / sözlük'],
          ['Dişil (sert)', '-а', 'книга', 'kitap'],
          ['Dişil (yumuşak)', '-я', 'неделя', 'hafta'],
          ['Dişil (yumuşak, ünlüsüz)', '-ь', 'ночь', 'gece'],
          ['Nötr (sert)', '-о', 'окно', 'pencere'],
          ['Nötr (yumuşak)', '-е', 'море', 'deniz'],
        ],
      },
      subsections: [
        {
          h3: 'Cinsi nasıl anlarsınız',
          content:
            'Eril isimler bir **ünsüzle**, **-й** ile veya bir erkek varlığı ya da sert gövdeli bir sözcüğü (словарь, музей) tanımlayan **yumuşatma işareti -ь** ile biter. Dişil isimler **-а**, **-я** veya **yumuşatma işareti -ь** ile biter (жизнь, любовь gibi çoğu soyut ismi içeren geniş bir grup). Nötr isimler **-о** veya **-е** ile biter. **-ь** eki eril ve dişil arasında belirsizdir — isim isim ezberlenmelidir.',
        },
      ],
    },
    {
      h2: 'Yalın çoğul ekleri',
      content:
        'Yalın çoğulu kurmak, tekil eki değiştirmek anlamına gelir — ama tam kalıp cinse ve önemli bir yazım kuralına bağlıdır.',
      table: {
        caption: 'İsim türüne göre yalın çoğul ekleri',
        boldColumnIndices: [1, 3],
        headers: ['İsim türü', 'Ek', 'Oluşum', 'Sonuç'],
        rows: [
          ['Eril sert', '-ы', 'стол → стол+ы', 'столы'],
          ['Eril (г/к/х/ж/ш/щ/ч sonrası)', '-и', 'язык → язык+и', 'языки'],
          ['Eril yumuşak -й', '-и', 'музей → музе+и', 'музеи'],
          ['Eril yumuşak -ь', '-и', 'словарь → словар+и', 'словари'],
          ['Dişil -а (sert)', '-ы', 'женщина → женщин+ы', 'женщины'],
          ['Dişil -а (г/к/х/ж/ш/щ/ч sonrası)', '-и', 'книга → книг+и', 'книги'],
          ['Dişil -я', '-и', 'неделя → недел+и', 'недели'],
          ['Dişil -ь', '-и', 'ночь → ноч+и', 'ночи'],
          ['Nötr -о', '-а', 'окно → окн+а', 'окна'],
          ['Nötr -е', '-я', 'море → мор+я', 'моря'],
        ],
      },
      bullets: [
        '**8 harf kuralı**, **Г, К, Х, Ж, Ш, Щ, Ч, Ц** harflerinden sonra **Ы**’yi **И** ile değiştirir — книга → книги olmasının, книгы olmamasının nedeni budur.',
        '**Nötr isimler** çoğulda **-о**’yu **-а** ile ve **-е**’yi **-я** ile değiştirir — düzensiz görünen ama tamamen düzenli olan bir kalıp.',
        '**Eril yumuşatma işaretli isimler** (**словарь, зверь**) ile **dişil yumuşatma işaretli isimler** (**ночь, дверь**), **-и** ile aynı görünen çoğullar oluşturur — cinsi yalnızca diğer hal biçimleri ortaya çıkarır.',
      ],
    },
    {
      h2: 'Düzensiz ve vurgu kaymalı yalın çoğullar — bilinmesi gereken liste',
      content:
        'Son derece yaygın bir grup Rus ismi düzenli kalıbı tamamen bozar — ya vurguyu kaydırıp beklenmedik bir **-а/-я** eki alarak ya da tamamen farklı bir çoğul gövde kullanarak. Bunlar sadece ezberlenmelidir.',
      table: {
        caption: '12 düzensiz ve vurgu kaymalı yalın çoğul',
        boldColumnIndices: [1],
        headers: ['Tekil', 'Çoğul', 'Not'],
        rows: [
          ['дом (ev)', 'дома́', 'vurgu kaymalı -а çoğulu (домы değil)'],
          ['город (şehir)', 'города́', 'vurgu kaymalı -а çoğulu'],
          ['глаз (göz)', 'глаза́', 'vurgu kaymalı -а çoğulu'],
          ['лес (orman)', 'леса́', 'vurgu kaymalı -а çoğulu'],
          ['учитель (öğretmen)', 'учителя́', 'vurgu kaymalı -я çoğulu'],
          ['паспорт (pasaport)', 'паспорта́', 'vurgu kaymalı -а çoğulu'],
          ['друг (arkadaş)', 'друзья́', 'düzensiz: -ья eklenir, ünsüz yumuşar'],
          ['брат (erkek kardeş)', 'бра́тья', 'düzensiz -ья çoğulu'],
          ['стул (sandalye)', 'сту́лья', 'düzensiz -ья çoğulu'],
          ['лист (yaprak)', 'ли́стья', 'düzensiz -ья çoğulu (ли́сты = «kâğıt yaprakları» anlamına gelir)'],
          ['ребёнок (çocuk)', 'де́ти', 'kökü değişen (suppletif) çoğul'],
          ['человек (kişi)', 'лю́ди', 'kökü değişen (suppletif) çoğul'],
        ],
      },
      bullets: [
        '**Vurgu kaymalı -а çoğulları**, çoğunlukla tek heceli eril isimlerden oluşan büyük ve üretken bir gruptur: дом, город, лес, глаз, паспорт, вечер (akşam) → вечера, доктор → доктора.',
        '**-ья çoğulları** (друзья, братья, стулья, листья), **-я**’dan önce yumuşak bir ünsüz ekler — ilk bakışta tekil biçimlerine hiç benzemezler.',
        '**Kökü değişen (suppletif) çoğullar** (ребёнок → дети, человек → люди), İngilizcedeki «child → children» veya «person → people» gibi tamamen farklı bir kök kullanır.',
        '**лист**’in anlama göre iki farklı çoğulu vardır: **листья** (ağaç yaprakları) ile **листы** (kâğıt yaprakları) — klasik bir kelime tuzağı.',
      ],
    },
    {
      h2: 'Yalın hal ile belirtme hali: nasıl ayırt edilir',
      content:
        '**Cansız eril ve nötr isimlerde**, belirtme hali yalın halle **aynıdır** — hiçbir ek değişikliği olmaz. Aynı sözcük biçimi, стол ya da окно, bir cümlenin hem öznesi hem de doğrudan nesnesi olabilir. Hangisi olduğunu bağlam söyler.',
      table: {
        caption: 'Yalın hal ve belirtme hali karşılaştırması',
        boldColumnIndices: [0, 1],
        headers: ['Durum', 'Rus cümlesi', 'Açıklama'],
        rows: [
          [
            'Özne (yalın hal)',
            'Стол стоит у окна.',
            'Masa pencerenin yanında duruyor. (стол = özne)',
          ],
          [
            'Doğrudan nesne, cansız (belirtme = yalın)',
            'Я вижу стол.',
            'Masayı görüyorum. (стол değişmedi, ama artık nesne)',
          ],
          ['Özne (yalın hal)', 'Мой друг пришёл.', 'Arkadaşım geldi. (друг = özne)'],
          [
            'Doğrudan nesne, canlı (belirtme ≠ yalın)',
            'Я вижу друга.',
            'Arkadaşımı görüyorum. (друг → друга — canlı eril, genitif biçimli belirtme hali alır)',
          ],
          [
            'Dişil özne (yalın hal)',
            'Книга лежит на столе.',
            'Kitap masanın üstünde duruyor.',
          ],
          [
            'Dişil doğrudan nesne (belirtme ≠ yalın)',
            'Я читаю книгу.',
            'Bir kitap okuyorum. (книга → книгу — dişil her zaman değişir)',
          ],
        ],
      },
      subsections: [
        {
          h3: 'Karar veren kural',
          content:
            '**Canlı eril isimler**, genitif biçimli belirtme haline geçer (друг → друга). **Cansız eril ve nötr isimler** yalın halle aynı kalır. **Dişil isimler** ekini her zaman değiştirir (-а → -у). Bu, belirtme hali rehberimizde ele aldığımız tuzağın tam tersidir.',
        },
      ],
    },
    {
      h2: 'Sıfatlar ve zamirler yalın halde nasıl uyum sağlar',
      content:
        'Sıfatlar, iyelik zamirleri ve işaret zamirleri, tanımladıkları isimle cins ve sayı bakımından **uyumlu** olmalıdır — ve önce öğrenilen biçimler yalın hal biçimleridir.',
      table: {
        caption: 'Yalın hal sıfat ve zamir ekleri',
        boldColumnIndices: [0],
        headers: ['Cins / sayı', 'Sıfat (новый)', 'İyelik zamiri (мой)', 'İşaret zamiri (этот)'],
        rows: [
          ['Eril', 'новый', 'мой', 'этот'],
          ['Dişil', 'новая', 'моя', 'эта'],
          ['Nötr', 'новое', 'моё', 'это'],
          ['Çoğul (tüm cinsler)', 'новые', 'мои', 'эти'],
        ],
      },
      bullets: [
        '**Это**, «bu / şu» anlamında kullanıldığında (yukarıdaki Kullanım 3), değişmez bir işaret sözcüğü olarak işlev görür ve bu rolde cins veya sayıya göre değişmez.',
        'Yalın haldeki **kişi zamirleri** — я, ты, он/она/оно, мы, вы, они — üçüncü tekil şahıs dışında cinse göre çekimlenmez.',
      ],
    },
    {
      h2: 'Rus yalın halinden 24 gerçek örnek',
      content:
        'Aşağıda, transliterasyon ve çeviriyle birlikte yalın halin her önemli kullanımını gösteren **24 özgün Rusça cümle** bulunmaktadır. **1–6:** cümlenin öznesi | **7–12:** düşürülmüş «olmak» fiilinden sonra yüklem isimleri | **13–18:** это ile adlandırma | **19–24:** başlıklar, tabelalar ve ünlemler.',
      table: {
        caption: 'Yalın halli 24 örnek cümle',
        boldColumnIndices: [1, 2],
        headers: ['#', 'Rusça', 'Transliterasyon', 'Çeviri ve notlar'],
        rows: [
          ['1', 'Собака лает.', 'Sobaka layet.', 'Köpek havlıyor. (собака = özne)'],
          [
            '2',
            'Дети играют во дворе.',
            'Deti igrayut vo dvore.',
            'Çocuklar bahçede oynuyor. (дети = ребёнок’un düzensiz çoğulu)',
          ],
          [
            '3',
            'Погода сегодня хорошая.',
            'Pogoda segodnya khoroshaya.',
            'Bugün hava güzel. (погода = özne)',
          ],
          [
            '4',
            'Мой брат работает в банке.',
            'Moy brat rabotayet v banke.',
            'Kardeşim bankada çalışıyor. (брат = özne)',
          ],
          [
            '5',
            'Друзья приехали вчера.',
            'Druzya priyekhali vchera.',
            'Arkadaşlar dün geldi. (друзья = друг’un düzensiz çoğulu)',
          ],
          [
            '6',
            'Этот дом очень старый.',
            'Etot dom ochen staryy.',
            'Bu ev çok eski. (дом = özne)',
          ],
          [
            '7',
            'Она — моя сестра.',
            'Ona — moya sestra.',
            'O benim kız kardeşim. (ikisi de yalın hal, быть düşürülmüş)',
          ],
          [
            '8',
            'Он врач, а она инженер.',
            'On vrach, a ona inzhener.',
            'O bir doktor, o da bir mühendis.',
          ],
          [
            '9',
            'Санкт-Петербург — красивый город.',
            'Sankt-Peterburg — krasivyy gorod.',
            'Sankt-Peterburg güzel bir şehirdir.',
          ],
          [
            '10',
            'Русский язык — мой любимый предмет.',
            'Russkiy yazyk — moy lyubimyy predmet.',
            'Rusça en sevdiğim ders.',
          ],
          [
            '11',
            'Это здание — музей.',
            'Eto zdaniye — muzey.',
            'Bu bina bir müze.',
          ],
          [
            '12',
            'Чай без сахара — моя привычка.',
            'Chay bez sakhara — moya privychka.',
            'Şekersiz çay benim alışkanlığım.',
          ],
          ['13', 'Это моя мама.', 'Eto moya mama.', 'Bu benim annem.'],
          [
            '14',
            'Это интересная задача.',
            'Eto interesnaya zadacha.',
            'Bu ilginç bir görev.',
          ],
          [
            '15',
            'Кто это? — Это мой сосед.',
            'Kto eto? — Eto moy sosed.',
            'Bu kim? — Bu benim komşum.',
          ],
          [
            '16',
            'Что это? — Это словарь.',
            'Chto eto? — Eto slovar.',
            'Bu ne? — Bu bir sözlük.',
          ],
          [
            '17',
            'Это не ошибка, а шутка.',
            'Eto ne oshibka, a shutka.',
            'Bu bir hata değil, bir şaka.',
          ],
          [
            '18',
            'Это новые студенты.',
            'Eto novyye studenty.',
            'Bunlar yeni öğrenciler. (это sabit kalır; студенты çoğuldur)',
          ],
          [
            '19',
            'Роман называется «Преступление и наказание».',
            'Roman nazyvayetsya "Prestupleniye i nakazaniye".',
            'Roman «Suç ve Ceza» olarak adlandırılıyor.',
          ],
          ['20', 'Вход', 'Vkhod', 'Giriş (bir tabela)'],
          [
            '21',
            'Осторожно, ступеньки!',
            'Ostorozhno, stupenki!',
            'Dikkat, basamaklar! (uyarı tabelası, yalın çoğul)',
          ],
          ['22', 'Пожар!', 'Pozhar!', 'Yangın! (ünlem)'],
          [
            '23',
            'Какая красота!',
            'Kakaya krasota!',
            'Ne güzellik! (sıfat + yalın hal isimle ünlem)',
          ],
          [
            '24',
            'Боже мой!',
            'Bozhe moy!',
            'Aman Tanrım! (fosilleşmiş vokatif biçim — nadir istisna)',
          ],
        ],
      },
    },
    {
      h2: 'Yalın halde en sık yapılan 5 hata (ve düzeltme)',
      content: 'Öğrencilerin yalın halle ilgili en sık yaptığı **hatalar**:',
      bullets: [
        '**Canlı isimlerin doğrudan nesnesi için yalın hal kullanmak** — Я вижу мой друг ✗ → Я вижу моего друга ✓ (canlı eril doğrudan nesneler, genitife benzeyen belirtme halini gerektirir)',
        '**Düzensiz çoğulları kör bir -ы/-и kuralıyla kurmak** — други ✗ → друзья ✓ (düzensiz çoğullar tek tek ezberlenmelidir)',
        '**Çoğulda 8 harf kuralını unutmak** — книгы ✗ → книги ✓ (к’dan sonra -ы değil -и yazılır)',
        '**это’yu uyumlu olması gereken bir sıfat gibi ele almak** — Эта мой брат ✗ → Это мой брат ✓ (это, ardından gelenin cinsi veya sayısı ne olursa olsun asla değişmez)',
        '**Bir edattan sonra yalın hal kullanmak** — konum için в дом ✗ → в доме ✓ (yalın hal asla bir edattan sonra gelmez — bu aslında edat halinin tanımlayıcı özelliğidir)',
      ],
    },
  ],
  conclusion:
    'Rus yalın hali aldatıcı biçimde basit görünür — genellikle eklenecek bir ek olmadan, ilk öğrenilen biçimdir. Ama çoğul biçimleri tüm dildeki en zorlu düzensizliklerden bazılarını gizler ve belirtme haliyle örtüşmesi, yeni öğrenciler için en yaygın tökezleme noktasıdır.\n\nÖzetlemek gerekirse: yalın hal, **özneyi**, düşürülmüş bir «olmak» fiilinden sonraki **yüklem ismini** ve **это**’dan sonra gelen her şeyi işaret eder. Tekil ekler cinse göre öngörülebilir bir şekilde değişir; çoğu isim için çoğul ekler (8 harf kuralıyla birlikte) **-ы/-и** kalıbını izler, ancak temel bir yüksek frekanslı sözcük grubu — **друзья, братья, дети, люди, дома, города** — tek tek ezberlenmelidir.',
  conclusionOutro:
    'Devam etmeye hazır mısınız? Tam Rus dilbilgisi serimizde diğer halleri keşfedin:',
  ctaText: 'Uygulamamızla Rus hallerini çalışın',
  ctaHref: '/',
  faq: [
    {
      question: 'Rus yalın hali ne için kullanılır?',
      answer:
        'Rus yalın hali; cümlenin öznesi için (Кошка спит — Kedi uyuyor), düşürülmüş bir «olmak» biçiminden sonraki yüklem ismi için (Она — врач — O bir doktor), это ile adlandırma ve tanıtma için (Это мой брат) ve her ismin sözlük/alıntı biçimi olarak kullanılır.',
    },
    {
      question: 'Rus yalın hali belirtme haliyle aynı mıdır?',
      answer:
        'Tam olarak değil, ama cansız eril ve nötr isimlerde örtüşürler: Я вижу стол (Masayı görüyorum) cümlesi, özne biçimiyle aynı стол biçimini kullanır. Canlı eril isimlerde ise belirtme hali bunun yerine genitifle eşleşir (Я вижу друга — Arkadaşımı görüyorum). Dişil isimler belirtme halinde ekini her zaman değiştirir (книга → книгу).',
    },
    {
      question: 'Rusçada yalın çoğul nasıl kurulur?',
      answer:
        'Çoğu eril ve dişil isim -ы ekler (г, к, х, ж, ш, щ, ч, ц sonrasında -и), nötr isimler ise -о’yu -а ile ve -е’yi -я ile değiştirir. Yaygın bir isim grubu düzensizdir ve ezberlenmelidir: друг → друзья, брат → братья, стул → стулья, ребёнок → дети, человек → люди, дом → дома, город → города.',
    },
    {
      question: 'это neden cins veya sayıya göre değişmez?',
      answer:
        'Это, «bu/şu... -dir/-dır» anlamında kullanıldığında, gerçek bir işaret sıfatından çok değişmez bir işaret sözcüğü olarak işlev görür. Ardından ne gelirse gelsin это olarak kalır: Это мой брат (eril), Это моя сестра (dişil), Это мои друзья (çoğul).',
    },
    {
      question: 'Rusçada insanlara hitap etmek için ayrı bir seslenme (vokatif) hali var mı?',
      answer:
        'Modern standart Rusçada yok — tarihsel vokatif hali, Боже! (Aman Tanrım!) ve Господи! (Ya Rabbi!) gibi birkaç fosilleşmiş biçim dışında yüzyıllar önce ortadan kalkmıştır. Günümüzde birine hitap etmek veya seslenmek için Rusça basitçe düz yalın biçimi kullanır: Мама! (Anne!), Андрей! (Andrey!).',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rus yalın hali: kurallar, ekler ve 24 gerçek örnek',
    description:
      'Rus yalın haline dair eksiksiz rehber: 6 temel kullanım, tekil ve çoğul ekler, düzensiz çoğullar, yalın hal ile belirtme hali karşılaştırması. Transliterasyonlu 24 gerçek örnek.',
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Anadili Fransızca; Rusça öğreniyor; dilbilgisi, haller ve pratik kendi kendine öğrenme alışkanlıkları hakkında yazıyor.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-nominative-case',
    },
    keywords:
      'rus yalın hali, rusça yalın hal, rus yalın hali ekleri, rusçada yalın hal nedir, rus yalın hali örnekleri, rus yalın hal çoğul',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-nominative-case-dictionary-form.webp',
      width: 1536,
      height: 1024,
    },
  },
};
