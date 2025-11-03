# Current Status - French Tutor Landing Page

**Running at:** http://localhost:3000

## Architecture

### Content Organization
- ProfileSection = Instructor credentials only
- TestimonialsSection = Student outcomes (stats bar) + social proof (testimonial cards)
- Separation of concerns following industry best practices (Stripe, Duolingo pattern)

### Internationalization
- Full i18n system: EN/RU via `LanguageContext`
- All text in `/locales/en.json` and `/locales/ru.json`
- Language toggle in top-right corner
- All components use `useLanguage()` hook
- **Default language: Russian (RU)**
- **Updated (Nov 3, 2025)**: 
  - Hero: Simplified title, shorter bullets, new CTA text with subtext field
  - Benefits: Renamed to "Your Result" / "Ваш результат", shorter card descriptions
  - How It Works: Multi-line descriptions, shortened titles
  - Testimonials: Updated with real student stories (DELF/DALF full course, 8-week sprint, work/life French), results chips changed to "B1 → B2 за 3–4 месяца · Спринт 8 недель · Для работы и жизни"

### Theme System
- Centralized in `lib/theme.ts` - single source of truth
- All colors, backgrounds, borders, text controlled from theme file
- No hardcoded Tailwind classes or hex values
- Change `theme.ts` to update entire site

---

## Files Created

### `/locales`
- `en.json` / `ru.json` - All site translations (hero, benefits, testimonials, howItWorks, profile, faq, finalCTA)

### `/lib`
- `types.ts` - TypeScript interfaces
- `theme.ts` - Centralized color system (primary, citron, accent, backgrounds, text, borders)
- `LanguageContext.tsx` - i18n React Context provider
- `data.ts` - Deprecated (using translation files)

### `/components`
- `LanguageToggle.tsx` - EN/RU switcher
- `HeroSection.tsx` - 5-column grid, stats bar, examiner badge (updated: CTA with subtext)
- `ProfileSection.tsx` - Instructor credentials (stats, certificates, experience)
- `BenefitsSection.tsx` - 3 benefit cards (updated: optional badge, shorter descriptions)
- `HowItWorksSection.tsx` - 3 process steps (updated: multi-line descriptions, shortened titles)
- `TestimonialsSection.tsx` - Results stats bar + 3 testimonial cards
- `FAQSection.tsx` - Radix accordion
- `FinalCTASection.tsx` - CTA with Calendly integration

### `/app`
- `page.tsx` - Main landing page
- `layout.tsx` - Root layout with LanguageProvider + LanguageToggle
- `globals.css` - Tailwind v4 import, Radix animations
- `tailwind.config.ts` - Custom colors, Radix animations

---

## Tech Stack
- Next.js 16.0.0 (App Router, Turbopack)
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- @radix-ui/react-accordion
- lucide-react

---

## How to Run
```bash
cd /Users/myrza/Dev/zhyldyz
npm run dev
```

---

## Design System

### Colors
- All colors defined in `lib/theme.ts`
- Navy-based palette: primary, citron (accent), accent (star ratings)
- Update `theme.ts` to change entire site

### Layout
- Hero: 5-column grid (3:2 text:image), examiner badge overlay
- Benefits/How It Works/Testimonials: 3-column grids
- Profile: Stats, certificates, experience
- FAQ: Single column accordion
- All sections: max-w-6xl or max-w-7xl with responsive padding

### Responsive Design
- Mobile-first approach using Tailwind breakpoints
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- All components fully responsive for mobile, tablet, desktop
- Text sizing: scales from mobile (text-sm/base) to desktop (text-lg/xl)
- Spacing: adapts from compact mobile (p-4, gap-3) to spacious desktop (p-8, gap-8)
- Image sizing: fluid width with max-width constraints (aspect-ratio maintained)
- Grid layouts: stack on mobile (grid-cols-1), expand on desktop (md:grid-cols-3)
- Buttons: full-width on mobile (w-full), auto-width on desktop (sm:w-auto)