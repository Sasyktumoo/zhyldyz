import { ClipboardCheck, MessageSquare, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: 'Diagnostic → Roadmap',
    description: 'Baseline speaking + targeted checklist → CEFR-aligned plan for your exact goal (exam / career / migration).',
  },
  {
    id: 2,
    icon: MessageSquare,
    title: 'Talk-First Lessons (25 or 50 min)',
    description: '~70% you speaking; role-plays from your life; live "say-it-better" loops; micro-drills that fix your errors.',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Practice & Proof',
    description: '5–10 min tasks between lessons, revision decks, and voice-note feedback → checkpoints at 30/60/90 days, before/after audio, and a visible level-up board.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            How Your Training Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-50 overflow-hidden group"
              >
                {/* Step number in top right */}
                <div className="absolute top-4 right-4 bg-coral-100 text-coral-600 font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
                  {index + 1}
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-coral-50 p-4 rounded-full group-hover:bg-coral-100 transition-colors flex-shrink-0">
                    <Icon className="w-8 h-8 text-coral-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 pt-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
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

