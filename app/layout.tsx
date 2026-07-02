import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'geist/font'
import './globals.css'
import Navigation from '@/components/Navigation'
import { Providers } from './providers'

const geist = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Veta | Mantle Research',
  description: 'Premium AI-powered research platform for the Mantle ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-geist: ${geist.style.fontFamily};
            --font-geist-mono: ${geistMono.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="bg-dark-950 text-white font-sans antialiased">
        <Providers>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
