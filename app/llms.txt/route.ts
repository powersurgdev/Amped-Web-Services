import { getAllPosts, getCategoryLabel } from "@/lib/blog";
import { SITE_URL as BASE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const header = `# Amped Web Studios

> Amped Web Studios builds fast, modern custom websites for small businesses across the United States — including web design, development, SEO, and managed hosting.

Amped Web Studios is a small-business web agency. We serve industries including home services, contractors, restaurants, healthcare, real estate, beauty and wellness, auto services, creative professionals, legal and professional services, and fitness and sports.

## About

- [Home](${BASE}/): Overview of Amped Web Studios
- [Services](${BASE}/services): Full list of services we offer
- [Industries](${BASE}/industries): Industries we specialize in
- [Portfolio](${BASE}/portfolio): Recent client work
- [Contact](${BASE}/contact): Get in touch for a free quote

## Services

- [Custom Website Design](${BASE}/services/web-design): 100% custom website design, no templates
- [Development & Launch](${BASE}/services/web-development): Hand-coded, fast-loading sites
- [Hosting & Care Plans](${BASE}/services/hosting-care): Managed hosting, security, backups, and updates
- [SEO & Local Search](${BASE}/services/seo-local-search): Local SEO and Google Business Profile optimization
- [Website Optimization & Refresh](${BASE}/services/website-refresh): Redesign and optimization for existing sites

## Blog

The Amped Web Studios blog publishes practical guides on web design, development, SEO, and running a better online presence for small businesses.

- [Blog index](${BASE}/blog): All articles
`;

  const categoryBlocks = [
    "web-design",
    "web-development",
    "seo-local-search",
    "hosting-care",
    "industry-insights",
  ]
    .map((slug) => {
      const label = getCategoryLabel(slug);
      const categoryPosts = posts.filter(
        (p) => p.frontmatter.category === slug
      );
      if (categoryPosts.length === 0) return null;
      const lines = categoryPosts
        .map(
          (p) =>
            `- [${p.frontmatter.title}](${BASE}/blog/${p.frontmatter.slug}): ${p.frontmatter.excerpt}`
        )
        .join("\n");
      return `### ${label}\n\n${lines}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const body = categoryBlocks
    ? `${header}\n${categoryBlocks}\n`
    : `${header}\n_No blog posts published yet._\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
