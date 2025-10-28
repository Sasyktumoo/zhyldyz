export interface Benefit {
  id: string;
  icon: string;              // Lucide icon name
  title: string;
  subtitle?: string;         // Optional subtitle (e.g., track details)
  description: string;
  how: string;               // How it works
  outcome: string;           // Expected outcome
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;             // e.g., "Business Professional"
  headline: string;          // Short headline summarizing the outcome
  text: string;
  rating: 5;                 // Always 5
  avatar?: string;           // Optional image path
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

