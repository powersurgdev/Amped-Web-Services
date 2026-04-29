import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import RiskFreeBuild from '@/components/RiskFreeBuild';
import About from '@/components/About';
import Contact from '@/components/Contact';
import ScrollToHash from '@/components/ScrollToHash';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Amped Web Studios - Web Design, SEO & Digital Marketing',
  description: 'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: 'Amped Web Studios - Web Design, SEO & Digital Marketing',
    description: 'Launch a website that actually works for your business. Professional web design, development, SEO, and managed hosting in one place.',
    url: absoluteUrl('/'),
    images: [{ url: '/og-images/home.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/home.png'] },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Amped Web Studios',
  url: SITE_URL,
  description:
    'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
  serviceType: ['Web Design', 'Web Development', 'SEO', 'Digital Marketing', 'Website Hosting'],
  areaServed: 'United States',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={localBusinessSchema} />
      <ScrollToHash />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Portfolio mode="carousel" />
        <RiskFreeBuild />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
