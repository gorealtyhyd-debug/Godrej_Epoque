import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import Motion from '@/components/Motion';
import { EnquiryProvider } from '@/components/Enquiry';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const sans = Jost({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-sans', display: 'swap' });

export const viewport: Viewport = { themeColor: '#4e3c30', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website', locale: 'en_IN', url: '/', siteName: SITE.name, title: SITE.title, description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1600, height: 900, alt: 'Godrej Epoque sky bridge, Neopolis Kokapet' }],
  },
  twitter: { card: 'summary_large_image', title: SITE.title, description: SITE.description, images: [SITE.ogImage] },
  icons: { icon: '/assets/godrej-logo.png', apple: '/assets/godrej-logo.png' },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  other: {
    'geo.region': SITE.address.regionCode,
    'geo.placename': 'Kokapet, Hyderabad',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://assets.mixkit.co" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <JsonLd />
      </head>
      <body className="overflow-x-clip">
        <EnquiryProvider>
          <Motion />
          {children}
        </EnquiryProvider>
      </body>
    </html>
  );
}
