'use client';

import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function FinalCTASection() {
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
    <section className="py-20 px-4 bg-gradient-to-br from-coral-50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
          Book a 25-min trial lesson
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Walk away with your 90-day plan, first practice drills, and a clear path to your target score or conversation goal.
        </p>
        <button
          onClick={handleBookTrial}
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
        >
          Book Your Trial Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}

