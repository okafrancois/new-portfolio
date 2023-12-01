/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      cooper: ["Cooper Hewitt", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        xxs: ".625rem",
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      spacing: {
        margin: "4rem",
        gutter: "2rem",
        section: "3rem",
        "section-half": "5rem",
        "section-quarter": "2.5rem",
        5: "1.25rem",
        10: "2.5rem",
        15: "3.75rem",
        20: "5rem",
      },
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      primary: "#161616",
      secondary: "#FBCB3B",
      alternative: "#FFF7E9",
      red: "#FF0000",
    },
  },
  plugins: [],
};