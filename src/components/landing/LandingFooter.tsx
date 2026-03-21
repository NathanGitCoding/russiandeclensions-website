'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { LandingLanguageSelector } from '@/components/landing/LandingLanguageSelector';
import { WaitlistModal } from '@/components/landing/WaitlistModal';

type WaitlistSource = 'ios' | 'android';

const ASSETS = '/landing-cases';

const POPULAR_WORDS = [
  { slug: 'chelovek', label: 'человек' },
  { slug: 'dom', label: 'дом' },
  { slug: 'voda', label: 'вода' },
  { slug: 'kniga', label: 'книга' },
  { slug: 'rabota', label: 'работа' },
  { slug: 'gorod', label: 'город' },
  { slug: 'den', label: 'день' },
  { slug: 'okno', label: 'окно' },
  { slug: 'drug', label: 'друг' },
  { slug: 'zhenshchina', label: 'женщина' },
  { slug: 'vremya', label: 'время' },
  { slug: 'shkola', label: 'школа' },
  { slug: 'strana', label: 'страна' },
  { slug: 'slovo', label: 'слово' },
  { slug: 'noch', label: 'ночь' },
  { slug: 'ruka', label: 'рука' },
];

export default function LandingFooter() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const [waitlistModal, setWaitlistModal] = useState<{
    isOpen: boolean;
    source: WaitlistSource | null;
  }>({ isOpen: false, source: null });

  const openWaitlistModal = useCallback((source: WaitlistSource) => {
    setWaitlistModal({ isOpen: true, source });
  }, []);

  const closeWaitlistModal = useCallback(() => {
    setWaitlistModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <>
      <footer className="section-blue border-t border-white/10 py-6 sm:py-8">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 sm:px-6">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-center">
            <div
              className="text-center text-base font-bold text-white sm:text-lg md:text-left"
              style={{ fontFamily: 'var(--font-noto-sans-display)' }}
            >
              {t.footer.brand}
            </div>
            <p className="text-center text-sm text-white/80 md:text-left">{t.footer.tagline}</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/70 md:justify-start">
              <Link href="/learn" className="transition-colors hover:text-white">
                {t.footer.learn}
              </Link>
              <Link href="/words" className="transition-colors hover:text-white">
                {t.footer.words}
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-white">
                {t.footer.privacy}
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">
                {t.footer.terms}
              </Link>
              <a
                href="mailto:nathan@nathanslittleapps.com"
                className="transition-colors hover:text-white"
              >
                {t.footer.contact}
              </a>
            </div>
          </div>
          <div className="w-full border-t border-white/10 pt-4">
            <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wider text-white/50 md:text-left">
              Popular Russian Declensions
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm md:justify-start">
              {POPULAR_WORDS.map(({ slug, label }) => (
                <Link
                  key={slug}
                  href={`/russian-declension/${slug}`}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <div className="[&>div]:mb-0 [&>div]:max-w-[160px]">
              <LandingLanguageSelector />
            </div>
            <div className="flex shrink-0 justify-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => openWaitlistModal('ios')}
                className="transition-transform hover:scale-105"
                aria-label={t.cta.appStoreAria}
              >
                <Image
                  src={`${ASSETS}/app-store-badge.svg`}
                  alt={t.cta.appStoreAria}
                  width={152}
                  height={52}
                  className="h-12 w-auto sm:h-14"
                />
              </button>
              <button
                type="button"
                onClick={() => openWaitlistModal('android')}
                className="transition-transform hover:scale-105"
                aria-label={t.cta.playStoreAria}
              >
                <Image
                  src={`${ASSETS}/google-play-badge.svg`}
                  alt={t.cta.playStoreAria}
                  width={172}
                  height={52}
                  className="h-12 w-auto sm:h-14"
                />
              </button>
            </div>
            <p className="text-sm text-white/60">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </>
  );
}
