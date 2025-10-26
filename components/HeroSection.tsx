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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-green-gradient px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left side - Text content (2 columns) */}
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gradient-green mb-6 leading-tight">
              Master French with Personalized Online Tutoring
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              One-on-one lessons tailored to your goals. Start with a free trial lesson.
            </p>
            <button
              onClick={handleBookTrial}
              className="w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Book Free Trial Lesson
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right side - Profile image (3 columns) */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-200 glow-green hover:scale-105 transition-transform duration-500">
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

