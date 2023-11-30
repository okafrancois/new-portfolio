/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      cooper: ['Cooper Hewitt', 'sans-serif'],
    },
    extend: {},
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      primary: '#FBCB3B',
      secondary: '#161616',
      tertiary: '#FFF7E9',
    }
  },
  plugins: [],
}