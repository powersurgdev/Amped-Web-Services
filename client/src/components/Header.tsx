import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/Amped-Web-Studios-Logo-(Copy)-(Copy)_(1)_1774025394664.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "Pricing", "Portfolio", "Process", "About", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("hero")}
            className="hover-elevate active-elevate-2 rounded-md transition-colors flex items-center"
            data-testid="link-home"
            aria-label="Amped Web Studios - Home"
          >
            <img
              src={logoSrc}
              alt="Amped Web Studios"
              className="h-10 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
                data-testid={`link-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => onNavigate("contact")}
            data-testid="button-quote"
            className="hidden md:inline-flex"
          >Get Started Today!</Button>

          <Button
            onClick={() => onNavigate("contact")}
            size="sm"
            data-testid="button-quote-mobile"
            className="md:hidden"
          >
            Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
