'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  /** Si false, ne crée pas d'observer et retourne isVisible: true (ex. prefers-reduced-motion) */
  enabled?: boolean;
}

/**
 * Hook pour utiliser Intersection Observer
 * Charge les images/composants uniquement quand ils sont visibles
 *
 * @param options - Options pour Intersection Observer
 * @returns [ref, isVisible] - Ref à attacher à l'élément, et état de visibilité
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement | null>, boolean] {
  const { rootMargin = '50px', threshold = 0.1, enabled = true } = options;
  const [isVisible, setIsVisible] = useState(!enabled);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, isVisible, rootMargin, threshold]);

  return [ref, isVisible];
}
