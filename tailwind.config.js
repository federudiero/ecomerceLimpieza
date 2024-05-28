module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '200': '200px',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
