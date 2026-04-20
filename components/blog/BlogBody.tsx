import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TableOfContents from "./TableOfContents";
import type { Heading } from "@/lib/blog";

interface BlogBodyProps {
  content: string;
  services?: string[];
  headings?: Heading[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const SERVICE_LABELS: Record<string, string> = {
  "web-design": "Custom Website Design",
  "web-development": "Development & Launch",
  "hosting-care": "Hosting & Care Plans",
  "seo-local-search": "SEO & Local Search",
  "website-refresh": "Website Optimization & Refresh",
};

export default function BlogBody({
  content,
  services = [],
  headings = [],
}: BlogBodyProps) {
  return (
    <div className="mx-auto w-full max-w-3xl lg:max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="lg:grid lg:grid-cols-[minmax(0,48rem)_16rem] lg:gap-12 lg:justify-center">
        <article className="w-full space-y-6 text-base sm:text-lg leading-relaxed text-foreground/90">
          <TableOfContents headings={headings} variant="inline" />
          <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => {
              const text = String(children);
              return (
                <h2
                  id={slugify(text)}
                  className="text-2xl sm:text-3xl font-bold mt-12 mb-4 tracking-tight scroll-mt-24"
                >
                  {children}
                </h2>
              );
            },
            h3: ({ children }) => {
              const text = String(children);
              return (
                <h3
                  id={slugify(text)}
                  className="text-xl sm:text-2xl font-semibold mt-8 mb-3 scroll-mt-24"
                >
                  {children}
                </h3>
              );
            },
            p: ({ children }) => (
              <p className="leading-relaxed">{children}</p>
            ),
            a: ({ href, children }) => {
              if (href && href.startsWith("/")) {
                return (
                  <Link
                    href={href}
                    className="text-primary underline-offset-4 hover:underline font-medium"
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline font-medium"
                >
                  {children}
                </a>
              );
            },
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>
            ),
            li: ({ children }) => <li className="leading-relaxed">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 italic text-muted-foreground bg-card/50 rounded-r">
                {children}
              </blockquote>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">{children}</strong>
            ),
            table: ({ children }) => (
              <div className="my-6 overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-md">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-card/80">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="text-left font-semibold px-4 py-2 border-b border-border">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-2 border-b border-border">{children}</td>
            ),
            hr: () => <hr className="my-10 border-border" />,
            code: ({ children }) => (
              <code className="px-1.5 py-0.5 rounded bg-card text-sm font-mono text-primary">
                {children}
              </code>
            ),
          }}
        >
          {content}
        </ReactMarkdown>

        {services.length > 0 && (
          <aside className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Related Services
            </h3>
            <ul className="flex flex-wrap gap-2">
              {services.map((slug) => {
                const label = SERVICE_LABELS[slug] ?? slug;
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        )}
        </article>

        <aside className="hidden lg:block">
          <TableOfContents headings={headings} variant="sticky" />
        </aside>
      </div>
    </div>
  );
}
