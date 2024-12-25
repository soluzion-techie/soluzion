/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
        slideOut: "slideOut 0.5s ease-in forwards",
      },
    },
  },
  plugins: [],
};
