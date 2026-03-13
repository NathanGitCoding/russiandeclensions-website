'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { LandingLanguage } from '@/data/website/landingTranslations';

const LANDING_LANG_KEY = 'russian-coach-landing-lang';
const LANDING_LANG_COOKIE = 'russian-coach-landing-lang';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year

const VALID_LANGS: LandingLanguage[] = ['en_en', 'fr_fr', 'tr_tr', 'de_de', 'pl_pl', 'ru_ru'];

function detectBrowserLanguage(): LandingLanguage {
  if (typeof navigator === 'undefined') return 'en_en';
  const browserLang = (navigator.language || (navigator as any).userLanguage) || 'en';
  if (browserLang.startsWith('fr')) return 'fr_fr';
  if (browserLang.startsWith('tr')) return 'tr_tr';
  if (browserLang.startsWith('de')) return 'de_de';
  if (browserLang.startsWith('pl')) return 'pl_pl';
  if (browserLang.startsWith('ru')) return 'ru_ru';
  return 'en_en';
}

function setLandingLangCookie(lang: LandingLanguage) {
  if (typeof document === 'undefined') return;
  document.cookie = `${LANDING_LANG_COOKIE}=${lang};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

export function getLandingLangFromCookie(): LandingLanguage | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANDING_LANG_COOKIE}=([^;]*)`));
  const val = match?.[1];
  return val && VALID_LANGS.includes(val as LandingLanguage) ? (val as LandingLanguage) : null;
}

export interface LandingLanguageContextValue {
  landingLanguage: LandingLanguage;
  setLandingLanguage: (lang: LandingLanguage) => void;
}

const LandingLanguageContext = createContext<LandingLanguageContextValue | null>(null);

export function LandingLanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // Toujours 'en_en' à l'init pour éviter le mismatch d'hydratation SSR/client.
  // La vraie langue est détectée dans useEffect après le montage.
  const [landingLanguage, setLandingLanguageState] = useState<LandingLanguage>('en_en');

  useEffect(() => {
    const cookie = getLandingLangFromCookie();
    if (cookie) {
      setLandingLangCookie(cookie);
      setLandingLanguageState(cookie);
    } else {
      const stored = sessionStorage.getItem(LANDING_LANG_KEY);
      if (stored && VALID_LANGS.includes(stored as LandingLanguage)) {
        setLandingLanguageState(stored as LandingLanguage);
        setLandingLangCookie(stored as LandingLanguage);
        router.refresh();
      } else {
        const detected = detectBrowserLanguage();
        setLandingLanguageState(detected);
        setLandingLangCookie(detected);
        router.refresh();
      }
    }
  }, [router]);

  const setLandingLanguage = useCallback(
    (lang: LandingLanguage) => {
      setLandingLangCookie(lang);
      if (lang === 'ru_ru') {
        sessionStorage.setItem(LANDING_LANG_KEY, 'ru_ru');
      } else {
        sessionStorage.removeItem(LANDING_LANG_KEY);
      }
      setLandingLanguageState(lang);
      router.refresh();
    },
    [router]
  );

  useEffect(() => {
    setLandingLangCookie(landingLanguage);
  }, [landingLanguage]);

  return (
    <LandingLanguageContext.Provider value={{ landingLanguage, setLandingLanguage }}>
      {children}
    </LandingLanguageContext.Provider>
  );
}

export function useLandingLanguage() {
  const ctx = useContext(LandingLanguageContext);
  if (!ctx) {
    throw new Error('useLandingLanguage must be used within LandingLanguageProvider');
  }
  return ctx;
}

/** Returns context or null when outside provider — for components used in both landing and non-landing routes */
export function useLandingLanguageOptional(): LandingLanguageContextValue | null {
  return useContext(LandingLanguageContext);
}
