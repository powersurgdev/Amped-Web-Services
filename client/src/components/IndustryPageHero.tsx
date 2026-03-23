import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export interface StatItem {
  value: string;
  label: string;
}

export interface IndustryPageHeroProps {
  industry: string;
  headline: string;
  highlightedPhrase?: string;
  subheading: string;
  primaryCTA: string;
  onPrimaryClick: () => void;
  secondaryCTA?: string;
  onSecondaryClick?: () => void;
  stats?: StatItem[];
  painPoints?: string[];
}

function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  let charOffset = 0;
  return (
    <>
      {words.map((word, wordIdx) => {
        const wordStart = charOffset;
        charOffset += word.length + 1;
        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block overflow-hidden">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: delay + (wordStart + charIdx) * 0.02,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {wordIdx < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 4,
  amplitude = 12,
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
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -amplitude] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay + 0.6,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function renderHeadline(headline: string, highlightedPhrase?: string) {
  if (!highlightedPhrase || !headline.includes(highlightedPhrase)) {
    return <AnimatedText text={headline} delay={0.3} />;
  }
  const idx = headline.indexOf(highlightedPhrase);
  const before = headline.slice(0, idx);
  const after = headline.slice(idx + highlightedPhrase.length);
  const phraseDelay = 0.3 + before.length * 0.02;
  const afterDelay = phraseDelay + 0.5;
  return (
    <>
      {before && <AnimatedText text={before} delay={0.3} />}
      <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
        <motion.span
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: phraseDelay, ease: [0.33, 1, 0.68, 1] }}
          className="inline-block"
        >
          {highlightedPhrase}
        </motion.span>
      </span>
      {after && <AnimatedText text={after} delay={afterDelay} />}
    </>
  );
}

export default function IndustryPageHero({
  industry,
  headline,
  highlightedPhrase,
  subheading,
  primaryCTA,
  onPrimaryClick,
  secondaryCTA,
  onSecondaryClick,
  stats,
  painPoints,
}: IndustryPageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/15 blur-[60px] sm:blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-chart-2/15 blur-[50px] sm:blur-[80px]"
          animate={{ x: [0, -40, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 bg-primary/5 backdrop-blur-sm"
              >
                <Sparkles className="w-3.5 h-3.5 mr-2 text-primary" />
                For {industry} Businesses
              </Badge>
            </motion.div>

            {/* Headline + subheading */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                {renderHeadline(headline, highlightedPhrase)}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                {subheading}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="text-base w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  {primaryCTA}
                  <motion.span
                    animate={{ x: [0, 4] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
              {secondaryCTA && onSecondaryClick && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onSecondaryClick}
                  className="text-base backdrop-blur-sm w-full sm:w-auto"
                >
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="grid grid-cols-3 sm:flex gap-6 sm:gap-8 pt-2 border-t border-border/30"
              >
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right column — floating pain points card */}
          {painPoints && painPoints.length > 0 && (
            <div className="hidden lg:flex items-center justify-center relative py-8">
              <FloatingCard
                className="w-full max-w-[380px] bg-card border border-border rounded-xl shadow-2xl"
                delay={0.4}
                duration={5}
                amplitude={10}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">What We Solve</span>
                  </div>
                  <ul className="space-y-3">
                    {painPoints.map((point, i) => (
                      <motion.li
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-chart-2 mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-snug">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-border/40">
                    <p className="text-xs text-muted-foreground/70 italic">
                      Built specifically for {industry} businesses.
                    </p>
                  </div>
                </div>
              </FloatingCard>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-2 right-8 w-16 h-16 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-6 left-4 w-3 h-3 bg-chart-2 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-10 left-2 w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
