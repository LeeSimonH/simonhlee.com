'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-3 w-3" />,
  },
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-3 w-3" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-3 w-3" />,
  },
]

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="group z-auto rounded-lg"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
      }}
      enableHover={false}
      onValueChangeAction={(id) => {
        if (!!id) {
          setTheme(id)
        }
      }}
    >
      {THEMES_OPTIONS.map((t) => {
        return (
          <button
            key={t.id}
            className={`hover:text-primary-hover dark:data-[checked=true]:text-accent transition-all] inline-flex cursor-pointer items-center justify-center rounded-full p-0.5 duration-300 focus-visible:outline-2 data-[checked=true]:text-black ${theme === t.id ? 'text-primary border-faint border shadow-sm dark:border-zinc-700/50 dark:bg-zinc-800/90 dark:shadow-none' : 'text-muted'}`}
            type="button"
            aria-label={`Switch to ${t.label} theme`}
            data-id={t.id}
          >
            {t.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}
