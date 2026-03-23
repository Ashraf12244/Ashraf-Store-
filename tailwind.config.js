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
          light: '#fb923c',
          DEFAULT: '#f97316', // Amazon Orange
          dark: '#ea580c',
        },
        secondary: '#232f3e', // Amazon Dark Blue
      }
    },
  },
  plugins: [],
}