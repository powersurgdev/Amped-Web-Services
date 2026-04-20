import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CATEGORIES,
  getPostsByCategory,
  getCategoryLabel,
  getCategoryDescription,
  isValidCategory,
} from "@/lib/blog";
import BlogPostCard from "@/components/blog/BlogPostCard";
import CategoryTabs from "@/components/blog/CategoryTabs";
import { SITE_URL as BASE } from "@/lib/site";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isValidCategory(category)) return { title: "Category not found" };

  const label = getCategoryLabel(category);
  const description = getCategoryDescription(category);

  return {
    title: `${label} Articles — Amped Web Studios Blog`,
    description,
    alternates: { canonical: `/blog/category/${category}` },
    openGraph: {
      title: `${label} — Amped Web Studios Blog`,
      description,
      url: `/blog/category/${category}`,
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const posts = getPostsByCategory(category);
  const label = getCategoryLabel(category);
  const description = getCategoryDescription(category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}/blog/category/${category}`,
        url: `${BASE}/blog/category/${category}`,
        name: `${label} — Amped Web Studios Blog`,
        description,
        isPartOf: { "@id": `${BASE}/blog` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: label,
            item: `${BASE}/blog/category/${category}`,
          },
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
          <p className="text-sm uppercase tracking-wider text-primary font-semibold">
            Category
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {label}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">{description}</p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <CategoryTabs active={category} />
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">
                No posts in this category yet — new articles are on the way.
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
