/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        scroll: "scroll var(--t) linear infinite",
        scroll2: "scroll2 var(--t) linear infinite",
      },
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
