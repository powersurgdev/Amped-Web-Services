import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export const CATEGORIES = [
  "web-design",
  "web-development",
  "seo-local-search",
  "hosting-care",
  "industry-insights",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  "web-design": "Web Design",
  "web-development": "Web Development",
  "seo-local-search": "SEO & Local Search",
  "hosting-care": "Hosting & Care",
  "industry-insights": "Industry Insights",
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  "web-design":
    "Design, branding, UX, and conversion strategies for small business websites.",
  "web-development":
    "Performance, speed, modern stacks, and the technical craft behind fast sites.",
  "seo-local-search":
    "Rank higher, show up on Google Maps, and get found by nearby customers.",
  "hosting-care":
    "Hosting, security, backups, and keeping your site online and healthy.",
  "industry-insights":
    "Tactics and playbooks tailored to specific industries we serve.",
};

const blogFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.enum(CATEGORIES),
  excerpt: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  publishDate: z.string(),
  updatedDate: z.string().optional(),
  author: z.string().default("Amped Web Studios"),
  services: z.array(z.string()).default([]),
  tags: z.array(z.string()).optional(),
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .default([]),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  content: string;
}

let postsCache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (postsCache) return postsCache;
  const posts: BlogPost[] = [];
  if (!fs.existsSync(CONTENT_DIR)) {
    postsCache = posts;
    return posts;
  }
  for (const category of CATEGORIES) {
    const categoryDir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(categoryDir)) continue;
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const parsed = blogFrontmatterSchema.safeParse(data);
      if (!parsed.success) {
        console.warn(`Invalid frontmatter in ${filePath}:`, parsed.error.message);
        continue;
      }
      posts.push({ frontmatter: parsed.data, content });
    }
  }
  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishDate).getTime() -
      new Date(a.frontmatter.publishDate).getTime()
  );
  postsCache = posts;
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.frontmatter.slug === slug) ?? null;
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.frontmatter.category === category);
}

export function getAllCategories(): Category[] {
  return [...CATEGORIES];
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPost[] {
  const all = getAllPosts();
  const current = all.find((p) => p.frontmatter.slug === currentSlug);
  if (!current) return [];

  const { category, services, tags } = current.frontmatter;
  const currentServices = new Set(services);
  const currentTags = new Set(tags ?? []);

  const scored = all
    .filter((p) => p.frontmatter.slug !== currentSlug)
    .map((p) => {
      let score = 0;
      if (p.frontmatter.category === category) score += 5;
      for (const s of p.frontmatter.services) {
        if (currentServices.has(s)) score += 2;
      }
      for (const t of p.frontmatter.tags ?? []) {
        if (currentTags.has(t)) score += 3;
      }
      return { post: p, score };
    })
    .filter(({ score }) => score > 0);

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (
      new Date(b.post.frontmatter.publishDate).getTime() -
      new Date(a.post.frontmatter.publishDate).getTime()
    );
  });

  return scored.slice(0, limit).map(({ post }) => post);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.frontmatter.slug);
}

export function getCategoryLabel(slug: string): string {
  return CATEGORY_LABELS[slug as Category] ?? slug;
}

export function getCategoryDescription(slug: string): string {
  return CATEGORY_DESCRIPTIONS[slug as Category] ?? "";
}

export function isValidCategory(slug: string): slug is Category {
  return (CATEGORIES as readonly string[]).includes(slug);
}

export function formatPublishDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 225));
}

export interface Heading {
  text: string;
  slug: string;
  level: 2 | 3;
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");
  let inCodeBlock = false;

  for (const raw of lines) {
    if (raw.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(raw);
    if (!m) continue;

    const level = m[1].length as 2 | 3;
    const text = m[2]
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\*(.+?)\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1")
      .trim();
    headings.push({ text, slug: slugifyHeading(text), level });
  }

  return headings;
}
