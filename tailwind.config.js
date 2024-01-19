/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#6366f1",
        dark: "#0f172a",
        scndark: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
