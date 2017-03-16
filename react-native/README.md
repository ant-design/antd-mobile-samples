# antd-mobile react-native demo

```
node4+ npm3+

npm i react-native-cli -g
npm i
npm start

react-native run-ios // ios

react-native run-android // android
```

### use antd-mobile in react-native project

1. install dep

  ```bash
  $ npm install antd-mobile --save
  $ npm install babel-plugin-import --save-dev
  ```
2. config `.babelrc`

  ```json
  {"plugins": [["import", { "libraryName": "antd-mobile" }]]}
  ```

### sample code

  ```jsx
  import React, { Component } from 'react';
  import { AppRegistry } from 'react-native';
  import { Button } from 'antd-mobile';

  class HelloWorldApp extends Component {
    render() {
      return <Button>Start</Button>;
    }
  }

  AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
  ```
