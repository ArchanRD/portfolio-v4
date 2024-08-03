/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalSans: ["General Sans", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        handlee: ["Handlee", "sans-serif"],
      },
      backgroundImage: {
        dot: "url('/public/bg patterns cropped 2.png')",
      },
      backgroundSize: {
        "5": "10px"
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
