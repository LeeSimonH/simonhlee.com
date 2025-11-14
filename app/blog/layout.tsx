'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { TextMorph } from '@/components/ui/text-morph'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base text-muted dark:text-muted hover:text-secondary dark:hover:text-secondary flex items-center gap-1 text-sm transition-colors"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export default function LayoutBlogPost({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-900" />
      <ScrollProgress
        className="fixed top-0 z-50 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <main className="prose prose-gray prose-headings:font-heading prose-h6:prose-base dark:prose-invert prose-h1:text-[2rem] prose-h1:tracking-[-0.02em] prose-h1:leading-none prose-h1:font-semibold prose-h2:scroll-m-20 prose-h2:text-[1.7411rem] prose-h2:tracking-[-0.0175em] prose-h2:font-semibold prose-h2:leading-tight prose-h3:tracking-[-0.015em] prose-h3:text-[1.5157rem] prose-h3:leading-tight prose-h3:font-semibold prose-h4:font-semibold prose-h4:tracking-[-0.0125em] prose-h4:text-[1.3195rem] prose-h4:leading-snug prose-h5:text-[1.1487rem] prose-h5:tracking-[-0.01em] prose-h5:font-semibold prose-h6:tracking-[-0.005em] prose-h5:leading-snug prose-h6:text-base prose-h6:leading-normal prose-h6:font-semibold prose-strong:font-semibold py-12">
        <div className="absolute top-20 right-8 left-8 flex items-center justify-between">
          <Link
            href="/"
            // className="text-muted hover:text-secondary flex max-w-fit items-center gap-1 text-sm"
            className="flex max-w-fit items-center gap-1 text-sm no-underline"
          >
            <ArrowLeftIcon size={12} />
            to home page
          </Link>
          <CopyButton />
        </div>
        {children}
      </main>
    </>
  )
}
