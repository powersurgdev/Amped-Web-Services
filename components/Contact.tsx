'use client';
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" data-testid="text-contact-title">
            Get Your Free Concept
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us a little about your business and we'll design your homepage concept — completely free, no commitment. You only pay if you love it.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
}
