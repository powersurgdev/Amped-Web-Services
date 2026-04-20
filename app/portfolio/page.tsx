import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Portfolio from '@/components/Portfolio';
import TrackedCtaLink from '@/components/TrackedCtaLink';

export const metadata: Metadata = {
  title: 'Portfolio — Amped Web Studios',
  description: "See the websites we've built for local businesses — tree service, gutters, electrical, and more. Real work, real results.",
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio — Amped Web Studios',
    description: "See the websites we've built for local businesses — tree service, gutters, electrical, and more. Real work, real results.",
    url: '/portfolio',
    images: [{ url: '/og-images/portfolio.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/portfolio.png'] },
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold">Our Work</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every site we build is designed from scratch for one goal: make your phone ring and your inbox full. Here's a look at what we've launched for real local businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <TrackedCtaLink href="/contact" location="portfolio_page_top" label="Start Your Project">Start Your Project</TrackedCtaLink>
            <Button asChild size="lg" variant="outline"><Link href="/services">See Our Services</Link></Button>
          </div>
        </div>
      </section>
      <Portfolio />
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Something Like This for Your Business?</h2>
          <p className="text-lg text-muted-foreground">Tell us about your project. We'll come back with a custom plan and clear pricing — no fluff.</p>
          <TrackedCtaLink href="/contact" location="portfolio_page_bottom" label="Start Your Project" className="text-base">Start Your Project</TrackedCtaLink>
        </div>
      </section>
    </main>
  );
}
