import type { Config } from "tailwindcss";
import { custom } from "zod";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        fly: "fly 4s ease-in-out infinite",
        flash: "flash 100ms ease-in-out",
        spin: "spin 1s linear infinite"
      },
      keyframes: {
        flash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        fly: {
          "0%, 100%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": {
            transform: "translateX(40px) translateY(-10px) rotate(3deg)"
          },
          "50%": {
            transform: "translateX(40px) translateY(-30px) rotate(-2deg)"
          },
          "75%": {
            transform: "translateX(60px) translateY(-10px) rotate(10deg)"
          }
        }
      },
      boxShadow: {
        custom: "0 0 11px rgba(33, 33, 33, 0.25)",
        headerCustom:
          "0 1px 1px 0 rgba(65, 69, 73, 0.3), 0 1px 3px 1px rgba(65, 69, 73, 0.15)"
      },
      gridTemplateColumns: {
        // Custom responsive grid column setups
        "fill-350": "repeat(auto-fill, minmax(350px, 1fr))",
        "fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
        "fill-250": "repeat(auto-fill, minmax(250px, 1fr))"
      },

      colors: {
        primary: {
          50: "#e0dbec", // very light purple, good for backgrounds or gradient top
          100: "#c4b7d9", // lighter purple, suitable for lighter elements or disabled states
          200: "#a994c6", // clear, clean purple, good for secondary buttons or highlights
          300: "#8d71b3", // medium purple, suitable for hover states
          400: "#7250a1", // deeper purple, ideal for active states or important UI icons
          500: "#57307e", // strong purple, good for primary buttons or active elements
          600: "#421e65", // darker purple, suitable for accents
          700: "#2d164c", // very dark purple, used for text or critical elements
          800: "#1d0f39", // darker, close to your original
          900: "#110d29", // darkest, used for text or background
          950: "#0a0619" // almost black, good for text or overlay backgrounds
        },
        secondary: {
          50: "#EBE6F7", // Very light lavender, great for backgrounds
          100: "#D8CCF0", // Lighter lavender, suitable for hover states or gradients
          200: "#C4B2E9", // Soft lavender, useful for accents
          300: "#B198E2", // Mild lavender, good for actionable items or badges
          400: "#9E7EDB", // Brighter lavender, stands out for buttons or icons
          500: "#15103E", // Moderate lavender, excellent for important components
          600: "#7650CD", // Vibrant lavender, useful for important calls to action
          700: "#6959CC", // Your base color, perfect for primary buttons or links
          800: "#5540B8", // Dark lavender, great for headers or important text
          900: "#4130A4", // Deeper lavender, excellent for text or contrast needs
          950: "#2D208F" // Darkest lavender, ideal for footer or deep background
        },
        warning: {
          50: "#eff8e6", // Very light green
          100: "#def1cc", // Much lighter green
          200: "#cdeab3", // Noticeably lighter green
          300: "#bcE399", // Lighter green
          400: "#abdd80", // Light green
          500: "#9ad667", // Slightly lighter main green
          600: "#8BFC40", // Slightly darker main green
          700: "#78c835", // Less saturated green
          800: "#6ecc33", // Your main green color
          900: "#62b32c", // Dark green
          950: "#568929" // Darker green
        },
        success: {
          50: "#E5FBF6", // Very light teal, great for background highlights
          100: "#CCF7EE", // Light teal for lighter backgrounds or hover states
          200: "#99F0DC", // Lighter teal, good for notifications or accents
          300: "#66E8CB", // Light medium teal, suitable for secondary buttons or icons
          400: "#33E1B9", // Brighter teal, stands out for buttons or active states
          500: "#11CC9B", // Your base teal color, ideal for primary buttons or active elements
          600: "#0FB78D", // Slightly darker, good for hover states on primary elements
          700: "#0DA27E", // Dark teal, used for headers or active states
          800: "#098D6F", // Darker teal, suitable for footers or less emphasized UI
          900: "#077860", // Very dark teal, great for text or critical interactive elements
          950: "#056352" // Darkest teal, used sparingly for ultra-dark modes or contrast
        },
        gray: {
          50: "#f0f1f4", // Very light gray
          100: "#d9dae0", // Much lighter gray
          200: "#c2c4cc", // Significantly lighter gray
          300: "#abaeb8", // Medium light gray
          400: "#9498a4", // Lighter medium gray
          500: "#7d8190", // Neutral medium gray
          600: "#666a7c", // Medium dark gray
          700: "#4f5368", // Darker gray
          800: "#383c54", // Very dark gray
          900: "#212540", // More towards the darkest
          950: "#0C0824" // Darkest gray
        }
      }
    }
  },
  plugins: []
};
export default config;
