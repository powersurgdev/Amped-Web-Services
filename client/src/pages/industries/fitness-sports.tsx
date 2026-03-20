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
  "Membership and class offerings presented clearly with pricing",
  "Online class schedule and booking integration",
  "Trainer and coach bios that showcase expertise and personality",
  "Transformation stories and member results (where permitted)",
  "Trial offer and free class lead capture forms",
  "Local SEO to rank for gym and fitness searches in your area",
];

const faqs = [
  {
    q: "How do I compete with big-box gyms online?",
    a: "Local SEO and authenticity. A well-optimized independent gym page with real member reviews and a strong community feel consistently beats generic chain listings in local searches.",
  },
  {
    q: "Can people sign up for a trial online?",
    a: "Yes. We build lead capture forms tied to free trial or introductory offer CTAs — one of the most effective ways to get new members through the door.",
  },
  {
    q: "Should I list my membership prices on the website?",
    a: "For most fitness businesses, yes. Hiding pricing creates friction. Being transparent builds trust and pre-qualifies leads so you spend less time on conversations that go nowhere.",
  },
  {
    q: "What type of content works best for fitness websites?",
    a: "Real transformation stories, trainer spotlights, class descriptions that convey energy and community, and a clear schedule. We help you structure all of it for maximum impact.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function FitnessSportsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Fitness & Sports"
          headline="Gym and Fitness Websites That Convert Visitors to Members"
          highlightedPhrase="Convert Visitors to Members"
          subheading="People are ready to change. Your website just needs to give them the right push. We build fitness sites that turn curiosity into commitments."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "Trial", label: "Sign-Up Lead Forms" },
            { value: "Class", label: "Schedule Integration" },
            { value: "More", label: "Members from Search" },
          ]}
          painPoints={[
            "Trial offers are buried — visitors leave without signing up",
            "Class schedule isn't online or easy to navigate",
            "Big-box gym chains outrank you in local search",
            "Prices are hidden, causing unnecessary friction",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">The First Workout Is the Hardest — Help People Take the Step</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Someone thinking about joining a gym or starting personal training is often nervous, unsure, and easy to talk themselves out of it. Your website has to overcome that hesitation — with real results, clear expectations, and a warm, inviting tone.
              </p>
              <p>
                A cold, generic, hard-to-navigate fitness site loses people before they ever walk in. A site that shows your community, your coaches, your results, and makes signing up easy — that converts.
              </p>
              <p>
                We build fitness websites that capture the energy of what you do and make it as easy as possible for the right people to say yes.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Fitness Businesses</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build a Site That Grows Your Membership</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your gym or studio. We'll put together a plan that fits your goals.
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
