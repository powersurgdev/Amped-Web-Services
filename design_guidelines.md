# Sergios Designs - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Stripe's tech-forward aesthetic with sophisticated animations, clean typography, and modern micro-interactions.

## Visual Identity

**Brand Character**: Solo/freelance studio that's modern, clean, and confident. Professional and straightforward without being corporate or playful.

**Theme**: Dark, tech-forward with subtle gradient backgrounds, electric blue/teal accents for CTAs and highlights, abundant whitespace, rounded cards with sophisticated hover states and subtle shadows.

## Typography
- **Font Family**: Inter or Manrope (Google Fonts)
- **Hierarchy**: 
  - H1 (Hero): Bold, large, attention-grabbing
  - H2 (Section titles): Clear, prominent
  - Body: Clean, readable 16-18px base
  - Small text: 14px for supporting copy
- **Spacing**: Use Tailwind units of 2, 4, 6, and 8 for consistent rhythm

## Layout System

**Spacing Primitives**: Primary units are `p-4`, `p-6`, `p-8`, `py-12`, `py-16`, `py-20`, `py-24` for section padding. Mobile uses smaller variants (`py-8`, `py-12`).

**Container Strategy**:
- Full-width sections with inner `max-w-7xl` containers
- Content sections: `max-w-6xl`
- Text-heavy areas: `max-w-4xl`

**Section Layout**:
1. **Header**: Sticky, slim, translucent with blur effect on scroll
2. **Hero**: Full-width, two-column (left: content, right: mockup graphic)
3. **Social Proof Bar**: Single row, centered, minimal icons
4. **Services**: 4-card grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)
5. **Portfolio**: 3x2 grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
6. **Process**: 3-column horizontal timeline
7. **About**: Two-column (text left, visual right)
8. **CTA Strip**: Full-width centered
9. **Contact**: Single column form, max-width constrained
10. **Footer**: Simple horizontal layout

## Component Library

### Navigation
- Sticky header with logo left, nav links center, CTA button right
- Anchor links: Services, Portfolio, Process, About, Contact
- Primary button: "Get a Free Quote" (electric blue/teal)
- Translucent background with backdrop blur on scroll

### Hero Section
- Badge component: "Website Design • Hosting • Care Plans"
- Large H1 headline with supporting subheadline
- Two-button layout: Primary CTA + Ghost secondary button
- Right side: Techy mockup graphic (browser window + analytics overlay + server icon)

### Service Cards
- Icon + title + description structure
- 4 cards: Custom Design, Development & Launch, Hosting & Care, Optimization & Refresh
- Hover effect: subtle lift with shadow increase

### Portfolio Items
- Screenshot thumbnail with overlay on hover
- Project title + one-line description + tag
- Scale-up hover effect with "View details" overlay
- Lightbox modal for enlarged view

### Process Timeline
- 3-step horizontal layout with numbered steps
- Step title + description format
- Visual connecting line between steps
- Bottom note: "Most projects move from first call to launch in just a few weeks"

### Contact Form
Fields: Full Name*, Email*, Company/Website, Budget dropdown (Under $1,500 | $1,500–$3,000 | $3,000+), Project Details (textarea)
- Clear labels and placeholders
- Prominent submit button
- Reassurance text below: "No spam. No hard sales. Just an honest conversation about what you need."

### CTA Strips
- Full-width with gradient or solid dark background
- Centered headline + subtext + prominent button
- Generous vertical padding (`py-16` to `py-20`)

## Animations & Interactions

**Stripe-Inspired Effects**:
- Smooth scroll between sections
- Intersection observer fade/slide-in on scroll for all sections
- Subtle parallax effect on hero mockup graphic
- Header blur transition on scroll
- Card hover: scale + shadow elevation
- Button hover: slight scale + brightness increase
- Portfolio hover: scale 1.05 + overlay fade-in
- Form focus states: accent border glow

**Performance**: Keep animations subtle and performant - use CSS transforms and opacity only

## Images

**Hero Right Side**: Modern mockup composition showing browser window with website preview, floating analytics graph overlay, and small hosting server icon. Tech-forward, not cheesy. Use subtle shadows and layering.

**Portfolio Section**: 6 placeholder project screenshots representing diverse work (local business, e-commerce, landing pages). Professional mockups in browser frames.

**About Section**: Simple avatar or abstract geometric icon on right side.

## Accessibility
- High contrast text on dark backgrounds
- Clear focus states with accent color borders
- Form validation with inline error messages
- Smooth scroll with `scroll-behavior: smooth`
- All interactive elements keyboard accessible

## Responsive Behavior
- Mobile: Stack all multi-column layouts to single column
- Tablet: Services 2-col, Portfolio 2-col, Process vertical
- Desktop: Full multi-column layouts as specified
- Hero: Stack vertically on mobile with mockup below text
- Header: Hamburger menu on mobile with slide-out navigation

## Conversion Optimization
- Hero CTA most prominent (size, color, position)
- Multiple touchpoints to contact form throughout page
- Clear value propositions in every section
- Social proof elements early in page flow
- Form positioned as final conversion point with supporting CTA strip above