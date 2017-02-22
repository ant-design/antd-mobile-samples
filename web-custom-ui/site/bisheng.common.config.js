const path = require('path');
const configSvg = require('../svg.config');
var a = require.resolve('antd-mobile').replace('/lib/warn.js', '/');
console.log(a);
module.exports = {
  webpackConfig(config) {
    configSvg(config, true);
    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };
    config.module.noParse = [/moment.js/];

    config.resolve.alias = {
      'antd-mobile': a,
      antd_custom_ui: process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    return config;
  },
};
