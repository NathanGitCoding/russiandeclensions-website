'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { getRandomMascot, getDefaultMascot, type MascotType } from '@/lib/mascotUtils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/** Facteur d'agrandissement des mascottes sur tablette (min-width: 768px) */
const TABLET_SIZE_FACTOR = 1.25;

export type MascotPose =
  | 'welcome'
  | 'echec'
  | 'reussite'
  | 'une-etoile'
  | 'deux-etoiles'
  | 'trois-etoiles'
  | 'error';

interface MascotWrapperProps {
  pose: MascotPose;
  size?: 'sm' | 'md' | 'lg' | number;
  className?: string;
  priority?: boolean;
  customSrc?: string;
}

// Mascottes qui n'ont pas de variantes aléatoires - peuvent être chargées immédiatement
const STATIC_POSES: MascotPose[] = ['welcome', 'error'];

function MascotWrapper({
  pose,
  size = 'md',
  className = '',
  priority = false,
  customSrc,
}: MascotWrapperProps) {
  // Intersection Observer pour lazy loading (sauf si priority est true)
  const [imageRef, isImageVisible] = useIntersectionObserver({
    rootMargin: priority ? '0px' : '100px', // Charger plus tôt si pas prioritaire
    threshold: 0.1,
  });

  // Pour les poses statiques, on peut initialiser immédiatement
  const isStaticPose = STATIC_POSES.includes(pose);
  const staticSrc = isStaticPose ? getDefaultMascot(pose as MascotType) : null;

  // Pour les poses statiques, on initialise directement le src
  // Pour les autres, on attend le montage client pour la sélection aléatoire
  const [mounted, setMounted] = useState(false);
  const [mascotSrc, setMascotSrc] = useState<string>(() => {
    if (customSrc) {
      return customSrc;
    }
    // Initialiser immédiatement pour les poses statiques
    if (isStaticPose && staticSrc) {
      return staticSrc;
    }
    return '';
  });

  // S'assurer que la sélection aléatoire se fait uniquement côté client (seulement pour les poses non-statiques)
  useEffect(() => {
    setMounted(true);
    if (customSrc) {
      setMascotSrc(customSrc);
      return;
    }
    if (isStaticPose) {
      setMascotSrc(staticSrc ?? '');
      return;
    }
    setMascotSrc(getRandomMascot(pose as MascotType));
  }, [pose, isStaticPose, staticSrc, customSrc]);

  // Détection tablette pour augmenter la taille des mascottes
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = () => setIsTablet(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Détermine la taille finale (valeur fixe pour éviter les changements de layout)
  // Sur tablette : +25 % pour mieux exploiter l'espace
  const finalSize = useMemo(() => {
    let base: number;
    if (typeof size === 'number') {
      base = size;
    } else {
      switch (size) {
        case 'sm':
          base = 80;
          break;
        case 'lg':
          base = 180;
          break;
        case 'md':
        default:
          base = 120;
          break;
      }
    }
    return isTablet ? Math.round(base * TABLET_SIZE_FACTOR) : base;
  }, [size, isTablet]);

  // Détermine les classes CSS
  const imageClasses = className;

  // Pour les poses statiques, on peut rendre immédiatement (mascotSrc est déjà initialisé)
  // Pour les autres, attendre le montage côté client
  const shouldRender = customSrc
    ? mascotSrc !== ''
    : isStaticPose
      ? mascotSrc !== ''
      : mounted && mascotSrc !== '';

  // Si priority est true, charger immédiatement
  // Sinon, attendre que l'image soit visible (Intersection Observer)
  const shouldLoadImage = priority || isImageVisible || shouldRender;

  // Toujours réserver l'espace avec un conteneur de taille fixe
  // pour éviter les décalages visuels lors du chargement
  if (!shouldRender || !mascotSrc) {
    return (
      <div
        ref={imageRef as React.RefObject<HTMLDivElement>}
        style={{
          width: finalSize,
          height: finalSize,
          minWidth: finalSize,
          minHeight: finalSize,
          display: 'inline-block',
        }}
        className={imageClasses}
        aria-label={`Russian Cases with Anna® Mascot - ${pose}`}
      />
    );
  }

  return (
    <div
      ref={imageRef as React.RefObject<HTMLDivElement>}
      style={{
        width: finalSize,
        height: finalSize,
        minWidth: finalSize,
        minHeight: finalSize,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {shouldLoadImage && (
        <Image
          src={mascotSrc}
          alt={`Russian Cases with Anna® Mascot - ${pose}`}
          width={finalSize}
          height={finalSize}
          className={imageClasses}
          priority={priority}
          unoptimized={false}
          sizes={`(max-width: 400px) ${Math.min(finalSize, 400)}px, (max-width: 800px) ${Math.min(finalSize, 800)}px, ${finalSize}px`}
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
          onError={(e) => {
            // Fallback: hide the image if it fails to load
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
    </div>
  );
}

export default MascotWrapper;
