const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const Visualizer = require('webpack-visualizer-plugin');
const LessThemePlugin = require('webpack-less-theme-plugin');
const pkg = require('./package.json');

const webpackConfig = getWebpackConfig(false);

webpackConfig.forEach((config, index) => {
  if (index === 0) {
    config.plugins.push(new Visualizer({
      filename: `../ant-design-analysis/${pkg.name}@${pkg.version}-stats.html`,
    }));
  }
  config.plugins.push(new LessThemePlugin({ theme: './themes/default.less' }));
});

module.exports = webpackConfig;
