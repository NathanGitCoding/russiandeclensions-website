'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, MessageSquare, Zap, Trophy } from 'lucide-react';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

const ASSETS = '/landing-cases';

const FEATURE_CONFIG = [
  {
    mockup: `${ASSETS}/Mockup2.png`,
    mockupAlt: `${ASSETS}/Mockup1.png`,
    icon: BookOpen,
    color: 'white' as const,
  },
  {
    mockup: `${ASSETS}/Mockup5.png`,
    mockupAlt: `${ASSETS}/Mockup3.png`,
    icon: Zap,
    color: 'blue' as const,
  },
  {
    mockup: `${ASSETS}/Mockup3.png`,
    mockupAlt: `${ASSETS}/Mockup1.png`,
    icon: MessageSquare,
    color: 'white' as const,
  },
  { mockup: `${ASSETS}/Mockup4.png`, mockupAlt: null, icon: Trophy, color: 'blue' as const },
];

export default function LandingFeaturesShowcase() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const features = t.features.map((f, i) => ({ ...f, ...FEATURE_CONFIG[i] })) as Array<
    (typeof t.features)[number] & (typeof FEATURE_CONFIG)[number]
  >;
  return (
    <div id="app-preview">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;
        const Section = feature.color === 'blue' ? 'section-blue' : 'section-white';
        const textColor = feature.color === 'blue' ? 'text-white' : 'text-[hsl(220,20%,10%)]';
        const textMuted = feature.color === 'blue' ? 'text-white/80' : 'text-[hsl(220,10%,40%)]';
        const Icon = feature.icon;

        const config = FEATURE_CONFIG[index]!;
        const mockup = config.mockup;
        const mockupAlt = config.mockupAlt;
        const renderMockup = () => {
          if (mockupAlt && mockup === `${ASSETS}/Mockup5.png`) {
            return (
              <div className="group relative mx-auto flex min-h-[300px] w-full max-w-[300px] cursor-pointer items-center justify-center overflow-visible sm:min-h-[368px] sm:max-w-[345px] md:min-h-[437px] md:max-w-[368px]">
                <Image
                  src={mockupAlt!}
                  alt={feature.altBackground || feature.alt}
                  width={265}
                  height={529}
                  sizes="(max-width: 640px) 209px, (max-width: 768px) 241px, 265px"
                  loading="lazy"
                  className="absolute z-0 w-[65%] -translate-x-12 translate-y-4 rotate-[-12deg] rounded-2xl drop-shadow-lg transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:w-[70%] sm:-translate-x-20 sm:translate-y-6 md:w-[72%] md:-translate-x-28 md:translate-y-8 lg:-translate-x-36"
                />
                <Image
                  src={mockup}
                  alt={feature.alt}
                  width={299}
                  height={598}
                  sizes="(max-width: 640px) 230px, (max-width: 768px) 276px, 299px"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  priority={index === 0}
                  className="relative z-10 w-full max-w-[230px] translate-x-2 rounded-2xl drop-shadow-xl transition-transform duration-300 ease-out group-hover:scale-[1.03] sm:max-w-[276px] sm:translate-x-4 md:max-w-[300px] md:translate-x-8"
                />
              </div>
            );
          }
          const src = mockupAlt && mockup === `${ASSETS}/Mockup3.png` ? mockupAlt : mockup;
          return (
            <Image
              src={src}
              alt={feature.alt}
              width={322}
              height={644}
              sizes="(max-width: 640px) 253px, (max-width: 768px) 299px, 322px"
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0}
              className="mx-auto w-full max-w-[253px] cursor-pointer rounded-2xl drop-shadow-xl transition-transform duration-300 ease-out hover:scale-[1.03] sm:max-w-[299px] md:max-w-[322px]"
            />
          );
        };

        return (
          <section
            key={feature.title}
            className={`${Section} overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32`}
          >
            <div className="container mx-auto px-6 sm:px-6 md:px-16 lg:px-24">
              <div className="grid items-center gap-10 overflow-visible md:grid-cols-2 md:gap-16">
                {!isEven && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="order-2 flex justify-center md:order-1"
                  >
                    {renderMockup()}
                  </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                  className={isEven ? 'order-1' : 'order-2'}
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      feature.color === 'blue' ? 'bg-white/10' : 'bg-[hsl(210,100%,96%)]'
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 ${
                        feature.color === 'blue' ? 'text-white' : 'text-[hsl(210,100%,50%)]'
                      }`}
                    />
                  </div>
                  <h2
                    className={`mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl ${textColor}`}
                  >
                    {feature.title}
                  </h2>
                  <p className={`text-base leading-relaxed sm:text-lg ${textMuted}`}>
                    {feature.description}
                  </p>
                  <div
                    className={`mt-6 h-0.5 w-20 rounded-full ${
                      feature.color === 'blue' ? 'bg-white/60' : 'bg-[hsl(210,100%,50%)]/60'
                    }`}
                  />
                </motion.div>
                {isEven && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex justify-center"
                  >
                    {renderMockup()}
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
