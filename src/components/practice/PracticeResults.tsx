'use client';

import Link from 'next/link';
import { RotateCcw, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import type { DeclensionQuizResult } from '@/lib/declensionQuiz';
import type { PracticeTranslations } from '@/data/website/practicePageTranslations';
import { QuizLeadMagnet } from '@/components/quiz/QuizLeadMagnet';

interface Props {
  results: DeclensionQuizResult[];
  t: PracticeTranslations;
  onTryAgain: () => void;
  onNewQuiz: () => void;
}

export function PracticeResults({ results, t, onTryAgain, onNewQuiz }: Props) {
  const correct = results.filter((r) => r.isCorrect).length;
  const score = results.length > 0 ? Math.round((correct / results.length) * 100) : 0;

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-1 text-center text-lg font-bold text-gray-800">
        {t.results.score}
      </h3>
      <p
        className="mb-6 text-center text-4xl font-bold"
        style={{ color: score >= 60 ? '#10B981' : '#EF4444' }}
      >
        {score}%
      </p>

      <div className="mb-6 space-y-2">
        {results.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-lg border px-3 py-2"
            style={{
              borderLeftWidth: '3px',
              borderLeftColor: r.isCorrect ? '#10B981' : '#EF4444',
            }}
          >
            {r.isCorrect ? (
              <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-500" />
            ) : (
              <XCircle size={18} className="flex-shrink-0 text-red-500" />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                {r.slug ? (
                  <Link
                    href={`/russian-declension/${r.slug}`}
                    className="font-medium text-gray-800 underline decoration-gray-300 underline-offset-2 hover:decoration-blue-500 hover:text-blue-700"
                    lang="ru"
                  >
                    {r.base_form}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-800" lang="ru">
                    {r.base_form}
                  </span>
                )}
                <span className="text-gray-400">&rarr;</span>
                <span
                  className={`font-medium ${r.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}
                  lang="ru"
                >
                  {r.isCorrect ? r.correctAnswer : r.userAnswer}
                </span>
                {!r.isCorrect && (
                  <span className="text-sm text-gray-400" lang="ru">
                    ({r.correctAnswer})
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {r.caseLabel} · {r.numberLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={onTryAgain}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
        >
          <RotateCcw size={16} />
          {t.results.tryAgain}
        </button>
        <button
          onClick={onNewQuiz}
          className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
          style={{ background: '#0080FF' }}
        >
          <RefreshCw size={16} />
          {t.results.newQuiz}
        </button>
      </div>

      <div className="mt-6">
        <QuizLeadMagnet
          cta={{
            title: t.leadMagnet.title,
            description: t.leadMagnet.description,
            ctaText: t.leadMagnet.ctaText,
            ctaHref: '/#header',
          }}
        />
      </div>
    </div>
  );
}
