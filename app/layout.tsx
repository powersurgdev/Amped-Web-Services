import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amped Web Studios - Web Design, SEO & Digital Marketing',
  description: 'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    siteName: 'Amped Web Studios',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KSD74SCF6T" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KSD74SCF6T');`}
        </Script>
        <Analytics />
      </body>
    </html>
  );
}
