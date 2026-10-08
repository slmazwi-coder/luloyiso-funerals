# AGENTS.md

## Project

Next.js 16 (App Router) marketing site for Luloyiso Funerals. Package manager
is pnpm (pin `pnpm@12.3.4`, activated via corepack). Routes: `/`, `/coffins`,
`/contact`, `/services`, `/scheme`, `/tombstones`.

## Commands

```bash
corepack prepare pnpm@12.3.4 --activate   # if pnpm is not on PATH
pnpm install --frozen-lockfile
pnpm build                                # production build
```

## Deployment

Hosted on **Vercel**, project `slmazwi-coder-luloyiso-funerals`
(`prj_WN8F6e4qjuuZkilYoytq7sDpRKVB` under team `slmazwi-coders-projects`).
The project is linked to `slmazwi-coder/luloyiso-funerals`; pushes to `main`
deploy to production automatically.

- Canonical domain: `https://www.luloyisofunerals.co.za`
- `luloyisofunerals.co.za` 308-redirects to the `www` host (see `vercel.json`)
- Region: `jnb1` (Johannesburg)
- Env var: `NEXT_PUBLIC_SITE_URL=https://www.luloyisofunerals.co.za`

See `DEPLOY_VERCEL.md` for the domain/DNS setup.

Context: the domain's registrar is HOSTAFRICA and its original nameservers were
`dan1-dan4.host-ww.net` (a reseller DNS cluster) where a stale DNS zone blocked
adding the domain at the host. Vercel avoids that cluster. If DNS is ever moved
back to a shared host, note that plain FTP hosting cannot run the Next.js
server — it would require a static export (`output: 'export'`).
