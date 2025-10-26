# French Tutor Landing Page - Technical Specification

## Tech Stack
- Next.js 14+ (App Router, static generation)
- TypeScript
- Tailwind CSS
- Radix UI (Accordion for FAQ)
- Lucide React (icons)

## Project Structure
```
/app
  page.tsx                          # Main page, imports all sections
  layout.tsx                        # Root layout with metadata
  globals.css                       # Tailwind + custom styles
/components
  HeroSection.tsx                   # Section 1: Hero + CTA
  BenefitsSection.tsx               # Section 2: 3 benefits grid
  TestimonialsSection.tsx           # Section 3: 3 reviews
  FAQSection.tsx                    # Section 4: Accordion FAQs
/lib
  data.ts                           # All static content
  types.ts                          # TypeScript interfaces
/public
  /images                           # (if needed for avatars/icons)
```

## Page Layout (Vertical Order)
1. HeroSection (full viewport height recommended)
2. BenefitsSection
3. TestimonialsSection  
4. FAQSection
5. Footer (optional, can be in page.tsx)

---

## Data Structures (`/lib/types.ts`)

```typescript
export interface Benefit {
  id: string;
  icon: string;              // Lucide icon name
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;             // e.g., "Business Professional"
  text: string;
  rating: 5;                 // Always 5
  avatar?: string;           // Optional image path
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
```

---

## Static Data (`/lib/data.ts`)

```typescript
import { Benefit, Testimonial, FAQ } from './types';

export const benefits: Benefit[] = [
  {
    id: 'benefit-1',
    icon: 'Clock',
    title: 'Save Time',
    description: 'Flexible scheduling with online lessons. No commute, just log in and start learning from anywhere.',
  },
  {
    id: 'benefit-2',
    icon: 'User',
    title: 'Personalized Learning',
    description: 'Custom curriculum tailored to your goals. One-on-one attention at your own pace.',
  },
  {
    id: 'benefit-3',
    icon: 'TrendingUp',
    title: 'Proven Results',
    description: 'Structured approach with real conversation practice. Track your progress lesson by lesson.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah M.',
    role: 'Business Professional',
    text: 'The lessons are perfectly tailored to my needs. I went from basic phrases to having business conversations in just 3 months.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'James K.',
    role: 'Graduate Student',
    text: 'Best investment in my education. The flexible scheduling and personalized approach made all the difference.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Emily R.',
    role: 'Travel Enthusiast',
    text: 'I finally feel confident speaking French. The trial lesson convinced me immediately. Highly recommend!',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What level do you teach?',
    answer: 'I work with students at all levels, from complete beginners to advanced learners looking to refine their skills.',
  },
  {
    id: 'faq-2',
    question: 'How long are the lessons?',
    answer: 'Standard lessons are 60 minutes. Trial lessons are 30 minutes to assess your level and discuss your goals.',
  },
  {
    id: 'faq-3',
    question: 'What materials do I need?',
    answer: 'Just a computer with stable internet and a quiet space. I provide all learning materials digitally.',
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation policy?',
    answer: 'You can reschedule or cancel up to 24 hours before the lesson with no charge.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer package deals?',
    answer: 'Yes! I offer packages of 5, 10, and 20 lessons with discounted rates. Details provided after your trial lesson.',
  },
];
```

---

## Component Specifications

### 1. HeroSection (`/components/HeroSection.tsx`)

**Layout:**
```
Container (max-w-4xl, centered, padding)
  ├─ Heading (h1, large, bold, centered)
  ├─ Subheading (p, medium, centered, text-muted)
  └─ CTA Button (centered, large, primary color)
```

**Props:** None

**Content:**
- **Heading:** "Master French with Personalized Online Tutoring"
- **Subheading:** "One-on-one lessons tailored to your goals. Start with a free trial lesson."
- **Button text:** "Book Free Trial Lesson"
- **Button action:** `onClick` handler (placeholder function for now, e.g., `console.log('Open calendar')`)

**Styling:**
- Full section min-height: `min-h-screen` or `min-h-[600px]`
- Flexbox: vertical center alignment
- Background: subtle gradient or solid color
- Button: prominent (e.g., `bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg`)

---

### 2. BenefitsSection (`/components/BenefitsSection.tsx`)

**Layout:**
```
Container (max-w-6xl, centered, padding)
  ├─ Section Heading (h2, centered, "Why Learn With Me")
  └─ Grid (3 columns on desktop, 1 on mobile)
      ├─ BenefitCard
      ├─ BenefitCard
      └─ BenefitCard
```

**Props:** None (imports `benefits` from `/lib/data.ts`)

**BenefitCard Structure (inline or separate component):**
```tsx
// Each card:
<div className="card-wrapper">
  <Icon />              {/* Lucide icon, size 40-48px */}
  <h3>{title}</h3>      {/* Bold, text-xl */}
  <p>{description}</p>  {/* text-gray-600 */}
</div>
```

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-8`

**Icon mapping:**
- Use `lucide-react` dynamic imports or direct imports:
  ```tsx
  import { Clock, User, TrendingUp } from 'lucide-react';
  const iconMap = { Clock, User, TrendingUp };
  ```

---

### 3. TestimonialsSection (`/components/TestimonialsSection.tsx`)

**Layout:**
```
Container (max-w-6xl, centered, padding, bg-gray-50 or distinct bg)
  ├─ Section Heading (h2, centered, "What Students Say")
  └─ Grid (3 columns on desktop, 1 on mobile)
      ├─ TestimonialCard
      ├─ TestimonialCard
      └─ TestimonialCard
