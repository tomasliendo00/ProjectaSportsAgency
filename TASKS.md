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

- [x] **Checkbox de consentimiento** obligatorio en el formulario antes de enviar
      (ej: "Acepto la Política de Privacidad"), con link a la página.
- [x] **Links en el footer** → Política de Privacidad y Términos y Condiciones.
- [x] **Página `/privacidad`** con plantilla base bilingüe (ES/EN).
- [x] **Página `/terminos`** con plantilla base bilingüe (ES/EN).
- [ ] (Opcional) Nota breve junto al form aclarando que los datos se procesan vía Google.

## Tareas — Contenido legal (requiere abogado / Projecta)

- [ ] Redactar/validar el **texto real** de la Política de Privacidad:
      qué datos se recolectan, finalidad, que se almacenan en Google, plazo de
      conservación, cómo ejercer derechos (acceso/rectificación/borrado), contacto.
- [ ] Redactar/validar el **texto real** de los Términos y Condiciones
      (alcance del servicio, responsabilidades, pagos, limitación de responsabilidad).
- [ ] Definir el **email/contacto de protección de datos** (ej: privacidad@projectasports.com).
- [ ] Confirmar manejo de **datos de menores de edad** (consentimiento de padres/tutores).

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

_Creado: 2026-06-08_
