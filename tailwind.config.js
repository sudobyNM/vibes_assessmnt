/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'dusty-rose': {
          50: '#faf7f7',
          100: '#f4eeee',
          200: '#e8d5d5',
          300: '#dbbcbc',
          400: '#c8a3a3',
          500: '#b58a8a',
          600: '#9e7070',
          700: '#7d5757',
          800: '#5c3e3e',
          900: '#3b2525',
        }
      }
    },
  },
  plugins: [],
}
