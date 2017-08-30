# antd-mobile React-Native app for expo

## How to use `antd-mobile` with create-react-native-app

### Install and Initialization

We need to install the appropriate tools first, you may need install [yarn](https://github.com/yarnpkg/yarn/) too.

```bash
$ npm install -g yarn
$ npm install -g create-react-native-app
```

Then we create a new project named antm-demo.

```bash
$ create-react-native-app antm-demo
```

The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.

Then we go inside antm-demo and start it.

```bash
$ cd antm-demo
$ yarn start
```

Run `npm run ios` in terminal, it should be ok if you can see the page content in simulator.

### Import antd-mobile

First we install antd-mobile and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

  ```bash
  $ yarn add antd-mobile
  $ yarn add babel-plugin-import --dev
  ```

1. Modify the `.babelrc` config, then restart the service.
  
  ```
  --- a/.babelrc
  +++ b/.babelrc
  @@ -1,5 +1,6 @@
   {
     "presets": ["babel-preset-expo"],
  +  "plugins": [["import", { "libraryName": "antd-mobile" }]],
     "env": {
       "development": {
         "plugins": ["transform-react-jsx-source"]
  ```
    
2. Modify the App.js file, import Button component from antd-mobile.

  ```
  --- a/App.js
  +++ b/App.js
  @@ -1,5 +1,7 @@
   import React from 'react';
   import { StyleSheet, Text, View } from 'react-native';
  +import { Button } from 'antd-mobile';
  +

   export default class App extends React.Component {
     render() {
  @@ -8,6 +10,7 @@ export default class App extends React.Component {
           <Text>Open up App.js to start working on your app!</Text>
           <Text>Changes you make will automatically reload.</Text>
           <Text>Shake your phone to open the developer menu.</Text>
  +        <Button>antd-mobile button</Button>
         </View>
       );
     }
  ```