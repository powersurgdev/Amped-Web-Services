'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  ShieldCheck,
  Plus,
  ExternalLink,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

import Footer from "@/components/Footer";
import ServicePageHero from "@/components/ServicePageHero";
import { trackCtaClick } from "@/lib/analytics";
import Image from "next/image";
import vergaImg from "@assets/generated_images/verga-electric_portfolio.webp";
import vanguardImg from "@assets/generated_images/vanguard_gutters_portfolio.webp";
import grandOaksImg from "@assets/generated_images/grandoaks_portfolio.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

interface StatItem {
  value: string;
  label: string;
}

interface HeroProps {
  badge: string;
  headline: string;
  highlightedPhrase?: string;
  subheading: string;
  primaryCTA: string;
  secondaryCTA?: string;
  stats?: StatItem[];
  featureHighlights?: string[];
}

export interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon?: ReactNode;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageTemplateProps {
  pageTitle: string;
  pageDescription: string;
  hero: HeroProps;
  featuresHeading?: string;
  features: FeatureCard[];
  problemHeading?: string;
  solutionHeading?: string;
  problems: string[];
  solutions: string[];
  processHeading?: string;
  steps: ProcessStep[];
  faqHeading?: string;
  faqs: FAQ[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonText?: string;
  guaranteeText: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] as const },
  }),
};

const trustItems = [
  "★★★★★ 5-Star Rated",
  "20+ Projects Delivered",
  "Hand-Coded — No Page Builders",
  "100% Satisfaction Focus",
];

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium hover:bg-accent/50 transition-colors gap-4"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <Plus className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServicePageTemplate({
  pageTitle,
  pageDescription,
  hero,
  featuresHeading = "What You Get",
  features,
  problemHeading = "The Problem",
  solutionHeading = "Our Solution",
  problems,
  solutions,
  processHeading = "How It Works",
  steps,
  faqHeading = "Frequently Asked Questions",
  faqs,
  ctaHeadline,
  ctaSubtext,
  ctaButtonText = "Start Your Project",
  guaranteeText,
}: ServicePageTemplateProps) {
  const goToContact = (location: string, label: string) => {
    trackCtaClick({ location, label, destination: '/contact' });
    window.location.href = '/contact';
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* 1 — Hero */}
      <ServicePageHero
        {...hero}
        onPrimaryClick={() => goToContact('service_detail_hero', hero.primaryCTA)}
        onSecondaryClick={hero.secondaryCTA ? () => goToContact('service_detail_hero', hero.secondaryCTA!) : undefined}
      />

      {/* 2 — Trust Bar */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
            {trustItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2.5 justify-center ${
                  i < trustItems.length - 1 ? "lg:border-r lg:border-border" : ""
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Feature Cards */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{featuresHeading}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything included — no hidden extras, no add-ons to basic features.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Problem / Solution Split */}
      <section className="py-16 sm:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              The Situation Most Businesses Are In
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Problems */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background border border-border/60 rounded-2xl p-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
                <XCircle className="w-3.5 h-3.5 text-destructive" />
                <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                  {problemHeading}
                </span>
              </div>
              <ul className="space-y-4">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Solutions */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {solutionHeading}
                </span>
              </div>
              <ul className="space-y-4">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5 — See Our Work */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See What We've Built</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real sites. Real businesses. Real results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { src: vergaImg, name: "Verga Electric", industry: "Electrical Contractor" },
              { src: vanguardImg, name: "Vanguard Gutters", industry: "Home Services" },
              { src: grandOaksImg, name: "Grand Oaks", industry: "Property Maintenance" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-xl overflow-hidden border border-border shadow-lg bg-card"
              >
                <div className="overflow-hidden relative h-52">
                  <Image
                    src={item.src}
                    alt={`${item.name} website`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.industry}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Process Steps */}
      <section className="py-16 sm:py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{processHeading}</h2>
            <p className="text-muted-foreground text-lg">
              Simple, clear, and built around your schedule.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 flex gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center flex-shrink-0 leading-none">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — FAQ */}
      <section className="py-16 sm:py-24 bg-card/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{faqHeading}</h2>
            <p className="text-muted-foreground">Real questions from real business owners.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <FAQItem {...faq} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CTA + Guarantee */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 rounded-2xl p-8 sm:p-12">
            <div className="space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{ctaHeadline}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{ctaSubtext}</p>
              <Button size="lg" onClick={() => goToContact('service_detail_footer', ctaButtonText)} className="text-base">
                <span className="flex items-center gap-2">
                  {ctaButtonText}
                  <motion.span
                    animate={{ x: [0, 4] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Promise</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{guaranteeText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
