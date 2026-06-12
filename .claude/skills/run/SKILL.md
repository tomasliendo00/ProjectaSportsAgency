---
description: Launch the Projecta Sports Agency Next.js dev server and verify it's serving
---

# Run — Projecta Sports Agency

The app is a Next.js project inside the `web/` subdirectory. There is no monorepo root dev script; always `cd web` first.

## Launch

```bash
cd web && npm run dev
```

- Starts on **http://localhost:3000** (Next.js default).
- Run in background with `run_in_background: true` so the shell doesn't block.

## Verify

After launching, wait ~5 seconds then smoke-test:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`. Any other code means the server failed to start — check the background task output for errors.

## Notes

- `npm install` is not needed if `web/node_modules/` already exists.
- The server hot-reloads on file changes; no restart needed after edits.
- Port 3000 must be free. If it's already occupied (from a previous run), the new process will fail — kill the old one first.
