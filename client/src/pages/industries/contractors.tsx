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
  "Project galleries with before/after photos that showcase your craftsmanship",
  "Service pages for each trade — remodeling, painting, flooring, roofing, etc.",
  "Lead capture forms for estimate requests and project consultations",
  "Licensing, insurance, and credentials displayed prominently to build trust",
  "Local SEO targeting your service area and trade keywords",
  "Review integration to highlight your reputation where it counts",
];

const faqs = [
  {
    q: "I do multiple types of work. Do I need a page for each?",
    a: "Yes — and it's worth it. A separate page for bathroom remodeling, kitchen renovation, and basement finishing each gives you another way to show up in search. More specific pages = more qualified leads.",
  },
  {
    q: "How do I show off my past work if I don't have professional photos?",
    a: "Phone photos are fine to start with. We'll present them in a way that looks polished and professional. As you get better photos over time, we can update the gallery.",
  },
  {
    q: "What's the best way to generate estimate requests online?",
    a: "A simple, short form with the right fields. Ask for project type, timeline, and contact info — nothing more. We build these to have the lowest friction possible so you get more submissions.",
  },
  {
    q: "Homeowners want to see credentials. How do I show them?",
    a: "We prominently feature your license numbers, insurance status, and any certifications throughout your site — especially near CTAs where trust matters most.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function ContractorsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Web Design for Contractors and Trade Businesses — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Contractors"
          headline="Web Design for Contractors and Trade Businesses"
          highlightedPhrase="Trade Businesses"
          subheading="Your work speaks for itself — but only if homeowners can find you and trust you before they reach out. We build contractor sites that generate estimate requests."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          secondaryCTA="See Our Work"
          onSecondaryClick={() => { window.location.href = "/portfolio"; }}
          stats={[
            { value: "Before", label: "/ After Galleries" },
            { value: "More", label: "Estimate Requests" },
            { value: "Trust", label: "Built Before First Call" },
          ]}
          painPoints={[
            "Homeowners can't see your past project quality online",
            "Credentials and insurance aren't displayed prominently",
            "No dedicated pages for each service you offer",
            "Competitors with worse work win on web presence",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Homeowners Research Before They Call</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When a homeowner is looking to hire a contractor, they're making a significant financial decision — and they're doing their homework. They'll check your website, look at your photos, read your reviews, and verify your credentials before they ever pick up the phone.
              </p>
              <p>
                If your website doesn't hold up to that scrutiny — slow, outdated, no photos, no clear services — they'll find someone who has a better-looking online presence, even if your actual work is better.
              </p>
              <p>
                We build sites that win that comparison. Clear services, impressive project photos, prominent credentials, and easy-to-find contact options.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Contractors</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build a Site That Wins You More Jobs</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your trade and what you're looking to grow. We'll put together a custom plan.
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
