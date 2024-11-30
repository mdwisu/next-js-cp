/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.jsx", "./components/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
