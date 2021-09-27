module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}', './public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
      objectPosition: {
        center: "center",
      },
    },
  },
  plugins: [],
};
