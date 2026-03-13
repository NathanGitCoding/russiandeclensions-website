/**
 * Traductions pour la page /landing-cases et ses composants
 */

import type { Language } from '@/data/languages';

/** Langue pour la landing uniquement (inclut ru_ru, non disponible dans l'app) */
export type LandingLanguage = Language | 'ru_ru';

export interface LandingFeature {
  title: string;
  alt: string;
  altBackground?: string;
  description: string;
}

export interface LandingHighlight {
  title: string;
  description: string;
}

export interface LandingTestimonial {
  name: string;
  role: string;
  text: string;
}

export interface LandingTranslations {
  navbar: {
    brand: string;
    home: string;
    features: string;
    about: string;
    learn: string;
    getApp: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    appStoreAria: string;
    playStoreAria: string;
  };
  features: LandingFeature[];
  featuresSection: {
    title: string;
    subtitle: string;
  };
  highlights: LandingHighlight[];
  testimonials: {
    title: string;
    subtitle: string;
    items: LandingTestimonial[];
  };
  about: {
    ourStory: string;
    title: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    description: string;
    appStoreAria: string;
    playStoreAria: string;
  };
  footer: {
    brand: string;
    tagline: string;
    learn: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

const enFeatures: LandingFeature[] = [
  {
    title: '128 russian Grammar Lessons',
    alt: 'Russian Cases with Anna - structured lessons by grammatical case',
    altBackground: '',
    description:
      'Browse russian lessons by case — Nominative, Accusative, and more. Study in 5-minute sessions during your commute. Learn anywhere without an internet connection.',
  },
  {
    title: '136 Interactive Flash Quizzes',
    alt: 'Interactive Russian grammar quiz - multiple choice exercises',
    altBackground: 'Vocabulary flashcards in Russian Cases with Anna',
    description:
      'Stop memorizing, start practicing. Test your knowledge with multiple-choice exercises. Practice until russian cases become second nature.',
  },
  {
    title: 'Vocabulary Flashcards',
    alt: 'Russian vocabulary flashcards - 400 most frequent words',
    description:
      'Build your russian vocabulary with smart flashcards. Master the 400 most frequent and useful words. Improve your russian listening skills with native pronunciation.',
  },
  {
    title: 'Celebrate Your Progress',
    alt: 'Progress tracking with star rewards in Russian Cases with Anna',
    description:
      'Get instant feedback with detailed explanations. See your accuracy, earn stars, and learn from mistakes with useful hints from your Russian teacher Anna.',
  },
];

const frFeatures: LandingFeature[] = [
  {
    title: '128 leçons de grammaire russe',
    alt: 'Russian Cases with Anna - leçons structurées par cas grammatical',
    altBackground: '',
    description:
      'Parcourez les leçons de russe par cas — Nominatif, Accusatif, etc. Étudiez en sessions de 5 minutes pendant vos trajets. Apprenez partout sans connexion.',
  },
  {
    title: '136 quiz interactifs',
    alt: 'Quiz de grammaire russe interactif - exercices à choix multiples',
    altBackground: 'Cartes vocabulaire dans Russian Cases with Anna',
    description:
      "Arrêtez de mémoriser, pratiquez. Testez vos connaissances avec des exercices à choix multiples. Pratiquez jusqu'à ce que les cas russes deviennent naturels.",
  },
  {
    title: 'Cartes vocabulaire',
    alt: 'Cartes vocabulaire russe - 400 mots les plus fréquents',
    description:
      'Construisez votre vocabulaire russe avec des cartes intelligentes. Maîtrisez les 400 mots les plus fréquents et utiles. Améliorez votre compréhension du russe avec la prononciation native.',
  },
  {
    title: 'Célébrez vos progrès',
    alt: 'Suivi des progrès avec étoiles dans Russian Cases with Anna',
    description:
      'Obtenez un retour instantané avec des explications détaillées. Voyez votre précision, gagnez des étoiles, et apprenez de vos erreurs avec Anna, votre professeure de russe.',
  },
];

const enHighlights: LandingHighlight[] = [
  {
    title: '128 russian Grammar Lessons',
    description:
      'Browse russian lessons by case — Nominative, Accusative, and more. Study in 5-minute sessions during your commute. Learn anywhere without an internet connection.',
  },
  {
    title: 'Interactive Quizzes',
    description: 'Practice each Russian case with exercises that build intuitive understanding.',
  },
  {
    title: 'Core Russian Vocabulary',
    description: '400 essential words for Russian grammar practice.',
  },
  {
    title: 'Native Speaker Audio',
    description:
      'Listen to correct Russian pronunciation and improve your listening and speaking skills.',
  },
  {
    title: 'Offline Access',
    description: 'Learn Russian grammar anywhere, anytime.',
  },
  {
    title: 'Progress Tracking',
    description: 'Track your progress across all 6 Russian cases.',
  },
];

const frHighlights: LandingHighlight[] = [
  {
    title: '128 leçons de grammaire russe',
    description:
      'Parcourez les leçons de russe par cas — Nominatif, Accusatif, etc. Étudiez en sessions de 5 minutes pendant vos trajets. Apprenez partout sans connexion.',
  },
  {
    title: 'Quiz interactifs',
    description: 'Pratiquez chaque cas russe avec des exercices qui renforcent votre intuition.',
  },
  {
    title: 'Vocabulaire essentiel',
    description: '400 mots indispensables pour la pratique de la grammaire russe.',
  },
  {
    title: 'Audio natif',
    description: 'Écoutez la prononciation russe correcte et améliorez votre compréhension orale.',
  },
  {
    title: 'Mode hors ligne',
    description: 'Apprenez la grammaire russe partout, à tout moment.',
  },
  {
    title: 'Suivi des progrès',
    description: 'Suivez votre progression dans les 6 cas russes.',
  },
];

const enTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Project Manager',
    text: 'I made rapid progress from day one. The app is fun to use and keeps me motivated.',
  },
  {
    name: 'Emma Bernard',
    role: 'Student',
    text: 'Perfect for organizing my study sessions. The progress tracking helps me stay productive and motivated. Plus, Anna the teacher is adorable!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Russian teacher',
    text: 'As a Russian teacher, I recommend this app to all my students. The grammar structure and case system are perfectly explained.',
  },
];

const frTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Chef de projet',
    text: "J'ai progressé rapidement dès le premier jour. L'app est agréable à utiliser et me motive.",
  },
  {
    name: 'Emma Bernard',
    role: 'Étudiante',
    text: "Parfait pour organiser mes sessions d'étude. Le suivi des progrès m'aide à rester productive et motivée. Et Anna la professeure est adorable !",
  },
  {
    name: 'Svetlana Volkova',
    role: 'Professeur de russe',
    text: 'En tant que professeure de russe, je recommande cette app à tous mes élèves. La structure grammaticale et le système des cas sont parfaitement expliqués.',
  },
];

const enAboutParagraphs = [
  "I'm French, and I fell in love with a Russian woman.",
  'We found a common language to talk, but I wanted more than that. I wanted to understand her world, her humor, her family. So I started learning Russian.',
  'Then the complexity of declensions hit me. Six cases. Endless exceptions. Countless tables to memorize.',
  "I wanted to read Dostoevsky, but I couldn't even order a coffee without offending a grammar rule.",
  'I was ready to quit.',
  "I couldn't find a tool that made the process feel natural — so I decided to build one myself. Quickly, I made so much progress that I knew it was worth sharing.",
  "If you've ever wanted to go beyond basic phrases and actually enter the language — this app is for you.",
];

const frAboutParagraphs = [
  "Je suis français, et je suis tombé amoureux d'une Russe.",
  "Nous avons trouvé une langue commune pour communiquer, mais je voulais plus. Je voulais comprendre son monde, son humour, sa famille. Alors j'ai commencé à apprendre le russe.",
  "Puis la complexité des déclinaisons m'a frappé. Six cas. D'innombrables exceptions. Des tables à mémoriser.",
  'Je voulais lire Dostoïevski, mais je ne pouvais même pas commander un café sans enfreindre une règle de grammaire.',
  "J'étais prêt à abandonner.",
  "Je n'ai pas trouvé d'outil qui rende le processus naturel — alors j'ai décidé d'en créer un. Rapidement, j'ai tellement progressé que j'ai su que ça valait la peine de le partager.",
  'Si vous avez toujours voulu aller au-delà des phrases de base et entrer vraiment dans la langue — cette app est pour vous.',
];

