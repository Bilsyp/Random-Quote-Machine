/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0,0,0,0.6)",
      },
      fontFamily: {
        poppis: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
