/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'Garamont': ["EB Garamond"],
        },
        extend: {
            colors: {
                unsij_fisrt: "#003b1D",
                unsij_secod: "#034B26",
                unsij_third: "#609084",
                unsij_fourth: "#d5cec7",
                unsij_fifth: "#a07634",
                unsij_sixth: "#b5241f",
                unsij_black: "#0D0D0D",
                unsij_white: "#FFFFFF",
            }
        },
    },
    plugins: [],
}

