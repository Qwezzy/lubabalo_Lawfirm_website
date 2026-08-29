/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f4f6f8',
          100: '#e6eaef',
          700: '#243044',
          800: '#162033',
          900: '#0b1220',
          950: '#070c14',
        },
        gold: {
          50: '#faf6ee',
          100: '#f3ead4',
          400: '#d4b57a',
          500: '#c6a36a',
          600: '#b08a4d',
          700: '#8c6c3b',
        },
        parchment: {
          50: '#fbf8f2',
          100: '#f4efe6',
          200: '#e8dfd0',
        },
        primary: {
          50: '#faf6ee',
          100: '#f3ead4',
          200: '#e8dfd0',
          300: '#d4b57a',
          400: '#c6a36a',
          500: '#b08a4d',
          600: '#8c6c3b',
          700: '#243044',
          800: '#162033',
          900: '#0b1220',
          950: '#070c14',
        },
        secondary: {
          50: '#f4f6f8',
          100: '#e6eaef',
          500: '#243044',
          600: '#162033',
          700: '#0b1220',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(11, 18, 32, 0.35)',
      },
    },
  },
  plugins: [],
};
