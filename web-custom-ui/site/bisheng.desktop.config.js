const path = require('path');
const commonConfig = require('./bisheng.common.config');

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  /* eslint-disable consistent-return */
  return (markdownData) => {
    const filename = markdownData.meta.filename;
    if (tester.test(filename) && !/\.en-US\.md/.test(filename)) {
      return {
        meta: markdownData.meta,
      };
    }
  };
  /* eslint-enable consistent-return */
}

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: {
    components: './components',
    docs: './docs',
    CHANGELOG: 'CHANGELOG.md',
  },
  theme: './site/desktop/src',
  htmlTemplate: path.join(__dirname, './desktop/src/static/template.html'),
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    return config;
  },
});
