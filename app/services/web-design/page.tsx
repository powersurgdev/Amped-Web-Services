import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Website Design for Small Businesses — Amped Web Studios',
  description: 'We design custom websites built from scratch — no templates, no page builders. Mobile-first, conversion-focused, and ready in 5–7 days.',
  alternates: { canonical: '/services/web-design' },
  openGraph: {
    title: 'Custom Website Design for Small Businesses — Amped Web Studios',
    description: 'We design custom websites built from scratch — no templates, no page builders. Mobile-first, conversion-focused, and ready in 5–7 days.',
    url: '/services/web-design',
    images: [{ url: '/og-images/web-design.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/web-design.png'] },
};

import {
  Palette,
  Smartphone,
  Paintbrush,
  Target,
  Clock,
  ShieldCheck,
  MessageSquare,
  Layers,
  CheckSquare,
  Rocket,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDesignPage() {
  return (
    <ServicePageTemplate
      pageTitle="Custom Website Design for Small Businesses — Amped Web Studios"
      pageDescription="We design custom websites built from scratch — no templates, no page builders. Mobile-first, conversion-focused, and ready in 5–7 days."
      hero={{
        badge: "Web Design",
        headline: "Custom Website Design for Small Businesses",
        highlightedPhrase: "Custom Website",
        subheading:
          "Your website is often the first thing a potential customer sees. We make sure it builds trust, reflects your brand, and turns visitors into leads — from day one.",
        primaryCTA: "Get a Free Quote",
        stats: [
          { value: "100%", label: "Custom Built" },
          { value: "5–7", label: "Days to Design" },
          { value: "0", label: "Templates Used" },
        ],
        featureHighlights: [
          "Custom design built from scratch — no templates",
          "Mobile-first layout across every screen size",
          "Brand-aligned colors, typography, and identity",
          "Conversion-focused structure with clear CTAs",
        ],
      }}
      featuresHeading="What You Get With Every Design"
      features={[
        {
          icon: <Palette className="w-6 h-6 text-primary" />,
          title: "100% Custom Design",
          description:
            "Built from scratch for your business — no templates, no recycled layouts. Your site looks like you, not a theme.",
        },
        {
          icon: <Smartphone className="w-6 h-6 text-primary" />,
          title: "Mobile-First Layout",
          description:
            "Every design looks great on phones, tablets, and desktops. Most of your visitors are on mobile — we design for that first.",
        },
        {
          icon: <Paintbrush className="w-6 h-6 text-primary" />,
          title: "Brand-Aligned Identity",
          description:
            "Colors, fonts, and visual style that match your brand. A consistent identity builds trust before visitors read a single word.",
        },
        {
          icon: <Target className="w-6 h-6 text-primary" />,
          title: "Conversion-Focused Structure",
          description:
            "Pages structured to guide visitors toward calling, booking, or reaching out. Clear CTAs, no dead ends, no confusion.",
        },
        {
          icon: <Clock className="w-6 h-6 text-primary" />,
          title: "Fast Turnaround",
          description:
            "Design concepts delivered in 5–7 business days. Revisions are part of the process — we work until it's exactly right.",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-primary" />,
          title: "You Own Everything",
          description:
            "Your design, your domain, your content. No lock-in to platforms or proprietary systems you can't control.",
        },
      ]}
      problems={[
        "Generic templates make your business look like everyone else in your market",
        "Cluttered, confusing layouts lose visitors in the first 5 seconds",
        "A site that looks bad on mobile sends leads straight to a competitor",
        "No clear calls-to-action means traffic arrives but goes nowhere",
      ]}
      solutions={[
        "100% custom design built specifically for your business and audience",
        "Clean, structured layouts that communicate what you do immediately",
        "Mobile-first design that works beautifully on every screen",
        "Conversion-focused CTAs placed exactly where visitors are ready to act",
      ]}
      processHeading="How the Design Process Works"
      steps={[
        {
          icon: <MessageSquare className="w-6 h-6 text-primary" />,
          title: "Discovery Call",
          description:
            "We learn your business, goals, and what you want customers to feel when they land on your site.",
        },
        {
          icon: <Layers className="w-6 h-6 text-primary" />,
          title: "Design Concepts",
          description:
            "We build out a design direction and walk you through it — your feedback shapes the final look.",
        },
        {
          icon: <CheckSquare className="w-6 h-6 text-primary" />,
          title: "Revisions & Approval",
          description:
            "We refine until it's exactly right. You approve before anything goes live.",
        },
        {
          icon: <Rocket className="w-6 h-6 text-primary" />,
          title: "Launch",
          description:
            "We handle the technical side and get your new site in front of customers.",
        },
      ]}
      faqs={[
        {
          question: "Do I have to pick from templates?",
          answer:
            "No. Every design we build is custom — created specifically for your business, your brand, and your customers. We don't use page builder templates.",
        },
        {
          question: "How long does the design process take?",
          answer:
            "Most designs are ready for review within 5–7 business days. Revisions and final approval typically add another few days.",
        },
        {
          question: "What if I don't like the first design?",
          answer:
            "That's what revisions are for. We work with you until the design is something you're genuinely proud of.",
        },
        {
          question: "Do you design logos too?",
          answer:
            "Yes, as an add-on. If you need a logo or want to refresh your current one, we can handle that as part of your project.",
        },
      ]}
      ctaHeadline="Ready to Finally Have a Website You're Proud Of?"
      ctaSubtext="Most businesses we work with wish they'd done this sooner. Let's build something that actually works for you."
      ctaButtonText="Get a Free Quote"
      guaranteeText="We won't call the project done until you're genuinely happy with the result. If we can't get your design right, we keep working — no extra charge."
    />
  );
}
