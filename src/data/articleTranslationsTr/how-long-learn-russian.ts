import type { LearnArticle } from '../learnArticles';

/** `how-long-learn-russian` makalesinin Türkçe çevirisi (EN kaynak: `learnArticles.ts`). Kiril aynen. */
export const howLongLearnRussianTr: LearnArticle = {
  slug: 'how-long-learn-russian',
  title:
    'Rusça öğrenmek ne kadar sürer? (gerçekçi zaman çizelgesi)',
  metaTitle:
    'Rusça öğrenmek ne kadar sürer? Seviyeye göre gerçekçi zaman çizelgesi | Russian Cases with Anna',
  metaDescription:
    'Rusça öğrenmek için gerçekçi zaman çizelgesi: A1’den C2’ye. Gerekli saatler, hızı etkileyen faktörler, somut çalışma planı. FSI verisi ve öğrenci deneyimi.',
  keywords: [
    'rusça öğrenmek ne kadar sürer',
    'rusça öğrenme süresi',
    'rusça zaman çizelgesi CEFR',
    'rusça akıcılık süresi',
    'rusça saat FSI',
    'FSI rusça zorluk',
  ],
  h1: 'Rusça öğrenmek ne kadar sürer? Gerçekçi bir zaman çizelgesi',
  intro:
    '« Rusça öğrenmem ne kadar sürer? » — her öğrencinin ilk sorusu; dürüst yanıt: **duruma bağlı**. ABD Dışişleri Enstitüsü (FSI) Rusçayı **IV. kategori**de sayar ve mesleki yeterlilik için yaklaşık **1.100 sınıf saati** öngörür. Bu sayı bir ölçüt olsa da her şeyi anlatmaz.\n\nGerçek takviminiz ana dilinize, günlük çalışma sürenize, yöntemlere, motivasyona ve « Rusça öğrenmek »in sizin için ne anlama geldiğine bağlıdır. Moskova’da yemek siparişi? Altı ay. Dostoyevski orijinalinden okumak? Birkaç yıl. Gerçekçi olarak parçalayalım.',
  whatYouLearn: [
    'Resmi FSI tahminleri ile gerçek dünya süreleri',
    'CEFR seviyesi başına saat (A1 → C2)',
    'İlerlemenizi hızlandıran veya yavaşlatan 7 faktör',
    'Önerilen araçlarla somut günlük plan',
  ],
  sections: [
    {
      h2: 'FSI ne diyor (ve bu ne anlama geliyor)',
      content:
        '**Foreign Service Institute** dilleri İngilizce konuşanlar için 4 zorluk kategorisine ayırır. Rusça **IV. kategori**dedir (Yunanca, Lehçe, Türkçe ile birlikte). Tahmin: mesleki çalışma yeterliliği (yaklaşık CEFR B2/C1) için **1.100 saat yoğun sınıf eğitimi**.\n\nFSI verisinin söylemediği: bu 1.100 saat **tam zamanlı yoğun çalışmayı** (haftada ~25 saat sınıf + ödev), deneyimli öğretmenleri ve yapılandırılmış programı varsayar. Birçok bağımsız öğrenci günde 30–60 dakika çalışır — matematik tamamen değişir.',
      table: {
        headers: [
          'Tempo',
          'Saat/gün',
          '~1.100 saate kadar',
          'Gerçekçi seviye',
        ],
        rows: [
          ['FSI yoğun', '5–6 s', '~44 hf. (10 ay)', 'B2/C1'],
          ['Kararlı öz-çalışma', '2 s', '~18 ay', 'B1/B2'],
          ['Gündelik öğrenci', '30 dk', '~6 yıl', 'A2/B1'],
          ['Sadece hafta sonu', '3 s/hafta', '~7 yıl', 'A2'],
        ],
        caption: 'FSI 1.100 saat ölçütüne göre tahmini süreler',
      },
    },
    {
      h2: 'CEFR seviyesine göre zaman çizelgesi',
      content:
        'Yolculuğu CEFR basamaklarına bölmek yardımcıdır. Her seviyenin net kilometre taşları vardır.',
      subsections: [
        {
          h3: 'A1 — hayatta kalma Rusçası (60–150 s)',
          content:
            'Kendini tanıtma, yemek siparişi, yol sorma, basit işlemler. Kiril alfabesi, yaygın fiillerin şimdiki zamanı, **yalın ve belirtme hâlleri**. Günde 30 dk ile çoğunlukla **2–4 ay**.',
          bullets: [
            'Kiril’i rahat okumak ve yazmak',
            'Yalın ve belirtme hâllerini doğru kullanmak',
            'Selamlaşma, sayılar, basit sorular',
            'Sözlükle kısa yazılı metinler',
          ],
        },
        {
          h3: 'A2 — turist düzeyi (150–300 s)',
          content:
            'Alışveriş, ulaşım, aile ve hobiler hakkında basit konuşmalar. **İlgi-alma ve bulunma hâlleri**, geçmiş zaman. **4–8 ay** düzenli çalışma.',
          bullets: [
            '6 hâlden 4’ü (yalın, belirtme, ilgi-alma, bulunma)',
            'Geçmiş ve gelecek eylemler',
            'Basit konuşmaların özünü anlama',
            'Kısa mesaj ve e-posta yazma',
          ],
        },
        {
          h3: 'B1 — konuşma düzeyi (300–500 s)',
          content:
            'Tanınmış konularda gerçek konuşmalar, net konuşmanın ana fikri, tutarlı metinler. **Tüm 6 hâl**, iki görünüş, hareket fiilleri. **8–14 ay** yoğun çalışma.',
          bullets: [
            'Tüm 6 hâl tekil ve çoğul',
            'Tamamlayıcı / süreklilik görünüşü',
            'Altyazılı Rusça diziler',
            'Görüş ve gerekçe ifade etme',
          ],
        },
        {
          h3: 'B2 — mesleki çalışma düzeyi (500–800 s)',
          content:
            'Karmaşık konularda tartışma, haberler ve podcastler, uyarlanmış edebiyat, ayrıntılı metinler. Hâl kullanımı çoğunlukla **otomatik**. **14–24 ay** ciddi çalışma.',
          bullets: [
            'Hâl sonları çoğunlukla otomatik',
            'Sözlüksüz haber makalesi okuma',
            'Ana dil konuşurlarını normal hızda anlama (çoğu konu)',
            'Profesyonel e-posta ve deneme yazma',
          ],
        },
        {
          h3: 'C1/C2 — ileri / ana dile yakın (800–1.500+ s)',
          content:
            'Neredeyse her şeyi anlama, her konuda akıcı ifade, mizah ve kültürel nüanslar, özgün edebiyat. İdeal olarak **2–4+ yıl** ve Rusça konuşulan ülkede yaşamak.',
          bullets: [
            'Günlük konuşma, argo, bölgesel aksanlar',
            'Çehov, Bulgakov veya Pelevin orijinalinden',
            'Üslup nüansıyla yazma',
            'TORFL-III/IV sınavı',
          ],
        },
      ],
    },
    {
      h2: 'Öğrenme hızınızı etkileyen 7 faktör',
      content:
        'Aynı gün başlayan iki öğrenci B1’e aylarca farkla varabilir:',
      subsections: [
        {
          h3: '1. Ana diliniz',
          content:
            'Lehçe, Çekçe, Ukraynaca vb. Slav dilleri: Rusça çok daha kolay. Almanca veya Latince hâl sistemine yardım eder. İngilizce konuşanlar en uzak başlangıçta.',
        },
        {
          h3: '2. Günlük süre (tutarlılık > aralıklı yoğunluk)',
          content:
            '**Her gün 30 dakika, hafta sonu 3 saatten iyidir.** Aralıklı tekrar için günlük maruz kalma gerekir.',
        },
        {
          h3: '3. Yöntemler',
          content:
            'Pasif yöntemler yetmez. **Aktif hatırlama** — test edilip cevap üretmek — tutmayı 3–5 kat artırır. russiandeclensions.com **ücretsiz çekim testi** bunu kullanır.',
        },
        {
          h3: '4. Önce dilbilgisi vs önce kelime',
          content:
            'Binlerce kelime + sıfır dilbilgisi = cümle kuramama. Rusçada **dilbilgisi her şeyin anahtarıdır**; hâller sözcük sırasını açıklar.',
        },
        {
          h3: '5. Maruz kalma',
          content:
            'Rusya’da yaşamak süreyi yarıya indirebilir. Hafif maruz kalma: günlük medya, telefon dili Rusça, çevrimiçi konuşma partneri.',
        },
        {
          h3: '6. Yaş',
          content:
            'Çocuklar doğal edinimde avantajlı; yetişkinler dilbilgisini sistematik çalışır. **Verimli çalışan yetişkinler başta çocukları geçebilir.**',
        },
        {
          h3: '7. Motivasyon',
          content:
            'Kişisel neden (partner, iş, edebiyat) sürdürülebilirliği artırır.',
        },
      ],
    },
    {
      h2: 'En büyük zaman tuzağı: dilbilgisinden kaçınmak',
      content:
        'Sık görülen örüntü: 6 ay Duolingo, 2.000 kelime ama « kitabı arkadaşıma verdim » demek için **yönelme hâli** yok. **друг** ezberlenmiş ama **дать** sonrası **другу** bilinmiyor.\n\nRusça hâlleri yalnızca maruz kalarak içselleşmez. **Açıkça çalışıp aktif pratik şart.**\n\n**Ücretsiz pratik testi** tam bunun için: tekrarlı, odaklı çalışma.',
    },
    {
      h2: 'Somut plan: B1 için günde 30 dakika',
      content: 'Yaklaşık **12 ayda** B1 için günlük rutin örneği:',
      table: {
        headers: ['Süre', 'Etkinlik', 'Araç', 'Amaç'],
        rows: [
          ['5 dk', 'Kartları gözden geçir', 'Anki / Memrise', 'Kelime tutma'],
          ['10 dk', 'Dilbilgisi dersi', 'Russian Cases with Anna / Babbel', 'Hâl ve fiil kuralları'],
          ['10 dk', 'Aktif test', 'russiandeclensions.com/practice', 'Çekim pratiği'],
          ['5 dk', 'Oku / dinle', 'News in Slow Russian / kısa metinler', 'Pasif girdi'],
        ],
        caption: 'Örnek 30 dakikalık günlük çalışma',
      },
      bullets: [
        '**Hf. 1–8:** Kiril, yalın ve belirtme, şimdiki zaman',
        '**Hf. 9–16:** ilgi-alma ve bulunma, geçmiş, yaygın edatlar',
        '**Hf. 17–24:** yönelme ve araçlık, görünüşler, basit okuma',
        '**Hf. 25–36:** 6 hâl çoğul, hareket fiilleri, özgün medya',
        '**Hf. 37–52:** doğruluk, kelime hazinesi, düzenli konuşma',
      ],
    },
    {
      h2: 'Yolunda mısınız?',
      content: 'Kilometre taşları:',
      bullets: [
        '**Ay 2:** Kiril akıcı, yalın/belirtme',
        '**Ay 4:** tanıtım, gününü anlatma, basit diyaloglar',
        '**Ay 6:** konuşmada 4+ hâl doğru',
        '**Ay 9:** başlangıç podcast’i — çoğu kelime',
        '**Ay 12:** tanıdık konuda ~10 dk konuşma',
        '**Ay 18:** haber metni — sözlüksüz %80+',
      ],
    },
    {
      h2: 'Sonuç: maraton, sprint değil',
      content:
        'Rusça zaman ister — 6 hâl, 2 görünüş ve kelime hazinesi etrafından kısayol yok. Ama **« bitirmek » zorunda değilsiniz kullanmak için**. 2–3 ayda tabelalar ve yemek; 6 ayda seyahat; 1 yılda gerçek konuşmalar.\n\nTutarlılık hızdan önemlidir. Günde 30 dk, erken dilbilgisi (özellikle hâller), aktif testler.',
    },
  ],
  conclusion: '',
  ctaText: 'Rusça hâllerini şimdi ücretsiz çalış',
  ctaHref: '/practice',
  faq: [
    {
      question: 'İngilizce konuşan biri Rusça için ne kadar süre gerekir?',
      answer:
        'FSI mesleki yeterlilik (B2/C1) için ~1.100 saat yoğun çalışma öngörür. Günde 30 dk bağımsız çalışmayla çoğu öğrenci B1’i 12–14 ayda, B2’yi 18–24 ayda görür.',
    },
    {
      question: 'Rusça diğer dillere göre daha mı zor?',
      answer:
        'FSI IV. kategori: Fransızca, İspanyolca, Almancadan zor; Çince, Arapça, Japoncadan kolay. Ana zorluklar: Kiril (1–2 hafta), 6 dilbilgisel hâl, fiil görünüşü.',
    },
    {
      question: '6 ayda Rusça öğrenebilir miyim?',
      answer:
        'Tutarlı günlük çalışmayla 6 ayda A2 (turist / hayatta kalma) mümkün. Tam konuşma B1 genelde 12+ ay ister.',
    },
    {
      question: 'En hızlı yol nedir?',
      answer:
        'Rusça ortamında maruz kalma + yapılandırılmış dilbilgisi ve aktif pratik (özellikle hâller ve çekimler), günlük aralıklı tekrar kartları, düzenli ana dil konuşuruyla konuşma. Erken dilbilgisi en sık tıkanıklığı önler.',
    },
    {
      question: '6 hâlin hepsini öğrenmem gerekir mi?',
      answer:
        'Evet, sonunda. Kademeli: yalın ve belirtme, sonra ilgi-alma ve bulunma, sonra yönelme ve araçlık. Ücretsiz testimizde her hâl ayrı çalışılabilir.',
    },
  ],
  leadMagnetCta: {
    title: 'Bugün Rusça hâllerini çalışmaya başla',
    description:
      'Hâl sistemi Rusça için en önemli zaman yatırımıdır. Ücretsiz etkileşimli test — 400+ kelime, anında geri bildirim, kayıt yok.',
    ctaText: 'Ücretsiz çekim testini dene →',
    ctaHref: '/practice',
  },
  internalLinks: [
    { href: '/practice', label: 'Ücretsiz Rusça çekim testi' },
    { href: '/practice/accusative', label: 'Belirtme hâli pratiği' },
    { href: '/practice/genitive', label: 'İlgi-alma hâli pratiği' },
    { href: '/practice/dative', label: 'Yönelme hâli pratiği' },
    { href: '/practice/instrumental', label: 'Araçlık hâli pratiği' },
    { href: '/practice/prepositional', label: 'Bulunma hâli pratiği' },
    {
      href: '/learn/articles/russian-cases-explained-beginners-guide',
      label: 'Rusça hâller açıklaması: yeni başlayan rehberi',
    },
    {
      href: '/learn/articles/best-apps-learn-russian-grammar',
      label: 'Rusça dilbilgisi için en iyi uygulamalar',
    },
    { href: '/words', label: '400+ çekim tablosuna göz at' },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rusça öğrenmek ne kadar sürer? Gerçekçi bir zaman çizelgesi',
    description:
      'A1–C2 gerçekçi zaman çizelgesi, FSI, CEFR kilometre taşları, faktörler, günlük plan.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/how-long-learn-russian',
    },
    keywords:
      'rusça ne kadar sürer, rusça öğrenme zaman çizelgesi, rusça saat, FSI rusça',
  },
};
