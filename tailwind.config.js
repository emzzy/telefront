/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "tele-blue": {
          DEFAULT: "#259cd3",
          light: "#4db3e0",
          lighter: "#bbccdc",
          dark: "#1d7ba8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
