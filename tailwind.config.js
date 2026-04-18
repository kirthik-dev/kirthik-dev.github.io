/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          base: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          surfaceAlt: 'var(--bg-surface-alt)',
          muted: 'var(--text-secondary)',
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          border: 'var(--border-color)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        shimmer: 'shimmer 2.8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(6, 14, 30, 0.48)',
      },
    },
  },
  plugins: [],
};
