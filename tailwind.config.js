module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        shell: {
          DEFAULT: "#1e1e1e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
