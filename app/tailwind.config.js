module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    { 
      pattern: /(red|green|blue|gray|orange|purple)/,
      variants: ['lg', 'hover', 'focus'],
    }
  ]
}
