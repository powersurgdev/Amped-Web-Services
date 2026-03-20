import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/Amped-Web-Studios-Logo-(Copy)_(1)_1774025378166.png";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navItems = ["Services", "Pricing", "Portfolio", "Process", "About", "Contact"];

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav("hero")}
              className="hover-elevate active-elevate-2 rounded-md transition-colors flex items-center"
              data-testid="link-home"
              aria-label="Amped Web Studios - Home"
            >
              <img
                src={logoSrc}
                alt="Amped Web Studios"
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
                  data-testid={`link-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Button
              onClick={() => handleNav("contact")}
              data-testid="button-quote"
              className="hidden md:inline-flex"
            >
              Get Started Today!
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNav(item.toLowerCase())}
                  className="text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="pt-5 pb-2">
                <Button
                  size="lg"
                  className="w-full text-base"
                  onClick={() => handleNav("contact")}
                >
                  Get a Free Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
