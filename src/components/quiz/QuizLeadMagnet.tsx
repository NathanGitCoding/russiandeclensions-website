'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/landing/WaitlistModal';
import type { LearnArticleLeadMagnet } from '@/data/learnArticles';

type WaitlistSource = 'ios' | 'android';

export function QuizLeadMagnet({ cta }: { cta: LearnArticleLeadMagnet }) {
  const [waitlistModal, setWaitlistModal] = useState<{
    isOpen: boolean;
    source: WaitlistSource | null;
  }>({ isOpen: false, source: null });

  const openWaitlistModal = useCallback((source: WaitlistSource) => {
    setWaitlistModal({ isOpen: true, source });
  }, []);

  const closeWaitlistModal = useCallback(() => {
    setWaitlistModal((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <>
      <div
        className="rounded-xl border-2 px-4 py-4"
        style={{
          background: 'hsl(210 100% 50% / 0.06)',
          borderColor: 'hsl(210 100% 50% / 0.25)',
        }}
      >
        {/* Row 1: Title + description (full width) */}
        <p className="text-sm font-semibold text-gray-800">{cta.title}</p>
        <p className="mt-1 text-xs text-gray-600">{cta.description}</p>

        {/* Row 2: Icon in circle left + badges side by side right */}
        <div className="mt-3 flex items-center gap-3">
          <Image
            src="/landing-cases/icon-app-russian-cases-with-anna.webp"
            alt=""
            width={46}
            height={46}
            className="flex-shrink-0 rounded-full"
            aria-hidden
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openWaitlistModal('ios')}
              className="transition-transform hover:scale-105"
              aria-label="Download on the App Store"
            >
              <Image
                src="/landing-cases/app-store-badge.svg"
                alt=""
                width={100}
                height={33}
              />
            </button>
            <button
              type="button"
              onClick={() => openWaitlistModal('android')}
              className="transition-transform hover:scale-105"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/landing-cases/google-play-badge.svg"
                alt=""
                width={112}
                height={33}
              />
            </button>
          </div>
        </div>
      </div>
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </>
  );
}
