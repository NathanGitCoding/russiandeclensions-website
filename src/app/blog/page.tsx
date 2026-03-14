import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts, getPublishedDate } from '@/lib/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Blog - Russian Grammar & Declensions',
  description:
    'Articles and guides to master Russian grammar, cases, and declensions. Tips and lessons for learners.',
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    url: `${siteUrl}/blog`,
    type: 'website',
    siteName: 'Russian Declensions',
    title: 'Blog | Russian Declensions',
    description: 'Articles and guides to master Russian grammar, cases, and declensions.',
  },
};

export default function BlogListPage() {
  const posts = getAllBlogPosts();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    ],
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog - Russian Grammar & Declensions',
    description: 'Articles and guides to master Russian grammar, cases, and declensions.',
    url: `${siteUrl}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem' as const,
        position: i + 1,
        name: post.frontmatter.title,
        url: `${siteUrl}/blog/${post.slug}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
          Blog
        </h1>
        <p className="mb-12 text-gray-600">
          Articles and guides to help you master Russian grammar and declensions.
        </p>

        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="border-b border-gray-200 pb-8">
                <time
                  dateTime={getPublishedDate(post.frontmatter)}
                  className="text-sm text-gray-500"
                >
                  {new Date(getPublishedDate(post.frontmatter)).toLocaleDateString(
                    'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </time>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600 hover:underline"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600">
                  {post.frontmatter.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="text-gray-500">No articles yet. Check back soon!</p>
        )}
      </main>
    </div>
  );
}
