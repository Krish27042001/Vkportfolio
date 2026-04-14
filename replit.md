# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Artifacts

### Digital Marketing Portfolio (`artifacts/portfolio`)
- **URL**: `/` (root)
- **Type**: React + Vite, single-page app, no backend
- **Description**: High-converting personal portfolio for Vamsi Krishna — Digital Marketing Specialist
- **Sections**: Hero, About, Skills, Tevatel Case Study, Analytics Tools, Portfolio/Campaigns, Testimonials, Contact, Footer
- **Tech**: framer-motion animations, recharts for campaign metrics, react-icons, lucide-react
- **SEO**: Full meta tags, Open Graph, Twitter Card, JSON-LD Person schema, robots.txt, sitemap.xml
- **Theme**: Dark premium — deep navy/midnight gradients with electric blue/violet accents, Syne + Inter fonts

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
