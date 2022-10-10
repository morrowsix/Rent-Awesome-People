const config = {
  content: ["./src/**/*.{html,js,svelte,ts}" , "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {},
    colors: {
      'fontblue': '#124D5E',
    },
    maxWidth: {
      'container': '1420px',
    }
  },

  plugins: [require('tw-elements/dist/plugin')],
};

module.exports = config;
