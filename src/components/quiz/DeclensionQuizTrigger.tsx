'use client';

import React, { useState, useCallback } from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { DeclensionQuizModal } from './DeclensionQuizModal';
import type { WordWithDeclensions } from '@/lib/data';
import type { CaseConfigItem } from '@/data/website/wordPageTranslations';
import type { LearnArticleLeadMagnet } from '@/data/learnArticles';

/** Serializable quiz translations (no functions — safe for Server→Client boundary). */
export interface QuizTranslationsClient {
  triggerTitle: string;
  triggerDescription: string;
  triggerCta: string;
  singular: string;
  plural: string;
  next: string;
  seeResults: string;
  tryAgain: string;
  close: string;
  score: string;
  questionLabel: string;
  correct: string;
  incorrect: string;
}

interface DeclensionQuizTriggerProps {
  word: WordWithDeclensions;
  translations: QuizTranslationsClient;
  cases: CaseConfigItem[];
  leadMagnetCta: LearnArticleLeadMagnet;
  /** When true, the component heading is not rendered (e.g. when used inside a section with its own h2) */
  suppressHeading?: boolean;
}

export function DeclensionQuizTrigger({ word, translations: t, cases, leadMagnetCta, suppressHeading }: DeclensionQuizTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <aside className="quiz-trigger" aria-labelledby={suppressHeading ? undefined : 'quiz-trigger-heading'}>
        <div className="quiz-trigger-icon">
          <GraduationCap size={28} />
        </div>
        <div>
          {suppressHeading ? (
            <p className="text-base font-semibold text-[hsl(var(--foreground))]">{t.triggerTitle}</p>
          ) : (
            <h2 id="quiz-trigger-heading" className="text-base font-semibold text-[hsl(var(--foreground))]">
              {t.triggerTitle}
            </h2>
          )}
          <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
            {t.triggerDescription}
          </p>
          <button type="button" onClick={open} className="quiz-trigger-cta">
            {t.triggerCta}
            <ChevronRight size={16} />
          </button>
        </div>
      </aside>
      <DeclensionQuizModal
        word={word}
        isOpen={isOpen}
        onClose={close}
        translations={t}
        cases={cases}
        leadMagnetCta={leadMagnetCta}
      />
    </>
  );
}
