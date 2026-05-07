import type { Metadata } from 'next';
import Script from 'next/script';
import RawApiLeadForm from '@/components/RawApiLeadForm';

export const metadata: Metadata = {
  title: 'Widget Test (Private)',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': -1,
      'max-image-preview': 'none',
      'max-video-preview': -1,
    },
  },
};

const ORG_ID = '089cf882-9f4b-472d-8d28-e46a829e9337';
const WIDGET_SRC = 'https://devv.taskaroo.com/website-leads/widget.js';
const TOKEN = process.env.NEXT_PUBLIC_TASKAROO_LEADS_TOKEN ?? 'YOUR_TOKEN_HERE';
const ACCENT_COLOR = '#1a91ee';

export default function WidgetTestPage() {
  const tokenIsPlaceholder = TOKEN === 'YOUR_TOKEN_HERE';

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Private staging page · noindex</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Taskaroo Website Leads — Widget Test</h1>
          <p className="text-muted-foreground">
            This page exists only to mock up and test the Taskaroo Website Leads embed. It is not linked from anywhere on the site, is excluded from the sitemap, and is disallowed in robots.txt.
          </p>
        </div>

        <div className="rounded-md border border-border bg-muted/40 p-4 text-sm text-muted-foreground space-y-1">
          <div><span className="font-medium text-foreground">Org ID:</span> {ORG_ID}</div>
          <div><span className="font-medium text-foreground">Widget source:</span> {WIDGET_SRC}</div>
          <div><span className="font-medium text-foreground">Theme:</span> light</div>
          <div><span className="font-medium text-foreground">Accent color:</span> {ACCENT_COLOR} (brand blue, applied via data-accent-color)</div>
          <div><span className="font-medium text-foreground">Fields:</span> name, email, phone, notes</div>
          <div><span className="font-medium text-foreground">Allowed origin (must match):</span> http://localhost:3001</div>
          <div>
            <span className="font-medium text-foreground">Token:</span>{' '}
            {tokenIsPlaceholder ? (
              <span className="text-amber-600 dark:text-amber-400">YOUR_TOKEN_HERE — set NEXT_PUBLIC_TASKAROO_LEADS_TOKEN in .env.local and restart dev server before submitting</span>
            ) : (
              <span>configured via env var</span>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">JS Widget</h2>
            <span className="text-xs text-muted-foreground">Hosted shadow-DOM widget · POSTs to api-dev.taskaroo.com</span>
          </div>
          <div className="rounded-lg border border-border p-6 bg-card">
            <div id="taskaroo-website-leads" className="mx-auto w-full max-w-[520px]" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">RawAPI1</h2>
            <span className="text-xs text-muted-foreground">Custom form · POSTs directly to /website-leads/submit</span>
          </div>
          <div className="rounded-lg border border-border p-6 bg-card">
            <RawApiLeadForm />
          </div>
        </div>
      </div>


      <Script
        src={WIDGET_SRC}
        strategy="afterInteractive"
        data-target="#taskaroo-website-leads"
        data-org-id={ORG_ID}
        data-token={TOKEN}
        data-theme="light"
        data-accent-color={ACCENT_COLOR}
        data-fields="name,email,phone,notes"
        data-button-label="Request service"
      />
    </main>
  );
}
