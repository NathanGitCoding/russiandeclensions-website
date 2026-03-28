/**
 * Hook for managing declension quiz state (reducer pattern).
 * Simplified version of russian-coach's useTrainingSimple.
 */

import { useReducer, useCallback } from 'react';
import type { DeclensionQuizQuestion, DeclensionQuizResult } from '@/lib/declensionQuiz';

// === STATE ===

interface QuizState {
  questions: DeclensionQuizQuestion[];
  index: number;
  selectedAnswer: string;
  showResult: boolean;
  isCorrectAnswer: boolean;
  results: DeclensionQuizResult[];
  status: 'idle' | 'answering' | 'finished';
}

type QuizAction =
  | { type: 'LOAD_QUESTIONS'; questions: DeclensionQuizQuestion[] }
  | { type: 'SELECT_ANSWER'; answer: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'FINISH' };

const initialState: QuizState = {
  questions: [],
  index: 0,
  selectedAnswer: '',
  showResult: false,
  isCorrectAnswer: false,
  results: [],
  status: 'idle',
};

function buildResult(
  question: DeclensionQuizQuestion,
  questionIndex: number,
  selectedAnswer: string,
  isCorrect: boolean,
): DeclensionQuizResult {
  return {
    questionIndex,
    base_form: question.base_form,
    slug: question.slug,
    caseLabel: question.caseLabel,
    numberLabel: question.numberLabel,
    userAnswer: selectedAnswer,
    correctAnswer: question.correctAnswer,
    isCorrect,
  };
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...initialState,
        questions: action.questions,
      };

    case 'SELECT_ANSWER': {
      const q = state.questions[state.index];
      if (!q) return state;
      const isCorrect = action.answer === q.correctAnswer;
      return {
        ...state,
        selectedAnswer: action.answer,
        isCorrectAnswer: isCorrect,
        showResult: true,
        status: 'answering',
      };
    }

    case 'NEXT_QUESTION': {
      const q = state.questions[state.index];
      if (!q) return state;
      const result = buildResult(q, state.index, state.selectedAnswer, state.isCorrectAnswer);
      return {
        ...state,
        results: [...state.results, result],
        index: state.index + 1,
        selectedAnswer: '',
        showResult: false,
        isCorrectAnswer: false,
        status: 'idle',
      };
    }

    case 'FINISH': {
      const q = state.questions[state.index];
      if (!q) return state;
      const result = buildResult(q, state.index, state.selectedAnswer, state.isCorrectAnswer);
      return {
        ...state,
        results: [...state.results, result],
        status: 'finished',
      };
    }

    default:
      return state;
  }
}

// === HOOK ===

export function useDeclensionQuiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const loadQuestions = useCallback((questions: DeclensionQuizQuestion[]) => {
    dispatch({ type: 'LOAD_QUESTIONS', questions });
  }, []);

  const selectAnswer = useCallback((answer: string) => {
    dispatch({ type: 'SELECT_ANSWER', answer });
  }, []);

  const nextQuestion = useCallback(() => {
    if (state.index >= state.questions.length - 1) {
      dispatch({ type: 'FINISH' });
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  }, [state.index, state.questions.length]);

  const currentQuestion = state.questions[state.index] ?? null;
  const progress = { current: state.index + 1, total: state.questions.length };
  const isLastQuestion = state.questions.length > 0 && state.index >= state.questions.length - 1;
  const showResults = state.status === 'finished';

  return {
    currentQuestion,
    showResult: state.showResult,
    isCorrectAnswer: state.isCorrectAnswer,
    selectedAnswer: state.selectedAnswer,
    results: state.results,
    showResults,
    isLastQuestion,
    progress,
    loadQuestions,
    selectAnswer,
    nextQuestion,
  };
}
