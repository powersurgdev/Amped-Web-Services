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
  "Custom design built from scratch — no templates, no page builders",
  "Mobile-first layout that looks great on every screen size",
  "Brand-aligned color palette, typography, and visual identity",
  "Conversion-focused page structure with clear calls-to-action",
];

const steps = [
  { step: "1", title: "Discovery Call", desc: "We learn your business, goals, and what you want customers to feel when they land on your site." },
  { step: "2", title: "Design Concepts", desc: "We build out a design direction and walk you through it — your feedback shapes the final look." },
  { step: "3", title: "Revisions & Approval", desc: "We refine until it's exactly right. You approve before anything goes live." },
  { step: "4", title: "Launch", desc: "We handle the technical side and get your new site in front of customers." },
];

const faqs = [
  {
    q: "Do I have to pick from templates?",
    a: "No. Every design we build is custom — created specifically for your business, your brand, and your customers. We don't use page builder templates.",
  },
  {
    q: "How long does the design process take?",
    a: "Most designs are ready for review within 5–7 business days. Revisions and final approval typically add another few days.",
  },
  {
    q: "What if I don't like the first design?",
    a: "That's what revisions are for. We work with you until the design is something you're genuinely proud of.",
  },
  {
    q: "Do you design logos too?",
    a: "Yes, as an add-on. If you need a logo or want to refresh your current one, we can handle that as part of your project.",
  },
];

export default function WebDesignPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Custom Website Design for Small Businesses — Amped Web Studios</title>
        <meta
          name="description"
          content="No templates, no shortcuts. We design custom websites built around your brand and your customers — then get them live fast."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="Web Design"
          headline="Custom Website Design for Small Businesses"
          highlightedPhrase="Custom Website"
          subheading="Your website is often the first thing a potential customer sees. We make sure it builds trust, reflects your brand, and turns visitors into leads — from day one."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "100%", label: "Custom Built" },
            { value: "5–7", label: "Days to Design" },
            { value: "0", label: "Templates Used" },
          ]}
          featureHighlights={[
            "Custom design built from scratch — no templates",
            "Mobile-first layout across every screen size",
            "Brand-aligned colors, typography, and identity",
            "Conversion-focused structure with clear CTAs",
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
            <h2 className="text-3xl font-bold">Why Design Matters More Than You Think</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most people decide whether to trust a business within seconds of landing on their website. A generic template, a cluttered layout, or a site that doesn't look right on a phone can send them straight to a competitor — before they've even read a word.
              </p>
              <p>
                A custom design isn't about being fancy. It's about making your business look like the professional, reliable option. It's the difference between someone calling you and someone bouncing to the next result.
              </p>
              <p>
                We design sites that communicate who you are, what you do, and why a customer should choose you — clearly, quickly, and without confusion.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <h2 className="text-3xl font-bold text-center">How the Process Works</h2>
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
                <details
                  key={faq.q}
                  className="border border-border rounded-lg p-5 group"
                >
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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready for a Website You're Proud to Send People To?</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your business. We'll put together a custom plan and get back to you fast.
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
