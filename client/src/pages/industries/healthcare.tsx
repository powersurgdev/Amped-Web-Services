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
  "Online appointment request forms that integrate with your scheduling system",
  "Provider bios and credentials that build patient confidence",
  "Service and treatment pages with clear, patient-friendly explanations",
  "Insurance information and accepted plans displayed clearly",
  "HIPAA-compliant contact forms (no sensitive info stored insecurely)",
  "Patient testimonials and Google review integration",
];

const faqs = [
  {
    q: "Do you build HIPAA-compliant websites?",
    a: "Our contact forms are designed to collect only the minimum necessary information — name, contact, and appointment request type. We don't store sensitive health information through web forms.",
  },
  {
    q: "Can patients book appointments directly through the site?",
    a: "Yes. We can integrate with most scheduling platforms (Calendly, Jane App, NexHealth, etc.) or build a simple request form that routes to your team.",
  },
  {
    q: "How do I explain complex treatments without overwhelming patients?",
    a: "We write service pages in plain, reassuring language — focused on what the patient will experience and feel, not technical jargon. We can also link to educational resources when appropriate.",
  },
  {
    q: "Should I display pricing for my services?",
    a: "It depends on your practice type. For elective services (med spas, cosmetic dentistry), displaying starting prices often increases qualified inquiries. For insurance-based practices, we typically recommend a 'call for insurance info' approach.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function HealthcarePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Healthcare Websites That Build Patient Trust — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Healthcare"
          headline="Healthcare Websites That Build Patient Trust"
          highlightedPhrase="Build Patient Trust"
          subheading="Patients are trusting you with their health. Your website needs to reflect that level of care — professional, clear, and easy to navigate when someone is looking for help."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "HIPAA", label: "Compliant Forms" },
            { value: "Online", label: "Appointment Booking" },
            { value: "Trust", label: "Built Before First Visit" },
          ]}
          painPoints={[
            "New patients can't easily book an appointment online",
            "Provider credentials aren't prominently displayed",
            "Services are explained in confusing medical jargon",
            "Insurance information is hard or impossible to find",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Patients Choose Their Provider Online First</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Before a new patient calls your office, they've already looked at your website. They're evaluating whether you seem trustworthy, whether you offer what they need, and whether booking an appointment feels easy.
              </p>
              <p>
                A healthcare website that's outdated, hard to navigate, or doesn't clearly explain your services creates doubt — even for providers with excellent clinical reputations. First impressions matter more than ever in a market where patients have options.
              </p>
              <p>
                We build healthcare sites that communicate professionalism and warmth — the combination that wins new patient confidence.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Healthcare Practices</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build a Site That Fills Your Appointment Book</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your practice. We'll put together a custom plan that fits your specialty and patient base.
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
