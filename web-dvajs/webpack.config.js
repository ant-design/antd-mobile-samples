const webpack = require('atool-build/lib/webpack');
const pxtorem = require('postcss-pxtorem');
const path = require('path');

module.exports = function(webpackConfig, env) {
  webpackConfig.babel.plugins.push('transform-runtime');

  // Support hmr
  if (env === 'development') {
    webpackConfig.devtool = '#eval';
    webpackConfig.babel.plugins.push('dva-hmr');
  } else {
    webpackConfig.babel.plugins.push('dev-expression');
    webpackConfig.externals = {
      // Use external version of React
      "react": "React",
      "react-dom": "ReactDOM"
    };
  }

  // Don't extract common.js and common.css
  webpackConfig.plugins = webpackConfig.plugins.filter(function(plugin) {
    return !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
  });

  // Support CSS Modules
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.less$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.css$/;
    }
    if (loader.test.toString() === '/\\.module\\.css$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.css$/;
    }
  });

  // 引入 babel-plugin-import
  webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
  // 引入高清方案
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));

  // 1. 如需添加私有图标，可在如下的 svgDirs 数组中加入本地 svg 文件路径
  const svgDirs = [
    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 自己私人的 svg 存放目录
  ];

  // 2. 把属于 antd-mobile 内置 svg 文件也加入进来
  const antdDir = require.resolve('antd-mobile').replace(/warn\.js$/, '');
  svgDirs.push(antdDir);

  // exclude the default svg-url-loader from
  // atool-build https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L161
  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
      loader.exclude = svgDirs;
    }
  });
  // Note: https://github.com/kisenka/svg-sprite-loader/issues/4
  // Can not process SVG files twice. You need to make sure of it yourself.
  webpackConfig.module.loaders.unshift({
    test: /\.(svg)$/i,
    loader: 'svg-sprite',
    include: svgDirs,
  });

  return webpackConfig;
};
