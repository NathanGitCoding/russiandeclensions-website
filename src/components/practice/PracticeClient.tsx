'use client';

import { useState, useCallback } from 'react';
import type { PracticeWord } from '@/lib/data';
import type { PracticeConfig as PracticeConfigType } from '@/lib/practiceQuiz';
import { generatePracticeQuiz } from '@/lib/practiceQuiz';
import type { DeclensionQuizQuestion, DeclensionQuizResult } from '@/lib/declensionQuiz';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getPracticeTranslations } from '@/data/website/practicePageTranslations';
import { PracticeConfig } from './PracticeConfig';
import { PracticeQuiz } from './PracticeQuiz';
import { PracticeResults } from './PracticeResults';

type Screen = 'config' | 'quiz' | 'results';

const DEFAULT_CONFIG: PracticeConfigType = {
  cases: {
    nominative: { enabled: true, sg: true, pl: true },
    accusative: { enabled: true, sg: true, pl: true },
    prepositional: { enabled: true, sg: true, pl: true },
    genitive: { enabled: true, sg: true, pl: true },
    instrumental: { enabled: true, sg: true, pl: true },
    dative: { enabled: true, sg: true, pl: true },
  },
  genders: { masculine: true, feminine: true, neuter: true },
};

interface Props {
  words: PracticeWord[];
  initialConfig?: PracticeConfigType;
}

export default function PracticeClient({ words, initialConfig }: Props) {
  const { landingLanguage } = useLandingLanguage();
  const t = getPracticeTranslations(landingLanguage);

  const [screen, setScreen] = useState<Screen>('config');
  const [config, setConfig] = useState<PracticeConfigType>(initialConfig ?? DEFAULT_CONFIG);
  const [questions, setQuestions] = useState<DeclensionQuizQuestion[]>([]);
  const [results, setResults] = useState<DeclensionQuizResult[]>([]);

  const startQuiz = useCallback(() => {
    const q = generatePracticeQuiz(
      words,
      config,
      t.config.cases,
      t.quiz.singular,
      t.quiz.plural,
      landingLanguage
    );
    if (q.length === 0) return;
    setQuestions(q);
    setResults([]);
    setScreen('quiz');
  }, [words, config, t, landingLanguage]);

  const handleFinish = useCallback((r: DeclensionQuizResult[]) => {
    setResults(r);
    setScreen('results');
  }, []);

  const handleTryAgain = useCallback(() => {
    // Regenerate with same config
    const q = generatePracticeQuiz(
      words,
      config,
      t.config.cases,
      t.quiz.singular,
      t.quiz.plural,
      landingLanguage
    );
    if (q.length === 0) return;
    setQuestions(q);
    setResults([]);
    setScreen('quiz');
  }, [words, config, t, landingLanguage]);

  const handleNewQuiz = useCallback(() => {
    setScreen('config');
  }, []);

  return (
    <section className="container mx-auto -mt-2 px-4 pb-8 sm:px-6 sm:pb-12">
      {screen === 'config' && (
        <PracticeConfig
          config={config}
          onChange={setConfig}
          onStart={startQuiz}
          words={words}
          t={t}
        />
      )}

      {screen === 'quiz' && (
        <PracticeQuiz
          key={questions.map((q) => q.base_form + q.caseKey).join(',')}
          questions={questions}
          t={t}
          onFinish={handleFinish}
          onNewQuiz={handleNewQuiz}
        />
      )}

      {screen === 'results' && (
        <PracticeResults
          results={results}
          t={t}
          onTryAgain={handleTryAgain}
          onNewQuiz={handleNewQuiz}
        />
      )}
    </section>
  );
}
