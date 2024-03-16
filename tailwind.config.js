/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black100: '#0b0b0b',
        blue100: '#0042BD',
        white100: '#f8f8f8',
      },
    },
    fontFamily: {
      sans: ['Circular Spotify Text Medium', 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      custom: ['Circular Spotify Text Book'],
      light: ['Circular Spotify Text Light'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
