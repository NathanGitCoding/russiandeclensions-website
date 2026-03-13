import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import '../landing-cases/landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const ogImage = {
  url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
  width: 1200,
  height: 1200,
  alt: 'Russian Cases with Anna - Learn Russian grammar',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Learn Russian Grammar & Cases | Russian Cases with Anna',
  description:
    'Free Russian grammar lessons and articles. Master declensions, cases, and vocabulary.',
  keywords: 'Russian grammar, Russian cases, Russian declension, learn Russian, дательный падеж',
  alternates: { canonical: '/learn' },
  openGraph: {
    url: '/learn',
    type: 'website',
    siteName: 'Russian Cases with Anna®',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

export default function LearnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
