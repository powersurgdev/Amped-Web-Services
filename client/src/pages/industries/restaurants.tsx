import { useEffect } from "react";
import { UtensilsCrossed, CalendarCheck, MapPin, Image, ShoppingBag, Share2 } from "lucide-react";
import IndustryPageTemplate, { type IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  pageTitle: "Restaurant Website Design That Fills Your Tables — Amped Web Studios",
  metaDescription:
    "We build websites for restaurants and food businesses with online menus, reservations, and a design that makes people hungry before they walk in.",

  heroProps: {
    industry: "Restaurants",
    headline: "Restaurant Website Design That Fills Your Tables",
    highlightedPhrase: "Fills Your Tables",
    subheading:
      "People decide where to eat based on what they see online. We make sure your restaurant's website looks as good as your food tastes.",
    primaryCTA: "Get a Free Quote",
    stats: [
      { value: "Online", label: "Menu Always Current" },
      { value: "1-tap", label: "Reservation Booking" },
      { value: "24/7", label: "Customers Find You" },
    ],
    painPoints: [
      "Menu is outdated or missing from your site",
      "Reservation booking requires a phone call",
      "No photo gallery showing what you actually serve",
      "Yelp controls your listing — your own site doesn't",
    ],
  },

  whySection: {
    headline: "The First Bite Is with the Eyes — Online",
    paragraphs: [
      "Most people look up a restaurant online before they decide to go. If your website is hard to navigate, doesn't show the menu clearly, or doesn't have photos that make the food look appealing — they'll pick somewhere else. That decision happens before they ever walk through your door.",
      "A great restaurant website does a few things really well: it shows the menu, gives hours and location instantly, makes reservations easy, and makes the food look so good that people are already excited before they arrive.",
      "We build sites for restaurants that do all of that — without the bloat of expensive platforms, surprise fees, or tools you'll never actually use.",
    ],
    challenges: [
      {
        icon: UtensilsCrossed,
        title: "Outdated or Missing Menu",
        body: "An out-of-date menu is worse than no menu. It creates confusion and erodes trust before customers even step in.",
      },
      {
        icon: CalendarCheck,
        title: "Phone-Only Reservations",
        body: "If booking a table requires calling during business hours, you're losing reservations to restaurants that let people book at midnight from their couch.",
      },
      {
        icon: Image,
        title: "No Visual Appetite",
        body: "Without a food photography gallery, your website gives people no reason to choose you over the competitor down the street with better photos.",
      },
    ],
  },

  features: [
    {
      icon: UtensilsCrossed,
      title: "Always-Current Online Menu",
      description:
        "A mobile-friendly menu that's easy to browse and simple to update — so the food people see online matches exactly what you're actually serving.",
    },
    {
      icon: CalendarCheck,
      title: "Reservation & Booking Integration",
      description:
        "OpenTable, Resy, or your preferred platform embedded directly so visitors can book without leaving your site — increasing completions dramatically.",
    },
    {
      icon: MapPin,
      title: "Location & Hours Front and Center",
      description:
        "Hours, address, and an embedded map where every visitor expects to find them — within 10 seconds of landing on your site.",
    },
    {
      icon: Image,
      title: "Food Photography Gallery",
      description:
        "A curated gallery that makes your dishes look irresistible — building appetite and emotional buy-in before anyone reads a single menu description.",
    },
    {
      icon: ShoppingBag,
      title: "Online Ordering Integration",
      description:
        "If you offer takeout or delivery, we connect your preferred ordering platform directly to your site so hungry customers can order without friction.",
    },
    {
      icon: Share2,
      title: "Social & Events Section",
      description:
        "Promote specials, seasonal menus, and upcoming events directly on your site — keeping regulars engaged and giving new visitors a reason to come back.",
    },
  ],

  faqs: [
    {
      q: "How do I keep my menu updated on the site?",
      a: "We build your menu so it's easy to update — you can email us changes and we'll handle it, or we can give you edit access to the menu section specifically.",
    },
    {
      q: "Can you integrate with OpenTable or Resy?",
      a: "Yes. If you use a reservation system, we'll embed it directly into your site so visitors can book without leaving the page.",
    },
    {
      q: "What if I don't have professional food photos?",
      a: "Great phone photos in good lighting work fine. We'll lay them out in a way that looks intentional and appetizing. As you get better photos, we can always update the gallery.",
    },
    {
      q: "Do I need my own website if I'm already on Yelp and Google?",
      a: "Yes. Third-party platforms control your listing — they can remove it, change policies, or show your competitors next to you. Your own website is the one place online you fully control.",
    },
  ],

  ctaHeadline: "Ready for a Site That Brings Diners Through the Door?",
  ctaBody:
    "Tell us about your restaurant. We'll put together a plan and pricing that makes sense.",
};

export default function RestaurantsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return <IndustryPageTemplate data={data} />;
}
