/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#ECF9FE',
        'dark-blue': '#0BA8E0',
      }
    },
  },
  plugins: [],
}