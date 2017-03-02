const path = require('path');
const configSvg = require('../svg.config');

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
      'antd_custom_ui/lib': path.join(process.cwd(), 'components'),
      'antd_custom_ui': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    config.babel.plugins.push([
      'babel-plugin-transform-runtime',
      {
        polyfill: false,
        regenerator: true,
      },
    ], [
      'import',
      [{
        style: true,
        libraryName: 'antd_custom_ui',
        libraryDirectory: 'components',
      },
      {
        style: true,
        libraryName: 'antd-mobile',
        libraryDirectory: 'lib',
      }],
    ]);
    return config;
  },
};
