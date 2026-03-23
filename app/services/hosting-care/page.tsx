import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Website Hosting With Zero Headaches — Amped Web Studios',
  description: '99.9% uptime, 24/7 monitoring, automatic backups, and content updates handled for you. One flat monthly fee — no surprises.',
  alternates: { canonical: '/services/hosting-care' },
  openGraph: {
    title: 'Managed Website Hosting With Zero Headaches — Amped Web Studios',
    description: '99.9% uptime, 24/7 monitoring, automatic backups, and content updates handled for you. One flat monthly fee — no surprises.',
    url: '/services/hosting-care',
    images: [{ url: '/og-images/hosting-care.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-images/hosting-care.png'] },
};

import {
  Server,
  Eye,
  HardDrive,
  ShieldCheck,
  Edit,
  Wrench,
  Rocket,
  Bell,
  MessageSquare,
  Settings,
} from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function HostingCarePage() {
  return (
    <ServicePageTemplate
      pageTitle="Managed Website Hosting With Zero Headaches — Amped Web Studios"
      pageDescription="99.9% uptime, 24/7 monitoring, automatic backups, and content updates handled for you. One flat monthly fee — no surprises."
      hero={{
        badge: "Hosting & Care",
        headline: "Managed Website Hosting With Zero Headaches",
        highlightedPhrase: "Zero Headaches",
        subheading:
          "Your website shouldn't require a tech degree to keep it running. We handle all of it — hosting, updates, backups, security — so you never have to think about it.",
        primaryCTA: "See Hosting Plans",
        stats: [
          { value: "99.9%", label: "Uptime Guaranteed" },
          { value: "24/7", label: "Monitoring" },
          { value: "1–2", label: "Days for Updates" },
        ],
        featureHighlights: [
          "Managed hosting with 99.9% uptime guarantee",
          "Automatic backups — never lose your site",
          "Security monitoring and malware protection",
          "Content updates handled for you on request",
        ],
      }}
      featuresHeading="What's Included Every Month"
      features={[
        {
          icon: <Server className="w-6 h-6 text-primary" />,
          title: "99.9% Uptime Hosting",
          description:
            "Reliable managed hosting on fast infrastructure. Your site stays up — and we back it with monthly uptime reporting.",
        },
        {
          icon: <Eye className="w-6 h-6 text-primary" />,
          title: "24/7 Monitoring",
          description:
            "We're watching your site around the clock. We get the alert before you do — and fix it before it becomes your problem.",
        },
        {
          icon: <HardDrive className="w-6 h-6 text-primary" />,
          title: "Automatic Backups",
          description:
            "Daily backups stored securely off-site. If anything ever goes wrong, we can restore your site fast — no data loss.",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-primary" />,
          title: "Security & SSL",
          description:
            "Malware scanning, SSL certificate renewal, and security patches handled continuously. Your site stays protected.",
        },
        {
          icon: <Edit className="w-6 h-6 text-primary" />,
          title: "Content Updates",
          description:
            "Need new hours, a fresh photo, or an updated service? Email us — most updates are done within 1–2 business days.",
        },
        {
          icon: <Wrench className="w-6 h-6 text-primary" />,
          title: "No Tech Headaches",
          description:
            "No plugin updates to run, no logins to remember, no technical surprises. We handle the backend entirely.",
        },
      ]}
      problems={[
        "Your site goes down and you find out from a customer — not from your host",
        "Expired SSL certificates kill visitor trust and get flagged by browsers overnight",
        "Plugin updates on WordPress sites break things with zero warning",
        "No backups means a hack or crash wipes out everything you've built",
      ]}
      solutions={[
        "24/7 monitoring so we know about problems before you or your customers do",
        "SSL renewal handled automatically — your site is always secure and trusted",
        "No plugins, no conflicts — clean code that just works month after month",
        "Daily backups stored off-site — one click to restore if anything ever goes wrong",
      ]}
      processHeading="How Hosting & Care Works"
      steps={[
        {
          icon: <Rocket className="w-6 h-6 text-primary" />,
          title: "Site Goes Live",
          description:
            "Once your site launches, your hosting plan starts. No separate accounts to set up — it's all handled from day one.",
        },
        {
          icon: <Bell className="w-6 h-6 text-primary" />,
          title: "We Monitor",
          description:
            "We watch your site around the clock for downtime, security threats, and performance drops.",
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-primary" />,
          title: "You Request Updates",
          description:
            "Need a new page, updated hours, or fresh photos? Just email us. Most updates are done within 1–2 business days.",
        },
        {
          icon: <Settings className="w-6 h-6 text-primary" />,
          title: "We Handle the Rest",
          description:
            "Backups, SSL renewal, software updates — all handled on our end without you lifting a finger.",
        },
      ]}
      faqs={[
        {
          question: "What happens if my site goes down?",
          answer:
            "We get alerted immediately and work to get it back up. You don't have to figure out what went wrong — that's our job.",
        },
        {
          question: "Can I make content updates myself?",
          answer:
            "Yes, but you don't have to. Content updates are included in your care plan. Just send us what you need changed and we'll handle it.",
        },
        {
          question: "What if I already have hosting somewhere else?",
          answer:
            "We prefer to manage hosting ourselves so we can guarantee performance and response time. If you want to migrate, we handle that too.",
        },
        {
          question: "Is there a contract?",
          answer:
            "No long-term contracts. Hosting is billed monthly and you can cancel anytime with 30 days notice.",
        },
      ]}
      ctaHeadline="Set It and Actually Forget It"
      ctaSubtext="One flat monthly fee. We handle everything technical. You focus on running your business."
      ctaButtonText="See Hosting Plans"
      guaranteeText="If your site goes down and we don't respond within 4 hours, that month is on us. We stand behind our uptime promise — no fine print."
    />
  );
}
