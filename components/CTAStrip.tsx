'use client';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { trackCtaClick } from "@/lib/analytics";

interface CTAStripProps {
  onNavigate?: (section: string) => void;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
}

export default function CTAStrip({ onNavigate = scrollToSection }: CTAStripProps) {
  return (
    <section className="py-14 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-testid="text-cta-headline">
          Let's Build Something That Actually Works for Your Business
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground">
          Tell us about your project and we'll come back with a custom plan and transparent pricing — no fluff, no pressure.
        </p>
        <Button
          size="lg"
          onClick={() => {
            trackCtaClick({ location: 'cta_strip', label: 'Start Your Project', destination: '#contact' });
            onNavigate("contact");
          }}
          data-testid="button-cta-quote"
          className="text-base w-full sm:w-auto"
        >
          Start Your Project
        </Button>
      </motion.div>
    </section>
  );
}
