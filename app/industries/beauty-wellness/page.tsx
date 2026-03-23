import type { Metadata } from 'next';
import { CalendarCheck, Sparkles, Users, Image, Gift, Star } from 'lucide-react';
import IndustryPageTemplate, { type IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Salon and Spa Websites That Book More Appointments — Amped Web Studios',
  description: 'We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand.',
  alternates: { canonical: '/industries/beauty-wellness' },
  openGraph: {
    title: 'Salon and Spa Websites That Book More Appointments — Amped Web Studios',
    description: 'We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand.',
    url: '/industries/beauty-wellness',
    images: [{ url: '/og-images/industries-beauty-wellness.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/industries-beauty-wellness.png'] },
};

const data: IndustryPageData = {
  pageTitle: 'Salon and Spa Websites That Book More Appointments — Amped Web Studios',
  metaDescription: 'We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand.',
  heroProps: {
    industry: 'Beauty & Wellness',
    headline: 'Salon and Spa Websites That Book More Appointments',
    highlightedPhrase: 'Book More Appointments',
    subheading: 'New clients decide where to book based on what they see online. We build beauty and wellness sites that look as polished as your work — and make booking easy.',
    primaryCTA: 'Get a Free Quote',
    stats: [
      { value: '24/7', label: 'Online Booking' },
      { value: 'Gallery', label: 'Shows Your Best Work' },
      { value: 'Less', label: 'No-Shows & Friction' },
    ],
    painPoints: [
      'Clients can only book by calling during business hours',
      'No gallery showing your actual work and style',
      "Stylists' specialties aren't visible before booking",
      'New clients book competitors who are easier to reach',
    ],
  },
  whySection: {
    headline: 'Your Work Is the Product — Make Sure It Shows',
    paragraphs: [
      "When someone is looking for a new salon, barber, or spa, they want to see examples of your work before they commit. A website with a strong gallery and clear services is what turns a search into a booked appointment — without a single phone call needed.",
      "Beyond the visual, convenience wins. If booking requires a phone call during business hours, you'll lose clients to a competitor who makes it easy to book at midnight from their couch. That's not about loyalty — it's about friction.",
      "We build sites for salons and spas that look amazing, showcase your work effectively, and make the booking process as easy as possible — because that combination is what keeps chairs full.",
    ],
    challenges: [
      { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: 'Phone-Only Booking', body: "Clients who want to book at 10pm can't reach you. A competitor with online booking gets that appointment instead — every single time." },
      { icon: <Image className="w-5 h-5 text-primary" />, title: 'No Portfolio Gallery', body: 'Beauty clients are visual buyers. Without a gallery of your actual work, they have no basis for choosing you over the salon down the street.' },
      { icon: <Users className="w-5 h-5 text-primary" />, title: 'Hidden Stylist Specialties', body: "If clients can't see who does what before they book, they'll book at a shop where they can see exactly who fits their needs." },
    ],
  },
  features: [
    { icon: <CalendarCheck className="w-5 h-5 text-primary" />, title: '24/7 Online Booking Integration', description: 'Direct integration with Vagaro, Booksy, StyleSeat, or your platform of choice — so clients can book at any hour without needing to pick up the phone.' },
    { icon: <Sparkles className="w-5 h-5 text-primary" />, title: 'Service Menu with Pricing', description: 'A clean, easy-to-browse service menu with descriptions and pricing — so clients arrive informed and you spend less time answering the same questions.' },
    { icon: <Users className="w-5 h-5 text-primary" />, title: 'Stylist & Staff Profiles', description: 'Individual profiles for each team member with their specialties, booking links, and portfolio photos — letting clients find their perfect match before they arrive.' },
    { icon: <Image className="w-5 h-5 text-primary" />, title: 'Work Portfolio Gallery', description: 'A curated gallery showcasing your best cuts, color work, and treatments — the visual proof that converts browsers into booked clients.' },
    { icon: <Gift className="w-5 h-5 text-primary" />, title: 'Gift Cards & Special Offers', description: 'Prominently featured gift card options and seasonal promotions — turning your website into a revenue source beyond just appointment bookings.' },
    { icon: <Star className="w-5 h-5 text-primary" />, title: 'Reviews & Social Proof', description: 'Google reviews and client testimonials surfaced directly on your site — reassuring first-time visitors that your reputation is exactly as good as it is.' },
  ],
  faqs: [
    { q: 'Can clients book appointments directly through my website?', a: 'Yes. We integrate with booking platforms like Vagaro, Booksy, StyleSeat, or any other you use — or build a simple request form if you prefer to confirm manually.' },
    { q: 'How important is having a gallery on a salon website?', a: 'Very. For beauty and hair services, clients want to see your actual work before they book. A good gallery is often the difference between a new client and a lost one.' },
    { q: 'What if I have multiple stylists with different specialties?', a: 'We build individual stylist profiles so clients can find the right person for their needs and book with them specifically.' },
    { q: 'Do I need to update my site regularly?', a: 'The essentials (services, pricing, hours) should stay current. Beyond that, your care plan includes content updates so you can add new work to the gallery, promote seasonal specials, etc.' },
  ],
  ctaHeadline: "Let's Build a Site That Keeps Your Chair Full",
  ctaBody: "Tell us about your salon, spa, or studio. We'll put together a plan that fits your brand and budget.",
};

export default function BeautyWellnessPage() {
  return <IndustryPageTemplate data={data} />;
}
