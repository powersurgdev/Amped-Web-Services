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
  "Complete visual redesign — new layout, typography, and color system",
  "Performance optimization for faster load times and better Core Web Vitals",
  "Content restructuring to improve conversions and clarity",
  "Mobile experience overhaul if your current site isn't responsive",
];

const steps = [
  { step: "1", title: "Site Audit", desc: "We review your current site's design, speed, content, and conversion rate — and identify exactly what's holding it back." },
  { step: "2", title: "Redesign & Rebuild", desc: "We modernize the look and rebuild the structure, keeping the content that works and improving what doesn't." },
  { step: "3", title: "Content & Conversion Pass", desc: "We sharpen your headlines, CTAs, and page flow so visitors know exactly what to do next." },
  { step: "4", title: "Launch", desc: "New site goes live on your existing domain — no change in URL, no SEO disruption." },
];

const faqs = [
  {
    q: "Will a refresh hurt my SEO?",
    a: "Not if done right. We preserve your existing URLs and redirect structure, so you keep the rankings you've already built.",
  },
  {
    q: "Can you keep some of my existing content?",
    a: "Yes. If parts of your site are working, we'll keep and improve them. A refresh isn't about starting over — it's about fixing what's broken.",
  },
  {
    q: "How is this different from building a new site?",
    a: "A refresh is typically faster and focuses on modernizing and improving an existing site. A new build is for businesses starting from scratch or needing a completely different structure.",
  },
  {
    q: "My site was built on Wix/Squarespace/WordPress. Can you refresh it?",
    a: "We'll rebuild it in our stack — which is faster and more maintainable. The design and content carry over; the platform changes.",
  },
];

export default function WebsiteRefreshPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Website Redesign That Modernizes and Converts — Amped Web Studios</title>
        <meta
          name="description"
          content="Got a site that's falling behind? We redesign, rebuild, and optimize for speed, conversions, and modern UX — without losing what's working."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="Website Refresh"
          headline="Website Redesign That Modernizes and Converts"
          highlightedPhrase="Modernizes and Converts"
          subheading="Your site might be live, but is it working? If it's slow, outdated, or not generating leads, a refresh can change that fast."
          primaryCTA="Get a Free Site Review"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "3x", label: "Avg. Speed Gain" },
            { value: "0", label: "SEO Disruption" },
            { value: "Fast", label: "Turnaround" },
          ]}
          featureHighlights={[
            "Complete visual redesign — new layout and type system",
            "Performance optimization for Core Web Vitals",
            "Content restructuring to improve conversions",
            "Mobile experience overhaul if needed",
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
            <h2 className="text-3xl font-bold">An Outdated Website Is Costing You Business</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                People make quick judgements. If your website looks like it was built in 2012, loads in 8 seconds, or doesn't display properly on a phone — they assume your business is behind the times. They click away and call someone else.
              </p>
              <p>
                A refresh isn't vanity. It's a business decision. Modern sites convert more visitors into leads, rank better in search results, and build more trust with potential customers in the first few seconds.
              </p>
              <p>
                We've taken sites from embarrassing to impressive and watched the calls start coming in. A better website does real, measurable work.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Your Site Deserves Better. Let's Fix It.</h2>
            <p className="text-lg text-muted-foreground">
              Send us your current site and we'll tell you exactly what we'd change and why.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base">Get a Free Site Review</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
