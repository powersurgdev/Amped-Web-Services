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
  "Stunning portfolio galleries optimized for visual impact",
  "Full-screen image and video presentation with fast loading",
  "Service packages and pricing pages that help clients self-qualify",
  "Contact and booking inquiry forms tailored for project inquiries",
  "About page that builds personal connection and credibility",
  "SEO optimization for local and specialty photography/creative searches",
];

const faqs = [
  {
    q: "Should my portfolio site be simple or complex?",
    a: "Simple. The work should be front and center. We build clean, minimal layouts that let your images or video do the talking — nothing cluttered, nothing distracting.",
  },
  {
    q: "How do I show my best work without overwhelming visitors?",
    a: "Curated galleries by category (weddings, portraits, commercial, etc.) with a limited selection of your very best work. Quality over quantity, always. We help you think through the structure.",
  },
  {
    q: "Do I need to list prices on my portfolio site?",
    a: "It depends on your business model. Photographers who list starting prices tend to get more qualified inquiries from clients who already know the budget range. We can build it either way.",
  },
  {
    q: "What's the best way to get found by people looking for photographers or videographers?",
    a: "Local SEO and niche-specific content. 'Wedding photographer in [city],' 'commercial photographer near me' — these are high-value searches we optimize for.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function CreativePortfolioPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio Websites for Photographers and Creatives — Amped Web Studios</title>
        <meta
          name="description"
          content="We build portfolio websites for photographers, videographers, and creative professionals — beautiful, fast, and designed to win clients."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Creative & Portfolio"
          headline="Portfolio Websites for Photographers and Creatives"
          highlightedPhrase="Photographers and Creatives"
          subheading="Your work is the product. Your website should present it with the same level of craft — clean, fast, and designed to make the right clients reach out."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "Fast", label: "Image Loading" },
            { value: "More", label: "Qualified Inquiries" },
            { value: "0", label: "Cluttered Layouts" },
          ]}
          painPoints={[
            "Portfolio loads slowly and kills the first impression",
            "Too many images — quantity drowning quality",
            "No clear or easy way for clients to reach out",
            "Missing in local creative searches on Google",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Your Portfolio Is Your Pitch — It Needs to Land</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When a potential client lands on your portfolio, they're making a quick decision: does this person's work match what I need, and do they seem professional enough to hire? A well-built site answers both in seconds.
              </p>
              <p>
                The biggest mistakes creative professionals make online: too many images (quantity over quality), a slow-loading site (kills the experience), and no clear way to inquire or book. We fix all three.
              </p>
              <p>
                We've built portfolio sites for photographers and creatives who have seen their inquiry rate significantly increase just from having a professional, fast, well-structured online presence.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Creative Professionals</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready for a Portfolio Site That Wins Clients?</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your work and what you're looking to grow. We'll design something that fits.
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
