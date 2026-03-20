import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageHero from "@/components/ServicePageHero";

const deliverables = [
  "On-page SEO optimization — titles, headings, meta descriptions, and schema",
  "Google Business Profile setup and optimization",
  "Local keyword targeting for your service area",
  "Monthly performance reporting so you can see the progress",
];

const steps = [
  { step: "1", title: "SEO Audit", desc: "We analyze your current rankings, site structure, and what keywords your customers are actually searching." },
  { step: "2", title: "On-Page Optimization", desc: "We update your site structure, content, and technical SEO to align with what Google is looking for." },
  { step: "3", title: "Google Business Profile", desc: "We fully optimize your GBP listing — the single most important thing for showing up in local map results." },
  { step: "4", title: "Ongoing Growth", desc: "SEO isn't one-and-done. We monitor, adjust, and keep pushing you up in rankings month over month." },
];

const faqs = [
  {
    q: "How long does SEO take to work?",
    a: "Most businesses start seeing meaningful movement in 60–90 days. Local SEO often moves faster than national SEO because the competition is more defined.",
  },
  {
    q: "Do I need SEO if I already have a website?",
    a: "If people can't find you on Google, your website isn't doing much. SEO is what makes your site actually discoverable.",
  },
  {
    q: "What's a Google Business Profile and why does it matter?",
    a: "It's the listing that shows up on Google Maps when someone searches for businesses like yours nearby. An optimized GBP is often the fastest way to get more calls from local customers.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No reputable SEO provider does. We focus on sustainable, ethical SEO practices that build lasting rankings — not shortcuts that can get your site penalized.",
  },
  {
    q: "Is SEO included in my website package?",
    a: "Basic on-page SEO is included in all our website builds. Advanced local SEO campaigns are a separate ongoing service.",
  },
];

export default function SeoLocalSearchPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Local SEO That Gets You Found on Google — Amped Web Studios</title>
        <meta
          name="description"
          content="We optimize your website and Google Business Profile so local customers find you first — before they find your competition."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="SEO & Local Search"
          headline="Local SEO That Gets You Found on Google"
          highlightedPhrase="Gets You Found"
          subheading="When someone in your area searches for what you do, you should be the first result they see. We make that happen."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "60–90", label: "Days to Results" },
            { value: "#1", label: "Goal: Map Pack" },
            { value: "100%", label: "White-Hat Only" },
          ]}
          featureHighlights={[
            "On-page SEO — titles, headings, and schema markup",
            "Google Business Profile setup and optimization",
            "Local keyword targeting for your service area",
            "Monthly reporting so you see the progress",
          ]}
        />

        {/* What's included */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center">What's Included</h2>
              <ul className="grid sm:grid-cols-2 gap-5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 sm:py-24 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">If They Can't Find You, They Can't Hire You</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most people don't scroll past the first page of Google results. If your business isn't showing up there, you're invisible to the majority of people searching for what you offer.
              </p>
              <p>
                Local SEO is different from general SEO — it's about ranking for searches in your specific service area. "Plumber near me," "HVAC company in [city]," "best electrician in [neighborhood]" — these are high-intent searches from people who are ready to hire.
              </p>
              <p>
                We optimize your website and your Google Business Profile to show up prominently for these searches, driving more calls, more form fills, and more booked jobs.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-3xl font-bold text-center">How It Works</h2>
            <div className="space-y-6">
              {steps.map((s) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="border border-border rounded-lg p-5 group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between items-center gap-3">
                    {faq.q}
                    <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Start Showing Up Where Your Customers Are Looking</h2>
            <p className="text-lg text-muted-foreground">
              Let us audit your current online presence and show you where the biggest opportunities are.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">Get a Free Quote</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
