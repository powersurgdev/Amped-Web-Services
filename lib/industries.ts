export const industries = [
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Contractors & Trades", href: "/industries/contractors" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Healthcare & Wellness", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Beauty & Personal Care", href: "/industries/beauty-wellness" },
  { label: "Auto Services", href: "/industries/auto-services" },
  { label: "Creative Professionals", href: "/industries/creative-portfolio" },
  { label: "Legal & Professional", href: "/industries/legal-professional" },
  { label: "Fitness & Sports", href: "/industries/fitness-sports" },
] as const;

export type IndustryLabel = (typeof industries)[number]["label"];

export const industryLabels: readonly IndustryLabel[] = industries.map((i) => i.label);
