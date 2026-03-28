import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getPracticeTranslations } from '@/data/website/practicePageTranslations';
import '../landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLandingLangFromRequest();
  const t = getPracticeTranslations(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: `${t.metadata.title} | Russian Cases with Anna`,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    alternates: {
      canonical: '/practice',
      languages: {
        en: '/practice',
        fr: '/practice',
        de: '/practice',
        pl: '/practice',
        tr: '/practice',
        es: '/practice',
        it: '/practice',
        pt: '/practice',
        nl: '/practice',
        ru: '/practice',
        'x-default': '/practice',
      },
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: '/practice',
      type: 'website',
      siteName: 'Russian Cases with Anna®',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metadata.title,
      description: t.metadata.description,
    },
  };
}

export default function PracticeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
