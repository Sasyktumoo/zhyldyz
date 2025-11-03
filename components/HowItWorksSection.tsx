'use client';

import { ClipboardCheck, MessageSquare, TrendingUp } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';

const stepIcons = [ClipboardCheck, MessageSquare, TrendingUp];

export default function HowItWorksSection() {
  const { t } = useLanguage();
  return (
    <section 
      className="py-12 px-4 md:py-16 md:px-8"
      style={{ 
        background: theme.colors.background.universal
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            {t.howItWorks.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div
                key={index}
                className="relative p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                style={{ 
                  backgroundColor: theme.colors.primary[50],
                  borderWidth: '1px',
                  borderColor: theme.colors.border.light
                }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div 
                    className="p-3 md:p-4 rounded-full transition-colors flex-shrink-0"
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
                      className="w-6 h-6 md:w-8 md:h-8" 
                      style={{ color: theme.colors.citron[500] }} 
                    />
                  </div>
                  <h3 
                    className="text-lg md:text-xl font-bold pt-2"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {step.title}
                  </h3>
                </div>
                <div 
                  className="text-sm md:text-base leading-relaxed space-y-2"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {step.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