const trFeatures: LandingFeature[] = [
  {
    title: '128 Rusça Gramer Dersi',
    alt: 'Russian Cases with Anna - gramer durumuna göre yapılandırılmış dersler',
    altBackground: '',
    description:
      'Rusça derslere duruma göre göz atın — Nominatif, Akkusatif ve daha fazlası. Yolculuğunuzda 5 dakikalık oturumlarda çalışın. İnternet olmadan her yerde öğrenin.',
  },
  {
    title: '136 İnteraktif Hızlı Quiz',
    alt: 'İnteraktif Rusça gramer quizi - çoktan seçmeli alıştırmalar',
    altBackground: "Russian Cases with Anna'da kelime kartları",
    description:
      'Ezberlemeyi bırakın, pratik yapmaya başlayın. Çoktan seçmeli alıştırmalarla bilginizi test edin. Rusça durumlar ikinci doğanız olana kadar pratik yapın.',
  },
  {
    title: 'Kelime Kartları',
    alt: 'Rusça kelime kartları - 400 en sık kullanılan kelime',
    description:
      'Akıllı kartlarla Rusça kelime dağarcığınızı oluşturun. 400 en sık ve faydalı kelimeye hakim olun. Rusça dinleme becerinizi yerli telaffuzla geliştirin.',
  },
  {
    title: 'İlerlemenizi Kutlayın',
    alt: "Russian Cases with Anna'da yıldız ödülleri ile ilerleme takibi",
    description:
      "Detaylı açıklamalarla anında geri bildirim alın. Doğruluğunuzu görün, yıldız kazanın ve Rusça öğretmeniniz Anna'nın faydalı ipuçlarıyla hatalarınızdan öğrenin.",
  },
];

const deFeatures: LandingFeature[] = [
  {
    title: '128 russische Grammatik-Lektionen',
    alt: 'Russian Cases with Anna - strukturierte Lektionen nach grammatikalischem Fall',
    altBackground: '',
    description:
      'Durchsuchen Sie russische Lektionen nach Fall — Nominativ, Akkusativ und mehr. Lernen Sie in 5-Minuten-Sitzungen unterwegs. Überall ohne Internetverbindung lernen.',
  },
  {
    title: '136 Interaktive Schnell-Quizze',
    alt: 'Interaktives Russisch-Grammatik-Quiz - Multiple-Choice-Übungen',
    altBackground: 'Vokabelkarten in Russian Cases with Anna',
    description:
      'Aufhören auswendig zu lernen, anfangen zu üben. Testen Sie Ihr Wissen mit Multiple-Choice-Übungen. Üben Sie, bis die russischen Fälle zur zweiten Natur werden.',
  },
  {
    title: 'Vokabelkarten',
    alt: 'Russische Vokabelkarten - 400 häufigste Wörter',
    description:
      'Erweitern Sie Ihren russischen Wortschatz mit intelligenten Karten. Meistern Sie die 400 häufigsten und nützlichsten Wörter. Verbessern Sie Ihr russisches Hörverständnis mit Muttersprachler-Aussprache.',
  },
  {
    title: 'Feiern Sie Ihren Fortschritt',
    alt: 'Fortschrittsverfolgung mit Sternen in Russian Cases with Anna',
    description:
      'Erhalten Sie sofortiges Feedback mit detaillierten Erklärungen. Sehen Sie Ihre Genauigkeit, verdienen Sie Sterne und lernen Sie aus Fehlern mit nützlichen Tipps von Ihrer Russisch-Lehrerin Anna.',
  },
];

const plFeatures: LandingFeature[] = [
  {
    title: '128 lekcji gramatyki rosyjskiej',
    alt: 'Russian Cases with Anna - lekcje według przypadków gramatycznych',
    altBackground: '',
    description:
      'Przeglądaj lekcje rosyjskiego według przypadku — Mianownik, Biernik i więcej. Ucz się w 5-minutowych sesjach w drodze. Ucz się wszędzie bez połączenia internetowego.',
  },
  {
    title: '136 Interaktywne Szybkie Quizy',
    alt: 'Interaktywny quiz gramatyki rosyjskiej - ćwiczenia wielokrotnego wyboru',
    altBackground: 'Fiszek słownictwa w Russian Cases with Anna',
    description:
      'Przestań wkuwać, zacznij ćwiczyć. Sprawdź swoją wiedzę ćwiczeniami wielokrotnego wyboru. Ćwicz, aż rosyjskie przypadki staną się drugą naturą.',
  },
  {
    title: 'Fiszki Słownictwa',
    alt: 'Rosyjskie fiszki - 400 najczęstszych słów',
    description:
      'Buduj słownictwo rosyjskie dzięki inteligentnym fiszkom. Opanuj 400 najczęściej używanych słów. Popraw rozumienie ze słuchu po rosyjsku dzięki natywnej wymowie.',
  },
  {
    title: 'Świętuj Swoje Postępy',
    alt: 'Śledzenie postępów z gwiazdkami w Russian Cases with Anna',
    description:
      'Otrzymuj natychmiastową informację zwrotną z szczegółowymi wyjaśnieniami. Zobacz swoją dokładność, zdobywaj gwiazdki i ucz się na błędach dzięki wskazówkom od Anny, twojej nauczycielki rosyjskiego.',
  },
];

