import Link from "next/link";
import { formatPublishDate, getCategoryLabel } from "@/lib/blog";

interface ArticleHeaderProps {
  title: string;
  category: string;
  publishDate: string;
  updatedDate?: string;
  author: string;
  readingTime?: number;
}

export default function ArticleHeader({
  title,
  category,
  publishDate,
  updatedDate,
  author,
  readingTime,
}: ArticleHeaderProps) {
  return (
    <header className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 border-b border-border">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link
          href={`/blog/category/${category}`}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider hover:bg-primary/15 transition-colors"
        >
          {getCategoryLabel(category)}
        </Link>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>By {author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={publishDate}>
            {formatPublishDate(publishDate)}
          </time>
          {updatedDate && (
            <>
              <span aria-hidden="true">·</span>
              <span>
                Updated{" "}
                <time dateTime={updatedDate}>
                  {formatPublishDate(updatedDate)}
                </time>
              </span>
            </>
          )}
          {readingTime && readingTime > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTime} min read</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
