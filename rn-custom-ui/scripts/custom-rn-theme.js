const path = require('path');
const fs = require('fs');

const defaultVars = require('antd-mobile-rn/lib/style/themes/default.native');
const customVars = require('../theme');
const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js');

const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
  );
}
