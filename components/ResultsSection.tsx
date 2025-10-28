'use client';

import { CheckCircle } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';

export default function ResultsSection() {
  const { t } = useLanguage();
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
            {t.results.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {t.results.items.map((result, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300"
              style={{ 
                backgroundColor: theme.colors.background.card,
                borderWidth: '1px',
                borderColor: theme.colors.border.light
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.colors.citron[300];
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.colors.border.light;
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <CheckCircle 
                className="w-6 h-6 flex-shrink-0 mt-1" 
                style={{ color: theme.colors.citron[500] }} 
              />
              <p 
                className="leading-relaxed"
                style={{ color: theme.colors.text.secondary }}
              >
                {result.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p 
            className="text-sm italic"
            style={{ color: theme.colors.text.tertiary }}
          >
            {t.results.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

