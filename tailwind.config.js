/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      cooper: ["Cooper Hewitt", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      wd: "1280px",
      xw: "1536px",
    },
    extend: {
      fontSize: {
        xs: "0.5rem",
        sm: "0.75rem",
        base: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      spacing: {
        "margin-sm": "1.5rem",
        "margin-base": "2rem",
        "margin-md": "3rem",
        "margin-lg": "4rem",
        "margin-wd": "5rem",
        "margin-xd": "6rem",
        gutter: "2.5rem",
        section: "3rem",
        "section-half": "5rem",
        "section-quarter": "2.5rem",
        5: "1.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.50rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.50rem",
        19: "4.75rem",
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
  plugins: [
    function ({ addVariant, e }) {
      addVariant("nth-child-even", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(
            `nth-child-even${separator}${className}`,
          )}:nth-child(even)`;
        });
      });
    },
  ],
};