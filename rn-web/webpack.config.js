// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const pxtorem = require('postcss-pxtorem');
const path = require('path');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    style: true,  // if true, use less
    libraryName: 'antd-mobile',
  }]);
  // /*
  webpackConfig.module.loaders = webpackConfig.module.loaders.filter((loader) => {
    return loader.test.toString().indexOf('.svg') === -1;
  });
  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: require.resolve('svg-sprite-loader'),
    include: [
      require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
      path.resolve(__dirname, './svg/'),  // 2. 自己私人的 svg 存放目录
    ]
  });
  // */
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));
  return webpackConfig;
};
