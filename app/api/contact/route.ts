import { NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
  phoneNumber: z.string().optional(),
  // Honeypot (should stay empty)
  company: z.string().optional().transform((v) => v ?? ''),
})

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => ({}))
    const parsed = ContactSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
    }

    // Basic spam check: honeypot must be empty
    if (parsed.data.company && parsed.data.company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 })
    }

    // For now, log-only (no secrets). Replace with email/SaaS later.
    console.log('[contact] submission', {
      firstname: parsed.data.firstname,
      lastname: parsed.data.lastname,
      email: parsed.data.email,
      subject: parsed.data.subject,
      phoneNumber: parsed.data.phoneNumber,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}
