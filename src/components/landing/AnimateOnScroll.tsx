'use client';

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type AnimationVariant = 'fade-up' | 'fade-in-left' | 'fade-in-right';

interface AnimateOnScrollProps {
  variant?: AnimationVariant;
  /** Délai en secondes pour effet stagger */
  delay?: number;
  /** rootMargin pour l'IntersectionObserver (ex. '-40px') */
  rootMargin?: string;
  children: React.ReactNode;
  className?: string;
}

export function AnimateOnScroll({
  variant = 'fade-up',
  delay = 0,
  rootMargin = '-40px',
  children,
  className = '',
}: AnimateOnScrollProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin,
    threshold: 0.1,
    enabled: !prefersReducedMotion,
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  const visible = prefersReducedMotion || isVisible;
  const variantClass = `animate-${variant}`;
  const visibleClass = visible ? 'is-visible' : '';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass} ${visibleClass} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
