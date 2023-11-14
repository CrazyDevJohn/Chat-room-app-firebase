/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43C651",
        primaryBold: "#056526",
        primaryText: "#555",
      },
    },
  },
  plugins: [],
};
