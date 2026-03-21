import { useEffect } from "react";
import { Zap, Image, DollarSign, Mail, User, Search } from "lucide-react";
import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  pageTitle: "Portfolio Websites for Photographers and Creatives — Amped Web Studios",
  metaDescription:
    "We build portfolio websites for photographers, videographers, and creative professionals — beautiful, fast, and designed to win clients.",

  heroProps: {
    industry: "Creative & Portfolio",
    headline: "Portfolio Websites for Photographers and Creatives",
    highlightedPhrase: "Photographers and Creatives",
    subheading:
      "Your work is the product. Your website should present it with the same level of craft — clean, fast, and designed to make the right clients reach out.",
    primaryCTA: "Get a Free Quote",
    stats: [
      { value: "Fast", label: "Image Loading" },
      { value: "More", label: "Qualified Inquiries" },
      { value: "0", label: "Cluttered Layouts" },
    ],
    painPoints: [
      "Portfolio loads slowly and kills the first impression",
      "Too many images — quantity drowning quality",
      "No clear or easy way for clients to reach out",
      "Missing in local creative searches on Google",
    ],
  },

  whySection: {
    headline: "Your Portfolio Is Your Pitch — It Needs to Land",
    paragraphs: [
      "When a potential client lands on your portfolio, they're making a quick decision: does this person's work match what I need, and do they seem professional enough to hire? A well-built site answers both in seconds — and a poorly built one loses them before they scroll.",
      "The biggest mistakes creative professionals make online: too many images (quantity over quality), a slow-loading site that kills the experience, and no clear way to inquire or book. We fix all three with every portfolio site we build.",
      "We've built portfolio sites for photographers and creatives who have seen their inquiry rate significantly increase just from having a professional, fast, well-structured online presence — without changing a single photo in their portfolio.",
    ],
    challenges: [
      {
        icon: Zap,
        title: "Slow Portfolio Loading",
        body: "Nothing kills a creative first impression faster than a gallery that takes 5 seconds to load. Speed is non-negotiable when images are the product.",
      },
      {
        icon: Image,
        title: "Quantity Over Quality",
        body: "Showing 200 photos when 20 great ones would do more damage than no gallery at all. Curation is a skill — and your site needs to reflect it.",
      },
      {
        icon: Mail,
        title: "No Clear Inquiry Path",
        body: "If clients have to hunt for how to contact you, most won't. A clear, visible inquiry button on every page captures the interest before it fades.",
      },
    ],
  },

  features: [
    {
      icon: Image,
      title: "Stunning Portfolio Galleries",
      description:
        "Curated, category-organized galleries that present your best work in a clean layout — letting the images lead and nothing distract from them.",
    },
    {
      icon: Zap,
      title: "Fast Image Loading",
      description:
        "Optimized image delivery so your portfolio loads instantly — because a slow site is the one thing that can undo even the best creative work.",
    },
    {
      icon: DollarSign,
      title: "Packages & Pricing Pages",
      description:
        "Clear service packages and pricing ranges that help clients self-qualify — reducing back-and-forth and attracting the leads who already fit your budget.",
    },
    {
      icon: Mail,
      title: "Project Inquiry Forms",
      description:
        "Tailored contact forms that ask the right questions for your type of work — so you get inquiry submissions that include everything you need to respond quickly.",
    },
    {
      icon: User,
      title: "About Page That Converts",
      description:
        "A personal, authentic about page that builds connection and credibility — the page clients read right before they decide whether to reach out.",
    },
    {
      icon: Search,
      title: "Local & Niche SEO",
      description:
        "Optimized for the searches clients actually use — 'wedding photographer in [city],' 'commercial videographer near me' — so you get found by the right people.",
    },
  ],

  faqs: [
    {
      q: "Should my portfolio site be simple or complex?",
      a: "Simple. The work should be front and center. We build clean, minimal layouts that let your images or video do the talking — nothing cluttered, nothing distracting.",
    },
    {
      q: "How do I show my best work without overwhelming visitors?",
      a: "Curated galleries by category (weddings, portraits, commercial, etc.) with a limited selection of your very best work. Quality over quantity, always. We help you think through the structure.",
    },
    {
      q: "Do I need to list prices on my portfolio site?",
      a: "It depends on your business model. Photographers who list starting prices tend to get more qualified inquiries from clients who already know the budget range. We can build it either way.",
    },
    {
      q: "What's the best way to get found by people looking for photographers or videographers?",
      a: "Local SEO and niche-specific content. 'Wedding photographer in [city],' 'commercial photographer near me' — these are high-value searches we optimize for.",
    },
  ],

  ctaHeadline: "Ready for a Portfolio Site That Wins Clients?",
  ctaBody:
    "Tell us about your work and what you're looking to grow. We'll design something that fits.",
};

export default function CreativePortfolioPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return <IndustryPageTemplate data={data} />;
}
