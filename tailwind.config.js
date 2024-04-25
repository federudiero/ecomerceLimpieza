module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
      },
    },
  },
  variants: {
    extend: {
     
    },
  },
  // Habilita el modo oscuro basado en clases
  plugins: [
    require('daisyui')
  ],
};
