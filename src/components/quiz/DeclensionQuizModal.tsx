'use client';

import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { generateDeclensionQuiz } from '@/lib/declensionQuiz';
import { useDeclensionQuiz } from '@/hooks/useDeclensionQuiz';
import type { WordWithDeclensions } from '@/lib/data';
import type { CaseConfigItem } from '@/data/website/wordPageTranslations';
import type { QuizTranslationsClient } from './DeclensionQuizTrigger';
import type { LearnArticleLeadMagnet } from '@/data/learnArticles';
import { QuizLeadMagnet } from '@/components/quiz/QuizLeadMagnet';
import { X, ChevronRight, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface DeclensionQuizModalProps {
  word: WordWithDeclensions;
  isOpen: boolean;
  onClose: () => void;
  translations: QuizTranslationsClient;
  cases: CaseConfigItem[];
  leadMagnetCta: LearnArticleLeadMagnet;
}

/** Primary color from landing-cases: hsl(210 100% 50%) = #0080FF */
const PRIMARY_COLOR = '#0080FF';

const genderColors: Record<string, string> = {
  masculine: 'bg-[hsl(210_100%_96%)] text-[hsl(210_100%_32%)] border-[hsl(210_100%_85%)]',
  feminine: 'bg-rose-50 text-rose-700 border-rose-200',
  neuter: 'bg-purple-50 text-purple-700 border-purple-200',
};

export function DeclensionQuizModal({ word, isOpen, onClose, translations: t, cases, leadMagnetCta }: DeclensionQuizModalProps) {
  const {
    currentQuestion,
    showResult,
    isCorrectAnswer,
    selectedAnswer,
    results,
    showResults,
    isLastQuestion,
    progress,
    loadQuestions,
    selectAnswer,
    nextQuestion,
  } = useDeclensionQuiz();

  const [shakeAnswer, setShakeAnswer] = useState<string | null>(null);

  const startQuiz = useCallback(() => {
    const questions = generateDeclensionQuiz(word, cases, t.singular, t.plural);
    loadQuestions(questions);
  }, [word, cases, t.singular, t.plural, loadQuestions]);

  // Start quiz when modal opens
  useEffect(() => {
    if (isOpen) {
      startQuiz();
    }
  }, [isOpen, startQuiz]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  const handleSelectAnswer = useCallback((answer: string) => {
    if (showResult) return;
    selectAnswer(answer);
    // Check if wrong to trigger shake
    if (answer !== currentQuestion?.correctAnswer) {
      setShakeAnswer(answer);
      setTimeout(() => setShakeAnswer(null), 300);
    }
  }, [showResult, selectAnswer, currentQuestion]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  const score = results.length > 0
    ? Math.round((results.filter((r) => r.isCorrect).length / results.length) * 100)
    : 0;

  const modalContent = (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="presentation"
    >
      <div
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
          aria-label={t.close}
        >
          <X size={18} />
        </button>

        {showResults ? (
          /* ── Results Screen ── */
          <div className="px-6 pb-6 pt-6">
            <h2 id="quiz-modal-title" className="mb-1 text-center text-lg font-bold text-gray-800">
              {t.score}
            </h2>
            <p className="mb-6 text-center text-4xl font-bold" style={{ color: score >= 60 ? '#10B981' : '#EF4444' }}>
              {score}%
            </p>

            <div className="mb-6 space-y-2">
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border px-3 py-2"
                  style={{ borderLeftWidth: '3px', borderLeftColor: r.isCorrect ? '#10B981' : '#EF4444' }}
                >
                  {r.isCorrect ? (
                    <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-500" />
                  ) : (
                    <XCircle size={18} className="flex-shrink-0 text-red-500" />
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-800" lang="ru">{r.base_form}</span>
                      <span className="text-gray-400">→</span>
                      <span
                        className={`font-medium ${r.isCorrect ? 'text-emerald-600' : 'text-red-600'}`}
                        lang="ru"
                      >
                        {r.isCorrect ? r.correctAnswer : r.userAnswer}
                      </span>
                      {!r.isCorrect && (
                        <span className="text-sm text-gray-400" lang="ru">({r.correctAnswer})</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{r.caseLabel} · {r.numberLabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={startQuiz}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                <RotateCcw size={16} />
                {t.tryAgain}
              </button>
              <button
                onClick={handleClose}
                className="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PRIMARY_COLOR }}
              >
                {t.close}
              </button>
            </div>

            <div className="mt-6">
              <QuizLeadMagnet cta={leadMagnetCta} />
            </div>
          </div>
        ) : currentQuestion ? (
          /* ── Question Screen ── */
          <div className="px-6 pb-6 pt-6">
            {/* Progress */}
            <p className="mb-2 text-center text-xs font-medium text-gray-500">
              {t.questionLabel} {progress.current} / {progress.total}
            </p>
            <div className="quiz-progress-bar mb-4">
              <div
                className="quiz-progress-bar-fill"
                style={{ width: `${(progress.current / progress.total) * 100}%` }}
              />
            </div>

            {/* Word card */}
            <div
              className={`mb-3 rounded-xl border-2 px-4 py-3 text-center ${genderColors[word.gender] ?? 'bg-gray-50 text-gray-800 border-gray-200'}`}
            >
              <span className="text-2xl font-bold" lang="ru">{currentQuestion.base_form}</span>
            </div>

            {/* Case label */}
            <p className="mb-3 text-center text-sm font-semibold text-gray-600">
              {currentQuestion.caseLabel} · {currentQuestion.numberLabel}
            </p>

            {/* Answer buttons */}
            <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
              {currentQuestion.allAnswers.map((answer) => {
                let btnClass = 'rounded-lg border-2 px-3 py-2.5 text-center font-medium transition-all duration-150 ';
                if (!showResult) {
                  btnClass += 'border-gray-200 bg-white text-gray-800 hover:border-blue-500 cursor-pointer';
                } else if (answer.isCorrect) {
                  btnClass += 'border-emerald-400 bg-emerald-50 text-emerald-700';
                } else if (answer.form === selectedAnswer) {
                  btnClass += 'border-red-300 bg-red-50 text-red-600 opacity-80';
                  if (shakeAnswer === answer.form) btnClass += ' quiz-answer-shake';
                } else {
                  btnClass += 'border-gray-200 bg-white text-gray-400 opacity-60';
                }

                return (
                  <button
                    key={answer.form}
                    onClick={() => handleSelectAnswer(answer.form)}
                    disabled={showResult}
                    className={btnClass}
                    lang="ru"
                  >
                    {answer.form}
                  </button>
                );
              })}
            </div>

            {/* Feedback + Next button — always rendered to reserve height, hidden when not active */}
            <div className={`mt-3 flex items-center justify-center gap-4 ${showResult ? 'visible' : 'invisible'}`}>
              <p className={`text-sm font-semibold ${isCorrectAnswer ? 'text-emerald-600' : 'text-red-500'}`}>
                {showResult ? (isCorrectAnswer ? t.correct : t.incorrect) : '\u00A0'}
              </p>
              <button
                onClick={nextQuestion}
                disabled={!showResult}
                className="flex items-center gap-1 rounded-lg px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: PRIMARY_COLOR }}
              >
                {isLastQuestion ? t.seeResults : t.next}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
