/**
 * Traductions pour la page d'accueil (/) et ses composants
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
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
  };
  navbar: {
    brand: string;
    declinaisons: string;
    home: string;
    features: string;
    about: string;
    learn: string;
    practice: string;
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
    exploreLabel: string;
    learnLink: string;
    wordsLink: string;
    practiceLink: string;
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
    practice: string;
    words: string;
    blog: string;
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

const esFeatures: LandingFeature[] = [
  {
    title: '128 lecciones de gramática rusa',
    alt: 'Russian Cases with Anna - lecciones estructuradas por caso gramatical',
    altBackground: '',
    description:
      'Explora lecciones de ruso por caso — Nominativo, Acusativo y más. Estudia en sesiones de 5 minutos durante tu trayecto. Aprende en cualquier lugar sin conexión.',
  },
  {
    title: '136 cuestionarios interactivos',
    alt: 'Cuestionario interactivo de gramática rusa - ejercicios de opción múltiple',
    altBackground: 'Tarjetas de vocabulario en Russian Cases with Anna',
    description:
      'Deja de memorizar, empieza a practicar. Pon a prueba tus conocimientos con ejercicios de opción múltiple. Practica hasta que los casos rusos sean una segunda naturaleza.',
  },
  {
    title: 'Tarjetas de vocabulario',
    alt: 'Tarjetas de vocabulario ruso - 400 palabras más frecuentes',
    description:
      'Construye tu vocabulario ruso con tarjetas inteligentes. Domina las 400 palabras más frecuentes y útiles. Mejora tu comprensión auditiva con pronunciación nativa.',
  },
  {
    title: 'Celebra tu progreso',
    alt: 'Seguimiento del progreso con estrellas en Russian Cases with Anna',
    description:
      'Obtén feedback instantáneo con explicaciones detalladas. Ve tu precisión, gana estrellas y aprende de tus errores con consejos útiles de Anna, tu profesora de ruso.',
  },
];

const esHighlights: LandingHighlight[] = [
  {
    title: '128 lecciones de gramática rusa',
    description:
      'Explora lecciones de ruso por caso — Nominativo, Acusativo y más. Estudia en sesiones de 5 minutos durante tu trayecto. Aprende en cualquier lugar sin conexión.',
  },
  {
    title: 'Cuestionarios interactivos',
    description: 'Practica cada caso ruso con ejercicios que desarrollan tu comprensión intuitiva.',
  },
  {
    title: 'Vocabulario esencial',
    description: '400 palabras fundamentales para practicar la gramática rusa.',
  },
  {
    title: 'Audio de hablantes nativos',
    description: 'Escucha la pronunciación correcta del ruso y mejora tu comprensión y expresión oral.',
  },
  {
    title: 'Modo sin conexión',
    description: 'Aprende gramática rusa en cualquier lugar y momento.',
  },
  {
    title: 'Seguimiento del progreso',
    description: 'Sigue tu progreso en los 6 casos rusos.',
  },
];

const esTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Director de proyectos',
    text: 'Avancé rápidamente desde el primer día. La app es divertida de usar y me mantiene motivado.',
  },
  {
    name: 'Emma Bernard',
    role: 'Estudiante',
    text: 'Perfecta para organizar mis sesiones de estudio. El seguimiento del progreso me ayuda a ser productiva y motivada. ¡Y Anna la profesora es encantadora!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Profesora de ruso',
    text: 'Como profesora de ruso, recomiendo esta app a todos mis alumnos. La estructura gramatical y el sistema de casos están perfectamente explicados.',
  },
];

const esAboutParagraphs = [
  'Soy francés y me enamoré de una mujer rusa.',
  'Encontramos un idioma común para hablar, pero yo quería más. Quería entender su mundo, su humor, su familia. Así que empecé a aprender ruso.',
  'Entonces me golpeó la complejidad de las declinaciones. Seis casos. Excepciones sin fin. Innumerables tablas que memorizar.',
  'Quería leer a Dostoievski, pero no podía ni pedir un café sin violar una regla gramatical.',
  'Estaba a punto de rendirme.',
  'No encontré ninguna herramienta que hiciera el proceso natural — así que decidí crear una. Rápidamente progresé tanto que supe que valía la pena compartirla.',
  'Si alguna vez quisiste ir más allá de las frases básicas y entrar de verdad en el idioma — esta app es para ti.',
];

const itFeatures: LandingFeature[] = [
  {
    title: '128 lezioni di grammatica russa',
    alt: 'Russian Cases with Anna - lezioni strutturate per caso grammaticale',
    altBackground: '',
    description:
      'Sfoglia le lezioni di russo per caso — Nominativo, Accusativo e altro. Studia in sessioni di 5 minuti durante il tragitto. Impara ovunque senza connessione.',
  },
  {
    title: '136 quiz interattivi',
    alt: 'Quiz interattivo di grammatica russa - esercizi a scelta multipla',
    altBackground: 'Flashcard lessicali in Russian Cases with Anna',
    description:
      'Smetti di memorizzare, inizia a esercitarti. Metti alla prova le tue conoscenze con esercizi a scelta multipla. Esercitati finché i casi russi non diventano una seconda natura.',
  },
  {
    title: 'Flashcard lessicali',
    alt: 'Flashcard lessicali russe - 400 parole più frequenti',
    description:
      'Costruisci il tuo lessico russo con flashcard intelligenti. Padroneggia le 400 parole più frequenti e utili. Migliora la comprensione orale con pronuncia nativa.',
  },
  {
    title: 'Celebra i tuoi progressi',
    alt: 'Monitoraggio dei progressi con stelle in Russian Cases with Anna',
    description:
      'Ricevi feedback immediato con spiegazioni dettagliate. Vedi la tua precisione, guadagna stelle e impara dagli errori con utili consigli di Anna, la tua insegnante di russo.',
  },
];

const itHighlights: LandingHighlight[] = [
  {
    title: '128 lezioni di grammatica russa',
    description:
      'Sfoglia le lezioni di russo per caso — Nominativo, Accusativo e altro. Studia in sessioni di 5 minuti durante il tragitto. Impara ovunque senza connessione.',
  },
  {
    title: 'Quiz interattivi',
    description: 'Esercitati su ogni caso russo con esercizi che sviluppano la comprensione intuitiva.',
  },
  {
    title: 'Lessico essenziale',
    description: '400 parole fondamentali per praticare la grammatica russa.',
  },
  {
    title: 'Audio di madrelingua',
    description: 'Ascolta la pronuncia corretta del russo e migliora comprensione e espressione orale.',
  },
  {
    title: 'Modalità offline',
    description: 'Impara la grammatica russa ovunque e in qualsiasi momento.',
  },
  {
    title: 'Monitoraggio dei progressi',
    description: 'Segui i tuoi progressi in tutti e 6 i casi russi.',
  },
];

const itTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Project Manager',
    text: 'Ho fatto rapidi progressi dal primo giorno. L\'app è piacevole da usare e mi mantiene motivato.',
  },
  {
    name: 'Emma Bernard',
    role: 'Studentessa',
    text: 'Perfetta per organizzare le mie sessioni di studio. Il monitoraggio dei progressi mi aiuta a restare produttiva e motivata. In più Anna, l\'insegnante, è adorabile!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Insegnante di russo',
    text: 'Come insegnante di russo, consiglio questa app a tutti i miei studenti. La struttura grammaticale e il sistema dei casi sono spiegati perfettamente.',
  },
];

const itAboutParagraphs = [
  'Sono francese e mi sono innamorato di una donna russa.',
  'Abbiamo trovato una lingua comune per parlare, ma io volevo di più. Volevo capire il suo mondo, il suo umorismo, la sua famiglia. Così ho iniziato a studiare russo.',
  'Poi la complessità delle declinazioni mi ha colpito. Sei casi. Eccezioni infinite. Innumerevoli tabelle da memorizzare.',
  'Volevo leggere Dostoevskij, ma non riuscivo neanche a ordinare un caffè senza violare una regola grammaticale.',
  'Ero pronto a arrendermi.',
  'Non ho trovato nessuno strumento che rendesse il processo naturale — così ho deciso di crearne uno io. Rapidamente ho fatto così tanti progressi che ho capito che valeva la pena condividerlo.',
  'Se hai mai voluto andare oltre le frasi di base ed entrare veramente nella lingua — quest\'app è per te.',
];

const ptFeatures: LandingFeature[] = [
  {
    title: '128 lições de gramática russa',
    alt: 'Russian Cases with Anna - lições estruturadas por caso gramatical',
    altBackground: '',
    description:
      'Explora lições de russo por caso — Nominativo, Acusativo e mais. Estuda em sessões de 5 minutos durante o trajeto. Aprende em qualquer lugar sem ligação.',
  },
  {
    title: '136 questionários interativos',
    alt: 'Questionário interativo de gramática russa - exercícios de escolha múltipla',
    altBackground: 'Cartões de vocabulário em Russian Cases with Anna',
    description:
      'Deixa de memorizar, começa a praticar. Põe à prova os teus conhecimentos com exercícios de escolha múltipla. Pratica até os casos russos se tornarem uma segunda natureza.',
  },
  {
    title: 'Cartões de vocabulário',
    alt: 'Cartões de vocabulário russo - 400 palavras mais frequentes',
    description:
      'Constrói o teu vocabulário russo com cartões inteligentes. Domina as 400 palavras mais frequentes e úteis. Melhora a compreensão oral com pronúncia nativa.',
  },
  {
    title: 'Celebra o teu progresso',
    alt: 'Acompanhamento do progresso com estrelas em Russian Cases with Anna',
    description:
      'Obtém feedback instantâneo com explicações detalhadas. Vê a tua precisão, ganha estrelas e aprende com os teus erros com dicas úteis da Anna, a tua professora de russo.',
  },
];

const ptHighlights: LandingHighlight[] = [
  {
    title: '128 lições de gramática russa',
    description:
      'Explora lições de russo por caso — Nominativo, Acusativo e mais. Estuda em sessões de 5 minutos durante o trajeto. Aprende em qualquer lugar sem ligação.',
  },
  {
    title: 'Questionários interativos',
    description: 'Pratica cada caso russo com exercícios que desenvolvem a compreensão intuitiva.',
  },
  {
    title: 'Vocabulário essencial',
    description: '400 palavras fundamentais para praticar a gramática russa.',
  },
  {
    title: 'Áudio de falantes nativos',
    description: 'Ouve a pronúncia correta do russo e melhora a compreensão e expressão oral.',
  },
  {
    title: 'Modo offline',
    description: 'Aprende gramática russa em qualquer lugar e momento.',
  },
  {
    title: 'Acompanhamento do progresso',
    description: 'Segue o teu progresso nos 6 casos russos.',
  },
];

const ptTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Gestor de projeto',
    text: 'Fiz progressos rápidos desde o primeiro dia. A app é divertida de usar e mantém-me motivado.',
  },
  {
    name: 'Emma Bernard',
    role: 'Estudante',
    text: 'Perfeita para organizar as minhas sessões de estudo. O acompanhamento do progresso ajuda-me a manter-me produtiva e motivada. E a professora Anna é adorável!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Professora de russo',
    text: 'Como professora de russo, recomendo esta app a todos os meus alunos. A estrutura gramatical e o sistema de casos estão perfeitamente explicados.',
  },
];

const ptAboutParagraphs = [
  'Sou francês e apaixonei-me por uma mulher russa.',
  'Encontrámos uma língua comum para falar, mas eu queria mais. Queria entender o seu mundo, o seu humor, a sua família. Por isso comecei a aprender russo.',
  'Depois a complexidade das declinações atingiu-me. Seis casos. Exceções intermináveis. Inúmeras tabelas para memorizar.',
  'Queria ler Dostoievski, mas nem conseguia pedir um café sem violar uma regra gramatical.',
  'Estava pronto para desistir.',
  'Não encontrei nenhuma ferramenta que tornasse o processo natural — por isso decidi criar uma. Rapidamente fiz tantos progressos que soube que valia a pena partilhar.',
  'Se alguma vez quiseste ir além das frases básicas e entrar verdadeiramente na língua — esta app é para ti.',
];

const nlFeatures: LandingFeature[] = [
  {
    title: '128 Russische grammatica-lessen',
    alt: 'Russian Cases with Anna - gestructureerde lessen per grammaticaal geval',
    altBackground: '',
    description:
      'Blader door Russische lessen per geval — Nominatief, Accusatief en meer. Studeer in sessies van 5 minuten onderweg. Leer overal zonder internetverbinding.',
  },
  {
    title: '136 Interactieve quizzen',
    alt: 'Interactieve Russische grammatica-quiz - meerkeuzeoefeningen',
    altBackground: 'Vocabulaire-kaarten in Russian Cases with Anna',
    description:
      'Stop met memoriseren, begin met oefenen. Test je kennis met meerkeuzeoefeningen. Oefen tot Russische gevallen een tweede natuur worden.',
  },
  {
    title: 'Vocabulaire-kaarten',
    alt: 'Russische vocabulaire-kaarten - 400 meest voorkomende woorden',
    description:
      'Bouw je Russische vocabulaire op met slimme kaarten. Beheers de 400 meest voorkomende en nuttige woorden. Verbeter je luistervaardigheid met moedertaalsprekers-uitspraak.',
  },
  {
    title: 'Vier je voortgang',
    alt: 'Voortgangsregistratie met sterren in Russian Cases with Anna',
    description:
      'Ontvang directe feedback met gedetailleerde uitleg. Zie je nauwkeurigheid, verdien sterren en leer van je fouten met nuttige tips van Anna, je Russische lerares.',
  },
];

const nlHighlights: LandingHighlight[] = [
  {
    title: '128 Russische grammatica-lessen',
    description:
      'Blader door Russische lessen per geval — Nominatief, Accusatief en meer. Studeer in sessies van 5 minuten onderweg. Leer overal zonder internetverbinding.',
  },
  {
    title: 'Interactieve quizzen',
    description: 'Oefen elk Russisch geval met oefeningen die intuïtief begrip opbouwen.',
  },
  {
    title: 'Essentieel vocabulaire',
    description: '400 fundamentele woorden om Russische grammatica te oefenen.',
  },
  {
    title: 'Audio van moedertaalsprekers',
    description: 'Luister naar de juiste Russische uitspraak en verbeter je luister- en spreekvaardigheid.',
  },
  {
    title: 'Offline-toegang',
    description: 'Leer Russische grammatica overal, altijd.',
  },
  {
    title: 'Voortgangsregistratie',
    description: 'Volg je voortgang in alle 6 Russische gevallen.',
  },
];

const nlTestimonials: LandingTestimonial[] = [
  {
    name: 'William Oxman',
    role: 'Projectmanager',
    text: 'Ik maakte vanaf dag één snelle vorderingen. De app is leuk om te gebruiken en houdt me gemotiveerd.',
  },
  {
    name: 'Emma Bernard',
    role: 'Studente',
    text: 'Perfect om mijn studiedagen te organiseren. De voortgangsregistratie helpt me productief en gemotiveerd te blijven. Plus Anna, de lerares, is charmant!',
  },
  {
    name: 'Svetlana Volkova',
    role: 'Russisch lerares',
    text: 'Als Russisch lerares beveel ik deze app aan bij al mijn studenten. De grammaticale structuur en het gevalssysteem zijn perfect uitgelegd.',
  },
];

const nlAboutParagraphs = [
  'Ik ben Frans en werd verliefd op een Russische vrouw.',
  'We vonden een gemeenschappelijke taal om te praten, maar ik wilde meer. Ik wilde haar wereld, haar humor, haar familie begrijpen. Dus begon ik Russisch te leren.',
  'Toen trof de complexiteit van de verbuigingen me. Zes gevallen. Eindeloze uitzonderingen. Ontelbare tabellen om te memoriseren.',
  'Ik wilde Dostojevski lezen, maar kon nog niet eens een koffie bestellen zonder een grammaticale regel te overtreden.',
  'Ik was klaar om op te geven.',
  'Ik vond geen tool die het proces natuurlijk aanvoelde — dus besloot ik er zelf een te bouwen. Snel maakte ik zoveel vorderingen dat ik wist dat het het delen waard was.',
  'Als je ooit verder wilde gaan dan basiszinnen en echt de taal wilde betreden — deze app is voor jou.',
];

const translations: Record<LandingLanguage, LandingTranslations> = {
  en_en: {
    metadata: {
      title: 'Russian Cases with Anna® - Learn Russian Grammar',
      description:
        'Download Russian Cases with Anna® – the #1 mobile app for Russian declensions. Interactive tables, quizzes, offline. Free download on App Store & Google Play.',
      ogDescription:
        'Master Russian grammar in 5 minutes a day. The app that brings clarity to cases and declensions.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Declension tables',
      home: 'App',
      features: 'Features',
      about: 'About',
      learn: 'Free Grammar Lessons',
      practice: 'Practice',
      getApp: 'Get the app for free',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'The App to finally master Russian Declensions',
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
      exploreLabel: 'Explore our free resources:',
      learnLink: 'Grammar lessons',
      wordsLink: 'Word declensions',
      practiceLink: 'Practice quiz',
    },
    cta: {
      title: 'Ready to Stop Struggling with Russian Cases?',
      description:
        'Download now and start your journey to mastering Russian grammar today! Try it for free.',
      appStoreAria: 'Download Russian Cases with Anna on the App Store',
      playStoreAria: 'Get Russian Cases with Anna on Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Practice Russian cases on your phone',
      learn: 'Learn',
      practice: 'Practice',
      words: 'Declensions',
      blog: 'Blog',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
      copyright: '© 2026 Russian Cases with Anna®. All rights reserved.',
    },
  },
  fr_fr: {
    metadata: {
      title: 'Russian Cases with Anna® - Apprendre la grammaire russe',
      description:
        'Téléchargez Russian Cases with Anna® – l\'app mobile n°1 pour les déclinaisons russes. Tableaux interactifs, quiz, mode hors ligne. Téléchargement gratuit sur App Store et Google Play.',
      ogDescription:
        'Maîtrisez la grammaire russe en 5 minutes par jour. L\'app qui apporte la clarté aux cas et déclinaisons.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Tables de déclinaisons',
      home: 'App',
      features: 'Fonctionnalités',
      about: 'À propos',
      learn: 'Leçons de grammaire gratuites',
      practice: 'Entraînement',
      getApp: "Obtenez l'app gratuitement",
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: "L'app pour enfin maîtriser les déclinaisons russes",
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
      exploreLabel: 'Découvrez nos ressources gratuites :',
      learnLink: 'Leçons de grammaire',
      wordsLink: 'Déclinaisons des mots',
      practiceLink: 'Quiz de pratique',
    },
    cta: {
      title: 'Prêt à en finir avec les cas russes ?',
      description:
        'Téléchargez maintenant et commencez à maîtriser la grammaire russe ! Essai gratuit.',
      appStoreAria: "Télécharger Russian Cases with Anna sur l'App Store",
      playStoreAria: 'Obtenir Russian Cases with Anna sur Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Pratiquez les cas russes sur votre téléphone',
      learn: 'Apprendre',
      practice: 'Entraînement',
      words: 'Déclinaisons',
      blog: 'Blog',
      privacy: 'Confidentialité',
      terms: 'CGU',
      contact: 'Contact',
      copyright: '© 2026 Russian Cases with Anna®. Tous droits réservés.',
    },
  },
  tr_tr: {
    metadata: {
      title: 'Russian Cases with Anna® - Rusça grameri öğrenin',
      description:
        "Russian Cases with Anna®'ı indirin – Rusça çekimler için 1 numaralı mobil uygulama. İnteraktif tablolar, quizler, çevrimdışı. App Store ve Google Play'de ücretsiz indirin.",
      ogDescription:
        'Günde 5 dakikada Rusça gramerinde ustalaşın. Durumları ve çekimleri netleştiren uygulama.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Çekim tabloları',
      home: 'App',
      features: 'Özellikler',
      about: 'Hakkında',
      learn: 'Ücretsiz Gramer Dersleri',
      practice: 'Alıştırma',
      getApp: "Uygulamayı ücretsiz indirin",
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Sonunda Rusça çekimlere hakim olacak uygulama',
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
      exploreLabel: 'Ücretsiz kaynaklarımızı keşfedin:',
      learnLink: 'Gramer dersleri',
      wordsLink: 'Kelime çekimleri',
      practiceLink: 'Alıştırma testi',
    },
    cta: {
      title: 'Rusça hallerle mücadeleye son vermeye hazır mısınız?',
      description:
        'Hemen indirin ve Rusça gramerinde ustalaşma yolculuğunuza bugün başlayın! Ücretsiz deneyin.',
      appStoreAria: "Russian Cases with Anna'yı App Store'dan indirin",
      playStoreAria: "Russian Cases with Anna'yı Google Play'den edinin",
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Rusça halleri telefonunuzda pratik yapın',
      learn: 'Öğren',
      practice: 'Alıştırma',
      words: 'Çekimler',
      blog: 'Blog',
      privacy: 'Gizlilik',
      terms: 'Koşullar',
      contact: 'İletişim',
      copyright: '© 2026 Russian Cases with Anna®. Tüm hakları saklıdır.',
    },
  },
  de_de: {
    metadata: {
      title: 'Russian Cases with Anna® - Russische Grammatik lernen',
      description:
        'Laden Sie Russian Cases with Anna® herunter – die #1 Mobile-App für russische Deklinationen. Interaktive Tabellen, Quiz, Offline. Kostenlos im App Store & Google Play.',
      ogDescription:
        'Meistern Sie die russische Grammatik in 5 Minuten pro Tag. Die App, die Klarheit in Fälle und Deklinationen bringt.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Deklinationstabellen',
      home: 'App',
      features: 'Funktionen',
      about: 'Über uns',
      learn: 'Kostenlose Grammatik-Lektionen',
      practice: 'Übung',
      getApp: 'App kostenlos herunterladen',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Die App, um russische Deklinationen endlich zu meistern',
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
      exploreLabel: 'Entdecken Sie unsere kostenlosen Ressourcen:',
      learnLink: 'Grammatik-Lektionen',
      wordsLink: 'Wortdeklinationen',
      practiceLink: 'Übungsquiz',
    },
    cta: {
      title: 'Bereit, den Kampf mit russischen Fällen zu beenden?',
      description:
        'Laden Sie jetzt herunter und starten Sie heute Ihre Reise zur russischen Grammatik! Kostenlos testen.',
      appStoreAria: 'Russian Cases with Anna im App Store herunterladen',
      playStoreAria: 'Russian Cases with Anna bei Google Play holen',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Russische Fälle auf dem Handy üben',
      learn: 'Lernen',
      practice: 'Übung',
      words: 'Deklinationen',
      blog: 'Blog',
      privacy: 'Datenschutz',
      terms: 'AGB',
      contact: 'Kontakt',
      copyright: '© 2026 Russian Cases with Anna®. Alle Rechte vorbehalten.',
    },
  },
  pl_pl: {
    metadata: {
      title: 'Russian Cases with Anna® - Nauka gramatyki rosyjskiej',
      description:
        'Pobierz Russian Cases with Anna® – aplikację mobilną nr 1 do rosyjskich odmian. Interaktywne tabele, quizy, tryb offline. Darmowe pobieranie w App Store i Google Play.',
      ogDescription:
        'Opanuj gramatykę rosyjską w 5 minut dziennie. Aplikacja, która wyjaśnia przypadki i deklinacje.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Tabele odmian',
      home: 'App',
      features: 'Funkcje',
      about: 'O nas',
      learn: 'Darmowe lekcje gramatyki',
      practice: 'Ćwiczenia',
      getApp: 'Pobierz aplikację za darmo',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Aplikacja, dzięki której w końcu opanujesz rosyjskie odmiany',
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
      exploreLabel: 'Odkryj nasze darmowe zasoby:',
      learnLink: 'Lekcje gramatyki',
      wordsLink: 'Odmiany słów',
      practiceLink: 'Quiz praktyczny',
    },
    cta: {
      title: 'Gotowy, by skończyć z problemami przypadków?',
      description:
        'Pobierz teraz i zacznij swoją drogę do opanowania gramatyki rosyjskiej! Wypróbuj za darmo.',
      appStoreAria: 'Pobierz Russian Cases with Anna z App Store',
      playStoreAria: 'Pobierz Russian Cases with Anna z Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Ćwicz rosyjskie przypadki na telefonie',
      learn: 'Nauka',
      practice: 'Ćwiczenia',
      words: 'Odmiany',
      blog: 'Blog',
      privacy: 'Prywatność',
      terms: 'Regulamin',
      contact: 'Kontakt',
      copyright: '© 2026 Russian Cases with Anna®. Wszelkie prawa zastrzeżone.',
    },
  },
  es_es: {
    metadata: {
      title: 'Russian Cases with Anna® - Aprende gramática rusa',
      description:
        'Descarga Russian Cases with Anna® – la app móvil nº1 para las declinaciones rusas. Tablas interactivas, cuestionarios, modo offline. Descarga gratuita en App Store y Google Play.',
      ogDescription:
        'Domina la gramática rusa en 5 minutos al día. La app que aporta claridad a los casos y declinaciones.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Tablas de declinación',
      home: 'App',
      features: 'Funcionalidades',
      about: 'Sobre nosotros',
      learn: 'Lecciones de gramática gratis',
      practice: 'Práctica',
      getApp: 'Descarga la app gratis',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'La app para dominar las declinaciones rusas de una vez',
      subtitle:
        'La app de gramática rusa que clarifica los casos y declinaciones. Olvídate de las tablas de declinación.',
      appStoreAria: 'Descargar Russian Cases with Anna en App Store',
      playStoreAria: 'Obtener Russian Cases with Anna en Google Play',
    },
    features: esFeatures,
    featuresSection: {
      title: '¡Domina los 6 casos de la gramática rusa con Anna!',
      subtitle:
        'La app esencial para aprender los casos rusos — Nominativo, Genitivo, Dativo, Acusativo, Instrumental y Preposicional.',
    },
    highlights: esHighlights,
    testimonials: {
      title: 'Lo que dicen nuestros usuarios',
      subtitle: 'Escúchalos.',
      items: esTestimonials,
    },
    about: {
      ourStory: 'Nuestra historia',
      title: 'Una historia de amor que se convirtió en una app',
      paragraphs: esAboutParagraphs,
      exploreLabel: 'Explora nuestros recursos gratuitos:',
      learnLink: 'Lecciones de gramática',
      wordsLink: 'Declinaciones de palabras',
      practiceLink: 'Cuestionario de práctica',
    },
    cta: {
      title: '¿Listo para dejar de sufrir con los casos rusos?',
      description:
        '¡Descarga ahora y empieza tu camino hacia el dominio de la gramática rusa! Pruébalo gratis.',
      appStoreAria: 'Descargar Russian Cases with Anna en App Store',
      playStoreAria: 'Obtener Russian Cases with Anna en Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Practica los casos rusos en tu teléfono',
      learn: 'Aprender',
      practice: 'Práctica',
      words: 'Declinaciones',
      blog: 'Blog',
      privacy: 'Privacidad',
      terms: 'Términos',
      contact: 'Contacto',
      copyright: '© 2026 Russian Cases with Anna®. Todos los derechos reservados.',
    },
  },
  it_it: {
    metadata: {
      title: 'Russian Cases with Anna® - Impara la grammatica russa',
      description:
        'Scarica Russian Cases with Anna® – l\'app mobile n°1 per le declinazioni russe. Tabelle interattive, quiz, offline. Download gratuito su App Store e Google Play.',
      ogDescription:
        'Padroneggia la grammatica russa in 5 minuti al giorno. L\'app che porta chiarezza ai casi e alle declinazioni.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Tabelle di declinazione',
      home: 'App',
      features: 'Funzionalità',
      about: 'Chi siamo',
      learn: 'Lezioni di grammatica gratuite',
      practice: 'Esercizi',
      getApp: 'Scarica l\'app gratuitamente',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'L\'app per padroneggiare finalmente le declinazioni russe',
      subtitle:
        'L\'app di grammatica russa che porta chiarezza ai casi e alle declinazioni. Basta con le tabelle di declinazione.',
      appStoreAria: 'Scarica Russian Cases with Anna sull\'App Store',
      playStoreAria: 'Ottieni Russian Cases with Anna su Google Play',
    },
    features: itFeatures,
    featuresSection: {
      title: 'Padroneggia i 6 casi della grammatica russa con Anna!',
      subtitle:
        'L\'app essenziale per imparare i casi russi — Nominativo, Genitivo, Dativo, Accusativo, Strumentale e Preposizionale.',
    },
    highlights: itHighlights,
    testimonials: {
      title: 'Cosa dicono i nostri utenti',
      subtitle: 'Ascoltali.',
      items: itTestimonials,
    },
    about: {
      ourStory: 'La nostra storia',
      title: 'Una storia d\'amore diventata un\'app',
      paragraphs: itAboutParagraphs,
      exploreLabel: 'Esplora le nostre risorse gratuite:',
      learnLink: 'Lezioni di grammatica',
      wordsLink: 'Declinazioni delle parole',
      practiceLink: 'Quiz di esercizio',
    },
    cta: {
      title: 'Pronto a smettere di lottare con i casi russi?',
      description:
        'Scarica ora e inizia il tuo percorso verso la padronanza della grammatica russa! Provala gratuitamente.',
      appStoreAria: 'Scarica Russian Cases with Anna sull\'App Store',
      playStoreAria: 'Ottieni Russian Cases with Anna su Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Esercitati con i casi russi sul tuo telefono',
      learn: 'Impara',
      practice: 'Esercizi',
      words: 'Declinazioni',
      blog: 'Blog',
      privacy: 'Privacy',
      terms: 'Termini',
      contact: 'Contatti',
      copyright: '© 2026 Russian Cases with Anna®. Tutti i diritti riservati.',
    },
  },
  pt_pt: {
    metadata: {
      title: 'Russian Cases with Anna® - Aprende gramática russa',
      description:
        'Descarrega Russian Cases with Anna® – a app móvel nº1 para declinações russas. Tabelas interativas, questionários, offline. Download gratuito na App Store e Google Play.',
      ogDescription:
        'Domina a gramática russa em 5 minutos por dia. A app que traz clareza aos casos e declinações.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Tabelas de declinação',
      home: 'App',
      features: 'Funcionalidades',
      about: 'Sobre nós',
      learn: 'Lições de gramática grátis',
      practice: 'Prática',
      getApp: 'Descarrega a app grátis',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'A app para finalmente dominar as declinações russas',
      subtitle:
        'A app de gramática russa que esclarece os casos e declinações. Esquece as tabelas de declinação.',
      appStoreAria: 'Descarregar Russian Cases with Anna na App Store',
      playStoreAria: 'Obter Russian Cases with Anna no Google Play',
    },
    features: ptFeatures,
    featuresSection: {
      title: 'Domina os 6 casos da gramática russa com a Anna!',
      subtitle:
        'A app essencial para aprender os casos russos — Nominativo, Genitivo, Dativo, Acusativo, Instrumental e Preposicional.',
    },
    highlights: ptHighlights,
    testimonials: {
      title: 'O que dizem os nossos utilizadores',
      subtitle: 'Ouve-os.',
      items: ptTestimonials,
    },
    about: {
      ourStory: 'A nossa história',
      title: 'Uma história de amor que se tornou numa app',
      paragraphs: ptAboutParagraphs,
      exploreLabel: 'Explora os nossos recursos gratuitos:',
      learnLink: 'Lições de gramática',
      wordsLink: 'Declinações de palavras',
      practiceLink: 'Questionário de prática',
    },
    cta: {
      title: 'Pronto para deixar de lutar com os casos russos?',
      description:
        'Descarrega agora e começa a dominar a gramática russa! Experimenta grátis.',
      appStoreAria: 'Descarregar Russian Cases with Anna na App Store',
      playStoreAria: 'Obter Russian Cases with Anna no Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Pratica os casos russos no teu telemóvel',
      learn: 'Aprender',
      practice: 'Prática',
      words: 'Declinações',
      blog: 'Blog',
      privacy: 'Privacidade',
      terms: 'Termos',
      contact: 'Contacto',
      copyright: '© 2026 Russian Cases with Anna®. Todos os direitos reservados.',
    },
  },
  nl_nl: {
    metadata: {
      title: 'Russian Cases with Anna® - Leer Russische grammatica',
      description:
        'Download Russian Cases with Anna® – de #1 mobiele app voor Russische verbuigingen. Interactieve tabellen, quizzen, offline. Gratis download op App Store en Google Play.',
      ogDescription:
        'Beheers Russische grammatica in 5 minuten per dag. De app die helderheid brengt in gevallen en verbuigingen.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Verbuigingstabellen',
      home: 'App',
      features: 'Functies',
      about: 'Over ons',
      learn: 'Gratis grammatica-lessen',
      practice: 'Oefenen',
      getApp: 'Download de app gratis',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'De app om eindelijk Russische verbuigingen te beheersen',
      subtitle:
        'De Russische grammatica-app die helderheid brengt in gevallen en verbuigingen. Nooit meer naar een verbuigingstabel kijken.',
      appStoreAria: 'Download Russian Cases with Anna in de App Store',
      playStoreAria: 'Haal Russian Cases with Anna op Google Play',
    },
    features: nlFeatures,
    featuresSection: {
      title: 'Beheers de 6 gevallen van Russische grammatica met Anna!',
      subtitle:
        'De essentiële Russische grammatica-app om Russische gevallen te leren — Nominatief, Genitief, Datief, Accusatief, Instrumentaal en Prepositioneel.',
    },
    highlights: nlHighlights,
    testimonials: {
      title: 'Wat onze gebruikers zeggen',
      subtitle: 'Hoor het van hen.',
      items: nlTestimonials,
    },
    about: {
      ourStory: 'Ons verhaal',
      title: 'Een liefdesverhaal dat een app werd',
      paragraphs: nlAboutParagraphs,
      exploreLabel: 'Ontdek onze gratis bronnen:',
      learnLink: 'Grammatica-lessen',
      wordsLink: 'Woordverbuigingen',
      practiceLink: 'Oefenquiz',
    },
    cta: {
      title: 'Klaar om te stoppen met worstelen met Russische gevallen?',
      description:
        'Download nu en begin vandaag je reis naar het beheersen van Russische grammatica! Probeer gratis.',
      appStoreAria: 'Download Russian Cases with Anna in de App Store',
      playStoreAria: 'Haal Russian Cases with Anna op Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Oefen Russische gevallen op je telefoon',
      learn: 'Leren',
      practice: 'Oefenen',
      words: 'Verbuigingen',
      blog: 'Blog',
      privacy: 'Privacy',
      terms: 'Voorwaarden',
      contact: 'Contact',
      copyright: '© 2026 Russian Cases with Anna®. Alle rechten voorbehouden.',
    },
  },
  ru_ru: {
    metadata: {
      title: 'Russian Cases with Anna® - Изучайте русскую грамматику',
      description:
        'Скачайте Russian Cases with Anna® – приложение №1 для русских склонений. Интерактивные таблицы, викторины, офлайн. Бесплатная загрузка в App Store и Google Play.',
      ogDescription:
        'Освойте русскую грамматику за 5 минут в день. Приложение, которое объясняет падежи и склонения.',
    },
    navbar: {
      brand: 'Russian Cases with Anna®',
      declinaisons: 'Таблицы склонений',
      home: 'App',
      features: 'Функции',
      about: 'О нас',
      learn: 'Бесплатные уроки грамматики',
      practice: 'Практика',
      getApp: 'Скачать приложение бесплатно',
    },
    hero: {
      tagline: 'Russian Cases with Anna®',
      title: 'Приложение, чтобы наконец освоить русские склонения',
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
      exploreLabel: 'Наши бесплатные материалы:',
      learnLink: 'Уроки грамматики',
      wordsLink: 'Склонения слов',
      practiceLink: 'Тренировочный тест',
    },
    cta: {
      title: 'Готовы перестать мучиться с падежами?',
      description:
        'Скачайте сейчас и начните путь к освоению русской грамматики! Попробуйте бесплатно.',
      appStoreAria: 'Скачать Russian Cases with Anna в App Store',
      playStoreAria: 'Скачать Russian Cases with Anna в Google Play',
    },
    footer: {
      brand: 'Russian Cases with Anna®',
      tagline: 'Практикуйте русские падежи на телефоне',
      learn: 'Обучение',
      practice: 'Практика',
      words: 'Склонения',
      blog: 'Блог',
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
