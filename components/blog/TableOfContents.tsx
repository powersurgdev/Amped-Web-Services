"use client";
import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";

interface TableOfContentsProps {
  headings: Heading[];
  variant: "inline" | "sticky";
}

export default function TableOfContents({
  headings,
  variant,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!headings || headings.length < 3) return;
    const elements = headings
      .map((h) => document.getElementById(h.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    if (!activeId) setActiveId(elements[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id,
            top: (e.target as HTMLElement).getBoundingClientRect().top,
          }))
          .sort((a, b) => a.top - b.top);
        if (visible.length > 0) setActiveId(visible[0].id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings, activeId]);

  if (!headings || headings.length < 3) return null;

  if (variant === "inline") {
    return (
      <details
        open
        className="group mb-10 border border-border rounded-lg bg-card/40 overflow-hidden lg:hidden"
      >
        <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
          <span>In This Article</span>
          <svg
            className="w-4 h-4 transition-transform group-open:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </summary>
        <nav aria-label="Table of contents" className="px-5 pb-4 pt-1">
          <ol className="space-y-1 text-sm">
            {headings.map((h, i) => (
              <li
                key={`${h.slug}-${i}`}
                className={h.level === 3 ? "pl-4" : ""}
              >
                <a
                  href={`#${h.slug}`}
                  className={`block py-1 leading-snug transition-colors ${
                    activeId === h.slug
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>
    );
  }

  return (
    <div className="sticky top-24 self-start">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 pb-3 border-b border-border">
        In This Article
      </div>
      <nav aria-label="Table of contents">
        <ol className="border-l border-border">
          {headings.map((h, i) => {
            const isActive = activeId === h.slug;
            return (
              <li
                key={`${h.slug}-${i}`}
                className={h.level === 3 ? "ml-4" : ""}
              >
                <a
                  href={`#${h.slug}`}
                  className={`block py-1.5 pl-4 -ml-px border-l-2 text-sm leading-snug transition-all ${
                    isActive
                      ? "text-primary font-medium border-primary"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
