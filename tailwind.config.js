/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#10302E',
        paper: '#F7F5EF',
        'paper-dark': '#0C1614',
        teal: {
          DEFAULT: '#1E7A6E',
          deep: '#14554C',
          light: '#2E9587',
        },
        coral: {
          DEFAULT: '#D65F45',
          deep: '#B84B34',
        },
        slate: {
          DEFAULT: '#3F4744',
          soft: '#6B756F',
        },
        mist: '#E4EDE9',
        'mist-dark': '#1A3634',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'pulse-line': {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-400' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-dot': {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.4' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        'grow-bar': {
          '0%': { width: '0%' },
        },
      },
      animation: {
        'pulse-line': 'pulse-line 6s linear infinite',
        'fade-up': 'fade-up 0.5s ease-out both',
        'bounce-dot': 'bounce-dot 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
