import {
  FileText,
  MapPin,
  Search,
  BarChart2,
  ShieldCheck,
  TrendingUp,
  ScanSearch,
  Settings,
  RefreshCw,
  Star,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function SeoLocalSearchPage() {
  return (
    <ServicePageTemplate
      pageTitle="Local SEO That Gets You Found on Google — Amped Web Studios"
      pageDescription="Rank in Google's local Map Pack for your service area. On-page SEO, Google Business Profile optimization, and monthly reporting included."
      hero={{
        badge: "SEO & Local Search",
        headline: "Local SEO That Gets You Found on Google",
        highlightedPhrase: "Gets You Found",
        subheading:
          "When someone in your area searches for what you do, you should be the first result they see. We make that happen.",
        primaryCTA: "Get a Free Quote",
        stats: [
          { value: "60–90", label: "Days to Results" },
          { value: "#1", label: "Goal: Map Pack" },
          { value: "100%", label: "White-Hat Only" },
        ],
        featureHighlights: [
          "On-page SEO — titles, headings, and schema markup",
          "Google Business Profile setup and optimization",
          "Local keyword targeting for your service area",
          "Monthly reporting so you see the progress",
        ],
      }}
      featuresHeading="What's Included in Every SEO Campaign"
      features={[
        {
          icon: FileText,
          title: "On-Page SEO",
          description:
            "Titles, headings, meta descriptions, and schema markup updated across every key page — the foundation Google ranks you on.",
        },
        {
          icon: MapPin,
          title: "Google Business Profile",
          description:
            "Full GBP setup and optimization — the single most important factor for showing up in Google's local Map Pack.",
        },
        {
          icon: Search,
          title: "Local Keyword Targeting",
          description:
            "We find what your customers are actually searching and build your content strategy around those high-intent terms.",
        },
        {
          icon: BarChart2,
          title: "Monthly Reporting",
          description:
            "Clear monthly reports showing ranking movement, traffic changes, and lead activity. You always know what's working.",
        },
        {
          icon: ShieldCheck,
          title: "White-Hat Only",
          description:
            "Sustainable, ethical SEO — no shortcuts that get your site penalized. Rankings that stick and keep growing.",
        },
        {
          icon: TrendingUp,
          title: "Ongoing Optimization",
          description:
            "SEO isn't one-and-done. We monitor, adjust, and push your rankings higher month over month.",
        },
      ]}
      problems={[
        "Your business doesn't appear on the first page — or the map — when locals search for what you do",
        "Competitors with worse services are ranking above you because their SEO is stronger",
        "Your Google Business Profile is unclaimed or unoptimized, costing you local visibility",
        "You're paying for ads because organic search isn't sending you anything",
      ]}
      solutions={[
        "Rank in Google's local Map Pack for high-intent searches in your service area",
        "On-page SEO that targets exactly what your customers are typing into Google",
        "Google Business Profile fully set up, verified, and optimized for local results",
        "100% white-hat — no shortcuts that can get your site penalized",
      ]}
      processHeading="How Local SEO Works"
      steps={[
        {
          icon: ScanSearch,
          title: "SEO Audit",
          description:
            "We analyze your current rankings, site structure, and what keywords your customers are actually searching.",
        },
        {
          icon: Settings,
          title: "On-Page Optimization",
          description:
            "We update your site structure, content, and technical SEO to align with what Google is looking for.",
        },
        {
          icon: Star,
          title: "Google Business Profile",
          description:
            "We fully optimize your GBP listing — the single most important thing for showing up in local map results.",
        },
        {
          icon: RefreshCw,
          title: "Ongoing Growth",
          description:
            "SEO isn't one-and-done. We monitor, adjust, and keep pushing you up in rankings month over month.",
        },
      ]}
      faqs={[
        {
          question: "How long does SEO take to work?",
          answer:
            "Most businesses start seeing meaningful movement in 60–90 days. Local SEO often moves faster than national SEO because the competition is more defined.",
        },
        {
          question: "Do I need SEO if I already have a website?",
          answer:
            "If people can't find you on Google, your website isn't doing much. SEO is what makes your site actually discoverable.",
        },
        {
          question: "What's a Google Business Profile and why does it matter?",
          answer:
            "It's the listing that shows up on Google Maps when someone searches for businesses like yours nearby. An optimized GBP is often the fastest way to get more calls from local customers.",
        },
        {
          question: "Do you guarantee first-page rankings?",
          answer:
            "No reputable SEO provider does. We focus on sustainable, ethical SEO practices that build lasting rankings — not shortcuts that can get your site penalized.",
        },
        {
          question: "Is SEO included in my website package?",
          answer:
            "Basic on-page SEO is included in all our website builds. Advanced local SEO campaigns are a separate ongoing service.",
        },
      ]}
      ctaHeadline="Start Showing Up Where Your Customers Are Looking"
      ctaSubtext="Local SEO compounds over time. The sooner you start, the sooner you own the first page in your area."
      ctaButtonText="Get a Free Quote"
      guaranteeText="We only use ethical, white-hat SEO practices. No shortcuts that can get your site penalized — ever. Sustainable rankings built to last."
    />
  );
}
