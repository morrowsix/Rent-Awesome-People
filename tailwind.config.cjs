const config = {
  content: ["./src/**/*.{html,js,svelte,ts}" , "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {},
    colors: {
      'primary': '#124D5E',
      'secondary': '#40A535',
      'gradient-light': '#228AA8',
      'gradient-dark': '#124D5E',
      'white': '#FFFFFF',
    },
    maxWidth: {
      'container': '1420px',
    }
  },

  plugins: [require('tw-elements/dist/plugin')],
};

module.exports = config;
