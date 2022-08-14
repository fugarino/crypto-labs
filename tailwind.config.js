/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      serif: ["Garamond", "serif"],
    },
    extend: {
      colors: {
        gray: {
          100: "#E0E0E0",
        },
        darkGray: {
          200: "#F4F4F4",
        },
        menuIcon: {
          100: "#797979",
        },
      },
      spacing: {
        128: "32rem",
      },
      height: {
        100: "34rem",
      },
    },
  },
  plugins: [],
};
