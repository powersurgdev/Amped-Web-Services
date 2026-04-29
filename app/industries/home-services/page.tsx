import type { Metadata } from 'next';
import { Phone, MapPin, Star, Search, BarChart3, FileText } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';
import { absoluteUrl, serviceSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Websites for Home Service Companies That Generate Calls — Amped Web Studios',
  description: 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.',
  alternates: { canonical: absoluteUrl('/industries/home-services') },
  openGraph: {
    title: 'Websites for Home Service Companies That Generate Calls — Amped Web Studios',
    description: 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.',
    url: absoluteUrl('/industries/home-services'),
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const schema = serviceSchema({
  name: 'Web Design for Home Service Companies',
  description: 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.',
  url: '/industries/home-services',
  serviceType: 'Web Design',
});

const data: IndustryPageData = {
  pageTitle: 'Websites for Home Service Companies That Generate Calls — Amped Web Studios',
  metaDescription: 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.',
  heroProps: {
    industry: 'Home Services',
    headline: 'Websites for Home Service Companies That Generate Calls',
    highlightedPhrase: 'Generate Calls',
    subheading: 'HVAC, plumbing, electrical, gutters, tree service, landscaping — we build sites specifically for home service businesses that need their phone ringing.',
    primaryCTA: 'Start Your Project',
    secondaryCTA: 'See Our Work',
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: 'Mobile', label: 'First Design' },
      { value: '#1', label: 'Goal: Local Map Pack' },
    ],
    painPoints: [
      "Customers can't find your number on mobile",
      'You serve multiple towns but only rank in one',
      'Strong reviews are buried and hard to find',
      'No easy way for customers to request estimates',
    ],
  },
  whySection: {
    headline: 'Why Home Service Websites Need to Be Different',
    paragraphs: [
      'Most home service customers are searching from their phone in the middle of a problem — a broken furnace in January, a burst pipe at midnight, gutters overflowing before a storm. They have a 90-second attention span and zero tolerance for a confusing website.',
      "That means your site has one job: make it obvious you serve their area, show them you're credible, and give them a way to call or request help in two taps. Generic templates built for retail or restaurants fail at all three.",
      "We've built sites for HVAC companies, plumbers, electricians, and landscapers specifically around that search behavior — and the results show up in the number of calls the phones actually ring.",
    ],
    challenges: [
      { icon: <Phone className="w-5 h-5 text-primary" />, title: 'Buried Phone Numbers', body: "On mobile, if your number isn't a tap-to-call link above the fold, customers leave. Most generic templates bury it in a footer." },
      { icon: <MapPin className="w-5 h-5 text-primary" />, title: 'Single-City Visibility', body: 'Serving 8 towns but only ranking in one is a revenue problem. Your site needs a dedicated strategy for every area you cover.' },
      { icon: <Star className="w-5 h-5 text-primary" />, title: 'Invisible Reviews', body: "You may have 80 five-star reviews on Google — but if they're not surfaced on your site, new visitors don't know they exist." },
    ],
  },
  features: [
    { icon: <Phone className="w-5 h-5 text-primary" />, title: 'One-Tap Mobile Calling', description: 'Every page surfaces your phone number as a tap-to-call link where mobile users look first. Customers can reach you in two taps before the impulse to call passes.' },
    { icon: <MapPin className="w-5 h-5 text-primary" />, title: 'Service Area Landing Pages', description: 'Dedicated pages for every city or zip code you cover. Each one targets the exact local search terms your potential customers type, multiplying your chances of showing up.' },
    { icon: <Star className="w-5 h-5 text-primary" />, title: 'Google Review Integration', description: "Your reviews are surfaced directly on your site, building social proof at the moment visitors are deciding whether to trust you — before they ever read them on Google." },
    { icon: <BarChart3 className="w-5 h-5 text-primary" />, title: 'Before / After Photo Galleries', description: "Showing the quality of your work builds confidence in a way descriptions can't. Organized galleries for each service type demonstrate expertise before the first call." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Estimate Request Forms', description: 'Short, low-friction forms that let customers describe their problem and request a quote. Designed to have the highest possible completion rate.' },
    { icon: <Search className="w-5 h-5 text-primary" />, title: 'Local SEO Foundation', description: 'Every page is built with the technical and content structure that helps Google understand your business, service area, and specialties — so you show up in map pack results.' },
  ],
  faqs: [
    { q: 'Do I need a separate page for each service I offer?', a: 'Yes — and it pays off. A dedicated page for HVAC repair, one for HVAC installation, and one for maintenance means you rank for each of those searches separately. More pages = more ways to be found.' },
    { q: 'What if I serve 10 different cities?', a: 'We can build local landing pages for every city in your service area. Each one targets local search terms and helps you rank across your full coverage zone.' },
    { q: 'How do I get more Google reviews through my website?', a: 'We build automated review request flows into your site — so after a job is done, customers get a prompt that makes leaving a review as easy as one tap.' },
    { q: "I already have a website that's getting some traffic. Should I rebuild?", a: "It depends. If your site isn't generating calls relative to its traffic, the issue is usually design or page structure. We can review it and tell you exactly what to fix." },
  ],
  ctaHeadline: "Let's Build a Site That Fills Your Schedule",
  ctaBody: "Tell us about your business and service area. We'll put together a plan that fits your goals and budget.",
};

export default function HomeServicesPage() {
  return (
    <>
      <JsonLd data={schema} />
      <IndustryPageTemplate data={data} />
    </>
  );
}
