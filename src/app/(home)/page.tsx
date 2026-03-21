import LandingNavbar from '@/components/landing/LandingNavbar';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingFeaturesShowcase from '@/components/landing/LandingFeaturesShowcase';
import LandingFeaturesHighlights from '@/components/landing/LandingFeaturesHighlights';
import LandingTestimonials from '@/components/landing/LandingTestimonials';
import LandingAbout from '@/components/landing/LandingAbout';
import { HomeHero, HomeCTA } from '@/components/landing/HomePageClient';

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
