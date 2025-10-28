import { Benefit, Testimonial, FAQ } from './types';

export const benefits: Benefit[] = [
  {
    id: 'benefit-1',
    icon: 'Target',
    title: 'Exam & Migration Track',
    subtitle: '(DELF/DALF/TEF)',
    description: 'Clear roadmap to target scores with examiner-level guidance.',
    how: 'Examiner-certified training with focused drills and mock exam conditions.',
    outcome: 'Hit your DELF/DALF/TEF targets with zero guesswork.',
  },
  {
    id: 'benefit-2',
    icon: 'TrendingUp',
    title: 'Career Track',
    subtitle: '(Professional French)',
    description: 'Real-world communication for work: concise emails, calls, and meetings.',
    how: 'Built from real francophone work/study experience with role-play scenarios.',
    outcome: 'Confidently handle workplace French without switching to English.',
  },
  {
    id: 'benefit-3',
    icon: 'MessageCircle',
    title: 'Foundations Track',
    subtitle: '(A0 → B1 Fast-Track)',
    description: 'Speak from lesson one; measurable gains every two weeks.',
    how: '70% learner talk-time, micro-drills for error patterns, and pronunciation work baked in.',
    outcome: 'Hold natural conversations on familiar topics within weeks.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'M.',
    role: 'university student',
    headline: 'A2 → B2 in four months',
    text: 'Started at A2; four months later I passed the exam and can argue my point at B2. The talk-first lessons and weekly writing briefs finally made French stick.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'A.',
    role: 'beginner',
    headline: 'From anxious to fluent conversations',
    text: 'I always froze. With role-plays and "say-it-better" loops, the fear disappeared. I now handle calls at work without switching to English.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'J.',
    role: 'software engineer',
    headline: 'TEF Canada: targets achieved',
    text: 'Clear templates, pacing drills, and constant feedback. Hit my CLB targets and moved forward with my application.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How many lessons per week?',
    answer: 'Most adults do 2×50-min or 3×25-min. We\'ll match cadence to your deadline (exam date/migration timeline).',
  },
  {
    id: 'faq-2',
    question: 'Do you provide materials?',
    answer: 'Yes—curated, level-appropriate content plus original materials (incl. textbook co-authored by the tutor) and targeted drills.',
  },
  {
    id: 'faq-3',
    question: 'Can you register me for exams?',
    answer: 'I prepare you and advise on dates/centers; you register and pay the exam center directly.',
  },
  {
    id: 'faq-4',
    question: 'Will we only do speaking?',
    answer: 'Speaking is the core (70%), but every plan includes listening, reading, writing, and pronunciation—weighted to your goal (DELF/DALF/TEF or workplace needs).',
  },
  {
    id: 'faq-5',
    question: 'Do you teach groups?',
    answer: 'Yes. Small groups for exam tracks; 1:1 remains the fastest path for tight deadlines.',
  },
  {
    id: 'faq-6',
    question: 'What\'s your background?',
    answer: 'DALF C2; official DELF-DALF & TEF examiner; former director at Alliance Française Bishkek; university + international school experience.',
  },
];

