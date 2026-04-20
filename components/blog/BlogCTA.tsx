import ContactForm from "@/components/ContactForm";

export default function BlogCTA() {
  return (
    <section className="py-14 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Build Something That Actually Works for Your Business
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Tell us about your project and we'll come back with a custom plan and
            transparent pricing — no fluff, no pressure.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