const ruFeatures: LandingFeature[] = [
  {
    title: '128 уроков русской грамматики',
    alt: 'Russian Cases with Anna - уроки по грамматическим падежам',
    altBackground: '',
    description:
      'Просматривайте уроки по падежам — именительный, винительный и другие. Занимайтесь по 5 минут в день по дороге. Учитесь без интернета где угодно.',
  },
  {
    title: '136 Интерактивных быстрых квизов',
    alt: 'Интерактивный квиз по русской грамматике - упражнения с выбором ответа',
    altBackground: 'Карточки слов в Russian Cases with Anna',
    description:
      'Хватит зубрить — пора практиковаться. Проверяйте знания в тестах с выбором ответа. Тренируйтесь, пока русские падежи не станут привычкой.',
  },
  {
    title: 'Карточки слов',
    alt: 'Русские карточки - 400 самых частых слов',
    description:
      'Пополняйте словарный запас русского языка с умными карточками. Освойте 400 самых частых и полезных слов. Улучшайте восприятие русского на слух с нативной озвучкой.',
  },
  {
    title: 'Отмечайте свой прогресс',
    alt: 'Отслеживание прогресса со звёздами в Russian Cases with Anna',
    description:
      'Получайте мгновенную обратную связь с подробными объяснениями. Смотрите точность, зарабатывайте звёзды и учитесь на ошибках с подсказками от учительницы Анны.',
  },
];

const trHighlights: LandingHighlight[] = [
  {
    title: '128 Rusça Gramer Dersi',
    description:
      'Rusça derslere duruma göre göz atın — Nominatif, Akkusatif ve daha fazlası. Yolculuğunuzda 5 dakikalık oturumlarda çalışın. İnternet olmadan her yerde öğrenin.',
  },
  {
    title: 'İnteraktif Quizler',
    description: 'Her Rusça durumunu sezgisel anlayış oluşturan alıştırmalarla pratik edin.',
  },
  { title: 'Temel Rusça Kelimeler', description: 'Rusça gramer pratiği için 400 temel kelime.' },
  {
    title: 'Yerli Konuşmacı Seslendirmesi',
    description:
      'Doğru Rusça telaffuzunu dinleyin ve dinleme ve konuşma becerilerinizi geliştirin.',
  },
  { title: 'Çevrimdışı Erişim', description: 'Rusça gramerini her yerde, her zaman öğrenin.' },
  { title: 'İlerleme Takibi', description: '6 Rusça durumundaki ilerlemenizi takip edin.' },
];

const deHighlights: LandingHighlight[] = [
  {
    title: '128 russische Grammatik-Lektionen',
    description:
      'Durchsuchen Sie russische Lektionen nach Fall — Nominativ, Akkusativ und mehr. Lernen Sie in 5-Minuten-Sitzungen unterwegs. Überall ohne Internetverbindung lernen.',
  },
  {
    title: 'Interaktive Quizze',
    description: 'Üben Sie jeden russischen Fall mit Übungen, die intuitives Verständnis aufbauen.',
  },
  {
    title: 'Russischer Grundwortschatz',
    description: '400 grundlegende Wörter für Russisch-Grammatik-Praxis.',
  },
  {
    title: 'Muttersprachler-Audio',
    description:
      'Hören Sie korrekte russische Aussprache und verbessern Sie Hör- und Sprechfähigkeiten.',
  },
  { title: 'Offline-Zugang', description: 'Lernen Sie Russisch-Grammatik überall, jederzeit.' },
  {
    title: 'Fortschrittsverfolgung',
    description: 'Verfolgen Sie Ihren Fortschritt in allen 6 russischen Fällen.',
  },
];

const plHighlights: LandingHighlight[] = [
  {
    title: '128 lekcji gramatyki rosyjskiej',
    description:
      'Przeglądaj lekcje rosyjskiego według przypadku — Mianownik, Biernik i więcej. Ucz się w 5-minutowych sesjach w drodze. Ucz się wszędzie bez połączenia internetowego.',
  },
  {
    title: 'Interaktywne quizy',
    description: 'Ćwicz każdy rosyjski przypadek z ćwiczeniami budującymi intuicję.',
  },
  {
    title: 'Podstawowe słownictwo',
    description: '400 podstawowych słów do praktyki gramatyki rosyjskiej.',
  },
  {
    title: 'Nagrania native speakera',
    description: 'Słuchaj poprawnej wymowy rosyjskiej i poprawiaj rozumienie ze słuchu.',
  },
  { title: 'Tryb offline', description: 'Ucz się gramatyki rosyjskiej wszędzie i o każdej porze.' },
  {
    title: 'Śledzenie postępów',
    description: 'Śledź postępy we wszystkich 6 rosyjskich przypadkach.',
  },
];

