'use client';

import { MessageCircle, Target, TrendingUp } from 'lucide-react';
import { benefits } from '@/lib/data';
import { theme } from '@/lib/theme';
import Button from './Button';

const iconMap = {
  MessageCircle,
  Target,
  TrendingUp,
};

export default function BenefitsSection() {
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
            What I Solve (for serious learners)
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={benefit.id}
                className="relative p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                style={{ 
                  backgroundColor: theme.colors.background.card,
                  borderWidth: '1px',
                  borderColor: theme.colors.border.light
                }}
              >
                {/* Coral accent bar on top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all"
                  style={{ 
                    background: `linear-gradient(to right, ${theme.colors.citron[400]}, ${theme.colors.citron[500]})` 
                  }}
                ></div>
                
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-4 rounded-full transition-colors"
                    style={{ 
                      backgroundColor: theme.colors.citron[50],
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.citron[100];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.colors.citron[50];
                    }}
                  >
                    <Icon className="w-12 h-12" style={{ color: theme.colors.citron[500] }} />
                  </div>
                </div>
                <h3 
                  className="text-xl font-bold mb-1 text-center"
                  style={{ color: theme.colors.text.primary }}
                >
                  {benefit.title}
                </h3>
                {benefit.subtitle && (
                  <p 
                    className="text-base mb-3 text-center"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {benefit.subtitle}
                  </p>
                )}
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {benefit.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <p 
                      className="text-sm leading-relaxed italic"
                      style={{ color: theme.colors.text.tertiary }}
                    >
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
          <Button href="#hero">
            Unsure which track? Book a free call—I&apos;ll map the fastest route to your goal.
          </Button>
        </div>
      </div>
    </section>
  );
}

