'use client';

import Image from 'next/image';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { AnimateOnScroll } from '@/components/landing/AnimateOnScroll';

const ASSETS = '/landing-cases';

interface LandingCTAProps {
  onAppStoreClick?: () => void;
  onPlayStoreClick?: () => void;
}

export default function LandingCTA({ onAppStoreClick, onPlayStoreClick }: LandingCTAProps) {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  return (
    <section
      id="get-started"
      className="section-blue overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
          <AnimateOnScroll
            variant="fade-in-left"
            rootMargin="-50px"
            className="relative order-1 aspect-square w-36 flex-shrink-0 sm:w-44 md:order-1 md:w-52 lg:w-60"
          >
            <Image
              src={`${ASSETS}/russian-teacher-anna-welcome.webp`}
              alt="Russian teacher Anna explaining how to learn Russian grammar"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
              loading="lazy"
              className="object-contain"
            />
          </AnimateOnScroll>
          <AnimateOnScroll
            variant="fade-up"
            rootMargin="-50px"
            delay={0.08}
            className="order-2 max-w-2xl text-center md:order-2 md:text-left"
          >
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base text-white/80 sm:text-lg md:mx-0 md:mb-10">
              {t.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {onAppStoreClick ? (
                <button
                  type="button"
                  onClick={onAppStoreClick}
                  className="transition-transform hover:scale-105"
                  aria-label={t.cta.appStoreAria}
                >
                  <Image
                    src={`${ASSETS}/app-store-badge.svg`}
                    alt={t.cta.appStoreAria}
                    width={120}
                    height={40}
                    className="h-14 w-auto"
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
                    alt={t.cta.appStoreAria}
                    width={120}
                    height={40}
                    className="h-14 w-auto"
                  />
                </a>
              )}
              {onPlayStoreClick ? (
                <button
                  type="button"
                  onClick={onPlayStoreClick}
                  className="transition-transform hover:scale-105"
                  aria-label={t.cta.playStoreAria}
                >
                  <Image
                    src={`${ASSETS}/google-play-badge.svg`}
                    alt={t.cta.playStoreAria}
                    width={135}
                    height={40}
                    className="h-14 w-auto"
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
                    alt={t.cta.playStoreAria}
                    width={135}
                    height={40}
                    className="h-14 w-auto"
                  />
                </a>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
