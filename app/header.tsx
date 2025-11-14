'use client'
import ThemeSwitch from '@/components/theme-switch'
import { FileUser } from 'lucide-react'

export function Header() {
  return (
    <header className="absolute right-0 z-50 flex items-start gap-4 pt-4">
      <a
        target="_blank"
        href="https://elasticbeanstalk-us-east-1-934605938002.s3.amazonaws.com/public/Resume+-+Simon+Lee.pdf"
        aria-label="link to resume"
        className="group flex flex-col items-center hover:after:hidden"
      >
        <FileUser className="group-hover:text-chorange-hover" aria-hidden="true" />
        <span className="group-hover:text-chorange-hover text-xs">CV</span>
      </a>

      <ThemeSwitch />
    </header>
  )
}