const ruHighlights: LandingHighlight[] = [
  {
    title: '128 уроков русской грамматики',
    description:
      'Просматривайте уроки по падежам — именительный, винительный и другие. Занимайтесь по 5 минут в день по дороге. Учитесь без интернета где угодно.',
  },
  {
    title: 'Интерактивные квизы',
    description: 'Тренируйте каждый падеж с упражнениями, развивающими интуицию.',
  },
  { title: 'Базовая лексика', description: '400 основных слов для практики русской грамматики.' },
  {
    title: 'Аудио носителей',
    description: 'Слушайте правильное произношение и улучшайте восприятие на слух.',
  },
  { title: 'Офлайн-режим', description: 'Учите русскую грамматику где угодно и когда угодно.' },
  { title: 'Отслеживание прогресса', description: 'Отслеживайте прогресс по всем 6 падежам.' },
];

const trTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Proje Yöneticisi',
    text: 'İlk günden hızlı ilerleme kaydettim. Uygulama kullanımı eğlenceli ve beni motive ediyor.',
  },
  {
    name: 'Emma Bernard',
    role: 'Öğrenci',
    text: 'Çalışma oturumlarımı organize etmek için mükemmel. İlerleme takibi üretken ve motive kalmama yardımcı oluyor. Artı, öğretmen Anna çok sevimli!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Rusça öğretmeni',
    text: 'Rusça öğretmeni olarak bu uygulamayı tüm öğrencilerime öneriyorum. Gramer yapısı ve durum sistemi mükemmel açıklanmış.',
  },
];

const deTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Projektmanager',
    text: 'Vom ersten Tag an habe ich schnelle Fortschritte gemacht. Die App macht Spaß und hält mich motiviert.',
  },
  {
    name: 'Emma Bernard',
    role: 'Studentin',
    text: 'Perfekt zur Organisation meiner Lernsitzungen. Die Fortschrittsverfolgung hält mich produktiv und motiviert. Außerdem ist Anna die Lehrerin entzückend!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Russischlehrerin',
    text: 'Als Russischlehrerin empfehle ich diese App all meinen Schülern. Die Grammatikstruktur und das Kasussystem sind perfekt erklärt.',
  },
];

const plTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Kierownik projektu',
    text: 'Od pierwszego dnia robiłem szybkie postępy. Aplikacja jest przyjemna w użyciu i motywuje mnie.',
  },
  {
    name: 'Emma Bernard',
    role: 'Studentka',
    text: 'Idealna do organizacji sesji nauki. Śledzenie postępów pomaga mi być produktywną i zmotywowaną. Plus Anna, nauczycielka, jest urocza!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Nauczycielka rosyjskiego',
    text: 'Jako nauczycielka rosyjskiego polecam tę aplikację wszystkim moim uczniom. Struktura gramatyczna i system przypadków są perfekcyjnie wyjaśnione.',
  },
];

const ruTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Менеджер проектов',
    text: 'Я быстро продвинулся с первого дня. Приложение приятно использовать и поддерживает мотивацию.',
  },
  {
    name: 'Emma Bernard',
    role: 'Студентка',
    text: 'Идеально для организации занятий. Отслеживание прогресса помогает оставаться продуктивной и мотивированной. Плюс учительница Анна — очаровательна!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Преподаватель русского',
    text: 'Как преподаватель русского рекомендую это приложение всем ученикам. Грамматика и система падежей объяснены идеально.',
  },
];

const trAboutParagraphs = [
  'Ben Fransızım ve bir Rus kadına aşık oldum.',
  'Konuşmak için ortak bir dil bulduk ama daha fazlasını istedim. Dünyasını, mizahını, ailesini anlamak istedim. Bu yüzden Rusça öğrenmeye başladım.',
  'Sonra çekimlerin karmaşıklığı beni vurdu. Altı durum. Bitmeyen istisnalar. Ezberlenecek sayısız tablo.',
  'Dostoyevski okumak istiyordum ama bir dilbilgisi kuralını ihlal etmeden kahve bile sipariş edemiyordum.',
  'Vazgeçmeye hazırdım.',
  'Süreci doğal hissettiren bir araç bulamadım — bu yüzden kendim yapmaya karar verdim. Hızlıca o kadar ilerleme kaydettim ki paylaşmaya değer olduğunu anladım.',
  'Temel ifadelerin ötesine geçip gerçekten dile girmek istediyseniz — bu uygulama sizin için.',
];

