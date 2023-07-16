/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          950: "#FB0584",
        },
        gray: {
          950: "#8792A7",
        },
      },
      height: {
        30: "30rem",
        97: "97%",
      },
      maxHeight: {
        48: "48rem",
      },
      backgroundImage: {
        trap_museum: "url('../public/images/trap-museum.jpeg')",
      },
    },
  },
  plugins: [],
};
