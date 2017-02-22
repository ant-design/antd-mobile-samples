const path = require('path');
const pxtorem = require('postcss-pxtorem');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/kitchen/src',
  htmlTemplate: path.join(__dirname, './kitchen/src/static/template.html'),
  themeConfig: {
    siteTitle: 'Ant Design Mobile',
    siteSubTitle: '支付宝移动端组件库',
    indexDemos: [], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
    hashSpliter: '-demo-', // URL 中记录到 hash 里的特殊标记
    cateChinese: {
      'Basic Components': '基础组件',
    },
    categoryOrder: {
      'Basic Components': 0,
    },
  },
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);

    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
      // selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/], // does't exist these class now.
    }));

    return config;
  },

});
