import { track } from '@vercel/analytics';

type AllowedValue = string | number | boolean | null;
type EventProps = Record<string, AllowedValue>;

export function trackEvent(name: string, props?: EventProps) {
  try {
    track(name, props);
  } catch {
    // Never let analytics failures break the UI
  }
}

export type CtaLocation =
  | 'header_desktop'
  | 'header_mobile'
  | 'hero'
  | 'cta_strip'
  | 'blog_post_footer'
  | 'pricing_footer'
  | 'portfolio_page_top'
  | 'portfolio_page_bottom'
  | 'services_page_top'
  | 'services_page_bottom'
  | 'industries_page_top'
  | 'industries_page_bottom'
  | 'industry_detail_hero'
  | 'industry_detail_footer';

export function trackCtaClick(args: {
  location: CtaLocation | string;
  label: string;
  destination: string;
}) {
  const page = typeof window !== 'undefined' ? window.location.pathname : null;
  trackEvent('cta_click', {
    location: args.location,
    label: args.label.slice(0, 100),
    destination: args.destination,
    page,
  });
}
