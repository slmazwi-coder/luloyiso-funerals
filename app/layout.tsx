import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luloyiso Funeral Services | Matatiele | Funeral Services, Tombstones & Burial Scheme',
  description: 'Luloyiso Funeral Services provides dignified funeral services, tombstones and burial scheme support in Matatiele and surrounding communities.',
  generator: 'v0.app',
  openGraph: {
    title: 'Luloyiso Funeral Services | Matatiele',
    description: 'Dignified farewells, with care you can trust.',
    type: 'website',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1-z99cr5wwhbiuJO6XWcv5NVSX4aMSY9.jpg'],
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

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
