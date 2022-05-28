const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      //Font
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans], 
      },
      //Tamanys de fonts
      fontSize: { 
        'h1': '2rem',
        'h2': '1.6rem',
        'h3': '1.4rem',
        'h4': '1.2rem',
      },
      //Colors
      colors: {
        'active': 'rgb(245 158 11)',
        'hover': 'rgb(245 158 11)', 
        'box-home': 'rgb(245 158 11)', 
      },

      //Mesures responsive
      width: {
        '85vw': '85vw', //contenedor principal
        '350px': '350px', //menu
        '220px': '220px', //logo
        '200px': '200px', //logo footer
      },

      boxShadow: {
        'sm': '0 2px 5px rgb(20, 20, 20)',
        'sh': '0 2px 5px rgb(50, 50, 50)',
      },
      
      //mesures pantalla fons index
      gridTemplateRows: {
        'md': 'auto 0px 150px auto', //desktop
        'sm': 'auto auto 30px auto', //responsive
      },
       //background imatge
       backgroundImage: {
        'home-image': "url('../images/grid.jpg')",
      },
    },
  },
  plugins: [],
}
