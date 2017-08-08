# antd-mobile with rn custom ui

### single component

- `version 1.x`:  https://github.com/ant-design/ant-design-mobile/issues/1174

- `version 2.0`: https://github.com/ant-design/ant-design-mobile/pull/1629


### custom theme

1. create `theme.js` file in project path, add variables; eg:

  ```
  module.exports = {
    brand_primary: 'red',
    color_link: 'red',
    border_color_base: 'green',
  };
  ```

2. open one terminal, run `npm start`, then open another terminal, run `npm run ios`
