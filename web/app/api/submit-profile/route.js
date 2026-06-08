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
    // A successful submit returns 200 + the confirmation page ("Se registró
    // tu respuesta" / "Your response has been recorded"). A closed form, a
    // validation error or a wrong id returns a page without that message.
    // (Note: the confirmation page DOES embed FB_PUBLIC_LOAD_DATA_, so that
    // can't be used as a signal.)
    const CONFIRMATION =
      /registró tu respuesta|tu respuesta se ha registrado|response has been recorded|respuesta se ha registrado|sua resposta foi registrada/i
    const recorded = res.ok && CONFIRMATION.test(text)
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
