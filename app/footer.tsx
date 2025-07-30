'use client'

import ThemeSwitch from '@/components/theme-switch'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/leesimonh" target="_blank">
          <span className="text-xs text-zinc-500">© 2025 Simon H Lee</span>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
