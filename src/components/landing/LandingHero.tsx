'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

const ASSETS = '/landing-cases';
const MOCKUPS = [
  `${ASSETS}/Mockup1.webp`,
  `${ASSETS}/Mockup2.webp`,
  `${ASSETS}/Mockup3.webp`,
  `${ASSETS}/Mockup4.webp`,
  `${ASSETS}/Mockup5.webp`,
];

const INTERVAL_MS = 2500;

interface LandingHeroProps {
  onAppStoreClick?: () => void;
  onPlayStoreClick?: () => void;
}

export default function LandingHero({ onAppStoreClick, onPlayStoreClick }: LandingHeroProps) {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % MOCKUPS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section-blue relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20">
      <div className="container mx-auto grid min-h-0 flex-1 items-center gap-4 px-4 py-8 sm:px-6 sm:py-16 md:grid-cols-2 md:gap-5 md:py-20 lg:gap-6 lg:py-24">
        {/* Mockup carousel - cycles through all mockups with crossfade | order-2 on mobile (after text), order-1 on desktop (left) */}
        <div className="relative order-2 flex justify-center md:order-1">
          <div className="relative aspect-[322/644] w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[322px]">
            {MOCKUPS.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt="Russian Cases with Anna app - Learn Russian grammar on your phone"
                width={322}
                height={644}
                priority={i < 2}
                sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 322px"
                className={`absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-opacity duration-700 ease-in-out ${
                  i === currentIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Text content - order-1 on mobile (first), order-2 on desktop (right) */}
        <div className="order-1 flex flex-col justify-center text-center md:order-2 md:text-left">
          <div className="mb-6 flex justify-center md:justify-start">
            <div className="overflow-hidden rounded-full">
              <Image
                src={`${ASSETS}/icon-app-russian-cases-with-anna.webp`}
                alt="Russian Cases with Anna app logo"
                width={80}
                height={80}
                className="h-[74px] w-[74px] object-cover sm:h-20 sm:w-20"
                priority
                sizes="80px"
              />
            </div>
          </div>
          <p className="mb-2 text-base font-semibold tracking-tight text-white/90 sm:text-lg md:text-xl">
            {t.hero.tagline}
          </p>
          <h1 className="mb-4 text-2xl leading-[1.15] font-bold tracking-tight text-balance text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg md:mb-10 md:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
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
        </div>
      </div>
    </section>
  );
}
