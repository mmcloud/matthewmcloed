import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },

      /* -------------------- COLORS -------------------- */
      colors: {
        slate900: '#0F172A',
        blue900: '#1E3A8A',
        // Base brand palette from current website
        azure: '#38BDF8', // Bright sky blue
        kubeblue: '#0284C7', // Mid blue (buttons / accents)
        deepblue: '#0C4A6E', // Deep navy background

        // Transparent layers for subtle glass effects
        skyglass: 'rgba(255, 255, 255, 0.12)',
        navyglass: 'rgba(12, 74, 110, 0.25)',

        // Semantic color tokens for consistency
        text: '#1E293B',
        heading: '#0F172A',
        muted: '#64748B',
        background: '#FFFFFF',
        surface: '#F8FAFC',

        // Gradients and brand-specific tones
        gradient: {
          light: '#38BDF8',
          mid: '#0284C7',
          dark: '#0C4A6E',
        },

        // Tailwind default blue scale (retained for utility use)
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },

      /* -------------------- BACKGROUNDS -------------------- */
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #0F172A, #1E3A8A, #0F172A)',
        // Primary hero gradient — matches current page header
        'kube-gradient': 'linear-gradient(135deg, #38BDF8 0%, #0284C7 40%, #0C4A6E 100%)',
        // Lighter overlay for frosted-glass cards
        'kube-glass': 'linear-gradient(135deg, rgba(56,189,248,0.25) 0%, rgba(2,132,199,0.25) 40%, rgba(12,74,110,0.35) 100%)',
      },

      /* -------------------- BLUR + DEPTH -------------------- */
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        glass: '12px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.08)',
        glow: '0 0 25px rgba(56, 189, 248, 0.25)',
        subtle: '0 2px 12px rgba(0, 0, 0, 0.05)',
      },

      /* -------------------- RADIUS -------------------- */
      borderRadius: {
        glass: '1rem',
        xl: '1.25rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      /* -------------------- ANIMATIONS -------------------- */
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
} satisfies Config;
