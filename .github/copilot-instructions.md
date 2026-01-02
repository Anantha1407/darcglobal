# DARC Global - Copilot Instructions

## Project Overview
This is a **Next.js 16 (App Router)** marketing website for Dr. Aaditya's Rehab Centre (DARC), a pediatric neuro-rehab center in Chennai. The site promotes therapy services and handles contact/booking submissions via Google Sheets API.

## Tech Stack
- **Framework**: Next.js 16 with App Router (`app/` directory)
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 (PostCSS-based, no config file)
- **Fonts**: Geist Sans/Mono (via `next/font`) + Poppins (for marketing pages)
- **Animation**: Framer Motion for page transitions and scroll-based reveals
- **Icons**: react-icons (primarily `FaArrowRight` from FontAwesome)
- **Forms**: Google Sheets API (googleapis) + Resend for email notifications

## Architecture Patterns

### Routing Structure
- **Public pages**: `/` (home), `/aboutus`, `/services/*`, `/contactus`, `/book`, `/faq`
- **API routes**: `/api/contact` and `/api/booking` (POST only, submit to Google Sheets + send email)
- **Service pages**: Each therapy type has its own route under `app/services/[service-name]/page.tsx`

### Component Organization
1. **Shared components** live in `app/components/`
   - `Navbar.tsx`: Client component with dropdown menu, hide-on-scroll behavior
   - `Footer.tsx`: Static footer
   - `ScrollReveal.tsx`: Wrapper for Framer Motion scroll-triggered animations
   - `AnimatedStatCard.tsx`, `AnimatedMetric.tsx`: Use `useCountUp` hook for number animations
   - `TestimonialsCarousel.tsx`: Auto-playing carousel with YouTube embeds
   - `TherapyTimeline.tsx`, `FaqAccordion.tsx`: Content-specific components

2. **Page-specific components** (e.g., `ContactForm.tsx`) live next to their page file

3. **Custom hooks** in `app/hooks/`
   - `useCountUp.ts`: Intersection Observer + requestAnimationFrame for smooth count-up animations

### Styling Conventions
- **Tailwind-first**: All styling uses Tailwind utility classes (Tailwind v4 uses CSS-based configuration)
- **Font usage**: 
  - Import Poppins from `next/font/google` and apply via `className={poppins.className}`
  - Default fonts (Geist) set in root layout
- **Gradients**: Use `bg-gradient-to-r from-blue-600 to-purple-600` for brand colors
- **Spacing**: Consistent use of `max-w-7xl mx-auto px-4 md:px-6` for page containers
- **Responsive**: Mobile-first breakpoints (`md:`, `lg:`)

### Client vs Server Components
- **Server by default**: All pages and layout are Server Components
- **"use client"** directive only when needed:
  - Components using hooks (`useState`, `useEffect`, `useRef`)
  - Interactive elements (Navbar, forms, carousels, animations)
  - Framer Motion components

### Animation Patterns
- **Scroll animations**: Wrap sections in `<ScrollReveal>` component for fade-in-up effect
- **Count-up numbers**: Use `useCountUp` hook with `IntersectionObserver` to trigger animations on scroll
- **Navbar behavior**: Hide on scroll down, show on scroll up (tracked with `useState` + scroll event)

## API Integration

### Form Submission Flow (Contact & Booking)
Both `/api/contact` and `/api/booking` follow this pattern:
1. Validate required fields
2. Append row to Google Sheets ("Submissions" tab with 12 columns: Timestamp, Type, Name, Email, Phone, Age, Location, Message, Service, Preferred Date, Preferred Time, Notes)
3. Send email notification via Resend API
4. Return success/error JSON

**Environment variables** (see [CONTACT_FORM_SETUP.md](../CONTACT_FORM_SETUP.md)):
```env
GOOGLE_SHEETS_CLIENT_EMAIL=...
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=...
RESEND_API_KEY=re_...
```

### Google Sheets API Usage
- Uses **Service Account authentication** (not OAuth)
- Private key requires `.replace(/\\n/g, '\n')` to handle newline encoding
- Both forms write to same "Submissions" tab with "Type" column to differentiate

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint (Next.js config)
```

### File Naming
- **Pages**: `page.tsx` (App Router convention)
- **Layouts**: `layout.tsx` (root layout includes Navbar/Footer for all pages)
- **Components**: PascalCase (e.g., `TestimonialsCarousel.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useCountUp.ts`)
- **Assets**: Lowercase with descriptive names in `app/assets/`

### Path Aliases
- `@/*` maps to project root (configured in `tsconfig.json`)
- Example: `import { useCountUp } from "@/app/hooks/useCountUp"`

## Common Patterns & Conventions

### Adding New Service Pages
1. Create `app/services/[service-name]/page.tsx`
2. Add route to `Navbar.tsx` Services dropdown
3. Follow existing service page structure (hero section, content, CTA)

### Form Handling
- Use controlled inputs with `useState<FormData>`
- Display loading state (`isSubmitting`) and status messages
- POST to `/api/contact` or `/api/booking` with JSON body
- Show success/error messages in UI

### Image Optimization
- Import images from `app/assets/` for Next.js automatic optimization
- Use `<Image>` from `next/image` (not `<img>`)
- Exception: `TestimonialsCarousel.tsx` uses `<img>` for YouTube thumbnails (external URLs)

### Accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<section>`)
- Avoid unescaped apostrophes (use `&apos;` or `'` in JSX)
- Ensure interactive elements are keyboard-accessible

## Key Files Reference
- [CONTACT_FORM_SETUP.md](../CONTACT_FORM_SETUP.md): Complete setup guide for Google Sheets + Resend integration
- [app/layout.tsx](../app/layout.tsx): Root layout with Navbar/Footer wrapper
- [app/page.tsx](../app/page.tsx): Homepage with hero, stats, testimonials sections
- [app/components/Navbar.tsx](../app/components/Navbar.tsx): Main navigation with services dropdown
- [app/api/contact/route.ts](../app/api/contact/route.ts): Contact form API handler
- [app/hooks/useCountUp.ts](../app/hooks/useCountUp.ts): Intersection Observer-based count-up animation

## Testing & Debugging
- **Forms**: Test locally by submitting and checking Google Sheets + email delivery
- **Animations**: Check browser DevTools for Intersection Observer triggers
- **API errors**: Check server logs for Google Sheets/Resend failures (operations continue even if one service fails)
- **Build errors**: Run `npm run build` before deploying to catch TypeScript/ESLint issues
