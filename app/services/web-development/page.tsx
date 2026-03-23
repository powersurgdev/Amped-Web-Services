import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Web Development That Goes Live Fast — Amped Web Studios',
  description: 'Hand-coded websites built for speed and performance. Domain, DNS, and SSL handled for you. Live in 7–10 days with a 90+ PageSpeed score.',
  alternates: { canonical: '/services/web-development' },
  openGraph: {
    title: 'Professional Web Development That Goes Live Fast — Amped Web Studios',
    description: 'Hand-coded websites built for speed and performance. Domain, DNS, and SSL handled for you. Live in 7–10 days with a 90+ PageSpeed score.',
    url: '/services/web-development',
    images: [{ url: '/og-images/web-development.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/web-development.png'] },
};

import {
  Code2,
  Zap,
  Lock,
  Monitor,
  MapPin,
  Rocket,
  CheckSquare,
  Wrench,
  Eye,
  Globe,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      pageTitle="Professional Web Development That Goes Live Fast — Amped Web Studios"
      pageDescription="Hand-coded websites built for speed and performance. Domain, DNS, and SSL handled for you. Live in 7–10 days with a 90+ PageSpeed score."
      hero={{
        badge: "Web Development",
        headline: "Professional Web Development That Goes Live Fast",
        highlightedPhrase: "Goes Live Fast",
        subheading:
          "We don't hand you a login and wish you luck. We build it, launch it, and make sure it works — from the domain all the way to go-live.",
        primaryCTA: "Get a Free Quote",
        stats: [
          { value: "90+", label: "PageSpeed Score" },
          { value: "7–10", label: "Days to Launch" },
          { value: "0", label: "Plugins to Manage" },
        ],
        featureHighlights: [
          "Hand-coded for speed — no bloated page builders",
          "Domain, DNS, and SSL fully handled for you",
          "Cross-browser and device tested before launch",
          "Contact forms, Maps, and all launch essentials included",
        ],
      }}
      featuresHeading="What's Included in Every Build"
      features={[
        {
          icon: <Code2 className="w-6 h-6 text-primary" />,
          title: "Hand-Coded for Speed",
          description:
            "No bloated page builders or plugin stacks. Clean, optimized code written by a developer who knows what they're doing.",
        },
        {
          icon: <Zap className="w-6 h-6 text-primary" />,
          title: "90+ PageSpeed Score",
          description:
            "Sites we build routinely hit 90+ on Google PageSpeed. Fast load times mean more conversions and better Google rankings.",
        },
        {
          icon: <Lock className="w-6 h-6 text-primary" />,
          title: "Domain, DNS & SSL",
          description:
            "Domain connection, hosting setup, and SSL certificate all handled for you. Zero technical setup on your end.",
        },
        {
          icon: <Monitor className="w-6 h-6 text-primary" />,
          title: "Cross-Device Tested",
          description:
            "Tested on real browsers and devices before launch. No surprise layout breaks after go-live.",
        },
        {
          icon: <MapPin className="w-6 h-6 text-primary" />,
          title: "Contact Forms & Maps",
          description:
            "Contact forms and Google Maps integration included — the essentials that turn visitors into phone calls.",
        },
        {
          icon: <Globe className="w-6 h-6 text-primary" />,
          title: "Live in 7–10 Days",
          description:
            "Most sites are fully built, tested, and live within 7–10 business days of design approval. No drawn-out timelines.",
        },
      ]}
      problems={[
        "WordPress sites clog up with plugins that slow everything down",
        "Slow load times cause more than half your visitors to leave before the page even loads",
        "Plugin conflicts and expired SSL certs take sites offline with zero warning",
        "Most agencies hand you a login and leave the technical mess for you to manage",
      ]}
      solutions={[
        "Hand-coded site with zero plugins — nothing to conflict, nothing to break",
        "90+ PageSpeed score at launch, because fast sites win customers",
        "We handle domain, hosting, SSL, and every technical detail at go-live",
        "Full managed launch from day one — you don't touch any of it",
      ]}
      processHeading="How Development Works"
      steps={[
        {
          icon: <CheckSquare className="w-6 h-6 text-primary" />,
          title: "Approved Design",
          description:
            "Once your design is signed off, we move straight into development — no delays.",
        },
        {
          icon: <Wrench className="w-6 h-6 text-primary" />,
          title: "Build & QA",
          description:
            "We build every page, test across browsers and devices, and check load times before you ever see it.",
        },
        {
          icon: <Eye className="w-6 h-6 text-primary" />,
          title: "Review & Feedback",
          description:
            "We share a staging link so you can click through everything before it goes live.",
        },
        {
          icon: <Rocket className="w-6 h-6 text-primary" />,
          title: "Go Live",
          description:
            "We handle the domain, hosting setup, and launch. You get an email when it's live.",
        },
      ]}
      faqs={[
        {
          question: "How fast will my site load?",
          answer:
            "Very fast. We write clean, optimized code without the overhead of WordPress plugins or page builders. Sites we build typically score 90+ on Google PageSpeed.",
        },
        {
          question: "Do you use WordPress?",
          answer:
            "We build with modern web technologies — not WordPress. This means better performance, fewer security risks, and no plugin headaches.",
        },
        {
          question: "What about domain and hosting?",
          answer:
            "We handle it all. Domain connection, hosting setup, and SSL are included in your project. You don't need to touch any of that.",
        },
        {
          question: "How long does development take?",
          answer:
            "Most sites are built and ready for review within 7–10 business days of design approval.",
        },
      ]}
      ctaHeadline="Let's Build Something Fast, Clean, and Ready to Launch"
      ctaSubtext="No hand-holding, no tech headaches. We handle the build, the launch, and everything in between."
      ctaButtonText="Get a Free Quote"
      guaranteeText="If your site doesn't score 85+ on Google PageSpeed at launch, we keep working until it does. No shortcuts, no excuses — ever."
    />
  );
}
