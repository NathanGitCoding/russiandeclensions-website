import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import '../landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLandingLangFromRequest();
  const t = getLandingTranslations(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: t.freeEbookPage.metadataTitle,
    description: t.freeEbookPage.metadataDescription,
    alternates: {
      canonical: '/free-ebook',
      languages: {
        en: '/free-ebook',
        fr: '/free-ebook',
        de: '/free-ebook',
        pl: '/free-ebook',
        tr: '/free-ebook',
        es: '/free-ebook',
        it: '/free-ebook',
        pt: '/free-ebook',
        nl: '/free-ebook',
        ru: '/free-ebook',
        'x-default': '/free-ebook',
      },
    },
    openGraph: {
      title: t.freeEbookPage.metadataTitle,
      description: t.freeEbookPage.metadataDescription,
      url: '/free-ebook',
      type: 'website',
      siteName: 'Russian Cases with Anna®',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.freeEbookPage.metadataTitle,
      description: t.freeEbookPage.metadataDescription,
    },
  };
}

export default function FreeEbookLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
