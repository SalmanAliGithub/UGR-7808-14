/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        rightBgColor:  '#a0e4fa',
        leftBgColor: '#67b5ff',
      },
      fontFamily: {
        dancing: ['Dancing Script', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

