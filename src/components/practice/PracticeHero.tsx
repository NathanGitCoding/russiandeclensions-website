import Link from 'next/link';

interface Props {
  title: string;
  subtitle: string;
  breadcrumbAria: string;
  breadcrumbHome: string;
  breadcrumbPractice: string;
}

/** Coupole bulbe stylisée (cliché russe — cathédrale Saint-Basile) */
function Dome({
  x,
  height,
  width,
  fill,
  stripe,
}: {
  x: number;
  height: number;
  width: number;
  fill: string;
  stripe: string;
}) {
  const cx = x + width / 2;
  return (
    <g>
      {/* croix orthodoxe */}
      <line x1={cx} y1={4} x2={cx} y2={20} stroke="#F4C430" strokeWidth="2" strokeLinecap="round" />
      <line
        x1={cx - 5}
        y1={9}
        x2={cx + 5}
        y2={9}
        stroke="#F4C430"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* bulbe */}
      <path
        d={`M ${cx} 20
            C ${x - width * 0.18} ${20 + height * 0.45}, ${x} ${20 + height * 0.95}, ${cx} ${20 + height}
            C ${x + width} ${20 + height * 0.95}, ${x + width * 1.18} ${20 + height * 0.45}, ${cx} 20 Z`}
        fill={fill}
      />
      {/* torsade décorative */}
      <path
        d={`M ${cx} 20
            C ${x - width * 0.18} ${20 + height * 0.45}, ${x} ${20 + height * 0.95}, ${cx} ${20 + height}`}
        fill="none"
        stroke={stripe}
        strokeWidth="3"
        opacity="0.75"
      />
      <path
        d={`M ${cx} ${20 + height * 0.18}
            C ${cx - width * 0.32} ${20 + height * 0.5}, ${cx - width * 0.22} ${20 + height * 0.85}, ${cx} ${20 + height}`}
        fill="none"
        stroke={stripe}
        strokeWidth="3"
        opacity="0.55"
      />
      {/* tambour */}
      <rect
        x={cx - width * 0.28}
        y={20 + height}
        width={width * 0.56}
        height={height * 0.5}
        fill="#F8FAFC"
      />
    </g>
  );
}

export function PracticeHero({
  title,
  subtitle,
  breadcrumbAria,
  breadcrumbHome,
  breadcrumbPractice,
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
          <Link href="/" className="transition-colors hover:text-white">
            {breadcrumbHome}
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-white">{breadcrumbPractice}</span>
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

          {/* Illustration cathédrale Saint-Basile */}
          <div className="flex justify-center md:justify-end">
            <svg
              viewBox="0 0 300 240"
              role="img"
              aria-label="Saint Basil's Cathedral, Moscow"
              className="h-44 w-auto drop-shadow-xl sm:h-52 md:h-60"
            >
              {/* dôme central haut (tente dorée) */}
              <g transform="translate(120 0)">
                <line
                  x1="30"
                  y1="2"
                  x2="30"
                  y2="16"
                  stroke="#F4C430"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M30 16 L8 96 H52 Z" fill="#F4C430" />
                <path d="M30 16 L8 96 H52 Z" fill="none" stroke="#E0A800" strokeWidth="2" />
                <path d="M30 32 L18 96 H42 Z" fill="#FFE08A" opacity="0.6" />
                <rect x="14" y="96" width="32" height="34" fill="#F8FAFC" />
              </g>

              {/* coupoles latérales */}
              <g transform="translate(0 70)">
                <Dome x={8} width={46} height={52} fill="#E84C5B" stripe="#FBE3A1" />
              </g>
              <g transform="translate(0 58)">
                <Dome x={62} width={52} height={60} fill="#2FA84F" stripe="#FFFFFF" />
              </g>
              <g transform="translate(0 58)">
                <Dome x={186} width={52} height={60} fill="#1565C0" stripe="#FFFFFF" />
              </g>
              <g transform="translate(0 70)">
                <Dome x={246} width={46} height={52} fill="#E84C5B" stripe="#FBE3A1" />
              </g>

              {/* corps de la cathédrale */}
              <rect x="10" y="156" width="280" height="74" rx="4" fill="#FAFAFA" />
              <rect x="10" y="156" width="280" height="74" rx="4" fill="url(#wall)" />
              {/* tours / contreforts */}
              <rect x="28" y="138" width="48" height="92" rx="3" fill="#FFFFFF" />
              <rect x="126" y="118" width="48" height="112" rx="3" fill="#FFFFFF" />
              <rect x="224" y="138" width="48" height="92" rx="3" fill="#FFFFFF" />
              {/* fenêtres / arches */}
              {[44, 142, 240].map((wx) => (
                <path
                  key={wx}
                  d={`M ${wx} 230 V 188 a 8 8 0 0 1 16 0 V 230 Z`}
                  fill="#1565C0"
                  opacity="0.85"
                />
              ))}
              {[88, 196].map((wx) => (
                <path
                  key={wx}
                  d={`M ${wx} 230 V 196 a 7 7 0 0 1 14 0 V 230 Z`}
                  fill="#E84C5B"
                  opacity="0.8"
                />
              ))}
              <defs>
                <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#E8EEF7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
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
