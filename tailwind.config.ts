import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "#F5F5F5",
                foreground: "#141414",
                primary: {
                    DEFAULT: "#12172B",
                    foreground: "#F5F5F5",
                },
                secondary: {
                    DEFAULT: "#D5D5D7",
                    foreground: "#141414",
                },
                accent: {
                    DEFAULT: "#CC8F00",
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F5F5F5",
                    foreground: "#737373",
                },
                card: {
                    DEFAULT: "#FFFFFF",
                    foreground: "#141414",
                },
                border: "#D5D5D7",
                input: "#D5D5D7",
                ring: "#12172B",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
