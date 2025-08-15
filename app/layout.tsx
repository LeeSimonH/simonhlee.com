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
