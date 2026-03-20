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
  "Practice area pages that target specific legal or professional service searches",
  "Attorney/consultant bios that establish credentials and build trust",
  "Case results and client testimonials (where ethically permitted)",
  "Consultation request forms with clear intake questions",
  "Clear fee structure or 'how we work' section to reduce inquiry friction",
  "Local SEO to rank for practice-specific searches in your market",
];

const faqs = [
  {
    q: "Are there ethics rules I need to follow for my attorney website?",
    a: "Yes, and they vary by state. We stay current on bar association advertising rules and will flag any content that could raise compliance concerns. Client reviews, results claims, and testimonials are all handled carefully.",
  },
  {
    q: "Should I list my fees on my website?",
    a: "For flat-fee services (wills, incorporations, tax prep), listing fees or ranges increases qualified inquiries. For hourly or contingency work, a 'free consultation' model often works better.",
  },
  {
    q: "What makes a law firm website trustworthy to potential clients?",
    a: "Clear credentials, practice area expertise, a professional design, and visible social proof (reviews, case results). People hiring a lawyer are making a high-stakes decision — they need to feel confident.",
  },
  {
    q: "How important is local SEO for a law firm?",
    a: "Extremely. Most legal searches are local — 'divorce attorney in [city],' 'DUI lawyer near me.' If you're not ranking for those, you're invisible to the most motivated prospects.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function LegalProfessionalPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Professional Service Websites That Establish Authority — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Legal & Professional"
          headline="Professional Service Websites That Establish Authority"
          highlightedPhrase="Establish Authority"
          subheading="When clients are searching for a lawyer, CPA, or consultant, they're looking for someone they can trust. We build sites that establish that trust immediately."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "More", label: "Consultation Requests" },
            { value: "Local", label: "SEO Dominance" },
            { value: "High", label: "Trust Signals Built In" },
          ]}
          painPoints={[
            "Generic site doesn't communicate your specific expertise",
            "Practice area pages missing — can't rank for key terms",
            "No visible social proof to pre-qualify your reputation",
            "Consultation form is hard to find or friction-heavy",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">High-Stakes Clients Do Their Research</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Someone looking for a divorce attorney, a business CPA, or a management consultant is making a serious decision. They're going to spend real time evaluating their options — and your website is a major part of that evaluation.
              </p>
              <p>
                A generic, outdated, or hard-to-navigate site signals that you may be equally disorganized in your practice. A clean, authoritative, well-organized site says something very different.
              </p>
              <p>
                We build professional service websites that communicate expertise, clarity, and trustworthiness — the three things that matter most when the stakes are high.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Professional Service Firms</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build a Site That Wins More Consultations</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your practice and what you're looking to grow. We'll put together a plan.
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
