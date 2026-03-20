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
  "Online booking integration so clients can schedule 24/7",
  "Service menu with pricing, descriptions, and photo examples",
  "Staff/stylist profiles that let clients choose their provider",
  "Gallery showcasing your work — cuts, color, treatments",
  "Gift card promotion and special offer sections",
  "Google review integration to show your reputation",
];

const faqs = [
  {
    q: "Can clients book appointments directly through my website?",
    a: "Yes. We integrate with booking platforms like Vagaro, Booksy, StyleSeat, or any other you use — or build a simple request form if you prefer to confirm manually.",
  },
  {
    q: "How important is having a gallery on a salon website?",
    a: "Very. For beauty and hair services, clients want to see your actual work before they book. A good gallery is often the difference between a new client and a lost one.",
  },
  {
    q: "What if I have multiple stylists with different specialties?",
    a: "We build individual stylist profiles so clients can find the right person for their needs and book with them specifically.",
  },
  {
    q: "Do I need to update my site regularly?",
    a: "The essentials (services, pricing, hours) should stay current. Beyond that, your care plan includes content updates so you can add new work to the gallery, promote seasonal specials, etc.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function BeautyWellnessPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Salon and Spa Websites That Book More Appointments — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Beauty & Wellness"
          headline="Salon and Spa Websites That Book More Appointments"
          highlightedPhrase="Book More Appointments"
          subheading="New clients decide where to book based on what they see online. We build beauty and wellness sites that look as polished as your work — and make booking easy."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "24/7", label: "Online Booking" },
            { value: "Gallery", label: "Shows Your Best Work" },
            { value: "Less", label: "No-Shows & Friction" },
          ]}
          painPoints={[
            "Clients can only book by calling during business hours",
            "No gallery showing your actual work and style",
            "Stylists' specialties aren't visible before booking",
            "New clients book competitors who are easier to reach",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">Your Work Is the Product — Make Sure It Shows</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When someone is looking for a new salon, they want to see examples of your work before they commit. A website with a strong gallery and clear services is what turns a search into a booked appointment.
              </p>
              <p>
                Beyond the visual, convenience matters. If booking requires a phone call during business hours, you'll lose clients to a competitor who makes it easy to book at midnight from their couch. Online booking integration solves that.
              </p>
              <p>
                We build sites for salons and spas that look amazing, showcase your work effectively, and make the booking process as easy as possible.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Salons and Spas</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Let's Build a Site That Keeps Your Chair Full</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your salon, spa, or studio. We'll put together a plan that fits your brand and budget.
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
