const path = require('path');
const commonConfig = require('../ant-design-mobile/site/bisheng.site.config');

module.exports = Object.assign({}, commonConfig, {
  theme: './ant-design-mobile/site/theme',
  webpackConfig(config) {
    config.module.noParse = [/moment.js/];
    config.resolve.alias = {
      'antd_custom_ui': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    config.babel.plugins.push([
      require.resolve('babel-plugin-import'),
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
});
