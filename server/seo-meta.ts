const BASE_URL = 'https://ampedwebstudios.com';
const SITE_NAME = 'Amped Web Studios';

export interface PageMeta {
  title: string;
  description: string;
  ogImage: string;
  jsonLd: object;
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  url: BASE_URL,
  logo: `${BASE_URL}/og-images/home.png`,
  description: 'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
  serviceType: ['Web Design', 'Web Development', 'SEO', 'Digital Marketing', 'Website Hosting'],
  areaServed: 'United States',
  sameAs: [],
};

function webPageJsonLd(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: BASE_URL },
  };
}

const routeMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Amped Web Studios - Web Design, SEO & Digital Marketing',
    description: 'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
    ogImage: `${BASE_URL}/og-images/home.png`,
    jsonLd: localBusinessJsonLd,
  },
  '/contact': {
    title: 'Contact Us — Amped Web Studios',
    description: 'Ready to get started? Tell us about your project and we\'ll come back with a custom plan and transparent pricing — no pressure.',
    ogImage: `${BASE_URL}/og-images/contact.png`,
    jsonLd: webPageJsonLd('Contact Us — Amped Web Studios', 'Ready to get started? Tell us about your project and we\'ll come back with a custom plan and transparent pricing — no pressure.', `${BASE_URL}/contact`),
  },
  '/portfolio': {
    title: 'Portfolio — Amped Web Studios',
    description: 'See the websites we\'ve built for local businesses — tree service, gutters, electrical, and more. Real work, real results.',
    ogImage: `${BASE_URL}/og-images/portfolio.png`,
    jsonLd: webPageJsonLd('Portfolio — Amped Web Studios', 'See the websites we\'ve built for local businesses — tree service, gutters, electrical, and more. Real work, real results.', `${BASE_URL}/portfolio`),
  },
  '/privacy': {
    title: 'Privacy Policy — Amped Web Studios',
    description: 'Our privacy policy details how we collect, protect, and use information when you contact us about web design and digital services.',
    ogImage: `${BASE_URL}/og-images/privacy.png`,
    jsonLd: webPageJsonLd('Privacy Policy — Amped Web Studios', 'Our privacy policy details how we collect, protect, and use information when you contact us about web design and digital services.', `${BASE_URL}/privacy`),
  },
  '/terms': {
    title: 'Terms & Conditions — Amped Web Studios',
    description: 'Terms and conditions for working with Amped Web Studios on web design, development, and hosting services.',
    ogImage: `${BASE_URL}/og-images/terms.png`,
    jsonLd: webPageJsonLd('Terms & Conditions — Amped Web Studios', 'Terms and conditions for working with Amped Web Studios on web design, development, and hosting services.', `${BASE_URL}/terms`),
  },
  '/services': {
    title: 'Services — Amped Web Studios',
    description: 'From custom web design to SEO and digital marketing — see everything Amped Web Studios offers for small businesses.',
    ogImage: `${BASE_URL}/og-images/services.png`,
    jsonLd: webPageJsonLd('Services — Amped Web Studios', 'From custom web design to SEO and digital marketing — see everything Amped Web Studios offers for small businesses.', `${BASE_URL}/services`),
  },
  '/services/web-design': {
    title: 'Custom Website Design for Small Businesses — Amped Web Studios',
    description: 'We design custom websites built from scratch — no templates, no page builders. Mobile-first, conversion-focused, and ready in 5–7 days.',
    ogImage: `${BASE_URL}/og-images/web-design.png`,
    jsonLd: webPageJsonLd('Custom Website Design for Small Businesses — Amped Web Studios', 'We design custom websites built from scratch — no templates, no page builders. Mobile-first, conversion-focused, and ready in 5–7 days.', `${BASE_URL}/services/web-design`),
  },
  '/services/web-development': {
    title: 'Professional Web Development That Goes Live Fast — Amped Web Studios',
    description: 'Hand-coded websites built for speed and performance. Domain, DNS, and SSL handled for you. Live in 7–10 days with a 90+ PageSpeed score.',
    ogImage: `${BASE_URL}/og-images/web-development.png`,
    jsonLd: webPageJsonLd('Professional Web Development That Goes Live Fast — Amped Web Studios', 'Hand-coded websites built for speed and performance. Domain, DNS, and SSL handled for you. Live in 7–10 days with a 90+ PageSpeed score.', `${BASE_URL}/services/web-development`),
  },
  '/services/hosting-care': {
    title: 'Managed Website Hosting With Zero Headaches — Amped Web Studios',
    description: '99.9% uptime, 24/7 monitoring, automatic backups, and content updates handled for you. One flat monthly fee — no surprises.',
    ogImage: `${BASE_URL}/og-images/hosting-care.png`,
    jsonLd: webPageJsonLd('Managed Website Hosting With Zero Headaches — Amped Web Studios', '99.9% uptime, 24/7 monitoring, automatic backups, and content updates handled for you. One flat monthly fee — no surprises.', `${BASE_URL}/services/hosting-care`),
  },
  '/services/seo-local-search': {
    title: 'Local SEO That Gets You Found on Google — Amped Web Studios',
    description: 'Rank in Google\'s local Map Pack for your service area. On-page SEO, Google Business Profile optimization, and monthly reporting included.',
    ogImage: `${BASE_URL}/og-images/seo-local-search.png`,
    jsonLd: webPageJsonLd('Local SEO That Gets You Found on Google — Amped Web Studios', 'Rank in Google\'s local Map Pack for your service area. On-page SEO, Google Business Profile optimization, and monthly reporting included.', `${BASE_URL}/services/seo-local-search`),
  },
  '/services/website-refresh': {
    title: 'Website Redesign That Modernizes and Converts — Amped Web Studios',
    description: 'Is your site slow, outdated, or not generating leads? We rebuild it from the ground up — faster, modern, and conversion-focused.',
    ogImage: `${BASE_URL}/og-images/website-refresh.png`,
    jsonLd: webPageJsonLd('Website Redesign That Modernizes and Converts — Amped Web Studios', 'Is your site slow, outdated, or not generating leads? We rebuild it from the ground up — faster, modern, and conversion-focused.', `${BASE_URL}/services/website-refresh`),
  },
  '/services/digital-marketing': {
    title: 'Digital Marketing That Grows Small Businesses — Amped Web Studios',
    description: 'Reviews, local SEO, Google Business Profile management, and monthly reporting — everything your business needs to grow online consistently.',
    ogImage: `${BASE_URL}/og-images/digital-marketing.png`,
    jsonLd: webPageJsonLd('Digital Marketing That Grows Small Businesses — Amped Web Studios', 'Reviews, local SEO, Google Business Profile management, and monthly reporting — everything your business needs to grow online consistently.', `${BASE_URL}/services/digital-marketing`),
  },
  '/industries': {
    title: 'Industries We Serve — Amped Web Studios',
    description: 'We build websites for local businesses across dozens of industries. Find your industry and see what we can do for you.',
    ogImage: `${BASE_URL}/og-images/industries.png`,
    jsonLd: webPageJsonLd('Industries We Serve — Amped Web Studios', 'We build websites for local businesses across dozens of industries. Find your industry and see what we can do for you.', `${BASE_URL}/industries`),
  },
  '/industries/home-services': {
    title: 'Websites for Home Service Companies That Generate Calls — Amped Web Studios',
    description: 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.',
    ogImage: `${BASE_URL}/og-images/home-services.png`,
    jsonLd: webPageJsonLd('Websites for Home Service Companies That Generate Calls — Amped Web Studios', 'We build websites for HVAC, plumbing, electrical, gutters, tree service, and landscaping businesses designed to drive calls and booked jobs.', `${BASE_URL}/industries/home-services`),
  },
  '/industries/contractors': {
    title: 'Web Design for Contractors and Trade Businesses — Amped Web Studios',
    description: 'We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs.',
    ogImage: `${BASE_URL}/og-images/contractors.png`,
    jsonLd: webPageJsonLd('Web Design for Contractors and Trade Businesses — Amped Web Studios', 'We build websites for remodelers, painters, flooring contractors, and general contractors — designed to generate estimate requests and close more jobs.', `${BASE_URL}/industries/contractors`),
  },
  '/industries/restaurants': {
    title: 'Restaurant Website Design That Fills Your Tables — Amped Web Studios',
    description: 'We build websites for restaurants and food businesses with online menus, reservations, and a design that makes people hungry before they walk in.',
    ogImage: `${BASE_URL}/og-images/restaurants.png`,
    jsonLd: webPageJsonLd('Restaurant Website Design That Fills Your Tables — Amped Web Studios', 'We build websites for restaurants and food businesses with online menus, reservations, and a design that makes people hungry before they walk in.', `${BASE_URL}/industries/restaurants`),
  },
  '/industries/healthcare': {
    title: 'Healthcare Websites That Build Patient Trust — Amped Web Studios',
    description: 'We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book.',
    ogImage: `${BASE_URL}/og-images/healthcare.png`,
    jsonLd: webPageJsonLd('Healthcare Websites That Build Patient Trust — Amped Web Studios', 'We build websites for dentists, chiropractors, therapists, and med spas — designed to earn patient trust and fill your appointment book.', `${BASE_URL}/industries/healthcare`),
  },
  '/industries/real-estate': {
    title: 'Real Estate Websites That Capture More Leads — Amped Web Studios',
    description: 'We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition.',
    ogImage: `${BASE_URL}/og-images/real-estate.png`,
    jsonLd: webPageJsonLd('Real Estate Websites That Capture More Leads — Amped Web Studios', 'We build personal brand websites for real estate agents and brokers — designed to generate buyer and seller leads and stand out from the competition.', `${BASE_URL}/industries/real-estate`),
  },
  '/industries/beauty-wellness': {
    title: 'Salon and Spa Websites That Book More Appointments — Amped Web Studios',
    description: 'We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand.',
    ogImage: `${BASE_URL}/og-images/beauty-wellness.png`,
    jsonLd: webPageJsonLd('Salon and Spa Websites That Book More Appointments — Amped Web Studios', 'We build websites for salons, barbershops, spas, and beauty businesses — with online booking, service galleries, and a design that matches your brand.', `${BASE_URL}/industries/beauty-wellness`),
  },
  '/industries/auto-services': {
    title: 'Auto Shop Websites Built to Bring in More Customers — Amped Web Studios',
    description: 'We build websites for auto mechanics, detailing shops, car washes, and towing companies — designed to capture local search traffic and convert it into customers.',
    ogImage: `${BASE_URL}/og-images/auto-services.png`,
    jsonLd: webPageJsonLd('Auto Shop Websites Built to Bring in More Customers — Amped Web Studios', 'We build websites for auto mechanics, detailing shops, car washes, and towing companies — designed to capture local search traffic and convert it into customers.', `${BASE_URL}/industries/auto-services`),
  },
  '/industries/creative-portfolio': {
    title: 'Portfolio Websites for Photographers and Creatives — Amped Web Studios',
    description: 'We build portfolio websites for photographers, videographers, and creative professionals — beautiful, fast, and designed to win clients.',
    ogImage: `${BASE_URL}/og-images/creative-portfolio.png`,
    jsonLd: webPageJsonLd('Portfolio Websites for Photographers and Creatives — Amped Web Studios', 'We build portfolio websites for photographers, videographers, and creative professionals — beautiful, fast, and designed to win clients.', `${BASE_URL}/industries/creative-portfolio`),
  },
  '/industries/legal-professional': {
    title: 'Professional Service Websites That Establish Authority — Amped Web Studios',
    description: 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.',
    ogImage: `${BASE_URL}/og-images/legal-professional.png`,
    jsonLd: webPageJsonLd('Professional Service Websites That Establish Authority — Amped Web Studios', 'We build websites for law firms, CPAs, and consultants — designed to establish credibility, rank locally, and convert visitors into consultations.', `${BASE_URL}/industries/legal-professional`),
  },
  '/industries/fitness-sports': {
    title: 'Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios',
    description: 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.',
    ogImage: `${BASE_URL}/og-images/fitness-sports.png`,
    jsonLd: webPageJsonLd('Gym and Fitness Websites That Convert Visitors to Members — Amped Web Studios', 'We build websites for gyms, personal trainers, yoga studios, and fitness businesses — designed to generate trial sign-ups and turn visitors into paying members.', `${BASE_URL}/industries/fitness-sports`),
  },
};

export function getPageMeta(path: string): PageMeta {
  return routeMeta[path] ?? routeMeta['/'];
}
