import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";
import { formatPublishDate, getCategoryLabel } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, slug, excerpt, publishDate, category } = post.frontmatter;

  return (
    <Link href={`/blog/${slug}`} className="block h-full group">
      <Card className="h-full hover-elevate transition-all duration-300 hover:shadow-lg cursor-pointer">
        <CardContent className="p-6 flex flex-col h-full space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-medium">
            <span>{getCategoryLabel(category)}</span>
            <span aria-hidden="true" className="text-muted-foreground">
              ·
            </span>
            <time
              dateTime={publishDate}
              className="text-muted-foreground normal-case tracking-normal font-normal"
            >
              {formatPublishDate(publishDate)}
            </time>
          </div>
          <h2 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
            {excerpt}
          </p>
          <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
