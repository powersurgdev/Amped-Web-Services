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
  "Agent bio and personal brand page that builds credibility with buyers and sellers",
  "Lead capture forms for home valuations, buyer consultations, and listing inquiries",
  "Featured listings section with property details and photos",
  "Neighborhood guides and local market content for SEO",
  "Testimonials and past client reviews displayed prominently",
  "Clear calls-to-action for both buyers and sellers",
];

const faqs = [
  {
    q: "Do I need my own website if my brokerage has one?",
    a: "Yes. Your brokerage site represents the whole firm, not you. A personal site lets you build your own brand, generate your own leads, and stand out in a crowded market.",
  },
  {
    q: "Can you integrate MLS listings?",
    a: "We can display featured listings directly on your site. Full MLS integration is available as a custom add-on depending on your MLS provider.",
  },
  {
    q: "What's the most important thing to include on a real estate agent's website?",
    a: "A strong bio, social proof (past sales, testimonials), and a clear way for buyers and sellers to reach you. Everything else supports those three things.",
  },
  {
    q: "How do I get leads from my website, not just traffic?",
    a: "Lead forms tied to something valuable — home valuation, market reports, neighborhood guides — consistently outperform generic 'contact me' forms. We build sites with that in mind.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function RealEstatePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Real Estate Websites That Capture More Leads — Amped Web Studios</title>
        <meta
          name="description"
          content="We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Real Estate"
          headline="Real Estate Websites That Capture More Leads"
          highlightedPhrase="Capture More Leads"
          subheading="In real estate, your personal brand is everything. We build agent websites that make buyers and sellers choose you over every other agent in your market."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "Personal", label: "Brand That Stands Out" },
            { value: "Buyer", label: "& Seller Lead Forms" },
            { value: "Local", label: "SEO for Your Market" },
          ]}
          painPoints={[
            "Brokerage site represents the firm, not you personally",
            "No dedicated way to capture buyer or seller leads",
            "Weak bio doesn't convert curious browsers to clients",
            "Competitors with stronger web presence win the listing",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Buyers and Sellers Research Agents Online Before They Call</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When someone is ready to buy or sell, they don't just go with the first agent they find — they check out your website, read your reviews, look at your past sales, and decide whether they trust you before they ever reach out.
              </p>
              <p>
                A weak or generic agent website loses that comparison every time. A strong personal brand site — with a compelling bio, social proof, and clear CTAs — wins it.
              </p>
              <p>
                We build agent sites that feel personal, professional, and trustworthy — the combination that converts curious browsers into actual clients.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Real Estate Professionals</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Build a Brand That Wins Listings</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your market and what you're looking to grow. We'll put together a custom plan.
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
