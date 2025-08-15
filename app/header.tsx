'use client'

import ThemeSwitch from '@/components/theme-switch'
import { TextEffect } from '@/components/ui/text-effect'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="text-body-primary relative top-0 right-0 left-0 flex w-full">
      <span className="absolute top-0 right-0 z-50">
        <ThemeSwitch />
      </span>

      <motion.div
        className="flex flex-col"
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
          as="span"
          preset="slide"
          per="char"
          className="mb-2 inline max-w-fit font-sans leading-none tracking-tighter"
          delay={0.2}
        >
          Hey there! I'm
        </TextEffect>

        <TextEffect
          as="code"
          preset="fade-in-blur"
          per="char"
          delay={0.3}
          className="font-sans text-2xl leading-none font-bold tracking-tighter"
          speedSegment={0.6}
        >
          Simon H Lee
        </TextEffect>
      </motion.div>
    </header>
  )
}
