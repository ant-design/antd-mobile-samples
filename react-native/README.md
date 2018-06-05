# antd-mobile-rn react-native demo

```
node4+ npm3+
npm i
react-native run-ios // ios
react-native run-android // android
```

### use antd-mobile-rn in react-native project

1. install dep

  ```bash
  $ npm install antd-mobile-rn --save
  $ npm install babel-plugin-import --save-dev
  ```
2. config `.babelrc`

  ```json
  {"plugins": [["import", { "libraryName": "antd-mobile-rn" }]]}
  ```

### sample code

  ```jsx
  import React, { Component } from 'react';
  import { AppRegistry } from 'react-native';
  import { Button } from 'antd-mobile-rn';

  class HelloWorldApp extends Component {
    render() {
      return <Button>Start</Button>;
    }
  }

  AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
  ```
