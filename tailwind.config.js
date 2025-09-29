/* Path: secure-d-app-frontend/tailwind.config.js */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandGreen: '#12d576',
        navy: '#0b1f3a',
        foregroundLight: '#e6f1ff',
        foregroundDark: '#1a1a1a',
        accentBlue: '#A4CDFF',
        cardBorderLight: '#A4CDFF',
        cardBorderDark: '#0b1f3a',
        cardBgLight: 'rgba(255,255,255,0.06)',
        cardBgDark: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        brand: '0 20px 25px -5px rgba(18, 213, 118, 0.15), 0 10px 10px -5px rgba(18, 213, 118, 0.08)',
        brandLg: '0 25px 50px -12px rgba(18, 213, 118, 0.18)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-out',
      },
    },
  },
  plugins: [],
}
