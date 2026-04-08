import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        dark: {
          DEFAULT: "#0a0a1a",
          card:    "#0f0f24",
          nav:     "#07071a",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee":     "marquee 30s linear infinite",
        "marquee2":    "marquee2 30s linear infinite",
        "float":       "float 4s ease-in-out infinite",
        "spin-slow":   "spin 12s linear infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%":   { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-16px)" },
        },
      },
      backgroundImage: {
        "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":     "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #fff 100%)",
        "dark-gradient":     "linear-gradient(135deg, #0a0a1a 0%, #130d2e 100%)",
        "card-gradient":     "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(139,92,246,0.04) 100%)",
        "purple-glow":       "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
