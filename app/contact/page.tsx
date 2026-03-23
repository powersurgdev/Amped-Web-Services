import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us — Amped Web Studios',
  description: "Ready to get started? Tell us about your project and we'll come back with a custom plan and transparent pricing — no pressure.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us — Amped Web Studios',
    description: "Ready to get started? Tell us about your project and we'll come back with a custom plan and transparent pricing — no pressure.",
    url: '/contact',
    images: [{ url: '/og-images/contact.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/contact.png'] },
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-4 sm:pt-40 sm:pb-6 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Let's Talk</h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll follow up within one business day. No sales pitches — just a real conversation about your project.
          </p>
        </div>
      </section>
      <Contact />
    </main>
  );
}
