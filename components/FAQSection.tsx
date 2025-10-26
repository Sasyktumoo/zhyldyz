'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white"
            >
              <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-coral-50 transition-colors duration-200 group data-[state=open]:bg-coral-50">
                <span className="font-semibold text-slate-900 pr-4 group-data-[state=open]:text-coral-600">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-coral-500 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-4 text-slate-600 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp bg-coral-50/30">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

