import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0B0B0F',
        gold: '#D4AF37',
        white: '#FFFFFF',
        grey: '#9CA3AF',
        blue: '#2563EB',
        card: '#111118',
      },
      fontFamily: {
        headline: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-glow': 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)',
        'hero-glow': 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.05) 0%, transparent 60%)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'blink': 'blink 1.2s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.35)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
