# Amped Web Studios

Marketing website for Amped Web Studios — a web design and development agency serving small businesses across 10+ industries.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript 5.6
- **Styling:** Tailwind CSS 3, shadcn/ui, Framer Motion
- **Database:** PostgreSQL via Neon (serverless), Drizzle ORM
- **Email:** SendGrid
- **Analytics:** Vercel Analytics, Google Analytics
- **Hosting:** Vercel

## Prerequisites

- **Node.js 20** (enforced via `.nvmrc` and `engines` field)
- A [Neon](https://neon.tech) PostgreSQL database
- A [SendGrid](https://sendgrid.com) API key

## Getting Started

```bash
# Use the correct Node version
nvm use

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then fill in your values (see below)

# Push the database schema
npm run db:push

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:3000`.

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `SENDGRID_API_KEY` | SendGrid API key for email delivery |
| `SENDGRID_FROM_EMAIL` | Sender email address |
| `NOTIFICATION_EMAIL` | Email address that receives contact form submissions |

## Project Structure

```
app/
  api/contact/         # Contact form API route
  services/            # 5 service pages (web-design, web-development, etc.)
  industries/          # 10 industry pages (real-estate, restaurants, etc.)
  contact/             # Contact page
  portfolio/           # Portfolio page
  privacy/             # Privacy policy
  terms/               # Terms of service
components/
  ui/                  # shadcn/ui component library
  Hero.tsx             # Page sections (Hero, Pricing, Services, etc.)
  IndustryPageTemplate.tsx   # Reusable industry page layout
  ServicePageTemplate.tsx    # Reusable service page layout
lib/
  db.ts                # Database connection (Neon + Drizzle)
  emailService.ts      # SendGrid email templates
  queryClient.ts       # React Query configuration
  storage.ts           # Database access layer
  utils.ts             # Utility functions
shared/
  schema.ts            # Drizzle database schema + Zod validators
hooks/
  use-mobile.tsx       # Mobile breakpoint detection
  use-toast.ts         # Toast notifications
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run check` | TypeScript type check |
| `npm run db:push` | Push schema changes to database |

## Database

Two tables defined in `shared/schema.ts`:

**users** — basic credentials (unused in current site, reserved for future admin)

**contact_submissions** — stores form submissions with name, email, company, budget tier, message, and timestamp

## Deployment

Deployed to Vercel. Push to `main` triggers automatic builds.
