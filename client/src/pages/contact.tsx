import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us — Amped Web Studios</title>
        <meta
          name="description"
          content="Ready to get started? Tell us about your project and we'll come back with a custom plan and transparent pricing — no pressure."
        />
      </Helmet>

      <Header />

      <main>
        {/* Page intro */}
        <section className="pt-32 pb-4 sm:pt-40 sm:pb-6 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Let's Talk</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll follow up within one business day. No sales pitches — just a real conversation about your project.
            </p>
          </div>
        </section>

        {/* Contact form — reuses existing component */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
