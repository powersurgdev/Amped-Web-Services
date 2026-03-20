# Amped Web Studios - Landing Page

## Overview

This is a one-page landing website for "Amped Web Studios," a Florida-based web design, SEO, hosting, and digital marketing agency. The application is built as a modern, conversion-focused marketing site with a tech-forward aesthetic inspired by Stripe's design language. The site features smooth scrolling, animations, and a contact form for lead generation.

The tech stack consists of a React frontend with TypeScript, Express.js backend, and uses shadcn/ui components with Tailwind CSS for styling. The application includes a contact form submission system that stores leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**Routing**: Uses wouter for client-side routing, though the application is primarily a single-page layout

**Component Library**: shadcn/ui built on Radix UI primitives, providing accessible, customizable components

**Styling**: 
- Tailwind CSS with custom design tokens
- Dark theme by default with electric blue/teal accent colors
- Custom CSS variables for theming defined in `client/src/index.css`
- Inter/Manrope font families via Google Fonts

**State Management**:
- React Query (@tanstack/react-query) for server state
- React Hook Form with Zod validation for form handling
- No global state management library (not needed for single-page site)

**Animation**: Framer Motion for scroll-based animations and micro-interactions

**Design System**:
- Follows design guidelines in `design_guidelines.md`
- Spacing primitives based on Tailwind units (p-4, p-6, p-8, py-12, etc.)
- Component variants using class-variance-authority
- Consistent hover states and elevation effects

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development vs Production**:
- Development mode (`server/index-dev.ts`): Uses Vite dev server with HMR
- Production mode (`server/index-prod.ts`): Serves static built files

**API Structure**:
- RESTful API endpoint: `POST /api/contact` for form submissions
- Request/response validation using Zod schemas
- Error handling with descriptive messages

**Data Validation**: 
- Shared Zod schemas between frontend and backend (`shared/schema.ts`)
- Type-safe data models using drizzle-zod

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL

**Database Provider**: Neon Database (@neondatabase/serverless)

**Schema Design**:
- `users` table: Basic user authentication structure (currently unused)
- `contact_submissions` table: Stores contact form leads with fields for name, email, company, budget, message, and timestamp

**Storage Pattern**:
- Abstracted storage interface (`IStorage`) in `server/storage.ts`
- PostgreSQL database with Drizzle ORM (`DatabaseStorage` implementation)
- Database connection configured in `server/db.ts` using Neon serverless driver

**Migration Strategy**: Drizzle Kit for schema migrations with `npm run db:push`

### External Dependencies

**UI Component Libraries**:
- @radix-ui/* - Headless UI primitives for accessibility
- shadcn/ui - Pre-built component system
- Framer Motion - Animation library
- Lucide React - Icon system

**Form Handling**:
- react-hook-form - Form state management
- @hookform/resolvers - Zod integration for validation

**Database & ORM**:
- @neondatabase/serverless - Serverless PostgreSQL driver
- drizzle-orm - TypeScript ORM
- drizzle-zod - Zod schema generation from Drizzle tables

**Development Tools**:
- Vite - Build tool and dev server
- @replit/vite-plugin-* - Replit-specific development enhancements
- PostCSS with Tailwind and Autoprefixer

**Utilities**:
- clsx & tailwind-merge (via cn utility) - Class name management
- date-fns - Date formatting
- zod - Runtime type validation
- wouter - Lightweight routing

### Architecture Decisions

**Single Page Application**: 
- Chosen for simplicity and smooth user experience
- All sections are on one page with anchor-link navigation
- Reduces server requests and provides instant navigation

**Component Co-location**:
- Page components in `client/src/pages/`
- Reusable components in `client/src/components/`
- Example components for development in `client/src/components/examples/`

**Type Safety**:
- Shared types between client and server via `shared/` directory
- Path aliases configured in tsconfig.json (@/, @shared/*, @assets/*)
- Zod for runtime validation matching TypeScript types

**Build Strategy**:
- Frontend built with Vite to `dist/public`
- Backend bundled with esbuild to `dist/index.js`
- Production serves static frontend with Express fallback to index.html

**Form to API Flow**:
1. User fills contact form with validation (Zod schema)
2. Form submits to POST /api/contact
3. Server validates with same Zod schema
4. Data stored via storage interface
5. Success/error response returned to client
6. Toast notification displayed to user

**Styling Philosophy**:
- Utility-first with Tailwind CSS
- Custom design tokens for brand consistency
- Hover and active states with elevation effects
- Responsive design with mobile-first approach