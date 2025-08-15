'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailIcon } from 'lucide-react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const contactFormSchema = z.object({
  firstname: z.string().min(1, { message: 'First name is required' }),
  lastname: z.string().min(1, { message: 'Last name is required' }),
  email: z.email({ error: 'Invalid email address' }).min(1, { message: 'Email is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
  phoneNumber: z.string().optional(),
})
type ContactForm = z.infer<typeof contactFormSchema>

function ContactFormInline() {
  const contactForm = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    shouldUnregister: true,
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
      phoneNumber: '',
    },
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
    criteriaMode: 'all',
  })

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    // Honeypot field (invisible); bots often fill it
    const payload = { ...data, company: '' }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      // Simple UX: reset on success
      contactForm.reset()
      alert('Thanks! Your message was sent.')
    } catch (e) {
      alert('Sorry, there was a problem sending your message.')
    }
  }

  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="space-y-4 font-sans"
        suppressHydrationWarning={true}
      >
        <div className="grid grid-cols-[1fr_1fr] gap-x-8">
          <FormField
            control={contactForm.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    key={field.name}
                    placeholder="First Name"
                    type="text"
                    autoComplete="off"
                    required={true}
                    suppressHydrationWarning={true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={contactForm.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    key={field.name}
                    placeholder="Last Name"
                    type="text"
                    required={true}
                    autoComplete="off"
                    suppressHydrationWarning={true}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={contactForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  key={field.name}
                  type="email"
                  autoComplete="off"
                  placeholder="your-email@example.com"
                  required={true}
                  suppressHydrationWarning={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number <span className="text-body-muted text-xs italic">(Optional)</span>{' '}
              </FormLabel>
              <FormControl>
                <Input
                  key={field.name}
                  placeholder="(111) 222-3333"
                  type="tel"
                  autoComplete="off"
                  suppressHydrationWarning={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  key={field.name}
                  placeholder="Subject"
                  type="text"
                  autoComplete="off"
                  required={true}
                  suppressHydrationWarning={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={contactForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  key={field.name}
                  placeholder="Type your message here."
                  required={true}
                  suppressHydrationWarning={true}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant={'outline'}
          type="submit"
          className="hover:text-on-primary border-muted cursor-pointer"
        >
          <MailIcon /> Send message
        </Button>
      </form>
    </Form>
  )
}

export { ContactFormInline }
