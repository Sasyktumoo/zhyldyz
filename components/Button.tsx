'use client';

import { theme } from '@/lib/theme';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'lg',
  className = '',
}: ButtonProps) {
  const baseStyles = {
    backgroundColor: variant === 'primary' ? theme.colors.citron[500] : theme.colors.primary[100],
    color: variant === 'primary' ? theme.colors.text.white : theme.colors.text.primary,
  };

  const hoverStyles = {
    backgroundColor: variant === 'primary' ? theme.colors.citron[600] : theme.colors.primary[200],
  };

  const sizeClasses = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm';

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = hoverStyles.backgroundColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = baseStyles.backgroundColor;
  };

  if (href) {
    return (
      <span className="relative inline-block">
        {/* Solid shadow behind */}
        <span 
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundColor: theme.shadow.color,
            opacity: theme.shadow.opacity,
            transform: `translate(${theme.shadow.offset.x}, ${theme.shadow.offset.y})`,
            zIndex: 0,
          }}
        />
        {/* Actual link */}
        <a
          href={href}
          className={`relative inline-flex items-center justify-center gap-3 ${sizeClasses} rounded-xl font-semibold transition-all duration-300 ${className}`}
          style={{ ...baseStyles, zIndex: 10 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </a>
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      {/* Solid shadow behind */}
      <span 
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundColor: theme.shadow.color,
          opacity: theme.shadow.opacity,
          transform: `translate(${theme.shadow.offset.x}, ${theme.shadow.offset.y})`,
          zIndex: 0,
        }}
      />
      {/* Actual button */}
      <button
        onClick={onClick}
        className={`relative inline-flex items-center justify-center gap-3 ${sizeClasses} rounded-xl font-semibold transition-all duration-300 ${className}`}
        style={{ ...baseStyles, zIndex: 10 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    </span>
  );
}

