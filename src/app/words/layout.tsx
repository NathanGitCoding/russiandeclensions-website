import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import '../landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Russian Declensions - Learn Russian Grammar',
  description: 'Russian word declensions and cases. Master Russian grammar.',
};

export default function WordsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
