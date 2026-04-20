import type { Metadata } from 'next';
import { CalendarCheck, UserCheck, BookOpen, CreditCard, ShieldCheck, Star } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Healthcare Websites That Build Patient Trust — Amped Web Studios',
  description: 'We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book.',
  alternates: { canonical: '/industries/healthcare' },
  openGraph: {
    title: 'Healthcare Websites That Build Patient Trust — Amped Web Studios',
    description: 'We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book.',
    url: '/industries/healthcare',
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const data: IndustryPageData = {
  pageTitle: 'Healthcare Websites That Build Patient Trust — Amped Web Studios',
  metaDescription: 'We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book.',
  heroProps: {
    industry: 'Healthcare',
    headline: 'Healthcare Websites That Build Patient Trust',
    highlightedPhrase: 'Build Patient Trust',
    subheading: "Patients are trusting you with their health. Your website needs to reflect that level of care — professional, clear, and easy to navigate when someone is looking for help.",
    primaryCTA: 'Start Your Project',
    stats: [
      { value: 'HIPAA', label: 'Compliant Forms' },
      { value: 'Online', label: 'Appointment Booking' },
      { value: 'Trust', label: 'Built Before First Visit' },
    ],
    painPoints: [
      "New patients can't easily book an appointment online",
      "Provider credentials aren't prominently displayed",
      'Services are explained in confusing medical jargon',
      'Insurance information is hard or impossible to find',
    ],
  },
  whySection: {
    headline: 'Patients Choose Their Provider Online First',
    paragraphs: [
      "Before a new patient calls your office, they've already looked at your website. They're evaluating whether you seem trustworthy, whether you offer what they need, and whether booking an appointment feels easy. This happens in under 60 seconds.",
      "A healthcare website that's outdated, hard to navigate, or doesn't clearly explain your services creates doubt — even for providers with excellent clinical reputations. First impressions matter more than ever in a market where patients have options and switching is easy.",
      "We build healthcare sites that communicate professionalism and warmth — the combination that wins new patient confidence and keeps your appointment book full.",
    ],
    challenges: [
      { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: 'No Online Booking', body: "Patients who can't book online at 9pm on a Tuesday will book with someone who lets them. Removing that friction is one of the highest-impact changes you can make." },
      { icon: <UserCheck className="w-5 h-5 text-primary" />, title: 'Credentials Hard to Find', body: "Credentials, certifications, and provider bios are what patients look for to confirm they can trust you. If they're buried, trust doesn't form." },
      { icon: <BookOpen className="w-5 h-5 text-primary" />, title: 'Jargon-Heavy Content', body: 'Medical terminology that reads like a textbook creates anxiety instead of confidence. Patients need plain language that explains what to expect.' },
    ],
  },
  features: [
    { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: 'Online Appointment Booking', description: 'Integrated scheduling that lets patients book directly from your site — connected to Calendly, Jane App, NexHealth, or whatever platform you already use.' },
    { icon: <UserCheck className="w-5 h-5 text-primary" />, title: 'Provider Bios & Credentials', description: 'Detailed provider pages with photos, credentials, and personal background — giving hesitant new patients the confidence to choose your practice.' },
    { icon: <BookOpen className="w-5 h-5 text-primary" />, title: 'Clear Service & Treatment Pages', description: "Each service explained in plain, reassuring language focused on what the patient will experience — not clinical jargon that creates more questions than it answers." },
    { icon: <CreditCard className="w-5 h-5 text-primary" />, title: 'Insurance Information Display', description: 'Accepted plans listed clearly so patients can confirm coverage before their first visit — one of the most-searched items on any healthcare site.' },
    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: 'HIPAA-Compliant Contact Forms', description: 'Forms that collect only the minimum necessary information and are designed to avoid storing sensitive health data through the web layer.' },
    { icon: <Star className="w-5 h-5 text-primary" />, title: 'Testimonials & Review Integration', description: 'Patient testimonials and Google reviews surfaced on your site — building social proof at the moment prospective patients are on the fence.' },
  ],
  faqs: [
    { q: 'Do you build HIPAA-compliant websites?', a: "Our contact forms are designed to collect only the minimum necessary information — name, contact, and appointment request type. We don't store sensitive health information through web forms." },
    { q: 'Can patients book appointments directly through the site?', a: 'Yes. We can integrate with most scheduling platforms (Calendly, Jane App, NexHealth, etc.) or build a simple request form that routes to your team.' },
    { q: 'How do I explain complex treatments without overwhelming patients?', a: "We write service pages in plain, reassuring language — focused on what the patient will experience and feel, not technical jargon. We can also link to educational resources when appropriate." },
    { q: 'Should I display pricing for my services?', a: "It depends on your practice type. For elective services (med spas, cosmetic dentistry), displaying starting prices often increases qualified inquiries. For insurance-based practices, we typically recommend a 'call for insurance info' approach." },
  ],
  ctaHeadline: "Let's Build a Site That Fills Your Appointment Book",
  ctaBody: "Tell us about your practice. We'll put together a custom plan that fits your specialty and patient base.",
};

export default function HealthcarePage() {
  return <IndustryPageTemplate data={data} />;
}
