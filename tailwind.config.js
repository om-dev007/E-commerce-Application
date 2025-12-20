/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
    extend: {
        fontFamily: {
            playfair: ['Playfair Display', 'serif'],
            body: ['Inter', 'sans-serif'],
        },
        keyframes: {
            "toast-in": {
                "0%": {
                    opacity: "0",
                    transform: "translateX(40px) scale(0.9) rotateX(15deg)",
                },
                "60%": {
                    opacity: "1",
                    transform: "translateX(-5px) scale(1.03) rotateX(0deg)",
                },
                "100%": {
                    opacity: "1",
                    transform: "translateX(0) scale(1)",
                },
            },

            "toast-out": {
                "0%": {
                    opacity: "1",
                    transform: "translateX(0)",
                },
                "100%": {
                    opacity: "0",
                    transform: "translateX(40px)",
                },
            },
        },

        animation: {
            "toast-in": "toast-in 0.5s ease forwards",
            "toast-out": "toast-out 0.4s ease forwards",
        },
    },
};
export const plugins = [];
