'use client'

import ThemeSwitch from '@/components/theme-switch'
import Image from 'next/image'
import Link from 'next/link'
import profilePng from '@/app/profile.png'

export function Header() {
  return (
    <header className="text-primary relative top-0 right-0 left-0 flex w-full gap-4">
      <Link href="/" className="hover:after:hidden">
        <Image src={profilePng} alt="Profile photo" width={36} height={36} priority />
      </Link>

      <span className="absolute top-0 right-0 z-50">
        <ThemeSwitch />
      </span>
    </header>
  )
}
