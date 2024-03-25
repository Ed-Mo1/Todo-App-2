/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-midnight-blue": "#15101C",
        "light-purple": "#9E78CF",
        "dark-purple": "#3E1671",
        black: "#0D0714",
        gray: "#777777",
        "light-sea-green": "#78CFB0",
      },
    },
  },
  plugins: [],
};
