const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: 'hsl(0, 0%, 2%)',
      gray: {
        600: 'hsl(0, 0%, 12%)',
        500: 'hsl(0, 0%, 18%)',
        400: 'hsl(0, 0%, 23%)',
        300: 'hsl(0, 0%, 51%)',
        200: 'hsl(0, 0%, 91%)',
        100: 'hsl(0, 0%, 96%)',
      },
      white: 'hsl(0, 0%, 100%)',
      purple: 'hsl(274, 82%, 60%)',
      red: 'hsl(0, 100%, 66%)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
