module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nav: "Jost",
        body: "Prata",
        title: "Italiana",
      },
      colors: {
        background: "#FBF4F4",
        body: "#1C1B1B",
        title: "#614051",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
