# Deploying Luloyiso Funerals to Vercel

Vercel runs the full Next.js server (no static export needed), provides
automatic HTTPS, and the Hobby plan covers a custom domain at no cost. Using
Vercel also bypasses the reseller DNS cluster entirely: once the domain's
nameservers point at Vercel, the orphaned `host-ww.net` DNS zone no longer
matters.

| File | Purpose |
| --- | --- |
| `vercel.json` | Framework preset, Johannesburg region (`jnb1`), apex -> www redirect |
| `.env.example` | Template for production environment variables |

## 1. Import the project (one time)

1. Sign in at <https://vercel.com> with the GitHub account that owns the repo.
2. **Add New... -> Project**, choose `slmazwi-coder/luloyiso-funerals`.
3. Framework preset is detected as **Next.js**; keep the build/output defaults.
4. Click **Deploy**. This produces a `*.vercel.app` URL.

After that, every push to `main` deploys to production and every PR gets a
preview.

## 2. Add the custom domain

1. Project -> **Settings -> Domains**.
2. Add `www.luloyisofunerals.co.za` and set it as the **primary** domain.
3. Add `luloyisofunerals.co.za`; Vercel 301-redirects it to the primary
   (`vercel.json` also enforces this).

## 3. Point the domain at Vercel

The domain is registered at **HOSTAFRICA**. The current nameservers are
`dan1-dan4.host-ww.net` (the reseller cluster). To leave that cluster behind,
change the domain's nameservers in the HostAfrica client area:

1. HostAfrica client area -> **Domains** -> `luloyisofunerals.co.za` ->
   **Nameservers** / **Manage DNS**.
2. Replace `dan1.host-ww.net`, `dan2.host-ww.net`, `dan3.host-ww.net`,
   `dan4.host-ww.net` with:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
3. Save. Propagation is usually minutes, up to 24 hours.

If the registrar only allows DNS records (no nameserver change), instead set,
using the values Vercel shows in the Domains panel (they vary by account):

| Type | Name | Value |
| --- | --- | --- |
| A | `@` (apex) | the A value Vercel displays (e.g. `76.76.21.21`) |
| CNAME | `www` | the CNAME Vercel displays (e.g. `cname.vercel-dns.com`) |

Verify:

```bash
dig +short NS luloyisofunerals.co.za
dig +short www.luloyisofunerals.co.za
```

## 4. Environment variables

Settings -> Environment Variables -> Production:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.luloyisofunerals.co.za` |

Redeploy after adding variables so they are baked into the build.

## Notes

- Do not change `next.config.mjs` to `output: 'export'` for Vercel; Vercel runs
  the app as a server. `images.unoptimized: true` is currently set, which is
  fine, but on Vercel you can remove it to let Vercel optimize images.
- There are no server-side secrets in this app; `NEXT_PUBLIC_SITE_URL` is the
  only variable.
- After launch, add the site to Google Search Console using a DNS TXT record in
  the zone Vercel now manages.