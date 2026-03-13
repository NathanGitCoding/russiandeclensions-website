import React from 'react';
import type { Metadata } from 'next';
import './landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Russian Cases with Anna® - Learn Russian Grammar',
  description:
    'Master Russian grammar in 5 minutes a day. 128 structured lessons, 136 interactive quizzes, vocabulary flashcards. Learn Russian cases with Anna.',
  keywords:
    'apprendre le russe, grammaire russe, cas russes, leçons de russe, application russe, Russian grammar, learn Russian',
  alternates: {
    canonical: '/landing-cases',
  },
  openGraph: {
    url: '/landing-cases',
    type: 'website',
    siteName: 'Russian Cases with Anna®',
    title: 'Russian Cases with Anna® - Learn Russian Grammar',
    description:
      'Master Russian grammar in 5 minutes a day. The app that brings clarity to cases and declensions.',
    images: [
      {
        url: '/landing-cases/icon-app-russian-cases-with-anna.webp',
        width: 1200,
        height: 1200,
        alt: 'Russian Cases with Anna - Learn Russian grammar app',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Russian Cases with Anna® - Learn Russian Grammar',
    description:
      'Master Russian grammar in 5 minutes a day. The app that brings clarity to cases and declensions.',
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Russian Cases with Anna®',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'iOS, Android',
      description:
        'Master Russian grammar in 5 minutes a day. 128 structured lessons, 136 interactive quizzes, vocabulary flashcards.',
      offers: [
        { '@type': 'Offer', url: 'https://apps.apple.com/app/russian-coach' },
        {
          '@type': 'Offer',
          url: 'https://play.google.com/store/apps/details?id=com.russiancoach.app',
        },
      ],
    },
    {
      '@type': 'Organization',
      name: 'Russian Cases with Anna®',
      url: siteUrl,
      logo: `${siteUrl}/landing-cases/icon-app-russian-cases-with-anna.webp`,
    },
  ],
};

export default function LandingCasesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="landing-cases min-h-screen">{children}</div>
    </>
  );
}
