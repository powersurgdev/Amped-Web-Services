import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import IndustryPageHero from "@/components/IndustryPageHero";

const features = [
  "Click-to-call buttons on every page — optimized for mobile",
  "Service area pages that rank in local search across your coverage zone",
  "Before/after photo galleries that show your work quality",
  "Online estimate request forms that make it easy to start the conversation",
  "Google review integration and reputation display",
  "Clear service breakdowns so customers know exactly what to expect",
];

const painPoints = [
  { icon: Phone, text: "Customers can't easily find your phone number on mobile" },
  { icon: MapPin, text: "You serve multiple towns but only show up in one" },
  { icon: Star, text: "Your reviews are strong but hard to find on your site" },
];

const faqs = [
  {
    q: "Do I need a separate page for each service I offer?",
    a: "Yes — and it pays off. A dedicated page for HVAC repair, one for HVAC installation, and one for maintenance means you rank for each of those searches separately. More pages = more ways to be found.",
  },
  {
    q: "What if I serve 10 different cities?",
    a: "We can build local landing pages for every city in your service area. Each one targets local search terms and helps you rank across your full coverage zone.",
  },
  {
    q: "How do I get more Google reviews through my website?",
    a: "We build automated review request flows into your site — so after a job is done, customers get a prompt that makes leaving a review as easy as one tap.",
  },
  {
    q: "I already have a website that's getting some traffic. Should I rebuild?",
    a: "It depends. If your site isn't generating calls relative to its traffic, the issue is usually design or page structure. We can review it and tell you exactly what to fix.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function HomeServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Websites for Home Service Companies That Generate Calls — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Home Services"
          headline="Websites for Home Service Companies That Generate Calls"
          highlightedPhrase="Generate Calls"
          subheading="HVAC, plumbing, electrical, gutters, tree service, landscaping — we build sites specifically for home service businesses that need their phone ringing."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          secondaryCTA="See Our Work"
          onSecondaryClick={() => { window.location.href = "/portfolio"; }}
          stats={[
            { value: "50+", label: "Projects Delivered" },
            { value: "Mobile", label: "First Design" },
            { value: "#1", label: "Goal: Local Map Pack" },
          ]}
          painPoints={[
            "Customers can't find your number on mobile",
            "You serve multiple towns but only rank in one",
            "Strong reviews are buried and hard to find",
            "No easy way for customers to request estimates",
          ]}
        />

        {/* Pain points */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Home Service Websites Need to Be Different</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Most home service customers are searching from their phone in the middle of a problem. They need to call you fast. Your website has to make that happen in seconds — or they're calling someone else.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {painPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-border bg-background">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Home Service Businesses</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">
              Let's Build a Site That Fills Your Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your business and service area. We'll put together a plan that fits your goals and budget.
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
