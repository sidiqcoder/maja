/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maja: {
          bg: '#FAF7F2',
          card: '#F6F1EA',
          light: '#FDFBF7',
          cream: '#F4ECE1',
          gold: '#C5A880',
          goldDark: '#A6865A',
          goldLight: '#E2CEB5',
          dark: '#1C1816',
          charcoal: '#2D2622',
          muted: '#7A6F68',
          border: '#E8DECة',
          borderLight: 'rgba(197, 168, 128, 0.22)',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Garet', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        script: ['"Beth Ellen"', 'cursive'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #FAF7F2 0%, #F5EEE4 50%, #ECE2D5 100%)',
        'dark-luxury': 'linear-gradient(135deg, #1C1816 0%, #29221E 60%, #171412 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C5A880 0%, #F4E8D6 50%, #C5A880 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(197, 168, 128, 0.35) 0%, rgba(250, 247, 242, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(246,241,234,0.95) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(45, 38, 34, 0.08), 0 0 1px 1px rgba(197, 168, 128, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(45, 38, 34, 0.16), 0 0 2px 1px rgba(197, 168, 128, 0.3)',
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(37, 211, 102, 0.8), 0 0 50px rgba(37, 211, 102, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        pulseGlow: 'pulseGlow 2.5s infinite ease-in-out',
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
