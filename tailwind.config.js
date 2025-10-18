/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'redx': "#FF4C4C",
        "brand-blue": {
          default: "#259cd3",
          100: "#259cd3",
          200: "#4db3e0",
          300: "#1d7ba8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
