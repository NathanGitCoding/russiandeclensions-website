import type { LearnArticle } from '../learnArticles';

/** `russian-cases-explained-beginners-guide` makalesinin Türkçe çevirisi (EN kaynak: `learnArticles.ts`). Kiril metinler kaynakla aynen. */
export const russianCasesExplainedBeginnersGuideTr: LearnArticle = {
  slug: 'russian-cases-explained-beginners-guide',
  title:
    'Rus halleri basitçe: Yeni başlayanlar için görsel rehber',
  metaTitle:
    'Rus halleri basitçe: Yeni başlayanlar için görsel rehber | Russian Cases with Anna',
  metaDescription:
    '6 Rus dilbilgisel hali sade Türkçe ile, net örneklerle açıklanır. Yalın, belirtme, ilgi, yönelme, araçlı ve edatlı halleri 10 dakikada anlayın.',
  keywords: [
    'rus halleri açıklama',
    'rus halleri yeni başlayan',
    'rus dilbilgisi halleri basit',
    'rus hallerini anlamak',
    'rus halleri örnekler',
    '6 rus hali',
  ],
  h1: 'Rus halleri basitçe: Yeni başlayanlar için görsel rehber',
  heroImage: {
    src: '/articles/top-10-apps-to-learn-russian-2026.webp',
    alt: 'Yeni başlayanlar için 6 Rus hali basitçe açıklanıyor',
    width: 1200,
    height: 630,
  },
  intro:
    'Rusçada **6 dilbilgisel hal** vardır ve İngilizce konuşanlar için en büyük engel budur. Ama iyi haber şu: Haller göründüğü kadar korkutucu değil. Her hal basit bir soruyu yanıtlar ve **her halin ne işe yaradığını** anladığınızda ekler öğrenmeyi çok kolaylaştırır.\n\nBu rehber **6 Rus halini** **sade Türkçe** ile, her biri için tek bir net örnekle açıklar. Dilbilim jargonu yok, bunaltıcı tablolar yok — yalnızca başlamanız için gerekenler.',
  whatYouLearn: [
    '**Dilbilgisel halin ne olduğu** ve Rusçanın neden kullandığı',
    '**6 halin tamamı** — her biri için basit bir örnek',
    '**Önce hangi halleri öğrenmelisiniz** (yeni başlayanlar için öncelik sırası)',
    '**İsim ekleri nasıl değişir** — sadeleştirilmiş genel bakış',
    '**Nerede pratik yapılır** — ücretsiz quiz ve kaynaklar',
  ],
  leadMagnetCta: {
    title: 'Rus hallerini pratik etmeye hazır mısınız?',
    description:
      'Russian Cases with Anna’yı indirin — Rus çekimlerinde ustalaşmaya %100 adanmış tek uygulama. 128 ders, 136 quiz, 400’den fazla kelime. iOS ve Android’de ücretsiz.',
    ctaText: 'Uygulamayı indir — Ücretsiz',
    ctaHref: '/',
  },
  sections: [
    {
      h2: 'Dilbilgisel hal nedir?',
      content:
        'İngilizcede **sözcük sırası** cümlede kimin ne yaptığını gösterir. “The dog bites the man” ile “The man bites the dog” tamamen farklı anlamlara gelir — özne her zaman önce gelir.\n\nRusça farklı çalışır. Sözcük sırasına güvenmek yerine Rusça, sözcüğün cümledeki rolünü göstermek için **sözcüğün son ekini** değiştirir. Bu farklı ekler **hal** olarak adlandırılır.\n\nŞöyle düşünün: İngilizcede “**I** see **him**” dersiniz (“me see he” değil). “I/me” ve “he/him” rollerine göre biçim değiştirir. Rusça da aynısını yapar — ama dildeki **her isim, sıfat ve zamir** için.\n\nRusçada **6 hal** vardır. Her biri belirli bir soruyu yanıtlar ve belirli bir dilbilgisi rolünü işaretler.',
    },
    {
      h2: '6 Rus hali bir bakışta',
      content:
        'Her hale girmeden önce kısa bir genel bakış. Her hal bir soruyu yanıtlar ve isim sonunu buna göre değiştirir:',
      table: {
        headers: ['Hal', 'Rusça ad', 'Soru', 'Örnek'],
        rows: [
          ['Yalın', 'Именительный', 'Kim? Ne?', 'Кошка спит — Kedi uyuyor'],
          [
            'Belirtme',
            'Винительный',
            'Kimi? Ne? (nesne)',
            'Я вижу кошку — Kediyi görüyorum',
          ],
          [
            'İlgi',
            'Родительный',
            'Kimin? Neyin?',
            'Нет кошки — Kedi yok',
          ],
          ['Yönelme', 'Дательный', 'Kime? Kimin için?', 'Дай кошке — Kediye ver'],
          [
            'Araçlı',
            'Творительный',
            'Kimle? Neyle?',
            'С кошкой — Kediyle',
          ],
          [
            'Edatlı',
            'Предложный',
            'Kimden bahsediliyor? Nerede?',
            'О кошке — Kedi hakkında',
          ],
        ],
        caption:
          'кошка (kedi) ile sorular ve örnekler kullanılarak 6 Rus hali',
        accentColumnIndices: [3],
      },
      bullets: [
        '**кошка** (kedi) sözcüğünün her halde sonunun nasıl değiştiğine dikkat edin: кошка → кошку → кошки → кошке → кошкой → кошке',
        'Bu ek düzenine **çekim** denir — her Rus ismi bunlardan birini izler',
      ],
    },
    {
      h2: 'Hal 1: Yalın (Именительный) — özne',
      content:
        'Yalın hal bir sözcüğün **varsayılan biçimidir** — sözlükte bulduğunuz biçim. **Кто? (Kim?)** ve **Что? (Ne?)** sorularını yanıtlar.\n\nYalın halı cümlenin **öznesi** — eylemi yapan kişi veya şey — için kullanırsınız.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            '**Мама** готовит ужин — **Anne** akşam yemeği pişiriyor\n\n**Книга** лежит на столе — **Kitap** masanın üzerinde\n\n**Студент** читает — **Öğrenci** okuyor',
        },
      ],
      bullets: [
        'Yalın hal **en kolay haldir** — ek değişikliği gerekmez',
        'Her Rus cümlesinde en az bir isim yalın haldedir',
        'Bu biçimi kelime listelerinden zaten biliyorsunuzdur',
      ],
    },
    {
      h2: 'Hal 2: Belirtme (Винительный) — dolaylı olmayan nesne',
      content:
        'Belirtme hali **Кого? (Kimi?)** ve **Что? (Ne?)** sorularını yanıtlar — ama bu kez özne değil, eylemin **nesnesi** olarak. Eylemin uygulandığı şeyi işaret eder.\n\nBelirtme hali **hareket fiilleriyle** yönü (bir yere **doğru** gitmek) belirtmek için de kullanılır.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            'Я вижу **маму** — **Anneyi** görüyorum (мама → маму)\n\nОн читает **книгу** — **Kitabı** okuyor (книга → книгу)\n\nМы идём **в школу** — **Okula** gidiyoruz (школа → школу)',
        },
      ],
      bullets: [
        '**Dişi isimlerde** -а **-у** olur (мама → маму)',
        '**Erkek cansız isimlerde** belirtme hali yalın hal ile aynı görünür (стол → стол)',
        '**Erkek canlı isimlerde** belirtme hali ilgi haline benzer (студент → студента)',
      ],
    },
    {
      h2: 'Hal 3: İlgi (Родительный) — aidiyet ve yokluk',
      content:
        'İlgi hali **Кого? (Kimin?)** ve **Чего? (Neyin?)** sorularını yanıtlar. **Aidiyet** (İngilizcedeki “of” / iyelik gibi), **yokluk** (… yok) ve **miktarlar** halidir.\n\nRusçada en sık kullanılan hallerden biridir — her yerde karşınıza çıkar.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            'Книга **мамы** — **Annemin** kitabı (мама → мамы)\n\nНет **воды** — **Su** yok (вода → воды)\n\nСтакан **молока** — Bir bardak **süt** (молоко → молока)\n\nУ **студента** есть книга — **Öğrencinin** bir kitabı var (студент → студента)',
        },
      ],
      bullets: [
        '**Dişi isimlerde** -а **-ы** veya **-и** olur (мама → мамы, книга → книги)',
        '**Erkek isimlerde** **-а** veya **-я** eklenir (студент → студента, учитель → учителя)',
        '**2–4 sayılarından** ve **нет** (olumsuzluk) sonrasında kullanılır',
      ],
    },
    {
      h2: 'Hal 4: Yönelme (Дательный) — dolaylı nesne',
      content:
        'Yönelme hali **Кому? (Kime?)** ve **Чему? (Neye?)** sorularını yanıtlar. Eylemin **alıcısını** işaret eder — bir şeyin verildiği, söylendiği veya birinin yararına yapıldığı kişi.\n\nYönelme hali **yaş** ve **duygular** hakkındaki yaygın ifadelerde de kullanılır.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            'Я дал книгу **маме** — Kitabı **anneye** verdim (мама → маме)\n\n**Мне** 25 лет — **25 yaşındayım** (я → мне)\n\n**Студенту** нужна помощь — **Öğrencinin** yardıma ihtiyacı var (студент → студенту)',
        },
      ],
      bullets: [
        '**Dişi isimlerde** -а **-е** olur (мама → маме)',
        '**Erkek isimlerde** **-у** veya **-ю** eklenir (студент → студенту)',
        'Yaş ifadelerinde kullanılır: **Мне** 20 лет (kelimesi kelimesine: “bana 20 yıl”)',
      ],
    },
    {
      h2: 'Hal 5: Araçlı (Творительный) — araç ve eşlik',
      content:
        'Araçlı hal **Кем? (Kimle? / Kim tarafından?)** ve **Чем? (Neyle?)** sorularını yanıtlar. Bir şeyi yapmak için kullanılan **aracı veya yolu** ve **eşliği** (biriyle birlikte) tanımlar.\n\n**Olmak** anlamındaki **быть** fiilinden sonra meslekler için de kullanılır.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            'Я пишу **ручкой** — **Kalemle** yazıyorum (ручка → ручкой)\n\nОна работает **учительницей** — **Öğretmen olarak** çalışıyor (учительница → учительницей)\n\nЯ иду **с мамой** — **Annemle** gidiyorum (мама → мамой)',
        },
      ],
      bullets: [
        '**Dişi isimlerde** -а **-ой** veya **-ей** olur (мама → мамой, земля → землёй)',
        '**Erkek isimlerde** **-ом** veya **-ем** eklenir (студент → студентом)',
        'Eşlik için **с** (ile) edatından sonra her zaman kullanılır',
      ],
    },
    {
      h2: 'Hal 6: Edatlı (Предложный) — yer ve konu',
      content:
        'Edatlı hal **О ком? (Kimden bahsediliyor?)** ve **О чём? (Neden bahsediliyor?)** sorularını yanıtlar. Adından da anlaşılacağı gibi **her zaman bir edatla** kullanılır — en sık **в** (içinde), **на** (üzerinde/-de) ve **о** (hakkında).\n\nEdat olmadan hiç görünmeyen tek Rus halidir.',
      subsections: [
        {
          h3: 'Örnekler',
          content:
            'Я живу **в Москве** — **Moskova’da** yaşıyorum (Москва → Москве)\n\nОн думает **о маме** — **Anneyi** düşünüyor (мама → маме)\n\nКнига **на столе** — Kitap **masanın üzerinde** (стол → столе)',
        },
      ],
      bullets: [
        '**Dişi isimlerde** -а **-е** olur (мама → маме, Москва → Москве)',
        '**Erkek isimlerde** **-е** eklenir (стол → столе, студент → студенте)',
        'Edatlı hal ile yönelme hali sıklıkla **aynı ekleri** paylaşır — bağlam ayırır',
      ],
    },
    {
      h2: 'Önce hangi halleri öğrenmelisiniz?',
      content:
        '6 halin hepsini birden ustalaşmanız gerekmez. Sıklık ve zorluğa göre önerilen **öğrenme sırası** şöyledir:',
      bullets: [
        '**1. Yalın** — Bunu zaten biliyorsunuz (sözlük biçimi)',
        '**2. Belirtme** — Basit cümleler için vazgeçilmez (“Ekmek yiyorum”, “Bir köpek görüyorum”)',
        '**3. İlgi** — Çok yaygın (aidiyet, olumsuzluk, miktarlar)',
        '**4. Edatlı** — Görece kolay (her zaman edatla, basit ekler)',
        '**5. Yönelme** — Daha az sık ama önemli (dolaylı nesneler, yaş)',
        '**6. Araçlı** — Günlük konuşmada en az rastlanan, yine de gerekli',
      ],
    },
    {
      h2: 'Şimdi pratik yapmaya başlayın',
      content:
        'Halleri anlamak ilk adımdır. İkincisi **etkin pratik** — doğru biçimleri tekrar tekrar görmek ve seçmek, otomatikleşene kadar.\n\nBaşlamak için:\n\n• russiandeclensions.com/practice adresindeki **ücretsiz çevrim içi çekim quiz**imize girin — hangi halleri çalışacağınızı seçin ve 400’den fazla gerçek Rus isminden 10 çoktan seçmeli soruya yanıt verin.\n\n• russiandeclensions.com/words adresindeki **tam çekim tablolarımıza** göz atın — her sözcüğün 6 halde nasıl değiştiğini görün.\n\n• Yapılandırılmış dilbilgisi dersleri, etkileşimli quizler, aralıklı tekrar ve çevrim dışı erişim için **Russian Cases with Anna** uygulamasını indirin.',
    },
  ],
  conclusion:
    'Rus halleri, cümlede sözcüklerin oynadığı **roller için etiketler**dir. Yalın hal özneyi (eyleyeni), belirtme eylemin hedefini, ilgi aidiyeti, yönelme alıcıyı, araçlı aracı, edatlı hal ise yeri veya konuyu gösterir.\n\n**Her halin ne anlama geldiğini** anladığınızda ekleri öğrenmek örüntü tanıma ve pratik meselesi olur. Tüm ekleri birden ezberlemeye çalışmayın — tek tek öğrenin, doğal gelene kadar pratik edin, sonra sonrakine geçin.',
  conclusionBullets: [
    '**6 hal, 6 rol** — her hal belirli bir soruyu yanıtlar',
    '**Belirtme ve ilgi ile başlayın** — yalından sonra en sık iki hal',
    '**Gerçek kelimelerle pratik yapın** — quiz ve çekim tablolarımızı kullanın',
    '**Bir hal bir seferde** — 6’sını birden üzerinize yüklemeyin',
    '**Düzenlilik kazanır** — günde 10 dakika, haftada bir 2 saatten iyidir',
  ],
  conclusionOutro:
    'Her hali ayrıntılı rehberlerimizle derinleştirin:',
  internalLinks: [
    {
      href: '/learn/lessons/russian-cases-complete-guide',
      label:
        'Rus hallerine tam rehber — 6 hal ayrıntılı',
    },
    {
      href: '/learn/articles/russian-case-endings-cheatsheet',
      label:
        'Rus hal ekleri kopya kağıdı — tüm ekler tek tabloda',
    },
    {
      href: '/practice/accusative',
      label: 'Belirtme halini pratik edin — ücretsiz quiz',
    },
    {
      href: '/practice/genitive',
      label: 'İlgi halini pratik edin — ücretsiz quiz',
    },
    {
      href: '/words',
      label: '400’den fazla Rus kelimeye göz atın — tam çekim tabloları',
    },
  ],
  ctaText: 'Rus hallerini pratik etmeye başlayın',
  ctaHref: '/practice',
  faq: [
    {
      question: 'Rusçada kaç hal vardır?',
      answer:
        'Rusçada **6 dilbilgisel hal** vardır: Yalın (Именительный), Belirtme (Винительный), İlgi (Родительный), Yönelme (Дательный), Araçlı (Творительный) ve Edatlı (Предложный). Her hal, cümledeki rollerini göstermek için isimlerin, sıfatların ve zamirlerin eklerini değiştirir.',
    },
    {
      question: 'Öğrenmesi en zor Rus hali hangisidir?',
      answer:
        'Çoğu öğrenci **ilgi halini** en zor bulur çünkü en çok kullanımı vardır (aidiyet, yokluk, miktarlar, sayılardan sonra, birçok edattan sonra) ve düzensiz çoğul ekleri vardır. Yine de her hal, anadile göre farklı zorluklar taşır.',
    },
    {
      question: 'Gerçekten 6 Rus halinin hepsini öğrenmem gerekir mi?',
      answer:
        'Evet — modern Rusçada 6 hal de aktif kullanılır. Olmadan doğru cümle kuramazsınız. Ama hepsini birden öğrenmeniz gerekmez. **Yalın** ve **belirtme** ile başlayın, diğerlerini kademeli ekleyin.',
    },
    {
      question: 'En kolay Rus hali hangisidir?',
      answer:
        '**Yalın** hal en kolaydır çünkü sözlük biçimidir — ek değişikliği yoktur. Onun ardından **edatlı** hal genelde en kolay sayılır çünkü her zaman bir edatla gelir ve görece basit, tutarlı ekleri vardır (çoğu isim için -е).',
    },
    {
      question: 'Rus hallerini öğrenmek ne kadar sürer?',
      answer:
        'Düzenli günlük pratikle çoğu öğrenci 6 halin temel kavramını **birkaç hafta** içinde anlar ve basit cümlelerde **3–6 ay** içinde rahat kullanır. Tam ustalık (tüm düzensiz biçimler ve çoğul çekimleri) tipik olarak **1–2 yıl** düzenli çalışma gerektirir.',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Rus halleri basitçe: Yeni başlayanlar için görsel rehber',
    description:
      '6 Rus dilbilgisel hali sade Türkçe ile net örneklerle açıklanır. Yalın, belirtme, ilgi, yönelme, araçlı ve edatlı haller kolaylaştırıldı.',
    datePublished: '2026-03-22',
    dateModified: '2026-03-22',
    author: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    publisher: { '@type': 'Organization', name: 'Russian Cases with Anna®' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://russiandeclensions.com/learn/articles/russian-cases-explained-beginners-guide',
    },
    keywords:
      'rus halleri açıklama, rus halleri yeni başlayan, 6 rus hali, rus dilbilgisi halleri basit, rus hallerini anlamak',
  },
};
