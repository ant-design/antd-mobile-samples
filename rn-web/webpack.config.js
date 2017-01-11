// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const pxtorem = require('postcss-pxtorem');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    style: true,  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  /*
  webpackConfig.module.loaders = webpackConfig.module.loaders.filter((loader) => {
    return loader.test.toString().indexOf('.svg') === -1;
  });
  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: require.resolve('svg-sprite-loader'),
  });
  */
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));
  return webpackConfig;
};
