module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerFooter: "#282c34",
        body: "#070b2e",
        bodyBright: "#3d2b7a",
        purple: "#3D2B7A",
        blended: "#221B54",
        darkblue: "#070b2e",
      },
      fontFamily: {
        SfPixelate: "SfPixelate",
        PressStart2P: "Press\\ Start\\ 2P",
        FiraCode: "Fira\\ Code",
      },
      screens: {
        ltmd: { max: "767px" },
        ltlg: { max: "1023px" },
        ltxl: { max: "1279px" },
        lt2xl: { max: "1535px" },
      },
      dropShadow: {
        "3xl": "0 0 5rem rgba(0, 0, 0, .3)",
        "4xl": "0 0 6rem rgba(0, 0, 0, .5)",
        pixel: ".5rem .5rem 0 rgba(0, 0, 0, .5)",
        "pixel-sm": ".25rem .25rem 0 rgba(0, 0, 0, .5)",
      },
      keyframes: {
        "fade-in": {
          "0%, 50%": {
            transform: "translateY(5em)",
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s linear",
      },
      cursor: {
        pointer: "url(/images/pointer-hand.svg) 10 5, auto",
      },
    },
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: [],
      colors: {
        default: "#9C92AC",
        purple: "#3D2B7A",
      },
      opacity: {
        default: 0.4,
      },
    }),
  ],
};
