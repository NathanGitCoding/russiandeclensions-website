'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

/**
 * Tant que l'ebook (PDF + envoi email) n'est pas prêt, on masque l'entrée du
 * header. La page /free-ebook et l'API restent fonctionnelles mais non liées.
 * Repasser à `true` une fois le PDF déposé et l'envoi email configuré.
 */
const SHOW_FREE_EBOOK = false;

const FREE_RESOURCE_PREFIXES = [
  '/learn',
  '/words',
  '/russian-declension',
  '/blog',
  ...(SHOW_FREE_EBOOK ? ['/free-ebook'] : []),
];

function pathMatchesFreeResources(pathname: string | null): boolean {
  if (!pathname) return false;
  return FREE_RESOURCE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export default function LandingNavbar() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isBlog =
    (pathname?.startsWith('/blog') || pathname?.startsWith('/learn/articles')) ?? false;
  const isLearn = (pathname?.startsWith('/learn') && !isBlog) ?? false;
  const isWords =
    (pathname?.startsWith('/words') || pathname?.startsWith('/russian-declension')) ?? false;
  const isEbook = pathname?.startsWith('/free-ebook') ?? false;
  const isPractice = pathname?.startsWith('/practice') ?? false;
  const isFreeResources = pathMatchesFreeResources(pathname ?? null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeAll = useCallback(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    if (!dropdownOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [dropdownOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const linkClass = 'transition-colors hover:text-white';
  const activeClass = 'font-semibold text-white';

  return (
    <>
      <nav
        id="header"
        className="fixed top-0 right-0 left-0 z-[100] w-full border-b border-white/10 bg-[hsl(210,100%,50%)]/95 backdrop-blur-md"
      >
        <div className="container mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:h-16 sm:px-6">
          <Link
            href="/"
            className="shrink-0 text-sm font-bold tracking-tight text-white sm:text-base md:text-lg lg:text-xl"
            style={{ fontFamily: 'var(--font-noto-sans-display)' }}
          >
            {t.navbar.brand}
          </Link>

          <div
            className="hidden items-center gap-3 text-xs text-white/80 sm:text-sm md:flex"
            aria-label="Primary"
          >
            {isHome ? (
              <span className={activeClass} aria-current="page">
                {t.navbar.home}
              </span>
            ) : (
              <Link href="/" className={linkClass}>
                {t.navbar.home}
              </Link>
            )}

            <span aria-hidden className="text-white/40">
              /
            </span>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls="free-resources-menu"
                aria-haspopup="menu"
                onClick={() => setDropdownOpen((open) => !open)}
                className={`inline-flex items-center gap-1 ${linkClass} ${
                  isFreeResources ? activeClass : ''
                }`}
              >
                <span>{t.navbar.freeResources}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                />
              </button>
              {dropdownOpen && (
                <div
                  id="free-resources-menu"
                  role="menu"
                  className="absolute top-full left-1/2 z-[110] mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-[hsl(210,100%,45%)] shadow-xl"
                >
                  <Link
                    href="/learn"
                    role="menuitem"
                    className={`block px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10 ${
                      isLearn ? 'bg-white/10 font-semibold text-white' : ''
                    }`}
                  >
                    {t.navbar.learn}
                  </Link>
                  <Link
                    href="/words"
                    role="menuitem"
                    className={`block px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10 ${
                      isWords ? 'bg-white/10 font-semibold text-white' : ''
                    }`}
                  >
                    {t.navbar.declinaisons}
                  </Link>
                  <Link
                    href="/blog"
                    role="menuitem"
                    className={`block px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10 ${
                      isBlog ? 'bg-white/10 font-semibold text-white' : ''
                    }`}
                  >
                    {t.navbar.blog}
                  </Link>
                  {SHOW_FREE_EBOOK && (
                    <Link
                      href="/free-ebook"
                      role="menuitem"
                      className={`block px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/10 ${
                        isEbook ? 'bg-white/10 font-semibold text-white' : ''
                      }`}
                    >
                      {t.navbar.freeEbook}
                    </Link>
                  )}
                </div>
              )}
            </div>

            <span aria-hidden className="text-white/40">
              /
            </span>

            {isPractice ? (
              <span className={activeClass} aria-current="page">
                {t.navbar.practice}
              </span>
            ) : (
              <Link href="/practice" className={linkClass}>
                {t.navbar.practice}
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={isHome ? '#header' : '/#header'}
              className="hidden shrink-0 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30 sm:inline-block sm:px-6"
            >
              {t.navbar.getApp}
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? t.navbar.menuClose : t.navbar.menuOpen}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.navbar.menuOpen}
          className="fixed inset-x-0 top-14 bottom-0 z-[105] flex flex-col gap-1 overflow-y-auto bg-[hsl(210,100%,50%)] px-6 pt-6 pb-10 text-white md:hidden"
        >
          <Link
            href="/"
            className={`rounded-lg px-3 py-3 text-base ${isHome ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
          >
            {t.navbar.home}
          </Link>

          <div className="mt-4 px-3 text-xs font-semibold tracking-wide text-white/60 uppercase">
            {t.navbar.freeResources}
          </div>
          <Link
            href="/learn"
            className={`rounded-lg px-3 py-3 text-base ${isLearn ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
          >
            {t.navbar.learn}
          </Link>
          <Link
            href="/words"
            className={`rounded-lg px-3 py-3 text-base ${isWords ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
          >
            {t.navbar.declinaisons}
          </Link>
          <Link
            href="/blog"
            className={`rounded-lg px-3 py-3 text-base ${isBlog ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
          >
            {t.navbar.blog}
          </Link>
          {SHOW_FREE_EBOOK && (
            <Link
              href="/free-ebook"
              className={`rounded-lg px-3 py-3 text-base ${isEbook ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
            >
              {t.navbar.freeEbook}
            </Link>
          )}

          <div className="mt-4 h-px w-full bg-white/15" />

          <Link
            href="/practice"
            className={`mt-2 rounded-lg px-3 py-3 text-base ${isPractice ? 'bg-white/15 font-semibold' : 'hover:bg-white/10'}`}
          >
            {t.navbar.practice}
          </Link>

          <Link
            href={isHome ? '#header' : '/#header'}
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[hsl(210,100%,50%)] transition-colors hover:bg-white/90"
          >
            {t.navbar.getApp}
          </Link>
        </div>
      )}
    </>
  );
}
