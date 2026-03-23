'use client';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone } from "lucide-react";
import Pricing from "@/components/Pricing";
import IndustryPageHero, {
  type IndustryPageHeroProps,
} from "@/components/IndustryPageHero";
import type { ReactNode } from "react";

// ─── Data Interfaces ──────────────────────────────────────────────────────────

export interface ChallengeCard {
  icon: ReactNode;
  title: string;
  body: string;
}

export interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface IndustryPageData {
  pageTitle: string;
  metaDescription: string;
  heroProps: Omit<IndustryPageHeroProps, "onPrimaryClick" | "onSecondaryClick">;
  whySection: {
    headline: string;
    paragraphs: string[];
    challenges: ChallengeCard[];
  };
  features: FeatureCard[];
  faqs: FAQ[];
  ctaHeadline: string;
  ctaBody: string;
}

// ─── Internal Navigation Helper ───────────────────────────────────────────────

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

// ─── Responsive Mockup Section ────────────────────────────────────────────────

function ResponsiveMockup() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5 text-sm">
            Responsive Design
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built to Look Great on Every Screen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build every site mobile-first — so it converts whether your customer finds you on their phone, tablet, or desktop.
          </p>
        </motion.div>

        {/* Device composition */}
        <div className="relative flex items-end justify-center gap-0">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 -mr-8 sm:-mr-10 flex-shrink-0 hidden sm:block"
          >
            {/* Phone frame */}
            <div className="w-[180px] sm:w-[215px] rounded-[1.75rem] border-4 border-border bg-card shadow-2xl overflow-hidden">
              {/* Notch bar */}
              <div className="h-5 bg-muted flex items-center justify-center">
                <div className="w-10 h-2 rounded-full bg-border/70" />
              </div>
              <img
                src="/mockups/mobile-gutters.png"
                alt="Mobile site example"
                className="w-full block"
              />
              {/* Home indicator */}
              <div className="h-4 bg-muted flex items-center justify-center">
                <div className="w-12 h-1 rounded-full bg-border/60" />
              </div>
            </div>
          </motion.div>

          {/* Desktop browser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.0 }}
            className="relative z-10 flex-shrink-0 w-full max-w-[580px] sm:max-w-[680px]"
          >
            {/* Browser frame */}
            <div className="rounded-xl border-2 border-border bg-card shadow-2xl overflow-hidden">
              {/* Chrome bar */}
              <div className="h-9 bg-muted flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 h-5 rounded bg-background/60 flex items-center px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
                  <div className="h-2 w-24 sm:w-40 rounded-sm bg-border/50" />
                </div>
              </div>
              <img
                src="/mockups/desktop-service-areas.png"
                alt="Desktop site example"
                className="w-full block"
              />
            </div>
          </motion.div>

        </div>

        {/* Mobile-only: show stacked screenshots */}
        <div className="flex sm:hidden flex-col gap-4 mt-6">
          <div className="rounded-xl border-2 border-border bg-card shadow-xl overflow-hidden">
            <div className="h-8 bg-muted flex items-center px-3 gap-1.5">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <div className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 h-4 rounded bg-background/60" />
            </div>
            <img src="/mockups/desktop-service-areas.png" alt="Desktop site example" className="w-full block" />
          </div>
          <div className="mx-auto w-[200px] rounded-[1.5rem] border-4 border-border bg-card shadow-xl overflow-hidden">
            <div className="h-5 bg-muted flex items-center justify-center">
              <div className="w-12 h-2 rounded-full bg-border/70" />
            </div>
            <img src="/mockups/mobile-gutters.png" alt="Mobile site example" className="w-full block" />
            <div className="h-4 bg-muted flex items-center justify-center">
              <div className="w-14 h-1 rounded-full bg-border/60" />
            </div>
          </div>
        </div>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12"
        >
          {[
            { icon: Smartphone, label: "Mobile-First Development" },
            { icon: Monitor, label: "Desktop-Polished Design" },
            { icon: Tablet, label: "Seamless on Every Device" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────

function WhySection({
  headline,
  paragraphs,
  challenges,
  industry,
}: {
  headline: string;
  paragraphs: string[];
  challenges: ChallengeCard[];
  industry: string;
}) {
  return (
    <section className="py-20 sm:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-5 px-3 py-1 border-primary/30 bg-primary/5 text-xs uppercase tracking-wider">
              {industry} Realities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">{headline}</h2>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right: challenge cards */}
          <div className="space-y-4">
            {challenges.map(({ icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-background/60"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────────────────

function FeaturesGrid({
  features,
  industry,
}: {
  features: FeatureCard[];
  industry: string;
}) {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Everything Included for {industry} Businesses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No generic templates. Every element is chosen because it drives results for your specific industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="h-full border-border hover:border-primary/30 transition-colors duration-200">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <p className="font-semibold text-base mb-2">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────

function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-20 sm:py-28 bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
        </motion.div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="font-semibold text-left py-5 text-sm sm:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection({
  ctaHeadline,
  ctaBody,
}: {
  ctaHeadline: string;
  ctaBody: string;
}) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.12), transparent)",
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{ctaHeadline}</h2>
          <p className="text-lg text-muted-foreground mb-8">{ctaBody}</p>
          <Button asChild size="lg" className="text-base">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground/60">
            No contracts · Response within 1 business day
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Template ────────────────────────────────────────────────────────────

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const { heroProps } = data;

  return (
    <div className="min-h-screen">
      <main>
        {/* 1. Hero */}
        <IndustryPageHero
          {...heroProps}
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          onSecondaryClick={heroProps.secondaryCTA ? () => { window.location.href = "/portfolio"; } : undefined}
        />

        {/* 2. Responsive mockup showcase */}
        <ResponsiveMockup />

        {/* 4. Why it matters */}
        <WhySection
          headline={data.whySection.headline}
          paragraphs={data.whySection.paragraphs}
          challenges={data.whySection.challenges}
          industry={heroProps.industry}
        />

        {/* 5. Features grid */}
        <FeaturesGrid features={data.features} industry={heroProps.industry} />

        {/* 6. Pricing */}
        <Pricing onNavigate={navigateSection} />

        {/* 7. FAQ */}
        <FAQSection faqs={data.faqs} />

        {/* 8. Final CTA */}
        <CTASection ctaHeadline={data.ctaHeadline} ctaBody={data.ctaBody} />
      </main>

    </div>
  );
}
