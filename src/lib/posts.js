import { marked } from 'marked';

const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }
  const frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const value = line
        .slice(idx + 1)
        .trim()
        .replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  }
  return { frontmatter, body: match[2].trim() };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { frontmatter, body } = parseFrontmatter(raw);
    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      title: frontmatter.title ?? '',
      date: frontmatter.date ?? '',
      category: frontmatter.category ?? 'RESEARCH',
      readTime: frontmatter.readTime ?? '',
      excerpt: frontmatter.excerpt ?? '',
      featured: frontmatter.featured === 'true',
      html: marked.parse(body)
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function formatDateShort(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return `${MONTHS[month - 1]} ${day}`;
}
