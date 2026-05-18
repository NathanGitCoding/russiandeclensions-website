import type { Metadata } from 'next';
import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingFeaturesShowcase from '@/components/landing/LandingFeaturesShowcase';
import LandingFeaturesHighlights from '@/components/landing/LandingFeaturesHighlights';
import LandingTestimonials from '@/components/landing/LandingTestimonials';
import LandingAbout from '@/components/landing/LandingAbout';
import { HomeHero, HomeCTA } from '@/components/landing/HomePageClient';

const description =
  'Master Russian declensions and grammatical cases for free. Interactive quizzes, declension tables for 400+ nouns, and clear lessons on all 6 Russian cases.';

export const metadata: Metadata = {
  title: { absolute: 'Russian Declensions — Learn Russian Cases & Grammar Free' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Russian Declensions — Learn Russian Cases & Grammar Free',
    description,
    images: [
      { url: '/landing-cases/icon-app-russian-cases-with-anna.webp', width: 1200, height: 1200 },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Russian Declensions — Learn Russian Cases & Grammar Free',
    description,
    images: ['/landing-cases/icon-app-russian-cases-with-anna.webp'],
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <LandingNavbar />
      <main className="flex-1">
        <HomeHero />
        <LandingFeaturesShowcase />
        <LandingFeaturesHighlights />
        <LandingTestimonials />
        <LandingAbout />
        <HomeCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
