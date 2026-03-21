import {
  Palette,
  Zap,
  FileText,
  Smartphone,
  Search,
  Globe,
  ScanSearch,
  Paintbrush,
  AlignLeft,
  Rocket,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function WebsiteRefreshPage() {
  return (
    <ServicePageTemplate
      pageTitle="Website Redesign That Modernizes and Converts — Amped Web Studios"
      pageDescription="Is your site slow, outdated, or not generating leads? We rebuild it from the ground up — faster, modern, and conversion-focused."
      hero={{
        badge: "Website Refresh",
        headline: "Website Redesign That Modernizes and Converts",
        highlightedPhrase: "Modernizes and Converts",
        subheading:
          "Your site might be live, but is it working? If it's slow, outdated, or not generating leads, a refresh can change that fast.",
        primaryCTA: "Get a Free Site Review",
        stats: [
          { value: "3x", label: "Avg. Speed Gain" },
          { value: "0", label: "SEO Disruption" },
          { value: "Fast", label: "Turnaround" },
        ],
        featureHighlights: [
          "Complete visual redesign — new layout and type system",
          "Performance optimization for Core Web Vitals",
          "Content restructuring to improve conversions",
          "Mobile experience overhaul if needed",
        ],
      }}
      featuresHeading="What a Refresh Delivers"
      features={[
        {
          icon: Palette,
          title: "Full Visual Redesign",
          description:
            "New layout, typography, and color system that looks current, credible, and professional — not like it was built in 2014.",
        },
        {
          icon: Zap,
          title: "Performance Overhaul",
          description:
            "Rebuilt for speed, targeting Core Web Vitals. Faster load times mean more conversions and better Google rankings.",
        },
        {
          icon: FileText,
          title: "Content Restructure",
          description:
            "We rewrite and reorganize your content to drive more inquiries from the same traffic you're already getting.",
        },
        {
          icon: Smartphone,
          title: "Mobile Experience Fix",
          description:
            "If your current site breaks or looks cramped on phones, we fix it completely — mobile-first from the ground up.",
        },
        {
          icon: Search,
          title: "SEO Preservation",
          description:
            "Existing URLs preserved and redirects set up so you don't lose rankings you've already built. Zero disruption.",
        },
        {
          icon: Globe,
          title: "Same Domain, New Site",
          description:
            "Goes live on your existing domain — no address change, no broken links, no confusion for your current customers.",
        },
      ]}
      problems={[
        "An outdated design signals to visitors that your business is behind the times",
        "Slow load times cause visitors to leave before they've read a single word",
        "A site that doesn't work on mobile is invisible to most of your audience",
        "Weak page structure means traffic arrives, looks around, and leaves without converting",
      ]}
      solutions={[
        "Modern redesign that builds trust and looks competitive in your market",
        "Rebuilt for speed — 3x faster load times on average",
        "Mobile-first from the ground up — every visitor gets a great experience",
        "Conversion-focused content structure that tells visitors exactly what to do next",
      ]}
      processHeading="How the Refresh Process Works"
      steps={[
        {
          icon: ScanSearch,
          title: "Site Audit",
          description:
            "We review your current site's design, speed, content, and conversion rate — and identify exactly what's holding it back.",
        },
        {
          icon: Paintbrush,
          title: "Redesign & Rebuild",
          description:
            "We modernize the look and rebuild the structure, keeping the content that works and improving what doesn't.",
        },
        {
          icon: AlignLeft,
          title: "Content & Conversion Pass",
          description:
            "We sharpen your headlines, CTAs, and page flow so visitors know exactly what to do next.",
        },
        {
          icon: Rocket,
          title: "Launch",
          description:
            "New site goes live on your existing domain — no change in URL, no SEO disruption.",
        },
      ]}
      faqs={[
        {
          question: "Will a refresh hurt my SEO?",
          answer:
            "Not if done right. We preserve your existing URLs and redirect structure, so you keep the rankings you've already built.",
        },
        {
          question: "Can you keep some of my existing content?",
          answer:
            "Yes. If parts of your site are working, we'll keep and improve them. A refresh isn't about starting over — it's about fixing what's broken.",
        },
        {
          question: "How is this different from building a new site?",
          answer:
            "A refresh is typically faster and focuses on modernizing and improving an existing site. A new build is for businesses starting from scratch or needing a completely different structure.",
        },
        {
          question: "My site was built on Wix/Squarespace/WordPress. Can you refresh it?",
          answer:
            "We'll rebuild it in our stack — which is faster and more maintainable. The design and content carry over; the platform changes.",
        },
      ]}
      ctaHeadline="Your Current Website Is Costing You More Than a Refresh Would"
      ctaSubtext="Every month with an outdated site is a month of lost leads. Let's fix that — fast."
      ctaButtonText="Get a Free Site Review"
      guaranteeText="We preserve your existing URLs and rankings as part of every refresh. If we disrupt your SEO in the process, we fix it — on us."
    />
  );
}
