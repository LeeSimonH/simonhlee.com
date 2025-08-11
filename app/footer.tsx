'use client'
import { MapPinIcon, CopyrightIcon } from 'lucide-react'
import ThemeSwitch from '@/components/theme-switch'

export function Footer() {
  return (
    <footer className="text-secondary border-muted border-t px-0 py-8 dark:border-zinc-800">
      <div className="relative flex min-w-full items-center justify-end gap-6 text-xs tracking-tight">
        <div className="absolute left-0 text-xs">
          <ThemeSwitch />
        </div>

        <div className="inline-flex content-center items-center gap-1">
          <MapPinIcon size={12} />
          <span>Brooklyn, NY</span>
        </div>

        <a
          href="https://github.com/leesimonh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-end gap-0.5"
        >
          <CopyrightIcon size={12} />
          2025 Simon H Lee
        </a>
      </div>

      <div className="hidden min-w-full grid-cols-12 place-items-end gap-8 text-xs tracking-tight">
        <div className="col-span-2 text-xs">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
