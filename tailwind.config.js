/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        primary: "#0B4F8A",
        secondary: "#2FA4E7",
        dark: "#0A2540",
        light: "#F7F9FC",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
