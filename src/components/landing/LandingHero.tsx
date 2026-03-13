'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

const ASSETS = '/landing-cases';

interface LandingHeroProps {
  onAppStoreClick?: () => void;
  onPlayStoreClick?: () => void;
}

export default function LandingHero({ onAppStoreClick, onPlayStoreClick }: LandingHeroProps) {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  return (
    <section className="section-blue relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-8 flex justify-center">
            <Image
              src={`${ASSETS}/icon-app-russian-cases-with-anna.png`}
              alt="Russian Cases with Anna app logo - Learn Russian grammar with structured lessons"
              width={160}
              height={160}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40"
              priority
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
            />
          </div>
          <p className="mb-3 text-base font-semibold tracking-tight text-white/90 sm:text-lg md:text-xl">
            {t.hero.tagline}
          </p>
          <h1 className="mb-6 text-2xl leading-[1.15] font-bold tracking-tight text-balance text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>

          <p className="mx-auto mb-10 max-w-xl px-2 text-center text-base leading-relaxed text-white/80 sm:text-lg md:mb-12 md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mb-16 flex flex-wrap justify-center gap-4">
            {onAppStoreClick ? (
              <button
                type="button"
                onClick={onAppStoreClick}
                className="transition-transform hover:scale-105"
                aria-label={t.hero.appStoreAria}
              >
                <Image
                  src={`${ASSETS}/app-store-badge.svg`}
                  alt={t.hero.appStoreAria}
                  width={120}
                  height={40}
                  className="h-11 w-auto sm:h-12 md:h-14"
                  sizes="(max-width: 640px) 88px, (max-width: 768px) 96px, 112px"
                />
              </button>
            ) : (
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src={`${ASSETS}/app-store-badge.svg`}
                  alt={t.hero.appStoreAria}
                  width={120}
                  height={40}
                  className="h-11 w-auto sm:h-12 md:h-14"
                  sizes="(max-width: 640px) 88px, (max-width: 768px) 96px, 112px"
                />
              </a>
            )}
            {onPlayStoreClick ? (
              <button
                type="button"
                onClick={onPlayStoreClick}
                className="transition-transform hover:scale-105"
                aria-label={t.hero.playStoreAria}
              >
                <Image
                  src={`${ASSETS}/google-play-badge.svg`}
                  alt={t.hero.playStoreAria}
                  width={135}
                  height={40}
                  className="h-11 w-auto sm:h-12 md:h-14"
                  sizes="(max-width: 640px) 88px, (max-width: 768px) 96px, 112px"
                />
              </button>
            ) : (
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src={`${ASSETS}/google-play-badge.svg`}
                  alt={t.hero.playStoreAria}
                  width={135}
                  height={40}
                  className="h-11 w-auto sm:h-12 md:h-14"
                  sizes="(max-width: 640px) 88px, (max-width: 768px) 96px, 112px"
                />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
