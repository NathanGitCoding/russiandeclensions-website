'use client';

import { useState, useCallback } from 'react';
import LandingHero from '@/components/landing/LandingHero';
import LandingCTA from '@/components/landing/LandingCTA';
import { WaitlistModal } from '@/components/landing/WaitlistModal';

type WaitlistSource = 'ios' | 'android';

export function HomeHero() {
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
      <LandingHero
        onAppStoreClick={() => openWaitlistModal('ios')}
        onPlayStoreClick={() => openWaitlistModal('android')}
      />
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </>
  );
}

export function HomeCTA() {
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
      <LandingCTA
        onAppStoreClick={() => openWaitlistModal('ios')}
        onPlayStoreClick={() => openWaitlistModal('android')}
      />
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </>
  );
}
