import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./metadata";

const roboto = Roboto({
  weight: ['400', '700'], // Regular and Bold weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome CDN for icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
      </body>
    </html>
  );
}
