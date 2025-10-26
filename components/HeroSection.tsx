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

export default function HeroSection() {
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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-coral-50/30 px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left side - Text content (3 columns) */}
          <div className="md:col-span-3 text-center md:text-left space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              French you can prove—for{' '}
              <span className="text-gradient-coral">exams, work, and migration</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              1:1 coaching for adults: speaking-first lessons, a CEFR-aligned roadmap, and tracked gains every 2 weeks to hit DELF/DALF/TEF goals.
            </p>
            <div>
              <button
                onClick={handleBookTrial}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
                style={{
                  backgroundColor: '#f43f5e',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e11d48';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f43f5e';
                }}
              >
                Book a 25-min trial → get your 90-day plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Micro-proof strip */}
            <div className="text-sm text-slate-600 flex flex-wrap justify-center md:justify-start gap-2 items-center leading-relaxed">
              <span className="font-medium">Former Director, Alliance Française</span>
              <span className="text-coral-400">•</span>
              <span className="font-medium">Official DELF/DALF & TEF examiner</span>
              <span className="text-coral-400">•</span>
              <span className="font-medium">200+ adult learners coached</span>
            </div>
          </div>
          
          {/* Right side - Profile image (2 columns) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs md:max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-slate-200/50 hover:ring-coral-200 hover:shadow-coral-200/20 transition-all duration-500">
              <img
                src="/images/profile.jpg"
                alt="French tutor profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

