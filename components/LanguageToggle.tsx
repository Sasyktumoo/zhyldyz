'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { theme } from '@/lib/theme';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
      style={{
        backgroundColor: theme.colors.primary[50],
        borderWidth: '2px',
        borderColor: theme.colors.citron[400],
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Languages 
        className="w-5 h-5" 
        style={{ color: theme.colors.citron[500] }} 
      />
      <button
        onClick={() => setLanguage('en')}
        className="px-3 py-1 rounded-full text-sm font-medium transition-all"
        style={{
          backgroundColor: language === 'en' ? theme.colors.citron[500] : 'transparent',
          color: language === 'en' ? theme.colors.text.white : theme.colors.text.secondary,
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className="px-3 py-1 rounded-full text-sm font-medium transition-all"
        style={{
          backgroundColor: language === 'ru' ? theme.colors.citron[500] : 'transparent',
          color: language === 'ru' ? theme.colors.text.white : theme.colors.text.secondary,
        }}
      >
        RU
      </button>
    </div>
  );
}

