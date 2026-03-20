# Amped Web Studios — Replit Handoff Document

## Instructions for Replit
Replace each file below with the exact content shown. No logic changes are needed — these are complete, final file contents. Just overwrite each file path listed.

**Logo note:** The header uses the dark-background (white text) logo. Make sure the file `attached_assets/Amped-Web-Studios-Logo-(Copy)_(1)_1774025378166.png` exists in the project. This is the version with white "AMPED" text, not the black-text version.

---

## File 1 of 11 — `client/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <meta name="description" content="Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling." />
    <meta property="og:title" content="Amped Web Studios - Web Design, SEO & Digital Marketing" />
    <meta property="og:description" content="Launch a website that actually works for your business. Professional web design, development, SEO, and managed hosting in one place." />
    <meta property="og:type" content="website" />
    <title>Amped Web Studios - Web Design, SEO & Digital Marketing</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## File 2 of 11 — `client/src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* AMPED WEB STUDIOS — DARK BRAND THEME */
:root {
  --button-outline: rgba(255,255,255, .10);
  --badge-outline: rgba(255,255,255, .05);
  --opaque-button-border-intensity: 9;
  --elevate-1: rgba(255,255,255, .04);
  --elevate-2: rgba(255,255,255, .09);

  /* Deep dark navy-black background */
  --background: 222 25% 7%;
  --foreground: 210 20% 93%;
  --border: 222 25% 16%;

  --card: 222 25% 10%;
  --card-foreground: 210 20% 93%;
  --card-border: 222 25% 14%;

  --sidebar: 222 25% 9%;
  --sidebar-foreground: 210 20% 93%;
  --sidebar-border: 222 25% 14%;
  --sidebar-primary: 209 84% 52%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 222 25% 16%;
  --sidebar-accent-foreground: 210 20% 93%;
  --sidebar-ring: 209 84% 52%;

  --popover: 222 25% 12%;
  --popover-foreground: 210 20% 93%;
  --popover-border: 222 25% 18%;

  /* Brand electric blue — #1A91EE */
  --primary: 209 84% 52%;
  --primary-foreground: 0 0% 100%;

  --secondary: 222 25% 14%;
  --secondary-foreground: 210 20% 93%;

  --muted: 222 25% 13%;
  --muted-foreground: 220 10% 70%;

  --accent: 222 25% 14%;
  --accent-foreground: 210 20% 93%;

  --destructive: 0 72% 51%;
  --destructive-foreground: 0 72% 98%;

  --input: 222 25% 20%;
  --ring: 209 84% 52%;

  --chart-1: 209 84% 62%;
  --chart-2: 175 70% 55%;
  --chart-3: 210 75% 70%;
  --chart-4: 160 65% 55%;
  --chart-5: 185 80% 55%;

  --font-sans: Inter, system-ui, -apple-system, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: Menlo, Monaco, monospace;
  --radius: .5rem;

  --shadow-2xs: 0px 1px 2px 0px hsl(220 8% 0% / 0.20);
  --shadow-xs: 0px 1px 3px 0px hsl(220 8% 0% / 0.25);
  --shadow-sm: 0px 2px 4px 0px hsl(220 8% 0% / 0.22), 0px 1px 2px -1px hsl(220 8% 0% / 0.18);
  --shadow: 0px 4px 6px 0px hsl(220 8% 0% / 0.25), 0px 2px 4px -1px hsl(220 8% 0% / 0.20);
  --shadow-md: 0px 6px 12px 0px hsl(220 8% 0% / 0.28), 0px 2px 6px -2px hsl(220 8% 0% / 0.22);
  --shadow-lg: 0px 10px 20px 0px hsl(220 8% 0% / 0.32), 0px 4px 8px -2px hsl(220 8% 0% / 0.25);
  --shadow-xl: 0px 20px 30px 0px hsl(220 8% 0% / 0.38), 0px 8px 12px -4px hsl(220 8% 0% / 0.30);
  --shadow-2xl: 0px 30px 50px 0px hsl(220 8% 0% / 0.45);
  --tracking-normal: 0em;
  --spacing: 0.25rem;

  /* Fallback for older browsers */
  --sidebar-primary-border: hsl(var(--sidebar-primary));
  --sidebar-primary-border: hsl(from hsl(var(--sidebar-primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --sidebar-accent-border: hsl(var(--sidebar-accent));
  --sidebar-accent-border: hsl(from hsl(var(--sidebar-accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --primary-border: hsl(var(--primary));
  --primary-border: hsl(from hsl(var(--primary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --secondary-border: hsl(var(--secondary));
  --secondary-border: hsl(from hsl(var(--secondary)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --muted-border: hsl(var(--muted));
  --muted-border: hsl(from hsl(var(--muted)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --accent-border: hsl(var(--accent));
  --accent-border: hsl(from hsl(var(--accent)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);

  /* Fallback for older browsers */
  --destructive-border: hsl(var(--destructive));
  --destructive-border: hsl(from hsl(var(--destructive)) h s calc(l + var(--opaque-button-border-intensity)) / alpha);
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}

/**
 * Using the elevate system.
 * Automatic contrast adjustment.
 *
 * <element className="hover-elevate" />
 * <element className="active-elevate-2" />
 *
 * // Using the tailwind utility when a data attribute is "on"
 * <element className="toggle-elevate data-[state=on]:toggle-elevated" />
 * // Or manually controlling the toggle state
 * <element className="toggle-elevate toggle-elevated" />
 *
 * Elevation systems have to handle many states.
 * - not-hovered, vs. hovered vs. active  (three mutually exclusive states)
 * - toggled or not
 * - focused or not (this is not handled with these utilities)
 *
 * Even without handling focused or not, this is six possible combinations that
 * need to be distinguished from eachother visually.
 */
@layer utilities {

  /* Hide ugly search cancel button in Chrome until we can style it properly */
  input[type="search"]::-webkit-search-cancel-button {
    @apply hidden;
  }

  /* Placeholder styling for contentEditable div */
  [contenteditable][data-placeholder]:empty::before {
    content: attr(data-placeholder);
    color: hsl(var(--muted-foreground));
    pointer-events: none;
  }

  /* .no-default-hover-elevate/no-default-active-elevate is an escape hatch so consumers of
   * buttons/badges can remove the automatic brightness adjustment on interactions
   * and program their own. */
  .no-default-hover-elevate {}

  .no-default-active-elevate {}


  /**
   * Toggleable backgrounds go behind the content. Hoverable/active goes on top.
   * This way they can stack/compound. Both will overlap the parent's borders!
   * So borders will be automatically adjusted both on toggle, and hover/active,
   * and they will be compounded.
   */
  .toggle-elevate::before,
  .toggle-elevate-2::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    /*border-radius: inherit;   match rounded corners */
    border-radius: inherit;
    z-index: -1;
    /* sits behind content but above backdrop */
  }

  .toggle-elevate.toggle-elevated::before {
    background-color: var(--elevate-2);
  }

  /* If there's a 1px border, adjust the inset so that it covers that parent's border */
  .border.toggle-elevate::before {
    inset: -1px;
  }

  /* Does not work on elements with overflow:hidden! */
  .hover-elevate:not(.no-default-hover-elevate),
  .active-elevate:not(.no-default-active-elevate),
  .hover-elevate-2:not(.no-default-hover-elevate),
  .active-elevate-2:not(.no-default-active-elevate) {
    position: relative;
    z-index: 0;
  }

  .hover-elevate:not(.no-default-hover-elevate)::after,
  .active-elevate:not(.no-default-active-elevate)::after,
  .hover-elevate-2:not(.no-default-hover-elevate)::after,
  .active-elevate-2:not(.no-default-active-elevate)::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    /*border-radius: inherit;   match rounded corners */
    border-radius: inherit;
    z-index: 999;
    /* sits in front of content */
  }

  .hover-elevate:hover:not(.no-default-hover-elevate)::after,
  .active-elevate:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-1);
  }

  .hover-elevate-2:hover:not(.no-default-hover-elevate)::after,
  .active-elevate-2:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-2);
  }

  /* If there's a 1px border, adjust the inset so that it covers that parent's border */
  .border.hover-elevate:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate-2:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate-2:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate:not(.no-hover-interaction-elevate)::after {
    inset: -1px;
  }
}
```

---

## File 3 of 11 — `client/src/pages/home.tsx`

```tsx
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      <Header onNavigate={scrollToSection} />
      <main id="main-content">
        <Hero onNavigate={scrollToSection} />
        <SocialProof />
        <Portfolio />
        <Pricing onNavigate={scrollToSection} />
        <Services />
        <Process />
        <About />
        <CTAStrip onNavigate={scrollToSection} />
        <Contact />
      </main>
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
}
```

---

## File 4 of 11 — `client/src/components/Header.tsx`

> **Important:** The logo import references `Amped-Web-Studios-Logo-(Copy)_(1)_1774025378166.png` — this is the white-text dark-background version of the logo. Make sure this file exists in `attached_assets/`.

```tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoSrc from "@assets/Amped-Web-Studios-Logo-(Copy)_(1)_1774025378166.png";

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
              className="h-14 w-auto"
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
```

---

## File 5 of 11 — `client/src/components/SocialProof.tsx`

```tsx
import { Palette, Zap, Smartphone, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Palette, text: "Custom-Built for Your Brand" },
  { icon: Zap, text: "Lightning-Fast Hosting Included" },
  { icon: Smartphone, text: "Mobile-First & SEO-Ready" },
  { icon: Headphones, text: "Ongoing Support & Growth Plans" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3"
              data-testid={`highlight-${index}`}
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

## File 6 of 11 — `client/src/components/Hero.tsx`

```tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Monitor, BarChart3, Server, Globe, Sparkles, Zap } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.02,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 4
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.6,
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration, delay: 1 });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, to, duration]);

  return <span>{displayValue}</span>;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-chart-2/15 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 bg-primary/5 backdrop-blur-sm"
                data-testid="badge-services"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2 text-primary" />
                Web Design • SEO • Hosting • Digital Marketing
              </Badge>
            </motion.div>

            <div className="space-y-6">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
                data-testid="text-hero-headline"
              >
                <AnimatedText text="Launch a Website" delay={0.3} />
                <span className="text-primary block">
                  <AnimatedText text="That Converts" delay={0.6} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
                data-testid="text-hero-subheadline"
              >
                We design, build, and grow high-performance websites for small businesses — with hosting, SEO, and support all under one roof.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                data-testid="button-start-project"
                className="text-base group relative overflow-visible"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("portfolio")}
                data-testid="button-view-portfolio"
                className="text-base backdrop-blur-sm"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-primary">
                  <Counter from={0} to={50} />+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">
                  <Counter from={0} to={100} />%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">
                  <Counter from={0} to={5} />★
                </div>
                <div className="text-sm text-muted-foreground">Avg. Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Floating cards composition */}
          <div className="relative h-[500px] sm:h-[600px] hidden lg:block">
            {/* Main browser mockup */}
            <FloatingCard
              className="absolute top-8 left-0 w-[380px] bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
              delay={0.4}
              duration={5}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
                    <Globe className="w-3 h-3" />
                    yourwebsite.com
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4 bg-gradient-to-br from-background to-muted/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="h-3 w-32 bg-foreground/80 rounded" />
                    <div className="h-2 w-20 bg-muted-foreground/40 rounded mt-1.5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-muted rounded" />
                  <div className="h-2 w-4/5 bg-muted rounded" />
                  <div className="h-2 w-3/5 bg-muted rounded" />
                </div>
                <div className="flex gap-2 pt-2">
                  <div className="h-8 w-24 bg-primary rounded-md" />
                  <div className="h-8 w-24 bg-muted rounded-md" />
                </div>
              </div>
            </FloatingCard>

            {/* Analytics card */}
            <FloatingCard
              className="absolute top-32 right-0 w-[220px] bg-card border border-border rounded-xl shadow-xl p-4"
              delay={0.6}
              duration={4}
            >
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Performance</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Speed Score</span>
                    <span className="text-primary font-medium">98/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">SEO</span>
                    <span className="text-chart-4 font-medium">95/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-chart-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 1.4 }}
                    />
                  </div>
                </div>
              </div>
            </FloatingCard>

            {/* Server status card */}
            <FloatingCard
              className="absolute bottom-24 left-8 w-[200px] bg-card border border-border rounded-xl shadow-xl p-4"
              delay={0.8}
              duration={6}
            >
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-4 h-4 text-chart-4" />
                <span className="text-sm font-medium">Hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-chart-4"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-muted-foreground">All systems online</span>
              </div>
              <div className="mt-3 text-2xl font-bold text-chart-4">99.99%</div>
              <div className="text-xs text-muted-foreground">Uptime guaranteed</div>
            </FloatingCard>

            {/* Devices card */}
            <FloatingCard
              className="absolute bottom-8 right-12 w-[180px] bg-card border border-border rounded-xl shadow-xl p-4"
              delay={1}
              duration={5}
            >
              <div className="flex items-center gap-2 mb-3">
                <Monitor className="w-4 h-4 text-chart-3" />
                <span className="text-sm font-medium">Responsive</span>
              </div>
              <div className="flex justify-center gap-3 py-2">
                <div className="w-8 h-12 bg-muted rounded border-2 border-chart-3/50" />
                <div className="w-10 h-8 bg-muted rounded border-2 border-chart-3/50" />
                <div className="w-6 h-10 bg-muted rounded border-2 border-chart-3/50" />
              </div>
              <div className="text-xs text-center text-muted-foreground mt-2">All devices ready</div>
            </FloatingCard>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-0 right-20 w-20 h-20 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-40 right-40 w-3 h-3 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-60 left-20 w-2 h-2 bg-chart-4 rounded-full"
              animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## File 7 of 11 — `client/src/components/Services.tsx`

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Server, TrendingUp, Search, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "No templates, no shortcuts. Every site is designed from scratch around your brand, your audience, and your goals.",
  },
  {
    icon: Code,
    title: "Development & Launch",
    description: "Hand-coded, fast-loading, and built to perform. We handle everything from domain setup to go-live.",
  },
  {
    icon: Server,
    title: "Hosting & Care Plans",
    description: "We manage your hosting, updates, backups, and security — so your site is always live, fast, and protected.",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    description: "We optimize your site to rank in local search results, so nearby customers find you before they find your competition.",
  },
  {
    icon: TrendingUp,
    title: "Optimization & Refresh",
    description: "Got a site that's falling behind? We redesign, rebuild, and optimize for speed, conversions, and modern UX.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    description: "Review management, local SEO pages, and targeted content — we help you grow well beyond just a website.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-services-title">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first impression to long-term growth — we handle the web so you can run the business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate transition-all duration-300 hover:shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## File 8 of 11 — `client/src/components/Process.tsx`

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Search, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Discover",
    description: "We start with a conversation to understand your business, your customers, and what you want your site to do. You'll leave with a clear plan and no unanswered questions.",
  },
  {
    number: "2",
    icon: Layers,
    title: "Design & Build",
    description: "We create a custom design based on your brand, walk you through it for feedback, then build it out with clean code, fast performance, and hosting fully configured.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Launch & Support",
    description: "Your site goes live when you're ready. Our care plans keep everything running — updates, backups, security, and ongoing improvements included.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-process-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three clear steps from idea to live — no confusion, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-step-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground mt-12"
        >
          Most sites go from kickoff call to live launch in 2–3 weeks. We move fast — without cutting corners.
        </motion.p>
      </div>
    </section>
  );
}
```

---

## File 9 of 11 — `client/src/components/About.tsx`

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Responsive, mobile-first builds that load fast on every device",
  "Transparent communication and fast turnarounds — no ghosting, no delays",
  "All-in-one: design, development, SEO, hosting, and growth services",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-about-title">
              About Amped Web Studios
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're Amped Web Studios — a Florida-based web design and digital agency built for small businesses that want to compete online. We design, develop, and manage everything, so you're not juggling multiple vendors or wondering what's happening with your site. One team. One point of contact. Results you can actually measure.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                  data-testid={`list-item-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-md">
              <CardContent className="p-8 sm:p-12 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-6xl font-bold text-primary-foreground">
                    S
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## File 10 of 11 — `client/src/components/CTAStrip.tsx`

```tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTAStripProps {
  onNavigate: (section: string) => void;
}

export default function CTAStrip({ onNavigate }: CTAStripProps) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-cta-headline">
          Let's Build Something That Actually Works for Your Business
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Tell us about your project and we'll come back with a custom plan and transparent pricing — no fluff, no pressure.
        </p>
        <Button
          size="lg"
          onClick={() => onNavigate("contact")}
          data-testid="button-cta-quote"
          className="text-base"
        >
          Get a Free Quote
        </Button>
      </motion.div>
    </section>
  );
}
```

---

## File 11 of 11 — `client/src/components/Footer.tsx`

```tsx
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
```

---

## Summary of All Changes Made

| File | What Changed |
|------|-------------|
| `client/index.html` | Title, meta description, og:title updated to Amped Web Studios |
| `client/src/index.css` | Full dark theme (deep navy background + brand electric blue #1A91EE as primary). Old light theme and dead `.dark` block removed. |
| `client/src/pages/home.tsx` | Section order: Hero → SocialProof → **Portfolio** → **Pricing** → **Services** → Process → About → CTA → Contact |
| `client/src/components/Header.tsx` | Logo switched to white-text dark-background version |
| `client/src/components/SocialProof.tsx` | 4 highlight labels expanded to be more descriptive |
| `client/src/components/Hero.tsx` | Badge updated to full service scope; subheadline updated; grid texture opacity bumped for dark bg |
| `client/src/components/Services.tsx` | Title → "What We Do"; expanded from 4 to 6 services (added SEO & Local Search + Digital Marketing & Growth); grid changed to 3-column |
| `client/src/components/Process.tsx` | Subtitle added; all 3 step descriptions expanded; "I" language removed; footer note sharpened |
| `client/src/components/About.tsx` | Paragraph rewritten; 3 bullet highlights upgraded; company name updated to Amped Web Studios |
| `client/src/components/CTAStrip.tsx` | Headline and subtitle rewritten in studio voice |
| `client/src/components/Footer.tsx` | Copyright updated to Amped Web Studios |
