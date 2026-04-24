# MyTaskly Landing (`mytaskly.io`)

Marketing site for MyTaskly. Deployed standalone on Vercel and pointed at the
apex domain `mytaskly.io`. The SPA (`app.mytaskly.io`) and API
(`api.mytaskly.io`) live elsewhere — see `context/deployment/`.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- `lucide-react` for icons

## Local dev

```bash
npm install
npm run dev
# → http://localhost:3002
```

Runs on `3002` so it doesn't collide with the app frontend (`3000`) or
any secondary dev servers.

## Environment variables

Only two are read — both public. Copy `.env.example` to `.env.local` if you
want to override.

| Key                     | Default                   | Purpose                       |
| ----------------------- | ------------------------- | ----------------------------- |
| `NEXT_PUBLIC_APP_URL`   | `https://app.mytaskly.io` | Used for CTA links (/register, /login) |
| `NEXT_PUBLIC_SITE_URL`  | `https://mytaskly.io`     | Used for Open Graph metadata  |

## Vercel deploy

1. **Add New → Project** from the same GitHub repo as the other apps.
2. **Root Directory:** `apps/landing`
3. **Framework Preset:** Next.js (auto-detected)
4. **Build Command / Install Command / Output Directory:** all defaults.
5. **Environment Variables (Production):** set the two above.
6. **Domains:** add `mytaskly.io` and `www.mytaskly.io` (Vercel will give
   you the A / CNAME targets — add them at Hostinger, see
   `context/deployment/02_DOMAIN_DNS_HOSTINGER.md`).

Because this project does not depend on the monorepo's workspace packages,
the default `npm install` at `apps/landing` is enough — no monorepo
install-from-root gymnastics needed (unlike `apps/frontend`).

## Structure

```
apps/landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← root layout, fonts, metadata
│   │   ├── page.tsx         ← composes sections
│   │   └── globals.css      ← Tailwind + theme tokens
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Modules.tsx      ← PMS / CRM / HR
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx      ← $49 / $99 / $199
│   │   ├── Faq.tsx
│   │   ├── Cta.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── lib/
│       └── config.ts        ← APP_URL / REGISTER_URL / LOGIN_URL
├── next.config.ts
├── tailwind handled by @tailwindcss/postcss (no tailwind.config)
└── tsconfig.json
```

To change pricing or copy, edit the relevant component — every section
lives in its own file and is composed in `src/app/page.tsx`.
