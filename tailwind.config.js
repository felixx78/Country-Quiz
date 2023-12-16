/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#373d6d",
        secondary: "#343963",
      },
      backgroundImage: {
        accent: "linear-gradient(#E65895, #BC6BE8)",
      },
    },
  },
  plugins: [],
};
