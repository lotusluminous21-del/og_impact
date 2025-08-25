/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dark Blue as primary color (Automatix-inspired)
                primary: {
                    50: '#1e3a8a',
                    100: '#1e40af',
                    200: '#1d4ed8',
                    300: '#3b82f6',
                    400: '#60a5fa',
                    500: '#93c5fd',
                    600: '#1e40af', // Main dark blue - primary
                    700: '#1e3a8a',
                    800: '#1e3a8a',
                    900: '#172554',
                    950: '#0f172a',
                },
                // Dark Orange as secondary color (Automatix-inspired)
                secondary: {
                    50: '#7c2d12',
                    100: '#9a3412',
                    200: '#c2410c',
                    300: '#ea580c',
                    400: '#f97316',
                    500: '#fb923c',
                    600: '#ea580c', // Main dark orange - secondary
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                // Much darker backgrounds (Automatix-inspired)
                dark: {
                    50: '#1a1a1a',
                    100: '#0f0f0f',
                    200: '#0a0a0a',
                    300: '#050505',
                    400: '#000000',
                    500: '#000000',
                    600: '#000000',
                    700: '#000000',
                    800: '#000000',
                    900: '#000000', // Main dark background (black)
                    950: '#000000', // Darker background for containers
                },
                // Neutral grays for text (Automatix-inspired)
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
