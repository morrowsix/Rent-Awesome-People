const config = {
  content: ["./src/**/*.{html,js,svelte,ts}" , "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Signika', 'sans-serif']
      },
      lineHeight: {
        'lg': '79px',
        'md': '50px',
        'sm': '30px',
      }
    },
    colors: {
      'primary': '#124D5E',
      'secondary': '#40A535',
      'gradient-light': '#228AA8',
      'gradient-dark': '#124D5E',
      'white': '#FFFFFF',
    },
    maxWidth: {
      'container': '1420px',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
    }
  },

  plugins: [require('tw-elements/dist/plugin')],
};

module.exports = config;
