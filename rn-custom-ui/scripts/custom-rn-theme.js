const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile/lib/style/themes/default');
const customVars = require('../theme');
const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');

const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}
