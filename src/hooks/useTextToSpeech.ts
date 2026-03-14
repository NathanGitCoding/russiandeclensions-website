'use client';

import { useCallback, useState, useEffect } from 'react';

/**
 * Hook pour la synthèse vocale (Text-to-Speech) en russe via Web Speech API.
 * Adapté pour le web, sans dépendance à Capacitor.
 */
export function useTextToSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported(typeof window !== 'undefined' && !!window.speechSynthesis);
  }, []);

  const speak = useCallback(async (text: string, lang = 'ru-RU') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Préférer une voix russe si disponible
    const voices = window.speechSynthesis.getVoices();
    const russianVoice = voices.find((v) => v.lang.startsWith('ru'));
    if (russianVoice) {
      utterance.voice = russianVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // Charger les voix (nécessaire sur Chrome)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
  };
}
