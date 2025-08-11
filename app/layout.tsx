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
  metadataBase: new URL('https://simonhlee.com/'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Simon H Lee - Personal website',
    template: '%s | SimonHLee',
  },
  description: '...',
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
  display: 'swap',
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
        >
          <div className="flex min-h-screen w-full flex-col items-center">
            <div className="relative mx-auto w-full max-w-screen-sm px-8 pt-12 font-sans">
              <Header />
              {children}
              <Analytics />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
