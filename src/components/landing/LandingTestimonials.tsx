'use client';

import { Star } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { AnimateOnScroll } from '@/components/landing/AnimateOnScroll';

export default function LandingTestimonials() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const testimonials = t.testimonials.items;
  return (
    <section className="section-blue overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimateOnScroll variant="fade-up" rootMargin="-50px" className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-white/80 sm:text-lg">{t.testimonials.subtitle}</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" rootMargin="-30px" className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-[hsl(210,20%,90%)] bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-[hsl(210,100%,50%)] text-[hsl(210,100%,50%)]"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-[hsl(220,20%,10%)]">&quot;{testimonial.text}&quot;</p>
              <div>
                <div className="font-semibold text-[hsl(220,20%,10%)]">{testimonial.name}</div>
                <div className="text-sm text-[hsl(220,10%,40%)]">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
