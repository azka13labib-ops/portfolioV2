import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from '@/components/layout/Navbar'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import './globals.css'

const pixelFont = localFont({
  src: '../../public/fonts/minecrafter/Minecrafter.Reg.ttf',
  variable: '--font-pixel',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-minecraft-azka13labib-ops-projects.vercel.app'),
  title: {
    default: 'Azka Labib — Fullstack Developer',
    template: '%s | Azka Labib',
  },
  description: 'Fullstack Developer spesialis Next.js, Laravel, dan Kotlin. Membangun web & mobile app dari nol.',
  keywords: [
    'fullstack developer',
    'next.js developer',
    'laravel developer',
    'kotlin developer',
    'web developer indonesia',
    'mobile developer',
    'azka labib',
    'supabase',
    'flutter developer',
  ],
  authors: [{ name: 'Azka Labib', url: 'https://portfolio-minecraft-azka13labib-ops-projects.vercel.app' }],
  creator: 'Azka Labib',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://portfolio-minecraft-azka13labib-ops-projects.vercel.app',
    siteName: 'Azka Labib Portfolio',
    title: 'Azka Labib — Fullstack Developer',
    description: 'Fullstack Developer spesialis Next.js, Laravel, dan Kotlin. Membangun web & mobile app dari nol.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Azka Labib — Fullstack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azka Labib — Fullstack Developer',
    description: 'Fullstack Developer spesialis Next.js, Laravel, dan Kotlin. Membangun web & mobile app dari nol.',
    images: ['/og-image.png'],
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
  verification: {
    // google: '', // isi nanti setelah daftar Google Search Console
  },
}

export const viewport = {
  themeColor: '#ff6600',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id' className={`${pixelFont.variable} scroll-smooth`}>
      <body className='bg-mc-void antialiased'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Azka Labib',
              url: 'https://portfolio-minecraft-azka13labib-ops-projects.vercel.app',
              jobTitle: 'Fullstack Developer',
              knowsAbout: ['Next.js', 'Laravel', 'Kotlin', 'TypeScript', 'Supabase', 'Flutter'],
              sameAs: [
                'https://github.com/azka13labib-ops',
                'https://instagram.com/askagantengbgttt'
              ],
            }),
          }}
        />
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
