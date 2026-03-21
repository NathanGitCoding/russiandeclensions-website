'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { AnimateOnScroll } from '@/components/landing/AnimateOnScroll';

const ASSETS = '/landing-cases';

export default function LandingAbout() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  return (
    <section
      id="about"
      className="section-white overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 sm:px-6 md:px-16 lg:px-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <AnimateOnScroll variant="fade-up" rootMargin="-50px" className="order-2 flex justify-center md:order-1">
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[3px] border-white shadow-xl sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80">
              <Image
                src={`${ASSETS}/founder-photo.webp`}
                alt="Founder and creator of Russian Cases with Anna"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-in-right" rootMargin="-50px" delay={0.1} className="order-1 md:order-2">
            <p className="mb-4 text-sm font-semibold tracking-widest text-[hsl(210,100%,50%)]/60 uppercase">
              {t.about.ourStory}
            </p>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-[hsl(220,20%,10%)] sm:text-3xl md:text-4xl">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[hsl(220,10%,40%)] sm:text-lg">
              {t.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="pt-2">
                <span className="text-[hsl(220,10%,40%)]">{t.about.exploreLabel} </span>
                <Link href="/learn" className="font-medium text-[hsl(210,100%,50%)] hover:underline">
                  {t.about.learnLink}
                </Link>
                {' · '}
                <Link href="/words" className="font-medium text-[hsl(210,100%,50%)] hover:underline">
                  {t.about.wordsLink}
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
