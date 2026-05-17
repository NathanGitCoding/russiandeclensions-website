import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import '../landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

const ogImage = {
  url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
  width: 1200,
  height: 1200,
  alt: 'Russian Cases with Anna - Learn Russian grammar',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Russian Grammar Blog | Russian Cases with Anna',
  description:
    'Articles and guides on Russian cases, declensions, prepositions, and how to learn Russian grammar effectively.',
  keywords: 'Russian grammar blog, Russian cases articles, learn Russian, Russian declension guide',
  alternates: { canonical: '/blog' },
  openGraph: {
    url: '/blog',
    type: 'website',
    siteName: 'Russian Cases with Anna®',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
