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
          DEFAULT: '#F8FCFF',
          alt: '#EBF5FB',
          paper: '#FFFFFF',
        },
        primary: {
          50: '#E8F4FC',
          100: '#D1E9F9',
          200: '#A3D3F3',
          300: '#75BDED',
          400: '#47A7E7',
          500: '#1E8FD9',
          600: '#0B76C2',
          700: '#085D9A',
          800: '#064573',
          900: '#042C4B',
          DEFAULT: '#0B76C2',
          foreground: '#FFFFFF',
        },
        secondary: {
          50: '#E6EEF5',
          100: '#CDDEE9',
          200: '#9BBDD4',
          300: '#699CBE',
          400: '#377BA9',
          500: '#1A5A8A',
          600: '#15486E',
          700: '#103653',
          800: '#0B2437',
          900: '#05121C',
          DEFAULT: '#1A5A8A',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#D4742C',
          foreground: '#FFFFFF',
        },
        neutral: {
          100: '#EBF2F7',
          200: '#D4E2ED',
          500: '#5C7A94',
          800: '#2D4356',
          900: '#1A2B3D',
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
