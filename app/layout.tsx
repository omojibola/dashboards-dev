import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboards studio',
  description:
    'Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
  keywords: [
    'Dashboards',
    'dashboards studio',
    'shadcn dashboards',
    'shadcn dashboard kit',
  ],
  authors: [{ name: 'Dashboards Studio' }],
  creator: 'Dashboards',
  publisher: 'Jibola Orija',
  metadataBase: new URL('https://usemockview.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usemockview.com',
    title:
      'Dashboards studio - Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
    description:
      'Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
    siteName: 'Dashboards studio',
    images: [
      {
        url: 'https://usemockview.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dashboards studio - Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Dashboards studio - Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
    description:
      'Dashboards studio - Inject beautiful, production-ready dashboard components into your project with a single command. Built on shadcn/ui.',
    creator: '@dashboardsstudio',
    images: ['https://usemockview.com/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
