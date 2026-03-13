/**
 * Redirection 301 : /words/[slug] → /russian-declension/[slug]
 * Gère les anciens slugs (word-16) et les slugs actuels (aleksandr).
 */

import { permanentRedirect } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getWordBySlug, getLegacyRedirect } from '@/lib/words';

const TARGET_BASE = '/russian-declension';

type Props = { params: Promise<{ slug: string }> };

export default async function WordsSlugRedirect({ params }: Props) {
  const { slug } = await params;

  const legacyTarget = getLegacyRedirect(slug);
  if (legacyTarget) {
    permanentRedirect(`${TARGET_BASE}/${legacyTarget}`);
  }

  const word = await getWordBySlug(slug);
  if (word) {
    permanentRedirect(`${TARGET_BASE}/${slug}`);
  }

  notFound();
}
