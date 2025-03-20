module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors
        fg: "#fbf1c7",
        gray: "#a89984",
        primary: "#282828",
        secondary: "#3c3836",
        accent: "#fb4934",
        // active: "#83a598",
        active: "#b8bb26",
        // Icon colors
        brave: "#FE3516",
        gmail: "#DC4234",
        linkedin: "#0274B3",
        github: "#525252",
      },
      fontFamily: {
        SfPixelate: "SfPixelate",
        PressStart2P: "Press\\ Start\\ 2P",
        FiraCode: "Fira\\ Code",
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
        "3xl": "0 0 5rem rgba(0, 0, 0, .3)",
        "4xl": "0 0 6rem rgba(0, 0, 0, .5)",
        pixel: ".5rem .5rem 0 rgb(from #221811 r g b / 50%)",
        "pixel-sm": ".25rem .25rem 0 rgb(from #221811 r g b / 50%)",
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
        primary: "#3c3836",
        secondary: "#504945",
        default: "#5f4330",
        purple: "#9d6e4e",
      },
      opacity: {
        default: 0.4,
      },
    }),
    require("tailwindcss-animation-delay"),
  ],
};
