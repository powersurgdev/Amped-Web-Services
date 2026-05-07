'use client';
import { Button } from "@/components/ui/button";
import { ArrowUp, Facebook } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import logoDarkSrc from "@assets/Amped-Web-Studios-Logo.webp";
import logoLightSrc from "@assets/Amped-Web-Studios-Logo-Light.png";
import { industries } from "@/lib/industries";

const services = [
  { label: "Custom Website Design", href: "/services/web-design" },
  { label: "Development & Launch", href: "/services/web-development" },
  { label: "Hosting & Care Plans", href: "/services/hosting-care" },
  { label: "SEO & Local Search", href: "/services/seo-local-search" },
  { label: "Website Optimization", href: "/services/website-refresh" },
];

const company = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const linkClass =
    "text-sm text-muted-foreground hover:text-primary transition-colors";

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Column 1 — Brand (spans 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src={logoLightSrc}
              alt="Amped Web Studios"
              height={64}
              width={192}
              style={{ height: '4rem', width: 'auto' }}
              className="block dark:hidden"
            />
            <Image
              src={logoDarkSrc}
              alt="Amped Web Studios"
              height={64}
              width={192}
              style={{ height: '4rem', width: 'auto' }}
              className="hidden dark:block"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Custom websites built to convert. Clean code, real results, no fluff.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61577438392520"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {industries.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-sm font-medium text-primary hover:underline">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Company + Legal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Company
              </h3>
              <ul className="space-y-2.5">
                {company.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Legal
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy" className={linkClass} data-testid="link-privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass} data-testid="link-terms">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amped Web Studios. All rights reserved.
          </p>
          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            data-testid="button-scroll-top"
            className="rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
