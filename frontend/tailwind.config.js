/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        background: {
          DEFAULT: '#FDFBF7',
          alt: '#F5EFE6',
          paper: '#FFFFFF',
        },
        primary: {
          50: '#FDF3F2',
          100: '#FBE5E4',
          200: '#F6C5C2',
          300: '#EF9894',
          400: '#E6635D',
          500: '#D83A33',
          600: '#C0261F',
          700: '#A01D18',
          800: '#851B17',
          900: '#6F1B18',
          DEFAULT: '#D83A33',
          foreground: '#FFFFFF',
        },
        secondary: {
          50: '#F1F9F5',
          100: '#DFF2E8',
          200: '#C2E4D4',
          300: '#98CEB7',
          400: '#68B095',
          500: '#469278',
          600: '#347660',
          700: '#2B5E4D',
          800: '#264C40',
          900: '#203F36',
          DEFAULT: '#2B5E4D',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FFB703',
          foreground: '#3F2E00',
        },
        neutral: {
          100: '#F5F5F4',
          200: '#E7E5E4',
          500: '#78716C',
          800: '#4A4646',
          900: '#282626',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
