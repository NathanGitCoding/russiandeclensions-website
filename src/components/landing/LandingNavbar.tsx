'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

export default function LandingNavbar() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const pathname = usePathname();
  const isLearn = pathname?.startsWith('/learn');

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[hsl(210,100%,50%)]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:px-6">
        <Link
          href="/landing-cases"
          className="shrink-0 text-sm font-bold tracking-tight text-white sm:text-base md:text-lg lg:text-xl"
          style={{ fontFamily: 'var(--font-noto-sans-display)' }}
        >
          {t.navbar.brand}
        </Link>
        <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {isLearn && (
            <Link href="/landing-cases" className="transition-colors hover:text-white">
              {t.navbar.home}
            </Link>
          )}
          {!isLearn && (
            <>
              <a href="#features" className="transition-colors hover:text-white">
                {t.navbar.features}
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                {t.navbar.about}
              </a>
            </>
          )}
          <Link
            href="/learn"
            className={`transition-colors hover:text-white ${isLearn ? 'text-white' : ''}`}
          >
            {t.navbar.learn}
          </Link>
        </div>
        <Link
          href={isLearn ? '/landing-cases#get-started' : '#get-started'}
          className="shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30 sm:px-6"
        >
          {t.navbar.getApp}
        </Link>
      </div>
    </nav>
  );
}
