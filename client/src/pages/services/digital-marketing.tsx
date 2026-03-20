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
  "Online review generation and reputation management",
  "Local SEO landing pages targeting additional service areas or keywords",
  "Google Business Profile management and monthly posting",
  "Monthly reporting showing growth in visibility, traffic, and leads",
];

const steps = [
  { step: "1", title: "Growth Audit", desc: "We review your current digital footprint — reviews, local listings, search visibility — and identify where you're leaving leads on the table." },
  { step: "2", title: "Strategy Plan", desc: "We build a tailored growth plan focused on the channels that will move the needle fastest for your specific business and market." },
  { step: "3", title: "Execution", desc: "We implement — new landing pages, review campaigns, GBP updates, and content — consistently, month over month." },
  { step: "4", title: "Reporting & Refinement", desc: "You get clear monthly reports. We review what's working, cut what isn't, and keep optimizing." },
];

const faqs = [
  {
    q: "What's the difference between SEO and digital marketing?",
    a: "SEO is focused on getting found in search results. Digital marketing is broader — it includes reviews, reputation, content, local listings, and everything else that builds your online presence.",
  },
  {
    q: "How important are online reviews?",
    a: "Extremely. Most people read reviews before contacting a local business. A business with 4.8 stars and 100 reviews will beat one with 3.9 stars every time, even if the latter spends more on ads.",
  },
  {
    q: "What are local SEO landing pages?",
    a: "These are additional pages on your site that target specific cities or neighborhoods in your service area. If you serve 5 towns, you can have a page for each — and rank in all of them.",
  },
  {
    q: "How long before I see results from digital marketing?",
    a: "Review campaigns can show results within weeks. SEO content and landing pages typically take 2–3 months to build momentum. This is a long-term growth strategy, not an overnight fix.",
  },
];

export default function DigitalMarketingPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing That Grows Small Businesses — Amped Web Studios</title>
        <meta
          name="description"
          content="Review management, local SEO pages, and targeted content — we help your business grow well beyond just having a website."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="Digital Marketing"
          headline="Digital Marketing That Grows Small Businesses"
          highlightedPhrase="Grows Small Businesses"
          subheading="A great website is the foundation. Digital marketing is what makes it a lead-generating machine — more reviews, more search visibility, more booked jobs."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "2–3", label: "Months to Momentum" },
            { value: "4.8★", label: "Avg. Review Target" },
            { value: "∞", label: "Compounding Growth" },
          ]}
          featureHighlights={[
            "Online review generation and reputation management",
            "Local SEO landing pages for additional service areas",
            "Google Business Profile management and posting",
            "Monthly reporting — visibility, traffic, and leads",
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
            <h2 className="text-3xl font-bold">A Website Without Marketing Is a Brochure Nobody Reads</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most small businesses launch a website and wait for leads to start coming in. They don't. A website alone is passive — it needs to be backed up by the right signals across the web for Google to send you traffic.
              </p>
              <p>
                Reviews tell Google (and your potential customers) that you're legit and active. Local landing pages tell Google which areas you serve. Regular GBP updates tell Google your business is operating. All of these work together.
              </p>
              <p>
                We handle the full picture — not just the website, but the ecosystem around it that drives consistent, compounding growth.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Grow Beyond Just a Website?</h2>
            <p className="text-lg text-muted-foreground">
              Let's talk about what growth looks like for your specific business and market.
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
