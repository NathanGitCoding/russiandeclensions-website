/**
 * Traductions pour les chaînes UI des pages article/leçon (/learn/articles/[slug], /learn/lessons/[slug])
 */

import type { LandingLanguage } from './landingTranslations';

export interface LearnDetailTranslations {
  breadcrumb: { home: string; learn: string };
  backToLearn: string;
  whatsInThisCheatsheet: string;
  whatYouLearnInThisGuide: string;
  lastUpdated: string;
  mistakeLabels: { wrong: string; correct: string; why: string; fix: string };
  quickComparison: string;
  frequentlyAskedQuestions: string;
  relatedGrammar: string;
  relatedGuides: string;
  exploreEachCase: string;
  viewApp: string;
}

const translations: Record<LandingLanguage, LearnDetailTranslations> = {
  en_en: {
    breadcrumb: { home: 'App', learn: 'Free Grammar Lessons' },
    backToLearn: '← Back to Learn',
    whatsInThisCheatsheet: "What's in this cheat sheet:",
    whatYouLearnInThisGuide: "What you'll learn in this guide:",
    lastUpdated: 'Last updated:',
    mistakeLabels: {
      wrong: 'Wrong:',
      correct: 'Correct:',
      why: 'Why this happens:',
      fix: 'The fix:',
    },
    quickComparison: 'Quick comparison',
    frequentlyAskedQuestions: 'Frequently asked questions',
    relatedGrammar: 'Related grammar',
    relatedGuides: 'Related guides',
    exploreEachCase: 'Explore each case',
    viewApp: 'View app →',
  },
  fr_fr: {
    breadcrumb: { home: 'App', learn: 'Leçons de grammaire gratuites' },
    backToLearn: '← Retour à Apprendre',
    whatsInThisCheatsheet: 'Contenu de cette antisèche :',
    whatYouLearnInThisGuide: 'Ce que vous allez apprendre dans ce guide :',
    lastUpdated: 'Dernière mise à jour :',
    mistakeLabels: {
      wrong: 'Faux :',
      correct: 'Correct :',
      why: 'Pourquoi :',
      fix: 'La correction :',
    },
    quickComparison: 'Comparaison rapide',
    frequentlyAskedQuestions: 'Questions fréquentes',
    relatedGrammar: 'Grammaire connexe',
    relatedGuides: 'Guides connexes',
    exploreEachCase: 'Explorer chaque cas',
    viewApp: "Voir l'app →",
  },
  tr_tr: {
    breadcrumb: { home: 'App', learn: 'Ücretsiz Gramer Dersleri' },
    backToLearn: "← Öğren'e geri dön",
    whatsInThisCheatsheet: 'Bu kopya kağıdında neler var:',
    whatYouLearnInThisGuide: 'Bu rehberde ne öğreneceksiniz:',
    lastUpdated: 'Son güncelleme:',
    mistakeLabels: {
      wrong: 'Yanlış:',
      correct: 'Doğru:',
      why: 'Neden oluyor:',
      fix: 'Çözüm:',
    },
    quickComparison: 'Hızlı karşılaştırma',
    frequentlyAskedQuestions: 'Sık sorulan sorular',
    relatedGrammar: 'İlgili gramer',
    relatedGuides: 'İlgili rehberler',
    exploreEachCase: 'Her durumu keşfedin',
    viewApp: 'Uygulamayı görün →',
  },
  de_de: {
    breadcrumb: { home: 'App', learn: 'Kostenlose Grammatik-Lektionen' },
    backToLearn: '← Zurück zu Lernen',
    whatsInThisCheatsheet: 'Inhalt dieser Spickzettel:',
    whatYouLearnInThisGuide: 'Was Sie in diesem Leitfaden lernen:',
    lastUpdated: 'Zuletzt aktualisiert:',
    mistakeLabels: {
      wrong: 'Falsch:',
      correct: 'Richtig:',
      why: 'Warum das passiert:',
      fix: 'Die Lösung:',
    },
    quickComparison: 'Schnellvergleich',
    frequentlyAskedQuestions: 'Häufig gestellte Fragen',
    relatedGrammar: 'Verwandte Grammatik',
    relatedGuides: 'Verwandte Leitfäden',
    exploreEachCase: 'Jeden Fall erkunden',
    viewApp: 'App ansehen →',
  },
  pl_pl: {
    breadcrumb: { home: 'App', learn: 'Darmowe lekcje gramatyki' },
    backToLearn: '← Powrót do Nauki',
    whatsInThisCheatsheet: 'Zawartość tej ściągi:',
    whatYouLearnInThisGuide: 'Czego nauczysz się w tym przewodniku:',
    lastUpdated: 'Ostatnia aktualizacja:',
    mistakeLabels: {
      wrong: 'Źle:',
      correct: 'Dobrze:',
      why: 'Dlaczego tak się dzieje:',
      fix: 'Poprawka:',
    },
    quickComparison: 'Szybkie porównanie',
    frequentlyAskedQuestions: 'Często zadawane pytania',
    relatedGrammar: 'Powiązana gramatyka',
    relatedGuides: 'Powiązane przewodniki',
    exploreEachCase: 'Odkryj każdy przypadek',
    viewApp: 'Zobacz aplikację →',
  },
  ru_ru: {
    breadcrumb: { home: 'App', learn: 'Бесплатные уроки грамматики' },
    backToLearn: '← Назад к Обучению',
    whatsInThisCheatsheet: 'Содержание этой шпаргалки:',
    whatYouLearnInThisGuide: 'Что вы узнаете в этом руководстве:',
    lastUpdated: 'Последнее обновление:',
    mistakeLabels: {
      wrong: 'Неправильно:',
      correct: 'Правильно:',
      why: 'Почему так:',
      fix: 'Исправление:',
    },
    quickComparison: 'Быстрое сравнение',
    frequentlyAskedQuestions: 'Часто задаваемые вопросы',
    relatedGrammar: 'Связанная грамматика',
    relatedGuides: 'Связанные руководства',
    exploreEachCase: 'Изучить каждый падеж',
    viewApp: 'Смотреть приложение →',
  },
};

export function getLearnDetailTranslations(language: LandingLanguage): LearnDetailTranslations {
  return translations[language] ?? translations.en_en;
}
