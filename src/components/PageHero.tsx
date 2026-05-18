import Image from 'next/image';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  subtitle: string;
  breadcrumbAria: string;
  breadcrumb: BreadcrumbItem[];
  /** Affiche l'illustration cathédrale Saint-Basile (par défaut: true) */
  showIllustration?: boolean;
}

/**
 * Haut de page partagé : dégradé bleu, halos décoratifs, fil d'Ariane,
 * titre/sous-titre, vague de séparation blanche. Utilisé sur practice,
 * blog et learn pour une identité visuelle commune.
 */
export function PageHero({
  title,
  subtitle,
  breadcrumbAria,
  breadcrumb,
  showIllustration = true,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0066DD] via-[#0080FF] to-[#3DA5FF]">
      {/* halos décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-28 h-80 w-80 rounded-full bg-[#FF4D4D]/20 blur-3xl"
      />

      <div className="relative container mx-auto px-4 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-14">
        <nav
          aria-label={breadcrumbAria}
          className="mb-6 text-center text-sm text-white/70 sm:text-left"
        >
          {breadcrumb.map((item, i) => {
            const isLast = i === breadcrumb.length - 1;
            return (
              <span key={i}>
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
                {!isLast && <span className="mx-1.5">/</span>}
              </span>
            );
          })}
        </nav>

        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-left">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/25 backdrop-blur-sm">
              <span aria-hidden>🪆</span> Russian Cases with Anna
            </span>
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:mx-0">
              {subtitle}
            </p>
          </div>

          {showIllustration && (
            <div className="flex justify-center md:justify-end">
              <Image
                src="/saint-basil.svg"
                alt="Saint Basil's Cathedral, Moscow"
                width={312}
                height={312}
                priority
                className="h-[13.2rem] w-auto drop-shadow-xl sm:h-[15.6rem] md:h-72"
              />
            </div>
          )}
        </div>
      </div>

      {/* vague de séparation */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-8 w-full sm:h-12"
      >
        <path d="M0 30 C 240 60 480 0 720 22 C 960 44 1200 8 1440 28 V60 H0 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
