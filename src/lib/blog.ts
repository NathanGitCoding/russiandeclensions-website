import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  /** Slug (optionnel) : si absent, dérivé du nom du fichier */
  slug?: string;
  /** Date ISO (format SEO). Alias supporté : publishedAt */
  date?: string;
  publishedAt?: string;
  /** Mots-clés SEO (optionnel) */
  keywords?: string[];
  image?: string;
  author?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.(md|mdx)$/, '');
}

/** Date de publication normalisée (date ou publishedAt) */
export function getPublishedDate(fm: BlogPostFrontmatter): string {
  return fm.date ?? fm.publishedAt ?? '';
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => (f.endsWith('.md') || f.endsWith('.mdx')) && !f.startsWith('README'))
    .map(getSlugFromFilename);
}

export function getBlogPost(slug: string): BlogPost | null {
  const extensions = ['.md', '.mdx'];
  for (const ext of extensions) {
    const filePath = path.join(CONTENT_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogPostFrontmatter,
        content,
      };
    }
  }
  return null;
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  const posts: BlogPost[] = [];
  for (const slug of slugs) {
    const post = getBlogPost(slug);
    if (post) posts.push(post);
  }
  return posts.sort((a, b) => {
    const dateA = getPublishedDate(a.frontmatter);
    const dateB = getPublishedDate(b.frontmatter);
    const tsA = dateA ? new Date(dateA).getTime() : 0;
    const tsB = dateB ? new Date(dateB).getTime() : 0;
    return tsB - tsA;
  });
}
