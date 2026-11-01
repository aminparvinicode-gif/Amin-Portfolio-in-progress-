/** @type {impo/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/pages/work.html" , "./src/pages/about.html" , "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        headingTextSpace: "27px",
      },
      fontSize: {
        headingDesign: "62px",
        headingDevelop: "51px",
        headingDeploy: "61px",
        headingDeliver: "57px",
      },
      borderColor : {
        darkIndigo : '#09054cff'
      },
      colors: {
        primary: {
          indigo: "#4F46E5",
          darkBlue: "#04090fff",
          lightBlue: "#14203447",
          dark: "#060c18ff",
        },
        background: {
          white: "#FFFFFF",
          light: "#F8FAFC",
          lighter: "#F1F5F9",
          border: "#E2E8F0",
        },
        text: {
          
          darkGray: "#334155",
          gray: "#64748b27",
          white: "#FFFFFF",
          purple: "#8B5CF6",
        },
        accent: {
          design: "#7C3AED",
          develop: "#06B6D4",
          deploy: "#F59E0B",
          number01: "#10B981",
          number02: "#0EA5E9",
          number03: "#8B5CF6",
          marketing: "#EC4899",
          fintech: "#6366F1",
          website: "#22C55E",
        },
        utility: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        softLg: "0 8px 40px rgba(0, 0, 0, 0.06)",
        softXl: "0 12px 60px rgba(0, 0, 0, 0.04)",
        purple: "0 8px 30px rgba(79, 70, 229, 0.25)",
        rateBox : "inset -10px 0px 30px 0px rgba(254, 254, 254, 0.15)",
        purpleLg: "0 12px 50px rgba(79, 70, 229, 0.35)",
        purpleGlow:
          "0 0 40px rgba(79, 70, 229, 0.2), 0 8px 30px rgba(79, 70, 229, 0.3)",
        cyan: "0 8px 30px rgba(6, 182, 212, 0.25)",
        cyanGlow:
          "0 0 40px rgba(6, 182, 212, 0.15), 0 8px 30px rgba(6, 182, 212, 0.2)",
        pink: "0 8px 30px rgba(236, 72, 153, 0.25)",
        elevated:
          "0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.04)",
        elevatedLg:
          "0 30px 80px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.05)",
        card: "0 2px 12px rgba(0, 0, 0, 0.06), 0 4px 24px rgba(0, 0, 0, 0.04)",
        cardHover:
          "0 8px 30px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.04)",
        button: "0 4px 14px rgba(79, 70, 229, 0.3)",
        buttonHover: "0 6px 20px rgba(79, 70, 229, 0.4)",
        neumorph: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
        neumorphInset: "inset 4px 4px 8px #d1d9e6, inset -4px -4px 8px #ffffff",
        glow: "0 0 30px rgba(79, 70, 229, 0.15)",
        glowLg: "0 0 60px rgba(79, 70, 229, 0.2)",
        depth: "0 10px 30px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.05)",
        depthLg:
          "0 20px 50px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.05)",
        float:
          "0 10px 40px rgba(79, 70, 229, 0.2), 0 4px 12px rgba(0, 0, 0, 0.04)",
        floatLg:
          "0 20px 60px rgba(79, 70, 229, 0.25), 0 8px 20px rgba(0, 0, 0, 0.04)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02)",
        glassLg:
          "0 20px 60px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.02)",
        main: {
          soft: "0px 0px 40px rgba(82, 2, 82, 0.197), 0px 0px 20px rgba(29, 29, 29, 0.297)",
          medium:
            "0px 8px 40px rgba(79, 70, 229, 0.25), 0px 0px 20px rgba(82, 2, 82, 0.1)",
          strong:
            "0px 12px 60px rgba(79, 70, 229, 0.35), 0px 0px 30px rgba(82, 2, 82, 0.15)",
        },
      },

      fontFamily: {
        black: ["InterBlack", "sans-serif"],
        extrabold: ["InterExtraBold", "sans-serif"],
        semibold: ["InterSemiBold", "sans-serif"],
        medium: ["InterMedium", "sans-serif"],
        regular: ["InterRegular", "sans-serif"],
        light: ["InterLight", "sans-serif"],
        title: ["InterBlack", "sans-serif"],
        heading: ["InterExtraBold", "sans-serif"],
        subtitle: ["InterSemiBold", "sans-serif"],
        body: ["InterRegular", "sans-serif"],
        caption: ["InterLight", "sans-serif"],
        smalltext: ["LightItalic", "sans-serif"],
        thinItalic : ["thinItalic" , "sans-serif"]
      },

      // ===== انیمیشن‌ها =====
      keyframes: {
        moon: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        floatShadow: {
          "0%": {
            boxShadow:
              "0 20px 60px rgba(79, 70, 229, 0.2), 0 8px 20px rgba(0, 0, 0, 0.04)",
          },
          "50%": {
            boxShadow:
              "0 30px 80px rgba(79, 70, 229, 0.4), 0 15px 40px rgba(0, 0, 0, 0.08)",
          },
          "100%": {
            boxShadow:
              "0 20px 60px rgba(79, 70, 229, 0.2), 0 8px 20px rgba(0, 0, 0, 0.04)",
          },
        },
        colorChange: {
          "0%": {
            backgroundColor : '#4F46E5',
            opacity : '0.5'
          },
          "25%": {
            backgroundColor : '#8B5CF6',
            opacity : '0.5'
          },
          "50%": {
            backgroundColor : '#EC4899',
            opacity : '0.5'
          },
          "75%": {
            backgroundColor : '#06B6D4',
            opacity : '0.5'
          },
          "100%": {
            backgroundColor : '#4F46E5',
            opacity : '0.5'
          },
        },
        verseColorChange: {
          "0%": {
            backgroundColor : '#8B5CF6',
            opacity : '0.5'
          },
          "25%": {
            backgroundColor : '#4F46E5',
            opacity : '0.5'
          },
          "50%": {
            backgroundColor : '#06B6D4',
            opacity : '0.5'
          },
          "75%": {
            backgroundColor : '#EC4899',
            opacity : '0.5'
          },
          "100%": {
            backgroundColor : '#8B5CF6',
            opacity : '0.5'
          },
        },
        justSkew :{
          '0%': {
            transform : 'skewX(0deg)'
          },
          '25%': {
            transform : 'skewX(3deg)'
          },
          '75%':{
            transform : 'skewX(-3deg)'
          },
          '100%': {
            transform : 'skewX(0deg)'
          }

        },
        justSkewVerse :{
          '0%': {
            transform : 'skewX(0deg)'
          },
          '25%': {
            transform : 'skewX(-3deg)'
          },
          '75%':{
            transform : 'skewX(3deg)'
          },
          '100%': {
            transform : 'skewX(0deg)'
          }

        },
      },

      animation: {
        "moon-turn": "moon 0.5s ease forwards",
        "float-shadow": "floatShadow 3s ease-in-out infinite",
        "backgroundColorChange": "colorChange 7s ease infinite",
        "backgroundColorChangeVerse": "verseColorChange 7s ease infinite",
        "boxSkewX": "justSkew 8s ease infinite",
        "boxSkewXverse" : "justSkewVerse 8s ease infinite",
      },
    },
  },
  plugins: [],
};
