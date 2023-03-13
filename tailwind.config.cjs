/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#7ABAF2",
        "primary-300": "#4192D9",
        "primary-500": "#0074D9",
        "secondary-400": "#f8d1ad",
        "secondary-500": "#f2b27a",
      },

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },

  plugins: [],
  darkMode: "class",
};
