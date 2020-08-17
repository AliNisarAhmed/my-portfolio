module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '60px calc(100vh - 60px)'
      }
    },
  },
  variants: {},
  plugins: [],
}
