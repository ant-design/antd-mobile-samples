# antd-mobile with rn custom ui

### single component

doing...

### custom theme

1. create `theme.js` file in project path, add variables; eg:

  ```
  module.exports = {
    brand_primary: 'red',
    color_link: 'red',
    border_color_base: 'green',
  };
  ```

2. run `node scripts/custom-rn-theme.js` before you start server; eg:

  `node scripts/custom-rn-theme.js && node_modules/react-native/local-cli/cli.js start  `
