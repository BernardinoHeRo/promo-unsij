/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      Garamont: ["EB Garamond"],
    },
    extend: {
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px (tamaño base)
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      colors: {
        unsij_main_0:"#003b1f",
        unsij_main:"#00653b",
        unsij_second:"#067302",
        unsij_third:"#A45E4D",
        unsij_fourth:"#DB0703",
        unsij_fifth:"#c1db5b",
        unsij_sixth:"#00ffff",
        unsij_black:"#000000",
        unsij_white:"#FEFEFE",
        unsij_gray:"#bfbfbf",
      },
    },
  },
  plugins: [],
};
