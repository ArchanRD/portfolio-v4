/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        handlee: ["Handlee", "sans-serif"],
      },
      backgroundImage: {
        dotted: "url('/public/bg patterns.png')",
      },
      backgroundColor: {
        matteYellow: "#FFE68C",
      },
      borderColor: {
        yellowDark: "#EECD56",
      },
    },
  },
  plugins: [],
};
