'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { SUPPORTED_LANGUAGES, getNativeLanguageName } from '@/data/languages';
import type { LandingLanguage } from '@/data/website/landingTranslations';

const LANDING_LANGUAGES = [
  ...SUPPORTED_LANGUAGES,
  { code: 'ru_ru' as const, name: { native: 'Русский' }, flag: '🇷🇺' },
];

export function LandingLanguageSelector() {
  const { landingLanguage, setLandingLanguage } = useLandingLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const displayLanguage = isHydrated ? landingLanguage : 'en_en';
  const currentLanguage = LANDING_LANGUAGES.find((lang) => lang.code === displayLanguage);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (!isOpen) return;
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-left transition-colors hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-none"
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg" role="img" aria-label={currentLanguage?.code}>
            {currentLanguage?.flag}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {currentLanguage
              ? currentLanguage.code === 'ru_ru'
                ? 'Русский'
                : getNativeLanguageName(currentLanguage.code)
              : 'Select language'}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div
          className="absolute mt-1 w-full rounded-lg border-2 border-gray-200 bg-white shadow-lg"
          style={{ zIndex: 10001 }}
        >
          <div className="py-1">
            {LANDING_LANGUAGES.map((langInfo) => {
              const label =
                langInfo.code === 'ru_ru'
                  ? 'Русский'
                  : getNativeLanguageName(langInfo.code as import('@/data/languages').Language);
              return (
                <button
                  key={langInfo.code}
                  onClick={() => {
                    setLandingLanguage(langInfo.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left transition-colors hover:bg-blue-50 ${
                    displayLanguage === langInfo.code
                      ? 'bg-blue-100 font-semibold text-blue-700'
                      : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg" role="img" aria-label={langInfo.code}>
                      {langInfo.flag}
                    </span>
                    <span className="text-sm">{label}</span>
                    {displayLanguage === langInfo.code && (
                      <span className="ml-auto text-xs text-blue-600">✓</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
