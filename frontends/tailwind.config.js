/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    colors: {
      tahiti: {
        light: "#67e8f9",
        DEFAULT: "#06b6d4",
        dark: "#0e7490",
      },

      backgrd: {
        light: "#FDF0E4",
        DEFAULT: "#FDF0E4",
        dark: "#493604",
      },

      accents: {
        light: "#FFFFFF",
        DEFAULT: "#FFFFFF",
        dark: "#FFFFFF",
      },

      textaccents: {
        light: "#110600",
        DEFAULT: "#110600",
        dark: "#FFEBCC",
      },

      minoraccents: {
        /* light accents */
        light: "#000000",
        DEFAULT: "#000000",
        dark: "#F1F1F1",
      },

      cardbg: {
        light: "#FB9850",
        DEFAULT: "#FB9850",
        dark: "#1C1400",
      },

      borc: {
        light: "#000000",
        DEFAULT: "#FFFFFF",
        dark: "#605602",
      },

      buttonMinor: {
        light: "#FFD789",
        DEFAULT: "#FFD789",
        dark: "#FFD789",
      },
      buttonMajor: {
        light: "#454545",
        DEFAULT: "#454545",
        dark: "#DB8E47",
      },
    },
    extend: {},
  },
  plugins: [],
};
