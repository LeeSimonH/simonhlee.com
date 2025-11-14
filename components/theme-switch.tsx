'use client'
import { MonitorIcon, MoonStarIcon, SunIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import type { JSX } from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element
  value: string
  isActive?: boolean
  onClick: (value: string) => void
}) {
  return (
    <button
      className={cn(
        'relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&_svg]:size-4',
        isActive
          ? 'text-primary dark:text-primary'
          : 'text-muted hover:text-primary dark:text-muted dark:hover:text-primary'
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className="border-muted/30 dark:border-muted absolute inset-0 rounded-full border"
          // className="absolute inset-0 rounded-full hover:bg-muted/15 dark:hover:bg-muted/10"
        />
      )}
    </button>
  )
}

const THEME_OPTIONS = [
  {
    icon: <MonitorIcon />,
    value: 'system',
  },
  {
    icon: <SunIcon />,
    value: 'light',
  },
  {
    icon: <MoonStarIcon />,
    value: 'dark',
  },
]

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="flex h-8 w-24" />
  }

  return (
    <motion.div
      role="radiogroup"
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      // className="bg-faint/40 dark:bg-background inline-flex items-center overflow-hidden rounded-full"
      className="bg-background ring-muted/30 dark:bg-background dark:ring-faint inline-flex items-center overflow-hidden rounded-full ring-1 ring-inset"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  )
}

export default ThemeSwitch
