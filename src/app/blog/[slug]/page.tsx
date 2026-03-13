import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getBlogPost, getAllBlogSlugs, getPublishedDate } from '@/lib/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://russiandeclensions.com';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Article Not Found' };

  const url = `${siteUrl}/blog/${slug}`;
  const image = post.frontmatter.image
    ? `${siteUrl}${post.frontmatter.image}`
    : `${siteUrl}/landing-cases/icon-app-russian-cases-with-anna.webp`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.keywords?.join(', '),
    alternates: { canonical: url },
    openGraph: {
      url,
      type: 'article',
      siteName: 'Russian Declensions',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [{ url: image, width: 1200, height: 630, alt: post.frontmatter.title }],
      publishedTime: getPublishedDate(post.frontmatter),
      authors: post.frontmatter.author ? [post.frontmatter.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>
        </nav>

        <article>
        <time
          dateTime={getPublishedDate(post.frontmatter)}
          className="text-sm text-gray-500"
        >
          {new Date(getPublishedDate(post.frontmatter)).toLocaleDateString(
              'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </time>
          {post.frontmatter.author && (
            <span className="ml-2 text-sm text-gray-500">
              by {post.frontmatter.author}
            </span>
          )}

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {post.frontmatter.title}
          </h1>

          <div className="prose prose-gray mt-8 max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-8 mb-4 text-xl font-semibold text-gray-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 mb-3 text-lg font-semibold text-gray-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 leading-7 text-gray-700">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 list-disc pl-6 text-gray-700">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 list-decimal pl-6 text-gray-700">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="mb-1">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">{children}</strong>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
