'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Eye,
  Rocket,
  ArrowRight,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Smartphone,
  Search,
  Gauge,
  Headphones,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const steps = [
  {
    number: "01",
    icon: Pencil,
    title: "We Build Your Concept",
    description:
      "We design your homepage concept and show you what's possible.",
    pill: "100% Free",
  },
  {
    number: "02",
    icon: Eye,
    title: "You Review & Decide",
    description:
      "You take your time to review, request changes, and make sure it's exactly what you want.",
    pill: "No Obligation",
  },
  {
    number: "03",
    icon: Rocket,
    title: "You Approve, We Build",
    description:
      "Once you're 100% happy, you approve the design, we finalize the rest, and launch your site.",
    pill: "Pay Only If You Approve",
  },
];

const protectionPoints = [
  "No payment until you approve",
  "We only finish what you pay for",
  "Your vision. Your call.",
  "Fair for both of us",
];

const inclusions = [
  {
    icon: Monitor,
    title: "Custom Design",
    description: "A unique design tailored to your brand and goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Fully responsive and optimized for all devices.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Built with clean code and on-page SEO best practices.",
  },
  {
    icon: Gauge,
    title: "Fast & Secure",
    description: "Optimized for speed, security, and performance.",
  },
  {
    icon: Pencil,
    title: "Easy to Manage",
    description: "User-friendly updates and content management.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "We're here when you need us — before and after launch.",
  },
];

function scrollToContact() {
  if (typeof window === "undefined") return;
  const el = document.getElementById("contact");
  if (el) {
    const offset = 64;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
}

export default function RiskFreeBuild() {
  const handleProtectedCta = () => {
    trackEvent("risk_free_build_cta_click", { location: "protected_banner" });
    scrollToContact();
  };

  const handleFinalCta = () => {
    trackEvent("risk_free_build_cta_click", { location: "final_card" });
    scrollToContact();
  };

  return (
    <section id="risk-free-build" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Block 1 — Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest text-primary"
            data-testid="text-risk-free-eyebrow"
          >
            How It Works
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            data-testid="text-risk-free-title"
          >
            <span className="block">Premium Websites.</span>
            <span className="block text-primary">Built for You. Zero Risk.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We design your website concept completely free. You only pay if you
            love it and want to move forward.
          </p>
        </motion.div>

        {/* Block 2 — Three step cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-3xl font-bold text-muted-foreground/30 select-none">
                        {step.number}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      data-testid={`text-risk-free-step-${index}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {step.description}
                    </p>
                    <Badge
                      variant="outline"
                      className="self-start text-primary border-primary/40"
                    >
                      {step.pill}
                    </Badge>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-6 h-6 text-primary/50 z-10"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 3 — "You're Always Protected" trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-primary/30 shadow-lg shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Left */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold">
                      You're Always Protected.
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We don't complete your website until your invoice is paid.
                      This protects your investment and ours.
                    </p>
                  </div>
                </div>

                {/* Center */}
                <ul className="space-y-2.5 lg:border-l lg:border-r lg:border-border lg:px-8">
                  {protectionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Right */}
                <div className="space-y-2 text-center lg:text-right">
                  <Button
                    onClick={handleProtectedCta}
                    size="lg"
                    className="w-full lg:w-auto"
                    data-testid="button-risk-free-protected-cta"
                  >
                    Get My Free Concept
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Let's bring your vision to life.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Block 4 — "What's Included" inclusions grid */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What's Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything You Need to Succeed Online.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every website we create is custom, strategic, and built to help
              your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {inclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full hover-elevate transition-all duration-300">
                  <CardContent className="p-4 sm:p-5 text-center space-y-2.5 flex flex-col items-center h-full">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 5 — Final CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="w-14 h-14 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Let's build a website that sets you apart. Your free concept
                    is just one click away.
                  </p>
                </div>
                <div className="space-y-2 text-center flex-shrink-0">
                  <Button
                    onClick={handleFinalCta}
                    size="lg"
                    className="w-full sm:w-auto"
                    data-testid="button-risk-free-final-cta"
                  >
                    Request My Free Concept
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    No risk. All potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Block 6 — Bottom guarantee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <p className="text-sm sm:text-base font-semibold">
              No Contracts. No Hidden Fees. Just Honest, High-Quality Web
              Design.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            You only pay when you're 100% happy with your website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
