import type { Metadata } from 'next'
import { Fraunces, Outfit } from 'next/font/google'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { shopConfig } from '@/lib/shop-config'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shivshambhoeshop.in'),
  title: {
    default: `${shopConfig.name} | Pooja Essentials Online`,
    template: `%s | ${shopConfig.name}`,
  },
  description: shopConfig.description,
  keywords: [
    'pooja items online',
    'rudraksha buy',
    'shivling',
    'incense sticks',
    'pooja kit',
    'yantra',
    'Shiv Shambho Shop',
  ],
  openGraph: {
    title: shopConfig.name,
    description: shopConfig.tagline,
    url: 'https://shivshambhoeshop.in',
    siteName: shopConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${fraunces.variable} ${outfit.variable} ${cormorant.variable} ${montserrat.variable} font-[family-name:var(--font-outfit)] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
