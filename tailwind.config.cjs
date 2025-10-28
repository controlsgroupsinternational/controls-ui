/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  important: true,
  content: [
    './src/**/*.{ts,tsx}',
    './index.ts'
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "250px minmax(0,1fr)",
        "sidebar-collapsed": "106px auto",
      },
      screens: {
        lg: "1040px",
      },
      backgroundColor: {
        main: "var(--background)",
        "main-hover": "hsl(var(--background-hover) / 68%)",
        stepper: "var(--background-stepper)",
      },
      borderColor: {
        dark: "hsl(var(--border))",
      },
      colors: {
        "primary-gray": "#64748B",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        brand: {
          text: {
            DEFAULT: "hsl(var(--primary-brand-text))",
          },
          primary: {
            DEFAULT: "var(--primary-brand)",
            lighter: "var(--primary-brand-lighter)",
            opaque: "hsl(var(--primary-brand-opaque))",
          },
          secondary: {
            DEFAULT: "var(--secondary-brand)",
            opaque: "hsl(var(--secondary-brand-opaque))",
          },
          sidebar: {
            background: 'var(--sidebar-background)',
            text: 'var(--sidebar-text)',
            textAccent: 'var(--sidebar-text-accent)',
            iconsHover: 'var(--sidebar-icons-hover)'
          }
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require('tailwindcss-animate')]
}
