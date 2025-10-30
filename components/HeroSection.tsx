'use client';

import { useEffect } from 'react';
import { ArrowRight, Star, Check, Users, Award, Building2 } from 'lucide-react';
import { theme } from '@/lib/theme';
import { getAssetPath } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import Button from './Button';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function HeroSection() {
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
      id="hero" 
      className="min-h-screen flex items-center justify-center py-16 md:py-20"
      style={{ 
        background: theme.colors.background.universal,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left side - Text content (3 columns) */}
          <div className="md:col-span-3 text-center md:text-left space-y-8">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: theme.colors.text.primary, maxWidth: '500px' }}
            >
              {t.hero.title.prefix}{' '}
              <span style={{ color: theme.colors.citron[400] }}>{t.hero.title.highlight}</span>
            </h1>
            
            {/* Subheadline */}
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: theme.colors.text.secondary, maxWidth: '500px' }}
            >
              {t.hero.subtitle}
            </p>
            
            {/* Three bullets with check icons */}
            <div className="space-y-4">
              {t.hero.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <Check 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: theme.colors.citron[500] }} 
                  />
                  <span 
                    className="text-base md:text-lg"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <Button onClick={handleBookTrial} className="group">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* 3-stat bar */}
            <div 
              className="flex flex-wrap justify-center md:justify-start gap-4 items-center text-sm"
              style={{ color: theme.colors.text.secondary }}
            >
              {/* Stat 1: 300+ adults coached */}
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" style={{ color: theme.colors.citron[500] }} />
                <span><span className="font-bold">{t.hero.stats[0].split(' ')[0]}</span> {t.hero.stats[0].split(' ').slice(1).join(' ')}</span>
              </div>
              
              <span style={{ color: theme.colors.citron[400] }}>•</span>
              

              
              {/* Stat 3: Former Director */}
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" style={{ color: theme.colors.citron[500] }} />
                <span className="font-bold">{t.hero.stats[2]}</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image (2 columns) */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Shadow layer - offset to right and down */}
              <div 
                className="absolute inset-0 rounded-3xl translate-x-6 translate-y-6"
                style={{ 
                  backgroundColor: theme.colors.citron[300],
                  opacity: 0.8,
                  zIndex: 0
                }}
              ></div>
              
              {/* Photo container - hardcoded size */}
              <div className="relative w-[485px] h-[485px] rounded-3xl overflow-visible z-10">
                <img
                  src={getAssetPath('/images/profile.jpg')}
                  alt={t.hero.altText}
                  className="w-full h-full object-cover object-center rounded-3xl"
                  style={{
                    objectPosition: 'center 40%'
                  }}
                />
                
                {/* Badge overlay - positioned at top left */}
                <div 
                  className="absolute -top-4 -left-4 rounded-xl px-4 py-2 flex items-center gap-2"
                  style={{ 
                    backgroundColor: theme.colors.background.card,
                    borderWidth: '2px',
                    borderColor: theme.colors.citron[500],
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                    zIndex: 30
                  }}
                >
                  <Award className="w-5 h-5" style={{ color: theme.colors.citron[500] }} />
                  <p 
                    className="text-sm font-bold whitespace-nowrap"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {t.hero.badge}
                  </p>
                </div>
                
                {/* Google Review Badge - positioned to extend outside at bottom right */}
                <div 
                  className="absolute -bottom-6 -right-6 rounded-2xl p-4 flex flex-col items-center gap-2"
                  style={{ 
                    backgroundColor: theme.colors.background.card,
                    borderWidth: '1px',
                    borderColor: theme.colors.border.light,
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                    zIndex: 30
                  }}
                >
                  {/* Google Logo */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.6 16.3636C29.6 15.4182 29.5273 14.8 29.3636 14.1636H16V18.2545H23.5636C23.4182 19.3455 22.7091 21.0182 21.0909 22.1273L21.0691 22.2722L25.2545 25.5273L25.5273 25.5545C28.0727 23.2 29.6 20.1091 29.6 16.3636Z" fill="#4285F4"/>
                    <path d="M16 29C19.4182 29 22.2545 27.8909 24.2909 25.5545L21.0909 22.1273C20.1455 22.7636 18.9091 23.2182 16 23.2182C12.6727 23.2182 9.87273 20.8636 8.98182 17.7091L8.84364 17.7218L4.50909 21.0909L4.46364 21.2182C6.48182 25.2 10.8727 29 16 29Z" fill="#34A853"/>
                    <path d="M8.98182 17.7091C8.70909 16.9818 8.54545 16.2 8.54545 15.4C8.54545 14.6 8.70909 13.8182 8.96364 13.0909L8.95636 12.9364L4.56364 9.51636L4.46364 9.56364C3.63636 11.2182 3.18182 13.0545 3.18182 15.4C3.18182 17.7455 3.63636 19.5818 4.46364 21.2364L8.98182 17.7091Z" fill="#FBBC05"/>
                    <path d="M16 7.58182C19.4727 7.58182 21.8182 9.01818 23.1273 10.2364L25.9818 7.47273C22.2364 4.14545 19.4182 2.8 16 2.8C10.8727 2.8 6.48182 6.6 4.46364 10.5818L8.96364 13.0909C9.87273 9.93636 12.6727 7.58182 16 7.58182Z" fill="#EB4335"/>
                  </svg>
                  
                  {/* 5 Stars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5" 
                        style={{ 
                          fill: theme.colors.accent[500], 
                          color: theme.colors.accent[500] 
                        }} 
                      />
                    ))}
                  </div>
                  
                  {/* Rating Text */}
                  <p 
                    className="text-sm font-semibold"
                    style={{ color: theme.colors.text.primary }}
                  >
                    {t.hero.googleRating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

