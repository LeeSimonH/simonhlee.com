'use client'

import ThemeSwitch from '@/components/theme-switch'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import { motion } from 'motion/react'

export function Header() {
  return (
    <header className="text-primary relative top-0 right-0 left-0 flex w-full">
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
          as="h1"
          preset="fade-in-blur"
          per="char"
          delay={0.2}
          className="text-2xl leading-none font-bold tracking-tighter"
        >
          Simon H Lee
        </TextEffect>

        <TextLoop interval={3.5} className="leading-loose font-medium">
          {['Software Engineer', 'Urbanist', 'Creative'].map((nickname) => (
            <TextEffect
              as="span"
              preset="fade-in-blur"
              per="char"
              delay={0.3}
              speedSegment={0.6}
              key={nickname}
            >
              {nickname}
            </TextEffect>
          ))}
        </TextLoop>
      </motion.div>
    </header>
  )
}
