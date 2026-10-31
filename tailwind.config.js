/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        arabic: ["Cairo", "sans-serif"],
      },
      colors: {
        ink: "#172033",
        muted: "#667085",
        violet: "#7557e8",
        lilac: "#eeeaff",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(32, 40, 70, .08)",
      },
    },
  },
  plugins: [],
};