const deAboutParagraphs = [
  'Ich bin Franzose und habe mich in eine Russin verliebt.',
  'Wir fanden eine gemeinsame Sprache zum Reden, aber ich wollte mehr. Ich wollte ihre Welt, ihren Humor, ihre Familie verstehen. Also begann ich Russisch zu lernen.',
  'Dann traf mich die Komplexität der Deklinationen. Sechs Fälle. Endlose Ausnahmen. Unzählige Tabellen zum Auswendiglernen.',
  'Ich wollte Dostojewski lesen, konnte aber nicht einmal einen Kaffee bestellen, ohne eine Grammatikregel zu verletzen.',
  'Ich war bereit aufzugeben.',
  'Ich fand kein Werkzeug, das den Prozess natürlich fühlte — also beschloss ich, selbst eines zu bauen. Schnell machte ich so große Fortschritte, dass ich wusste, es war wert, es zu teilen.',
  'Wenn Sie jemals über Grundphrasen hinausgehen und wirklich in die Sprache eintreten wollten — diese App ist für Sie.',
];

const plAboutParagraphs = [
  'Jestem Francuzem i zakochałem się w Rosjance.',
  'Znaleźliśmy wspólny język do rozmowy, ale chciałem więcej. Chciałem zrozumieć jej świat, humor, rodzinę. Więc zacząłem uczyć się rosyjskiego.',
  'Potem uderzyła mnie złożoność deklinacji. Sześć przypadków. Nieskończone wyjątki. Niezliczone tabele do zapamiętania.',
  'Chciałem czytać Dostojewskiego, ale nie mogłem nawet zamówić kawy bez złamania zasady gramatycznej.',
  'Byłem gotów zrezygnować.',
  'Nie znalazłem narzędzia, które sprawiałoby, że proces jest naturalny — więc postanowiłem stworzyć własne. Szybko zrobiłem takie postępy, że wiedziałem, że warto się tym podzielić.',
  'Jeśli kiedykolwiek chciałeś wyjść poza podstawowe zwroty i naprawdę wejść w język — ta aplikacja jest dla Ciebie.',
];

const ruAboutParagraphs = [
  'Я француз и влюбился в русскую женщину.',
  'Мы нашли общий язык для общения, но мне хотелось большего. Понять её мир, юмор, семью. Поэтому я начал учить русский.',
  'Затем меня накрыла сложность склонений. Шесть падежей. Бесконечные исключения. Бесчисленные таблицы.',
  'Я хотел читать Достоевского, но не мог заказать кофе, не нарушив правило грамматики.',
  'Я был готов сдаться.',
  'Я не нашёл инструмент, который делал бы процесс естественным — и решил создать свой. Быстро добился такого прогресса, что понял: этим стоит поделиться.',
  'Если вы хотели выйти за рамки базовых фраз и по-настоящему войти в язык — это приложение для вас.',
];

