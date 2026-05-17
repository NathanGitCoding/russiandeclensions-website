'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';
import type { LandingLanguage, LandingTranslations } from '@/data/website/landingTranslations';

type FreeEbookCopy = LandingTranslations['freeEbookPage'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Replace with the final filename once the PDF lives in /public/ebook/.
 * The file is intentionally not committed yet — the form still works,
 * the download button at the success step will 404 until the PDF is added.
 */
const EBOOK_PDF_PATH = '/ebook/russian-cases-cheat-sheet.pdf';

type Props = {
  language: LandingLanguage;
  t: FreeEbookCopy;
};

type ApiResponse = {
  success: boolean;
  errorCode?: 'invalid_email' | 'consent_required' | 'already_registered' | 'server_error';
};

export default function FreeEbookForm({ language, t }: Props) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError(t.errorEmailRequired);
      return;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError(t.errorEmailInvalid);
      return;
    }
    if (!consent) {
      setError(t.errorConsentRequired);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/free-ebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          language,
          marketingAccepted: true,
        }),
      });
      const data: ApiResponse = await res.json().catch(() => ({ success: false }));

      if (res.ok && data.success) {
        setSuccess(true);
        return;
      }

      switch (data.errorCode) {
        case 'already_registered':
          setError(t.errorAlreadyRegistered);
          break;
        case 'invalid_email':
          setError(t.errorEmailInvalid);
          break;
        case 'consent_required':
          setError(t.errorConsentRequired);
          break;
        default:
          setError(t.errorGeneric);
      }
    } catch {
      setError(t.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t.successTitle}</h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">{t.successMessage}</p>
        <a
          href={EBOOK_PDF_PATH}
          download
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(210,100%,50%)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(210,100%,45%)] sm:text-base"
        >
          <Download className="h-4 w-4" aria-hidden />
          {t.successDownload}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
        {t.emailLabel}
        <input
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder}
          className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-[hsl(210,100%,50%)] focus:ring-2 focus:ring-[hsl(210,100%,50%)]/30 focus:outline-none"
          disabled={submitting}
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[hsl(210,100%,50%)] focus:ring-[hsl(210,100%,50%)]"
          disabled={submitting}
        />
        <span>{t.marketingConsent}</span>
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting || !consent || !email}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[hsl(210,100%,50%)] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[hsl(210,100%,45%)] disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {submitting ? t.submitting : t.cta}
      </button>
    </form>
  );
}
