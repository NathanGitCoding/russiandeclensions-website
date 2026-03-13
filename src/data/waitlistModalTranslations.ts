/**
 * Traductions pour le modal waitlist (landing App Store / Google Play)
 */

import type { Language } from './languages';

export interface WaitlistModalTranslations {
  titleIos: string;
  titleAndroid: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  marketingCheckbox: string;
  submitButton: string;
  submitLoading: string;
  cancelButton: string;
  closeButton: string;
  successMessage: string;
  errorGeneric: string;
}

const translations: Record<Language, WaitlistModalTranslations> = {
  en_en: {
    titleIos: 'Coming soon on the App Store',
    titleAndroid: 'Coming soon on Google Play',
    subtitle: "Leave your email and we'll notify you when the app is available.",
    emailLabel: 'Email address',
    emailPlaceholder: 'your@email.com',
    marketingCheckbox: 'I agree to receive news and offers about Russian Cases with Anna.',
    submitButton: 'Notify me',
    submitLoading: 'Signing up...',
    cancelButton: 'Cancel',
    closeButton: 'OK',
    successMessage: "You're on the list! We'll email you when the app launches.",
    errorGeneric: 'Something went wrong. Please try again.',
  },
  fr_fr: {
    titleIos: "Bientôt sur l'App Store",
    titleAndroid: 'Bientôt sur Google Play',
    subtitle: "Laissez votre email et nous vous préviendrons quand l'app sera disponible.",
    emailLabel: 'Adresse email',
    emailPlaceholder: 'votre@email.com',
    marketingCheckbox:
      "J'accepte de recevoir des actualités et offres sur Russian Cases with Anna.",
    submitButton: 'Me tenir informé',
    submitLoading: 'Inscription...',
    cancelButton: 'Annuler',
    closeButton: 'OK',
    successMessage: "Vous êtes inscrit ! Nous vous enverrons un email au lancement de l'app.",
    errorGeneric: 'Une erreur est survenue. Veuillez réessayer.',
  },
  tr_tr: {
    titleIos: "App Store'da yakında",
    titleAndroid: "Google Play'de yakında",
    subtitle: 'E-posta adresinizi bırakın, uygulama yayınlandığında size haber vereceğiz.',
    emailLabel: 'E-posta adresi',
    emailPlaceholder: 'sizin@email.com',
    marketingCheckbox: 'Russian Cases with Anna hakkında haber ve teklifler almayı kabul ediyorum.',
    submitButton: 'Beni bilgilendir',
    submitLoading: 'Kayıt olunuyor...',
    cancelButton: 'İptal',
    closeButton: 'Tamam',
    successMessage: 'Listedesiniz! Uygulama yayınlandığında size e-posta göndereceğiz.',
    errorGeneric: 'Bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
  },
  de_de: {
    titleIos: 'Demnächst im App Store',
    titleAndroid: 'Demnächst bei Google Play',
    subtitle:
      'Hinterlassen Sie Ihre E-Mail und wir benachrichtigen Sie, wenn die App verfügbar ist.',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'ihre@email.com',
    marketingCheckbox:
      'Ich stimme dem Erhalt von Neuigkeiten und Angeboten zu Russian Cases with Anna zu.',
    submitButton: 'Benachrichtige mich',
    submitLoading: 'Anmeldung...',
    cancelButton: 'Abbrechen',
    closeButton: 'OK',
    successMessage: 'Sie sind auf der Liste! Wir mailen Ihnen, wenn die App startet.',
    errorGeneric: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  },
  pl_pl: {
    titleIos: 'Wkrótce w App Store',
    titleAndroid: 'Wkrótce w Google Play',
    subtitle: 'Podaj swój email, a powiadomimy Cię, gdy aplikacja będzie dostępna.',
    emailLabel: 'Adres email',
    emailPlaceholder: 'twoj@email.com',
    marketingCheckbox:
      'Zgadzam się na otrzymywanie wiadomości i ofert dotyczących Russian Cases with Anna.',
    submitButton: 'Powiadom mnie',
    submitLoading: 'Rejestracja...',
    cancelButton: 'Anuluj',
    closeButton: 'OK',
    successMessage: 'Jesteś na liście! Wyślemy Ci maila, gdy aplikacja się uruchomi.',
    errorGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
  },
};

export function getWaitlistModalTranslations(
  language: Language | string
): WaitlistModalTranslations {
  const lang = language in translations ? (language as Language) : 'en_en';
  return translations[lang] ?? translations.en_en;
}
