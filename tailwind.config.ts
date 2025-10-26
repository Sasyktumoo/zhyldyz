import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      animation: {
        'pulse-green': 'pulse-green 2s infinite',
        slideDown: 'slideDown 300ms ease-out',
        slideUp: 'slideUp 300ms ease-out',
      },
      keyframes: {
        'pulse-green': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(34, 197, 94, 0)',
          },
        },
        slideDown: {
          from: {
            height: '0',
            opacity: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
        },
        slideUp: {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: {
            height: '0',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

