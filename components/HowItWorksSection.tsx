'use client';

import { ClipboardCheck, MessageSquare, TrendingUp } from 'lucide-react';
import { theme } from '@/lib/theme';

const steps = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: 'Diagnostic Plan',
    description: 'Baseline speaking + targeted checklist → CEFR-aligned plan for your exact goal (exam / career / migration).',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Talk-First Lessons',
    description: '~70% you speaking; role-plays from your life; live "say-it-better" loops; micro-drills that fix your errors.',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Practice & Proof',
    description: '5–10 min tasks between lessons, voice-note feedback, and progress checkpoints at 30/60/90 days with before/after audio.',
  },
];

export default function HowItWorksSection() {
  return (
    <section 
      className="py-16"
      style={{ 
        background: theme.colors.background.universal,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            How Your Training Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                style={{ 
                  backgroundColor: theme.colors.primary[50],
                  borderWidth: '1px',
                  borderColor: theme.colors.border.light
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="p-4 rounded-full transition-colors flex-shrink-0"
                    style={{ 
                      backgroundColor: theme.colors.citron[50]
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.citron[100];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.citron[50];
                    }}
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: theme.colors.citron[500] }} 
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold pt-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {step.title}
                  </h3>
                </div>
                <p 
                  className="leading-relaxed"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

