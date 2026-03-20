import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTAStripProps {
  onNavigate: (section: string) => void;
}

export default function CTAStrip({ onNavigate }: CTAStripProps) {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
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
          onClick={() => onNavigate("contact")}
          data-testid="button-cta-quote"
          className="text-base"
        >
          Get a Free Quote
        </Button>
      </motion.div>
    </section>
  );
}
