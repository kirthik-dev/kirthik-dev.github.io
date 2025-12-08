/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    base: 'var(--bg-primary)',      // Main background
                    inverted: 'var(--text-primary)', // Main text (usually opposite of bg)
                    primary: 'var(--accent-primary)',
                    secondary: 'var(--accent-secondary)',
                    surface: 'var(--bg-surface)',
                    muted: 'var(--text-secondary)',
                    border: 'var(--border-color)',
                    overlay: 'rgba(var(--overlay-color), var(--overlay-opacity))', // Dynamic overlay

                    // Legacy/Direct mappings if needed, but preferable to use semantic names above
                    light: 'var(--bg-primary)',
                    dark: 'var(--text-primary)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
