import { Benefit, Testimonial, FAQ } from './types';

export const benefits: Benefit[] = [
  {
    id: 'benefit-1',
    icon: 'MessageCircle',
    title: 'From Silent to Speaking in 30 Days',
    description: 'Skip worksheets and start talking from minute one.',
    how: '70% learner talk-time, live "say-it-better" loops, micro-drills that target your personal error patterns.',
    outcome: 'by Week 3 you hold unscripted 3–5-minute chats on familiar topics—with fewer pauses and clearer pronunciation.',
  },
  {
    id: 'benefit-2',
    icon: 'Target',
    title: 'DELF/DALF Roadmap, Zero Guesswork',
    description: 'No generic syllabus. Your plan tracks exactly what you need for travel fluency / DELF / work.',
    how: 'CEFR-aligned blueprint, weekly focus (listening/speaking/lexis/grammar), and bite-size tasks between lessons.',
    outcome: 'measurable unlocks each week (e.g., order food, book a room, introduce your role)—not random topics.',
  },
  {
    id: 'benefit-3',
    icon: 'TrendingUp',
    title: 'Tracked Gains at 30/60/90 Days',
    description: 'If it isn\'t tracked, it won\'t improve.',
    how: 'baseline → 30/60/90-day checkpoints, personal vocab & pronunciation bank, before/after audio clips.',
    outcome: 'visible step-ups in speed, accuracy, and range—with proof you can replay.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'M.',
    role: 'Student',
    headline: 'A2 → B2 in 4 months',
    text: 'Started at A2; four months later I can express myself freely at B2. Zhyldyz blended real conversations with weekly writing prompts and tailored materials—the structure that finally unlocked fluency.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'A.',
    role: 'Beginner',
    headline: 'From nervous to confident',
    text: 'I was nervous and always struggled with languages. Zhyldyz\'s clear, simple explanations and meaningful topic discussions removed the fear—now I actually enjoy speaking French and see steady progress every week.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'J.',
    role: 'Working professional',
    headline: 'Fluency by design, not luck',
    text: 'I needed practical French, not apps. Zhyldyz used leveled materials, role-plays, spaced repetition, and fast feedback. Result: I write clean emails and hold long conversations without freezing.',
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

