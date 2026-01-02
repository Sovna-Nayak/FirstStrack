/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2A78",   // Main Blue (Hero, Navbar)
          dark: "#162159",
          light: "#2F3FB3",
        },
        secondary: {
          DEFAULT: "#00A756",  // Green CTA
          dark: "#008F48",
          light: "#3AD28A",
        },
        accent: "#F5A623",     // Optional highlight
        dark: "#0F172A",       // Footer / Dark sections
        muted: "#6B7280",      // Text gray
        surface: "#F8FAFC",    // Section background
      },
    },
  },
  plugins: [],
};
