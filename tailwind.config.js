/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "768px" },
      laptop: "1018px",
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
