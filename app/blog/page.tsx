import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL as BASE } from "@/lib/site";
import BlogPostCard from "@/components/blog/BlogPostCard";
import CategoryTabs from "@/components/blog/CategoryTabs";

export const metadata: Metadata = {
  title: "Blog — Web Design, SEO & Small Business Insights | Amped Web Studios",
  description:
    "Practical guides on web design, development, SEO, and running a better online presence for small businesses. Written by the team at Amped Web Studios.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Amped Web Studios",
    description:
      "Practical guides on web design, development, SEO, and running a better online presence for small businesses.",
    url: "/blog",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}/blog`,
        url: `${BASE}/blog`,
        name: "Blog — Amped Web Studios",
        description:
          "Practical guides on web design, development, SEO, and running a better online presence for small businesses.",
        isPartOf: { "@id": `${BASE}/#website` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            The Amped Web Studios Blog
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Practical guides on web design, development, SEO, and running a better
            online presence for small businesses.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <CategoryTabs />
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">
                No posts yet — check back soon for new articles.
              </p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                posts.length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : posts.length === 2
                    ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {posts.map((post) => (
                <BlogPostCard key={post.frontmatter.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
