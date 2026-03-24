import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Code, Server, Search, TrendingUp, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Amped Web Studios',
  description: 'Custom websites, local SEO, Google presence setup, and more — see everything Amped Web Studios offers for small businesses.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Amped Web Studios',
    description: 'Custom websites, local SEO, Google presence setup, and more — see everything Amped Web Studios offers for small businesses.',
    url: '/services',
    images: [{ url: '/og-images/services.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/services.png'] },
};

const services = [
  { icon: Palette, title: 'Custom Website Design', description: 'No templates, no shortcuts. Every site is designed from scratch around your brand, your audience, and your goals.', href: '/services/web-design' },
  { icon: Code, title: 'Development & Launch', description: 'Hand-coded, fast-loading, and built to perform. We handle everything from domain setup to go-live.', href: '/services/web-development' },
  { icon: Server, title: 'Hosting & Care Plans', description: 'We manage your hosting, updates, backups, and security — so your site is always live, fast, and protected.', href: '/services/hosting-care' },
  { icon: Search, title: 'SEO & Local Search', description: 'We optimize your site to rank in local search results, so nearby customers find you before they find your competition.', href: '/services/seo-local-search' },
  { icon: TrendingUp, title: 'Website Optimization & Refresh', description: 'Got a site that\'s falling behind? We redesign, rebuild, and optimize for speed, conversions, and modern UX.', href: '/services/website-refresh' },
];

export default function ServicesHub() {
  return (
    <main>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold">Everything You Need to Compete Online</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">We handle the web so you can run the business. From the first design concept to ongoing growth — here's what we do.</p>
          <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="block h-full">
                <Card className="h-full hover-elevate transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-muted-foreground">Just tell us where you're at and what you're trying to achieve. We'll figure out the right fit together.</p>
          <Button asChild size="lg" className="text-base"><Link href="/contact">Talk to Us</Link></Button>
        </div>
      </section>
    </main>
  );
}
