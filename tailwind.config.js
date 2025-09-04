/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1117',
        'brand-gray': {
          DEFAULT: '#161B22',
          light: '#21262D',
          text: '#8B949E',
        },
        'brand-blue': {
          DEFAULT: '#58A6FF',
          light: '#79C0FF',
        },
        'brand-gold': {
          DEFAULT: '#D4AF37',
          light: '#E6C667',
        },
        'brand-green': '#238636',
        'brand-red': '#DA3633',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
