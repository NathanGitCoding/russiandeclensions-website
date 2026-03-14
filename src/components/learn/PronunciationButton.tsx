'use client';

import { Volume2 } from 'lucide-react';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface PronunciationButtonProps {
  /** Texte russe à prononcer */
  text: string;
  /** Label d'accessibilité (ex. "Listen to Russian pronunciation") */
  ariaLabel?: string;
  /** Classes CSS additionnelles */
  className?: string;
  /** Taille du bouton: xs (28px), sm (32px), md (40px), lg (48px) */
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  xs: 'h-7 w-7',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
};

const iconSizes = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 26,
};

export function PronunciationButton({
  text,
  ariaLabel = 'Listen to Russian pronunciation',
  className = '',
  size = 'md',
}: PronunciationButtonProps) {
  const { speak, isSpeaking, isSupported } = useTextToSpeech();

  if (!isSupported) {
    return null;
  }

  const handleClick = () => {
    speak(text);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSpeaking}
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-white shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses[size]} ${className}`}
      style={{
        background: 'linear-gradient(to right, #3B82F6, #2563EB)',
      }}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {isSpeaking ? (
        <Volume2 className="animate-pulse" strokeWidth={2} size={iconSizes[size]} />
      ) : (
        <Volume2 strokeWidth={2} size={iconSizes[size]} />
      )}
    </button>
  );
}
