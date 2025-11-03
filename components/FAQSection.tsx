'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  return (
    <section 
      className="py-12 px-4 md:py-16 md:px-8"
      style={{ 
        background: theme.colors.background.universal
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center mb-8 md:mb-12"
          style={{ color: theme.colors.text.primary }}
        >
          {t.faq.title}
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-3 md:space-y-4">
          {t.faq.items.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`faq-${index}`}
              className="rounded-lg overflow-hidden"
              style={{ 
                borderWidth: '1px',
                borderColor: theme.colors.border.light,
                backgroundColor: theme.colors.background.card
              }}
            >
              <Accordion.Trigger 
                className="flex justify-between items-center w-full px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 text-left transition-colors duration-200 group data-[state=open]:bg-citron-50"
                style={{
                  '--hover-bg': theme.colors.citron[50]
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.getAttribute('data-state')?.includes('open')) {
                    e.currentTarget.style.backgroundColor = theme.colors.citron[50];
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.getAttribute('data-state')?.includes('open')) {
                    e.currentTarget.style.backgroundColor = '';
                  }
                }}
              >
                <span 
                  className="font-semibold text-sm sm:text-base pr-3 sm:pr-4"
                  style={{ 
                    color: theme.colors.text.primary
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" 
                  style={{ color: theme.colors.citron[500] }}
                />
              </Accordion.Trigger>
              <Accordion.Content 
                className="px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 text-sm sm:text-base leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
                style={{ 
                  color: theme.colors.text.secondary,
                  backgroundColor: `${theme.colors.citron[50]}4D` // 30% opacity
                }}
              >
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

