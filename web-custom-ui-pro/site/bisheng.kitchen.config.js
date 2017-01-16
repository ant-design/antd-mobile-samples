const path = require('path');
const pxtorem = require('postcss-pxtorem');
const commonConfig = require('../ant-design-mobile/site/bisheng.kitchen.config');
const configSvg = require('../svg.config');

module.exports = Object.assign({}, commonConfig, {
  theme: './ant-design-mobile/site/mobile',
  webpackConfig(config) {
    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
      selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/],
    }));

    configSvg(config, true);

    config.module.noParse = [/moment.js/];
    config.resolve.alias = {
      'antd_custom_ui': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    // 修改extensions
    config.resolve.extensions = ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'];

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
