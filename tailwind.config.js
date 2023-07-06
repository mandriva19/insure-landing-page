/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Serif Display"', "serif"],
        karla: ["Karla", "sans-serif"],
      },

      colors: {
        "dark-violet": "hsl(256, 26%, 20%)",
        "grayish-blue": "hsl(216, 30%, 68%)",
        "very-dark-violet": "hsl(270, 9%, 17%)",
        "dark-grayish-violet": "hsl(273, 4%, 51%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },

      backgroundImage: {
        "mobile-pattern": "url('/images/patterns/bg-pattern-mobile-nav.svg')",
        "mobile-pattern-how-we-work":
          "url('/images/patterns/bg-pattern-how-we-work-mobile.svg')",
        "footer-mobile-pattern":
          "url('/images/patterns/bg-pattern-footer-mobile.svg')",
      },

      screens: {
        "fixed-width": "90rem",
      },
    },
  },
  plugins: [],
};
