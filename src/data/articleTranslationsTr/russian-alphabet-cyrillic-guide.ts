import type { LearnArticle } from '../learnArticles';

/** Türkçe çevirisi: `russian-alphabet-cyrillic-guide` */
export const russianAlphabetCyrillicGuideTr: LearnArticle = {
  slug: 'russian-alphabet-cyrillic-guide',
  title: 'Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin',
  metaTitle:
    'Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin (Tam 2026 Rehberi) | Russian Cases with Anna',
  metaDescription:
    "Rus Kiril alfabesini 3 net adımda öğrenin: tanıdık harfler, sahte arkadaşlar ve yeni harfler — telaffuz ipuçları, hafıza teknikleri ve 7 günlük bir çalışma planı ile.",
  keywords: [
    'rus alfabesi',
    'kiril alfabesi',
    'rus alfabesi öğren',
    'rusça harfler',
    'yeni başlayanlar için kiril',
    'rusça nasıl okunur',
  ],
  h1: 'Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin',
  heroImage: {
    src: '/articles/russian-alphabet-cyrillic-guide.webp',
    alt: 'Bir öğrenme defterinde Rusça Kiril alfabesi harfleri',
    width: 1200,
    height: 630,
  },
  introByline: {
    text: "**Nathan tarafından yazılmıştır** — Anadili Fransızca; Rusça öğreniyor ve gramer, haller ve günlük pratik için gerçekten işe yarayan şeyleri paylaşıyor.",
    imageSrc: '/landing-cases/founder-photo.webp',
    imageAlt: 'Russian Cases with Anna kurucusu Nathan',
    imageWidth: 256,
    imageHeight: 256,
  },
  intro:
    "Rusça okumayı öğrenmek, kilitli bir kapının önünde durmak gibi hissettirir — ta ki elinizdeki anahtarların büyük çoğunluğunu zaten taşıdığınızı fark edene kadar.\n\nKiril alfabesinde Türkçe'deki 29 harfe kıyasla **33 harf** bulunmaktadır. Bunların yaklaşık üçte biri hemen tanıdık gelir; bir diğer üçte biri, Latin harflerine benzeyen ancak tamamen farklı sesler çıkaran görsel aldatıcılardır; son üçte biri ise gerçekten yeni olmakla birlikte göründüğünden çok daha kolay öğrenilir. Tüm sistem, günlük kısa çalışmalarla **bir ila iki haftada** yerli yerine oturabilir.\n\nBu rehber 33 harfin tamamını üç gruba ayırır, her zorlu harf için hafıza teknikleri sunar ve Rusçaya özgü ses kurallarını — vurgu ve ünlü redüksiyonu — açıklar. Sonunda **her Rusça kelimeyi doğru okuyabileceksiniz** — bu, diğer her şeyin üzerine inşa edildiği temeldir.",
  whatYouLearn: [
    '33 Kiril harfinin tamamı 3 yönetilebilir gruba ayrılmış hâlde',
    'Her zorlu veya tanıdık olmayan harf için hafıza teknikleri',
    'Rusça vurgunun (ударение) doğru telaffuzun anahtarı olduğu',
    'Ünlü redüksiyonunun Rusçanın gerçekte nasıl seslendiğini nasıl değiştirdiği',
    "Sıfırdan güvenli Kiril okumaya ulaşmak için pratik bir 7 günlük plan",
  ],
  sections: [
    {
      h2: 'Neden Kiril Göründüğünden Daha Kolaydır',
      content:
        "Çoğu öğrenci, Kiril alfabesine ilk bakışta yabancı göründüğü için korkar. Oysa pratikte bu alfabe, günlük kullanımdaki en **fonetik tutarlı** alfabelerden biridir — Türkçe'den çok daha düzensiz olan İngilizce yazımından çok daha düzenlidir.\n\nKiril alfabesini yönetilebilir kılan üç şey:\n\n**1. Fonetiktir.** Her harfin yaklaşık olarak bir sesi vardır. Sesler öğrenildikten sonra herhangi bir Rusça kelimeyi doğru okuyabilirsiniz.\n\n**2. Harflerin üçte biri zaten tanıdıktır.** Beşi Latin karşılıklarına benzer görünür ve aynı sesi çıkarır. Sekizi daha tanıdık görünür ancak farklı sesler çıkarır — bu aslında yararlıdır, çünkü şekillerini zaten tanırsınız.\n\n**3. Başlamak için el yazısı öğrenmenize gerek yoktur.** Basılı Kiril, kitaplarda, uygulamalarda ve dijital içeriklerde karşılaşacağınız şeydir. Önce basılı harfleri okumayı öğrenin.",
      table: {
        caption: 'Tek bakışta 33 Rusça harfin tamamı',
        headers: ['Harf', 'Adı', 'Yaklaşık ses', 'Grup'],
        rows: [
          ['А а', 'a', '/a/ — "anne"deki a', 'Tanıdık'],
          ['Б б', 'be', '/b/ — "bal"daki b', 'Yeni'],
          ['В в', 've', '/v/ — "var"daki v', 'Sahte arkadaş'],
          ['Г г', 'ge', '/g/ — "gül"deki g', 'Yeni'],
          ['Д д', 'de', '/d/ — "dağ"daki d', 'Yeni'],
          ['Е е', 'ye', '/je/ — "yer"deki ye', 'Sahte arkadaş'],
          ['Ё ё', 'yo', '/jo/ — "yoga"daki yo', 'Sahte arkadaş'],
          ['Ж ж', 'je', '/ʒ/ — "jilet"teki j', 'Yeni'],
          ['З з', 'ze', '/z/ — "zaman"daki z', 'Yeni'],
          ['И и', 'i', '/i/ — "ip"teki i', 'Yeni'],
          ['Й й', 'kısa i', '/j/ — "yol"daki y', 'Yeni'],
          ['К к', 'ka', '/k/ — "kalem"deki k', 'Tanıdık'],
          ['Л л', 'el', '/l/ — "lamba"daki l', 'Yeni'],
          ['М м', 'em', '/m/ — "masa"daki m', 'Tanıdık'],
          ['Н н', 'en', '/n/ — "not"taki n', 'Sahte arkadaş'],
          ['О о', 'o', '/o/ — "or" (vurgulu)', 'Tanıdık'],
          ['П п', 'pe', '/p/ — "para"daki p', 'Yeni'],
          ['Р р', 'er', '/r/ — titrek r', 'Sahte arkadaş'],
          ['С с', 'es', '/s/ — "su"daki s', 'Sahte arkadaş'],
          ['Т т', 'te', '/t/ — "top"taki t', 'Tanıdık'],
          ['У у', 'u', '/u/ — "uçak"taki u', 'Sahte arkadaş'],
          ['Ф ф', 'ef', '/f/ — "fare"deki f', 'Yeni'],
          ['Х х', 'kha', '/x/ — "haber"deki h (gırtlaktan)', 'Sahte arkadaş'],
          ['Ц ц', 'tse', '/ts/ — "pizza"daki ts', 'Yeni'],
          ['Ч ч', 'çe', '/tʃ/ — "çay"daki ç', 'Yeni'],
          ['Ш ш', 'şa', '/ʃ/ — "şeker"deki ş', 'Yeni'],
          ['Щ щ', 'şça', '/ʃtʃ/ — ş + ç birleşimi', 'Yeni'],
          ['Ъ ъ', 'sert işaret', '(ses yok — sert işaret)', 'Yeni'],
          ['Ы ы', 'yery', '/ɨ/ — koyu "ı"', 'Yeni'],
          ['Ь ь', 'yumuşak işaret', '(ses yok — yumuşak işaret)', 'Yeni'],
          ['Э э', 'e', '/e/ — "ev"deki e', 'Yeni'],
          ['Ю ю', 'yu', '/ju/ — "yurt"taki yu', 'Yeni'],
          ['Я я', 'ya', '/ja/ — "yaz"daki ya', 'Yeni'],
        ],
        boldColumnIndices: [0, 3],
      },
    },
    {
      h2: 'Adım 1: 5 Tanıdık Harf',
      content:
        "Buradan başlayın. Bu beş harf, Latin karşılıklarına benzer görünür ve aynı sesi çıkarır — hiçbir hile, hiçbir sürpriz. Bunları öğrenmek yaklaşık on dakika alır.",
      table: {
        headers: ['Harf', 'Ses', "Türkçe'deki gibi", 'Örnek kelime'],
        rows: [
          ['А а', '/a/', '"anne"deki a', 'атом (atom)'],
          ['К к', '/k/', '"kalem"deki k', 'кот (kedi)'],
          ['М м', '/m/', '"masa"daki m', 'мама (anne)'],
          ['О о', '/o/', '"or" (vurgulu)', 'он (o)'],
          ['Т т', '/t/', '"top"taki t', 'там (orada)'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        '**О** yalnızca **vurgulu** olduğunda "o" gibi sesler. Vurgusuz olduğunda "a"ya yakın bir sese indirgenir (aşağıdaki ünlü redüksiyonu bölümüne bakın).',
        'Bu beş harfin tamamı son derece sık kullanılır — neredeyse her Rusça cümlede görünürler.',
        "Herhangi bir Rusça metinde bu harfleri bulup sesli okuyarak pratik yapın.",
      ],
    },
    {
      h2: 'Adım 2: 8 Sahte Arkadaş',
      content:
        "Bu sekiz harf, bildiğiniz Latin harflere benzer görünür — ancak tamamen farklı sesler çıkarır. Bu, yeni başlayanlar için en yaygın karışıklık kaynağıdır. Bunları dikkatle öğrenin; bir kez oturursa 33 harfin 13'ünü öğrenmiş olursunuz.",
      table: {
        headers: ['Harf', 'Benziyor', 'Gerçek ses', 'Hafıza tekniği'],
        rows: [
          ['В в', 'B', '/v/ — "var"', '"vodka" В ile başlar, V gibi okunur'],
          ['Е е', 'E', '/je/ — "yer"', '"YE" — Türkçe "ye" gibi'],
          ['Ё ё', 'Noktalı E', '/jo/ — "yoga"', '"YO" — iki nokta YO sesini gösterir'],
          ['Н н', 'H', '/n/ — "not"', '"eN" — harfin adı sesi verir'],
          ['Р р', 'P', '/r/ — titrek', 'Titrek r — Р → Россия (Rusya)'],
          ['С с', 'C', '/s/ — "su"', '"С" → "S" — aynı fikir'],
          ['У у', 'Y', '/u/ — "uçak"', '"U" — düz U sesi'],
          ['Х х', 'X', '/x/ — gırtlaktan h', '"Bach"taki Almanca ch gibi'],
        ],
        boldColumnIndices: [0, 1],
      },
      bullets: [
        '**В / B** karışıklığı en sık yapılan hatadır. В her zaman "V" sesini çıkarana kadar ayrı ayrı çalışın.',
        '**Р** titrek veya vurmalı bir R\'dir. Hafif bir titreme bile çoğu bağlamda yeterlidir.',
        '**Х** Almanca "Bach"taki ch sesidir — Rusçada biraz daha hafiftir.',
        'Bu 8 harfi tereddütsüz tanıyabildiğinizde 33 harfin 13\'ünü biliyorsunuz demektir — alfabenin yaklaşık **%40\'ı**.',
      ],
    },
    {
      h2: 'Adım 3: 20 Yeni Harf',
      content:
        "Geriye kalan 20 harfin belirgin bir Latin görsel karşılığı yoktur. Bazıları Türkçe'de de bulunan seslere karşılık gelir (Б = B, Д = D, Л = L, П = P, Ф = F); diğerleri Türkçe'de bulunmayan sesleri tanıtır (Ж, Ц, Щ, Ы).",
      subsections: [
        {
          h3: '3a — Tanıdık sesli yeni harfler',
          content:
            "Bu harfler tanıdık görünmez ancak Türkçe'de zaten çıkardığınız sesleri üretirler. Önce sesi, sonra şekli öğrenin.",
          table: {
            headers: ['Harf', 'Ses', "Türkçe'deki gibi", 'Hafıza tekniği'],
            rows: [
              ['Б б', '/b/ — "bal"', '"b"', '6 sayısına benziyor — "Б B-altı için"'],
              ['Г г', '/g/ — "gül"', '"g"', 'Tersine çevrilmiş L gibi — G sesi'],
              ['Д д', '/d/ — "dağ"', '"d"', 'Çadıra benziyor — "Д ev (Dom) için"'],
              ['З з', '/z/ — "zaman"', '"z"', '3 sayısına benziyor — "З Zaman için"'],
              ['И и', '/i/ — "ip"', '"i"', 'Tersine çevrilmiş N — "И = İ"'],
              ['Й й', '/j/ — "yol"', '"y" (yol içindeki)', 'Üstünlü И — kısa İ, Y gibi sesler'],
              ['Л л', '/l/ — "lamba"', '"l"', 'Tersine V gibi — "Л Lamba için"'],
              ['П п', '/p/ — "para"', '"p"', 'Kapı çerçevesi П — "П Para için"'],
              ['Ф ф', '/f/ — "fare"', '"f"', 'Fi Φ gibi — F sesi'],
            ],
          },
        },
        {
          h3: '3b — Yeni sesli yeni harfler',
          content:
            'Bu harfler biraz pratik gerektiren sesleri tanıtır — ancak her biri fonetik olarak tutarlıdır, yani ses bir kez öğrenilince asla değişmez.',
          table: {
            headers: ['Harf', 'Ses', "Türkçe'ye en yakın", 'Hafıza tekniği'],
            rows: [
              ['Ж ж', '/ʒ/ — "jilet"', '"j" (jilet)', 'Böcek gibi görünür — "Ж vızıldar"'],
              ['Ц ц', '/ts/ — "pizza"', '"ts" (pizza)', 'İki harf bir arada: T + S = Ц'],
              ['Ч ч', '/tʃ/ — "çay"', '"ç" (çay)', 'Tersine 4 gibi — "Ч Çetıre (dört) için"'],
              ['Ш ш', '/ʃ/ — "şeker"', '"ş" (şeker)', 'Tarak gibi görünür — "Ш ŞEK sesini çıkarır"'],
              ['Щ щ', '/ʃtʃ/ — ş + ç', 'ş + ç birleşimi', 'Kuyruklu Ш = daha sert Ш'],
              ['Э э', '/e/ — "ev"', '"e" (ev)', 'Tersine С — "Э = saf E"'],
              ['Ю ю', '/ju/ — "yurt"', '"yu" (yurt)', 'О + çizgi — "Ю = YU"'],
              ['Я я', '/ja/ — "yaz"', '"ya" (yaz)', 'Tersine R — "Я Ben demek"'],
            ],
          },
        },
        {
          h3: '3c — Özel işaretler: Ъ, Ы, Ь',
          content:
            "Üç harf özel ilgi gerektirir: **Ь** (yumuşak işaret), **Ъ** (sert işaret) ve **Ы** (kendine özgü bir ünlü).\n\n**Ь (yumuşak işaret)** kendi sesi yoktur. Kendisinden önceki ünsüzü „yumuşatır\" — ünsüzü bitirirken dilinizi damağınıza bastırdığınızı hayal edin. Örnek: брат (erkek kardeş) ile брать (almak).\n\n**Ъ (sert işaret)** nadirdir. Önek ile sonraki hece arasında kısa bir duraklama oluşturur (örn. съезд — kongre). Orta seviyeye kadar endişelenmenize gerek yok.\n\n**Ы** Türkçe konuşanlar için en zor ünlüdür. Koyu, ortalanmış bir \"ı\" gibidir — yaklaştırmak için \"ı\" deyin ve dilinizi hafifçe geriye çekin. Örnekler: ты (sen), мы (biz). Pratikle doğal hale gelir.",
        },
      ],
    },
    {
      h2: 'Ünlü Redüksiyonu: Rusça Neden Yazıldığından Farklı Duyulur',
      content:
        "İşte çoğu yeni başlayanı şaşırtan kural: **Rusça ünlüler, vurgulu olup olmadıklarına göre seslerini değiştirirler.**\n\nEn belirgin örnek О harfidir:\n- **Vurgulu О** \"o\" gibi sesler: большой (büyük) — большой'daki О vurgulu: bol-ŞOY.\n- **Vurgusuz О** \"a\"ya benzer hafif bir sese indirgenir: молоко (süt) — \"muh-luh-KO\" gibi duyulur, \"MO-lo-KO\" değil.\n\nА da vurgusuz olduğunda azalır, ancak daha az belirgin şekilde. Buna **ünlü redüksiyonu** (редукция) denir ve sözlü Rusçanın fonetik okumadan çok farklı gelebilmesinin nedeni budur.",
      table: {
        headers: ['Ünlü', 'Vurgulu', 'Vurgusuz', 'Örnek'],
        rows: [
          ['О', '/o/ — "or"', '/ə/ — "a"ya indirgenir', 'молоко → muh-luh-KO'],
          ['Е', '/je/ — "yer"', '/jɪ/ — "yi"ye indirgenir', 'телефон → tyi-lyi-FON'],
          ['А', '/a/ — "anne"', '/ə/ — daha hafif "a"', 'трамвай → truhm-VAY'],
          ['Я', '/ja/ — "yaz"', '/jɪ/ — "yi"ye indirgenir', 'язык → yi-ZYIK'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        'Sözlükler vurgulu ünlünün üzerine aksan işareti koyarak vurguyu gösterir (örn. молоко́). Bunları kullanın — vurgu tahmin edilemez.',
        'Okumaya başlamadan önce ünlü redüksiyonunda ustalaşmanız gerekmez; yalnızca var olduğunu bilin.',
        'Redüksiyon, okurken çok Rusça ses dinlediğinizde doğal olarak yerli yerine oturur.',
      ],
    },
    {
      h2: 'Rusça Vurgu (ударение): Gizli Zorluk',
      content:
        "Rusça vurgusu özgürdür (herhangi bir heceye düşebilir) ve hareketlidir (aynı kelimenin dilbilgisel biçimleri arasında kayabilir). Vurgunun nereye düşeceğini söyleyen kural yoktur — her kelimeyle birlikte öğrenilmesi gerekir.\n\nNeden önemlidir?\n\n1. **Ünlü sesleri değişir** (yukarıda gösterildiği gibi).\n2. **Kelimenin anlamı değişebilir**: за́мок „kale\" demektir; замо́к ise „kilit\" demektir. Aynı harfler, farklı vurgu, farklı kelime.\n3. **Dilbilgisi biçimleri anlam değiştirir**: я пишу́ (ben yazıyorum) ile они́ пи́шут (onlar yazıyor) — hem fiil ekleri hem de vurgu kayar.\n\nPratik tavsiye: **Her yeni kelimeyi defterinize yazarken vurguyu her zaman işaretleyin.**",
      table: {
        headers: ['Kelime', 'Vurgu', 'Anlam', 'Not'],
        rows: [
          ['за́мок', '1. hece', 'kale', 'SA-mok'],
          ['замо́к', '2. hece', 'kilit (asma)', 'sa-MOK'],
          ['до́рога', '1. hece', 'yol', 'DO-ro-ga'],
          ['дорога́', '3. hece', 'pahalı / sevgili', 'do-ro-GA'],
        ],
        boldColumnIndices: [0],
      },
    },
    {
      h2: 'Kiril ile Yazma: Hızlı Kurulum',
      content:
        "Yazma, harfleri tanımanın en hızlı yollarından biridir. Kiril klavyesi kurmak iki dakika alır.",
      subsections: [
        {
          h3: "iOS'ta (iPhone / iPad)",
          content:
            '**Ayarlar → Genel → Klavye → Klavyeler → Yeni Klavye Ekle** yolunu takip edin. **Rusça**yı seçin. Eklendikten sonra İngilizce ve Rusça arasında geçiş yapmak için klavyenizdeki dünya simgesine dokunun.',
        },
        {
          h3: "Android'da",
          content:
            '**Ayarlar → Genel Yönetim → Dil ve Giriş → Ekran Klavyesi** yolunu takip edin. Rusça ekleyin. Ara çubuğundaki dil göstergesine dokunarak geçiş yapın. Gboard ve SwiftKey Rusçayı destekler.',
        },
        {
          h3: 'Masaüstünde (Windows / Mac)',
          content:
            'Windows: Ayarlar → Saat ve Dil → Dil → Rusça Ekle → Rusça Fonetik. Mac: Sistem Ayarları → Klavye → Giriş Kaynakları → Rusça ekle (Fonetik düzen yeni başlayanlar için en kolay).',
        },
      ],
      bullets: [
        'Mümkünse **fonetik düzen** kullanın — Kiril harflerini benzer sesli Latin tuşlara eşler.',
        'Bir kelimeyi beş kez yazmak, onu yirmi kez okumaktan harf tanıma açısından daha değerlidir.',
        "İlk günden itibaren gerçek mesajlarda Kiril klavyesini kullanın.",
      ],
    },
    {
      h2: 'Rus Alfabesini 7 Günde Öğrenme Planınız',
      content:
        "7 gün boyunca günde 10 dakika, işlevsel Kiril okumaya ulaşmak için yeterlidir. İşte günlük program:",
      table: {
        headers: ['Gün', 'Odak', 'Hedef', 'Çalışma yöntemi'],
        rows: [
          ['1. Gün', '5 tanıdık harf (А К М О Т)', 'Anında tanıma', 'Her harfi 10× yaz; 5 kısa kelime oku'],
          ['2. Gün', '8 sahte arkadaş (В Е Ё Н Р С У Х)', 'Her harfin ses tuzağını bil', 'Ses sütununu kapat ve söyle; kontrol et'],
          ['3. Gün', 'Tanıdık sesli yeni harfler (Б Г Д З И Й Л П Ф)', 'Her harfle temel bir kelime okuyabilmek', 'Harf başına 3 kelime; Anki\'ye ekle'],
          ['4. Gün', 'Yeni sesli yeni harfler (Ж Ц Ч Ш Щ Э Ю Я)', 'Her sesi doğru üretmek', 'Gölgeleme: dinle + 10× tekrarla'],
          ['5. Gün', 'Özel işaretler (Ъ Ы Ь) + ünlü redüksiyonu', 'İşlevi anlamak; Ы sesini üretmek', 'Minimal çiftler: брат / брать; мы / ми'],
          ['6. Gün', 'Tam alfabe tekrarı', 'Tereddütsüz 33 harfi okumak', 'Rastgele flash test: karıştır ve tanı'],
          ['7. Gün', 'Kısa Rusça metni sesli oku', 'Bir paragraftaki her kelimeyi hecelemek', 'Duolingo / Babbel / herhangi bir metin'],
        ],
        boldColumnIndices: [0],
      },
      bullets: [
        '33 harfin tamamını, seslerini ve her biri için bir örnek kelimeyi içeren bir defter tutun.',
        '7. Günün ardından: günde 5 dakika Rusça metni sesli okuyun — kelimeleri henüz anlamasanız bile.',
        "1. Gününüzde telefonunuza Kiril klavyesi ekleyin ve başından itibaren kullanın.",
      ],
    },
  ],
  leadMagnetCta: {
    title: 'Alfabeden Gramere: 6 Rusça Hali Pratik Edin',
    description:
      'Kiril okuyabildiğinizde, sıradaki adım Rusça grameridir — ve haller temel zorluktur. Russian Cases with Anna, kendi hızınızda, anında geri bildirimle tüm altı hali pratiğe geçirmenizi sağlar — iOS ve Android\'de.',
    ctaText: 'Russian Cases with Anna\'yı İndirin — ücretsiz başlayın →',
    ctaHref: '/',
  },
  faq: [
    {
      question: 'Rus alfabesini öğrenmek ne kadar sürer?',
      answer:
        "Çoğu öğrenci, günlük 10–15 dakikalık çalışmanın bir ila iki haftası içinde Rusça metinleri yavaş ama doğru şekilde okuyabilir. Rahat ve doğal okuma hızı genellikle bağlamda daha fazla kelimeyle karşılaştıkça sonraki ay içinde gelişir.",
    },
    {
      question: 'Kiril Türkçe konuşanlar için zor mudur?',
      answer:
        "Kiril, Rusça öğrenmenin en kolay parçalarından biri olarak kabul edilir. Rusça gramerin aksine (haller, görünüşler, fiil çekimi), alfabe sınırlıdır ve günler içinde öğrenilebilir. Kiril'in fonetik tutarlılığı gerçek bir avantajdır.",
    },
    {
      question: 'Rusça el yazısı öğrenmem gerekiyor mu?',
      answer:
        "Başlangıçta hayır. Basılı Kiril, kitaplarda, uygulamalarda, web sitelerinde ve yazılı metinlerde karşılaşacağınız şeydir. Rusça el yazısı temelden farklıdır ve yalnızca el yazısı notlar veya eski belgeler okumayı planlıyorsanız gereklidir.",
    },
    {
      question: "Rusça gramere başlamadan önce 33 harfin tamamını ezberlemem gerekiyor mu?",
      answer:
        "Hayır — ve her harfi mükemmel şekilde öğreneceğinizi beklemek yaygın bir erteleme tuzağıdır. Yukarıdaki planın 7. gününde, Ы ve Щ henüz otomatik olmasa bile temel gramere dokunmaya başlamalısınız.",
    },
    {
      question: 'Ш ile Щ arasındaki fark nedir?',
      answer:
        "Ш sert bir \"ş\" sesidir, Türkçe'deki ş gibi. Щ ise daha yumuşak, daha uzun bir \"şç\" sesidir — ş ve ç birlikte hızla söylenir. Günlük konuşmada fark önemlidir: шить (dikmek) ile считать (saymak).",
    },
    {
      question: 'Yumuşak işaret (Ь) nedir ve buna dikkat etmem gerekiyor mu?',
      answer:
        "Yumuşak işaret kendisinden önceki ünsüzü yumuşatır — dilbilimsel olarak onu damaksıllaştırır. Pratikte telaffuzu değiştirir ve grameri de etkiler. Sürekli karşılaşacaksınız. 1. Günden itibaren tanıyın ve etkisini gerçek örnekler aracılığıyla kademeli olarak öğrenin.",
    },
  ],
  conclusionIntro:
    "Kiril'i öğrenmek, Rusçadaki diğer her şeyi açan tek seferlik bir yatırımdır. İşte hatırlamanız gereken temel noktalar:",
  conclusionBullets: [
    '**5 tanıdık harf** (А К М О Т) — tek bir oturumda öğrenilir',
    '**8 sahte arkadaş** (В Е Ё Н Р С У Х) — dikkatle çalışılması gereken en önemli grup',
    '**20 yeni harf** — zorluğa göre gruplandır; çoğu zaten çıkardığınız seslere karşılık gelir',
    'Rusça **fonetik olarak tutarlıdır** — sesleri bir kez öğrenin ve her şeyi okuyun',
    '**Vurgu ve ünlü redüksiyonu** neden sözlü Rusçanın fonetik okumadan farklı duyulduğunu açıklar',
    '**10 dak./gün ile 7 günlük plan** sizi sıfırdan işlevsel okumaya taşır',
  ],
  conclusionOutro:
    "Kiril'i okuyabildiğinizde, gerçek zorluk başlar: Rusça grameri ve özellikle altı dilbilgisel hal. Bunları erken dönemde russiandeclensions.com/practice adresinde ücretsiz olarak pratik etmeye başlayın — kayıt gerekmez.",
  internalLinks: [
    { href: '/practice', label: 'Ücretsiz Rusça Çekim Pratiği — tüm 6 hal' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Basitçe Açıklanan Rusça Haller: Yeni Başlayanlar için Görsel Rehber',
    },
    {
      href: '/learn/articles/learn-russian-on-your-own',
      label: 'Rusçayı kendi başınıza öğrenebilir misiniz? Tam yol haritası',
    },
    {
      href: '/learn/articles/best-free-resources-learn-russian',
      label: "Rusça Öğrenmek için En İyi 15 Ücretsiz Kaynak",
    },
  ],
  ctaText: 'Rusça Halleri Pratik Edin — ücretsiz →',
  ctaHref: '/practice',
  conclusion: '',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rus Alfabesi: Kiril Alfabesini 3 Basit Adımda Öğrenin',
    description:
      "Rus Kiril alfabesini 3 net adımda öğrenin: tanıdık harfler, sahte arkadaşlar ve yeni harfler — telaffuz ipuçları, hafıza teknikleri ve 7 günlük bir çalışma planı ile.",
    datePublished: '2026-05-25',
    dateModified: '2026-05-25',
    author: { '@type': 'Person', name: 'Nathan', url: 'https://russiandeclensions.com/' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://russiandeclensions.com/learn/articles/russian-alphabet-cyrillic-guide',
    },
  },
};
