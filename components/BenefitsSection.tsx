'use client';

import { MessageCircle, Target, TrendingUp } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';
import Button from './Button';

const iconMap = [Target, TrendingUp, MessageCircle];

export default function BenefitsSection() {
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
            {t.benefits.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="relative p-6 md:p-8 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                style={{ 
                  backgroundColor: theme.colors.background.card,
                  borderWidth: '1px',
                  borderColor: theme.colors.border.light
                }}
              >
                {/* Badge (if present) */}
                {benefit.badge && (
                  <div 
                    className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded"
                    style={{ 
                      backgroundColor: theme.colors.citron[100],
                      color: theme.colors.citron[700]
                    }}
                  >
                    {benefit.badge}
                  </div>
                )}
                
                {/* Citron accent bar on top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all"
                  style={{ 
                    background: `linear-gradient(to right, ${theme.colors.citron[400]}, ${theme.colors.citron[500]})` 
                  }}
                ></div>
                
                <div className="flex justify-center mb-3 md:mb-4">
                  <div 
                    className="p-3 md:p-4 rounded-full transition-colors"
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
                    <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: theme.colors.citron[500] }} />
                  </div>
                </div>
                <h3 
                  className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center"
                  style={{ color: theme.colors.text.primary }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="text-sm md:text-base leading-relaxed text-center"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-10">
          <Button href="#hero" className="w-full sm:w-auto">
            {t.benefits.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

