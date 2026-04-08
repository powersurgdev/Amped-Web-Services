'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Rocket,
  Eye,
  TrendingUp,
  Palette,
  FilePlus,
  Zap,
  MapPin,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingProps {
  onNavigate?: (section: string) => void;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
}

const pricingPlans = [
  {
    id: "launch",
    name: "Launch",
    hook: "Everything you need to put your business on the map.",
    oneTime: "$500",
    monthly: "$35",
    period: "/mo",
    description:
      "A complete, professional website covering all the core pages a local business needs — built clean, fast, and ready to be found.",
    features: [
      "Custom website — up to 10 pages",
      "Home, About, Contact, Portfolio + up to 6 service pages",
      "Mobile-first, responsive design",
      "Basic on-page SEO (titles, descriptions, alt text)",
      "Google Analytics 4 installation",
      "Google Search Console setup & verification",
      "Hosting, SSL & contact form included",
      "Speed & performance optimization",
    ],
    bestFor: "New businesses or anyone running off a Facebook page who needs a clean, credible web presence",
    cta: "Launch My Site",
    popular: false,
    icon: Rocket,
  },
  {
    id: "visibility",
    name: "Visibility",
    hook: "Show up where your customers are already searching.",
    oneTime: "$1,000",
    monthly: "$250",
    period: "/mo",
    description:
      "We answer the question your customers are asking: \"Do you service my area?\" Your site, your Google listing, and your service areas — all working together.",
    features: [
      "Everything in Launch",
      "Google Business Profile setup & optimization",
      "GA4 goal configuration (calls, forms, clicks)",
      "Call tracking number setup",
      "Service-area landing pages (e.g., \"Tree Services in Wesley Chapel\")",
      "LocalBusiness schema markup",
      "Monthly GBP post to keep your listing active",
    ],
    bestFor: "Businesses serving multiple cities who are getting zero Google visibility outside their front door",
    cta: "Get Found",
    popular: true,
    icon: Eye,
  },
  {
    id: "scale",
    name: "Scale",
    hook: "Own every search in every city you serve.",
    oneTime: "$1,500",
    monthly: "$500",
    period: "/mo",
    description:
      "We go deep — building individual pages for every service in every city, plus SEO content that compounds over time.",
    features: [
      "Everything in Visibility",
      "Hyper-local SEO pages (e.g., \"Tree Removal in Wesley Chapel\", \"Stump Grinding in Dade City\")",
      "Logo design (primary + horizontal + icon variations)",
      "Brand color palette & font reference sheet",
      "2 SEO blog posts per month",
      "Up to 2 content updates per month",
      "Ongoing on-page SEO tuning",
    ],
    bestFor: "Established businesses ready to outrank every competitor in every city they serve",
    cta: "Scale My Business",
    popular: false,
    icon: TrendingUp,
  },
];

const addons = [
  {
    id: "logo",
    name: "Logo Design",
    price: "$200",
    period: "one-time",
    description: "A professional logo built for your brand — primary, horizontal, and icon versions delivered with web-ready files.",
    icon: Palette,
  },
  {
    id: "extra-pages",
    name: "Extra Pages",
    price: "$50",
    period: "per page",
    description: "Add additional pages to your site — fully designed, optimized, and consistent with your brand.",
    icon: FilePlus,
  },
  {
    id: "rush",
    name: "Rush Build",
    price: "+$250",
    period: "one-time",
    description: "Need it live faster? We'll prioritize your project and deliver your site within 7 days.",
    icon: Zap,
  },
  {
    id: "local-seo",
    name: "Local SEO Pages",
    price: "$100",
    period: "per page",
    bundles: "3 pages for $250 · 5 pages for $400",
    description:
      "Location-specific pages built for cities or service areas you want to rank in on Google. For example: Tree Removal in Wesley Chapel, Stump Grinding in Land O' Lakes, or AC Repair in Lutz. These pages help your business show up when people in nearby areas search for what you offer.",
    icon: MapPin,
    expandable: true,
  },
  {
    id: "gbp-cleanup",
    name: "GBP Cleanup",
    price: "$99",
    period: "one-time",
    description: "Already have a Google Business Profile but it's a mess? We audit, clean, and fully optimize your existing listing.",
    icon: Globe,
  },
];

export default function Pricing({ onNavigate = scrollToSection }: PricingProps) {
  const [localSeoExpanded, setLocalSeoExpanded] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-pricing-title">
            Simple Plans for Getting Your Business Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time build fee + a low monthly rate. No hidden costs. No long-term contracts.
          </p>
        </motion.div>

        {/* Package Cards — 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex"
            >
              <Card
                className={`relative flex flex-col w-full hover-elevate transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : ""
                }`}
                data-testid={`card-pricing-${plan.id}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="px-4 py-1 whitespace-nowrap">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardContent className={`p-7 flex flex-col gap-5 flex-1 ${plan.popular ? "pt-7 mt-3" : ""}`}>
                  {/* Plan header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <plan.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-wide uppercase text-foreground">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground italic">{plan.hook}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1 pt-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-sm text-muted-foreground">{plan.oneTime} one-time build</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.monthly}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best for */}
                  <p className="text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="font-semibold text-foreground">Best for: </span>
                    {plan.bestFor}
                  </p>

                  {/* CTA */}
                  <div className="space-y-2">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => onNavigate("contact")}
                      data-testid={`button-pricing-cta-${plan.id}`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Optional Addons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold">Optional Add-ons</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Bolt on exactly what you need — nothing more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
            {addons.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + index * 0.07 }}
                className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <Card
                  className="h-full hover-elevate transition-all duration-300"
                  data-testid={`card-addon-${item.id}`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-semibold">{item.name}</h4>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">{item.price}</span>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      {"bundles" in item && item.bundles && (
                        <p className="text-xs text-primary font-medium mt-0.5">{item.bundles}</p>
                      )}
                    </div>

                    {item.expandable ? (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Location-specific pages built to rank in the cities and service areas you want to target.
                        </p>
                        <button
                          onClick={() => setLocalSeoExpanded((v) => !v)}
                          className="flex items-center gap-1 text-xs text-primary hover:underline"
                          data-testid="button-local-seo-expand"
                          aria-expanded={localSeoExpanded}
                        >
                          {localSeoExpanded ? (
                            <>
                              <ChevronUp className="w-3 h-3" /> Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3" /> What are local SEO pages?
                            </>
                          )}
                        </button>
                        <AnimatePresence>
                          {localSeoExpanded && (
                            <motion.p
                              key="local-seo-detail"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="text-xs text-muted-foreground overflow-hidden"
                            >
                              {item.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Not sure which plan fits?{" "}
          <button
            onClick={() => onNavigate("contact")}
            className="text-primary hover:underline"
            data-testid="link-custom-quote"
          >
            Get in touch
          </button>{" "}
          and we'll find the right fit together.
        </motion.p>
      </div>
    </section>
  );
}
