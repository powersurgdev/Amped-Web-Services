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
  "Hand-coded site built for speed — no bloated page builders",
  "Domain setup, DNS configuration, and SSL certificate",
  "Full mobile responsiveness across all major devices",
  "Contact forms, Google Maps integration, and all launch essentials",
];

const steps = [
  { step: "1", title: "Approved Design", desc: "Once your design is signed off, we move straight into development — no delays." },
  { step: "2", title: "Build & QA", desc: "We build every page, test across browsers and devices, and check load times before you ever see it." },
  { step: "3", title: "Review & Feedback", desc: "We share a staging link so you can click through everything before it goes live." },
  { step: "4", title: "Go Live", desc: "We handle the domain, hosting setup, and launch. You get an email when it's live." },
];

const faqs = [
  {
    q: "How fast will my site load?",
    a: "Very fast. We write clean, optimized code without the overhead of WordPress plugins or page builders. Sites we build typically score 90+ on Google PageSpeed.",
  },
  {
    q: "Do you use WordPress?",
    a: "We build with modern web technologies — not WordPress. This means better performance, fewer security risks, and no plugin headaches.",
  },
  {
    q: "What about domain and hosting?",
    a: "We handle it all. Domain connection, hosting setup, and SSL are included in your project. You don't need to touch any of that.",
  },
  {
    q: "How long does development take?",
    a: "Most sites are built and ready for review within 7–10 business days of design approval.",
  },
];

export default function WebDevelopmentPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Professional Web Development That Goes Live Fast — Amped Web Studios</title>
        <meta
          name="description"
          content="Fast, clean, hand-coded websites. We handle development, domain setup, hosting, and launch — so you don't have to touch any of it."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="Web Development"
          headline="Professional Web Development That Goes Live Fast"
          highlightedPhrase="Goes Live Fast"
          subheading="We don't hand you a login and wish you luck. We build it, launch it, and make sure it works — from the domain all the way to go-live."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "90+", label: "PageSpeed Score" },
            { value: "7–10", label: "Days to Launch" },
            { value: "0", label: "Plugins to Manage" },
          ]}
          featureHighlights={[
            "Hand-coded for speed — no bloated page builders",
            "Domain, DNS, and SSL fully handled for you",
            "Cross-browser and device tested before launch",
            "Contact forms, Maps, and all launch essentials included",
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
            <h2 className="text-3xl font-bold">Why Code Quality Is a Business Problem</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A slow website costs you customers. Studies consistently show that if a page takes more than 3 seconds to load, most people leave. That's not a design problem — it's a development problem.
              </p>
              <p>
                Most websites built on WordPress with 20 plugins are slow, cluttered with unnecessary code, and vulnerable to security issues. We don't build that way. Everything we ship is clean, fast, and built to last.
              </p>
              <p>
                And we don't leave you stranded after launch. You get managed hosting, so if something ever goes wrong technically, you have someone to call.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build Something Fast and Built to Last</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll get back to you with a custom plan.
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
