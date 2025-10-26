# Current Status - French Tutor Landing Page

**Last Updated:** October 26, 2025  
**Running at:** http://localhost:3000

## Recent Update (October 26, 2025)

### Content Updates
- Hero copy: "French you can prove—for exams, work, and migration"
- Hero subtitle: "1:1 coaching for adults: speaking-first lessons, a CEFR-aligned roadmap, and tracked gains every 2 weeks to hit DELF/DALF/TEF goals"
- Hero CTA: "Book a 25-min trial → get your 90-day plan"
- Added micro-proof strip below hero CTA (Former Director, Alliance Française • Official DELF/DALF & TEF examiner • DALF C2 • 200+ adult learners coached)
- Updated Benefits to "What I Solve (for serious learners)" with **3 tracks** (Exam & Migration, Career Track, Foundations Track) - Rule of 3
- 3 exam-focused testimonials - Rule of 3
- 6 exam/migration-focused FAQs (accordion format)
- Added ProfileSection with 7 credentials
- Added HowItWorksSection with **3 steps** (Diagnostic→Roadmap, Talk-First Lessons, Practice & Proof) - Rule of 3
- Added ResultsSection with **3 outcomes** (A2→B1, DELF B2, TEF Canada) - Rule of 3
- Added FinalCTASection

### Design Updates
- Complete color redesign: slate/coral theme (professional, modern)
- Hero section: 5-column grid (3:2 ratio, text-dominant)
- Reduced photo size for better balance (max-w-sm)
- Fixed button visibility: inline styles with explicit hex colors (#f43f5e bg, #ffffff text)
- Consistent coral/slate theme across all sections
- **Applied Rule of 3**: Benefits (3 tracks), How It Works (3 steps), Results (3 outcomes), Testimonials (3 stories)
- Removed CTA buttons from ProfileSection and HowItWorksSection (cleaner flow)
- **Optimized page flow**: Hero → Benefits (what) → Results+Testimonials (proof) → How It Works (process) → Profile (credentials) → FAQ → Final CTA

### Technical
- Calendly integration active (https://calendly.com/d/cspz-sps-35k)
- BenefitsSection converted to Client Component for event handlers

---

## Files Created

### `/lib`
- `types.ts` - TypeScript interfaces (Benefit, Testimonial, FAQ)
- `data.ts` - Static content (4 benefits, 3 testimonials, 6 FAQs)
- `theme.ts` - Centralized slate/coral color system

### `/components`
- `HeroSection.tsx` - Client component, 5-column grid (3:2), exam-focused copy, micro-proof strip (credentials badges), inline-styled button
- `ProfileSection.tsx` - Server component, 7 credentials in 2-column grid, icons for each (no CTA button)
- `BenefitsSection.tsx` - Client component, 3-column grid (3 tracks: Exam & Migration, Career Track, Foundations Track), coral/slate theme, inline-styled CTA
- `HowItWorksSection.tsx` - Server component, 3-column grid, 3 steps with numbered badges (no CTA button)
- `ResultsSection.tsx` - Server component, 3-column grid, 3 real outcomes with checkmarks
- `TestimonialsSection.tsx` - Server component, 3-column grid, amber stars, coral accents
- `FAQSection.tsx` - Client component, Radix UI accordion, coral/slate theme
- `FinalCTASection.tsx` - Client component, centered CTA with Calendly integration

### `/app`
- `page.tsx` - Main landing page (Hero → Benefits → Results → Testimonials → How It Works → Profile → FAQ → Final CTA)
- `layout.tsx` - Metadata + Calendly CSS
- `globals.css` - Tailwind v4 import, text-gradient-coral utility, Radix animations
- `tailwind.config.ts` - Custom coral (50-900) and slate (50-900) colors, Radix animations

---

## Tech Stack
- Next.js 16.0.0 (App Router, Turbopack)
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- @radix-ui/react-accordion 1.2.12
- lucide-react 0.548.0

---

## Issues Fixed
1. **Tailwind v4 Compatibility** - Changed `@tailwind` to `@import "tailwindcss"` in globals.css
2. **Server Component Error (HeroSection)** - Added `'use client'` for onClick handler
3. **Server Component Error (BenefitsSection)** - Added `'use client'` for event handlers on CTA button
4. **Button Visibility** - Switched to inline styles with explicit hex colors (#f43f5e bg, #ffffff text)
5. **Photo Size** - Reduced from max-w-md to max-w-sm for better balance
6. **Layout Balance** - Changed hero from 2-column to 5-column grid (3:2) for text dominance
7. **Color Scheme** - Redesigned from green to professional slate/coral theme
8. **Content Restructure** - Updated all copy to exam-focused messaging (DELF/DALF/TEF)

---

## How to Run
```bash
cd /Users/myrza/Dev/zhyldyz
npm run dev
```

---

## Design System

### Colors (Slate + Coral Theme)
- Primary Text: slate-900/600
- Primary BG: slate-50/white
- Accent: coral-500 (#f43f5e)
- Accent Hover: coral-600 (#e11d48)
- Accent Light: coral-50/100/200
- Stars: amber-400

### Typography
- H1: 3xl → 5xl (bold, coral gradient accent)
- H2: 3xl → 4xl (bold, slate-900)
- Body: base → lg (slate-600)
- Font: Geist Sans

### Layout
- Hero: max-w-7xl, 5-column grid (3:2 text:image)
- Profile: max-w-6xl, 2-column grid (7 credentials)
- Benefits: max-w-6xl, **3-column grid (3 tracks)** ✓ Rule of 3
- How It Works: max-w-6xl, **3-column grid (3 steps)** ✓ Rule of 3
- Results: max-w-6xl, **3-column grid (3 outcomes)** ✓ Rule of 3
- Testimonials: max-w-6xl, **3-column grid (3 stories)** ✓ Rule of 3
- FAQ: max-w-3xl, single column accordion (6 items)
- Final CTA: max-w-4xl, centered

### Buttons
- Background: #f43f5e (coral-500)
- Hover: #e11d48 (coral-600)
- Text: #ffffff (white)
- Styled with inline styles for visibility

---

## Known Warnings
- Next.js workspace root warning (multiple lockfiles) - no impact on functionality