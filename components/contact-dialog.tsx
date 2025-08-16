'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ContactFormInline } from '@/components/contact-form-inline'
import { MailIcon } from 'lucide-react'

interface ContactDialogProps {
  trigger?: React.ReactNode
  title?: string
  description?: string
}

export function ContactDialog({
  trigger,
  title = 'Get in touch',
  description = "Leave a message with your contact information, and I'll get back to you soon!",
}: ContactDialogProps) {
  const [open, setOpen] = useState(false)

  // Open dialog if URL hash is #contact
  useEffect(() => {
    const shouldOpenFromHash = () =>
      typeof window !== 'undefined' && window.location.hash === '#contact'
    if (shouldOpenFromHash()) setOpen(true)

    const onHashChange = () => {
      if (shouldOpenFromHash()) setOpen(true)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    // If closing and hash is #contact, remove the hash to avoid reopening on back/forward
    if (!next && typeof window !== 'undefined' && window.location.hash === '#contact') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" className="border-muted">
            <MailIcon />
            Leave a message
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>

        <ContactFormInline />

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" className="hover:text-on-primary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
