import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio — Amped Web Studios</title>
        <meta
          name="description"
          content="See the websites we've built for local businesses — tree service, gutters, electrical, and more. Real work, real results."
        />
      </Helmet>

      <Header />

      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <h1 className="text-4xl sm:text-5xl font-bold">Our Work</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every site we build is designed from scratch for one goal: make your phone ring and your inbox full. Here's a look at what we've launched for real local businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link href="/contact">
                <Button size="lg">Start Your Project</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">See Our Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio grid — reuses the existing component */}
        <Portfolio />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Build Something Like This for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project. We'll come back with a custom plan and clear pricing — no fluff.
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
