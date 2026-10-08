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
          // Official Maja Brand Palette
          blush: '#D8B1B7',
          dustyRose: '#B97A86',
          wine: '#7B2E3A',
          mocha: '#3A1E1E',
          nude: '#F3E4DB',
          peach: '#F7CEC2',
          // Theme Mappings to Brand Palette
          bg: '#FAF5F2',
          card: '#FFFFFF',
          light: '#FFFDF9',
          cream: '#F3E4DB',
          gold: '#B97A86',
          goldDark: '#7B2E3A',
          goldLight: '#F7CEC2',
          dark: '#3A1E1E',
          charcoal: '#3A1E1E',
          muted: '#8C7474',
          border: '#D8B1B7',
          borderLight: 'rgba(185, 122, 134, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Garet', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        script: ['"Beth Ellen"', 'cursive'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #FAF5F2 0%, #F3E4DB 50%, #F7CEC2 100%)',
        'dark-luxury': 'linear-gradient(135deg, #3A1E1E 0%, #2A1414 60%, #1F0D0D 100%)',
        'wine-luxury': 'linear-gradient(135deg, #7B2E3A 0%, #8C3745 60%, #5E202A 100%)',
        'rose-shimmer': 'linear-gradient(90deg, #7B2E3A 0%, #F7CEC2 50%, #B97A86 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(243,228,219,0.5) 100%)',
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

