import type { Metadata } from 'next';
import { UserCheck, FileText, Home, Map, Star, Target } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Real Estate Websites That Capture More Leads — Amped Web Studios',
  description: 'We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition.',
  alternates: { canonical: '/industries/real-estate' },
  openGraph: {
    title: 'Real Estate Websites That Capture More Leads — Amped Web Studios',
    description: 'We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition.',
    url: '/industries/real-estate',
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const data: IndustryPageData = {
  pageTitle: 'Real Estate Websites That Capture More Leads — Amped Web Studios',
  metaDescription: 'We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition.',
  heroProps: {
    industry: 'Real Estate',
    headline: 'Real Estate Websites That Capture More Leads',
    highlightedPhrase: 'Capture More Leads',
    subheading: 'In real estate, your personal brand is everything. We build agent websites that make buyers and sellers choose you over every other agent in your market.',
    primaryCTA: 'Start Your Project',
    stats: [
      { value: 'Personal', label: 'Brand That Stands Out' },
      { value: 'Buyer', label: '& Seller Lead Forms' },
      { value: 'Local', label: 'SEO for Your Market' },
    ],
    painPoints: [
      'Brokerage site represents the firm, not you personally',
      'No dedicated way to capture buyer or seller leads',
      "Weak bio doesn't convert curious browsers to clients",
      'Competitors with stronger web presence win the listing',
    ],
  },
  whySection: {
    headline: 'Buyers and Sellers Research Agents Online Before They Call',
    paragraphs: [
      "When someone is ready to buy or sell, they don't just go with the first agent they find — they check out your website, read your reviews, look at your past sales, and decide whether they trust you before they ever reach out. That evaluation takes about 3 minutes.",
      "A weak or generic agent website loses that comparison every time. Your brokerage site represents the whole firm — it can't do the job of building your personal brand, showcasing your results, or capturing leads specifically for you.",
      "A strong personal brand site — with a compelling bio, social proof, neighborhood expertise, and clear CTAs — wins the comparison and converts curious browsers into actual clients.",
    ],
    challenges: [
      { icon: <UserCheck className="w-5 h-5 text-primary" />, title: 'No Personal Brand', body: 'Your brokerage page puts you alongside every other agent at the firm. Buyers and sellers want to know about you specifically — not the company.' },
      { icon: <FileText className="w-5 h-5 text-primary" />, title: 'No Lead Capture', body: "Without dedicated forms for home valuations, buyer consultations, and listing inquiries, your site generates traffic with nowhere to go." },
      { icon: <Target className="w-5 h-5 text-primary" />, title: 'Weak Conversion Copy', body: "A generic bio and a phone number don't convert. Clients need to see your results, your personality, and proof that you know their market." },
    ],
  },
  features: [
    { icon: <UserCheck className="w-5 h-5 text-primary" />, title: 'Agent Bio & Personal Brand Page', description: 'A compelling professional bio that tells your story, highlights your track record, and gives buyers and sellers a clear reason to choose you over every other agent.' },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Buyer & Seller Lead Forms', description: 'Dedicated forms for home valuations, buyer consultations, and listing inquiries — tied to high-value content that makes filling them out feel worthwhile.' },
    { icon: <Home className="w-5 h-5 text-primary" />, title: 'Featured Listings Section', description: 'Showcase your active and recent listings with photos and key details — giving visitors a concrete view of your market activity and expertise.' },
    { icon: <Map className="w-5 h-5 text-primary" />, title: 'Neighborhood Guides', description: 'Local area content that demonstrates you know the market — and that also ranks in Google for buyers searching neighborhoods they\'re considering.' },
    { icon: <Star className="w-5 h-5 text-primary" />, title: 'Testimonials & Past Sales', description: 'Client reviews and past sale highlights surfaced prominently — the social proof that moves hesitant prospects from curious to ready to call.' },
    { icon: <Target className="w-5 h-5 text-primary" />, title: 'Clear Buyer & Seller CTAs', description: 'Separate conversion paths for buyers and sellers so every visitor lands on content and a call-to-action that speaks directly to their situation.' },
  ],
  faqs: [
    { q: 'Do I need my own website if my brokerage has one?', a: "Yes. Your brokerage site represents the whole firm, not you. A personal site lets you build your own brand, generate your own leads, and stand out in a crowded market." },
    { q: 'Can you integrate MLS listings?', a: 'We can display featured listings directly on your site. Full MLS integration is available as a custom add-on depending on your MLS provider.' },
    { q: "What's the most important thing to include on a real estate agent's website?", a: "A strong bio, social proof (past sales, testimonials), and a clear way for buyers and sellers to reach you. Everything else supports those three things." },
    { q: 'How do I get leads from my website, not just traffic?', a: 'Lead forms tied to something valuable — home valuation, market reports, neighborhood guides — consistently outperform generic \'contact me\' forms. We build sites with that in mind.' },
  ],
  ctaHeadline: 'Build a Brand That Wins Listings',
  ctaBody: "Tell us about your market and what you're looking to grow. We'll put together a custom plan.",
};

export default function RealEstatePage() {
  return <IndustryPageTemplate data={data} />;
}
