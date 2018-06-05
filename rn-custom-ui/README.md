# antd-mobile-rn with rn custom ui

## single component

### `version 1.x`:  https://github.com/ant-design/ant-design-mobile/issues/1174

1. import the component origin style of antd-mobile-rn, eg:

   ```js
   import InputItemStyle from 'antd-mobile-rn/lib/input-item/style/index';
   ```
2. find and replace the object key which you want to custom, eg:

   ```js
    const newStyle = {};
    for (const key in InputItemStyle) {
      if (Object.prototype.hasOwnProperty.call(InputItemStyle, key)) {
        newStyle[key] = { ...StyleSheet.flatten(InputItemStyle[key]) };
        if (key === 'input') {
          newStyle[key].fontSize = 15;
        }
      }
    }
   ```
3. pass `newStyle` to component `styles` property, eg:

  ```js
  const MyComponent = () => (
    <InputItem styles={StyleSheet.create(newStyle)} />
  )
  ```


### `version 2.0`: https://github.com/ant-design/ant-design-mobile/pull/1629

1. import the component origin style of antd-mobile-rn, eg:

  ```js
  import InputItemStyle from 'antd-mobile-rn/lib/input-item/style/index.native';
  ```
2. find and replace the object key which you want to custom, eg:

  ```js
  export default {
    ...InputItemStyle,
    input: {
      ...InputItemStyle.input,
      fontSize: 15,
    }
  }
  ```
3. pass `newStyle` to component `styles` property, eg:

  ```js
  const MyComponent = () => (
    <InputItem styles={StyleSheet.create(newStyle)} />
  )
  ```

## custom theme

1. create `theme.js` file in project path, add variables; eg:

  ```
  module.exports = {
    brand_primary: 'red',
    color_link: 'red',
    border_color_base: 'green',
  };
  ```
2. create file `scripts/custom-rn-theme.js` which content is:

  ```js
  const path = require('path');
  const fs = require('fs');
  // for 1.x
  // const defaultVars = require('antd-mobile/lib/style/themes/default');
  // for 2.x
  const defaultVars = require('antd-mobile-rn/lib/style/themes/default.native');
  const customVars = require('../theme');
  // for 1.x
  // const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');
  // for 2.x
  const themePath = path.resolve(require.resolve('antd-mobile-rn'), '../style/themes/default.native.js');
  const themeVars = Object.assign({}, defaultVars, customVars);

  if (fs.statSync(themePath).isFile()) {
    fs.writeFileSync(
      themePath,
      'var brandPrimary = "#108ee9"; var brandPrimaryTap = "#1284d6";module.exports = ' + JSON.stringify(themeVars)
    );
  }
  ```

3. change scripts `start` of `package.json` to :

  ```json
  {
    ...
    "start": "node scripts/custom-rn-theme && node node_modules/react-native/local-cli/cli.js start",
    ...
  }
  ``
