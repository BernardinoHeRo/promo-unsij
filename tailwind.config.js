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
            fontSize: {
                'xs': '.75rem',  // 12px
                'sm': '.875rem', // 14px
                'base': '1rem',  // 16px (tamaño base)
                'lg': '1.125rem',// 18px
                'xl': '1.25rem', // 20px
                '2xl': '1.5rem', // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem', // 36px
                '5xl': '3rem', // 48px
                '6xl': '4rem', // 64px
            },
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

