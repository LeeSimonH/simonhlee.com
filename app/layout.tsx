import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from './footer'
import './globals.css'
import { Header } from './header'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://simonhlee.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | SimonHLee',
    default: 'Simon H Lee',
  },
  description: 'My personal website, portfolio, and digital space',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

//#region MARK: Fonts
/**
 * Default Monospaced
 */
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

/**
 * Default Sans-Serif
 */
const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})
//#endregion Fonts

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${geist.variable} bg-background-primary text-body-primary font-sans antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange={true}
        >
          <main className="flex min-h-screen w-full flex-col items-center">
            <div className="relative mx-auto w-full max-w-screen-sm px-8 pt-12 font-sans">
              <Header />
              {children}
              <Footer />
              <Analytics />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
