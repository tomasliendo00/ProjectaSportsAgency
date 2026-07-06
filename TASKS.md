# TASKS — Legal y cumplimiento (Privacidad / Términos)

> Pendientes legales/de cumplimiento para la landing de Projecta Sports Agency.
> **Nota:** esto es orientación práctica, NO asesoría legal. El texto final de las
> páginas legales debería revisarlo un profesional.

## Contexto / por qué

El formulario de contacto (`/#apply`) recolecta datos personales y los envía a un
**Google Form** (tercero). Datos que se piden:

- Nombre completo, nacionalidad, **fecha de nacimiento**
- Dirección postal en EE.UU., email, número de WhatsApp
- Presupuesto anual, altura y peso
- Perfil deportivo/académico (posiciones, escuela, GPA, etc.)

Esto activa obligaciones de protección de datos por:

1. **Compartir datos con un tercero** (Google) → hay que informarlo.
2. **Público internacional** → jugadores de España/Europa (**GDPR**), Brasil (**LGPD**),
   Argentina y Chile (leyes locales). GDPR exige **consentimiento explícito**.
3. **Posibles menores de edad** → un jugador recién graduado de secundaria puede tener
   17 años; los datos de menores tienen requisitos más estrictos.

## Decisión

- **Política de Privacidad → necesaria.** Es lo más cercano a obligatorio en este caso.
- **Términos y Condiciones → muy recomendable** (agencia que presta servicios pagos),
  pero menos urgente que la de privacidad.

---

## Tareas — Implementación (las puede hacer Claude)

- [x] **Checkbox de consentimiento** obligatorio en el formulario antes de enviar,
      con link a `/privacidad`. Bloquea el envío si no está marcado.
- [x] **Links en el footer** → Política de Privacidad y Términos y Condiciones.
- [x] **Página `/privacidad`** bilingüe (ES/EN). 11 secciones: datos recolectados,
      finalidad, base legal, Google como tercero, conservación, derechos, menores, GDPR.
- [x] **Página `/terminos`** bilingüe (ES/EN). 10 secciones: objeto, servicios,
      ausencia de garantía de resultados, veracidad, PI, limitación de responsabilidad.
- [x] **Página 404** (`/app/not-found.jsx`) para rutas inexistentes, con diseño de marca.
- [x] **`LegalHeader`** — header simplificado para páginas legales (logo → `/`,
      toggle de idioma, botón Postular → `/#apply`).
- [ ] (Opcional) Nota breve junto al form aclarando que los datos se procesan vía Google.

## Tareas — Contenido legal (borrador hecho por Claude, requiere validación)

- [x] Borrador de **Política de Privacidad** redactado y publicado en `/privacidad`.
      Cubre: datos recolectados, finalidad, Google Forms como encargado, conservación,
      derechos ARCO, menores de edad, GDPR para usuarios de la UE.
- [x] Borrador de **Términos y Condiciones** redactado y publicado en `/terminos`.
      Cubre: naturaleza del servicio, ausencia de garantía, veracidad de datos,
      propiedad intelectual, limitación de responsabilidad, ley aplicable.
- [ ] **Validar ambos textos con un profesional legal** antes de considerar el contenido
      definitivo. Email de contacto provisional: hola@projectasports.com.
- [ ] Definir **email dedicado de protección de datos**
      (ej: privacidad@projectasports.com) y actualizar los textos.
- [ ] Confirmar manejo de **datos de menores de edad** con Projecta
      (la cláusula existe pero requiere confirmación del proceso interno).

## Relacionado — Derechos de imagen (mismo profesional puede revisarlo)

- [ ] Confirmar **consentimiento / derechos** sobre las fotos de personas reales usadas
      públicamente en la web:
  - [ ] Íñigo Capellán (sección Perfil de Jugador + fotos)
  - [ ] Foto del duelo de jugadores (hero)
  - [ ] Foto de graduación (hero)
  - [ ] Fotos del equipo (Cristóbal, Mateo, Pedro)
  - Verificar si eran **stock** (revisar licencia) o propias de Projecta.

## Pendiente futuro (no urgente ahora)

- [ ] **Banner de cookies**: hoy el sitio NO usa analytics ni tracking, así que no hace
      falta. Si se suma Google Analytics, Meta Pixel u otro, ahí sí será necesario.

---

## Infraestructura — Dominio y despliegue _(completado 2026-07-06)_

- [x] Dominio **projectasports.com** comprado en Namecheap (con WhoisGuard activado).
- [x] Proyecto hosteado en **Vercel** con deploy automático desde `main`.
- [x] DNS configurado en Namecheap: registro A (raíz) + CNAME (www) apuntando a Vercel.
- [x] Certificado SSL activo (HTTPS). Sitio live en https://projectasports.com.

---

## Auditoría web _(squirrelscan v0.0.64 · 2026-07-06 · score: 49/100 F)_

> Auditoría corrida sobre https://www.projectasports.com (3 páginas crawleadas).
> Score objetivo: 90+ (Grado A). Todo lo marcado como "Claude" es implementable en código.

### Errores críticos — 7 fallos

