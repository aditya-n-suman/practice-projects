/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0866ff",
        secondary: "#42b72a"
      },
      boxShadow: {
        default: "0 0 0 2px #e7f3ff"
      },
      fontSize: {
        '2.75xl': '28px'
      }
    }
  },
  plugins: []
};
