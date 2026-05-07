'use client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Monitor, BarChart3, Server, Globe, Sparkles, Zap } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }
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
  duration = 4,
  amplitude = 10
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -amplitude, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: [0.37, 0, 0.63, 1],
          delay: delay + 0.8,
          times: [0, 0.5, 1],
        }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.div>
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

export default function Hero({ onNavigate = scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-primary/20 sm:bg-primary/30 dark:bg-primary/10 dark:sm:bg-primary/20 blur-[60px] sm:blur-[100px] lg:blur-[120px]"
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
          className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-chart-2/30 dark:bg-chart-2/15 blur-[50px] sm:blur-[80px] lg:blur-[100px]"
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
                <AnimatedText text="Websites Built to" delay={0.3} />
                <span className="text-primary block">
                  <AnimatedText text="Drive Growth" delay={0.6} />
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() => {
                  trackCtaClick({ location: 'hero', label: 'Start Your Project', destination: '#contact' });
                  onNavigate("contact");
                }}
                data-testid="button-start-project"
                className="text-base group relative overflow-visible w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 4] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  trackCtaClick({ location: 'hero', label: 'View Portfolio', destination: '#portfolio' });
                  onNavigate("portfolio");
                }}
                data-testid="button-view-portfolio"
                className="text-base backdrop-blur-sm w-full sm:w-auto"
              >
                View Portfolio
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-3 sm:flex gap-6 sm:gap-8 pt-4"
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
              duration={6}
              amplitude={8}
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
              duration={7}
              amplitude={9}
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
              duration={8}
              amplitude={10}
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
              duration={6.5}
              amplitude={8}
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
