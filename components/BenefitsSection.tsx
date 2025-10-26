'use client';

import { MessageCircle, Target, TrendingUp } from 'lucide-react';
import { benefits } from '@/lib/data';

const iconMap = {
  MessageCircle,
  Target,
  TrendingUp,
};

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            What I Solve (for serious learners)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={benefit.id}
                className="relative p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group"
              >
                {/* Coral accent bar on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-400 to-coral-500 group-hover:h-1.5 transition-all"></div>
                
                <div className="flex justify-center mb-4">
                  <div className="bg-coral-50 p-4 rounded-full group-hover:bg-coral-100 transition-colors">
                    <Icon className="w-12 h-12 text-coral-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                      ({benefit.how})
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#hero"
            className="inline-block px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            style={{
              backgroundColor: '#f43f5e',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e11d48';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f43f5e';
            }}
          >
            Unsure which track? Book a free call—I&apos;ll map the fastest route to your goal.
          </a>
        </div>
      </div>
    </section>
  );
}

