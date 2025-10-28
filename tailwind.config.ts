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
        citron: {
          50: '#f9f9e8',
          100: '#f3f3cc',
          200: '#e8e89f',
          300: '#dada77',
          400: '#d0d05c',
          500: '#c5c544',
          600: '#a8a838',
          700: '#88882d',
          800: '#686822',
          900: '#4a4a18',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        slideDown: 'slideDown 300ms ease-out',
        slideUp: 'slideUp 300ms ease-out',
      },
      keyframes: {
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

