import { useEffect } from "react";
import { Phone, Search, CalendarCheck, MapPin, Star, Wrench } from "lucide-react";
import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  pageTitle: "Auto Shop Websites Built to Bring in More Customers — Amped Web Studios",
  metaDescription:
    "We build websites for auto mechanics, detailing shops, car washes, and towing companies — designed to capture local search traffic and convert it into customers.",

  heroProps: {
    industry: "Auto Services",
    headline: "Auto Shop Websites Built to Bring in More Customers",
    highlightedPhrase: "Bring in More Customers",
    subheading:
      "Auto service customers search on their phones when they have a problem. We build sites that show up fast, load fast, and make it easy to call or book.",
    primaryCTA: "Get a Free Quote",
    stats: [
      { value: "Mobile", label: "First, Always" },
      { value: "1-tap", label: "Click to Call" },
      { value: "Local", label: "Map Pack Rankings" },
    ],
    painPoints: [
      "Phone number is hard to find or tap on mobile",
      "You're not showing up in 'mechanic near me' searches",
      "No online appointment or quote request option",
      "Big chain shops rank above you despite worse reviews",
    ],
  },

  whySection: {
    headline: "Most Auto Customers Search Before They Call",
    paragraphs: [
      "Whether someone's stranded with a flat or planning ahead for an oil change, they're going to Google first. 'Mechanic near me,' 'auto detailing [city],' 'towing service open now' — these are high-intent searches happening constantly, from phones, in the moment of need.",
      "If your website doesn't show up for those searches, or shows up but isn't built to convert mobile traffic fast, you're losing customers to competitors with better-optimized sites — regardless of the quality of your actual work.",
      "We build sites that capture that traffic and turn it into calls, appointments, and booked jobs — with a mobile-first design built specifically around how auto service customers actually search and decide.",
    ],
    challenges: [
      {
        icon: Phone,
        title: "Hard-to-Find Phone Number",
        body: "If your number isn't visible and tappable on mobile within 3 seconds of landing, the customer is already dialing someone else.",
      },
      {
        icon: Search,
        title: "Missing from Local Search",
        body: "'Mechanic near me' is one of the highest-intent searches in any local market. Not ranking for it means invisible to customers who are ready to spend.",
      },
      {
        icon: Star,
        title: "Chain Shops Outranking You",
        body: "A well-optimized independent shop page with strong reviews consistently beats chain locations in local map searches — but only if the SEO is done right.",
      },
    ],
  },

  features: [
    {
      icon: Wrench,
      title: "Per-Service Pages",
      description:
        "Dedicated pages for oil changes, brakes, detailing, towing, and every other service you offer — so you rank separately in search for each one.",
    },
    {
      icon: Phone,
      title: "One-Tap Mobile Calling",
      description:
        "Your number visible and tap-to-call on every page, above the fold on mobile — designed for customers who are in a hurry and need help now.",
    },
    {
      icon: CalendarCheck,
      title: "Appointment & Quote Forms",
      description:
        "Simple forms for scheduling appointments or requesting quotes — giving customers an alternative to calling and capturing leads outside business hours.",
    },
    {
      icon: MapPin,
      title: "Hours, Location & Maps",
      description:
        "Your hours, address, and an embedded Google map displayed prominently so customers can confirm you're nearby and open before they bother calling.",
    },
    {
      icon: Star,
      title: "Review Integration",
      description:
        "Customer reviews and star ratings surfaced on your site — the social proof that convinces someone to choose an independent shop over a familiar chain.",
    },
    {
      icon: Search,
      title: "Local SEO Optimization",
      description:
        "Technical and content SEO built specifically to help you rank for 'mechanic near me,' 'auto repair [city],' and service-specific searches in your area.",
    },
  ],

  faqs: [
    {
      q: "Most of my customers are in an emergency — how should my site handle that?",
      a: "Your phone number should be visible immediately, ideally at the top of every page with a tap-to-call link on mobile. We design with urgent search intent in mind.",
    },
    {
      q: "Should I list prices for common services?",
      a: "Listing price ranges (e.g., 'Oil changes starting at $X') builds trust and reduces price-shopping friction. We'll help you decide what to display based on your competitive positioning.",
    },
    {
      q: "I do detailing — is that handled differently than mechanical work?",
      a: "Yes. Detailing sites benefit heavily from visual galleries showing before/after results. We adjust the emphasis based on whether you're selling expertise (mechanical) or results (detailing).",
    },
    {
      q: "How do I compete with the big chains online?",
      a: "Local SEO and reviews. A well-optimized independent shop page with strong reviews consistently outperforms chain locations in local map searches. We focus on exactly that.",
    },
  ],

  ctaHeadline: "Ready to Win More Local Customers?",
  ctaBody:
    "Tell us about your shop and what you're trying to grow. We'll put together a plan that works.",
};

export default function AutoServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return <IndustryPageTemplate data={data} />;
}
