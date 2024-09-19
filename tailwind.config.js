/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightText: "#f0f0f0",
        darkText: "#21202b",
        ux_bg: "#77d1cb",
        ux_pink: "#d177b3",
        ux_rosa: "#c177d1",
        ux_purple: "#8377d1",
        ux_blue: "#77a9d1",
        ux_white: "#f1f0f4",
        ux_grey: "#54506a",
        ux_dark: "#292734",
        ux_whiteHover: "#d4d2dd",
      },
    },
  },
  plugins: [],
};
