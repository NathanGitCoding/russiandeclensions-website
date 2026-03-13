'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHero from '@/components/landing/LandingHero';
import { WaitlistModal } from '@/components/landing/WaitlistModal';

const LandingFeaturesShowcase = dynamic(
  () => import('@/components/landing/LandingFeaturesShowcase'),
  {
    ssr: true,
    loading: () => (
      <div className="section-white min-h-[400px] animate-pulse py-24" aria-hidden="true" />
    ),
  }
);

const LandingFeaturesHighlights = dynamic(
  () => import('@/components/landing/LandingFeaturesHighlights'),
  {
    ssr: true,
    loading: () => (
      <div className="section-white min-h-[400px] animate-pulse py-24" aria-hidden="true" />
    ),
  }
);

const LandingTestimonials = dynamic(() => import('@/components/landing/LandingTestimonials'), {
  ssr: true,
  loading: () => (
    <div className="section-blue min-h-[400px] animate-pulse py-24" aria-hidden="true" />
  ),
});

const LandingAbout = dynamic(() => import('@/components/landing/LandingAbout'), {
  ssr: true,
  loading: () => (
    <div className="section-white min-h-[400px] animate-pulse py-24" aria-hidden="true" />
  ),
});

const LandingCTA = dynamic(() => import('@/components/landing/LandingCTA'), {
  ssr: true,
  loading: () => (
    <div className="section-blue min-h-[400px] animate-pulse py-24" aria-hidden="true" />
  ),
});

type WaitlistSource = 'ios' | 'android';

export default function HomePage() {
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
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <LandingNavbar />
        <main className="flex-1">
          <LandingHero
            onAppStoreClick={() => openWaitlistModal('ios')}
            onPlayStoreClick={() => openWaitlistModal('android')}
          />
          <LandingFeaturesShowcase />
          <LandingFeaturesHighlights />
          <LandingTestimonials />
          <LandingAbout />
          <LandingCTA
            onAppStoreClick={() => openWaitlistModal('ios')}
            onPlayStoreClick={() => openWaitlistModal('android')}
          />
        </main>
        <LandingFooter />
      <WaitlistModal
        isOpen={waitlistModal.isOpen}
        onClose={closeWaitlistModal}
        source={waitlistModal.source}
      />
    </div>
  );
}
