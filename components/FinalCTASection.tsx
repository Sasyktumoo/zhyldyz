'use client';

import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';
import Button from './Button';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function FinalCTASection() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleBookTrial = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/d/cspz-sps-35k' });
    }
  };

  return (
    <section 
      className="py-12 px-4 md:py-20 md:px-8"
      style={{ 
        background: theme.colors.background.universal
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6"
          style={{ color: theme.colors.text.primary }}
        >
          {t.finalCTA.title}
        </h2>
        <p 
          className="text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          style={{ color: theme.colors.text.secondary }}
        >
          {t.finalCTA.description}
        </p>
        <Button onClick={handleBookTrial} size="lg" className="group w-full sm:w-auto">
          {t.finalCTA.button}
          <ArrowRight 
            className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform"
            style={{ color: theme.colors.text.white }}
          />
        </Button>
      </div>
    </section>
  );
}

