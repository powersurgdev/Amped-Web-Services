import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import logoSrc from "@assets/Amped-Web-Studios-Logo.png";

const servicesDropdown = [
  { label: "Custom Website Design", href: "/services/web-design" },
  { label: "Development & Launch", href: "/services/web-development" },
  { label: "Hosting & Care Plans", href: "/services/hosting-care" },
  { label: "SEO & Local Search", href: "/services/seo-local-search" },
  { label: "Website Optimization", href: "/services/website-refresh" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const industriesDropdown = [
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Contractors & Trades", href: "/industries/contractors" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Healthcare & Wellness", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Beauty & Personal Care", href: "/industries/beauty-wellness" },
  { label: "Auto Services", href: "/industries/auto-services" },
  { label: "Creative Professionals", href: "/industries/creative-portfolio" },
  { label: "Legal & Professional", href: "/industries/legal-professional" },
  { label: "Fitness & Sports", href: "/industries/fitness-sports" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industries" | null>(null);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const handlePricing = () => {
    if (isHome) {
      const el = document.getElementById("pricing");
      if (el) {
        const offset = 64;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.location.href = "/#pricing";
    }
    setIsMenuOpen(false);
  };

  const navLinkClass =
    "text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md";

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
            {/* Logo */}
            <Link
              href="/"
              className="hover-elevate active-elevate-2 rounded-md transition-colors flex items-center"
              aria-label="Amped Web Studios — Home"
            >
              <img src={logoSrc} alt="Amped Web Studios" className="h-14 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`${navLinkClass} flex items-center gap-1`}>
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-xl py-2 z-50"
                    >
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="border-t border-border my-1" />
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-accent transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`${navLinkClass} flex items-center gap-1`}>
                  Industries <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-xl py-2 z-50"
                    >
                      {industriesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="border-t border-border my-1" />
                      <Link
                        href="/industries"
                        className="block px-4 py-2 text-sm font-medium text-primary hover:bg-accent transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View All Industries →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className={navLinkClass}>
                Portfolio
              </Link>

              <button onClick={handlePricing} className={navLinkClass}>
                Pricing
              </button>

              <Link href="/contact" className={navLinkClass}>
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <Link href="/contact" className="hidden md:inline-flex">
              <Button>Get Started Today!</Button>
            </Link>

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
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg md:hidden overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
              {/* Services accordion */}
              <div className="border-b border-border/50">
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "services" ? null : "services")
                  }
                  className="w-full text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground flex items-center justify-between transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="py-2 text-sm font-medium text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries accordion */}
              <div className="border-b border-border/50">
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === "industries" ? null : "industries")
                  }
                  className="w-full text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground flex items-center justify-between transition-colors"
                >
                  Industries
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpanded === "industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-4 flex flex-col gap-1">
                        {industriesDropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          className="py-2 text-sm font-medium text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                className="text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>

              <button
                onClick={handlePricing}
                className="text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 transition-colors"
              >
                Pricing
              </button>

              <Link
                href="/contact"
                className="text-left py-4 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-5 pb-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="w-full text-base">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
