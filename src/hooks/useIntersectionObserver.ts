'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Hook pour utiliser Intersection Observer
 * Charge les images/composants uniquement quand ils sont visibles
 *
 * @param options - Options pour Intersection Observer
 * @returns [ref, isVisible] - Ref à attacher à l'élément, et état de visibilité
 */
export function useIntersectionObserver(
  options: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  } = {}
): [React.RefObject<HTMLElement>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Si l'élément est déjà visible, ne pas créer d'observer
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          // Désactiver l'observer une fois visible pour économiser les ressources
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Charger 50px avant d'être visible
        threshold: 0.1, // Déclencher quand 10% est visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, options]);

  return [ref, isVisible];
}
