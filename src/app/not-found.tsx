import React from 'react';
import Link from 'next/link';

const POPULAR_WORDS = [
  { slug: 'chelovek', label: 'человек (person)' },
  { slug: 'dom', label: 'дом (house)' },
  { slug: 'voda', label: 'вода (water)' },
  { slug: 'kniga', label: 'книга (book)' },
  { slug: 'rabota', label: 'работа (work)' },
  { slug: 'gorod', label: 'город (city)' },
  { slug: 'den', label: 'день (day)' },
  { slug: 'drug', label: 'друг (friend)' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go to Homepage
        </Link>
        <Link
          href="/learn"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Grammar Lessons
        </Link>
        <Link
          href="/words"
          className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          400+ Russian Words
        </Link>
      </div>

      <div className="mt-12 w-full max-w-lg">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
          Popular Declensions
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {POPULAR_WORDS.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/russian-declension/${slug}`}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-blue-300 hover:text-blue-600"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
