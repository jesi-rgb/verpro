/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Source Serif Pro"],
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