const translations: Record<LandingLanguage, LandingTranslations> = {
  en_en: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Home',
      features: 'Features',
      about: 'About',
      learn: 'Free Grammar Lessons',
      getApp: 'Get the App',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Master Russian grammar in 5 minutes a day',
      subtitle:
        'The russian grammar app that brings clarity to cases and declensions. Never look at a declension table again.',
      appStoreAria: 'Download Russian Cases with Anna on the App Store',
      playStoreAria: 'Get Russian Cases with Anna on Google Play',
    },
    features: enFeatures,
    featuresSection: {
      title: 'Master the 6 cases of Russian grammar with Anna!',
      subtitle:
        'The essential Russian grammar app to learn Russian cases — Nominative, Genitive, Dative, Accusative, Instrumental and Prepositional.',
    },
    highlights: enHighlights,
    testimonials: {
      title: 'What our users say',
      subtitle: 'Hear it from them.',
      items: enTestimonials,
    },
    about: {
      ourStory: 'Our story',
      title: 'A love story that became an app',
      paragraphs: enAboutParagraphs,
    },
    cta: {
      title: 'Ready to get started?',
      description:
        'Download now and start your journey to mastering Russian grammar today! Try it for free.',
      appStoreAria: 'Download Russian Cases with Anna on the App Store',
      playStoreAria: 'Get Russian Cases with Anna on Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Practice Russian cases on your phone',
      learn: 'Learn',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      copyright: '© 2026 Russian Cases with Anna®. All rights reserved.',
    },
  },
  fr_fr: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Accueil',
      features: 'Fonctionnalités',
      about: 'À propos',
      learn: 'Leçons de grammaire gratuites',
      getApp: "Télécharger l'app",
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Maîtrisez la grammaire russe en 5 minutes par jour',
      subtitle:
        "L'app de grammaire russe qui clarifie les cas et les déclinaisons. Finies les tables de déclinaison.",
      appStoreAria: "Télécharger Russian Cases with Anna sur l'App Store",
      playStoreAria: 'Obtenir Russian Cases with Anna sur Google Play',
    },
    features: frFeatures,
    featuresSection: {
      title: 'Maîtrisez les 6 cas de la grammaire russe avec Anna !',
      subtitle:
        "L'app essentielle pour apprendre les cas russes — Nominatif, Génitif, Datif, Accusatif, Instrumental et Prépositionnel.",
    },
    highlights: frHighlights,
    testimonials: {
      title: 'Ce que disent nos utilisateurs',
      subtitle: 'Écoutez-les.',
      items: frTestimonials,
    },
    about: {
      ourStory: 'Notre histoire',
      title: "Une histoire d'amour devenue une app",
      paragraphs: frAboutParagraphs,
    },
    cta: {
      title: 'Prêt à commencer ?',
      description:
        'Téléchargez maintenant et commencez à maîtriser la grammaire russe ! Essai gratuit.',
      appStoreAria: "Télécharger Russian Cases with Anna sur l'App Store",
      playStoreAria: 'Obtenir Russian Cases with Anna sur Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Pratiquez les cas russes sur votre téléphone',
      learn: 'Apprendre',
      privacy: 'Confidentialité',
      terms: 'CGU',
      contact: 'Contact',
      copyright: '© 2026 Russian Cases with Anna®. Tous droits réservés.',
    },
  },
  tr_tr: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Ana Sayfa',
      features: 'Özellikler',
      about: 'Hakkında',
      learn: 'Ücretsiz Gramer Dersleri',
      getApp: 'Uygulamayı İndir',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Rusça gramerini günde 5 dakikada öğrenin',
      subtitle:
        'Rusça durumları ve çekimleri netleştiren gramer uygulaması. Çekim tablolarına veda edin.',
      appStoreAria: "Russian Cases with Anna'yı App Store'dan indirin",
      playStoreAria: "Russian Cases with Anna'yı Google Play'den edinin",
    },
    features: trFeatures,
    featuresSection: {
      title: 'Anna ile Rusça gramerinin 6 durumunda ustalaşın!',
      subtitle:
        'Rusça durumlarını öğrenmek için temel uygulama — Nominatif, Genitif, Datif, Akkusatif, Enstrumental ve Lokatif.',
    },
    highlights: trHighlights,
    testimonials: {
      title: 'Kullanıcılarımız ne diyor',
      subtitle: 'Onlardan dinleyin.',
      items: trTestimonials,
    },
    about: {
      ourStory: 'Hikayemiz',
      title: 'Bir aşk hikayesi uygulamaya dönüştü',
      paragraphs: trAboutParagraphs,
    },
    cta: {
      title: 'Başlamaya hazır mısınız?',
      description:
        'Hemen indirin ve Rusça gramerinde ustalaşma yolculuğunuza bugün başlayın! Ücretsiz deneyin.',
      appStoreAria: "Russian Cases with Anna'yı App Store'dan indirin",
      playStoreAria: "Russian Cases with Anna'yı Google Play'den edinin",
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Rusça halleri telefonunuzda pratik yapın',
      learn: 'Öğren',
      privacy: 'Gizlilik',
      terms: 'Koşullar',
      contact: 'İletişim',
      copyright: '© 2026 Russian Cases with Anna®. Tüm hakları saklıdır.',
    },
  },
  de_de: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Startseite',
      features: 'Funktionen',
      about: 'Über uns',
      learn: 'Kostenlose Grammatik-Lektionen',
      getApp: 'App herunterladen',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Meistern Sie russische Grammatik in 5 Minuten pro Tag',
      subtitle:
        'Die Russisch-Grammatik-App, die Klarheit in Fälle und Deklinationen bringt. Schluss mit Deklinationstabellen.',
      appStoreAria: 'Russian Cases with Anna im App Store herunterladen',
      playStoreAria: 'Russian Cases with Anna bei Google Play holen',
    },
    features: deFeatures,
    featuresSection: {
      title: 'Meistern Sie die 6 Fälle der russischen Grammatik mit Anna!',
      subtitle:
        'Die essentielle Russisch-Grammatik-App für die Fälle — Nominativ, Genitiv, Dativ, Akkusativ, Instrumental und Präpositiv.',
    },
    highlights: deHighlights,
    testimonials: {
      title: 'Was unsere Nutzer sagen',
      subtitle: 'Hören Sie von ihnen.',
      items: deTestimonials,
    },
    about: {
      ourStory: 'Unsere Geschichte',
      title: 'Eine Liebesgeschichte, die zur App wurde',
      paragraphs: deAboutParagraphs,
    },
    cta: {
      title: 'Bereit loszulegen?',
      description:
        'Laden Sie jetzt herunter und starten Sie heute Ihre Reise zur russischen Grammatik! Kostenlos testen.',
      appStoreAria: 'Russian Cases with Anna im App Store herunterladen',
      playStoreAria: 'Russian Cases with Anna bei Google Play holen',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Russische Fälle auf dem Handy üben',
      learn: 'Lernen',
      privacy: 'Datenschutz',
      terms: 'AGB',
      contact: 'Kontakt',
      copyright: '© 2026 Russian Cases with Anna®. Alle Rechte vorbehalten.',
    },
  },
  pl_pl: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Strona główna',
      features: 'Funkcje',
      about: 'O nas',
      learn: 'Darmowe lekcje gramatyki',
      getApp: 'Pobierz aplikację',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Opanuj gramatykę rosyjską w 5 minut dziennie',
      subtitle:
        'Aplikacja do gramatyki rosyjskiej, która wyjaśnia przypadki i deklinacje. Koniec z tabelami odmian.',
      appStoreAria: 'Pobierz Russian Cases with Anna z App Store',
      playStoreAria: 'Pobierz Russian Cases with Anna z Google Play',
    },
    features: plFeatures,
    featuresSection: {
      title: 'Opanuj 6 przypadków gramatyki rosyjskiej z Anną!',
      subtitle:
        'Niezbędna aplikacja do nauki przypadków rosyjskich — Mianownik, Dopełniacz, Celownik, Biernik, Narzędnik i Miejscownik.',
    },
    highlights: plHighlights,
    testimonials: {
      title: 'Co mówią nasi użytkownicy',
      subtitle: 'Posłuchaj ich.',
      items: plTestimonials,
    },
    about: {
      ourStory: 'Nasza historia',
      title: 'Historia miłosna, która stała się aplikacją',
      paragraphs: plAboutParagraphs,
    },
    cta: {
      title: 'Gotowy na start?',
      description:
        'Pobierz teraz i zacznij swoją drogę do opanowania gramatyki rosyjskiej! Wypróbuj za darmo.',
      appStoreAria: 'Pobierz Russian Cases with Anna z App Store',
      playStoreAria: 'Pobierz Russian Cases with Anna z Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Ćwicz rosyjskie przypadki na telefonie',
      learn: 'Nauka',
      privacy: 'Prywatność',
      terms: 'Regulamin',
      contact: 'Kontakt',
      copyright: '© 2026 Russian Cases with Anna®. Wszelkie prawa zastrzeżone.',
    },
  },
  ru_ru: {
    navbar: {
      brand: 'Russian Cases with Anna®',
      home: 'Главная',
      features: 'Функции',
      about: 'О нас',
      learn: 'Бесплатные уроки грамматики',
      getApp: 'Скачать приложение',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Освойте русскую грамматику за 5 минут в день',
      subtitle:
        'Приложение по русской грамматике, которое объясняет падежи и склонения. Забудьте о таблицах.',
      appStoreAria: 'Скачать Russian Cases with Anna в App Store',
      playStoreAria: 'Скачать Russian Cases with Anna в Google Play',
    },
    features: ruFeatures,
    featuresSection: {
      title: 'Освойте 6 падежей русской грамматики с Анной!',
      subtitle:
        'Необходимое приложение для изучения падежей — именительный, родительный, дательный, винительный, творительный и предложный.',
    },
    highlights: ruHighlights,
    testimonials: {
      title: 'Что говорят пользователи',
      subtitle: 'Послушайте их.',
      items: ruTestimonials,
    },
    about: {
      ourStory: 'Наша история',
      title: 'История любви, ставшая приложением',
      paragraphs: ruAboutParagraphs,
    },
    cta: {
      title: 'Готовы начать?',
      description:
        'Скачайте сейчас и начните путь к освоению русской грамматики! Попробуйте бесплатно.',
      appStoreAria: 'Скачать Russian Cases with Anna в App Store',
      playStoreAria: 'Скачать Russian Cases with Anna в Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Практикуйте русские падежи на телефоне',
      learn: 'Обучение',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      contact: 'Контакты',
      copyright: '© 2026 Russian Cases with Anna®. Все права защищены.',
    },
  },
};

export function getLandingTranslations(language: LandingLanguage): LandingTranslations {
  return translations[language] ?? translations.en_en;
}
