module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors
        fg: "#FBF1C7",
        fg1: "#EBDBB2",
        fg2: "#D5C4A1",
        fg3: "#BDAE93",
        gray: "#A89984",
        primary: "#282828",
        secondary: "#3C3836",
        accent: "#FB4934",
        red2: "#CC241D",
        // active: "#83A598",
        active: "#B8BB26",
        // Icon colors
        brave: "#FE3516",
        gmail: "#DC4234",
        linkedin: "#0274B3",
        github: "#525252",
        gnuprivacyguard: "#0093DD",
        signal: "#2592E9",
      },
      fontFamily: {
        SfPixelate: "SfPixelate",
        PressStart2P: "Press\\ Start\\ 2P",
        DepartureMono: "Departure\\ Mono",
      },
      screens: {
        xs: "400px",
        ltxs: { max: "399px" },
        ltsm: { max: "639px" },
        ltmd: { max: "767px" },
        ltlg: { max: "1023px" },
        ltxl: { max: "1279px" },
        lt2xl: { max: "1535px" },
      },
      dropShadow: {
        "3xl": "0 0 5rem rgb(from #1d2021 r g b / 80%)",
        pixel: ".5rem .5rem 0 rgb(from #1d2021 r g b / 60%)",
        "pixel-sm": ".25rem .25rem 0 rgb(from #1d2021 r g b / 60%)",
      },
      keyframes: {
        "fade-in": {
          "0%, 50%": {
            transform: "translateY(5em)",
            opacity: 0,
          },
        },
        slide: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(-3840px, 0, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s linear",
        slide: "slide 60s linear infinite",
      },
      cursor: {
        pointer: "url(/images/pointer-hand.svg) 10 0, auto",
      },
    },
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: [],
      colors: {
        primary: "#3C3836",
        secondary: "#504945",
        default: "#5F4330",
        purple: "#9D6E4E",
      },
      opacity: {
        default: 0.4,
      },
    }),
    require("tailwindcss-animation-delay"),
  ],
};
