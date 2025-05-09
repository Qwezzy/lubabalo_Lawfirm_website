/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae5',
          300: '#b9c6d7',
          400: '#869db9',
          500: '#53749b',
          600: '#4b698b',
          700: '#3f5874',
          800: '#32465d',
          900: '#293a4c',
          950: '#1a2530',
        },
        secondary: {
          50: '#f8f4f4',
          100: '#f1e9e9',
          200: '#e3d3d3',
          300: '#d5bdbd',
          400: '#b98a8a',
          500: '#9d5757',
          600: '#8d4e4e',
          700: '#764242',
          800: '#5e3535',
          900: '#4c2c2c',
          950: '#2e1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 