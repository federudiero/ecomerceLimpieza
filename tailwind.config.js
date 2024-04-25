module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff',
          // Agrega más colores oscuros si es necesario
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  plugins: [
    require('daisyui')
  ],
};
