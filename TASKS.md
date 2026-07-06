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
- ~~Validar ambos textos con un profesional legal~~ _(desestimado)_
- [ ] Definir **email dedicado de protección de datos**
      (ej: privacidad@projectasports.com) y actualizar los textos.
- [ ] Confirmar manejo de **datos de menores de edad** con Projecta
      (la cláusula existe pero requiere confirmación del proceso interno).

## Relacionado — Derechos de imagen _(desestimado)_

~~Confirmar consentimiento / derechos sobre las fotos de personas reales usadas en la web.~~

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

## Historial de auditorías

| Fecha | Score | Grado | Estado |
|---|---|---|---|
| 2026-07-06 | 49/100 | F | Baseline |
| 2026-07-06 | 72/100 | C | Después de fixes SEO/a11y/sitemap/seguridad |
| 2026-07-06 | 68/100 | D | Regresión por descriptions/og:url — fixes aplicados, pendiente push |

---

## Auditoría 1 _(squirrelscan v0.0.64 · 2026-07-06 · score: 49/100 F)_

> Auditoría inicial sobre https://www.projectasports.com (3 páginas crawleadas).

### Errores críticos

- [x] **Sitemap apunta al dominio viejo de Vercel** → hardcodear fallback en `sitemap.js` + setear `NEXT_PUBLIC_SITE_URL` en Vercel. _(Claude)_
- [x] **Sitemap inválido** — resuelto junto con el punto anterior. _(Claude)_
- [x] **4 imágenes de banderas sin alt text** → `alt` descriptivo en los componentes. _(Claude)_
- [x] **Botón de idioma inaccesible** (`"ESEN"` sin separación) → `aria-hidden="true"` en spans ES/EN de `Nav.jsx` y `LegalHeader.jsx`. _(Claude)_
- [x] **Tooltip "?" con aria-label incorrecto** → `aria-hidden="true"` en el carácter en `ContactCTA.jsx`. _(Claude)_
- [x] **Páginas sin Cache-Control** → headers de caché en `next.config.mjs`. _(Claude)_
- [x] **Imagen hero sin fetchpriority** — falso positivo, ya tenía `priority` prop en Next.js. _(Claude — investigado)_

### Warnings

#### SEO / Metadata
- [x] **Meta description demasiado larga** (201 chars) → acortar en root `layout.jsx` + metadata propia en páginas legales. _(Claude)_
- [x] **Título duplicado** en las 3 páginas → `metadata` con título único en cada página legal. _(Claude)_
- [x] **Descripción duplicada** — resuelto junto con el anterior. _(Claude)_
- [x] **Canonical URL faltante** → `alternates: { canonical }` en cada página. _(Claude)_
- [x] **`/privacidad` y `/terminos` no están en el sitemap** → agregadas en `sitemap.js`. _(Claude)_

#### Performance
- [x] **11 banderas sin `loading="lazy"`** → `loading="lazy"` en `PlayerProfile.jsx`, `Team.jsx`, `Testimonials.jsx`. _(Claude)_
- [x] **LCP hints faltantes en páginas legales** — falso positivo, `LegalHeader` ya tenía `priority`. _(Claude — investigado)_
- ~~**JS aparentemente sin minificar**~~ — `1hp3-t76m72lu.js` ya no existe en el build actual (hash cambió). Todos los chunks están minificados. Falso positivo. _(Desestimado)_

#### Seguridad
- [x] **Sin `X-Frame-Options`** → headers en `next.config.mjs` (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy). _(Claude)_
- [ ] **Sin Content-Security-Policy** — complejo sin romper cosas. Pendiente post-lanzamiento. _(Pendiente)_

#### Legal
- ~~**Sin disclosure de sub-procesadores (DPA)**~~ — Google LLC ya está mencionado en `/privacidad` con nombre, rol y link a su política. Falso positivo del scanner. _(Desestimado)_

#### E-E-A-T
- [x] **Sin `/about` dedicada** → redirect `/about` → `/#about` en `next.config.mjs`. _(Claude)_
- [x] **Sin `/contact` dedicada** → redirect `/contact` → `/#apply` en `next.config.mjs`. _(Claude)_

---

## Auditoría 2 _(squirrelscan v0.0.64 · 2026-07-06 · score: 72/100 C)_

> Corrida después del primer push con fixes SEO/a11y/sitemap/seguridad.

- [x] **`og:url` no coincide con canonical** en `/privacidad` y `/terminos` → `openGraph: { url }` en cada layout. _(Claude)_
- [x] **Alt text redundante** en testimonios — bandera de "Países Bajos" duplicaba texto visible → `alt=""` en `Testimonials.jsx`. _(Claude)_
- [x] **Meta description de `/privacidad` muy corta** (105 chars) → extendida en layout. _(Claude)_

---

## Auditoría 3 _(squirrelscan v0.0.64 · 2026-07-06 · score: 68/100 D)_

> Regresión respecto a auditoría 2. Causa: descriptions extendidas superaron el límite de 160 chars.

- [x] **Meta descriptions demasiado largas** — `/privacidad` (165 chars) y `/terminos` (181 chars) → recortadas a 128/152 chars. _(Claude)_
- [x] **`og:image` faltante** en páginas legales — al agregar `openGraph: { url }`, el scanner detectó ausencia de imagen OG → `openGraph: { images: [{ url: '/opengraph-image' }] }`. _(Claude)_
- [x] **SVGs de banderas sin `<title>`** — el scanner visita `/flags/*.svg` como páginas y detecta ausencia de texto alternativo interno → `<title>` agregado a los 6 SVGs (ar, br, cl, es, ie, nl). _(Claude)_
- [ ] **`perf/critical-request-chains`** — comportamiento normal de Next.js. _(No accionable)_
- ~~**`a11y/color-contrast`** en `div.stripes`~~ — elemento puramente decorativo (`pointer-events-none`, sin texto ni contenido). Falso positivo del scanner. _(Desestimado)_
- ~~**`legal/subprocessor-disclosure`**~~ — falso positivo, Google LLC ya está en `/privacidad`. _(Desestimado)_
- [x] **E-E-A-T `/about` y `/contact`** → redirects agregados en `next.config.mjs`. _(Claude)_
- [ ] CAPTCHA — ignorado por ahora. _(Desestimado)_
- [ ] CSP — pendiente post-lanzamiento. _(Pendiente)_

---

_Creado: 2026-06-08 · Última actualización: 2026-07-06_
