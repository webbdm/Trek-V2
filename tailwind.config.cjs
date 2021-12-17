module.exports = {
  // add this section
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "white",
      panel: "#312F2F",
      primary: "#1F445F",
      primaryt: "rgba(31, 68, 95, 0.84)",
      secondary: "",
      secondaryt: "rgba(31, 68, 95, 0.54)",
      accent: "#FFB81C",
      textcolor: "#e4ebf9",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}