/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                remage: {
                    navy: '#0f172a',
                    blue: '#1e3a8a',
                    green: '#10b981',
                    gold: '#fbbf24',
                    light: '#f8fafc',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}