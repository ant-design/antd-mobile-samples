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

    ```json
    {
      "presets": ["babel-preset-expo"],
      "plugins": [["import", { "libraryName": "antd-mobile" }]],
      "env": {
        ...
      }
    }
    ```
2. Modify the `App.js` file, import `Button` component from antd-mobile.

  ```js
  ...
  import { Button } from 'antd-mobile';

  ...
  render() {
    return (
      ...
      <Button>antd-mobile button</Button>
      ...
    );
  }
  ```  
