'use client';

import { useMemo } from 'react';
import { Play } from 'lucide-react';
import type { PracticeWord } from '@/lib/data';
import type { PracticeConfig as PracticeConfigType } from '@/lib/practiceQuiz';
import type { PracticeTranslations } from '@/data/website/practicePageTranslations';

/** Ordre d’affichage des lignes (libellés via t.config.cases[key]) */
const CASE_ROW_KEYS = [
  'nominative',
  'accusative',
  'prepositional',
  'genitive',
  'instrumental',
  'dative',
] as const;

type CaseRowKey = (typeof CASE_ROW_KEYS)[number];

interface Props {
  config: PracticeConfigType;
  onChange: (config: PracticeConfigType) => void;
  onStart: () => void;
  t: PracticeTranslations;
  words: PracticeWord[];
}

const GENDER_ICONS: Record<string, string> = {
  masculine: '♂',
  feminine: '♀',
  neuter: '⊘',
};

const emptyCaseRow: PracticeConfigType['cases'][string] = {
  enabled: false,
  sg: false,
  pl: false,
};

export function PracticeConfig({ config, onChange, onStart, t, words }: Props) {
  const setCaseSgPl = (key: CaseRowKey, field: 'sg' | 'pl', checked: boolean) => {
    const c = { ...emptyCaseRow, ...config.cases[key] };
    const sg = field === 'sg' ? checked : c.sg;
    const pl = field === 'pl' ? checked : c.pl;
    onChange({
      ...config,
      cases: {
        ...config.cases,
        [key]: { ...c, sg, pl, enabled: sg || pl },
      },
    });
  };

  const toggleGender = (g: 'masculine' | 'feminine' | 'neuter') => {
    onChange({
      ...config,
      genders: { ...config.genders, [g]: !config.genders[g] },
    });
  };

  const hasAtLeastOneCase = CASE_ROW_KEYS.some((key) => {
    const c = { ...emptyCaseRow, ...config.cases[key] };
    return c.sg || c.pl;
  });
  const hasAtLeastOneGender =
    config.genders.masculine || config.genders.feminine || config.genders.neuter;
  const canStart = hasAtLeastOneCase && hasAtLeastOneGender;

  const availableCount = useMemo(() => {
    const genderFilter = new Set<string>();
    if (config.genders.masculine) genderFilter.add('masculine');
    if (config.genders.feminine) genderFilter.add('feminine');
    if (config.genders.neuter) genderFilter.add('neuter');
    return words.filter((w) => genderFilter.has(w.gender)).length;
  }, [words, config.genders]);

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-4 text-center text-lg font-bold text-gray-800">
        {t.config.title}
      </h2>

      {/* Grille cas × singulier / pluriel */}
      <div className="mb-5 overflow-hidden rounded-xl border border-gray-200">
        <div className="flex border-b border-gray-200 bg-gray-50/90 px-3 py-2.5 text-xs font-semibold text-gray-600">
          <div className="min-w-0 flex-1 pr-2">{t.config.casesLabel}</div>
          <div className="w-11 shrink-0 text-center sm:w-14">{t.config.singular}</div>
          <div className="w-11 shrink-0 text-center sm:w-14">{t.config.plural}</div>
        </div>
        {CASE_ROW_KEYS.map((key) => {
          const c = { ...emptyCaseRow, ...config.cases[key] };
          return (
            <div
              key={key}
              className="flex items-center border-b border-gray-100 px-3 py-2.5 last:border-b-0"
            >
              <div className="min-w-0 flex-1 pr-2 text-sm font-medium text-gray-800">
                {t.config.cases[key] ?? key}
              </div>
              <div className="flex w-11 shrink-0 justify-center sm:w-14">
                <input
                  type="checkbox"
                  checked={c.sg}
                  onChange={(e) => setCaseSgPl(key, 'sg', e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#0080FF] focus:ring-[#0080FF]"
                  aria-label={`${t.config.cases[key] ?? key} — ${t.config.singular}`}
                />
              </div>
              <div className="flex w-11 shrink-0 justify-center sm:w-14">
                <input
                  type="checkbox"
                  checked={c.pl}
                  onChange={(e) => setCaseSgPl(key, 'pl', e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#0080FF] focus:ring-[#0080FF]"
                  aria-label={`${t.config.cases[key] ?? key} — ${t.config.plural}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Genders */}
      <div className="mb-5">
        <p className="mb-2 text-sm font-semibold text-gray-600">{t.config.gendersLabel}</p>
        <div className="flex gap-2 sm:gap-3">
          {(['masculine', 'feminine', 'neuter'] as const).map((g) => (
            <label
              key={g}
              className={`flex flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl border-2 px-2 py-3 text-center transition-colors sm:py-3.5 ${
                config.genders[g]
                  ? g === 'masculine'
                    ? 'border-blue-400 bg-blue-50 text-blue-700'
                    : g === 'feminine'
                      ? 'border-rose-400 bg-rose-50 text-rose-700'
                      : 'border-purple-400 bg-purple-50 text-purple-700'
                  : 'border-gray-200 bg-white text-gray-400'
              }`}
            >
              <input
                type="checkbox"
                checked={config.genders[g]}
                onChange={() => toggleGender(g)}
                className="sr-only"
              />
              <span className="text-lg leading-none">{GENDER_ICONS[g]}</span>
              <span className="text-xs font-semibold sm:text-sm">{t.config[g]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={onStart}
        disabled={!canStart}
        className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none ${
          canStart ? 'hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0' : ''
        }`}
        style={{ background: canStart ? '#0080FF' : '#9CA3AF' }}
      >
        <Play size={18} fill="white" />
        {t.config.startQuiz}
      </button>

      <p className="mt-2 text-center text-xs text-gray-400">
        {t.config.wordsAvailable(availableCount)}
      </p>
    </div>
  );
}
