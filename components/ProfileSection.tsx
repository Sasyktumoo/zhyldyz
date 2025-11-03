'use client';

import { Award, Users, GraduationCap, Calendar } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProfileSection() {
  const { t } = useLanguage();

  // Main certifications - these will have image placeholders
  const certificates = t.profile.certificates.map((cert) => ({
    ...cert,
    imagePath: `/certificates/${cert.id}.jpg`,
    featured: true,
  }));

  // Stats with real numbers
  const stats = [
    { icon: Users, ...t.profile.stats[0] },
    { icon: Calendar, ...t.profile.stats[1] },
    { icon: GraduationCap, ...t.profile.stats[2] },
  ];

  return (
    <section 
      className="py-12 px-4 md:py-20 md:px-8"
      style={{ 
        background: `linear-gradient(180deg, ${theme.colors.background.universal} 0%, ${theme.colors.primary[50]} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            {t.profile.title}
          </h2>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4"
            style={{ color: theme.colors.text.secondary }}
          >
            {t.profile.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-2 md:mb-3">
                  <Icon 
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" 
                    style={{ color: theme.colors.citron[500] }} 
                  />
                </div>
                <div 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1"
                  style={{ color: theme.colors.text.primary }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-xs sm:text-sm font-medium px-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Grid - Image Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-lg overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: theme.colors.background.card,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0, 0, 0, 0.18), 0 4px 8px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)';
              }}
            >
              {/* Certificate Image with Frame */}
              <div 
                className="relative w-full aspect-[4/3] p-4"
                style={{ 
                  backgroundColor: theme.colors.citron[600],
                }}
              >
                {/* Inner white matting */}
                <div 
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    padding: '12px',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    style={{
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
                    }}
                    onError={(e) => {
                      // Show placeholder if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder - only shown if image fails to load */}
                  <div 
                    className="w-full h-full absolute inset-0 flex items-center justify-center text-center"
                    style={{ 
                      backgroundColor: theme.colors.primary[50],
                      display: 'none',
                      margin: '12px',
                    }}
                  >
                    <div>
                      <Award 
                        className="w-16 h-16 mx-auto mb-3" 
                        style={{ color: theme.colors.citron[400] }} 
                      />
                      <p 
                        className="text-xs font-medium"
                        style={{ color: theme.colors.text.tertiary }}
                      >
                        {t.profile.imagePlaceholder}
                        <br />
                        <span className="text-xs">Replace: {cert.imagePath}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                {/* Badge moved here */}
                {cert.badge && (
                  <div 
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-3"
                    style={{ 
                      backgroundColor: theme.colors.citron[500],
                      color: theme.colors.text.white,
                    }}
                  >
                    {cert.badge}
                  </div>
                )}
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  {cert.title}
                </h3>
                <p 
                  className="text-sm font-semibold mb-1"
                  style={{ color: theme.colors.citron[700] }}
                >
                  {cert.subtitle}
                </p>
                <p 
                  className="text-xs"
                  style={{ color: theme.colors.text.tertiary }}
                >
                  {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context - Former Director */}
        <div 
          className="rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 text-center max-w-4xl mx-auto"
          style={{ 
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.citron[400],
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="flex justify-center mb-4 md:mb-5">
            <div 
              className="p-3 md:p-4 rounded-full"
              style={{ 
                backgroundColor: theme.colors.citron[50],
              }}
            >
              <GraduationCap 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                style={{ color: theme.colors.citron[500] }} 
              />
            </div>
          </div>
          <h3 
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            {t.profile.experience.title}
          </h3>
          <p 
            className="text-sm sm:text-base md:text-lg mb-2"
            style={{ color: theme.colors.text.secondary }}
          >
            {t.profile.experience.description}
          </p>
          <div 
            className="text-xs sm:text-sm md:text-base"
            style={{ color: theme.colors.text.tertiary }}
          >
            {t.profile.experience.detail}
          </div>
        </div>
      </div>
    </section>
  );
}
