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
        dotted: "url('/public/bg patterns 2.png')",
        dotted4x: "url('/public/bg patterns 4x.png')",
      },
      backgroundColor: {
        customPink: "#FFC9F0",
        matteYellow: "#FFE68C",
        matteBlue: "#9DDCFF",
      },
      borderColor: {
        yellowDark: "#EECD56",
      },
      screens:{
        'mobile-480': '480px',
      }
    },
  },
  plugins: [],
};
