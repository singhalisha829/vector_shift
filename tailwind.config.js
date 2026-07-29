/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        "primary-80": "#1E293B",
        "primary-70": "#334155",
        secondary: "#F59E0B",
        accent: "#10B981",
        background: "#F3F4F6",
        text: "#CBD5E1",
        label: "#94A3B8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
