'use client';

import { Award, BookOpen, Briefcase, Globe } from 'lucide-react';
import { theme } from '@/lib/theme';

const credentials = [
  {
    id: 1,
    icon: Award,
    text: 'Official DELF–DALF Examiner/Corrector (2013; renewed 2021) — insider guidance for high-score speaking/writing.',
  },
  {
    id: 2,
    icon: Award,
    text: 'Official TEF Examiner/Corrector (2021) — targeted prep for TEF/TCF Canada and migration point goals.',
  },
  {
    id: 3,
    icon: Award,
    text: 'DALF C2 (Ministry of Education, France) — C2 proficiency; native Kyrgyz, fluent Russian for bilingual explanations.',
  },
  {
    id: 4,
    icon: Briefcase,
    text: 'Former Director, Alliance Française de Bishkek (2015) — leadership, standards, and network in francophone education.',
  },
  {
    id: 5,
    icon: BookOpen,
    text: 'Co-author of the textbook "Le français en action!" (2022) — original materials and structured curricula.',
  },
  {
    id: 6,
    icon: Globe,
    text: '10+ years teaching (universities, international schools, Alliance Française) — hundreds of adult learners coached to exam and career outcomes.',
  },
];

export default function ProfileSection() {
  return (
    <section 
      className="py-16"
      style={{ 
        background: theme.colors.background.universal,
        paddingLeft: theme.spacing.sectionPaddingX,
        paddingRight: theme.spacing.sectionPaddingX
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: theme.colors.text.primary }}
          >
            French Tutor Profile
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((credential) => {
            const Icon = credential.icon;
            return (
              <div
                key={credential.id}
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300"
                style={{ 
                  backgroundColor: theme.colors.primary[50],
                  borderWidth: '1px',
                  borderColor: theme.colors.border.light
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.citron[300];
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.light;
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div 
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: theme.colors.citron[50] }}
                >
                  <Icon 
                    className="w-6 h-6" 
                    style={{ color: theme.colors.citron[500] }} 
                  />
                </div>
                <p 
                  className="leading-relaxed pt-1"
                  style={{ color: theme.colors.text.secondary }}
                >
                  {credential.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

