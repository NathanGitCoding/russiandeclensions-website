'use client';

import { motion } from 'framer-motion';
import {
  BoltIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
  SignalSlashIcon,
} from '@heroicons/react/24/outline';
import { useLandingLanguage } from '@/contexts/LandingLanguageContext';
import { getLandingTranslations } from '@/data/website/landingTranslations';

const HIGHLIGHT_ICONS = [
  BoltIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  SpeakerWaveIcon,
  SignalSlashIcon,
  ChartBarIcon,
];

export default function LandingFeaturesHighlights() {
  const { landingLanguage } = useLandingLanguage();
  const t = getLandingTranslations(landingLanguage);
  const highlights = t.highlights.map((h, i) => ({ ...h, Icon: HIGHLIGHT_ICONS[i] }));
  return (
    <section
      className="section-white overflow-x-hidden py-16 sm:py-20 md:py-24 lg:py-32"
      id="features"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[hsl(220,20%,10%)] sm:text-3xl md:text-4xl">
            {t.featuresSection.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[hsl(220,10%,40%)] sm:text-lg">
            {t.featuresSection.subtitle}
          </p>
          <div className="mx-auto mt-6 h-0.5 w-20 rounded-full bg-[hsl(210,100%,50%)]/60" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.Icon ?? BookOpenIcon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: index * 0.06,
                }}
                className="flex gap-5 rounded-2xl border border-[hsl(210,20%,90%)] bg-[hsl(210,100%,96%)]/50 p-6 transition-colors hover:bg-[hsl(210,100%,96%)]/80"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(210,100%,50%)]/10">
                  <Icon className="h-6 w-6 text-[hsl(210,100%,50%)]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-[hsl(220,20%,10%)]">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[hsl(220,10%,40%)]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
