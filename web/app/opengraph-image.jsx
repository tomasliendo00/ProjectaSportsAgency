import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Projecta Sports Agency — Becas y transferencias deportivas en USA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const antonFont = await readFile(join(process.cwd(), 'public/fonts/anton.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 90px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#FF5A1F',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '480px',
            height: '100%',
            background: 'linear-gradient(to left, rgba(255,90,31,0.09), transparent)',
            display: 'flex',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <span style={{ color: '#FF5A1F', fontSize: '13px', fontWeight: 700, letterSpacing: '0.3em' }}>
            AGENCIA DEPORTIVA
          </span>
        </div>
        <div
          style={{
            color: '#F5F0E8',
            fontSize: '80px',
            fontFamily: 'Anton',
            fontWeight: 400,
            lineHeight: 1,
            textTransform: 'uppercase',
            marginBottom: '30px',
            display: 'flex',
          }}
        >
          PROJECTA SPORTS AGENCY
        </div>
        <div
          style={{
            color: 'rgba(245,240,232,0.55)',
            fontSize: '26px',
            lineHeight: 1.45,
            maxWidth: '680px',
            display: 'flex',
          }}
        >
          Convertimos tu talento en una oportunidad real. Becas y transferencias deportivas en Estados Unidos.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '56px',
            right: '90px',
            color: 'rgba(245,240,232,0.25)',
            fontSize: '15px',
            display: 'flex',
          }}
        >
          projectasports.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Anton', data: antonFont, style: 'normal', weight: 400 }],
    }
  )
}