- [x] **Sitemap apunta al dominio viejo de Vercel** `landing-projecta-plee6v1om-...vercel.app`
      en lugar de `www.projectasports.com`. Causa: `NEXT_PUBLIC_SITE_URL` no está seteada
      en Vercel y `VERCEL_URL` devuelve la URL de preview.
      **Fix:** setear `NEXT_PUBLIC_SITE_URL=https://www.projectasports.com` en las env vars
      de Vercel (Production), o hardcodear el dominio en `sitemap.js` como fallback. _(Claude)_

- [x] **Sitemap inválido** — mismo origen que el punto anterior; el sitemap referenciado
      es el del dominio de preview, no el de producción. Se resuelve junto con el punto anterior. _(Claude)_

- [x] **4 imágenes de banderas sin alt text** — `/flags/br.svg`, `/flags/es.svg`,
      `/flags/ie.svg`, `/flags/nl.svg`. Afecta accesibilidad y SEO de imágenes.
      **Fix:** agregar `alt` descriptivo en cada componente que use estas imágenes. _(Claude)_

- [x] **Botón de idioma inaccessible** — texto visible renderizado como `"ESEN"` (ES+EN
      concatenados sin separación), no coincide con `aria-label="toggle language"`.
      **Fix:** agregar `aria-hidden="true"` a los spans ES/EN en `Nav.jsx` y `LegalHeader.jsx`. _(Claude)_

- [x] **Tooltip "?" con aria-label incorrecto** — el `aria-label` del botón de ayuda en
      `ContactCTA.jsx` contiene el texto del hint en lugar de una descripción del botón.
      **Fix:** agregar `aria-hidden="true"` al carácter "?" visible en `ContactCTA.jsx`. _(Claude)_

- [x] **Páginas sin lifetime de caché** — las 3 páginas devuelven headers sin
      `Cache-Control`. Impacta performance score.
      **Fix:** configurar headers de caché en `next.config.mjs`. _(Claude)_

- [x] **Imagen hero sin `fetchpriority="high"`** — falso positivo: ambas imágenes del hero
      ya tenían `priority` prop en `Hero.jsx`, lo que Next.js convierte en `fetchpriority="high"`.
      No requirió cambios. _(Claude — investigado)_

### Warnings — 14 mejoras

#### SEO / Metadata
- [x] **Meta description demasiado larga** (201 chars, límite recomendado: 155-160).
      Afecta las 3 páginas porque `/privacidad` y `/terminos` heredan la descripción del
      root layout. **Fix:** acortar en `layout.jsx` y agregar metadata propia en cada
      página legal. _(Claude)_

- [x] **Título duplicado** en `/`, `/privacidad` y `/terminos` — las 3 comparten el mismo
      `<title>`. **Fix:** exportar `metadata` con título único en cada página legal. _(Claude)_

- [x] **Descripción duplicada** — mismo problema que el título.
      **Fix:** exportar `metadata` con descripción única en cada página legal. _(Claude)_

- [x] **Canonical URL faltante** en las 3 páginas.
      **Fix:** agregar `alternates: { canonical: '/' }` en metadata de cada página. _(Claude)_

- [x] **`/privacidad` y `/terminos` no están en el sitemap**.
      **Fix:** agregar ambas rutas en `sitemap.js`. _(Claude)_

#### Performance
- [x] **11 imágenes de banderas sin `loading="lazy"`** — banderas de países en secciones
      below-the-fold se cargan de inmediato. **Fix:** agregado `loading="lazy"` en
      `PlayerProfile.jsx`, `Team.jsx` y `Testimonials.jsx`. _(Claude)_

- [x] **LCP hints faltantes** — el `<Logo>` en `LegalHeader.jsx` ya tenía `priority` prop
      desde su creación. Falso positivo del scanner en el deploy anterior. _(Claude — investigado)_

- [ ] **1 archivo JS aparentemente sin minificar** — `1hp3-t76m72lu.js` (191.6 KB,
      ~158 KB de ahorro estimado). Probablemente una dependencia de terceros (framer-motion).
      Investigar si es un false positive de Next.js/Vercel build. _(Claude — investigar)_

#### Seguridad
- [x] **Sin header `X-Frame-Options`** — sin protección contra clickjacking.
      **Fix:** agregado `X-Frame-Options: SAMEORIGIN` junto con `X-Content-Type-Options`,
      `Referrer-Policy` y `Permissions-Policy` en `next.config.mjs`. _(Claude)_

- [ ] **Sin `Content-Security-Policy`** — header de seguridad recomendado. Complejo de
      configurar sin romper cosas; requiere prueba cuidadosa. Dejado para después del
      lanzamiento oficial. _(Claude — pendiente)_

- [ ] **Formulario sin CAPTCHA** — el form de postulación es público y sin protección
      anti-bot. **Fix:** integrar Cloudflare Turnstile u hCaptcha (servicio externo). _(Requiere decisión)_

#### Legal
- [ ] **Sin disclosure de sub-procesadores (DPA)** — no se encontró mención explícita de
      acuerdos de procesamiento de datos con terceros. Podría resolverse agregando una
      sección a `/privacidad`. _(Claude / Legal)_

#### E-E-A-T (Expertise, Authoritativeness, Trustworthiness)
- [ ] **Sin página `/about` dedicada** — el scanner no reconoce la sección `#about`
      como página independiente. Bajo impacto para este tipo de sitio. _(Decisión UX)_

- [ ] **Sin página `/contact` dedicada** — ídem anterior. _(Decisión UX)_

---

_Creado: 2026-06-08 · Última actualización: 2026-07-06_
