'use client'
import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/next'
import { ArrowLeft } from 'lucide-react'
import { ThemeProvider } from 'next-themes'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import { Footer } from './footer'
import { Header } from './header'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

interface NotFound404Props {
  'data-id'?: string
}

/**
 * 404 Not Found page
 */
export default function NotFound({ 'data-id': dataId }: NotFound404Props) {
  const BlankCard = () => <div className="bg-primary aspect-4-5 rounded-lg"></div>

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} bg-background-primary text-body-primary antialiased`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
          disableTransitionOnChange={true}
        >
          <main className="flex w-full flex-col items-center">
            <div className="relative mx-auto w-full max-w-screen-sm pt-12 font-sans">
              <Header />

              <div data-id={dataId} className="my-8 flex w-full items-center justify-center">
                <div className="relative w-full">
                  {/* Grid of cards */}
                  <div className="relative grid grid-cols-3 gap-4">
                    {/* First row */}
                    <BlankCard />
                    <BlankCard />
                    <BlankCard />
                    {/* Second row */}
                    <BlankCard />
                    <BlankCard />
                    <BlankCard />
                    {/* Third row */}
                    <BlankCard />
                    <BlankCard />
                    <BlankCard />
                  </div>

                  <Link
                    href="/"
                    className="group text-faint hover:text-muted absolute top-4 left-4 z-10 flex items-center gap-1 text-sm font-medium transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Return Home
                  </Link>

                  {/* 404 Text Overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="text-on-primary text-[18rem] leading-none font-black">
                      <span className="mx-30">4</span>
                      <span className="mx-30">4</span>
                    </div>
                  </div>

                  {/* Central Circle with Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background flex aspect-square w-54 flex-col items-center justify-center rounded-full">
                      <div>
                        <h2 className="text-body-primary tracking-tightest px-4 text-center text-3xl leading-none font-black uppercase">
                          Page Not Found
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
              <Analytics />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
