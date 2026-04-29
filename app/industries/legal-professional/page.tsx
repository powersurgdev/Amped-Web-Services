import type { Metadata } from 'next';
import { Scale, User, Award, FileText, DollarSign, Search } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';
import { absoluteUrl, serviceSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Professional Service Websites That Establish Authority — Amped Web Studios',
  description: 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.',
  alternates: { canonical: absoluteUrl('/industries/legal-professional') },
  openGraph: {
    title: 'Professional Service Websites That Establish Authority — Amped Web Studios',
    description: 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.',
    url: absoluteUrl('/industries/legal-professional'),
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const schema = serviceSchema({
  name: 'Web Design for Legal and Professional Services',
  description: 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.',
  url: '/industries/legal-professional',
  serviceType: 'Web Design',
});

const data: IndustryPageData = {
  pageTitle: 'Professional Service Websites That Establish Authority — Amped Web Studios',
  metaDescription: 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.',
  heroProps: {
    industry: 'Legal & Professional',
    headline: 'Professional Service Websites That Establish Authority',
    highlightedPhrase: 'Establish Authority',
    subheading: "When clients are searching for a lawyer, CPA, or consultant, they're looking for someone they can trust. We build sites that establish that trust immediately.",
    primaryCTA: 'Start Your Project',
    stats: [
      { value: 'More', label: 'Consultation Requests' },
      { value: 'Local', label: 'SEO Dominance' },
      { value: 'High', label: 'Trust Signals Built In' },
    ],
    painPoints: [
      "Generic site doesn't communicate your specific expertise",
      'Practice area pages missing — can\'t rank for key terms',
      'No visible social proof to pre-qualify your reputation',
      'Consultation form is hard to find or friction-heavy',
    ],
  },
  whySection: {
    headline: 'High-Stakes Clients Do Their Research',
    paragraphs: [
      "Someone looking for a divorce attorney, a business CPA, or a management consultant is making a serious decision. They're going to spend real time evaluating their options — reading your bio, checking your practice areas, looking for reviews — and your website is a major part of that evaluation.",
      "A generic, outdated, or hard-to-navigate site signals that you may be equally disorganized in your practice. A clean, authoritative, well-organized site says something very different — before you've said a single word to that prospect.",
      "We build professional service websites that communicate expertise, clarity, and trustworthiness — the three things that matter most when the stakes are high and clients are choosing carefully.",
    ],
    challenges: [
      { icon: <Scale className="w-5 h-5 text-primary" />, title: 'Generic Positioning', body: "A site that just says 'we handle all legal matters' can't compete with a firm that clearly specializes in family law, DUI defense, or business litigation." },
      { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Missing Practice Pages', body: "'Divorce attorney [city]' and 'business litigation [city]' are separate searches. Without dedicated pages for each, you can't rank for either." },
      { icon: <User className="w-5 h-5 text-primary" />, title: 'No Social Proof', body: "High-stakes clients look for reviews, case results, and client testimonials before they pick up the phone. A site without them loses to one that has them." },
    ],
  },
  features: [
    { icon: <Scale className="w-5 h-5 text-primary" />, title: 'Practice Area Pages', description: 'A dedicated page for every practice area you handle — each optimized for the local search terms your ideal clients type when they need help.' },
    { icon: <User className="w-5 h-5 text-primary" />, title: 'Attorney & Professional Bios', description: 'Compelling professional bios with credentials, experience, and background — giving prospective clients the context they need to feel confident picking up the phone.' },
    { icon: <Award className="w-5 h-5 text-primary" />, title: 'Results & Testimonials', description: 'Case highlights and client reviews displayed prominently — the social proof that distinguishes your firm from every other generic listing in the same market.' },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Consultation Request Forms', description: "Low-friction intake forms with the right questions — designed to capture serious inquiries without overwhelming prospects who are still evaluating their options." },
    { icon: <DollarSign className="w-5 h-5 text-primary" />, title: "'How We Work' Section", description: 'A clear explanation of your billing model or engagement process — reducing the #1 objection that stops motivated prospects from submitting an inquiry.' },
    { icon: <Search className="w-5 h-5 text-primary" />, title: 'Practice-Specific Local SEO', description: "Built to rank for the high-intent local searches — '[practice area] attorney in [city]' — that bring in the most motivated and best-qualified prospects." },
  ],
  faqs: [
    { q: 'Are there ethics rules I need to follow for my attorney website?', a: 'Yes, and they vary by state. We stay current on bar association advertising rules and will flag any content that could raise compliance concerns. Client reviews, results claims, and testimonials are all handled carefully.' },
    { q: 'Should I list my fees on my website?', a: "For flat-fee services (wills, incorporations, tax prep), listing fees or ranges increases qualified inquiries. For hourly or contingency work, a 'free consultation' model often works better." },
    { q: 'What makes a law firm website trustworthy to potential clients?', a: "Clear credentials, practice area expertise, a professional design, and visible social proof (reviews, case results). People hiring a lawyer are making a high-stakes decision — they need to feel confident." },
    { q: 'How important is local SEO for a law firm?', a: "Extremely. Most legal searches are local — 'divorce attorney in [city],' 'DUI lawyer near me.' If you're not ranking for those, you're invisible to the most motivated prospects." },
  ],
  ctaHeadline: "Let's Build a Site That Wins More Consultations",
  ctaBody: "Tell us about your practice and what you're looking to grow. We'll put together a plan.",
};

export default function LegalProfessionalPage() {
  return (
    <>
      <JsonLd data={schema} />
      <IndustryPageTemplate data={data} />
    </>
  );
}
