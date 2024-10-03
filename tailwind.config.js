/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Serif 4 Variable"'],
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
