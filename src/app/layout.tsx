import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/Providers'

export const metadata: Metadata = {
  title: "LionMindAI — AI Automation voor Benelux KMO's",
  description:
    "LionMindAI bouwt AI-chatbots, voice AI en automatiseringssystemen voor Belgische en Nederlandse KMO's. Boek een gratis gesprek.",
  openGraph: {
    title: 'LionMindAI — AI Automation · Benelux',
    description:
      "Van gemiste leads naar geautomatiseerde groei. Gebouwd voor KMO's in België en Nederland.",
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased noise-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
