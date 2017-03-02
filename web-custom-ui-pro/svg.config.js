'use strict';

const path = require('path');

// 1. 如需添加私有图标，可在如下的 svgDirs 数组中加入本地 svg 文件路径
let svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),
];

module.exports = function (config, includeDemo) {
  svgDirs = svgDirs.concat([
    path.resolve(__dirname, 'components/icon/style/assets/'),
    path.resolve(__dirname, 'components/notice-bar/style/assets/'),
    path.resolve(__dirname, 'components/toast/style/assets/'),
  ]);
  if (includeDemo) {
    svgDirs = svgDirs.concat([
      path.resolve(__dirname, 'components/steps/demo/'),
      path.resolve(__dirname, 'components/icon/demo/'),
      path.resolve(__dirname, 'components/popover/demo/'),
      path.resolve(__dirname, 'components/action-sheet/demo/'),
      path.resolve(__dirname, 'components/result/demo/'),
    ]);
  }
  // exclude the default svg-url-loader from atool-build https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L161
  config.module.loaders.forEach(loader => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
      loader.exclude = svgDirs;
    }
  });
  // Note: https://github.com/kisenka/svg-sprite-loader/issues/4
  // Can not process SVG files twice
  if (config.module.loaders[0].loader !== 'svg-sprite') {
    config.module.loaders.unshift({
      test: /\.(svg)$/i,
      loader: 'svg-sprite',
      include: svgDirs,
    });
  }
};
