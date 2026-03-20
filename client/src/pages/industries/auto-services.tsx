import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import IndustryPageHero from "@/components/IndustryPageHero";

const features = [
  "Service pages covering each offering — oil changes, brakes, detailing, towing, etc.",
  "Click-to-call buttons optimized for mobile users in urgent situations",
  "Online appointment and quote request forms",
  "Hours, location, and Google Maps embedded for quick reference",
  "Customer reviews and testimonials displayed prominently",
  "Local SEO to rank for 'mechanic near me' and service-specific searches",
];

const faqs = [
  {
    q: "Most of my customers are in an emergency — how should my site handle that?",
    a: "Your phone number should be visible immediately, ideally at the top of every page with a tap-to-call link on mobile. We design with urgent search intent in mind.",
  },
  {
    q: "Should I list prices for common services?",
    a: "Listing price ranges (e.g., 'Oil changes starting at $X') builds trust and reduces price-shopping friction. We'll help you decide what to display based on your competitive positioning.",
  },
  {
    q: "I do detailing — is that handled differently than mechanical work?",
    a: "Yes. Detailing sites benefit heavily from visual galleries showing before/after results. We adjust the emphasis based on whether you're selling expertise (mechanical) or results (detailing).",
  },
  {
    q: "How do I compete with the big chains online?",
    a: "Local SEO and reviews. A well-optimized independent shop page with strong reviews consistently outperforms chain locations in local map searches. We focus on exactly that.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function AutoServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Auto Shop Websites Built to Bring in More Customers — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for auto mechanics, detailing shops, car washes, and towing companies — designed to capture local search traffic and convert it into customers."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Auto Services"
          headline="Auto Shop Websites Built to Bring in More Customers"
          highlightedPhrase="Bring in More Customers"
          subheading="Auto service customers search on their phones when they have a problem. We build sites that show up fast, load fast, and make it easy to call or book."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "Mobile", label: "First, Always" },
            { value: "1-tap", label: "Click to Call" },
            { value: "Local", label: "Map Pack Rankings" },
          ]}
          painPoints={[
            "Phone number is hard to find or tap on mobile",
            "You're not showing up in 'mechanic near me' searches",
            "No online appointment or quote request option",
            "Big chain shops rank above you despite worse reviews",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Most Auto Customers Search Before They Call</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Whether someone's stranded with a flat or planning ahead for an oil change, they're going to Google first. "Mechanic near me," "auto detailing [city]," "towing service open now" — these are high-intent searches happening constantly.
              </p>
              <p>
                If your website doesn't show up for those searches, or shows up but isn't built to convert mobile traffic fast, you're losing customers to competitors with better-optimized sites — regardless of the quality of your actual work.
              </p>
              <p>
                We build sites that capture that traffic and turn it into calls, appointments, and booked jobs.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Auto Service Businesses</h2>
            <ul className="grid sm:grid-cols-2 gap-5">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <Pricing onNavigate={navigateSection} />

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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Win More Local Customers?</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your shop and what you're trying to grow. We'll put together a plan that works.
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
