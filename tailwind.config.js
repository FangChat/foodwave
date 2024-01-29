/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-charcoal' : "#333333"
      },
      fontFamily: {
        'shantell-sans': ['ShantellSans', 'sans-serif'],
      },
      margin: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}

