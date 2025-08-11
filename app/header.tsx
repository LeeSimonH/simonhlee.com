'use client'

import ThemeSwitch from '@/components/theme-switch'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="text-body-primary relative top-0 right-0 left-0 flex w-full font-sans">
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
          className="mb-2 inline max-w-fit leading-none tracking-tighter"
          delay={0.2}
        >
          Hey there! I'm
        </TextEffect>

        <TextLoop className="transition-all" interval={5}>
          {['Simon', '@nomisheel', '@crimpwimp', '/in/simonhlee', 'github/LeeSimonH'].map((nn) => (
            <TextEffect
              as="code"
              preset="fade-in-blur"
              per="char"
              delay={0.3}
              speedSegment={0.6}
              className="tracking-tightest font-mono text-3xl leading-none font-bold"
              key={nn}
            >
              {nn}
            </TextEffect>
          ))}
        </TextLoop>
      </motion.div>
    </header>
  )
}
