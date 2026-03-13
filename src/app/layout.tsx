import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Display, Rubik } from 'next/font/google';
import { LandingLanguageProvider } from '@/contexts/LandingLanguageContext';
import './globals.css';

const notoSansDisplay = Noto_Sans_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-noto-sans-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-rubik',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Russian Declensions - Learn Russian Grammar',
    template: '%s | Russian Declensions',
  },
  openGraph: {
    siteName: 'Russian Declensions',
    locale: 'en_US',
  },
  description:
    'Master Russian grammar in 5 minutes a day. Free lessons and articles on Russian cases and declensions.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#60a5fa' },
  ],
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Russian Declensions',
  url: siteUrl,
  description: 'Master Russian grammar. Free lessons and declension tables for Russian cases.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/words?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body
        className={`${notoSansDisplay.variable} ${rubik.variable} min-h-screen font-sans antialiased`}
      >
        <LandingLanguageProvider>{children}</LandingLanguageProvider>
      </body>
    </html>
  );
}
