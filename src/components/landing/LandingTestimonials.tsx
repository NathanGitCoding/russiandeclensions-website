'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';
import { AnimateOnScroll } from '@/components/landing/AnimateOnScroll';

const TESTIMONIAL_AVATARS = [
  '/landing-cases/testimonials/3.svg',
  '/landing-cases/testimonials/1.svg',
  '/landing-cases/testimonials/2.svg',
] as const;

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

        <AnimateOnScroll
          variant="fade-up"
          rootMargin="-30px"
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col gap-6 rounded-2xl border border-[hsl(210,20%,90%)] bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-[hsl(210,100%,50%)] text-[hsl(210,100%,50%)]"
                  />
                ))}
              </div>
              <p className="flex-1 leading-relaxed text-[hsl(220,20%,10%)]">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex shrink-0 items-center gap-4">
                {TESTIMONIAL_AVATARS[index] != null ? (
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[hsl(210,20%,88%)] bg-[hsl(210,20%,96%)] shadow-sm">
                    <Image
                      src={TESTIMONIAL_AVATARS[index]}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="min-w-0">
                  <div className="font-semibold text-[hsl(220,20%,10%)]">{testimonial.name}</div>
                  <div className="text-sm text-[hsl(220,10%,40%)]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
