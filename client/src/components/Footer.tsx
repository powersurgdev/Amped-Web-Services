import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Amped Web Studios. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms
            </a>
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
      </div>
    </footer>
  );
}
