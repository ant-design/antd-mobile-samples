# antd-mobile with rn custom ui

## single component

### `version 1.x`:  https://github.com/ant-design/ant-design-mobile/issues/1174

1. import the component origin style of antd-mobile, eg:

   ```js
   import InputItemStyle from 'antd-mobile/lib/input-item/style/index';
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

1. import the component origin style of antd-mobile, eg:

  ```js
  import InputItemStyle from 'antd-mobile/lib/input-item/style/index.native';
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

2. open one terminal, run `npm start`, then open another terminal, run `npm run ios`
