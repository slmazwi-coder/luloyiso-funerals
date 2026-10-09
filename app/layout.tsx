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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
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
