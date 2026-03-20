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
  "Managed hosting with 99.9% uptime guarantee",
  "Automatic backups so you never lose your site",
  "Security monitoring and malware protection",
  "Software and content updates handled for you",
];

const steps = [
  { step: "1", title: "Site Goes Live", desc: "Once your site launches, your hosting plan starts. No separate accounts to set up." },
  { step: "2", title: "We Monitor", desc: "We watch your site around the clock for downtime, security threats, and performance drops." },
  { step: "3", title: "You Request Updates", desc: "Need a new page, updated hours, or fresh photos? Just email us. Most updates are done within 1–2 business days." },
  { step: "4", title: "We Handle the Rest", desc: "Backups, SSL renewal, software updates — all handled on our end without you lifting a finger." },
];

const faqs = [
  {
    q: "What happens if my site goes down?",
    a: "We get alerted immediately and work to get it back up. You don't have to figure out what went wrong — that's our job.",
  },
  {
    q: "Can I make content updates myself?",
    a: "Yes, but you don't have to. Content updates are included in your care plan. Just send us what you need changed and we'll handle it.",
  },
  {
    q: "What if I already have hosting somewhere else?",
    a: "We prefer to manage hosting ourselves so we can guarantee performance and response time. If you want to migrate, we handle that too.",
  },
  {
    q: "Is there a contract?",
    a: "No long-term contracts. Hosting is billed monthly and you can cancel anytime with 30 days notice.",
  },
];

export default function HostingCarePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Managed Website Hosting With Zero Headaches — Amped Web Studios</title>
        <meta
          name="description"
          content="We manage your hosting, updates, backups, and security. Your site stays live and fast — you focus on running your business."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <ServicePageHero
          badge="Hosting & Care"
          headline="Managed Website Hosting With Zero Headaches"
          highlightedPhrase="Zero Headaches"
          subheading="Your website shouldn't require a tech degree to keep it running. We handle all of it — hosting, updates, backups, security — so you never have to think about it."
          primaryCTA="See Hosting Plans"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "99.9%", label: "Uptime Guaranteed" },
            { value: "24/7", label: "Monitoring" },
            { value: "1–2", label: "Days for Updates" },
          ]}
          featureHighlights={[
            "Managed hosting with 99.9% uptime guarantee",
            "Automatic backups — never lose your site",
            "Security monitoring and malware protection",
            "Content updates handled for you on request",
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
            <h2 className="text-3xl font-bold">Your Site Going Down Is a Business Emergency</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every hour your website is down, you're losing potential customers who can't find you, can't book, and can't call. Most business owners don't even find out their site is down until a customer tells them.
              </p>
              <p>
                Cheap hosting and DIY WordPress setups are the #1 reason for unexpected downtime. Plugin conflicts, expired SSL certificates, hacked sites — these aren't rare. They're the norm when nobody's watching.
              </p>
              <p>
                With our care plans, someone is always watching. We get the alert before you do — and we fix it before it becomes your problem.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Stop Worrying About Your Website. We've Got It.</h2>
            <p className="text-lg text-muted-foreground">
              Ask us about our hosting and care plans. We'll find the right fit for your business.
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
