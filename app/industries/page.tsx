import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Wrench, HardHat, UtensilsCrossed, Heart, Home, Scissors,
  Car, Camera, Scale, Dumbbell, ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve — Amped Web Studios',
  description: 'We build websites for local businesses across dozens of industries. Find your industry and see what we can do for you.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries We Serve — Amped Web Studios',
    description: 'We build websites for local businesses across dozens of industries. Find your industry and see what we can do for you.',
    url: '/industries',
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const industries = [
  { icon: Wrench, title: 'Home Services', description: 'HVAC, plumbing, electrical, gutters, tree service, and landscaping companies.', href: '/industries/home-services' },
  { icon: HardHat, title: 'Contractors & Trades', description: 'Remodelers, painters, flooring companies, and general contractors.', href: '/industries/contractors' },
  { icon: UtensilsCrossed, title: 'Restaurants & Food Service', description: 'Restaurants, cafes, food trucks, and catering businesses.', href: '/industries/restaurants' },
  { icon: Heart, title: 'Healthcare & Wellness', description: 'Dentists, chiropractors, therapists, med spas, and wellness practitioners.', href: '/industries/healthcare' },
  { icon: Home, title: 'Real Estate', description: 'Real estate agents, brokers, and property management companies.', href: '/industries/real-estate' },
  { icon: Scissors, title: 'Beauty & Personal Care', description: 'Salons, barbershops, spas, and personal care businesses.', href: '/industries/beauty-wellness' },
  { icon: Car, title: 'Auto & Transportation', description: 'Auto mechanics, detailing shops, car washes, and towing companies.', href: '/industries/auto-services' },
  { icon: Camera, title: 'Creative Professionals', description: 'Photographers, videographers, artists, and creative freelancers.', href: '/industries/creative-portfolio' },
  { icon: Scale, title: 'Legal & Professional Services', description: 'Law firms, CPAs, consultants, and other professional services.', href: '/industries/legal-professional' },
  { icon: Dumbbell, title: 'Fitness & Sports', description: 'Gyms, personal trainers, yoga studios, and sports facilities.', href: '/industries/fitness-sports' },
];

export default function IndustriesHub() {
  return (
    <main>
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold">Built for Your Industry</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Every industry has different customers, different trust signals, and different reasons people call or walk away. We build sites that speak to your specific customer — not a generic business audience.
          </p>
          <Link href="/contact"><Button size="lg">Get a Free Quote</Button></Link>
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link key={industry.href} href={industry.href} className="block h-full">
                <Card className="h-full hover-elevate transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">{industry.title}</h2>
                    <p className="text-muted-foreground leading-relaxed flex-1">{industry.description}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      See What We Build <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Don't See Your Industry?</h2>
          <p className="text-lg text-muted-foreground">
            We work with all kinds of local businesses. If you're not on the list, reach out — we've probably built something like it before.
          </p>
          <Link href="/contact"><Button size="lg" className="text-base">Let's Talk</Button></Link>
        </div>
      </section>
    </main>
  );
}
