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
  "Mobile-friendly menu that's easy to browse and always up to date",
  "Online reservation and booking integration",
  "Hours, location, and Google Maps embedded prominently",
  "Food photography gallery that makes the food look as good as it tastes",
  "Online ordering integration (if applicable)",
  "Social media integration and event promotion sections",
];

const faqs = [
  {
    q: "How do I keep my menu updated on the site?",
    a: "We build your menu so it's easy to update — you can email us changes and we'll handle it, or we can give you edit access to the menu section specifically.",
  },
  {
    q: "Can you integrate with OpenTable or Resy?",
    a: "Yes. If you use a reservation system, we'll embed it directly into your site so visitors can book without leaving the page.",
  },
  {
    q: "What if I don't have professional food photos?",
    a: "Great phone photos in good lighting work fine. We'll lay them out in a way that looks intentional and appetizing. As you get better photos, we can always update the gallery.",
  },
  {
    q: "Do I need my own website if I'm already on Yelp and Google?",
    a: "Yes. Third-party platforms control your listing — they can remove it, change policies, or show your competitors next to you. Your own website is the one place online you fully control.",
  },
];

function navigateSection(section: string) {
  if (section === "contact") {
    window.location.href = "/contact";
  } else {
    window.location.href = `/#${section}`;
  }
}

export default function RestaurantsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Restaurant Website Design That Fills Your Tables — Amped Web Studios</title>
        <meta
          name="description"
          content="We build websites for restaurants and food businesses with online menus, reservations, and a design that makes people hungry before they walk in."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <IndustryPageHero
          industry="Restaurants"
          headline="Restaurant Website Design That Fills Your Tables"
          highlightedPhrase="Fills Your Tables"
          subheading="People decide where to eat based on what they see online. We make sure your restaurant's website looks as good as your food tastes."
          primaryCTA="Get a Free Quote"
          onPrimaryClick={() => { window.location.href = "/contact"; }}
          stats={[
            { value: "Online", label: "Menu Always Current" },
            { value: "1-tap", label: "Reservation Booking" },
            { value: "24/7", label: "Customers Find You" },
          ]}
          painPoints={[
            "Menu is outdated or missing from your site",
            "Reservation booking requires a phone call",
            "No photo gallery showing what you actually serve",
            "Yelp controls your listing — your own site doesn't",
          ]}
        />

        {/* Why it matters */}
        <section className="py-14 sm:py-20 bg-card/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-3xl font-bold">The First Bite Is with the Eyes — Online</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most people look up a restaurant online before they decide to go. If your website is hard to navigate, doesn't show the menu clearly, or doesn't have photos that make the food look appealing — they'll pick somewhere else.
              </p>
              <p>
                A great restaurant website does a few things really well: it shows the menu, it gives hours and location instantly, it makes reservations easy, and it makes the food look so good that people are already excited before they arrive.
              </p>
              <p>
                We build sites for restaurants that do all of that — without the bloat of expensive platforms or tools you'll never use.
              </p>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl font-bold text-center">What We Build for Restaurants</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Ready for a Site That Brings Diners Through the Door?</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your restaurant. We'll put together a plan and pricing that makes sense.
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
