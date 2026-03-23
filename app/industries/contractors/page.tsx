import type { Metadata } from 'next';
import { Camera, FileText, Shield, Search, Star, HardHat } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Web Design for Contractors and Trade Businesses — Amped Web Studios',
  description: 'We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs.',
  alternates: { canonical: '/industries/contractors' },
  openGraph: {
    title: 'Web Design for Contractors and Trade Businesses — Amped Web Studios',
    description: 'We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs.',
    url: '/industries/contractors',
    images: [{ url: '/og-images/industries-contractors.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries-contractors.png'] },
};

const data: IndustryPageData = {
  pageTitle: 'Web Design for Contractors and Trade Businesses — Amped Web Studios',
  metaDescription: 'We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs.',
  heroProps: {
    industry: 'Contractors',
    headline: 'Web Design for Contractors and Trade Businesses',
    highlightedPhrase: 'Trade Businesses',
    subheading: 'Your work speaks for itself — but only if homeowners can find you and trust you before they reach out. We build contractor sites that generate estimate requests.',
    primaryCTA: 'Get a Free Quote',
    secondaryCTA: 'See Our Work',
    stats: [
      { value: 'Before', label: '/ After Galleries' },
      { value: 'More', label: 'Estimate Requests' },
      { value: 'Trust', label: 'Built Before First Call' },
    ],
    painPoints: [
      "Homeowners can't see your past project quality online",
      "Credentials and insurance aren't displayed prominently",
      'No dedicated pages for each service you offer',
      'Competitors with worse work win on web presence',
    ],
  },
  whySection: {
    headline: 'Homeowners Research Before They Call',
    paragraphs: [
      "When a homeowner is looking to hire a contractor, they're making a significant financial decision — and they're doing their homework. They'll check your website, look at your photos, read your reviews, and verify your credentials before they ever pick up the phone.",
      "If your website doesn't hold up to that scrutiny — slow, outdated, no photos, no clear services — they'll find someone who has a better-looking online presence, even if your actual work is better.",
      "We build sites that win that comparison. Clear services, impressive project photos, prominent credentials, and easy-to-find contact options — everything a hesitant homeowner needs to feel confident choosing you.",
    ],
    challenges: [
      { icon: <Camera className="w-5 h-5 text-primary" />, title: 'No Proof of Work', body: "Homeowners want to see what you've done before hiring you. Without a strong photo gallery, your quality is invisible no matter how good it actually is." },
      { icon: <Shield className="w-5 h-5 text-primary" />, title: 'Hidden Credentials', body: 'License numbers, insurance, and certifications build trust at exactly the moment homeowners are most skeptical. Burying them kills conversions.' },
      { icon: <HardHat className="w-5 h-5 text-primary" />, title: 'Missing Service Pages', body: "One generic 'services' page can't rank for bathroom remodeling, kitchen renovation, and deck building simultaneously. You need a page for each." },
    ],
  },
  features: [
    { icon: <Camera className="w-5 h-5 text-primary" />, title: 'Project Photo Galleries', description: "Before/after galleries organized by service type give homeowners concrete proof of your craftsmanship — and keep them on your site long enough to decide." },
    { icon: <HardHat className="w-5 h-5 text-primary" />, title: 'Per-Service Pages', description: 'A dedicated page for each trade you offer — remodeling, painting, flooring, roofing — means you can rank in local search for every service separately.' },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Estimate Request Forms', description: 'Simple, low-friction forms that ask the right questions. Designed to generate more submissions by removing every unnecessary field and friction point.' },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: 'Credentials Front and Center', description: 'License numbers, insurance status, and certifications displayed prominently near your CTAs — building trust at the exact moment it matters most.' },
    { icon: <Search className="w-5 h-5 text-primary" />, title: 'Local SEO Targeting', description: 'Every service page is optimized for the searches homeowners in your area actually type, so you show up when they\'re actively looking to hire.' },
    { icon: <Star className="w-5 h-5 text-primary" />, title: 'Review Integration', description: 'Your best Google reviews surface directly on your site, reinforcing your reputation without requiring visitors to leave the page to find them.' },
  ],
  faqs: [
    { q: 'I do multiple types of work. Do I need a page for each?', a: 'Yes — and it\'s worth it. A separate page for bathroom remodeling, kitchen renovation, and basement finishing each gives you another way to show up in search. More specific pages = more qualified leads.' },
    { q: "How do I show off my past work if I don't have professional photos?", a: "Phone photos are fine to start with. We'll present them in a way that looks polished and professional. As you get better photos over time, we can update the gallery." },
    { q: "What's the best way to generate estimate requests online?", a: 'A simple, short form with the right fields. Ask for project type, timeline, and contact info — nothing more. We build these to have the lowest friction possible so you get more submissions.' },
    { q: 'Homeowners want to see credentials. How do I show them?', a: 'We prominently feature your license numbers, insurance status, and any certifications throughout your site — especially near CTAs where trust matters most.' },
  ],
  ctaHeadline: "Let's Build a Site That Wins You More Jobs",
  ctaBody: "Tell us about your trade and what you're looking to grow. We'll put together a custom plan.",
};

export default function ContractorsPage() {
  return <IndustryPageTemplate data={data} />;
}
