'use client';

import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import MascotWrapper from '@/components/ui/MascotWrapper';
import { getWaitlistModalTranslations } from '@/data/waitlistModalTranslations';
import { useLandingLanguageOptional } from '@/contexts/LandingLanguageContext';
import type { Language } from '@/data/languages';

type WaitlistSource = 'ios' | 'android';

/** Map LandingLanguage to Language for waitlist (ru_ru not in waitlist translations → fallback en_en) */
function toWaitlistLanguage(landing: string): Language {
  if (landing === 'ru_ru') return 'en_en';
  return landing as Language;
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: WaitlistSource | null;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function WaitlistModal({ isOpen, onClose, source }: WaitlistModalProps) {
  const ctx = useLandingLanguageOptional();
  const language = toWaitlistLanguage(ctx?.landingLanguage ?? 'en_en');
  const [email, setEmail] = useState('');
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const t = getWaitlistModalTranslations(language);
  const title = source === 'ios' ? t.titleIos : t.titleAndroid;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!source || !email.trim()) return;

      setFormState('loading');
      setErrorMessage('');

      try {
        const res = await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            source,
            marketingAccepted,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setFormState('error');
          setErrorMessage(data.error ?? t.errorGeneric);
          return;
        }

        setFormState('success');
      } catch {
        setFormState('error');
        setErrorMessage(t.errorGeneric);
      }
    },
    [email, source, marketingAccepted, t.errorGeneric]
  );

  const handleClose = useCallback(() => {
    setEmail('');
    setMarketingAccepted(false);
    setFormState('idle');
    setErrorMessage('');
    onClose();
  }, [onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="hide-footer fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="presentation"
    >
      <div
        className="modal-force-white relative w-full max-w-md overflow-visible rounded-2xl bg-white shadow-2xl"
        data-modal-force-white
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-modal-title"
      >
        <div className="pointer-events-none flex justify-center pt-2">
          <div className="w-[clamp(100px,20vw,160px)]">
            <MascotWrapper
              pose="welcome"
              size={140}
              className="h-auto max-h-[140px] w-full object-contain"
              priority
              customSrc="/landing-cases/russian-teacher-anna-welcome.webp"
            />
          </div>
        </div>
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <h2
            id="waitlist-modal-title"
            className="mb-2 text-center text-xl font-bold text-gray-800"
          >
            {title}
          </h2>
          <p className="mb-6 text-center text-sm text-gray-600">{t.subtitle}</p>

          {formState === 'success' ? (
            <div className="space-y-4">
              <p className="text-center text-gray-700">{t.successMessage}</p>
              <button
                onClick={handleClose}
                className="w-full rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(to right, #2A00FF, #5540ff)' }}
              >
                {t.closeButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="waitlist-email" className="sr-only">
                  {t.emailLabel}
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  disabled={formState === 'loading'}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-500 focus:border-[#5540ff] focus:ring-2 focus:ring-[#5540ff]/20 focus:outline-none disabled:opacity-60"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={marketingAccepted}
                  onChange={(e) => setMarketingAccepted(e.target.checked)}
                  disabled={formState === 'loading'}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#5540ff] focus:ring-[#5540ff] disabled:opacity-60"
                />
                <span className="text-sm text-gray-600">{t.marketingCheckbox}</span>
              </label>

              {formState === 'error' && errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0"
                style={{ background: 'linear-gradient(to right, #2A00FF, #5540ff)' }}
              >
                {formState === 'loading' ? t.submitLoading : t.submitButton}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="block w-full text-center text-sm text-gray-500 underline hover:text-gray-700"
              >
                {t.cancelButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
