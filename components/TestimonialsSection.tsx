'use client';

import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { theme } from '@/lib/theme';
import { getAssetPath } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import Button from './Button';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section 
      className="py-12 px-4 md:py-16 md:px-8"
      style={{ 
        background: theme.colors.background.universal
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-6 md:mb-8"
          style={{ color: theme.colors.text.primary }}
        >
          {t.testimonials.title}
        </h2>

        {/* Student Results Stats Bar */}
        <div 
          className="rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 mb-8 md:mb-12"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.citron[50]} 0%, ${theme.colors.citron[100]} 100%)`,
            borderWidth: '2px',
            borderColor: theme.colors.citron[300],
          }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {t.testimonials.results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 rounded-lg"
                style={{ 
                  backgroundColor: theme.colors.background.card,
                  borderWidth: '1px',
                  borderColor: theme.colors.citron[300],
                }}
              >
                <CheckCircle2 
                  className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" 
                  style={{ color: theme.colors.citron[600] }} 
                />
                <span 
                  className="font-semibold text-xs sm:text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {result}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              style={{ 
                backgroundColor: theme.colors.primary[50],
                borderTopWidth: '4px',
                borderTopColor: theme.colors.citron[400]
              }}
            >
              <div className="flex gap-0.5 sm:gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    style={{ 
                      fill: theme.colors.accent[500], 
                      color: theme.colors.accent[500] 
                    }}
                  />
                ))}
              </div>
              <h3 
                className="text-base sm:text-lg font-semibold mb-2 md:mb-3"
                style={{ color: theme.colors.text.primary }}
              >
                {testimonial.headline}
              </h3>
              <p 
                className="italic mb-4 text-sm sm:text-base leading-relaxed flex-grow"
                style={{ color: theme.colors.text.secondary }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div 
                className="pt-3 md:pt-4 flex items-center gap-2 sm:gap-3 mt-auto"
                style={{ 
                  borderTopWidth: '1px',
                  borderTopColor: theme.colors.border.light
                }}
              >
                <img
                  src={getAssetPath(`/images/review${index + 1}.png`)}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2"
                  style={{ 
                    '--tw-ring-color': theme.colors.citron[300] 
                  } as React.CSSProperties}
                />
                <div>
                  <p 
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p 
                      className="text-xs sm:text-sm"
                      style={{ color: theme.colors.text.tertiary }}
                    >
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 md:mt-12 text-center">
          <Button href="https://calendly.com/d/cspz-sps-35k" size="lg" className="w-full sm:w-auto">
            {t.testimonials.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

