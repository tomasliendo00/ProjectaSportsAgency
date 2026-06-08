import { NextResponse } from 'next/server'
import { GOOGLE_FORM_ACTION, FIELD_ENTRIES } from '@/lib/googleForm'

// Server-side proxy for the Google Form submission. Doing the POST here
// (server-to-server) lets us read Google's real status and body, instead of
// the opaque response a browser `no-cors` request returns — so we can report
// a truthful success/failure to the client.
export const runtime = 'nodejs'

export async function POST(request) {
  let values
  try {
    values = await request.json()
  } catch {
    return NextResponse.json({ ok: false, reason: 'bad_request' }, { status: 400 })
  }

  const body = new URLSearchParams()
  for (const [key, entry] of Object.entries(FIELD_ENTRIES)) {
    const value = values?.[key]
    if (value != null && String(value).trim() !== '') {
      body.append(entry, value)
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const res = await fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: controller.signal,
    })
    const text = await res.text().catch(() => '')
    // A successful submit returns 200 + a minimal confirmation page. A closed
    // form, a validation error or a wrong form id re-renders the form page,
    // which still embeds FB_PUBLIC_LOAD_DATA_ — treat that (or any non-2xx)
    // as a failure.
    const recorded = res.ok && !text.includes('FB_PUBLIC_LOAD_DATA_')
    if (!recorded) {
      return NextResponse.json(
        { ok: false, reason: `google_${res.status}` },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    const reason = err?.name === 'AbortError' ? 'timeout' : 'network'
    return NextResponse.json({ ok: false, reason }, { status: 502 })
  } finally {
    clearTimeout(timeout)
  }
}
