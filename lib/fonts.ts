import { Geist, Geist_Mono } from 'next/font/google'

/**
 * Default Sans-Serif font
 */
export const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

/**
 * Default Monospaced
 */
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})
