import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Amped Web Studios - Web Design, SEO & Digital Marketing',
  description: 'Amped Web Studios builds fast, modern websites with hosting included—so you can focus on running your business while your site does the selling.',
  metadataBase: new URL('https://ampedwebstudios.com'),
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Amped Web Studios',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
