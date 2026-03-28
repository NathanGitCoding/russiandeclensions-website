'use client';

import { useState, useCallback, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import type { DeclensionQuizQuestion } from '@/lib/declensionQuiz';
import { useDeclensionQuiz } from '@/hooks/useDeclensionQuiz';
import type { PracticeTranslations } from '@/data/website/practicePageTranslations';
import type { DeclensionQuizResult } from '@/lib/declensionQuiz';

const genderColors: Record<string, string> = {
  masculine: 'bg-[hsl(210_100%_96%)] text-[hsl(210_100%_32%)] border-[hsl(210_100%_85%)]',
  feminine: 'bg-rose-50 text-rose-700 border-rose-200',
  neuter: 'bg-purple-50 text-purple-700 border-purple-200',
};

interface Props {
  questions: DeclensionQuizQuestion[];
  t: PracticeTranslations;
  onFinish: (results: DeclensionQuizResult[]) => void;
}

export function PracticeQuiz({ questions, t, onFinish }: Props) {
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

  // Load questions on mount
  useEffect(() => {
    loadQuestions(questions);
  }, [questions, loadQuestions]);

  const handleSelectAnswer = useCallback(
    (answer: string) => {
      if (showResult) return;
      selectAnswer(answer);
      if (answer !== currentQuestion?.correctAnswer) {
        setShakeAnswer(answer);
        setTimeout(() => setShakeAnswer(null), 300);
      }
    },
    [showResult, selectAnswer, currentQuestion]
  );

  // When quiz finishes, bubble up results
  useEffect(() => {
    if (showResults && results.length > 0) {
      onFinish(results);
    }
  }, [showResults, results, onFinish]);

  if (showResults || !currentQuestion) return null;

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Progress */}
      <p className="mb-2 text-center text-xs font-medium text-gray-500">
        {t.quiz.questionLabel} {progress.current} / {progress.total}
      </p>
      <div className="quiz-progress-bar mb-4">
        <div
          className="quiz-progress-bar-fill"
          style={{ width: `${(progress.current / progress.total) * 100}%` }}
        />
      </div>

      {/* Word card */}
      <div
        className={`mb-3 flex min-h-[5.25rem] flex-col items-center justify-center gap-2 rounded-xl border-2 px-4 py-[1.125rem] text-center ${genderColors[currentQuestion.gender] ?? 'bg-gray-50 text-gray-800 border-gray-200'}`}
      >
        <span className="text-[1.625rem] font-bold leading-tight" lang="ru">
          {currentQuestion.base_form}
        </span>
        {currentQuestion.translationHint ? (
          <span className="text-[0.875rem] italic text-gray-500">{currentQuestion.translationHint}</span>
        ) : null}
      </div>

      {/* Case label */}
      <p className="mb-3 text-center text-sm font-semibold text-gray-600">
        {currentQuestion.caseLabel} · {currentQuestion.numberLabel}
      </p>

      {/* Answer buttons */}
      <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
        {currentQuestion.allAnswers.map((answer) => {
          let btnClass =
            'rounded-lg border-2 px-3 py-[0.9375rem] text-center text-[1.125rem] font-medium leading-snug transition-all duration-150 ';
          if (!showResult) {
            btnClass +=
              'border-gray-200 bg-white text-gray-800 hover:border-blue-500 cursor-pointer';
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

      {/* Feedback above Next */}
      <div
        className={`mt-3 flex flex-col items-center justify-center gap-2 ${showResult ? 'visible' : 'invisible'}`}
      >
        <p
          className={`min-h-[1.25rem] text-center text-sm font-semibold ${isCorrectAnswer ? 'text-emerald-600' : 'text-red-500'}`}
        >
          {showResult ? (isCorrectAnswer ? t.quiz.correct : t.quiz.incorrect) : '\u00A0'}
        </p>
        <button
          onClick={nextQuestion}
          disabled={!showResult}
          className="flex items-center gap-1 rounded-lg px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          style={{ background: '#0080FF' }}
        >
          {isLastQuestion ? t.quiz.seeResults : t.quiz.next}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
