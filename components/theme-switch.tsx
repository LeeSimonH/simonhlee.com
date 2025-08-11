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
        duration: 0.2,
      }}
      enableHover={false}
      onValueChangeAction={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((t) => {
        return (
          <button
            key={t.id}
            className={`hover:text-accent dark:data-[checked=true]:text-accent inline-flex cursor-pointer items-center justify-center p-1 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-black ${theme === t.id ? 'text-body-primary' : 'text-body-muted'}`}
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
