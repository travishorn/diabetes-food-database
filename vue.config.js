const WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackAutoInject(),
    ],
  },
};
