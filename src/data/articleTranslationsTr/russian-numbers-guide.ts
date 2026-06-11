import type { LearnArticle } from '../learnArticles';

/** Türkçe çevirisi `russian-numbers-guide` (kaynak EN: `learnArticles.ts`). */
export const russianNumbersGuideTr: LearnArticle = {
  slug: 'russian-numbers-guide',
  title: "Rusça Sayılar: Rusça'da Nasıl Sayılır (Tam Kılavuz 2026)",
  metaTitle:
    "Rusça Sayılar: Rusça'da Nasıl Sayılır | Tam Kılavuz 2026 | Russian Cases with Anna",
  metaDescription:
    "Rusça sayıları 1'den 1000'e öğrenin: kardinal sayılar, ordinal sayılar, Rusça hallerle sayılar, yaş ve tarihler — tablolar ve telaffuzla tam kılavuz.",
  keywords: [
    'Rusça sayılar',
    "Rusça'da nasıl sayılır",
    'Rusça rakamlar',
    'Rusça 1-10 sayılar',
    'Rusça kardinal sayılar',
    'Rusça ordinal sayılar',
    'Rusça sayma',
    'Rusça sayı telaffuzu',
    "Rusça'da sayılar nasıl söylenir",
    'Rusça 1-100 sayılar',
  ],
  h1: "Rusça Sayılar: Rusça'da Nasıl Sayılır (Tam Kılavuz)",
  heroImage: {
    src: '/articles/russia-kremlin-moscow.webp',
    alt: "Rusça sayıları öğrenme — sayma için tam kılavuz",
    width: 1200,
    height: 630,
  },
  intro:
    "Rusça sayıları öğrenmek başlangıçta yönetilebilir görünür — ta ki bir cümlede kullanmaya çalışana kadar. **Rusça sayılar, nesnelere yapıştırılan etiketler değildir.** Orta düzey öğrencilerin bile takıldığı bir şekilde dilbilgisi hal sistemiyle etkileşime girerler ve bazı sayılar tamamen beklenmedik bir şekilde davranır.\n\nİyi haber şu: Rusça sayılar, mantık anlaşıldıktan sonra net kalıplar izler. **İlk on sayı tüm sistemi açar.** \"Gençler\" (11–19) tek bir kuralı izler. Onluklar öngörülebilirdir. Sayıların hallerle nasıl etkileşime girdiğini anladıktan sonra güvenle sayabilir, yaşınızı söyleyebilir ve fiyatları okuyabilirsiniz.\n\nBu kılavuz her şeyi kapsar: **1'den 1000'e kardinal sayılar**, ordinal sayılar, yaşınızı nasıl söyleyeceğiniz, tarihleri ve yılları nasıl ifade edeceğiniz ve gerçek Rusçada fark yaratan tek dilbilgisi kuralı (sayılar + haller).",
  introByline: {
    text: "**Nathan tarafından yazıldı** — anadili Fransızca; Rusça öğreniyor ve dilbilgisi, haller ve günlük pratik için gerçekten işe yarayan şeyleri paylaşıyor.",
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Nathan, Russian Cases with Anna kurucusu',
    imageWidth: 256,
    imageHeight: 256,
  },
  whatYouLearn: [
    "Telaffuz kılavuzuyla 1'den 1000'e kardinal sayılar",
    'Ezberlenecek düzensiz sayılar: **40, 90, 100**',
    "Rusça sayıların **dilbilgisi halleriyle** nasıl etkileşime girdiği — çoğu öğrencinin gözden kaçırdığı kural",
    'Ordinal sayılar: birinci, ikinci, üçüncü…',
    "Rusça'da **yaşınızı** nasıl söylersiniz (мне X лет)",
    "Rusça'da **tarihler ve yıllar** nasıl ifade edilir",
  ],
  leadMagnetCta: {
    title: "Rusça grameri sayıların ötesinde öğrenin — ücretsiz uygulama",
    description:
      "Sayılar sadece başlangıç. Rusça dilbilgisi, haller ve çekimler gerçek akıcılığın inşa edildiği yerdir. Russian Cases with Anna size yapılandırılmış dersler ve akıllı testler sunar — iOS ve Android'de ücretsiz.",
    ctaText: 'Uygulamayı İndir — Ücretsiz',
    ctaHref: '/',
  },
  sections: [
    {
      h2: "Rusça Sayılar 1–10: Temel",
      content:
        "Aşağıdaki on kardinal sayı, tüm Rusça sayı sisteminin temelidir. **1** ve **2**'nin cinsiyet çeşitlemeleri olduğuna hemen dikkat edin — bunları isimlerle kullandığınızda bu önemli olacak.",
      table: {
        headers: ['Sayı', 'Rusça', 'Transliterasyon', 'Cinsiyet notu'],
        rows: [
          ['1', 'один / одна / одно', 'odin / odna / odno', 'Eril / Dişil / Nötr'],
          ['2', 'два / две', 'dva / dve', 'Eril–Nötr / Dişil'],
          ['3', 'три', 'tri', '—'],
          ['4', 'четыре', 'chetyre', '—'],
          ['5', 'пять', "pyat'", '—'],
          ['6', 'шесть', "shest'", '—'],
          ['7', 'семь', "sem'", '—'],
          ['8', 'восемь', "vosem'", '—'],
          ['9', 'девять', "devyat'", '—'],
          ['10', 'десять', "desyat'", '—'],
        ],
        caption: "Rusça kardinal sayılar 1–10",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "**Один** (eril) eril isimlerle kullanılır: один брат (bir erkek kardeş)",
        "**Одна** (dişil) dişil isimlerle kullanılır: одна книга (bir kitap)",
        "**Одно** (nötr) nötr isimlerle kullanılır: одно окно (bir pencere)",
        "**Два** eril ve nötr isimlerle; **две** ise dişil isimlerle kullanılır",
        "3–10 arası sayılar cinsiyete göre değişmez",
        "5–10 arası sayılar yumuşak işaretle biter (ь) — hal sistemi için önemli bir kalıp",
      ],
    },
    {
      h2: "11–19 Arası Sayılar: Rusça 'Gençler'",
      content:
        "Rusça'daki 11–19 arası sayılar **-надцать** eki eklenerek oluşturulur (\"on üzerinde\" anlamına gelen bir form). Kalıbı gördükten sonra on bir \"genç\" sayısının tamamı bir anda açılır.",
      table: {
        headers: ['Sayı', 'Rusça', 'Transliterasyon', 'Oluşturma kalıbı'],
        rows: [
          ['11', 'одиннадцать', "odinnadtsat'", 'один + надцать'],
          ['12', 'двенадцать', "dvenadtsat'", 'две + надцать'],
          ['13', 'тринадцать', "trinadtsat'", 'три + надцать'],
          ['14', 'четырнадцать', "chetyrnadtsat'", 'четыре + надцать'],
          ['15', 'пятнадцать', "pyatnadtsat'", 'пять + надцать'],
          ['16', 'шестнадцать', "shestnadtsat'", 'шесть + надцать'],
          ['17', 'семнадцать', "semnadtsat'", 'семь + надцать'],
          ['18', 'восемнадцать', "vosemnadtsat'", 'восемь + надцать'],
          ['19', 'девятнадцать', "devyatnadtsat'", 'девять + надцать'],
        ],
        caption: "Rusça 11–19 arası sayılar ve oluşturma kalıbı",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "Tüm 'genç' sayılar **-надцать** ile biter — bu eki duyduğunuzda 11–19 arası bir sayı olduğunu bilirsiniz",
        "Konuşmada kök genellikle kısalır: четыре → четыр- (четырнадцать'ta); пять → пят- (пятнадцать'ta)",
        "**Одиннадцать** н harfini çiftler — en sık yanlış yazılan Rusça 'genç' sayısı",
        "1 ve 2'nin aksine, 'genç' sayılar cinsiyete göre **değişmez**",
      ],
    },
    {
      h2: "Onluklar ve Yüzler: 1000'e Kadar Saymak",
      content:
        "Onluklar (20–90) ve yüzler (100–900) birkaç önemli istisnayla genel olarak düzenli kalıpları izler. Ezberlenecek üç kritik sayı: **сорок** (40), **девяносто** (90) ve **сто** (100) tamamen düzensizdir.",
      subsections: [
        {
          h3: 'Onluklar: 20 ile 90 Arası',
          content:
            "20 ile 80 arasındaki onluklar bileşik bir kalıp üzerine kurulmuştur. 40 ve 90'ın kalıptan tamamen sapttığına dikkat edin.",
          table: {
            headers: ['Sayı', 'Rusça', 'Transliterasyon'],
            rows: [
              ['20', 'двадцать', "dvadtsat'"],
              ['30', 'тридцать', "tridtsat'"],
              ['40', 'сорок', 'sorok'],
              ['50', 'пятьдесят', "pyat'desyat"],
              ['60', 'шестьдесят', "shest'desyat"],
              ['70', 'семьдесят', "sem'desyat"],
              ['80', 'восемьдесят', "vosem'desyat"],
              ['90', 'девяносто', 'devyanosto'],
            ],
            caption: 'Rusça onluklar 20–90',
            boldColumnIndices: [0, 1],
          },
        },
        {
          h3: 'Yüzler: 100 ile 1000 Arası',
          content:
            "Yüzler de bir kalıbı izler — ancak 100 düzensizdir (сто) ve 200–400'ün kalıp 500–900'de devam etmeden önce kendine özgü formları vardır.",
          table: {
            headers: ['Sayı', 'Rusça', 'Transliterasyon'],
            rows: [
              ['100', 'сто', 'sto'],
              ['200', 'двести', 'dvesti'],
              ['300', 'триста', 'trista'],
              ['400', 'четыреста', 'chetyresta'],
              ['500', 'пятьсот', "pyat'sot"],
              ['600', 'шестьсот', "shest'sot"],
              ['700', 'семьсот', "sem'sot"],
              ['800', 'восемьсот', "vosem'sot"],
              ['900', 'девятьсот', "devyat'sot"],
              ['1000', 'тысяча', 'tysyacha'],
            ],
            caption: 'Rusça yüzler 100–1000',
            boldColumnIndices: [0, 1],
          },
        },
      ],
      bullets: [
        "Bileşik sayılar soldan sağa okunur: **347 = триста сорок семь**",
        "**Сорок** (40) ve **девяносто** (90) tamamen düzensizdir — ezberlenmeleri gerekir",
        "**Двести** (200) ve **триста / четыреста** (300/400) da düzensiz formlardır",
        "500'den itibaren yüzler şu kalıbı izler: sayı + сот (örn. пять + сот = пятьсот)",
        "**Тысяча** (1000) dişil bir isimdir ve buna göre çekilir",
      ],
    },
    {
      h2: "Rusça Sayılar ve Haller: Her Şeyi Değiştiren Dilbilgisi Kuralı",
      content:
        "Çoğu öğrenci burada bir duvarla karşılaşır. Rusça'da **bir sayıdan sonra gelen isim, sayıya bağlı olarak dilbilgisi halini değiştirir**. Bu isteğe bağlı değildir — bir şeyi saydığınız her cümleyi etkiler.\n\nKuralın üç kademesi vardır:\n\n**1. Kademe: 1 → Tekil nominatif.** Один стол (bir masa), одна книга (bir kitap).\n\n**2. Kademe: 2, 3, 4 → Tekil genitif.** Два стол**а** (iki masa), три книг**и** (üç kitap).\n\n**3. Kademe: 5 ve üzeri → Çoğul genitif.** Пять стол**ов** (beş masa), десять книг (on kitap).\n\nKural, bileşik bir sayının **son hanesine** uygulanır — 21, 1 gibi; 22, 2 gibi; 25, 5 gibi davranır. Ancak 11–14 son hanelerinden bağımsız olarak her zaman 3. kademeyi alır.",
      table: {
        headers: ['Sayı türü', 'Gereken hal', 'Örnek'],
        rows: [
          ['1, 21, 31, 41…', 'Tekil nominatif', 'один стол, двадцать один студент'],
          ['2, 3, 4 / 22, 23, 24…', 'Tekil genitif', 'два стола, тридцать четыре книги'],
          ['5–20 / 25–30 / 11–14…', 'Çoğul genitif', 'пять столов, одиннадцать студентов'],
        ],
        caption: "Rusça'da sayılar ve isim halleri",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "Kural, bileşik sayıların **son hanesine** dayanır ('genç' sayılar 11–19 hariç)",
        "**11–19 her zaman çoğul genitif alır** — son haneden bağımsız olarak",
        "Bu kural isimler için geçerlidir; sıfatlar da ismin haliyle uyuşmalıdır",
        "Çoğul genitif, Rusça'nın en düzensiz isim formlarından biridir — erken pratik yapın",
        "Fiyatlar aynı kuralı izler: **один рубль**, **два рубля**, **пять рублей**",
      ],
    },
    {
      h2: "Rusça Ordinal Sayılar: Birinci, İkinci, Üçüncü…",
      content:
        "Rusça'da ordinal sayılar (birinci, ikinci, üçüncü…) sıfatlardır — tanımladıkları isimle **cinsiyet, sayı ve hal bakımından uyuşurlar**. İşte en temel ordinal sayılar:",
      table: {
        headers: ['Sıra', 'Ordinal (Eril)', 'Transliterasyon', 'Dişil form'],
        rows: [
          ['1.', 'первый', 'pervyy', 'первая'],
          ['2.', 'второй', 'vtoroy', 'вторая'],
          ['3.', 'третий', 'tretiy', 'третья'],
          ['4.', 'четвёртый', 'chetvyortyy', 'четвёртая'],
          ['5.', 'пятый', 'pyatyy', 'пятая'],
          ['6.', 'шестой', 'shestoy', 'шестая'],
          ['7.', 'седьмой', "sed'moy", 'седьмая'],
          ['8.', 'восьмой', "vos'moy", 'восьмая'],
          ['9.', 'девятый', 'devyatyy', 'девятая'],
          ['10.', 'десятый', 'desyatyy', 'десятая'],
        ],
        caption: 'Rusça ordinal sayılar 1. - 10.',
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "**Третий** (üçüncü) düzensizdir — yumuşak sıfat kalıbını izler (третья, третьего…)",
        "Bileşik ordinal sayılarda yalnızca son kelime değişir: **двадцать первый** (yirmi birinci)",
        "Ordinal sayılar tarihlerde kullanılır: **первое января** (ocak ayının birinci günü)",
        "Kat numaraları: **на первом этаже** (birinci katta) — ordinal sayı lokatif halinde",
      ],
    },
    {
      h2: "Rusça'da Yaşınızı Nasıl Söylersiniz",
      content:
        "Rusça'da yaş belirtmek datif hali ve **лет** (yıl) kelimesini kullanır. Yapı şöyledir: **Мне + [sayı] + лет / года / год**.\n\nSayıdan sonra gelen isim aynı üç kademeli kuralı izler:\n\n- **год** (tekil nominatif) 1'den sonra: **Мне двадцать один год** (21 yaşındayım)\n- **года** (tekil genitif) 2, 3, 4'ten sonra: **Мне тридцать два года** (32 yaşındayım)\n- **лет** (çoğul genitif) 5+ten sonra: **Мне пятьдесят лет** (50 yaşındayım)",
      table: {
        headers: ['Yaş', 'Rusça', 'Sözcük anlamı'],
        rows: [
          ['1 yaşındayım', 'Мне один год', 'Bana bir yıl'],
          ['2 yaşındayım', 'Мне два года', 'Bana iki yıl'],
          ['5 yaşındayım', 'Мне пять лет', 'Bana beş yıl'],
          ['21 yaşındayım', 'Мне двадцать один год', 'Bana yirmi bir yıl'],
          ['35 yaşındayım', 'Мне тридцать пять лет', 'Bana otuz beş yıl'],
          ['Kaç yaşındasınız?', 'Сколько вам лет?', 'Size kaç yıl?'],
        ],
        caption: "Rusça'da yaş belirtme",
        boldColumnIndices: [0, 1],
      },
    },
    {
      h2: "Rusça'da Tarih ve Yıl Nasıl Söylenir",
      content:
        "Rusça'da tarihler **ordinal sayıların nötr formunu** kullanır (нötr, çünkü ima edilen kelime **число** — tarih/sayı, nötr bir isimdir) ve ardından ay **genitif** halinde gelir.\n\n**Bugün 5 Haziran → Сегодня пятое июня.**\n\nYıllar için Rusça, год (yıl) kelimesiyle birlikte lokatif halinde ordinal sayıyı kullanır: **2026'da → В две тысячи двадцать шестом году.**",
      table: {
        headers: ['Ay', 'Rusça', 'Genitif (tarihler için)'],
        rows: [
          ['Ocak', 'январь', 'января'],
          ['Şubat', 'февраль', 'февраля'],
          ['Mart', 'март', 'марта'],
          ['Nisan', 'апрель', 'апреля'],
          ['Mayıs', 'май', 'мая'],
          ['Haziran', 'июнь', 'июня'],
          ['Temmuz', 'июль', 'июля'],
          ['Ağustos', 'август', 'августa'],
          ['Eylül', 'сентябрь', 'сентября'],
          ['Ekim', 'октябрь', 'октября'],
          ['Kasım', 'ноябрь', 'ноября'],
          ['Aralık', 'декабрь', 'декабря'],
        ],
        caption: "Rusça ay adları ve genitif formları (tarihlerde kullanılır)",
        boldColumnIndices: [0, 1],
      },
      bullets: [
        "**Какое сегодня число?** = Bugün hangi tarih? (sözcük anlamı: bugün hangi sayı?)",
        "**Сегодня первое января** = Bugün birinci Ocak",
        "Doğum günleri için: **Мой день рождения — второе марта** (Doğum günüm 2 Mart)",
        "Yıllar uzun ordinal sayılar kullanır: **в две тысячи двадцать шестом году** (2026'da)",
        "Günlük konuşmada Ruslar genellikle yılı kısaltır: 2026 için **в двадцать шестом году**",
      ],
    },
    {
      h2: "Rusça Sayılarla Yapılan Yaygın Hatalar",
      content:
        "İleri düzey öğrenciler bile Rusça sayılarla öngörülebilir hatalar yapar. İşte en sık karşılaşılan dördü:",
      bullets: [
        "**Tüm sayılardan sonra nominatif kullanmak.** En yaygın hata: **пять стол** yerine **пять столов** demek. Hatırlayın: 2–4 → tekil genitif; 5+ → çoğul genitif.",
        "**1 ve 2 için cinsiyeti unutmak.** **два книга** yerine **две книги** demek (книга dişildir, bu nedenle два → две).",
        "**11–14'ü son haneleri gibi ele almak.** 11, 1 ile bitiyor gibi görünür ama çoğul genitif alır: **одиннадцать студентов**, одиннадцать студент değil.",
        "**Yaşlar için год / года / лет'i karıştırmak.** 'Yıl' kelimesi aynı üç kademeli kuralı izler: один год, два года, пять лет.",
        "**Сорок (40)'ı yanlış vurgulamak.** **SO-rok** şeklindedir, vurgu ilk hecededir.",
      ],
    },
  ],
  faq: [
    {
      question: "Rusça'da 'bir' kelimesi nedir?",
      answer:
        "Rusça'da 'bir' kelimesinin üç cinsiyet çeşitlemesi vardır: **один** (eril — один брат), **одна** (dişil — одна сестра) ve **одно** (nötr — одно окно). Tanımladığı ismin cinsiyetiyle uyuşan formu kullanın.",
    },
    {
      question: "Rusça sayılar isim halleriyle nasıl etkileşime girer?",
      answer:
        "Rusça isimler sayılardan sonra hallerini değiştirir. Kural: 1 → tekil nominatif (один стол); 2, 3, 4 → tekil genitif (два стола); 5 ve üzeri → çoğul genitif (пять столов). Bileşik sayılarda kural son haneye bağlıdır — ancak 11–14 her zaman çoğul genitif alır.",
    },
    {
      question: 'два ile две arasındaki fark nedir?',
      answer:
        "**Два** eril ve nötr isimlerle kullanılır: два брата (iki erkek kardeş), два окна (iki pencere). **Две** dişil isimlerle kullanılır: две сестры (iki kız kardeş), две книги (iki kitap). Bu ayrım önemlidir — dişil bir isimle два kullanmak dilbilgisi hatasıdır.",
    },
    {
      question: "Rusça'da '25 yaşındayım' nasıl söylenir?",
      answer:
        "**Мне двадцать пять лет** (sözcük anlamı: 'bana yirmi beş yıl') denir. 25 sayısı 5 ile bittiği için isim **лет** (çoğul genitif) olur. 21 yaşındaysanız **Мне двадцать один год** deyin (год — tekil nominatif, çünkü son hane 1'dir).",
    },
    {
      question: "Rusça'da '100' nasıl söylenir?",
      answer:
        "100 Rusça'da **сто** — düzensiz bir form. 200 **двести**, 300 **триста**, 400 **четыреста**'dır. 500'den itibaren yüzler düzenli bir kalıbı izler: **пятьсот, шестьсот, семьсот, восемьсот, девятьсот**.",
    },
  ],
  conclusion:
    "Rusça sayılar, bir listede basit görünen ama konuşmada doğru kullanmak için gerçek pratik gerektiren dil bölümlerinden biridir. İyi haber şu: sistem **mantıklıdır**. Üç kademeli hal kuralı yerine oturduğunda, сорок (40), девяносто (90) ve сто (100) ezberlendiğinde ve один / одна / два / две'nin cinsiyet uyumu otomatik hale geldiğinde — temelde tüm sayı sistemine hakim olursunuz.\n\nSonraki en önemli adım **sayıları gerçek cümlelerde pratik yapmaktır** — doğru halle nesneleri saymak, fiyatları söylemek, tarihleri sesli okumak. İşte orada sayı tablolarının pasif bilgisi aktif Rusçaya dönüşür.",
  conclusionBullets: [
    "Sayılar 1–10 temeldir — cinsiyet çeşitlemeleriyle birlikte ezberleyin",
    "'Gençler' (11–19) hepsi **-надцать** ile biter — kalıbı bir kere öğrenin",
    "Üç düzensizi ezberleyin: **сорок** (40), **девяносто** (90), **сто** (100)",
    "Hal kuralını uygulayın: 1 → nominatif, 2–4 → tekil genitif, 5+ → çoğul genitif",
    "Ordinal sayılar sıfatlardır ve cinsiyet, hal ve sayı bakımından uyuşmalıdır",
  ],
  conclusionOutro:
    "Sayılar, Rusça dilbilgisi hal sistemine giriş kapınızdır — ve gerçek akıcılığın yaşandığı yer de o sistemdir. Her isim, zamir ve sıfat cümledeki rolüne bağlı olarak değişir ve **bu çekimleri öğrenmek, işlevsel Rusçayı gerçek akıcılıktan ayıran şeydir**.",
  ctaText: 'Russian Cases with Anna İndir — Ücretsiz',
  ctaHref: '/',
  internalLinks: [
    {
      href: '/learn/articles/russian-greetings-guide',
      label: "Rusça Selamlaşma: Rusça'da Merhaba Nasıl Denir (Tam Kılavuz)",
    },
    {
      href: '/learn/articles/russian-most-common-words',
      label: 'En Yaygın 100 Rusça Kelime: Başlangıç Seviyesi İçin Temel Kelime Listesi',
    },
    {
      href: '/learn/articles/russian-alphabet-cyrillic-guide',
      label: 'Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin',
    },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rusça Haller Basitçe Açıklandı: Yeni Başlayanlar İçin Görsel Rehber',
    },
    {
      href: '/learn/articles/how-long-learn-russian',
      label: 'Rusçayı Öğrenmek Ne Kadar Sürer? (Gerçekçi Zaman Çizelgesi)',
    },
    {
      href: '/practice',
      label: 'Ücretsiz Rusça Çekim Testi (tüm altı hal)',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Rusça Sayılar: Rusça'da Nasıl Sayılır (Tam Kılavuz 2026)",
    description:
      "Rusça sayıları 1'den 1000'e öğrenin: kardinal, ordinal sayılar, hallerle sayılar, yaş ve tarihler — tablolarla tam kılavuz.",
    datePublished: '2026-06-11',
    dateModified: '2026-06-11',
    author: {
      '@type': 'Person',
      name: 'Nathan',
      url: 'https://russiandeclensions.com/',
      image: 'https://russiandeclensions.com/landing-cases/founder-photo.webp',
      description: "Anadili Fransızca; Rusça öğreniyor ve gerçekten işe yarayanları paylaşıyor.",
      worksFor: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-numbers-guide',
    },
    keywords:
      "Rusça sayılar, Rusça'da nasıl sayılır, Rusça kardinal sayılar, Rusça ordinal sayılar, Rusça sayma",
    image: {
      '@type': 'ImageObject',
      url: 'https://russiandeclensions.com/articles/russia-kremlin-moscow.webp',
      width: 1200,
      height: 630,
    },
  },
};
