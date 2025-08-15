'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-3.5 w-3.5" />,
  },
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-3.5 w-3.5" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-3.5 w-3.5" />,
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
            className={`hover:text-primary-hover dark:data-[checked=true]:text-accent transition-all] mx-0.5 inline-flex cursor-pointer items-center justify-center rounded-full p-1 duration-300 focus-visible:outline-2 data-[checked=true]:text-black ${theme === t.id ? 'text-primary' : 'text-muted'}`}
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
