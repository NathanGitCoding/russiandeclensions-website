import React from 'react';
import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import { getLandingLangFromRequest } from '@/lib/landingLangServer';
import { getWordPageTranslations } from '@/data/website/wordPageTranslations';
import '../landing.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLandingLangFromRequest();
  const wt = getWordPageTranslations(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: wt.layoutSEO.title,
    description: wt.layoutSEO.description,
  };
}

export default function RussianDeclensionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing-cases min-h-screen bg-white">
      <LandingNavbar />
      <main className="pt-14 sm:pt-16">{children}</main>
      <LandingFooter />
    </div>
  );
}
