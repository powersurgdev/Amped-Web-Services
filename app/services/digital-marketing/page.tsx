import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing That Grows Small Businesses — Amped Web Studios',
  description: 'Reviews, local SEO, Google Business Profile management, and monthly reporting — everything your business needs to grow online consistently.',
  alternates: { canonical: '/services/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing That Grows Small Businesses — Amped Web Studios',
    description: 'Reviews, local SEO, Google Business Profile management, and monthly reporting — everything your business needs to grow online consistently.',
    url: '/services/digital-marketing',
    images: [{ url: '/og-images/digital-marketing.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/digital-marketing.png'] },
};

import {
  Star,
  MapPin,
  FileText,
  Eye,
  BarChart2,
  TrendingUp,
  LineChart,
  Map,
  Zap,
  PieChart,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      pageTitle="Digital Marketing That Grows Small Businesses — Amped Web Studios"
      pageDescription="Reviews, local SEO, Google Business Profile management, and monthly reporting — everything your business needs to grow online consistently."
      hero={{
        badge: "Digital Marketing",
        headline: "Digital Marketing That Grows Small Businesses",
        highlightedPhrase: "Grows Small Businesses",
        subheading:
          "A great website is the foundation. Digital marketing is what makes it a lead-generating machine — more reviews, more search visibility, more booked jobs.",
        primaryCTA: "Get a Free Quote",
        stats: [
          { value: "2–3", label: "Months to Momentum" },
          { value: "4.8★", label: "Avg. Review Target" },
          { value: "∞", label: "Compounding Growth" },
        ],
        featureHighlights: [
          "Online review generation and reputation management",
          "Local SEO landing pages for additional service areas",
          "Google Business Profile management and posting",
          "Monthly reporting — visibility, traffic, and leads",
        ],
      }}
      featuresHeading="What We Do Every Month"
      features={[
        {
          icon: <Star className="w-6 h-6 text-primary" />,
          title: "Review Generation",
          description:
            "We build systems that consistently get happy customers to leave you 5-star reviews on Google — automatically, without awkward asks.",
        },
        {
          icon: <MapPin className="w-6 h-6 text-primary" />,
          title: "GBP Management",
          description:
            "Monthly posts, Q&A management, and profile updates that keep your listing active and ranking in the local Map Pack.",
        },
        {
          icon: <FileText className="w-6 h-6 text-primary" />,
          title: "Local Landing Pages",
          description:
            "Dedicated pages for each city or neighborhood you serve — so you rank everywhere you work, not just your main city.",
        },
        {
          icon: <Eye className="w-6 h-6 text-primary" />,
          title: "Reputation Monitoring",
          description:
            "We track your reviews across platforms and alert you to anything that needs attention before it becomes a problem.",
        },
        {
          icon: <BarChart2 className="w-6 h-6 text-primary" />,
          title: "Monthly Reporting",
          description:
            "Clear reports each month showing growth in visibility, website traffic, and inbound leads — in plain language, not marketing jargon.",
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-primary" />,
          title: "Compounding Growth",
          description:
            "Unlike paid ads, digital marketing builds over time. Each month is stronger than the last — and it keeps working without ongoing ad spend.",
        },
      ]}
      problems={[
        "Your website is live but the phone is still quiet — traffic isn't converting to calls",
        "You have few or no Google reviews while competitors have dozens or hundreds",
        "Your business doesn't appear in searches for nearby cities or neighborhoods you serve",
        "No visibility into what's working — you're guessing at what's driving results",
      ]}
      solutions={[
        "Review generation campaigns that build trust fast and signal legitimacy to Google",
        "GBP management that keeps your listing active and ranking in the Map Pack",
        "Local landing pages for every service area you work in — more pages, more rankings",
        "Monthly reporting with clear metrics so you always know what you're getting",
      ]}
      processHeading="How It Works Month to Month"
      steps={[
        {
          icon: <LineChart className="w-6 h-6 text-primary" />,
          title: "Growth Audit",
          description:
            "We review your current digital footprint — reviews, local listings, search visibility — and identify where you're leaving leads on the table.",
        },
        {
          icon: <Map className="w-6 h-6 text-primary" />,
          title: "Strategy Plan",
          description:
            "We build a tailored growth plan focused on the channels that will move the needle fastest for your specific business and market.",
        },
        {
          icon: <Zap className="w-6 h-6 text-primary" />,
          title: "Execution",
          description:
            "We implement — new landing pages, review campaigns, GBP updates, and content — consistently, month over month.",
        },
        {
          icon: <PieChart className="w-6 h-6 text-primary" />,
          title: "Reporting & Refinement",
          description:
            "You get clear monthly reports. We review what's working, cut what isn't, and keep optimizing.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between SEO and digital marketing?",
          answer:
            "SEO is focused on getting found in search results. Digital marketing is broader — it includes reviews, reputation, content, local listings, and everything else that builds your online presence.",
        },
        {
          question: "How important are online reviews?",
          answer:
            "Extremely. Most people read reviews before contacting a local business. A business with 4.8 stars and 100 reviews will beat one with 3.9 stars every time, even if the latter spends more on ads.",
        },
        {
          question: "What are local SEO landing pages?",
          answer:
            "These are additional pages on your site that target specific cities or neighborhoods in your service area. If you serve 5 towns, you can have a page for each — and rank in all of them.",
        },
        {
          question: "How long before I see results from digital marketing?",
          answer:
            "Review campaigns can show results within weeks. SEO content and landing pages typically take 2–3 months to build momentum. This is a long-term growth strategy, not an overnight fix.",
        },
      ]}
      ctaHeadline="Build the Online Presence That Keeps Working While You Sleep"
      ctaSubtext="Reviews, visibility, and local reach — compounding month over month without paying for ads."
      ctaButtonText="Get a Free Quote"
      guaranteeText="We track every metric, report every month, and cut anything that isn't moving the needle. You'll always know exactly what you're getting."
    />
  );
}
