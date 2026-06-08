// Google Form integration — "Player Profile Form" (owned by Projecta).
// Responses POST here land in the same spreadsheet as the native form.
// Entry IDs were extracted from the public form HTML (FB_PUBLIC_LOAD_DATA_).
//
// Form: https://docs.google.com/forms/d/e/1FAIpQLSehA8JKbaU2o_6HyCf1KKtVFoMr3ryPtDn3f3YVIYodcShIBw/viewform

export const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSehA8JKbaU2o_6HyCf1KKtVFoMr3ryPtDn3f3YVIYodcShIBw/formResponse'

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

// Submits the collected values to the Google Form.
// Uses no-cors: Google does not return CORS headers, so the response is
// opaque (we cannot read it), but the submission is recorded. We therefore
// treat a resolved request as success.
export async function submitToGoogleForm(values) {
  const body = new URLSearchParams()
  for (const [key, entry] of Object.entries(FIELD_ENTRIES)) {
    const value = values[key]
    if (value != null && String(value).trim() !== '') {
      body.append(entry, value)
    }
  }
  await fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
}
