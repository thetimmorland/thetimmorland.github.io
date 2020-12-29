const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false,
  theme: {
    colors: {
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        light: "#F3F4F6",
        DEFAULT: "#6B7280",
        dark: "#1F2937",
      },
      primary: {
        light: "#A5B4FC",
        DEFAULT: "#6366F1",
        dark: "#4338CA",
      },
      secondary: {
        light: "#FCD34D",
        DEFAULT: "#F59E0B",
        dark: "#B45309",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
