# NUVEX public landing

Independent static Next.js landing page. It does not import, call, or share the Control de Afiliaciones NestJS app or SQLite database.

## Local development

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Set the public WhatsApp number in international format without `+` (for example `573001234567`). The landing does not collect identity documents or personal information. WhatsApp links contain a service-specific prefilled message.

## Cloudflare Pages

The app uses Next.js static export (`output: "export"`) and writes the site to `out/`.

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `pnpm build`
- Build output directory: `out`
- Node.js version: 20.9 or later

For a local Pages preview run `pnpm build` then `pnpm preview`. To deploy using Wrangler, authenticate with Cloudflare and run `pnpm deploy`.

Commercial details are in `lib/site.ts` and can be overridden at build time with `NEXT_PUBLIC_NUVEX_WHATSAPP`, `NEXT_PUBLIC_NUVEX_EMAIL`, and `NEXT_PUBLIC_NUVEX_CITY`.
