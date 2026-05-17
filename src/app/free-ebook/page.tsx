import { CheckCircle2 } from 'lucide-react';
import FreeEbookForm from '@/components/free-ebook/FreeEbookForm';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLandingTranslations } from '@/data/website/landingTranslations';

export default async function FreeEbookPage() {
  const lang = await getLandingLangFromRequest();
  const t = getLandingTranslations(lang).freeEbookPage;

  return (
    <section className="bg-[hsl(210,100%,50%)] text-white">
      <div className="container mx-auto grid items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-14 md:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            {t.badge}
          </span>
          <h1
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-noto-sans-display)' }}
          >
            {t.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">{t.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {t.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
                <span className="text-white/90">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
          <FreeEbookForm language={lang} t={t} />
        </div>
      </div>
    </section>
  );
}