```

**Props:** None (imports `testimonials` from `/lib/data.ts`)

**TestimonialCard Structure:**
```tsx
<div className="card-wrapper">
  <div className="stars">★★★★★</div>  {/* Gold/yellow color */}
  <p className="quote">{text}</p>     {/* Italic or quoted style */}
  <div className="author">
    <p className="name">{name}</p>
    {role && <p className="role">{role}</p>}  {/* text-sm, text-gray-500 */}
  </div>
</div>
```

**Grid:** `grid grid-cols-1 md:grid-cols-3 gap-6`

**Star rating:** Render 5 filled stars (can use Unicode ★ or Lucide `Star` icon filled)

**Card styling:**
- White background on gray section, or vice versa
- Padding, rounded corners, subtle shadow
- Quote text: slightly larger, maybe italic

---

### 4. FAQSection (`/components/FAQSection.tsx`)

**Layout:**
```
Container (max-w-3xl, centered, padding)
  ├─ Section Heading (h2, centered, "Frequently Asked Questions")
  └─ Accordion (from Radix UI)
      ├─ AccordionItem (faq 1)
      ├─ AccordionItem (faq 2)
      ├─ AccordionItem (faq 3)
      ├─ AccordionItem (faq 4)
      └─ AccordionItem (faq 5)
```

**Props:** None (imports `faqs` from `/lib/data.ts`)

**Implementation:**
- Use `@radix-ui/react-accordion`
- Accordion type: `single` (one open at a time) or `multiple` (user preference)
- Each item:
  - **Trigger:** Question text + chevron icon (rotate on open)
  - **Content:** Answer text

**Example structure:**
```tsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

<Accordion.Root type="single" collapsible>
  {faqs.map((faq) => (
    <Accordion.Item key={faq.id} value={faq.id}>
      <Accordion.Trigger>
        {faq.question}
        <ChevronDown className="chevron" />
      </Accordion.Trigger>
      <Accordion.Content>
        {faq.answer}
      </Accordion.Content>
    </Accordion.Item>
  ))}
</Accordion.Root>
```

**Styling:**
- Border between items
- Trigger: clickable, flex justify-between, padding
- Chevron: rotate-180 when open (use `data-state` attribute)
- Content: padding, slide-down animation (Radix provides)

---

## Main Page (`/app/page.tsx`)

```tsx
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
```

---

## Root Layout (`/app/layout.tsx`)

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'French Tutor - Personalized Online Lessons',
  description: 'Master French with one-on-one tutoring. Book your free trial lesson today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## Styling (`/app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: Custom styles for sections */
section {
  @apply py-16 px-4;
}

/* Optional: Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

---

## Dependencies (`package.json`)

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## Setup Commands

```bash
npx create-next-app@latest zhyldyz --typescript --tailwind --app --no-src-dir
cd zhyldyz
npm install @radix-ui/react-accordion lucide-react
```

During `create-next-app`, select:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes
- Import alias: Yes (@/*)

---

## Responsive Breakpoints

- Mobile: `< 768px` (1 column layouts)
- Desktop: `>= 768px` (3 column grids)

Use Tailwind's `md:` prefix for desktop styles.

---

## Color Scheme (Placeholder)

- Primary: `blue-600` (CTA buttons)
- Background: `white` / `gray-50` alternating sections
- Text: `gray-900` (headings), `gray-600` (body)
- Accents: `yellow-400` (stars)

Can be customized in `tailwind.config.ts` if needed.

---

## Implementation Order

1. Setup project + dependencies
2. Create `types.ts` and `data.ts`
3. Implement `HeroSection` (simplest)
4. Implement `BenefitsSection` (grid layout)
5. Implement `TestimonialsSection` (similar to benefits)
6. Implement `FAQSection` (Radix Accordion)
7. Assemble in `page.tsx`
8. Polish responsive design + styling

---

## Notes for Calendar Integration (Future)

- HeroSection's button `onClick` will trigger calendar modal/redirect
- Use Calendly embed (`react-calendly` package) or Cal.com embed
- Likely implementation: Modal with iframe or popup widget
- Button handler location: `HeroSection.tsx` or lifted to `page.tsx`

---

## Build & Deploy

```bash
npm run build      # Static export
npm run start      # Production server
```

Deploy to Vercel:
```bash
npx vercel         # Follow prompts
```

---

## Accessibility Requirements

- Semantic HTML (`<section>`, `<h1>`, `<h2>`, etc.)
- Accordion keyboard navigation (Radix handles)
- Button focus states
- Alt text for images (if avatars added)
- Sufficient color contrast (WCAG AA)

---

## Performance Targets

- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Total page size: < 500KB (without images)

Static generation + minimal JS should easily achieve this.

