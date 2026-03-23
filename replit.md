# Amped Web Studios - Multi-Page Marketing Website

## Overview

This is a multi-page marketing website for "Amped Web Studios," a Florida-based web design, SEO, hosting, and digital marketing agency. The application is built as a modern, conversion-focused marketing site with a tech-forward aesthetic inspired by Stripe's design language. The site features smooth scrolling, animations, and a contact form for lead generation.

The tech stack is Next.js 15 with React 19, App Router, Tailwind CSS, shadcn/ui, and Framer Motion. The application includes a contact form submission system that stores leads in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with React 19, App Router, and SSR

**Routing**: Next.js App Router with file-based routing in `app/` directory

**Component Library**: shadcn/ui built on Radix UI primitives, providing accessible, customizable components

**Styling**: 
- Tailwind CSS with custom design tokens
- Dark theme (permanent, no toggle) with electric blue accent colors
- Custom CSS variables for theming defined in `app/globals.css`
- Inter font via `next/font/google` (loaded as CSS variable `--font-inter`)

**State Management**:
- React Query (@tanstack/react-query) for server state
- React Hook Form with Zod validation for form handling

**Animation**: Framer Motion v12 for scroll-based animations and micro-interactions

**Design System**:
- Follows design guidelines in `design_guidelines.md`
- Spacing primitives based on Tailwind units (p-4, p-6, p-8, py-12, etc.)
- Component variants using class-variance-authority
- Consistent hover states and elevation effects

### Pages & Routing

- `/` — Home (Hero, SocialProof, Portfolio, Pricing, Services, Process, About, CTAStrip, Contact)
- `/services` — All services overview
- `/services/web-design` — Custom Website Design
- `/services/web-development` — Development & Launch
- `/services/hosting-care` — Hosting & Care Plans
- `/services/seo-local-search` — SEO & Local Search
- `/services/website-refresh` — Website Optimization
- `/services/digital-marketing` — Digital Marketing
- `/industries` — All industries overview
- `/industries/home-services`, `/industries/contractors`, `/industries/restaurants`, etc.
- `/portfolio` — Portfolio
- `/contact` — Contact page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

### Backend Architecture

**Server Framework**: Next.js API routes (App Router route handlers)

**API Structure**:
- `POST /api/contact` for form submissions
- Request/response validation using Zod schemas

**Data Validation**: 
- Shared Zod schemas (`shared/schema.ts`)
- Type-safe data models using drizzle-zod

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL

**Database Provider**: Neon Database (@neondatabase/serverless)

**Schema Design**:
- `users` table: Basic user authentication structure (currently unused)
- `contact_submissions` table: Stores contact form leads with fields for name, email, company, budget, message, and timestamp

**Migration Strategy**: Drizzle Kit for schema migrations with `npm run db:push`

### Key Files

- `app/layout.tsx` — Root layout with Header, Footer, Providers, and `next/font` Inter loading
- `app/page.tsx` — Home page (server component with metadata, imports client components)
- `app/providers.tsx` — Client-side providers (QueryClientProvider, TooltipProvider, Toaster)
- `next.config.ts` — Next.js config with `@assets` webpack alias, `allowedDevOrigins`, `images.unoptimized`
- `components/Header.tsx` — Responsive header with dropdown nav menus
- `components/Footer.tsx` — Site footer with links and branding
- `components/Hero.tsx` — Home page hero with AnimatedText character animation
- `components/IndustryPageTemplate.tsx` — Reusable template for industry pages
- `components/ServicePageTemplate.tsx` — Reusable template for service pages
- `shared/schema.ts` — Drizzle ORM schema and Zod validation schemas
- `app/globals.css` — Theme CSS variables, Tailwind utilities
- `design_guidelines.md` — Design system documentation

### Architecture Decisions

**Next.js 15 App Router**:
- Server components for pages (metadata export for SEO)
- Client components for interactive UI (`'use client'` directive)
- Font loading via `next/font/google` (NOT manual `<link>` tags — these cause hydration errors)
- Favicon via metadata `icons` property

**Font Loading**:
- IMPORTANT: Do NOT use manual `<link>` tags in `<head>` for fonts — this causes hydration mismatches in Next.js 15
- Use `next/font/google` with CSS variable approach (`--font-inter`)
- The CSS variable is referenced in `app/globals.css` via `--font-sans: var(--font-inter), Inter, ...`

**Image Optimization**:
- All portfolio and mockup images converted to WebP format (95-98% size reduction)
- Portfolio images use Next.js `<Image>` component with `fill`, `sizes`, and `priority` props
- Service page template portfolio section uses Next.js `<Image>` with `fill` and `sizes`
- Industry page template mockups reference `.webp` files from `/mockups/`
- `next.config.ts` enables `formats: ['image/webp', 'image/avif']`

**Logo**:
- Located at `attached_assets/Amped-Web-Studios-Logo.webp` (WebP format)
- Imported via `@assets/Amped-Web-Studios-Logo.webp` webpack alias
- Used with Next.js `<Image>` component in Header and Footer

**Hero Animation Style**:
- Uses `<span className="text-primary"><AnimatedText text="..." delay={0.6} /></span>`
- AnimatedText component does character-by-character roll-up animation
- All service/industry hero pages follow this same pattern

**Styling Philosophy**:
- Utility-first with Tailwind CSS
- Custom design tokens for brand consistency
- Hover and active states with elevation effects
- Responsive design with mobile-first approach
- Dark theme only (no light/dark toggle)
