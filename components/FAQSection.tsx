'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';
import { theme } from '@/lib/theme';

export default function FAQSection() {
  return (
    <section 
      className="py-16"
      style={{ 
        background: theme.colors.background.universal,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          style={{ color: theme.colors.text.primary }}
        >
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="rounded-lg overflow-hidden"
              style={{ 
                borderWidth: '1px',
                borderColor: theme.colors.border.light,
                backgroundColor: theme.colors.background.card
              }}
            >
              <Accordion.Trigger 
                className="flex justify-between items-center w-full px-6 py-4 text-left transition-colors duration-200 group data-[state=open]:bg-citron-50"
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
                  className="font-semibold pr-4"
                  style={{ 
                    color: theme.colors.text.primary
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" 
                  style={{ color: theme.colors.citron[500] }}
                />
              </Accordion.Trigger>
              <Accordion.Content 
                className="px-6 py-4 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
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

