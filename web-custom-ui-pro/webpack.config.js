const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');

module.exports = function (webpackConfig) {
  webpackConfig = getWebpackConfig(webpackConfig, true);
  if (!Array.isArray(webpackConfig)) {
    webpackConfig = [webpackConfig, webpackConfig];
  }
  return webpackConfig;
};
