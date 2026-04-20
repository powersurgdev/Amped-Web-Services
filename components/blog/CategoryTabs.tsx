import Link from "next/link";
import { CATEGORIES, CATEGORY_LABELS } from "@/lib/blog";

interface CategoryTabsProps {
  active?: string;
}

export default function CategoryTabs({ active }: CategoryTabsProps) {
  const allActive = !active;
  const base =
    "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap";
  const activeCls = "bg-primary text-primary-foreground";
  const inactiveCls =
    "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40";

  return (
    <nav aria-label="Blog categories" className="w-full">
      <ul className="flex flex-wrap gap-2 justify-center">
        <li>
          <Link
            href="/blog"
            className={`${base} ${allActive ? activeCls : inactiveCls}`}
          >
            All Posts
          </Link>
        </li>
        {CATEGORIES.map((slug) => (
          <li key={slug}>
            <Link
              href={`/blog/category/${slug}`}
              className={`${base} ${active === slug ? activeCls : inactiveCls}`}
            >
              {CATEGORY_LABELS[slug]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
