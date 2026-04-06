/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'apex-black': '#0A0A0A',
        'apex-surface': '#141414',
        'apex-surface-light': '#1F1F1F',
        'apex-surface-high': '#262626',
        'apex-border': '#2A2A2A',
        'apex-red': '#E11D48',
        'apex-red-light': '#FF586C',
        'apex-red-dim': '#BF0037',
        'apex-gold': '#F59E0B',
        'apex-gold-light': '#FCD34D',
        'apex-gold-dim': '#B45309',
        'apex-text': '#F5F5F5',
        'apex-muted': '#A3A3A3',
      },
      fontFamily: {
        display: ['Russo One', 'sans-serif'],
        body: ['Chakra Petch', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gold-shimmer': 'gold-shimmer 2s ease-in-out infinite',
        'speed-line': 'speed-line 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'count-up': 'count-up 2s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(225, 29, 72, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(225, 29, 72, 0.6), 0 0 80px rgba(225, 29, 72, 0.3)' },
        },
        'gold-shimmer': {
          '0%, 100%': { textShadow: '0 0 10px rgba(245, 158, 11, 0.4)' },
          '50%': { textShadow: '0 0 20px rgba(245, 158, 11, 0.7), 0 0 40px rgba(245, 158, 11, 0.4)' },
        },
        'speed-line': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
