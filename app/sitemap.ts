import type { MetadataRoute } from "next";
import { getAllPosts, CATEGORIES } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const latestPostDate = posts.reduce<Date | undefined>((acc, p) => {
    const d = new Date(p.frontmatter.updatedDate ?? p.frontmatter.publishDate);
    return !acc || d > acc ? d : acc;
  }, undefined);

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/web-design", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/web-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/hosting-care", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/seo-local-search", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/website-refresh", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries/home-services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/contractors", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/restaurants", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/healthcare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/real-estate", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/beauty-wellness", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/auto-services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/creative-portfolio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/legal-professional", priority: 0.7, changeFrequency: "monthly" },
    { path: "/industries/fitness-sports", priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  const blogIndexEntry: MetadataRoute.Sitemap[number] = {
    url: `${SITE_URL}/blog`,
    lastModified: latestPostDate,
    changeFrequency: "weekly",
    priority: 0.8,
  };

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((slug) => {
    const latest = posts
      .filter((p) => p.frontmatter.category === slug)
      .reduce<Date | undefined>((acc, p) => {
        const d = new Date(p.frontmatter.updatedDate ?? p.frontmatter.publishDate);
        return !acc || d > acc ? d : acc;
      }, undefined);
    return {
      url: `${SITE_URL}/blog/category/${slug}`,
      lastModified: latest,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const { slug, publishDate, updatedDate } = post.frontmatter;
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(updatedDate ?? publishDate),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticEntries, blogIndexEntry, ...categoryEntries, ...postEntries];
}
