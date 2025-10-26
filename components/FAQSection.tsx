'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="border-2 border-primary-200 rounded-lg overflow-hidden"
            >
              <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-primary-50 transition-colors duration-200 group data-[state=open]:bg-primary-50">
                <span className="font-semibold text-gray-900 pr-4 group-data-[state=open]:text-primary-700">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-primary-600 transition-transform duration-200 group-data-[state=open]:rotate-180 flex-shrink-0" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 py-4 text-gray-600 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp bg-primary-50/50">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

