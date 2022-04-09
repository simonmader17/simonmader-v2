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
        Graph35: "Graph\\ 35",
      },
      screens: {
        ltmd: { max: "767px" },
        ltlg: { max: "1023px" },
        lt2xl: { max: "1535px" },
      },
      dropShadow: {
        "3xl": "0 25px 25px rgba(0, 0, 0, .3)",
        "4xl": "0 30px 30px rgba(0, 0, 0, .5)",
        pixel: ".5rem .5rem 0 rgba(0, 0, 0, .5)",
        "pixel-sm": ".25rem .25rem 0 rgba(0, 0, 0, .5)",
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
