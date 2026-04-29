import type { Metadata } from 'next';
import { Dumbbell, CalendarCheck, User, Trophy, FileText, Search } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';
import { absoluteUrl, serviceSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios',
  description: 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.',
  alternates: { canonical: absoluteUrl('/industries/fitness-sports') },
  openGraph: {
    title: 'Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios',
    description: 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.',
    url: absoluteUrl('/industries/fitness-sports'),
    images: [{ url: '/og-images/industries.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries.png'] },
};

const schema = serviceSchema({
  name: 'Web Design for Gyms and Fitness Businesses',
  description: 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.',
  url: '/industries/fitness-sports',
  serviceType: 'Web Design',
});

const data: IndustryPageData = {
  pageTitle: 'Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios',
  metaDescription: 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.',
  heroProps: {
    industry: 'Fitness & Sports',
    headline: 'Gym and Fitness Websites That Convert Visitors to Members',
    highlightedPhrase: 'Convert Visitors to Members',
    subheading: 'People are ready to change. Your website just needs to give them the right push. We build fitness sites that turn curiosity into commitments.',
    primaryCTA: 'Start Your Project',
    stats: [
      { value: 'Trial', label: 'Sign-Up Lead Forms' },
      { value: 'Class', label: 'Schedule Integration' },
      { value: 'More', label: 'Members from Search' },
    ],
    painPoints: [
      'Trial offers are buried — visitors leave without signing up',
      "Class schedule isn't online or easy to navigate",
      'Big-box gym chains outrank you in local search',
      'Prices are hidden, causing unnecessary friction',
    ],
  },
  whySection: {
    headline: 'The First Workout Is the Hardest — Help People Take the Step',
    paragraphs: [
      "Someone thinking about joining a gym or starting personal training is often nervous, unsure, and easy to talk themselves out of it. Your website has to overcome that hesitation — with real results, a clear sense of your community, and a path to getting started that feels low-risk.",
      "A cold, generic, hard-to-navigate fitness site loses people before they ever walk in. Hidden pricing creates friction. No trial offer means no easy first step. No online schedule means they can't picture themselves fitting your classes into their life.",
      "We build fitness websites that capture the energy of what you do and make it as easy as possible for the right people to say yes — to the free trial, the intro class, or the first consultation.",
    ],
    challenges: [
      { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Buried Trial Offers', body: "If your free trial or intro offer isn't immediately visible, hesitant prospects leave without converting. It's the single highest-impact element on most fitness sites." },
      { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: 'No Online Schedule', body: "Prospects need to picture themselves in your classes before they commit. A clear, browsable schedule makes that possible. No schedule = no mental buy-in." },
      { icon: <Dumbbell className="w-5 h-5 text-primary" />, title: 'Losing to Big-Box Gyms', body: 'Chain gyms have national SEO budgets. But a well-optimized local page with real reviews and community feel consistently outperforms them in neighborhood searches.' },
    ],
  },
  features: [
    { icon: <Dumbbell className="w-5 h-5 text-primary" />, title: 'Membership & Class Offerings', description: 'Clear, well-organized membership tiers and class descriptions with pricing — so prospects can evaluate their options without having to call and ask.' },
    { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: 'Online Class Schedule & Booking', description: 'An integrated class schedule and booking system that lets prospects browse your offerings and reserve a spot — the step that often comes right before joining.' },
    { icon: <User className="w-5 h-5 text-primary" />, title: 'Trainer & Coach Profiles', description: 'Individual trainer bios with photos, specialties, and certifications — letting prospects find the coach they connect with before they ever walk through the door.' },
    { icon: <Trophy className="w-5 h-5 text-primary" />, title: 'Member Transformations & Results', description: 'Real member stories and transformation results that inspire hesitant prospects — the emotional proof that this gym works for people like them.' },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: 'Trial & Free Class Lead Forms', description: 'Prominently placed trial sign-up forms tied to a free class or intro offer — the lowest-friction path from curious visitor to foot in the door.' },
    { icon: <Search className="w-5 h-5 text-primary" />, title: 'Local Gym SEO', description: "Optimized to rank for 'gym near me,' '[neighborhood] fitness studio,' and trainer-specific searches — putting you in front of the most motivated local prospects." },
  ],
  faqs: [
    { q: 'How do I compete with big-box gyms online?', a: 'Local SEO and authenticity. A well-optimized independent gym page with real member reviews and a strong community feel consistently beats generic chain listings in local searches.' },
    { q: 'Can people sign up for a trial online?', a: 'Yes. We build lead capture forms tied to free trial or introductory offer CTAs — one of the most effective ways to get new members through the door.' },
    { q: 'Should I list my membership prices on the website?', a: 'For most fitness businesses, yes. Hiding pricing creates friction. Being transparent builds trust and pre-qualifies leads so you spend less time on conversations that go nowhere.' },
    { q: 'What type of content works best for fitness websites?', a: 'Real transformation stories, trainer spotlights, class descriptions that convey energy and community, and a clear schedule. We help you structure all of it for maximum impact.' },
  ],
  ctaHeadline: "Let's Build a Site That Grows Your Membership",
  ctaBody: "Tell us about your gym or studio. We'll put together a plan that fits your goals.",
};

export default function FitnessSportsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <IndustryPageTemplate data={data} />
    </>
  );
}
