'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/landing/WaitlistModal';
import type { LearnArticleLeadMagnet } from '@/data/learnArticles';

type WaitlistSource = 'ios' | 'android';

export function LearnLeadMagnet({ cta }: { cta: LearnArticleLeadMagnet }) {
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
      <aside className="learn-lead-magnet" aria-labelledby="lead-magnet-heading">
        <div className="learn-lead-magnet-icon-wrap">
          <Image
            src="/landing-cases/icon-app-russian-cases-with-anna.webp"
            alt=""
            width={72}
            height={72}
            className="learn-lead-magnet-icon"
            aria-hidden
          />
        </div>
        <div className="learn-lead-magnet-content">
          <h2 id="lead-magnet-heading" className="learn-lead-magnet-title">
            {cta.title}
          </h2>
          <p>{cta.description}</p>
          <div className="learn-lead-magnet-badges">
            <button
              type="button"
              onClick={() => openWaitlistModal('ios')}
              className="learn-lead-magnet-badge"
              aria-label="Download Russian Cases with Anna on the App Store"
            >
              <Image
                src="/landing-cases/app-store-badge.svg"
                alt=""
                width={120}
                height={40}
                className="learn-lead-magnet-badge-img"
              />
            </button>
            <button
              type="button"
              onClick={() => openWaitlistModal('android')}
              className="learn-lead-magnet-badge"
              aria-label="Get Russian Cases with Anna on Google Play"
            >
              <Image
                src="/landing-cases/google-play-badge.svg"
                alt=""
                width={135}
                height={40}
                className="learn-lead-magnet-badge-img"
              />
            </button>
          </div>
        </div>
      </aside>
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </>
  );
}
