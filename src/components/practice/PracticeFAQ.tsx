'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getPracticeTranslations } from '@/data/website/practicePageTranslations';

export function PracticeFAQ() {
  const { landingLanguage } = useLandingLanguage();
  const t = getPracticeTranslations(landingLanguage);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 pb-12 pt-8 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-xl font-bold text-gray-800 sm:text-2xl">
          {t.faq.title}
        </h2>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-gray-800 sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Internal links for SEO — always visible */}
        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-5 text-center">
          <p className="mb-3 text-sm text-gray-500">{t.faqLinks.diveDeeper}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/learn"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-blue-50"
            >
              {t.faqLinks.grammarLessons}
            </Link>
            <Link
              href="/words"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-blue-50"
            >
              {t.faqLinks.russianWords}
            </Link>
            <Link
              href="/russian-declension/chelovek"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-blue-50"
            >
              {t.faqLinks.chelovekExample}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
