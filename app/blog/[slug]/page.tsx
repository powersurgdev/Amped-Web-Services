import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  getCategoryLabel,
  calculateReadingTime,
  extractHeadings,
} from "@/lib/blog";
import ArticleHeader from "@/components/blog/ArticleHeader";
import BlogBody from "@/components/blog/BlogBody";
import BlogFAQBlock from "@/components/blog/BlogFAQBlock";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogCTA from "@/components/blog/BlogCTA";
import { SITE_URL as BASE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  const { metaTitle, metaDescription, publishDate, updatedDate, tags, author } =
    post.frontmatter;

  return {
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: author }],
    alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: absoluteUrl(`/blog/${slug}`),
      type: "article",
      publishedTime: publishDate,
      modifiedTime: updatedDate ?? publishDate,
      tags: tags,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const {
    title,
    category,
    publishDate,
    updatedDate,
    author,
    metaDescription,
    services,
    tags,
    faq,
  } = post.frontmatter;

  const related = getRelatedPosts(slug, 3);
  const url = `${BASE}/blog/${slug}`;
  const imageUrl = `${BASE}/blog/${slug}/opengraph-image`;
  const readingTime = calculateReadingTime(post.content);
  const headings = extractHeadings(post.content);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      "@id": url,
      headline: title,
      description: metaDescription,
      url,
      image: [imageUrl],
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: publishDate,
      dateModified: updatedDate ?? publishDate,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: author, url: BASE },
      publisher: {
        "@type": "Organization",
        name: "Amped Web Studios",
        url: BASE,
        logo: {
          "@type": "ImageObject",
          url: `${BASE}/favicon.png`,
        },
      },
      ...(tags && tags.length > 0 ? { keywords: tags.join(", ") } : {}),
      articleSection: getCategoryLabel(category),
      wordCount: post.content.trim().split(/\s+/).length,
      timeRequired: `PT${readingTime}M`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: getCategoryLabel(category),
          item: `${BASE}/blog/category/${category}`,
        },
        { "@type": "ListItem", position: 4, name: title, item: url },
      ],
    },
  ];

  if (faq && faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleHeader
        title={title}
        category={category}
        publishDate={publishDate}
        updatedDate={updatedDate}
        author={author}
        readingTime={readingTime}
      />
      <BlogBody
        content={post.content}
        services={services}
        headings={headings}
      />
      <BlogFAQBlock faq={faq} />
      <RelatedPosts posts={related} />
      <BlogCTA />
    </main>
  );
}
