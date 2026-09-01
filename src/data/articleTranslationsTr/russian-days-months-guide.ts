import type { LearnArticle } from '../learnArticles';

/** `russian-days-months-guide` makalesinin Türkçe çevirisi (İngilizce kaynak: `learnArticles.ts`). */
export const russianDaysMonthsGuideTr: LearnArticle = {
  slug: 'russian-days-months-guide',
  title: "Rusçada Haftanın Günleri ve Aylar (Tam Kılavuz 2026)",
  metaTitle:
    "Rusçada Haftanın Günleri ve Aylar | Tam Kılavuz 2026 | Russian Cases with Anna",
  metaDescription:
    "Rusçada haftanın günlerini ve ayları telaffuzlarıyla öğrenin — üstelik öğrencileri şaşırtan gramer kuralıyla birlikte: в понедельник (belirtme hâli) ile в январе (bulunma hâli) karşılaştırması.",
  keywords: [
    'rusçada haftanın günleri',
    'rusçada aylar',
    'rus haftanın günleri',
    'rus ayları',
    'rusçada günler nasıl söylenir',
    'rus takvim kelimeleri',
    'понедельник rusça',
    'rusça tarih grameri',
    'günler ve aylar rusça hal ekleri',
    'rusça hafta kelimeleri',
  ],
  h1: 'Rusçada Haftanın Günleri ve Aylar (Tam Kılavuz)',
  heroImage: {
    src: '/articles/russian-days-months-calendar.webp',
    alt: "Rusçada haftanın günlerini ve ayları öğrenmek — tam kılavuz",
    width: 1200,
    height: 630,
  },
  intro:
    "Haftanın günleri ve aylar, saf kelime bilgisi gibi görünür — yedi kelime, on iki kelime, ezberle ve devam et. **Ama Rusçada bunlar, neredeyse her öğrenciyi en az bir kez yakalayan bir gramer tuzağıyla gelir.** \"Pazartesi\" demek bir gramer hâli gerektirir. \"Ocakta\" demek ise tamamen farklı bir hâl gerektirir. İkisini karıştırmak, her kelime doğru olsa bile belirgin biçimde yabancı görünen bir cümleyle sonuçlanır.\n\nİyi haber şu ki: **kural açıkça ifade edildiğinde basittir**, ve Rusça ders kitapları bunu nadiren tek bir yerde özetler. Bu kılavuz size telaffuzlarıyla birlikte günlerin ve ayların tam listesini, \"[gün]de\" ile \"[ay]da\" için tam olarak hangi hâlin kullanılacağını, tam bir tarihin nasıl oluşturulacağını ve bugünün hangi gün veya tarih olduğunun nasıl sorulacağını verir.",
  introByline: {
    text: '**Nathan tarafından yazıldı** — Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve günlük pratik için gerçekten işe yarayanları paylaşıyorum.',
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    'Telaffuz ve gerçek anlamlarıyla birlikte Rusçada haftanın yedi günü',
    'Telaffuz, ilgi hâli ve bulunma hâli formlarıyla birlikte Rusçada on iki ay',
    'Temel kural: günler **"в" + belirtme hâli**, aylar **"в" + bulunma hâli** alır',
    '**Tekrarlanan** günleri nasıl söyleyeceğiniz: "pazartesileri" (по + çoğul yönelme hâli)',
    'Tam bir tarih nasıl oluşturulur ve "bugün hangi gün?" / "bugünün tarihi nedir?" nasıl sorulur',
    'En yaygın hatalar — ve belirtme hâlinde vurgusu değişen tek kelime (среда)',
  ],
  leadMagnetCta: {
    title: 'Takvimin ötesinde Rusça hâllerde ustalaşın — ücretsiz uygulama',
    description:
      'Günler ve aylar, Rusça hâllerin ortaya çıktığı bir yer daha. Russian Cases with Anna, her hâli otomatik hâle getirmek için yapılandırılmış dersler ve akıllı testler sunar — iOS ve Android için ücretsiz.',
    ctaText: 'Uygulamayı indirin — Ücretsiz',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Rusçada Haftanın Günleri: Tam Liste',
      content:
        "Birçok batı takviminden farklı olarak, **Rus haftası pazartesi günü** (понедельник) başlar ve pazar günü (воскресенье) biter — bu, ISO standardına ve göreceğiniz her Rus takvimine veya ajandasına uyar. Kökenlerini bildiğinizde birkaç gün adı şeffaflaşır.",
      table: {
        headers: ['Gün', 'Rusça', 'Transliterasyon', 'Gerçek köken'],
        rows: [
          ['Pazartesi', 'понедельник', "ponedel'nik", 'после недели — "(dinlenme) gününden sonra"'],
          ['Salı', 'вторник', 'vtornik', 'второй — "ikinci (gün)"'],
          ['Çarşamba', 'среда', 'sreda', 'середина — "(haftanın) ortası"'],
          ['Perşembe', 'четверг', 'chetverg', 'четвёртый — "dördüncü (gün)"'],
          ['Cuma', 'пятница', 'pyatnitsa', 'пятый — "beşinci (gün)"'],
          ['Cumartesi', 'суббота', 'subbota', 'İbranice "Şabat"tan, Kilise Slavcası üzerinden'],
          ['Pazar', 'воскресенье', "voskresen'ye", 'воскресение — "Diriliş"'],
        ],
        caption: 'Rusçada haftanın yedi günü',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Rus haftası **pazartesiden pazara** kadar sürer, pazardan cumartesiye değil',
        '**Среда** (çarşamba) tam anlamıyla "orta" demektir — çalışma haftasının tam ortasında yer alır',
        '**Суббота** (cumartesi), İbranice шаббат (Şabat) kelimesinden, Kilise Slavcası üzerinden alınmış bir alıntı kelimedir',
        '**Воскресенье** (pazar), Hristiyanlık yayıldıkça eski pagan kelimesi неделя\'nın ("iş yok") yerini almıştır — неделя bugün modern Rusçada "hafta" anlamına gelir',
        'Tüm gün adları Rusçada **küçük harfle** yazılır',
      ],
    },
    {
      h2: 'Rusçada Aylar: Tam Liste',
      content:
        "Rus ay adlarının Türkçe adlarla hiçbir ilişkisi yoktur (Latinceden değil, eski Slav doğa kelimelerinden gelirler) — bir istisna dışında: **her zaman küçük harfle yazılırlar**, ve çoğu öğrenci bunları günlerden daha kolay telaffuz eder. Aşağıda yalın hâl formu (\"sözlük\" formu) ile birlikte aslında en çok kullanacağınız iki form bulunur: ilgi hâli (tarihler için) ve bulunma hâli (\"[ay]da\" için).",
      table: {
        headers: ['Ay', 'Rusça (yalın hâl)', 'İlgi hâli (tarihler)', 'Bulunma hâli ("...da")'],
        rows: [
          ['Ocak', 'январь', 'января', 'январе'],
          ['Şubat', 'февраль', 'февраля', 'феврале'],
          ['Mart', 'март', 'марта', 'марте'],
          ['Nisan', 'апрель', 'апреля', 'апреле'],
          ['Mayıs', 'май', 'мая', 'мае'],
          ['Haziran', 'июнь', 'июня', 'июне'],
          ['Temmuz', 'июль', 'июля', 'июле'],
          ['Ağustos', 'август', 'августа', 'августе'],
          ['Eylül', 'сентябрь', 'сентября', 'сентябре'],
          ['Ekim', 'октябрь', 'октября', 'октябре'],
          ['Kasım', 'ноябрь', 'ноября', 'ноябре'],
          ['Aralık', 'декабрь', 'декабря', 'декабре'],
        ],
        caption: 'Rus ayları: yalın, ilgi ve bulunma hâli formları',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        'Ayların çoğu **eril**dir ve bir ünsüzle veya **-ь** ile biter (январь, май, июнь)',
        'İlgi hâli formu (tarihlerde kullanılır) her zaman **-я** ile biter: января, февраля, марта…',
        'Bulunma hâli formu ("[ay]da" için "в"dan sonra kullanılır) **-е** ile biter: январе, феврале, марте…',
        '**Июнь** (haziran) ve **июль** (temmuz) hızlı konuşmada kolayca karıştırılır — son ünsüze dikkat edin: -нь karşı -ль',
        'Ay adları Rusçada, cümle başında bile, asla büyük harfle yazılmaz',
      ],
    },
    {
      h2: 'Gramer Kuralı: Günler Belirtme Hâli, Aylar Bulunma Hâli Alır',
      content:
        "Bu, neredeyse her öğrenciyi yakalayan kuraldır. **в** edatıyla \"**[gün]de**\" veya \"**[ay]da**\" dediğinizde, sonra gelen hâl günler ve aylar için farklıdır — ve kestirme yolu yoktur, sadece hangisinin hangisi olduğunu bilmeniz gerekir.\n\n**Haftanın günleri: \"в\" + belirtme hâli.** Он придёт **в понедельник** (Pazartesi gelecek). Мы встречаемся **во вторник** (Salı buluşuyoruz).\n\n**Aylar: \"в\" + bulunma hâli.** Я родился **в январе** (Ocakta doğdum). Свадьба будет **в июне** (Düğün haziranda olacak).\n\nEril gün adları için (понедельник, вторник, четверг) belirtme hâli yalın hâlle aynı görünür, bu yüzden kural görünmezdir. Gerçekten form değiştiren üç dişil gün — среда, пятница, суббота — ve aynı şekilde değişmeden kalan nötr воскресенье ile görünür hâle gelir.",
      table: {
        headers: ['Kategori', '"в"dan sonraki hâl', 'Örnek'],
        rows: [
          ['Haftanın günleri', 'Belirtme hâli', 'в понедельник, во вторник, в среду, в пятницу, в субботу'],
          ['Aylar', 'Bulunma hâli', 'в январе, в марте, в июне, в декабре'],
        ],
        caption: 'Günler ve aylar: "в"dan sonra hangi hâl gelir',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Среда** (çarşamba) en zorlu olanıdır: yalın hâl sredá diye vurgulanır, ama belirtme hâli **в сре́ду** vurguyu ilk heceye kaydırır — klasik bir Rusça vurgu kayma örneği (рука́ → в ру́ку gibi)',
        '**Пятница → в пятницу** ve **суббота → в субботу**: ikisi de dişil, ikisi de belirtme hâlinde düzenli **-у** eki alır',
        '**Вторник**, **во вторник** olur (в вторник değil) — "в", telaffuzu kolaylaştırmak için bir ünsüz kümesinden önce "во"ya dönüşür',
        'Yaygın bir hata, **в январе** yerine "**в январь**" demektir — aylar bu bağlamda "в"dan sonra asla belirtme hâli almaz',
        'Aynı belirtme hâli kuralı başka zaman ifadelerinde de geçerlidir: **в эту среду** (bu çarşamba), **в прошлый вторник** (geçen salı)',
      ],
    },
    {
      h2: 'Her Pazartesi, Her Hafta Hakkında Konuşmak: "По" + Çoğul Yönelme Hâli',
      content:
        'Bir şeyin belirli bir günde **düzenli olarak** gerçekleştiğini söylemek için ("pazartesileri", "her salı"), Rusça edatı tamamen değiştirir: **в** ile tekil belirtme hâli yerine, günün **çoğul yönelme hâli**yle **по** kullanılır.',
      table: {
        headers: ['Türkçe', 'Rusça', 'Hâl'],
        rows: [
          ['pazartesileri', 'по понедельникам', 'Çoğul yönelme hâli'],
          ['salıları', 'по вторникам', 'Çoğul yönelme hâli'],
          ['çarşambaları', 'по средам', 'Çoğul yönelme hâli'],
          ['perşembeleri', 'по четвергам', 'Çoğul yönelme hâli'],
          ['cumaları', 'по пятницам', 'Çoğul yönelme hâli'],
          ['cumartesileri', 'по субботам', 'Çoğul yönelme hâli'],
          ['pazarları', 'по воскресеньям', 'Çoğul yönelme hâli'],
        ],
        caption: 'Tekrarlanan günler: по + çoğul yönelme hâli',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**У меня русский по понедельникам** (Pazartesileri Rusça dersim var) — tek ve tekrarlanan bir gün',
        'Karşılaştırın: **в понедельник** (bu gelecek/belirli pazartesi) ile **по понедельникам** (kural olarak her pazartesi)',
        'Bu, "по субботам магазин закрыт" (dükkân cumartesileri kapalıdır) cümlesinde kullanılan aynı **по + yönelme hâli** kalıbıdır',
      ],
    },
    {
      h2: 'Rusçada Tam Tarih Nasıl Söylenir',
      content:
        "Tam bir tarih, her biri farklı bir formda olan üç öğeyi birleştirir: **gün numarası** (nötr bir sıra sayı, çünkü zımni isim число — \"tarih/sayı\"dır), **ay** (ilgi hâli) ve **yıl** (в ile başlayan, bulunma hâlinde bir sıra sayı).\n\n**5 Haziran 2026 → пятое июня две тысячи двадцать шестого года.**\n\nSıra sayıları ve yılların nasıl oluşturulduğu hakkında daha derin bir açıklama için [Rusça sayılar hakkındaki tam kılavuzumuza](/learn/articles/russian-numbers-guide) bakın — bu bölüm yalnızca tam tarihler yazmaya özgü gün/ay/yıl mekaniğini kapsar.",
      table: {
        headers: ['Türkçe', 'Rusça', 'Notlar'],
        rows: [
          ['1 Ocak', 'первое января', 'Sıra sayı (nötr) + ilgi hâlinde ay'],
          ['8 Mart', 'восьмое марта', 'Sıra sayı (nötr) + ilgi hâlinde ay'],
          ['9 Mayıs', 'девятое мая', 'Sıra sayı (nötr) + ilgi hâlinde ay'],
          ['31 Aralık', 'тридцать первое декабря', 'Birleşik sıra sayı + ilgi hâlinde ay'],
        ],
        caption: 'Tarih yazma: gün (sıra sayı) + ay (ilgi hâli)',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "Bir tarihte, \"-de/-da\" **в** ile çevrilmez — yalnızca sıra sayının kendisi kullanılır: **Я приеду пятого июня** (5 Haziran'da geleceğim) — bu belirtme hâli değil ilgi hâlidir, çünkü hafta günü olarak değil, tarih olarak \"tam olarak ne zaman\" sorusuna yanıt verir",
        'Belgelerdeki yazılı tarihler sayısal biçimi kullanır: **gün.ay.yıl**: 05.06.2026',
        '"Yıl"da" yapısı **в две тысячи двадцать шестом году** şeklindedir — tam ayrıntılar için sayılar kılavuzuna bakın',
      ],
    },
    {
      h2: '"Bugün Hangi Gün?" ve "Bugünün Tarihi Ne?" Nasıl Sorulur',
      content:
        'Rusçada burada iki ayrı soru vardır — bunları karıştırmayın, çünkü farklı soru sözcükleri kullanırlar ve farklı hâllerde yanıt beklerler.',
      table: {
        headers: ['Soru', 'Rusça', 'Örnek yanıt'],
        rows: [
          ['Bugün haftanın hangi günü?', 'Какой сегодня день недели?', 'Сегодня среда. (Yalın hâl)'],
          ['Bugünün tarihi ne?', 'Какое сегодня число?', 'Сегодня пятое июня. (Sıra sayı + ilgi hâlinde ay)'],
          ['Cuma günü haftanın hangi günü olacak?', 'Какой день недели будет в пятницу?', '—'],
        ],
        caption: 'Gün ve tarih hakkında soru sormak',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**Какой сегодня день (недели)?** hafta gününü sorar — yanıt yalın hâlde verilir: Сегодня понедельник (Bugün pazartesi)',
        '**Какое сегодня число?** takvim tarihini sorar — yanıt sıra sayı + ilgi hâlinde ayla verilir: Сегодня пятнадцатое марта (Bugün 15 Mart)',
        'Her iki soru da "сегодня" (bugün) kullanır, ama **какой** (eril, день ile uyumlu) ve **какое** (nötr, число ile uyumlu) birbirinin yerine kullanılamaz',
      ],
    },
    {
      h2: 'Günler ve Aylarla İlgili Yaygın Hatalar',
      content:
        'Bu dört hata, öğrencilerin Rusça günler ve aylarla ilgili yaptığı hataların çoğunu oluşturur:',
      bullets: [
        '**Aylardan sonra belirtme hâli kullanmak.** **в январе** yerine "**в январь**" demek. Aylar в\'dan sonra her zaman bulunma hâli alır.',
        '**Günlerden sonra bulunma hâli kullanmak.** **в понедельник** yerine "**в понедельнике**" demek. Günler в\'dan sonra her zaman belirtme hâli alır.',
        '**среда\'daki vurgu kaymasını unutmak.** Yalın hâl sredá\'dır, ama belirtme hâli **сре́ду**dur — vurgu ilk heceye kayar. sredú demek yabancı gibi duyulur.',
        '**какой ve какое\'yi karıştırmak.** Какой день (eril, день ile uyumlu) karşı какое число (nötr, число ile uyumlu) — bunları karıştırmak çok yaygın bir başlangıç seviyesi hatasıdır.',
        '**в + belirtme hâli (belirli bir gün) ile по + çoğul yönelme hâli (her hafta) karıştırmak.** В субботу = bu cumartesi; по субботам = her cumartesi.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rusçada haftanın günleri hangi hâli alır?',
      answer:
        'Haftanın günleri **в** edatından sonra **belirtme hâli** alır: в понедельник (pazartesi), во вторник (salı), в среду (çarşamba). Eril ve nötr gün adları belirtme hâlinde yalın hâlle aynı görünür; üç dişil gün (среда, пятница, суббота) eklerini değiştirir, среда ayrıca vurgusunu da kaydırır: **в сре́ду**.',
    },
    {
      question: 'Rusçada aylar hangi hâli alır?',
      answer:
        '"[Ay]da" derken aylar в\'dan sonra **bulunma hâli** alır: в январе (ocakta), в июне (haziranda), в декабре (aralıkta). Bu, günler için kullanılan belirtme hâlinden farklıdır — öğrenciler için yaygın bir hata kaynağıdır.',
    },
    {
      question: 'Rus haftası pazartesi mi yoksa pazar günü mü başlar?',
      answer:
        'Rus haftası ISO 8601 standardını izleyerek **pazartesi** (понедельник) başlar ve **pazar** (воскресенье) biter. Bu, haftanın pazar günü başladığı geleneksel ABD takvim kuralının tam tersidir.',
    },
    {
      question: 'Rusçada "her pazartesi" nasıl denir?',
      answer:
        '**по + çoğul yönelme hâli** kullanın: по понедельникам (pazartesileri / her pazartesi). Bu, belirli bir pazartesiyi ifade eden ve tekrarlanan bir düzeni değil, tekil belirtme hâlindeki **в понедельник**\'ten farklıdır.',
    },
    {
      question: 'Rusçada "5 Haziran 2026" gibi tam bir tarih nasıl söylenir?',
      answer:
        'Bir sıra sayıyı (gün için nötr) ilgi hâlindeki ayla birleştirin: **пятое июня** (5 Haziran). Yıl için, "of" ile başlayan, yine ilgi hâlinde bulunan yılın sıra sayısını da ekleyin: **пятое июня две тысячи двадцать шестого года**. Sıra sayılar ve yıllar hakkındaki tam kurallar için [Rusça sayılar kılavuzumuza](/learn/articles/russian-numbers-guide) bakın.',
    },
  ],
  conclusion:
    "Günler ve aylar basit kelime listeleri gibi görünür, ama aslında Rusça hâllerin gerçek, günlük cümlelerde nasıl çalıştığına dair kısa ve öz bir derstir. Temel kural netleştiğinde — **günler в\'dan sonra belirtme hâli, aylar в\'dan sonra bulunma hâli alır** — programınız, doğum gününüz ve planlarınız hakkında gerçek bir güvenle konuşabilirsiniz.\n\nBunu otomatik hâle getirmenin en hızlı yolu kullanmaktır: bir şeyin hangi gün gerçekleştiğinden bahsedin, haftalık rutininiz için по + çoğul yönelme hâli kullanın ve tam tarihleri yüksek sesle pratik edin. Takvim konuşması neredeyse her gerçek sohbette ortaya çıkar, bu yüzden bu, çalışabileceğiniz en değerli gramer kalıplarından biridir.",
  conclusionBullets: [
    'Rus haftası **pazartesiden pazara** kadar sürer — yedi gün adı, hepsi küçük harfle',
    'On iki ayın Latince adlarla ilişkisi yoktur ve bunlar da her zaman küçük harfle yazılır',
    'Temel kural: **günler + в → belirtme hâli**; **aylar + в → bulunma hâli**',
    'Tekrarlanan günler **по + çoğul yönelme hâli** kullanır: по понедельникам (pazartesileri)',
    'Среда dikkat edilmesi gereken kelimedir — vurgusu belirtme hâlinde kayar: **в сре́ду**',
  ],
  conclusionOutro:
    'Günler ve aylar çok daha büyük bir sistemin sadece küçük bir köşesidir — burada az önce kullandığınız aynı belirtme ve bulunma hâlleri, dilin tamamında isimleri, zamirleri ve sıfatları yönetir. **O tam hâl sistemine hâkim olmak, "birkaç Rusça kelime biliyorum"u gerçek, akıcı Rusçaya dönüştüren şeydir.**',
  ctaText: "Russian Cases with Anna'yı indirin — Ücretsiz",
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-numbers-guide',
      label: "Rusça Sayılar: Rusça'da Nasıl Sayılır (Tam Kılavuz)",
    },
    {
      href: '/learn/articles/russian-greetings-guide',
      label: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir (Tam Kılavuz)",
    },
    {
      href: '/learn/articles/russian-word-stress-guide',
      label: 'Rusça Kelime Vurgusu: Neden Her Şeyi Değiştirir (ve Nasıl Ustalaşılır)',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rusça haller basitçe açıklandı: Yeni başlayanlar için görsel rehber',
    },
    {
      href: '/learn/articles/russian-prepositions-and-cases',
      label: 'Rusça edatlar ve haller: Her edat hangi halde kullanılır?',
    },
    { href: '/practice', label: 'Ücretsiz Rusça çekim testi (altı hal de dahil)' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Rusçada Haftanın Günleri ve Aylar (Tam Kılavuz 2026)",
    description:
      "Rusçada haftanın günlerini ve ayları telaffuzlarıyla öğrenin — üstelik öğrencileri şaşırtan gramer kuralıyla birlikte: в понедельник (belirtme hâli) ile в январе (bulunma hâli) karşılaştırması.",
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description:
        'Rusça öğrenen anadili Fransızca olan biri; gramer, hâller ve pratik kendi kendine çalışma alışkanlıkları hakkında yazıyor.',
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-days-months-guide',
    },
    keywords:
      'rusçada haftanın günleri, rusçada aylar, rus haftanın günleri, rus ayları, rus takvim kelimeleri, rusça tarih grameri',
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russian-days-months-calendar.webp',
      width: 1200,
      height: 630,
    },
  },
};
