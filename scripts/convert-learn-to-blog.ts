/**
 * Converts learnArticles.ts content to Markdown files in content/blog/
 * Run: npx tsx scripts/convert-learn-to-blog.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type {
  LearnArticle,
  LearnArticleSection,
  LearnArticleTable,
  LearnArticleComparisonTable,
  LearnArticleMistakeCard,
  LearnArticleItem,
  LearnArticleFaqItem,
} from '../src/data/learnArticles';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../content/blog');

function tableToMarkdown(table: LearnArticleTable): string {
  const { headers, rows, caption } = table;
  const headerRow = headers.join(' | ');
  const separator = headers.map(() => '---').join(' | ');
  let md = '';
  if (caption) md += `*${caption}*\n\n`;
  md += `| ${headerRow} |\n`;
  md += `| ${separator} |\n`;
  for (const row of rows) {
    md += `| ${row.join(' | ')} |\n`;
  }
  return md + '\n';
}

function comparisonTableToMarkdown(table: LearnArticleComparisonTable): string {
  const { headers, rows } = table;
  const headerRow = headers.join(' | ');
  const separator = headers.map(() => '---').join(' | ');
  let md = `| ${headerRow} |\n`;
  md += `| ${separator} |\n`;
  for (const row of rows) {
    const cells = headers.map((h) => row[h] ?? '');
    md += `| ${cells.join(' | ')} |\n`;
  }
  return md + '\n';
}

function mistakeCardToMarkdown(card: LearnArticleMistakeCard): string {
  return `
**${card.title}**

- ✗ Wrong: ${card.wrong}
- ✓ Correct: ${card.correct}
- 📌 Why: ${card.why}
- 🔧 Fix: ${card.fixHref ? `[${card.fix}](${card.fixHref})` : card.fix}
`;
}

function sectionToMarkdown(section: LearnArticleSection): string {
  let md = `## ${section.h2}\n\n`;
  if (section.content) md += section.content.replace(/\n\n+/g, '\n\n') + '\n\n';
  if (section.image) {
    md += `![${section.image.alt}](${section.image.src})\n\n`;
  }
  if (section.subsections) {
    for (const sub of section.subsections) {
      md += `### ${sub.h3}\n\n`;
      if (sub.content) md += sub.content.replace(/\n\n+/g, '\n\n') + '\n\n';
      if (sub.bullets) {
        md += sub.bullets.map((b) => `- ${b}`).join('\n') + '\n\n';
      }
    }
  }
  if (section.table) md += tableToMarkdown(section.table);
  if (section.bullets) {
    md += section.bullets.map((b) => `- ${b}`).join('\n') + '\n\n';
  }
  if (section.mistakeCards?.length) {
    md += section.mistakeCards.map(mistakeCardToMarkdown).join('\n');
  }
  return md;
}

function itemToMarkdown(item: LearnArticleItem): string {
  let md = `### ${item.rank}. ${item.title}\n\n`;
  if (item.image) md += `![${item.image.alt}](${item.image.src})\n\n`;
  md += item.description + '\n\n';
  if (item.rating !== undefined) md += `**Russian cases rating:** ${item.rating}/10\n\n`;
  if (item.price) md += `*${item.price}*\n\n`;
  if (item.pros?.length) {
    md += '**Pros:**\n' + item.pros.map((p) => `- ${p}`).join('\n') + '\n\n';
  }
  if (item.cons?.length) {
    md += '**Cons:**\n' + item.cons.map((c) => `- ${c}`).join('\n') + '\n\n';
  }
  if (item.affiliateLink) {
    md += `[View app →](${item.affiliateLink})\n\n`;
  }
  return md;
}

function articleToMarkdown(article: LearnArticle): string {
  const frontmatter: Record<string, unknown> = {
    title: article.metaTitle || article.h1,
    description: article.metaDescription || article.intro.replace(/\*\*/g, '').slice(0, 160),
    slug: article.slug,
    date: '2025-03-13',
    keywords: article.keywords,
  };
  if (article.heroImage) frontmatter.image = article.heroImage.src;

  let md = '---\n';
  md += `title: "${(frontmatter.title as string).replace(/"/g, '\\"')}"\n`;
  md += `description: "${(frontmatter.description as string).replace(/"/g, '\\"').replace(/\n/g, ' ')}"\n`;
  md += `slug: "${article.slug}"\n`;
  md += `date: "${frontmatter.date}"\n`;
  md += `keywords: ${JSON.stringify(article.keywords)}\n`;
  if (frontmatter.image) md += `image: "${frontmatter.image}"\n`;
  md += '---\n\n';

  md += article.intro + '\n\n';

  if (article.whatYouLearn?.length) {
    md += '**What you\'ll learn:**\n\n';
    md += article.whatYouLearn.map((w) => `- ${w}`).join('\n') + '\n\n';
  }

  if (article.sections?.length) {
    for (const section of article.sections) {
      md += sectionToMarkdown(section);
    }
  }

  if (article.items?.length) {
    for (const item of article.items) {
      md += itemToMarkdown(item);
    }
  }

  if (article.comparisonTable) {
    md += '## Quick Comparison\n\n';
    md += comparisonTableToMarkdown(article.comparisonTable);
  }

  if (article.leadMagnetCta) {
    md += `---

**${article.leadMagnetCta.title}**

${article.leadMagnetCta.description}

[${article.leadMagnetCta.ctaText}](${article.leadMagnetCta.ctaHref})

---
`;
  }

  if (article.conclusionBullets) {
    if (article.conclusionIntro) md += article.conclusionIntro + '\n\n';
    md += article.conclusionBullets.map((b) => `- ${b}`).join('\n') + '\n\n';
    if (article.conclusionOutro) md += article.conclusionOutro + '\n\n';
  } else if (article.conclusion) {
    md += article.conclusion + '\n\n';
  }
  if (article.conclusionOutro && !article.conclusionBullets) {
    md += article.conclusionOutro + '\n\n';
  }

  if (article.internalLinks?.length) {
    md += '**Related guides:**\n\n';
    for (const link of article.internalLinks) {
      md += `- [${link.label}](${link.href})\n`;
    }
    md += '\n';
  }

  if (article.faq?.length) {
    md += '## Frequently Asked Questions\n\n';
    for (const faq of article.faq as LearnArticleFaqItem[]) {
      md += `**${faq.question}**\n\n${faq.answer}\n\n`;
    }
  }

  md += `\n[${article.ctaText}](${article.ctaHref})\n`;

  return md;
}

async function main() {
  const { learnArticles } = await import('../src/data/learnArticles');
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  const slugs = Object.keys(learnArticles) as (keyof typeof learnArticles)[];
  console.log(`Converting ${slugs.length} articles...`);

  for (const slug of slugs) {
    const article = learnArticles[slug] as LearnArticle;
    const markdown = articleToMarkdown(article);
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    fs.writeFileSync(filePath, markdown, 'utf-8');
    console.log(`  ✓ ${slug}.md`);
  }

  console.log(`\nDone! Files written to ${BLOG_DIR}`);
}

main();
