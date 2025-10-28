'use client';

import { Award, CheckCircle2, Users, GraduationCap, Calendar } from 'lucide-react';
import { theme } from '@/lib/theme';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProfileSection() {
  const { t } = useLanguage();

  // Main certifications - these will have image placeholders
  const certificates = [
    {
      id: 'delf-dalf',
      title: 'DELF-DALF Examiner',
      subtitle: 'Ministry of Education, France',
      year: '2013, renewed 2021',
      imagePath: '/certificates/delf-dalf-examiner.jpg', // User will replace this
      featured: true,
      badge: 'OFFICIAL EXAMINER'
    },
    {
      id: 'tef',
      title: 'TEF Examiner',
      subtitle: 'Certified Corrector',
      year: '2021',
      imagePath: '/certificates/tef-examiner.jpg', // User will replace this
      featured: true,
      badge: 'OFFICIAL EXAMINER'
    },
    {
      id: 'dalf-c2',
      title: 'DALF C2',
      subtitle: 'Ministry of Education, France',
      year: 'Certified',
      imagePath: '/certificates/dalf-c2.jpg', // User will replace this
      featured: true,
      badge: 'C2 CERTIFIED'
    },
  ];

  // Stats with real numbers
  const stats = [
    { icon: Users, number: '200+', label: 'Adult Learners' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: GraduationCap, number: '3', label: 'Official Certifications' },
  ];

  // Quick wins - student results
  const results = [
    'A2 → B1 in 4 months',
    'DELF B2: 14/25 → 20/25',
    'TEF targets in 8-12 weeks',
  ];

  return (
    <section 
      className="py-20"
      style={{ 
        background: `linear-gradient(180deg, ${theme.colors.background.universal} 0%, ${theme.colors.primary[50]} 100%)`,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: theme.colors.text.primary }}
          >
            {t.profile.title}
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: theme.colors.text.secondary }}
          >
            {t.profile.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: theme.colors.citron[500] }} 
                  />
                </div>
                <div 
                  className="text-4xl font-bold mb-1"
                  style={{ color: theme.colors.text.primary }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Grid - Image Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: theme.colors.background.card,
                borderWidth: '3px',
                borderColor: cert.featured ? theme.colors.citron[400] : theme.colors.border.light,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Certificate Image Placeholder */}
              <div 
                className="relative w-full aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: theme.colors.primary[100] }}
              >
                {/* Placeholder for actual certificate image */}
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ 
                    backgroundImage: `url(${cert.imagePath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Fallback if no image */}
                  <div 
                    className="text-center p-8"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <Award 
                      className="w-16 h-16 mx-auto mb-3" 
                      style={{ color: theme.colors.citron[400] }} 
                    />
                    <p 
                      className="text-xs font-medium"
                      style={{ color: theme.colors.text.tertiary }}
                    >
                      Certificate Image Placeholder
                      <br />
                      <span className="text-xs">Replace: {cert.imagePath}</span>
                    </p>
                  </div>
                </div>

                {/* Badge Overlay */}
                {cert.badge && (
                  <div 
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
                    style={{ 
                      backgroundColor: theme.colors.citron[500],
                      color: theme.colors.text.white,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {cert.badge}
                  </div>
                )}

                {/* Hover Overlay - darkens image on hover */}
                <div 
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ 
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
              </div>

              {/* Certificate Info */}
              <div className="p-6">
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
          className="rounded-2xl p-8 mb-12"
          style={{ 
            backgroundColor: theme.colors.primary[50],
            borderWidth: '2px',
            borderColor: theme.colors.border.light,
          }}
        >
          <div className="flex items-start gap-6">
            <div 
              className="p-4 rounded-xl flex-shrink-0"
              style={{ backgroundColor: theme.colors.citron[100] }}
            >
              <GraduationCap 
                className="w-10 h-10" 
                style={{ color: theme.colors.citron[600] }} 
              />
            </div>
            <div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Former Director, Alliance Française Bishkek
              </h3>
              <p 
                className="text-base mb-3"
                style={{ color: theme.colors.text.secondary }}
              >
                Leadership role (2015) in francophone education standards and network
              </p>
              <div 
                className="text-sm"
                style={{ color: theme.colors.text.tertiary }}
              >
                10+ years teaching at universities, international schools, and Alliance Française
              </div>
            </div>
          </div>
        </div>

        {/* Student Results Banner */}
        <div 
          className="rounded-2xl p-8 text-center"
          style={{ 
            background: `linear-gradient(135deg, ${theme.colors.citron[50]} 0%, ${theme.colors.citron[100]} 100%)`,
            borderWidth: '2px',
            borderColor: theme.colors.citron[300],
          }}
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: theme.colors.text.primary }}
          >
            Real Student Outcomes
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl"
                style={{ 
                  backgroundColor: theme.colors.background.card,
                  borderWidth: '1px',
                  borderColor: theme.colors.citron[300],
                }}
              >
                <CheckCircle2 
                  className="w-5 h-5 flex-shrink-0" 
                  style={{ color: theme.colors.citron[600] }} 
                />
                <span 
                  className="font-semibold text-sm"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {result}
                </span>
              </div>
            ))}
          </div>
          <p 
            className="text-xs italic mt-4"
            style={{ color: theme.colors.text.tertiary }}
          >
            Typical adult learner outcomes following the complete program
          </p>
        </div>
      </div>
    </section>
  );
}
