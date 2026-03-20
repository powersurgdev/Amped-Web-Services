import { Button } from "@/components/ui/button";
import { ArrowUp, Facebook } from "lucide-react";
import { Link } from "wouter";
import logoSrc from "@assets/Amped-Web-Studios-Logo-(Copy)_(1)_1774025378166.png";

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (section: string) => void;
}

const quickLinks = [
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Pricing", section: "pricing" },
  { label: "Process", section: "process" },
  { label: "About", section: "about" },
  { label: "Contact", section: "contact" },
];

export default function Footer({ onScrollToTop, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <img src={logoSrc} alt="Amped Web Studios" className="h-16 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
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

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, section }) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-terms"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
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
            onClick={onScrollToTop}
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
