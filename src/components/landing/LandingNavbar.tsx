'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

export default function LandingNavbar() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isLearn = pathname?.startsWith('/learn');
  const isWords = pathname?.startsWith('/words') || pathname?.startsWith('/russian-declension');

  return (
    <nav id="header" className="fixed top-0 z-50 w-full border-b border-white/10 bg-[hsl(210,100%,50%)]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight text-white sm:text-base md:text-lg lg:text-xl"
          style={{ fontFamily: 'var(--font-noto-sans-display)' }}
        >
          {t.navbar.brand}
        </Link>
        <nav
          className="hidden items-center gap-1.5 text-xs text-white/80 sm:gap-2 sm:text-sm md:flex"
          aria-label="Breadcrumb"
        >
          {isHome ? (
            <span className="text-white font-semibold" aria-current="page">
              {t.navbar.home}
            </span>
          ) : (
            <Link href="/" className="transition-colors hover:text-white">
              {t.navbar.home}
            </Link>
          )}
          <span aria-hidden> / </span>
          {isLearn ? (
            <span className="text-white font-semibold" aria-current="page">
              {t.navbar.learn}
            </span>
          ) : (
            <Link
              href="/learn"
              className="transition-colors hover:text-white"
            >
              {t.navbar.learn}
            </Link>
          )}
          <span aria-hidden> / </span>
          {isWords ? (
            <span className="text-white font-semibold" aria-current="page">
              {t.navbar.declinaisons}
            </span>
          ) : (
            <Link
              href="/words"
              className="transition-colors hover:text-white"
            >
              {t.navbar.declinaisons}
            </Link>
          )}
        </nav>
        <Link
          href={isHome ? '#header' : '/#header'}
          className="shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30 sm:px-6"
        >
          {t.navbar.getApp}
        </Link>
      </div>
    </nav>
  );
}
