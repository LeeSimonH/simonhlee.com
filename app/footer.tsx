'use client'
import { MapPinIcon, CopyrightIcon } from 'lucide-react'
import ThemeSwitch from '@/components/theme-switch'

export function Footer() {
  return (
    <footer className="text-muted border-faint border-t px-0 py-8 dark:border-zinc-800">
      <div className="relative flex min-w-full items-center justify-start gap-6 text-xs leading-0 tracking-tight">
        <div className="absolute right-0 text-xs">
          <ThemeSwitch />
        </div>

        <a
          href="https://github.com/leesimonh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center justify-start gap-1 decoration-transparent"
        >
          <CopyrightIcon size={12} />
          2025 Simon H Lee
        </a>

        <div className="flex items-center justify-start gap-1 decoration-transparent">
          <MapPinIcon size={12} />
          <span>Brooklyn, NY</span>
        </div>
      </div>

      <div className="hidden min-w-full grid-cols-12 place-items-end gap-8 text-xs tracking-tight">
        <div className="col-span-2 text-xs">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
