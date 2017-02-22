const webpack = require('atool-build/lib/webpack');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');

  const env = process.env.RUN_ENV;

  if (env === 'mobile') {
    const pxtorem = require('postcss-pxtorem');
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
    });
    // */
    webpackConfig.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }));
  } else {
    webpackConfig.babel.plugins.push(['import', {
      libraryName: 'antd',
      style: 'css',
    }]);
  }

  return webpackConfig;
};
