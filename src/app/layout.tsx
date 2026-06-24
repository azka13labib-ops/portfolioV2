import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LoadingScreen } from '@/components/layout/LoadingScreen'
import './globals.css'

const pixelFont = localFont({
  src: '../../public/fonts/minecrafter/Minecrafter.Reg.ttf',
  variable: '--font-pixel',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Portfolio', // TODO: ganti nama
  description: 'Personal portfolio', // TODO: ganti deskripsi
}

export const viewport = {
  themeColor: '#ff6600',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id' className={pixelFont.variable}>
      <body className='bg-mc-void antialiased'>
        <LoadingScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
