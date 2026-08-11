// Google Form integration — "Player Profile Form" (owned by Projecta).
// Responses POST here land in the same spreadsheet as the native form.
// Entry IDs were extracted from the public form HTML (FB_PUBLIC_LOAD_DATA_).
//
// Form: https://docs.google.com/forms/d/e/1FAIpQLSehA8JKbaU2o_6HyCf1KKtVFoMr3ryPtDn3f3YVIYodcShIBw/viewform

export const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSehA8JKbaU2o_6HyCf1KKtVFoMr3ryPtDn3f3YVIYodcShIBw/formResponse'

// The form is split into 4 pages (0 = implicit first page, then the
// "Personal Information" / "Athletic Information" / "Academic Information"
// page breaks). Every question lives on pages 1-3, so a POST must declare
// that all pages were walked through — otherwise Google still returns the
// confirmation page but only keeps the answers from page 0 (i.e. nothing).
export const PAGE_HISTORY = '0,1,2,3'

// Maps our internal field keys → Google Form entry IDs.
export const FIELD_ENTRIES = {
  // Step 1 — personal details
  fullName: 'entry.1722284842',
  nationality: 'entry.41993653',
  dob: 'entry.360906426',
  address: 'entry.1493868116',
  email: 'entry.1735379186',
  whatsapp: 'entry.362241256',
  budget: 'entry.1487064681',
  housing: 'entry.336460469', // radio: "On Campus" | "Off Campus" | "Open to both"
  heightWeight: 'entry.1029302806',
  // Step 2 — athletic & academic profile
  positions: 'entry.1396096402',
  foot: 'entry.1117753199',
  school: 'entry.1159715690',
  background: 'entry.1486465534',
  schoolYear: 'entry.445798927',
  credits: 'entry.379023044',
  gpa: 'entry.260029365',
  majors: 'entry.925963166',
  term: 'entry.321152572', // radio: "Fall" | "Spring"
}

// Submits the collected values via our own API route, which forwards them to
// the Google Form server-side. A browser request to Google must use no-cors
// and gets an opaque response (always "success"); going through the server
// lets us read Google's real status and surface a truthful failure. Throws on
// any failure so the caller can show an error state.
export async function submitToGoogleForm(values) {
  const res = await fetch('/api/submit-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.ok) {
    throw new Error(data?.reason || `submit_failed_${res.status}`)
  }
}
