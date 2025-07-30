'use client'

import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import ThemeSwitch from '@/components/theme-switch'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="font-serif-display text-xl font-semibold tracking-normal text-zinc-600 dark:text-zinc-400"
          delay={0.5}
        >
          Hi there! I'm
        </TextEffect>

        <Link
          href="/"
          className="font-serif-display text-primary text-5xl font-black tracking-normal hover:text-white"
        >
          Simon H Lee
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="font-mono text-lg tracking-tight text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </motion.div>
      <div className="self-start text-xs text-zinc-400">
        <ThemeSwitch />
      </div>
    </header>
  )
}
