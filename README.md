# Flaves

Landing page for Flaves: one brief in, one finished ad out.

A fully static site. The waitlist form is a demo: nothing is sent, it only confirms with a toast.

## Stack

- Next.js 16.4 (App Router, Turbopack) with Cache Components and Partial Prefetching
- `ensureStatic = 'navigation'` on the root layout: the build fails if a route stops being fully prerendered
- React 19.3 with the React Compiler (native Rust version)
- Tailwind CSS v4, theme tokens in `app/globals.css`
- shadcn/ui on Base UI (`base-nova` style), no Radix
- Motion (Framer Motion) for animations, Sonner for toasts
- TypeScript 7, Biome 2 (strict) for lint and format

## Scripts

```bash
pnpm dev        # dev server on http://localhost:3000
pnpm build      # production build
pnpm lint       # Biome, fails on warnings
pnpm format     # Biome fixes + formatting
pnpm typecheck  # route types + tsc
```

## Layout

- `app/`: home, legal notice (`/legal-notice`), cookie policy (`/cookies`), 404
- `app/`: SEO files: `favicon.ico`, `icon.svg`, `apple-icon.png`, `manifest.ts`, `opengraph-image.tsx`, `robots.ts`, `sitemap.ts`
- `public/`: PWA icons referenced by the manifest (192, 512, maskable 512)
- `components/site/`: page sections, legal page layout, JSON-LD, motion helpers
- `components/ui/`: shadcn/ui components (Base UI)
- `lib/site.ts`: site identity and company details (BCE), used by metadata, JSON-LD and the legal pages
- `lib/metadata.ts`: per-page metadata (title, canonical, Open Graph, Twitter)
