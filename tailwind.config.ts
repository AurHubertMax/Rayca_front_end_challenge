import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        /* Common colors */
        background: "hsl(var(--background))",
        second: "hsl(var(--secondary-background))",
        separator: "hsl(var(--separator))",

        textMain: "hsl(var(--text-main))",
        textMuted: "hsl(var(--text-muted))",
        textSemiMuted: "hsl(var(--text-semi-muted))",
        textGreen: "hsl(var(--text-green))",

        ring: "hsl(var(--ring))",
        
        foreground: "hsl(var(--foreground))",
        
        /* settings colors */
        iconbg: "hsl(var(--icon-background))",

        /* Button colors */
        buttonbg: "hsl(var(--button-background))",
        buttonborder: "hsl(var(--button-border))",
        buttonSecondarybg: "hsl(var(--button-secondary-background))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",

        /* Progress colors */
        progressbg: "hsl(var(--progress-background))",
        progressfg: "hsl(var(--progress-foreground))",

        /* switch colors */
        switchCheckedbg: "hsl(var(--switch-checked-background))",
        switchUncheckedbg: "hsl(var(--switch-unchecked-background))",
        switchThumbbg: "hsl(var(--switch-thumb-background))",

        /* circular progress colors */
        cprogressIndicator: "hsl(var(--circular-progress-indicator))",
        cprogressTrack: "hsl(var(--circular-progress-track))",

        /* untitled item colors */
        uitembg: "hsl(var(--untitled-item-background))",
        uitemCircle1: "hsl(var(--untitled-item-circle1))",
        uitemCircle2: "hsl(var(--untitled-item-circle2))",
        

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config