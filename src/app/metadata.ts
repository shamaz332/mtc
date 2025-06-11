import { Metadata } from 'next';

export const siteConfig = {
  name: 'MTC Home Kitchens',
  description: 'Design and order your new kitchen online today. Bespoke & Made to Measure Handmade Kitchen Design.',
  url: 'https://mtc-psi.vercel.app/',
  ogImage: '/assets/hero.png',
  links: {
    facebook: 'https://mtc-psi.vercel.app/',
    twitter: 'https://mtc-psi.vercel.app/',
    instagram: 'https://mtc-psi.vercel.app/',
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'kitchen design',
    'handmade kitchen',
    'bespoke kitchen',
    'kitchen cabinets',
    'kitchen renovation',
    'custom kitchen',
    'kitchen furniture',
    'kitchen planning',
  ],
  authors: [
    {
      name: 'MTC Home Kitchens',
      url: siteConfig.url,
    },
  ],
  creator: 'MTC Home Kitchens',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@mtchomekitchens',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}; 